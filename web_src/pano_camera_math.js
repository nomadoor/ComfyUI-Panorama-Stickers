import { clamp, wrapYaw, shortestYawDelta } from "./pano_math.js";

export const DEG2RAD = Math.PI / 180;
export const RAD2DEG = 180 / Math.PI;

export { clamp, wrapYaw, shortestYawDelta };

export function vec3(x, y, z) {
  return { x, y, z };
}

export function add(a, b) {
  return vec3(a.x + b.x, a.y + b.y, a.z + b.z);
}

export function mul(a, s) {
  return vec3(a.x * s, a.y * s, a.z * s);
}

export function dot(a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

export function norm(a) {
  const l = Math.hypot(a.x, a.y, a.z) || 1e-8;
  return vec3(a.x / l, a.y / l, a.z / l);
}

export function yawPitchToDir(yawDeg, pitchDeg) {
  const yaw = yawDeg * DEG2RAD;
  const pitch = pitchDeg * DEG2RAD;
  const cp = Math.cos(pitch);
  return vec3(cp * Math.sin(yaw), Math.sin(pitch), cp * Math.cos(yaw));
}

export function cameraBasis(yawDeg, pitchDeg, rollDeg = 0) {
  // Camera-local axes are +X right, +Y up, and +Z forward. Applying
  // Ry(yaw) * Rx(-pitch) * Rz(roll) keeps the orientation continuous at the
  // poles: positive yaw looks right, positive pitch looks up, and positive
  // roll turns the image clockwise. Keep this in parity with core/math.py.
  const yaw = Number(yawDeg || 0) * DEG2RAD;
  const pitch = Number(pitchDeg || 0) * DEG2RAD;
  const rr = rollDeg * DEG2RAD;
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  const cr = Math.cos(rr);
  const sr = Math.sin(rr);
  return {
    right: vec3(
      cy * cr - sy * sp * sr,
      cp * sr,
      -sy * cr - cy * sp * sr,
    ),
    up: vec3(
      -cy * sr - sy * sp * cr,
      cp * cr,
      sy * sr - cy * sp * cr,
    ),
    fwd: vec3(sy * cp, sp, cy * cp),
  };
}

// The direction of the point (x, y) of the tangent plane at basis.fwd, x along basis.right and y along basis.up (the
// gnomonic projection's inverse; a sky Sticker's frame and a stroke group's frame map their corners with it).
export function tangentDirection(basis, x, y) {
  return norm(add(add(basis.fwd, mul(basis.right, x)), mul(basis.up, y)));
}
