import { clamp, wrapYaw, shortestYawDelta } from "./pano_math.js";

export const DEG2RAD = Math.PI / 180;
export const RAD2DEG = 180 / Math.PI;

export { clamp, wrapYaw, shortestYawDelta };

// A panorama view's pitch stops at ± this many degrees (the editor's view, the node surfaces' views, the new UI's
// view: studio/view_scale.js PITCH_LIMIT).
export const VIEW_PITCH_LIMIT_DEG = 89.9;
// The range of a panorama view's horizontal FOV, in degrees (the wheel's zoom, a restored or entered view).
export const VIEW_HFOV_MIN_DEG = 35;
export const VIEW_HFOV_MAX_DEG = 140;
// One step of a FOV in degrees, and the drag's scale in px per degree (docs/design.md "Camera タブの辺の目盛りの縮尺"):
// the Camera tab's FOV ruler (studio/frame_layout.js CAMERA_RULERS.fov), the zoom of the view (Alt + wheel, a pinch),
// the FOV number's drag and arrow keys, and the Preview node's zoom read these (docs/space-and-view.md "寄る").
export const VIEW_FOV_STEP_DEG = 2;
export const VIEW_FOV_DRAG_PX_PER_DEG = 4;
// The FOV number's Shift + arrow step, in degrees: the view holds whole degrees (docs/space-and-view.md "寄る").
export const VIEW_FOV_FINE_STEP_DEG = 1;

// `value` moved `step` in `dir` (+1 larger, -1 smaller), `fine` times it (the share Shift keeps, studio/ui_drag.js
// FINE_FACTOR; 1 without Shift), stopped at [min, max] and rounded to `precision` decimals (no "-0"). A value at an end
// stays there. The arrow key of every Camera tab ruler (its small tick) and every FOV step go by this.
export function stepWithin(value, dir, { step, min = -Infinity, max = Infinity, precision = 0, fine = 1 }) {
  const next = Math.min(max, Math.max(min, value + dir * step * fine));
  const scale = 10 ** Math.max(0, Math.round(precision));
  const rounded = Math.round(next * scale) / scale;
  return Object.is(rounded, -0) ? 0 : rounded;
}

// `value` moved one FOV step (VIEW_FOV_STEP_DEG; stepWithin), within the view's FOV range unless given another.
export function fovStepValue(value, dir, { min = VIEW_HFOV_MIN_DEG, max = VIEW_HFOV_MAX_DEG, precision = 0, fine = 1 } = {}) {
  return stepWithin(value, dir, { step: VIEW_FOV_STEP_DEG, min, max, precision, fine });
}

// One zoom step of a FOV (docs/space-and-view.md "寄る"): a wheel step rolled away (`step` > 0: nearer, a pinch spreading)
// makes it one FOV step smaller, one back larger; `options` as fovStepValue's.
export function fovZoomStep(fov, step, options = {}) {
  return fovStepValue(fov, -Math.sign(step), options);
}

// The vertical FOV, in degrees, of a pinhole view of horizontal FOV `hFovDeg` whose height ÷ width is
// `heightOverWidth`: tan(vFOV ÷ 2) = tan(hFOV ÷ 2) × height ÷ width. No clamp and no guard: callers clamp.
export function vFovFromHfov(hFovDeg, heightOverWidth) {
  return 2 * Math.atan(Math.tan(hFovDeg * DEG2RAD * 0.5) * heightOverWidth) * RAD2DEG;
}

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
