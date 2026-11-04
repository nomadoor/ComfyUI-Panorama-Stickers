import assert from "node:assert/strict";
import test from "node:test";

import { VIEW_FOV_DRAG_PX_PER_DEG, VIEW_FOV_STEP_DEG, VIEW_HFOV_MAX_DEG, VIEW_HFOV_MIN_DEG, VIEW_FOV_FINE_STEP_DEG, cameraBasis, fovStepValue, fovZoomStep } from "../web_src/pano_camera_math.js";

function closeVector(actual, expected, tolerance = 1e-12) {
  for (const axis of ["x", "y", "z"]) {
    assert.ok(
      Math.abs(Number(actual[axis]) - Number(expected[axis])) <= tolerance,
      `${axis}: expected ${expected[axis]}, received ${actual[axis]}`,
    );
  }
}

function legacyCameraBasis(yawDeg, pitchDeg, rollDeg) {
  const radians = Math.PI / 180;
  const yaw = yawDeg * radians;
  const pitch = pitchDeg * radians;
  const roll = rollDeg * radians;
  const fwd = {
    x: Math.cos(pitch) * Math.sin(yaw),
    y: Math.sin(pitch),
    z: Math.cos(pitch) * Math.cos(yaw),
  };
  const right = { x: fwd.z, y: 0, z: -fwd.x };
  const rightLength = Math.hypot(right.x, right.y, right.z);
  Object.keys(right).forEach((axis) => { right[axis] /= rightLength; });
  const up = {
    x: fwd.y * right.z - fwd.z * right.y,
    y: fwd.z * right.x - fwd.x * right.z,
    z: fwd.x * right.y - fwd.y * right.x,
  };
  const cr = Math.cos(roll);
  const sr = Math.sin(roll);
  return {
    right: {
      x: right.x * cr + up.x * sr,
      y: right.y * cr + up.y * sr,
      z: right.z * cr + up.z * sr,
    },
    up: {
      x: -right.x * sr + up.x * cr,
      y: -right.y * sr + up.y * cr,
      z: -right.z * sr + up.z * cr,
    },
    fwd,
  };
}

test("camera basis follows the ERP yaw, pitch, and roll axis contract", () => {
  const yawRight = cameraBasis(90, 0, 0);
  closeVector(yawRight.right, { x: 0, y: 0, z: -1 });
  closeVector(yawRight.up, { x: 0, y: 1, z: 0 });
  closeVector(yawRight.fwd, { x: 1, y: 0, z: 0 });

  const clockwiseRoll = cameraBasis(0, 0, 90);
  closeVector(clockwiseRoll.right, { x: 0, y: 1, z: 0 });
  closeVector(clockwiseRoll.up, { x: -1, y: 0, z: 0 });
  closeVector(clockwiseRoll.fwd, { x: 0, y: 0, z: 1 });
});

test("explicit rotation matches the legacy camera away from its pole switch", () => {
  for (const [yaw, pitch, roll] of [
    [0, 0, 0],
    [90, 0, 0],
    [-90, 45, -45],
    [37, -28, 19],
    [-123, 61, -42],
    [15, 80, 45],
    [15, -80, -45],
  ]) {
    const actual = cameraBasis(yaw, pitch, roll);
    const legacy = legacyCameraBasis(yaw, pitch, roll);
    closeVector(actual.right, legacy.right);
    closeVector(actual.up, legacy.up);
    closeVector(actual.fwd, legacy.fwd);
  }
});

test("camera basis stays continuous across the legacy pole threshold", () => {
  const before = cameraBasis(0, 87.43, 0);
  const after = cameraBasis(0, 87.45, 0);
  const rightDot = before.right.x * after.right.x
    + before.right.y * after.right.y
    + before.right.z * after.right.z;
  const upDot = before.up.x * after.up.x
    + before.up.y * after.up.y
    + before.up.z * after.up.z;

  assert.ok(rightDot > 0.999999);
  assert.ok(upDot > 0.999999);
  assert.ok(before.right.x > 0.999999);
  assert.ok(after.right.x > 0.999999);
});

test("camera basis preserves yaw at the exact pole", () => {
  const pole = cameraBasis(90, 90, 0);

  closeVector(pole.right, { x: 0, y: 0, z: -1 });
  closeVector(pole.up, { x: -1, y: 0, z: 0 });
  closeVector(pole.fwd, { x: 0, y: 1, z: 0 });
});

// docs/space-and-view.md "寄る" and docs/design.md "Camera タブの辺の目盛りの縮尺": one FOV step is 2°, the drag 4 px per
// degree; a step stops at the range's ends, keeps `fine` of a step with Shift and rounds to the digits asked for.
test("fovStepValue: one step in either direction, within the range, at the digits asked for", () => {
  assert.equal(VIEW_FOV_STEP_DEG, 2);
  assert.equal(VIEW_FOV_DRAG_PX_PER_DEG, 4);
  assert.equal(fovStepValue(100, -1), 98);
  assert.equal(fovStepValue(100, 1), 102);
  assert.equal(fovStepValue(VIEW_HFOV_MIN_DEG + 1, -1), VIEW_HFOV_MIN_DEG);
  assert.equal(fovStepValue(VIEW_HFOV_MIN_DEG, -1), VIEW_HFOV_MIN_DEG);
  assert.equal(fovStepValue(VIEW_HFOV_MAX_DEG, 1), VIEW_HFOV_MAX_DEG);
  // The Camera's H FOV (the inspector box's range and one decimal), Shift's tenth of a step.
  assert.equal(fovStepValue(60, 1, { min: 1, max: 120, precision: 1, fine: 0.1 }), 60.2);
  assert.equal(fovStepValue(119.5, 1, { min: 1, max: 120, precision: 1 }), 120);
  assert.equal(fovStepValue(60.04, 1, { min: 1, max: 120, precision: 1 }), 62);
});

// docs/space-and-view.md "寄る": rolled away (a step > 0) is nearer, a smaller FOV.
test("fovZoomStep: rolled away is one FOV step smaller, back is larger", () => {
  assert.equal(fovZoomStep(100, 1), 98);
  assert.equal(fovZoomStep(100, -1), 102);
  assert.equal(fovZoomStep(100, 3), 98);
  assert.equal(fovZoomStep(60, 1, { min: 1, max: 120, precision: 1 }), 58);
  assert.equal(fovZoomStep(VIEW_HFOV_MIN_DEG, 1), VIEW_HFOV_MIN_DEG);
});

test("the FOV number's fine step is one degree", () => {
  assert.equal(VIEW_FOV_FINE_STEP_DEG, 1);
});
