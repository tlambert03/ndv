from __future__ import annotations

from collections.abc import Sequence
from pathlib import Path
from typing import TYPE_CHECKING, Any

import anywidget
import traitlets

from ndv.views._jupyter._array_view import (
    JupyterArrayView,
    JupyterLUTView,
)

if TYPE_CHECKING:
    from ndv._types import AxisKey, ChannelKey
    from ndv.models._viewer_model import ArrayViewerModel

_STATIC = Path(__file__).parent / "static"


def _read_or_stub(path: Path) -> str:
    if path.exists():
        return path.read_text(encoding="utf-8")
    return "export function render({ el }) { el.textContent = 'JS not built'; }"


# ---------------------------------------------------------------------------
# Widget 1: Status bar (data_info + hover_info)
# ---------------------------------------------------------------------------

class NdvStatusBarWidget(anywidget.AnyWidget):
    _esm = traitlets.Unicode(_read_or_stub(_STATIC / "ndv-marimo-status.js")).tag(
        sync=True
    )

    data_info = traitlets.Unicode("").tag(sync=True)
    hover_info = traitlets.Unicode("").tag(sync=True)
    show_data_info = traitlets.Bool(True).tag(sync=True)


# ---------------------------------------------------------------------------
# Widget 2: Controls (sliders + LUTs + toolbar)
# ---------------------------------------------------------------------------

class NdvControlsWidget(anywidget.AnyWidget):
    _esm = traitlets.Unicode(
        _read_or_stub(_STATIC / "ndv-marimo-controls.js")
    ).tag(sync=True)
    sliders = traitlets.List(traitlets.Dict(), default_value=[]).tag(sync=True)
    luts = traitlets.List(traitlets.Dict(), default_value=[]).tag(sync=True)

    channel_mode = traitlets.Unicode("grayscale").tag(sync=True)
    channel_mode_options = traitlets.List(
        traitlets.Dict(), default_value=[]
    ).tag(sync=True)

    is_3d = traitlets.Bool(False).tag(sync=True)
    show_controls = traitlets.Bool(True).tag(sync=True)
    show_3d_button = traitlets.Bool(True).tag(sync=True)
    show_channel_mode_selector = traitlets.Bool(True).tag(sync=True)
    show_reset_zoom_button = traitlets.Bool(True).tag(sync=True)
    show_roi_button = traitlets.Bool(False).tag(sync=True)
    show_histogram_button = traitlets.Bool(True).tag(sync=True)
    use_shared_histogram = traitlets.Bool(False).tag(sync=True)
    shared_histogram_visible = traitlets.Bool(False).tag(sync=True)
    shared_histogram_log = traitlets.Bool(False).tag(sync=True)

    progress_visible = traitlets.Bool(False).tag(sync=True)

    _js_event = traitlets.Dict(default_value={}).tag(sync=True)


# ---------------------------------------------------------------------------
# MarimoArrayView — three-widget composition
# ---------------------------------------------------------------------------

class MarimoLUTView(JupyterLUTView):
    """LUTView proxy that writes to NdvControlsWidget instead of NdvWidgetState."""

    def _update_lut_field(self, **kwargs: Any) -> None:
        luts = list(self._parent.luts)
        for i, lut in enumerate(luts):
            if lut["key"] == self._key_str:
                luts[i] = {**lut, **kwargs}
                break
        self._parent.luts = luts

    def close(self) -> None:
        self._parent.luts = [
            lt for lt in self._parent.luts if lt["key"] != self._key_str
        ]

    def frontend_widget(self) -> Any:
        return self._parent


class MarimoArrayView(JupyterArrayView):
    """ArrayView for marimo using three separate AnyWidget subclasses."""

    def __init__(
        self,
        canvas_widget: Any,
        viewer_model: ArrayViewerModel,
    ) -> None:
        self._viewer_model = viewer_model
        self._canvas_widget = canvas_widget
        self._visible_axes: Sequence[AxisKey] = []
        self._luts: dict[ChannelKey, JupyterLUTView] = {}
        self._current_index: dict[AxisKey, int] = {}
        self._shared_histogram = None

        # Widget 1: status bar
        self._status_widget = NdvStatusBarWidget()
        # Widget 2: controls (sliders + LUTs + toolbar)
        self._controls_widget = NdvControlsWidget()

        # For the base class methods that write to self._widget, point to controls
        self._widget = self._controls_widget  # type: ignore[assignment]

        # Sync initial viewer model flags
        self._sync_viewer_model_flags()
        self._viewer_model.events.connect(self._on_viewer_model_event)

        # Listen for JS events via traitlets observe
        self._updating_channel_mode = False
        self._controls_widget.observe(
            self._on_js_event_traitlet, names=["_js_event"]
        )
        self._controls_widget.observe(
            self._on_channel_mode_traitlet, names=["channel_mode"]
        )

    # ---- JS event handling (traitlets observe) ----

    def _on_js_event_traitlet(self, change: dict) -> None:
        event = change.get("new", {})
        if not event or "type" not in event:
            return
        self._handle_event(event["type"], event)

    def _on_channel_mode_traitlet(self, change: dict) -> None:
        if not self._updating_channel_mode:
            from ndv.models._array_display_model import ChannelMode

            self.channelModeChanged.emit(ChannelMode(change["new"]))

    # ---- Override psygnal event methods (base uses psygnal, we use traitlets) ----

    def _on_js_event(self) -> None:
        pass  # Not used — we use _on_js_event_traitlet

    def _on_channel_mode_field_changed(self) -> None:
        pass  # Not used — we use _on_channel_mode_traitlet

    # ---- Status bar fields ----

    def set_data_info(self, data_info: str) -> None:
        self._status_widget.data_info = data_info

    def set_hover_info(self, hover_info: str) -> None:
        self._status_widget.hover_info = hover_info

    # ---- Sync viewer model flags to both widgets ----

    def _sync_viewer_model_flags(self) -> None:
        from ndv.models._array_display_model import ChannelMode

        vm = self._viewer_model
        ctrl = self._controls_widget

        ctrl.show_3d_button = vm.show_3d_button
        ctrl.show_controls = vm.show_controls
        ctrl.show_channel_mode_selector = vm.show_channel_mode_selector
        ctrl.show_reset_zoom_button = vm.show_reset_zoom_button
        ctrl.show_roi_button = vm.show_roi_button
        ctrl.show_histogram_button = vm.show_histogram_button
        ctrl.use_shared_histogram = vm.use_shared_histogram
        ctrl.progress_visible = vm.show_progress_spinner
        ctrl.channel_mode_options = [
            {"value": m.value, "label": m.value, "enabled": True}
            for m in [ChannelMode.GRAYSCALE, ChannelMode.COMPOSITE, ChannelMode.RGBA]
        ]

        self._status_widget.show_data_info = vm.show_data_info

    def _on_viewer_model_event(self, info: Any) -> None:
        sig_name = info.signal.name
        value = info.args[0]
        ctrl_flags: dict[str, str] = {
            "show_progress_spinner": "progress_visible",
            "show_3d_button": "show_3d_button",
            "show_controls": "show_controls",
            "show_channel_mode_selector": "show_channel_mode_selector",
            "show_reset_zoom_button": "show_reset_zoom_button",
            "show_roi_button": "show_roi_button",
            "show_histogram_button": "show_histogram_button",
            "use_shared_histogram": "use_shared_histogram",
        }
        if sig_name in ctrl_flags:
            setattr(self._controls_widget, ctrl_flags[sig_name], value)
        elif sig_name == "show_data_info":
            self._status_widget.show_data_info = value
        elif sig_name == "interaction_mode":
            pass  # handled by JS side

    # ---- LUT views ----

    def add_lut_view(self, channel: Any) -> MarimoLUTView:
        import cmap as cmap_mod

        from ndv.views._jupyter._array_view import _cmap_css

        lut_view = MarimoLUTView(
            self._controls_widget, channel, self._viewer_model.default_luts
        )
        self._luts[channel] = lut_view

        key_str = str(channel)
        lut_options = []
        for x in self._viewer_model.default_luts:
            cm = cmap_mod.Colormap(x)
            name = cm.name.split(":")[-1]
            lut_options.append({"name": name, "css": _cmap_css(cm)})
        new_lut: dict[str, Any] = {
            "key": key_str,
            "name": key_str,
            "visible": True,
            "cmap_name": lut_options[0]["name"] if lut_options else "gray",
            "cmap_css": "",
            "cmap_options": lut_options,
            "clim_min": 0,
            "clim_max": 65535,
            "clim_bound_min": 0,
            "clim_bound_max": 65535,
            "auto_clim": True,
            "auto_lower_tail": 0,
            "auto_upper_tail": 0,
            "gamma": 1.0,
            "show_histogram_btn": self._viewer_model.show_histogram_button,
            "show_cmap": channel != "RGB",
            "row_visible": True,
        }
        self._controls_widget.luts = [*self._controls_widget.luts, new_lut]
        return lut_view

    def remove_lut_view(self, view: Any) -> None:
        if not isinstance(view, MarimoLUTView):
            return
        self._luts.pop(view._channel, None)
        self._controls_widget.luts = [
            lt for lt in self._controls_widget.luts if lt["key"] != view._key_str
        ]

    # ---- Shared histogram (displayed externally) ----

    def add_shared_histogram(self, widget: Any) -> None:
        self._shared_histogram = widget
        self._controls_widget.shared_histogram_visible = True
        self._refresh_output()

    def remove_shared_histogram(self) -> None:
        self._shared_histogram = None
        self._controls_widget.shared_histogram_visible = False
        self._refresh_output()

    # ---- Display ----

    def frontend_widget(self) -> Any:
        import marimo as mo

        if not hasattr(self, "_mo_canvas"):
            self._mo_canvas = mo.ui.anywidget(self._canvas_widget)
        if not hasattr(self, "_mo_status"):
            self._mo_status = mo.ui.anywidget(self._status_widget)
        if not hasattr(self, "_mo_controls"):
            self._mo_controls = mo.ui.anywidget(self._controls_widget)

        parts: list[Any] = [self._mo_status, self._mo_canvas]
        if self._shared_histogram is not None:
            hist_fw = self._shared_histogram.frontend_widget()
            parts.append(mo.ui.anywidget(hist_fw))
        parts.append(self._mo_controls)
        return mo.vstack(parts, gap=0)

    def _refresh_output(self) -> None:
        import marimo as mo

        mo.output.replace(self.frontend_widget())

    def set_visible(self, visible: bool) -> None:
        if visible:
            self._refresh_output()

    def close(self) -> None:
        self._viewer_model.events.disconnect(self._on_viewer_model_event)
        self._controls_widget.unobserve(
            self._on_js_event_traitlet, names=["_js_event"]
        )
        self._controls_widget.unobserve(
            self._on_channel_mode_traitlet, names=["channel_mode"]
        )
