import { defineConfig } from "vite";

export default defineConfig({
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
      },
    },
  },
});
