import { LitElement, html } from "lit";

export class NdvLutRow extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    lut: { type: Object },
    model: { type: Object },
    showHistogramButton: { type: Boolean },
  };

  constructor() {
    super();
    this.lut = {};
    this.model = null;
    this.showHistogramButton = true;
  }

  _sendLutUpdate(fields) {
    if (!this.model) return;
    this.model.set("_js_event", {
      type: "update_lut",
      key: this.lut.key,
      ...fields,
    });
    this.model.save_changes();
  }

  _onVisibleChange(e) {
    this._sendLutUpdate({ visible: e.target.checked });
  }

  _onCmapChange(e) {
    this._sendLutUpdate({ cmap_name: e.target.value });
  }

  _onClimInput(e) {
    const slider = e.target;
    this._sendLutUpdate({
      clim_min: slider.minValue ?? slider.value,
      clim_max: slider.maxValue ?? slider.value,
    });
  }

  _onAutoToggle() {
    const newAuto = !this.lut.auto_clim;
    const fields = { auto_clim: newAuto };
    if (newAuto) {
      fields.auto_lower_tail = this.lut.auto_lower_tail || 0;
      fields.auto_upper_tail = this.lut.auto_upper_tail || 0;
    } else {
      fields.clim_min = this.lut.clim_min;
      fields.clim_max = this.lut.clim_max;
    }
    this._sendLutUpdate(fields);
  }

  render() {
    const lut = this.lut;
    if (!lut || !lut.key) return html``;

    return html`
      <div class="ndv-lut-row">
        <wa-checkbox
          size="small"
          ?checked=${lut.visible}
          @change=${this._onVisibleChange}
        >
          <span class="ndv-channel-name">${lut.name || lut.key}</span>
        </wa-checkbox>

        ${lut.show_cmap
          ? html`
              <div class="ndv-cmap-select">
                <wa-select
                  size="small"
                  value=${lut.cmap_name}
                  @change=${this._onCmapChange}
                  hoist
                >
                  ${(lut.cmap_options || []).map(
                    (name) =>
                      html`<wa-option value=${name}>${name}</wa-option>`,
                  )}
                </wa-select>
              </div>
            `
          : html`<span class="ndv-channel-name" style="opacity:0.5">RGB</span>`}

        <wa-slider
          size="small"
          range
          min=${lut.clim_bound_min}
          max=${lut.clim_bound_max}
          min-value=${lut.clim_min}
          max-value=${lut.clim_max}
          with-tooltip
          @input=${this._onClimInput}
        ></wa-slider>

        <div class="ndv-auto-btn">
          <wa-button
            size="small"
            appearance=${lut.auto_clim ? "filled" : "outlined"}
            @click=${this._onAutoToggle}
          >
            Auto
          </wa-button>
        </div>
      </div>
    `;
  }
}

if (!customElements.get("ndv-lut-row")) customElements.define("ndv-lut-row", NdvLutRow);
