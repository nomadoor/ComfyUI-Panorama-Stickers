// Vite for the browser checks: the repo root is served as is, and the test pages are the entries, so three
// and Spark are prebundled before a page loads instead of when the page first imports them (a late find
// makes Vite reload the page in the middle of a check).
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  root: fileURLToPath(new URL("../..", import.meta.url)),
  // The new UI's scene page (studio_ui.html) mounts Vue components.
  plugins: [vue()],
  // The node runtime imports ComfyUI's scripts (../../scripts/app.js from web_src); the pages get stand-ins.
  resolve: {
    alias: [{ find: /^(?:\.\.\/)+scripts\/(app|api)\.js$/, replacement: fileURLToPath(new URL("./pages/comfy/$1.js", import.meta.url)) }],
  },
  optimizeDeps: {
    entries: ["tests/browser/pages/*.html"],
    include: ["@sparkjsdev/spark"],
  },
});
