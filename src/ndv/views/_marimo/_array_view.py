from __future__ import annotations

from typing import TYPE_CHECKING, Any

from ndv.views._jupyter._array_view import JupyterArrayView

if TYPE_CHECKING:
    from ndv.models._viewer_model import ArrayViewerModel

_HIST_WRAP = (
    '<div class="ndv-hist-wrap" style="display:none;overflow:hidden">'
    "%(hist_html)s"
    "</div>"
)


class MarimoArrayView(JupyterArrayView):
    """ArrayView for marimo -- composes widgets via mo.vstack instead of VBox."""

    def __init__(
        self,
        canvas_widget: Any,
        viewer_model: ArrayViewerModel,
    ) -> None:
        super().__init__(canvas_widget, viewer_model)
        import marimo as mo

        self._mo_canvas = mo.ui.anywidget(self._canvas_widget)
        self._mo_histogram: Any | None = None

    def set_histogram_widget(self, widget: Any) -> None:
        import marimo as mo

        super().set_histogram_widget(widget)
        self._mo_histogram = mo.ui.anywidget(widget)

    def frontend_widget(self) -> Any:
        import marimo as mo

        parts: list[Any] = [self._mo_canvas, self._widget]
        if self._mo_histogram is not None:
            hist_html = mo.as_html(self._mo_histogram).text
            parts.append(mo.Html(_HIST_WRAP % {"hist_html": hist_html}))
        return mo.vstack(parts, gap=0)

    def _set_histogram_visible(self, visible: bool) -> None:
        # Visibility is toggled via DOM event from ndv-viewer JS.
        pass

    def set_visible(self, visible: bool) -> None:
        if visible:
            import marimo as mo

            mo.output.replace(self.frontend_widget())

    def close(self) -> None:
        self._viewer_model.events.disconnect(self._on_viewer_model_event)
        self._widget.events._js_event.disconnect(self._on_js_event)
        self._widget.events.channel_mode.disconnect(self._on_channel_mode_field_changed)
