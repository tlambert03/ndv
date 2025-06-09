"""Worker pipeline for processing SlicePlan objects.

This module implements the worker phase of the NDV data pipeline:
User intent → SlicePlan → Worker → Response (generation-tagged) → View

The SliceWorker is a standalone utility that takes SlicePlan objects and
processes them to produce DataResponse objects with generation tags. This
separation allows:

1. Deterministic async operations with generation tracking
2. Clean separation of planning from execution
3. Better error handling and testing
4. Optimized data processing with cached transpose operations
"""

from __future__ import annotations

import sys
from dataclasses import dataclass, field
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    import numpy as np

    from ndv._types import ChannelKey
    from ndv.models import ChannelMode
    from ndv.models._slice_planner import SlicePlan

__all__ = ["DataResponse", "SliceWorker"]

SLOTS = {"slots": True} if sys.version_info >= (3, 10) else {}


@dataclass(frozen=True, **SLOTS)
class DataResponse:
    """Response from processing a SlicePlan.

    Contains the processed data along with metadata and generation tag
    for stale response detection.
    """

    # Processed data by channel
    data: dict[ChannelKey | None, np.ndarray]

    # Response metadata
    n_visible_axes: int
    generation: int

    # Reference to original plan for debugging/validation
    plan: SlicePlan = field(repr=False)


class SliceWorker:
    """Standalone worker for processing SlicePlan objects.

    This class contains the core data slicing and processing logic extracted
    from ArraySliceController.process_request(). It's designed as a pure
    worker that takes SlicePlan objects and produces DataResponse objects.
    """

    @staticmethod
    def process_plan(plan: SlicePlan) -> DataResponse:
        """Process a SlicePlan to produce a DataResponse.

        This is the main entry point that replaces the original process_request
        method. It takes an immutable SlicePlan and returns a DataResponse with
        generation tagging.

        Args
        ----
        plan : SlicePlan
            Immutable plan containing all slicing information

        Returns
        -------
        DataResponse
            Response containing processed data and metadata
        """
        # Slice the data according to the plan
        data = plan.wrapper.isel(plan.index)

        # Process data by channel mode (includes transpose operations)
        data_response = SliceWorker._process_by_channel_mode(
            data, plan.channel_mode, plan.channel_axis, plan.transpose_order
        )

        return DataResponse(
            data=data_response,
            n_visible_axes=plan.n_visible_axes,
            generation=plan.generation,
            plan=plan,
        )

    @staticmethod
    def _process_by_channel_mode(
        data: np.ndarray,
        channel_mode: ChannelMode,
        channel_axis: int | None,
        transpose_order: tuple[int, ...],
    ) -> dict[ChannelKey | None, np.ndarray]:
        """Process data according to channel mode.

        This method implements the channel processing logic from the original
        process_request method. It handles the transpose and channel slicing
        operations as per the original implementation.
        """
        from ndv.models import ChannelMode  # Import here to avoid circular imports

        data_response: dict[ChannelKey | None, np.ndarray] = {}

        # For RGB/RGBA modes - keep the whole array together
        if channel_mode == ChannelMode.RGBA:
            transposed_data = data.transpose(*transpose_order)
            data_response["RGB"] = transposed_data.squeeze()

        # For grayscale mode or no channel axis
        elif channel_axis is None:
            transposed_data = data.transpose(*transpose_order)
            data_response[None] = transposed_data.squeeze()

        # For Composite and Color modes - slice along channel axis
        else:
            # Process each channel separately, following original logic
            for i in range(data.shape[channel_axis]):
                # Create keepdims slice tuple for the channel axis
                # This matches the original logic:
                # (slice(None),) * ch_ax + (i,) + (slice(None),)
                ch_keepdims = (
                    (slice(None),) * channel_axis
                    + (i,)
                    + (slice(None),) * (data.ndim - channel_axis - 1)
                )
                ch_data = data[ch_keepdims]

                # After slicing, we need to adjust transpose order since
                # the channel axis was removed from ch_data
                adjusted_transpose_order = tuple(
                    ax if ax < channel_axis else ax - 1
                    for ax in transpose_order
                    if ax != channel_axis
                )

                transposed_data = ch_data.transpose(*adjusted_transpose_order)
                data_response[i] = transposed_data.squeeze()

        return data_response
