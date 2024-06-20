"""Models for display on a canvas."""

from abc import abstractmethod
from typing import Literal, Protocol

import cmap
import numpy as np
from qtpy import QtWidgets


class Texture(Protocol):
    """A thing representing a backend Texture that can be updated with new data."""

    def set_data(self, data: np.ndarray, offset: tuple[int, int, int] | None) -> None:
        """Update the texture with new data.

        If offset is None, then the entire texture is replaced.
        """

    def set_clims(self, clims: tuple[float, float]) -> None:
        """Set the contrast limits for the texture."""

    def set_gamma(self, gamma: float) -> None:
        """Set the gamma correction for the texture."""

    def set_cmap(self, cmap: cmap.Colormap) -> None:
        """Set the colormap for the texture."""

    def set_visible(self, visible: bool) -> None:
        """Set the visibility of the texture."""


class Canvas(Protocol):
    """Protocol for a canvas that can display images and volumes."""

    @abstractmethod
    def set_ndim(self, ndim: Literal[2, 3]) -> None:
        """Prepare the canvas for 2D or 3D rendering."""

    def set_range(
        self,
        x: tuple[float, float] | None = None,
        y: tuple[float, float] | None = None,
        z: tuple[float, float] | None = None,
        margin: float = ...,
    ) -> None:
        """Set the visible range of the canvas in world coordinates."""

    def refresh(self) -> None:
        """Refresh the canvas."""

    def qwidget(self) -> QtWidgets.QWidget:
        """Return the QWidget for this canvas."""

    def add_image(self, data: np.ndarray | None = ...) -> Texture:
        """Add a 2D image to the canvas, return a handle to the image texture."""

    def add_volume(self, data: np.ndarray | None = ...) -> Texture:
        """Add a 3D volume to the canvas, return a handle to the volume texture."""

    def canvas_to_world(
        self, pos_xy: tuple[float, float]
    ) -> tuple[float, float, float]:
        """Map XY canvas position (pixels) to XYZ coordinate in world space."""
