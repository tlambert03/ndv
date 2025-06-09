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

    # Derived/cached information to optimize processing
    transpose_order: tuple[int, ...] = field(init=False)
    n_visible_axes: int = field(init=False)
    expected_channels: tuple[ChannelKey | None, ...] = field(init=False)

    def __post_init__(self) -> None:
        """Compute derived fields after initialization."""
        # Compute transpose order for efficient processing
        vis_ax = self.visible_axes
        sizes = self.wrapper.sizes()
        ndims = len(sizes)
        other_axes = tuple(i for i in range(ndims) if i not in vis_ax)
        transpose_order = vis_ax + other_axes
        object.__setattr__(self, "transpose_order", transpose_order)

        # Cache visible axes count
        object.__setattr__(self, "n_visible_axes", len(vis_ax))

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
        from _ArrayDataDisplayModel.current_slice_requests().

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
            if display_model.channel_mode.is_multichannel():
                # Ensure channel axis is sliced for multichannel modes
                if not isinstance(requested_slice.get(normed_channel_axis), slice):
                    requested_slice[normed_channel_axis] = slice(None)
            else:
                # For grayscale mode, set channel_axis to None
                # so default_lut is used
                channel_axis_for_plan = None

        # Convert integers to slices to preserve dimensions
        # (data will be squeezed later after transposing)
        for ax, val in requested_slice.items():
            if isinstance(val, int):
                requested_slice[ax] = slice(val, val + 1)

        return SlicePlan(
            wrapper=data_wrapper,
            index=requested_slice,
            visible_axes=normed_visible_axes,
            channel_axis=channel_axis_for_plan,
            channel_mode=display_model.channel_mode,
            generation=generation,
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
