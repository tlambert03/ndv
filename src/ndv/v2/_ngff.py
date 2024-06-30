import json
import warnings
from contextlib import suppress
from typing import (
    Any,
    Iterator,
    Literal,
    Mapping,
    NotRequired,
    Required,
    TypedDict,
    cast,
)
from urllib.error import HTTPError
from urllib.request import urlopen

import tensorstore as ts

SpaceUnit = Literal[
    "angstrom",
    "attometer",
    "centimeter",
    "decimeter",
    "exameter",
    "femtometer",
    "foot",
    "gigameter",
    "hectometer",
    "inch",
    "kilometer",
    "megameter",
    "meter",
    "micrometer",
    "mile",
    "millimeter",
    "nanometer",
    "parsec",
    "petameter",
    "picometer",
    "terameter",
    "yard",
    "yoctometer",
    "yottameter",
    "zeptometer",
    "zettameter",
]


TimeUnit = Literal[
    "attosecond",
    "centisecond",
    "day",
    "decisecond",
    "exasecond",
    "femtosecond",
    "gigasecond",
    "hectosecond",
    "hour",
    "kilosecond",
    "megasecond",
    "microsecond",
    "millisecond",
    "minute",
    "nanosecond",
    "petasecond",
    "picosecond",
    "second",
    "terasecond",
    "yoctosecond",
    "yottasecond",
    "zeptosecond",
    "zettasecond",
]


class _Axis(TypedDict, total=False):
    name: Required[str]


class TimeAxis(_Axis):
    type: Literal["time"]
    unit: TimeUnit | str


class SpaceAxis(_Axis):
    type: Literal["space"]
    unit: SpaceUnit | str


class ChannelAxis(_Axis):
    type: Literal["channel"]
    unit: str


class AnyAxis(_Axis):
    type: str
    unit: str


Axis = TimeAxis | SpaceAxis | ChannelAxis | AnyAxis


class CoordinateTransformation(TypedDict):
    type: Literal["translation", "scale"]
    scale: list[float]
    translation: NotRequired[list[float]]


class DataSet(TypedDict):
    path: str
    coordinateTransformations: list[CoordinateTransformation]


class MultiscaleV4(TypedDict, total=False):
    # must contain 2-3 entries of type:space
    # order must correspond to order of dimensions in datasets
    # order must be Time (if present), C (if present), Space
    axes: Required[list[Axis]]
    # length of "axes" MUST be equal to the number of dimensions of
    # the arrays that contain the image data.
    # all datasets must have the same number of dimensions, no greater than 5
    datasets: Required[list[DataSet]]

    # SHOULD
    name: str
    version: Literal["0.4"]
    # type of downscaling method used to generate the multiscale image pyramid
    type: str
    # additional information about the downscaling method.
    metadata: dict[str, Any]

    # MAY
    coordinateTransformations: list[CoordinateTransformation]


class NgffZattrs(TypedDict):
    multiscales: list[MultiscaleV4]


def get_multiscales(base_url: str) -> list[MultiscaleV4] | None:
    """Look for multiscales info in a base_url/.zattrs file."""
    with suppress(HTTPError):
        with urlopen(f"{base_url.rstrip("/")}/.zattrs") as f:
            data = json.load(f)
            if "multiscales" in data:
                return cast("NgffZattrs", data)["multiscales"]
    return None


def get_zgroup(base_url: str) -> Any | None:
    """Look for multiscales info in a base_url/.zattrs file."""
    with suppress(HTTPError):
        with urlopen(f"{base_url.rstrip("/")}/.zgroup") as f:
            return json.load(f)
    return None


class NGFFTensorStore(Mapping[str, ts.TensorStore]):
    def __init__(self, base_url: str) -> None:
        if not (multiscales := get_multiscales(base_url)):
            raise ValueError(f"No multiscales found at {base_url}")

        if len(multiscales) > 1:
            warnings.warn(
                "Only first multiscales supported, using the first one",
                UserWarning,
                stacklevel=2,
            )
        self.base_url = base_url
        self._multiscales = multiscales[0]
        self.name = self._multiscales.get("name", "")
        self.scales: dict[str, Mapping[str, float]] = {}
        self.ratios: dict[tuple[float, ...], str] = {}
        self.axes = {ax["name"]: ax["type"] for ax in self._multiscales["axes"]}
        self.ndim = len(self.axes)
        self._stores: dict[str, ts.TensorStore] = {}

        if isinstance(group := get_zgroup(base_url), dict):
            fmt = group.get("zarr_format", 2)
            if fmt not in (2, 3):
                raise ValueError(f"Unsupported zarr format: {fmt}")
            self._driver = "zarr3" if fmt == 3 else "zarr"

        for i, ds in enumerate(self._multiscales["datasets"]):
            # TODO: multiple transformations?
            tform = ds["coordinateTransformations"][0]
            self.scales[ds["path"]] = dict(zip(self.axes, tform["scale"]))
            if i == 0:
                scale0 = ds["path"]
                self.ratios[(1,) * self.ndim] = scale0
            else:
                self.ratios[
                    tuple(
                        self.scales[ds["path"]][ax] / self.scales[scale0][ax]
                        for ax in self.axes
                    )
                ] = ds["path"]

    def __getitem__(self, key: str) -> ts.TensorStore:
        """Return a TensorStore for the given key."""
        if key not in self._stores:
            self._stores[key] = ts.open(self._spec(key)).result()
        return self._stores[key]

    def _spec(self, key: str) -> dict[str, Any]:
        """Return the spec for the given key."""
        return {
            "driver": self._driver,
            "kvstore": f"{self.base_url}/{key}",
            "transform": {"input_labels": list(self.axes)},
        }

    def __iter__(self) -> Iterator[str]:
        """Yield the paths of the datasets in the multiscale."""
        yield from self.scales

    def __len__(self) -> int:
        """Return the number of datasets in the multiscale."""
        return len(self.scales)

    def __repr__(self) -> str:
        """Return a string representation of the MultiscaleTensorStore."""
        return (
            f"{type(self).__name__}({self.name!r} @ {self.base_url!r} - "
            f"{len(self.scales)} scales)"
        )
