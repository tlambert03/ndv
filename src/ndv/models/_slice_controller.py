import logging
import sys
from collections.abc import (
    Hashable,
    Mapping,
    MutableMapping,
    Sequence,
)
from dataclasses import dataclass, field
from typing import Any, Optional, Union

import numpy as np
from pydantic import Field

from ndv._types import ChannelKey

from ._array_display_model import ArrayDisplayModel, ChannelMode
from ._base_model import NDVModel
from ._data_wrapper import DataWrapper

__all__ = ["ArraySliceController"]

SLOTS = {"slots": True} if sys.version_info >= (3, 10) else {}

logger = logging.getLogger(__name__)


# NOTE: This class provides axis normalization helpers and channel mode logic
# for ArrayViewer. The old slice execution methods have been removed since
# ArrayViewer now uses the SlicePlanner/SliceWorker pipeline.
class ArraySliceController(NDVModel):
    """Controller combining ArrayDisplayModel with a DataWrapper.

    The `ArrayDisplayModel` can be thought of as an "instruction" for how to display
    some data, while the `DataWrapper` is the actual data. This controller combines the
    two and provides axis normalization helpers and channel mode change logic.

    The axis normalization helpers (normed_*) convert AxisKeys in the display model
    to positive integers, based on the available dimensions of the DataWrapper, making
    it easier to index into the data even with named axes.

    Having this class composed of the two other models (rather than inheriting from
    `ArrayDisplayModel`) allows for multiple controllers to share the same underlying
    display model (e.g. for linked views).

    Attributes
    ----------
    display : ArrayDisplayModel
        The display model. Provides instructions for how to display the data.
    data_wrapper : DataWrapper  | None
        The data wrapper. Provides the actual data to be displayed
    """

    display: ArrayDisplayModel = Field(default_factory=ArrayDisplayModel)
    data_wrapper: Optional[DataWrapper] = None

    def model_post_init(self, __context: Any) -> None:
        # connect the channel mode change signal to the channel axis guessing method
        self.display.events.channel_mode.connect(self._on_channel_mode_change)
        # initial model synchronization
        self._on_channel_mode_change()

    def _on_channel_mode_change(self) -> None:
        # TODO: Refactor into separate methods?
        mode = self.display.channel_mode
        if mode == ChannelMode.GRAYSCALE:
            self.display.channel_axis = None
        elif mode in {ChannelMode.COLOR, ChannelMode.COMPOSITE}:
            if self.data_wrapper is not None:
                guess = self.data_wrapper.guess_channel_axis()
                # only use the guess if it's not already in the visible axes
                self.display.channel_axis = (
                    None if guess in self.normed_visible_axes else guess
                )
        elif mode == ChannelMode.RGBA:
            if self.data_wrapper is not None and self.display.channel_axis is None:
                # Coerce image to RGB
                if len(self.normed_visible_axes) == 3:
                    raise ValueError(
                        "Cannot switch to RGBA mode: all 3 spatial dimensions are "
                        "already visible, leaving no room for the channel axis. "
                        "Try switching to 2D view first or change the visible axes "
                        "configuration."
                    )
                guess = self.data_wrapper.guess_channel_axis()
                self.display.channel_axis = guess
                # FIXME? going back another ChannelMode retains these changes
                if guess in self.normed_visible_axes:
                    dims = list(self.data_wrapper.sizes().keys())
                    dims.remove(guess)
                    new_visible_axes = dims[-self.display.n_visible_axes :]
                    self.display.visible_axes = tuple(new_visible_axes)  # type: ignore [assignment]

    # Properties for normalized data access -----------------------------------------
    # these all use positive integers as axis keys

    def _ensure_wrapper(self) -> DataWrapper:
        if self.data_wrapper is None:
            raise ValueError("Cannot normalize axes.  No data is set.")
        return self.data_wrapper

    @property
    def normed_data_coords(self) -> Mapping[int, Sequence]:
        """Return the coordinates of the data as positive integers."""
        if (wrapper := self.data_wrapper) is None:
            return {}
        return {wrapper.normalize_axis_key(d): wrapper.coords[d] for d in wrapper.dims}

    @property
    def normed_visible_axes(self) -> "tuple[int, int, int] | tuple[int, int]":
        """Return the visible axes as positive integers."""
        wrapper = self._ensure_wrapper()
        return tuple(  # type: ignore [return-value]
            wrapper.normalize_axis_key(ax) for ax in self.display.visible_axes
        )

    @property
    def normed_current_index(self) -> Mapping[int, Union[int, slice]]:
        """Return the current index with positive integer axis keys.

        This method has to handle cases where the the model current index is expressed
        in a non-normalized way (e.g. with string labels for axes), AND it has to handle
        cases where a non-normalized key resolves a normalized key that may *also* be in
        the set: in that cases, priority is given to the non-normalized key and a
        warning is issued.

        For example, if current_index is {'Z': 0, 0: 10}, and the data has a 'Z'
        dimension label, but Z is also the 0th axis, then the output normed index will
        be {0: 0} (the string key is prioritized over the integer key), a warning
        is issued, and the 0 key is removed from the current_index.
        """
        wrapper = self._ensure_wrapper()

        output: MutableMapping[int, Union[int, slice]] = {}
        rev_map: dict[Hashable, Hashable] = {}
        to_remove: list[Hashable] = []

        for key, val in self.display.current_index.items():
            normed_key = wrapper.normalize_axis_key(key)
            if normed_key in output:
                to_remove.append(key)
                was_already_normed = normed_key == key
                if was_already_normed:
                    original_key = rev_map[normed_key]
                else:
                    original_key = key

                logger.warning(
                    "Axis key %r normalized to %r, which is also in current_index. "
                    "Using %r value.",
                    original_key,
                    normed_key,
                    original_key,
                )
                if was_already_normed:
                    # in the case of duplication, we give priority to NON-normed keys
                    # (e.g. "Z" over 0)
                    continue

            output[normed_key] = val
            rev_map[normed_key] = key

        # cleanup the model so it doesn't have to be done again
        for key in to_remove:
            del self.display.current_index[key]

        return output

    @property
    def normed_channel_axis(self) -> "int | None":
        """Return the channel axis as positive integers."""
        if self.display.channel_axis is None:
            return None
        wrapper = self._ensure_wrapper()
        return wrapper.normalize_axis_key(self.display.channel_axis)
