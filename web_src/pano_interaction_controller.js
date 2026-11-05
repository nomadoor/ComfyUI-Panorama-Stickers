import { VIEW_HFOV_MAX_DEG, VIEW_HFOV_MIN_DEG, VIEW_PITCH_LIMIT_DEG, fovZoomStep, vFovFromHfov } from "./pano_camera_math.js";
import { clamp, wrapYaw } from "./pano_math.js";
import { PANO_FOV_WHEEL_STEP_DEG, readWheelDirection } from "./pano_wheel.js";

const PANO_DRAG_SENSITIVITY = 0.12;
const PANO_WHEEL_STEP = PANO_FOV_WHEEL_STEP_DEG;
const PANO_INITIAL_FOV = 100;
export const PANO_INERTIA_DAMPING = 5.5;
export const PANO_INERTIA_START_SPEED = 20;
export const PANO_INERTIA_STOP_SPEED = 0.8;

function deriveVerticalFovDeg(horizontalFovDeg, width, height) {
  const w = Math.max(1, Number(width || 1));
  const h = Math.max(1, Number(height || 1));
  return vFovFromHfov(clamp(Number(horizontalFovDeg || PANO_INITIAL_FOV), 1, 179), h / w);
}

export function createPanoInteractionController(options = {}) {
  const getView = typeof options.getView === "function" ? options.getView : (() => ({ yaw: 0, pitch: 0, fov: PANO_INITIAL_FOV }));
  const setView = typeof options.setView === "function" ? options.setView : (() => {});
  const getInvert = typeof options.getInvert === "function" ? options.getInvert : (() => ({ x: 1, y: 1 }));
  const getUnwrapRect = typeof options.getUnwrapRect === "function" ? options.getUnwrapRect : (() => ({ w: 1, h: 1 }));
  const getViewportSize = typeof options.getViewportSize === "function" ? options.getViewportSize : (() => ({ w: 0, h: 0 }));
  const onInteraction = typeof options.onInteraction === "function" ? options.onInteraction : (() => {});
  const onDebug = typeof options.onDebug === "function" ? options.onDebug : null;

  const state = {
    drag: { active: false, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: false, lastTs: 0 },
    velHistory: [], // { ts, yaw, pitch } — rolling window for velocity estimation
  };

  function log(tag, payload = null) {
    if (!onDebug) return;
    onDebug(tag, payload);
  }

  function startDrag(x, y, pointerId = null, ts = performance.now()) {
    state.drag.active = true;
    state.drag.lastX = Number(x || 0);
    state.drag.lastY = Number(y || 0);
    state.drag.lastTs = Number(ts || performance.now());
    state.drag.pointerId = pointerId;
    state.inertia.active = false;
    state.inertia.vx = 0;
    state.inertia.vy = 0;
    state.inertia.lastTs = state.drag.lastTs;
    state.velHistory = [];
    log("drag", { phase: "start", x: state.drag.lastX, y: state.drag.lastY, pointerId });
    return true;
  }

  function moveDrag(x, y, mode = "pano", ts = performance.now()) {
    if (!state.drag.active) return false;
    const now = Number(ts || performance.now());
    const px = Number(x);
    const py = Number(y);
    const dx = px - state.drag.lastX;
    const dy = py - state.drag.lastY;
    state.drag.lastX = px;
    state.drag.lastY = py;
    state.drag.lastTs = now;

    const inv = getInvert() || { x: 1, y: 1 };
    const invX = Number(inv.x || 1);
    const invY = Number(inv.y || 1);
    const view = { ...getView() };

    let dYaw = 0;
    let dPitch = 0;
    if (mode === "unwrap") {
      const r = getUnwrapRect() || { w: 1, h: 1 };
      const rw = Math.max(1, Number(r.w || 1));
      const rh = Math.max(1, Number(r.h || 1));
      const nx = dx / rw;
      const ny = dy / rh;
      dYaw = -nx * 360 * invX;
      dPitch = ny * 180 * invY;
    } else {
      const viewport = getViewportSize() || { w: 0, h: 0 };
      const vw = Math.max(1, Number(viewport.w || 0));
      const vh = Math.max(1, Number(viewport.h || 0));
      if (vw > 1 && vh > 1) {
        const hFov = clamp(Number(view.fov || PANO_INITIAL_FOV), 1, 179);
        const vFov = clamp(deriveVerticalFovDeg(hFov, vw, vh), 0.1, 179);
        dYaw = -(dx / vw) * hFov * invX;
        dPitch = (dy / vh) * vFov * invY;
      } else {
        dYaw = -dx * PANO_DRAG_SENSITIVITY * invX;
        dPitch = dy * PANO_DRAG_SENSITIVITY * invY;
      }
    }

    view.yaw = wrapYaw(Number(view.yaw || 0) + dYaw);
    view.pitch = clamp(Number(view.pitch || 0) + dPitch, -VIEW_PITCH_LIMIT_DEG, VIEW_PITCH_LIMIT_DEG);
    setView(view);

    // Record position for windowed velocity estimation; keep last 100ms only.
    state.velHistory.push({ ts: now, yaw: view.yaw, pitch: view.pitch });
    let lo = 0;
    while (lo < state.velHistory.length - 1 && state.velHistory[lo].ts < now - 100) lo++;
    if (lo > 0) state.velHistory.splice(0, lo);

    state.inertia.active = false;
    state.inertia.lastTs = now;
    onInteraction();
    log("drag", { phase: "move", dx, dy, dYaw, dPitch });
    return true;
  }

  function endDrag(ts = performance.now()) {
    if (!state.drag.active) return false;
    state.drag.active = false;
    const now = Number(ts || performance.now());
    state.drag.lastTs = now;

    // Compute velocity from position samples within the last 80ms.
    // If the pointer was stationary, the window will be empty → no inertia.
    const window = state.velHistory.filter((e) => now - e.ts <= 80);
    if (window.length >= 2) {
      const oldest = window[0];
      const newest = window.at(-1);
      const dtSec = Math.max(0.001, (newest.ts - oldest.ts) / 1000);
      let dyaw = newest.yaw - oldest.yaw;
      if (dyaw > 180) dyaw -= 360;
      if (dyaw < -180) dyaw += 360;
      state.inertia.vx = dyaw / dtSec;
      state.inertia.vy = (newest.pitch - oldest.pitch) / dtSec;
    } else {
      state.inertia.vx = 0;
      state.inertia.vy = 0;
    }
    state.velHistory = [];

    const speed = Math.hypot(state.inertia.vx, state.inertia.vy);
    state.inertia.active = speed > PANO_INERTIA_START_SPEED;
    state.inertia.lastTs = now;
    log("drag", { phase: "end", speed, inertiaActive: state.inertia.active });
    return true;
  }

  function stepInertia(ts = performance.now()) {
    if (!state.inertia.active) return false;
    const now = Number(ts || performance.now());
    const dt = Math.max(0.001, (now - (state.inertia.lastTs || now)) / 1000);
    state.inertia.lastTs = now;
    const view = { ...getView() };
    view.yaw = wrapYaw(Number(view.yaw || 0) + state.inertia.vx * dt);
    view.pitch = clamp(Number(view.pitch || 0) + state.inertia.vy * dt, -VIEW_PITCH_LIMIT_DEG, VIEW_PITCH_LIMIT_DEG);
    const damping = Math.exp(-PANO_INERTIA_DAMPING * dt);
    state.inertia.vx *= damping;
    state.inertia.vy *= damping;
    if (Math.abs(state.inertia.vx) < PANO_INERTIA_STOP_SPEED && Math.abs(state.inertia.vy) < PANO_INERTIA_STOP_SPEED) {
      state.inertia.vx = 0;
      state.inertia.vy = 0;
      state.inertia.active = false;
    }
    setView(view);
    onInteraction();
    return state.inertia.active;
  }

  function stopMotion() {
    const hadMotion = state.drag.active
      || state.inertia.active
      || state.inertia.vx !== 0
      || state.inertia.vy !== 0;
    state.drag.active = false;
    state.drag.pointerId = null;
    state.inertia.active = false;
    state.inertia.vx = 0;
    state.inertia.vy = 0;
    state.velHistory = [];
    return hadMotion;
  }

  function applyWheel(deltaSign) {
    const sign = Math.sign(Number(deltaSign || 0));
    if (!sign) return false;
    const view = { ...getView() };
    const before = Number(view.fov || PANO_INITIAL_FOV);
    view.fov = clamp(before + sign * PANO_WHEEL_STEP, VIEW_HFOV_MIN_DEG, VIEW_HFOV_MAX_DEG);
    setView(view);
    onInteraction();
    log("wheel", { deltaSign: sign, fovBefore: before, fovAfter: view.fov });
    return true;
  }

  // One zoom step of the new Preview's node (docs/preview-node.md "ノード上"; ADR 0061): the FOV smaller by one FOV step
  // (pano_camera_math.js fovZoomStep, within its range) rolled away (`step` > 0), larger back.
  function applyZoomStep(step) {
    const sign = Math.sign(Number(step || 0));
    if (!sign) return false;
    const view = { ...getView() };
    const before = Number(view.fov || PANO_INITIAL_FOV);
    view.fov = fovZoomStep(before, sign);
    if (view.fov === before) return false;
    setView(view);
    onInteraction();
    return true;
  }

  function applyWheelEvent(ev) {
    return applyWheel(readWheelDirection(ev));
  }

  function resetView() {
    setView({ yaw: 0, pitch: 0, fov: PANO_INITIAL_FOV });
    state.inertia.active = false;
    state.inertia.vx = 0;
    state.inertia.vy = 0;
    onInteraction();
  }

  return {
    state,
    startDrag,
    moveDrag,
    endDrag,
    stepInertia,
    stopMotion,
    applyWheel,
    applyWheelEvent,
    applyZoomStep,
    resetView,
  };
}
