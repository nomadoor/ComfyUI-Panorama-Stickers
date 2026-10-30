import assert from "node:assert/strict";
import test from "node:test";

import { getCutoutPreviewViewportSize } from "../web_src/editor/camera_preview.js";

// The FOVs of a shot whose frame has `aspect` (width / height) with a 90° horizontal FOV.
const shotOf = (aspect) => ({ hFOV_deg: 90, vFOV_deg: 2 * Math.atan(1 / aspect) * 180 / Math.PI });

test("the camera preview keeps the shot's aspect with a long side of 220, or 320 expanded", () => {
  assert.deepEqual(getCutoutPreviewViewportSize(shotOf(16 / 9)), { width: 220, height: 124 });
  assert.deepEqual(getCutoutPreviewViewportSize(shotOf(16 / 9), true), { width: 320, height: 180 });
  assert.deepEqual(getCutoutPreviewViewportSize(shotOf(9 / 16)), { width: 124, height: 220 });
  assert.deepEqual(getCutoutPreviewViewportSize(shotOf(1)), { width: 220, height: 220 });
  // A shot without FOVs is 90° × 60°.
  assert.deepEqual(getCutoutPreviewViewportSize(null), getCutoutPreviewViewportSize({ hFOV_deg: 90, vFOV_deg: 60 }));
});
