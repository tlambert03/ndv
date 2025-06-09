"""Planning layer for data slicing operations.

This module implements the planning phase of the NDV data pipeline:
User intent → SlicePlan → Worker → Response (generation-tagged) → View

The SlicePlanner is a pure function that takes the current display model state
and data wrapper, and produces an immutable SlicePlan containing all information
needed to slice the data. This separation allows:

1. Pure, testable planning logic
2. Deterministic async operations with generation tracking
3. Clean separation of "what to slice" from "how to slice it"
4. Better error handling and validation
"""

from __future__ import annotations

import sys
from dataclasses import dataclass, field
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from collections.abc import Mapping

    from ndv._types import AxisKey, ChannelKey
    from ndv.models import ArrayDisplayModel, ChannelMode, DataWrapper
    from ndv.models._reducer import ReducerType

__all__ = ["SlicePlan", "SlicePlanner"]

SLOTS = {"slots": True} if sys.version_info >= (3, 10) else {}


@dataclass(frozen=True, **SLOTS)
class SlicePlan:
    """Immutable plan for slicing data.

    Contains all information needed to slice data and process the result.
    This is a pure data structure with no side effects.
    """

    # Core slicing information
    wrapper: DataWrapper = field(repr=False)
    index: Mapping[int, int | slice]
    visible_axes: tuple[int, ...]
    channel_axis: int | None
    channel_mode: ChannelMode

    # Generation for stale response detection (Phase 3)
    generation: int = 0

    # Reducer information for dimensional reduction
    reducers: Mapping[int, ReducerType] = field(default_factory=dict)

    # Derived/cached information to optimize processing
    transpose_order: tuple[int, ...] = field(init=False)
    expected_channels: tuple[ChannelKey | None, ...] = field(init=False)
    
    # Effective parameters after reducer application
    effective_transpose_order: tuple[int, ...] = field(init=False)
    effective_channel_axis: int | None = field(init=False)

    def __post_init__(self) -> None:
        """Compute derived fields after initialization."""
        # Compute transpose order for efficient processing
        vis_ax = self.visible_axes
        sizes = self.wrapper.sizes()
        ndims = len(sizes)
        other_axes = tuple(i for i in range(ndims) if i not in vis_ax)
        transpose_order = vis_ax + other_axes
        object.__setattr__(self, "transpose_order", transpose_order)

        # Calculate which axes will be removed by integer slicing
        removed_axes = set()
        for axis, index_val in self.index.items():
            if isinstance(index_val, int):
                removed_axes.add(axis)

        # Calculate effective parameters after integer slicing
        # Create mapping from old axis numbers to new axis numbers
        axis_mapping = {}
        new_axis = 0
        for old_axis in range(ndims):
            if old_axis not in removed_axes:
                axis_mapping[old_axis] = new_axis
                new_axis += 1

        # Calculate effective transpose order (only axes that remain)
        effective_transpose_order = tuple(
            axis_mapping[ax] for ax in transpose_order
            if ax not in removed_axes
        )

        # Calculate effective channel axis
        if (self.channel_axis is not None and
                self.channel_axis not in removed_axes):
            effective_channel_axis = axis_mapping[self.channel_axis]
        else:
            effective_channel_axis = None

        # Apply reducers to further adjust effective parameters
        if self.reducers:
            # Calculate which axes will be reduced (not in visible_axes
            # and not channel_axis, and not already removed by slicing)
            reducer_axes = set()
            for axis in range(ndims):
                if (axis not in vis_ax and
                    axis != self.channel_axis and
                    axis in self.reducers and
                    axis not in removed_axes):
                    reducer_axes.add(axis)

            # Apply reducer axis reductions to the effective parameters
            if reducer_axes:
                # Convert reducer axes to effective axes
                effective_reducer_axes = {
                    axis_mapping[ax] for ax in reducer_axes
                    if ax in axis_mapping
                }

                # Create new mapping after reducer application
                final_axis_mapping = {}
                final_axis = 0
                for eff_axis in range(len(axis_mapping)):
                    if eff_axis not in effective_reducer_axes:
                        final_axis_mapping[eff_axis] = final_axis
                        final_axis += 1

                # Update effective transpose order after reducers
                effective_transpose_order = tuple(
                    final_axis_mapping[ax] for ax in effective_transpose_order
                    if ax not in effective_reducer_axes
                )

                # Update effective channel axis after reducers
                if (effective_channel_axis is not None and
                        effective_channel_axis not in effective_reducer_axes):
                    effective_channel_axis = final_axis_mapping[
                        effective_channel_axis
                    ]
                else:
                    effective_channel_axis = None

        object.__setattr__(
            self, "effective_transpose_order", effective_transpose_order
        )
        object.__setattr__(self, "effective_channel_axis", effective_channel_axis)

        # Determine expected channel keys
        if self.channel_mode.name == "RGBA":
            expected_channels: tuple[ChannelKey | None, ...] = ("RGB",)
        elif self.channel_axis is None:
            expected_channels = (None,)
        else:
            # For composite/color modes, determine number of channels
            # Get the size of the channel axis from the sizes mapping
            sizes_list = list(sizes.values())
            if self.channel_axis < len(sizes_list):
                ch_size = sizes_list[self.channel_axis]
                expected_channels = tuple(range(ch_size))
            else:
                expected_channels = (None,)
        object.__setattr__(self, "expected_channels", expected_channels)


class SlicePlanner:
    """Pure planner that creates SlicePlan from display model + data wrapper.

    This class contains no state and performs no side effects. All methods
    are pure functions that derive slicing plans from input parameters.
    """

    @staticmethod
    def create_plan(
        display_model: ArrayDisplayModel,
        data_wrapper: DataWrapper,
        generation: int = 0,
    ) -> SlicePlan:
        """Create a SlicePlan from display model and data wrapper.

        This is the main entry point that extracts the planning logic
        from ArraySliceController.current_slice_requests().

        Args
        ----
        display_model : ArrayDisplayModel
            Current display model state
        data_wrapper : DataWrapper
            Data wrapper to slice
        generation : int
            Generation counter for stale response detection

        Returns
        -------
        SlicePlan
            Immutable SlicePlan containing all slicing information
        """
        if data_wrapper is None:
            raise ValueError("Data wrapper cannot be None")

        # Get normalized axes and current index from display model
        normed_current_index = SlicePlanner._normalize_index(
            display_model.current_index, data_wrapper
        )
        normed_visible_axes = SlicePlanner._normalize_visible_axes(
            display_model.visible_axes, data_wrapper
        )
        normed_channel_axis = SlicePlanner._normalize_channel_axis(
            display_model.channel_axis, data_wrapper
        )

        # Build the slicing index
        requested_slice = dict(normed_current_index)

        # Ensure visible axes are slices, not integers
        for ax in normed_visible_axes:
            if not isinstance(requested_slice.get(ax), slice):
                requested_slice[ax] = slice(None)

        # Handle channel axis based on channel mode
        channel_axis_for_plan = normed_channel_axis
        if normed_channel_axis is not None:
            if display_model.channel_mode in {
                display_model.channel_mode.COMPOSITE,
                display_model.channel_mode.RGBA,
                display_model.channel_mode.COLOR,
            }:
                # Ensure channel axis is sliced for channel modes that process channels
                if not isinstance(requested_slice.get(normed_channel_axis), slice):
                    requested_slice[normed_channel_axis] = slice(None)
            else:
                # For grayscale mode, set channel_axis to None
                # so default_lut is used
                channel_axis_for_plan = None

        # Extract reducer information from display model
        reducers_dict = {}
        for axis_key, reducer in display_model.reducers.items():
            if axis_key is not None:
                # Normalize axis key to integer
                normalized_axis = SlicePlanner._normalize_channel_axis(
                    axis_key, data_wrapper
                )
                if normalized_axis is not None:
                    reducers_dict[normalized_axis] = reducer

        # Do NOT convert integers to slices - this removes the
        # "preserve dimensions then squeeze" pattern
        # Integer indices will directly reduce dimensions

        return SlicePlan(
            wrapper=data_wrapper,
            index=requested_slice,
            visible_axes=normed_visible_axes,
            channel_axis=channel_axis_for_plan,
            channel_mode=display_model.channel_mode,
            generation=generation,
            reducers=reducers_dict,
        )

    @staticmethod
    def _normalize_index(
        current_index: Mapping[AxisKey, int | slice], data_wrapper: DataWrapper
    ) -> dict[int, int | slice]:
        """Normalize current_index to use positive integer axes."""
        result = {}
        for axis, value in current_index.items():
            # Use DataWrapper's normalization to convert AxisKey to int
            normalized_axis = data_wrapper.normalize_axis_key(axis)
            result[normalized_axis] = value
        return result

    @staticmethod
    def _normalize_visible_axes(
        visible_axes: tuple[AxisKey, ...], data_wrapper: DataWrapper
    ) -> tuple[int, ...]:
        """Normalize visible_axes to use positive integer axes."""
        result = []
        for axis in visible_axes:
            # Use DataWrapper's normalization to convert AxisKey to int
            normalized_axis = data_wrapper.normalize_axis_key(axis)
            result.append(normalized_axis)
        return tuple(result)

    @staticmethod
    def _normalize_channel_axis(
        channel_axis: AxisKey | None, data_wrapper: DataWrapper
    ) -> int | None:
        """Normalize channel_axis to use positive integer axes."""
        if channel_axis is None:
            return None
        # Use DataWrapper's normalization to convert AxisKey to int
        return data_wrapper.normalize_axis_key(channel_axis)
