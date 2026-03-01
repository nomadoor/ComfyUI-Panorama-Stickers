function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

function clampSafe(v, lo, hi) {
  const n = Number(v);
  if (!Number.isFinite(n)) return Number(lo);
  return Math.max(Number(lo), Math.min(Number(hi), n));
}

function wrapYaw(y) {
  return ((y + 180) % 360 + 360) % 360 - 180;
}

function shortestYawDelta(from, to) {
  let d = wrapYaw(to) - wrapYaw(from);
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return d;
}

const INTERACTION_DEG2RAD = Math.PI / 180;
const PANO_DRAG_SENSITIVITY = 0.12;
const PANO_WHEEL_STEP = 3;
const PANO_FOV_MIN = 35;
const PANO_FOV_MAX = 140;
const PANO_INITIAL_FOV = 100;
const PANO_INERTIA_BLEND_OLD = 0.4;
const PANO_INERTIA_BLEND_INST = 0.6;
const PANO_INERTIA_DAMPING = 5.5;
const PANO_INERTIA_START_SPEED = 20;
const PANO_INERTIA_STOP_SPEED = 0.8;

function readWheelDelta(ev) {
  if (Number.isFinite(Number(ev?.deltaY))) return Number(ev.deltaY);
  if (Number.isFinite(Number(ev?.wheelDelta))) return -Number(ev.wheelDelta);
  if (Number.isFinite(Number(ev?.detail))) return Number(ev.detail) * 40;
  return 0;
}

function createPanoInteractionController(options = {}) {
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
    view.fov = clamp(Number(view.fov || PANO_INITIAL_FOV) + sign * PANO_WHEEL_STEP, PANO_FOV_MIN, PANO_FOV_MAX);
    setView(view);
    onInteraction();
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

const CUTOUT_PREVIEW_DEG2RAD = Math.PI / 180;

function cutoutFiniteOr(v, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : Number(fallback);
}

function cutoutVec3(x, y, z) {
  return { x, y, z };
}

function cutoutAdd(a, b) {
  return cutoutVec3(a.x + b.x, a.y + b.y, a.z + b.z);
}

function cutoutMul(a, s) {
  return cutoutVec3(a.x * s, a.y * s, a.z * s);
}

function cutoutNorm(a) {
  const l = Math.hypot(a.x, a.y, a.z) || 1e-8;
  return cutoutVec3(a.x / l, a.y / l, a.z / l);
}

function cutoutYawPitchToDir(yawDeg, pitchDeg) {
  const yaw = Number(yawDeg || 0) * CUTOUT_PREVIEW_DEG2RAD;
  const pitch = Number(pitchDeg || 0) * CUTOUT_PREVIEW_DEG2RAD;
  const cp = Math.cos(pitch);
  return cutoutVec3(cp * Math.sin(yaw), Math.sin(pitch), cp * Math.cos(yaw));
}

function cutoutCross(a, b) {
  return cutoutVec3(
    a.y * b.z - a.z * b.y,
    a.z * b.x - a.x * b.z,
    a.x * b.y - a.y * b.x,
  );
}

function cutoutPreviewCameraBasis(yawDeg, pitchDeg, rollDeg = 0) {
  const fwd = cutoutYawPitchToDir(yawDeg, pitchDeg);
  const worldUp = cutoutVec3(0, 1, 0);
  let right = cutoutCross(worldUp, fwd);
  if (Math.hypot(right.x, right.y, right.z) < 1e-6) right = cutoutVec3(1, 0, 0);
  right = cutoutNorm(right);
  let up = cutoutNorm(cutoutCross(fwd, right));
  const rr = Number(rollDeg || 0) * CUTOUT_PREVIEW_DEG2RAD;
  const cr = Math.cos(rr);
  const sr = Math.sin(rr);
  const r2 = cutoutAdd(cutoutMul(right, cr), cutoutMul(up, sr));
  const u2 = cutoutAdd(cutoutMul(right, -sr), cutoutMul(up, cr));
  return { fwd, right: cutoutNorm(r2), up: cutoutNorm(u2) };
}

function expandTriForPreview(d0, d1, d2, px = 0.45) {
  const cx = (d0.x + d1.x + d2.x) / 3;
  const cy = (d0.y + d1.y + d2.y) / 3;
  const grow = (p) => {
    const vx = p.x - cx;
    const vy = p.y - cy;
    const ll = Math.hypot(vx, vy) || 1;
    return { x: p.x + (vx / ll) * px, y: p.y + (vy / ll) * px };
  };
  return [grow(d0), grow(d1), grow(d2)];
}

function drawImageTriForProjection(ctx, img, s0, s1, s2, d0, d1, d2) {
  const den = (s0.x * (s1.y - s2.y) + s1.x * (s2.y - s0.y) + s2.x * (s0.y - s1.y));
  if (Math.abs(den) < 1e-6) return false;
  const [e0, e1, e2] = expandTriForPreview(d0, d1, d2, Number(ctx.__panoTriExpandPx || 0.45));
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(e0.x, e0.y);
  ctx.lineTo(e1.x, e1.y);
  ctx.lineTo(e2.x, e2.y);
  ctx.closePath();
  ctx.clip();
  const m11 = (d0.x * (s1.y - s2.y) + d1.x * (s2.y - s0.y) + d2.x * (s0.y - s1.y)) / den;
  const m12 = (d0.x * (s2.x - s1.x) + d1.x * (s0.x - s2.x) + d2.x * (s1.x - s0.x)) / den;
  const m13 = (d0.x * (s1.x * s2.y - s2.x * s1.y) + d1.x * (s2.x * s0.y - s0.x * s2.y) + d2.x * (s0.x * s1.y - s1.x * s0.y)) / den;
  const m21 = (d0.y * (s1.y - s2.y) + d1.y * (s2.y - s0.y) + d2.y * (s0.y - s1.y)) / den;
  const m22 = (d0.y * (s2.x - s1.x) + d1.y * (s0.x - s2.x) + d2.y * (s1.x - s0.x)) / den;
  const m23 = (d0.y * (s1.x * s2.y - s2.x * s1.y) + d1.y * (s2.x * s0.y - s0.x * s2.y) + d2.y * (s0.x * s1.y - s1.x * s0.y)) / den;
  ctx.transform(m11, m21, m12, m22, m13, m23);
  ctx.drawImage(img, 0, 0);
  ctx.restore();
  return true;
}

function getWrappedErpCanvasForProjection(owner, img) {
  if (!img || !img.complete || !(img.naturalWidth || img.width)) return null;
  const iw = Number(img.naturalWidth || img.width || 0);
  const ih = Number(img.naturalHeight || img.height || 0);
  if (iw <= 1 || ih <= 1) return null;
  if (!owner.__panoSharedWrappedErpCache) owner.__panoSharedWrappedErpCache = { src: "", w: 0, h: 0, canvas: null };
  const src = String(img.src || "");
  const cached = owner.__panoSharedWrappedErpCache;
  if (cached.canvas && cached.src === src && cached.w === iw && cached.h === ih) return cached.canvas;
  const cv = document.createElement("canvas");
  cv.width = iw * 2;
  cv.height = ih;
  const cctx = cv.getContext("2d");
  if (!cctx) return null;
  cctx.drawImage(img, 0, 0, iw, ih);
  cctx.drawImage(img, iw, 0, iw, ih);
  owner.__panoSharedWrappedErpCache = { src, w: iw, h: ih, canvas: cv };
  return cv;
}

function getCutoutShotParams(shot) {
  const s = shot || {};
  const yaw = cutoutFiniteOr(s.yaw_deg, 0);
  const pitch = cutoutFiniteOr(s.pitch_deg, 0);
  const roll = cutoutFiniteOr((s.roll_deg ?? s.rot_deg), 0);
  const hfov = clamp(cutoutFiniteOr(s.hFOV_deg, 90), 1, 179);
  const vfov = clamp(cutoutFiniteOr(s.vFOV_deg, 60), 1, 179);
  const aspectRaw = Math.tan((hfov * CUTOUT_PREVIEW_DEG2RAD) * 0.5) / Math.max(1e-6, Math.tan((vfov * CUTOUT_PREVIEW_DEG2RAD) * 0.5));
  const aspect = clamp(aspectRaw, 0.1, 10.0);
  return { yaw, pitch, roll, hfov, vfov, aspect };
}

function drawCutoutProjectionPreview(ctx, owner, img, rect, shot, quality = "balanced") {
  const setStats = (stats = {}) => {
    owner.__panoCutoutProjectionStats = {
      drawnTriCount: 0,
      Nu: 0,
      Nv: 0,
      rectW: cutoutFiniteOr(rect?.w, 0),
      rectH: cutoutFiniteOr(rect?.h, 0),
      imageW: cutoutFiniteOr(img?.naturalWidth || img?.width, 0),
      imageH: cutoutFiniteOr(img?.naturalHeight || img?.height, 0),
      ...stats,
    };
  };
  if (!ctx || !owner || !img || !rect || !shot) {
    if (owner) setStats({ reason: "invalid_args" });
    return false;
  }
  if (!img.complete || !(img.naturalWidth || img.width)) {
    setStats({ reason: "image_not_ready" });
    return false;
  }
  const rw = cutoutFiniteOr(rect.w, 0);
  const rh = cutoutFiniteOr(rect.h, 0);
  if (rw <= 1 || rh <= 1) {
    setStats({ reason: "invalid_rect", rectW: rw, rectH: rh });
    return false;
  }
  const iw = Number(img.naturalWidth || img.width || 0);
  const ih = Number(img.naturalHeight || img.height || 0);
  if (iw <= 1 || ih <= 1) {
    setStats({ reason: "invalid_image", imageW: iw, imageH: ih });
    return false;
  }
  const source = getWrappedErpCanvasForProjection(owner, img) || img;
  const { yaw, pitch, roll, hfov, vfov } = getCutoutShotParams(shot);
  const basis = cutoutPreviewCameraBasis(yaw, pitch, roll);
  const tanX = Math.tan((hfov * CUTOUT_PREVIEW_DEG2RAD) * 0.5);
  const tanY = Math.tan((vfov * CUTOUT_PREVIEW_DEG2RAD) * 0.5);
  const Nu = quality === "high" ? 20 : (quality === "draft" ? 10 : 14);
  const Nv = quality === "high" ? 14 : (quality === "draft" ? 7 : 10);
  let drawnTriCount = 0;
  const verts = Array.from({ length: Nv + 1 }, () => Array(Nu + 1).fill(null));
  const sample = Array.from({ length: Nv + 1 }, () => Array(Nu + 1).fill(null));
  for (let j = 0; j <= Nv; j += 1) {
    for (let i = 0; i <= Nu; i += 1) {
      const u = i / Nu;
      const v = j / Nv;
      const nx = (u * 2 - 1) * tanX;
      const ny = (1 - v * 2) * tanY;
      const d = cutoutNorm(cutoutAdd(cutoutAdd(basis.fwd, cutoutMul(basis.right, nx)), cutoutMul(basis.up, ny)));
      const lon = Math.atan2(d.x, d.z);
      const lat = Math.asin(clamp(d.y, -1, 1));
      let su = (lon / (2 * Math.PI) + 0.5) * iw;
      while (su < 0) su += iw;
      while (su >= iw) su -= iw;
      const sv = (0.5 - lat / Math.PI) * ih;
      verts[j][i] = { x: rect.x + u * rect.w, y: rect.y + v * rect.h };
      sample[j][i] = { x: su, y: sv };
    }
  }
  for (let j = 0; j < Nv; j += 1) {
    for (let i = 0; i < Nu; i += 1) {
      const p00 = verts[j][i];
      const p10 = verts[j][i + 1];
      const p01 = verts[j + 1][i];
      const p11 = verts[j + 1][i + 1];
      const s00 = { ...sample[j][i] };
      const s10 = { ...sample[j][i + 1] };
      const s01 = { ...sample[j + 1][i] };
      const s11 = { ...sample[j + 1][i + 1] };
      const umin = Math.min(s00.x, s10.x, s01.x, s11.x);
      const umax = Math.max(s00.x, s10.x, s01.x, s11.x);
      if (umax - umin > iw * 0.5) {
        [s00, s10, s01, s11].forEach((s) => {
          if (s.x < iw * 0.5) s.x += iw;
        });
      }
      if (drawImageTriForProjection(ctx, source, s00, s10, s11, p00, p10, p11)) drawnTriCount += 1;
      if (drawImageTriForProjection(ctx, source, s00, s11, s01, p00, p11, p01)) drawnTriCount += 1;
    }
  }
  setStats({ drawnTriCount, Nu, Nv, rectW: rw, rectH: rh, imageW: iw, imageH: ih, reason: "ok" });
  return drawnTriCount > 0;
}

const app = null;
const api = null;
const attachCutoutPreview = () => {};
const attachPreviewNode = () => {};
const attachStickersNodePreview = () => {};
const isPanoramaPreviewNodeName = () => false;

const STATE_WIDGET = "state_json";
const ENABLE_STICKERS_NODE_PREVIEW = false;
const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;
const ICON = {
  // Source: @geist-ui/icons globe.js (v1.0.2)
  globe: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' shape-rendering='geometricPrecision'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'/></svg>",
  pano: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M1.5 8.2c1.9-2.2 4.1-3.3 6.5-3.3s4.6 1.1 6.5 3.3'/><path d='M2.6 10.9c1.5-1.5 3.3-2.3 5.4-2.3s3.9.8 5.4 2.3'/><circle cx='8' cy='12.2' r='1' fill='currentColor' stroke='none'/></svg>",
  unwrap: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='1.75' y='3' width='12.5' height='10' rx='2'/><path d='M5.9 3v10M10.1 3v10'/></svg>",
  undo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M5.5 4.3 2.8 7l2.7 2.7'/><path d='M3.1 7h5.3a3.7 3.7 0 1 1 0 7.4'/></svg>",
  redo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m10.5 4.3 2.7 2.7-2.7 2.7'/><path d='M12.9 7H7.6a3.7 3.7 0 1 0 0 7.4'/></svg>",
  add: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M8 3.1v9.8M3.1 8h9.8'/></svg>",
  clear: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  duplicate: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.3' y='5.3' width='7.7' height='7.7' rx='1.4'/><rect x='3' y='3' width='7.7' height='7.7' rx='1.4'/></svg>",
  bring_front: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 12V4'/><path d='m4.4 5.6 1.6-1.6 1.6 1.6'/><path d='M9.5 11h3.1M9.5 8h2.2M9.5 5h1.2'/></svg>",
  send_back: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 4v8'/><path d='m4.4 10.4 1.6 1.6 1.6-1.6'/><path d='M9.5 11h1.2M9.5 8h2.2M9.5 5h3.1'/></svg>",
  aspect: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.866 14.7041C13.9131 14.5727 12.9574 14.4687 12 14.3923V12.8876C12.8347 12.9523 13.6683 13.0373 14.4999 13.1426L14.5 9.00003H16L15.9999 14L15.9999 14.8605L15.1475 14.7429L14.866 14.7041ZM16 7.00003L16 2.49996L16 1.6394L15.1475 1.75699L14.866 1.79581C13.9131 1.92725 12.9574 2.03119 12 2.10765V3.61228C12.8347 3.54757 13.6683 3.46256 14.5 3.35727L14.5 7.00003H16ZM9.99998 2.22729V3.72844C8.66715 3.77999 7.33282 3.77999 5.99998 3.72844V2.22729C7.33279 2.28037 8.66718 2.28037 9.99998 2.22729ZM9.99998 14.2726V12.7715C8.66715 12.7199 7.33282 12.7199 5.99998 12.7715V14.2726C7.33279 14.2195 8.66718 14.2195 9.99998 14.2726ZM3.99998 14.3923C3.04258 14.4687 2.08683 14.5727 1.13391 14.7041L0.85242 14.7429L-0.0000610352 14.8605L-0.0000578761 14L-0.0000396322 9.00003H1.49996L1.49995 13.1426C2.33162 13.0373 3.16521 12.9523 3.99998 12.8876V14.3923ZM1.49997 7.00003L1.49998 3.35727C2.33164 3.46256 3.16522 3.54757 3.99998 3.61228V2.10765C3.0426 2.03119 2.08686 1.92725 1.13395 1.79581L0.852462 1.75699L-0.0000127554 1.6394L-0.0000159144 2.49995L-0.0000323345 7.00003H1.49997Z' fill='currentColor'/></svg>",
  rotate_90: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.21967 4.71967L5.68934 5.25L6.75 6.31066L7.28033 5.78033L9.25 3.81066V13.5C9.25 13.6381 9.13807 13.75 9 13.75H2.75H2V15.25H2.75H9C9.9665 15.25 10.75 14.4665 10.75 13.5V3.81066L12.7197 5.78033L13.25 6.31066L14.3107 5.25L13.7803 4.71967L10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L6.21967 4.71967Z' fill='currentColor'/></svg>",
  delete: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  reset: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M8 3.2a4.8 4.8 0 1 1-4.8 4.8'/><path d='M3.2 3.2v3.6h3.6'/></svg>",
  eye: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  eye_dashed: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.51404 3.15793C7.48217 2.87411 8.51776 2.87411 9.48589 3.15793L9.90787 1.71851C8.66422 1.35392 7.33571 1.35392 6.09206 1.71851L6.51404 3.15793ZM10.848 3.78166C11.2578 4.04682 11.6393 4.37568 11.9783 4.76932L13.046 6.00934L14.1827 5.03056L13.1149 3.79054C12.6818 3.28761 12.1918 2.86449 11.6628 2.52224L10.848 3.78166ZM4.02168 4.76932C4.36065 4.37568 4.74209 4.04682 5.15195 3.78166L4.33717 2.52225C3.80815 2.86449 3.3181 3.28761 2.88503 3.79054L1.81723 5.03056L2.95389 6.00934L4.02168 4.76932ZM14.1138 7.24936L14.7602 7.99999L14.1138 8.75062L15.2505 9.72941L16.3183 8.48938V7.5106L15.2505 6.27058L14.1138 7.24936ZM1.88609 7.24936L1.23971 7.99999L1.88609 8.75062L0.749437 9.72941L-0.318359 8.48938V7.5106L0.749436 6.27058L1.88609 7.24936ZM13.0461 9.99064L11.9783 11.2307C11.6393 11.6243 11.2578 11.9532 10.848 12.2183L11.6628 13.4777C12.1918 13.1355 12.6818 12.7124 13.1149 12.2094L14.1827 10.9694L13.0461 9.99064ZM4.02168 11.2307L2.95389 9.99064L1.81723 10.9694L2.88503 12.2094C3.3181 12.7124 3.80815 13.1355 4.33717 13.4777L5.15195 12.2183C4.7421 11.9532 4.36065 11.6243 4.02168 11.2307ZM9.90787 14.2815L9.48589 12.8421C8.51776 13.1259 7.48217 13.1259 6.51405 12.8421L6.09206 14.2815C7.33572 14.6461 8.66422 14.6461 9.90787 14.2815ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  fullscreen: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z' fill='currentColor'/></svg>",
  camera: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M1.5 3.5H3.5L5 1H11L12.5 3.5H14.5H16V5V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V5V3.5H1.5ZM4.78624 4.27174L5.84929 2.5H10.1507L11.2138 4.27174L11.6507 5H12.5H14.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V5H3.5H4.34929L4.78624 4.27174ZM9.75 8.5C9.75 9.4665 8.9665 10.25 8 10.25C7.0335 10.25 6.25 9.4665 6.25 8.5C6.25 7.5335 7.0335 6.75 8 6.75C8.9665 6.75 9.75 7.5335 9.75 8.5ZM11.25 8.5C11.25 10.2949 9.79493 11.75 8 11.75C6.20507 11.75 4.75 10.2949 4.75 8.5C4.75 6.70507 6.20507 5.25 8 5.25C9.79493 5.25 11.25 6.70507 11.25 8.5Z' fill='currentColor'/></svg>",
  fullscreen_close: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6 1V1.75V5C6 5.55229 5.55228 6 5 6H1.75H1V4.5H1.75H4.5V1.75V1H6ZM14.25 6H15V4.5H14.25H11.5V1.75V1H10V1.75V5C10 5.55228 10.4477 6 11 6H14.25ZM10 14.25V15H11.5V14.25V11.5H14.29H15.04V10H14.29H11C10.4477 10 10 10.4477 10 11V14.25ZM1.75 10H1V11.5H1.75H4.5V14.25V15H6V14.25V11C6 10.4477 5.55229 10 5 10H1.75Z' fill='currentColor'/></svg>",
  close: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3.7 3.7 12.3 12.3M12.3 3.7 3.7 12.3'/></svg>",
  copy: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.2' y='5.2' width='7.8' height='7.8' rx='1.4'/><rect x='3' y='3' width='7.8' height='7.8' rx='1.4'/></svg>",
  chevron: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m4.5 6.5 3.5 3.5 3.5-3.5'/></svg>",
};

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}
function easeInCubic(t) {
  return t * t * t;
}
function vec3(x, y, z) { return { x, y, z }; }
function add(a, b) { return vec3(a.x + b.x, a.y + b.y, a.z + b.z); }
function mul(a, s) { return vec3(a.x * s, a.y * s, a.z * s); }
function dot(a, b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
function cross(a, b) {
  return vec3(
    a.y * b.z - a.z * b.y,
    a.z * b.x - a.x * b.z,
    a.x * b.y - a.y * b.x,
  );
}
function norm(a) {
  const l = Math.hypot(a.x, a.y, a.z) || 1e-8;
  return vec3(a.x / l, a.y / l, a.z / l);
}
function yawPitchToDir(yawDeg, pitchDeg) {
  const yaw = yawDeg * DEG2RAD;
  const pitch = pitchDeg * DEG2RAD;
  const cp = Math.cos(pitch);
  return vec3(cp * Math.sin(yaw), Math.sin(pitch), cp * Math.cos(yaw));
}
function dirToYawPitch(d) {
  return {
    yaw: wrapYaw(Math.atan2(d.x, d.z) * RAD2DEG),
    pitch: clamp(Math.asin(clamp(d.y, -1, 1)) * RAD2DEG, -90, 90),
  };
}
function pointInPoly(pt, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i].x; const yi = poly[i].y;
    const xj = poly[j].x; const yj = poly[j].y;
    const intersect = ((yi > pt.y) !== (yj > pt.y))
      && (pt.x < ((xj - xi) * (pt.y - yi)) / ((yj - yi) || 1e-6) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}
function dist2(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function formatParamValue(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return "0";
  return Number(n.toFixed(3)).toString();
}
function toPositiveFinite(v, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : Number(fallback);
}
function ratioTextFromPair(w, h) {
  const ww = toPositiveFinite(w, 1);
  const hh = toPositiveFinite(h, 1);
  if (ww <= 0 || hh <= 0) return "1:1";
  const scale = 1000;
  const wi = Math.max(1, Math.round(ww * scale));
  const hi = Math.max(1, Math.round(hh * scale));
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const g = gcd(wi, hi) || 1;
  const rw = Math.max(1, Math.round(wi / g));
  const rh = Math.max(1, Math.round(hi / g));
  return `${rw}:${rh}`;
}
function getCutoutAspectLabel(item) {
  if (!item || typeof item !== "object") return "1:1";
  const stored = String(item.aspect_id || "").trim();
  if (stored) return stored;
  const ow = toPositiveFinite(item.out_w, 0);
  const oh = toPositiveFinite(item.out_h, 0);
  if (ow > 0 && oh > 0) return ratioTextFromPair(ow, oh);
  const hf = clamp(Number(item.hFOV_deg || 90), 1, 179) * DEG2RAD;
  const vf = clamp(Number(item.vFOV_deg || 60), 1, 179) * DEG2RAD;
  const rw = Math.max(1e-6, Math.tan(hf * 0.5));
  const rh = Math.max(1e-6, Math.tan(vf * 0.5));
  return ratioTextFromPair(rw, rh);
}
function expandTri(d0, d1, d2, px = 1.1) {
  const cx = (d0.x + d1.x + d2.x) / 3;
  const cy = (d0.y + d1.y + d2.y) / 3;
  const grow = (p) => {
    const vx = p.x - cx;
    const vy = p.y - cy;
    const ll = Math.hypot(vx, vy) || 1;
    return { x: p.x + (vx / ll) * px, y: p.y + (vy / ll) * px };
  };
  return [grow(d0), grow(d1), grow(d2)];
}

function installCss() {
  if (document.getElementById("pano-demo-style-link")) return;
  const link = document.createElement("link");
  link.id = "pano-demo-style-link";
  link.rel = "stylesheet";
  const hinted = String(window.__PANO_DEMO_CSS_URL__ || "").trim();
  link.href = hinted || new URL("./pano_editor_demo.css", import.meta.url).toString();
  document.head.appendChild(link);
}

const SHARED_UI_SETTINGS_KEY = "pano_suite.ui_settings.v1";
const NODE_GRID_VISIBILITY_KEY = "pano_suite.node_grid_visibility.v1";
let sharedUiSettingsMemory = null;
let nodeGridVisibilityMemory = null;
let parseStateJsonCache = { text: null, parsed: null };

function normalizeUiSettings(raw) {
  const src = (raw && typeof raw === "object") ? raw : {};
  const q = String(src.preview_quality || "balanced");
  return {
    invert_view_x: !!src.invert_view_x,
    invert_view_y: !!src.invert_view_y,
    preview_quality: (q === "draft" || q === "balanced" || q === "high") ? q : "balanced",
  };
}

function loadSharedUiSettings() {
  try {
    const text = String(window?.localStorage?.getItem(SHARED_UI_SETTINGS_KEY) || "").trim();
    if (!text) return sharedUiSettingsMemory ? normalizeUiSettings(sharedUiSettingsMemory) : null;
    const parsed = JSON.parse(text);
    const normalized = normalizeUiSettings(parsed);
    sharedUiSettingsMemory = normalized;
    return normalized;
  } catch {
    return sharedUiSettingsMemory ? normalizeUiSettings(sharedUiSettingsMemory) : null;
  }
}

function saveSharedUiSettings(settings) {
  const normalized = normalizeUiSettings(settings);
  sharedUiSettingsMemory = normalized;
  try {
    window?.localStorage?.setItem(SHARED_UI_SETTINGS_KEY, JSON.stringify(normalized));
  } catch {
    // localStorage unavailable; memory fallback is used.
  }
  return normalized;
}

function loadNodeGridVisibilityMap() {
  if (nodeGridVisibilityMemory && typeof nodeGridVisibilityMemory === "object") {
    return nodeGridVisibilityMemory;
  }
  try {
    const text = String(window?.localStorage?.getItem(NODE_GRID_VISIBILITY_KEY) || "").trim();
    if (!text) {
      nodeGridVisibilityMemory = {};
      return nodeGridVisibilityMemory;
    }
    const parsed = JSON.parse(text);
    nodeGridVisibilityMemory = parsed && typeof parsed === "object" ? parsed : {};
    return nodeGridVisibilityMemory;
  } catch {
    nodeGridVisibilityMemory = {};
    return nodeGridVisibilityMemory;
  }
}

function getNodeGridVisibility(nodeId, fallback = true) {
  const key = String(nodeId ?? "").trim();
  if (!key) return !!fallback;
  const map = loadNodeGridVisibilityMap();
  const v = map[key];
  return typeof v === "boolean" ? v : !!fallback;
}

function setNodeGridVisibility(nodeId, visible) {
  const key = String(nodeId ?? "").trim();
  if (!key) return;
  const map = loadNodeGridVisibilityMap();
  map[key] = !!visible;
  nodeGridVisibilityMemory = map;
  try {
    window?.localStorage?.setItem(NODE_GRID_VISIBILITY_KEY, JSON.stringify(map));
  } catch {
    // localStorage unavailable; memory fallback is used.
  }
}

function cloneAssetMap(raw) {
  if (!raw || typeof raw !== "object") return {};
  const out = {};
  Object.entries(raw).forEach(([k, v]) => {
    out[k] = (v && typeof v === "object") ? { ...v } : v;
  });
  return out;
}

function cloneStickerList(raw) {
  if (!Array.isArray(raw)) return [];
  return raw.map((item) => {
    if (!item || typeof item !== "object") return item;
    const next = { ...item };
    if (next.crop && typeof next.crop === "object") next.crop = { ...next.crop };
    return next;
  });
}

function cloneShotList(raw) {
  if (!Array.isArray(raw)) return [];
  return raw.map((item) => ((item && typeof item === "object") ? { ...item } : item));
}

function parseState(text, preset = 2048, bg = "#00ff00") {
  const sharedUi = loadSharedUiSettings();
  const base = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    bg_color: bg,
    output_preset: preset,
    assets: {},
    stickers: [],
    shots: [],
    ui_settings: {
      invert_view_x: !!sharedUi?.invert_view_x,
      invert_view_y: !!sharedUi?.invert_view_y,
      preview_quality: String(sharedUi?.preview_quality || "balanced"),
    },
    active: { selected_sticker_id: null, selected_shot_id: null },
  };
  const textTrimmed = String(text || "").trim();
  if (!textTrimmed) return base;
  try {
    let p = null;
    if (parseStateJsonCache.text === textTrimmed) {
      p = parseStateJsonCache.parsed;
    } else {
      p = JSON.parse(textTrimmed);
      parseStateJsonCache = { text: textTrimmed, parsed: p };
    }
    if (!p || typeof p !== "object") return base;
    const merged = {
      ...base,
      ...p,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: cloneAssetMap(p.assets),
      stickers: cloneStickerList(p.stickers),
      shots: cloneShotList(p.shots),
      ui_settings: {
        invert_view_x: !!(p.ui_settings && p.ui_settings.invert_view_x),
        invert_view_y: !!(p.ui_settings && p.ui_settings.invert_view_y),
        preview_quality: (() => {
          const q = String(p.ui_settings?.preview_quality || "balanced");
          return (q === "draft" || q === "balanced" || q === "high") ? q : "balanced";
        })(),
      },
      active: p.active && typeof p.active === "object" ? { ...p.active } : { ...base.active },
    };
    if (sharedUi) {
      merged.ui_settings = normalizeUiSettings({ ...merged.ui_settings, ...sharedUi });
    }
    return merged;
  } catch {
    parseStateJsonCache = { text: textTrimmed, parsed: null };
    return base;
  }
}

function cameraBasis(yawDeg, pitchDeg, rollDeg = 0) {
  const fwd = yawPitchToDir(yawDeg, pitchDeg);
  const worldUp = vec3(0, 1, 0);
  let right = cross(worldUp, fwd);
  if (Math.hypot(right.x, right.y, right.z) < 1e-6) right = vec3(1, 0, 0);
  right = norm(right);
  let up = norm(cross(fwd, right));
  const rr = rollDeg * DEG2RAD;
  const cr = Math.cos(rr);
  const sr = Math.sin(rr);
  const r2 = add(mul(right, cr), mul(up, sr));
  const u2 = add(mul(right, -sr), mul(up, cr));
  return { fwd, right: norm(r2), up: norm(u2) };
}

function stickerCornerDirs(item) {
  const hf = clamp(Number(item.hFOV_deg || 30), 1, 179) * DEG2RAD;
  const vf = clamp(Number(item.vFOV_deg || 30), 1, 179) * DEG2RAD;
  const tx = Math.tan(hf * 0.5);
  const ty = Math.tan(vf * 0.5);
  const { fwd, right, up } = cameraBasis(
    Number(item.yaw_deg || 0),
    Number(item.pitch_deg || 0),
    Number(item.rot_deg || item.roll_deg || 0),
  );
  const mk = (x, y) => norm(add(add(fwd, mul(right, x * tx)), mul(up, y * ty)));
  return [
    mk(-1, 1),
    mk(1, 1),
    mk(1, -1),
    mk(-1, -1),
  ];
}

function getNodePreviewImage(node, assetId, asset) {
  if (!node.__panoPreviewImageCache) node.__panoPreviewImageCache = new Map();
  const key = String(assetId || "");
  if (!key) return null;
  const src = stickerAssetToPreviewSrc(asset);
  if (!src) return null;
  const cached = node.__panoPreviewImageCache.get(key);
  if (cached && cached.src === src) return cached.img;
  const img = new Image();
  img.src = src;
  img.onload = () => {
    node.setDirtyCanvas?.(true, true);
  };
  node.__panoPreviewImageCache.set(key, { src, img });
  return img;
}

function drawImageTriPreview(ctx, img, s0, s1, s2, d0, d1, d2) {
  const den = (s0.x * (s1.y - s2.y) + s1.x * (s2.y - s0.y) + s2.x * (s0.y - s1.y));
  if (Math.abs(den) < 1e-6) return;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(d0.x, d0.y);
  ctx.lineTo(d1.x, d1.y);
  ctx.lineTo(d2.x, d2.y);
  ctx.closePath();
  ctx.clip();
  const m11 = (d0.x * (s1.y - s2.y) + d1.x * (s2.y - s0.y) + d2.x * (s0.y - s1.y)) / den;
  const m12 = (d0.x * (s2.x - s1.x) + d1.x * (s0.x - s2.x) + d2.x * (s1.x - s0.x)) / den;
  const m13 = (d0.x * (s1.x * s2.y - s2.x * s1.y) + d1.x * (s2.x * s0.y - s0.x * s2.y) + d2.x * (s0.x * s1.y - s1.x * s0.y)) / den;
  const m21 = (d0.y * (s1.y - s2.y) + d1.y * (s2.y - s0.y) + d2.y * (s0.y - s1.y)) / den;
  const m22 = (d0.y * (s2.x - s1.x) + d1.y * (s0.x - s2.x) + d2.y * (s1.x - s0.x)) / den;
  const m23 = (d0.y * (s1.x * s2.y - s2.x * s1.y) + d1.y * (s2.x * s0.y - s0.x * s2.y) + d2.y * (s0.x * s1.y - s1.x * s0.y)) / den;
  ctx.transform(m11, m21, m12, m22, m13, m23);
  ctx.drawImage(img, 0, 0);
  ctx.restore();
}

function projectDirToPreview(dir, viewBasis, rect, tanHalfY) {
  const cx = dot(dir, viewBasis.right);
  const cy = dot(dir, viewBasis.up);
  const cz = dot(dir, viewBasis.fwd);
  if (cz <= 1e-4) return null;
  const sy = (cy / cz) / tanHalfY;
  const sx = (cx / cz) / tanHalfY;
  return {
    x: rect.x + rect.w * 0.5 + sx * rect.h * 0.5,
    y: rect.y + rect.h * 0.5 - sy * rect.h * 0.5,
  };
}

function drawLatLonGrid(ctx, rect, viewBasis, tanHalfY) {
  const drawLine = (pts, color, width = 1) => {
    let open = false;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    for (const p of pts) {
      if (!p) {
        open = false;
        continue;
      }
      if (!open) {
        ctx.moveTo(p.x, p.y);
        open = true;
      } else {
        ctx.lineTo(p.x, p.y);
      }
    }
    ctx.stroke();
  };
  const lonVals = [];
  for (let lon = -180; lon <= 180; lon += 15) lonVals.push(lon);
  const latVals = [];
  for (let lat = -75; lat <= 75; lat += 15) latVals.push(lat);
  lonVals.forEach((lonDeg) => {
    const pts = [];
    for (let latDeg = -85; latDeg <= 85; latDeg += 4) {
      const lat = latDeg * DEG2RAD;
      const lon = lonDeg * DEG2RAD;
      const d = vec3(Math.cos(lat) * Math.sin(lon), Math.sin(lat), Math.cos(lat) * Math.cos(lon));
      pts.push(projectDirToPreview(d, viewBasis, rect, tanHalfY));
    }
    drawLine(pts, "rgba(61, 61, 66, 0.88)", lonDeg % 90 === 0 ? 1.3 : 1);
  });
  latVals.forEach((latDeg) => {
    const pts = [];
    for (let lonDeg = -180; lonDeg <= 180; lonDeg += 4) {
      const lat = latDeg * DEG2RAD;
      const lon = lonDeg * DEG2RAD;
      const d = vec3(Math.cos(lat) * Math.sin(lon), Math.sin(lat), Math.cos(lat) * Math.cos(lon));
      pts.push(projectDirToPreview(d, viewBasis, rect, tanHalfY));
    }
    drawLine(pts, latDeg === 0 ? "rgba(250, 250, 250, 0.86)" : "rgba(61, 61, 66, 0.88)", latDeg === 0 ? 1.5 : 1);
  });
}

function drawStickerPreviewPano(ctx, node, rect, viewBasis, tanHalfY, state, item) {
  const hf = clamp(Number(item.hFOV_deg || 30), 1, 179) * DEG2RAD;
  const vf = clamp(Number(item.vFOV_deg || 30), 1, 179) * DEG2RAD;
  const tx = Math.tan(hf * 0.5);
  const ty = Math.tan(vf * 0.5);
  const crop = item.crop || {};
  const c0x = clamp(Number(crop.x0 ?? 0), 0, 1);
  const c0y = clamp(Number(crop.y0 ?? 0), 0, 1);
  const c1x = clamp(Number(crop.x1 ?? 1), 0, 1);
  const c1y = clamp(Number(crop.y1 ?? 1), 0, 1);
  const cw = Math.max(1e-4, c1x - c0x);
  const ch = Math.max(1e-4, c1y - c0y);
  const basis = cameraBasis(
    Number(item.yaw_deg || 0),
    Number(item.pitch_deg || 0),
    Number(item.rot_deg || item.roll_deg || 0),
  );
  const Nu = 12;
  const Nv = 9;
  const verts = Array.from({ length: Nv + 1 }, () => Array(Nu + 1).fill(null));
  const sample = Array.from({ length: Nv + 1 }, () => Array(Nu + 1).fill(null));
  for (let j = 0; j <= Nv; j += 1) {
    for (let i = 0; i <= Nu; i += 1) {
      const u = i / Nu;
      const v = j / Nv;
      const uu = c0x + u * cw;
      const vv = c0y + v * ch;
      const x = (uu * 2 - 1) * tx;
      const y = (1 - vv * 2) * ty;
      const d = norm(add(add(basis.fwd, mul(basis.right, x)), mul(basis.up, y)));
      verts[j][i] = projectDirToPreview(d, viewBasis, rect, tanHalfY);
      sample[j][i] = { x: u, y: v };
    }
  }

  const asset = state.assets?.[item.asset_id];
  const img = getNodePreviewImage(node, item.asset_id, asset);
  const iw = Math.max(1, Number(img?.naturalWidth || img?.width || 1));
  const ih = Math.max(1, Number(img?.naturalHeight || img?.height || 1));
  for (let j = 0; j < Nv; j += 1) {
    for (let i = 0; i < Nu; i += 1) {
      const p00 = verts[j][i];
      const p10 = verts[j][i + 1];
      const p01 = verts[j + 1][i];
      const p11 = verts[j + 1][i + 1];
      if (!p00 || !p10 || !p01 || !p11) continue;
      if (img && img.complete && (img.naturalWidth || 0) > 0) {
        const s00 = { x: sample[j][i].x * iw, y: sample[j][i].y * ih };
        const s10 = { x: sample[j][i + 1].x * iw, y: sample[j][i + 1].y * ih };
        const s01 = { x: sample[j + 1][i].x * iw, y: sample[j + 1][i].y * ih };
        const s11 = { x: sample[j + 1][i + 1].x * iw, y: sample[j + 1][i + 1].y * ih };
        drawImageTriPreview(ctx, img, s00, s10, s11, p00, p10, p11);
        drawImageTriPreview(ctx, img, s00, s11, s01, p00, p11, p01);
      } else {
        ctx.fillStyle = "rgba(0, 112, 243, 0.20)";
        ctx.beginPath();
        ctx.moveTo(p00.x, p00.y);
        ctx.lineTo(p10.x, p10.y);
        ctx.lineTo(p11.x, p11.y);
        ctx.lineTo(p01.x, p01.y);
        ctx.closePath();
        ctx.fill();
      }
    }
  }
  const corners = stickerCornerDirs(item).map((d) => projectDirToPreview(d, viewBasis, rect, tanHalfY));
  if (corners.every((p) => !!p)) {
    ctx.strokeStyle = "rgba(250, 250, 250, 0.85)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(corners[0].x, corners[0].y);
    ctx.lineTo(corners[1].x, corners[1].y);
    ctx.lineTo(corners[2].x, corners[2].y);
    ctx.lineTo(corners[3].x, corners[3].y);
    ctx.closePath();
    ctx.stroke();
  }
}

function drawPanoramaNodePreview(node, ctx) {
  const stateWidget = getWidget(node, STATE_WIDGET);
  const raw = String(stateWidget?.value || "");
  const bg = String(getWidget(node, "bg_color")?.value || "#00ff00");
  const state = parseState(raw, 2048, bg);

  const rect = getNodePreviewRect(node);
  if (!rect) return;
  if (!node.__panoPreviewView) {
    const selectedId = state.active?.selected_sticker_id || null;
    const selected = (state.stickers || []).find((s) => s.id === selectedId) || null;
    node.__panoPreviewView = {
      yaw: Number(selected?.yaw_deg || 0),
      pitch: Number(selected?.pitch_deg || 0),
      fov: 100,
    };
  }
  applyNodePreviewInertia(node);
  const viewYaw = Number(node.__panoPreviewView.yaw || 0);
  const viewPitch = Number(node.__panoPreviewView.pitch || 0);
  const viewBasis = cameraBasis(viewYaw, viewPitch, 0);
  const tanHalfY = Math.tan((Number(node.__panoPreviewView.fov || 100) * DEG2RAD) * 0.5);

  ctx.save();
  ctx.fillStyle = "#0a0a0a";
  ctx.strokeStyle = "#3f3f46";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(rect.x, rect.y, rect.w, rect.h, 8);
  ctx.fill();
  ctx.stroke();
  ctx.clip();

  ctx.fillStyle = "#070707";
  ctx.fillRect(rect.x + 1, rect.y + 1, rect.w - 2, rect.h - 2);
  drawLatLonGrid(ctx, rect, viewBasis, tanHalfY);

  const stickers = [...(state.stickers || [])].sort((a, b) => Number(a.z_index || 0) - Number(b.z_index || 0));
  stickers.forEach((item) => drawStickerPreviewPano(ctx, node, rect, viewBasis, tanHalfY, state, item));
  const labels = [
    { name: "Left", dir: yawPitchToDir(-90, 0) },
    { name: "Front", dir: yawPitchToDir(0, 0) },
    { name: "Right", dir: yawPitchToDir(90, 0) },
    { name: "Back", dir: yawPitchToDir(180, 0) },
  ];
  ctx.fillStyle = "rgba(250, 250, 250, 0.48)";
  ctx.font = "500 10px Geist, sans-serif";
  ctx.textAlign = "center";
  labels.forEach((l) => {
    const p = projectDirToPreview(l.dir, viewBasis, rect, tanHalfY);
    if (p) ctx.fillText(l.name, p.x, p.y + 20);
  });

  const fov = Number(node.__panoPreviewView?.fov || 100);
  ctx.textAlign = "left";
  ctx.font = "11px Geist, sans-serif";
  ctx.fillStyle = "rgba(250, 250, 250, 0.88)";
  ctx.fillText(`FOV ${fov.toFixed(1)}`, rect.x + 8, rect.y + rect.h - 10);

  const rb = getNodePreviewResetButtonRect(rect);
  ctx.fillStyle = "rgba(17, 17, 17, 0.92)";
  ctx.strokeStyle = "rgba(82, 82, 91, 0.95)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(rb.x, rb.y, rb.w, rb.h, 7);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "rgba(250, 250, 250, 0.92)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "10px Geist, sans-serif";
  ctx.fillText("Reset", rb.x + rb.w * 0.5, rb.y + rb.h * 0.5 + 0.5);
  ctx.textBaseline = "alphabetic";
  ctx.restore();

}

function applyNodePreviewInertia(node, ts = performance.now()) {
  const m = node.__panoPreviewInertia;
  if (!m || !m.active || !node.__panoPreviewView) return;
  const dt = m.lastTs > 0 ? Math.max(0.001, (ts - m.lastTs) / 1000) : (1 / 60);
  m.lastTs = ts;
  node.__panoPreviewView.yaw = wrapYaw(Number(node.__panoPreviewView.yaw || 0) + m.vx * dt);
  node.__panoPreviewView.pitch = clamp(Number(node.__panoPreviewView.pitch || 0) + m.vy * dt, -89.9, 89.9);
  const damping = Math.exp(-5.5 * dt);
  m.vx *= damping;
  m.vy *= damping;
  if (Math.abs(m.vx) < 0.8 && Math.abs(m.vy) < 0.8) {
    m.vx = 0;
    m.vy = 0;
    m.active = false;
  } else {
    node.setDirtyCanvas?.(true, false);
  }
}

function getNodePreviewRect(node) {
  const pad = 8;
  const widgetsBottom = getNodeWidgetsBottom(node);
  const btn = getNodeEditorButtonRect(node);
  const top = btn ? (btn.y + btn.h + 2) : (widgetsBottom + 2);
  const x = pad;
  const w = Math.max(120, Number(node.size?.[0] || 0) - pad * 2);
  const h = Math.max(84, Number(node.size?.[1] || 0) - top - pad);
  if (h < 40 || w < 80) return null;
  return { x, y: top, w, h };
}

function getNodeWidgetsBottom(node) {
  const widgetTop = 32;
  const widgets = Array.isArray(node.widgets) ? node.widgets : [];
  let y = widgetTop;
  widgets.forEach((w) => {
    if (!w || w.hidden || w.type === "hidden") return;
    let h = 22;
    try {
      const size = typeof w.computeSize === "function" ? w.computeSize(node.size?.[0] || 0) : null;
      if (Array.isArray(size) && Number.isFinite(Number(size[1]))) h = Number(size[1]);
    } catch {
      h = 22;
    }
    y += h;
  });
  return y;
}

function getNodeEditorButtonRect(node) {
  if (!node?.__panoCustomEditorButton) return null;
  const pad = 8;
  const y = getNodeWidgetsBottom(node) + 2;
  const w = Math.max(120, Number(node.size?.[0] || 0) - pad * 2);
  return { x: pad, y, w, h: 30 };
}

function getNodeAutoHeightWithEditorButton(node) {
  const button = getNodeEditorButtonRect(node);
  if (!button) return Math.ceil(getNodeWidgetsBottom(node) + 40);
  const bottomPad = 8;
  return Math.ceil(button.y + button.h + bottomPad);
}

function drawNodeEditorButton(node, ctx) {
  const r = getNodeEditorButtonRect(node);
  if (!r) return;
  const hover = !!node.__panoEditorBtnHover;
  ctx.save();
  ctx.fillStyle = hover ? "rgba(44, 44, 47, 0.96)" : "rgba(32, 32, 35, 0.96)";
  ctx.strokeStyle = "rgba(98, 98, 105, 0.9)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(r.x, r.y, r.w, r.h, 7);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "rgba(244, 244, 246, 0.95)";
  ctx.font = "500 12px Plus Jakarta Sans, Geist, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(String(node.__panoEditorButtonText || "Open Editor"), r.x + r.w * 0.5, r.y + r.h * 0.5 + 0.5);
  ctx.restore();
}

function pointInRect(x, y, r) {
  return !!r && x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h;
}

function getNodePreviewResetButtonRect(rect) {
  const w = 50;
  const h = 20;
  const m = 8;
  return {
    x: rect.x + rect.w - w - m,
    y: rect.y + rect.h - h - m,
    w,
    h,
  };
}

function getWidget(node, name) { return node.widgets?.find((w) => w.name === name) || null; }
function panoEditorDebug(tag, payload = null) {
  const enabled = window?.__PANO_PREVIEW_DEBUG__ === true
    || String(window?.localStorage?.getItem("panoPreviewDebug") || "").trim() === "1";
  if (!enabled) return;
  try {
    if (payload == null) console.log(`[PANO_EDITOR][${tag}]`);
    else console.log(`[PANO_EDITOR][${tag}]`, payload);
  } catch { }
}
function escapeHtml(text) {
  return String(text ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}
function getEditorNodeTitle(node, type) {
  const rawType = String(node?.comfyClass || node?.type || node?.title || "").trim();
  const titleMap = {
    PanoramaStickers: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview",
  };
  if (titleMap[rawType]) return titleMap[rawType];
  if (rawType) return rawType;
  if (type === "cutout") return "Panorama Cutout";
  return "Panorama Stickers";
}
function hideWidget(node, widgetName) {
  const widgets = Array.isArray(node?.widgets) ? node.widgets : [];
  widgets.forEach((w) => {
    const n = String(w?.name || "");
    if (!(n === widgetName || n.trim() === widgetName || n.toLowerCase().includes(String(widgetName).toLowerCase()))) return;
    if (w.__panoHidden) return;
    w.__panoHidden = true;
    w.computeSize = () => [0, 0];
    w.type = "hidden";
    w.hidden = true;
    w.options = { ...(w.options || {}), hidden: true };
    if (w.inputEl?.style) w.inputEl.style.display = "none";
    if (w.parentEl?.style) w.parentEl.style.display = "none";
  });
}

function ensureActionButtonWidget(node, buttonText, callback) {
  if (!node || typeof node.addWidget !== "function") return null;
  const widgets = Array.isArray(node.widgets) ? node.widgets : [];
  let widget = widgets.find((w) => String(w?.name || "") === String(buttonText));
  if (widget) {
    widget.callback = callback;
    widget.hidden = false;
    widget.__panoHidden = false;
    widget.type = "button";
    if (widget.inputEl?.style) widget.inputEl.style.display = "";
    if (widget.parentEl?.style) widget.parentEl.style.display = "";
    if (typeof widget.computeSize !== "function" || widget.computeSize() == null || widget.hidden) {
      widget.computeSize = () => [Math.max(120, Number(node?.size?.[0] || 0) - 20), 30];
    }
    return widget;
  }
  widget = node.addWidget("button", buttonText, null, callback);
  if (widget) {
    widget.serialize = false;
  }
  return widget;
}
function uid(prefix) { return `${prefix}_${Math.random().toString(16).slice(2, 10)}`; }

function parseOutputPresetValue(v, fallback = 2048) {
  if (typeof v === "number" && Number.isFinite(v)) return Math.round(v);
  const s = String(v ?? "").trim();
  if (!s) return fallback;
  const head = s.includes("x") ? s.split("x", 1)[0].trim() : s;
  const n = Number(head);
  return Number.isFinite(n) ? Math.round(n) : fallback;
}

function getGraphLinkById(graph, linkId) {
  if (!graph || linkId == null) return null;
  const links = graph.links;
  if (!links) return null;
  if (links instanceof Map) return links.get(linkId) || links.get(Number(linkId)) || links.get(String(linkId)) || null;
  return links[linkId] || links[String(linkId)] || null;
}

function getGraphNodeById(graph, id) {
  if (!graph || id == null) return null;
  if (typeof graph.getNodeById === "function") return graph.getNodeById(id);
  return graph._nodes_by_id?.[id] || graph._nodes_by_id?.[String(id)] || null;
}

function resolveOriginFromLinkInfo(linkInfo) {
  if (!linkInfo) return { originId: null, originSlot: 0 };
  if (typeof linkInfo === "object" && !Array.isArray(linkInfo)) {
    return {
      originId: linkInfo.origin_id ?? null,
      originSlot: Number(linkInfo.origin_slot ?? 0),
    };
  }
  if (Array.isArray(linkInfo)) {
    return {
      originId: linkInfo[1] ?? null,
      originSlot: Number(linkInfo[2] ?? 0),
    };
  }
  return { originId: null, originSlot: 0 };
}

function resolveInputOriginNode(node, inputIndex, fallbackOriginId = null) {
  let originNode = null;
  try {
    originNode = typeof node?.getInputNode === "function" ? node.getInputNode(inputIndex) : null;
  } catch {
    originNode = null;
  }
  if (originNode?.isSubgraphNode?.()) {
    try {
      const inputLink = typeof node?.getInputLink === "function" ? node.getInputLink(inputIndex) : null;
      const resolved = inputLink ? originNode.resolveSubgraphOutputLink?.(Number(inputLink.origin_slot ?? 0)) : null;
      if (resolved?.outputNode) originNode = resolved.outputNode;
    } catch {
      // ignore
    }
  }
  if (!originNode && fallbackOriginId != null) {
    originNode = getGraphNodeById(node?.graph, fallbackOriginId);
  }
  return originNode;
}

function comfyImageEntryToUrl(entry) {
  if (!entry || typeof entry !== "object") return "";
  const filename = String(entry.filename || "");
  if (!filename) return "";
  const params = new URLSearchParams();
  params.set("filename", filename);
  params.set("type", String(entry.type || "output"));
  if (entry.subfolder) params.set("subfolder", String(entry.subfolder));
  const q = `/view?${params.toString()}`;
  return typeof api?.apiURL === "function" ? api.apiURL(q) : q;
}

function isDirectImageUrl(src) {
  const s = String(src || "").trim();
  if (!s) return false;
  return (
    /^https?:\/\//i.test(s)
    || s.startsWith("/")
    || s.startsWith("blob:")
    || s.startsWith("data:")
  );
}

function splitFilenameAndSubfolder(pathish) {
  const normalized = String(pathish || "").trim().replaceAll("\\", "/");
  const trimmed = normalized.replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!trimmed) return { filename: "", subfolder: "" };
  const parts = trimmed.split("/").filter(Boolean);
  if (!parts.length) return { filename: "", subfolder: "" };
  const filename = String(parts.pop() || "").trim();
  const subfolder = parts.join("/");
  return { filename, subfolder };
}

function uniqStrings(values) {
  const out = [];
  const seen = new Set();
  values.forEach((v) => {
    const s = String(v || "").trim();
    if (!s || seen.has(s)) return;
    seen.add(s);
    out.push(s);
  });
  return out;
}

function buildImageSrcCandidates(srcRaw) {
  const src = String(srcRaw || "").trim();
  if (!src) return [];
  if (isDirectImageUrl(src)) return [src];
  const { filename, subfolder } = splitFilenameAndSubfolder(src);
  if (!filename) return [src];
  const byView = ["temp", "output", "input"].map((type) => comfyImageEntryToUrl({
    filename,
    subfolder,
    type,
  }));
  return uniqStrings([...byView, src]);
}

function stickerAssetToPreviewSrc(asset) {
  if (!asset || typeof asset !== "object") return "";
  const adapterSrc = currentEditorAdapters?.loadAssetPreviewSrc?.(asset);
  if (typeof adapterSrc === "string" && adapterSrc.trim()) return adapterSrc.trim();
  const type = String(asset.type || "").trim().toLowerCase();
  if (type === "dataurl") return String(asset.value || "");
  if (type === "external_url") return String(asset.value || "");
  if (type === "comfy_image") {
    const filename = String(asset.filename || "").trim();
    if (!filename) return "";
    return comfyImageEntryToUrl({
      filename,
      subfolder: String(asset.subfolder || ""),
      type: String(asset.storage || "input"),
    });
  }
  return "";
}

function lookupNodeOutputEntry(nodeId) {
  const store = app?.nodeOutputs;
  if (!store || nodeId == null) return null;
  // Performance fix: Use strictly direct lookup.
  // Iterating all outputs every frame causes massive lag when many nodes are present.
  const raw = String(nodeId);
  if (store instanceof Map) {
    return store.get(nodeId) || store.get(raw) || store.get(Number(raw)) || null;
  }
  return store[nodeId] || store[raw] || null;
}

function imageSourceFromCandidate(candidate) {
  if (!candidate) return "";
  if (typeof candidate === "string") return String(candidate || "").trim();
  if (Array.isArray(candidate)) {
    if (candidate.length === 0) return "";
    if (candidate.length === 1) return imageSourceFromCandidate(candidate[0]);
    const filename = String(candidate[0] || "").trim();
    if (filename) {
      const subfolder = String(candidate[1] || "").trim();
      const type = String(candidate[2] || "output").trim() || "output";
      return comfyImageEntryToUrl({ filename, subfolder, type });
    }
    for (const entry of candidate) {
      const src = imageSourceFromCandidate(entry);
      if (src) return src;
    }
    return "";
  }
  if (typeof candidate?.src === "string" && candidate.src) return candidate.src;
  if (typeof candidate?.url === "string" && candidate.url) return candidate.url;
  return comfyImageEntryToUrl(candidate);
}

function findLinkedInputImageSource(node, preferredInputNames = []) {
  const inputs = Array.isArray(node?.inputs) ? node.inputs : [];
  if (!inputs.length) return { src: "", sourceType: "", inputName: "" };
  const preferred = preferredInputNames
    .map((name) => inputs.findIndex((i) => String(i?.name || "") === String(name)))
    .filter((idx) => idx >= 0);
  const imageTyped = inputs
    .map((input, idx) => ({ input, idx }))
    .filter(({ input }) => String(input?.type || "").toUpperCase() === "IMAGE")
    .map(({ idx }) => idx);
  const indices = [...new Set([...preferred, ...imageTyped])];
  panoEditorDebug("image-resolve.start", {
    nodeId: node?.id ?? null,
    preferredInputNames,
    resolvedIndices: indices,
  });

  for (const idx of indices) {
    const input = inputs[idx];
    const linkId = input?.link;
    if (linkId == null) continue;
    const linkInfo = getGraphLinkById(node.graph, linkId);
    const { originId, originSlot } = resolveOriginFromLinkInfo(linkInfo);
    if (originId == null) continue;
    const originNode = resolveInputOriginNode(node, idx, originId);
    const resolvedOriginSlot = Number(originSlot || 0);
    if (!originNode) continue;
    panoEditorDebug("image-resolve.link", {
      input: String(input?.name || ""),
      linkId,
      originId,
      originSlot: resolvedOriginSlot,
      originType: String(originNode?.comfyClass || originNode?.type || originNode?.title || ""),
    });

    let appNodeImageUrls = [];
    try {
      appNodeImageUrls = typeof app?.getNodeImageUrls === "function" ? (app.getNodeImageUrls(originNode) || []) : [];
    } catch {
      appNodeImageUrls = [];
    }
    if (Array.isArray(appNodeImageUrls) && appNodeImageUrls.length) {
      const ordered = [];
      if (resolvedOriginSlot >= 0 && resolvedOriginSlot < appNodeImageUrls.length) ordered.push(appNodeImageUrls[resolvedOriginSlot]);
      ordered.push(...appNodeImageUrls);
      for (const cand of ordered) {
        const src = imageSourceFromCandidate(cand);
        if (src) {
          panoEditorDebug("image-resolve.hit", { sourceType: "appNodeImageUrls", src, input: String(input?.name || "") });
          return { src, sourceType: "appNodeImageUrls", inputName: String(input?.name || "") };
        }
      }
    }

    const outputs = lookupNodeOutputEntry(originNode?.id ?? originId);
    const outImgs = Array.isArray(outputs?.images) ? outputs.images : [];
    if (outImgs.length) {
      const ordered = [];
      if (resolvedOriginSlot >= 0 && resolvedOriginSlot < outImgs.length) ordered.push(outImgs[resolvedOriginSlot]);
      ordered.push(...outImgs);
      for (const cand of ordered) {
        const src = imageSourceFromCandidate(cand);
        if (src) {
          panoEditorDebug("image-resolve.hit", { sourceType: "nodeOutputs", src, input: String(input?.name || "") });
          return { src, sourceType: "nodeOutputs", inputName: String(input?.name || "") };
        }
      }
    }

    const nodeImgs = Array.isArray(originNode?.imgs) ? originNode.imgs : [];
    if (nodeImgs.length) {
      const ordered = [];
      if (resolvedOriginSlot >= 0 && resolvedOriginSlot < nodeImgs.length) ordered.push(nodeImgs[resolvedOriginSlot]);
      ordered.push(...nodeImgs);
      for (const cand of ordered) {
        const src = imageSourceFromCandidate(cand);
        if (src) {
          panoEditorDebug("image-resolve.hit", { sourceType: "nodeImgs", src, input: String(input?.name || "") });
          return { src, sourceType: "nodeImgs", inputName: String(input?.name || "") };
        }
      }
    }

    const imageWidget = originNode?.widgets?.find((w) => String(w?.name || "").toLowerCase() === "image");
    if (imageWidget) {
      let src = imageSourceFromCandidate(imageWidget.value);
      if (src && !src.includes("/") && !src.includes(":") && (originNode.comfyClass === "LoadImage" || originNode.type === "LoadImage")) {
        src = api.apiURL(`/view?filename=${encodeURIComponent(src)}&type=input&subfolder=`);
      }
      if (src) {
        panoEditorDebug("image-resolve.hit", { sourceType: "widget", src, input: String(input?.name || "") });
        return { src, sourceType: "widget", inputName: String(input?.name || "") };
      }
    }
  }

  // Fallback: Check if the current node has explicitly saved input images (e.g. from upstream non-file nodes)
  // We do this check regardless of linked inputs if preferred inputs are exhausted, to support
  // scenarios where the link exists but provides no image data (e.g. some custom nodes).
  const selfOutput = lookupNodeOutputEntry(node?.id);
  const fallbackCandidates = [];
  if (Array.isArray(selfOutput?.pano_input_images)) fallbackCandidates.push(...selfOutput.pano_input_images);
  if (Array.isArray(selfOutput?.ui?.pano_input_images)) fallbackCandidates.push(...selfOutput.ui.pano_input_images);

  if (fallbackCandidates.length > 0) {
    for (const item of fallbackCandidates) {
      const src = imageSourceFromCandidate(item);
      if (src) {
        panoEditorDebug("image-resolve.hit", { sourceType: "selfOutput", src, input: "fallback" });
        return { src, sourceType: "selfOutput", inputName: "fallback" };
      }
    }
  }

  panoEditorDebug("image-resolve.miss", { nodeId: node?.id ?? null, preferredInputNames });
  return { src: "", sourceType: "", inputName: "" };
}

function getLinkedInputImage(node, preferredInputNames = [], onLoad = null) {
  const resolved = findLinkedInputImageSource(node, preferredInputNames);
  const srcRaw = String(resolved?.src || "").trim();
  if (!srcRaw) return null;
  const candidates = buildImageSrcCandidates(srcRaw);
  if (!candidates.length) return null;
  if (!node.__panoLinkedInputImageCache) node.__panoLinkedInputImageCache = new Map();
  const key = preferredInputNames.join("|") || "image";
  const cached = node.__panoLinkedInputImageCache.get(key);
  if (cached && cached.srcRaw === srcRaw && cached.img) return cached.img;

  const img = new Image();
  const cacheEntry = { srcRaw, resolvedSrc: "", img };
  node.__panoLinkedInputImageCache.set(key, cacheEntry);
  let attempt = -1;
  const tryLoadNext = () => {
    attempt += 1;
    if (attempt >= candidates.length) {
      try { node.__panoLinkedInputImageCache?.delete?.(key); } catch { }
      panoEditorDebug("image.load.error", {
        nodeId: node?.id ?? null,
        src: srcRaw,
        preferredInputNames,
        sourceType: String(resolved?.sourceType || ""),
        attemptCount: candidates.length,
        errorType: "all_candidates_failed",
      });
      return;
    }
    const nextSrc = candidates[attempt];
    cacheEntry.resolvedSrc = nextSrc;
    img.src = nextSrc;
  };

  img.onload = () => {
    panoEditorDebug("image.load.ok", {
      nodeId: node?.id ?? null,
      src: srcRaw,
      resolvedSrc: String(cacheEntry.resolvedSrc || img.src || ""),
      preferredInputNames,
      sourceType: String(resolved?.sourceType || ""),
      attemptCount: attempt + 1,
    });
    onLoad?.();
    node.setDirtyCanvas?.(true, true);
  };
  img.onerror = (ev) => {
    if (attempt + 1 < candidates.length) {
      tryLoadNext();
      return;
    }
    try { node.__panoLinkedInputImageCache?.delete?.(key); } catch { }
    panoEditorDebug("image.load.error", {
      nodeId: node?.id ?? null,
      src: srcRaw,
      resolvedSrc: String(cacheEntry.resolvedSrc || ""),
      preferredInputNames,
      sourceType: String(resolved?.sourceType || ""),
      attemptCount: attempt + 1,
      errorType: String(ev?.type || "error"),
    });
  };
  tryLoadNext();
  return img;
}

let currentEditorAdapters = null;

function createNodeBackedEditor(node, type, options = {}) {
  currentEditorAdapters = options?.adapters || null;
  const readOnly = options?.readOnly === true;
  const hideSidebar = options?.hideSidebar ?? readOnly;
  const hideFooter = options?.hideFooter === true;
  const previewMode = readOnly;
  const embedded = options?.embedded === true;
  const mountTarget = options?.mount instanceof HTMLElement ? options.mount : null;
  const destroyOnClose = options?.destroyOnClose === true;
  const nodeTitle = getEditorNodeTitle(node, type);
  const sideTitleHtml = `<span class="pano-side-title-icon" aria-hidden="true">${ICON.globe}</span><span>${escapeHtml(nodeTitle)}</span>`;
  installCss();
  const presetWidget = getWidget(node, "output_preset");
  const bgWidget = getWidget(node, "bg_color");
  const stateWidget = getWidget(node, STATE_WIDGET);

  const state = parseState(
    String(stateWidget?.value || ""),
    parseOutputPresetValue(presetWidget?.value, 2048),
    String(bgWidget?.value || "#00ff00"),
  );
  node.__panoLiveStateOverride = JSON.stringify(state);
  node.__panoDomPreview?.requestDraw?.();
  node.setDirtyCanvas?.(true, true);
  node.graph?.setDirtyCanvas?.(true, true);
  app?.canvas?.setDirty?.(true, true);
  panoEditorDebug("modal.open", {
    nodeId: node?.id ?? null,
    type,
    readOnly,
    hideSidebar,
    inputs: Array.isArray(node?.inputs) ? node.inputs.map((i) => String(i?.name || "")) : [],
  });

  if (type === "cutout") {
    state.shots = Array.isArray(state.shots) ? state.shots.slice(0, 1) : [];
    if (!state.shots.length) {
      state.active.selected_shot_id = null;
    }
  }
  const bottomToolbarHtml = previewMode ? "" : `
      <div class="pano-floating-bottom">
        <button class="pano-btn pano-btn-icon" data-action="undo" aria-label="Undo" data-tip="Undo">${ICON.undo}</button>
        <button class="pano-btn pano-btn-icon" data-action="redo" aria-label="Redo" data-tip="Redo">${ICON.redo}</button>
        <button class="pano-btn pano-btn-texticon" data-action="add" aria-label="${type === "stickers" ? "Add Image" : "Add Frame"}" data-tip="${type === "stickers" ? "Add image" : "Add frame"}">${ICON.add}<span class="label">${type === "stickers" ? "Add Image" : "Add Frame"}</span></button>
        ${type === "cutout" ? `<button class="pano-btn pano-btn-icon" data-action="look-at-frame" aria-label="Look at Frame" data-tip="Look at frame">${ICON.camera}</button>` : ""}
        <button class="pano-btn pano-btn-icon" data-action="clear" aria-label="Clear All" data-tip="Clear all">${ICON.clear}</button>
      </div>
  `;
  const fullscreenBtnHtml = previewMode
    ? `<button class="pano-btn pano-btn-icon" data-action="toggle-fullscreen" aria-label="Fullscreen" data-tip="Fullscreen">${ICON.fullscreen}</button>`
    : "";
  const rootMarkup = `
    <div class="pano-stage-wrap">
      <canvas class="pano-stage" width="1600" height="800"></canvas>
      <div class="pano-stage-drop-hint" aria-hidden="true">
        <div class="pano-stage-drop-hint-text">Drag and drop image here</div>
      </div>
      <div class="pano-floating-top">
        <div class="pano-view-toggle" data-selected="pano">
          <button class="pano-view-btn" data-view="pano" aria-pressed="true" aria-label="Panorama">${ICON.pano}<span class="label">Panorama</span></button>
          <button class="pano-view-btn" data-view="unwrap" aria-pressed="false" aria-label="Unwrap">${ICON.unwrap}<span class="label">Unwrap</span></button>
        </div>
      </div>
      ${bottomToolbarHtml}
      <div class="pano-floating-right">
        <span>FOV</span>
        <span class="pano-fov-value" data-fov-value>100.0</span>
        <button class="pano-btn pano-btn-icon" data-action="reset-view" aria-label="Reset View" data-tip="Reset view">${ICON.reset}</button>
        <button class="pano-btn pano-btn-icon" data-action="toggle-grid" aria-label="Hide Grid" data-tip="Hide grid" aria-pressed="true">${ICON.eye}</button>
        ${fullscreenBtnHtml}
      </div>
      <div class="pano-selection-menu" data-selection-menu>
      </div>
      <button class="pano-btn pano-btn-icon pano-output-preview-toggle" data-action="toggle-output-preview-size" aria-label="Expand Preview" data-tip="Expand preview" style="display:none">${ICON.fullscreen}</button>
      <div class="pano-tooltip" data-tooltip></div>
    </div>
    <div class="pano-side" data-side>
      <div class="pano-side-head">
        <div class="pano-side-title">${sideTitleHtml}</div>
        <div class="pano-side-actions"></div>
      </div>
      <div class="pano-divider"></div>
    </div>
  `;
  let overlay = null;
  let root = null;
  if (embedded) {
    if (mountTarget) {
      root = document.createElement("div");
      root.className = "pano-modal";
      root.style.width = "100%";
      root.style.height = String(options?.embeddedHeight || "44vh");
      root.style.minHeight = String(options?.embeddedMinHeight || "420px");
      root.style.maxHeight = "none";
      root.style.maxWidth = "none";
      root.style.boxShadow = "none";
      root.innerHTML = rootMarkup;
      mountTarget.replaceChildren(root);
    } else {
      root = document.createElement("div");
      root.className = "pano-modal";
      root.style.width = "100%";
      root.style.height = String(options?.embeddedHeight || "44vh");
      root.style.minHeight = String(options?.embeddedMinHeight || "420px");
      root.style.maxHeight = "none";
      root.style.maxWidth = "none";
      root.style.boxShadow = "none";
      root.innerHTML = rootMarkup;
      document.body.appendChild(root);
    }
  } else {
    overlay = document.createElement("div");
    overlay.className = "pano-modal-overlay";
    root = document.createElement("div");
    root.className = "pano-modal";
    root.innerHTML = rootMarkup;
    (mountTarget || document.body).appendChild(overlay);
    overlay.appendChild(root);
  }

  const canvas = root.querySelector("canvas");
  const stageWrap = root.querySelector(".pano-stage-wrap");
  const ctx = canvas.getContext("2d");
  const side = root.querySelector("[data-side]");
  const viewBtns = root.querySelectorAll("[data-view]");
  const viewToggle = root.querySelector(".pano-view-toggle");
  const fovValueEl = root.querySelector("[data-fov-value]");
  const selectionMenu = root.querySelector("[data-selection-menu]");
  const outputPreviewToggleBtn = root.querySelector("[data-action='toggle-output-preview-size']");
  const lookAtFrameBtn = root.querySelector("[data-action='look-at-frame']");
  const fullscreenBtn = root.querySelector("[data-action='toggle-fullscreen']");
  const tooltipEl = root.querySelector("[data-tooltip]");
  if (hideSidebar) {
    side?.remove();
    root.classList.add("pano-modal-readonly");
  }
  root.addEventListener("pointerdown", (ev) => {
    hideTooltip();
    if (ev.target.closest(".pano-picker")) return;
    root.querySelectorAll(".pano-picker-pop").forEach((el) => {
      el.hidden = true;
    });
    if (type === "cutout" && editor.cutoutAspectOpen && !ev.target.closest(".pano-aspect-popover") && !ev.target.closest("[data-action='aspect']")) {
      editor.cutoutAspectOpen = false;
      editor.menuMode = "";
      editor.menuSize.measured = false;
      updateSelectionMenu();
      requestDraw();
    }
  });

  const editor = {
    mode: "pano",
    selectedId: type === "stickers" ? state.active.selected_sticker_id : state.active.selected_shot_id,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    history: [],
    historyIndex: -1,
    interaction: null,
    hqFrames: 0,
    viewInertia: { vx: 0, vy: 0, active: false },
    menuSize: { w: 220, h: 40, measured: false },
    menuMode: "",
    cutoutAspectOpen: false,
    showGrid: getNodeGridVisibility(node?.id, true),
    outputPreviewExpanded: false,
    outputPreviewAnim: 0,
    outputPreviewAnimFrom: 0,
    outputPreviewAnimTo: 0,
    outputPreviewAnimStartTs: 0,
    outputPreviewAnimDurationMs: 180,
    outputPreviewRect: null,
    panelLastValues: null,
    panelWasEnabled: false,
    viewTween: null,
    fullscreen: false,
    fullscreenPrevShowGrid: null,
  };
  if (type === "stickers") {
    editor.selectedId = null;
    state.active.selected_sticker_id = null;
  }
  const imageCache = new Map();
  const runtime = {
    dirty: true,
    rafId: 0,
    running: true,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
  };
  const tooltip = {
    timer: 0,
    target: null,
  };
  const dragCue = {
    active: false,
    depth: 0,
  };

  function dragHasImageFiles(e) {
    const dt = e?.dataTransfer;
    if (!dt) return false;
    if (dt.items && dt.items.length) {
      for (const item of dt.items) {
        if (!item || item.kind !== "file") continue;
        const t = String(item.type || "").toLowerCase();
        if (!t || t.startsWith("image/")) return true;
      }
      return false;
    }
    if (dt.files && dt.files.length) {
      return Array.from(dt.files).some((f) => isImageFile(f));
    }
    return false;
  }

  function setDropCue(on) {
    const next = !!on;
    if (dragCue.active === next) return;
    dragCue.active = next;
    stageWrap.classList.toggle("drop-active", next);
  }

  function startViewTween(targetYaw, targetPitch, targetFov = editor.viewFov, minMs = 140, maxMs = 620) {
    const dyaw = shortestYawDelta(editor.viewYaw, targetYaw);
    const dpitch = targetPitch - editor.viewPitch;
    const dfov = targetFov - editor.viewFov;
    const dist = Math.hypot(dyaw, dpitch) + Math.abs(dfov) * 0.6;
    const durationMs = Math.round(clamp(minMs + dist * 2.2, minMs, maxMs));
    editor.viewTween = {
      active: true,
      startTs: performance.now(),
      durationMs,
      startYaw: editor.viewYaw,
      startPitch: editor.viewPitch,
      startFov: editor.viewFov,
      targetPitch,
      targetFov,
      deltaYaw: dyaw,
    };
    editor.viewInertia.active = false;
    editor.viewInertia.vx = 0;
    editor.viewInertia.vy = 0;
    requestDraw();
  }

  // Coordinate sanity: front-facing sticker should have top edge above bottom edge.
  const __sanity = stickerCornerOrderSanity();
  if (!__sanity) {
    console.warn("[PanoramaSuite] corner order sanity check failed.");
  }

  function getList() { return type === "stickers" ? state.stickers : state.shots; }
  function getSelected() { return getList().find((s) => s.id === editor.selectedId) || null; }
  function applyInitialCutoutFocus() {
    if (type !== "cutout") return;
    const shots = getList();
    if (!Array.isArray(shots) || shots.length === 0) return;
    const preferredId = String(state.active?.selected_shot_id || editor.selectedId || "");
    const target = shots.find((s) => String(s?.id || "") === preferredId) || shots[0];
    if (!target) return;
    editor.selectedId = target.id || null;
    state.active.selected_shot_id = editor.selectedId;
    editor.viewYaw = wrapYaw(Number(target.yaw_deg || 0));
    editor.viewPitch = clamp(Number(target.pitch_deg || 0), -89.9, 89.9);
  }
  function syncLookAtFrameButtonState() {
    if (!lookAtFrameBtn) return;
    const enabled = type === "cutout" && getList().length > 0;
    lookAtFrameBtn.disabled = !enabled;
    lookAtFrameBtn.setAttribute("aria-disabled", enabled ? "false" : "true");
  }

  function stickerCornerOrderSanity() {
    const test = {
      yaw_deg: 0, pitch_deg: 0, hFOV_deg: 20, vFOV_deg: 20, rot_deg: 0,
    };
    const dirs = stickerCornersDir(test);
    if (!dirs || dirs.length !== 4) return false;
    // top-left y should be >= bottom-left y in world-up axis
    return dirs[0].y >= dirs[3].y;
  }

  function cameraBasis() {
    const fwd = yawPitchToDir(editor.viewYaw, editor.viewPitch);
    let upWorld = vec3(0, 1, 0);
    if (Math.abs(dot(fwd, upWorld)) > 0.999) upWorld = vec3(0, 0, 1);
    const right = norm(cross(upWorld, fwd));
    const up = norm(cross(fwd, right));
    return { right, up, fwd };
  }

  function projectDir(dir) {
    const { right, up, fwd } = cameraBasis();
    const cx = dot(dir, right);
    const cy = dot(dir, up);
    const cz = dot(dir, fwd);
    if (cz <= 1e-5) return null;
    const w = canvas.width;
    const h = canvas.height;
    const hfov = editor.viewFov * DEG2RAD;
    const vfov = 2 * Math.atan(Math.tan(hfov / 2) * (h / w));
    const sx = (w / 2) / Math.tan(hfov / 2);
    const sy = (h / 2) / Math.tan(vfov / 2);
    return {
      x: w / 2 + (cx / cz) * sx,
      y: h / 2 - (cy / cz) * sy,
      z: cz,
    };
  }

  function screenToWorldDir(x, y) {
    const { right, up, fwd } = cameraBasis();
    const w = canvas.width;
    const h = canvas.height;
    const hfov = editor.viewFov * DEG2RAD;
    const vfov = 2 * Math.atan(Math.tan(hfov / 2) * (h / w));
    const nx = ((x - w / 2) / (w / 2)) * Math.tan(hfov / 2);
    const ny = ((h / 2 - y) / (h / 2)) * Math.tan(vfov / 2);
    const world = add(add(mul(right, nx), mul(up, ny)), fwd);
    return norm(world);
  }

  function getUnwrapRect() {
    const w = canvas.width;
    const h = canvas.height;
    const targetAR = 2.0; // ERP 2:1
    const canvasAR = w / Math.max(h, 1);
    if (canvasAR >= targetAR) {
      const rh = h;
      const rw = rh * targetAR;
      const rx = (w - rw) * 0.5;
      return { x: rx, y: 0, w: rw, h: rh };
    }
    const rw = w;
    const rh = rw / targetAR;
    const ry = (h - rh) * 0.5;
    return { x: 0, y: ry, w: rw, h: rh };
  }

  function getStickerImage(assetId) {
    if (!assetId) return null;
    const cached = imageCache.get(assetId);
    if (cached) return cached;
    const asset = state.assets?.[assetId];
    const src = stickerAssetToPreviewSrc(asset);
    if (!src) return null;
    const img = new Image();
    img.onload = () => requestDraw();
    img.src = src;
    imageCache.set(assetId, img);
    return img;
  }

  async function uploadStickerAssetFile(file, fallbackName = "sticker.png") {
    const customSave = options?.adapters?.saveAssetFile;
    if (typeof customSave === "function") {
      const customAsset = await customSave(file, { type, node, fallbackName });
      if (customAsset && typeof customAsset === "object") {
        return customAsset;
      }
    }
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(new Error("file read failed"));
      reader.readAsDataURL(file);
    });
    return {
      type: "dataurl",
      value: dataUrl,
      name: String(file?.name || fallbackName),
    };
  }

  async function uploadStickerAssetFileViaComfy(file, fallbackName = "sticker.png") {
    const body = new FormData();
    body.append("image", file);
    body.append("type", "input");
    body.append("subfolder", "panorama_stickers");
    const resp = await api.fetchApi("/upload/image", { method: "POST", body });
    if (!resp || resp.status !== 200) {
      throw new Error(`upload failed (${resp?.status || "no-response"})`);
    }
    const data = await resp.json();
    const filename = String(data?.name || "").trim();
    if (!filename) {
      throw new Error("upload response missing filename");
    }
    return {
      type: "comfy_image",
      filename,
      subfolder: String(data?.subfolder || "panorama_stickers"),
      storage: String(data?.type || "input"),
      name: String(file?.name || fallbackName),
    };
  }

  function getConnectedErpImage() {
    if (typeof options?.erpImageResolver === "function") {
      const resolved = options.erpImageResolver();
      if (resolved instanceof HTMLImageElement) {
        if (!resolved.complete) {
          resolved.onload = () => requestDraw();
        }
        return resolved;
      }
      const src = String(resolved || "").trim();
      if (src) {
        const img = new Image();
        img.onload = () => requestDraw();
        img.src = src;
        return img;
      }
    }
    const inputNames = Array.isArray(node?.inputs)
      ? node.inputs.map((i) => String(i?.name || ""))
      : [];
    const hasEpr = inputNames.includes("erp_image");
    const hasBg = inputNames.includes("bg_erp");
    let preferred = [];
    if (readOnly && (hasEpr || hasBg)) {
      preferred = hasEpr ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"];
    } else {
      preferred = type === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    }
    panoEditorDebug("erp-select", {
      nodeId: node?.id ?? null,
      type,
      readOnly,
      inputNames,
      preferred,
    });
    return getLinkedInputImage(node, preferred, () => requestDraw());
  }

  function getWrappedErpCanvas(img) {
    if (!img || !img.complete || !(img.naturalWidth || img.width)) return null;
    const iw = Number(img.naturalWidth || img.width || 0);
    const ih = Number(img.naturalHeight || img.height || 0);
    if (iw <= 1 || ih <= 1) return null;
    if (!node.__panoWrappedErpCache) node.__panoWrappedErpCache = { src: "", w: 0, h: 0, canvas: null };
    const src = String(img.src || "");
    const cached = node.__panoWrappedErpCache;
    if (cached.canvas && cached.src === src && cached.w === iw && cached.h === ih) return cached.canvas;
    const cv = document.createElement("canvas");
    cv.width = iw * 2;
    cv.height = ih;
    const cctx = cv.getContext("2d");
    if (!cctx) return null;
    cctx.drawImage(img, 0, 0, iw, ih);
    cctx.drawImage(img, iw, 0, iw, ih);
    node.__panoWrappedErpCache = { src, w: iw, h: ih, canvas: cv };
    return cv;
  }

  function drawErpBackgroundUnwrap(rect) {
    const img = getConnectedErpImage();
    if (!img || !img.complete || !(img.naturalWidth || img.width)) return;
    ctx.save();
    ctx.globalAlpha = 0.94;
    ctx.drawImage(img, rect.x, rect.y, rect.w, rect.h);
    ctx.restore();
  }

  function drawErpBackgroundPano() {
    const img = getConnectedErpImage();
    if (!img || !img.complete || !(img.naturalWidth || img.width)) return;
    const iw = Number(img.naturalWidth || img.width || 0);
    const ih = Number(img.naturalHeight || img.height || 0);
    if (iw <= 1 || ih <= 1) return;
    const wrapped = getWrappedErpCanvas(img);
    if (!wrapped) return;
    const q = String(state.ui_settings?.preview_quality || "balanced");
    const Nu = q === "high" ? 44 : (q === "draft" ? 24 : 32);
    const Nv = q === "high" ? 28 : (q === "draft" ? 14 : 20);
    const verts = Array.from({ length: Nv + 1 }, () => Array(Nu + 1).fill(null));
    const sample = Array.from({ length: Nv + 1 }, () => Array(Nu + 1).fill(null));

    for (let j = 0; j <= Nv; j += 1) {
      for (let i = 0; i <= Nu; i += 1) {
        const x = (canvas.width * i) / Nu;
        const y = (canvas.height * j) / Nv;
        const d = screenToWorldDir(x, y);
        const ll = dirToLonLat(d);
        let u = (ll.lon / (2 * Math.PI) + 0.5) * iw;
        while (u < 0) u += iw;
        while (u >= iw) u -= iw;
        const v = (0.5 - ll.lat / Math.PI) * ih;
        verts[j][i] = { x, y };
        sample[j][i] = { x: u, y: v };
      }
    }

    ctx.save();
    ctx.globalAlpha = 0.94;
    for (let j = 0; j < Nv; j += 1) {
      for (let i = 0; i < Nu; i += 1) {
        const p00 = verts[j][i];
        const p10 = verts[j][i + 1];
        const p01 = verts[j + 1][i];
        const p11 = verts[j + 1][i + 1];
        if (!p00 || !p10 || !p01 || !p11) continue;
        const s00 = { ...sample[j][i] };
        const s10 = { ...sample[j][i + 1] };
        const s01 = { ...sample[j + 1][i] };
        const s11 = { ...sample[j + 1][i + 1] };
        const umin = Math.min(s00.x, s10.x, s01.x, s11.x);
        const umax = Math.max(s00.x, s10.x, s01.x, s11.x);
        if (umax - umin > iw * 0.5) {
          [s00, s10, s01, s11].forEach((s) => {
            if (s.x < iw * 0.5) s.x += iw;
          });
        }
        drawImageTri(wrapped, s00, s10, s11, p00, p10, p11);
        drawImageTri(wrapped, s00, s11, s01, p00, p11, p01);
      }
    }
    ctx.restore();
  }

  function pruneUnusedAssets() {
    if (type !== "stickers") return;
    const used = new Set(
      (state.stickers || [])
        .map((s) => String(s?.asset_id || ""))
        .filter((id) => !!id),
    );
    Object.keys(state.assets || {}).forEach((id) => {
      if (!used.has(id)) {
        delete state.assets[id];
        imageCache.delete(id);
      }
    });
  }

  function dirToLonLat(d) {
    return {
      lon: Math.atan2(d.x, d.z),
      lat: Math.asin(clamp(d.y, -1, 1)),
    };
  }

  function projectDirUnwrap(d, refX = null) {
    const { lon, lat } = dirToLonLat(d);
    const r = getUnwrapRect();
    let x = r.x + ((lon / (2 * Math.PI)) + 0.5) * r.w;
    const y = r.y + (0.5 - (lat / Math.PI)) * r.h;
    if (refX !== null) {
      while (x - refX > r.w / 2) x -= r.w;
      while (x - refX < -r.w / 2) x += r.w;
    }
    return { x, y, z: 1 };
  }

  function getStickerFrame(item) {
    const centerDir = yawPitchToDir(Number(item.yaw_deg || 0), Number(item.pitch_deg || 0));
    let upWorld = vec3(0, 1, 0);
    if (Math.abs(dot(centerDir, upWorld)) > 0.999) upWorld = vec3(0, 0, 1);
    const right = norm(cross(upWorld, centerDir));
    const up = norm(cross(centerDir, right));

    const tanX = Math.tan(clamp(Number(item.hFOV_deg || 20), 0.1, 179) * 0.5 * DEG2RAD);
    const tanY = Math.tan(clamp(Number(item.vFOV_deg || 20), 0.1, 179) * 0.5 * DEG2RAD);
    const rot = Number(item.rot_deg || item.roll_deg || 0) * DEG2RAD;
    const cr = Math.cos(rot);
    const sr = Math.sin(rot);
    return {
      centerDir,
      right,
      up,
      tanX,
      tanY,
      cr,
      sr,
    };
  }

  function stickerDirFromFrame(frame, x, y) {
    const xr = x * frame.cr - y * frame.sr;
    const yr = x * frame.sr + y * frame.cr;
    return norm(add(add(frame.centerDir, mul(frame.right, xr)), mul(frame.up, yr)));
  }

  function stickerCornersDir(item) {
    const frame = getStickerFrame(item);

    // Corner order is fixed to: top-left, top-right, bottom-right, bottom-left
    const cornersLocal = [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 },
    ];

    return cornersLocal.map(({ u, v }) => {
      return stickerDirFromFrame(frame, u * frame.tanX, v * frame.tanY);
    });
  }

  function stickerSampleDir(item, u, v) {
    const frame = getStickerFrame(item);

    const x = (u * 2 - 1) * frame.tanX;
    const y = (1 - v * 2) * frame.tanY;
    return stickerDirFromFrame(frame, x, y);
  }

  function drawImageTri(img, s0, s1, s2, d0, d1, d2) {
    const denom = (s0.x * (s1.y - s2.y)) + (s1.x * (s2.y - s0.y)) + (s2.x * (s0.y - s1.y));
    if (Math.abs(denom) < 1e-6) return;

    const a = ((d0.x * (s1.y - s2.y)) + (d1.x * (s2.y - s0.y)) + (d2.x * (s0.y - s1.y))) / denom;
    const b = ((d0.x * (s2.x - s1.x)) + (d1.x * (s0.x - s2.x)) + (d2.x * (s1.x - s0.x))) / denom;
    const c = ((d0.x * (s1.x * s2.y - s2.x * s1.y)) + (d1.x * (s2.x * s0.y - s0.x * s2.y)) + (d2.x * (s0.x * s1.y - s1.x * s0.y))) / denom;
    const d = ((d0.y * (s1.y - s2.y)) + (d1.y * (s2.y - s0.y)) + (d2.y * (s0.y - s1.y))) / denom;
    const e = ((d0.y * (s2.x - s1.x)) + (d1.y * (s0.x - s2.x)) + (d2.y * (s1.x - s0.x))) / denom;
    const f = ((d0.y * (s1.x * s2.y - s2.x * s1.y)) + (d1.y * (s2.x * s0.y - s0.x * s2.y)) + (d2.y * (s0.x * s1.y - s1.x * s0.y))) / denom;

    const [e0, e1, e2] = expandTri(d0, d1, d2, 0.45);
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(e0.x, e0.y);
    ctx.lineTo(e1.x, e1.y);
    ctx.lineTo(e2.x, e2.y);
    ctx.closePath();
    ctx.clip();
    ctx.setTransform(a, d, b, e, c, f);
    ctx.drawImage(img, 0, 0);
    ctx.restore();
  }

  function getMeshDivisions() {
    const q = String(state.ui_settings?.preview_quality || "balanced");
    if (q === "draft") {
      if (editor.hqFrames && editor.hqFrames > 0) return [28, 20];
      if (editor.interaction) return [12, 9];
      return [20, 14];
    }
    if (q === "high") {
      if (editor.hqFrames && editor.hqFrames > 0) return [48, 36];
      if (editor.interaction) return [20, 14];
      return [36, 26];
    }
    if (editor.hqFrames && editor.hqFrames > 0) return [40, 30];
    if (editor.interaction) return [16, 12];
    return [28, 20];
  }

  function drawGridUnwrap() {
    const w = canvas.width;
    const h = canvas.height;
    const r = getUnwrapRect();
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.fillStyle = "#070707";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#070707";
    ctx.fillRect(r.x, r.y, r.w, r.h);
    drawErpBackgroundUnwrap(r);

    if (editor.showGrid && !editor.fullscreen) {
      ctx.strokeStyle = "#3f3f46";
      for (let i = 0; i <= 16; i += 1) {
        const x = r.x + (r.w * i) / 16;
        ctx.beginPath(); ctx.moveTo(x, r.y); ctx.lineTo(x, r.y + r.h); ctx.stroke();
      }
      for (let i = 0; i <= 8; i += 1) {
        const y = r.y + (r.h * i) / 8;
        ctx.beginPath(); ctx.moveTo(r.x, y); ctx.lineTo(r.x + r.w, y); ctx.stroke();
      }

      ctx.strokeStyle = "rgba(250, 250, 250, 0.86)";
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(r.x, r.y + r.h / 2); ctx.lineTo(r.x + r.w, r.y + r.h / 2); ctx.stroke();

      ctx.fillStyle = "rgba(250, 250, 250, 0.42)";
      ctx.font = "500 11px Geist, sans-serif";
      ctx.textAlign = "center";
      const ly = r.y + r.h * 0.57;
      ctx.fillText("Left", r.x + r.w * 0.25, ly);
      ctx.fillText("Front", r.x + r.w * 0.50, ly);
      ctx.fillText("Right", r.x + r.w * 0.75, ly);
      ctx.fillText("Back", r.x + 38, ly);
      ctx.fillText("Back", r.x + r.w - 38, ly);
    }
  }

  function drawLineOnSphere(pointsDir, color, width = 1) {
    let started = false;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    for (const d of pointsDir) {
      const p = projectDir(d);
      if (!p) { started = false; continue; }
      if (!started) { ctx.moveTo(p.x, p.y); started = true; }
      else { ctx.lineTo(p.x, p.y); }
    }
    ctx.stroke();
  }

  function drawGridPano() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = "#070707";
    ctx.fillRect(0, 0, w, h);
    drawErpBackgroundPano();

    if (editor.showGrid && !editor.fullscreen) {
      for (let lon = -180; lon <= 180; lon += 15) {
        const pts = [];
        for (let lat = -89; lat <= 89; lat += 4) pts.push(yawPitchToDir(lon, lat));
        drawLineOnSphere(pts, "#3f3f46", lon % 90 === 0 ? 1.3 : 1);
      }
      for (let lat = -75; lat <= 75; lat += 15) {
        const pts = [];
        for (let lon = -180; lon <= 180; lon += 4) pts.push(yawPitchToDir(lon, lat));
        drawLineOnSphere(pts, lat === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", lat === 0 ? 1.5 : 1);
      }

      const labels = [
        { name: "Left", dir: yawPitchToDir(-90, 0) },
        { name: "Front", dir: yawPitchToDir(0, 0) },
        { name: "Right", dir: yawPitchToDir(90, 0) },
        { name: "Back", dir: yawPitchToDir(180, 0) },
      ];
      ctx.fillStyle = "rgba(250, 250, 250, 0.42)";
      ctx.font = "500 11px Geist, sans-serif";
      ctx.textAlign = "center";
      labels.forEach((l) => {
        const p = projectDir(l.dir);
        if (p) ctx.fillText(l.name, p.x, p.y + 24);
      });
    }
  }

  function objectGeom(item) {
    const centerDir = yawPitchToDir(Number(item.yaw_deg || 0), Number(item.pitch_deg || 0));
    const center = editor.mode === "unwrap" ? projectDirUnwrap(centerDir) : projectDir(centerDir);
    if (!center) return { visible: false };
    const projectDirForShape = (d, refX = null) => {
      if (editor.mode === "unwrap") return projectDirUnwrap(d, refX);
      const { right, up, fwd } = cameraBasis();
      const cx = dot(d, right);
      const cy = dot(d, up);
      const cz = dot(d, fwd);
      const w = canvas.width;
      const h = canvas.height;
      const hfov = editor.viewFov * DEG2RAD;
      const vfov = 2 * Math.atan(Math.tan(hfov / 2) * (h / Math.max(w, 1)));
      const sx = (w / 2) / Math.tan(hfov / 2);
      const sy = (h / 2) / Math.tan(vfov / 2);
      const z = Math.max(cz, 1e-4);
      const guard = Math.max(w, h) * 2.0;
      return {
        x: clamp(w / 2 + (cx / z) * sx, -guard, w + guard),
        y: clamp(h / 2 - (cy / z) * sy, -guard, h + guard),
        z,
      };
    };
    const frame = getStickerFrame(item);
    const cornersDir = stickerCornersDir(item);
    const corners = cornersDir.map((d) => projectDirForShape(d, center.x));
    const rotateStemBaseDir = stickerDirFromFrame(frame, 0, frame.tanY);
    const rotateHandleDir = stickerDirFromFrame(frame, 0, frame.tanY + Math.max(frame.tanY * 0.43, 0.053));
    const rotateStemBase = projectDirForShape(rotateStemBaseDir, center.x);
    const rotateHandleHint = projectDirForShape(rotateHandleDir, rotateStemBase?.x ?? center.x);
    const handleDx = (rotateHandleHint?.x ?? rotateStemBase.x) - rotateStemBase.x;
    const handleDy = (rotateHandleHint?.y ?? rotateStemBase.y) - rotateStemBase.y;
    const handleLen = Math.hypot(handleDx, handleDy) || 1;
    const rotateHandle = {
      x: rotateStemBase.x + (handleDx / handleLen) * 30,
      y: rotateStemBase.y + (handleDy / handleLen) * 30,
    };
    const topEdgeCenter = projectDirForShape(stickerDirFromFrame(frame, 0, frame.tanY), center.x);
    const rightEdgeCenter = projectDirForShape(stickerDirFromFrame(frame, frame.tanX, 0), center.x);
    const bottomEdgeCenter = projectDirForShape(stickerDirFromFrame(frame, 0, -frame.tanY), center.x);
    const leftEdgeCenter = projectDirForShape(stickerDirFromFrame(frame, -frame.tanX, 0), center.x);
    const edgeMidpoints = [
      {
        edge: "top",
        x: topEdgeCenter.x,
        y: topEdgeCenter.y,
        a: { x: corners[0].x, y: corners[0].y },
        b: { x: corners[1].x, y: corners[1].y },
      },
      {
        edge: "right",
        x: rightEdgeCenter.x,
        y: rightEdgeCenter.y,
        a: { x: corners[1].x, y: corners[1].y },
        b: { x: corners[2].x, y: corners[2].y },
      },
      {
        edge: "bottom",
        x: bottomEdgeCenter.x,
        y: bottomEdgeCenter.y,
        a: { x: corners[2].x, y: corners[2].y },
        b: { x: corners[3].x, y: corners[3].y },
      },
      {
        edge: "left",
        x: leftEdgeCenter.x,
        y: leftEdgeCenter.y,
        a: { x: corners[3].x, y: corners[3].y },
        b: { x: corners[0].x, y: corners[0].y },
      },
    ];
    return {
      center: { x: center.x, y: center.y },
      corners: corners.map((c) => ({ x: c.x, y: c.y })),
      edgeMidpoints,
      rotateStemBase: { x: rotateStemBase.x, y: rotateStemBase.y },
      rotateHandle,
      topEdge: { a: 0, b: 1 },
      visible: true,
    };
  }

  function drawStickerMeshMapped(item, img, dstRect, srcRect, alpha = 1) {
    const dx0 = clamp(Math.min(Number(dstRect.x0 ?? 0), Number(dstRect.x1 ?? 1)), 0, 1);
    const dy0 = clamp(Math.min(Number(dstRect.y0 ?? 0), Number(dstRect.y1 ?? 1)), 0, 1);
    const dx1 = clamp(Math.max(Number(dstRect.x0 ?? 0), Number(dstRect.x1 ?? 1)), 0, 1);
    const dy1 = clamp(Math.max(Number(dstRect.y0 ?? 0), Number(dstRect.y1 ?? 1)), 0, 1);
    const sx0 = clamp(Math.min(Number(srcRect.x0 ?? 0), Number(srcRect.x1 ?? 1)), 0, 1);
    const sy0 = clamp(Math.min(Number(srcRect.y0 ?? 0), Number(srcRect.y1 ?? 1)), 0, 1);
    const sx1 = clamp(Math.max(Number(srcRect.x0 ?? 0), Number(srcRect.x1 ?? 1)), 0, 1);
    const sy1 = clamp(Math.max(Number(srcRect.y0 ?? 0), Number(srcRect.y1 ?? 1)), 0, 1);

    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    const [Nu, Nv] = getMeshDivisions();
    const centerDir = yawPitchToDir(Number(item.yaw_deg || 0), Number(item.pitch_deg || 0));
    const centerProj = editor.mode === "unwrap" ? projectDirUnwrap(centerDir) : null;

    const verts = [];
    for (let j = 0; j <= Nv; j += 1) {
      for (let i = 0; i <= Nu; i += 1) {
        const u = i / Nu;
        const v = j / Nv;
        const wu = dx0 + (dx1 - dx0) * u;
        const wv = dy0 + (dy1 - dy0) * v;
        const su = (sx0 + (sx1 - sx0) * u) * iw;
        const sv = (sy0 + (sy1 - sy0) * v) * ih;
        const d = stickerSampleDir(item, wu, wv);
        const p = editor.mode === "unwrap" ? projectDirUnwrap(d, centerProj?.x ?? null) : projectDir(d);
        verts.push({ p, s: { x: su, y: sv } });
      }
    }

    const W = canvas.width;
    let drawnTriangles = 0;
    for (let j = 0; j < Nv; j += 1) {
      for (let i = 0; i < Nu; i += 1) {
        const idx = (jj, ii) => jj * (Nu + 1) + ii;
        const v00 = verts[idx(j, i)];
        const v10 = verts[idx(j, i + 1)];
        const v11 = verts[idx(j + 1, i + 1)];
        const v01 = verts[idx(j + 1, i)];
        if (!v00.p || !v10.p || !v11.p || !v01.p) continue;

        const prevAlpha = ctx.globalAlpha;
        ctx.globalAlpha = alpha;
        drawImageTri(img, v00.s, v10.s, v11.s, v00.p, v10.p, v11.p);
        drawImageTri(img, v00.s, v11.s, v01.s, v00.p, v11.p, v01.p);
        ctx.globalAlpha = prevAlpha;
        drawnTriangles += 2;

        if (editor.mode === "unwrap") {
          const p00p = { x: v00.p.x + W, y: v00.p.y };
          const p10p = { x: v10.p.x + W, y: v10.p.y };
          const p11p = { x: v11.p.x + W, y: v11.p.y };
          const p01p = { x: v01.p.x + W, y: v01.p.y };
          const p00m = { x: v00.p.x - W, y: v00.p.y };
          const p10m = { x: v10.p.x - W, y: v10.p.y };
          const p11m = { x: v11.p.x - W, y: v11.p.y };
          const p01m = { x: v01.p.x - W, y: v01.p.y };
          const prevAlpha2 = ctx.globalAlpha;
          ctx.globalAlpha = alpha;
          drawImageTri(img, v00.s, v10.s, v11.s, p00p, p10p, p11p);
          drawImageTri(img, v00.s, v11.s, v01.s, p00p, p11p, p01p);
          drawImageTri(img, v00.s, v10.s, v11.s, p00m, p10m, p11m);
          drawImageTri(img, v00.s, v11.s, v01.s, p00m, p11m, p01m);
          ctx.globalAlpha = prevAlpha2;
          drawnTriangles += 4;
        }
      }
    }
    return drawnTriangles > 0;
  }

  function drawStickerMesh(item, img) {
    return drawStickerMeshMapped(item, img, { x0: 0, y0: 0, x1: 1, y1: 1 }, { x0: 0, y0: 0, x1: 1, y1: 1 }, 1);
  }

  function sampleStickerEdge(item, edge, steps, refX = null) {
    const out = [];
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      let u = 0;
      let v = 0;
      if (edge === 0) { u = t; v = 0; }         // top
      else if (edge === 1) { u = 1; v = t; }    // right
      else if (edge === 2) { u = 1 - t; v = 1; } // bottom
      else { u = 0; v = 1 - t; }                // left

      const d = stickerSampleDir(item, u, v);
      const p = editor.mode === "unwrap" ? projectDirUnwrap(d, refX) : projectDir(d);
      if (p) out.push(p);
    }
    return out;
  }

  function drawStickerBoundary(item, selected) {
    const centerDir = yawPitchToDir(Number(item.yaw_deg || 0), Number(item.pitch_deg || 0));
    const centerProj = editor.mode === "unwrap" ? projectDirUnwrap(centerDir) : null;
    const refX = centerProj ? centerProj.x : null;
    const steps = editor.mode === "pano" ? 28 : 20;
    const edges = [
      sampleStickerEdge(item, 0, steps, refX),
      sampleStickerEdge(item, 1, steps, refX),
      sampleStickerEdge(item, 2, steps, refX),
      sampleStickerEdge(item, 3, steps, refX),
    ];

    ctx.strokeStyle = selected ? "rgba(250, 250, 250, 0.9)" : "#71717a";
    ctx.lineWidth = selected ? 2 : 1;
    ctx.beginPath();
    let started = false;
    for (const edge of edges) {
      for (const p of edge) {
        if (!started) {
          ctx.moveTo(p.x, p.y);
          started = true;
        } else {
          ctx.lineTo(p.x, p.y);
        }
      }
    }
    ctx.closePath();
    ctx.stroke();
  }

  function drawObjects() {
    const [usedNu, usedNv] = getMeshDivisions();
    const items = [...getList()].sort((a, b) => Number(a.z_index || 0) - Number(b.z_index || 0));
    for (const item of items) {
      const selected = item.id === editor.selectedId;
      const g = objectGeom(item);
      let meshDrawn = false;

      if (type === "stickers") {
        const img = getStickerImage(item.asset_id);
        if (img && (img.complete || img.width)) {
          meshDrawn = drawStickerMesh(item, img);
        } else if (g.visible) {
          ctx.fillStyle = "rgba(255,255,255,0.08)";
          ctx.beginPath(); ctx.moveTo(g.corners[0].x, g.corners[0].y);
          for (let i = 1; i < 4; i += 1) ctx.lineTo(g.corners[i].x, g.corners[i].y);
          ctx.closePath(); ctx.fill();
          meshDrawn = true;
        }
      } else if (!g.visible) {
        continue;
      }

      if (type === "stickers") {
        if (!meshDrawn) continue;
        drawStickerBoundary(item, selected);
      } else {
        ctx.fillStyle = selected ? "rgba(0, 112, 243, 0.24)" : "rgba(255, 255, 255, 0.12)";
        ctx.beginPath();
        ctx.moveTo(g.corners[0].x, g.corners[0].y);
        for (let i = 1; i < 4; i += 1) ctx.lineTo(g.corners[i].x, g.corners[i].y);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = selected ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.82)";
        ctx.lineWidth = selected ? 2.8 : 1.9;
        ctx.beginPath();
        ctx.moveTo(g.corners[0].x, g.corners[0].y);
        for (let i = 1; i < 4; i += 1) ctx.lineTo(g.corners[i].x, g.corners[i].y);
        ctx.closePath();
        ctx.stroke();
      }

      if (selected && g.visible) {
        ctx.fillStyle = "#0070f3";
        g.corners.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 6.5, 0, Math.PI * 2); ctx.fill(); });
        if (type === "cutout") {
          ctx.strokeStyle = "#0070f3";
          ctx.lineCap = "round";
          ctx.lineWidth = 4;
          g.edgeMidpoints.forEach((m) => {
            const dx = (m.b?.x ?? m.x) - (m.a?.x ?? m.x);
            const dy = (m.b?.y ?? m.y) - (m.a?.y ?? m.y);
            const ll2 = Math.hypot(dx, dy) || 1;
            const tx = dx / ll2;
            const ty = dy / ll2;
            const half = 10;
            ctx.beginPath();
            ctx.moveTo(m.x - tx * half, m.y - ty * half);
            ctx.lineTo(m.x + tx * half, m.y + ty * half);
            ctx.stroke();
          });
          ctx.lineCap = "butt";
        }
        ctx.strokeStyle = "rgba(250, 250, 250, 0.9)";
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(g.rotateStemBase.x, g.rotateStemBase.y);
        ctx.lineTo(g.rotateHandle.x, g.rotateHandle.y);
        ctx.stroke();
        ctx.fillStyle = "#0070f3";
        ctx.beginPath(); ctx.arc(g.rotateHandle.x, g.rotateHandle.y, 10, 0, Math.PI * 2); ctx.fill();
      }
    }

    if (editor.hqFrames && usedNu >= 40 && usedNv >= 30) {
      editor.hqFrames -= 1;
      if (editor.hqFrames > 0) requestDraw();
    }
  }

  function drawCutoutOutputPreview() {
    if (type !== "cutout") return;
    const shot = getSelected() || state.shots?.[0];
    if (!shot) {
      editor.outputPreviewRect = null;
      if (outputPreviewToggleBtn) outputPreviewToggleBtn.style.display = "none";
      return;
    }

    const margin = 14;
    const mix = clamp(Number(editor.outputPreviewAnim ?? (editor.outputPreviewExpanded ? 1 : 0)), 0, 1);
    const maxWCollapsed = Math.max(120, Math.min(250, canvas.width * 0.28));
    const maxWExpanded = Math.max(260, Math.min(560, canvas.width * 0.62));
    const maxHCollapsed = Math.max(76, Math.min(150, canvas.height * 0.22));
    const maxHExpanded = Math.max(160, Math.min(340, canvas.height * 0.48));
    const maxW = lerp(maxWCollapsed, maxWExpanded, mix);
    const maxH = lerp(maxHCollapsed, maxHExpanded, mix);
    const params = getCutoutShotParams(shot);
    const aspect = params.aspect;
    let pw = maxW;
    let ph = pw / aspect;
    if (ph > maxH) {
      ph = maxH;
      pw = ph * aspect;
    }
    const px = canvas.width - margin - pw;
    const py = margin;
    const radius = 12;
    editor.outputPreviewRect = { x: px, y: py, w: pw, h: ph };
    const placeOutputPreviewToggle = () => {
      if (!outputPreviewToggleBtn) return;
      const left = `${Math.round(px + pw - 8 - 24)}px`;
      const top = `${Math.round(py + 8)}px`;
      outputPreviewToggleBtn.style.display = "inline-flex";
      if (outputPreviewToggleBtn.style.left !== left) outputPreviewToggleBtn.style.left = left;
      if (outputPreviewToggleBtn.style.top !== top) outputPreviewToggleBtn.style.top = top;
    };

    const roundedRect = (x, y, w, h, r) => {
      const rr = Math.max(0, Math.min(r, Math.min(w, h) * 0.5));
      ctx.beginPath();
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(x, y, w, h, rr);
      } else {
        ctx.moveTo(x + rr, y);
        ctx.arcTo(x + w, y, x + w, y + h, rr);
        ctx.arcTo(x + w, y + h, x, y + h, rr);
        ctx.arcTo(x, y + h, x, y, rr);
        ctx.arcTo(x, y, x + w, y, rr);
      }
      ctx.closePath();
    };

    ctx.save();
    ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
    ctx.shadowBlur = 22;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 8;
    ctx.fillStyle = "rgba(10, 10, 10, 0.72)";
    roundedRect(px, py, pw, ph, radius);
    ctx.fill();
    ctx.restore();

    ctx.save();
    roundedRect(px, py, pw, ph, radius);
    ctx.clip();

    const img = getConnectedErpImage();
    if (!img || !img.complete || !(img.naturalWidth || img.width)) {
      ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
      ctx.fillRect(px, py, pw, ph);
      ctx.fillStyle = "rgba(250, 250, 250, 0.7)";
      ctx.font = "500 10px Geist, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Connect ERP image", px + pw * 0.5, py + ph * 0.5);
      ctx.restore();
      placeOutputPreviewToggle();
      return;
    }

    if (Number(img.naturalWidth || img.width || 0) <= 1 || Number(img.naturalHeight || img.height || 0) <= 1) {
      ctx.restore();
      if (outputPreviewToggleBtn) outputPreviewToggleBtn.style.display = "none";
      return;
    }

    const drawn = drawCutoutProjectionPreview(
      ctx,
      node,
      img,
      { x: px, y: py, w: pw, h: ph },
      shot,
      mix > 0.65 ? "high" : "balanced",
    );
    panoEditorDebug("cutout.draw", {
      nodeId: node?.id ?? null,
      hasImage: !!img,
      imageComplete: !!img?.complete,
      imageSize: img ? [Number(img.naturalWidth || img.width || 0), Number(img.naturalHeight || img.height || 0)] : null,
      imageSrc: String(img?.src || ""),
      drawn: !!drawn,
      quality: mix > 0.65 ? "high" : "balanced",
    });
    ctx.restore();
    placeOutputPreviewToggle();
  }

  function drawScene() {
    if (editor.mode === "unwrap") drawGridUnwrap();
    else drawGridPano();
    drawObjects();
    drawCutoutOutputPreview();
    if (fovValueEl) fovValueEl.textContent = `${editor.viewFov.toFixed(1)}`;
    updateSelectionMenu();
  }

  function isCutoutTransformInteractionActive() {
    if (type !== "cutout") return false;
    const kind = String(editor.interaction?.kind || "");
    return kind === "move" || kind === "scale" || kind === "scale_x" || kind === "scale_y" || kind === "rotate";
  }

  function requestDraw() {
    syncLookAtFrameButtonState();
    node.__panoLiveStateOverride = JSON.stringify(state);
    if (!isCutoutTransformInteractionActive()) {
      node.__panoDomPreview?.requestDraw?.();
      node.setDirtyCanvas?.(true, false);
      node.graph?.setDirtyCanvas?.(true, true);
      app?.canvas?.setDirty?.(true, true);
    }
    runtime.dirty = true;
  }

  function syncCanvasSize() {
    const rect = canvas.getBoundingClientRect();
    const nextW = Math.max(2, Math.round(rect.width));
    const nextH = Math.max(2, Math.round(rect.height));
    if (canvas.width !== nextW || canvas.height !== nextH) {
      canvas.width = nextW;
      canvas.height = nextH;
      runtime.dirty = true;
    }
  }

  function tick(ts = performance.now()) {
    if (!runtime.running) return;
    const dt = runtime.lastTickTs > 0 ? Math.max(0.001, (ts - runtime.lastTickTs) / 1000) : (1 / 60);
    runtime.lastTickTs = ts;
    if (editor.outputPreviewAnim !== editor.outputPreviewAnimTo) {
      const dur = Math.max(1, Number(editor.outputPreviewAnimDurationMs || 180));
      const t = clamp((ts - Number(editor.outputPreviewAnimStartTs || 0)) / dur, 0, 1);
      const expanding = editor.outputPreviewAnimTo > editor.outputPreviewAnimFrom;
      const eased = expanding ? easeOutCubic(t) : easeInCubic(t);
      editor.outputPreviewAnim = lerp(editor.outputPreviewAnimFrom, editor.outputPreviewAnimTo, eased);
      runtime.dirty = true;
      if (t >= 1) {
        editor.outputPreviewAnim = editor.outputPreviewAnimTo;
      }
    }

    if (editor.viewTween?.active) {
      const tw = editor.viewTween;
      const t = clamp((ts - tw.startTs) / tw.durationMs, 0, 1);
      const eased = easeInOutCubic(t);
      editor.viewYaw = wrapYaw(tw.startYaw + tw.deltaYaw * eased);
      editor.viewPitch = tw.startPitch + (tw.targetPitch - tw.startPitch) * eased;
      editor.viewFov = tw.startFov + (tw.targetFov - tw.startFov) * eased;
      runtime.dirty = true;
      if (t >= 1) editor.viewTween = null;
    }

    editor.viewInertia.vx = Number(viewController.state.inertia.vx || 0);
    editor.viewInertia.vy = Number(viewController.state.inertia.vy || 0);
    editor.viewInertia.active = !!viewController.state.inertia.active;
    if (viewController.stepInertia(ts)) {
      editor.viewInertia.vx = Number(viewController.state.inertia.vx || 0);
      editor.viewInertia.vy = Number(viewController.state.inertia.vy || 0);
      editor.viewInertia.active = !!viewController.state.inertia.active;
      runtime.dirty = true;
    }

    if (runtime.dirty || (ts - runtime.lastSizeCheckTs) >= 220) {
      syncCanvasSize();
      runtime.lastSizeCheckTs = ts;
    }
    if (runtime.dirty) {
      runtime.dirty = false;
      drawScene();
    }
    runtime.rafId = requestAnimationFrame(tick);
  }

  function stopRenderLoop() {
    runtime.running = false;
    if (runtime.rafId) cancelAnimationFrame(runtime.rafId);
    runtime.rafId = 0;
  }

  function pushHistory() {
    if (readOnly) return;
    const snap = JSON.stringify(state);
    if (editor.history[editor.historyIndex] === snap) return;
    editor.history = editor.history.slice(0, editor.historyIndex + 1);
    editor.history.push(snap);
    if (editor.history.length > 80) editor.history.shift();
    editor.historyIndex = editor.history.length - 1;
  }

  function restoreHistory(step) {
    if (readOnly) return;
    const idx = editor.historyIndex + step;
    if (idx < 0 || idx >= editor.history.length) return;
    const parsed = JSON.parse(editor.history[idx]);
    Object.keys(state).forEach((k) => delete state[k]);
    Object.assign(state, parsed);
    editor.historyIndex = idx;
    editor.selectedId = type === "stickers" ? state.active.selected_sticker_id : state.active.selected_shot_id;
    updateSidePanel();
    requestDraw();
  }

  function addParamRow(container, selected, key, label, min, max, step, enabled = true) {
    const row = document.createElement("div");
    row.dataset.key = key;
    row.dataset.min = String(min);
    row.dataset.max = String(max);
    row.className = "pano-field";
    row.innerHTML = `<label>${label}</label><input type='range' min='${min}' max='${max}' step='${step}' value='${Number(selected[key] || 0)}'><input type='number' min='${min}' max='${max}' step='${step}' value='${formatParamValue(selected[key] || 0)}'>`;
    const [rng, num] = row.querySelectorAll("input");
    const setRangeFill = () => {
      const nMin = Number(min);
      const nMax = Number(max);
      const nVal = Number(rng.value);
      const pct = ((nVal - nMin) / Math.max(1e-6, nMax - nMin)) * 100;
      rng.style.setProperty("--v", `${clamp(pct, 0, 100)}%`);
    };
    rng.disabled = !enabled;
    num.disabled = !enabled;
    const setVal = (v) => {
      if (!enabled) return;
      let out = Number(v);
      if (Number.isNaN(out)) out = 0;
      out = clamp(out, min, max);
      if (key === "yaw_deg") out = wrapYaw(out);
      selected[key] = out;
      rng.value = String(out);
      num.value = formatParamValue(out);
      setRangeFill();
      requestDraw();
    };
    rng.oninput = () => setVal(rng.value);
    num.oninput = () => setVal(num.value);
    rng.onchange = () => pushHistory();
    num.onchange = () => pushHistory();
    setRangeFill();
    container.appendChild(row);
  }

  function syncSidePanelControls() {
    const selected = getSelected();
    if (!selected) return;
    editor.panelLastValues = {
      yaw_deg: Number(selected.yaw_deg || 0),
      pitch_deg: Number(selected.pitch_deg || 0),
      hFOV_deg: Number(selected.hFOV_deg || (type === "stickers" ? 30 : 90)),
      vFOV_deg: Number(selected.vFOV_deg || (type === "stickers" ? 30 : 60)),
      rot_deg: Number(selected.rot_deg || 0),
      roll_deg: Number(selected.roll_deg || 0),
      out_w: Number(selected.out_w || 1024),
      out_h: Number(selected.out_h || 1024),
      aspect_id: getCutoutAspectLabel(selected),
    };
    const rows = side.querySelectorAll(".pano-field[data-key]");
    rows.forEach((row) => {
      const key = row.dataset.key;
      if (!key) return;
      if (!(key in selected)) return;
      const rng = row.querySelector("input[type='range']");
      const num = row.querySelector("input[type='number']");
      if (!rng || !num) return;
      const min = Number(row.dataset.min ?? rng.min ?? 0);
      const max = Number(row.dataset.max ?? rng.max ?? 0);
      let out = Number(selected[key] || 0);
      if (Number.isNaN(out)) out = 0;
      out = clamp(out, min, max);
      const s = String(out);
      if (rng.value !== s) rng.value = s;
      const t = formatParamValue(out);
      if (num.value !== t) num.value = t;
      const pct = ((out - min) / Math.max(1e-6, max - min)) * 100;
      rng.style.setProperty("--v", `${clamp(pct, 0, 100)}%`);
    });
    const resolvedAspect = getCutoutAspectLabel(selected);
    const aspectLabel = side.querySelector(".pano-cutout-aspect-label span");
    if (aspectLabel) aspectLabel.textContent = resolvedAspect;
    const presetBtns = side.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]");
    presetBtns.forEach((btn) => {
      btn.classList.toggle("active", String(btn.getAttribute("data-aspect")) === resolvedAspect);
    });
  }

  function updateSidePanel() {
    if (hideSidebar) return;
    const staticNodes = [...side.children].slice(0, 2);
    side.innerHTML = "";
    staticNodes.forEach((n) => side.appendChild(n));

    const sideActions = side.querySelector(".pano-side-actions");
    if (sideActions) {
      sideActions.innerHTML = "";
    }
    if (previewMode) {
      const inspector = document.createElement("div");
      inspector.className = "pano-inspector";
      const uiDetails = document.createElement("details");
      uiDetails.className = "pano-ui-settings";
      uiDetails.open = false;
      uiDetails.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${ICON.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${state.ui_settings?.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${state.ui_settings?.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${state.ui_settings?.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${state.ui_settings?.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${state.ui_settings?.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${state.ui_settings?.invert_view_y ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label for="pano-ui-quality">Render Quality</label>
          <div class="pano-picker pano-ui-picker" data-ui-picker="quality">
            <button class="pano-picker-trigger" type="button">
              <span class="pano-picker-label"></span>
              <span class="pano-picker-caret">▾</span>
            </button>
            <div class="pano-picker-pop" hidden></div>
          </div>
        </div>
        <div class="pano-ui-row">
          <span></span>
          <button class="pano-btn subtle" type="button" data-action="ui-reset-defaults">Reset Defaults</button>
        </div>
      </div>
    `;
      const segX = uiDetails.querySelector("[data-setting='invert-x']");
      const segY = uiDetails.querySelector("[data-setting='invert-y']");
      const qualityPicker = uiDetails.querySelector("[data-ui-picker='quality']");
      const resetUi = uiDetails.querySelector("[data-action='ui-reset-defaults']");
      const setupUiPicker = (pickerEl, options, getValue, setValue) => {
        const trigger = pickerEl.querySelector(".pano-picker-trigger");
        const label = pickerEl.querySelector(".pano-picker-label");
        const pop = pickerEl.querySelector(".pano-picker-pop");
        const refresh = () => {
          const cur = String(getValue());
          const found = options.find((o) => String(o.value) === cur) || options[0];
          label.textContent = found.label;
          pop.innerHTML = "";
          options.forEach((o) => {
            const b = document.createElement("button");
            b.type = "button";
            b.className = `pano-picker-item${String(o.value) === cur ? " active" : ""}`;
            b.textContent = o.label;
            b.onclick = () => {
              setValue(o.value);
              pop.hidden = true;
              refresh();
              persistUiSettings();
              requestDraw();
            };
            pop.appendChild(b);
          });
        };
        trigger.onclick = (ev) => {
          ev.stopPropagation();
          uiDetails.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((el) => {
            if (el !== pop) el.hidden = true;
          });
          pop.hidden = !pop.hidden;
        };
        refresh();
        return refresh;
      };
      const setSegmentValue = (seg, on) => {
        seg.setAttribute("data-selected", on ? "1" : "0");
        seg.querySelectorAll(".pano-segment-btn").forEach((b) => {
          b.setAttribute("aria-pressed", b.getAttribute("data-value") === (on ? "1" : "0") ? "true" : "false");
        });
      };
      segX.querySelectorAll(".pano-segment-btn").forEach((btn) => {
        btn.onclick = () => {
          const on = btn.getAttribute("data-value") === "1";
          state.ui_settings.invert_view_x = on;
          setSegmentValue(segX, on);
          persistUiSettings();
          requestDraw();
        };
      });
      segY.querySelectorAll(".pano-segment-btn").forEach((btn) => {
        btn.onclick = () => {
          const on = btn.getAttribute("data-value") === "1";
          state.ui_settings.invert_view_y = on;
          setSegmentValue(segY, on);
          persistUiSettings();
          requestDraw();
        };
      });
      const refreshQuality = setupUiPicker(
        qualityPicker,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" },
        ],
        () => String(state.ui_settings.preview_quality || "balanced"),
        (v) => {
          const q = String(v || "balanced");
          state.ui_settings.preview_quality = (q === "draft" || q === "high") ? q : "balanced";
        },
      );
      resetUi.onclick = () => {
        state.ui_settings.invert_view_x = false;
        state.ui_settings.invert_view_y = false;
        state.ui_settings.preview_quality = "balanced";
        setSegmentValue(segX, false);
        setSegmentValue(segY, false);
        refreshQuality();
        persistUiSettings();
        requestDraw();
      };
      inspector.appendChild(uiDetails);
      side.appendChild(inspector);

      const footer = document.createElement("div");
      footer.className = "pano-side-footer";
      footer.innerHTML = `<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>`;
      footer.querySelector("[data-action='close-preview']").onclick = () => closeEditor();
      side.appendChild(footer);
      installTooltipHandlers(inspector);
      return;
    }

    const list = getList();
    const selected = getSelected();
    if (selected) {
      editor.panelLastValues = {
        yaw_deg: Number(selected.yaw_deg || 0),
        pitch_deg: Number(selected.pitch_deg || 0),
        hFOV_deg: Number(selected.hFOV_deg || (type === "stickers" ? 30 : 90)),
        vFOV_deg: Number(selected.vFOV_deg || (type === "stickers" ? 30 : 60)),
        rot_deg: Number(selected.rot_deg || 0),
        roll_deg: Number(selected.roll_deg || 0),
        out_w: Number(selected.out_w || 1024),
        out_h: Number(selected.out_h || 1024),
        aspect_id: getCutoutAspectLabel(selected),
      };
    }
    const fallback = editor.panelLastValues || (type === "stickers"
      ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }
      : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, out_w: 1024, out_h: 1024, aspect_id: "1:1" });
    const effective = selected || fallback;
    const enabled = !!selected;

    const inspector = document.createElement("div");
    inspector.className = "pano-inspector";
    inspector.innerHTML = `
      <div class="pano-section-title">
        <span>Transform</span>
      </div>
    `;
    side.appendChild(inspector);

    if (type === "stickers") {
      const targetRow = document.createElement("div");
      targetRow.className = "pano-field-wide pano-target-row";
      targetRow.innerHTML = `
        <label>Image</label>
        <div class="pano-picker">
          <button class="pano-picker-trigger" type="button">
            <span class="pano-picker-label"></span>
            <span class="pano-picker-caret">▾</span>
          </button>
          <div class="pano-picker-pop" hidden></div>
        </div>
      `;
      const trigger = targetRow.querySelector(".pano-picker-trigger");
      const labelEl = targetRow.querySelector(".pano-picker-label");
      const pop = targetRow.querySelector(".pano-picker-pop");
      const items = [{ id: "", label: "No image" }];
      list.forEach((item, i) => {
        const label = `${i + 1}. ${String(state.assets?.[item.asset_id]?.name || item.asset_id || item.id)}`;
        items.push({ id: item.id, label });
      });
      const currentId = selected?.id || "";
      const currentLabel = (items.find((it) => it.id === currentId) || items[0]).label;
      labelEl.textContent = currentLabel;
      pop.innerHTML = "";
      items.forEach((it) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `pano-picker-item${it.id === currentId ? " active" : ""}`;
        btn.textContent = it.label;
        btn.onclick = () => {
          pop.hidden = true;
          editor.selectedId = it.id || null;
          state.active.selected_sticker_id = editor.selectedId;
          const selectedNow = getSelected();
          if (selectedNow) {
            const targetYaw = wrapYaw(Number(selectedNow.yaw_deg || 0));
            const targetPitch = clamp(Number(selectedNow.pitch_deg || 0), -89.9, 89.9);
            startViewTween(targetYaw, targetPitch, editor.viewFov);
          }
          updateSidePanel();
          updateSelectionMenu();
          requestDraw();
        };
        pop.appendChild(btn);
      });
      trigger.disabled = list.length === 0;
      trigger.onclick = (ev) => {
        ev.stopPropagation();
        if (trigger.disabled) return;
        pop.hidden = !pop.hidden;
      };
      inspector.appendChild(targetRow);
    }

    const toolsRow = document.createElement("div");
    toolsRow.className = "pano-state-actions";
    toolsRow.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${ICON.copy}<span>Copy State</span></button>`;
    const copyInline = toolsRow.querySelector("[data-action='copy-state-inline']");
    copyInline.disabled = !enabled;
    copyInline.onclick = async () => {
      if (!enabled) return;
      const lite = {
        ...state,
        assets: Object.fromEntries(
          Object.entries(state.assets || {}).map(([k, v]) => [k, {
            type: v?.type || "comfy_image",
            w: Number(v?.w || 0),
            h: Number(v?.h || 0),
            name: String(v?.name || ""),
            filename: String(v?.filename || ""),
            subfolder: String(v?.subfolder || ""),
            storage: String(v?.storage || ""),
          }]),
        ),
      };
      const text = JSON.stringify(lite);
      try {
        await navigator.clipboard.writeText(text);
        const label = copyInline.querySelector("span");
        if (label) {
          label.textContent = "Copied";
          window.setTimeout(() => {
            label.textContent = "Copy State";
          }, 900);
        }
      } catch {
        // no-op fallback for environments without clipboard permission
      }
    };
    inspector.appendChild(toolsRow);

    const paramsWrap = document.createElement("div");
    paramsWrap.className = `pano-params${editor.panelWasEnabled ? "" : " disabled"}`;
    inspector.appendChild(paramsWrap);

    if (type === "cutout") {
      const aspectRow = document.createElement("div");
      aspectRow.className = "pano-field-wide pano-aspect-row";
      const aspectLabel = getCutoutAspectLabel(effective);
      aspectRow.innerHTML = `
        <label>Aspect</label>
        <div class="pano-cutout-aspect-inline">
          <div class="pano-picker pano-cutout-aspect-picker">
            <button class="pano-picker-trigger pano-cutout-aspect-trigger" type="button" ${enabled ? "" : "disabled"}>
              <span class="pano-cutout-aspect-label">${ICON.aspect}<span>${aspectLabel}</span></span>
              <span class="pano-picker-caret">▾</span>
            </button>
            <div class="pano-picker-pop pano-cutout-aspect-pop" hidden>
              <div class="pano-cutout-aspect-presets">
                <button class="pano-picker-item" type="button" data-aspect="1:1">1:1</button>
                <button class="pano-picker-item" type="button" data-aspect="4:3">4:3</button>
                <button class="pano-picker-item" type="button" data-aspect="3:2">3:2</button>
                <button class="pano-picker-item" type="button" data-aspect="16:9">16:9</button>
              </div>
              <div class="pano-cutout-aspect-custom">
                <input type="number" min="1" step="1" value="1" data-role="custom-w" aria-label="Aspect width">
                <span>:</span>
                <input type="number" min="1" step="1" value="1" data-role="custom-h" aria-label="Aspect height">
                <button class="pano-btn" type="button" data-action="aspect-custom-apply">Set</button>
              </div>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon pano-cutout-aspect-rotate" type="button" data-action="rotate-90-side" aria-label="Rotate 90°" ${enabled ? "" : "disabled"}>${ICON.rotate_90}</button>
        </div>
      `;
      const trigger = aspectRow.querySelector(".pano-picker-trigger");
      const pop = aspectRow.querySelector(".pano-cutout-aspect-pop");
      const labelSpan = aspectRow.querySelector(".pano-cutout-aspect-label span");
      const cw = aspectRow.querySelector("[data-role='custom-w']");
      const ch = aspectRow.querySelector("[data-role='custom-h']");
      const applyCustomBtn = aspectRow.querySelector("[data-action='aspect-custom-apply']");
      const rotateBtn = aspectRow.querySelector("[data-action='rotate-90-side']");
      const refreshAspectUi = () => {
        const now = getSelected();
        const text = getCutoutAspectLabel(now || effective);
        if (labelSpan) labelSpan.textContent = text;
        const presets = pop.querySelectorAll("[data-aspect]");
        presets.forEach((btn) => {
          btn.classList.toggle("active", String(btn.getAttribute("data-aspect")) === text);
        });
      };
      if (enabled) {
        trigger.onclick = (ev) => {
          ev.stopPropagation();
          pop.hidden = !pop.hidden;
        };
        pop.querySelectorAll("[data-aspect]").forEach((btn) => {
          btn.onclick = () => {
            const now = getSelected();
            if (!now) return;
            applyCutoutAspect(now, String(btn.getAttribute("data-aspect") || "1:1"));
            pop.hidden = true;
            refreshAspectUi();
            syncSidePanelControls();
            pushHistory();
            commitAndRefreshNode();
            requestDraw();
          };
        });
        applyCustomBtn.onclick = () => {
          const now = getSelected();
          if (!now) return;
          const ok = applyCutoutAspectCustom(now, Number(cw.value), Number(ch.value));
          if (!ok) return;
          pop.hidden = true;
          refreshAspectUi();
          syncSidePanelControls();
          pushHistory();
          commitAndRefreshNode();
          requestDraw();
        };
        rotateBtn.onclick = () => {
          const now = getSelected();
          if (!now) return;
          rotateCutoutAspect90(now);
          refreshAspectUi();
          syncSidePanelControls();
          pushHistory();
          commitAndRefreshNode();
          requestDraw();
        };
      }
      refreshAspectUi();
      paramsWrap.appendChild(aspectRow);
    }

    addParamRow(paramsWrap, effective, "yaw_deg", "Yaw", -180, 180, 0.1, enabled && !readOnly);
    addParamRow(paramsWrap, effective, "pitch_deg", "Pitch", -90, 90, 0.1, enabled && !readOnly);
    addParamRow(paramsWrap, effective, "hFOV_deg", "H FOV", 1, 179, 0.1, enabled && !readOnly);
    addParamRow(paramsWrap, effective, "vFOV_deg", "V FOV", 1, 179, 0.1, enabled && !readOnly);
    if (type === "stickers") {
      addParamRow(paramsWrap, effective, "rot_deg", "Rotation", -180, 180, 0.1, enabled && !readOnly);
    } else {
      addParamRow(paramsWrap, effective, "roll_deg", "Roll", -180, 180, 0.1, enabled && !readOnly);
    }

    if (enabled !== editor.panelWasEnabled) {
      requestAnimationFrame(() => {
        paramsWrap.classList.toggle("disabled", !enabled);
      });
    } else {
      paramsWrap.classList.toggle("disabled", !enabled);
    }
    editor.panelWasEnabled = enabled;
    syncLookAtFrameButtonState();

    if (!readOnly) {
      const uiDetails = document.createElement("details");
      uiDetails.className = "pano-ui-settings";
      uiDetails.open = false;
      uiDetails.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${ICON.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${state.ui_settings?.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${state.ui_settings?.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${state.ui_settings?.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${state.ui_settings?.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${state.ui_settings?.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${state.ui_settings?.invert_view_y ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label for="pano-ui-quality">Render Quality</label>
          <div class="pano-picker pano-ui-picker" data-ui-picker="quality">
            <button class="pano-picker-trigger" type="button">
              <span class="pano-picker-label"></span>
              <span class="pano-picker-caret">▾</span>
            </button>
            <div class="pano-picker-pop" hidden></div>
          </div>
        </div>
        <div class="pano-ui-row">
          <span></span>
          <button class="pano-btn subtle" type="button" data-action="ui-reset-defaults">Reset Defaults</button>
        </div>
      </div>
    `;
      const segX = uiDetails.querySelector("[data-setting='invert-x']");
      const segY = uiDetails.querySelector("[data-setting='invert-y']");
      const qualityPicker = uiDetails.querySelector("[data-ui-picker='quality']");
      const resetUi = uiDetails.querySelector("[data-action='ui-reset-defaults']");
      const setupUiPicker = (pickerEl, options, getValue, setValue) => {
        const trigger = pickerEl.querySelector(".pano-picker-trigger");
        const label = pickerEl.querySelector(".pano-picker-label");
        const pop = pickerEl.querySelector(".pano-picker-pop");
        const refresh = () => {
          const cur = String(getValue());
          const found = options.find((o) => String(o.value) === cur) || options[0];
          label.textContent = found.label;
          pop.innerHTML = "";
          options.forEach((o) => {
            const b = document.createElement("button");
            b.type = "button";
            b.className = `pano-picker-item${String(o.value) === cur ? " active" : ""}`;
            b.textContent = o.label;
            b.onclick = () => {
              setValue(o.value);
              pop.hidden = true;
              refresh();
              persistUiSettings();
              node.setDirtyCanvas(true, true);
              requestDraw();
            };
            pop.appendChild(b);
          });
        };
        trigger.onclick = (ev) => {
          ev.stopPropagation();
          uiDetails.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((el) => {
            if (el !== pop) el.hidden = true;
          });
          pop.hidden = !pop.hidden;
        };
        refresh();
        return refresh;
      };
      const setSegmentValue = (seg, on) => {
        seg.setAttribute("data-selected", on ? "1" : "0");
        seg.querySelectorAll(".pano-segment-btn").forEach((b) => {
          b.setAttribute("aria-pressed", b.getAttribute("data-value") === (on ? "1" : "0") ? "true" : "false");
        });
      };
      segX.querySelectorAll(".pano-segment-btn").forEach((btn) => {
        btn.onclick = () => {
          const on = btn.getAttribute("data-value") === "1";
          state.ui_settings.invert_view_x = on;
          setSegmentValue(segX, on);
          persistUiSettings();
          node.setDirtyCanvas(true, true);
          requestDraw();
        };
      });
      segY.querySelectorAll(".pano-segment-btn").forEach((btn) => {
        btn.onclick = () => {
          const on = btn.getAttribute("data-value") === "1";
          state.ui_settings.invert_view_y = on;
          setSegmentValue(segY, on);
          persistUiSettings();
          node.setDirtyCanvas(true, true);
          requestDraw();
        };
      });
      const refreshQuality = setupUiPicker(
        qualityPicker,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" },
        ],
        () => String(state.ui_settings.preview_quality || "balanced"),
        (v) => {
          const q = String(v || "balanced");
          state.ui_settings.preview_quality = (q === "draft" || q === "high") ? q : "balanced";
        },
      );
      resetUi.onclick = () => {
        state.ui_settings.invert_view_x = false;
        state.ui_settings.invert_view_y = false;
        state.ui_settings.preview_quality = "balanced";
        setSegmentValue(segX, false);
        setSegmentValue(segY, false);
        refreshQuality();
        persistUiSettings();
        node.setDirtyCanvas(true, true);
        requestDraw();
      };
      inspector.appendChild(uiDetails);
    }

    if (!hideFooter) {
      const footer = document.createElement("div");
      footer.className = "pano-side-footer";
      footer.innerHTML = `
        <button class="pano-btn" data-action="cancel-close">Cancel</button>
        <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
      `;
      footer.querySelector("[data-action='cancel-close']").onclick = () => closeEditor();
      footer.querySelector("[data-action='save-close']").onclick = () => {
        apply();
        closeEditor();
      };
      side.appendChild(footer);
    }
    installTooltipHandlers(inspector);
  }

  function isImageFile(file) {
    if (!file) return false;
    const t = String(file.type || "").toLowerCase();
    if (t.startsWith("image/")) return true;
    const n = String(file.name || "").toLowerCase();
    return n.endsWith(".png") || n.endsWith(".jpg") || n.endsWith(".jpeg") || n.endsWith(".webp") || n.endsWith(".gif") || n.endsWith(".bmp");
  }

  async function addImageStickerFromFile(file) {
    if (readOnly) return;
    if (type !== "stickers") return;
    if (!isImageFile(file)) return;
    const aid = uid("asset");
    const tempUrl = URL.createObjectURL(file);
    try {
      const img = await new Promise((resolve, reject) => {
        const i = new Image();
        i.onload = () => resolve(i);
        i.onerror = () => reject(new Error("image load failed"));
        i.src = tempUrl;
      });
      imageCache.set(aid, img);
      const uploaded = await uploadStickerAssetFile(file, String(file.name || aid));
      state.assets[aid] = uploaded;
      const ar = (img.naturalHeight || img.height || 1) / (img.naturalWidth || img.width || 1);
      const id = uid("st");
      state.stickers.push({
        id,
        asset_id: aid,
        yaw_deg: editor.viewYaw,
        pitch_deg: editor.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: clamp(30 * ar, 1, 179),
        rot_deg: 0,
        z_index: state.stickers.length,
      });
      editor.selectedId = id;
      state.active.selected_sticker_id = id;
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      requestDraw();
    } catch (err) {
      console.error("[PanoramaSuite] failed to add sticker asset", err);
      delete state.assets[aid];
      imageCache.delete(aid);
    } finally {
      URL.revokeObjectURL(tempUrl);
    }
  }

  function addImageSticker() {
    if (readOnly) return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      void addImageStickerFromFile(file);
    };
    input.click();
  }

  async function migrateLegacyEmbeddedAssets() {
    if (typeof options?.adapters?.saveAssetFile !== "function") return;
    if (readOnly || type !== "stickers") return;
    const assets = state.assets && typeof state.assets === "object" ? state.assets : {};
    const entries = Object.entries(assets).filter(([, asset]) => {
      const t = String(asset?.type || "").toLowerCase();
      const v = String(asset?.value || "");
      return t === "dataurl" && v.startsWith("data:image");
    });
    if (!entries.length) return;
    let changed = false;
    for (const [assetId, asset] of entries) {
      try {
        const dataUrl = String(asset?.value || "");
        if (!dataUrl) continue;
        const blob = await fetch(dataUrl).then((r) => r.blob());
        const ext = String(blob.type || "image/png").split("/")[1] || "png";
        const name = String(asset?.name || `${assetId}.${ext}`);
        const file = new File([blob], name, { type: blob.type || "image/png" });
        const uploaded = await uploadStickerAssetFile(file, name);
        state.assets[assetId] = {
          ...uploaded,
          w: Number(asset?.w || 0),
          h: Number(asset?.h || 0),
        };
        changed = true;
      } catch (err) {
        console.error("[PanoramaSuite] failed to migrate embedded sticker asset", { assetId, err });
      }
    }
    if (changed) {
      commitAndRefreshNode();
      requestDraw();
    }
  }

  function addCutoutFrame() {
    if (readOnly) return;
    if (type !== "cutout") return;
    state.shots = [{
      id: uid("sh"),
      yaw_deg: editor.viewYaw,
      pitch_deg: editor.viewPitch,
      hFOV_deg: 64,
      vFOV_deg: 40,
      roll_deg: 0,
      out_w: 1024,
      out_h: 1024,
      aspect_id: "1:1",
    }];
    editor.selectedId = state.shots[0].id;
    editor.cutoutAspectOpen = false;
    state.active.selected_shot_id = editor.selectedId;
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    requestDraw();
  }

  function clearCutoutFrame() {
    if (readOnly) return;
    if (type !== "cutout") return;
    state.shots = [];
    editor.selectedId = null;
    editor.cutoutAspectOpen = false;
    state.active.selected_shot_id = null;
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    requestDraw();
  }

  function showCanvasConfirm(title, text, confirmLabel = "Clear") {
    return new Promise((resolve) => {
      const layer = document.createElement("div");
      layer.className = "pano-canvas-confirm";
      layer.innerHTML = `
        <div class="pano-canvas-confirm-card" role="dialog" aria-modal="true" aria-label="${title}">
          <div class="pano-canvas-confirm-title">${title}</div>
          <div class="pano-canvas-confirm-text">${text}</div>
          <div class="pano-canvas-confirm-actions">
            <button class="pano-btn" data-action="cancel">Cancel</button>
            <button class="pano-btn pano-btn-primary" data-action="confirm">${confirmLabel}</button>
          </div>
        </div>
      `;
      const close = (ok) => {
        layer.remove();
        resolve(!!ok);
      };
      layer.addEventListener("pointerdown", (ev) => {
        if (ev.target === layer) close(false);
      });
      const cancelBtn = layer.querySelector("[data-action='cancel']");
      const confirmBtn = layer.querySelector("[data-action='confirm']");
      cancelBtn.onclick = () => close(false);
      confirmBtn.onclick = () => close(true);
      stageWrap.appendChild(layer);
      confirmBtn.focus();
    });
  }

  async function clearAll() {
    if (readOnly) return;
    const ok = await showCanvasConfirm(
      type === "stickers" ? "Clear All Stickers" : "Remove Frame",
      type === "stickers"
        ? "This will remove all stickers from the current state."
        : "This will remove the current cutout frame.",
      type === "stickers" ? "Clear All" : "Remove",
    );
    if (!ok) return;
    if (type === "stickers") {
      state.stickers = [];
      pruneUnusedAssets();
      editor.selectedId = null;
      state.active.selected_sticker_id = null;
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      requestDraw();
      return;
    }
    clearCutoutFrame();
  }

  function duplicateSelected() {
    if (readOnly) return;
    if (type !== "stickers") return;
    const selected = getSelected();
    if (!selected) return;
    const copy = JSON.parse(JSON.stringify(selected));
    copy.id = uid(type === "stickers" ? "st" : "sh");
    copy.yaw_deg = wrapYaw((copy.yaw_deg || 0) + 8);
    if (type === "stickers") {
      copy.z_index = state.stickers.length;
      state.stickers.push(copy);
      state.active.selected_sticker_id = copy.id;
    } else {
      state.shots = [copy];
      state.active.selected_shot_id = copy.id;
    }
    editor.selectedId = copy.id;
    pushHistory();
    updateSidePanel();
    requestDraw();
  }

  function deleteSelected() {
    if (readOnly) return;
    const selected = getSelected();
    if (!selected) return;
    if (type === "stickers") {
      state.stickers = state.stickers.filter((s) => s.id !== selected.id);
      pruneUnusedAssets();
      editor.selectedId = state.stickers[0]?.id || null;
      state.active.selected_sticker_id = editor.selectedId;
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      requestDraw();
      return;
    }
    clearCutoutFrame();
  }

  function applyCutoutAspect(selected, aspect) {
    if (!selected) return;
    const pairs = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9],
    };
    const currentLandscape = (() => {
      const hf = Number(selected.hFOV_deg || 64);
      const vf = Number(selected.vFOV_deg || 40);
      if (Math.abs(hf - vf) > 1e-6) return hf >= vf;
      return Number(selected.out_w || 1024) >= Number(selected.out_h || 1024);
    })();
    let [aw, ah] = pairs[String(aspect)] || pairs["1:1"];
    if ((aw >= ah) !== currentLandscape) [aw, ah] = [ah, aw];
    const ratio = aw / ah;
    const hf = clamp(Number(selected.hFOV_deg || 64), 1, 179);
    const vf = clamp(Number(selected.vFOV_deg || 40), 1, 179);
    const span = Math.sqrt(Math.max(1, hf * vf));
    const targetHF = clamp(span * Math.sqrt(ratio), 1, 179);
    const targetVF = clamp(span / Math.sqrt(ratio), 1, 179);
    selected.hFOV_deg = targetHF;
    selected.vFOV_deg = targetVF;
    const base = Math.max(512, Number(selected.out_w || 1024), Number(selected.out_h || 1024));
    const scale = base / Math.max(aw, ah);
    const ow = Math.max(256, Math.round((aw * scale) / 8) * 8);
    const oh = Math.max(256, Math.round((ah * scale) / 8) * 8);
    selected.out_w = ow;
    selected.out_h = oh;
    selected.aspect_id = String(aspect);
  }

  function applyCutoutAspectCustom(selected, w, h) {
    if (!selected) return false;
    const rw = Math.max(1, Number(w));
    const rh = Math.max(1, Number(h));
    if (!Number.isFinite(rw) || !Number.isFinite(rh)) return false;
    const currentLandscape = (() => {
      const hf = Number(selected.hFOV_deg || 64);
      const vf = Number(selected.vFOV_deg || 40);
      if (Math.abs(hf - vf) > 1e-6) return hf >= vf;
      return Number(selected.out_w || 1024) >= Number(selected.out_h || 1024);
    })();
    let aw = rw;
    let ah = rh;
    if ((aw >= ah) !== currentLandscape) [aw, ah] = [ah, aw];
    const ratio = aw / ah;
    const hf = clamp(Number(selected.hFOV_deg || 64), 1, 179);
    const vf = clamp(Number(selected.vFOV_deg || 40), 1, 179);
    const span = Math.sqrt(Math.max(1, hf * vf));
    selected.hFOV_deg = clamp(span * Math.sqrt(ratio), 1, 179);
    selected.vFOV_deg = clamp(span / Math.sqrt(ratio), 1, 179);
    const base = Math.max(512, Number(selected.out_w || 1024), Number(selected.out_h || 1024));
    const scale = base / Math.max(aw, ah);
    selected.out_w = Math.max(256, Math.round((aw * scale) / 8) * 8);
    selected.out_h = Math.max(256, Math.round((ah * scale) / 8) * 8);
    selected.aspect_id = `${Math.round(rw)}:${Math.round(rh)}`;
    return true;
  }

  function rotateCutoutAspect90(selected) {
    if (!selected) return;
    const ow = Math.max(8, Number(selected.out_w || 1024));
    const oh = Math.max(8, Number(selected.out_h || 1024));
    selected.out_w = oh;
    selected.out_h = ow;
    const hf = Math.max(1, Number(selected.hFOV_deg || 90));
    const vf = Math.max(1, Number(selected.vFOV_deg || 60));
    selected.hFOV_deg = vf;
    selected.vFOV_deg = hf;
  }

  function normalizeStickerZIndices() {
    state.stickers
      .sort((a, b) => Number(a.z_index || 0) - Number(b.z_index || 0))
      .forEach((st, i) => { st.z_index = i; });
  }

  function bringSelectedToFront() {
    if (readOnly) return;
    if (type !== "stickers") return;
    const selected = getSelected();
    if (!selected) return;
    normalizeStickerZIndices();
    const sorted = [...state.stickers].sort((a, b) => Number(a.z_index || 0) - Number(b.z_index || 0));
    const idx = sorted.findIndex((s) => s.id === selected.id);
    if (idx < 0 || idx === sorted.length - 1) return;
    const [item] = sorted.splice(idx, 1);
    sorted.push(item);
    sorted.forEach((s, i) => { s.z_index = i; });
    pushHistory();
    updateSelectionMenu();
    requestDraw();
  }

  function sendSelectedToBack() {
    if (readOnly) return;
    if (type !== "stickers") return;
    const selected = getSelected();
    if (!selected) return;
    normalizeStickerZIndices();
    const sorted = [...state.stickers].sort((a, b) => Number(a.z_index || 0) - Number(b.z_index || 0));
    const idx = sorted.findIndex((s) => s.id === selected.id);
    if (idx <= 0) return;
    const [item] = sorted.splice(idx, 1);
    sorted.unshift(item);
    sorted.forEach((s, i) => { s.z_index = i; });
    pushHistory();
    updateSelectionMenu();
    requestDraw();
  }

  function apply() {
    if (readOnly) return;
    state.projection_model = "pinhole_rectilinear";
    state.alpha_mode = "straight";
    if (presetWidget) state.output_preset = parseOutputPresetValue(presetWidget.value, Number(state.output_preset || 2048));
    if (bgWidget) state.bg_color = String(bgWidget.value || state.bg_color || "#00ff00");
    commitState();
    node.setDirtyCanvas(true, true);
  }

  function commitState() {
    if (readOnly) return;
    const text = JSON.stringify(state);
    if (stateWidget) {
      stateWidget.value = text;
      stateWidget.callback?.(text);
    }
  }
  function persistUiSettings() {
    state.ui_settings = saveSharedUiSettings(state.ui_settings);
    if (!readOnly) {
      commitState();
    }
  }
  function commitAndRefreshNode() {
    if (readOnly) return;
    commitState();
    node.setDirtyCanvas?.(true, true);
  }

  function screenPos(evt) {
    const r = canvas.getBoundingClientRect();
    return {
      x: ((evt.clientX - r.left) / r.width) * canvas.width,
      y: ((evt.clientY - r.top) / r.height) * canvas.height,
    };
  }

  function hitObjectAt(p) {
    const items = [...getList()].sort((a, b) => Number(b.z_index || 0) - Number(a.z_index || 0));
    for (const item of items) {
      const g = objectGeom(item);
      if (!g.visible) continue;
      if (pointInPoly(p, g.corners)) return { item, geom: g };
    }
    return null;
  }

  function handleHit(geom, p) {
    if (!geom || !geom.visible) return { kind: "none", cursor: editor.mode === "pano" ? "grab" : "default" };
    if (type === "cutout" && Array.isArray(geom.edgeMidpoints)) {
      const mid = geom.edgeMidpoints.find((m) => dist2(m, p) <= 13 * 13);
      if (mid) {
        const horiz = (mid.edge === "left" || mid.edge === "right");
        return { kind: horiz ? "scale_x" : "scale_y", cursor: horiz ? "ew-resize" : "ns-resize", edge: mid.edge, mid };
      }
    }
    const cornerIdx = geom.corners.findIndex((c) => dist2(c, p) <= 11 * 11);
    if (cornerIdx >= 0) {
      const c = geom.corners[cornerIdx];
      const vx = c.x - geom.center.x;
      const vy = c.y - geom.center.y;
      const cursor = (vx * vy) >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx, cursor };
    }
    if (dist2(geom.rotateHandle, p) <= 12 * 12) return { kind: "rotate", cursor: "grab" };
    if (pointInPoly(p, geom.corners)) return { kind: "move", cursor: "move" };
    return { kind: "none", cursor: editor.mode === "pano" ? "grab" : "default" };
  }

  function updateCursor(p) {
    if (editor.interaction) {
      if (editor.interaction.kind === "view") canvas.style.cursor = "grabbing";
      else if (editor.interaction.kind === "move") canvas.style.cursor = "move";
      else if (editor.interaction.kind === "scale" || editor.interaction.kind === "scale_x" || editor.interaction.kind === "scale_y") canvas.style.cursor = editor.interaction.cursor || "nwse-resize";
      else if (editor.interaction.kind === "rotate") canvas.style.cursor = "grabbing";
      else canvas.style.cursor = "default";
      return;
    }
    const selected = getSelected();
    const geom = selected ? objectGeom(selected) : null;
    const h = handleHit(geom, p);
    canvas.style.cursor = h.cursor;
  }

  function updateSelectionMenu() {
    if (!selectionMenu) return;
    const selected = getSelected();
    if (!selected || editor.interaction) {
      selectionMenu.style.display = "none";
      return;
    }
    const menuMode = type === "stickers"
      ? "stickers"
      : `cutout:${editor.cutoutAspectOpen ? "open" : "closed"}`;
    if (editor.menuMode !== menuMode) {
      if (type === "stickers") {
        selectionMenu.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${ICON.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${ICON.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="duplicate" aria-label="Duplicate" data-tip="Duplicate">${ICON.duplicate}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${ICON.delete}</button>
        `;
      } else {
        const activeAspect = getCutoutAspectLabel(selected);
        selectionMenu.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${ICON.aspect}</button>
            <div class="pano-aspect-popover${editor.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
              <button class="pano-btn pano-aspect-choice${activeAspect === "1:1" ? " active" : ""}" data-action="aspect-set" data-aspect="1:1">1:1</button>
              <button class="pano-btn pano-aspect-choice${activeAspect === "4:3" ? " active" : ""}" data-action="aspect-set" data-aspect="4:3">4:3</button>
              <button class="pano-btn pano-aspect-choice${activeAspect === "3:2" ? " active" : ""}" data-action="aspect-set" data-aspect="3:2">3:2</button>
              <button class="pano-btn pano-aspect-choice${activeAspect === "16:9" ? " active" : ""}" data-action="aspect-set" data-aspect="16:9">16:9</button>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon" data-action="rotate-90" aria-label="Rotate 90°" data-tip="Rotate 90°">${ICON.rotate_90}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${ICON.delete}</button>
        `;
      }
      editor.menuMode = menuMode;
      editor.menuSize.measured = false;
      installTooltipHandlers(selectionMenu);
    }
    const geom = objectGeom(selected);
    if (!geom?.visible) {
      selectionMenu.style.display = "none";
      return;
    }
    const poly = geom.corners;
    const xs = poly.map((p) => p.x);
    const ys = poly.map((p) => p.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const maxY = Math.max(...ys);
    const prevDisplay = selectionMenu.style.display;
    const prevVisibility = selectionMenu.style.visibility;
    selectionMenu.style.display = "flex";
    selectionMenu.style.visibility = "hidden";
    const rect = selectionMenu.getBoundingClientRect();
    const measuredW = Math.round(Number(rect?.width || 0)) || selectionMenu.offsetWidth || editor.menuSize.w || 220;
    const measuredH = Math.round(Number(rect?.height || 0)) || selectionMenu.offsetHeight || editor.menuSize.h || 40;
    editor.menuSize.w = Number.isFinite(measuredW) && measuredW > 0 ? measuredW : 220;
    editor.menuSize.h = Number.isFinite(measuredH) && measuredH > 0 ? measuredH : 40;
    selectionMenu.style.display = prevDisplay;
    selectionMenu.style.visibility = prevVisibility;
    editor.menuSize.measured = true;
    const menuW = editor.menuSize.w;
    const menuH = editor.menuSize.h;
    const pad = 14;
    selectionMenu.style.display = "flex";
    let x = (minX + maxX) * 0.5 - menuW * 0.5;
    let y = maxY + 22;
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      selectionMenu.style.display = "none";
      return;
    }
    x = clamp(x, pad, canvas.width - menuW - pad);
    if (y + menuH > canvas.height - pad) {
      selectionMenu.style.display = "none";
      return;
    }
    selectionMenu.style.left = `${x}px`;
    selectionMenu.style.top = `${y}px`;
  }

  function hideTooltip() {
    if (!tooltipEl) return;
    if (tooltip.timer) {
      clearTimeout(tooltip.timer);
      tooltip.timer = 0;
    }
    tooltip.target = null;
    tooltipEl.classList.remove("show");
  }

  function showTooltipFor(el) {
    if (!tooltipEl || !el || !el.isConnected) return;
    const text = String(el.getAttribute("data-tip") || "").trim();
    if (!text) return;
    tooltipEl.textContent = text;
    const hostRect = stageWrap.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const pad = 8;
    const mw = tooltipEl.offsetWidth || 100;
    const mh = tooltipEl.offsetHeight || 24;
    let x = rect.left - hostRect.left + rect.width * 0.5 - mw * 0.5;
    let y = rect.top - hostRect.top - mh - 8;
    x = clamp(x, pad, Math.max(pad, hostRect.width - mw - pad));
    y = Math.max(pad, y);
    tooltipEl.style.left = `${x}px`;
    tooltipEl.style.top = `${y}px`;
    tooltipEl.classList.add("show");
  }

  function installTooltipHandlers(scope) {
    scope.querySelectorAll("[data-tip]").forEach((el) => {
      if (el.__panoTipBound) return;
      el.__panoTipBound = true;
      el.addEventListener("pointerenter", () => {
        tooltip.target = el;
        if (tooltip.timer) clearTimeout(tooltip.timer);
        tooltip.timer = window.setTimeout(() => {
          if (tooltip.target === el) showTooltipFor(el);
        }, 1000);
      });
      el.addEventListener("pointerleave", () => {
        if (tooltip.target === el) tooltip.target = null;
        hideTooltip();
      });
      el.addEventListener("pointerdown", hideTooltip);
    });
  }

  const viewController = createPanoInteractionController({
    getView: () => ({ yaw: editor.viewYaw, pitch: editor.viewPitch, fov: editor.viewFov }),
    setView: (next) => {
      editor.viewYaw = wrapYaw(Number(next.yaw || 0));
      editor.viewPitch = clamp(Number(next.pitch || 0), -89.9, 89.9);
      editor.viewFov = clamp(Number(next.fov || editor.viewFov || 100), 35, 140);
    },
    getInvert: () => ({
      x: state.ui_settings?.invert_view_x ? -1 : 1,
      y: state.ui_settings?.invert_view_y ? -1 : 1,
    }),
    getUnwrapRect,
    onInteraction: () => {
      runtime.dirty = true;
    },
  });

  canvas.onpointerdown = (e) => {
    const p = screenPos(e);
    editor.viewTween = null;
    viewController.state.inertia.active = false;
    viewController.state.inertia.vx = 0;
    viewController.state.inertia.vy = 0;
    if (e.button === 1) {
      e.preventDefault();
      editor.interaction = { kind: "view", last: p, lastTs: performance.now() };
      viewController.startDrag(p.x, p.y, e.pointerId, performance.now());
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      return;
    }
    if (e.button !== 0) return;
    if (readOnly) {
      if (editor.mode === "pano") {
        editor.interaction = { kind: "view", last: p, lastTs: performance.now() };
        viewController.startDrag(p.x, p.y, e.pointerId, performance.now());
        updateCursor(p);
        canvas.setPointerCapture(e.pointerId);
      }
      return;
    }

    const selected = getSelected();
    const selGeom = selected ? objectGeom(selected) : null;

    if (selected && selGeom?.visible) {
      const h = handleHit(selGeom, p);
      if (h.kind === "scale") {
        editor.interaction = {
          kind: "scale",
          item: selected,
          center: selGeom.center,
          startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
          startHFOV: Number(selected.hFOV_deg || 20),
          startVFOV: Number(selected.vFOV_deg || 20),
          cursor: h.cursor,
        };
        updateCursor(p);
        canvas.setPointerCapture(e.pointerId);
        return;
      }
      if (h.kind === "scale_x" || h.kind === "scale_y") {
        editor.interaction = {
          kind: h.kind,
          item: selected,
          center: selGeom.center,
          startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
          startHFOV: Number(selected.hFOV_deg || 20),
          startVFOV: Number(selected.vFOV_deg || 20),
          cursor: h.cursor,
          edge: h.edge,
        };
        updateCursor(p);
        canvas.setPointerCapture(e.pointerId);
        return;
      }
      if (h.kind === "rotate") {
        editor.interaction = {
          kind: "rotate",
          item: selected,
          center: selGeom.center,
          startRot: Number(selected.rot_deg || selected.roll_deg || 0),
          startAng: Math.atan2(p.y - selGeom.center.y, p.x - selGeom.center.x),
        };
        updateCursor(p);
        canvas.setPointerCapture(e.pointerId);
        return;
      }
      if (h.kind === "move") {
        editor.interaction = {
          kind: "move",
          item: selected,
          offset: { x: p.x - selGeom.center.x, y: p.y - selGeom.center.y },
        };
        updateCursor(p);
        canvas.setPointerCapture(e.pointerId);
        return;
      }
    }

    const hit = hitObjectAt(p);
    if (hit) {
      const isNewSelection = editor.selectedId !== hit.item.id;
      if (isNewSelection && editor.selectedId) {
        pushHistory();
        commitState();
      }
      editor.selectedId = hit.item.id;
      if (type === "cutout" && isNewSelection) editor.cutoutAspectOpen = false;
      if (type === "stickers") state.active.selected_sticker_id = hit.item.id;
      else state.active.selected_shot_id = hit.item.id;
      if (isNewSelection) updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      if (isNewSelection) {
        updateCursor(p);
        return;
      }
      editor.interaction = {
        kind: "move",
        item: hit.item,
        offset: { x: p.x - hit.geom.center.x, y: p.y - hit.geom.center.y },
      };
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      return;
    }

    const selectedBeforeClear = getSelected();
    if (selectedBeforeClear) {
      editor.panelLastValues = {
        yaw_deg: Number(selectedBeforeClear.yaw_deg || 0),
        pitch_deg: Number(selectedBeforeClear.pitch_deg || 0),
        hFOV_deg: Number(selectedBeforeClear.hFOV_deg || (type === "stickers" ? 30 : 90)),
        vFOV_deg: Number(selectedBeforeClear.vFOV_deg || (type === "stickers" ? 30 : 60)),
        rot_deg: Number(selectedBeforeClear.rot_deg || 0),
        roll_deg: Number(selectedBeforeClear.roll_deg || 0),
        out_w: Number(selectedBeforeClear.out_w || 1024),
        out_h: Number(selectedBeforeClear.out_h || 1024),
        aspect_id: getCutoutAspectLabel(selectedBeforeClear),
      };
    }
    const hadSelection = !!editor.selectedId;
    if (hadSelection) {
      pushHistory();
      commitState();
    }
    editor.selectedId = null;
    if (type === "cutout") editor.cutoutAspectOpen = false;
    if (type === "stickers") state.active.selected_sticker_id = null;
    else state.active.selected_shot_id = null;
    if (hadSelection) updateSidePanel();
    updateSelectionMenu();
    requestDraw();

    if (editor.mode === "pano") {
      editor.interaction = { kind: "view", last: p, lastTs: performance.now() };
      viewController.startDrag(p.x, p.y, e.pointerId, performance.now());
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
    }
  };

  canvas.onpointermove = (e) => {
    if (!editor.interaction) return;
    const p = screenPos(e);
    updateCursor(p);
    const it = editor.interaction;

    if (it.kind === "view") {
      const now = performance.now();
      viewController.moveDrag(p.x, p.y, editor.mode === "unwrap" ? "unwrap" : "pano", now);
      it.lastTs = now;
      it.last = p;
      requestDraw();
      return;
    }

    if (it.kind === "move") {
      const tx = p.x - it.offset.x;
      const ty = p.y - it.offset.y;
      if (editor.mode === "unwrap") {
        const r = getUnwrapRect();
        const nx = clamp((tx - r.x) / Math.max(r.w, 1), 0, 1);
        const ny = clamp((ty - r.y) / Math.max(r.h, 1), 0, 1);
        it.item.yaw_deg = wrapYaw(nx * 360 - 180);
        it.item.pitch_deg = clamp(90 - ny * 180, -90, 90);
      } else {
        const dir = screenToWorldDir(tx, ty);
        const yp = dirToYawPitch(dir);
        it.item.yaw_deg = yp.yaw;
        it.item.pitch_deg = yp.pitch;
      }
      requestDraw();
      return;
    }


    if (it.kind === "scale") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / it.startDist;
      it.item.hFOV_deg = clamp(it.startHFOV * ratio, 1, 179);
      it.item.vFOV_deg = clamp(it.startVFOV * ratio, 1, 179);
      requestDraw();
      return;
    }

    if (it.kind === "scale_x") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / it.startDist;
      it.item.hFOV_deg = clamp(it.startHFOV * ratio, 1, 179);
      requestDraw();
      return;
    }

    if (it.kind === "scale_y") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / it.startDist;
      it.item.vFOV_deg = clamp(it.startVFOV * ratio, 1, 179);
      requestDraw();
      return;
    }

    if (it.kind === "rotate") {
      const a = Math.atan2(p.y - it.center.y, p.x - it.center.x);
      let delta = (a - it.startAng) * RAD2DEG;
      let out = it.startRot - delta;
      if (e.shiftKey) out = Math.round(out / 45) * 45;
      const key = type === "stickers" ? "rot_deg" : "roll_deg";
      it.item[key] = out;
      requestDraw();
    }
  };

  canvas.onpointerup = () => {
    const ended = editor.interaction;
    if (editor.interaction && editor.interaction.kind !== "view") {
      pushHistory();
      commitState();
      node.setDirtyCanvas(true, true);
      syncSidePanelControls();
      editor.hqFrames = 1;
      updateSelectionMenu();
      requestDraw();
    }
    editor.interaction = null;
    if (ended && ended.kind === "view") {
      viewController.endDrag(performance.now());
    }
    canvas.style.cursor = editor.mode === "pano" ? "grab" : "default";
    updateSelectionMenu();
    requestDraw();
  };

  canvas.onpointercancel = () => {
    if (editor.interaction?.kind === "view") {
      viewController.endDrag(performance.now());
    }
    editor.interaction = null;
    canvas.style.cursor = editor.mode === "pano" ? "grab" : "default";
  };

  canvas.onauxclick = (e) => {
    if (e.button === 1) e.preventDefault();
  };

  canvas.onmousemove = (e) => {
    if (editor.interaction) return;
    const p = screenPos(e);
    updateCursor(p);
  };

  canvas.onwheel = (e) => {
    if (editor.mode !== "pano") return;
    if (viewController.applyWheelEvent(e)) requestDraw();
    e.preventDefault();
  };

  canvas.ondragover = (e) => {
    if (type !== "stickers" || readOnly) return;
    e.preventDefault();
    setDropCue(true);
  };

  canvas.ondrop = (e) => {
    if (type !== "stickers" || readOnly) return;
    e.preventDefault();
    e.stopPropagation();
    dragCue.depth = 0;
    setDropCue(false);
    const files = Array.from(e.dataTransfer?.files || []);
    const file = files.find((f) => isImageFile(f));
    if (!file) return;
    void addImageStickerFromFile(file);
  };

  const onWindowDragEnter = (e) => {
    if (type !== "stickers" || readOnly) return;
    if (!dragHasImageFiles(e)) return;
    dragCue.depth += 1;
    setDropCue(true);
    e.preventDefault();
  };
  const onWindowDragOver = (e) => {
    if (type !== "stickers" || readOnly) return;
    if (!dragCue.active && dragHasImageFiles(e)) setDropCue(true);
    if (dragCue.active) e.preventDefault();
  };
  const onWindowDragLeave = (e) => {
    if (type !== "stickers" || readOnly) return;
    if (!dragCue.active) return;
    dragCue.depth = Math.max(0, dragCue.depth - 1);
    const leftWindow = (Number(e.clientX) <= 0 && Number(e.clientY) <= 0);
    if (dragCue.depth === 0 || leftWindow) setDropCue(false);
  };
  const onWindowDrop = (e) => {
    if (type !== "stickers" || readOnly) return;
    dragCue.depth = 0;
    setDropCue(false);
    if (dragHasImageFiles(e)) e.preventDefault();
  };
  window.addEventListener("dragenter", onWindowDragEnter, true);
  window.addEventListener("dragover", onWindowDragOver, true);
  window.addEventListener("dragleave", onWindowDragLeave, true);
  window.addEventListener("drop", onWindowDrop, true);

  viewBtns.forEach((btn) => {
    btn.onclick = () => {
      editor.mode = btn.dataset.view;
      viewBtns.forEach((b) => b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
      if (viewToggle) viewToggle.setAttribute("data-selected", editor.mode === "unwrap" ? "unwrap" : "pano");
      canvas.style.cursor = editor.mode === "pano" ? "grab" : "default";
      requestDraw();
    };
  });

  const undoBtn = root.querySelector("[data-action='undo']");
  if (undoBtn) {
    undoBtn.onclick = () => {
      if (readOnly) return;
      restoreHistory(-1);
    };
  }
  const redoBtn = root.querySelector("[data-action='redo']");
  if (redoBtn) {
    redoBtn.onclick = () => {
      if (readOnly) return;
      restoreHistory(1);
    };
  }
  const addBtn = root.querySelector("[data-action='add']");
  if (addBtn) {
    addBtn.onclick = () => {
      if (readOnly) return;
      (type === "stickers" ? addImageSticker() : addCutoutFrame());
    };
  }
  if (lookAtFrameBtn) {
    lookAtFrameBtn.onclick = () => {
      if (getList().length === 0) return;
      const target = getSelected() || getList()[0];
      if (!target) return;
      editor.selectedId = target.id || null;
      state.active.selected_shot_id = editor.selectedId;
      const targetYaw = wrapYaw(Number(target.yaw_deg || 0));
      const targetPitch = clamp(Number(target.pitch_deg || 0), -89.9, 89.9);
      startViewTween(targetYaw, targetPitch, editor.viewFov);
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
    };
  }
  const clearBtn = root.querySelector("[data-action='clear']");
  if (clearBtn) {
    clearBtn.onclick = () => {
      if (readOnly) return;
      clearAll();
    };
  }
  const applyBtn = root.querySelector("[data-action='save']");
  if (applyBtn) applyBtn.onclick = () => {
    if (readOnly) return;
    apply();
  };
  root.querySelector("[data-action='reset-view']").onclick = () => {
    startViewTween(0, 0, 100, 180, 680);
  };
  const gridBtn = root.querySelector("[data-action='toggle-grid']");
  const syncGridToggleButton = () => {
    if (!gridBtn) return;
    const visible = !!editor.showGrid;
    gridBtn.innerHTML = visible ? ICON.eye : ICON.eye_dashed;
    gridBtn.setAttribute("aria-pressed", visible ? "true" : "false");
    gridBtn.setAttribute("aria-label", visible ? "Hide Grid" : "Show Grid");
    gridBtn.setAttribute("data-tip", visible ? "Hide grid" : "Show grid");
  };
  if (gridBtn) {
    syncGridToggleButton();
    gridBtn.onclick = () => {
      editor.showGrid = !editor.showGrid;
      setNodeGridVisibility(node?.id, editor.showGrid);
      syncGridToggleButton();
      requestDraw();
    };
  }
  const syncFullscreenButton = () => {
    if (!fullscreenBtn) return;
    const active = !!editor.fullscreen;
    fullscreenBtn.innerHTML = active ? ICON.fullscreen_close : ICON.fullscreen;
    fullscreenBtn.setAttribute("aria-label", active ? "Exit Fullscreen" : "Fullscreen");
    fullscreenBtn.setAttribute("data-tip", active ? "Exit fullscreen" : "Fullscreen");
  };
  const setFullscreenState = (active) => {
    const on = !!active;
    if (editor.fullscreen === on) return;
    editor.fullscreen = on;
    root.classList.toggle("pano-modal-fullscreen", on);
    if (on) {
      editor.fullscreenPrevShowGrid = !!editor.showGrid;
      editor.showGrid = false;
    } else if (editor.fullscreenPrevShowGrid !== null) {
      editor.showGrid = !!editor.fullscreenPrevShowGrid;
      editor.fullscreenPrevShowGrid = null;
    }
    syncGridToggleButton();
    syncFullscreenButton();
    requestDraw();
  };
  const fullscreenTarget = embedded ? root : overlay;
  const isOverlayFullscreen = () => document.fullscreenElement === fullscreenTarget;
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenEnabled) {
        setFullscreenState(!editor.fullscreen);
        return;
      }
      if (!isOverlayFullscreen()) {
        await fullscreenTarget?.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch {
      setFullscreenState(!editor.fullscreen);
    }
  };
  const onFullscreenChange = () => {
    if (document.fullscreenEnabled) {
      setFullscreenState(isOverlayFullscreen());
    }
  };
  document.addEventListener("fullscreenchange", onFullscreenChange);
  if (fullscreenBtn) {
    syncFullscreenButton();
    fullscreenBtn.onclick = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      toggleFullscreen();
    };
  }
  const syncOutputPreviewToggleButton = () => {
    if (!outputPreviewToggleBtn) return;
    const expanded = !!editor.outputPreviewExpanded;
    outputPreviewToggleBtn.innerHTML = expanded ? ICON.fullscreen_close : ICON.fullscreen;
    outputPreviewToggleBtn.setAttribute("aria-label", expanded ? "Reduce Preview" : "Expand Preview");
    outputPreviewToggleBtn.setAttribute("data-tip", expanded ? "Reduce preview" : "Expand preview");
  };
  if (outputPreviewToggleBtn) {
    syncOutputPreviewToggleButton();
    outputPreviewToggleBtn.onclick = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      const nextExpanded = !editor.outputPreviewExpanded;
      editor.outputPreviewExpanded = nextExpanded;
      editor.outputPreviewAnimFrom = editor.outputPreviewAnim;
      editor.outputPreviewAnimTo = nextExpanded ? 1 : 0;
      editor.outputPreviewAnimStartTs = performance.now();
      syncOutputPreviewToggleButton();
      requestDraw();
    };
  }
  selectionMenu.addEventListener("click", (ev) => {
    const target = ev.target.closest("[data-action]");
    if (!target) return;
    const action = target.getAttribute("data-action");
    if (readOnly) return;
    if (action === "aspect") {
      editor.cutoutAspectOpen = !editor.cutoutAspectOpen;
      editor.menuSize.measured = false;
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (action === "aspect-set") {
      const selected = getSelected();
      if (!selected) return;
      const aspect = String(target.getAttribute("data-aspect") || "1:1");
      applyCutoutAspect(selected, aspect);
      editor.cutoutAspectOpen = false;
      editor.menuSize.measured = false;
      syncSidePanelControls();
      pushHistory();
      commitAndRefreshNode();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (action === "rotate-90") {
      const selected = getSelected();
      if (!selected) return;
      rotateCutoutAspect90(selected);
      editor.cutoutAspectOpen = false;
      editor.menuSize.measured = false;
      syncSidePanelControls();
      pushHistory();
      commitAndRefreshNode();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (action === "bring-front") {
      bringSelectedToFront();
      return;
    }
    if (action === "send-back") {
      sendSelectedToBack();
      return;
    }
    if (action === "duplicate") {
      duplicateSelected();
      return;
    }
    if (action === "delete") {
      deleteSelected();
      return;
    }
    requestDraw();
  });

  const closeEditor = () => {
    if (document.fullscreenElement === fullscreenTarget) {
      document.exitFullscreen?.().catch(() => { });
    }
    document.removeEventListener("fullscreenchange", onFullscreenChange);
    node.__panoLiveStateOverride = null;
    node.__panoDomPreview?.requestDraw?.();
    node.graph?.setDirtyCanvas?.(true, true);
    app?.canvas?.setDirty?.(true, true);
    hideTooltip();
    stopRenderLoop();
    setDropCue(false);
    window.removeEventListener("keydown", onEscClose, true);
    window.removeEventListener("keydown", onDeleteKey, true);
    window.removeEventListener("dragenter", onWindowDragEnter, true);
    window.removeEventListener("dragover", onWindowDragOver, true);
    window.removeEventListener("dragleave", onWindowDragLeave, true);
    window.removeEventListener("drop", onWindowDrop, true);
    if (!embedded) {
      overlay?.remove();
    } else if (destroyOnClose) {
      root.remove();
    }
    options?.onClose?.({ node, type, root, overlay, embedded });
  };
  const onEscClose = (ev) => {
    if (ev.key !== "Escape") return;
    if (editor.fullscreen && document.fullscreenElement === fullscreenTarget) {
      document.exitFullscreen?.().catch(() => { });
      return;
    }
    if (editor.fullscreen) {
      setFullscreenState(false);
      return;
    }
    closeEditor();
  };
  const onDeleteKey = (ev) => {
    const key = String(ev.key || "");
    const code = String(ev.code || "");
    const keyCode = Number(ev.keyCode || 0);
    const isDeleteKey = key === "Delete" || code === "Delete" || keyCode === 46;
    const isBackspaceKey = key === "Backspace" || code === "Backspace" || keyCode === 8;
    if (!isDeleteKey && !isBackspaceKey) return;
    const t = ev.target;
    const tag = (t?.tagName || "").toUpperCase();
    if (tag === "INPUT" || tag === "TEXTAREA" || t?.isContentEditable) return;
    const selected = getSelected();
    if (!selected) return;
    deleteSelected();
    ev.preventDefault();
    ev.stopPropagation();
  };
  window.addEventListener("keydown", onEscClose, true);
  window.addEventListener("keydown", onDeleteKey, true);
  if (overlay) {
    overlay.addEventListener("pointerdown", (ev) => {
      if (ev.target === overlay) closeEditor();
    });
  }

  installTooltipHandlers(root);
  applyInitialCutoutFocus();
  void migrateLegacyEmbeddedAssets();
  pushHistory();
  updateSidePanel();
  syncLookAtFrameButtonState();
  syncCanvasSize();
  canvas.style.cursor = editor.mode === "pano" ? "grab" : "default";
  requestDraw();
  runtime.rafId = requestAnimationFrame(tick);
  return { root, overlay, close: closeEditor, state, editor, requestDraw };
}

function createHostedWidget(name, value, onChange = null) {
  return {
    name,
    value,
    callback: onChange,
  };
}

function parseInitialStateText(initialState) {
  if (typeof initialState === "string") return initialState;
  if (initialState && typeof initialState === "object") return JSON.stringify(initialState);
  return "";
}

function createHostedNode(type, config = {}) {
  const initialText = parseInitialStateText(config.initialState);
  const parsed = parseState(initialText);
  const outputPreset = Number(parsed?.output_preset || 2048);
  const bgColor = String(parsed?.bg_color || "#00ff00");
  const node = {
    id: `embedded_${type}`,
    comfyClass: type === "cutout" ? "PanoramaCutout" : "PanoramaStickers",
    title: config.title || (type === "cutout" ? "Panorama Cutout" : "Panorama Stickers"),
    inputs: [],
    widgets: [],
    graph: { setDirtyCanvas: () => {} },
    setDirtyCanvas: () => {},
    __panoHostedErpSrc: "",
  };
  const stateWidget = createHostedWidget(STATE_WIDGET, initialText, (text) => {
    if (typeof config.onStateChange !== "function") return;
    const next = parseState(String(text || "")) || parseState("{}") || {};
    config.onStateChange(next, { source: "editor" });
  });
  node.widgets.push(createHostedWidget("output_preset", outputPreset));
  node.widgets.push(createHostedWidget("bg_color", bgColor));
  node.widgets.push(stateWidget);
  return { node, stateWidget };
}

export function createEmbeddedEditor(hostOrNode, typeOrConfig, maybeOptions = {}) {
  if (typeof typeOrConfig === "string") {
    return createNodeBackedEditor(hostOrNode, typeOrConfig, maybeOptions);
  }

  const host = hostOrNode instanceof HTMLElement ? hostOrNode : document.createElement("div");
  const config = (typeOrConfig && typeof typeOrConfig === "object") ? typeOrConfig : {};
  const type = String(config.type || "stickers") === "cutout" ? "cutout" : "stickers";
  const { node, stateWidget } = createHostedNode(type, config);
  const runtimeState = { erpSrc: "", erpImg: null };
  const instance = createNodeBackedEditor(node, type, {
    embedded: true,
    mount: host,
    readOnly: config.readOnly,
    hideSidebar: config.hideSidebar,
    hideFooter: config.hideFooter ?? true,
    adapters: config.adapters,
    onClose: config.onClose,
    erpImageResolver: () => {
      const custom = typeof config.erpImageResolver === "function" ? config.erpImageResolver() : null;
      if (custom) return custom;
      return runtimeState.erpImg || runtimeState.erpSrc || null;
    },
  });

  if (typeof config.onStateChange === "function") {
    const initialParsed = parseState(String(stateWidget.value || "")) || parseState("{}") || {};
    config.onStateChange(initialParsed, { source: "init" });
  }

  return {
    root: instance.root,
    getState() {
      return JSON.parse(JSON.stringify(instance.state || {}));
    },
    setState(nextState) {
      const text = parseInitialStateText(nextState);
      stateWidget.value = text;
      const parsed = parseState(
        text,
        Number(node.widgets.find((w) => w.name === "output_preset")?.value || 2048),
        String(node.widgets.find((w) => w.name === "bg_color")?.value || "#00ff00"),
      );
      Object.keys(instance.state || {}).forEach((key) => {
        delete instance.state[key];
      });
      Object.assign(instance.state, parsed);
      stateWidget.callback?.(text);
      instance.requestDraw();
    },
    setErpPreview(src) {
      const nextSrc = typeof src === "string" ? src : "";
      runtimeState.erpSrc = nextSrc;
      if (!nextSrc) {
        runtimeState.erpImg = null;
        instance.requestDraw();
        return;
      }
      if (runtimeState.erpImg && String(runtimeState.erpImg.src || "") === nextSrc) {
        instance.requestDraw();
        return;
      }
      const img = new Image();
      img.onload = () => {
        if (runtimeState.erpImg !== img) return;
        instance.requestDraw();
      };
      img.src = nextSrc;
      runtimeState.erpImg = img;
      instance.requestDraw();
    },
    requestDraw() {
      instance.requestDraw();
    },
    destroy() {
      instance.close();
    },
  };
}

function showEditor(node, type, options = {}) {
  return createNodeBackedEditor(node, type, { ...options, embedded: false });
}

function installEditorButton(nodeType, nodeData, matchType, buttonText) {
  const cleanupPreviewBindings = (node) => {
    try { node.__panoDomRestore?.(); } catch { }
    try { node.__panoLegacyRestore?.(); } catch { }
    node.__panoDomPreview = null;
    node.__panoLegacyPreviewHooked = false;
    node.__panoPreviewHooked = false;
    node.__panoPreviewAttached = false;
    node.__panoPreviewMountKey = null;
  };

  function installOrUpdate(node) {
    const mountKey = `editor_btn|${matchType}`;
    const alreadyAttached = node.__panoPreviewAttached === true && node.__panoPreviewMountKey === mountKey;

    // Avoid redundant cleanup/re-attach if already attached with the same key
    if (alreadyAttached) return;

    cleanupPreviewBindings(node);
    hideWidget(node, STATE_WIDGET);

    const sw = getWidget(node, STATE_WIDGET);
    if (sw && !sw.__panoPreviewPatchedCb) {
      sw.__panoPreviewPatchedCb = true;
      const prevCb = sw.callback;
      sw.callback = (v) => {
        const r = prevCb ? prevCb(v) : undefined;
        // Only trigger soft repaint, avoid forcing a full workflow persistence on every move if storage is tight
        node.setDirtyCanvas?.(true, false);
        return r;
      };
    }
    const bg = getWidget(node, "bg_color");
    if (bg && (bg.value == null || String(bg.value).trim() === "" || String(bg.value).toLowerCase() === "#000000")) {
      bg.value = "#00ff00";
      bg.callback?.("#00ff00");
    }

    if (matchType === "PanoramaStickers") {
      ensureActionButtonWidget(node, buttonText, () => showEditor(node, "stickers"));
      if (ENABLE_STICKERS_NODE_PREVIEW) {
        attachStickersNodePreview(node, {
          enabled: true,
          buttonText,
          onOpen: () => showEditor(node, "stickers"),
        });
        // Respect user-sized nodes; initialize only when preview is enabled and size is invalid.
        if (!Array.isArray(node.size) || node.size[0] < 10 || node.size[1] < 10) {
          node.size = [360, 260];
        }
      } else {
        // Without node preview, let LiteGraph size the node from widgets only.
        node.__panoPreviewAttached = true;
        node.__panoPreviewMountKey = mountKey;
        return;
      }
      node.__panoPreviewAttached = true;
      node.__panoPreviewMountKey = mountKey;
      return;
    }

    ensureActionButtonWidget(node, buttonText, () => showEditor(node, "cutout"));
    attachCutoutPreview(node, {
      buttonText,
      onOpen: () => showEditor(node, "cutout"),
    });

    if (!Array.isArray(node.size) || node.size[0] < 10 || node.size[1] < 10) {
      node.size = [360, 260];
    }

    node.__panoPreviewAttached = true;
    node.__panoPreviewMountKey = mountKey;
  }

  const onNodeCreated = nodeType.prototype.onNodeCreated;
  nodeType.prototype.onNodeCreated = function () {
    const r = onNodeCreated ? onNodeCreated.apply(this, arguments) : undefined;
    installOrUpdate(this);
    return r;
  };

  const onConfigure = nodeType.prototype.onConfigure;
  nodeType.prototype.onConfigure = function () {
    const r = onConfigure ? onConfigure.apply(this, arguments) : undefined;
    if (this.widgets) installOrUpdate(this);
    return r;
  };

  const onAdded = nodeType.prototype.onAdded;
  nodeType.prototype.onAdded = function () {
    const r = onAdded ? onAdded.apply(this, arguments) : undefined;
    if (this.widgets) installOrUpdate(this);
    return r;
  };
}

function installStandalonePreviewNode(nodeType) {
  panoEditorDebug("install.standalone_preview_node", {
    nodeTypeTitle: String(nodeType?.title || ""),
    nodeTypeComfyClass: String(nodeType?.comfyClass || nodeType?.prototype?.comfyClass || ""),
    prototypeSize: Array.isArray(nodeType?.prototype?.size) ? [...nodeType.prototype.size] : null,
  });
  if (!Array.isArray(nodeType?.prototype?.size) || nodeType.prototype.size[0] < 100 || nodeType.prototype.size[1] < 100) {
    nodeType.prototype.size = [360, 260];
  }
}

function installStandalonePreviewInstance(node) {
  if (!node) return;
  if (node.__panoStandaloneInstallDone) return;
  if (node.__panoStandaloneInstallProbeActive) return;
  node.__panoStandaloneInstallProbeActive = true;

  const tryInstall = () => {
    const nodeId = Number(node?.id ?? -1);
    const ready = nodeId >= 0 && !!node?.graph;
    const tries = Number(node.__panoStandaloneInstallProbeTries || 0) + 1;
    node.__panoStandaloneInstallProbeTries = tries;

    panoEditorDebug("install.standalone_preview_instance.probe", {
      tries,
      nodeId,
      ready,
      hasGraph: !!node?.graph,
      size: Array.isArray(node?.size) ? [...node.size] : null,
    });

    if (!ready && tries < 40) {
      requestAnimationFrame(tryInstall);
      return;
    }

    panoEditorDebug("install.standalone_preview_instance", {
      nodeId: node?.id ?? null,
      nodeType: String(node?.comfyClass || node?.type || node?.title || ""),
      size: Array.isArray(node?.size) ? [...node.size] : null,
      deferred: !ready,
      tries,
    });
    ensureActionButtonWidget(node, "Open Preview", () => showEditor(node, "stickers", { readOnly: true, hideSidebar: false }));
    attachPreviewNode(node, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (n) => showEditor(n, "stickers", { readOnly: true, hideSidebar: false }),
    });
    node.__panoStandaloneInstallDone = true;
    node.__panoStandaloneInstallProbeActive = false;
  };

  requestAnimationFrame(tryInstall);
}

if (app?.registerExtension) {
  app.registerExtension({
    name: "ComfyUI.PanoramaSuite.Editor",
    beforeRegisterNodeDef(nodeType, nodeData) {
      const name = String(nodeData?.name || "");
      panoEditorDebug("register.node", {
        nodeDataName: name,
        nodeDataDisplayName: String(nodeData?.display_name || ""),
        nodeTypeTitle: String(nodeType?.title || ""),
        nodeTypeComfyClass: String(nodeType?.comfyClass || nodeType?.prototype?.comfyClass || ""),
      });
      if (name === "PanoramaStickers" || name === "Panorama Stickers") {
        installEditorButton(nodeType, nodeData, "PanoramaStickers", "Open Stickers Editor");
      }
      if (name === "PanoramaCutout" || name === "Panorama Cutout") {
        installEditorButton(nodeType, nodeData, "PanoramaCutout", "Open Cutout Editor");
      }
      if (isPanoramaPreviewNodeName(name)) {
        installStandalonePreviewNode(nodeType);
      }
    },
    nodeCreated(node) {
      const name = String(node?.comfyClass || node?.type || node?.title || "");
      if (!isPanoramaPreviewNodeName(name)) return;
      installStandalonePreviewInstance(node);
    },
  });
}
