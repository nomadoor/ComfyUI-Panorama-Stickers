// Vite for the browser checks: the repo root is served as is, and the test pages are the entries, so three
// and Spark are prebundled before a page loads instead of when the page first imports them (a late find
// makes Vite reload the page in the middle of a check).
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// web_src imports ComfyUI's `../../scripts/app.js` and `api.js`; the pages get the stand-ins in pages/comfy/.
const comfyStandIns = {
  name: "comfy-stand-ins",
  enforce: "pre",
  resolveId(source) {
    const match = /(?:^|\/)scripts\/(app|api)\.js$/.exec(source);
    return match ? fileURLToPath(new URL(`./pages/comfy/${match[1]}.js`, import.meta.url)) : null;
  },
};

export default defineConfig({
  root: fileURLToPath(new URL("../..", import.meta.url)),
  // The new UI's scene page (studio_ui.html) mounts Vue components.
  plugins: [comfyStandIns, vue()],
  optimizeDeps: {
    entries: ["tests/browser/pages/*.html"],
    include: ["@sparkjsdev/spark"],
  },
});
