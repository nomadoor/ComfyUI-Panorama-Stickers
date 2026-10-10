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
import { lensAngle, lensAxesDirection, lensAxesFilm, lensFovLimit, lensRadius } from "./pano_lens.js";
import { PANO_FOV_WHEEL_STEP_DEG } from "./pano_wheel.js";

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

export function resolveFrameRollDeg(startRollDeg, accumulatedRad, { shiftKey = false } = {}) {
  let roll = finiteOr(startRollDeg, 0) + finiteOr(accumulatedRad, 0) * RAD2DEG;
  if (shiftKey) roll = Math.round(roll / 15) * 15;
  return wrapRollDeg(roll);
}


function finiteOr(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? number : Number(fallback);
}

// A shot's lens curve κ (Panorama Studio's Camera, ADR 0042): 1, the pinhole, for the legacy Cutout's shots. A shot's
// film tangents are its lens's image radii (pano_lens.js lensRadius), so its frame, gate and wheel steps keep their
// pinhole rules with κ in place of tan: at κ = 1 they are tan exactly.
export function shotCurve(shot) {
  const curve = Number(shot?.curve);
  return Number.isFinite(curve) ? curve : 1;
}

// The widest FOV a shot of κ takes: 179 for the pinhole, up to 360 below κ ≈ 0.497 (pano_lens.js lensFovLimit).
export function shotFovMaxDeg(curve = 1) {
  return curve === 1 ? CUTOUT_FOV_MAX_DEG : lensFovLimit(curve);
}

// The film tangent (image radius in units of f) of a half FOV in degrees, and back.
function halfTangent(fovDeg, curve) {
  return lensRadius(fovDeg * DEG2RAD * 0.5, curve);
}

function fovOfTangent(tangent, curve) {
  return 2 * lensAngle(tangent, curve) * RAD2DEG;
}

export function getCutoutCameraParams(shot = {}) {
  // Intentional legacy compatibility: falsy serialized FOV values mean the
  // historical 90/60-degree defaults, not the 1-degree clamp minimum.
  const curve = shotCurve(shot);
  const fovMax = shotFovMaxDeg(curve);
  const hFovDeg = clamp(finiteOr(shot.hFOV_deg || 90, 90), CUTOUT_FOV_MIN_DEG, fovMax);
  const vFovDeg = clamp(finiteOr(shot.vFOV_deg || 60, 60), CUTOUT_FOV_MIN_DEG, fovMax);
  const tanHalfX = halfTangent(hFovDeg, curve);
  const tanHalfY = halfTangent(vFovDeg, curve);
  return {
    curve,
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
export function fovPairForGate(gateSize, focalPx, curve = 1) {
  const focal = Math.max(1e-12, finiteOr(focalPx, 1));
  const width = Math.max(1e-6, finiteOr(gateSize?.width ?? gateSize?.w, 1));
  const height = Math.max(1e-6, finiteOr(gateSize?.height ?? gateSize?.h, 1));
  const fovMax = shotFovMaxDeg(curve);
  const hFOV_deg = clamp(fovOfTangent(width / (2 * focal), curve), CUTOUT_FOV_MIN_DEG, fovMax);
  const vFOV_deg = clamp(fovOfTangent(height / (2 * focal), curve), CUTOUT_FOV_MIN_DEG, fovMax);
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
  const hFOV_deg = fovOfTangent(camera.tanHalfX * scale, camera.curve);
  const vFOV_deg = fovOfTangent(camera.tanHalfY * scale, camera.curve);
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
  const hFOV_deg = fovOfTangent(camera.tanHalfX * scale, camera.curve);
  const vFOV_deg = fovOfTangent(camera.tanHalfY * scale, camera.curve);
  const fovMax = shotFovMaxDeg(camera.curve);
  if (!(hFOV_deg <= fovMax) || !(vFOV_deg <= fovMax)) return null;
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

// The vFOV of an hFOV over an image of `aspect` (width ÷ height): the image radii keep the aspect, so at κ
// g_κ(vFOV ÷ 2) = g_κ(hFOV ÷ 2) ÷ aspect (docs/scene-state-v2.md), tan at κ = 1.
export function deriveVerticalFovDeg(hFovDeg, aspect, curve = 1) {
  const fovMax = shotFovMaxDeg(curve);
  const horizontal = clamp(finiteOr(hFovDeg, 90), CUTOUT_FOV_MIN_DEG, fovMax);
  const ratio = Math.max(1e-6, finiteOr(aspect, 1));
  return clamp(fovOfTangent(halfTangent(horizontal, curve) / ratio, curve), CUTOUT_FOV_MIN_DEG, fovMax);
}

// The FOV pair of `shot` at hFovDeg that keeps its frame's aspect (its film tangents' ratio, at its lens curve):
// how Panorama Studio's Camera changes its angle of view (docs/editor-interaction.md; only the aspect presets
// change the aspect).
export function fovPairKeepingAspect(shot, hFovDeg) {
  const camera = getCutoutCameraParams(shot);
  const hFOV_deg = clamp(finiteOr(hFovDeg, camera.hFovDeg), CUTOUT_FOV_MIN_DEG, shotFovMaxDeg(camera.curve));
  return { hFOV_deg, vFOV_deg: deriveVerticalFovDeg(hFOV_deg, camera.aspect, camera.curve) };
}

export function deriveHorizontalFovDeg(vFovDeg, aspect, curve = 1) {
  const fovMax = shotFovMaxDeg(curve);
  const vertical = clamp(finiteOr(vFovDeg, 60), CUTOUT_FOV_MIN_DEG, fovMax);
  const ratio = Math.max(1e-6, finiteOr(aspect, 1));
  return clamp(fovOfTangent(halfTangent(vertical, curve) * ratio, curve), CUTOUT_FOV_MIN_DEG, fovMax);
}

function positiveFinite(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : Number(fallback);
}

function ratioTextFromPair(width, height) {
  const safeWidth = positiveFinite(width, 1);
  const safeHeight = positiveFinite(height, 1);
  if (safeWidth <= 0 || safeHeight <= 0) return "1:1";
  const scale = 1000;
  const widthInt = Math.max(1, Math.round(safeWidth * scale));
  const heightInt = Math.max(1, Math.round(safeHeight * scale));
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const divisor = gcd(widthInt, heightInt) || 1;
  return `${Math.max(1, Math.round(widthInt / divisor))}:${Math.max(1, Math.round(heightInt / divisor))}`;
}

export function deriveCutoutAspectFromFov(item) {
  const curve = shotCurve(item);
  const fovMax = shotFovMaxDeg(curve);
  const horizontal = clamp(Number(item?.hFOV_deg || 90), 1, fovMax);
  const vertical = clamp(Number(item?.vFOV_deg || 60), 1, fovMax);
  return Math.max(0.05, Math.min(20, halfTangent(horizontal, curve) / Math.max(1e-6, halfTangent(vertical, curve))));
}

export function deriveCutoutAspectLabelFromFov(item) {
  const aspect = deriveCutoutAspectFromFov(item);
  const presets = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4],
  ];
  const canonical = presets.find(([, value]) => Math.abs(aspect - value) <= 0.015);
  return canonical?.[0] || ratioTextFromPair(aspect, 1);
}

export function normalizeCutoutShotItem(raw) {
  if (!raw || typeof raw !== "object") return raw;
  const next = { ...raw, locked: raw.locked === true };
  delete next.out_w;
  delete next.out_h;
  next.aspect_id = deriveCutoutAspectLabelFromFov(next);
  return next;
}

export function createDefaultCutoutShot({
  id = "",
  yawDeg = 0,
  pitchDeg = 0,
  rollDeg = 0,
  viewFovDeg = 100,
  frameFovDeg = null,
} = {}) {
  const explicitFrameFov = frameFovDeg == null || String(frameFovDeg).trim() === ""
    ? NaN
    : Number(frameFovDeg);
  const fov = Number.isFinite(explicitFrameFov)
    ? clamp(explicitFrameFov, CUTOUT_FOV_MIN_DEG, CUTOUT_FOV_MAX_DEG)
    : clamp(Math.min(42, finiteOr(viewFovDeg, 100) * 0.42), 8, 96);
  return normalizeCutoutShotItem({
    id: String(id),
    label: "Frame 1",
    yaw_deg: finiteOr(yawDeg, 0),
    pitch_deg: clamp(finiteOr(pitchDeg, 0), -89.9, 89.9),
    roll_deg: wrapRollDeg(rollDeg),
    hFOV_deg: fov,
    vFOV_deg: fov,
    locked: false,
  });
}

export function getCutoutAspectLabel(item) {
  if (!item || typeof item !== "object") return "1:1";
  const stored = String(item.aspect_id || "").trim();
  if (/^\d+:\d+$/.test(stored)) return stored;
  return deriveCutoutAspectLabelFromFov(item);
}

export function scaleCutoutFovPair(shot, scale) {
  const camera = getCutoutCameraParams(shot);
  const factor = finiteOr(scale, 1);
  if (!(factor > 0)) return null;
  const nextH = fovOfTangent(camera.tanHalfX * factor, camera.curve);
  const nextV = fovOfTangent(camera.tanHalfY * factor, camera.curve);
  const fovMax = shotFovMaxDeg(camera.curve);
  if (!(nextH >= CUTOUT_FOV_MIN_DEG && nextH <= fovMax && nextV >= CUTOUT_FOV_MIN_DEG && nextV <= fovMax)) return null;
  return { hFOV_deg: nextH, vFOV_deg: nextV };
}

export function stepCutoutFovPairByWheel(
  shot,
  direction,
  stepDeg = PANO_FOV_WHEEL_STEP_DEG,
) {
  const sign = Math.sign(finiteOr(direction, 0));
  const step = Math.abs(finiteOr(stepDeg, PANO_FOV_WHEEL_STEP_DEG));
  if (!sign || !(step > 0)) return null;
  const camera = getCutoutCameraParams(shot);
  const nextHorizontal = camera.hFovDeg + sign * step;
  if (nextHorizontal < CUTOUT_FOV_MIN_DEG || nextHorizontal > shotFovMaxDeg(camera.curve)) return null;
  const nextTanHalfX = halfTangent(nextHorizontal, camera.curve);
  return scaleCutoutFovPair(shot, nextTanHalfX / camera.tanHalfX);
}

// The World direction of a film point: at κ ≠ 1 its ray by the lens (null past 180° off the axis).
export function cutoutFilmPointToWorldDir(shot, filmPoint) {
  const camera = getCutoutCameraParams(shot);
  const basis = cameraBasis(camera.yawDeg, camera.pitchDeg, camera.rollDeg);
  const x = finiteOr(filmPoint?.x, 0);
  const y = finiteOr(filmPoint?.y, 0);
  if (camera.curve === 1) return norm(add(add(basis.fwd, mul(basis.right, x)), mul(basis.up, y)));
  return lensAxesDirection(basis, x, y, camera.curve);
}

export function worldDirToCutoutFilmPoint(shot, direction) {
  if (!direction) return null;
  const camera = getCutoutCameraParams(shot);
  const basis = cameraBasis(camera.yawDeg, camera.pitchDeg, camera.rollDeg);
  const forward = dot(direction, basis.fwd);
  if (camera.curve !== 1) return lensAxesFilm(basis, direction, camera.curve);
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
