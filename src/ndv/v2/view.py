"""View onto ndv model."""

from __future__ import annotations

import copy
import logging
from collections import defaultdict
from typing import TYPE_CHECKING, Any, Mapping, NamedTuple

import numpy as np

from ._data_wrapper import DataWrapper
from .backends._vispy import VispyViewerCanvas
from .chunker import Chunker, ChunkResponse
from .model import ArrayDisplayModel, Reducer

if TYPE_CHECKING:
    from concurrent.futures import Future

    from .canvas import Texture

# The Term "Axis" is used when referring to a specific dimension of an array
# We can change this to dimension if desired... but it should be uniform.

# Axis keys can be either a direct integer index or name (for labeled arrays)
# we leave it to the DataWrapper to convert `AxisKey -> AxisIndex`
AxisIndex = int
AxisLabel = str
AxisKey = AxisIndex | AxisLabel

# a specific position along a dimension
CoordIndex = int | str
# start and stop indices for a dimension
Bound = tuple[int, int]
# bounds for all dimensions
Bounds = tuple[Bound, ...]


class ArrayViewer:
    """View on an ArrayDisplayModel."""

    data: DataWrapper

    def __init__(self, data: Any = None, model: ArrayDisplayModel | None = None):
        self.model = model or ArrayDisplayModel()

        # handles to all textures draw on the canvas
        # key is a channel index, or None for the default channel
        # value is a list of textures that should be controlled by that channel
        self._textures: defaultdict[int | None, list[Texture]] = defaultdict(list)

        # async executor for requesting data
        self.chunker = Chunker()

        self._canvas = VispyViewerCanvas()  # TODO generalize

        # connect model events
        self.model.events.current_index.connect(self._view_index)
        self.model.events.visible_axes.connect(self._on_visible_axes_changed)
        self.model.events.channel_axis.connect(self._on_channel_axis_changed)
        # self.model.luts.connect(self._on_luts_changed)

        if data is not None:
            self.set_data(data)

    def set_data(self, data: Any) -> None:
        """Prepare model for new data and update viewer."""
        self.data = DataWrapper.create(data)

        # when new data is assigned, we ensure that the model is consistent
        for key, value in reconcile_model_with_data(self.model, self.data).items():
            # block events
            logging.info(f"Setting model {key} to {value}")
            setattr(self.model, key, value)

        # what else? <<<<<<<<<<<<<<

        self.redraw()

    def _on_visible_axes_changed(
        self, axes: tuple[AxisKey, AxisKey, AxisKey] | tuple[AxisKey, AxisKey]
    ) -> None:
        # we're switching from 2D to 3D or vice versa
        # clear all of the visuals and redraw
        self.clear()
        self.redraw()

    def _on_channel_axis_changed(self, channel_axis: AxisKey | None) -> None:
        if channel_axis is None:
            # we're turning off "composite" mode.
            # All data now uses the lut defined at self.model.luts[None]
            ...
        else:
            # we're turning on "composite" mode.
            ...

    def _on_luts_changed(self, event) -> None:
        # it's unclear what this event structure will be, and it will likely
        # be multiple methods, for each field on the LUT class.
        # but we need to update all textures in the corresponding channel with the
        # new LUTs

        channel = ...
        self._textures[channel].set_clims(...)  # etc.

    def _view_index(self, index: Mapping[AxisKey, int | slice]) -> None:
        """Request data at the given index and queue it for display.

        This is the main method that gets called when the index changes (either via
        sliders or programmatically).  It is responsible for sending requests for
        data to the chunker.

        Index should be considered "constraints" on the data to be displayed, but it
        needn't be complete.  it can be a partial index, or even empty.
        """
        requested_index: dict = self._norm_index(index)
        _visible_axes = self._norm_index(self.model.visible_axes)
        _channel_axis = self._norm_index(self.model.channel_axis)

        class Request(NamedTuple):
            texture_id: int | None
            idx: Mapping[AxisIndex, int | slice]
            pixel_ratio: float = 1
            reducers: Mapping[AxisIndex, Reducer] | None = None

        requests = []

        # we show all visible axes, regardless of whether they are in the index request
        for ax in _visible_axes:
            # if the request for that axis is either missing or a single index
            # make it the full slice (could warn on case of single int?)
            if isinstance(requested_index.get(ax), (int, type(None))):
                requested_index[ax] = slice(None)

        # deal now with implicit axes
        # (those that are neither requested nor in _visible_axes)
        for ax in range(len(self.data.shape)):
            if ax not in requested_index and ax != _channel_axis:
                requested_index[ax] = slice(None)

        # now prepare reducer functions for all axes that are not in _visible_axes
        reducers = {}
        default_reducer = self.model.reducers.get(None, np.max)
        for ax, val in requested_index.items():
            if isinstance(val, slice) and ax not in _visible_axes:
                reducers[ax] = self.model.reducers.get(ax, default_reducer)

        # if a channel_axis is set, then we're in "composite" mode and we need to
        # request data for each (visible) channel separately
        if _channel_axis is not None:
            num_channels = self.data.shape[_channel_axis]
            # we're in composite mode, add a request for each visible channel
            for ch_idx in range(num_channels):
                # skip channels that are not visible
                lut_model = self.model.luts.get(ch_idx)
                if lut_model and not lut_model.visible:
                    continue

                # modify the index to request data for this channel
                idx = {**requested_index, _channel_axis: ch_idx}
                # TODO: texture_id isn't strictly matching the keys in _textures yet
                requests.append(Request(texture_id=ch_idx, idx=idx, reducers=reducers))
        else:
            # we're in single channel mode, add a request for the default channel
            requests.append(
                Request(texture_id=None, idx=requested_index, reducers=reducers)
            )
        from rich import print  # noqa

        breakpoint()
        pixel_ratio = self._current_pixel_ratio()

        # Existing data within the area that is going to be updated should be cleared
        # However it should only be cleared if the new data represents a different
        # spatial region of the data (i.e. if the bounds are the same, then the data
        # should not be cleared, but may be updated if the pixel ratio has changed)
        # here is where an octree-like structure would be useful to determine which
        # chunks need to be invalidated.

        # request chunks from the data source and queue the callback
        for future in self.chunker.request_chunks(self.data, index, pixel_ratio):
            future.add_done_callback(self._on_chunk_ready)

    def _norm_index(self, obj: Any) -> Any:
        if isinstance(obj, Mapping):
            return {self.data.axis_index(k): v for k, v in obj.items()}
        if isinstance(obj, (tuple, list, set)):
            return type(obj)(
                [
                    self.data.axis_index(axis) if axis is not None else None
                    for axis in self.model.visible_axes
                ]
            )
        elif isinstance(obj, (int, str)):
            return self.data.axis_index(obj)
        elif obj is None:
            return None
        raise ValueError(f"Cannot normalize index: {obj}")

    # def _bounds_for_index(self, index: Mapping[AxisKey, int | slice]) -> Bounds:
    #     """Return the bounds of the data to be displayed at the given index.

    #     This method is responsible for converting the index into a set of bounds
    #     that can be used to request data from the data source.

    #     In addition to the `index` in will need to take into account:
    #     - the `visible_axes` of the model
    #     - the `channel_axis` of the model
    #     - any channels that are not visible

    #     TODO:
    #     open question is exactly what form the Bounds should take. Should it be
    #     mapping of `{AxisKey: Bound}`? (which allows the data to worry about indexing)
    #     or a `tuple[Bound, ...]` (where we've already chosen the axes)?
    #     """
    #     _index = {self.data.axis_index(k): v for k, v in index.items()}
    #     visible_ax = [self.data.axis_index(axis) for axis in self.model.visible_axes]
    #     channel_ax = (
    #         self.data.axis_index(self.model.channel_axis)
    #         if self.model.channel_axis
    #         else None
    #     )
    #     bounds = []
    #     for dim, size in enumerate(self.data.shape):
    #         if dim in visible_ax:
    #             bounds.append(slice(None))
    #         elif dim == channel_ax:
    #             bounds.append(slice(None))
    #             # for ch in range(size):
    #             #     if ch in self.model.luts and not self.model.luts[ch].visible:
    #             #         continue
    #         else:
    #             bounds.append(_index.get(dim, 0))
    #     breakpoint()
    #     return bounds

    def _current_pixel_ratio(self) -> float:
        """Return the ratio of data/world pixels to canvas pixels.

        This will depend on the current zoom level, the size of the canvas, and the
        shape of the data.

        A pixel ratio greater than 1 means that there are more data pixels than
        canvas pixels, and that the data may be safely downsampled if desired.
        """
        return 1.0

    def _on_chunk_ready(self, future: Future[ChunkResponse]) -> None:
        if future.cancelled():
            return
        try:
            chunk = future.result()
        except Exception as e:
            logging.debug(f"Error retrieving chunk: {e}")
            return

        self._update_data_at_offset(chunk.data, chunk.offset, chunk.channel)

    def _update_data_at_offset(
        self, data: np.ndarray, offset: tuple[int, int], channel: int | None = None
    ) -> None:
        """Update the texture at the given offset and channel."""
        self._textures[channel].set_data(data, offset)

    def clear(self) -> None:
        """Erase all visuals."""
        pass

    def redraw(self) -> None:
        """Redraw the current view."""
        self._view_index(self.model.current_index)


def reconcile_model_with_data(model: ArrayDisplayModel, data: DataWrapper) -> dict:
    """Ensure that the model is consistent with the data, returning data for new model.

    This method should be called whenever the data is changed, and should
    ensure that the model is consistent with the data.  This includes
    ensuring that the `visible_axes` are valid, that the `current_index` is
    within the bounds of the data, and that the `channel_axis` is valid.
    """
    shape = data.shape
    if (ndim := len(shape)) < 2:
        raise ValueError("Data must have at least 2 dimensions")

    visible_axes = model.visible_axes
    if len(visible_axes) > ndim:
        visible_axes = visible_axes[-ndim:]  # type: ignore[assignment]
    for axis in visible_axes:
        try:
            data.axis_index(axis)
        except (KeyError, IndexError) as e:
            # TODO: fallback to graceful default of (-3, -2, -1)[-ndim:]
            raise ValueError(f"Cannot visualize axis {axis}: {e}") from e

    current_index = {}
    for key, index in model.current_index.items():
        try:
            axis = data.axis_index(key)
            current_index[axis] = index
        except (KeyError, IndexError):
            # this dataset does not have this axis or the index is out of bounds
            # warn?
            pass

    try:
        channel_axis = data.axis_index(model.channel_axis)
    except (KeyError, IndexError):
        channel_axis = None

    # it's not so terrible to include extra luts, or to omit some
    # but we could prune them here if desired
    luts = copy.copy(model.luts)
    for key in luts:
        if key is not None:
            try:
                data.axis_index(key)
            except (KeyError, IndexError):
                del luts[key]

    return {
        "visible_axes": visible_axes,
        "current_index": current_index,
        "reducers": model.reducers,
        "channel_axis": channel_axis,
        "luts": luts,
    }
