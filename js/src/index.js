// Make customElements.define idempotent — anywidget may re-evaluate this
// ESM blob on cell re-run, causing Web Awesome to re-register elements.
const _origDefine = customElements.define.bind(customElements);
customElements.define = function (name, ctor, options) {
  if (!customElements.get(name)) _origDefine(name, ctor, options);
};

// Web Awesome theme + base styles
import "@awesome.me/webawesome/dist/styles/themes/default.css";
import "@awesome.me/webawesome/dist/styles/webawesome.css";
import "./styles.css";

// Web Awesome components
import "@awesome.me/webawesome/dist/components/slider/slider.js";
import "@awesome.me/webawesome/dist/components/select/select.js";
import "@awesome.me/webawesome/dist/components/option/option.js";
import "@awesome.me/webawesome/dist/components/checkbox/checkbox.js";
import "@awesome.me/webawesome/dist/components/button/button.js";
import "@awesome.me/webawesome/dist/components/tooltip/tooltip.js";
import "@awesome.me/webawesome/dist/components/dropdown/dropdown.js";
import "@awesome.me/webawesome/dist/components/icon/icon.js";

// ndv Lit components
import "./components/ndv-viewer.js";

// Inject CSS into document.head so :root custom properties (used by
// Web Awesome theme) cascade into shadow DOMs.  Without this, the
// theme vars defined under :root won't reach child shadow roots when
// the widget itself is rendered inside a shadow root (e.g. marimo).
let _headStyleInjected = false;
function _ensureHeadStyles(model) {
  if (_headStyleInjected) return;
  _headStyleInjected = true;
  const css = model.get("_css");
  if (!css) return;
  const style = document.createElement("style");
  style.setAttribute("data-ndv-style", "");
  style.textContent = css;
  document.head.appendChild(style);
}

/** @param {{ model: any, el: HTMLElement }} ctx */
function render({ model, el }) {
  _ensureHeadStyles(model);
  const viewer = document.createElement("ndv-viewer");
  viewer.model = model;
  el.appendChild(viewer);
  return () => viewer.remove();
}

// AFM spec requires default export — named `export function render` is deprecated.
// See: https://anywidget.dev/en/afm/
export default { render };
