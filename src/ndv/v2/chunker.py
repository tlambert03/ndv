"""Async chunking interface for requesting data from a data source."""

from __future__ import annotations

from typing import TYPE_CHECKING, Iterable, Mapping, NamedTuple
from .model import AxisIndex

if TYPE_CHECKING:
    from concurrent.futures import Future

    import numpy as np

    from .model import DataWrapper


class Chunker:
    """Something backed by an async executor that can request chunks of data."""

    def request_chunks(
        self,
        data: DataWrapper,
        index: Mapping[str, int],
        *,
        pixel_ratio: float,
        cancel_pending_futures: bool = False,
    ) -> Iterable[Future]:
        """Request chunks of data from the data source.

        Note, the DataWrapper is responsible for converting the bounds into
        chunks.  It may use the pixel ratio to determine the scale/resolution
        from which to request data.  It can use it's own chunking scheme to deliver
        the data in the most efficient way possible; in other words, the data source
        takes priority when deciding chunking boundaries.

        TODO: we need a mechanism for multi-resolution datasets to send "quick" chunks
        at a lower resolution level while they load the full resolution data. It's
        already fine for `request_chunks` to return multiple futures for the same chunk,
        but we also need a way to avoid requesting lower resolution data if higher
        resolution has already been loaded.
        """
        breakpoint()


class ChunkResponse(NamedTuple):
    """Response from a Chunker including data at a specific offset."""

    # data for a single chunk
    data: np.ndarray
    # position of the chunk in texture
    offset: tuple[int, int] | tuple[int, int, int]
    # channel to which this chunk belongs
    # (not sure about this one...)
    channel: int | None = None
