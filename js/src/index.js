// Make customElements.define idempotent — anywidget may re-evaluate this
// ESM blob on cell re-run, causing Web Awesome to re-register elements.
const _origDefine = customElements.define.bind(customElements);
customElements.define = (name, ctor, options) => {
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
import { getThemeInfo, watchThemeChanges } from "./theme.js";

// Inject CSS into document.head so :root custom properties (used by
// Web Awesome theme) cascade into shadow DOMs.  Without this, the
// theme vars defined under :root won't reach child shadow roots when
// the widget itself is rendered inside a shadow root (e.g. marimo).
let _headStyleInjected = false;
function _ensureHeadStyles(model) {
  if (_headStyleInjected) return;
  _headStyleInjected = true;

  // Override white backgrounds as early as possible to minimize flash
  overrideWhiteBackgrounds();

  const css = model.get("_css");
  if (!css) return;
  const style = document.createElement("style");
  style.setAttribute("data-ndv-style", "");
  style.textContent = css;
  document.head.appendChild(style);
}

/**
 * Override VSCode's forced white background on ipywidget output containers
 * and neutralize the WA theme's page-level white background.
 *
 * VSCode injects `.cell-output-ipywidget-background { background: white !important }`
 * via a dynamically created <style> tag. The WA theme sets `color-scheme: light`
 * on :root, which causes the browser canvas to be white. We override both using
 * inline styles with !important (highest specificity).
 */
function overrideWhiteBackgrounds() {
  // Use the editor background if available, otherwise transparent
  const bg =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--vscode-editor-background")
      .trim() || "transparent";

  for (const el of document.querySelectorAll(".cell-output-ipywidget-background")) {
    el.style.setProperty("background", bg, "important");
  }
  document.documentElement.style.setProperty("background-color", bg, "important");
  document.body.style.setProperty("background-color", bg, "important");
}

/** Apply theme to a viewer element and sync state to the Python model. */
function applyTheme(viewer, model, info) {
  const isDark = info.kind === "dark" || info.kind === "high-contrast-dark";
  viewer.classList.toggle("wa-dark", isDark);

  // Override WA's :where(:root) { color-scheme: light } which paints the
  // entire webview canvas white in dark themes.
  document.documentElement.style.setProperty(
    "color-scheme",
    isDark ? "dark" : "light",
    "important",
  );

  // Override white backgrounds whenever theme changes
  overrideWhiteBackgrounds();

  // Defer model sync to avoid deadlock — VSCode's webview can block if
  // save_changes() is called synchronously during render().
  queueMicrotask(() => {
    model.set("_theme_kind", info.kind);
    model.set("_theme_background", info.background || "");
    model.save_changes();
  });
}

/** @param {{ model: any, el: HTMLElement }} ctx */
function render({ model, el }) {
  _ensureHeadStyles(model);

  const viewer = document.createElement("ndv-viewer");
  viewer.model = model;
  el.appendChild(viewer);

  // Detect and apply theme — deferred because el is detached at render time
  // and .cell-output-ipywidget-background containers may not exist yet.
  const info = getThemeInfo();
  applyTheme(viewer, model, info);
  setTimeout(() => overrideWhiteBackgrounds(), 500);

  // Watch for runtime theme switches (e.g. VSCode dark → light)
  const stopWatching = watchThemeChanges((newInfo) =>
    applyTheme(viewer, model, newInfo),
  );

  return () => {
    stopWatching();
    viewer.remove();
  };
}

// AFM spec requires default export — named `export function render` is deprecated.
// See: https://anywidget.dev/en/afm/
export default { render };
