import { LitElement, html } from "lit";
import { repeat } from "lit/directives/repeat.js";

export class NdvDimSliders extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    sliders: { type: Array },
    model: { type: Object },
  };

  constructor() {
    super();
    this.sliders = [];
    this.model = null;
    this._dragging = new Set();
  }

  _onSliderInput(e, slider) {
    const value = e.target.value;
    this._dragging.add(slider.axis);
    if (this.model) {
      this.model.set("_js_event", {
        type: "slider_changed",
        axis: slider.axis,
        value,
      });
      this.model.save_changes();
    }
  }

  _onSliderChange(e, slider) {
    this._dragging.delete(slider.axis);
  }

  render() {
    return html`
      ${repeat(
        this.sliders,
        (s) => s.axis,
        (s) => html`
          <div class="ndv-slider-row ${s.visible ? "" : "ndv-hidden"}">
            <span class="ndv-axis-label">${s.label}</span>
            <wa-slider
              size="small"
              min=${s.min}
              max=${s.max}
              .value=${this._dragging.has(s.axis) ? undefined : s.value}
              step=${s.step}
              with-tooltip
              @input=${(e) => this._onSliderInput(e, s)}
              @change=${(e) => this._onSliderChange(e, s)}
            ></wa-slider>
            <span class="ndv-value-label">${s.value} / ${s.max}</span>
          </div>
        `,
      )}
    `;
  }
}

if (!customElements.get("ndv-dim-sliders")) customElements.define("ndv-dim-sliders", NdvDimSliders);
