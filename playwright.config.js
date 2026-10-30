// Browser checks (docs/agents/workflow.md, Verification): pages under tests/browser/pages load the editor's modules
// through the Vite dev server, which Playwright starts on 127.0.0.1 and stops after the run. ComfyUI is not used.
import { defineConfig } from "@playwright/test";

// PW_PORT lets parallel runs (several worktrees at once) use their own port.
const port = Number(process.env.PW_PORT) || 5199;

export default defineConfig({
  testDir: "tests/browser",
  testMatch: "*.spec.js",
  timeout: 60_000,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    browserName: "chromium",
    viewport: { width: 960, height: 540 },
    launchOptions: { args: ["--autoplay-policy=no-user-gesture-required", "--ignore-gpu-blocklist"] },
  },
  webServer: {
    command: `vite --config tests/browser/vite.config.js --host 127.0.0.1 --port ${port} --strictPort`,
    url: `http://127.0.0.1:${port}/tests/browser/pages/three_view.html`,
    reuseExistingServer: false,
    stdout: "ignore",
  },
});
