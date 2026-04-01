import { LitElement, html } from "lit";
import "./ndv-dim-sliders.js";
import "./ndv-lut-panel.js";
import "./ndv-toolbar.js";

export class NdvViewer extends LitElement {
  // Use Light DOM so child widgets (jupyter-rfb, rendercanvas) get proper CSS
  createRenderRoot() {
    return this;
  }

  static properties = {
    model: { type: Object },
    _dataInfo: { state: true },
    _hoverInfo: { state: true },
    _sliders: { state: true },
    _luts: { state: true },
    _channelMode: { state: true },
    _channelModeOptions: { state: true },
    _showControls: { state: true },
    _showDataInfo: { state: true },
    _progressVisible: { state: true },
    _is3d: { state: true },
    _show3dButton: { state: true },
    _showChannelModeSelector: { state: true },
    _showResetZoomButton: { state: true },
    _showRoiButton: { state: true },
    _showHistogramButton: { state: true },
    _useSharedHistogram: { state: true },
    _sharedHistogramVisible: { state: true },
    _sharedHistogramLog: { state: true },
  };

  constructor() {
    super();
    this.model = null;
    this._dataInfo = "";
    this._hoverInfo = "";
    this._sliders = [];
    this._luts = [];
    this._channelMode = "grayscale";
    this._channelModeOptions = [];
    this._showControls = true;
    this._showDataInfo = true;
    this._progressVisible = false;
    this._is3d = false;
    this._show3dButton = true;
    this._showChannelModeSelector = true;
    this._showResetZoomButton = true;
    this._showRoiButton = false;
    this._showHistogramButton = true;
    this._useSharedHistogram = false;
    this._sharedHistogramVisible = false;
    this._sharedHistogramLog = false;
    this._cleanups = [];
    this._canvasView = null;
    this._sharedHistView = null;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.model) this._bindModel();
  }

  updated(changed) {
    if (changed.has("model") && this.model) this._bindModel();
  }

  _bindModel() {
    const m = this.model;
    const sync = (field, prop) => {
      this[prop] = m.get(field) ?? this[prop];
      const handler = () => {
        this[prop] = m.get(field);
      };
      m.on(`change:${field}`, handler);
      this._cleanups.push(() => m.off(`change:${field}`, handler));
    };

    sync("data_info", "_dataInfo");
    sync("hover_info", "_hoverInfo");
    sync("sliders", "_sliders");
    sync("luts", "_luts");
    sync("channel_mode", "_channelMode");
    sync("channel_mode_options", "_channelModeOptions");
    sync("show_controls", "_showControls");
    sync("show_data_info", "_showDataInfo");
    sync("progress_visible", "_progressVisible");
    sync("is_3d", "_is3d");
    sync("show_3d_button", "_show3dButton");
    sync("show_channel_mode_selector", "_showChannelModeSelector");
    sync("show_reset_zoom_button", "_showResetZoomButton");
    sync("show_roi_button", "_showRoiButton");
    sync("show_histogram_button", "_showHistogramButton");
    sync("use_shared_histogram", "_useSharedHistogram");
    sync("shared_histogram_visible", "_sharedHistogramVisible");
    sync("shared_histogram_log", "_sharedHistogramLog");

    this._embedCanvas();

    const onSharedHist = () => this._embedSharedHistogram();
    m.on("change:_shared_histogram_model_id", onSharedHist);
    this._cleanups.push(() =>
      m.off("change:_shared_histogram_model_id", onSharedHist),
    );
  }

  async _embedCanvas() {
    const canvasId = this.model.get("_canvas_model_id");
    if (!canvasId) return;

    await this.updateComplete;
    const container = this.querySelector(".ndv-canvas-container");
    if (!container) return;

    try {
      const childModel = await this.model.widget_manager.get_model(canvasId);
      const childView = await this.model.widget_manager.create_view(childModel);
      if (this._canvasView) {
        this._canvasView.remove();
      }
      this._canvasView = childView;
      container.prepend(childView.el);
      childView.trigger("displayed");
    } catch (e) {
      console.error("ndv: Failed to embed canvas:", e);
    }
  }

  async _embedSharedHistogram() {
    const histId = this.model.get("_shared_histogram_model_id");
    await this.updateComplete;
    const container = this.querySelector(".ndv-shared-histogram");
    if (!container) return;

    if (this._sharedHistView) {
      this._sharedHistView.remove();
      this._sharedHistView = null;
    }
    if (this._histResizeObserver) {
      this._histResizeObserver.disconnect();
      this._histResizeObserver = null;
    }
    if (!histId) return;

    try {
      const childModel = await this.model.widget_manager.get_model(histId);
      const childView = await this.model.widget_manager.create_view(childModel);
      this._sharedHistView = childView;
      container.innerHTML = "";
      container.appendChild(childView.el);
      childView.trigger("displayed");

      // Watch the container for size changes and relay to Python so the
      // vispy canvas can re-render at the correct resolution.
      this._histResizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          if (width > 0 && height > 0 && this.model) {
            this.model.set("_js_event", {
              type: "shared_histogram_resize",
              width: Math.round(width),
              height: Math.round(height),
              ratio: window.devicePixelRatio || 1,
            });
            this.model.save_changes();
          }
        }
      });
      this._histResizeObserver.observe(container);
    } catch (e) {
      console.error("ndv: Failed to embed shared histogram:", e);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    for (const cleanup of this._cleanups) cleanup();
    this._cleanups = [];
    if (this._canvasView) this._canvasView.remove();
    if (this._sharedHistView) this._sharedHistView.remove();
    if (this._histResizeObserver) {
      this._histResizeObserver.disconnect();
      this._histResizeObserver = null;
    }
  }

  render() {
    return html`
      <div class="ndv-root">
        <div class="ndv-info-bar ${this._showDataInfo ? "" : "ndv-hidden"}">
          <span>${this._dataInfo}</span>
          <span>${this._hoverInfo}</span>
        </div>

        <div class="ndv-canvas-container">
          <div
            class="ndv-spinner ${this._progressVisible ? "ndv-visible" : ""}"
          ></div>
        </div>

        <ndv-dim-sliders
          class="${this._showControls ? "" : "ndv-hidden"}"
          .sliders=${this._sliders}
          .model=${this.model}
        ></ndv-dim-sliders>

        <ndv-lut-panel
          class="${this._showControls ? "" : "ndv-hidden"}"
          .luts=${this._luts}
          .model=${this.model}
          .showHistogramButton=${this._showHistogramButton}
          .useSharedHistogram=${this._useSharedHistogram}
        ></ndv-lut-panel>

        <div
          class="ndv-shared-histogram ${this._sharedHistogramVisible ? "" : "ndv-hidden"}"
        ></div>

        <ndv-toolbar
          class="${this._showControls ? "" : "ndv-hidden"}"
          .model=${this.model}
          .channelMode=${this._channelMode}
          .channelModeOptions=${this._channelModeOptions}
          .is3d=${this._is3d}
          .show3dButton=${this._show3dButton}
          .showChannelModeSelector=${this._showChannelModeSelector}
          .showResetZoomButton=${this._showResetZoomButton}
          .showRoiButton=${this._showRoiButton}
          .showHistogramButton=${this._showHistogramButton}
          .useSharedHistogram=${this._useSharedHistogram}
          .sharedHistogramVisible=${this._sharedHistogramVisible}
          .sharedHistogramLog=${this._sharedHistogramLog}
        ></ndv-toolbar>
      </div>
    `;
  }
}

if (!customElements.get("ndv-viewer")) customElements.define("ndv-viewer", NdvViewer);
