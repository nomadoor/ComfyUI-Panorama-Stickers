// Small pure helpers of the Panorama editor: easing, vectors, 2D geometry, colors and node values.
import { LASSO_CURSOR_SIZE, RAD2DEG } from "./constants.js";
// The paint colors and ids belong to the lower paint strokes (pano_paint_strokes.js).
export { cloneColor, colorToCss, colorsApproximatelyEqual, hsv01ToRgb, isPresetPaintColor, makePaintId, rgb01ToHsv } from "../pano_paint_strokes.js";
import { clamp, wrapYaw } from "../pano_math.js";
// The 2D point and polygon tests belong to the lower math (pano_math.js).
export { dist2, distToSegment2, pointInPoly } from "../pano_math.js";

export function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
export function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function smoothstep(edge0, edge1, x) {
  const t = clamp((Number(x || 0) - edge0) / Math.max(edge1 - edge0, 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
}

export function easeInCubic(t) {
  return t * t * t;
}
export function vec3(x, y, z) { return { x, y, z }; }
export function add(a, b) { return vec3(a.x + b.x, a.y + b.y, a.z + b.z); }
export function mul(a, s) { return vec3(a.x * s, a.y * s, a.z * s); }
export function dot(a, b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
export function norm(a) {
  const l = Math.hypot(a.x, a.y, a.z) || 1e-8;
  return vec3(a.x / l, a.y / l, a.z / l);
}
export function dirToYawPitch(d) {
  return {
    yaw: wrapYaw(Math.atan2(d.x, d.z) * RAD2DEG),
    pitch: clamp(Math.asin(clamp(d.y, -1, 1)) * RAD2DEG, -90, 90),
  };
}
export function lerp(a, b, t) {
  return a + (b - a) * t;
}
export function svgToDataUrl(svg) {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
let lassoCursorSvgCache = { fillStyle: "", url: "" };
export function getLassoCursorBackground(fillStyle, borderColorOuter, borderColorInner) {
  if (lassoCursorSvgCache.url && lassoCursorSvgCache.fillStyle === String(fillStyle || "")) {
    return lassoCursorSvgCache.url;
  }
  const url = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="${LASSO_CURSOR_SIZE}" height="${LASSO_CURSOR_SIZE}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${fillStyle}" stroke="${borderColorOuter}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${fillStyle}" stroke="${borderColorInner}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  lassoCursorSvgCache = { fillStyle: String(fillStyle || ""), url };
  return url;
}
export function cloneJson(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}
export function formatParamValue(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return "0";
  return Number(n.toFixed(3)).toString();
}

// The widget named `name`, or the first of the names `name` (a list) the node has, or null.
export function getWidget(node, name) {
  for (const each of Array.isArray(name) ? name : [name]) {
    const widget = node.widgets?.find((w) => w.name === each);
    if (widget) return widget;
  }
  return null;
}
export function getEditorNodeTitle(node, type) {
  const rawType = String(node?.comfyClass || node?.type || node?.title || "").trim();
  const titleMap = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStudio: "Panorama Studio",
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
export function uid(prefix) { return `${prefix}_${Math.random().toString(16).slice(2, 10)}`; }

export function parseOutputPresetValue(v, fallback = 2048) {
  if (typeof v === "number" && Number.isFinite(v)) return Math.round(v);
  const s = String(v ?? "").trim();
  if (!s) return fallback;
  const head = s.includes("x") ? s.split("x", 1)[0].trim() : s;
  const n = Number(head);
  return Number.isFinite(n) ? Math.round(n) : fallback;
}

export function isAutoOutputPresetValue(v) {
  const s = String(v ?? "").trim().toLowerCase();
  return s === "auto" || s === "bg" || s === "background";
}

export function getMediaWidthForSizing(media) {
  const width = Number(media?.naturalWidth || media?.videoWidth || media?.width || 0);
  return Number.isFinite(width) && width > 0 ? Math.round(width) : null;
}

export function logPaintDebug(phase, payload) {
  void phase;
  void payload;
  return;
}
