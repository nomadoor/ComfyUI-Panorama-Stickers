import { clampSafe as clamp } from "./pano_math.js";

const DEG2RAD = Math.PI / 180;

function finiteOr(v, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : Number(fallback);
}

function vec3(x, y, z) {
  return { x, y, z };
}

function add(a, b) {
  return vec3(a.x + b.x, a.y + b.y, a.z + b.z);
}

function mul(a, s) {
  return vec3(a.x * s, a.y * s, a.z * s);
}

function norm(a) {
  const l = Math.hypot(a.x, a.y, a.z) || 1e-8;
  return vec3(a.x / l, a.y / l, a.z / l);
}

function yawPitchToDir(yawDeg, pitchDeg) {
  const yaw = Number(yawDeg || 0) * DEG2RAD;
  const pitch = Number(pitchDeg || 0) * DEG2RAD;
  const cp = Math.cos(pitch);
  return vec3(cp * Math.sin(yaw), Math.sin(pitch), cp * Math.cos(yaw));
}

function cross(a, b) {
  return vec3(
    a.y * b.z - a.z * b.y,
    a.z * b.x - a.x * b.z,
    a.x * b.y - a.y * b.x,
  );
}

function cameraBasis(yawDeg, pitchDeg, rollDeg = 0) {
  const fwd = yawPitchToDir(yawDeg, pitchDeg);
  const worldUp = vec3(0, 1, 0);
  let right = cross(worldUp, fwd);
  if (Math.hypot(right.x, right.y, right.z) < 1e-6) right = vec3(1, 0, 0);
  right = norm(right);
  let up = norm(cross(fwd, right));
  const rr = Number(rollDeg || 0) * DEG2RAD;
  const cr = Math.cos(rr);
  const sr = Math.sin(rr);
  const r2 = add(mul(right, cr), mul(up, sr));
  const u2 = add(mul(right, -sr), mul(up, cr));
  return { fwd, right: norm(r2), up: norm(u2) };
}

function expandTri(d0, d1, d2, px = 0.45) {
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

function drawImageTri(ctx, img, s0, s1, s2, d0, d1, d2) {
  const den = (s0.x * (s1.y - s2.y) + s1.x * (s2.y - s0.y) + s2.x * (s0.y - s1.y));
  if (Math.abs(den) < 1e-6) return false;
  const [e0, e1, e2] = expandTri(d0, d1, d2, Number(ctx.__panoTriExpandPx || 0.45));
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

function getWrappedErpCanvas(owner, img) {
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

export function getCutoutShotParams(shot) {
  const s = shot || {};
  const yaw = finiteOr(s.yaw_deg, 0);
  const pitch = finiteOr(s.pitch_deg, 0);
  const roll = finiteOr((s.roll_deg ?? s.rot_deg), 0);
  const hfov = clamp(finiteOr(s.hFOV_deg, 90), 1, 179);
  const vfov = clamp(finiteOr(s.vFOV_deg, 60), 1, 179);
  const aspectRaw = Math.tan((hfov * DEG2RAD) * 0.5) / Math.max(1e-6, Math.tan((vfov * DEG2RAD) * 0.5));
  const aspect = clamp(aspectRaw, 0.1, 10.0);
  return {
    yaw,
    pitch,
    roll,
    hfov,
    vfov,
    aspect,
  };
}

export function drawCutoutProjectionPreview(ctx, owner, img, rect, shot, quality = "balanced") {
  const setStats = (stats = {}) => {
    owner.__panoCutoutProjectionStats = {
      drawnTriCount: 0,
      Nu: 0,
      Nv: 0,
      rectW: finiteOr(rect?.w, 0),
      rectH: finiteOr(rect?.h, 0),
      imageW: finiteOr(img?.naturalWidth || img?.width, 0),
      imageH: finiteOr(img?.naturalHeight || img?.height, 0),
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
  const rw = finiteOr(rect.w, 0);
  const rh = finiteOr(rect.h, 0);
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
  const source = getWrappedErpCanvas(owner, img) || img;
  const { yaw, pitch, roll, hfov, vfov } = getCutoutShotParams(shot);
  const basis = cameraBasis(yaw, pitch, roll);
  const tanX = Math.tan((hfov * DEG2RAD) * 0.5);
  const tanY = Math.tan((vfov * DEG2RAD) * 0.5);
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
      const d = norm(add(add(basis.fwd, mul(basis.right, nx)), mul(basis.up, ny)));
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
      if (drawImageTri(ctx, source, s00, s10, s11, p00, p10, p11)) drawnTriCount += 1;
      if (drawImageTri(ctx, source, s00, s11, s01, p00, p11, p01)) drawnTriCount += 1;
    }
  }
  setStats({
    drawnTriCount,
    Nu,
    Nv,
    rectW: rw,
    rectH: rh,
    imageW: iw,
    imageH: ih,
    reason: "ok",
  });
  return drawnTriCount > 0;
}
