"""Async chunking interface for requesting data from a data source."""

from __future__ import annotations

from concurrent.futures import Executor, ThreadPoolExecutor
from typing import TYPE_CHECKING, Any, Iterable, Literal, Mapping, NamedTuple, Self

if TYPE_CHECKING:
    from concurrent.futures import Future

    import numpy as np

    from .model import AxisIndex, DataWrapper, Reducer


class DataRequest(NamedTuple):
    """A request for a section of data.

    The request needn't align with the chunks of the response.  It represents the full
    extent of what the viewer would like to display.  The DataWrapper is responsible for
    determining the best way to deliver the data in chunks.
    """

    texture_id: int | None
    data: DataWrapper
    idx: Mapping[AxisIndex, int | slice]
    canvas_size: tuple[int, int] | None = None
    reducers: Mapping[AxisIndex, Reducer] | None = None


class ChunkRequest(NamedTuple):
    """Request for a chunk of data from a data source."""

    texture_id: int | None
    data: DataWrapper
    idx: Mapping[AxisIndex, int | slice]

    # position of the chunk in texture
    offset: tuple[int, int] | tuple[int, int, int]
    canvas_size: tuple[int, int] | None = None


class ChunkResponse(NamedTuple):
    """Response from a Chunker including data at a specific offset."""

    texture_id: int | None
    # data for a single chunk
    data: np.ndarray
    # position of the chunk in texture
    offset: tuple[int, int] | tuple[int, int, int]


class Chunker:
    """Something backed by an async executor that can request chunks of data."""

    def __init__(self, executor: Executor | None = None) -> None:
        self._executor = executor or ThreadPoolExecutor()

    def shutdown(self, wait: bool = True, *, cancel_futures: bool = False) -> None:
        """Shutdown the executor."""
        self._executor.shutdown(wait=wait, cancel_futures=cancel_futures)

    def __enter__(self) -> Self:
        """Shutdown the executor when the Chunker is deleted."""
        return self

    def __exit__(self, *args: Any) -> Literal[False]:
        """Shutdown the executor when the Chunker is deleted."""
        self.shutdown(wait=True)
        return False

    def request_chunks(
        self,
        requests: Iterable[DataRequest],
        *,
        cancel_pending_futures: bool = False,
    ) -> Iterable[Future[ChunkResponse]]:
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
        for request in requests:
            yield self._executor.submit(self._request_chunk, request)
