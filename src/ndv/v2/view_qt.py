from typing import Any

import superqt
from qtpy import QtWidgets

from ndv.v2.model import ArrayDisplayModel

from ._dims_slider import DimsSliders
from .view import ArrayViewer


class NDViewer(ArrayViewer, QtWidgets.QWidget):
    def __init__(self, data: Any = None, model: ArrayDisplayModel | None = None):
        QtWidgets.QWidget.__init__(self)
        self._dims = DimsSliders()
        self._dims.valueChanged.connect(self._on_dims_changed)

        ArrayViewer.__init__(self, data, model)

        layout = QtWidgets.QVBoxLayout(self)
        layout.addWidget(self._canvas.qwidget())
        layout.addWidget(self._dims)

    def set_data(self, data: Any) -> None:
        """Set data backing the view."""
        super().set_data(data)
        self._dims.setMaxima({k: v - 1 for k, v in self.data.sizes().items()})
        self._on_visible_axes_changed()

    def _on_current_index_changed(self, index) -> None:
        with superqt.utils.signals_blocked(self._dims):
            self._dims.setValue(
                {self.data.axis_index(ax): i for ax, i in index.items()}
            )
        super()._on_current_index_changed(index)

    def _on_visible_axes_changed(self) -> None:
        visible = {self.data.axis_index(ax) for ax in self.model.visible_axes}
        with superqt.utils.signals_blocked(self._dims):
            for dim in range(len(self.data.shape)):
                self._dims.set_dimension_visible(dim, dim not in visible)
        return super()._on_visible_axes_changed()

    def _on_dims_changed(self, current_index: dict) -> None:
        self.model.current_index = current_index
