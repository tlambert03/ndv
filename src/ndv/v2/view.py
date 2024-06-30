"""View onto ndv model."""

from __future__ import annotations

import copy
import logging
from collections import defaultdict
from typing import TYPE_CHECKING, Any, Mapping

import numpy as np

from ._data_wrapper import DataWrapper
from .backends._vispy import VispyViewerCanvas
from .chunker import Chunker, ChunkResponse, DataRequest
from .model import ArrayDisplayModel

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
        self._textures: defaultdict[int | None, Texture] = defaultdict(list)

        # async executor for requesting data
        self.chunker = Chunker()

        self._canvas = VispyViewerCanvas()  # TODO generalize

        # connect model events
        self.model.events.current_index.connect(self._on_current_index_changed)
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
            if getattr(self.model, key) != value:
                print(f"Setting model {key} to {value}")
                setattr(self.model, key, value)

        # what else? <<<<<<<<<<<<<<
        self._canvas.set_ndim(len(self.model.visible_axes))
        self.redraw()

    def _on_visible_axes_changed(self) -> None:
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

    def _on_current_index_changed(self, index: Mapping[AxisKey, int | slice]) -> None:
        self._view_index(index)

    def _view_index(self, index: Mapping[AxisKey, int | slice]) -> None:
        """Request data at the given index and queue it for display.

        This is the main method that gets called when the index changes (either via
        sliders or programmatically).  It is responsible for sending requests for
        data to the chunker.

        Index should be considered "constraints" on the data to be displayed, but it
        needn't be complete.  it can be a partial index, or even empty.
        """
        print("Viewing index", index)
        requests = self._prepare_requests(index)
        # [self.data.chunk_requests(r) for r in requests]

        # Existing data within the area that is going to be updated should be cleared
        # However it should only be cleared if the new data represents a different
        # spatial region of the data (i.e. if the bounds are the same, then the data
        # should not be cleared, but may be updated if the pixel ratio has changed)
        # here is where an octree-like structure would be useful to determine which
        # chunks need to be invalidated.

        # request chunks from the data source and queue the callback
        for req in requests:
            if req.texture_id not in self._textures:
                shape = [self.data.shape[x] for x in req.idx if x not in req.reducers]
                empty = np.empty(shape, dtype=self.data.data.dtype)
                self._textures[req.texture_id] = self._canvas.add_image(
                    empty,
                    cmap=self.model.luts.get(
                        req.texture_id, self.model.luts.get(None)
                    ).cmap,
                )

        for future in self.chunker.request_chunks(requests):
            future.add_done_callback(self._on_chunk_ready)

    def _prepare_requests(
        self, index: Mapping[AxisKey, int | slice]
    ) -> list[DataRequest]:
        # convert indices to axis indices
        # TODO: see whether this can be delayed for the datawrapper to do
        # Actually... this whole method should perhaps live on the DataWrapper
        requested_index = {self.data.axis_index(k): v for k, v in index.items()}
        visible_axes = [self.data.axis_index(axis) for axis in self.model.visible_axes]
        if (ch_axis := self.model.channel_axis) is not None:
            ch_axis = self.data.axis_index(ch_axis)

        # ensure that all visible axes are slices
        for ax in visible_axes:
            if not isinstance(requested_index.get(ax), slice):
                requested_index[ax] = slice(None)

        # turn non-visible, non-requested, non-channel axes into full slices
        # ??? is this necessary?  leave to the data source?
        for ax in range(len(self.data.shape)):
            if ax not in requested_index and ax != ch_axis:
                requested_index[ax] = slice(None)

        # pick reducers for sliced axes that not in the visible_axes
        default_reducer = self.model.reducers.get(None, np.max)
        reducers = {
            ax: self.model.reducers.get(ax, default_reducer)
            for ax, val in requested_index.items()
            if isinstance(val, slice) and ax not in visible_axes
        }

        # build request objects
        canvas_size = self._canvas_size()
        requests: list[DataRequest] = []
        if ch_axis is None:
            # single channel mode, all the data is bound for the same texture
            requests.append(
                DataRequest(
                    texture_id=None,
                    data=self.data,
                    idx=requested_index,
                    reducers=reducers,
                    canvas_size=canvas_size,
                )
            )
        else:
            # multi-channel mode, each channel gets its own texture
            for ch_idx in range(self.data.shape[ch_axis]):
                # skip channels that are not visible
                if (lut_model := self.model.luts.get(ch_idx)) and not lut_model.visible:
                    continue
                requests.append(
                    DataRequest(
                        texture_id=ch_idx,
                        data=self.data,
                        idx={**requested_index, ch_axis: ch_idx},
                        reducers=reducers,
                        canvas_size=canvas_size,
                    )
                )

        return requests

    def _canvas_size(self) -> tuple[int, int]:
        """Return the ratio of data/world pixels to canvas pixels.

        This will depend on the current zoom level, the size of the canvas, and the
        shape of the data.

        A pixel ratio greater than 1 means that there are more data pixels than
        canvas pixels, and that the data may be safely downsampled if desired.
        """
        # TODO: implement this
        size = self._canvas.qwidget().size()
        return size.height(), size.width()

    def _on_chunk_ready(self, future: Future[ChunkResponse]) -> None:
        if future.cancelled():
            return
        try:
            chunk = future.result()
        except Exception as e:
            logging.debug(f"Error retrieving chunk: {e}")
            return

        data = chunk.data
        self._textures[chunk.texture_id].set_data(data)
        self._textures[chunk.texture_id].clim = (data.min(), data.max())
        self._canvas.refresh()

    def clear(self) -> None:
        """Erase all visuals."""
        pass

    def redraw(self) -> None:
        """Redraw the current view."""
        self._on_current_index_changed(self.model.current_index)


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
