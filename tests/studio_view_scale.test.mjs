// docs/space-and-view.md "量の一覧" and "世界の境界": the eye height E, the quantity table, and the world bound's radius.
import assert from "node:assert/strict";
import test from "node:test";

import {
  ACTION_EASE_SECONDS,
  BOUND_NOTICE_SECONDS,
  DROP_PREVIEW_BOX,
  EYE_HEIGHT_MIN,
  FRAME_FALLBACK_SECONDS,
  FRAME_GAP_LIMIT,
  JOYSTICK_PIXELS,
  ORBIT_DEG_PER_PIXEL,
  PITCH_LIMIT,
  PREVIEW_DAMPING,
  WHEEL_EASE_SECONDS,
  WHEEL_FACTOR,
  WHEEL_STEP_PIXELS,
  FRAME_WHEEL_REST_MS,
  eyeHeight,
  eyeLengths,
  frameSeconds,
  worldBoundRadius,
} from "../web_src/studio/view_scale.js";

const close = (actual, expected, eps = 1e-9) => assert.ok(Math.abs(actual - expected) <= eps, `${actual} != ${expected}`);

test("E is |ground| with EYE_HEIGHT_MIN as its floor", () => {
  assert.equal(EYE_HEIGHT_MIN, 0.5);
  assert.equal(eyeHeight(-1.6), 1.6);
  assert.equal(eyeHeight(2), 2);
  assert.equal(eyeHeight(-0.1), 0.5);
  assert.equal(eyeHeight(0), 0.5);
});

test("the lengths in E have the table's values at E = 1.6", () => {
  const lengths = eyeLengths(1.6);
  close(lengths.WORLD_BOUND_RADIUS, 48);
  close(lengths.WORLD_BOUND_MARGIN, 3.2);
  close(lengths.TARGET_DEFAULT_DISTANCE, 8);
  close(lengths.TARGET_MIN_DISTANCE, 0.008);
  close(lengths.TARGET_MAX_DISTANCE, 48);
  close(lengths.CAMERA_FRAME_RADIUS, 1.6);
  close(lengths.WORLD_IMAGE_HEIGHT, 1.6);
  assert.deepEqual(lengths.GRID_MINOR_FADE.map((v) => Math.round(v * 10) / 10), [12.8, 38.4]);
  assert.deepEqual(lengths.GRID_MAJOR_FADE.map((v) => Math.round(v * 10) / 10), [25.6, 48]);
  assert.ok(Object.isFrozen(lengths));
});

test("the absolute quantities have the table's values", () => {
  assert.equal(JOYSTICK_PIXELS, 100);
  assert.equal(WHEEL_FACTOR, 1.2);
  assert.equal(PITCH_LIMIT, 89.9);
  assert.equal(ORBIT_DEG_PER_PIXEL, 0.3);
  assert.equal(WHEEL_EASE_SECONDS, 0.4);
  assert.equal(ACTION_EASE_SECONDS, 0.4);
  assert.equal(FRAME_GAP_LIMIT, 0.1);
  assert.equal(FRAME_FALLBACK_SECONDS, 1 / 60);
  assert.equal(BOUND_NOTICE_SECONDS, 2);
  assert.equal(WHEEL_STEP_PIXELS, 100);
  assert.equal(FRAME_WHEEL_REST_MS, 180);
  assert.deepEqual(DROP_PREVIEW_BOX, { min: [-0.5, 0, -0.5], max: [0.5, 1, 0.5] });
  assert.equal(PREVIEW_DAMPING, 0.95);
});

test("a frame's time counts up to FRAME_GAP_LIMIT, else FRAME_FALLBACK_SECONDS", () => {
  assert.equal(frameSeconds(0.016), 0.016);
  assert.equal(frameSeconds(0.0999), 0.0999);
  assert.equal(frameSeconds(0.1), 1 / 60);
  assert.equal(frameSeconds(5), 1 / 60);
  assert.equal(frameSeconds(0), 0);
  assert.equal(frameSeconds(-1), 0);
  assert.equal(frameSeconds(Number.NaN), 0);
});

test("the world bound is WORLD_BOUND_RADIUS when nothing reaches farther", () => {
  close(worldBoundRadius({ eye: 1.6 }), 48);
  close(worldBoundRadius({ eye: 1.6, camera: [0, 0, 0], content: { center: [0, 0, -2], radius: 1 } }), 48);
});

test("the world bound grows to hold the content's sphere, the Camera and an eased destination, each with the margin", () => {
  close(worldBoundRadius({ eye: 1.6, content: { center: [0, 0, -50], radius: 4 } }), 50 + 4 + 3.2);
  close(worldBoundRadius({ eye: 1.6, camera: [0, 30, -40] }), 50 + 3.2);
  close(worldBoundRadius({ eye: 1.6, destination: [60, 0, 0] }), 60 + 3.2);
  close(worldBoundRadius({ eye: 1.6, content: { center: [0, 0, -50], radius: 4 }, camera: [0, 0, 70], destination: [60, 0, 0] }), 73.2);
});

test("the world bound scales with E", () => {
  close(worldBoundRadius({ eye: eyeHeight(-0.2) }), 15);
});
