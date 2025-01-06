"""General model for ndv."""

import warnings
from collections.abc import Iterable, Mapping, Sequence
from concurrent.futures import Future
from dataclasses import dataclass
from enum import Enum
from typing import (
    TYPE_CHECKING,
    Any,
    Literal,
    Optional,
    TypedDict,
    Union,
    cast,
)

from pydantic import Field, computed_field, model_validator
from typing_extensions import Self, TypeAlias

from ndv._types import AxisKey, Slice

from ._base_model import NDVModel
from ._lut_model import LUTModel
from ._mapping import ValidatedEventedDict
from ._reducer import ReducerType
from .data_wrappers import DataWrapper

if TYPE_CHECKING:
    import cmap

    from ._lut_model import AutoscaleType

    class LutModelKwargs(TypedDict, total=False):
        visible: bool
        cmap: cmap.Colormap | cmap._colormap.ColorStopsLike
        clims: tuple[float, float] | None
        gamma: float
        autoscale: AutoscaleType

    class ArrayDisplayModelKwargs(TypedDict, total=False):
        visible_axes: tuple[AxisKey, AxisKey, AxisKey] | tuple[AxisKey, AxisKey]
        current_index: Mapping[AxisKey, Union[int, slice]]
        channel_mode: "ChannelMode" | Literal["grayscale", "composite", "color", "rgba"]
        channel_axis: Optional[AxisKey]
        reducers: Mapping[AxisKey | None, ReducerType]
        luts: Mapping[int | None, LUTModel | LutModelKwargs]
        default_lut: LUTModel | LutModelKwargs


# map of axis to index/slice ... i.e. the current subset of data being displayed
IndexMap: TypeAlias = ValidatedEventedDict[AxisKey, Union[int, Slice]]
# map of index along channel axis to LUTModel object
LutMap: TypeAlias = ValidatedEventedDict[Union[int, None], LUTModel]
# map of axis to reducer
Reducers: TypeAlias = ValidatedEventedDict[Union[AxisKey, None], ReducerType]
# used for visible_axes
TwoOrThreeAxisTuple: TypeAlias = Union[
    tuple[AxisKey, AxisKey, AxisKey], tuple[AxisKey, AxisKey]
]


def _default_luts() -> LutMap:
    colors = ["green", "magenta", "cyan", "red", "blue", "yellow"]
    return ValidatedEventedDict(
        (i, LUTModel(cmap=color)) for i, color in enumerate(colors)
    )


class ChannelMode(str, Enum):
    """Channel display mode.

    Attributes
    ----------
    GRAYSCALE : str
        The array is displayed as a single channel, with a single lookup table applied.
        In this mode, there effective *is* no channel axis: all non-visible dimensions
        have sliders, and there is a single LUT control (the `default_lut`).
    COMPOSITE : str
        Display all (or a subset of) channels as a composite image, with a different
        lookup table applied to each channel.  In this mode, the slider for the channel
        axis is hidden by default, and LUT controls for each channel are shown.
    COLOR : str
        Display a single channel at a time as a color image, with a channel-specific
        lookup table applied.  In this mode, the slider for the channel axis is shown,
        and the user can select which channel to display.  LUT controls are shown for
        all channels.
    RGBA : str
        The array is displayed as an RGB image, with a single lookup table applied.
        In this mode, the slider for the channel axis is hidden, and a single LUT
        control is shown. Only valid when channel axis has length <= 4.
    RGB : str
        Alias for RGBA.
    """

    GRAYSCALE = "grayscale"
    COMPOSITE = "composite"
    COLOR = "color"
    RGBA = "rgba"

    def __str__(self) -> str:
        return self.value

    def is_multichannel(self) -> bool:
        """Return whether this mode displays multiple channels.

        If `is_multichannel` is True, then the `channel_axis` slider should be hidden.
        """
        return self in (ChannelMode.COMPOSITE, ChannelMode.RGBA)


ChannelMode._member_map_["RGB"] = ChannelMode.RGBA  #  ChannelMode["RGB"]
ChannelMode._value2member_map_["rgb"] = ChannelMode.RGBA  # ChannelMode("rgb")


@dataclass
class DataResponse:
    """Response object for data requests."""

    data: np.ndarray
    channel_key: Optional[int]


@dataclass
class DataRequest:
    """Request object for data slicing."""

    wrapper: DataWrapper
    index: Mapping[int, Union[int, slice]]
    visible_axes: tuple[int, ...]
    channel_axis: Optional[int]


class ArrayDisplayModel(NDVModel):
    """Model of how to display an array.

    In the following types, `AxisKey` can be either an integer index or a string label.

    Parameters
    ----------
    visible_axes : tuple[AxisKey, ...]
        Ordered list of axes to visualize, from slowest to fastest.
        e.g. ('z', -2, -1)
    current_index : Mapping[AxisKey, int | Slice]
        The currently displayed position/slice along each dimension.
        e.g. {0: 0, 'time': slice(10, 20)}
        Not all axes need be present, and axes not present are assumed to
        be slice(None), meaning it is up to the controller of this model to restrict
        indices to an efficient range for retrieval.
        If the number of non-singleton axes is greater than `n_visible_axes`,
        then reducers are used to reduce the data along the remaining axes.
        NOTE: In terms of requesting data, there is a slight "delocalization" of state
        here in that we probably also want to avoid requesting data for channel
        positions that are not visible.
    reducers : Mapping[AxisKey | None, ReducerType]
        Callable to reduce data along axes remaining after slicing.
        Ideally, the ufunc should accept an `axis` argument.
        (TODO: what happens if not?)
    channel_mode : ChannelMode
        How to display channel information:
            - `GRAYSCALE`: ignore channel axis, use `default_lut`
            - `COMPOSITE`: display all channels as a composite image, using `luts`
            - `COLOR`: display a single channel at a time, using `luts`
            - `RGBA`: display as an RGB image, using `default_lut` (except for cmap)

        If `channel_mode` is set to anything other than `GRAYSCALE`, then `channel_axis`
        must be set to a valid axis; if no `channel_axis` is set, at the time of
        display, the `DataWrapper` MAY guess the `channel_axis`, and set it on the
        model.
    channel_axis : AxisKey | None
        The dimension index or name of the channel dimension.
        The implication of setting channel_axis is that *all* elements along the channel
        dimension are shown, with different LUTs applied to each channel.
        If None, then a single lookup table is used for all channels (`luts[None]`).
        NOTE: it is an error for channel_axis to be in `visible_axes` (or ignore it?)
    luts : Mapping[int | None, LUTModel]
        Instructions for how to display each channel of the array.
        Keys represent position along the dimension specified by `channel_axis`.
        Values are `LUT` objects that specify how to display the channel.
        The special key `None` is used to represent a fallback LUT for all channels,
        and is used when `channel_axis` is None.  It should always be present
    """

    visible_axes: TwoOrThreeAxisTuple = (-2, -1)
    current_index: IndexMap = Field(default_factory=IndexMap, frozen=True)

    channel_mode: ChannelMode = ChannelMode.GRAYSCALE
    channel_axis: Optional[AxisKey] = None

    # map of axis to reducer (function that can reduce dimensionality along that axis)
    reducers: Reducers = Field(default_factory=Reducers, frozen=True)
    default_reducer: ReducerType = "numpy.max"  # type: ignore [assignment]  # FIXME

    # map of index along channel axis to LUTModel object
    luts: LutMap = Field(default_factory=_default_luts)
    default_lut: LUTModel = Field(default_factory=LUTModel, frozen=True)

    data_wrapper: Optional[DataWrapper] = None

    @property
    def data(self) -> Any:
        """Return the data being displayed."""
        if self.data_wrapper is None:
            return None
        return self.data_wrapper.data

    @data.setter
    def data(self, data: Any) -> None:
        """Set the data to be displayed."""
        if data is None:
            self.data_wrapper = None
        else:
            self.data_wrapper = DataWrapper.create(data)

    @computed_field  # type: ignore [prop-decorator]
    @property
    def n_visible_axes(self) -> Literal[2, 3]:
        """Number of dims is derived from the length of `visible_axes`."""
        return cast(Literal[2, 3], len(self.visible_axes))

    @model_validator(mode="after")
    def _validate_model(self) -> "Self":
        # prevent channel_axis from being in visible_axes
        if self.channel_axis in self.visible_axes:
            warnings.warn(
                "Channel_axis cannot be in visible_axes. Setting channel_axis to None.",
                UserWarning,
                stacklevel=2,
            )
            self.channel_axis = None

        if (
            self.channel_axis is None
            and self.data_wrapper is not None
            and self.channel_mode != ChannelMode.GRAYSCALE
        ):
            self.channel_axis = self.data_wrapper.guess_channel_axis()

        return self

    @property
    def normed(self) -> "NormedAxes":
        """Return the normalized axes and index for the current display."""
        if not self.data_wrapper:
            raise ValueError("Cannot normalize axes without data.")
        return NormedAxes(data_wrapper=self.data_wrapper, model=self)

    def current_slice_requests(self) -> list[DataRequest]:
        """Return the current index request for the data.

        This reconciles the `current_index` and `visible_axes` attributes of the display
        with the available dimensions of the data to return a valid index request.
        In the returned mapping, the keys are the canonicalized (non-negative integer)
        axis indices and the values are either integers or slices (where axes present
        in `visible_axes` are guaranteed to be slices rather than integers).
        """
        if self.data_wrapper is None:
            return []

        requested_slice = self.normed.current_slices

        # if we need to request multiple channels (composite mode or RGB),
        # ensure that the channel axis is also sliced
        if c_ax := self.normed.channel_axis:
            if self.channel_mode.is_multichannel():
                if not isinstance(requested_slice.get(c_ax), slice):
                    requested_slice[c_ax] = slice(None)
            else:
                # somewhat of a hack.
                # we heed DataRequest.channel_axis to be None if we want the view
                # to use the default_lut
                c_ax = None

        # ensure that all axes are slices, so that we don't lose any dimensions.
        # data will be squeezed to remove singleton dimensions later after
        # transposing according to the order of visible axes
        # (this operation happens below in `current_data_slice`)
        for ax, val in requested_slice.items():
            if isinstance(val, int):
                requested_slice[ax] = slice(val, val + 1)

        return [
            DataRequest(
                wrapper=self.data_wrapper,
                index=requested_slice,
                visible_axes=self.normed.visible_axes,
                channel_axis=c_ax,
            )
        ]

    # TODO: make async
    def request_sliced_data(self) -> list[Future[DataResponse]]:
        """Return the slice of data requested by the current index (synchronous)."""
        if not (requests := self.current_slice_requests()):
            return []

        futures: list[Future[DataResponse]] = []
        for req in requests:
            data = req.wrapper.isel(req.index)

            # for transposing according to the order of visible axes
            vis_ax = req.visible_axes
            t_dims = vis_ax + tuple(i for i in range(data.ndim) if i not in vis_ax)

            if (ch_ax := req.channel_axis) is not None:
                ch_indices: Iterable[Optional[int]] = range(data.shape[ch_ax])
            else:
                ch_indices = (None,)

            for i in ch_indices:
                if i is None:
                    ch_data = data
                else:
                    ch_keepdims = (slice(None),) * cast(int, ch_ax) + (i,) + (None,)
                    ch_data = data[ch_keepdims]
                future = Future[DataResponse]()
                future.set_result(
                    DataResponse(
                        data=ch_data.transpose(*t_dims).squeeze(),
                        channel_key=i,
                    )
                )
                futures.append(future)

        return futures


class NormedAxes:
    def __init__(self, data_wrapper: DataWrapper, model: ArrayDisplayModel) -> None:
        self._data_wrapper = data_wrapper
        self._model = model

    @property
    def data_coords(self) -> Mapping[int, Sequence]:
        """Return the coordinates of the data in canonical form."""
        if self._data_wrapper is None:
            return {}
        return {
            self._data_wrapper.normalized_axis_key(d): self._data_wrapper.coords[d]
            for d in self._data_wrapper.dims
        }

    @property
    def visible_axes(self) -> tuple[int, ...]:
        """Return the visible axes in canonical form."""
        return tuple(
            self._data_wrapper.normalized_axis_key(ax)
            for ax in self._model.visible_axes
        )

    @property
    def channel_axis(self) -> Optional[int]:
        """Return the channel axis in canonical form."""
        if self._model.channel_axis is None:
            return None
        return self._data_wrapper.normalized_axis_key(self._model.channel_axis)

    @property
    def current_index(self) -> Mapping[int, Union[int, slice]]:
        """Return the current index in canonical form."""
        return {
            self._data_wrapper.normalized_axis_key(ax): v
            for ax, v in self._model.current_index.items()
        }

    @property
    def current_slices(self) -> dict[int, Union[int, slice]]:
        """Return the current index as a tuple of slices."""
        # first ensure that all visible axes (those that will be displayed in the view)
        # are slices and present in the request.
        requested = dict(self.current_index)
        for ax in self.visible_axes:
            if not isinstance(requested.get(ax), slice):
                requested[ax] = slice(None)
        return requested
