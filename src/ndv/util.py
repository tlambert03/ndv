"""Utility and convenience functions."""

from __future__ import annotations

from collections import UserDict
from typing import TYPE_CHECKING, Any, Never, TypedDict, overload

from ndv.controllers import ArrayViewer
from ndv.views._app import run_app

if TYPE_CHECKING:
    from typing import Unpack

    from .models._array_display_model import ArrayDisplayModel, ArrayDisplayModelKwargs
    from .models._data_wrapper import DataWrapper


@overload
def imshow(
    data: Any | DataWrapper, /, display_model: ArrayDisplayModel = ...
) -> ArrayViewer: ...
@overload
def imshow(
    data: Any | DataWrapper, /, **kwargs: Unpack[ArrayDisplayModelKwargs]
) -> ArrayViewer: ...
def imshow(
    data: Any | DataWrapper,
    /,
    display_model: ArrayDisplayModel | None = None,
    **kwargs: Unpack[ArrayDisplayModelKwargs],
) -> ArrayViewer:
    """Display an array or DataWrapper in a new `ArrayViewer` window.

    This convenience function creates an `ArrayViewer` instance populated with `data`,
    calls `show()` on it, and then runs the application.

    Parameters
    ----------
    data : Any | DataWrapper
        The data to be displayed. Any ArrayLike object or an `ndv.DataWrapper`.
    display_model: ArrayDisplayModel, optional
        The display model to use. If not provided, a new one will be created.
    kwargs : Unpack[ArrayDisplayModelKwargs]
        Additional keyword arguments used to create the
        [`ArrayDisplayModel`][ndv.models.ArrayDisplayModel].

    Returns
    -------
    ArrayViewer
        The `ArrayViewer` instance.
    """
    viewer = ArrayViewer(data, display_model, **kwargs)
    viewer.show()

    run_app()
    return viewer


class SysInfo(TypedDict, total=False):
    a: int


def no_setitem(*_: Any) -> Never:
    raise TypeError("SysInfo is read-only.")


def sys_info() -> SysInfo:
    x = SysInfo(a=1)
    x.__setitem__ = no_setitem
    x["sag"] = 45
    return x
