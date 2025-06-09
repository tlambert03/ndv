from __future__ import annotations

from abc import abstractmethod
from collections.abc import Sequence
from typing import TYPE_CHECKING, Any

from psygnal import Signal

from ndv.models._array_display_model import ChannelMode

from ._view_base import Viewable

if TYPE_CHECKING:
    from collections.abc import Container, Hashable, Mapping, Sequence

    from ndv._types import AxisKey, ChannelKey
    from ndv.models._viewer_model import ArrayViewerModel
    from ndv.models._reducer import ReducerType
    from ndv.views.bases import LutView


class ArrayView(Viewable):
    """ABC for ND Array viewers widget.

    Currently, this is the "main" widget that contains the array display and
    all the controls for interacting with the array, including sliders, LUTs,
    histograms, and reducers.
    """

    currentIndexChanged = Signal()
    resetZoomClicked = Signal()
    histogramRequested = Signal(int)
    nDimsRequested = Signal(int)
    channelModeChanged = Signal(ChannelMode)
    # Signal emitted when reducer settings change: axis -> reducer_type
    reducersChanged = Signal(object)  # Mapping[AxisKey, ReducerType | None]

    # model: ArraySliceController is likely a temporary parameter
    @abstractmethod
    def __init__(
        self,
        canvas_widget: Any,
        viewer_model: ArrayViewerModel,
        **kwargs: Any,
    ) -> None: ...
    @abstractmethod
    def create_sliders(self, coords: Mapping[Hashable, Sequence]) -> None: ...
    @abstractmethod
    def current_index(self) -> Mapping[AxisKey, int | slice]: ...
    @abstractmethod
    def set_current_index(self, value: Mapping[AxisKey, int | slice]) -> None: ...

    @abstractmethod
    def visible_axes(self) -> Sequence[AxisKey]: ...
    @abstractmethod
    def set_visible_axes(self, axes: Sequence[AxisKey]) -> None: ...

    @abstractmethod
    def set_channel_mode(self, mode: ChannelMode) -> None: ...
    @abstractmethod
    def set_data_info(self, data_info: str) -> None: ...
    @abstractmethod
    def set_hover_info(self, hover_info: str) -> None: ...
    @abstractmethod
    def hide_sliders(
        self, axes_to_hide: Container[Hashable], *, show_remainder: bool = ...
    ) -> None: ...
    @abstractmethod
    def add_lut_view(self, key: ChannelKey) -> LutView: ...
    @abstractmethod
    def remove_lut_view(self, view: LutView) -> None: ...

    # Reducer-related abstract methods
    @abstractmethod
    def set_reducers(self, reducers: Mapping[AxisKey, ReducerType | None]) -> None:
        """Set the reducer configuration for each axis."""
        ...

    @abstractmethod
    def get_reducers(self) -> Mapping[AxisKey, ReducerType | None]:
        """Get the current reducer configuration for each axis."""
        ...

    def add_histogram(self, channel: ChannelKey, widget: Any) -> None:
        raise NotImplementedError

    def remove_histogram(self, widget: Any) -> None:
        raise NotImplementedError
