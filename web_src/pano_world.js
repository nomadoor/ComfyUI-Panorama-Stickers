// Conversions between the panorama convention and World (ADR 0023).
//
// World is glTF: right-handed, +X right, +Y up, forward -Z. The panorama
// convention of cameraBasis is +X right, +Y up, +Z forward, so the two differ by
// a single Z flip S = diag(1, 1, -1). Keep this module in parity with
// comfyui_pano_suite/core/world.py; no other code flips Z.
//
// Angles always stay in the panorama convention. worldRotation maps a glTF
// local frame (+X right, +Y up, looking down local -Z, as three.js cameras do)
// into World, which is S * R * S for the panorama rotation R. Matrices are
// row-major 3x3 arrays; quaternions are { x, y, z, w } as three.js has them.

import { RAD2DEG, cameraBasis, vec3 } from "./pano_camera_math.js";

export function panoToWorld(v) {
  return vec3(v.x, v.y, -v.z);
}

export function worldToPano(v) {
  return vec3(v.x, v.y, -v.z);
}

export function worldRotation(yawDeg, pitchDeg, rollDeg = 0) {
  const { right, up, fwd } = cameraBasis(yawDeg, pitchDeg, rollDeg);
  return [
    [right.x, up.x, -fwd.x],
    [right.y, up.y, -fwd.y],
    [-right.z, -up.z, fwd.z],
  ];
}

export function panoramaAngles(rotation) {
  // Inverse of worldRotation. At the poles yaw and roll share an axis.
  const right = worldToPano(vec3(rotation[0][0], rotation[1][0], rotation[2][0]));
  const up = worldToPano(vec3(rotation[0][1], rotation[1][1], rotation[2][1]));
  const fwd = worldToPano(vec3(-rotation[0][2], -rotation[1][2], -rotation[2][2]));
  // + 0 turns -0 into 0 so a camera looking straight up or down keeps yaw 0, not 180.
  const yaw = Math.atan2(fwd.x + 0, fwd.z + 0);
  const pitch = Math.atan2(fwd.y, Math.hypot(fwd.x, fwd.z));
  // Undo yaw before reading roll so a noisy yaw near the poles is absorbed by roll.
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const roll = Math.atan2(sy * up.z - cy * up.x, cy * right.x - sy * right.z);
  return { yawDeg: yaw * RAD2DEG, pitchDeg: pitch * RAD2DEG, rollDeg: roll * RAD2DEG };
}

export function quaternionToRotation(q) {
  const length = Math.hypot(q.x, q.y, q.z, q.w);
  const x = q.x / length;
  const y = q.y / length;
  const z = q.z / length;
  const w = q.w / length;
  return [
    [1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)],
    [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)],
    [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)],
  ];
}

export function rotationToQuaternion(rotation) {
  // Same branches as three.js Quaternion.setFromRotationMatrix.
  const [[m11, m12, m13], [m21, m22, m23], [m31, m32, m33]] = rotation;
  const trace = m11 + m22 + m33;
  if (trace > 0) {
    const s = 0.5 / Math.sqrt(trace + 1);
    return { x: (m32 - m23) * s, y: (m13 - m31) * s, z: (m21 - m12) * s, w: 0.25 / s };
  }
  if (m11 > m22 && m11 > m33) {
    const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
    return { x: 0.25 * s, y: (m12 + m21) / s, z: (m13 + m31) / s, w: (m32 - m23) / s };
  }
  if (m22 > m33) {
    const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
    return { x: (m12 + m21) / s, y: 0.25 * s, z: (m23 + m32) / s, w: (m13 - m31) / s };
  }
  const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
  return { x: (m13 + m31) / s, y: (m23 + m32) / s, z: 0.25 * s, w: (m21 - m12) / s };
}
