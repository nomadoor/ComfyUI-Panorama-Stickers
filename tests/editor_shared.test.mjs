import assert from "node:assert/strict";
import test from "node:test";

import { getCachedVideoThumbnails, setCachedVideoThumbnails } from "../web_src/editor/video_thumbnail_cache.js";
import { getNodeGridVisibility, loadSharedUiSettings, saveSharedUiSettings, setNodeGridVisibility } from "../web_src/editor/ui_settings.js";
import { getWidget, hsv01ToRgb, isAutoOutputPresetValue, parseOutputPresetValue, rgb01ToHsv } from "../web_src/editor/helpers.js";
import { BACKGROUND_COLOR_WIDGET_NAMES, BACKGROUND_RANGE_WIDGET_NAMES } from "../web_src/pano_preview_video.js";

test("the filmstrip cache keeps the last 12 sources and refreshes a source it returns", () => {
  const entry = (n) => ({ thumbnails: [{ id: `t${n}` }], thumbnailCount: 1, duration: n, fps: 24 });
  for (let n = 0; n < 12; n += 1) setCachedVideoThumbnails(`video${n}.mp4`, entry(n));
  assert.equal(getCachedVideoThumbnails("video0.mp4").duration, 0);
  setCachedVideoThumbnails("video12.mp4", entry(12));
  // video0 was used last, so video1 is the one let go.
  assert.equal(getCachedVideoThumbnails("video1.mp4"), null);
  assert.ok(getCachedVideoThumbnails("video0.mp4"));
  assert.ok(getCachedVideoThumbnails("video12.mp4"));
  // A source without frames is not kept.
  setCachedVideoThumbnails("empty.mp4", { thumbnails: [] });
  assert.equal(getCachedVideoThumbnails("empty.mp4"), null);
  assert.equal(getCachedVideoThumbnails(" video12.mp4 ").fps, 24);
});

test("the editor settings fall back to memory without localStorage, and are kept in it when there is one", () => {
  // No window: nothing saved yet.
  assert.equal(loadSharedUiSettings(), null);
  assert.deepEqual(saveSharedUiSettings({ invert_view_x: 1, other: true }), { invert_view_x: true, invert_view_y: false });
  assert.deepEqual(loadSharedUiSettings(), { invert_view_x: true, invert_view_y: false });
  assert.equal(getNodeGridVisibility(7, false), false);
  setNodeGridVisibility(7, true);
  assert.equal(getNodeGridVisibility(7, false), true);
  assert.equal(getNodeGridVisibility("", false), false);

  const store = new Map();
  globalThis.window = { localStorage: { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, v) } };
  try {
    saveSharedUiSettings({ invert_view_y: true });
    assert.equal(store.get("pano_suite.ui_settings.v1"), JSON.stringify({ invert_view_x: false, invert_view_y: true }));
    setNodeGridVisibility(8, false);
    assert.deepEqual(JSON.parse(store.get("pano_suite.node_grid_visibility.v1")), { 7: true, 8: false });
  } finally {
    delete globalThis.window;
  }
});

test("output presets and colors", () => {
  assert.equal(parseOutputPresetValue("4096x2048"), 4096);
  assert.equal(parseOutputPresetValue(1024.4), 1024);
  assert.equal(parseOutputPresetValue("auto", 2048), 2048);
  assert.equal(isAutoOutputPresetValue(" BG "), true);
  assert.equal(isAutoOutputPresetValue("2048"), false);
  const color = { r: 0.2, g: 0.6, b: 0.4 };
  const { h, s, v } = rgb01ToHsv(color);
  const back = hsv01ToRgb(h, s, v);
  for (const k of ["r", "g", "b"]) assert.ok(Math.abs(back[k] - color[k]) < 1e-9);
});

test("the old editor finds the background widgets under Panorama Studio's names and the legacy nodes' names", () => {
  const studio = { widgets: [{ name: "background_color", value: "#112233" }, { name: "background_range", value: "180" }] };
  assert.equal(getWidget(studio, BACKGROUND_COLOR_WIDGET_NAMES).value, "#112233");
  assert.equal(getWidget(studio, BACKGROUND_RANGE_WIDGET_NAMES).value, "180");
  const legacy = { widgets: [{ name: "bg_color", value: "#00ff00" }, { name: "coverage", value: "360" }] };
  assert.equal(getWidget(legacy, BACKGROUND_COLOR_WIDGET_NAMES).value, "#00ff00");
  assert.equal(getWidget(legacy, BACKGROUND_RANGE_WIDGET_NAMES).value, "360");
  assert.equal(getWidget(legacy, "output_preset"), null);
});
