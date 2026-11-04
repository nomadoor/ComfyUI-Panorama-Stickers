// The view rules pano_camera_math.js owns (docs/space-and-view.md): the vertical FOV a horizontal FOV makes over a
// view's aspect, the view's pitch limit and its horizontal FOV range.
import assert from "node:assert/strict";
import test from "node:test";

import {
  DEG2RAD,
  RAD2DEG,
  VIEW_HFOV_MAX_DEG,
  VIEW_HFOV_MIN_DEG,
  VIEW_PITCH_LIMIT_DEG,
  vFovFromHfov,
} from "../web_src/pano_camera_math.js";
import { stickerVfovFromAspect } from "../web_src/pano_editor_state.js";
import { DEFAULT_VIEW_HFOV, FIT_FALLBACK_FOV_DEG } from "../web_src/pano_space.js";
import { PITCH_LIMIT } from "../web_src/studio/view_scale.js";

test("vFovFromHfov keeps tan(vFOV / 2) = tan(hFOV / 2) x height / width", () => {
  const close = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-9, `${actual} vs ${expected}`);
  close(vFovFromHfov(90, 1), 90);
  close(vFovFromHfov(90, 0.5), 2 * Math.atan(0.5) * 180 / Math.PI);
  close(vFovFromHfov(60, 9 / 16), 2 * Math.atan(Math.tan(Math.PI / 6) * 9 / 16) * 180 / Math.PI);
  close(vFovFromHfov(100, 2), 2 * Math.atan(Math.tan(50 * Math.PI / 180) * 2) * 180 / Math.PI);
  assert.equal(vFovFromHfov(0, 1), 0);
});

// The callers that take their vertical FOV from it give the values they gave with their own copy of the formula.
test("the callers of vFovFromHfov give what their own formula gave", () => {
  assert.equal(FIT_FALLBACK_FOV_DEG, 2 * Math.atan(Math.tan(DEFAULT_VIEW_HFOV * 0.5 * DEG2RAD) * 9 / 16) * RAD2DEG);
  const before = (hFovDeg, width, height) => {
    const w = Math.max(1, Number(width || 1));
    const h = Math.max(1, Number(height || 1));
    const hf = Math.max(0.1, Math.min(179, Number(hFovDeg || 30))) * DEG2RAD;
    const vf = 2 * Math.atan(Math.tan(hf * 0.5) * (h / w));
    return Math.max(0.1, Math.min(179, vf * RAD2DEG));
  };
  for (const [hFov, width, height] of [[30, 1920, 1080], [45.5, 1080, 1920], [179, 4000, 10], [0.05, 10, 4000], [120, 1, 1], [77.7, 641, 359]]) {
    assert.equal(stickerVfovFromAspect(hFov, width, height), before(hFov, width, height), `${hFov} ${width}x${height}`);
  }
});

test("the view's pitch limit and horizontal FOV range", () => {
  assert.equal(VIEW_PITCH_LIMIT_DEG, 89.9);
  assert.equal(PITCH_LIMIT, VIEW_PITCH_LIMIT_DEG);
  assert.deepEqual([VIEW_HFOV_MIN_DEG, VIEW_HFOV_MAX_DEG], [35, 140]);
});
