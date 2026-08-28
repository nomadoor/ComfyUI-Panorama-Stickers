import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("Preview node surface exposes only one fullscreen action", async () => {
  const component = await read("../web_src/components/PanoPreviewNodeSurface.vue");

  assert.ok(component.includes('import PanoIconButton from "./PanoIconButton.vue"'));
  assert.ok(component.includes("ICON.fullscreen"));
  assert.ok(component.includes("ICON.fullscreen_close"));
  assert.match(component, /type:\s*'toggle-fullscreen'/);
  assert.equal((component.match(/<PanoIconButton/g) || []).length, 1);
  for (const excluded of ["FOV", "Reset", "Play", "Pause", "Help", "Full Editor"]) {
    assert.ok(!component.includes(excluded), `unexpected Preview surface action: ${excluded}`);
  }
});

test("dedicated Preview runtime mounts and tears down the Vue fullscreen surface", async () => {
  const runtime = await read("../web_src/pano_preview_previewnode.js");

  assert.ok(runtime.includes('import PanoPreviewNodeSurface from "./components/PanoPreviewNodeSurface.vue"'));
  assert.ok(runtime.includes('import { createApp, reactive } from "vue"'));
  assert.ok(runtime.includes("createPreviewFullscreenController"));
  assert.ok(runtime.includes('this.surfaceHost.className = "pano-preview-node-surface-host"'));
  assert.match(runtime, /createApp\(PanoPreviewNodeSurface/);
  assert.match(runtime, /this\.node\.__panoPreviewNodeSurface\s*=/);
  assert.match(runtime, /this\.surfaceApp\?\.unmount\?\.\(\)/);
  assert.match(runtime, /this\.fullscreenController\?\.destroy\?\.\(\)/);
  assert.match(runtime, /this\.wheelCaptureCleanup\?\.\(\)/);
  assert.ok(runtime.includes('this.root.className = "pano-node-preview-dom pano-node-preview--preview"'));
  assert.match(runtime, /this\.tearingDown\s*=\s*true/);
  assert.match(runtime, /requestDraw\(\)\s*\{\s*if \(this\.tearingDown\) return;/);
  assert.ok(!runtime.includes("logProbeFrames"));
});

test("Preview fullscreen overlay follows Cutout pointer and layout contracts", async () => {
  const css = await read("../web/pano_editor.css");

  assert.match(css, /\.pano-preview-node-surface-host\s*\{[^}]*pointer-events:\s*none/);
  assert.match(css, /\.pano-preview-node-fullscreen\s*\{[^}]*pointer-events:\s*auto/);
  assert.match(css, /\.pano-node-preview--preview:fullscreen[\s\S]*?height:\s*100vh/);
});

test("Preview resizes its canvas only in the frame that redraws it", async () => {
  const runtime = await read("../web_src/pano_preview_previewnode.js");
  const resizeStart = runtime.indexOf("  onResizeDom() {");
  const resizeEnd = runtime.indexOf("\n  syncCanvasSize()", resizeStart);
  const tickStart = runtime.indexOf("  tick(");
  const tickEnd = runtime.indexOf("\n  teardown()", tickStart);
  const resize = runtime.slice(resizeStart, resizeEnd);
  const tick = runtime.slice(tickStart, tickEnd);

  assert.match(runtime, /syncCanvasSize\(\)[\s\S]*?measurePreviewCanvasSize/);
  assert.match(resize, /this\.requestDraw\(\)/);
  assert.doesNotMatch(resize, /this\.canvas\.(?:width|height)\s*=/);
  assert.match(tick, /this\.syncCanvasSize\(\)[\s\S]*?drawPreview\(/);
});

test("Preview teardown owns its DOM widget and pending still-image handlers", async () => {
  const runtime = await read("../web_src/pano_preview_previewnode.js");
  const refreshStart = runtime.indexOf("  refreshImage() {");
  const refreshEnd = runtime.indexOf("\n  requestDraw() {", refreshStart);
  const refresh = runtime.slice(refreshStart, refreshEnd);
  const teardownStart = runtime.indexOf("  teardown() {");
  const teardownEnd = runtime.indexOf("\n}\n\nexport function", teardownStart);
  const teardown = runtime.slice(teardownStart, teardownEnd);

  assert.match(runtime, /trackDomWidgetRemoval\(/);
  assert.match(teardown, /removeTrackedDomWidget\(this\.node, this\.widget\)/);
  assert.match(refresh, /this\.mediaCleanup = \(\) => \{[\s\S]*?img\.onload = null;[\s\S]*?img\.onerror = null;/);
  assert.match(teardown, /this\.img = null;/);
  assert.match(teardown, /this\.imgSrc = "";/);
});
