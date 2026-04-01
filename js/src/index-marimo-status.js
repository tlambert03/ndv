// Make customElements.define idempotent
const _origDefine = customElements.define.bind(customElements);
customElements.define = function (name, ctor, options) {
  if (!customElements.get(name)) _origDefine(name, ctor, options);
};

import ndvStyles from "./styles.css?inline";

import "./components/ndv-status-bar.js";

let _styleInjected = false;

function _injectStyles(root) {
  const target = root.getRootNode();
  const container =
    target instanceof ShadowRoot ? target : document.head;
  if (container.querySelector("[data-ndv-status-style]")) return;
  const style = document.createElement("style");
  style.setAttribute("data-ndv-status-style", "");
  style.textContent = ndvStyles;
  container.appendChild(style);

  if (container !== document.head && !_styleInjected) {
    const docStyle = document.createElement("style");
    docStyle.setAttribute("data-ndv-status-style", "");
    docStyle.textContent = ndvStyles;
    document.head.appendChild(docStyle);
    _styleInjected = true;
  }
}

/** @param {{ model: any, el: HTMLElement }} ctx */
function render({ model, el }) {
  _injectStyles(el);
  const bar = document.createElement("ndv-status-bar");
  bar.model = model;
  el.appendChild(bar);
  return () => bar.remove();
}

export default { render };
