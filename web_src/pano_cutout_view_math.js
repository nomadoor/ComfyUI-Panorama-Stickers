import {
  DEG2RAD,
  RAD2DEG,
  add,
  cameraBasis,
  clamp,
  dot,
  mul,
  norm,
} from "./pano_camera_math.js";

export const CUTOUT_FOV_MIN_DEG = 1;
export const CUTOUT_FOV_MAX_DEG = 179;
export const CUTOUT_OVERSCAN_MAX = 1.5;
export const CUTOUT_OVERSCAN_SAFE_HALF_ANGLE_DEG = 85;

export function wrapRollDeg(value) {
  const wrapped = ((finiteOr(value, 0) + 180) % 360 + 360) % 360 - 180;
  return wrapped <= -180 ? 180 : wrapped;
}

export function shortestAngleDeltaRad(current, previous) {
  let delta = finiteOr(current, 0) - finiteOr(previous, 0);
  while (delta <= -Math.PI) delta += Math.PI * 2;
  while (delta > Math.PI) delta -= Math.PI * 2;
  return delta;
}

export function resolveFrameRollDeg(startRollDeg, accumulatedRad, { shiftKey = false, altKey = false } = {}) {
  let roll = finiteOr(startRollDeg, 0) + finiteOr(accumulatedRad, 0) * RAD2DEG;
  if (shiftKey) roll = Math.round(roll / 15) * 15;
  else if (!altKey && Math.abs(wrapRollDeg(roll)) <= 1) roll = 0;
  return wrapRollDeg(roll);
}


function finiteOr(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? number : Number(fallback);
}

export function getCutoutCameraParams(shot = {}) {
  const hFovDeg = clamp(finiteOr(shot.hFOV_deg, 90), CUTOUT_FOV_MIN_DEG, CUTOUT_FOV_MAX_DEG);
  const vFovDeg = clamp(finiteOr(shot.vFOV_deg, 60), CUTOUT_FOV_MIN_DEG, CUTOUT_FOV_MAX_DEG);
  const tanHalfX = Math.tan(hFovDeg * DEG2RAD * 0.5);
  const tanHalfY = Math.tan(vFovDeg * DEG2RAD * 0.5);
  return {
    yawDeg: finiteOr(shot.yaw_deg, 0),
    pitchDeg: finiteOr(shot.pitch_deg, 0),
    rollDeg: finiteOr(shot.roll_deg ?? shot.rot_deg, 0),
    hFovDeg,
    vFovDeg,
    tanHalfX,
    tanHalfY,
    aspect: tanHalfX / Math.max(1e-12, tanHalfY),
  };
}

export function fitFocalPx(safeRect, shot) {
  const safeWidth = Math.max(1, finiteOr(safeRect?.w ?? safeRect?.width, 1));
  const safeHeight = Math.max(1, finiteOr(safeRect?.h ?? safeRect?.height, 1));
  const camera = getCutoutCameraParams(shot);
  return Math.max(1, Math.min(
    safeWidth / (2 * camera.tanHalfX),
    safeHeight / (2 * camera.tanHalfY),
  ));
}

// Largest rectangle of `aspect` that fits the UI-safe rect: landscape frames
// end up filling the width, portrait frames the height.
export function aspectFitGateSize(safeRect, aspect) {
  const safeWidth = Math.max(1, finiteOr(safeRect?.w ?? safeRect?.width, 1));
  const safeHeight = Math.max(1, finiteOr(safeRect?.h ?? safeRect?.height, 1));
  const ratio = Math.max(1e-6, finiteOr(aspect, 1));
  const width = Math.min(safeWidth, safeHeight * ratio);
  return { width, height: width / ratio };
}

// FOV pair that draws `gate` at `focalPx`.
//
// This is how an aspect change keeps the ERP still while still giving every
// aspect the biggest frame the viewport allows. Holding the FOV instead forces
// the scale to follow the aspect, which is seen as the background zooming;
// holding the scale and re-deriving the FOV moves only the crop. The captured
// solid angle is not conserved, which is correct for Frame view — what matters
// is the crop being composed, not the area it happens to cover.
export function fovPairForGate(gateSize, focalPx) {
  const focal = Math.max(1e-12, finiteOr(focalPx, 1));
  const width = Math.max(1e-6, finiteOr(gateSize?.width ?? gateSize?.w, 1));
  const height = Math.max(1e-6, finiteOr(gateSize?.height ?? gateSize?.h, 1));
  const hFOV_deg = clamp(2 * Math.atan(width / (2 * focal)) * RAD2DEG, CUTOUT_FOV_MIN_DEG, CUTOUT_FOV_MAX_DEG);
  const vFOV_deg = clamp(2 * Math.atan(height / (2 * focal)) * RAD2DEG, CUTOUT_FOV_MIN_DEG, CUTOUT_FOV_MAX_DEG);
  return { hFOV_deg, vFOV_deg };
}

export function gateRectFromFocal(safeRect, shot, focalPx) {
  const x = finiteOr(safeRect?.x, 0);
  const y = finiteOr(safeRect?.y, 0);
  const safeWidth = Math.max(1, finiteOr(safeRect?.w ?? safeRect?.width, 1));
  const safeHeight = Math.max(1, finiteOr(safeRect?.h ?? safeRect?.height, 1));
  const camera = getCutoutCameraParams(shot);
  const focal = Math.max(1e-12, finiteOr(focalPx, 1));
  const width = 2 * focal * camera.tanHalfX;
  const height = 2 * focal * camera.tanHalfY;
  return {
    x: x + (safeWidth - width) * 0.5,
    y: y + (safeHeight - height) * 0.5,
    w: width,
    h: height,
    focalPx: focal,
  };
}

// Half extents of the rendered scene context, in canvas pixels. Bounded only by
// the canvas and by the absolute field angle — never by the gate, otherwise the
// painted area shrinks with the gate and leaves unpainted margins.
export function contextHalfExtentsPx(canvasSize, focalPx, safeHalfAngleDeg = CUTOUT_OVERSCAN_SAFE_HALF_ANGLE_DEG) {
  const focal = Math.max(1e-12, finiteOr(focalPx, 1));
  const angle = clamp(finiteOr(safeHalfAngleDeg, CUTOUT_OVERSCAN_SAFE_HALF_ANGLE_DEG), 1, 89.999);
  const limit = focal * Math.tan(angle * DEG2RAD);
  const width = Math.max(1, finiteOr(canvasSize?.width ?? canvasSize?.w, 1));
  const height = Math.max(1, finiteOr(canvasSize?.height ?? canvasSize?.h, 1));
  return {
    halfW: Math.min(width * 0.5, limit),
    halfH: Math.min(height * 0.5, limit),
  };
}

export function clampFovPairToGate(shot, focalPx, safeRect) {
  const camera = getCutoutCameraParams(shot);
  const focal = Math.max(1e-12, finiteOr(focalPx, 1));
  const safeWidth = Math.max(1, finiteOr(safeRect?.w ?? safeRect?.width, 1));
  const safeHeight = Math.max(1, finiteOr(safeRect?.h ?? safeRect?.height, 1));
  const scale = Math.min(
    1,
    safeWidth / (2 * focal * camera.tanHalfX),
    safeHeight / (2 * focal * camera.tanHalfY),
  );
  const hFOV_deg = 2 * Math.atan(camera.tanHalfX * scale) * RAD2DEG;
  const vFOV_deg = 2 * Math.atan(camera.tanHalfY * scale) * RAD2DEG;
  if (hFOV_deg < CUTOUT_FOV_MIN_DEG || vFOV_deg < CUTOUT_FOV_MIN_DEG) return null;
  return {
    hFOV_deg,
    vFOV_deg,
    clamped: scale < 1,
  };
}

export function fitFovPairToGate(shot, focalPx, safeRect) {
  const camera = getCutoutCameraParams(shot);
  const focal = Math.max(1e-12, finiteOr(focalPx, 1));
  const scale = Math.min(
    Math.max(1, finiteOr(safeRect?.w ?? safeRect?.width, 1)) / (2 * focal * camera.tanHalfX),
    Math.max(1, finiteOr(safeRect?.h ?? safeRect?.height, 1)) / (2 * focal * camera.tanHalfY),
  );
  const hFOV_deg = 2 * Math.atan(camera.tanHalfX * scale) * RAD2DEG;
  const vFOV_deg = 2 * Math.atan(camera.tanHalfY * scale) * RAD2DEG;
  if (hFOV_deg > CUTOUT_FOV_MAX_DEG || vFOV_deg > CUTOUT_FOV_MAX_DEG) return null;
  return { hFOV_deg, vFOV_deg };
}

export function canvasToFilmTangent(center, focalPx, point) {
  const focal = Math.max(1e-12, finiteOr(focalPx, 1));
  return {
    x: (finiteOr(point?.x, 0) - finiteOr(center?.x, 0)) / focal,
    y: -(finiteOr(point?.y, 0) - finiteOr(center?.y, 0)) / focal,
  };
}

export function filmTangentToCanvas(center, focalPx, tangent) {
  const focal = Math.max(1e-12, finiteOr(focalPx, 1));
  return {
    x: finiteOr(center?.x, 0) + finiteOr(tangent?.x, 0) * focal,
    y: finiteOr(center?.y, 0) - finiteOr(tangent?.y, 0) * focal,
  };
}

export function deriveVerticalFovDeg(hFovDeg, aspect) {
  const horizontal = clamp(finiteOr(hFovDeg, 90), CUTOUT_FOV_MIN_DEG, CUTOUT_FOV_MAX_DEG);
  const ratio = Math.max(1e-6, finiteOr(aspect, 1));
  return clamp(
    2 * Math.atan(Math.tan(horizontal * DEG2RAD * 0.5) / ratio) * RAD2DEG,
    CUTOUT_FOV_MIN_DEG,
    CUTOUT_FOV_MAX_DEG,
  );
}

export function deriveHorizontalFovDeg(vFovDeg, aspect) {
  const vertical = clamp(finiteOr(vFovDeg, 60), CUTOUT_FOV_MIN_DEG, CUTOUT_FOV_MAX_DEG);
  const ratio = Math.max(1e-6, finiteOr(aspect, 1));
  return clamp(
    2 * Math.atan(Math.tan(vertical * DEG2RAD * 0.5) * ratio) * RAD2DEG,
    CUTOUT_FOV_MIN_DEG,
    CUTOUT_FOV_MAX_DEG,
  );
}

export function scaleCutoutFovPair(shot, scale) {
  const camera = getCutoutCameraParams(shot);
  const factor = finiteOr(scale, 1);
  if (!(factor > 0)) return null;
  const nextH = 2 * Math.atan(camera.tanHalfX * factor) * RAD2DEG;
  const nextV = 2 * Math.atan(camera.tanHalfY * factor) * RAD2DEG;
  if (nextH < CUTOUT_FOV_MIN_DEG || nextH > CUTOUT_FOV_MAX_DEG
    || nextV < CUTOUT_FOV_MIN_DEG || nextV > CUTOUT_FOV_MAX_DEG) return null;
  return { hFOV_deg: nextH, vFOV_deg: nextV };
}

export function cutoutFilmPointToWorldDir(shot, filmPoint) {
  const camera = getCutoutCameraParams(shot);
  const basis = cameraBasis(camera.yawDeg, camera.pitchDeg, camera.rollDeg);
  const x = finiteOr(filmPoint?.x, 0);
  const y = finiteOr(filmPoint?.y, 0);
  return norm(add(add(basis.fwd, mul(basis.right, x)), mul(basis.up, y)));
}

export function worldDirToCutoutFilmPoint(shot, direction) {
  if (!direction) return null;
  const camera = getCutoutCameraParams(shot);
  const basis = cameraBasis(camera.yawDeg, camera.pitchDeg, camera.rollDeg);
  const forward = dot(direction, basis.fwd);
  if (!Number.isFinite(forward) || forward <= 1e-8) return null;
  return {
    x: dot(direction, basis.right) / forward,
    y: dot(direction, basis.up) / forward,
  };
}

export function getCutoutOverscanScale(axisFovDeg, options = {}) {
  const maxScale = Math.max(1, finiteOr(options.maxScale, CUTOUT_OVERSCAN_MAX));
  const safeHalfAngleDeg = clamp(
    finiteOr(options.safeHalfAngleDeg, CUTOUT_OVERSCAN_SAFE_HALF_ANGLE_DEG),
    1,
    89.999,
  );
  const fov = clamp(finiteOr(axisFovDeg, 90), CUTOUT_FOV_MIN_DEG, CUTOUT_FOV_MAX_DEG);
  const angleScale = Math.tan(safeHalfAngleDeg * DEG2RAD) / Math.tan(fov * DEG2RAD * 0.5);
  return clamp(Math.min(maxScale, angleScale), 1, maxScale);
}
