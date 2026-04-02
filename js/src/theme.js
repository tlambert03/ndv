/**
 * Theme detection for notebook environments (VSCode, JupyterLab, Colab).
 */

/**
 * Detect current theme and environment.
 * @returns {{ kind: string, background: string|null, foreground: string|null, environment: string }}
 */
export function getThemeInfo() {
  const result = {
    kind: "dark",
    background: null,
    foreground: null,
    environment: "unknown",
  };

  const body = document.body;
  const bodyClasses = body.classList;

  // VSCode detection (body classes set by the notebook webview)
  if (bodyClasses.contains("vscode-light")) {
    result.kind = "light";
    result.environment = "vscode";
  } else if (bodyClasses.contains("vscode-dark")) {
    result.kind = "dark";
    result.environment = "vscode";
  } else if (bodyClasses.contains("vscode-high-contrast-light")) {
    result.kind = "light";
    result.environment = "vscode";
  } else if (bodyClasses.contains("vscode-high-contrast")) {
    result.kind = "dark";
    result.environment = "vscode";
  }
  // JupyterLab detection
  else if (body.dataset.jpThemeLight !== undefined) {
    result.kind = body.dataset.jpThemeLight === "true" ? "light" : "dark";
    result.environment = "jupyterlab";
  }
  // Colab detection
  else if (bodyClasses.contains("dark")) {
    result.kind = "dark";
    result.environment = "colab";
  }
  // Fallback: inspect computed background luminance
  else {
    const bg = getComputedStyle(body).backgroundColor;
    result.kind = isColorDark(bg) ? "dark" : "light";
  }

  // Read CSS variables when available
  const style = getComputedStyle(document.documentElement);

  const vscodeBg = style.getPropertyValue("--vscode-editor-background").trim();
  const vscodeFg = style.getPropertyValue("--vscode-editor-foreground").trim();
  if (vscodeBg) result.background = vscodeBg;
  if (vscodeFg) result.foreground = vscodeFg;

  // JupyterLab fallback
  if (!result.background) {
    const jpBg = style.getPropertyValue("--jp-layout-color0").trim();
    if (jpBg) result.background = jpBg;
  }

  return result;
}

/**
 * Watch for theme changes and call `callback(getThemeInfo())` when detected.
 * Returns a cleanup function that disconnects the observer.
 * @param {(info: ReturnType<typeof getThemeInfo>) => void} callback
 * @returns {() => void}
 */
export function watchThemeChanges(callback) {
  let timer = null;
  const debounced = () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callback(getThemeInfo());
    }, 100);
  };

  const observer = new MutationObserver(debounced);

  // VSCode changes body class on theme switch; JupyterLab changes data attrs
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["class", "data-jp-theme-light", "data-jp-theme-name"],
  });

  // VSCode injects theme CSS variables as inline styles on <html>
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["style"],
  });

  return () => {
    if (timer) clearTimeout(timer);
    observer.disconnect();
  };
}

/** Parse an rgb/rgba color string and return whether it's dark. */
function isColorDark(color) {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return true;
  const [, r, g, b] = match.map(Number);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}
