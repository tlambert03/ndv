import { defineConfig } from "vite";
import anywidget from "@anywidget/vite";

export default defineConfig({
  plugins: [anywidget()],
  build: {
    outDir: "../src/ndv/views/_marimo/static",
    emptyOutDir: true,
    lib: {
      entry: "src/index-marimo-controls.js",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: "ndv-marimo-controls.js",
        assetFileNames: "controls-style.css",
      },
    },
  },
});
