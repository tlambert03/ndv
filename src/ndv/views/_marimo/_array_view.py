from __future__ import annotations

from typing import TYPE_CHECKING, Any

from ndv.views._jupyter._array_view import JupyterArrayView

if TYPE_CHECKING:
    from ndv.models._viewer_model import ArrayViewerModel


class MarimoArrayView(JupyterArrayView):
    """ArrayView for marimo -- composes widgets via mo.vstack instead of VBox."""

    def __init__(
        self,
        canvas_widget: Any,
        viewer_model: ArrayViewerModel,
    ) -> None:
        super().__init__(canvas_widget, viewer_model)

    def frontend_widget(self) -> Any:
        import marimo as mo

        canvas = mo.ui.anywidget(self._canvas_widget)
        # NdvWidgetState uses the @widget descriptor — pass it directly
        # so marimo's _repr_mimebundle_ formatter handles it.
        controls = self._widget

        parts: list[Any] = [canvas, controls]
        if self._shared_histogram is not None:
            hist_fw = self._shared_histogram.frontend_widget()
            parts.append(mo.ui.anywidget(hist_fw))
        return mo.vstack(parts, gap=0)

    def set_visible(self, visible: bool) -> None:
        if visible:
            import marimo as mo

            mo.output.replace(self.frontend_widget())

    def close(self) -> None:
        self._viewer_model.events.disconnect(self._on_viewer_model_event)
        self._widget.events._js_event.disconnect(self._on_js_event)
        self._widget.events.channel_mode.disconnect(self._on_channel_mode_field_changed)
