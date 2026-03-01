import { clamp, wrapYaw } from "./pano_math.js";

const DEG2RAD = Math.PI / 180;

export const PANO_DRAG_SENSITIVITY = 0.12;
export const PANO_WHEEL_STEP = 3;
export const PANO_FOV_MIN = 35;
export const PANO_FOV_MAX = 140;
export const PANO_INITIAL_FOV = 100;
export const PANO_INERTIA_BLEND_OLD = 0.4;
export const PANO_INERTIA_BLEND_INST = 0.6;
export const PANO_INERTIA_DAMPING = 5.5;
export const PANO_INERTIA_START_SPEED = 20;
export const PANO_INERTIA_STOP_SPEED = 0.8;

function readWheelDelta(ev) {
  if (Number.isFinite(Number(ev?.deltaY))) return Number(ev.deltaY);
  if (Number.isFinite(Number(ev?.wheelDelta))) return -Number(ev.wheelDelta);
  if (Number.isFinite(Number(ev?.detail))) return Number(ev.detail) * 40;
  return 0;
}

export function createPanoInteractionController(options = {}) {
  const getView = typeof options.getView === "function" ? options.getView : (() => ({ yaw: 0, pitch: 0, fov: PANO_INITIAL_FOV }));
  const setView = typeof options.setView === "function" ? options.setView : (() => {});
  const getInvert = typeof options.getInvert === "function" ? options.getInvert : (() => ({ x: 1, y: 1 }));
  const getUnwrapRect = typeof options.getUnwrapRect === "function" ? options.getUnwrapRect : (() => ({ w: 1, h: 1 }));
  const onInteraction = typeof options.onInteraction === "function" ? options.onInteraction : (() => {});
  const onDebug = typeof options.onDebug === "function" ? options.onDebug : null;

  const state = {
    drag: { active: false, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: false, lastTs: 0 },
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
    log("drag", { phase: "start", x: state.drag.lastX, y: state.drag.lastY, pointerId });
    return true;
  }

  function moveDrag(x, y, mode = "pano", ts = performance.now()) {
    if (!state.drag.active) return false;
    const now = Number(ts || performance.now());
    const px = Number(x);
    const py = Number(y);
    const dt = Math.max(0.001, (now - (state.drag.lastTs || now)) / 1000);
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
      dYaw = -dx * PANO_DRAG_SENSITIVITY * invX;
      dPitch = dy * PANO_DRAG_SENSITIVITY * invY;
    }

    view.yaw = wrapYaw(Number(view.yaw || 0) + dYaw);
    view.pitch = clamp(Number(view.pitch || 0) + dPitch, -89.9, 89.9);
    setView(view);

    state.inertia.vx = state.inertia.vx * PANO_INERTIA_BLEND_OLD + (dYaw / dt) * PANO_INERTIA_BLEND_INST;
    state.inertia.vy = state.inertia.vy * PANO_INERTIA_BLEND_OLD + (dPitch / dt) * PANO_INERTIA_BLEND_INST;
    state.inertia.active = false;
    state.inertia.lastTs = now;
    onInteraction();
    log("drag", { phase: "move", dx, dy, dYaw, dPitch });
    return true;
  }

  function endDrag(ts = performance.now()) {
    if (!state.drag.active) return false;
    state.drag.active = false;
    state.drag.lastTs = Number(ts || performance.now());
    const speed = Math.hypot(state.inertia.vx || 0, state.inertia.vy || 0);
    state.inertia.active = speed > PANO_INERTIA_START_SPEED;
    state.inertia.lastTs = state.drag.lastTs;
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
    view.pitch = clamp(Number(view.pitch || 0) + state.inertia.vy * dt, -89.9, 89.9);
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

  function applyWheel(deltaSign) {
    const sign = Math.sign(Number(deltaSign || 0));
    if (!sign) return false;
    const view = { ...getView() };
    const before = Number(view.fov || PANO_INITIAL_FOV);
    view.fov = clamp(before + sign * PANO_WHEEL_STEP, PANO_FOV_MIN, PANO_FOV_MAX);
    setView(view);
    onInteraction();
    log("wheel", { deltaSign: sign, fovBefore: before, fovAfter: view.fov });
    return true;
  }

  function applyWheelEvent(ev) {
    return applyWheel(Math.sign(readWheelDelta(ev)));
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
    applyWheel,
    applyWheelEvent,
    resetView,
  };
}

export const PANO_MODAL_PARITY_CONSTANTS = {
  dragSensitivity: PANO_DRAG_SENSITIVITY,
  wheelStep: PANO_WHEEL_STEP,
  fovMin: PANO_FOV_MIN,
  fovMax: PANO_FOV_MAX,
  initialFov: PANO_INITIAL_FOV,
  inertiaBlendOld: PANO_INERTIA_BLEND_OLD,
  inertiaBlendInst: PANO_INERTIA_BLEND_INST,
  inertiaDamping: PANO_INERTIA_DAMPING,
  inertiaStartSpeed: PANO_INERTIA_START_SPEED,
  inertiaStopSpeed: PANO_INERTIA_STOP_SPEED,
  rad2deg: 1 / DEG2RAD,
};
