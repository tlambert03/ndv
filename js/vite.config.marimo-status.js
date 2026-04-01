import { defineConfig } from "vite";
import anywidget from "@anywidget/vite";

export default defineConfig({
  plugins: [anywidget()],
  build: {
    outDir: "../src/ndv/views/_marimo/static",
    emptyOutDir: false,
    lib: {
      entry: "src/index-marimo-status.js",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: "ndv-marimo-status.js",
        assetFileNames: "status-style.css",
      },
    },
  },
});
