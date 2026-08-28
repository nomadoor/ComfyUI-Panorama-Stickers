import {
  aspectFitGateSize,
  canvasToFilmTangent,
  CUTOUT_OVERSCAN_SAFE_HALF_ANGLE_DEG,
  createDefaultCutoutShot,
  cutoutFilmPointToWorldDir,
  deriveCutoutAspectFromFov,
  deriveHorizontalFovDeg,
  contextHalfExtentsPx,
  fitFocalPx,
  fovPairForGate,
  getCutoutAspectLabel,
  resolveFrameRollDeg,
  scaleCutoutFovPair,
  stepCutoutFovPairByWheel,
  shortestAngleDeltaRad,
  wrapRollDeg,
} from "./pano_cutout_view_math.js";
import { cameraBasis, dot } from "./pano_camera_math.js";
import { clamp, wrapYaw } from "./pano_math.js";
import { createNodeSurfaceSession } from "./pano_node_surface_session.js";

const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

export const CUTOUT_NODE_FRAME_PADDING = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32,
});
export const CUTOUT_NODE_SURFACE_MIN_HEIGHT = 260;

function positiveFinite(value) {
  const text = String(value ?? "").trim();
  if (!text) return null;
  const number = Number(text);
  return Number.isFinite(number) && number > 0 ? number : null;
}

function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function ratioLabel(width, height) {
  const directScale = 1000;
  const canScaleDirectly = Math.max(width, height) <= Number.MAX_SAFE_INTEGER / directScale;
  const scale = canScaleDirectly ? directScale : 1_000_000;
  const divisorBase = canScaleDirectly ? 1 : Math.max(width, height);
  const widthInt = Math.max(1, Math.round((width / divisorBase) * scale));
  const heightInt = Math.max(1, Math.round((height / divisorBase) * scale));
  const divisor = gcd(widthInt, heightInt) || 1;
  return `${Math.round(widthInt / divisor)}:${Math.round(heightInt / divisor)}`;
}

export function parseCutoutAspectPair(widthValue, heightValue) {
  const width = positiveFinite(widthValue);
  const height = positiveFinite(heightValue);
  if (width == null || height == null) return null;
  const ratio = width / height;
  if (!Number.isFinite(ratio) || ratio <= 0) return null;
  return { width, height, ratio, label: ratioLabel(width, height) };
}

export function resolveCutoutNodeSurfaceShot(state) {
  const shots = Array.isArray(state?.shots) ? state.shots : [];
  if (!shots.length) return null;
  const selectedId = String(state?.active?.selected_shot_id || "");
  return shots.find((shot) => String(shot?.id || "") === selectedId) || shots[0] || null;
}

export function cutoutNodeSurfaceModel(state) {
  const shot = resolveCutoutNodeSurfaceShot(state);
  const rollDeg = Number(shot?.roll_deg ?? shot?.rot_deg ?? 0);
  const roundedRoll = Math.abs(rollDeg) < 0.05 ? 0 : rollDeg;
  return {
    hasShot: !!shot,
    shotId: shot?.id == null ? null : String(shot.id),
    locked: shot?.locked === true,
    aspectLabel: shot ? getCutoutAspectLabel(shot) : "",
    rollDeg,
    rollLabel: `${roundedRoll.toFixed(1)}°`,
  };
}

export function fitCutoutNodeFrame(viewport, aspect, padding = CUTOUT_NODE_FRAME_PADDING) {
  const width = Math.max(1, Number(viewport?.width ?? viewport?.w ?? 1));
  const height = Math.max(1, Number(viewport?.height ?? viewport?.h ?? 1));
  const top = Math.max(0, Number(padding?.top || 0));
  const right = Math.max(0, Number(padding?.right || 0));
  const bottom = Math.max(0, Number(padding?.bottom || 0));
  const left = Math.max(0, Number(padding?.left || 0));
  const fitInsets = (start, end, size) => {
    const total = start + end;
    const limit = Math.max(0, size - 1);
    const scale = total > limit && total > 0 ? limit / total : 1;
    return [start * scale, end * scale];
  };
  const [fittedLeft, fittedRight] = fitInsets(left, right, width);
  const [fittedTop, fittedBottom] = fitInsets(top, bottom, height);
  const safeRect = {
    x: fittedLeft,
    y: fittedTop,
    w: Math.max(1, width - fittedLeft - fittedRight),
    h: Math.max(1, height - fittedTop - fittedBottom),
  };
  const gate = aspectFitGateSize(safeRect, aspect);
  return {
    x: safeRect.x + (safeRect.w - gate.width) * 0.5,
    y: safeRect.y + (safeRect.h - gate.height) * 0.5,
    w: gate.width,
    h: gate.height,
    safeRect,
  };
}

export function buildCutoutAddFrameAction(view = {}, viewport = {}) {
  const width = Math.max(1, Number(viewport?.width ?? viewport?.w ?? 1));
  const height = Math.max(1, Number(viewport?.height ?? viewport?.h ?? 1));
  const frame = fitCutoutNodeFrame({ width, height }, 1);
  const panoramaFovDeg = clamp(Number(view?.fov || 100), 1, 179);
  const focalPx = width / (2 * Math.tan(panoramaFovDeg * DEG2RAD * 0.5));
  const frameCenter = { x: frame.x + frame.w * 0.5, y: frame.y + frame.h * 0.5 };
  const sourceShot = {
    yaw_deg: Number(view?.yaw || 0),
    pitch_deg: Number(view?.pitch || 0),
    roll_deg: 0,
  };
  const direction = cutoutFilmPointToWorldDir(sourceShot, canvasToFilmTangent(
    { x: width * 0.5, y: height * 0.5 },
    focalPx,
    frameCenter,
  ));
  const pose = directionToYawPitchRoll(direction, cameraBasis(
    sourceShot.yaw_deg,
    sourceShot.pitch_deg,
    sourceShot.roll_deg,
  ).right);
  const frameFov = fovPairForGate({ width: frame.w, height: frame.h }, focalPx);
  return {
    type: "add-frame",
    yawDeg: pose.yaw,
    pitchDeg: pose.pitch,
    rollDeg: pose.roll,
    frameFovDeg: frameFov.hFOV_deg,
  };
}

function directionToYawPitch(direction) {
  return {
    yaw: wrapYaw(Math.atan2(Number(direction?.x || 0), Number(direction?.z || 0)) * RAD2DEG),
    pitch: clamp(Math.asin(clamp(Number(direction?.y || 0), -1, 1)) * RAD2DEG, -89.9, 89.9),
  };
}

function directionToYawPitchRoll(direction, referenceRight) {
  const pose = directionToYawPitch(direction);
  const basis = cameraBasis(pose.yaw, pose.pitch, 0);
  const alongForward = dot(referenceRight, direction);
  const projectedRight = {
    x: Number(referenceRight?.x || 0) - Number(direction?.x || 0) * alongForward,
    y: Number(referenceRight?.y || 0) - Number(direction?.y || 0) * alongForward,
    z: Number(referenceRight?.z || 0) - Number(direction?.z || 0) * alongForward,
  };
  const length = Math.hypot(projectedRight.x, projectedRight.y, projectedRight.z);
  if (!(length > 1e-8)) return { ...pose, roll: 0 };
  const desiredRight = {
    x: projectedRight.x / length,
    y: projectedRight.y / length,
    z: projectedRight.z / length,
  };
  return {
    ...pose,
    roll: wrapRollDeg(Math.atan2(
      dot(desiredRight, basis.up),
      dot(desiredRight, basis.right),
    ) * RAD2DEG),
  };
}

export function buildCutoutPanoramaViewFromShot(shot, viewport = {}) {
  const width = Math.max(1, Number(viewport?.width ?? viewport?.w ?? 1));
  const height = Math.max(1, Number(viewport?.height ?? viewport?.h ?? 1));
  const frame = fitCutoutNodeFrame({ width, height }, deriveCutoutAspectFromFov(shot));
  const focalPx = fitFocalPx(frame, shot);
  const frameCenter = { x: frame.x + frame.w * 0.5, y: frame.y + frame.h * 0.5 };
  const direction = cutoutFilmPointToWorldDir(shot, canvasToFilmTangent(
    frameCenter,
    focalPx,
    { x: width * 0.5, y: height * 0.5 },
  ));
  const pose = directionToYawPitch(direction);
  return {
    yaw: pose.yaw,
    pitch: pose.pitch,
    fov: clamp(2 * Math.atan(width / (2 * focalPx)) * RAD2DEG, 1, 179),
  };
}

export function layoutCutoutNodeContext(viewport, frame, shot) {
  const width = Math.max(1, Number(viewport?.width ?? viewport?.w ?? 1));
  const height = Math.max(1, Number(viewport?.height ?? viewport?.h ?? 1));
  const centerX = Number(frame?.x || 0) + Math.max(1, Number(frame?.w ?? frame?.width ?? 1)) * 0.5;
  const centerY = Number(frame?.y || 0) + Math.max(1, Number(frame?.h ?? frame?.height ?? 1)) * 0.5;
  const focalPx = fitFocalPx(frame, shot);
  const bounds = {
    width: Math.max(centerX, width - centerX) * 2,
    height: Math.max(centerY, height - centerY) * 2,
  };
  const { halfW, halfH } = contextHalfExtentsPx(bounds, focalPx);
  const rect = {
    x: centerX - halfW,
    y: centerY - halfH,
    w: halfW * 2,
    h: halfH * 2,
  };
  const coversViewport = rect.x <= 0
    && rect.y <= 0
    && rect.x + rect.w >= width
    && rect.y + rect.h >= height;
  const viewportAspect = width / height;
  const safeTangent = Math.tan(CUTOUT_OVERSCAN_SAFE_HALF_ANGLE_DEG * DEG2RAD);
  const fallbackHalfTanX = viewportAspect >= 1 ? safeTangent : safeTangent * viewportAspect;
  const fallbackHalfTanY = viewportAspect >= 1 ? safeTangent / viewportAspect : safeTangent;
  return {
    focalPx,
    rect,
    shot: {
      ...shot,
      hFOV_deg: 2 * Math.atan(halfW / focalPx) * RAD2DEG,
      vFOV_deg: 2 * Math.atan(halfH / focalPx) * RAD2DEG,
    },
    fallback: coversViewport ? null : {
      rect: { x: 0, y: 0, w: width, h: height },
      shot: {
        ...shot,
        hFOV_deg: 2 * Math.atan(fallbackHalfTanX) * RAD2DEG,
        vFOV_deg: 2 * Math.atan(fallbackHalfTanY) * RAD2DEG,
      },
    },
  };
}

function replaceActiveShot(state, transform) {
  const shot = resolveCutoutNodeSurfaceShot(state);
  if (!shot || shot.locked === true) return { state, changed: false };
  const nextShot = transform(shot);
  if (!nextShot || nextShot === shot) return { state, changed: false };
  return {
    state: {
      ...state,
      shots: state.shots.map((entry) => entry === shot ? nextShot : entry),
    },
    changed: true,
  };
}

function fovPairForAspect(shot, ratio, safeRect) {
  const safeWidth = Number(safeRect?.w ?? safeRect?.width);
  const safeHeight = Number(safeRect?.h ?? safeRect?.height);
  if (Number.isFinite(safeWidth) && safeWidth > 0
    && Number.isFinite(safeHeight) && safeHeight > 0) {
    const focal = fitFocalPx(safeRect, shot);
    return fovPairForGate(aspectFitGateSize(safeRect, ratio), focal);
  }
  const vFOV_deg = Math.max(1, Math.min(179, Number(shot?.vFOV_deg || 60)));
  return { vFOV_deg, hFOV_deg: deriveHorizontalFovDeg(vFOV_deg, ratio) };
}

function setShotAspect(shot, width, height, { preserveOrientation = false, safeRect = null } = {}) {
  let pair = parseCutoutAspectPair(width, height);
  if (!pair) return shot;
  const currentLandscape = deriveCutoutAspectFromFov(shot) >= 1;
  if (preserveOrientation && (pair.ratio >= 1) !== currentLandscape) {
    pair = parseCutoutAspectPair(pair.height, pair.width);
  }
  const nextFov = fovPairForAspect(shot, pair.ratio, safeRect);
  if (Math.abs(Number(shot.hFOV_deg || 0) - nextFov.hFOV_deg) <= 1e-12
    && Math.abs(Number(shot.vFOV_deg || 0) - nextFov.vFOV_deg) <= 1e-12
    && String(shot.aspect_id || "") === pair.label) return shot;
  return { ...shot, ...nextFov, aspect_id: pair.label };
}

export function applyCutoutNodeSurfaceAction(state, action = {}) {
  if (!state || typeof state !== "object") return { state, changed: false };
  if (action.type === "add-frame") {
    if (resolveCutoutNodeSurfaceShot(state)) return { state, changed: false };
    const id = String(action.id || `frame_${Date.now().toString(36)}`);
    const shot = createDefaultCutoutShot({
      id,
      yawDeg: action.yawDeg,
      pitchDeg: action.pitchDeg,
      rollDeg: action.rollDeg,
      viewFovDeg: action.viewFovDeg,
      frameFovDeg: action.frameFovDeg,
    });
    return {
      state: {
        ...state,
        shots: [shot],
        active: { ...(state.active || {}), selected_shot_id: id },
      },
      changed: true,
    };
  }
  if (action.type === "delete-frame") {
    const shot = resolveCutoutNodeSurfaceShot(state);
    if (!shot) return { state, changed: false };
    const shots = (Array.isArray(state.shots) ? state.shots : []).filter((entry) => entry !== shot);
    const nextId = shots[0]?.id == null ? null : String(shots[0].id);
    return {
      state: {
        ...state,
        shots,
        active: { ...(state.active || {}), selected_shot_id: nextId },
      },
      changed: true,
    };
  }
  if (action.type === "set-aspect") {
    return replaceActiveShot(state, (shot) => setShotAspect(
      shot,
      action.width,
      action.height,
      {
        preserveOrientation: action.preserveOrientation === true,
        safeRect: action.safeRect,
      },
    ));
  }
  if (action.type === "swap-aspect") {
    return replaceActiveShot(state, (shot) => {
      const stored = String(getCutoutAspectLabel(shot) || "");
      const match = stored.match(/^([0-9.]+):([0-9.]+)$/);
      const current = match
        ? parseCutoutAspectPair(match[1], match[2])
        : parseCutoutAspectPair(deriveCutoutAspectFromFov(shot), 1);
      if (!current) return shot;
      return setShotAspect(shot, current.height, current.width, { safeRect: action.safeRect });
    });
  }
  if (action.type === "set-roll") {
    const value = Number(action.value);
    if (!Number.isFinite(value)) return { state, changed: false };
    return replaceActiveShot(state, (shot) => {
      const roll = wrapRollDeg(value);
      const current = Number(shot.roll_deg ?? shot.rot_deg ?? 0);
      if (Math.abs(current - roll) <= 1e-12) return shot;
      const next = { ...shot, roll_deg: roll };
      delete next.rot_deg;
      return next;
    });
  }
  if (action.type === "scale-fov") {
    return replaceActiveShot(state, (shot) => {
      const next = scaleCutoutFovPair(shot, action.scale);
      if (!next) return shot;
      return { ...shot, ...next };
    });
  }
  if (action.type === "step-fov") {
    return replaceActiveShot(state, (shot) => {
      const next = stepCutoutFovPairByWheel(shot, action.direction);
      if (!next) return shot;
      return { ...shot, ...next };
    });
  }
  if (action.type === "pan-camera") {
    return replaceActiveShot(state, (shot) => {
      const next = panCutoutShotByScreenDelta(action.startShot || shot, action);
      const moved = Math.abs(Number(next.yaw_deg) - Number(shot.yaw_deg || 0)) > 1e-12
        || Math.abs(Number(next.pitch_deg) - Number(shot.pitch_deg || 0)) > 1e-12;
      return moved ? { ...shot, yaw_deg: next.yaw_deg, pitch_deg: next.pitch_deg } : shot;
    });
  }
  return { state, changed: false };
}

export function beginCutoutRollGesture({
  frame,
  point,
  startRollDeg = 0,
  shiftKey = false,
  altKey = false,
  allowAlt = false,
  deadZoneRatio = 0.05,
} = {}) {
  const source = allowAlt && altKey ? "alt" : (shiftKey ? "shift" : "");
  if (!source || !frame || !point) return null;
  const frozenFrame = {
    x: Number(frame.x || 0),
    y: Number(frame.y || 0),
    w: Math.max(1, Number(frame.w ?? frame.width ?? 1)),
    h: Math.max(1, Number(frame.h ?? frame.height ?? 1)),
  };
  const center = {
    x: frozenFrame.x + frozenFrame.w * 0.5,
    y: frozenFrame.y + frozenFrame.h * 0.5,
  };
  const radius = Math.hypot(Number(point.x || 0) - center.x, Number(point.y || 0) - center.y);
  if (source === "shift" && radius < Math.min(frozenFrame.w, frozenFrame.h) * deadZoneRatio) return null;
  const startAngle = Math.atan2(Number(point.y || 0) - center.y, Number(point.x || 0) - center.x);
  return {
    source,
    frame: frozenFrame,
    center,
    startRollDeg: Number(startRollDeg || 0),
    lastAngle: startAngle,
    accumulatedRad: 0,
  };
}

export function updateCutoutRollGesture(gesture, point, modifiers = {}) {
  if (!gesture || !point) return null;
  const angle = Math.atan2(
    Number(point.y || 0) - Number(gesture.center?.y || 0),
    Number(point.x || 0) - Number(gesture.center?.x || 0),
  );
  const accumulatedRad = Number(gesture.accumulatedRad || 0)
    + shortestAngleDeltaRad(angle, Number(gesture.lastAngle || 0));
  const nextGesture = { ...gesture, lastAngle: angle, accumulatedRad };
  return {
    gesture: nextGesture,
    rollDeg: resolveFrameRollDeg(gesture.startRollDeg, accumulatedRad, {
      shiftKey: gesture.source === "alt" && modifiers.shiftKey === true,
      altKey: false,
    }),
  };
}

export function panCutoutShotByScreenDelta(shot, options = {}) {
  if (!shot || typeof shot !== "object") return shot;
  const focal = Math.max(1, Number(options.focalPx || 1));
  const invertX = options.invertX === true ? -1 : 1;
  const invertY = options.invertY === true ? -1 : 1;
  const dx = Number(options.dx || 0) * invertX;
  const dy = Number(options.dy || 0) * invertY;
  const rollRad = Number(shot.roll_deg ?? shot.rot_deg ?? 0) * DEG2RAD;
  const cosRoll = Math.cos(rollRad);
  const sinRoll = Math.sin(rollRad);
  const tanX = dx / focal;
  const tanY = -dy / focal;
  const unrolledX = tanX * cosRoll - tanY * sinRoll;
  const unrolledY = tanX * sinRoll + tanY * cosRoll;
  const pitchRad = Number(shot.pitch_deg || 0) * DEG2RAD;
  const cosPitch = Math.max(0.25, Math.abs(Math.cos(pitchRad)));
  return {
    ...shot,
    yaw_deg: wrapYaw(Number(shot.yaw_deg || 0) - (Math.atan(unrolledX) / cosPitch) * RAD2DEG),
    pitch_deg: clamp(Number(shot.pitch_deg || 0) - Math.atan(unrolledY) * RAD2DEG, -90, 90),
  };
}

export function createCutoutNodeSurfaceSession({
  readState,
  publishLiveState = () => {},
  commitState,
  onChange = () => {},
} = {}) {
  return createNodeSurfaceSession({
    readState,
    reduce: applyCutoutNodeSurfaceAction,
    projectModel: cutoutNodeSurfaceModel,
    publishLiveState,
    commitState,
    onChange,
  });
}
