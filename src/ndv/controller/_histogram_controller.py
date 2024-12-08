from functools import cached_property
from typing import TYPE_CHECKING

import numpy as np
from psygnal import Signal

from ndv.models._lut_model import LUTModel
from ndv.views import get_histogram_canvas_class, get_histogram_frontend_class

if TYPE_CHECKING:
    from ndv.views._vispy._vispy import VispyHistogramCanvas
    from ndv.views.protocols import PHistogramView


class Stats:
    """A simple class to hold statistics for display in the histogram view."""

    dataChanged = Signal()

    def __init__(self) -> None:
        self._data = np.zeros([])
        self.bins = 256

    def set_data(self, data: np.ndarray) -> None:
        """Set the data to compute statistics on."""
        self._data = data.flatten()
        self._reset_cache()
        self.dataChanged.emit()

    def _reset_cache(self) -> None:
        """Reset the cached properties."""
        for name in dir(type(self)):
            attr = getattr(type(self), name, None)
            if isinstance(attr, cached_property) and hasattr(self, name):
                delattr(self, name)

    @cached_property
    def average(self) -> float:
        """Computes the average of the dataset."""
        return float(np.mean(self._data))

    @cached_property
    def histogram(self) -> tuple[np.ndarray, np.ndarray]:
        """Computes the histogram of the dataset."""
        return np.histogram(self._data, bins=self.bins)

    @cached_property
    def maximum(self) -> float:
        return float(np.max(self._data))

    @cached_property
    def minimum(self) -> float:
        return float(np.min(self._data))

    @cached_property
    def standard_deviation(self) -> float:
        """Computes the standard deviation of the dataset."""
        if self._data is None:
            return float("nan")
        return float(np.std(self._data))


class HistogramController:
    """Manages the connection between a LUTModel, statistics and a histogram view."""

    def __init__(self, lut: LUTModel) -> None:
        """Initializes a HistogramController.

        Properties
        ----------
        lut : LUTModel | None
            An initial LUTModel to attach.
        stats : Stats | None
            Initial statistics for display
        """
        # Canvas backend
        self._hist: VispyHistogramCanvas = get_histogram_canvas_class()()
        self._hist.climsChanged.connect(self._on_view_clims_update)
        self._hist.gammaChanged.connect(self._on_view_gamma_update)
        # Widget frontend
        self._view: PHistogramView = get_histogram_frontend_class()(self._hist)

        # Set initial statistics
        self.stats = Stats()
        self.stats.dataChanged.connect(self._on_stats_data_update)
        # Set initial lut
        self._lut: LUTModel | None = None
        self.lut = lut

    @property
    def lut(self) -> LUTModel | None:
        """Return the LUTModel currently attached."""
        return self._lut

    @lut.setter
    def lut(self, lut: LUTModel | None) -> None:
        """Sets the attached LUTModel."""
        connections = [
            ("clims", self._on_model_clims_update),
            ("cmap", self._on_model_cmap_update),
            ("gamma", self._on_model_gamma_update),
            ("visible", self._on_model_visible_update),
        ]
        old = self._lut
        self._lut = lut

        for signal_name, slot in connections:
            if old is not None:
                # Detach old LUT
                getattr(old.events, signal_name).disconnect(slot)
            if self._lut is not None:
                # Attach new LUT
                getattr(self._lut.events, signal_name).connect(slot)
            # Synchronize histogram with new LUT
            slot()

    def show(self) -> None:
        """Show the viewer."""
        self._view.show()

    # -- Private helpers -- #

    def _on_model_cmap_update(self) -> None:
        """Runs when the model's cmap changes."""
        # FIXME: Discrepancy between LUTModel and LUTView
        if self._lut:
            self._hist.set_colormap(self._lut.cmap)

    def _on_model_clims_update(self) -> None:
        """Runs when the model's clims change."""
        # FIXME: Discrepancy between LUTModel and LUTView
        if self._lut and (clims := self._lut.clims):
            print("clims updated", self._lut.clims)
            self._hist.set_clims(clims)

    def _on_model_gamma_update(self) -> None:
        """Runs when the model's gamma changes."""
        if self._lut:
            self._hist.set_gamma(self._lut.gamma)

    def _on_model_visible_update(self) -> None:
        """Runs when the model's visibility changes."""
        visible = False if self._lut is None else self._lut.visible
        self._hist.set_lut_visible(visible)

    def _on_view_clims_update(self, clims: tuple[float, float]) -> None:
        """Runs when the user updates the clims on the view."""
        if self._lut is not None:
            self._lut.clims = clims

    def _on_view_gamma_update(self, gamma: float) -> None:
        """Runs when the user updates the gamma on the view."""
        if self._lut is not None:
            self._lut.gamma = gamma

    def _on_stats_data_update(self) -> None:
        """Runs when the stats data changes."""
        self._hist.set_data(*self.stats.histogram)
