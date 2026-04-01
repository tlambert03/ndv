import { LitElement, html } from "lit";

export class NdvStatusBar extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    model: { type: Object },
    _dataInfo: { state: true },
    _hoverInfo: { state: true },
    _showDataInfo: { state: true },
  };

  constructor() {
    super();
    this.model = null;
    this._dataInfo = "";
    this._hoverInfo = "";
    this._showDataInfo = true;
    this._cleanups = [];
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
    sync("show_data_info", "_showDataInfo");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    for (const cleanup of this._cleanups) cleanup();
    this._cleanups = [];
  }

  render() {
    return html`
      <div class="ndv-info-bar ${this._showDataInfo ? "" : "ndv-hidden"}">
        <span>${this._dataInfo}</span>
        <span>${this._hoverInfo}</span>
      </div>
    `;
  }
}

if (!customElements.get("ndv-status-bar"))
  customElements.define("ndv-status-bar", NdvStatusBar);
