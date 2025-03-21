# /// script
# dependencies = [
#     "ndv[pyqt,pygfx]",
#     "imageio[tifffile]",
# ]
# ///
import time
from collections.abc import Mapping
from typing import Any, TypeGuard

import numpy as np
import numpy.typing as npt

import ndv
from ndv import ArrayViewer, DataWrapper

viewer = ArrayViewer(
    channel_mode="composite",
    luts={
        # channel 0 is green, with autoscaled clims
        0: {"cmap": "green"},
        # channel 1 is green, with manual clims
        1: {"cmap": "magenta", "clims": (1500, 21000)},
    },
)
viewer.show()


class StreamingWrapper(DataWrapper):
    def __init__(self, streamer: "Streamer"):
        super().__init__(streamer._data)
        self._streamer = streamer

    @classmethod
    def supports(cls, obj: Any) -> TypeGuard[Any]:
        return False

    def guess_channel_axis(self) -> int:
        return 1

    def isel(self, index: Mapping[int, int | slice]) -> np.ndarray:
        """Return a slice of the data as a numpy array."""
        strm = self._streamer
        max_planes = strm._max_planes
        count = strm._count
        start = strm._start

        if count < max_planes:
            ary = strm._data[:count]
        else:
            # Buffer is full; build circular index over first axis (time)
            idx = np.arange(start, start + max_planes) % max_planes
            ary = strm._data[idx]

        # Translate the index mapping into a tuple of slices or ints
        idx_tuple = tuple(index.get(k, slice(None)) for k in range(ary.ndim))
        return ary[idx_tuple]


class Streamer:
    def __init__(
        self,
        viewer: ndv.ArrayViewer,
        plane_shape: tuple[int, ...],
        num_channels: int = 1,
        max_planes: int = 100,
        dtype: npt.DTypeLike = np.uint16,
        *,
        process_events_on_update: bool = True,
    ) -> None:
        self._plane_shape = plane_shape
        self._max_planes = max_planes
        self._num_channels = num_channels
        self._data = np.zeros((max_planes, num_channels, *plane_shape), dtype=dtype)
        self._wrapper = StreamingWrapper(self)

        self.viewer = viewer
        self.process_events_on_update = process_events_on_update

        self._start = 0  # index of the oldest frame in the buffer
        self._count = 0  # number of valid frames
        self._current_frame = -1  # logical time index for grouped channels

        viewer.data = self._wrapper
        viewer.display_model.channel_axis = 1
        viewer._update_visible_sliders()  # BUG

    def append(self, data: np.ndarray, channel: int) -> None:
        if channel == 0 or self._current_frame == -1:
            self._start_new_frame()

        if data.shape != self._plane_shape:
            raise ValueError(f"Item must have shape {self._plane_shape}")
        if not (0 <= channel < self._num_channels):
            raise ValueError(f"Channel index {channel} out of range")

        self._data[self._current_frame, channel] = data

        self.viewer.display_model.current_index.update({0: self._count - 1})
        if self.process_events_on_update:
            self.viewer._app.process_events()

    def _start_new_frame(self) -> None:
        """Advance to a new logical timepoint (frame)."""
        if self._count < self._max_planes:
            self._current_frame = self._count
            self._count += 1
        else:
            # Advance _start first, then compute new end-of-buffer index
            self._start = (self._start + 1) % self._max_planes
            self._current_frame = (
                self._start + self._max_planes - 1
            ) % self._max_planes


cells = ndv.data.cells3d()
nt, nc, ny, nx = cells.shape
streamer = Streamer(
    viewer, plane_shape=(ny, nx), num_channels=nc, max_planes=nt, dtype=cells.dtype
)


def stream(num_cycles: float = 2.5) -> None:
    for i in range(int(len(cells) * num_cycles)):
        plane = cells[i % len(cells)]
        for c, channel in enumerate(plane):
            streamer.append(channel, channel=c)
            time.sleep(0.001)


ndv.call_later(200, stream)
ndv.run_app()
