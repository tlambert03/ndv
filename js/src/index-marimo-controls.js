// Make customElements.define idempotent
const _origDefine = customElements.define.bind(customElements);
customElements.define = function (name, ctor, options) {
  if (!customElements.get(name)) _origDefine(name, ctor, options);
};

// Web Awesome theme + base styles — imported as raw strings for inline injection
import waDefault from "@awesome.me/webawesome/dist/styles/themes/default.css?inline";
import waBase from "@awesome.me/webawesome/dist/styles/webawesome.css?inline";
import ndvStyles from "./styles.css?inline";

// Web Awesome components
import "@awesome.me/webawesome/dist/components/slider/slider.js";
import "@awesome.me/webawesome/dist/components/select/select.js";
import "@awesome.me/webawesome/dist/components/option/option.js";
import "@awesome.me/webawesome/dist/components/checkbox/checkbox.js";
import "@awesome.me/webawesome/dist/components/button/button.js";
import "@awesome.me/webawesome/dist/components/tooltip/tooltip.js";
import "@awesome.me/webawesome/dist/components/dropdown/dropdown.js";
import "@awesome.me/webawesome/dist/components/icon/icon.js";

// ndv controls component (no canvas embedding)
import "./components/ndv-controls.js";

const ALL_CSS = [waDefault, waBase, ndvStyles].join("\n");
let _styleInjected = false;

function _injectStyles(root) {
  // Inject into the shadow root if available, otherwise document head
  const target = root.getRootNode();
  const container =
    target instanceof ShadowRoot ? target : document.head;
  if (container.querySelector("[data-ndv-controls-style]")) return;
  const style = document.createElement("style");
  style.setAttribute("data-ndv-controls-style", "");
  style.textContent = ALL_CSS;
  container.appendChild(style);

  // Also inject into document head for light-DOM components
  if (container !== document.head && !_styleInjected) {
    const docStyle = document.createElement("style");
    docStyle.setAttribute("data-ndv-controls-style", "");
    docStyle.textContent = ALL_CSS;
    document.head.appendChild(docStyle);
    _styleInjected = true;
  }
}

/** @param {{ model: any, el: HTMLElement }} ctx */
function render({ model, el }) {
  _injectStyles(el);
  const controls = document.createElement("ndv-controls");
  controls.model = model;
  el.appendChild(controls);
  return () => controls.remove();
}

export default { render };
