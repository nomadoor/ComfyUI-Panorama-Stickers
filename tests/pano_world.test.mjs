import assert from "node:assert/strict";
import test from "node:test";

import { Matrix4, Vector3 } from "three";

import {
  panoToWorld,
  panoramaAngles,
  quaternionToRotation,
  rotationToQuaternion,
  worldRotation,
  worldToPano,
} from "../web_src/pano_world.js";

function close(actual, expected, tolerance = 1e-9) {
  assert.ok(Math.abs(actual - expected) <= tolerance, `expected ${expected}, received ${actual}`);
}

function closeMatrix(actual, expected, tolerance = 1e-9) {
  actual.forEach((row, i) => row.forEach((value, j) => close(value, expected[i][j], tolerance)));
}

function column(matrix, index) {
  return matrix.map((row) => row[index]);
}

// three.js Matrix4.lookAt for a camera (local +Z = eye - target) with the default up vector, as a
// row-major 3x3 rotation.
function threeCameraLookAt(eye, target) {
  const e = new Matrix4().lookAt(new Vector3(...eye), new Vector3(...target), new Vector3(0, 1, 0)).elements;
  return [0, 1, 2].map((i) => [e[i], e[4 + i], e[8 + i]]);
}

test("positions and directions flip only z", () => {
  assert.deepEqual(panoToWorld({ x: 1, y: 2, z: 3 }), { x: 1, y: 2, z: -3 });
  assert.deepEqual(worldToPano({ x: 1, y: 2, z: -3 }), { x: 1, y: 2, z: 3 });
});

test("panorama angles keep their screen meaning in World", () => {
  const screenRight = column(worldRotation(0, 0, 0), 0);
  const yawRight = worldRotation(90, 0, 0);
  column(yawRight, 2).forEach((value, i) => close(-value, screenRight[i], 1e-12));

  const pitchUp = worldRotation(0, 90, 0);
  close(-pitchUp[1][2], 1, 1e-12);

  const roll = worldRotation(0, 0, 30);
  close(roll[1][0], 0.5, 1e-12);
});

test("roll-free rotations match three.js lookAt", () => {
  const cases = [[0, 0], [90, 0], [-135, 20], [37, -28], [170, 60]];
  for (const [yaw, pitch] of cases) {
    const rotation = worldRotation(yaw, pitch, 0);
    const forward = column(rotation, 2).map((value) => -value);
    closeMatrix(rotation, threeCameraLookAt([0, 0, 0], forward), 1e-12);
  }
});

test("rotations round trip through quaternions and angles", () => {
  const cases = [[0, 0, 0], [37, -28, 19], [-123, 61, -42], [170, -10, 175], [15, 89, 23], [40, 90, 0], [-80, -90, -31]];
  for (const [yaw, pitch, roll] of cases) {
    const rotation = worldRotation(yaw, pitch, roll);
    closeMatrix(quaternionToRotation(rotationToQuaternion(rotation)), rotation, 1e-12);
    const angles = panoramaAngles(rotation);
    closeMatrix(worldRotation(angles.yawDeg, angles.pitchDeg, angles.rollDeg), rotation, 1e-12);
  }
});

test("a camera looking straight down keeps yaw 0", () => {
  const angles = panoramaAngles([[1, 0, 0], [0, 0, 1], [0, -1, 0]]);
  assert.deepEqual([angles.yawDeg, angles.pitchDeg, angles.rollDeg], [0, -90, 0]);
});
