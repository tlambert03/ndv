"""General model for ndv."""

import warnings
from contextlib import suppress
from typing import (
    Annotated,
    Any,
    Callable,
    Literal,
    Mapping,
    Protocol,
    Self,
    Sequence,
    SupportsIndex,
    TypeAlias,
    cast,
)

import numpy as np
import numpy.typing as npt
from cmap import Colormap
from psygnal import EventedModel
from pydantic import (
    ConfigDict,
    Field,
    PlainValidator,
    computed_field,
    field_validator,
    model_validator,
)

_ShapeLike = SupportsIndex | Sequence[SupportsIndex]

# The Term "Axis" is used when referring to a specific dimension of an array
# We can change this to dimension if desired... but it should be uniform.

# Axis keys can be either a direct integer index or name (for labeled arrays)
# we leave it to the DataWrapper to convert `AxisKey -> AxisIndex`
AxisIndex: TypeAlias = int
AxisLabel: TypeAlias = str
AxisKey: TypeAlias = AxisIndex | AxisLabel

# a specific position along a dimension
CoordIndex: TypeAlias = int | str


def _to_slice(val: Any) -> slice:
    if isinstance(val, slice):
        return val
    if isinstance(val, int):
        return slice(val, val + 1)
    if isinstance(val, Sequence) and not isinstance(val, str):
        return slice(*(int(x) if x is not None else None for x in val))
    raise TypeError(f"Expected int or slice, got {type(val)}")


Slice = Annotated[slice, PlainValidator(_to_slice)]


class Reducer(Protocol):
    """Function to reduce an array along an axis."""

    def __call__(self, a: npt.ArrayLike, axis: _ShapeLike | None = ...) -> Any:
        """Reduce an array along an axis."""

    @classmethod
    def __get_pydantic_core_schema__(cls, source: Any) -> Any:
        """Get the Pydantic schema for this object."""
        from pydantic_core import core_schema

        def decode(obj: Any) -> Callable:
            if isinstance(obj, str):
                try:
                    mod_name, qual_name = obj.rsplit(".", 1)
                    mod = __import__(mod_name, fromlist=[qual_name])
                    obj = getattr(mod, qual_name)
                except Exception:
                    try:
                        obj = getattr(np, obj)
                    except Exception:
                        raise

            if callable(obj):
                return cast("Callable", obj)
            raise TypeError(f"Expected a callable or string, got {type(obj)}")

        @core_schema.plain_serializer_function_ser_schema
        def ser_schema(obj: Callable) -> str:
            return obj.__module__ + "." + obj.__qualname__

        return core_schema.no_info_before_validator_function(
            decode,
            core_schema.any_schema(),
            serialization=ser_schema,
        )


class _NDVModel(EventedModel):
    model_config = ConfigDict(
        validate_assignment=True,
        validate_default=True,
    )


class ArrayDisplayModel(_NDVModel):
    """Model of how to display an array."""

    # VISIBLE AXIS SELECTION

    visible_axes: tuple[AxisKey, AxisKey, AxisKey] | tuple[AxisKey, AxisKey] = (-2, -1)
    """Ordered list of axes to visualize, from slowest to fastest.

    e.g. ('z', -2, -1)
    """

    @computed_field
    def n_visible_axes(self) -> Literal[2, 3]:
        """Number of dims is derived from the length of `visible_axes`."""
        return cast(Literal[2, 3], len(self.visible_axes))

    # INDEXING AND REDUCTION

    current_index: Mapping[AxisKey, int | Slice] = Field(default_factory=dict)
    """The currently displayed position/slice along each dimension.

    e.g. {0: 0, 'time': slice(10, 20)}
z
    Not all axes need be present, and axes not present are assumed to
    be slice(None), meaning it is up to the controller of this model to restrict
    indices to an efficient range for retrieval.

    If the number of non-singleton axes is greater than `n_visible_axes`,
    then reducers are used to reduce the data along the remaining axes.

    NOTE: In terms of requesting data, there is a slight "delocalization" of state here
    in that we probably also want to avoid requesting data for channel positions that
    are not visible.
    """

    reducers: Mapping[AxisKey | None, Reducer] = "max"  # type: ignore
    """Callable to reduce data along axes remaining after slicing.

    Ideally, the ufunc should accept an `axis` argument.  (TODO: what happens if not?)
    """

    @field_validator("reducers", mode="before")
    @classmethod
    def _validate_reducers(cls, v: Any) -> Any:
        if not isinstance(v, Mapping):
            v = {None: v}
        if "None" in v:
            v[None] = v.pop("None")
        return v

    # CHANNELS AND DISPLAY

    channel_axis: AxisKey | None = None
    """The dimension index or name of the channel dimension.

    The implication of setting channel_axis is that *all* elements along the channel
    dimension are shown, with different LUTs applied to each channel.

    NOTE: it is an error for channel_axis to be in `visible_axes` (or ignore it?)

    If None, then a single lookup table is used for all channels (`luts[None]`)
    """

    @model_validator(mode="after")
    def _validate_model(self) -> Self:
        if self.channel_axis in self.visible_axes:
            warnings.warn(
                f"Channel_axis cannot be in visible_axes. "
                f"Removing {self.channel_axis!r} from visible_axes",
                UserWarning,
                stacklevel=2,
            )
            self.channel_axis = None
        return self

    luts: Mapping[CoordIndex | None, "LUTModel"] = Field(
        default_factory=lambda: {None: LUTModel()}
    )
    """Instructions for how to display each channel of the array.

    Keys represent position along the dimension specified by `channel_axis`.
    Values are `LUT` objects that specify how to display the channel.

    The special key `None` is used to represent a fallback LUT for all channels,
    and is used when `channel_axis` is None.  It should always be present
    """

    @field_validator("luts", mode="before")
    @classmethod
    def _validate_luts(cls, v: Any) -> Any:
        if isinstance(v, Mapping):
            v = dict(v)
            if "None" in v:
                v[None] = v.pop("None")
            for key in list(v):
                with suppress(TypeError):
                    if isinstance(key, str) and key.isdigit():
                        v[int(key)] = v.pop(key)
        return v


class LUTModel(_NDVModel):
    """Representation of how to display a channel of an array."""

    visible: bool = True
    """Whether to display this channel.

    NOTE: This has implications for data retrieval, as we may not want to request
    channels that are not visible.  See current_index above.
    """

    cmap: Colormap = Field(default_factory=lambda: Colormap("gray"))
    """Colormap to use for this channel."""

    clims: tuple[float, float] | None = None
    """Contrast limits for this channel.

    TODO: What does `None` imply?  Autoscale?
    """

    gamma: float = 1.0
    """Gamma correction for this channel."""

    autoscale: bool | tuple[float, float] = (0, 1)
    """Whether to autoscale the colormap.

    If a tuple, then the first element is the lower quantile and the second element is
    the upper quantile.  If `True` or `(0, 1)` (np.min(), np.max()) should be used,
    otherwise, use np.quantile.  Nan values should be ignored (n.b. nanmax is slower
    and should only be used if necessary).
    """


class DataWrapper(Protocol):
    """What is required of a datasource."""

    @property
    def shape(self) -> tuple[int, ...]:
        """Shape of the data."""

    def axis_index(self, axis_key: AxisKey) -> AxisIndex:
        """Convert any axis key (int or str) to an axis index (int).

        Raises a KeyError if the axis_key is not found.
        Raises a IndexError if the axis_key is out of bounds.
        """
