// Vite for the browser checks: the repo root is served as is, and the test pages are the entries, so three
// and Spark are prebundled before a page loads instead of when the page first imports them (a late find
// makes Vite reload the page in the middle of a check).
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  root: fileURLToPath(new URL("../..", import.meta.url)),
  optimizeDeps: {
    entries: ["tests/browser/pages/*.html"],
    include: ["@sparkjsdev/spark"],
  },
});
