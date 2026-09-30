import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { loadSceneState, loadStickerState } from "../web_src/pano_scene_state.js";
import { evaluateSceneState } from "../web_src/pano_scene_eval.js";

const fixture = (name) => readFileSync(new URL(`./fixtures/scene_state/${name}.json`, import.meta.url), "utf8");

function assertClose(actual, expected, path = "$") {
  if (expected && typeof expected === "object") {
    assert.deepEqual(Object.keys(actual), Object.keys(expected), path);
    for (const key of Object.keys(expected)) assertClose(actual[key], expected[key], `${path}.${key}`);
  } else if (typeof expected === "number") {
    assert.ok(Math.abs(actual - expected) <= 1e-9, `${path}: ${actual} != ${expected}`);
  } else {
    assert.equal(actual, expected, path);
  }
}

test("state_json v1 and v2 fixtures load as the documented v2 state", () => {
  assertClose(loadSceneState(fixture("v2_canonical")), JSON.parse(fixture("v2_canonical")));
  for (const name of ["v1_stickers", "v1_cutout", "v2_invalid_fields"]) {
    assertClose(loadSceneState(fixture(name)), JSON.parse(fixture(`${name}.v2`)));
  }
});

test("sticker_state v1 and v2 fixtures load as sticker_state v2", () => {
  for (const name of ["sticker_state_v1", "sticker_state_v2"]) {
    assertClose(loadStickerState(fixture(name)), JSON.parse(fixture(`${name}.v2`)));
  }
  assert.equal(loadStickerState('{"kind":"other","version":2}'), null);
  assert.throws(() => loadStickerState('{"kind":"pano_sticker_state","version":3}'), /sticker_state version 3/);
});

test("unsupported state_json versions name the version", () => {
  assert.throws(() => loadSceneState('{"version":3}'), /state_json version 3; supported versions are 1 and 2/);
  assert.throws(() => loadSceneState("[1]"), /state_json is not a JSON object/);
  assert.equal(loadSceneState("").version, 2);
});

test("static and hold keyframes evaluate to the fixture values", () => {
  const state = loadSceneState(fixture("v2_canonical"));
  const expected = JSON.parse(fixture("v2_canonical.eval"));
  assertClose(expected.map((item) => evaluateSceneState(state, item.frame)), expected);
  assert.throws(() => evaluateSceneState(state, 30), /easing "auto" is not implemented/);
});

test("a hold Cut lands on a frame that misses the Keyframe only by float rounding", () => {
  const state = loadSceneState({
    version: 2,
    timeline: { fps: 30000 / 1001 },
    camera: { transform: { keyframes: [
      { frame: 0, value: { yaw_deg: 0 }, easing: "hold" },
      { frame: 24, value: { yaw_deg: 90 }, easing: "auto" },
      { frame: 48, value: { yaw_deg: 180 } },
    ] } },
  });
  const yawAt = (frame) => evaluateSceneState(state, frame).camera.yaw_deg;
  assert.equal(yawAt((24 * 1001 / 30000) * state.timeline.fps), 90);
  assert.equal(yawAt(24 - 5e-7), 90);
  assert.equal(yawAt(24 + 5e-7), 90);
  assert.equal(yawAt(48 - 5e-7), 180);
  assert.equal(yawAt(24 - 1e-5), 0);
});

test("sticker_state v1 accepts numeric strings like the old parser", () => {
  const parsed = loadStickerState('{"kind":"pano_sticker_state","version":"1","pose":{"yaw_deg":"190","pitch_deg":" -100 ","roll_deg":2,"hFOV_deg":"30"},"source_aspect":"1.5"}');
  assert.deepEqual(parsed.camera[0].value, { position: [0, 0, 0], yaw_deg: -170, pitch_deg: -89.9, roll_deg: 2, hFOV_deg: 30 });
  assert.equal(parsed.source_aspect, 1.5);
});

test("Clip range edges use the same frame epsilon", () => {
  const state = loadSceneState(fixture("v2_canonical"));
  const active = (frame) => evaluateSceneState(state, frame).stickers[0].active;
  assert.equal(active(10 - 1e-7), true);
  assert.equal(active(10 - 1e-5), false);
  assert.equal(active(50 - 1e-5), true);
  assert.equal(active(50 - 1e-7), false);
});
