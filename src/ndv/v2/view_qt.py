from typing import Any

from qtpy import QtWidgets

from .view import ArrayViewer


class NDViewer(ArrayViewer, QtWidgets.QWidget):
    def __init__(self, *args: Any, **kwargs: Any):
        ArrayViewer.__init__(self, *args, **kwargs)
        QtWidgets.QWidget.__init__(self)

        layout = QtWidgets.QVBoxLayout(self)
        layout.addWidget(self._canvas.qwidget())
