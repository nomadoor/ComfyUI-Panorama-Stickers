import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    lib: {
      entry: "web_src/main.js",
      formats: ["es"],
      fileName: () => "panorama_suite.js",
    },
    outDir: "web",
    emptyOutDir: false,
    rollupOptions: {
      external: [/^\.\.\/\.\.\/scripts\//],
      output: {
        // ComfyUI loads every web/**/*.js as an extension but skips dot folders, so chunks loaded on
        // demand (three.js) go to web/.lazy/.
        chunkFileNames: ".lazy/[name]-[hash].js",
      },
    },
    assetsInlineLimit: 0,
  },
});
