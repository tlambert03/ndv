from __future__ import annotations

import warnings
from contextlib import suppress
from typing import TYPE_CHECKING, Any, Literal, cast

import numpy as np
import vispy
import vispy.scene
import vispy.visuals
from vispy import scene
from vispy.util.quaternion import Quaternion

from ndv.v2.canvas import Canvas, Texture

if TYPE_CHECKING:
    import cmap
    from qtpy.QtWidgets import QWidget

turn = np.sin(np.pi / 4)
DEFAULT_QUATERNION = Quaternion(turn, turn, 0, 0)


class VispyImageHandle(Texture):
    def __init__(self, visual: scene.Image | scene.Volume) -> None:
        self._visual = visual
        self._ndim = 2 if isinstance(visual, scene.Image) else 3

    @property
    def data(self) -> np.ndarray:
        try:
            return self._visual._data  # type: ignore [no-any-return]
        except AttributeError:
            return self._visual._last_data  # type: ignore [no-any-return]

    @data.setter
    def data(self, data: np.ndarray) -> None:
        if not data.ndim == self._ndim:
            warnings.warn(
                f"Got wrong number of dimensions ({data.ndim}) for vispy "
                f"visual of type {type(self._visual)}.",
                stacklevel=2,
            )
            return
        self._visual.set_data(data)

    def set_data(
        self, data: np.ndarray, offset: tuple[int, int, int] | None = None
    ) -> None:
        if offset is None:
            self._visual.set_data(data)
        else:
            raise NotImplementedError

    @property
    def visible(self) -> bool:
        return bool(self._visual.visible)

    @visible.setter
    def visible(self, visible: bool) -> None:
        self._visual.visible = visible

    @property
    def clim(self) -> Any:
        return self._visual.clim

    @clim.setter
    def clim(self, clims: tuple[float, float]) -> None:
        with suppress(ZeroDivisionError):
            self._visual.clim = clims

    @property
    def cmap(self) -> cmap.Colormap:
        return self._cmap

    @cmap.setter
    def cmap(self, cmap: cmap.Colormap) -> None:
        self._cmap = cmap
        self._visual.cmap = cmap.to_vispy()

    @property
    def transform(self) -> np.ndarray:
        raise NotImplementedError

    @transform.setter
    def transform(self, transform: np.ndarray) -> None:
        raise NotImplementedError

    def remove(self) -> None:
        self._visual.parent = None


class VispyViewerCanvas(Canvas):
    """Vispy-based viewer for data.

    All vispy-specific code is encapsulated in this class (and non-vispy canvases
    could be swapped in if needed as long as they implement the same interface).
    """

    def __init__(self) -> None:
        self._canvas = scene.SceneCanvas()
        self._current_shape: tuple[int, ...] = ()
        self._last_state: dict[Literal[2, 3], Any] = {}

        central_wdg: scene.Widget = self._canvas.central_widget
        self._view: scene.ViewBox = central_wdg.add_view()
        self._ndim: Literal[2, 3] | None = None

    @property
    def _camera(self) -> vispy.scene.cameras.BaseCamera:
        return self._view.camera

    def set_ndim(self, ndim: Literal[2, 3]) -> None:
        """Set the number of dimensions of the displayed data."""
        if ndim == self._ndim:
            return
        elif self._ndim is not None:
            # remember the current state before switching to the new camera
            self._last_state[self._ndim] = self._camera.get_state()

        self._ndim = ndim
        if ndim == 3:
            cam = scene.ArcballCamera(fov=0)
            # this sets the initial view similar to what the panzoom view would have.
            cam._quaternion = DEFAULT_QUATERNION
        else:
            cam = scene.PanZoomCamera(aspect=1, flip=(0, 1))
            print("cam", cam)

        # restore the previous state if it exists
        if state := self._last_state.get(ndim):
            cam.set_state(state)
        self._view.camera = cam

    def qwidget(self) -> QWidget:
        return cast("QWidget", self._canvas.native)

    def refresh(self) -> None:
        self._canvas.update()

    def add_image(
        self, data: np.ndarray | None = None, cmap: cmap.Colormap | None = None
    ) -> VispyImageHandle:
        """Add a new Image node to the scene."""
        img = scene.Image(data, parent=self._view.scene, texture_format="auto")
        img.set_gl_state("additive", depth_test=False)
        img.interactive = True
        if data is not None:
            self._current_shape, prev_shape = data.shape, self._current_shape
            if not prev_shape:
                self.set_range()
        handle = VispyImageHandle(img)
        if cmap is not None:
            handle.cmap = cmap
        return handle

    def add_volume(
        self, data: np.ndarray | None = None, cmap: cmap.Colormap | None = None
    ) -> VispyImageHandle:
        vol = scene.Volume(data, parent=self._view.scene, interpolation="nearest")
        vol.set_gl_state("additive", depth_test=False)
        vol.interactive = True
        if data is not None:
            self._current_shape, prev_shape = data.shape, self._current_shape
            if len(prev_shape) != 3:
                self.set_range()
        handle = VispyImageHandle(vol)
        if cmap is not None:
            handle.cmap = cmap
        return handle

    def set_range(
        self,
        x: tuple[float, float] | None = None,
        y: tuple[float, float] | None = None,
        z: tuple[float, float] | None = None,
        margin: float = 0.01,
    ) -> None:
        """Update the range of the PanZoomCamera.

        When called with no arguments, the range is set to the full extent of the data.
        """
        if len(self._current_shape) >= 2:
            if x is None:
                x = (0, self._current_shape[-1])
            if y is None:
                y = (0, self._current_shape[-2])
        if z is None and len(self._current_shape) == 3:
            z = (0, self._current_shape[-3])
        is_3d = isinstance(self._camera, scene.ArcballCamera)
        if is_3d:
            self._camera._quaternion = DEFAULT_QUATERNION
        self._view.camera.set_range(x=x, y=y, z=z, margin=margin)
        if is_3d:
            max_size = max(self._current_shape)
            self._camera.scale_factor = max_size + 6

    def canvas_to_world(
        self, pos_xy: tuple[float, float]
    ) -> tuple[float, float, float]:
        """Map XY canvas position (pixels) to XYZ coordinate in world space."""
        return self._view.camera.transform.imap(pos_xy)[:3]  # type: ignore [no-any-return]