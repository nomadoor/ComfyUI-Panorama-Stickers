import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { loadSceneState, loadStickerState, rebaseSceneState } from "../web_src/pano_scene_state.js";
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

const cameraState = (keyframes, fps = 24) => loadSceneState({ version: 2, timeline: { fps }, camera: { transform: { keyframes } } });
const cameraAt = (state, frame) => evaluateSceneState(state, frame).camera;

test("auto keys keep the velocity continuous with uneven spacing", () => {
  const state = cameraState([
    { frame: 0, value: { position: [0, 0, 0], hFOV_deg: 60 } },
    { frame: 8, value: { position: [2, 1, -1], hFOV_deg: 90 } },
    { frame: 40, value: { position: [3, 0, -6], hFOV_deg: 100 } },
  ]);
  const h = 1e-3;
  const [before, at, after] = [-h, 0, h].map((d) => cameraAt(state, 8 + d));
  const left = (at.hFOV_deg - before.hFOV_deg) / h;
  assert.ok(Math.abs(left) > 0.1);
  assert.ok(Math.abs(left - (after.hFOV_deg - at.hFOV_deg) / h) < 1e-2);
  for (let axis = 0; axis < 3; axis += 1) {
    const l = (at.position[axis] - before.position[axis]) / h;
    const r = (after.position[axis] - at.position[axis]) / h;
    assert.ok(Math.abs(l - r) < 1e-3, `axis ${axis}: ${l} != ${r}`);
  }
});

test("cubic-bezier segments distribute time like CSS", () => {
  const state = cameraState([
    { frame: 0, value: { yaw_deg: 0, hFOV_deg: 40 }, easing: [0.42, 0, 0.58, 1] },
    { frame: 20, value: { yaw_deg: 60, hFOV_deg: 80 } },
  ]);
  // ease-in-out is symmetric: half the time gives half the progress, and a quarter gives the known 0.1291.
  assert.ok(Math.abs(cameraAt(state, 10).hFOV_deg - 60) < 1e-9);
  assert.ok(Math.abs(cameraAt(state, 10).yaw_deg - 30) < 1e-6);
  assert.ok(Math.abs(cameraAt(state, 5).hFOV_deg - (40 + 40 * 0.129161)) < 1e-4);
});

test("hold keeps the value until the next key", () => {
  const state = cameraState([
    { frame: 0, value: { hFOV_deg: 40 }, easing: "hold" },
    { frame: 10, value: { hFOV_deg: 80 } },
  ]);
  assert.equal(cameraAt(state, 9.99).hFOV_deg, 40);
  assert.equal(cameraAt(state, 10).hFOV_deg, 80);
});

test("rebasing fps rounds every stored frame to the new fps", () => {
  const state = loadSceneState({
    version: 2,
    timeline: { fps: 24, length: 241 },
    camera: { transform: { keyframes: [{ frame: 7, value: {} }, { frame: 13, value: {} }] } },
    stickers: [{ source: { kind: "port" }, clip: { start: 11, in: 1, duration: 29 } }],
  });
  const rebased = rebaseSceneState(state, 30000 / 1001);
  assert.deepEqual(rebased.camera.transform.keyframes.map((key) => key.frame), [9, 16]);
  // start 11 -> 13.74, anchor 10 -> 12.49, end 40 -> 49.95 on the Timeline, each rounded.
  assert.deepEqual(rebased.stickers[0].clip, { start: 14, in: 2, duration: 36 });
  assert.equal(rebased.timeline.length, 301);
  assert.throws(() => rebaseSceneState(state, 0), /fps must be a positive number/);
});

test("rebasing keeps camera and sticker keys at one Timeline time on one frame", () => {
  const state = loadSceneState({
    version: 2,
    timeline: { fps: 24 },
    camera: { transform: { keyframes: [{ frame: 40, value: {} }] } },
    stickers: [{ source: { kind: "port" }, clip: { start: 11, in: 1 }, opacity: { keyframes: [{ frame: 30, value: 0.5 }] } }],
  });
  const rebased = rebaseSceneState(state, 30000 / 1001);
  const { clip, opacity } = rebased.stickers[0];
  assert.equal(rebased.camera.transform.keyframes[0].frame, 50);
  assert.equal(clip.start - clip.in + opacity.keyframes[0].frame, 50);
});

test("exact half turns take a fixed direction and yaw ties take the lower value", () => {
  const halfway = (end, field) => cameraAt(cameraState([{ frame: 0, value: {} }, { frame: 20, value: end }]), 10)[field];
  assert.ok(Math.abs(halfway({ yaw_deg: 180 }, "yaw_deg") - 90) < 1e-6);
  assert.ok(Math.abs(halfway({ yaw_deg: 180, roll_deg: 180 }, "pitch_deg") - 90) < 1e-6);
  assert.ok(Math.abs(halfway({ roll_deg: 180 }, "roll_deg") - 90) < 1e-6);
  assert.ok(Math.abs(halfway({ yaw_deg: 350 }, "yaw_deg") + 5) < 1e-9);
});

test("a fast move that stops does not overshoot", () => {
  const state = cameraState([
    { frame: 0, value: { hFOV_deg: 90 } },
    { frame: 2, value: { hFOV_deg: 60 } },
    { frame: 102, value: { hFOV_deg: 60 } },
  ]);
  for (let frame = 0; frame < 102; frame += 0.25) {
    const { hFOV_deg: fov } = cameraAt(state, frame);
    assert.ok(fov >= 60 - 1e-9 && fov <= 90 + 1e-9, `${frame}: ${fov}`);
  }
});

test("vector tangents stop only where the motion turns back", () => {
  const speedAt = (state, frame) => {
    const a = cameraAt(state, frame - 1e-4).position;
    const b = cameraAt(state, frame + 1e-4).position;
    return a.map((c, i) => (b[i] - c) / 2e-4);
  };
  const corner = cameraState([
    { frame: 0, value: { position: [0, 0, 0] } },
    { frame: 10, value: { position: [4, 0, 0] } },
    { frame: 20, value: { position: [4, 4, 0] } },
  ]);
  const [vx, vy, vz] = speedAt(corner, 10);
  assert.ok(Math.abs(vx - 0.2) < 1e-6 && Math.abs(vy - 0.2) < 1e-6 && Math.abs(vz) < 1e-9);
  const back = cameraState([
    { frame: 0, value: { position: [0, 0, 0] } },
    { frame: 10, value: { position: [4, 0, 0] } },
    { frame: 20, value: { position: [0, 0, 0] } },
  ]);
  assert.ok(speedAt(back, 10).every((c) => Math.abs(c) < 1e-6));
  // Looking up, then panning: the yaw is already moving at the key where the pitch stops.
  const pan = cameraState([
    { frame: 0, value: { pitch_deg: -30 } },
    { frame: 3, value: { pitch_deg: 0 } },
    { frame: 30, value: { yaw_deg: 150 } },
  ]);
  const yawSpeed = (cameraAt(pan, 3 + 1e-4).yaw_deg - cameraAt(pan, 3 - 1e-4).yaw_deg) / 2e-4;
  assert.ok(yawSpeed > 0.5, `${yawSpeed}`);
});
