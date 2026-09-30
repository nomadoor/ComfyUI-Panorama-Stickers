import assert from "node:assert/strict";
import test from "node:test";

import {
  cameraFromCameraInfo,
  cameraInfoFromCamera,
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

// Mirrors three.js Matrix4.lookAt for a camera (local +Z = eye - target) with
// the default up vector, returned as a row-major 3x3 rotation.
// TODO(#66): replace with THREE.Matrix4.lookAt and Quaternion.setFromRotationMatrix once three.js is a dependency.
function threeCameraLookAt(eye, target) {
  const normalize = (v) => {
    const length = Math.hypot(...v);
    return v.map((c) => c / length);
  };
  const cross = (a, b) => [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
  const z = normalize([eye[0] - target[0], eye[1] - target[1], eye[2] - target[2]]);
  const x = normalize(cross([0, 1, 0], z));
  const y = cross(z, x);
  return [0, 1, 2].map((i) => [x[i], y[i], z[i]]);
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

test("camera_info round trips through the state Camera", () => {
  const camera = { position: [1.5, -0.25, 3], yaw_deg: 37, pitch_deg: -28, roll_deg: 19, hFOV_deg: 90 };
  const cameraInfo = cameraInfoFromCamera(camera, 16 / 9);

  assert.equal(cameraInfo.cameraType, "perspective");
  assert.equal(cameraInfo.zoom, 1);
  close(cameraInfo.fov, 2 * Math.atan(Math.tan(Math.PI / 4) * 9 / 16) * 180 / Math.PI);

  const restored = cameraFromCameraInfo(cameraInfo, 16 / 9);
  assert.deepEqual(restored.position, camera.position);
  for (const key of ["yaw_deg", "pitch_deg", "roll_deg", "hFOV_deg"]) {
    close(restored[key], camera[key], 1e-9);
  }
});

test("camera_info without a quaternion looks at its target", () => {
  const camera = cameraFromCameraInfo({
    position: { x: 1, y: 2, z: 3 },
    target: { x: 2, y: 2, z: 3 },
    zoom: 2,
    cameraType: "perspective",
    fov: 60,
  }, 2);

  close(camera.yaw_deg, 90);
  close(camera.pitch_deg, 0);
  assert.equal(camera.roll_deg, 0);
  const tanHalfV = Math.tan(Math.PI / 6) / 2;
  close(camera.hFOV_deg, 2 * Math.atan(tanHalfV * 2) * 180 / Math.PI);
});

test("orthographic camera_info is rejected", () => {
  assert.throws(() => cameraFromCameraInfo({
    position: { x: 0, y: 0, z: 5 },
    target: { x: 0, y: 0, z: 0 },
    zoom: 1,
    cameraType: "orthographic",
  }, 1));
});

test("optional camera_info keys take core defaults", () => {
  const origin = { x: 0, y: 0, z: 0 };
  const cases = [
    [{ position: origin, target: { x: 0, y: 0, z: -1 }, cameraType: "perspective" }, [0, 0, 0, 35]],
    [{ position: origin, target: { x: 1, y: 0, z: 0 }, fov: 0, zoom: 0, cameraType: "perspective" }, [90, 0, 0, 35]],
    [{ position: origin, target: { x: -1, y: 0, z: 0 }, quaternion: {}, fov: 50, zoom: 1 }, [-90, 0, 0, 50]],
    [{ position: origin, target: { x: 0, y: 1, z: -1 }, quaternion: null, zoom: 1, cameraType: "perspective", fov: 40 }, [0, 45, 0, 40]],
  ];
  for (const [cameraInfo, expected] of cases) {
    const camera = cameraFromCameraInfo(cameraInfo, 1);
    [camera.yaw_deg, camera.pitch_deg, camera.roll_deg, camera.hFOV_deg].forEach((value, i) => close(value, expected[i], 1e-9));
  }
});

test("a camera looking straight down keeps yaw 0", () => {
  const lookAt = cameraFromCameraInfo({ position: { x: 0, y: 2, z: 0 }, target: { x: 0, y: 0, z: 0 }, cameraType: "perspective" }, 1);
  assert.deepEqual([lookAt.yaw_deg, lookAt.pitch_deg, lookAt.roll_deg], [0, -90, 0]);

  const angles = panoramaAngles([[1, 0, 0], [0, 0, 1], [0, -1, 0]]);
  assert.deepEqual([angles.yawDeg, angles.pitchDeg, angles.rollDeg], [0, -90, 0]);
});
