import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { createApp, reactive } from "vue";
import {
  attachCutoutPreview,
  attachPreviewNode,
  attachStickersNodePreview,
} from "./pano_node_preview.js";
import { isPanoramaPreviewNodeName } from "./pano_preview_identity.js";
import { createPanoInteractionController } from "./pano_interaction_controller.js";
import { createPanoramaRenderCore } from "./pano_render_core.js";
import { clamp, wrapYaw, shortestYawDelta } from "./pano_math.js";
import { BRUSH_PRESETS, DEFAULT_BRUSH_PRESET_ID, applyPresetToStroke } from "./pano_brush_presets.js";
import { createHistoryController } from "./pano_paint_history.js";
import { createPaintEngineManager } from "./pano_paint_engine.js";
import { normalizePaintingState } from "./pano_paint_types.js";
import {
  makePanoEditorHistorySnapshot,
  normalizeCoverageValue,
  parsePanoEditorState,
} from "./pano_editor_state.js";
import {
  buildCutoutViewParamsFromShot,
  HIDDEN_PREVIEW_OPACITY,
  buildPanoramaViewParamsFromEditor,
  buildStickerSceneFromState,
  buildStickerTexturesFromState,
} from "./pano_gl_scene.js";
import { drawCutoutProjectionPreview } from "./pano_cutout_projection.js";
import { createCutoutCamera } from "./pano_cutout_camera.js";
import {
  contextHalfExtentsPx,
  deriveCutoutAspectFromFov,
  deriveCutoutAspectLabelFromFov,
  deriveHorizontalFovDeg,
  aspectFitGateSize,
  fitFocalPx,
  fovPairForGate,
  gateRectFromFocal,
  getCutoutAspectLabel,
  getCutoutCameraParams,
  normalizeCutoutShotItem,
  resolveFrameRollDeg,
  scaleCutoutFovPair,
  shortestAngleDeltaRad,
} from "./pano_cutout_view_math.js";
import { buildPanoramaCompositeDescriptor } from "./pano_render_descriptors.js";
import {
  buildEditorSidePanelModel,
  buildPaintDockModel,
  buildPreviewSidePanelModel,
  buildSelectionMenuModel,
  buildUiSettingsModel,
  patchUiButton,
} from "./pano_editor_ui_state.js";
import PanoModal from "./components/PanoModal.vue";
import { buildModalShellPreset } from "./modal_shell_presets.js";
import { ICON } from "./icons.js";
import {
  IMAGE_FAILED,
  IMAGE_LOADING,
  IMAGE_READY,
  getImageLoadState,
  isImageLoadFailed,
  markImageFailed,
  markImageLoading,
  markImageReady,
  stageImageStatus,
} from "./pano_image_state.js";
import { createComfyMediaAdapter } from "./pano_comfy_media.js";
import {
  createPanoEditorExtension,
  queuePendingStickerOperation,
} from "./pano_editor_extension.js";

const STATE_WIDGET = "state_json";
const EXTERNAL_STICKER_ID = "sticker_image_1";
const EXTERNAL_STICKER_SOURCE_KIND = "external_image";
const EXTERNAL_STICKER_PREVIEW_KEY = "pano_sticker_input_images";
const ENABLE_STICKERS_NODE_PREVIEW = false;
const PAINT_COLOR_SWATCHES = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } },
];
const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;
// Fraction of the UI-safe rect the camera gate fills. The gate is always
// aspect-fitted to that rect, so every aspect gets the largest frame the
// viewport allows. 1 means "touch the safe edges"; the safe rect already
// carries the padding that keeps the gate clear of the floating UI.
const FRAME_GATE_OCCUPANCY = 1;
const CUTOUT_FRAME_ACCENT = "rgb(255, 221, 87)";
const FRAME_ROLL_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`;
// Vertical room kept for `.pano-floating-right` when measuring the Frame safe
// rect: its CSS bottom offset plus its collapsed min-height. Deliberately a
// constant, see measureFrameSafeRect().
const FLOATING_RIGHT_RESERVED_PX = 64;
// Breathing room between the camera gate and the surrounding floating UI. The
// side rails sit right next to the gate edges, so they get a wider gap than the
// top/bottom chrome.
const FRAME_GATE_SIDE_GAP_PX = 40;
const FRAME_GATE_EDGE_GAP_PX = 16;
const CUTOUT_PANO_DIM_ALPHA = 0.45;
const CUTOUT_PANO_DIM_TRANSITION_MS = 180;
const FRAME_ROLL_OVERLAY_TRANSITION_MS = 160;
const LASSO_CURSOR_SIZE = 24;
const LASSO_CURSOR_HOTSPOT_X = 4;
const LASSO_CURSOR_HOTSPOT_Y = 4;

// Global registry: nodeId → Promise for in-flight paint layer uploads.
const _paintLayerUploadRegistry = new Map();
const _paintLayerSyncRegistry = new Map();
const _videoThumbnailCache = new Map();
const VIDEO_THUMBNAIL_CACHE_LIMIT = 12;

const comfyMedia = createComfyMediaAdapter({
  app,
  api,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed,
    markImageFailed,
    markImageLoading,
    markImageReady,
  },
});
const mediaAssetSource = comfyMedia.assetSource;
const mediaSource = comfyMedia.source;
const mediaUiImage = comfyMedia.uiImage;
const invalidateMediaUiImage = comfyMedia.invalidateUiImage;
const resolvePreferredExactLinkedSource = comfyMedia.resolvePreferredExactLinkedSource;
const loadPreferredExactLinkedImage = comfyMedia.loadPreferredExactLinkedImage;

function getCoverageLabel(value) {
  return normalizeCoverageValue(value) === 180 ? "180° Front" : "360° Full";
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function smoothstep(edge0, edge1, x) {
  const t = clamp((Number(x || 0) - edge0) / Math.max(edge1 - edge0, 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
}

function getCachedVideoThumbnails(src) {
  const key = String(src || "").trim();
  if (!key) return null;
  const cached = _videoThumbnailCache.get(key);
  if (!cached || !Array.isArray(cached.thumbnails) || !cached.thumbnails.length) return null;
  _videoThumbnailCache.delete(key);
  _videoThumbnailCache.set(key, cached);
  return cached;
}

function setCachedVideoThumbnails(src, entry) {
  const key = String(src || "").trim();
  if (!key) return;
  const thumbnails = Array.isArray(entry?.thumbnails) ? entry.thumbnails : [];
  if (!thumbnails.length) return;
  _videoThumbnailCache.delete(key);
  _videoThumbnailCache.set(key, {
    thumbnails,
    thumbnailCount: Math.max(1, Number(entry?.thumbnailCount || thumbnails.length)),
    duration: Math.max(0, Number(entry?.duration || 0)),
    fps: Math.max(1, Number(entry?.fps || 24)),
  });
  while (_videoThumbnailCache.size > VIDEO_THUMBNAIL_CACHE_LIMIT) {
    const oldestKey = _videoThumbnailCache.keys().next().value;
    if (!oldestKey) break;
    _videoThumbnailCache.delete(oldestKey);
  }
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
function distToSegment2(p, a, b) {
  const abx = Number(b.x || 0) - Number(a.x || 0);
  const aby = Number(b.y || 0) - Number(a.y || 0);
  const apx = Number(p.x || 0) - Number(a.x || 0);
  const apy = Number(p.y || 0) - Number(a.y || 0);
  const denom = abx * abx + aby * aby;
  if (denom <= 1e-6) return dist2(p, a);
  const t = clamp((apx * abx + apy * aby) / denom, 0, 1);
  const qx = Number(a.x || 0) + abx * t;
  const qy = Number(a.y || 0) + aby * t;
  const dx = Number(p.x || 0) - qx;
  const dy = Number(p.y || 0) - qy;
  return dx * dx + dy * dy;
}
function normalize2(v) {
  const x = Number(v?.x || 0);
  const y = Number(v?.y || 0);
  const len = Math.hypot(x, y);
  if (len <= 1e-6) return { x: 1, y: 0 };
  return { x: x / len, y: y / len };
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function colorToCss(color, alphaOverride = null) {
  const alpha = alphaOverride == null ? Number(color?.a ?? 1) : Number(alphaOverride);
  return `rgba(${Math.round(clamp(Number(color?.r ?? 0), 0, 1) * 255)}, ${Math.round(clamp(Number(color?.g ?? 0), 0, 1) * 255)}, ${Math.round(clamp(Number(color?.b ?? 0), 0, 1) * 255)}, ${clamp(alpha, 0, 1)})`;
}
function svgToDataUrl(svg) {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
let lassoCursorSvgCache = { fillStyle: "", url: "" };
function getLassoCursorBackground(fillStyle, borderColorOuter, borderColorInner) {
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
function colorsApproximatelyEqual(a, b, eps = 0.015) {
  if (!a || !b) return false;
  return Math.abs(Number(a.r ?? 0) - Number(b.r ?? 0)) <= eps
    && Math.abs(Number(a.g ?? 0) - Number(b.g ?? 0)) <= eps
    && Math.abs(Number(a.b ?? 0) - Number(b.b ?? 0)) <= eps
    && Math.abs(Number(a.a ?? 1) - Number(b.a ?? 1)) <= eps;
}
function cloneColor(color) {
  return {
    r: clamp(Number(color?.r ?? 0), 0, 1),
    g: clamp(Number(color?.g ?? 0), 0, 1),
    b: clamp(Number(color?.b ?? 0), 0, 1),
    a: clamp(Number(color?.a ?? 1), 0, 1),
  };
}
function cloneJson(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}
function isPresetPaintColor(color) {
  return PAINT_COLOR_SWATCHES.some((swatch) => colorsApproximatelyEqual(color, swatch.color));
}
function hsv01ToRgb(h, s, v) {
  const hue = ((Number(h) % 1) + 1) % 1;
  const sat = clamp(Number(s), 0, 1);
  const val = clamp(Number(v), 0, 1);
  if (sat <= 1e-6) return { r: val, g: val, b: val };
  const i = Math.floor(hue * 6);
  const f = hue * 6 - i;
  const p = val * (1 - sat);
  const q = val * (1 - f * sat);
  const t = val * (1 - (1 - f) * sat);
  switch (i % 6) {
    case 0: return { r: val, g: t, b: p };
    case 1: return { r: q, g: val, b: p };
    case 2: return { r: p, g: val, b: t };
    case 3: return { r: p, g: q, b: val };
    case 4: return { r: t, g: p, b: val };
    default: return { r: val, g: p, b: q };
  }
}
function rgb01ToHsv(color) {
  const r = clamp(Number(color?.r ?? 0), 0, 1);
  const g = clamp(Number(color?.g ?? 0), 0, 1);
  const b = clamp(Number(color?.b ?? 0), 0, 1);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;
  if (delta > 1e-6) {
    if (max === r) h = ((g - b) / delta + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / delta + 2) / 6;
    else h = ((r - g) / delta + 4) / 6;
  }
  const s = max <= 1e-6 ? 0 : delta / max;
  return { h, s, v: max };
}
function formatParamValue(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return "0";
  return Number(n.toFixed(3)).toString();
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

let panoSuiteCssReadyPromise = null;

function installCss() {
  if (panoSuiteCssReadyPromise) return panoSuiteCssReadyPromise;
  panoSuiteCssReadyPromise = new Promise((resolve) => {
    const existing = document.getElementById("pano-suite-style-link");
    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => {
        existing.dataset.loaded = "true";
        resolve();
      }, { once: true });
      existing.addEventListener("error", () => resolve(), { once: true });
      return;
    }
    const link = document.createElement("link");
    link.id = "pano-suite-style-link";
    link.rel = "stylesheet";
    link.href = new URL("./pano_editor.css", import.meta.url).toString();
    link.addEventListener("load", () => {
      link.dataset.loaded = "true";
      resolve();
    }, { once: true });
    link.addEventListener("error", () => resolve(), { once: true });
    document.head.appendChild(link);
  });
  return panoSuiteCssReadyPromise;
}

const SHARED_UI_SETTINGS_KEY = "pano_suite.ui_settings.v1";
const NODE_GRID_VISIBILITY_KEY = "pano_suite.node_grid_visibility.v1";
let sharedUiSettingsMemory = null;
let nodeGridVisibilityMemory = null;

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

function paintingStrokeCount(painting) {
  const paintCount = Array.isArray(painting?.paint?.strokes) ? painting.paint.strokes.length : 0;
  const maskCount = Array.isArray(painting?.mask?.strokes) ? painting.mask.strokes.length : 0;
  return { paintCount, maskCount };
}

function paintingCompositeCount(painting) {
  const { paintCount, maskCount } = paintingStrokeCount(painting);
  const rasterObjects = Array.isArray(painting?.raster_objects) ? painting.raster_objects : [];
  let paintRasterCount = 0;
  let maskRasterCount = 0;
  rasterObjects.forEach((item) => {
    if (String(item?.layerKind || "paint") === "mask") maskRasterCount += 1;
    else paintRasterCount += 1;
  });
  return {
    paintCount,
    maskCount,
    paintRasterCount,
    maskRasterCount,
    totalPaintCount: paintCount + paintRasterCount,
    totalMaskCount: maskCount + maskRasterCount,
  };
}

function makePaintId(prefix) {
  return `${prefix}_${Math.random().toString(16).slice(2, 10)}`;
}

function normalizeEditorHistory(raw) {
  if (!raw || typeof raw !== "object") {
    return { version: 1, entries: [], index: -1 };
  }
  const entries = Array.isArray(raw.entries) ? raw.entries.map((entry) => String(entry || "")) : [];
  const index = Number.isInteger(Number(raw.index)) ? Number(raw.index) : (entries.length - 1);
  return {
    version: 1,
    entries,
    index: Math.max(-1, Math.min(entries.length - 1, index)),
  };
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
  const src = mediaAssetSource(asset);
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
  const preset = resolveNodeOutputPresetWidth(
    node,
    getWidget(node, "output_preset")?.value,
    2048,
    ["bg_erp", "erp_image"],
    () => node.setDirtyCanvas?.(true, true),
    "node_preview:auto:bg_erp|erp_image",
  );
  const coverage = normalizeCoverageValue(getWidget(node, "coverage")?.value);
  const state = parsePanoEditorState(raw, {
    outputPreset: preset,
    backgroundColor: bg,
    coverage,
    sharedUiSettings: loadSharedUiSettings(),
  });

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
function uid(prefix) { return `${prefix}_${Math.random().toString(16).slice(2, 10)}`; }

function parseOutputPresetValue(v, fallback = 2048) {
  if (typeof v === "number" && Number.isFinite(v)) return Math.round(v);
  const s = String(v ?? "").trim();
  if (!s) return fallback;
  const head = s.includes("x") ? s.split("x", 1)[0].trim() : s;
  const n = Number(head);
  return Number.isFinite(n) ? Math.round(n) : fallback;
}

function isAutoOutputPresetValue(v) {
  const s = String(v ?? "").trim().toLowerCase();
  return s === "auto" || s === "bg" || s === "background";
}

function getMediaWidthForSizing(media) {
  const width = Number(media?.naturalWidth || media?.videoWidth || media?.width || 0);
  return Number.isFinite(width) && width > 0 ? Math.round(width) : null;
}

function resolveNodeOutputPresetWidth(node, rawPreset, fallback = 2048, inputNames = ["bg_erp", "erp_image"], onLoad = null, cacheKey = "output_preset_auto_bg") {
  if (!isAutoOutputPresetValue(rawPreset)) return parseOutputPresetValue(rawPreset, fallback);
  const img = loadPreferredExactLinkedImage(node, inputNames, onLoad, cacheKey);
  return getMediaWidthForSizing(img) || Math.max(1, Math.round(Number(fallback || 2048)));
}

function panoPaintDebugEnabled() {
  try {
    if (window?.__PANO_PAINT_DEBUG__ === true) return true;
    return String(window?.localStorage?.getItem("panoPaintDebug") || "").trim() === "1";
  } catch {
    return false;
  }
}

function logPaintDebug(phase, payload) {
  void phase;
  void payload;
  return;
}

async function showEditor(node, type, options = {}) {
  comfyMedia.clearFailedLinkedImages(node);
  const readOnly = options?.readOnly === true;
  const hideSidebar = options?.hideSidebar ?? readOnly;
  const previewMode = readOnly;
  const nodeTitle = getEditorNodeTitle(node, type);
  await installCss();
  const presetWidget = getWidget(node, "output_preset");
  const coverageWidget = getWidget(node, "coverage");
  const bgWidget = getWidget(node, "bg_color");
  const stateWidget = getWidget(node, STATE_WIDGET);

  const getLinkedBackgroundImageForSizing = () => {
    const inputNames = type === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return loadPreferredExactLinkedImage(
      node,
      inputNames,
      () => requestDraw(),
      `background:size:${inputNames.join("|")}`,
    );
  };

  const getLinkedBackgroundWidthForAuto = () => {
    const img = getLinkedBackgroundImageForSizing();
    return getMediaWidthForSizing(img);
  };

  const resolveEditorOutputPresetWidth = (fallback = 2048) => {
    const raw = presetWidget?.value;
    if (isAutoOutputPresetValue(raw)) {
      return getLinkedBackgroundWidthForAuto() || Math.max(1, Math.round(Number(fallback || 2048)));
    }
    return parseOutputPresetValue(raw, fallback);
  };

  const state = parsePanoEditorState(String(stateWidget?.value || ""), {
    outputPreset: resolveEditorOutputPresetWidth(2048),
    backgroundColor: String(bgWidget?.value || "#00ff00"),
    coverage: normalizeCoverageValue(coverageWidget?.value),
    sharedUiSettings: loadSharedUiSettings(),
  });
  node.__panoLiveStateOverride = state;
  node.__panoLiveStateVersion = 0;

  if (type === "cutout") {
    state.shots = Array.isArray(state.shots) ? state.shots.slice(0, 1) : [];
    if (!state.shots.length) {
      state.active.selected_shot_id = null;
    }
  }
  const initialCutoutPreviewShot = type === "cutout"
    ? (() => {
      const shots = Array.isArray(state.shots) ? state.shots : [];
      const selectedId = String(state?.active?.selected_shot_id || "");
      return shots.find((item) => String(item?.id || "") === selectedId) || shots[0] || null;
    })()
    : null;
  const initialCutoutPreviewSize = initialCutoutPreviewShot
    ? getCutoutPreviewViewportSize(initialCutoutPreviewShot, false)
    : { width: 220, height: 132 };
  const shellPreset = buildModalShellPreset(type);
  const uiState = reactive({
    stageStatus: IMAGE_LOADING,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (shellPreset.viewButtons || []).map((button) => ({ ...button, visible: true, disabled: false })),
    toolButtons: (shellPreset.toolButtons || []).map((button) => ({ ...button, disabled: false })),
    floatingButtons: [
      ...(shellPreset.floatingButtons || []).map((button) => ({ ...button, disabled: false })),
      ...(previewMode ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: ICON.fullscreen, disabled: false }] : []),
    ],
    frameRail: {
      visible: false,
      disabled: readOnly,
      aspectOpen: false,
      aspectIcon: ICON.aspect,
      rotateIcon: ICON.rotate_90,
      aspectChoices: [],
      rollKnob: null,
    },
    frameRollKnob: {
      visible: false,
      disabled: readOnly,
      rollDeg: 0,
      displayValue: "0",
      dragging: false,
      armed: false,
    },
    fovValue: "100°",
    outputPreviewToggle: {
      visible: false,
      icon: ICON.fullscreen,
      label: "Expand Preview",
      tip: "Expand preview",
    },
    paintDock: {
      visible: false,
      activePane: "",
      showColorRow: true,
      colorEnabled: true,
      activeSwatchId: "green",
      customColorActive: false,
      customColorCss: colorToCss({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: false,
      pickerHueColor: colorToCss({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: true,
      historyEntries: Array.from({ length: 8 }, (_, index) => ({ index, color: null })),
      sizeValue: 10,
      sizeText: "10",
      sizeFill: "7.56%",
      sizeDisabled: false,
      showSizeRow: true,
      clearVisible: { paint: true, mask: true },
      activeTools: { paint: "pen", mask: "pen" },
    },
    videoTransport: {
      visible: false,
      ready: false,
      playing: false,
      loop: true,
      duration: 0,
      currentTime: 0,
      progressPct: 0,
      currentTimeLabel: "0:00",
      durationLabel: "0:00",
      frameCount: 0,
      fps: 24,
      mode: "playback",
      hasAudio: false,
      muted: false,
      volume: 1,
      volumePct: 100,
      thumbnails: [],
      thumbnailCount: 9,
      shellMaxWidthPx: 640,
    },
    sidePanel: {},
    selectionMenu: { visible: false, left: 0, top: 0, items: [] },
    tooltip: { visible: false, text: "", left: 0, top: 0, variant: "" },
    confirmDialog: { visible: false, title: "", text: "", confirmLabel: "Confirm", resolve: null },
    cameraPreview: {
      visible: type === "cutout",
      ready: false,
      settled: false,
      expanded: false,
      width: initialCutoutPreviewSize.width,
      height: initialCutoutPreviewSize.height,
      label: initialCutoutPreviewShot ? "Loading preview" : "Add Frame to preview",
    },
  });
  const mountHost = document.createElement("div");
  document.body.appendChild(mountHost);
  const onImageFileSelected = ({ intent, file } = {}) => {
    if (!isImageFile(file)) return;
    if (intent === "add") {
      void addImageStickerFromFile(file);
      return;
    }
    if (intent === "replace") void replaceSelectedImageFromFile(file);
  };
  const onImageFileCancelled = ({ intent } = {}) => {
    void intent;
  };
  const vueApp = createApp(PanoModal, {
    open: true,
    type,
    readOnly,
    hideSidebar,
    nodeTitle,
    shellPreset,
    paintSwatches: PAINT_COLOR_SWATCHES.map((swatch) => ({
      id: swatch.id,
      label: swatch.label,
      cssColor: colorToCss(swatch.color, 1),
    })),
    uiState,
    onClose: () => { void closeEditor(); },
    onImageFileSelected,
    onImageFileCancelled,
  });
  let vueModal = null;
  try {
    vueModal = vueApp.mount(mountHost);
  } catch (error) {
    try {
      vueApp.unmount();
    } catch {
      // Ignore secondary teardown failures from partially mounted trees.
    }
    mountHost.remove();
    throw error;
  }

  const overlay = mountHost.querySelector(".pano-modal-overlay");
  const root = mountHost.querySelector(".pano-modal");
  const canvas = root?.querySelector("[data-stage-overlay]");
  const backgroundCanvas = root?.querySelector("[data-stage-background]");
  const stageWrap = root?.querySelector(".pano-stage-wrap");
  const paintOverlayRefs = vueModal?.getPaintOverlayRefs?.() || {};
  const paintCursorEl = paintOverlayRefs.cursor || null;
  const paintSizePreviewEl = paintOverlayRefs.sizePreview || null;
  const paintSizePreviewSampleEl = paintOverlayRefs.sizeSample || null;
  if (
    !overlay
    || !root
    || !canvas
    || !backgroundCanvas
    || !stageWrap
    || !paintCursorEl
    || !paintSizePreviewEl
    || !paintSizePreviewSampleEl
  ) {
    vueApp.unmount();
    mountHost.remove();
    throw new Error("Failed to mount Panorama Vue modal shell");
  }
  const ctx = canvas.getContext("2d");
  const modalPanoCore = createPanoramaRenderCore();
  const cutoutPreviewCamera = type === "cutout"
    ? createCutoutCamera({ targetId: `cutout_modal_${String(node?.id ?? "0")}` })
    : null;
  // Vue owns modal DOM structure. The references below are bridge-only:
  // canvas mounting, geometry measurement, low-level pointer wiring, and fullscreen integration.
  const side = root.querySelector("[data-side]");
  const videoEl = root.querySelector("[data-video-element]");
  const floatingRightEl = root.querySelector(".pano-floating-right");
  const floatingTopEl = root.querySelector(".pano-floating-top");
  const toolRailEl = root.querySelector("[data-tool-rail]");
  const frameRailEl = root.querySelector("[data-frame-rail]");
  const frameRollKnobEl = root.querySelector("[data-frame-roll-knob]");
  const paintDockEl = root.querySelector("[data-paint-dock]");
  const videoTransportEl = root.querySelector(".pano-video-transport");
  const selectionMenu = root.querySelector("[data-selection-menu]");
  const tooltipEl = root.querySelector("[data-tooltip]");
  const cutoutPreviewHost = root.querySelector("[data-camera-preview-host]");
  const paintColorRow = root.querySelector("[data-paint-color-row]");
  const paintColorPop = root.querySelector("[data-paint-color-pop]");
  const paintColorSv = root.querySelector("[data-paint-color-sv]");
  const paintColorSvCursor = root.querySelector("[data-paint-color-sv-cursor]");
  const paintHueStrip = root.querySelector("[data-paint-hue-strip]");
  const paintHueHandle = root.querySelector("[data-paint-hue-handle]");
  let paintSizePreviewTimer = 0;
  let paintPaneFadeTimer = 0;
  stageWrap?.removeAttribute("data-stage-ready");
  stageWrap?.setAttribute("data-stage-loading-kind", "boot");
  canvas.style.opacity = "1";
  backgroundCanvas.style.opacity = "0";
  if (hideSidebar) {
    side?.remove();
    root.classList.add("pano-modal-readonly");
  }
  const commitCustomPaintHistory = () => {
    if (!editor.customPaintSessionStart) return;
    if (colorsApproximatelyEqual(editor.customPaintSessionStart, editor.customPaintColor)) {
      editor.customPaintSessionStart = null;
      return;
    }
    if (isPresetPaintColor(editor.customPaintColor)) {
      editor.customPaintSessionStart = null;
      return;
    }
    const next = [
      cloneColor(editor.customPaintColor),
      ...editor.customPaintHistory.filter((item) => !colorsApproximatelyEqual(item, editor.customPaintColor)),
    ];
    editor.customPaintHistory = next.slice(0, 8);
    editor.customPaintSessionStart = null;
  };
  const closePaintColorPop = (commitHistory = false) => {
    if (!paintColorPop || paintColorPop.hidden) return;
    if (commitHistory) commitCustomPaintHistory();
    else editor.customPaintSessionStart = null;
    paintColorPop.hidden = true;
    uiState.paintDock.colorPopOpen = false;
  };
  const openPaintColorPop = () => {
    if (!paintColorPop) return;
    if (paintColorPop.hidden) editor.customPaintSessionStart = cloneColor(editor.customPaintColor);
    paintColorPop.hidden = false;
    uiState.paintDock.colorPopOpen = true;
  };
  root.addEventListener("pointerdown", (ev) => {
    if (!ev.target.closest("[data-frame-roll-knob]")) hideTooltip();
    if (ev.target.closest(".pano-picker")) return;
    if (ev.target.closest("[data-paint-color-row]")) return;
    root.querySelectorAll(".pano-picker-pop").forEach((el) => {
      el.hidden = true;
    });
    closePaintColorPop(true);
    if (type === "cutout" && editor.cutoutAspectOpen && !ev.target.closest(".pano-aspect-popover") && !ev.target.closest("[data-action='aspect']")) {
      editor.cutoutAspectOpen = false;
      editor.menuMode = "";
      editor.menuSize.measured = false;
      updateSelectionMenu();
      requestDraw();
    }
    if (uiState.frameRail?.aspectOpen && !ev.target.closest(".pano-frame-aspect-control")) {
      uiState.frameRail.aspectOpen = false;
    }
  });

  const initialSelectedId = type === "stickers"
    ? state.active.selected_sticker_id
    : (type === "cutout" ? state.active.selected_shot_id : state.active.selected_shot_id);
  const initialHistorySnapshot = JSON.stringify(makePanoEditorHistorySnapshot(state));
  const editor = {
    mode: "pano",
    selectedId: initialSelectedId,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: normalizeCoverageValue(state.coverage),
    historyController: createHistoryController(80, { version: 1, entries: [initialHistorySnapshot], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: DEFAULT_BRUSH_PRESET_ID,
    paintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintHistory: [],
    customPaintSessionStart: null,
    pointerPos: { x: 0, y: 0, inside: false },
    interaction: null,
    hqFrames: 0,
    viewInertia: { vx: 0, vy: 0, active: false },
    menuSize: { w: 220, h: 40, measured: false },
    menuMode: "",
    cutoutAspectOpen: false,
    showGrid: getNodeGridVisibility(node?.id, true),
    showPanorama: true,
    showObjects: true,
    showMask: true,
    outputPreviewExpanded: false,
    outputPreviewAnim: 0,
    outputPreviewAnimFrom: 0,
    outputPreviewAnimTo: 0,
    outputPreviewAnimStartTs: 0,
    outputPreviewAnimDurationMs: 180,
    outputPreviewRect: null,
    cutoutPanoDimAlpha: 0,
    cutoutPanoDimFrom: 0,
    cutoutPanoDimTarget: 0,
    cutoutPanoDimStartTs: 0,
    cutoutPanoDimCorners: null,
    cutoutPanoFrameVisual: null,
    cutoutPanoFrameAlpha: 0,
    cutoutPanoFrameFrom: 0,
    cutoutPanoFrameTarget: 0,
    cutoutPanoFrameStartTs: 0,
    frameRollOverlayVisual: null,
    frameRollOverlayAlpha: 0,
    frameRollOverlayFrom: 0,
    frameRollOverlayTarget: 0,
    frameRollOverlayStartTs: 0,
    frameWheelCommitTimer: 0,
    frameWheelChanged: false,
    paintEngine: createPaintEngineManager(),
    paintEngineDescriptorKey: "",
    paintEngineRevisionKey: "",
    paintStrokeRevision: 0,
    paintCompositeRevision: 0,
    objectVisualRevision: 0,
    livePaintInteractionRevision: 0,
    selectedIds: [],
    _sortedItemsCache: null,
    _strokeGeomCache: new Map(),
    marqueeModifier: false,
    altModifier: false,
    panelLastValues: null,
    panelWasEnabled: false,
    viewTween: null,
    fullscreen: false,
    fullscreenPrevShowGrid: null,
  };
  const cutoutPreviewMount = cutoutPreviewCamera && cutoutPreviewHost
    ? cutoutPreviewCamera.mount(cutoutPreviewHost, { shot: null })
    : null;
  if (type === "stickers") {
    editor.selectedId = null;
    state.active.selected_sticker_id = null;
  }
  editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
  const imageCache = new Map();
  const rasterImageCache = new Map();
  const rasterImageAlphaCache = new Map();
  const rasterErpCanvasCache = new Map();
  const stillCanvas = document.createElement("canvas");
  stillCanvas.__panoFrameIdx = 0;
  const runtime = {
    dirty: true,
    rafId: 0,
    running: true,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: type === "cutout" ? 2 : 0,
    hasPresentedFrame: false,
    backgroundDirty: true,
    backgroundWasVisible: false,
    frameSafeRect: null,
    frameCanvasScale: 1,
    tickErrorSignature: "",
  };
  const frameGateCssRadius = Number.parseFloat(
    getComputedStyle(root).getPropertyValue("--pano-float-radius"),
  ) || 10;
  const setCanvasCursor = (nextCursor) => {
    const cursor = String(nextCursor || "default");
    if (canvas.style.cursor === cursor) return;
    canvas.style.cursor = cursor;
  };
  const tooltip = {
    timer: 0,
    target: null,
  };
  const dragCue = {
    active: false,
    depth: 0,
  };
  const videoState = {
    mode: "playback",
    editorTime: 0,
    requestedTime: null,
    presentedTime: 0,
    seeking: false,
    resumeAfterScrub: false,
    pendingPlaybackResume: false,
    frameCounter: 0,
    frameCache: new Map(),
    frameCacheOrder: [],
    currentFrameNumber: 0,
    thumbnailJobId: 0,
    thumbnailSrc: "",
  };
  const SCRUB_FRAME_CACHE_LIMIT = 4;
  const VIDEO_THUMBNAIL_COUNT = 9;
  const videoCleanupFns = [];
  let videoTransportLayoutRaf = 0;
  const syncVideoTransportLayout = () => {
    const stageRect = stageWrap?.getBoundingClientRect?.();
    const rightRect = floatingRightEl?.getBoundingClientRect?.();
    const stageWidth = Math.max(0, Number(stageRect?.width || 0));
    const rightWidth = rightRect ? Math.max(0, Number(rightRect.width || 0)) : 0;
    const modalSideInset = 14;
    const transportGap = 12;
    const rightReserve = rightWidth > 0 ? (rightWidth + modalSideInset + transportGap) : 72;
    const availableWidth = Math.max(280, Math.floor(stageWidth - (rightReserve * 2)));
    const shellMaxWidthPx = editor.fullscreen
      ? Math.min(1200, availableWidth)
      : availableWidth;
    uiState.videoTransport.shellMaxWidthPx = shellMaxWidthPx;
  };
  const queueVideoTransportLayout = () => {
    if (videoTransportLayoutRaf) return;
    videoTransportLayoutRaf = window.requestAnimationFrame(() => {
      videoTransportLayoutRaf = 0;
      syncVideoTransportLayout();
    });
  };
  const frameTolerance = () => {
    const fps = Math.max(1, Number(uiState.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / fps));
  };
  const detectVideoHasAudio = (video) => {
    if (!(video instanceof HTMLVideoElement)) return false;
    try {
      if (Array.isArray(video.audioTracks) && video.audioTracks.length > 0) return true;
      if (video.audioTracks && typeof video.audioTracks.length === "number" && video.audioTracks.length > 0) return true;
    } catch {
      // Ignore browser-specific audioTracks access issues.
    }
    try {
      if (typeof video.mozHasAudio === "boolean") return video.mozHasAudio;
    } catch {
      // Ignore Firefox-only property access issues.
    }
    try {
      if (Number(video.webkitAudioDecodedByteCount || 0) > 0) return true;
    } catch {
      // Ignore WebKit-only property access issues.
    }
    return !!uiState.videoTransport.hasAudio;
  };
  const transportLayoutObserver = typeof ResizeObserver !== "undefined"
    ? new ResizeObserver(() => queueVideoTransportLayout())
    : null;
  transportLayoutObserver?.observe(stageWrap);
  if (floatingRightEl) transportLayoutObserver?.observe(floatingRightEl);
  videoCleanupFns.push(() => {
    if (videoTransportLayoutRaf) {
      window.cancelAnimationFrame(videoTransportLayoutRaf);
      videoTransportLayoutRaf = 0;
    }
    transportLayoutObserver?.disconnect?.();
  });
  queueVideoTransportLayout();
  const resetVideoThumbnails = () => {
    videoState.thumbnailJobId += 1;
    videoState.thumbnailSrc = "";
    uiState.videoTransport.thumbnails = [];
    uiState.videoTransport.thumbnailCount = VIDEO_THUMBNAIL_COUNT;
  };
  const buildVideoThumbnails = async (src, duration, fps) => {
    const safeSrc = String(src || "").trim();
    if (!safeSrc) {
      resetVideoThumbnails();
      return;
    }
    const cached = getCachedVideoThumbnails(safeSrc);
    if (cached) {
      videoState.thumbnailSrc = safeSrc;
      uiState.videoTransport.thumbnails = cached.thumbnails;
      uiState.videoTransport.thumbnailCount = cached.thumbnailCount;
      return;
    }
    if (videoState.thumbnailSrc === safeSrc && Array.isArray(uiState.videoTransport.thumbnails) && uiState.videoTransport.thumbnails.length) {
      return;
    }
    const jobId = ++videoState.thumbnailJobId;
    videoState.thumbnailSrc = safeSrc;
    uiState.videoTransport.thumbnails = [];
    uiState.videoTransport.thumbnailCount = VIDEO_THUMBNAIL_COUNT;
    const thumbVideo = document.createElement("video");
    thumbVideo.preload = "auto";
    thumbVideo.muted = true;
    thumbVideo.playsInline = true;
    thumbVideo.crossOrigin = "anonymous";
    const loaded = await new Promise((resolve) => {
      let settled = false;
      const finish = (ok) => {
        if (settled) return;
        settled = true;
        resolve(ok);
      };
      thumbVideo.addEventListener("loadedmetadata", () => finish(true), { once: true });
      thumbVideo.addEventListener("canplay", () => finish(true), { once: true });
      thumbVideo.addEventListener("error", () => finish(false), { once: true });
      thumbVideo.src = safeSrc;
      thumbVideo.load();
    });
    if (!loaded || videoState.thumbnailJobId !== jobId) return;
    const videoWidth = Math.max(1, Number(thumbVideo.videoWidth || 0));
    const videoHeight = Math.max(1, Number(thumbVideo.videoHeight || 0));
    if (videoWidth < 1 || videoHeight < 1) return;
    const sampleDuration = Math.max(0, Number(thumbVideo.duration || duration || 0));
    const canvas = document.createElement("canvas");
    const thumbHeight = 46;
    const thumbWidth = Math.max(72, Math.round((videoWidth / videoHeight) * thumbHeight));
    canvas.width = thumbWidth;
    canvas.height = thumbHeight;
    const ctx2d = canvas.getContext("2d");
    if (!ctx2d) return;
    const thumbnails = [];
    const seekTo = (time) => new Promise((resolve) => {
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        resolve();
      };
      thumbVideo.addEventListener("seeked", finish, { once: true });
      thumbVideo.addEventListener("error", finish, { once: true });
      try {
        thumbVideo.currentTime = time;
      } catch {
        finish();
      }
    });
    for (let index = 0; index < VIDEO_THUMBNAIL_COUNT; index += 1) {
      if (videoState.thumbnailJobId !== jobId) return;
      const ratio = VIDEO_THUMBNAIL_COUNT <= 1 ? 0 : index / (VIDEO_THUMBNAIL_COUNT - 1);
      const target = sampleDuration > 0
        ? Math.max(0, Math.min(sampleDuration - Math.max(0.001, 0.5 / Math.max(1, Number(fps || 24))), sampleDuration * ratio))
        : 0;
      await seekTo(target);
      if (videoState.thumbnailJobId !== jobId) return;
      ctx2d.clearRect(0, 0, thumbWidth, thumbHeight);
      ctx2d.drawImage(thumbVideo, 0, 0, thumbWidth, thumbHeight);
      thumbnails.push({
        id: `thumb-${index}`,
        src: canvas.toDataURL("image/jpeg", 0.72),
        time: target,
        label: formatVideoTime(target),
      });
    }
    if (videoState.thumbnailJobId !== jobId) return;
    uiState.videoTransport.thumbnails = thumbnails;
    uiState.videoTransport.thumbnailCount = thumbnails.length || VIDEO_THUMBNAIL_COUNT;
    setCachedVideoThumbnails(safeSrc, {
      thumbnails,
      thumbnailCount: thumbnails.length || VIDEO_THUMBNAIL_COUNT,
      duration: sampleDuration,
      fps,
    });
  };
  const frameNumberForTime = (time) => {
    const fps = Math.max(1, Number(uiState.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(time || 0)) * fps));
  };
  const cacheFrameCanvas = (frameNumber) => {
    if (!(videoEl instanceof HTMLVideoElement)) return null;
    if (Number(videoEl.videoWidth || 0) < 1 || Number(videoEl.videoHeight || 0) < 1) return null;
    const width = Number(videoEl.videoWidth || 0);
    const height = Number(videoEl.videoHeight || 0);
    const frameCanvas = document.createElement("canvas");
    frameCanvas.width = width;
    frameCanvas.height = height;
    frameCanvas.__panoFrameIdx = Number(frameCanvas.__panoFrameIdx || 0) + 1;
    const ctx2d = frameCanvas.getContext("2d");
    if (!ctx2d) return null;
    ctx2d.drawImage(videoEl, 0, 0, width, height);
    videoState.frameCache.set(frameNumber, frameCanvas);
    videoState.frameCacheOrder = videoState.frameCacheOrder.filter((entry) => entry !== frameNumber);
    videoState.frameCacheOrder.push(frameNumber);
    while (videoState.frameCacheOrder.length > SCRUB_FRAME_CACHE_LIMIT) {
      const evict = videoState.frameCacheOrder.shift();
      if (evict != null) videoState.frameCache.delete(evict);
    }
    return frameCanvas;
  };
  const copyCanvasIntoStill = (sourceCanvas, presentedTime = null) => {
    if (!(sourceCanvas instanceof HTMLCanvasElement)) return false;
    const width = Number(sourceCanvas.width || 0);
    const height = Number(sourceCanvas.height || 0);
    if (width < 1 || height < 1) return false;
    if (stillCanvas.width !== width || stillCanvas.height !== height) {
      stillCanvas.width = width;
      stillCanvas.height = height;
    }
    const ctx2d = stillCanvas.getContext("2d");
    if (!ctx2d) return false;
    ctx2d.clearRect(0, 0, width, height);
    ctx2d.drawImage(sourceCanvas, 0, 0, width, height);
    stillCanvas.__panoFrameIdx = Number(stillCanvas.__panoFrameIdx || 0) + 1;
    if (presentedTime != null) videoState.presentedTime = Number(presentedTime || 0);
    return true;
  };
  const presentCachedFrameForTime = (time) => {
    const frameNumber = frameNumberForTime(time);
    const cachedCanvas = videoState.frameCache.get(frameNumber) || null;
    if (!cachedCanvas) return false;
    videoState.currentFrameNumber = frameNumber;
    return copyCanvasIntoStill(cachedCanvas, time);
  };
  videoCleanupFns.push(() => {
    resetVideoThumbnails();
  });
  if (videoEl instanceof HTMLVideoElement) {
    const pumpVideoFrame = () => {
      if (typeof videoEl.requestVideoFrameCallback !== "function") return;
      if (videoEl.__panoFramePumpActive) return;
      videoEl.__panoFramePumpActive = true;
      const tickVideoFrame = (_now, metadata) => {
        videoEl.__panoFramePumpActive = false;
        const actualTime = Number(metadata?.mediaTime ?? videoEl.currentTime ?? 0);
        const actualFrameNumber = frameNumberForTime(actualTime);
        const tolerance = frameTolerance();
        if (videoState.mode === "scrub") {
          if (Math.abs(actualTime - Number(videoState.editorTime || 0)) <= tolerance) {
            cacheFrameCanvas(actualFrameNumber);
            presentCachedFrameForTime(videoState.editorTime);
            runtime.backgroundDirty = true;
            runtime.dirty = true;
            syncVideoTransportState({
              ready: true,
              playing: false,
              visible: getVideoTransportVisible(),
              currentTime: videoState.editorTime,
              duration: uiState.videoTransport.duration,
              frameCount: uiState.videoTransport.frameCount,
              fps: uiState.videoTransport.fps,
              mode: "scrub",
            });
            requestDraw({ cause: "frame_view", localOnly: true });
          }
        } else {
          videoState.editorTime = actualTime;
          videoState.presentedTime = actualTime;
          videoState.requestedTime = null;
          videoState.currentFrameNumber = actualFrameNumber;
          cacheFrameCanvas(actualFrameNumber);
          videoState.frameCounter += 1;
          videoEl.dataset.panoFrameIdx = String(videoState.frameCounter);
          runtime.backgroundDirty = true;
          runtime.dirty = true;
          syncVideoTransportState({
            ready: true,
            playing: !videoEl.paused && !videoEl.ended,
            visible: getVideoTransportVisible(),
            currentTime: actualTime,
            duration: uiState.videoTransport.duration,
            frameCount: uiState.videoTransport.frameCount,
            fps: uiState.videoTransport.fps,
            mode: "playback",
          });
          requestDraw({ cause: "frame_view", localOnly: true });
        }
        if (runtime.running && (!videoEl.paused || videoState.mode === "scrub")) {
          pumpVideoFrame();
        }
      };
      try {
        videoEl.requestVideoFrameCallback(tickVideoFrame);
      } catch {
        videoEl.__panoFramePumpActive = false;
      }
    };
    const maybeResumePlayback = () => {
      if (!videoState.pendingPlaybackResume) return;
      videoState.pendingPlaybackResume = false;
      videoState.mode = "playback";
      videoState.requestedTime = null;
      if (captureStillFrameFromVideo()) {
        runtime.backgroundDirty = true;
        runtime.dirty = true;
      }
      void videoEl.play().catch(() => {});
    };
    const onVideoReady = () => {
      videoState.editorTime = Number(videoEl.currentTime || 0);
      if (Number(videoEl.readyState || 0) >= 2 && captureStillFrameFromVideo()) {
        runtime.backgroundDirty = true;
        runtime.dirty = true;
      }
      refreshModalVideoSource();
      pumpVideoFrame();
      requestDraw({ cause: "frame_view", localOnly: true });
    };
    const onPlay = () => {
      videoState.mode = "playback";
      videoState.seeking = false;
      videoState.requestedTime = null;
      refreshModalVideoSource();
      pumpVideoFrame();
      requestDraw({ cause: "frame_view", localOnly: true });
    };
    const onPause = () => {
      if (videoState.mode === "playback" && captureStillFrameFromVideo()) {
        runtime.backgroundDirty = true;
        runtime.dirty = true;
      }
      refreshModalVideoSource();
      requestDraw({ cause: "frame_view", localOnly: true });
    };
    const onVolumeChange = () => {
      syncVideoTransportState({
        ready: !!videoEl.getAttribute("src"),
        playing: !videoEl.paused && !videoEl.ended,
        visible: getVideoTransportVisible(),
        currentTime: videoState.editorTime,
        duration: uiState.videoTransport.duration,
        frameCount: uiState.videoTransport.frameCount,
        fps: uiState.videoTransport.fps,
        mode: videoState.mode,
        hasAudio: uiState.videoTransport.hasAudio,
        muted: videoEl.muted,
        volume: Number(videoEl.volume ?? uiState.videoTransport.volume ?? 1),
      });
    };
    const onSeeked = () => {
      const hadExplicitSeek = videoState.seeking || videoState.pendingPlaybackResume || videoState.mode === "scrub";
      videoState.seeking = false;
      if (!hadExplicitSeek) {
        videoState.requestedTime = null;
        pumpVideoFrame();
        return;
      }
      const targetTime = Number(videoState.requestedTime ?? videoState.editorTime ?? 0);
      const actualTime = Number(videoEl.currentTime || 0);
      if (Math.abs(actualTime - targetTime) > frameTolerance()) {
        issueVideoSeek(targetTime);
        return;
      }
      if (videoState.mode === "scrub") {
        captureStillFrameFromVideo();
        runtime.backgroundDirty = true;
        runtime.dirty = true;
        requestDraw({ cause: "frame_view", localOnly: true });
      }
      videoState.requestedTime = null;
      maybeResumePlayback();
      pumpVideoFrame();
    };
    videoEl.addEventListener("loadedmetadata", onVideoReady);
    videoEl.addEventListener("loadeddata", onVideoReady);
    videoEl.addEventListener("canplay", onVideoReady);
    videoEl.addEventListener("play", onPlay);
    videoEl.addEventListener("pause", onPause);
    videoEl.addEventListener("volumechange", onVolumeChange);
    videoEl.addEventListener("seeked", onSeeked);
    videoCleanupFns.push(() => videoEl.removeEventListener("loadedmetadata", onVideoReady));
    videoCleanupFns.push(() => videoEl.removeEventListener("loadeddata", onVideoReady));
    videoCleanupFns.push(() => videoEl.removeEventListener("canplay", onVideoReady));
    videoCleanupFns.push(() => videoEl.removeEventListener("play", onPlay));
    videoCleanupFns.push(() => videoEl.removeEventListener("pause", onPause));
    videoCleanupFns.push(() => videoEl.removeEventListener("volumechange", onVolumeChange));
    videoCleanupFns.push(() => videoEl.removeEventListener("seeked", onSeeked));
  }

  function syncToolButtonModels() {
    uiState.toolButtons.forEach((button) => {
      const isPrimaryTool = button.attr === "data-tool-mode";
      const isPaintTool = button.attr === "data-paint-tool";
      const isMaskTool = button.attr === "data-mask-tool";
      button.active = isPrimaryTool
        ? button.value === editor.primaryTool
        : isPaintTool
          ? button.key === editor.paintTool
          : isMaskTool
            ? button.key === editor.maskTool
            : false;
      button.pressed = button.active ? "true" : (button.pressed == null ? null : "false");
    });
  }

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
  void __sanity;

  function getList() { return type === "stickers" ? state.stickers : state.shots; }
  function getPaintingGroupList() {
    const painting = state.painting || (state.painting = normalizePaintingState(null));
    if (!Array.isArray(painting.groups)) painting.groups = [];
    return painting.groups;
  }
  function getStrokeActionGroupIds(layerKind = "paint") {
    const strokes = Array.isArray(state.painting?.[layerKind]?.strokes) ? state.painting[layerKind].strokes : [];
    const ids = [];
    const seen = new Set();
    for (const stroke of strokes) {
      const gid = String(stroke?.actionGroupId || "").trim();
      if (!gid || seen.has(gid)) continue;
      seen.add(gid);
      ids.push(gid);
    }
    return ids;
  }
  function getPaintStrokeActionGroupIds() {
    return getStrokeActionGroupIds("paint");
  }
  function makeStrokeGroupSelectionId(layerKind, actionGroupId) {
    const gid = String(actionGroupId || "").trim();
    return gid ? `${layerKind === "mask" ? "mask" : "paint"}:${gid}` : "";
  }
  function makeRasterObjectSelectionId(id) {
    const rid = String(id || "").trim();
    return rid ? `raster:${rid}` : "";
  }
  function parseRasterObjectSelectionId(idOrRasterId) {
    const raw = String(idOrRasterId || "").trim();
    if (!raw) return "";
    const m = raw.match(/^raster:(.*)$/);
    return String(m ? (m[1] || "") : raw).trim();
  }
  function parseStrokeGroupSelectionId(idOrActionGroupId, layerKind = null) {
    const raw = String(idOrActionGroupId || "").trim();
    if (!raw) return { layerKind: "paint", actionGroupId: "" };
    const m = raw.match(/^(paint|mask):(.*)$/);
    if (m) return { layerKind: m[1] === "mask" ? "mask" : "paint", actionGroupId: String(m[2] || "").trim() };
    return { layerKind: layerKind === "mask" ? "mask" : "paint", actionGroupId: raw };
  }
  function getNextDisplayZIndex() {
    let maxZ = -1;
    for (const item of (Array.isArray(state.stickers) ? state.stickers : [])) {
      maxZ = Math.max(maxZ, Number(item?.z_index || 0));
    }
    for (const group of getPaintingGroupList()) {
      maxZ = Math.max(maxZ, Number(group?.z_index || 0));
    }
    for (const item of (Array.isArray(state.painting?.raster_objects) ? state.painting.raster_objects : [])) {
      if (String(item?.layerKind || "paint") !== "paint") continue;
      maxZ = Math.max(maxZ, Number(item?.z_index || 0));
    }
    return maxZ + 1;
  }
  function ensurePaintingGroupEntry(actionGroupId, zIndex = null) {
    const gid = String(actionGroupId || "").trim();
    if (!gid) return null;
    const groups = getPaintingGroupList();
    let entry = groups.find((group) => String(group?.actionGroupId || "") === gid);
    if (!entry) {
      entry = {
        id: gid,
        type: "strokeGroup",
        actionGroupId: gid,
        z_index: zIndex == null ? getNextDisplayZIndex() : Math.max(0, Number(zIndex || 0)),
        locked: false,
        frame: null,
      };
      groups.push(entry);
    } else if (zIndex != null) {
      entry.z_index = Math.max(0, Number(zIndex || 0));
    }
    return entry;
  }
  function getFrameCornersUv(frame) {
    if (!frame?.centerUv) return [];
    const centerU = Number(frame.centerUv.u || 0);
    const centerV = Number(frame.centerUv.v || 0);
    const halfW = Number(frame.halfW || 0);
    const halfH = Number(frame.halfH || 0);
    return [
      {
        u: ((centerU - halfW) % 1 + 1) % 1,
        v: clamp(centerV - halfH, 0, 1),
      },
      {
        u: ((centerU + halfW) % 1 + 1) % 1,
        v: clamp(centerV - halfH, 0, 1),
      },
      {
        u: ((centerU + halfW) % 1 + 1) % 1,
        v: clamp(centerV + halfH, 0, 1),
      },
      {
        u: ((centerU - halfW) % 1 + 1) % 1,
        v: clamp(centerV + halfH, 0, 1),
      },
    ];
  }
  function syncPaintingGroupEntries() {
    const ids = new Set(getPaintStrokeActionGroupIds());
    const groups = getPaintingGroupList();
    const next = groups.filter((group) => ids.has(String(group?.actionGroupId || "")));
    ids.forEach((gid) => {
      if (!next.some((group) => String(group?.actionGroupId || "") === gid)) {
        next.push({
          id: gid,
          type: "strokeGroup",
          actionGroupId: gid,
          z_index: getNextDisplayZIndex(),
          locked: false,
          frame: null,
        });
      }
    });
    next.sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
    state.painting.groups = next;
    return next;
  }
  // Compute an axis-aligned bounding box for a stroke group (rot_deg = 0).
  // Returns { centerUv, rot_deg, halfW, halfH, uvPad } or null when no points.
  // Rotation is stored separately and accumulated via transforms — no PCA.
  function computeGroupFrame(actionGroupId, layerKind, strokes) {
    const normalizeU = (u) => ((Number(u || 0) % 1) + 1) % 1;
    const sourcePoints = [];
    for (const stroke of strokes) {
      const geometry = stroke?.geometry;
      const pts = geometry?.geometryKind === "lasso_fill"
        ? geometry?.points
        : (geometry?.processedPoints || geometry?.rawPoints || geometry?.points || []);
      if (Array.isArray(pts)) sourcePoints.push(...pts);
    }
    if (!sourcePoints.length) return null;
    const baseU = normalizeU(sourcePoints[0]?.u || 0);
    let sumU = 0;
    let sumV = 0;
    sourcePoints.forEach((pt) => {
      const u = normalizeU(pt?.u || 0);
      sumU += baseU + shortestWrappedDelta(u, baseU);
      sumV += Number(pt?.v || 0);
    });
    const centU = ((sumU / sourcePoints.length) % 1 + 1) % 1;
    const centV = sumV / sourcePoints.length;
    let minDU = Infinity, maxDU = -Infinity, minV = Infinity, maxV = -Infinity;
    sourcePoints.forEach((pt) => {
      const u = normalizeU(pt?.u || 0);
      const du = shortestWrappedDelta(u, centU);
      minDU = Math.min(minDU, du); maxDU = Math.max(maxDU, du);
      const v = Number(pt?.v || 0);
      minV = Math.min(minV, v); maxV = Math.max(maxV, v);
    });
    const maxStrokeWidth = strokes.reduce((max, stroke) => {
      const presetId = getBrushPresetIdForTool(String(stroke?.toolKind || "pen"));
      const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
      const size = Math.max(1, Number(stroke?.size || 10)) * Math.max(0.1, Number(preset?.sizeScale ?? 1));
      return Math.max(max, size);
    }, 0);
    const uvPad = Math.max(0.0035, maxStrokeWidth / 2048);
    return {
      centerUv: { u: ((centU + (minDU + maxDU) * 0.5) % 1 + 1) % 1, v: clamp((minV + maxV) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (maxDU - minDU) * 0.5 + uvPad,
      halfH: (maxV - minV) * 0.5 + uvPad,
      uvPad,
    };
  }

  // Stroke groups must derive their frame from the current stroke data every time.
  // A persistent/stale frame breaks seam-crossing selection and transforms.
  function ensureGroupFrame(actionGroupId, layerKind, strokes) {
    const gid = String(actionGroupId || "").trim();
    if (!gid) return null;
    const entry = getPaintingGroupList().find((g) => String(g?.actionGroupId || "") === gid);
    if (!entry) return null;
    const s = strokes || getStrokeGroupStrokes(gid, layerKind);
    entry.frame = computeGroupFrame(gid, layerKind, s);
    return entry.frame;
  }

  function getDisplayListObjects() {
    const stickers = (Array.isArray(state.stickers) ? state.stickers : []).map((item) => ({
      type: "sticker",
      id: String(item?.id || ""),
      z_index: Number(item?.z_index || 0),
      item,
    }));
    const groups = syncPaintingGroupEntries().map((group) => ({
      type: "strokeGroup",
      id: String(group?.id || group?.actionGroupId || ""),
      actionGroupId: String(group?.actionGroupId || ""),
      z_index: Number(group?.z_index || 0),
      item: group,
    }));
    const rasterObjects = (Array.isArray(state.painting?.raster_objects) ? state.painting.raster_objects : [])
      .filter((item) => String(item?.layerKind || "paint") === "paint")
      .map((item) => ({
        type: "rasterObject",
        id: String(item?.id || ""),
        z_index: Number(item?.z_index || 0),
        item,
      }));
    return [...stickers, ...groups, ...rasterObjects].sort((a, b) => Number(a.z_index || 0) - Number(b.z_index || 0));
  }
  function getOrderedPaintGroupIds(includeActive = true) {
    const ordered = getDisplayListObjects()
      .filter((entry) => entry.type === "strokeGroup")
      .map((entry) => String(entry.actionGroupId || ""))
      .filter((gid) => !!gid);
    if (includeActive) {
      const activeGid = String(editor.interaction?.stroke?.actionGroupId || "").trim();
      const activeLayerKind = String(editor.interaction?.stroke?.layerKind || "").trim();
      const activeToolKind = String(editor.interaction?.stroke?.toolKind || "").trim();
      if (activeGid && activeLayerKind === "paint" && activeToolKind !== "eraser" && !ordered.includes(activeGid)) {
        ordered.push(activeGid);
      }
    }
    return ordered;
  }

  function getOrderedDisplayListObjects(includeActivePaint = true) {
    const ordered = getDisplayListObjects();
    if (!includeActivePaint) return ordered;
    const activeGid = String(editor.interaction?.stroke?.actionGroupId || "").trim();
    const activeLayerKind = String(editor.interaction?.stroke?.layerKind || "").trim();
    const activeToolKind = String(editor.interaction?.stroke?.toolKind || "").trim();
    if (!activeGid || activeLayerKind !== "paint" || activeToolKind === "eraser") return ordered;
    if (ordered.some((entry) => entry.type === "strokeGroup" && String(entry.actionGroupId || "") === activeGid)) {
      return ordered;
    }
    const selected = getSelected();
    let insertZ = ordered.reduce((max, entry) => Math.max(max, Number(entry?.z_index || 0)), -1) + 1;
    if (selected && isStrokeGroupItem(selected) && String(selected.actionGroupId || "") === activeGid) {
      insertZ = Number(selected.z_index || 0);
    }
    return [
      ...ordered,
      {
        type: "strokeGroup",
        id: activeGid,
        actionGroupId: activeGid,
        z_index: insertZ,
        item: null,
      },
    ].sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
  }
  function getSelectableStrokeGroupItems() {
    return getPaintingGroupList()
      .slice()
      .sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0))
      .map((item) => getStrokeGroupItem(makeStrokeGroupSelectionId("paint", item?.actionGroupId || item?.id || "")))
      .filter(Boolean);
  }
  function getSelectableRasterObjectItems() {
    return (Array.isArray(state.painting?.raster_objects) ? state.painting.raster_objects : [])
      .filter((item) => String(item?.layerKind || "paint") === "paint")
      .slice()
      .sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0))
      .map((item) => getRasterObjectItem(makeRasterObjectSelectionId(item?.id || "")))
      .filter(Boolean);
  }

  function isPaintCompositeInteraction(interaction = editor.interaction) {
    const kind = String(interaction?.kind || "");
    if (kind === "paint_stroke" || kind === "paint_lasso_fill") return true;
    if (kind === "move_stroke_group" || kind === "scale_stroke_group" || kind === "rotate_stroke_group") return true;
    if (kind === "move_raster_object" || kind === "scale_raster_object") return true;
    if (kind === "move_multi") {
      const hasStrokeSnapshots = Array.isArray(interaction?.strokeSnapshots) && interaction.strokeSnapshots.length > 0;
      const hasRasterSnapshots = Array.isArray(interaction?.rasterSnapshots) && interaction.rasterSnapshots.length > 0;
      return hasStrokeSnapshots || hasRasterSnapshots;
    }
    return false;
  }

  function isCutoutPreviewInteraction(interaction = editor.interaction) {
    if (type !== "cutout") return false;
    const kind = String(interaction?.kind || "");
    if (isPaintCompositeInteraction(interaction)) return true;
    if (kind === "move" || kind === "scale" || kind === "scale_x" || kind === "scale_y" || kind === "rotate") {
      return true;
    }
    if (kind === "move_multi") {
      const hasStickerSnapshots = Array.isArray(interaction?.stickerSnapshots) && interaction.stickerSnapshots.length > 0;
      return hasStickerSnapshots;
    }
    return false;
  }

  function getCutoutPreviewUpdateMinDelay(interaction = editor.interaction) {
    if (!isCutoutPreviewInteraction(interaction)) return 0;
    return 0;
  }

  function getSharedLivePaintSurface() {
    let livePaint = null;
    try {
      const orderedGroupIds = getOrderedPaintGroupIds();
      const displayPaint = editor.paintEngine?.getErpTarget?.(orderedGroupIds)?.displayPaint?.canvas || null;
      if (displayPaint) {
        livePaint = {
          source: displayPaint,
          revision: `${getPaintingCompositeRevisionKey()}:${getLivePaintRevisionSuffix()}`,
        };
      }
    } catch {
      livePaint = null;
    }
    return livePaint;
  }

  function getLivePaintRevisionSuffix() {
    const interaction = editor.interaction;
    const interactionKind = String(interaction?.kind || "");
    if (!isPaintCompositeInteraction(interaction)) return "";
    if (interactionKind === "paint_stroke" || interactionKind === "paint_lasso_fill") {
      const geometry = interaction?.stroke?.geometry || null;
      const layerKind = String(interaction?.stroke?.layerKind || "");
      const pointCount = geometry?.rawPoints?.length ?? geometry?.points?.length ?? 0;
      const stamp = String(interaction?._livePreviewToken || "");
      return `_${layerKind || "paint"}_${interactionKind}_live${stamp}_${pointCount}_${editor.livePaintInteractionRevision}`;
    }
    const groupId = String(interaction?.item?.actionGroupId || "");
    const rasterId = String(interaction?.item?.rasterObjectId || interaction?.item?.id || "");
    return `_${interactionKind}_${groupId || rasterId || "active"}_${editor.livePaintInteractionRevision}`;
  }
  function getCutoutSelectableItems() {
    const shots = Array.isArray(state.shots) ? state.shots : [];
    const stickers = Array.isArray(state.stickers) ? state.stickers : [];
    return [...shots, ...stickers];
  }
  function isShotItem(item) {
    return !!item && Array.isArray(state.shots) && state.shots.includes(item);
  }
  function isStickerItem(item) {
    return !!item && Array.isArray(state.stickers) && state.stickers.includes(item);
  }
  function getRasterObjectList() {
    return Array.isArray(state.painting?.raster_objects) ? state.painting.raster_objects : [];
  }
  function getRasterObjectItem(idOrRasterId) {
    const rid = parseRasterObjectSelectionId(idOrRasterId);
    if (!rid) return null;
    const item = getRasterObjectList().find((entry) => String(entry?.id || "").trim() === rid);
    if (!item || String(item?.layerKind || "paint") !== "paint") return null;
    return {
      ...item,
      id: makeRasterObjectSelectionId(rid),
      type: "rasterObject",
      rasterObjectId: rid,
    };
  }
  function isRasterObjectItem(item) {
    if (!item || typeof item !== "object") return false;
    if (String(item.type || "") !== "rasterObject") return false;
    const rid = parseRasterObjectSelectionId(item.rasterObjectId || item.id || "");
    return !!rid && !!getRasterObjectItem(makeRasterObjectSelectionId(rid));
  }
  function getStrokeGroupItem(idOrActionGroupId) {
    const resolved = parseStrokeGroupSelectionId(idOrActionGroupId);
    const gid = String(resolved.actionGroupId || "").trim();
    if (!gid) return null;
    const group = getPaintingGroupList().find((entry) => String(entry?.id || entry?.actionGroupId || "") === gid
      || String(entry?.actionGroupId || "") === gid);
    if (!group) return null;
    return {
      ...group,
      id: makeStrokeGroupSelectionId("paint", gid),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: gid,
    };
  }
  function isStrokeGroupItem(item) {
    if (!item || typeof item !== "object") return false;
    if (String(item.type || "") !== "strokeGroup") return false;
    const actionGroupId = String(item.actionGroupId || "").trim();
    const layerKind = String(item.layerKind || "paint").trim() || "paint";
    return !!actionGroupId && !!getStrokeGroupItem(makeStrokeGroupSelectionId(layerKind, actionGroupId));
  }
  function getStrokeGroupStrokes(idOrActionGroupId, layerKind = null) {
    const resolved = parseStrokeGroupSelectionId(idOrActionGroupId, layerKind);
    const gid = String(resolved.actionGroupId || "").trim();
    if (!gid) return [];
    return getPaintingLayerList(resolved.layerKind)
      .filter((stroke) => String(stroke?.actionGroupId || "").trim() === gid);
  }
  function getStrokeGroupDisplayName(item) {
    const gid = String(item?.actionGroupId || item?.id || "").trim();
    const groups = getPaintingGroupList().slice().sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
    const idx = groups.findIndex((entry) => String(entry?.actionGroupId || entry?.id || "").trim() === gid);
    return idx >= 0 ? `Stroke ${idx + 1}` : "Stroke";
  }
  function getRasterObjectDisplayName(item) {
    const rid = parseRasterObjectSelectionId(item?.rasterObjectId || item?.id || "");
    const items = getRasterObjectList()
      .filter((entry) => String(entry?.layerKind || "paint") === "paint")
      .slice()
      .sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
    const idx = items.findIndex((entry) => String(entry?.id || "").trim() === rid);
    return idx >= 0 ? `Raster ${idx + 1}` : "Raster";
  }
  function getStrokeGeomCacheKey(actionGroupId, layerKind = "paint") {
    const gid = String(actionGroupId || "").trim();
    const kind = String(layerKind || "paint").trim() || "paint";
    const base = `geomv5:${kind}:${gid}:${editor.mode}:${getPaintingRevisionKey()}`;
    if (editor.mode === "frame") {
      const shot = getActiveCutoutShot();
      const shotId = String(shot?.id || "");
      const rect = shot ? getFrameViewRect(shot) : null;
      return `${base}:frame:${shotId}:${Math.round(Number(shot?.yaw_deg || 0) * 1000)}:${Math.round(Number(shot?.pitch_deg || 0) * 1000)}:${Math.round(Number(shot?.roll_deg ?? shot?.rot_deg ?? 0) * 1000)}:${Math.round(Number(shot?.hFOV_deg || 0) * 1000)}:${Math.round(Number(shot?.vFOV_deg || 0) * 1000)}:${Math.round(Number(rect?.x || 0))}:${Math.round(Number(rect?.y || 0))}:${Math.round(Number(rect?.w || 0))}:${Math.round(Number(rect?.h || 0))}`;
    }
    return `${base}:view:${Math.round(Number(editor.viewYaw || 0) * 100)}:${Math.round(Number(editor.viewPitch || 0) * 100)}:${Math.round(Number(editor.viewFov || 0) * 100)}:${Math.round(Number(canvas?.width || 0))}:${Math.round(Number(canvas?.height || 0))}`;
  }
  function translateErpPoint(point, du, dv) {
    if (!point || typeof point !== "object") return point;
    return {
      ...point,
      u: ((Number(point.u || 0) + Number(du || 0)) % 1 + 1) % 1,
      v: clamp(Number(point.v || 0) + Number(dv || 0), 0, 1),
    };
  }
  function shortestWrappedDelta(a, b) {
    let d = Number(a || 0) - Number(b || 0);
    while (d > 0.5) d -= 1;
    while (d < -0.5) d += 1;
    return d;
  }
  function getStrokeGroupCenterUv(idOrActionGroupId, layerKind = null, strokesOverride = null) {
    const resolved = parseStrokeGroupSelectionId(idOrActionGroupId, layerKind);
    const strokes = Array.isArray(strokesOverride) ? strokesOverride : getStrokeGroupStrokes(resolved.actionGroupId, resolved.layerKind);
    const pts = [];
    strokes.forEach((stroke) => {
      const geometry = stroke?.geometry || null;
      const src = geometry?.geometryKind === "lasso_fill"
        ? geometry?.points
        : (geometry?.processedPoints || geometry?.rawPoints || geometry?.points || []);
      if (Array.isArray(src)) pts.push(...src);
    });
    if (!pts.length) return { u: 0.5, v: 0.5 };
    const anchorU = Number(pts[0]?.u || 0);
    let sumU = 0;
    let sumV = 0;
    pts.forEach((pt) => {
      sumU += anchorU + shortestWrappedDelta(Number(pt?.u || 0), anchorU);
      sumV += Number(pt?.v || 0);
    });
    return {
      u: ((sumU / pts.length) % 1 + 1) % 1,
      v: clamp(sumV / pts.length, 0, 1),
    };
  }
  function transformErpPointAround(point, center, scale = 1, rotationDeg = 0) {
    if (!point || typeof point !== "object") return point;
    const cu = Number(center?.u || 0);
    const cv = Number(center?.v || 0);
    const dx = shortestWrappedDelta(Number(point.u || 0), cu);
    const dy = Number(point.v || 0) - cv;
    const rad = Number(rotationDeg || 0) * DEG2RAD;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const s = Math.max(0.02, Number(scale || 1));
    const rx = (dx * cos - dy * sin) * s;
    const ry = (dx * sin + dy * cos) * s;
    return {
      ...point,
      u: ((cu + rx) % 1 + 1) % 1,
      v: clamp(cv + ry, 0, 1),
    };
  }
  function applyStrokeGroupOffset(idOrActionGroupId, du, dv, snapshots = null, layerKind = null, frameSnapshot = null) {
    const resolved = parseStrokeGroupSelectionId(idOrActionGroupId, layerKind);
    const gid = String(resolved.actionGroupId || "").trim();
    if (!gid) return false;
    const strokes = getPaintingLayerList(resolved.layerKind);
    const snapshotMap = Array.isArray(snapshots)
      ? new Map(snapshots.map((stroke) => [String(stroke?.id || ""), stroke]))
      : null;
    let changed = false;
    strokes.forEach((stroke) => {
      if (String(stroke?.actionGroupId || "").trim() !== gid) return;
      const source = snapshotMap?.get(String(stroke?.id || "")) || stroke;
      const geometry = stroke?.geometry;
      const sourceGeometry = source?.geometry;
      if (!geometry || !sourceGeometry) return;
      if (Array.isArray(sourceGeometry.points)) {
        geometry.points = sourceGeometry.points.map((pt) => translateErpPoint(pt, du, dv));
        changed = true;
      }
      if (Array.isArray(sourceGeometry.rawPoints)) {
        geometry.rawPoints = sourceGeometry.rawPoints.map((pt) => translateErpPoint(pt, du, dv));
        changed = true;
      }
      if (Array.isArray(sourceGeometry.processedPoints)) {
        geometry.processedPoints = sourceGeometry.processedPoints.map((pt) => translateErpPoint(pt, du, dv));
        changed = true;
      }
    });
    if (changed && frameSnapshot) {
      const entry = getPaintingGroupList().find((g) => String(g?.actionGroupId || "") === gid);
      if (entry) entry.frame = null;
    }
    return changed;
  }
  function applyStrokeGroupTransform(idOrActionGroupId, scale = 1, rotationDeg = 0, snapshots = null, layerKind = null, frameSnapshot = null) {
    const resolved = parseStrokeGroupSelectionId(idOrActionGroupId, layerKind);
    const gid = String(resolved.actionGroupId || "").trim();
    if (!gid) return false;
    const strokes = getPaintingLayerList(resolved.layerKind);
    const sourceStrokes = Array.isArray(snapshots) ? snapshots : getStrokeGroupStrokes(gid, resolved.layerKind);
    const snapshotMap = Array.isArray(sourceStrokes)
      ? new Map(sourceStrokes.map((stroke) => [String(stroke?.id || ""), stroke]))
      : null;
    // Use the frame's bbox center as pivot when available — it matches what objectGeom() draws.
    const centerUv = frameSnapshot?.centerUv ?? getStrokeGroupCenterUv(gid, resolved.layerKind, sourceStrokes);
    let changed = false;
    strokes.forEach((stroke) => {
      if (String(stroke?.actionGroupId || "").trim() !== gid) return;
      const source = snapshotMap?.get(String(stroke?.id || "")) || stroke;
      const geometry = stroke?.geometry;
      const sourceGeometry = source?.geometry;
      if (!geometry || !sourceGeometry) return;
      if (Array.isArray(sourceGeometry.points)) {
        geometry.points = sourceGeometry.points.map((pt) => transformErpPointAround(pt, centerUv, scale, rotationDeg));
        changed = true;
      }
      if (Array.isArray(sourceGeometry.rawPoints)) {
        geometry.rawPoints = sourceGeometry.rawPoints.map((pt) => transformErpPointAround(pt, centerUv, scale, rotationDeg));
        changed = true;
      }
      if (Array.isArray(sourceGeometry.processedPoints)) {
        geometry.processedPoints = sourceGeometry.processedPoints.map((pt) => transformErpPointAround(pt, centerUv, scale, rotationDeg));
        changed = true;
      }
    });
    if (changed && frameSnapshot) {
      const entry = getPaintingGroupList().find((g) => String(g?.actionGroupId || "") === gid);
      if (entry) entry.frame = null;
    }
    return changed;
  }
  function applyRasterObjectOffset(idOrRasterId, du, dv, snapshot = null) {
    const rid = parseRasterObjectSelectionId(idOrRasterId);
    if (!rid) return false;
    const item = getRasterObjectList().find((entry) => String(entry?.id || "").trim() === rid);
    if (!item) return false;
    const source = snapshot && typeof snapshot === "object" ? snapshot : item;
    const sourceTf = source?.transform || {};
    const nextDu = Number(sourceTf.du || 0) + Number(du || 0);
    const nextDv = clamp(Number(sourceTf.dv || 0) + Number(dv || 0), -1, 1);
    if (!item.transform) item.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 };
    item.transform.du = nextDu;
    item.transform.dv = nextDv;
    return true;
  }
  function applyRasterObjectTransform(idOrRasterId, scale = 1, snapshot = null) {
    const rid = parseRasterObjectSelectionId(idOrRasterId);
    if (!rid) return false;
    const item = getRasterObjectList().find((entry) => String(entry?.id || "").trim() === rid);
    if (!item) return false;
    const source = snapshot && typeof snapshot === "object" ? snapshot : item;
    const sourceTf = source?.transform || {};
    const sourceScale = Math.max(0.01, Number(sourceTf.scale || 1));
    const nextScale = clamp(sourceScale * Math.max(0.01, Number(scale || 1)), 0.01, 100);
    if (!item.transform) item.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 };
    item.transform.scale = nextScale;
    return true;
  }
  function getSelected() {
    const id = String(editor.selectedId || "");
    if (!id) return null;
    const groupItem = getStrokeGroupItem(id);
    if (groupItem) return groupItem;
    const rasterItem = getRasterObjectItem(id);
    if (rasterItem) return rasterItem;
    if (type === "cutout") {
      return getCutoutSelectableItems().find((item) => String(item?.id || "") === id) || null;
    }
    return getList().find((s) => String(s?.id || "") === id) || null;
  }
  function getSelectedItems() {
    const ids = Array.isArray(editor.selectedIds) && editor.selectedIds.length
      ? editor.selectedIds
      : (editor.selectedId ? [editor.selectedId] : []);
    const out = [];
    const seen = new Set();
    ids.forEach((id) => {
      const key = String(id || "").trim();
      if (!key || seen.has(key)) return;
      seen.add(key);
      const item = key === String(editor.selectedId || "") ? getSelected() : (
        getStrokeGroupItem(key)
        || getRasterObjectItem(key)
        || (type === "cutout"
          ? getCutoutSelectableItems().find((entry) => String(entry?.id || "") === key)
          : getList().find((entry) => String(entry?.id || "") === key))
      );
      if (item) out.push(item);
    });
    return out;
  }
  function getMultiSelectionGeom(items = null) {
    const selectedItems = Array.isArray(items) ? items : getSelectedItems();
    if (!selectedItems || selectedItems.length < 2) return null;
    const geoms = selectedItems
      .map((item) => objectGeom(item))
      .filter((geom) => geom?.visible && Array.isArray(geom.corners) && geom.corners.length);
    if (!geoms.length) return null;
    const xs = geoms.flatMap((geom) => geom.corners.map((p) => Number(p?.x || 0)));
    const ys = geoms.flatMap((geom) => geom.corners.map((p) => Number(p?.y || 0)));
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    return {
      kind: "multiSelection",
      visible: true,
      center: { x: (minX + maxX) * 0.5, y: (minY + maxY) * 0.5 },
      corners: [
        { x: minX, y: minY },
        { x: maxX, y: minY },
        { x: maxX, y: maxY },
        { x: minX, y: maxY },
      ],
      edgeMidpoints: [
        { edge: "top", x: (minX + maxX) * 0.5, y: minY, a: { x: minX, y: minY }, b: { x: maxX, y: minY } },
        { edge: "right", x: maxX, y: (minY + maxY) * 0.5, a: { x: maxX, y: minY }, b: { x: maxX, y: maxY } },
        { edge: "bottom", x: (minX + maxX) * 0.5, y: maxY, a: { x: maxX, y: maxY }, b: { x: minX, y: maxY } },
        { edge: "left", x: minX, y: (minY + maxY) * 0.5, a: { x: minX, y: maxY }, b: { x: minX, y: minY } },
      ],
      rotateStemBase: { x: (minX + maxX) * 0.5, y: minY },
      rotateHandle: { x: (minX + maxX) * 0.5, y: minY - 30 },
    };
  }
  function isItemSelected(item) {
    const id = String(item?.id || "").trim();
    return !!id && Array.isArray(editor.selectedIds) && editor.selectedIds.includes(id);
  }
  function getSelectedKind() {
    const selected = getSelected();
    if (!selected) return null;
    if (isStrokeGroupItem(selected) || isRasterObjectItem(selected)) return "stroke";
    return isShotItem(selected) ? "frame" : "image";
  }
  function isItemLocked(item) {
    if (!item || typeof item !== "object") return false;
    if (isStrokeGroupItem(item)) {
      const gid = String(item.actionGroupId || item.id || "").trim();
      const group = getPaintingGroupList().find((entry) => String(entry?.actionGroupId || entry?.id || "").trim() === gid);
      return group?.locked === true;
    }
    if (isRasterObjectItem(item)) {
      const rid = parseRasterObjectSelectionId(item.rasterObjectId || item.id || "");
      const raster = getRasterObjectList().find((entry) => String(entry?.id || "").trim() === rid);
      return raster?.locked === true;
    }
    return item.locked === true;
  }
  function areAllSelectedItemsLocked(items = null) {
    const selectedItems = Array.isArray(items) ? items : getSelectedItems();
    return selectedItems.length > 0 && selectedItems.every((item) => isItemLocked(item));
  }
  function setItemLocked(item, locked) {
    const next = locked === true;
    if (!item || typeof item !== "object") return false;
    if (isStrokeGroupItem(item)) {
      const gid = String(item.actionGroupId || item.id || "").trim();
      const group = getPaintingGroupList().find((entry) => String(entry?.actionGroupId || entry?.id || "").trim() === gid);
      if (!group || group.locked === next) return false;
      group.locked = next;
      return true;
    }
    if (isRasterObjectItem(item)) {
      const rid = parseRasterObjectSelectionId(item.rasterObjectId || item.id || "");
      const raster = getRasterObjectList().find((entry) => String(entry?.id || "").trim() === rid);
      if (!raster || raster.locked === next) return false;
      raster.locked = next;
      return true;
    }
    if (item.locked === next) return false;
    item.locked = next;
    return true;
  }
  function toggleSelectedLock() {
    if (readOnly) return;
    const selectedItems = getSelectedItems();
    if (!selectedItems.length) return;
    const nextLocked = !areAllSelectedItemsLocked(selectedItems);
    let changed = false;
    selectedItems.forEach((item) => {
      if (setItemLocked(item, nextLocked)) changed = true;
    });
    if (!changed) return;
    pushHistory();
    commitAndRefreshNode();
    updateSelectionMenu();
    requestDraw();
  }
  function setSelectedItem(item) {
    editor.selectedId = item?.id || null;
    editor.selectedIds = item?.id ? [item.id] : [];
    if (item && isStickerItem(item)) state.active.selected_sticker_id = item.id || null;
    else state.active.selected_sticker_id = null;
    if (item && isShotItem(item)) state.active.selected_shot_id = item.id || null;
    else if (!item) state.active.selected_shot_id = null;
    else if (!isShotItem(item)) state.active.selected_shot_id = state.active.selected_shot_id;
  }
  function setSelectedItems(items, primaryId = null) {
    const nextIds = [];
    const seen = new Set();
    (Array.isArray(items) ? items : []).forEach((item) => {
      const id = String(item?.id || "").trim();
      if (!id || seen.has(id)) return;
      seen.add(id);
      nextIds.push(id);
    });
    editor.selectedIds = nextIds;
    const preferred = String(primaryId || "").trim();
    editor.selectedId = preferred && nextIds.includes(preferred)
      ? preferred
      : (nextIds[nextIds.length - 1] || null);
    const primary = getSelected();
    state.active.selected_sticker_id = primary && isStickerItem(primary) ? primary.id || null : null;
    if (primary && isShotItem(primary)) state.active.selected_shot_id = primary.id || null;
    else if (!nextIds.length) state.active.selected_shot_id = null;
  }
  function getCutoutInspectorItems() {
    const shots = (Array.isArray(state.shots) ? state.shots : []).map((item, index) => ({
      kind: "frame",
      item,
      label: String(item?.label || `Frame ${index + 1}`),
    }));
    const images = (Array.isArray(state.stickers) ? state.stickers : []).map((item, index) => {
      const baseLabel = isExternalSticker(item)
        ? String(item.id || EXTERNAL_STICKER_ID)
        : String(state.assets?.[item.asset_id]?.name || item.asset_id || item.id || `Image ${index + 1}`);
      return {
        kind: "image",
        item,
        label: baseLabel,
      };
    });
    return [...shots, ...images];
  }

  function getSelectionItemIcon(kind) {
    if (kind === "frame") return ICON.camera;
    if (kind === "stroke") return ICON.paintbrush_vertical_tool;
    return ICON.image;
  }

  function getSelectionItemLabelData(entry) {
    if (!entry || !entry.item) {
      return {
        label: String(entry?.label || ""),
        icon: null,
      };
    }
    return {
      label: String(entry.label || ""),
      icon: getSelectionItemIcon(entry.kind),
    };
  }
  function getNextStickerZIndex() {
    return getNextDisplayZIndex();
  }
  function isExternalSticker(item) {
    if (!item || typeof item !== "object") return false;
    return String(item.id || "") === EXTERNAL_STICKER_ID
      || String(item.source_kind || "") === EXTERNAL_STICKER_SOURCE_KIND;
  }
  function isStickerHidden(item) {
    return !!(item && typeof item === "object" && item.visible === false);
  }
  function getStickerDisplayAlpha(item) {
    if (isExternalSticker(item) && isStickerHidden(item)) return HIDDEN_PREVIEW_OPACITY;
    return 1;
  }
  function getActivePaintToolKind() {
    return editor.primaryTool === "mask" ? editor.maskTool : editor.paintTool;
  }
  function isActiveLassoTool() {
    return String(getActivePaintToolKind() || "") === "lasso_fill";
  }
  function toggleSelectedExternalStickerVisibility() {
    if (readOnly) return;
    const selected = getSelected();
    if (!selected || !isExternalSticker(selected)) return;
    selected.visible = isStickerHidden(selected);
    markObjectVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw();
  }
  function restoreSelectedToInitialPose() {
    if (readOnly || type !== "stickers") return;
    const selected = getSelected();
    if (!selected || !isExternalSticker(selected)) return;
    const initial = selected.initial_pose;
    if (!initial || typeof initial !== "object") return;
    selected.yaw_deg = Number(initial.yaw_deg ?? selected.yaw_deg ?? 0);
    selected.pitch_deg = Number(initial.pitch_deg ?? selected.pitch_deg ?? 0);
    selected.hFOV_deg = Number(initial.hFOV_deg ?? selected.hFOV_deg ?? 30);
    const previewImg = getStickerUiImage(EXTERNAL_STICKER_PREVIEW_KEY, () => {
      requestDraw();
    });
    if (previewImg && (previewImg.complete || previewImg.naturalWidth || previewImg.width)) {
      selected.vFOV_deg = computeStickerVFov(
        Number(initial.hFOV_deg ?? selected.hFOV_deg ?? 30),
        Number(previewImg.naturalWidth || previewImg.width || 1),
        Number(previewImg.naturalHeight || previewImg.height || 1),
      );
    } else {
      selected.vFOV_deg = Number(initial.vFOV_deg ?? selected.vFOV_deg ?? 30);
    }
    selected.rot_deg = Number(initial.rot_deg ?? selected.rot_deg ?? 0);
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw();
  }
  function getRestorePoseForSticker(item) {
    if (!item || !isExternalSticker(item)) return null;
    const initial = item.initial_pose;
    if (!initial || typeof initial !== "object") return null;
    const pose = {
      yaw_deg: Number(initial.yaw_deg ?? item.yaw_deg ?? 0),
      pitch_deg: Number(initial.pitch_deg ?? item.pitch_deg ?? 0),
      hFOV_deg: Number(initial.hFOV_deg ?? item.hFOV_deg ?? 30),
      vFOV_deg: Number(initial.vFOV_deg ?? item.vFOV_deg ?? 30),
      rot_deg: Number(initial.rot_deg ?? item.rot_deg ?? 0),
    };
    const previewImg = getStickerUiImage(EXTERNAL_STICKER_PREVIEW_KEY, () => {
      requestDraw();
    });
    if (previewImg && (previewImg.complete || previewImg.naturalWidth || previewImg.width)) {
      pose.vFOV_deg = computeStickerVFov(
        pose.hFOV_deg,
        Number(previewImg.naturalWidth || previewImg.width || 1),
        Number(previewImg.naturalHeight || previewImg.height || 1),
      );
    }
    return pose;
  }
  function canRestoreSelectedToInitial() {
    const selected = getSelected();
    if (!selected || !isExternalSticker(selected)) return false;
    const restorePose = getRestorePoseForSticker(selected);
    if (!restorePose) return false;
    const close = (a, b) => Math.abs(Number(a || 0) - Number(b || 0)) <= 1e-4;
    return !(
      close(selected.yaw_deg, restorePose.yaw_deg)
      && close(selected.pitch_deg, restorePose.pitch_deg)
      && close(selected.hFOV_deg, restorePose.hFOV_deg)
      && close(selected.vFOV_deg, restorePose.vFOV_deg)
      && close(selected.rot_deg, restorePose.rot_deg)
    );
  }
  function getNodeUiList(key) {
    return comfyMedia.uiList(node, key);
  }
  function getNodeUiValue(key) {
    return comfyMedia.uiValue(node, key);
  }
  function getModalVideoUiKeys() {
    const nodeName = String(node?.comfyClass || node?.type || node?.title || "");
    if (isPanoramaPreviewNodeName(nodeName)) {
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    }
    if (type === "stickers" || type === "cutout") {
      return { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" };
    }
    return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function getVideoMetaEntry() {
    const { metaKey } = getModalVideoUiKeys();
    const meta = getNodeUiValue(metaKey);
    if (Array.isArray(meta) && meta.length > 0 && meta[0] && typeof meta[0] === "object") return meta[0];
    if (meta && typeof meta === "object") return meta;
    return null;
  }
  function getMediaRevisionToken(media) {
    if (!media) return "none";
    if (media instanceof HTMLVideoElement) {
      return [
        String(media.currentSrc || media.src || ""),
        Number(media.videoWidth || 0),
        Number(media.videoHeight || 0),
        String(media.dataset?.panoFrameIdx || "0"),
      ].join("|");
    }
    if (media instanceof HTMLCanvasElement) {
      return [
        "canvas",
        Number(media.width || 0),
        Number(media.height || 0),
        String(media.__panoFrameIdx || 0),
      ].join("|");
    }
    return [
      String(media.currentSrc || media.src || ""),
      Number(media.naturalWidth || media.width || 0),
      Number(media.naturalHeight || media.height || 0),
    ].join("|");
  }
  function formatVideoTime(seconds) {
    const total = Math.max(0, Math.floor(Number(seconds || 0)));
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    return `${mins}:${String(secs).padStart(2, "0")}`;
  }
  function syncVideoTransportState(extra = {}) {
    const current = Number(extra.currentTime ?? videoState.editorTime ?? 0);
    const duration = Number(extra.duration ?? uiState.videoTransport.duration ?? 0);
    const ready = Object.prototype.hasOwnProperty.call(extra, "ready")
      ? !!extra.ready
      : !!uiState.videoTransport.ready;
    const playing = Object.prototype.hasOwnProperty.call(extra, "playing")
      ? !!extra.playing
      : !!uiState.videoTransport.playing;
    const visible = Object.prototype.hasOwnProperty.call(extra, "visible")
      ? !!extra.visible
      : !!uiState.videoTransport.visible;
    const muted = Object.prototype.hasOwnProperty.call(extra, "muted")
      ? !!extra.muted
      : !!(videoEl instanceof HTMLVideoElement ? videoEl.muted : uiState.videoTransport.muted);
    const volume = Number(
      Object.prototype.hasOwnProperty.call(extra, "volume")
        ? extra.volume
        : (videoEl instanceof HTMLVideoElement ? videoEl.volume : uiState.videoTransport.volume)
    );
    const hasAudio = Object.prototype.hasOwnProperty.call(extra, "hasAudio")
      ? !!extra.hasAudio
      : detectVideoHasAudio(videoEl);
    const loop = Object.prototype.hasOwnProperty.call(extra, "loop")
      ? !!extra.loop
      : !!uiState.videoTransport.loop;
    Object.assign(uiState.videoTransport, {
      ready,
      playing,
      visible,
      loop,
      currentTime: Number.isFinite(current) ? current : 0,
      duration: Number.isFinite(duration) ? duration : 0,
      progressPct: duration > 1e-6 ? Math.max(0, Math.min(100, (current / duration) * 100)) : 0,
      currentTimeLabel: formatVideoTime(current),
      durationLabel: formatVideoTime(duration),
      frameCount: Math.max(0, Number(extra.frameCount ?? uiState.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(extra.fps ?? uiState.videoTransport.fps ?? 24)),
      mode: String(extra.mode || videoState.mode || "playback"),
      hasAudio,
      muted,
      volume: Math.max(0, Math.min(1, Number.isFinite(volume) ? volume : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(volume) ? volume : 1)) * 100),
      thumbnails: Array.isArray(extra.thumbnails) ? extra.thumbnails : uiState.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(extra.thumbnailCount ?? uiState.videoTransport.thumbnailCount ?? VIDEO_THUMBNAIL_COUNT)),
    });
  }
  function getVideoTransportVisible() {
    return !!(videoEl instanceof HTMLVideoElement
      && videoEl.getAttribute("src")
      && editor.primaryTool !== "paint"
      && editor.primaryTool !== "mask");
  }
  function syncVideoTransportVisibility() {
    syncVideoTransportState({
      visible: getVideoTransportVisible(),
    });
  }
  function captureStillFrameFromVideo() {
    if (!(videoEl instanceof HTMLVideoElement)) return false;
    if (Number(videoEl.videoWidth || 0) < 1 || Number(videoEl.videoHeight || 0) < 1) return false;
    const width = Number(videoEl.videoWidth || 0);
    const height = Number(videoEl.videoHeight || 0);
    if (stillCanvas.width !== width || stillCanvas.height !== height) {
      stillCanvas.width = width;
      stillCanvas.height = height;
    }
    const ctx2d = stillCanvas.getContext("2d");
    if (!ctx2d) return false;
    ctx2d.clearRect(0, 0, width, height);
    ctx2d.drawImage(videoEl, 0, 0, width, height);
    stillCanvas.__panoFrameIdx = Number(stillCanvas.__panoFrameIdx || 0) + 1;
    videoState.presentedTime = Number(videoState.editorTime || videoEl.currentTime || 0);
    return true;
  }
  function getDisplayBackgroundSource() {
    if (
      videoState.mode === "scrub"
      && Number(stillCanvas.width || 0) > 0
      && Number(stillCanvas.height || 0) > 0
      && Number(stillCanvas.__panoFrameIdx || 0) > 0
    ) {
      return stillCanvas;
    }
    if (
      videoEl instanceof HTMLVideoElement
      && Number(videoEl.videoWidth || 0) > 0
      && Number(videoEl.videoHeight || 0) > 0
      && Number(videoEl.readyState || 0) >= 2
    ) {
      return videoEl;
    }
    return null;
  }
  function issueVideoSeek(targetTime) {
    if (!(videoEl instanceof HTMLVideoElement)) return;
    if (Number(videoEl.videoWidth || 0) < 1 || Number(videoEl.videoHeight || 0) < 1) return;
    const nextTime = Math.max(0, Number(targetTime || 0));
    videoState.requestedTime = nextTime;
    if (videoState.seeking) return;
    if (Math.abs(Number(videoEl.currentTime || 0) - nextTime) <= 0.0005) return;
    videoState.seeking = true;
    try {
      videoEl.currentTime = nextTime;
    } catch {
      videoState.seeking = false;
    }
  }
  function refreshModalVideoSource() {
    if (!(videoEl instanceof HTMLVideoElement)) return null;
    const { videoKey } = getModalVideoUiKeys();
    const entry = getNodeUiList(videoKey)[0] || null;
    const nextSrc = mediaSource(entry);
    const meta = getVideoMetaEntry();
    const frameCount = Math.max(0, Number(meta?.frames || 0));
    const fps = Math.max(1, Number(meta?.fps || 24));
    const duration = Number(meta?.duration || (frameCount > 0 ? frameCount / fps : 0));
    const hasAudio = !!meta?.has_audio || detectVideoHasAudio(videoEl);
    if (nextSrc && videoEl.dataset.panoSrc !== nextSrc) {
      videoEl.pause();
      videoEl.dataset.panoSrc = nextSrc;
      videoEl.dataset.panoFrameIdx = "0";
      videoEl.loop = !!uiState.videoTransport.loop;
      videoEl.muted = !!uiState.videoTransport.muted;
      videoEl.volume = Math.max(0, Math.min(1, Number(uiState.videoTransport.volume ?? 1)));
      videoEl.src = nextSrc;
      videoEl.load();
      void buildVideoThumbnails(nextSrc, duration, fps);
    } else if (!nextSrc && videoEl.getAttribute("src")) {
      videoEl.pause();
      videoEl.removeAttribute("src");
      videoEl.load();
      resetVideoThumbnails();
    }
    if (videoEl.loop !== !!uiState.videoTransport.loop) {
      videoEl.loop = !!uiState.videoTransport.loop;
    }
    if (nextSrc && (!Array.isArray(uiState.videoTransport.thumbnails) || uiState.videoTransport.thumbnails.length === 0)) {
      void buildVideoThumbnails(nextSrc, duration, fps);
    }
    if (!nextSrc) {
      resetVideoThumbnails();
    }
    syncVideoTransportState({
      ready: !!nextSrc,
      playing: !videoEl.paused && !videoEl.ended,
      visible: !!nextSrc && editor.primaryTool !== "paint" && editor.primaryTool !== "mask",
      currentTime: videoState.editorTime,
      duration,
      frameCount,
      fps,
      mode: videoState.mode,
      hasAudio,
      loop: !!videoEl.loop,
      muted: !!videoEl.muted,
      volume: Number(videoEl.volume ?? uiState.videoTransport.volume ?? 1),
      thumbnailCount: uiState.videoTransport.thumbnailCount,
    });
    return nextSrc || null;
  }
  function normalizeInputPoseValue(value, debugValue = null) {
    if (value && typeof value === "object" && !Array.isArray(value)) return value;
    if (Array.isArray(value) && value.length > 0) {
      const first = value[0];
      if (first && typeof first === "object" && !Array.isArray(first)) return first;
    }
    if (Array.isArray(debugValue) && debugValue.length > 0) {
      const parsed = debugValue[0]?.parsed_state;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return {
          yaw_deg: Number(parsed.yaw_deg || 0),
          pitch_deg: Number(parsed.pitch_deg || 0),
          hFOV_deg: Number(parsed.hFOV_deg || 30),
          rot_deg: Number(parsed.roll_deg || 0),
        };
      }
    }
    return null;
  }
  function getStickerUiImage(key, onLoad = null) {
    return mediaUiImage(node, key, imageCache, onLoad || (() => requestDraw()));
  }

  function getExternalStickerPreviewImage(onLoad = null) {
    return getStickerUiImage(EXTERNAL_STICKER_PREVIEW_KEY, onLoad);
  }

  function computeStickerVFov(hFovDeg, width, height) {
    const w = Math.max(1, Number(width || 1));
    const h = Math.max(1, Number(height || 1));
    const hf = clamp(Number(hFovDeg || 30), 0.1, 179) * DEG2RAD;
    const vf = 2 * Math.atan(Math.tan(hf * 0.5) * (h / w));
    return clamp(vf * RAD2DEG, 0.1, 179);
  }
  function parseLinkedStickerState(raw) {
    const text = String(raw || "").trim();
    if (!text) return null;
    try {
      const parsed = JSON.parse(text);
      if (!parsed || typeof parsed !== "object") return null;
      if (String(parsed.kind || "") !== "pano_sticker_state") return null;
      const versionValue = parsed.version;
      let version = null;
      if (typeof versionValue === "number" && Number.isInteger(versionValue)) {
        version = versionValue;
      } else if (typeof versionValue === "string" && /^\d+$/.test(versionValue)) {
        version = Number.parseInt(versionValue, 10);
      }
      if (version !== 1) return null;
      const pose = parsed.pose;
      if (!pose || typeof pose !== "object") return null;
      const yawRaw = Number(pose.yaw_deg);
      const pitchRaw = Number(pose.pitch_deg);
      const rollRaw = Number(pose.roll_deg);
      const hRaw = Number(pose.hFOV_deg);
      if (![yawRaw, pitchRaw, rollRaw, hRaw].every((v) => Number.isFinite(v))) return null;
      let yaw = ((yawRaw + 180) % 360 + 360) % 360 - 180;
      if (Object.is(yaw, -0)) yaw = 0;
      const out = {
        yaw_deg: yaw,
        pitch_deg: clamp(pitchRaw, -89.9, 89.9),
        roll_deg: rollRaw,
        hFOV_deg: clamp(hRaw, 0.1, 179),
      };
      const sourceAspect = Number(parsed.source_aspect);
      if (Number.isFinite(sourceAspect) && sourceAspect > 0) out.source_aspect = sourceAspect;
      return out;
    } catch {
      return null;
    }
  }
  function buildCanonicalCutoutStickerState(item) {
    const yawRaw = Number(item?.yaw_deg);
    const pitchRaw = Number(item?.pitch_deg);
    const rollRaw = Number(item?.roll_deg ?? item?.rot_deg);
    const hFovRaw = Number(item?.hFOV_deg);
    const sourceAspect = deriveCutoutAspectFromFov(item);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: wrapYaw(Number.isFinite(yawRaw) ? yawRaw : 0),
        pitch_deg: clamp(Number.isFinite(pitchRaw) ? pitchRaw : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(rollRaw) ? rollRaw : 0,
        hFOV_deg: clamp(Number.isFinite(hFovRaw) ? hFovRaw : 90, 0.1, 179),
      },
      source_aspect: sourceAspect,
    };
  }
  function buildCanonicalSelectedStickerState(item) {
    if (!item || typeof item !== "object") return buildCanonicalCutoutStickerState(null);
    const yawRaw = Number(item?.yaw_deg);
    const pitchRaw = Number(item?.pitch_deg);
    const rollRaw = Number(item?.roll_deg ?? item?.rot_deg);
    const hFovRaw = Number(item?.hFOV_deg);
    const vFovRaw = Number(item?.vFOV_deg);
    let sourceAspect = 1;
    if (Number.isFinite(hFovRaw) && Number.isFinite(vFovRaw)) {
      const hf = clamp(hFovRaw, 0.1, 179) * DEG2RAD;
      const vf = clamp(vFovRaw, 0.1, 179) * DEG2RAD;
      const tanV = Math.tan(vf * 0.5);
      if (Math.abs(tanV) > 1e-6) {
        const ratio = Math.tan(hf * 0.5) / tanV;
        if (Number.isFinite(ratio) && ratio > 0) sourceAspect = ratio;
      }
    }
    if (item?.asset_id && state?.assets?.[item.asset_id]) {
      const asset = state.assets[item.asset_id];
      const width = Number(asset?.w || 0);
      const height = Number(asset?.h || 0);
      if (width > 0 && height > 0) sourceAspect = width / height;
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: wrapYaw(Number.isFinite(yawRaw) ? yawRaw : 0),
        pitch_deg: clamp(Number.isFinite(pitchRaw) ? pitchRaw : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(rollRaw) ? rollRaw : 0,
        hFOV_deg: clamp(Number.isFinite(hFovRaw) ? hFovRaw : 30, 0.1, 179),
      },
      source_aspect: sourceAspect,
    };
  }
  function getLinkedStringInputValue(inputName) {
    return comfyMedia.linkedValue(node, inputName);
  }
  function buildExternalInitialPose(inputPose, stateRaw, previewImg) {
    const parsed = (inputPose && typeof inputPose === "object")
      ? {
        yaw_deg: Number(inputPose.yaw_deg || 0),
        pitch_deg: Number(inputPose.pitch_deg || 0),
        roll_deg: Number(inputPose.rot_deg ?? inputPose.roll_deg ?? 0),
        hFOV_deg: Number(inputPose.hFOV_deg || 30),
      }
      : parseLinkedStickerState(stateRaw);
    if (parsed) {
      const width = Number(previewImg?.naturalWidth || previewImg?.width || parsed.source_aspect || 1);
      const height = Number(previewImg?.naturalHeight || previewImg?.height || 1);
      return {
        yaw_deg: Number(parsed.yaw_deg || 0),
        pitch_deg: Number(parsed.pitch_deg || 0),
        hFOV_deg: Number(parsed.hFOV_deg || 30),
        vFOV_deg: computeStickerVFov(parsed.hFOV_deg, width, height),
        rot_deg: Number(parsed.roll_deg || 0),
      };
    }
    const width = Number(previewImg?.naturalWidth || previewImg?.width || 1);
    const height = Number(previewImg?.naturalHeight || previewImg?.height || 1);
    return {
      yaw_deg: Number(editor.viewYaw || 0),
      pitch_deg: Number(editor.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: computeStickerVFov(30, width, height),
      rot_deg: 0,
    };
  }
  function reconcileExternalStickerFromInputs(reason = "sync") {
    if (type !== "stickers" || readOnly) return;
    const input = Array.isArray(node?.inputs)
      ? node.inputs.find((entry) => String(entry?.name || "") === "sticker_image")
      : null;
    const linkId = input?.link ?? null;
    const previewImg = getExternalStickerPreviewImage(() => {
      node.__panoExternalStickerSync?.("image-loaded");
    });
    const inputPose = normalizeInputPoseValue(getNodeUiValue("pano_sticker_input_pose"), null);
    const stateRaw = getLinkedStringInputValue("sticker_state");
    const stateHash = comfyMedia.externalStateHash(node, stateRaw);
    const stickers = Array.isArray(state.stickers) ? state.stickers : (state.stickers = []);
    const existingIndex = stickers.findIndex((item) => String(item?.id || "") === EXTERNAL_STICKER_ID);
    if (linkId == null) {
      if (existingIndex >= 0) {
        stickers.splice(existingIndex, 1);
        if (editor.selectedId === EXTERNAL_STICKER_ID) {
          editor.selectedId = null;
          editor.selectedIds = [];
          state.active.selected_sticker_id = null;
        }
        commitAndRefreshNode();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
      }
      return;
    }
    const maxZ = stickers.reduce((acc, item) => Math.max(acc, Number(item?.z_index || 0)), -1);
    let target = existingIndex >= 0 ? stickers[existingIndex] : null;
    const sourceChanged = !target
      || Number(target.source_link_id ?? -1) !== Number(linkId)
      || String(target.source_state_hash || "") !== stateHash;
    if (!target) {
      target = {
        id: EXTERNAL_STICKER_ID,
        source_kind: EXTERNAL_STICKER_SOURCE_KIND,
      };
      stickers.push(target);
    }
    target.id = EXTERNAL_STICKER_ID;
    target.source_kind = EXTERNAL_STICKER_SOURCE_KIND;
    target.source_link_id = Number(linkId);
    target.source_state_hash = stateHash;
    target.visible = target.visible !== false;
    let stateChanged = false;
    if (sourceChanged) {
      const pose = buildExternalInitialPose(inputPose, stateRaw, previewImg);
      Object.assign(target, pose, {
        initial_pose: { ...pose },
        visible: true,
        z_index: maxZ + 1,
      });
      stateChanged = true;
    } else if (previewImg && (previewImg.complete || previewImg.naturalWidth || previewImg.width)) {
      const nextVFov = computeStickerVFov(
        Number(target.hFOV_deg || 30),
        Number(previewImg.naturalWidth || previewImg.width || 1),
        Number(previewImg.naturalHeight || previewImg.height || 1),
      );
      if (Math.abs(Number(target.vFOV_deg || 0) - nextVFov) > 1e-6) {
        target.vFOV_deg = nextVFov;
        stateChanged = true;
      }
    }
    if (stateChanged) {
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
    }
    requestDraw();
    void reason;
  }
  function clearSelection(options = {}) {
    const preservePanelValues = options.preservePanelValues !== false;
    const selectedBeforeClear = preservePanelValues ? getSelected() : null;
    if (selectedBeforeClear) {
      editor.panelLastValues = {
        yaw_deg: Number(selectedBeforeClear.yaw_deg || 0),
        pitch_deg: Number(selectedBeforeClear.pitch_deg || 0),
        hFOV_deg: Number(selectedBeforeClear.hFOV_deg || (type === "stickers" ? 30 : 90)),
        vFOV_deg: Number(selectedBeforeClear.vFOV_deg || (type === "stickers" ? 30 : 60)),
        rot_deg: Number(selectedBeforeClear.rot_deg || 0),
        roll_deg: Number(selectedBeforeClear.roll_deg || 0),
        aspect_id: getCutoutAspectLabel(selectedBeforeClear),
      };
    }
    editor.selectedId = null;
    editor.selectedIds = [];
    editor.cutoutAspectOpen = false;
    state.active.selected_sticker_id = null;
    state.active.selected_shot_id = null;
  }
  function applyInitialCutoutFocus() {
    if (type !== "cutout") return;
    const activeShot = getActiveCutoutShot();
    if (!activeShot) return;
    editor.selectedId = String(activeShot.id || "") || null;
    editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
  }
  function syncLookAtFrameButtonState() {
    if (type !== "cutout") return;
    const shot = getActiveCutoutShot();
    patchUiButton(uiState.toolButtons, "value", "add-or-look", {
      visible: true,
      accent: true,
      label: shot ? "Look At Frame" : "Add Frame",
      tip: shot ? "Look at frame" : "Add frame",
      icon: shot ? ICON.camera : ICON.plus_circle,
    });
  }

  function syncFloatingViewButtonState() {
    const frameMode = type === "cutout" && editor.mode === "frame";
    const gridVisible = !frameMode && !!editor.showGrid;
    patchUiButton(uiState.floatingButtons, "action", "reset-view", {
      disabled: readOnly || frameMode,
    });
    patchUiButton(uiState.floatingButtons, "action", "toggle-grid", {
      icon: gridVisible ? ICON.eye : ICON.eye_dashed,
      pressed: gridVisible ? "true" : "false",
      label: gridVisible ? "Hide Grid" : "Show Grid",
      tip: gridVisible ? "Hide grid" : "Show grid",
      disabled: readOnly || frameMode,
    });
  }

  function syncViewToggleState() {
    const hasFrame = !!getActiveCutoutShot();
    if (editor.mode === "frame" && !hasFrame) editor.mode = "pano";
    editor.outputPreviewRect = null;
    uiState.viewButtons.forEach((button) => {
      const active = button.key === editor.mode;
      button.pressed = active ? "true" : "false";
      button.visible = !(button.key === "frame" && type !== "cutout");
      button.disabled = button.key === "frame" ? !hasFrame : false;
    });
    const frameShot = type === "cutout" && editor.mode === "frame" ? getActiveCutoutShot() : null;
    uiState.frameRail.visible = !!frameShot;
    uiState.frameRail.disabled = readOnly;
    uiState.frameRollKnob.visible = !!frameShot && !readOnly;
    uiState.frameRollKnob.disabled = readOnly;
    uiState.frameRollKnob.rollDeg = Number(frameShot?.roll_deg ?? frameShot?.rot_deg ?? 0);
    uiState.frameRollKnob.displayValue = formatParamValue(uiState.frameRollKnob.rollDeg);
    uiState.frameRollKnob.dragging = editor.interaction?.kind === "roll_frame";
    uiState.frameRollKnob.armed = !!frameShot && editor.altModifier === true;
    uiState.frameRail.rollKnob = uiState.frameRollKnob;
    uiState.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((value) => ({
      value,
      label: value,
      active: !!frameShot && String(getCutoutAspectLabel(frameShot)) === value,
    }));
    if (!frameShot) uiState.frameRail.aspectOpen = false;
    uiState.outputPreviewToggle.visible = type === "cutout" && editor.mode !== "frame" && !!getActiveCutoutShot();
    if (type === "cutout" && uiState.cameraPreview) {
      // Frame view already shows the exact output inside the gate, so the
      // floating preview is redundant there. Keeping it in sync with
      // drawCutoutOutputPreview() also matters for correctness: its box height
      // follows the shot aspect, and it is measured by measureFrameSafeRect().
      // Letting it appear in Frame — even for one frame — feeds the shot back
      // into the safe rect and therefore into the background scale.
      uiState.cameraPreview.visible = editor.mode !== "frame";
      uiState.cameraPreview.expanded = !!editor.outputPreviewExpanded;
      uiState.cameraPreview.settled = uiState.cameraPreview.settled === true
        && runtime.pendingStableLayoutFrames <= 0
        && runtime.hasPresentedFrame;
    }
    syncFloatingViewButtonState();
    if (isPaintCursorEnabled()) updateCursor(editor.pointerPos);
    else setCanvasCursor(editor.mode === "pano" ? "grab" : "default");
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

  function getStickerImage(stickerOrAssetId) {
    if (stickerOrAssetId && typeof stickerOrAssetId === "object"
      && (isExternalSticker(stickerOrAssetId) || stickerOrAssetId.external === true)) {
      return getExternalStickerPreviewImage(() => {
        node.__panoExternalStickerSync?.("image-loaded");
      });
    }
    const assetId = (stickerOrAssetId && typeof stickerOrAssetId === "object")
      ? String(stickerOrAssetId.asset_id || stickerOrAssetId.assetId || "")
      : String(stickerOrAssetId || "");
    if (!assetId) return null;
    const cached = imageCache.get(assetId);
    if (cached) return cached;
    const asset = state.assets?.[assetId];
    const src = mediaAssetSource(asset);
    if (!src) return null;
    const img = new Image();
    markImageLoading(img, src);
    img.onload = () => {
      markImageReady(img, src);
      requestDraw();
    };
    img.onerror = () => {
      markImageFailed(img, src);
      requestDraw();
    };
    img.src = src;
    imageCache.set(assetId, img);
    return img;
  }

  function getRasterObjectImage(item, onLoad = null) {
    const dataUrl = String(item?.rasterDataUrl || "").trim();
    if (!dataUrl) return null;
    const cached = rasterImageCache.get(dataUrl);
    if (cached) {
      if (cached.complete || cached.width || cached.naturalWidth) return cached;
      return cached;
    }
    const img = new Image();
    img.onload = () => {
      if (typeof onLoad === "function") onLoad();
    };
    img.src = dataUrl;
    rasterImageCache.set(dataUrl, img);
    return img;
  }

  function getRasterObjectAlphaSurface(item) {
    const dataUrl = String(item?.rasterDataUrl || "").trim();
    if (!dataUrl) return null;
    const cached = rasterImageAlphaCache.get(dataUrl);
    if (cached) return cached.ready ? cached : null;
    const img = getRasterObjectImage(item, () => {
      const entry = rasterImageAlphaCache.get(dataUrl);
      if (entry) entry.ready = false;
      requestDraw({ localOnly: true });
    });
    if (!img || !(img.complete || img.width || img.naturalWidth)) return null;
    const width = Number(img.naturalWidth || img.width || 0);
    const height = Number(img.naturalHeight || img.height || 0);
    if (width < 1 || height < 1) return null;
    const canvasEl = document.createElement("canvas");
    canvasEl.width = width;
    canvasEl.height = height;
    const ctx2d = canvasEl.getContext("2d", { willReadFrequently: true });
    if (!ctx2d) return null;
    ctx2d.clearRect(0, 0, width, height);
    ctx2d.drawImage(img, 0, 0, width, height);
    const alpha = ctx2d.getImageData(0, 0, width, height).data;
    const entry = { canvas: canvasEl, width, height, alpha, ready: true };
    rasterImageAlphaCache.set(dataUrl, entry);
    return entry;
  }

  function inverseTransformErpPointAround(point, center, scale = 1, rotationDeg = 0) {
    if (!point || typeof point !== "object") return point;
    const cu = Number(center?.u || 0);
    const cv = Number(center?.v || 0);
    const dx = shortestWrappedDelta(Number(point.u || 0), cu);
    const dy = Number(point.v || 0) - cv;
    const s = Math.max(0.02, Number(scale || 1));
    const rad = Number(rotationDeg || 0) * DEG2RAD;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const sx = dx / s;
    const sy = dy / s;
    const rx = sx * cos + sy * sin;
    const ry = -sx * sin + sy * cos;
    return {
      ...point,
      u: ((cu + rx) % 1 + 1) % 1,
      v: cv + ry,
    };
  }

  function sampleRasterObjectAlphaAt(item, erpPoint) {
    if (!item || !erpPoint) return null;
    const bbox = item?.bbox || null;
    if (!bbox) return null;
    const tf = item?.transform || {};
    const center = {
      u: (Number(bbox.u0 || 0) + Number(bbox.u1 || 0)) * 0.5,
      v: (Number(bbox.v0 || 0) + Number(bbox.v1 || 0)) * 0.5,
    };
    const untranslated = {
      u: ((Number(erpPoint.u || 0) - Number(tf.du || 0)) % 1 + 1) % 1,
      v: Number(erpPoint.v || 0) - Number(tf.dv || 0),
    };
    const basePoint = inverseTransformErpPointAround(
      untranslated,
      center,
      Number(tf.scale || 1),
      Number(tf.rot_deg || 0),
    );
    const bw = Number(bbox.u1 || 0) - Number(bbox.u0 || 0);
    const bh = Number(bbox.v1 || 0) - Number(bbox.v0 || 0);
    if (!(bw > 1e-6) || !(bh > 1e-6)) return null;
    const localU = shortestWrappedDelta(Number(basePoint.u || 0), Number(bbox.u0 || 0)) / bw;
    const localV = (Number(basePoint.v || 0) - Number(bbox.v0 || 0)) / bh;
    if (localU < 0 || localU > 1 || localV < 0 || localV > 1) return 0;
    const surface = getRasterObjectAlphaSurface(item);
    if (!surface) return null;
    const sx = clamp(Math.floor(localU * surface.width), 0, surface.width - 1);
    const sy = clamp(Math.floor(localV * surface.height), 0, surface.height - 1);
    return Number(surface.alpha[(sy * surface.width + sx) * 4 + 3] || 0);
  }

  function hitRasterObjectAt(item, geom, p, erpPoint = null) {
    if (!geom?.visible || !pointInPoly(p, geom.corners)) return false;
    const samplePoint = erpPoint || screenPosToErpPoint(p, performance.now());
    const alpha = sampleRasterObjectAlphaAt(item, samplePoint);
    if (alpha === null) return true;
    return alpha > 8;
  }

  function getRasterCompositeErpSize() {
    const erpTarget = editor.paintEngine?.getErpTarget?.(getOrderedPaintGroupIds(false)) || null;
    const width = Math.max(1, Number(erpTarget?.descriptor?.width || erpTarget?.displayPaint?.canvas?.width || 2048));
    const height = Math.max(1, Number(erpTarget?.descriptor?.height || erpTarget?.displayPaint?.canvas?.height || 1024));
    return { width, height };
  }

  function getActivePaintEraserPreviewInfo() {
    const interaction = editor.interaction;
    if (interaction?.kind !== "paint_stroke") return null;
    const stroke = interaction?.stroke || null;
    if (!stroke || String(stroke?.layerKind || "") !== "paint" || String(stroke?.toolKind || "") !== "eraser") return null;
    const erpDesc = getActivePaintTargetDescriptor();
    const liveKey = `${getLivePaintRevisionSuffix()}:${erpDesc.width}:${erpDesc.height}`;
    if (editor._activePaintEraserPreviewInfo?.cacheKey === liveKey) {
      return editor._activePaintEraserPreviewInfo.value || null;
    }
    const previewStroke = cloneJson(stroke);
    const geometry = previewStroke?.geometry || null;
    if (geometry && String(geometry.geometryKind || "") !== "lasso_fill") {
      const raw = Array.isArray(geometry.rawPoints) && geometry.rawPoints.length
        ? geometry.rawPoints
        : (Array.isArray(geometry.points) ? geometry.points : []);
      geometry.processedPoints = processFreehandPoints(raw, previewStroke.targetSpace, true);
    }
    const surface = createRasterSurface(erpDesc.width, erpDesc.height, { readback: true });
    if (!rasterizeStrokeToSurface(surface, previewStroke, { w: erpDesc.width, h: erpDesc.height })) return null;
    const data = surface.ctx?.getImageData(0, 0, erpDesc.width, erpDesc.height)?.data || null;
    if (!data) return null;
    let minX = erpDesc.width;
    let minY = erpDesc.height;
    let maxX = -1;
    let maxY = -1;
    for (let y = 0; y < erpDesc.height; y += 1) {
      for (let x = 0; x < erpDesc.width; x += 1) {
        if (data[(y * erpDesc.width + x) * 4 + 3] <= 8) continue;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
    if (maxX < minX || maxY < minY) {
      editor._activePaintEraserPreviewInfo = { cacheKey: liveKey, value: null };
      return null;
    }
    const info = {
      surface,
      bounds: { minX, minY, maxX, maxY },
      key: `${liveKey}:${minX}:${minY}:${maxX}:${maxY}`,
    };
    editor._activePaintEraserPreviewInfo = { cacheKey: liveKey, value: info };
    editor._liveEraserPreviewCanvasCache = new Map();
    return info;
  }

  function invalidateLivePaintPreviewCaches() {
    editor._activePaintEraserPreviewInfo = null;
    editor._liveEraserPreviewCanvasCache = null;
  }

  function getPaintObjectApproxErpBounds(entry, width, height) {
    if (!entry) return null;
    if (entry.type === "rasterObject" && entry.item?.bbox) {
      const bbox = entry.item.bbox;
      const tf = entry.item?.transform || {};
      const u0 = Number(bbox.u0 || 0) + Number(tf.du || 0);
      const u1 = Number(bbox.u1 || 0) + Number(tf.du || 0);
      const v0 = Number(bbox.v0 || 0) + Number(tf.dv || 0);
      const v1 = Number(bbox.v1 || 0) + Number(tf.dv || 0);
      return {
        minX: Math.floor((((u0 % 1) + 1) % 1) * width),
        maxX: Math.ceil((((u1 % 1) + 1) % 1) * width),
        minY: Math.floor(clamp(v0, 0, 1) * height),
        maxY: Math.ceil(clamp(v1, 0, 1) * height),
        wraps: (u1 - u0) >= 1 || u0 < 0 || u1 > 1,
      };
    }
    if (entry.type === "strokeGroup") {
      const strokes = getStrokeGroupStrokes(entry.actionGroupId, "paint");
      const frame = ensureGroupFrame(entry.actionGroupId, "paint", strokes);
      if (!frame) return null;
      const minU = frame.centerUv.u - frame.halfW;
      const maxU = frame.centerUv.u + frame.halfW;
      const minV = frame.centerUv.v - frame.halfH;
      const maxV = frame.centerUv.v + frame.halfH;
      return {
        minX: Math.floor((((minU % 1) + 1) % 1) * width),
        maxX: Math.ceil((((maxU % 1) + 1) % 1) * width),
        minY: Math.floor(clamp(minV, 0, 1) * height),
        maxY: Math.ceil(clamp(maxV, 0, 1) * height),
        wraps: (maxU - minU) >= 1 || minU < 0 || maxU > 1,
      };
    }
    return null;
  }

  function erpBoundsIntersect(a, b, width) {
    if (!a || !b) return false;
    const split = (box) => {
      if (!box.wraps) return [box];
      return [
        { minX: 0, maxX: box.maxX, minY: box.minY, maxY: box.maxY, wraps: false },
        { minX: box.minX, maxX: width - 1, minY: box.minY, maxY: box.maxY, wraps: false },
      ];
    };
    const aa = split(a);
    const bb = split(b);
    return aa.some((x) => bb.some((y) => !(x.maxX < y.minX || y.maxX < x.minX || x.maxY < y.minY || y.maxY < x.minY)));
  }

  function getLiveEraserAppliedCanvas(sourceCanvas, entry, previewInfo) {
    if (!sourceCanvas || !entry || !previewInfo?.surface?.canvas) return sourceCanvas;
    if (entry.type !== "rasterObject") return sourceCanvas;
    const width = Number(sourceCanvas.width || previewInfo.surface.canvas.width || 0);
    const height = Number(sourceCanvas.height || previewInfo.surface.canvas.height || 0);
    if (width < 1 || height < 1) return sourceCanvas;
    const objectBounds = getPaintObjectApproxErpBounds(entry, width, height);
    if (objectBounds && !erpBoundsIntersect(objectBounds, previewInfo.bounds, width)) return sourceCanvas;
    const rid = String(entry.item?.id || entry.id || "");
    const tf = entry.item?.transform || {};
    const cacheKey = `${previewInfo.key}:${rid}:${width}:${height}:${Number(tf.du || 0).toFixed(6)}:${Number(tf.dv || 0).toFixed(6)}:${Number(tf.rot_deg || 0).toFixed(3)}:${Number(tf.scale || 1).toFixed(4)}`;
    const cache = editor._liveEraserPreviewCanvasCache instanceof Map
      ? editor._liveEraserPreviewCanvasCache
      : (editor._liveEraserPreviewCanvasCache = new Map());
    if (cache.has(cacheKey)) return cache.get(cacheKey);
    const minX = clamp(Math.floor(Number(previewInfo.bounds?.minX || 0)), 0, Math.max(0, width - 1));
    const minY = clamp(Math.floor(Number(previewInfo.bounds?.minY || 0)), 0, Math.max(0, height - 1));
    const maxX = clamp(Math.ceil(Number(previewInfo.bounds?.maxX || 0)), minX, Math.max(0, width - 1));
    const maxY = clamp(Math.ceil(Number(previewInfo.bounds?.maxY || 0)), minY, Math.max(0, height - 1));
    const regionW = Math.max(1, maxX - minX + 1);
    const regionH = Math.max(1, maxY - minY + 1);
    const surface = createRasterSurface(width, height, { readback: true });
    surface.ctx.clearRect(0, 0, width, height);
    surface.ctx.drawImage(sourceCanvas, 0, 0);
    const beforeData = surface.ctx.getImageData(minX, minY, regionW, regionH);
    surface.ctx.save();
    surface.ctx.globalCompositeOperation = "destination-out";
    surface.ctx.drawImage(previewInfo.surface.canvas, 0, 0);
    surface.ctx.restore();
    const afterData = surface.ctx.getImageData(minX, minY, regionW, regionH);
    let touched = false;
    for (let i = 0; i < regionW * regionH; i += 1) {
      const beforeAlpha = beforeData.data[i * 4 + 3];
      const afterAlpha = afterData.data[i * 4 + 3];
      if (beforeAlpha > afterAlpha) {
        touched = true;
        break;
      }
    }
    if (!touched) {
      cache.set(cacheKey, sourceCanvas);
      return sourceCanvas;
    }
    if (cache.size > 64) cache.clear();
    cache.set(cacheKey, surface.canvas);
    return surface.canvas;
  }

  function buildRasterObjectEditCanvas(item, onLoad = null) {
    const rid = parseRasterObjectSelectionId(item?.rasterObjectId || item?.id || "");
    const bbox = item?.bbox || null;
    if (!rid || !bbox) return null;
    const img = getRasterObjectImage(item, onLoad);
    if (!img || !(img.complete || img.width || img.naturalWidth)) return null;
    const { width, height } = getRasterCompositeErpSize();
    const tf = item?.transform || {};
    const key = [
      rid,
      width,
      height,
      bbox.u0,
      bbox.v0,
      bbox.u1,
      bbox.v1,
      tf.du,
      tf.dv,
      tf.rot_deg,
      tf.scale,
      getPaintingRevisionKey(),
    ].join(":");
    const cached = rasterErpCanvasCache.get(key);
    if (cached) return cached;
    if (rasterErpCanvasCache.size > 64) rasterErpCanvasCache.clear();
    const erpCanvas = document.createElement("canvas");
    erpCanvas.width = width;
    erpCanvas.height = height;
    const erpCtx = erpCanvas.getContext("2d");
    if (!erpCtx) return null;
    const px = Number(bbox.u0 || 0) * width;
    const py = Number(bbox.v0 || 0) * height;
    const pw = Math.max(1, (Number(bbox.u1 || 0) - Number(bbox.u0 || 0)) * width);
    const ph = Math.max(1, (Number(bbox.v1 || 0) - Number(bbox.v0 || 0)) * height);
    const cx = px + pw * 0.5 + (Number(tf.du || 0) * width);
    const cy = py + ph * 0.5 + (Number(tf.dv || 0) * height);
    const rot = Number(tf.rot_deg || 0) * DEG2RAD;
    const scale = Math.max(0.01, Number(tf.scale || 1));
    for (const wrapOffset of [-width, 0, width]) {
      erpCtx.save();
      erpCtx.translate(cx + wrapOffset, cy);
      erpCtx.rotate(rot);
      erpCtx.scale(scale, scale);
      erpCtx.drawImage(img, -pw * 0.5, -ph * 0.5, pw, ph);
      erpCtx.restore();
    }
    rasterErpCanvasCache.set(key, erpCanvas);
    return erpCanvas;
  }

  function buildEditorStickerScene() {
    return buildStickerSceneFromState(state, {
      selectedId: editor.selectedId || null,
      hoveredId: null,
      includeHidden: true,
    });
  }

  function buildEditorStickerTextures(scene) {
    return buildStickerTexturesFromState(
      state,
      (assetId, asset, item) => getStickerImage(item || assetId),
      { scene },
    );
  }

  function drawOrderedDisplayListInView(ctx, rect, view, bgImg, cachePrefix = "modal_object_view") {
    if (!ctx || !rect || !view) return false;
    const mode = String(view?.mode || "");
    const bgReady = isDecodedImageReady(bgImg);
    const useModalBackgroundLayer = shouldUseModalBackgroundLayer(rect, view);
    if (useModalBackgroundLayer) {
      return renderModalBackgroundLayer(
        rect,
        view,
        bgReady && editor.showPanorama ? bgImg : null,
        `${cachePrefix}_bg_gl`,
      );
    }
    const scene = buildModalBackgroundScene();
    const textures = buildModalBackgroundTextures(scene);
    const interleavedLayerEntries = editor.showObjects
      ? buildModalInterleavedLayerEntries()
      : appendMaskDisplayLayerEntry([]);
    const paintSource = null;
    const descriptor = buildPanoramaCompositeDescriptor({
      stateRevision: [
        cachePrefix,
        bgReady ? getMediaRevisionToken(bgImg) : "no_bg",
        Array.isArray(textures) ? textures.map((item) => `${String(item?.assetId || "")}:${String(item?.revision || "")}`).join(",") : "none",
        interleavedLayerEntries.length ? interleavedLayerEntries.map((entry) => `${String(entry?.id || "")}:${String(entry?.revision || "")}:${Number(entry?.zIndex || 0)}`).join(",") : "paint:none",
      ].join("|"),
      backgroundSource: bgReady && editor.showPanorama ? bgImg : null,
      backgroundRevision: bgReady ? `${cachePrefix}:${getMediaRevisionToken(bgImg)}` : "",
      coverageDeg: normalizeCoverageValue(state.coverage),
      scene,
      textures,
      paintSource,
      paintRevision: "",
      rasterEntries: interleavedLayerEntries,
      backgroundOpacity: 1,
      showMaskTint: false,
    });
    const core = modalPanoCore;
    const synced = core.syncState(descriptor);
    if (!synced) return false;
    const surface = core.renderToTarget(`${cachePrefix}_direct`, view, {
      width: rect.w,
      height: rect.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: false,
    });
    if (!surface) return false;
    ctx.drawImage(surface, rect.x, rect.y, rect.w, rect.h);
    return true;
  }

  async function uploadStickerAssetFile(file, fallbackName = "sticker.png") {
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

  async function uploadCanvasAsPaintLayer(canvas, filename) {
    const blob = await new Promise((r) => canvas.toBlob(r, "image/png"));
    const body = new FormData();
    body.append("image", blob, filename);
    // Cutout export resolves these layers on the backend during prompt execution,
    // so store them like other editor assets instead of relying on temp lifetime.
    body.append("type", "input");
    body.append("subfolder", "panorama_stickers");
    body.append("overwrite", "1");
    const resp = await api.fetchApi("/upload/image", { method: "POST", body });
    if (!resp || resp.status !== 200) throw new Error(`upload failed (${resp?.status})`);
    const data = await resp.json();
    const fn = String(data?.name || "").trim();
    if (!fn) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: fn,
      subfolder: String(data?.subfolder || "panorama_stickers"),
      storage: String(data?.type || "input"),
    };
  }

  let _paintLayerSyncRevision = null;
  let _paintLayerSyncPending = false;

  function needsPaintingLayerSync() {
    const counts = paintingCompositeCount(state.painting);
    if (counts.totalPaintCount <= 0 && counts.totalMaskCount <= 0) return false;
    const layer = state.painting_layer;
    const currentRevision = getPaintingCompositeRevisionKey();
    if (!layer || typeof layer !== "object") return true;
    if (String(layer.revision || "") !== currentRevision) return true;
    if (counts.totalPaintCount > 0 && !layer.paint) return true;
    if (counts.totalMaskCount > 0 && !layer.mask) return true;
    return false;
  }

  function syncPaintingLayerAsync() {
    const nodeId = String(node.id ?? "0");
    const currentPending = _paintLayerUploadRegistry.get(nodeId);
    if (_paintLayerSyncPending && currentPending) return currentPending;
    const promise = (async () => {
      const rev = getPaintingCompositeRevisionKey();
      const counts = paintingCompositeCount(state.painting);
      if (counts.totalPaintCount <= 0 && counts.totalMaskCount <= 0) {
        if (state.painting_layer !== null) {
          state.painting_layer = null;
          _paintLayerSyncRevision = rev;
          commitState();
        }
        return;
      }
      if (_paintLayerSyncRevision === rev) return;
      if (_paintLayerSyncPending) return;
      _paintLayerSyncPending = true;
      try {
        rebuildPaintEngineIfNeeded();
        const orderedGroupIds = getOrderedPaintGroupIds(false);
        const erpTarget = editor.paintEngine?.getErpTarget?.(orderedGroupIds) || null;
        const paintCanvas = erpTarget?.displayPaint?.canvas || null;
        const maskCanvas = erpTarget?.committedMask?.canvas || null;
        const width = Math.max(1, Number(erpTarget?.descriptor?.width || paintCanvas?.width || maskCanvas?.width || 2048));
        const height = Math.max(1, Number(erpTarget?.descriptor?.height || paintCanvas?.height || maskCanvas?.height || 1024));
        if ((!paintCanvas && counts.totalPaintCount > 0) || (!maskCanvas && counts.totalMaskCount > 0)) {
          if (!editor._paintLayerSyncBlankSurface
            || Number(editor._paintLayerSyncBlankSurface.canvas?.width || 0) !== width
            || Number(editor._paintLayerSyncBlankSurface.canvas?.height || 0) !== height) {
            editor._paintLayerSyncBlankSurface = createRasterSurface(width, height);
          }
          editor._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, width, height);
        }
        const uploadPaintCanvas = paintCanvas || (counts.totalPaintCount > 0 ? editor._paintLayerSyncBlankSurface?.canvas || null : null);
        const uploadMaskCanvas = maskCanvas || (counts.totalMaskCount > 0 ? editor._paintLayerSyncBlankSurface?.canvas || null : null);
        if (!uploadPaintCanvas && !uploadMaskCanvas) return;
        let paintRef = null;
        let maskRef = null;
        const groupRefs = [];
        if (counts.totalPaintCount > 0) {
          paintRef = await uploadCanvasAsPaintLayer(uploadPaintCanvas, `pano_paint_${nodeId}.png`);
          for (const actionGroupId of orderedGroupIds) {
            const gid = String(actionGroupId || "").trim();
            if (!gid) continue;
            const groupCanvas = editor.paintEngine?.getGroupDisplayCanvas?.(gid) || null;
            if (!groupCanvas) continue;
            const safeGid = gid.replace(/[^a-zA-Z0-9_-]+/g, "_");
            const groupRef = await uploadCanvasAsPaintLayer(groupCanvas, `pano_group_${nodeId}_${safeGid}.png`);
            if (groupRef) {
              groupRefs.push({
                id: gid,
                actionGroupId: gid,
                image: groupRef,
              });
            }
          }
        }
        if (counts.totalMaskCount > 0) {
          maskRef = await uploadCanvasAsPaintLayer(uploadMaskCanvas, `pano_mask_${nodeId}.png`);
        }
        if (rev === getPaintingCompositeRevisionKey()) {
          state.painting_layer = {
            paint: paintRef,
            mask: maskRef,
            groups: groupRefs,
            revision: rev,
          };
          _paintLayerSyncRevision = rev;
          commitState();
        }
      } catch (err) {
        throw err;
      } finally {
        _paintLayerSyncPending = false;
      }
    })();
    _paintLayerUploadRegistry.set(nodeId, promise);
    promise.finally(() => {
      if (_paintLayerUploadRegistry.get(nodeId) === promise) {
        _paintLayerUploadRegistry.delete(nodeId);
      }
    });
    return promise;
  }

  function getConnectedErpImage() {
    if (type === "cutout") {
      const displaySource = getDisplayBackgroundSource();
      if (displaySource) return displaySource;
      const linked = loadPreferredExactLinkedImage(
        node,
        ["erp_image", "bg_erp"],
        () => requestDraw(),
        "background:cutout:erp_image|bg_erp",
      );
      if (linked && !isImageLoadFailed(linked)) return linked;
      const uiImg = mediaUiImage(node, "pano_input_images", imageCache, () => requestDraw());
      return uiImg || linked || null;
    }
    const displaySource = getDisplayBackgroundSource();
    if (displaySource) return displaySource;
    const uiImg = mediaUiImage(node, "pano_input_images", imageCache, () => requestDraw());
    if (uiImg && !isImageLoadFailed(uiImg)) return uiImg;
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
    const img = loadPreferredExactLinkedImage(node, preferred, () => requestDraw(), `background:${preferred.join("|")}`);
    return img || uiImg || null;
  }

  function isDecodedImageReady(img) {
    if (!img) return false;
    if (img instanceof HTMLImageElement) {
      return !!img.complete
        && Number(img.naturalWidth || img.width || 0) > 0
        && Number(img.naturalHeight || img.height || 0) > 0;
    }
    if (img instanceof HTMLVideoElement) {
      return Number(img.videoWidth || 0) > 0
        && Number(img.videoHeight || 0) > 0
        && Number(img.readyState || 0) >= 2;
    }
    return Number(img.width || img.naturalWidth || 0) > 0
      && Number(img.height || img.naturalHeight || 0) > 0;
  }

  function getStageImageStatus() {
    let backgroundState = IMAGE_READY;
    const stickerStates = [];
    if (editor.showPanorama) {
      const bgImg = getConnectedErpImage();
      backgroundState = getImageLoadState(bgImg, isDecodedImageReady);
    }
    if (editor.showObjects) {
      const stickers = Array.isArray(state.stickers) ? state.stickers : [];
      for (const item of stickers) {
        if (item?.visible === false) continue;
        const img = getStickerImage(item);
        stickerStates.push(getImageLoadState(img, isDecodedImageReady));
      }
    }
    return stageImageStatus({
      presented: runtime.hasPresentedFrame,
      background: backgroundState,
      stickers: stickerStates,
    });
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
    const synced = modalPanoCore.syncState(buildPanoramaCompositeDescriptor({
      stateRevision: [
        "modal_pano_direct",
        String(img.currentSrc || img.src || ""),
        Number(img.naturalWidth || img.width || 0),
        Number(img.naturalHeight || img.height || 0),
        normalizeCoverageValue(state.coverage),
      ].join("|"),
      backgroundSource: img,
      backgroundRevision: [
        String(img.currentSrc || img.src || ""),
        Number(img.naturalWidth || img.width || 0),
        Number(img.naturalHeight || img.height || 0),
      ].join("|"),
      coverageDeg: normalizeCoverageValue(state.coverage),
      scene: { stickers: [], selectedId: null, hoveredId: null },
      textures: [],
      rasterEntries: [],
      backgroundOpacity: 0.94,
      showMaskTint: false,
    }));
    if (!synced) return;
    const surface = modalPanoCore.renderToTarget("modal_pano_direct", {
      mode: "panorama",
      yawDeg: Number(editor.viewYaw || 0),
      pitchDeg: Number(editor.viewPitch || 0),
      fovDeg: Number(editor.viewFov || 100),
      coverageDeg: normalizeCoverageValue(state.coverage),
    }, {
      width: canvas.width,
      height: canvas.height,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 0.94,
      showMaskTint: false,
    });
    if (!surface) return;
    ctx.drawImage(surface, 0, 0, canvas.width, canvas.height);
  }

  function pruneUnusedAssets() {
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

  function drawImageTriTo(targetCtx, img, s0, s1, s2, d0, d1, d2) {
    const denom = (s0.x * (s1.y - s2.y)) + (s1.x * (s2.y - s0.y)) + (s2.x * (s0.y - s1.y));
    if (Math.abs(denom) < 1e-6) return;

    const a = ((d0.x * (s1.y - s2.y)) + (d1.x * (s2.y - s0.y)) + (d2.x * (s0.y - s1.y))) / denom;
    const b = ((d0.x * (s2.x - s1.x)) + (d1.x * (s0.x - s2.x)) + (d2.x * (s1.x - s0.x))) / denom;
    const c = ((d0.x * (s1.x * s2.y - s2.x * s1.y)) + (d1.x * (s2.x * s0.y - s0.x * s2.y)) + (d2.x * (s0.x * s1.y - s1.x * s0.y))) / denom;
    const d = ((d0.y * (s1.y - s2.y)) + (d1.y * (s2.y - s0.y)) + (d2.y * (s0.y - s1.y))) / denom;
    const e = ((d0.y * (s2.x - s1.x)) + (d1.y * (s0.x - s2.x)) + (d2.y * (s1.x - s0.x))) / denom;
    const f = ((d0.y * (s1.x * s2.y - s2.x * s1.y)) + (d1.y * (s2.x * s0.y - s0.x * s2.y)) + (d2.y * (s0.x * s1.y - s1.x * s0.y))) / denom;

    const [e0, e1, e2] = expandTri(d0, d1, d2, 0.45);
    targetCtx.save();
    targetCtx.beginPath();
    targetCtx.moveTo(e0.x, e0.y);
    targetCtx.lineTo(e1.x, e1.y);
    targetCtx.lineTo(e2.x, e2.y);
    targetCtx.closePath();
    targetCtx.clip();
    targetCtx.setTransform(a, d, b, e, c, f);
    targetCtx.drawImage(img, 0, 0);
    targetCtx.restore();
  }

  function drawImageTri(img, s0, s1, s2, d0, d1, d2) {
    drawImageTriTo(ctx, img, s0, s1, s2, d0, d1, d2);
  }

  function getRasterObjectCenterUv(item) {
    const bbox = item?.bbox || null;
    const tf = item?.transform || {};
    if (!bbox) return { u: 0.5, v: 0.5 };
    const centerU = (Number(bbox.u0 || 0) + Number(bbox.u1 || 0)) * 0.5 + Number(tf.du || 0);
    return {
      u: ((centerU % 1) + 1) % 1,
      v: clamp((Number(bbox.v0 || 0) + Number(bbox.v1 || 0)) * 0.5 + Number(tf.dv || 0), 0, 1),
    };
  }

  function getRasterObjectTransformedErpPoints(item) {
    const bbox = item?.bbox || null;
    if (!bbox) return [];
    const center = {
      u: (Number(bbox.u0 || 0) + Number(bbox.u1 || 0)) * 0.5,
      v: (Number(bbox.v0 || 0) + Number(bbox.v1 || 0)) * 0.5,
    };
    const scale = Math.max(0.01, Number(item?.transform?.scale || 1));
    const rotationDeg = Number(item?.transform?.rot_deg || 0);
    const du = Number(item?.transform?.du || 0);
    const dv = Number(item?.transform?.dv || 0);
    const base = [
      { u: Number(bbox.u0 || 0), v: Number(bbox.v0 || 0) },
      { u: Number(bbox.u1 || 0), v: Number(bbox.v0 || 0) },
      { u: Number(bbox.u1 || 0), v: Number(bbox.v1 || 0) },
      { u: Number(bbox.u0 || 0), v: Number(bbox.v1 || 0) },
    ];
    return base.map((pt) => translateErpPoint(transformErpPointAround(pt, center, scale, rotationDeg), du, dv));
  }

  function getRasterObjectGeomCacheKey(item) {
    const rid = parseRasterObjectSelectionId(item?.rasterObjectId || item?.id || "");
    const tf = item?.transform || {};
    const bbox = item?.bbox || {};
    const base = `${rid}:${editor.mode}:${getPaintingRevisionKey()}:${bbox.u0}:${bbox.v0}:${bbox.u1}:${bbox.v1}:${tf.du}:${tf.dv}:${tf.rot_deg}:${tf.scale}`;
    if (editor.mode === "frame") {
      const shot = getActiveCutoutShot();
      const rect = shot ? getFrameViewRect(shot) : null;
      return `${base}:frame:${String(shot?.id || "")}:${Math.round(Number(rect?.x || 0))}:${Math.round(Number(rect?.y || 0))}:${Math.round(Number(rect?.w || 0))}:${Math.round(Number(rect?.h || 0))}`;
    }
    return `${base}:view:${Math.round(Number(editor.viewYaw || 0) * 100)}:${Math.round(Number(editor.viewPitch || 0) * 100)}:${Math.round(Number(editor.viewFov || 0) * 100)}:${Math.round(Number(canvas?.width || 0))}:${Math.round(Number(canvas?.height || 0))}`;
  }

  function getSceneItemGeomCacheKey(item) {
    const itemId = String(item?.id || "");
    const kind = isShotItem(item) ? "frame" : (isStickerItem(item) ? "sticker" : "item");
    const base = [
      kind,
      itemId,
      editor.mode,
      Number(item?.yaw_deg || 0).toFixed(4),
      Number(item?.pitch_deg || 0).toFixed(4),
      Number(item?.hFOV_deg || 0).toFixed(4),
      Number(item?.vFOV_deg || 0).toFixed(4),
      Number(item?.rot_deg || 0).toFixed(4),
      Number(item?.roll_deg || 0).toFixed(4),
      getCutoutAspectLabel(item),
    ].join(":");
    if (editor.mode === "frame") {
      const shot = getActiveCutoutShot();
      const rect = shot ? getFrameViewRect(shot) : null;
      return `${base}:frame:${String(shot?.id || "")}:${Math.round(Number(rect?.x || 0))}:${Math.round(Number(rect?.y || 0))}:${Math.round(Number(rect?.w || 0))}:${Math.round(Number(rect?.h || 0))}`;
    }
    return `${base}:view:${Math.round(Number(editor.viewYaw || 0) * 100)}:${Math.round(Number(editor.viewPitch || 0) * 100)}:${Math.round(Number(editor.viewFov || 0) * 100)}:${Math.round(Number(canvas?.width || 0))}:${Math.round(Number(canvas?.height || 0))}`;
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

  function modalBackgroundLayerAvailable() {
    return !!backgroundCanvas && !!modalPanoCore?.isSupported?.();
  }

  function shouldUseModalBackgroundLayer(rect, view) {
    if (!modalBackgroundLayerAvailable()) return false;
    if (type !== "stickers" && type !== "cutout") return false;
    if (String(view?.mode || "") !== "panorama") return false;
    return Number(rect?.x || 0) === 0
      && Number(rect?.y || 0) === 0
      && Math.round(Number(rect?.w || 0)) === Math.round(Number(canvas?.width || 0))
      && Math.round(Number(rect?.h || 0)) === Math.round(Number(canvas?.height || 0));
  }

  function buildModalBackgroundScene() {
    if (!editor.showObjects) return { stickers: [], selectedId: null, hoveredId: null };
    return buildEditorStickerScene();
  }

  function buildModalBackgroundTextures(scene) {
    if (!editor.showObjects || !Array.isArray(scene?.stickers) || scene.stickers.length === 0) return [];
    return buildEditorStickerTextures(scene);
  }

  function getModalLayerPaintSource() {
    const orderedGroupIds = getOrderedPaintGroupIds();
    return editor.paintEngine?.getErpTarget?.(orderedGroupIds)?.displayPaint?.canvas || null;
  }

  function getModalLayerMaskSource() {
    const orderedGroupIds = getOrderedPaintGroupIds();
    return editor.paintEngine?.getErpTarget?.(orderedGroupIds)?.committedMask?.canvas || null;
  }

  function getModalLayerMaskDisplaySource() {
    return editor.paintEngine?.getMaskDisplayCanvas?.() || null;
  }

  function getMaskDisplayRevisionKey() {
    const source = getModalLayerMaskDisplaySource();
    if (!source) return "";
    return `${getDisplayPaintRevisionKey()}:mask_display`;
  }

  function appendMaskDisplayLayerEntry(entries) {
    if (!editor.showMask) return entries;
    const source = getModalLayerMaskDisplaySource();
    if (!source) return entries;
    const revision = getMaskDisplayRevisionKey();
    const topLayerZ = entries.reduce((max, entry) => Math.max(max, Number(entry?.zIndex || 0)), -1);
    const topStickerZ = (Array.isArray(state.stickers) ? state.stickers : [])
      .reduce((max, item) => Math.max(max, Number(item?.z_index || 0)), -1);
    const topZ = Math.max(topLayerZ, topStickerZ);
    entries.push({
      id: "mask_display",
      source,
      revision,
      zIndex: topZ + 1,
      opacity: 1,
      visible: true,
    });
    return entries;
  }

  function buildModalInterleavedLayerEntries() {
    const ordered = getOrderedDisplayListObjects(true);
    const previewInfo = getActivePaintEraserPreviewInfo();
    const entries = [];
    for (const entry of ordered) {
      if (entry?.type === "strokeGroup") {
        const gid = String(entry.actionGroupId || entry.id || "");
        if (!gid) continue;
        const source = editor.paintEngine?.getGroupDisplayCanvas?.(gid) || null;
        if (!source) continue;
        entries.push({
          id: `paint_group:${gid}`,
          source,
          revision: `${getDisplayPaintRevisionKey()}:${gid}`,
          zIndex: Number(entry?.z_index || 0),
          opacity: 1,
          visible: true,
        });
        continue;
      }
      if (entry?.type === "rasterObject") {
        const item = entry.item || null;
        const rid = parseRasterObjectSelectionId(item?.id || entry.id || "");
        if (!rid) continue;
        const baseSource = buildRasterObjectEditCanvas(item, () => requestDraw());
        if (!baseSource) continue;
        const source = getLiveEraserAppliedCanvas(baseSource, entry, previewInfo);
        const tf = item?.transform || {};
        entries.push({
          id: `raster:${rid}`,
          source,
          revision: [
            getPaintingCompositeRevisionKey(),
            previewInfo?.key || "",
            rid,
            Number(tf.du || 0).toFixed(6),
            Number(tf.dv || 0).toFixed(6),
            Number(tf.rot_deg || 0).toFixed(3),
            Number(tf.scale || 1).toFixed(4),
          ].join(":"),
          zIndex: Number(entry?.z_index || 0),
          opacity: 1,
          visible: item?.visible !== false,
        });
      }
    }
    return appendMaskDisplayLayerEntry(entries);
  }

  function buildModalPanoramaDescriptor(bgImg, cachePrefix = "modal_bg_gl") {
    const scene = buildModalBackgroundScene();
    const textures = buildModalBackgroundTextures(scene);
    const bgReady = isDecodedImageReady(bgImg);
    const bgRevision = bgReady ? getMediaRevisionToken(bgImg) : "none";
    const interleavedLayerEntries = editor.showObjects
      ? buildModalInterleavedLayerEntries()
      : appendMaskDisplayLayerEntry([]);
    const paintSource = null;
    const stateRevision = [
      cachePrefix,
      bgRevision,
      Array.isArray(scene?.stickers) ? scene.stickers.map((item) => String(item?.id || "")).join(",") : "none",
      Array.isArray(textures) ? textures.map((item) => `${String(item?.assetId || "")}:${String(item?.revision || "")}`).join(",") : "none",
      interleavedLayerEntries.length ? interleavedLayerEntries.map((entry) => `${String(entry?.id || "")}:${String(entry?.revision || "")}:${Number(entry?.zIndex || 0)}`).join(",") : "paint:none",
      editor.showPanorama ? "panorama:1" : "panorama:0",
      editor.showObjects ? "objects:1" : "objects:0",
      editor.showMask ? "showMask:1" : "showMask:0",
    ].join("|");
    return {
      descriptor: buildPanoramaCompositeDescriptor({
        stateRevision,
        backgroundSource: bgReady ? bgImg : null,
        backgroundRevision: bgReady ? `${cachePrefix}:${bgRevision}` : "",
        coverageDeg: normalizeCoverageValue(state.coverage),
        scene,
        textures,
        paintSource,
        paintRevision: "",
        rasterEntries: interleavedLayerEntries,
        backgroundOpacity: 1,
        showMaskTint: false,
      }),
      hasContent: bgReady || textures.length > 0 || interleavedLayerEntries.length > 0,
    };
  }

  function clearModalBackgroundLayer() {
    if (!backgroundCanvas) return;
    const gl = backgroundCanvas.getContext("webgl2");
    if (gl) {
      gl.viewport(0, 0, backgroundCanvas.width, backgroundCanvas.height);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
    } else {
      const bg2d = backgroundCanvas.getContext("2d");
      if (bg2d) {
        bg2d.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
        bg2d.fillStyle = "#070707";
        bg2d.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
      }
    }
    runtime.backgroundWasVisible = false;
    runtime.backgroundDirty = false;
  }

  function renderModalBackgroundLayer(rect, view, bgImg, cachePrefix = "modal_bg_gl") {
    if (!shouldUseModalBackgroundLayer(rect, view)) return false;
    if (!runtime.backgroundDirty && runtime.backgroundWasVisible) return true;
    const { descriptor, hasContent } = buildModalPanoramaDescriptor(bgImg, cachePrefix);
    if (!hasContent) {
      clearModalBackgroundLayer();
      return false;
    }
    const synced = modalPanoCore.syncState(descriptor);
    if (!synced) {
      clearModalBackgroundLayer();
      return false;
    }
    const surface = modalPanoCore.renderToTarget("modal_pano", view, {
      width: rect.w,
      height: rect.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: false,
    });
    const bg2d = backgroundCanvas?.getContext?.("2d");
    if (!surface || !bg2d) {
      clearModalBackgroundLayer();
      return false;
    }
    bg2d.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
    bg2d.drawImage(surface, 0, 0, backgroundCanvas.width, backgroundCanvas.height);
    runtime.backgroundWasVisible = true;
    runtime.backgroundDirty = false;
    return true;
  }

  function drawGridUnwrap(skipBackground = false) {
    const w = canvas.width;
    const h = canvas.height;
    const r = getUnwrapRect();
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    if (!skipBackground) {
      ctx.fillStyle = "#070707";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#070707";
      ctx.fillRect(r.x, r.y, r.w, r.h);
    }
    rebuildPaintEngineIfNeeded();
    drawOrderedDisplayListInView(
      ctx,
      { x: r.x, y: r.y, w: r.w, h: r.h },
      { mode: "unwrap" },
      getConnectedErpImage(),
      "modal_unwrap",
    );

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

  function drawGridPano(skipBackground = false) {
    const w = canvas.width;
    const h = canvas.height;
    if (!skipBackground) {
      if (modalBackgroundLayerAvailable()) ctx.clearRect(0, 0, w, h);
      else {
        ctx.fillStyle = "#070707";
        ctx.fillRect(0, 0, w, h);
      }
    }
    rebuildPaintEngineIfNeeded();
    drawOrderedDisplayListInView(
      ctx,
      { x: 0, y: 0, w, h },
      {
        mode: "panorama",
        yawDeg: editor.viewYaw,
        pitchDeg: editor.viewPitch,
        fovDeg: editor.viewFov,
        coverageDeg: normalizeCoverageValue(state.coverage),
      },
      getConnectedErpImage(),
      "modal_pano",
    );

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

  function projectEditorPoints(points, frameShot = null, frameRect = null, unwrapRefU = null) {
    if (editor.mode === "frame") {
      const shot = frameShot || getActiveCutoutShot();
      if (!shot) return [];
      const rect = frameRect || getFrameViewRect(shot);
      return projectErpPointsToFrameRect(points, shot, rect);
    }
    return projectErpPointsToCurrentView(points, unwrapRefU);
  }

  function projectErpPointToEditor(point, refX = null, frameShot = null, frameRect = null, unwrapRefU = null) {
    if (!point) return null;
    if (editor.mode === "unwrap") {
      const projected = projectErpPointsToCurrentView([point], unwrapRefU);
      return projected[0] ? { x: projected[0].x, y: projected[0].y, z: 1 } : null;
    }
    const dir = erpPointToWorldDir(point);
    return dir ? projectSceneItemDir(dir, refX, frameShot, frameRect) : null;
  }

  function buildStrokeGroupGeom(item, cacheKey) {
    const actionGroupId = String(item.actionGroupId || item.id || "").trim();
    const strokes = getStrokeGroupStrokes(actionGroupId, item.layerKind);
    const frame = ensureGroupFrame(actionGroupId, item.layerKind, strokes);
    const centerPoint = frame?.centerUv || getStrokeGroupCenterUv(actionGroupId, item.layerKind, strokes);
    const unwrapRefU = editor.mode === "unwrap" ? Number(centerPoint?.u || 0) : null;
    const strokePaths = [];
    const frameShot = editor.mode === "frame" ? getActiveCutoutShot() : null;
    const frameRect = frameShot ? getFrameViewRect(frameShot) : null;
    for (const stroke of strokes) {
      const geometry = stroke?.geometry || null;
      const srcPoints = geometry?.geometryKind === "lasso_fill"
        ? geometry?.points
        : (geometry?.processedPoints || geometry?.rawPoints || geometry?.points || []);
      const pts = projectEditorPoints(srcPoints, frameShot, frameRect, unwrapRefU)
        .filter((pt) => Number.isFinite(pt?.x) && Number.isFinite(pt?.y));
      if (!pts.length) continue;
      const presetId = getBrushPresetIdForTool(String(stroke?.toolKind || "pen"));
      const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
      strokePaths.push({
        points: pts,
        closed: String(geometry?.geometryKind || "") === "lasso_fill",
        lineWidth: Math.max(10, Number(stroke?.size || 10) * Math.max(0.1, Number(preset?.sizeScale ?? 1)) + 10),
        layerKind: String(stroke?.layerKind || item.layerKind || "paint"),
      });
    }
    const center = projectErpPointToEditor(centerPoint, null, frameShot, frameRect, unwrapRefU);
    if (!center) {
      const hidden = { visible: false, kind: "strokeGroup" };
      editor._strokeGeomCache.set(cacheKey, hidden);
      return hidden;
    }
    const cornersUv = getFrameCornersUv(frame);
    const corners = cornersUv
      .map((pt) => projectErpPointToEditor(pt, center.x, frameShot, frameRect, unwrapRefU))
      .filter((pt) => Number.isFinite(pt?.x) && Number.isFinite(pt?.y))
      .map((pt) => ({ x: Number(pt.x || 0), y: Number(pt.y || 0) }));
    if (corners.length < 4) {
      const hidden = { visible: false, kind: "strokeGroup" };
      editor._strokeGeomCache.set(cacheKey, hidden);
      return hidden;
    }
    const edgeMidpoint = (a, b) => ({
      x: (Number(a?.x || 0) + Number(b?.x || 0)) * 0.5,
      y: (Number(a?.y || 0) + Number(b?.y || 0)) * 0.5,
      a,
      b,
    });
    const topMid = edgeMidpoint(corners[0], corners[1]);
    const rightMid = edgeMidpoint(corners[1], corners[2]);
    const bottomMid = edgeMidpoint(corners[2], corners[3]);
    const leftMid = edgeMidpoint(corners[3], corners[0]);
    const geom = {
      kind: "strokeGroup",
      center: { x: Number(center.x || 0), y: Number(center.y || 0) },
      corners,
      edgeMidpoints: [
        { edge: "top", ...topMid },
        { edge: "right", ...rightMid },
        { edge: "bottom", ...bottomMid },
        { edge: "left", ...leftMid },
      ],
      rotateStemBase: { x: topMid.x, y: topMid.y },
      rotateHandle: { x: topMid.x, y: topMid.y - 30 },
      strokePaths,
      visible: true,
    };
    editor._strokeGeomCache.set(cacheKey, geom);
    return geom;
  }

  function buildRasterObjectGeom(item, cacheKey) {
    const frameShot = editor.mode === "frame" ? getActiveCutoutShot() : null;
    const frameRect = frameShot ? getFrameViewRect(frameShot) : null;
    const centerUv = getRasterObjectCenterUv(item);
    const unwrapRefU = editor.mode === "unwrap" ? Number(centerUv?.u || 0) : null;
    const centerPoint = projectErpPointToEditor(centerUv, null, frameShot, frameRect, unwrapRefU);
    const erpPoints = getRasterObjectTransformedErpPoints(item);
    const projected = erpPoints
      .map((pt) => projectErpPointToEditor(pt, centerPoint?.x ?? null, frameShot, frameRect, unwrapRefU))
      .filter((pt) => Number.isFinite(pt?.x) && Number.isFinite(pt?.y));
    if (!Array.isArray(projected) || projected.length < 4) {
      const hidden = { visible: false, kind: "rasterObject" };
      editor._strokeGeomCache.set(cacheKey, hidden);
      return hidden;
    }
    const corners = projected.slice(0, 4).map((pt) => ({ x: Number(pt?.x || 0), y: Number(pt?.y || 0) }));
    const center = {
      x: corners.reduce((sum, pt) => sum + Number(pt.x || 0), 0) / corners.length,
      y: corners.reduce((sum, pt) => sum + Number(pt.y || 0), 0) / corners.length,
    };
    const geom = {
      kind: "rasterObject",
      center,
      corners,
      visible: true,
    };
    editor._strokeGeomCache.set(cacheKey, geom);
    return geom;
  }

  function projectSceneItemDir(dir, refX = null, frameShot = null, frameRect = null, options = {}) {
    if (editor.mode === "frame") {
      const shot = frameShot || getActiveCutoutShot();
      const rect = frameRect || getFrameViewRect(shot);
      if (!shot || !rect) return null;
      const local = shot ? worldDirToFrameLocalPoint(shot, dir) : null;
      return local ? {
        x: Number(rect.x || 0) + (Number(local.x || 0) * Number(rect.w || 0)),
        y: Number(rect.y || 0) + (Number(local.y || 0) * Number(rect.h || 0)),
        z: 1,
      } : null;
    }
    if (editor.mode === "unwrap") return projectDirUnwrap(dir, refX);
    const { right, up, fwd } = cameraBasis();
    const cx = dot(dir, right);
    const cy = dot(dir, up);
    const cz = dot(dir, fwd);
    const nearZ = 1e-4;
    if (!Number.isFinite(cz)) return null;
    if (cz <= nearZ && !options?.clipBehind) return null;
    const z = Math.max(cz, nearZ);
    const w = canvas.width;
    const h = canvas.height;
    const hfov = editor.viewFov * DEG2RAD;
    const vfov = 2 * Math.atan(Math.tan(hfov / 2) * (h / Math.max(w, 1)));
    const sx = (w / 2) / Math.tan(hfov / 2);
    const sy = (h / 2) / Math.tan(vfov / 2);
    const guard = Math.max(w, h) * 2.0;
    return {
      x: clamp(w / 2 + (cx / z) * sx, -guard, w + guard),
      y: clamp(h / 2 - (cy / z) * sy, -guard, h + guard),
      z,
      rawZ: cz,
      clipped: cz <= nearZ,
    };
  }

  function sceneItemVisibilityAlpha(item, points = []) {
    if (editor.mode !== "pano" || isStickerItem(item)) return 1;
    const depths = points
      .map((point) => Number(point?.rawZ ?? point?.z))
      .filter((z) => Number.isFinite(z));
    if (!depths.length) return 1;
    return smoothstep(0.035, 0.2, Math.min(...depths));
  }

  function buildSceneItemGeom(item) {
    const centerDir = yawPitchToDir(Number(item.yaw_deg || 0), Number(item.pitch_deg || 0));
    const frameShot = editor.mode === "frame" ? getActiveCutoutShot() : null;
    const frameRect = frameShot ? getFrameViewRect(frameShot) : null;
    const clipBehind = editor.mode === "pano" && (isStickerItem(item) || isShotItem(item));
    const projectOptions = clipBehind ? { clipBehind: true } : null;
    const center = (() => {
      return projectSceneItemDir(centerDir, null, frameShot, frameRect, projectOptions);
    })();
    if (!center) return { visible: false };
    const frame = getStickerFrame(item);
    const cornersDir = stickerCornersDir(item);
    const corners = cornersDir
      .map((d) => projectSceneItemDir(d, center.x, frameShot, frameRect, projectOptions))
      .filter((p) => Number.isFinite(p?.x) && Number.isFinite(p?.y));
    if (corners.length < 4) return { visible: false };
    const rotateStemBaseDir = stickerDirFromFrame(frame, 0, frame.tanY);
    const rotateHandleDir = stickerDirFromFrame(frame, 0, frame.tanY + Math.max(frame.tanY * 0.43, 0.053));
    const rotateStemBase = projectSceneItemDir(rotateStemBaseDir, center.x, frameShot, frameRect, projectOptions);
    if (!rotateStemBase) return { visible: false };
    const rotateHandleHint = projectSceneItemDir(rotateHandleDir, rotateStemBase?.x ?? center.x, frameShot, frameRect, projectOptions);
    const handleDx = (rotateHandleHint?.x ?? rotateStemBase.x) - rotateStemBase.x;
    const handleDy = (rotateHandleHint?.y ?? rotateStemBase.y) - rotateStemBase.y;
    const handleLen = Math.hypot(handleDx, handleDy) || 1;
    const rotateHandle = {
      x: rotateStemBase.x + (handleDx / handleLen) * 30,
      y: rotateStemBase.y + (handleDy / handleLen) * 30,
    };
    const topEdgeCenter = projectSceneItemDir(stickerDirFromFrame(frame, 0, frame.tanY), center.x, frameShot, frameRect, projectOptions);
    const rightEdgeCenter = projectSceneItemDir(stickerDirFromFrame(frame, frame.tanX, 0), center.x, frameShot, frameRect, projectOptions);
    const bottomEdgeCenter = projectSceneItemDir(stickerDirFromFrame(frame, 0, -frame.tanY), center.x, frameShot, frameRect, projectOptions);
    const leftEdgeCenter = projectSceneItemDir(stickerDirFromFrame(frame, -frame.tanX, 0), center.x, frameShot, frameRect, projectOptions);
    if (!topEdgeCenter || !rightEdgeCenter || !bottomEdgeCenter || !leftEdgeCenter) return { visible: false };
    const projectedPoints = [
      center,
      ...corners,
      rotateStemBase,
      rotateHandleHint,
      topEdgeCenter,
      rightEdgeCenter,
      bottomEdgeCenter,
      leftEdgeCenter,
    ];
    if (clipBehind && !projectedPoints.some((point) => Number(point?.rawZ ?? point?.z) > 1e-4)) return { visible: false };
    const visibilityAlpha = sceneItemVisibilityAlpha(item, projectedPoints);
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
      visibilityAlpha,
      visible: true,
    };
  }

  function objectGeom(item) {
    if (isStrokeGroupItem(item)) {
      const actionGroupId = String(item.actionGroupId || item.id || "").trim();
      const cacheKey = getStrokeGeomCacheKey(actionGroupId, item.layerKind);
      const cached = editor._strokeGeomCache.get(cacheKey);
      if (cached) return cached;
      if (editor._strokeGeomCache.size > 256) editor._strokeGeomCache.clear();
      return buildStrokeGroupGeom(item, cacheKey);
    }
    if (isRasterObjectItem(item)) {
      const cacheKey = getRasterObjectGeomCacheKey(item);
      const cached = editor._strokeGeomCache.get(cacheKey);
      if (cached) return cached;
      if (editor._strokeGeomCache.size > 256) editor._strokeGeomCache.clear();
      return buildRasterObjectGeom(item, cacheKey);
    }
    const cacheKey = getSceneItemGeomCacheKey(item);
    const cached = editor._strokeGeomCache.get(cacheKey);
    if (cached) return cached;
    if (editor._strokeGeomCache.size > 256) editor._strokeGeomCache.clear();
    const geom = buildSceneItemGeom(item);
    editor._strokeGeomCache.set(cacheKey, geom);
    return geom;
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
    const frameShot = editor.mode === "frame" ? getActiveCutoutShot() : null;
    const frameRect = frameShot ? getFrameViewRect(frameShot) : null;
    const centerProj = projectSceneItemDir(centerDir, null, frameShot, frameRect);
    const refX = editor.mode === "unwrap" ? centerProj?.x ?? null : null;

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
        const p = projectSceneItemDir(d, refX, frameShot, frameRect);
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

  function renderModalStickerBodyFallback() {
    if (editor.mode !== "pano" && editor.mode !== "unwrap") return false;
    if (!Array.isArray(state.stickers) || state.stickers.length === 0) return false;
    let anyDrawn = false;
    const items = [...state.stickers].sort((a, b) => Number(a.z_index || 0) - Number(b.z_index || 0));
    for (const item of items) {
      if (item?.visible === false) continue;
      const g = objectGeom(item);
      const img = getStickerImage(item);
      const alpha = getStickerDisplayAlpha(item);
      if (img && (img.complete || img.width)) {
        if (drawStickerMeshMapped(item, img, { x0: 0, y0: 0, x1: 1, y1: 1 }, { x0: 0, y0: 0, x1: 1, y1: 1 }, alpha)) {
          anyDrawn = true;
        }
        continue;
      }
      if (!g.visible) continue;
      const prevAlpha = ctx.globalAlpha;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      ctx.beginPath();
      ctx.moveTo(g.corners[0].x, g.corners[0].y);
      for (let i = 1; i < 4; i += 1) ctx.lineTo(g.corners[i].x, g.corners[i].y);
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = prevAlpha;
      anyDrawn = true;
    }
    return anyDrawn;
  }

  function getCutoutSelectableItemsForDisplay() {
    const shots = [...(Array.isArray(state.shots) ? state.shots : [])];
    const stickers = [...(Array.isArray(state.stickers) ? state.stickers : [])]
      .sort((a, b) => Number(a.z_index || 0) - Number(b.z_index || 0));
    return [...shots, ...stickers];
  }

  function getCutoutSelectableItemsForHit() {
    const shots = [...(Array.isArray(state.shots) ? state.shots : [])];
    const stickers = [...(Array.isArray(state.stickers) ? state.stickers : [])]
      .sort((a, b) => Number(b.z_index || 0) - Number(a.z_index || 0));
    return [...stickers, ...shots];
  }

  function traceQuad(ctx2d, corners = []) {
    if (!ctx2d || !Array.isArray(corners) || corners.length < 4) return;
    ctx2d.beginPath();
    ctx2d.moveTo(corners[0].x, corners[0].y);
    for (let i = 1; i < 4; i += 1) ctx2d.lineTo(corners[i].x, corners[i].y);
    ctx2d.closePath();
  }

  function drawCameraFrameBody(geom, selected, locked) {
    const corners = Array.isArray(geom?.corners) ? geom.corners : [];
    if (corners.length < 4) return;
    const visibilityAlpha = clamp(Number(geom?.visibilityAlpha ?? 1), 0, 1);
    if (visibilityAlpha <= 0.01) return;
    const prevAlpha = ctx.globalAlpha;
    ctx.globalAlpha = prevAlpha * visibilityAlpha;
    const accent = locked
      ? "rgba(255, 116, 116, 0.96)"
      : (selected ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)");
    const fill = locked
      ? "rgba(255, 89, 89, 0.08)"
      : (selected ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)");
    const edgeStroke = selected ? 3.2 : 2.6;
    traceQuad(ctx, corners);
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = accent;
    ctx.lineWidth = edgeStroke;
    ctx.stroke();

    ctx.save();
    ctx.strokeStyle = accent;
    ctx.lineWidth = selected ? 3.2 : 2.6;
    ctx.lineCap = "round";
    const edgeMidpoints = Array.isArray(geom?.edgeMidpoints) && geom.edgeMidpoints.length >= 4
      ? geom.edgeMidpoints
      : [
        { edge: "top", x: (corners[0].x + corners[1].x) * 0.5, y: (corners[0].y + corners[1].y) * 0.5 },
        { edge: "right", x: (corners[1].x + corners[2].x) * 0.5, y: (corners[1].y + corners[2].y) * 0.5 },
        { edge: "bottom", x: (corners[2].x + corners[3].x) * 0.5, y: (corners[2].y + corners[3].y) * 0.5 },
        { edge: "left", x: (corners[3].x + corners[0].x) * 0.5, y: (corners[3].y + corners[0].y) * 0.5 },
      ];
    const oppositeEdge = { top: "bottom", right: "left", bottom: "top", left: "right" };
    const indicatorLen = selected ? 12 : 9;
    edgeMidpoints.forEach((mid) => {
      const opposite = edgeMidpoints.find((candidate) => candidate?.edge === oppositeEdge[mid?.edge]);
      const target = opposite || {
        x: (corners[0].x + corners[1].x + corners[2].x + corners[3].x) * 0.25,
        y: (corners[0].y + corners[1].y + corners[2].y + corners[3].y) * 0.25,
      };
      const vx = target.x - mid.x;
      const vy = target.y - mid.y;
      const len = Math.hypot(vx, vy) || 1;
      ctx.beginPath();
      ctx.moveTo(mid.x, mid.y);
      ctx.lineTo(mid.x + (vx / len) * indicatorLen, mid.y + (vy / len) * indicatorLen);
      ctx.stroke();
    });
    ctx.restore();
    ctx.globalAlpha = prevAlpha;
  }

  function drawObjectBody(item, geom, selected, locked) {
    const visibilityAlpha = clamp(Number(geom?.visibilityAlpha ?? 1), 0, 1);
    if (visibilityAlpha <= 0.01) return;
    if (isShotItem(item)) {
      drawCameraFrameBody(geom, selected, locked);
      return;
    }
    if (isStickerItem(item)) {
      const prevAlpha = ctx.globalAlpha;
      ctx.globalAlpha = prevAlpha * getStickerDisplayAlpha(item) * visibilityAlpha;
      if (editor.mode === "frame") {
        ctx.strokeStyle = selected
          ? "rgba(250, 250, 250, 0.9)"
          : (locked ? "rgba(255, 89, 89, 0.72)" : "#71717a");
        ctx.lineWidth = selected ? 2 : 1;
        traceQuad(ctx, geom.corners);
        ctx.stroke();
      } else {
        drawStickerBoundary(item, selected);
      }
      ctx.globalAlpha = prevAlpha;
      return;
    }

    const prevAlpha = ctx.globalAlpha;
    ctx.globalAlpha = prevAlpha * visibilityAlpha;
    ctx.fillStyle = selected
      ? "rgba(0, 112, 243, 0.24)"
      : (locked ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)");
    traceQuad(ctx, geom.corners);
    ctx.fill();
    ctx.strokeStyle = selected
      ? "rgba(255, 255, 255, 1)"
      : (locked ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)");
    ctx.lineWidth = selected ? 2.8 : 1.9;
    traceQuad(ctx, geom.corners);
    ctx.stroke();
    ctx.globalAlpha = prevAlpha;
  }

  function drawSelectedObjectAffordances(item, geom, accent) {
    ctx.fillStyle = accent;
    geom.corners.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 6.5, 0, Math.PI * 2); ctx.fill(); });
    if (isShotItem(item)) {
      ctx.strokeStyle = accent;
      ctx.lineCap = "round";
      ctx.lineWidth = 4;
      geom.edgeMidpoints.forEach((midpoint) => {
        const dx = (midpoint.b?.x ?? midpoint.x) - (midpoint.a?.x ?? midpoint.x);
        const dy = (midpoint.b?.y ?? midpoint.y) - (midpoint.a?.y ?? midpoint.y);
        const len = Math.hypot(dx, dy) || 1;
        const tx = dx / len;
        const ty = dy / len;
        const half = 10;
        ctx.beginPath();
        ctx.moveTo(midpoint.x - tx * half, midpoint.y - ty * half);
        ctx.lineTo(midpoint.x + tx * half, midpoint.y + ty * half);
        ctx.stroke();
      });
      ctx.lineCap = "butt";
    }
    if (!isStrokeGroupItem(item)) {
      ctx.strokeStyle = "rgba(250, 250, 250, 0.9)";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(geom.rotateStemBase.x, geom.rotateStemBase.y);
      ctx.lineTo(geom.rotateHandle.x, geom.rotateHandle.y);
      ctx.stroke();
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(geom.rotateHandle.x, geom.rotateHandle.y, 10, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawObjects() {
    const [usedNu, usedNv] = getMeshDivisions();
    const selectedItems = editor.mode === "frame" ? [] : getSelectedItems();
    const multiSelected = selectedItems.length > 1;
    const rawList = type === "cutout" ? getCutoutSelectableItemsForDisplay() : getList();
    const orderKey = rawList.map((item) => `${String(item?.id || "")}:${isShotItem(item) ? "frame" : Number(item?.z_index || 0)}`).join("|");
    if (!editor._sortedItemsCache || editor._sortedItemsCache.src !== rawList || editor._sortedItemsCache.orderKey !== orderKey) {
      editor._sortedItemsCache = {
        src: rawList,
        orderKey,
        sorted: [...rawList],
      };
    }
    const items = editor._sortedItemsCache.sorted;
    for (const item of items) {
      const selected = editor.mode !== "frame" && !multiSelected && isItemSelected(item);
      if (editor.mode === "frame" && !selected) continue;
      if (!editor.showObjects && !isShotItem(item)) continue;
      const itemIsSticker = isStickerItem(item);
      const itemIsShot = isShotItem(item);
      const itemLocked = isItemLocked(item);
      if (!itemIsSticker && !itemIsShot) {
        continue;
      }
      const g = objectGeom(item);
      if (type !== "stickers" && !g.visible) {
        continue;
      }
      const visibilityAlpha = clamp(Number(g?.visibilityAlpha ?? 1), 0, 1);
      if (visibilityAlpha <= 0.01) continue;
      const frameTransitionAlpha = itemIsShot && type === "cutout" && editor.mode === "pano"
        ? clamp(Number(editor.cutoutPanoFrameAlpha || 0), 0, 1)
        : 1;
      ctx.save();
      ctx.globalAlpha *= frameTransitionAlpha;
      drawObjectBody(item, g, selected, itemLocked);

      if (selected && g.visible) {
        const accent = itemLocked ? "#ff4d4f" : ((itemIsSticker && isExternalSticker(item)) ? "#f59e0b" : "#0070f3");
        const prevAlpha = ctx.globalAlpha;
        ctx.globalAlpha = prevAlpha * visibilityAlpha;
        drawSelectedObjectAffordances(item, g, accent);
        ctx.globalAlpha = prevAlpha;
      }
      ctx.restore();
    }

    if (type === "cutout" && editor.mode === "pano" && !getActiveCutoutShot()
      && editor.cutoutPanoFrameVisual && editor.cutoutPanoFrameAlpha > 1e-4) {
      const visual = editor.cutoutPanoFrameVisual;
      const fade = clamp(Number(editor.cutoutPanoFrameAlpha || 0), 0, 1);
      ctx.save();
      ctx.globalAlpha *= fade;
      drawCameraFrameBody(visual.geom, visual.selected, visual.locked);
      if (visual.selected) {
        drawSelectedObjectAffordances(
          visual.item,
          visual.geom,
          visual.locked ? "#ff4d4f" : "#0070f3",
        );
      }
      ctx.restore();
    }

    if (multiSelected) {
      const g = getMultiSelectionGeom(selectedItems);
      if (g?.visible) {
        const accent = areAllSelectedItemsLocked(selectedItems) ? "#ff4d4f" : "#0070f3";
        ctx.save();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(g.corners[0].x, g.corners[0].y);
        for (let i = 1; i < g.corners.length; i += 1) ctx.lineTo(g.corners[i].x, g.corners[i].y);
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = accent;
        g.corners.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 6.5, 0, Math.PI * 2); ctx.fill(); });
        ctx.restore();
      }
    } else {
      selectedItems.forEach((selected) => {
        if (!isStrokeGroupItem(selected) && !isRasterObjectItem(selected)) return;
        const g = objectGeom(selected);
        if (!g?.visible) return;
        const accent = isItemLocked(selected) ? "#ff4d4f" : "#0070f3";
        ctx.save();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(g.corners[0].x, g.corners[0].y);
        for (let i = 1; i < g.corners.length; i += 1) ctx.lineTo(g.corners[i].x, g.corners[i].y);
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = accent;
        g.corners.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 6.5, 0, Math.PI * 2); ctx.fill(); });
        ctx.restore();
      });
    }

    if (editor.interaction?.kind === "marquee_select") {
      const rect = rectFromPoints(editor.interaction.start, editor.interaction.current);
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
      ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.rect(rect.x0, rect.y0, rect.x1 - rect.x0, rect.y1 - rect.y0);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    if (editor.hqFrames && usedNu >= 40 && usedNv >= 30) {
      editor.hqFrames -= 1;
      if (editor.hqFrames > 0) requestDraw();
    }
  }

  function getCutoutPreviewSurfaceSize(shot) {
    const view = buildCutoutViewParamsFromShot(shot);
    const aspect = clamp(Number(view?.aspect || 1), 0.05, 20.0);
    const longSide = 320;
    return aspect >= 1
      ? { width: longSide, height: Math.max(1, Math.round(longSide / aspect)) }
      : { width: Math.max(1, Math.round(longSide * aspect)), height: longSide };
  }

  function getCutoutPreviewViewportSize(shot, expanded = false) {
    const aspect = clamp(deriveCutoutAspectFromFov(shot), 0.05, 20.0);
    const longSide = expanded ? 320 : 220;
    return aspect >= 1
      ? { width: longSide, height: Math.max(1, Math.round(longSide / aspect)) }
      : { width: Math.max(1, Math.round(longSide * aspect)), height: longSide };
  }

  function isCutoutPreviewLayoutStable(targetSize) {
    if (!cutoutPreviewHost || !targetSize) return false;
    const previewShell = cutoutPreviewHost.closest(".pano-camera-preview");
    if (!previewShell) return false;
    const hostWidth = Math.round(Number(previewShell.clientWidth || cutoutPreviewHost.clientWidth || 0));
    const hostHeight = Math.round(Number(previewShell.clientHeight || cutoutPreviewHost.clientHeight || 0));
    return Math.abs(hostWidth - Number(targetSize.width || 0)) <= 1
      && Math.abs(hostHeight - Number(targetSize.height || 0)) <= 1;
  }

  function getCutoutPreviewObjectRevision() {
    return `obj:${Number(editor.objectVisualRevision || 0)}`;
  }

  function getCutoutPreviewSurfaceRevision(shot, options = {}) {
    if (!shot) return "";
    const bgImage = getConnectedErpImage();
    const bgKey = bgImage && isDecodedImageReady(bgImage)
      ? getMediaRevisionToken(bgImage)
      : "no_bg";
    const size = getCutoutPreviewSurfaceSize(shot);
    return [
      String(shot?.id || ""),
      getDisplayPaintRevisionKey(),
      getCutoutPreviewObjectRevision(),
      getLivePaintRevisionSuffix(),
      bgKey,
      editor.showPanorama ? "panorama:1" : "panorama:0",
      editor.showObjects ? "objects:1" : "objects:0",
      editor.showMask ? "mask:1" : "mask:0",
      `${size.width}x${size.height}`,
      String(options.quality || "balanced"),
    ].join("|");
  }

  function drawCutoutOutputPreview() {
    editor.outputPreviewRect = null;
    uiState.outputPreviewToggle.visible = editor.mode !== "frame" && !!getActiveCutoutShot();
    if (type !== "cutout" || !uiState.cameraPreview) return;
    if (editor.mode === "frame") {
      uiState.cameraPreview.visible = false;
      uiState.cameraPreview.settled = false;
      return;
    }
    const shot = getActiveCutoutShot();
    if (!shot) {
      uiState.cameraPreview.visible = true;
      uiState.cameraPreview.ready = false;
      uiState.cameraPreview.settled = false;
      uiState.cameraPreview.expanded = !!editor.outputPreviewExpanded;
      uiState.cameraPreview.width = 220;
      uiState.cameraPreview.height = 132;
      uiState.cameraPreview.label = "Add Frame to preview";
      cutoutPreviewCamera?.clearScene?.();
      cutoutPreviewMount?.requestRender?.();
      return;
    }
    uiState.cameraPreview.visible = true;
    const bgImg = getConnectedErpImage();
    if (!shot || !cutoutPreviewCamera || !cutoutPreviewMount) {
      uiState.cameraPreview.ready = false;
      uiState.cameraPreview.label = shot ? "Preview unavailable" : "Add Frame to preview";
      uiState.cameraPreview.expanded = !!editor.outputPreviewExpanded;
      uiState.cameraPreview.settled = false;
      uiState.cameraPreview.width = 220;
      uiState.cameraPreview.height = 132;
      cutoutPreviewCamera?.clearScene?.();
      cutoutPreviewMount?.requestRender?.();
      return;
    }
    const previewSize = getCutoutPreviewViewportSize(shot, !!editor.outputPreviewExpanded);
    uiState.cameraPreview.width = previewSize.width;
    uiState.cameraPreview.height = previewSize.height;
    uiState.cameraPreview.expanded = !!editor.outputPreviewExpanded;
    const scene = buildModalBackgroundScene();
    const textures = buildModalBackgroundTextures(scene);
    const bgReady = isDecodedImageReady(bgImg);
    const bgRevision = bgReady ? getMediaRevisionToken(bgImg) : "none";
    const rasterEntries = editor.showObjects
      ? buildModalInterleavedLayerEntries()
      : appendMaskDisplayLayerEntry([]);
    const descriptor = buildPanoramaCompositeDescriptor({
      stateRevision: [
        "cutout_preview_camera",
        bgRevision,
        Array.isArray(scene?.stickers) ? scene.stickers.map((item) => String(item?.id || "")).join(",") : "none",
        Array.isArray(textures) ? textures.map((item) => `${String(item?.assetId || "")}:${String(item?.revision || "")}`).join(",") : "none",
        rasterEntries.length ? rasterEntries.map((entry) => `${String(entry?.id || "")}:${String(entry?.revision || "")}:${Number(entry?.zIndex || 0)}`).join(",") : "paint:none",
        editor.showPanorama ? "panorama:1" : "panorama:0",
        editor.showObjects ? "objects:1" : "objects:0",
        editor.showMask ? "showMask:1" : "showMask:0",
        normalizeCoverageValue(state.coverage),
      ].join("|"),
      backgroundSource: bgReady && editor.showPanorama ? bgImg : null,
      backgroundRevision: bgReady ? `cutout_preview:${bgRevision}` : "",
      coverageDeg: normalizeCoverageValue(state.coverage),
      scene,
      textures,
      rasterEntries,
      backgroundOpacity: 1,
      showMaskTint: false,
    });
    const hasContent = bgReady || textures.length > 0 || rasterEntries.length > 0;
    if (!hasContent) {
      uiState.cameraPreview.ready = false;
      uiState.cameraPreview.label = "Connect ERP image";
      uiState.cameraPreview.settled = false;
      cutoutPreviewCamera.clearScene();
      cutoutPreviewMount.requestRender();
      return;
    }
    if (editor.showPanorama && !bgReady && textures.length === 0 && rasterEntries.length === 0) {
      uiState.cameraPreview.ready = false;
      uiState.cameraPreview.label = bgImg ? "Loading preview" : "Connect ERP image";
      uiState.cameraPreview.settled = false;
      cutoutPreviewCamera.clearScene();
      cutoutPreviewMount.requestRender();
      return;
    }
    cutoutPreviewCamera.syncScene(descriptor);
    cutoutPreviewMount.setView(buildCutoutViewParamsFromShot(shot));
    const layoutStable = isCutoutPreviewLayoutStable(previewSize);
    const presented = layoutStable ? cutoutPreviewMount.present() : false;
    if (!layoutStable) cutoutPreviewMount.requestRender();
    uiState.cameraPreview.ready = true;
    uiState.cameraPreview.label = layoutStable && presented ? "" : "Loading preview";
    uiState.cameraPreview.settled = layoutStable
      && presented
      && runtime.pendingStableLayoutFrames <= 0
      && runtime.hasPresentedFrame;
  }

  function renderCutoutPreviewToContext(targetCtx, rect, shot, options = {}) {
    if (!cutoutPreviewCamera || !shot) return false;
    const bgImg = getConnectedErpImage();
    const scene = buildModalBackgroundScene();
    const textures = buildModalBackgroundTextures(scene);
    const bgReady = isDecodedImageReady(bgImg);
    const rasterEntries = editor.showObjects
      ? buildModalInterleavedLayerEntries()
      : appendMaskDisplayLayerEntry([]);
    const hasContent = bgReady || textures.length > 0 || rasterEntries.length > 0;
    if (!hasContent) return false;
    cutoutPreviewCamera.syncScene(buildPanoramaCompositeDescriptor({
      stateRevision: getCutoutPreviewSurfaceRevision(shot, options),
      backgroundSource: bgReady && editor.showPanorama ? bgImg : null,
      backgroundRevision: bgReady ? `cutout_frame:${getMediaRevisionToken(bgImg)}` : "",
      coverageDeg: normalizeCoverageValue(state.coverage),
      scene,
      textures,
      rasterEntries,
      backgroundOpacity: 1,
      showMaskTint: false,
    }));
    return cutoutPreviewCamera.renderShotToContext(targetCtx, rect, shot, options);
  }

  function projectErpStrokeToCurrentView(stroke) {
    const geometry = stroke?.geometry;
    if (!geometry || geometry.geometryKind !== "freehand_open") return [];
    const points = getStrokePointList(stroke, "points");
    return points.map((pt, index) => {
      const dirs = getWorldOffsetDirForStrokePoint(stroke, pt, index, points, null);
      return projectWorldDirToCurrentViewSample(dirs.centerDir, dirs.offsetDir);
    }).filter(Boolean);
  }

  function frameLocalPointToWorldDir(shot, point) {
    if (!shot || !point) return null;
    const u = Number(point.x || 0);
    const v = Number(point.y || 0);
    return stickerSampleDir(shot, u, v);
  }

  function erpPointToWorldDir(point) {
    if (!point) return null;
    const lon = (Number(point.u || 0) - 0.5) * (2 * Math.PI);
    const lat = (0.5 - Number(point.v || 0)) * Math.PI;
    const cp = Math.cos(lat);
    return vec3(cp * Math.sin(lon), Math.sin(lat), cp * Math.cos(lon));
  }

  function getStrokePointList(stroke, key = "points") {
    const geometry = stroke?.geometry;
    const points = Array.isArray(geometry?.[key]) ? geometry[key] : [];
    return points;
  }

  function getTargetSpaceCoord(point) {
    if (!point || typeof point !== "object") return { x: 0, y: 0 };
    return { x: Number(point?.u || 0), y: Number(point?.v || 0) };
  }

  function cloneTargetPointWithCoords(template, x, y, extra = {}) {
    const base = {
      ...template,
      t: Number(template?.t || 0),
      widthScale: getStrokePointScalar(template, "widthScale", 1),
      pressureLike: getStrokePointScalar(template, "pressureLike", 1),
    };
    return { ...base, ...extra, u: x, v: y };
  }

  function getFreehandResampleSpacing(targetSpace, finalPass = false) {
    return finalPass ? 0.0012 : 0.0018;
  }

  function processFreehandPoints(rawPoints, targetSpace, finalPass = false) {
    if (!Array.isArray(rawPoints) || !rawPoints.length) return [];
    const isErpGlobal = String(targetSpace?.kind || "") === "ERP_GLOBAL";
    const pointCoords = new WeakMap();
    if (isErpGlobal) {
      let prevContinuousU = null;
      rawPoints.forEach((point) => {
        const rawU = Number(point?.u || 0);
        const rawV = Number(point?.v || 0);
        const wrappedU = ((rawU % 1) + 1) % 1;
        const continuousU = prevContinuousU == null
          ? wrappedU
          : (prevContinuousU + shortestWrappedDelta(wrappedU, ((prevContinuousU % 1) + 1) % 1));
        pointCoords.set(point, { x: continuousU, y: rawV });
        prevContinuousU = continuousU;
      });
    }
    const getCoord = (point) => {
      if (!point || typeof point !== "object") return { x: 0, y: 0 };
      return pointCoords.get(point) || getTargetSpaceCoord(point);
    };
    const cloneWithCoords = (template, x, y, extra = {}) => {
      const outX = isErpGlobal ? ((((Number(x) % 1) + 1) % 1)) : Number(x);
      const next = cloneTargetPointWithCoords(template, outX, y, extra);
      pointCoords.set(next, { x: Number(x), y: Number(y) });
      return next;
    };
    const interpolatePoint = (a, b, t) => {
      const ac = getCoord(a);
      const bc = getCoord(b);
      return cloneWithCoords(a, lerp(ac.x, bc.x, t), lerp(ac.y, bc.y, t), {
        t: lerp(Number(a?.t || 0), Number(b?.t || 0), t),
        widthScale: lerp(getStrokePointScalar(a, "widthScale", 1), getStrokePointScalar(b, "widthScale", 1), t),
        pressureLike: lerp(getStrokePointScalar(a, "pressureLike", 1), getStrokePointScalar(b, "pressureLike", 1), t),
      });
    };
    if (rawPoints.length === 1) {
      const onlyCoord = getCoord(rawPoints[0]);
      return [cloneWithCoords(rawPoints[0], onlyCoord.x, onlyCoord.y)];
    }
    const spacing = getFreehandResampleSpacing(targetSpace, finalPass);
    const buildUniformSamples = (srcPoints, sampleSpacing) => {
      const cumulative = [0];
      for (let i = 1; i < srcPoints.length; i += 1) {
        const a = getCoord(srcPoints[i - 1]);
        const b = getCoord(srcPoints[i]);
        cumulative.push(cumulative[i - 1] + Math.hypot(b.x - a.x, b.y - a.y));
      }
      const totalLen = cumulative[cumulative.length - 1] || 0;
      if (totalLen <= 1e-8) {
        const only = srcPoints[0];
        const onlyCoord = getCoord(only);
        return [cloneWithCoords(only, onlyCoord.x, onlyCoord.y)];
      }
      const out = [];
      let segIndex = 0;
      for (let d = 0; d <= totalLen + 1e-9; d += sampleSpacing) {
        while (segIndex < cumulative.length - 2 && cumulative[segIndex + 1] < d) segIndex += 1;
        const s0 = cumulative[segIndex];
        const s1 = cumulative[segIndex + 1];
        const range = Math.max(1e-8, s1 - s0);
        out.push(interpolatePoint(srcPoints[segIndex], srcPoints[segIndex + 1], clamp((d - s0) / range, 0, 1)));
      }
      const tail = srcPoints[srcPoints.length - 1];
      const tailCoord = getCoord(tail);
      const prev = out[out.length - 1];
      const prevCoord = prev ? getCoord(prev) : null;
      if (!prevCoord || Math.hypot(prevCoord.x - tailCoord.x, prevCoord.y - tailCoord.y) > sampleSpacing * 0.35) {
        out.push(cloneWithCoords(tail, tailCoord.x, tailCoord.y));
      }
      return out;
    };
    const chaikinPass = (srcPoints) => {
      if (!Array.isArray(srcPoints) || srcPoints.length < 3) return srcPoints ? srcPoints.slice() : [];
      const firstCoord = getCoord(srcPoints[0]);
      const out = [cloneWithCoords(srcPoints[0], firstCoord.x, firstCoord.y)];
      for (let i = 0; i < srcPoints.length - 1; i += 1) {
        const a = srcPoints[i];
        const b = srcPoints[i + 1];
        const ac = getCoord(a);
        const bc = getCoord(b);
        const q = cloneWithCoords(a,
          (ac.x * 0.75) + (bc.x * 0.25),
          (ac.y * 0.75) + (bc.y * 0.25),
          {
            t: (Number(a.t || 0) * 0.75) + (Number(b.t || 0) * 0.25),
            widthScale: (getStrokePointScalar(a, "widthScale", 1) * 0.75) + (getStrokePointScalar(b, "widthScale", 1) * 0.25),
            pressureLike: (getStrokePointScalar(a, "pressureLike", 1) * 0.75) + (getStrokePointScalar(b, "pressureLike", 1) * 0.25),
          });
        const r = cloneWithCoords(a,
          (ac.x * 0.25) + (bc.x * 0.75),
          (ac.y * 0.25) + (bc.y * 0.75),
          {
            t: (Number(a.t || 0) * 0.25) + (Number(b.t || 0) * 0.75),
            widthScale: (getStrokePointScalar(a, "widthScale", 1) * 0.25) + (getStrokePointScalar(b, "widthScale", 1) * 0.75),
            pressureLike: (getStrokePointScalar(a, "pressureLike", 1) * 0.25) + (getStrokePointScalar(b, "pressureLike", 1) * 0.75),
        });
        out.push(q, r);
      }
      const tail = srcPoints[srcPoints.length - 1];
      const tailCoord = getCoord(tail);
      out.push(cloneWithCoords(tail, tailCoord.x, tailCoord.y));
      return out;
    };
    const resampled = buildUniformSamples(rawPoints, spacing);
    if (resampled.length < 3) return resampled;
    const passes = finalPass ? 2 : 1;
    let curved = resampled.slice();
    for (let i = 0; i < passes; i += 1) curved = chaikinPass(curved);
    const finalPoints = buildUniformSamples(curved, Math.max(spacing * 0.75, 0.00055));
    return finalPoints;
  }

  function getStrokePointScalar(point, name, fallback = 1) {
    const value = Number(point?.[name]);
    return Number.isFinite(value) ? Math.max(0, value) : fallback;
  }

  function getStrokeRadiusSpec(stroke) {
    const radiusValue = Number(stroke?.radiusValue);
    if (Number.isFinite(radiusValue) && radiusValue > 0) {
      const model = String(stroke?.radiusModel || "").trim() || "erp_uv_norm";
      if (model === "world_angle") {
        return {
          model: "erp_uv_norm",
          value: Math.max(1e-6, Number(stroke?.size || 10) * 0.5 / 2048),
        };
      }
      return {
        model,
        value: radiusValue,
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number(stroke?.size || 10) * 0.5 / 2048),
    };
  }

  function createRasterSurface(width, height, options = {}) {
    const surface = document.createElement("canvas");
    surface.width = Math.max(1, Math.round(width));
    surface.height = Math.max(1, Math.round(height));
    const surfaceCtx = surface.getContext("2d", options.readback ? { willReadFrequently: true } : void 0);
    if (surfaceCtx) {
      surfaceCtx.clearRect(0, 0, surface.width, surface.height);
      surfaceCtx.imageSmoothingEnabled = true;
    }
    return { canvas: surface, ctx: surfaceCtx };
  }

  function getPaintingRevisionKey() {
    // Tracks stroke changes (commit, undo/redo, clear all).
    const descriptor = getDesiredPaintTargetDescriptor();
    return `${String(editor.paintStrokeRevision)}:${descriptor.width}x${descriptor.height}`;
  }

  function getPaintingCompositeRevisionKey() {
    const descriptor = getDesiredPaintTargetDescriptor();
    return `${String(editor.paintStrokeRevision)}:${String(editor.paintCompositeRevision)}:${descriptor.width}x${descriptor.height}`;
  }

  function getDisplayPaintRevisionKey() {
    const liveSuffix = getLivePaintRevisionSuffix();
    const base = getPaintingCompositeRevisionKey();
    return liveSuffix ? `${base}:${liveSuffix}` : base;
  }

  function bumpPaintingStrokeRevision() {
    editor.paintStrokeRevision += 1;
    editor.paintCompositeRevision += 1;
  }

  function bumpPaintingCompositeRevision() {
    editor.paintCompositeRevision += 1;
  }

  function invalidateObjectVisualCaches() {
    editor._sortedItemsCache = null;
    editor._strokeGeomCache.clear();
  }

  function refreshPaintEngineRevisionCache() {
    editor.paintEngineRevisionKey = null;
    editor.paintEngine?.rebuildCommitted?.(state);
    editor.paintEngineRevisionKey = getPaintingRevisionKey();
  }

  function invalidatePaintingLayerState() {
    if (state.painting_layer !== null) {
      state.painting_layer = null;
    }
    _paintLayerSyncRevision = "";
  }

  function markObjectVisualsDirty() {
    editor.objectVisualRevision = Number(editor.objectVisualRevision || 0) + 1;
    invalidateObjectVisualCaches();
    runtime.backgroundDirty = true;
    runtime.dirty = true;
  }

  function markPaintStrokeVisualsDirty({ rebuildPaintEngine = false } = {}) {
    invalidatePaintingLayerState();
    bumpPaintingStrokeRevision();
    markObjectVisualsDirty();
    if (rebuildPaintEngine) {
      refreshPaintEngineRevisionCache();
    }
  }

  function markPaintCompositeVisualsDirty() {
    invalidatePaintingLayerState();
    bumpPaintingCompositeRevision();
    markObjectVisualsDirty();
  }

  function rebuildPaintEngineIfNeeded() {
    const descriptor = getDesiredPaintTargetDescriptor();
    const descriptorKey = `${descriptor.width}x${descriptor.height}`;
    if (editor.paintEngineDescriptorKey !== descriptorKey) {
      editor.paintEngine = createPaintEngineManager(descriptor);
      editor.paintEngineDescriptorKey = descriptorKey;
      editor.paintEngineRevisionKey = "";
    }
    const key = getPaintingRevisionKey();
    if (editor.paintEngineRevisionKey === key) return;
    editor.paintEngineRevisionKey = key;
    editor.paintEngine?.rebuildCommitted(state);
  }

  function getDesiredPaintTargetDescriptor() {
    // Root treatment: the ERP paint/mask workspace is its own coordinate space.
    // It must not inherit arbitrary connected-image dimensions, otherwise non-ERP
    // inputs can distort all panorama paint rendering.
    const presetWidth = Math.max(1, resolveEditorOutputPresetWidth(Number(state?.output_preset || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: presetWidth,
      height: Math.max(1, Math.round(presetWidth * 0.5)),
    };
  }

  function getActivePaintTargetDescriptor() {
    return getDesiredPaintTargetDescriptor();
  }

  function getSourcePoint2D(stroke, point) {
    return { x: Number(point?.u || 0), y: Number(point?.v || 0) };
  }

  function getStrokeNormal2D(stroke, points, index) {
    const prev = getSourcePoint2D(stroke, points[Math.max(0, index - 1)] || points[index]);
    const next = getSourcePoint2D(stroke, points[Math.min(points.length - 1, index + 1)] || points[index]);
    const dx = Number(next.x || 0) - Number(prev.x || 0);
    const dy = Number(next.y || 0) - Number(prev.y || 0);
    const len = Math.hypot(dx, dy);
    // When prev === next (single-point stroke or zero-length segment), use a default
    // right-facing normal so the offset point yields a valid non-zero radiusPx.
    if (len < 1e-12) return { x: 1, y: 0 };
    return { x: -dy / len, y: dx / len };
  }

  function getWorldOffsetDirForStrokePoint(stroke, point, index, points, sourceShot = null) {
    const centerDir = erpPointToWorldDir(point);
    if (!centerDir) return { centerDir: null, offsetDir: null };
    const radiusSpec = getStrokeRadiusSpec(stroke);
    const scale = getStrokePointScalar(point, "widthScale", 1) * getStrokePointScalar(point, "pressureLike", 1);
    if (radiusSpec.model === "world_angle") {
      const prevDir = erpPointToWorldDir(points[Math.max(0, index - 1)] || point);
      const nextDir = erpPointToWorldDir(points[Math.min(points.length - 1, index + 1)] || point);
      const tangent = norm(vec3(
        Number((nextDir?.x || centerDir.x) - (prevDir?.x || centerDir.x)),
        Number((nextDir?.y || centerDir.y) - (prevDir?.y || centerDir.y)),
        Number((nextDir?.z || centerDir.z) - (prevDir?.z || centerDir.z)),
      ));
      const normal3 = norm(cross(tangent, centerDir));
      const offsetDir = norm(add(centerDir, mul(normal3, Math.tan(radiusSpec.value * scale))));
      return { centerDir, offsetDir };
    }
    const normal2 = getStrokeNormal2D(stroke, points, index);
    const offsetPt = {
      ...point,
      u: Number(point?.u || 0) + (normal2.x * radiusSpec.value * scale),
      v: Number(point?.v || 0) + (normal2.y * radiusSpec.value * scale),
    };
    return {
      centerDir,
      offsetDir: erpPointToWorldDir(offsetPt),
    };
  }

  function projectWorldDirToCurrentViewSample(centerDir, offsetDir) {
    if (!centerDir || !offsetDir) return null;
    if (editor.mode === "unwrap") {
      const r = getUnwrapRect();
      const cll = dirToLonLat(centerDir);
      const oll = dirToLonLat(offsetDir);
      const center = {
        x: r.x + (((cll.lon / (2 * Math.PI)) + 0.5) * r.w),
        y: r.y + ((0.5 - (cll.lat / Math.PI)) * r.h),
      };
      const offset = {
        x: r.x + (((oll.lon / (2 * Math.PI)) + 0.5) * r.w),
        y: r.y + ((0.5 - (oll.lat / Math.PI)) * r.h),
      };
      return {
        x: center.x,
        y: center.y,
        radiusPx: Math.max(0.5, Math.hypot(offset.x - center.x, offset.y - center.y)),
        z: 1,
      };
    }
    const center = projectDir(centerDir);
    const offset = projectDir(offsetDir);
    if (!center || !offset || Number(center.z || 0) <= 0 || Number(offset.z || 0) <= 0) return null;
    return {
      x: center.x,
      y: center.y,
      radiusPx: Math.max(0.5, Math.hypot(offset.x - center.x, offset.y - center.y)),
      z: center.z,
    };
  }


  function getNativeRadiusPxForStrokePoint(stroke, point, targetWidth, targetHeight, shot = null) {
    const spec = getStrokeRadiusSpec(stroke);
    const scale = getStrokePointScalar(point, "widthScale", 1) * getStrokePointScalar(point, "pressureLike", 1);
    if (spec.model === "erp_uv_norm") return Math.max(0.5, spec.value * targetWidth * scale);
    if (spec.model === "world_angle") {
      if (shot) {
        return Math.max(0.5, ((spec.value / Math.max(1e-6, Number(shot.hFOV_deg || 90) * DEG2RAD)) * targetWidth) * scale);
      }
      return Math.max(0.5, ((spec.value / (2 * Math.PI)) * targetWidth) * scale);
    }
    return Math.max(0.5, Number(stroke?.size || 10) * 0.5 * scale);
  }

  function configureStrokeFill(targetCtx, stroke, options = {}) {
    const layerKind = String(stroke?.layerKind || "paint");
    const toolKind = String(stroke?.toolKind || "pen");
    const preview = options.preview === true;
    const markerAlphaScale = preview ? 0.78 : 1;
    targetCtx.globalAlpha = toolKind === "marker" ? 0.7 * markerAlphaScale : 1;
    if (layerKind === "mask") {
      targetCtx.fillStyle = preview ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (toolKind === "eraser") {
      targetCtx.globalCompositeOperation = "destination-out";
      targetCtx.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const c = String(stroke?.layerKind || "") === "mask"
      ? { r: 0, g: 0, b: 0, a: 1 }
      : (stroke?.color || { r: 1, g: 0.25, b: 0.25, a: 1 });
    const alpha = preview ? Math.max(0.28, Number(c.a ?? 1) * 0.88) : Math.max(0.12, Number(c.a ?? 1));
    targetCtx.fillStyle = `rgba(${Math.round(Number(c.r || 0) * 255)}, ${Math.round(Number(c.g || 0) * 255)}, ${Math.round(Number(c.b || 0) * 255)}, ${alpha})`;
  }

  function drawDiscStamp(targetCtx, sample, maxRadiusPx) {
    const r = Math.max(0.5, Math.min(maxRadiusPx, Number(sample?.radiusPx || 0.5)));
    if (!Number.isFinite(sample?.x) || !Number.isFinite(sample?.y) || !Number.isFinite(r)) return;
    targetCtx.beginPath();
    targetCtx.arc(Number(sample.x || 0), Number(sample.y || 0), r, 0, Math.PI * 2);
    targetCtx.fill();
  }

  function drawStampedStroke(targetCtx, samples, stroke, bounds, options = {}) {
    if (!targetCtx || !Array.isArray(samples) || !samples.length) return;
    const maxRadiusPx = Math.max(bounds.w, bounds.h) * 0.25;
    targetCtx.save();
    configureStrokeFill(targetCtx, stroke, options);
    const drawSample = (sample) => drawDiscStamp(targetCtx, sample, maxRadiusPx);
    if (samples.length === 1) {
      drawSample(samples[0]);
      targetCtx.restore();
      return;
    }
    for (let i = 0; i < samples.length - 1; i += 1) {
      const a = samples[i];
      const b = samples[i + 1];
      if (!a || !b) continue;
      const ax = Number(a.x || 0);
      const ay = Number(a.y || 0);
      const bx = Number(b.x || 0);
      const by = Number(b.y || 0);
      const ar = Math.max(0.5, Math.min(maxRadiusPx, Number(a.radiusPx || 0.5)));
      const br = Math.max(0.5, Math.min(maxRadiusPx, Number(b.radiusPx || 0.5)));
      if (!Number.isFinite(ax) || !Number.isFinite(ay) || !Number.isFinite(bx) || !Number.isFinite(by)) continue;
      if (!Number.isFinite(ar) || !Number.isFinite(br)) continue;
      const dx = bx - ax;
      const dy = by - ay;
      const len = Math.hypot(dx, dy);
      if (!Number.isFinite(len) || len < 1e-6) {
        drawSample(a);
        continue;
      }
      if (len > Math.max(bounds.w, bounds.h) * 0.5) continue;
      const minRadius = Math.max(0.5, Math.min(ar, br));
      const step = Math.max(0.35, Math.min(minRadius * 0.4, 2.25));
      const count = Math.max(1, Math.ceil(len / step));
      for (let j = 0; j <= count; j += 1) {
        const t = j / count;
        drawSample({
          x: lerp(ax, bx, t),
          y: lerp(ay, by, t),
          radiusPx: lerp(ar, br, t),
        });
      }
    }
    drawSample(samples[samples.length - 1]);
    targetCtx.restore();
  }

  function drawNativeStrokePath(targetCtx, samples, stroke, bounds) {
    drawStampedStroke(targetCtx, samples, stroke, bounds, { preview: false });
  }

  function drawNativeLassoFill(targetCtx, points, stroke, bounds, axisKeys) {
    if (!targetCtx || !Array.isArray(points) || points.length < 3) return;
    const xKey = axisKeys?.x || "u";
    const yKey = axisKeys?.y || "v";
    targetCtx.save();
    if (String(stroke?.layerKind || "") === "mask") {
      targetCtx.fillStyle = "rgba(255,255,255,1)";
    } else if (String(stroke?.toolKind || "") === "eraser") {
      targetCtx.globalCompositeOperation = "destination-out";
      targetCtx.fillStyle = "rgba(0,0,0,1)";
    } else {
      const c = stroke?.color || { r: 1, g: 0.25, b: 0.25, a: 1 };
      targetCtx.fillStyle = `rgba(${Math.round(Number(c.r || 0) * 255)}, ${Math.round(Number(c.g || 0) * 255)}, ${Math.round(Number(c.b || 0) * 255)}, ${Number(c.a ?? 1)})`;
    }
    targetCtx.beginPath();
    targetCtx.moveTo(Number(points[0]?.[xKey] || 0) * bounds.w, Number(points[0]?.[yKey] || 0) * bounds.h);
    for (let i = 1; i < points.length; i += 1) {
      targetCtx.lineTo(Number(points[i]?.[xKey] || 0) * bounds.w, Number(points[i]?.[yKey] || 0) * bounds.h);
    }
    targetCtx.closePath();
    targetCtx.fill();
    targetCtx.restore();
  }

  function getStrokeRasterPoints(stroke) {
    const geometry = stroke?.geometry || null;
    if (!geometry) return [];
    if (String(geometry.geometryKind || "") === "lasso_fill") {
      return Array.isArray(geometry.points) ? geometry.points : [];
    }
    return Array.isArray(geometry.processedPoints) && geometry.processedPoints.length
      ? geometry.processedPoints
      : (Array.isArray(geometry.rawPoints) && geometry.rawPoints.length
        ? geometry.rawPoints
        : (Array.isArray(geometry.points) ? geometry.points : []));
  }

  function buildNativeStrokeSamples(stroke, bounds) {
    const points = getStrokeRasterPoints(stroke);
    if (!Array.isArray(points) || !points.length) return [];
    return points.map((point) => ({
      x: Number(point?.u || 0) * Number(bounds?.w || 1),
      y: Number(point?.v || 0) * Number(bounds?.h || 1),
      radiusPx: getNativeRadiusPxForStrokePoint(stroke, point, Number(bounds?.w || 1), Number(bounds?.h || 1)),
    }));
  }

  function rasterizeStrokeToSurface(surface, stroke, bounds = null) {
    if (!surface?.ctx || !stroke) return false;
    const targetBounds = bounds || { w: Number(surface.canvas?.width || 0), h: Number(surface.canvas?.height || 0) };
    const rasterStroke = String(stroke?.toolKind || "") === "eraser"
      ? {
        ...stroke,
        layerKind: "mask",
        toolKind: String(stroke?.geometry?.geometryKind || "") === "lasso_fill" ? "lasso_fill" : "pen",
      }
      : stroke;
    const geometryKind = String(stroke?.geometry?.geometryKind || "");
    if (geometryKind === "lasso_fill") {
      drawNativeLassoFill(surface.ctx, getStrokeRasterPoints(rasterStroke), rasterStroke, targetBounds);
      return true;
    }
    const samples = buildNativeStrokeSamples(rasterStroke, targetBounds);
    if (!samples.length) return false;
    drawNativeStrokePath(surface.ctx, samples, rasterStroke, targetBounds);
    return true;
  }

  function getAlphaBounds(alpha, width, height, threshold = 8) {
    let minX = width;
    let minY = height;
    let maxX = -1;
    let maxY = -1;
    for (let y = 0; y < height; y += 1) {
      const row = y * width;
      for (let x = 0; x < width; x += 1) {
        if (alpha[row + x] <= threshold) continue;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
    if (maxX < minX || maxY < minY) return null;
    return { minX, minY, maxX, maxY };
  }

  function findAlphaConnectedComponents(alpha, width, height, threshold = 8) {
    const visited = new Uint8Array(width * height);
    const components = [];
    const queueX = new Int32Array(width * height);
    const queueY = new Int32Array(width * height);
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const idx = y * width + x;
        if (visited[idx] || alpha[idx] <= threshold) continue;
        let qh = 0;
        let qt = 0;
        queueX[qt] = x;
        queueY[qt] = y;
        qt += 1;
        visited[idx] = 1;
        const pixels = [];
        let minX = x;
        let minY = y;
        let maxX = x;
        let maxY = y;
        while (qh < qt) {
          const cx = queueX[qh];
          const cy = queueY[qh];
          qh += 1;
          pixels.push({ x: cx, y: cy });
          if (cx < minX) minX = cx;
          if (cy < minY) minY = cy;
          if (cx > maxX) maxX = cx;
          if (cy > maxY) maxY = cy;
          const neighbors = [
            [(cx - 1 + width) % width, cy],
            [(cx + 1) % width, cy],
            [cx, cy - 1],
            [cx, cy + 1],
          ];
          for (const [nx, ny] of neighbors) {
            if (ny < 0 || ny >= height) continue;
            const nidx = ny * width + nx;
            if (visited[nidx] || alpha[nidx] <= threshold) continue;
            visited[nidx] = 1;
            queueX[qt] = nx;
            queueY[qt] = ny;
            qt += 1;
          }
        }
        components.push({ pixels, minX, minY, maxX, maxY });
      }
    }
    return components;
  }

  function getWrappedComponentWindow(component, width) {
    const xs = [...new Set((Array.isArray(component?.pixels) ? component.pixels : []).map((pt) => Number(pt?.x || 0)).filter((x) => Number.isFinite(x)))].sort((a, b) => a - b);
    if (!xs.length) return null;
    if (xs.length === 1) {
      return { startX: xs[0], widthPx: 1 };
    }
    let bestGap = -1;
    let bestIndex = 0;
    for (let i = 0; i < xs.length; i += 1) {
      const current = xs[i];
      const next = i === xs.length - 1 ? xs[0] + width : xs[i + 1];
      const gap = next - current - 1;
      if (gap > bestGap) {
        bestGap = gap;
        bestIndex = i;
      }
    }
    const startX = (xs[(bestIndex + 1) % xs.length] + width) % width;
    let minWrappedX = Infinity;
    let maxWrappedX = -Infinity;
    for (const x of xs) {
      const wrappedX = (x - startX + width) % width;
      minWrappedX = Math.min(minWrappedX, wrappedX);
      maxWrappedX = Math.max(maxWrappedX, wrappedX);
    }
    return {
      startX,
      widthPx: Math.max(1, maxWrappedX - minWrappedX + 1),
    };
  }

  function createRasterFrozenObjectsFromCanvas(canvas, layerKind, baseMeta = {}) {
    const w = Number(canvas?.width || 0);
    const h = Number(canvas?.height || 0);
    const ctx2d = canvas?.getContext?.("2d");
    if (!ctx2d || w < 1 || h < 1) return [];
    const imageData = ctx2d.getImageData(0, 0, w, h);
    const alpha = new Uint8Array(w * h);
    for (let i = 0; i < alpha.length; i += 1) alpha[i] = imageData.data[i * 4 + 3];
    const components = findAlphaConnectedComponents(alpha, w, h, 8);
    return components.map((component, index) => {
      const window = getWrappedComponentWindow(component, w);
      if (!window) return null;
      const cw = Number(window.widthPx || 0);
      const ch = component.maxY - component.minY + 1;
      const startX = Number(window.startX || 0);
      const out = document.createElement("canvas");
      out.width = cw;
      out.height = ch;
      const outCtx = out.getContext("2d");
      if (!outCtx) return null;
      const outData = outCtx.createImageData(cw, ch);
      component.pixels.forEach(({ x, y }) => {
        const srcIdx = (y * w + x) * 4;
        const wrappedX = (Number(x || 0) - startX + w) % w;
        const dstIdx = ((y - component.minY) * cw + wrappedX) * 4;
        outData.data[dstIdx + 0] = imageData.data[srcIdx + 0];
        outData.data[dstIdx + 1] = imageData.data[srcIdx + 1];
        outData.data[dstIdx + 2] = imageData.data[srcIdx + 2];
        outData.data[dstIdx + 3] = imageData.data[srcIdx + 3];
      });
      outCtx.putImageData(outData, 0, 0);
      return {
        id: makePaintId("raster"),
        type: "raster_frozen",
        layerKind: layerKind === "mask" ? "mask" : "paint",
        z_index: Number(baseMeta?.z_index || 0) + (index * 0.001),
        locked: baseMeta?.locked === true,
        bbox: {
          u0: 0,
          v0: component.minY / h,
          u1: cw / w,
          v1: (component.maxY + 1) / h,
        },
        rasterDataUrl: out.toDataURL("image/png"),
        transform: {
          du: startX / w,
          dv: 0,
          rot_deg: 0,
          scale: 1,
        },
      };
    }).filter(Boolean);
  }

  function worldDirToFrameLocalPoint(shot, dir) {
    if (!shot || !dir) return null;
    const frame = getStickerFrame(shot);
    const cz = dot(dir, frame.centerDir);
    if (!Number.isFinite(cz) || cz <= 1e-6) return null;
    const xr = dot(dir, frame.right) / cz;
    const yr = dot(dir, frame.up) / cz;
    const x = (xr * frame.cr) + (yr * frame.sr);
    const y = (-xr * frame.sr) + (yr * frame.cr);
    return {
      x: (x / Math.max(1e-6, frame.tanX) + 1) * 0.5,
      y: (1 - (y / Math.max(1e-6, frame.tanY))) * 0.5,
    };
  }


  function projectLassoPointsToCurrentView(points) {
    if (!Array.isArray(points) || points.length < 3) return [];
    if (editor.mode === "unwrap") {
      const r = getUnwrapRect();
      return points.map((pt) => ({
        x: r.x + (Number(pt.u || 0) * r.w),
        y: r.y + (Number(pt.v || 0) * r.h),
      }));
    }
    const projected = points.map((pt) => projectDir(erpPointToWorldDir(pt))).filter(Boolean);
    return projected.every((pt) => Number(pt.z || 0) > 0)
      ? projected.map((pt) => ({ x: Number(pt.x || 0), y: Number(pt.y || 0) }))
      : [];
  }

  function projectErpPointsToCurrentView(points, unwrapRefU = null) {
    if (!Array.isArray(points) || points.length < 1) return [];
    if (editor.mode === "unwrap") {
      const r = getUnwrapRect();
      return points.map((pt) => {
        const u = ((Number(pt.u || 0) % 1) + 1) % 1;
        const uu = unwrapRefU == null ? u : (Number(unwrapRefU || 0) + shortestWrappedDelta(u, unwrapRefU));
        return {
          x: r.x + (uu * r.w),
          y: r.y + (Number(pt.v || 0) * r.h),
        };
      });
    }
    const projected = points.map((pt) => projectDir(erpPointToWorldDir(pt))).filter(Boolean);
    return projected.every((pt) => Number(pt.z || 0) > 0)
      ? projected.map((pt) => ({ x: Number(pt.x || 0), y: Number(pt.y || 0) }))
      : [];
  }

  function isProjectedPolygonContinuous(projected, maxJump = 160) {
    if (!Array.isArray(projected) || projected.length < 3) return false;
    for (let i = 0; i < projected.length; i += 1) {
      const a = projected[i];
      const b = projected[(i + 1) % projected.length];
      if (!a || !b) return false;
      if (!Number.isFinite(a.x) || !Number.isFinite(a.y) || !Number.isFinite(b.x) || !Number.isFinite(b.y)) return false;
      if (Math.hypot(Number(b.x) - Number(a.x), Number(b.y) - Number(a.y)) > maxJump) return false;
    }
    return true;
  }


  function projectErpLassoPointsToFrameRect(points, shot, rect) {
    if (!Array.isArray(points) || points.length < 3 || !shot || !rect) return [];
    const projected = [];
    for (const pt of points) {
      const dir = erpPointToWorldDir(pt);
      const local = worldDirToFrameLocalPoint(shot, dir);
      if (!local) return [];
      projected.push({
        x: Number(rect.x || 0) + (Number(local.x || 0) * Number(rect.w || 0)),
        y: Number(rect.y || 0) + (Number(local.y || 0) * Number(rect.h || 0)),
      });
    }
    return isProjectedPolygonContinuous(projected, Math.max(80, Math.max(rect.w, rect.h) * 0.75)) ? projected : [];
  }

  function projectErpPointsToFrameRect(points, shot, rect) {
    if (!Array.isArray(points) || points.length < 1 || !shot || !rect) return [];
    const projected = [];
    for (const pt of points) {
      const dir = erpPointToWorldDir(pt);
      const local = worldDirToFrameLocalPoint(shot, dir);
      if (!local) continue;
      projected.push({
        x: Number(rect.x || 0) + (Number(local.x || 0) * Number(rect.w || 0)),
        y: Number(rect.y || 0) + (Number(local.y || 0) * Number(rect.h || 0)),
      });
    }
    return projected;
  }

  function drawLassoPreviewPolygon(projected, stroke, options = {}) {
    if (!Array.isArray(projected) || projected.length < 3) return;
    const layerKind = String(stroke?.layerKind || "paint");
    const toolKind = String(stroke?.toolKind || "pen");
    const preview = options.preview === true;
    ctx.save();
    if (layerKind === "mask") {
      ctx.fillStyle = `rgba(34, 197, 94, ${preview ? 0.55 : 0.85})`;
    } else if (toolKind === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
    } else {
      const c = stroke?.color || { r: 1, g: 0.25, b: 0.25, a: 1 };
      const fillAlpha = preview ? Math.max(0.12, Number(c.a ?? 1) * 0.45) : Math.max(0.2, Number(c.a ?? 1));
      const strokeAlpha = preview ? Math.max(0.28, Number(c.a ?? 1) * 0.9) : Math.max(0.32, Number(c.a ?? 1));
      ctx.fillStyle = `rgba(${Math.round(Number(c.r || 0) * 255)}, ${Math.round(Number(c.g || 0) * 255)}, ${Math.round(Number(c.b || 0) * 255)}, ${fillAlpha})`;
      ctx.strokeStyle = `rgba(${Math.round(Number(c.r || 0) * 255)}, ${Math.round(Number(c.g || 0) * 255)}, ${Math.round(Number(c.b || 0) * 255)}, ${strokeAlpha})`;
      ctx.lineWidth = 1.5;
    }
    ctx.beginPath();
    ctx.moveTo(Number(projected[0].x || 0), Number(projected[0].y || 0));
    for (let i = 1; i < projected.length; i += 1) ctx.lineTo(Number(projected[i].x || 0), Number(projected[i].y || 0));
    ctx.closePath();
    ctx.fill();
    if (layerKind !== "mask" && toolKind !== "eraser") ctx.stroke();
    ctx.restore();
  }

  function drawFrameViewBackground() {
    const shot = getActiveCutoutShot();
    const layout = getFrameViewLayout(shot);
    if (!shot || !layout) return false;
    const rect = { x: layout.x, y: layout.y, w: layout.w, h: layout.h };
    const focal = Math.max(1, Number(layout.focalPx || 1));
    const centerX = rect.x + rect.w * 0.5;
    const centerY = rect.y + rect.h * 0.5;
    // The context fills the whole canvas. The only bound is the absolute field
    // angle: a rectilinear continuation degenerates as it approaches 90 degrees
    // off-axis, so stop there and leave the remainder as neutral background.
    // Do NOT bound this relative to the gate — that makes the rendered area
    // shrink together with the gate and leaves unpainted margins.
    const { halfW, halfH } = contextHalfExtentsPx(
      { width: canvas.width, height: canvas.height },
      focal,
    );
    const contextRect = { x: centerX - halfW, y: centerY - halfH, w: halfW * 2, h: halfH * 2 };
    const contextShot = {
      ...shot,
      hFOV_deg: 2 * Math.atan(halfW / focal) * RAD2DEG,
      vFOV_deg: 2 * Math.atan(halfH / focal) * RAD2DEG,
    };
    const gateRadius = getFrameGateRadius(rect);
    ctx.save();
    // Opaque base every frame. Without this the region outside contextRect keeps
    // last frame's pixels and the passepartout below multiplies it toward black,
    // which reads as a growing black border around the view.
    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const previewQuality = editor.interaction ? "draft" : String(state.ui_settings?.preview_quality || "balanced");
    const drew = renderCutoutPreviewToContext(ctx, contextRect, contextShot, { quality: previewQuality }) === true;
    if (!drew) {
      ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
      ctx.fillRect(contextRect.x, contextRect.y, contextRect.w, contextRect.h);
    }
    ctx.restore();
    ctx.save();
    ctx.fillStyle = "rgba(0, 0, 0, 0.58)";
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.roundRect(rect.x, rect.y, rect.w, rect.h, gateRadius);
    ctx.fill("evenodd");
    ctx.restore();
    ctx.save();
    ctx.strokeStyle = CUTOUT_FRAME_ACCENT;
    ctx.globalAlpha = 0.62;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(rect.x + 1, rect.y + 1, rect.w - 2, rect.h - 2, Math.max(0, gateRadius - 1));
    ctx.stroke();
    ctx.restore();
    return true;
  }

  function getFrameGateRadius(rect) {
    const radiusScale = Math.max(1e-6, Number(runtime.frameCanvasScale || 1));
    return Math.min(frameGateCssRadius * radiusScale, Number(rect?.w || 0) * 0.5, Number(rect?.h || 0) * 0.5);
  }

  function syncFrameRollKnob() {
    const shot = editor.mode === "frame" ? getActiveCutoutShot() : null;
    uiState.frameRollKnob.visible = !!shot && !readOnly;
    uiState.frameRollKnob.rollDeg = Number(shot?.roll_deg ?? shot?.rot_deg ?? 0);
    uiState.frameRollKnob.displayValue = formatParamValue(uiState.frameRollKnob.rollDeg);
    uiState.frameRollKnob.dragging = editor.interaction?.kind === "roll_frame";
    uiState.frameRollKnob.armed = !!shot && editor.altModifier === true;
  }

  // Draw dashed outline for the lasso fill region while the user is still drawing.
  // The fill itself is rendered at 50% by the paint engine (lassoPreviewActive).
  // This overlay adds a visible dashed border on the 2D canvas.
  function drawLassoOutlineOverlay() {
    if (editor.interaction?.kind !== "paint_lasso_fill") return;
    const stroke = editor.interaction.stroke;
    const points = stroke?.geometry?.points;
    let projected;
    if (editor.mode === "frame") {
      const shot = getActiveCutoutShot();
      const rect = getFrameViewRect(shot);
      projected = projectErpLassoPointsToFrameRect(points, shot, rect);
    } else {
      projected = projectLassoPointsToCurrentView(points);
    }
    if (!Array.isArray(projected) || projected.length < 3) return;

    const isMaskLasso = String(stroke?.layerKind || "") === "mask";
    const c = stroke?.color || { r: 1, g: 0.25, b: 0.25, a: 1 };
    const cr = Math.round(Number(c.r || 0) * 255);
    const cg = Math.round(Number(c.g || 0) * 255);
    const cb = Math.round(Number(c.b || 0) * 255);

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(Number(projected[0].x || 0), Number(projected[0].y || 0));
    for (let i = 1; i < projected.length; i++) ctx.lineTo(Number(projected[i].x || 0), Number(projected[i].y || 0));
    ctx.closePath();
    if (isMaskLasso) {
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.lineDashOffset = 0;
      ctx.strokeStyle = "rgba(0,0,0,0.96)";
      ctx.stroke();
      ctx.lineDashOffset = -6;
      ctx.strokeStyle = "rgba(255,255,255,0.96)";
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.lineDashOffset = 0;
    } else {
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 4]);
      ctx.strokeStyle = `rgba(${cr},${cg},${cb},1)`;
      ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.restore();
  }

  function drawFrameRollOverlay() {
    const visual = editor.frameRollOverlayVisual;
    const alpha = clamp(Number(editor.frameRollOverlayAlpha || 0), 0, 1);
    if (editor.mode !== "frame" || !visual?.shot || alpha <= 1e-4) return;
    const rect = getFrameViewRect(visual.shot);
    if (!rect) return;
    const center = { x: rect.x + rect.w * 0.5, y: rect.y + rect.h * 0.5 };
    const angle = Number(visual.shot.roll_deg ?? visual.shot.rot_deg ?? 0) * DEG2RAD;
    const radius = Math.hypot(rect.w, rect.h) * 0.55;
    const dx = Math.cos(angle) * radius;
    const dy = Math.sin(angle) * radius;
    ctx.save();
    ctx.globalAlpha *= alpha;
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
    ctx.clip();
    ctx.translate(center.x, center.y);
    ctx.rotate(angle);
    const spacing = Math.max(12, Math.min(rect.w, rect.h) / 6);
    ctx.beginPath();
    for (let x = -radius; x <= radius; x += spacing) {
      ctx.moveTo(x, -radius);
      ctx.lineTo(x, radius);
    }
    for (let y = -radius; y <= radius; y += spacing) {
      ctx.moveTo(-radius, y);
      ctx.lineTo(radius, y);
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
    ctx.stroke();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.beginPath();
    ctx.moveTo(center.x - dx, center.y - dy);
    ctx.lineTo(center.x + dx, center.y + dy);
    ctx.lineWidth = 1.5;
    ctx.setLineDash([8, 6]);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.92)";
    ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
    ctx.shadowBlur = 3;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  function getCutoutPanoDimTarget() {
    if (type !== "cutout" || !getActiveCutoutShot()) return 0;
    return CUTOUT_PANO_DIM_ALPHA;
  }

  function drawCutoutPanoPassepartout() {
    const alpha = clamp(Number(editor.cutoutPanoDimAlpha || 0), 0, 1);
    if (alpha <= 1e-4 || type !== "cutout" || editor.mode !== "pano") return;
    const shot = getActiveCutoutShot();
    const geom = shot ? objectGeom(shot) : null;
    const liveCorners = Array.isArray(geom?.corners) && geom.corners.length >= 4
      ? geom.corners.map((point) => ({ x: Number(point.x || 0), y: Number(point.y || 0) }))
      : null;
    if (geom?.visible && liveCorners) editor.cutoutPanoDimCorners = liveCorners;
    if (shot && geom?.visible && liveCorners) {
      editor.cutoutPanoFrameVisual = {
        item: shot,
        geom,
        selected: isItemSelected(shot),
        locked: isItemLocked(shot),
      };
    }
    // Cached corners exist only to preserve the hole while a deleted frame
    // fades out. A live but offscreen frame must produce uniform dimming.
    const fadingOut = Number(editor.cutoutPanoDimTarget || 0) <= 1e-6;
    const corners = geom?.visible
      ? liveCorners
      : (fadingOut ? (editor.cutoutPanoDimCorners || []) : []);
    ctx.save();
    ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    if (corners.length >= 4) {
      ctx.moveTo(corners[0].x, corners[0].y);
      for (let i = 1; i < 4; i += 1) ctx.lineTo(corners[i].x, corners[i].y);
      ctx.closePath();
    }
    ctx.fill("evenodd");
    ctx.restore();
  }

  function drawScene() {
    if (editor.mode === "frame") {
      runtime.frameSafeRect = measureFrameSafeRect();
      drawFrameViewBackground();
    }
    else if (editor.mode === "unwrap") drawGridUnwrap(false);
    else drawGridPano(false);
    drawCutoutPanoPassepartout();
    if (type === "cutout") drawCutoutOutputPreview();
    drawObjects();
    syncFrameRollKnob();
    drawLassoOutlineOverlay();
    drawFrameRollOverlay();
    uiState.fovValue = `${Math.round(editor.viewFov)}°`;
    if (Math.abs(Number(editor.outputPreviewAnim || 0) - Number(editor.outputPreviewAnimTo || 0)) < 1e-6) {
      updateSelectionMenu();
    }
    if (!runtime.hasPresentedFrame) {
      runtime.hasPresentedFrame = true;
      backgroundCanvas.style.opacity = "1";
    }
    if (type === "cutout" && uiState.cameraPreview) {
      uiState.cameraPreview.settled = runtime.pendingStableLayoutFrames <= 0 && runtime.hasPresentedFrame && editor.mode !== "frame";
    }
    const stageStatus = getStageImageStatus();
    uiState.stageStatus = stageStatus.status;
    uiState.stageStatusDetail = stageStatus.detail;
    if (stageStatus.status === IMAGE_LOADING) {
      stageWrap?.removeAttribute("data-stage-ready");
      stageWrap?.setAttribute("data-stage-loading-kind", stageStatus.detail);
    } else {
      stageWrap?.setAttribute("data-stage-ready", "");
      stageWrap?.removeAttribute("data-stage-loading-kind");
    }
  }

  function isCutoutTransformInteractionActive() {
    if (type !== "cutout") return false;
    const kind = String(editor.interaction?.kind || "");
    return kind === "move" || kind === "scale" || kind === "scale_x" || kind === "scale_y" || kind === "rotate";
  }

  function isModalBackgroundObjectInteraction(interaction = editor.interaction) {
    if (type !== "stickers" || editor.mode !== "pano") return false;
    const kind = String(interaction?.kind || "");
    if (kind === "move" || kind === "scale" || kind === "scale_x" || kind === "scale_y" || kind === "rotate") {
      return true;
    }
    if (kind === "move_multi") {
      return Array.isArray(interaction?.stickerSnapshots) && interaction.stickerSnapshots.length > 0;
    }
    return false;
  }

  function syncNodeLivePreviewSources() {
    node.__panoLiveStateOverride = state;
    node.__panoLiveStateVersion = Number(node.__panoLiveStateVersion || 0) + 1;
    node.__panoLivePaintSurface = getSharedLivePaintSurface();
  }

  function requestDraw(options = {}) {
    const localOnly = !!options.localOnly;
    const externalSync = options.externalSync === true;
    const cause = String(options.cause || "");
    const interactionKind = String(editor.interaction?.kind || "");
    const backgroundShouldRedraw = !localOnly
      || interactionKind === "view"
      || interactionKind === "pan_frame"
      || isModalBackgroundObjectInteraction()
      || !!editor.viewTween?.active
      || cause === "mode"
      || cause === "frame_view"
      || cause === "cutout_frame";
    if (backgroundShouldRedraw) runtime.backgroundDirty = true;
    if (localOnly && isPaintCompositeInteraction()) {
      editor.livePaintInteractionRevision += 1;
      runtime.backgroundDirty = true;
    }
    const shouldSyncUi = !localOnly
      || cause === "selection"
      || cause === "mode"
      || cause === "cutout_frame";
    if (shouldSyncUi) {
      syncLookAtFrameButtonState();
      syncViewToggleState();
    }
    syncNodeLivePreviewSources();
    if (externalSync) {
      node.__panoDomPreview?.requestDraw?.();
      node.setDirtyCanvas?.(true, false);
    }
    if (externalSync && !localOnly) {
      node.graph?.setDirtyCanvas?.(true, true);
      app?.canvas?.setDirty?.(true, true);
    }
    runtime.dirty = true;
  }

  function syncCanvasSize() {
    const rect = canvas.getBoundingClientRect();
    const nextW = Math.max(2, Math.round(rect.width));
    const nextH = Math.max(2, Math.round(rect.height));
    if (
      canvas.width !== nextW || canvas.height !== nextH
      || backgroundCanvas.width !== nextW || backgroundCanvas.height !== nextH
    ) {
      canvas.width = nextW;
      canvas.height = nextH;
      backgroundCanvas.width = nextW;
      backgroundCanvas.height = nextH;
      runtime.backgroundDirty = true;
      runtime.dirty = true;
      if (type === "cutout") {
        runtime.pendingStableLayoutFrames = Math.max(Number(runtime.pendingStableLayoutFrames || 0), 1);
      }
      return true;
    }
    return false;
  }

  function tickFrame(ts = performance.now()) {
    const dt = runtime.lastTickTs > 0 ? Math.max(0.001, (ts - runtime.lastTickTs) / 1000) : (1 / 60);
    runtime.lastTickTs = ts;
    const activeRoll = editor.mode === "frame" && editor.interaction?.kind === "roll_frame"
      ? editor.interaction
      : null;
    if (activeRoll?.shot) editor.frameRollOverlayVisual = { shot: activeRoll.shot };
    const nextRollOverlayTarget = activeRoll ? 1 : 0;
    if (Math.abs(nextRollOverlayTarget - Number(editor.frameRollOverlayTarget || 0)) > 1e-6) {
      editor.frameRollOverlayFrom = Number(editor.frameRollOverlayAlpha || 0);
      editor.frameRollOverlayTarget = nextRollOverlayTarget;
      editor.frameRollOverlayStartTs = ts;
    }
    if (Math.abs(Number(editor.frameRollOverlayAlpha || 0) - nextRollOverlayTarget) > 1e-6) {
      const t = clamp(
        (ts - Number(editor.frameRollOverlayStartTs || ts)) / FRAME_ROLL_OVERLAY_TRANSITION_MS,
        0,
        1,
      );
      editor.frameRollOverlayAlpha = lerp(
        Number(editor.frameRollOverlayFrom || 0),
        nextRollOverlayTarget,
        easeInOutCubic(t),
      );
      if (t >= 1) {
        editor.frameRollOverlayAlpha = nextRollOverlayTarget;
        if (nextRollOverlayTarget === 0) editor.frameRollOverlayVisual = null;
      }
      runtime.dirty = true;
    }
    const nextDimTarget = getCutoutPanoDimTarget();
    if (Math.abs(nextDimTarget - Number(editor.cutoutPanoDimTarget || 0)) > 1e-6) {
      editor.cutoutPanoDimFrom = Number(editor.cutoutPanoDimAlpha || 0);
      editor.cutoutPanoDimTarget = nextDimTarget;
      editor.cutoutPanoDimStartTs = ts;
    }
    if (Math.abs(Number(editor.cutoutPanoDimAlpha || 0) - nextDimTarget) > 1e-6) {
      const t = clamp(
        (ts - Number(editor.cutoutPanoDimStartTs || ts)) / CUTOUT_PANO_DIM_TRANSITION_MS,
        0,
        1,
      );
      editor.cutoutPanoDimAlpha = lerp(
        Number(editor.cutoutPanoDimFrom || 0),
        nextDimTarget,
        easeInOutCubic(t),
      );
      if (t >= 1) editor.cutoutPanoDimAlpha = nextDimTarget;
      if (t >= 1 && nextDimTarget === 0) {
        editor.cutoutPanoDimCorners = null;
      }
      runtime.dirty = true;
    }
    const nextFrameTarget = type === "cutout" && getActiveCutoutShot() ? 1 : 0;
    if (Math.abs(nextFrameTarget - Number(editor.cutoutPanoFrameTarget || 0)) > 1e-6) {
      editor.cutoutPanoFrameFrom = Number(editor.cutoutPanoFrameAlpha || 0);
      editor.cutoutPanoFrameTarget = nextFrameTarget;
      editor.cutoutPanoFrameStartTs = ts;
    }
    if (Math.abs(Number(editor.cutoutPanoFrameAlpha || 0) - nextFrameTarget) > 1e-6) {
      const t = clamp(
        (ts - Number(editor.cutoutPanoFrameStartTs || ts)) / CUTOUT_PANO_DIM_TRANSITION_MS,
        0,
        1,
      );
      editor.cutoutPanoFrameAlpha = lerp(
        Number(editor.cutoutPanoFrameFrom || 0),
        nextFrameTarget,
        easeInOutCubic(t),
      );
      if (t >= 1) {
        editor.cutoutPanoFrameAlpha = nextFrameTarget;
        if (nextFrameTarget === 0) editor.cutoutPanoFrameVisual = null;
      }
      runtime.dirty = true;
    }
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
      runtime.backgroundDirty = true;
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
      runtime.backgroundDirty = true;
      runtime.dirty = true;
    }

    if (runtime.dirty || (ts - runtime.lastSizeCheckTs) >= 220) {
      syncCanvasSize();
      runtime.lastSizeCheckTs = ts;
    }
    if (runtime.pendingStableLayoutFrames > 0) {
      runtime.pendingStableLayoutFrames -= 1;
      runtime.dirty = true;
    }
    if (runtime.dirty) {
      if (runtime.pendingStableLayoutFrames > 0) {
        return;
      }
      runtime.dirty = false;
      drawScene();
    }
  }

  function tick(ts = performance.now()) {
    if (!runtime.running) return;
    try {
      tickFrame(ts);
    } catch (error) {
      const signature = String(error?.stack || error?.message || error || "unknown editor frame error");
      if (runtime.tickErrorSignature !== signature) {
        runtime.tickErrorSignature = signature;
        console.error("[PanoramaStickers] editor frame failed", error);
      }
      uiState.stageStatus = IMAGE_FAILED;
      uiState.stageStatusDetail = "frame";
      stageWrap?.setAttribute("data-stage-ready", "");
      stageWrap?.removeAttribute("data-stage-loading-kind");
    } finally {
      if (runtime.running) runtime.rafId = requestAnimationFrame(tick);
    }
  }

  function stopRenderLoop() {
    runtime.running = false;
    if (runtime.rafId) cancelAnimationFrame(runtime.rafId);
    runtime.rafId = 0;
  }

  function pushHistory() {
    if (readOnly) return;
    editor.historyController.commitActionGroup(JSON.stringify(makePanoEditorHistorySnapshot(state)));
    syncUndoRedoButtons();
  }

  function restoreHistory(step) {
    if (readOnly) return;
    const snapshot = step < 0 ? editor.historyController.undo() : editor.historyController.redo();
    syncUndoRedoButtons();
    if (!snapshot) return;
    const parsed = JSON.parse(snapshot);
    Object.keys(state).forEach((k) => delete state[k]);
    Object.assign(state, parsed);
    editor.selectedId = type === "stickers"
      ? state.active.selected_sticker_id
      : (type === "cutout" ? state.active.selected_sticker_id : state.active.selected_shot_id);
    editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
    markPaintStrokeVisualsDirty();
    syncPaintUi();
    updateSidePanel();
    commitState();
    requestDraw({ cause: "cutout_frame" });
  }

  function getHistoryCapabilities() {
    const historyEntries = Array.isArray(editor.historyController?.entries) ? editor.historyController.entries : [];
    const historyIndex = Number(editor.historyController?.index);
    return {
      canUndo: !readOnly && historyEntries.length > 1 && historyIndex > 0,
      canRedo: !readOnly && historyEntries.length > 1 && historyIndex >= 0 && historyIndex < historyEntries.length - 1,
    };
  }

  function syncPaintUi() {
    // Keep derived paint UI state in the dedicated builder module so this file stays bridge-focused.
    syncToolButtonModels();
    const nextPaintDock = buildPaintDockModel({
      editor,
      swatches: PAINT_COLOR_SWATCHES,
      paintColorPopOpen: paintColorPop ? !paintColorPop.hidden : false,
      colorToCss,
      colorsApproximatelyEqual,
      rgb01ToHsv,
      hsv01ToRgb,
      getBrushPresetIdForTool,
      isActiveLassoTool,
    });
    Object.assign(uiState.paintDock, nextPaintDock);
    syncVideoTransportVisibility();
    if (!nextPaintDock.visible) {
      if (paintColorPop) paintColorPop.hidden = true;
      return;
    }
    if (paintPaneFadeTimer) {
      clearTimeout(paintPaneFadeTimer);
      paintPaneFadeTimer = 0;
    }
    if (paintColorRow) {
      if (!nextPaintDock.colorEnabled && paintColorPop && !paintColorPop.hidden) {
        paintPaneFadeTimer = window.setTimeout(() => {
          paintColorPop.hidden = true;
          uiState.paintDock.colorPopOpen = false;
          paintPaneFadeTimer = 0;
        }, 170);
      }
      if (paintColorPop) {
        paintColorPop.style.setProperty("--picker-hue-color", nextPaintDock.pickerHueColor);
        paintColorPop.style.setProperty("--picker-sat", nextPaintDock.pickerSat);
        paintColorPop.style.setProperty("--picker-val", nextPaintDock.pickerVal);
        paintColorPop.style.setProperty("--picker-hue", nextPaintDock.pickerHue);
      }
      if (paintColorSvCursor) {
        paintColorSvCursor.style.left = nextPaintDock.pickerSvLeft;
        paintColorSvCursor.style.top = nextPaintDock.pickerSvTop;
      }
      if (paintHueHandle) {
        paintHueHandle.style.left = nextPaintDock.pickerHueLeft;
      }
    }
  }

  function syncSidePanelControls() {
    const selected = type === "cutout" && editor.mode === "frame" ? getActiveCutoutShot() : getSelected();
    if (!selected) return;
    editor.panelLastValues = {
      yaw_deg: Number(selected.yaw_deg || 0),
      pitch_deg: Number(selected.pitch_deg || 0),
      hFOV_deg: Number(selected.hFOV_deg || (type === "stickers" ? 30 : 90)),
      vFOV_deg: Number(selected.vFOV_deg || (type === "stickers" ? 30 : 60)),
      rot_deg: Number(selected.rot_deg || 0),
      roll_deg: Number(selected.roll_deg || 0),
      aspect_id: getCutoutAspectLabel(selected),
    };
    updateSidePanel();
  }

  function updateSidePanel() {
    if (hideSidebar) return;
    state.ui_settings = state.ui_settings || {};
    // Inspector content is derived data for Vue, not imperative DOM construction.
    const uiSettingsModel = buildUiSettingsModel(state.ui_settings);
    if (previewMode) {
      uiState.sidePanel = buildPreviewSidePanelModel({
        coverage: state.coverage,
        uiSettings: uiSettingsModel,
        normalizeCoverageValue,
      });
      return;
    }

    const canvasSelected = getSelected();
    const frameInspectorShot = type === "cutout" && editor.mode === "frame" ? getActiveCutoutShot() : null;
    const selected = frameInspectorShot || canvasSelected;
    const selectedItems = frameInspectorShot ? [frameInspectorShot] : getSelectedItems();
    const selectedKind = frameInspectorShot ? "shot" : getSelectedKind();
    if (selectedItems.length > 1) {
      editor.panelLastValues = editor.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 };
    }
    if (selected && selectedKind !== "stroke") {
      editor.panelLastValues = {
        yaw_deg: Number(selected.yaw_deg || 0),
        pitch_deg: Number(selected.pitch_deg || 0),
        hFOV_deg: Number(selected.hFOV_deg || (selectedKind === "image" ? 30 : 90)),
        vFOV_deg: Number(selected.vFOV_deg || (selectedKind === "image" ? 30 : 60)),
        rot_deg: Number(selected.rot_deg || 0),
        roll_deg: Number(selected.roll_deg || 0),
        aspect_id: getCutoutAspectLabel(selected),
      };
    }
    const fallback = editor.panelLastValues || ((type === "stickers" || selectedKind === "image")
      ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }
      : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" });
    const inspectorSelected = selectedKind === "stroke" ? null : selected;
    const effective = inspectorSelected || fallback;
    const enabled = !!inspectorSelected;
    editor.panelWasEnabled = enabled;
    syncLookAtFrameButtonState();

    let selectionPicker = null;
    if (frameInspectorShot) {
      const labelData = getSelectionItemLabelData({ item: frameInspectorShot, kind: "shot", label: "Frame" });
      selectionPicker = {
        label: "Selection",
        open: false,
        disabled: true,
        currentLabel: labelData.label,
        currentIcon: labelData.icon || null,
        items: [{
          id: String(frameInspectorShot.id || ""),
          label: labelData.label,
          icon: labelData.icon || null,
          active: true,
        }],
      };
    } else if (type === "stickers" || type === "cutout") {
      const items = [{
        id: "",
        label: type === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null,
      }];
      if (type === "stickers") {
        getList().forEach((item, i) => {
          if (!item) return;
          const baseLabel = isExternalSticker(item)
            ? String(item.id || EXTERNAL_STICKER_ID)
            : String(state.assets?.[item.asset_id]?.name || item.asset_id || item.id);
          const label = `${i + 1}. ${baseLabel}${isExternalSticker(item) && isStickerHidden(item) ? " (hidden)" : ""}`;
          const labelData = getSelectionItemLabelData({ item, label, kind: "image" });
          items.push({ id: item.id, label: labelData.label, icon: labelData.icon, item, kind: "image" });
        });
      } else {
        getCutoutInspectorItems().forEach((entry) => {
          if (!entry?.item) return;
          const labelData = getSelectionItemLabelData(entry);
          items.push({ id: entry.item.id, label: labelData.label, icon: labelData.icon, item: entry.item, kind: entry.kind });
        });
      }
      const currentId = inspectorSelected?.id || "";
      const currentItem = items.find((item) => item.id === currentId) || items[0];
      selectionPicker = {
        label: "Selection",
        open: false,
        disabled: items.length <= 1,
        currentLabel: currentItem.label,
        currentIcon: currentItem.icon || null,
        items: items.map((item) => ({
          id: item.id,
          label: item.label,
          icon: item.icon || null,
          active: item.id === currentId,
        })),
      };
    }

    const params = [];
    const pushParam = (key, label, min, max, step) => {
      const value = clamp(Number(effective[key] || 0), min, max);
      params.push({
        key,
        label,
        min,
        max,
        step,
        value,
        displayValue: formatParamValue(value),
        fillPct: clamp(((value - min) / Math.max(1e-6, max - min)) * 100, 0, 100),
        enabled: enabled && !readOnly,
      });
    };
    const notes = [];
    if (selectedItems.length > 1) {
      notes.push(`Selected objects: ${selectedItems.length}`);
      notes.push("Multi-selection supports z-order and delete.");
    } else {
      pushParam("yaw_deg", "Yaw", -180, 180, 0.1);
      pushParam("pitch_deg", "Pitch", -90, 90, 0.1);
      pushParam("hFOV_deg", "H FOV", 1, 179, 0.1);
      pushParam("vFOV_deg", "V FOV", 1, 179, 0.1);
      if (type === "stickers" || selectedKind === "image") pushParam("rot_deg", "Rotation", -180, 180, 0.1);
      else pushParam("roll_deg", "Roll", -180, 180, 0.1);
    }

    const paintStrokeCount = Array.isArray(state?.painting?.paint?.strokes) ? state.painting.paint.strokes.length : 0;
    const maskStrokeCount = Array.isArray(state?.painting?.mask?.strokes) ? state.painting.mask.strokes.length : 0;
    const panoramaInputNames = Array.isArray(node?.inputs) ? node.inputs.map((entry) => String(entry?.name || "")) : [];
    const linkedPanoramaSource = resolvePreferredExactLinkedSource(
      node,
      panoramaInputNames.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"],
    );
    const hasPanoramaLayer = !!String(linkedPanoramaSource?.src || "").trim() || getNodeUiList("pano_input_images").length > 0;
    const hasObjectLayer = (Array.isArray(getList()) && getList().length > 0) || paintStrokeCount > 0;
    const hasMaskLayer = maskStrokeCount > 0;
    const visibilityRows = [
      { key: "mask", label: "Mask", icon: ICON.circle_dashed_tool, visible: !!editor.showMask, enabled: hasMaskLayer },
      { key: "objects", label: "Paint / Images", icon: ICON.image, visible: !!editor.showObjects, enabled: hasObjectLayer },
      { key: "panorama", label: "Panorama", icon: ICON.globe, visible: !!editor.showPanorama, enabled: hasPanoramaLayer },
    ].map((row) => ({
      ...row,
      ariaLabel: `Toggle ${row.label.toLowerCase()}`,
      tip: row.visible ? "Hide" : "Show",
    }));

    uiState.sidePanel = buildEditorSidePanelModel({
      coverage: state.coverage,
      readOnly,
      selectionPicker,
      enabled,
      selectedKind,
      selectedItems,
      params,
      notes,
      visibilityRows,
      uiSettings: uiSettingsModel,
      normalizeCoverageValue,
    });
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
    if (type !== "stickers" && type !== "cutout") return;
    if (!isImageFile(file)) return;
    const aid = uid("asset");
    const operation = queuePendingStickerOperation(node, `add:${aid}`, async () => {
      const tempUrl = URL.createObjectURL(file);
      try {
        const img = await new Promise((resolve, reject) => {
          const i = new Image();
          i.onload = () => resolve(i);
          i.onerror = () => reject(new Error("image load failed"));
          i.src = tempUrl;
        });
        imageCache.set(aid, img);
        const id = uid("st");
        state.stickers.push({
          id,
          asset_id: aid,
          yaw_deg: editor.viewYaw,
          pitch_deg: editor.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: computeStickerVFov(30, Number(img.naturalWidth || img.width || 1), Number(img.naturalHeight || img.height || 1)),
          rot_deg: 0,
          z_index: getNextStickerZIndex(),
        });
        setSelectedItem(state.stickers[state.stickers.length - 1]);
        forceCursorTool();
        pushHistory();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        const uploaded = await uploadStickerAssetFile(file, String(file.name || aid));
        const liveStickers = Array.isArray(state.stickers) ? state.stickers : [];
        const matching = liveStickers.filter((item) => String(item?.asset_id || "") === aid);
        if (!matching.length) return;
        state.assets[aid] = uploaded;
        pruneUnusedAssets();
        commitAndRefreshNode();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
      } catch (error) {
        delete state.assets[aid];
        imageCache.delete(aid);
        const liveStickers = Array.isArray(state.stickers) ? state.stickers : [];
        const removed = liveStickers.filter((item) => String(item?.asset_id || "") === aid);
        if (removed.length) {
          state.stickers = liveStickers.filter((item) => String(item?.asset_id || "") !== aid);
          if (removed.some((item) => String(item?.id || "") === String(editor.selection?.id || ""))) {
            setSelectedItem(null);
          }
          updateSidePanel();
          updateSelectionMenu();
          requestDraw();
          commitAndRefreshNode();
        }
        throw error;
      } finally {
        URL.revokeObjectURL(tempUrl);
      }
    });
    try {
      await operation;
    } catch { }
  }

  function addImageSticker() {
    if (readOnly) return;
    if (type !== "stickers" && type !== "cutout") return;
    vueModal?.openImagePicker?.("add");
  }

  async function replaceSelectedImageFromFile(file) {
    if (readOnly) return;
    if (type !== "stickers" && type !== "cutout") return;
    const selected = getSelected();
    if (!selected || !isStickerItem(selected) || isExternalSticker(selected)) return;
    if (!isImageFile(file)) return;
    const selectedId = String(selected.id || "");
    const nextAssetId = uid("asset");
    const operation = queuePendingStickerOperation(node, `replace:${selectedId}:${nextAssetId}`, async () => {
      const liveSelected = (Array.isArray(state.stickers) ? state.stickers : [])
        .find((item) => String(item?.id || "") === selectedId) || null;
      if (!liveSelected || !isStickerItem(liveSelected) || isExternalSticker(liveSelected)) return;
      const previousAssetId = String(liveSelected.asset_id || "");
      const previousAsset = previousAssetId ? cloneJson(state.assets?.[previousAssetId] || null) : null;
      const previousVfov = Number(liveSelected.vFOV_deg || 0);
      const previousCrop = liveSelected.crop && typeof liveSelected.crop === "object"
        ? { ...liveSelected.crop }
        : null;
      const tempUrl = URL.createObjectURL(file);
      try {
        const img = await new Promise((resolve, reject) => {
          const i = new Image();
          i.onload = () => resolve(i);
          i.onerror = () => reject(new Error("image load failed"));
          i.src = tempUrl;
        });
        imageCache.set(nextAssetId, img);
        liveSelected.asset_id = nextAssetId;
        liveSelected.vFOV_deg = computeStickerVFov(
          Number(liveSelected.hFOV_deg || 30),
          Number(img.naturalWidth || img.width || 1),
          Number(img.naturalHeight || img.height || 1),
        );
        liveSelected.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        markObjectVisualsDirty();
        pushHistory();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        const uploaded = await uploadStickerAssetFile(file, String(file.name || nextAssetId));
        const currentSticker = (Array.isArray(state.stickers) ? state.stickers : [])
          .find((item) => String(item?.id || "") === selectedId) || null;
        if (!currentSticker || String(currentSticker.asset_id || "") !== nextAssetId) return;
        state.assets[nextAssetId] = uploaded;
        pruneUnusedAssets();
        commitAndRefreshNode();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
      } catch (error) {
        delete state.assets[nextAssetId];
        imageCache.delete(nextAssetId);
        const currentSticker = (Array.isArray(state.stickers) ? state.stickers : [])
          .find((item) => String(item?.id || "") === selectedId) || null;
        if (currentSticker && String(currentSticker.asset_id || "") === nextAssetId) {
          if (previousAssetId && previousAsset) state.assets[previousAssetId] = previousAsset;
          currentSticker.asset_id = previousAssetId;
          currentSticker.vFOV_deg = previousVfov;
          currentSticker.crop = previousCrop ? { ...previousCrop } : null;
        }
        markObjectVisualsDirty();
        commitAndRefreshNode();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        throw error;
      } finally {
        URL.revokeObjectURL(tempUrl);
      }
    });
    try {
      await operation;
    } catch { }
  }

  function replaceSelectedImage() {
    if (readOnly) return;
    const selected = getSelected();
    if (!selected || !isStickerItem(selected) || isExternalSticker(selected)) return;
    vueModal?.openImagePicker?.("replace");
  }

  async function migrateLegacyEmbeddedAssets() {
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
      } catch {
      }
    }
    if (changed) {
      commitAndRefreshNode();
      requestDraw();
    }
  }

  function addCutoutFrame() {
    if (readOnly || type !== "cutout") return;
    const existing = getActiveCutoutShot();
    if (existing) {
      setSelectedItem(existing);
      editor.mode = "pano";
      startViewTween(
        wrapYaw(Number(existing.yaw_deg || 0)),
        clamp(Number(existing.pitch_deg || 0), -89.9, 89.9),
        editor.viewFov,
      );
      updateSidePanel();
      updateSelectionMenu();
      requestDraw({ cause: "cutout_frame" });
      return;
    }
    const bgImg = getConnectedErpImage();
    const bgReady = isDecodedImageReady(bgImg);
    const srcWidth = Math.max(1, Number(
      (bgReady ? (bgImg?.videoWidth || bgImg?.naturalWidth || bgImg?.width) : 0)
      || canvas?.width
      || 1
    ));
    const srcHeight = Math.max(1, Number(
      (bgReady ? (bgImg?.videoHeight || bgImg?.naturalHeight || bgImg?.height) : 0)
      || canvas?.height
      || 1
    ));
    const aspect = Math.max(0.1, srcWidth / srcHeight);
    // New frames should appear clearly inside the current panorama view,
    // not consume the whole visible area on spawn.
    const baseViewFov = clamp(Number(editor.viewFov || 90), 1, 179);
    const hFOV = clamp(Math.min(42, baseViewFov * 0.42), 8, 96);
    const vFOV = clamp(RAD2DEG * (2 * Math.atan(Math.tan(hFOV * DEG2RAD * 0.5) / Math.max(0.1, aspect))), 6, 72);
    const shot = normalizeCutoutShotItem({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: wrapYaw(Number(editor.viewYaw || 0)),
      pitch_deg: clamp(Number(editor.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: hFOV,
      vFOV_deg: vFOV,
      locked: false,
    });
    state.shots = [shot];
    setSelectedItem(shot);
    forceCursorTool();
    editor.mode = "pano";
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw({ cause: "cutout_frame" });
  }

  function clearCutoutFrame() {
    if (readOnly) return;
    if (type !== "cutout") return;
    state.shots = [];
    editor.selectedId = null;
    editor.selectedIds = [];
    if (editor.mode === "frame") editor.mode = "pano";
    editor.cutoutAspectOpen = false;
    state.active.selected_shot_id = null;
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    requestDraw();
  }

  function collectExternalStickersForClearAll() {
    const stickers = Array.isArray(state.stickers) ? state.stickers : [];
    const kept = [];
    for (const item of stickers) {
      if (!isExternalSticker(item)) continue;
      item.visible = false;
      kept.push(item);
    }
    return kept;
  }

  function showCanvasConfirm(title, text, confirmLabel = "Clear") {
    return new Promise((resolve) => {
      uiState.confirmDialog = {
        visible: true,
        title: String(title || ""),
        text: String(text || ""),
        confirmLabel: String(confirmLabel || "Confirm"),
        resolve,
      };
    });
  }

  async function clearAll() {
    if (readOnly) return;
    const ok = await showCanvasConfirm(
      "Clear All Paint Data",
      type === "stickers"
        ? "This will remove all paint, mask, and sticker images in the current node."
        : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All",
    );
    if (!ok) return;
    state.painting = normalizePaintingState(null);
    markPaintStrokeVisualsDirty();
    const keptExternalStickers = collectExternalStickersForClearAll();
    if (type === "stickers") {
      state.stickers = keptExternalStickers;
      state.assets = {};
      editor.selectedId = keptExternalStickers[0]?.id || null;
      editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
      state.active.selected_sticker_id = keptExternalStickers[0]?.id || null;
      pruneUnusedAssets();
    } else {
      state.stickers = keptExternalStickers;
      state.assets = {};
      state.shots = [];
      editor.selectedId = null;
      editor.selectedIds = [];
      state.active.selected_sticker_id = null;
      state.active.selected_shot_id = null;
      if (editor.mode === "frame") editor.mode = "pano";
      editor.cutoutAspectOpen = false;
      pruneUnusedAssets();
    }
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw();
  }

  async function clearPaintingLayer(layerKind) {
    if (readOnly) return;
    const kind = layerKind === "mask" ? "mask" : "paint";
    const label = kind === "mask" ? "Mask" : "Paint";
    const strokes = getPaintingLayerList(kind);
    if (!strokes.length && !(editor.interaction?.kind === "draw" && editor.interaction?.layerKind === kind)) return;
    const ok = await showCanvasConfirm(
      `Clear ${label}`,
      `This will remove all ${kind} strokes in the current node.`,
      `Clear ${label}`,
    );
    if (!ok) return;
    if (editor.interaction?.kind === "draw" && editor.interaction?.layerKind === kind) {
      const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
      if (targetDescriptor) editor.paintEngine.cancelActiveStroke(targetDescriptor);
      editor.interaction = null;
    }
    strokes.length = 0;
    state.painting.raster_objects = getRasterObjectList().filter((item) => String(item?.layerKind || "paint") !== kind);
    if (kind === "paint") {
      getPaintingGroupList().length = 0;
    }
    markPaintStrokeVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    syncPaintUi();
    requestDraw();
  }

  function duplicateSelected() {
    if (readOnly) return;
    const selected = getSelected();
    if (!selected) return;
    if (!isStickerItem(selected) || isExternalSticker(selected)) return;
    const copy = JSON.parse(JSON.stringify(selected));
    copy.id = uid("st");
    copy.yaw_deg = wrapYaw((copy.yaw_deg || 0) + 8);
    copy.z_index = getNextStickerZIndex();
    state.stickers.push(copy);
    state.active.selected_sticker_id = copy.id;
    editor.selectedId = copy.id;
    editor.selectedIds = [copy.id];
    markObjectVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSelectionMenu();
    updateSidePanel();
    requestDraw();
  }

  function deleteSelected() {
    if (readOnly) return;
    const selectedItems = getSelectedItems();
    const selected = getSelected();
    if (!selected && selectedItems.length === 0) return;
    if (selectedItems.length > 1) {
      const paintStrokeIds = new Set(selectedItems
        .filter((item) => isStrokeGroupItem(item))
        .map((item) => String(item.actionGroupId || item.id || "")));
      const rasterIds = new Set(selectedItems
        .filter((item) => isRasterObjectItem(item))
        .map((item) => parseRasterObjectSelectionId(item.rasterObjectId || item.id || "")));
      const stickerIds = new Set(selectedItems.filter(isStickerItem).map((item) => String(item.id || "")));
      if (paintStrokeIds.size > 0) {
        state.painting.paint.strokes = (Array.isArray(state.painting?.paint?.strokes) ? state.painting.paint.strokes : [])
          .filter((stroke) => !paintStrokeIds.has(String(stroke?.actionGroupId || "")));
        state.painting.groups = getPaintingGroupList()
          .filter((group) => !paintStrokeIds.has(String(group?.actionGroupId || group?.id || "")));
        markPaintStrokeVisualsDirty();
      }
      if (rasterIds.size > 0) {
        state.painting.raster_objects = getRasterObjectList()
          .filter((item) => !rasterIds.has(String(item?.id || "")));
        markPaintCompositeVisualsDirty();
      }
      if (stickerIds.size > 0) {
        state.stickers = (Array.isArray(state.stickers) ? state.stickers : [])
          .filter((item) => {
            if (!stickerIds.has(String(item?.id || ""))) return true;
            if (!isExternalSticker(item)) return false;
            if (!isStickerHidden(item)) item.visible = false;
            return true;
          });
        pruneUnusedAssets();
        markObjectVisualsDirty();
      }
      editor.selectedId = null;
      editor.selectedIds = [];
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (isStrokeGroupItem(selected)) {
      const gid = String(selected.actionGroupId || selected.id || "").trim();
      state.painting.paint.strokes = (Array.isArray(state.painting?.paint?.strokes) ? state.painting.paint.strokes : [])
        .filter((stroke) => String(stroke?.actionGroupId || "").trim() !== gid);
      state.painting.groups = getPaintingGroupList()
        .filter((group) => String(group?.actionGroupId || group?.id || "").trim() !== gid);
      markPaintStrokeVisualsDirty();
      editor.selectedId = null;
      editor.selectedIds = [];
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (isRasterObjectItem(selected)) {
      const rid = parseRasterObjectSelectionId(selected.rasterObjectId || selected.id || "");
      state.painting.raster_objects = getRasterObjectList()
        .filter((item) => String(item?.id || "").trim() !== rid);
      markPaintCompositeVisualsDirty();
      editor.selectedId = null;
      editor.selectedIds = [];
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (type === "stickers" || isStickerItem(selected)) {
      if (isExternalSticker(selected)) {
        if (isStickerHidden(selected)) return;
        selected.visible = false;
        markObjectVisualsDirty();
        pushHistory();
        commitAndRefreshNode();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      state.stickers = state.stickers.filter((s) => s.id !== selected.id);
      pruneUnusedAssets();
      markObjectVisualsDirty();
      editor.selectedId = state.stickers[0]?.id || null;
      editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
      state.active.selected_sticker_id = state.stickers[0]?.id || null;
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    clearCutoutFrame();
  }

  // Resize the crop to the largest box of `ratio` the viewport allows, without
  // moving the ERP behind it.
  //
  // The presentation scale is `gate size / FOV`, so those three cannot all be
  // chosen freely. Holding the FOV makes the scale follow the aspect, which is
  // the background zooming on every aspect switch. Holding the scale and
  // re-deriving the FOV keeps the background nailed down and still gives each
  // aspect its maximal frame: landscape fills the width, portrait fills the
  // height. The captured solid angle changes, which is the right trade for
  // Frame view — it exists to compose a crop, not to conserve an area.
  //
  // Returns false when there is no measured viewport (aspect edits made from
  // the Panorama tab), so the caller can fall back to a plain FOV derivation.
  function applyGateAspectAtCurrentScale(selected, ratio) {
    const safeRect = runtime.frameSafeRect;
    if (!selected || !safeRect || editor.mode !== "frame") return false;
    const focal = FRAME_GATE_OCCUPANCY * fitFocalPx(safeRect, selected);
    const next = fovPairForGate(aspectFitGateSize(safeRect, ratio), focal);
    selected.hFOV_deg = next.hFOV_deg;
    selected.vFOV_deg = next.vFOV_deg;
    return true;
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
      const stored = String(selected.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(stored)) {
        const [sw, sh] = stored.split(":").map((value) => Number(value));
        if (Number.isFinite(sw) && Number.isFinite(sh)) return sw >= sh;
      }
      const hf = Number(selected.hFOV_deg || 64);
      const vf = Number(selected.vFOV_deg || 40);
      if (Math.abs(hf - vf) > 1e-6) return hf >= vf;
      return deriveCutoutAspectFromFov(selected) >= 1;
    })();
    let [aw, ah] = pairs[String(aspect)] || pairs["1:1"];
    if ((aw >= ah) !== currentLandscape) [aw, ah] = [ah, aw];
    const ratio = aw / ah;
    if (!applyGateAspectAtCurrentScale(selected, ratio)) {
      const vf = clamp(Number(selected.vFOV_deg || 40), 1, 179);
      selected.vFOV_deg = vf;
      selected.hFOV_deg = deriveHorizontalFovDeg(vf, ratio);
    }
    selected.aspect_id = `${aw}:${ah}`;
  }

  function applyCutoutAspectCustom(selected, w, h) {
    if (!selected) return false;
    const rw = Math.max(1, Number(w));
    const rh = Math.max(1, Number(h));
    if (!Number.isFinite(rw) || !Number.isFinite(rh)) return false;
    const currentLandscape = (() => {
      const stored = String(selected.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(stored)) {
        const [sw, sh] = stored.split(":").map((value) => Number(value));
        if (Number.isFinite(sw) && Number.isFinite(sh)) return sw >= sh;
      }
      const hf = Number(selected.hFOV_deg || 64);
      const vf = Number(selected.vFOV_deg || 40);
      if (Math.abs(hf - vf) > 1e-6) return hf >= vf;
      return deriveCutoutAspectFromFov(selected) >= 1;
    })();
    let aw = rw;
    let ah = rh;
    if ((aw >= ah) !== currentLandscape) [aw, ah] = [ah, aw];
    const ratio = aw / ah;
    if (!applyGateAspectAtCurrentScale(selected, ratio)) {
      const vf = clamp(Number(selected.vFOV_deg || 40), 1, 179);
      selected.vFOV_deg = vf;
      selected.hFOV_deg = deriveHorizontalFovDeg(vf, ratio);
    }
    selected.aspect_id = `${Math.round(aw)}:${Math.round(ah)}`;
    return true;
  }

  // Portrait/landscape toggle inverts the aspect while holding vFOV, exactly
  // like the aspect presets do.
  //
  // Swapping hFOV and vFOV instead would preserve the captured solid angle, but
  // a transposed landscape frame is taller than the viewport, so the whole view
  // has to zoom out to show it. Frame view is about the crop you are composing,
  // not about conserving the captured area, so hold the vertical extent and
  // narrow the horizontal one. The gate keeps filling the height, and the ERP
  // behind it does not move.
  function rotateCutoutAspect90(selected) {
    if (!selected) return;
    const storedAspect = String(selected.aspect_id || "").trim();
    const camera = getCutoutCameraParams(selected);
    const aspect = camera.tanHalfX / Math.max(1e-12, camera.tanHalfY);
    const inverted = 1 / Math.max(1e-12, aspect);
    if (!applyGateAspectAtCurrentScale(selected, inverted)) {
      const vf = clamp(Number(selected.vFOV_deg || 60), 1, 179);
      selected.vFOV_deg = vf;
      selected.hFOV_deg = deriveHorizontalFovDeg(vf, inverted);
    }
    if (/^\d+:\d+$/.test(storedAspect)) {
      const [w, h] = storedAspect.split(":");
      selected.aspect_id = `${h}:${w}`;
    } else {
      selected.aspect_id = deriveCutoutAspectLabelFromFov(selected);
    }
  }

  function normalizeDisplayZIndices() {
    const ordered = getDisplayListObjects();
    ordered.forEach((entry, index) => {
      if (entry.type === "sticker" && entry.item) entry.item.z_index = index;
      if (entry.type === "strokeGroup" && entry.item) entry.item.z_index = index;
      if (entry.type === "rasterObject" && entry.item) entry.item.z_index = index;
    });
  }

  function bringSelectedToFront() {
    if (readOnly) return;
    const selectedItems = getSelectedItems();
    const selected = getSelected();
    if (!selected || selectedItems.length === 0) return;
    normalizeDisplayZIndices();
    const ordered = getDisplayListObjects();
    const selectedKeys = new Set(selectedItems.map((item) => {
      if (isStickerItem(item)) return `sticker:${String(item.id || "")}`;
      if (isRasterObjectItem(item)) return `rasterObject:${parseRasterObjectSelectionId(item.rasterObjectId || item.id || "")}`;
      return `strokeGroup:${String(item.actionGroupId || item.id || "")}`;
    }));
    const moving = [];
    const staying = [];
    ordered.forEach((entry) => {
      const key = entry.type === "sticker"
        ? `sticker:${String(entry.item?.id || "")}`
        : (entry.type === "rasterObject"
          ? `rasterObject:${String(entry.item?.id || entry.id || "")}`
          : `strokeGroup:${String(entry.actionGroupId || "")}`);
      if (selectedKeys.has(key)) moving.push(entry);
      else staying.push(entry);
    });
    if (!moving.length || moving[moving.length - 1] === ordered[ordered.length - 1]) return;
    const nextOrdered = [...staying, ...moving];
    nextOrdered.forEach((item, index) => {
      if (item.type === "sticker" && item.item) item.item.z_index = index;
      if (item.type === "strokeGroup" && item.item) item.item.z_index = index;
      if (item.type === "rasterObject" && item.item) item.item.z_index = index;
    });
    markObjectVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSelectionMenu();
    requestDraw();
  }

  function sendSelectedToBack() {
    if (readOnly) return;
    const selectedItems = getSelectedItems();
    const selected = getSelected();
    if (!selected || selectedItems.length === 0) return;
    normalizeDisplayZIndices();
    const ordered = getDisplayListObjects();
    const selectedKeys = new Set(selectedItems.map((item) => {
      if (isStickerItem(item)) return `sticker:${String(item.id || "")}`;
      if (isRasterObjectItem(item)) return `rasterObject:${parseRasterObjectSelectionId(item.rasterObjectId || item.id || "")}`;
      return `strokeGroup:${String(item.actionGroupId || item.id || "")}`;
    }));
    const moving = [];
    const staying = [];
    ordered.forEach((entry) => {
      const key = entry.type === "sticker"
        ? `sticker:${String(entry.item?.id || "")}`
        : (entry.type === "rasterObject"
          ? `rasterObject:${String(entry.item?.id || entry.id || "")}`
          : `strokeGroup:${String(entry.actionGroupId || "")}`);
      if (selectedKeys.has(key)) moving.push(entry);
      else staying.push(entry);
    });
    if (!moving.length || moving[0] === ordered[0]) return;
    const nextOrdered = [...moving, ...staying];
    nextOrdered.forEach((item, index) => {
      if (item.type === "sticker" && item.item) item.item.z_index = index;
      if (item.type === "strokeGroup" && item.item) item.item.z_index = index;
      if (item.type === "rasterObject" && item.item) item.item.z_index = index;
    });
    markObjectVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSelectionMenu();
    requestDraw();
  }

  function apply() {
    if (readOnly) return;
    state.projection_model = "pinhole_rectilinear";
    state.alpha_mode = "straight";
    if (presetWidget) state.output_preset = resolveEditorOutputPresetWidth(Number(state.output_preset || 2048));
    if (coverageWidget) state.coverage = normalizeCoverageValue(coverageWidget.value);
    if (bgWidget) state.bg_color = String(bgWidget.value || state.bg_color || "#00ff00");
    commitState();
    node.setDirtyCanvas(true, true);
  }

  function commitState() {
    if (readOnly) return;
    state.coverage = normalizeCoverageValue(state.coverage);
    const text = JSON.stringify(state);
    if (stateWidget) {
      stateWidget.value = text;
      stateWidget.callback?.(text);
    }
  }
  const flushStateBeforeQueue = () => commitState();
  if (!readOnly) node.__panoFlushStateBeforeQueue = flushStateBeforeQueue;
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

  function triggerBackgroundPersistenceOnClose() {
    if (readOnly) return;
    if (needsPaintingLayerSync()) {
      void syncPaintingLayerAsync().catch((error) => {
        console.error("[PanoramaPaintingLayerSync] background close sync failed", error);
      });
    }
  }

  function syncCoverageChangeToNodePreviews(options = {}) {
    const syncPreview = options.syncPreview !== false;
    const syncGraph = options.syncGraph !== false;
    if (syncPreview) {
      node.__panoPreviewNodeRuntime?.requestDraw?.();
      node.__panoDomPreview?.requestDraw?.();
      node.setDirtyCanvas?.(true, false);
    }
    if (syncGraph) {
      node.graph?.setDirtyCanvas?.(true, true);
      app?.canvas?.setDirty?.(true, true);
    }
  }

  function forceCursorTool() {
    if (editor.primaryTool === "cursor") return;
    editor.primaryTool = "cursor";
    syncPaintUi();
    updateSidePanel();
  }

  function screenPos(evt) {
    const r = canvas.getBoundingClientRect();
    return {
      x: ((evt.clientX - r.left) / r.width) * canvas.width,
      y: ((evt.clientY - r.top) / r.height) * canvas.height,
    };
  }

  function screenPosCss(evt) {
    const r = canvas.getBoundingClientRect();
    return {
      x: Number(evt.clientX) - Number(r.left || 0),
      y: Number(evt.clientY) - Number(r.top || 0),
    };
  }

  function supportsErpPainting() {
    return editor.mode === "pano" || editor.mode === "unwrap";
  }

  function getActiveCutoutShot() {
    if (type !== "cutout") return null;
    const shots = Array.isArray(state.shots) ? state.shots : [];
    if (!shots.length) return null;
    const selectedId = String(state.active.selected_shot_id || "");
    return shots.find((item) => String(item?.id || "") === selectedId) || shots[0] || null;
  }

  function measureFrameSafeRect() {
    if (!canvas) return null;
    const canvasBounds = canvas.getBoundingClientRect?.();
    const scaleX = Number(canvasBounds?.width || 0) > 0 ? canvas.width / canvasBounds.width : 1;
    const scaleY = Number(canvasBounds?.height || 0) > 0 ? canvas.height / canvasBounds.height : 1;
    runtime.frameCanvasScale = Math.min(scaleX, scaleY);
    let left = 24;
    let top = 24;
    const right = Math.max(left + 1, canvas.width - 24);
    let bottom = Math.max(top + 1, canvas.height - 24);
    const railBounds = toolRailEl?.getBoundingClientRect?.();
    const frameRailBounds = frameRailEl?.getBoundingClientRect?.();
    let reservedSide = 24;
    if (railBounds && canvasBounds && railBounds.width > 0 && railBounds.height > 0) {
      reservedSide = Math.max(reservedSide, (railBounds.right - canvasBounds.left) * scaleX + FRAME_GATE_SIDE_GAP_PX);
    }
    if (frameRailBounds && canvasBounds && frameRailBounds.width > 0 && frameRailBounds.height > 0
      && uiState.frameRail?.visible === true) {
      reservedSide = Math.max(reservedSide, (canvasBounds.right - frameRailBounds.left) * scaleX + FRAME_GATE_SIDE_GAP_PX);
    }
    left = Math.max(left, reservedSide);
    const symmetricRight = Math.min(right, canvas.width - reservedSide);
    let reservedVertical = 24;
    const topBounds = floatingTopEl?.getBoundingClientRect?.();
    if (topBounds && canvasBounds && topBounds.width > 0 && topBounds.height > 0) {
      reservedVertical = Math.max(reservedVertical, (topBounds.bottom - canvasBounds.top) * scaleY + FRAME_GATE_EDGE_GAP_PX);
    }
    // Only measure chrome whose size is independent of the active shot. The
    // gate scale is derived from this rect, so anything shot-dependent here
    // closes a feedback loop (shot -> layout -> safe rect -> scale -> the ERP
    // visibly zooming whenever the aspect changes). `.pano-floating-right`
    // hosts the cutout camera preview, whose box follows the shot aspect, so it
    // is reserved by its fixed collapsed height instead of its measured one.
    [paintDockEl, videoTransportEl].forEach((element) => {
      if (!element || !canvasBounds) return;
      const style = getComputedStyle(element);
      if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) <= 0) return;
      const bounds = element.getBoundingClientRect?.();
      if (!bounds || bounds.width <= 0 || bounds.height <= 0) return;
      reservedVertical = Math.max(reservedVertical, (canvasBounds.bottom - bounds.top) * scaleY + FRAME_GATE_EDGE_GAP_PX);
    });
    if (floatingRightEl && canvasBounds) {
      const style = getComputedStyle(floatingRightEl);
      const visible = style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) > 0;
      if (visible) {
        reservedVertical = Math.max(reservedVertical, (FLOATING_RIGHT_RESERVED_PX + FRAME_GATE_EDGE_GAP_PX) * scaleY);
      }
    }
    top = Math.max(top, reservedVertical);
    bottom = Math.max(top + 1, Math.min(bottom, canvas.height - reservedVertical));
    return {
      x: left,
      y: top,
      w: Math.max(1, symmetricRight - left),
      h: Math.max(1, bottom - top),
    };
  }

  // The presentation scale is a pure function of the UI-safe rect and the shot:
  // the gate is always the largest rectangle of the shot's aspect that fits.
  // There is no stored scale, so nothing can drift, ratchet, or go stale.
  //
  // Two useful properties fall out of this and need no special-case code:
  //   - Aspect changes hold vFOV, and every supported aspect is height-bound in
  //     a landscape viewport, so the fit is unchanged and the ERP does not move.
  //   - Wheel scales both tangents by k, which scales the fit by 1/k, so the
  //     gate keeps its screen size while the ERP behind it zooms.
  function getFrameViewLayout(shot = getActiveCutoutShot()) {
    if (!shot || !canvas) return null;
    const safeRect = runtime.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, canvas.width - 48),
      h: Math.max(1, canvas.height - 48),
    };
    return gateRectFromFocal(safeRect, shot, FRAME_GATE_OCCUPANCY * fitFocalPx(safeRect, shot));
  }

  function getFrameViewRect(shot = getActiveCutoutShot()) {
    const layout = getFrameViewLayout(shot);
    return layout ? { x: layout.x, y: layout.y, w: layout.w, h: layout.h } : null;
  }

  function supportsFramePainting() {
    return type === "cutout" && !!getActiveCutoutShot();
  }

  function screenPosToErpPoint(pos, ts = performance.now()) {
    if (editor.mode === "unwrap") {
      const r = getUnwrapRect();
      const u = (pos.x - r.x) / Math.max(1, r.w);
      const v = (pos.y - r.y) / Math.max(1, r.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: ((u % 1) + 1) % 1,
        v: clamp(v, 0, 1),
        t: Number(ts || 0),
      };
    }
    const d = screenToWorldDir(pos.x, pos.y);
    const { lon, lat } = dirToLonLat(d);
    return {
      targetKind: "ERP_GLOBAL",
      u: ((lon / (2 * Math.PI)) + 0.5 + 1) % 1,
      v: clamp(0.5 - (lat / Math.PI), 0, 1),
      t: Number(ts || 0),
    };
  }

  // Convert a frame-view screen position to ERP UV coordinates via world direction.
  // This ensures strokes drawn in frame view are world-fixed (painting on the panorama,
  // not on the camera lens). Moving the frame after painting does not affect stroke position.
  function screenPosToFrameAsErpPoint(pos, shot, ts = performance.now()) {
    const rect = getFrameViewRect(shot);
    if (!rect) return null;
    const framePoint = {
      x: (Number(pos.x) - rect.x) / Math.max(1, rect.w),
      y: (Number(pos.y) - rect.y) / Math.max(1, rect.h),
    };
    // Out-of-frame: caller must handle null (do not project outside the frame's FOV)
    if (framePoint.x < 0 || framePoint.x > 1 || framePoint.y < 0 || framePoint.y > 1) return null;
    const dir = frameLocalPointToWorldDir(shot, framePoint);
    if (!dir) return null;
    const { lon, lat } = dirToLonLat(dir);
    return {
      targetKind: "ERP_GLOBAL",
      u: ((lon / (2 * Math.PI)) + 0.5 + 1) % 1,
      v: clamp(0.5 - (lat / Math.PI), 0, 1),
      t: Number(ts || 0),
    };
  }

  function zoomFrameViewAt(anchor, factor) {
    const shot = getActiveCutoutShot();
    if (!shot) return false;
    const zoomingOut = Number(factor || 1) < 1;
    const next = scaleCutoutFovPair(shot, 1 / Number(factor || 1));
    if (!next) return false;
    // The gate keeps its screen size on its own: scaling both tangents by k
    // scales the aspect fit by 1/k, so no presentation compensation is needed.
    // The ERP behind the gate zooms instead, which is the intent.
    //
    // The one hard stop is the projection itself: a rectilinear context can no
    // longer cover the canvas once it nears 90 degrees off-axis, and pushing
    // past that would reopen dark margins. Refuse the step there.
    if (zoomingOut) {
      const projectedFocal = FRAME_GATE_OCCUPANCY * fitFocalPx(
        runtime.frameSafeRect || { w: canvas.width, h: canvas.height },
        next,
      );
      const reach = contextHalfExtentsPx({ width: canvas.width, height: canvas.height }, projectedFocal);
      if (reach.halfW < canvas.width * 0.5 - 1e-6 || reach.halfH < canvas.height * 0.5 - 1e-6) return false;
    }
    shot.hFOV_deg = next.hFOV_deg;
    shot.vFOV_deg = next.vFOV_deg;
    void anchor;
    editor.frameWheelChanged = true;
    if (editor.frameWheelCommitTimer) window.clearTimeout(editor.frameWheelCommitTimer);
    editor.frameWheelCommitTimer = window.setTimeout(() => {
      editor.frameWheelCommitTimer = 0;
      if (!editor.frameWheelChanged) return;
      editor.frameWheelChanged = false;
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
    }, 180);
    updateSidePanel();
    return true;
  }

  function flushFrameWheelCommit() {
    if (editor.frameWheelCommitTimer) {
      window.clearTimeout(editor.frameWheelCommitTimer);
      editor.frameWheelCommitTimer = 0;
    }
    if (!editor.frameWheelChanged) return false;
    editor.frameWheelChanged = false;
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    return true;
  }

  function cancelFrameCameraGesture() {
    const interaction = editor.interaction;
    if (!interaction?.shot || !interaction.start
      || (interaction.kind !== "pan_frame" && interaction.kind !== "roll_frame")) return false;
    const cancelledRoll = interaction.kind === "roll_frame";
    if (interaction.kind === "pan_frame") {
      interaction.shot.yaw_deg = interaction.start.yaw_deg;
      interaction.shot.pitch_deg = interaction.start.pitch_deg;
    } else {
      interaction.shot.roll_deg = interaction.start.roll_deg;
    }
    if (cancelledRoll) hideTooltip();
    editor.interaction = null;
    invalidateLivePaintPreviewCaches();
    syncViewToggleState();
    updateSidePanel();
    updateCursor(editor.pointerPos);
    requestDraw({ localOnly: true });
    return true;
  }

  function captureStrokeRadiusSpec(targetSpace, sizePx) {
    const r = Number(sizePx || 0) * 0.5;
    // ERP: normalize against 2048 (full equirectangular canvas reference width).
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, r / 2048),
    };
  }

  function getBrushPresetIdForTool(toolKind) {
    const kind = String(toolKind || "").trim();
    if (kind === "eraser") return DEFAULT_BRUSH_PRESET_ID;
    if (BRUSH_PRESETS[kind]) return kind;
    return editor.activeBrushPresetId || DEFAULT_BRUSH_PRESET_ID;
  }

  function isPaintCursorEnabled() {
    return (editor.primaryTool === "paint" || editor.primaryTool === "mask") && (supportsErpPainting() || supportsFramePainting());
  }

  function isActivePaintCursorVisible() {
    return isPaintCursorEnabled() && editor.pointerPos?.inside === true;
  }

  function setPointerPos(p, inside = true) {
    const nextX = Number(p?.x || 0);
    const nextY = Number(p?.y || 0);
    const nextInside = inside !== false;
    const prev = editor.pointerPos || { x: 0, y: 0, inside: false };
    const changed = prev.inside !== nextInside || Math.abs(prev.x - nextX) > 0.01 || Math.abs(prev.y - nextY) > 0.01;
    editor.pointerPos = { x: nextX, y: nextY, inside: nextInside };
    return changed;
  }

  function getActivePaintCursorDescriptor() {
    if (!isActivePaintCursorVisible()) return null;
    const layerKind = editor.primaryTool === "mask" ? "mask" : "paint";
    const toolKind = layerKind === "mask" ? editor.maskTool : editor.paintTool;
    const presetId = getBrushPresetIdForTool(toolKind);
    const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
    const rawSize = Number(editor.brushSizes[presetId] ?? 10);
    const size = Math.max(1, rawSize) * Math.max(0.1, Number(preset.sizeScale ?? 1));
    const radius = Math.max(3, size * 0.5);
    const baseColor = layerKind === "mask"
      ? (toolKind === "lasso_fill"
        ? { r: 0, g: 0, b: 0, a: 1 }
        : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 })
      : (toolKind === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : cloneColor(editor.paintColor));
    const fillAlpha = layerKind === "mask"
      ? (toolKind === "lasso_fill" ? 0.18 : 0.2)
      : (toolKind === "eraser" ? 0.06 : clamp(Math.max(0.16, Number(baseColor.a ?? 1) * 0.3), 0.16, 0.52));
    const strokeAlpha = layerKind === "mask"
      ? 0.95
      : (toolKind === "eraser" ? 0.75 : clamp(Math.max(0.46, Number(baseColor.a ?? 1) * 0.92), 0.46, 1));
    return {
      layerKind,
      toolKind,
      preset,
      radius,
      fillStyle: colorToCss(baseColor, fillAlpha),
      strokeStyle: colorToCss(baseColor, strokeAlpha),
      x: Number(editor.pointerPos?.x || 0),
      y: Number(editor.pointerPos?.y || 0),
      hotspotX: radius,
      hotspotY: radius,
    };
  }

  function syncPaintCursorElement() {
    const cursor = getActivePaintCursorDescriptor();
    if (!paintCursorEl) return;
    if (!cursor) {
      paintCursorEl.style.display = "none";
      return;
    }

    let width = cursor.radius * 2;
    let height = cursor.radius * 2;
    let borderRadius = "999px";
    let rotateDeg = 0;
    let background = cursor.fillStyle;
    let border = `1px solid rgba(222, 222, 222, 0.72)`;
    let boxShadow = `0 0 0 1px rgba(52, 52, 52, 0.72)`;
    const borderColorInner = "rgba(222, 222, 222, 0.72)";
    const borderColorOuter = "rgba(52, 52, 52, 0.72)";
    let hotspotX = Number(cursor.hotspotX ?? width * 0.5);
    let hotspotY = Number(cursor.hotspotY ?? height * 0.5);

    if (cursor.toolKind === "lasso_fill") {
      width = LASSO_CURSOR_SIZE;
      height = LASSO_CURSOR_SIZE;
      borderRadius = "0";
      border = "0";
      boxShadow = "none";
      hotspotX = LASSO_CURSOR_HOTSPOT_X;
      hotspotY = LASSO_CURSOR_HOTSPOT_Y;
      background = getLassoCursorBackground(cursor.fillStyle, borderColorOuter, borderColorInner);
    } else if (cursor.layerKind === "mask") {
      background = `repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)`;
    } else if (cursor.toolKind === "marker") {
      const aspect = Math.max(1, Number(cursor.preset?.aspect ?? 1));
      width = Math.max(10, cursor.radius * 2 * aspect);
      height = Math.max(6, cursor.radius * 2);
      borderRadius = `${Math.min(6, height * 0.42)}px`;
      rotateDeg = Number(cursor.preset?.angle?.value || 0) * RAD2DEG;
    } else if (cursor.toolKind === "brush") {
      background = `radial-gradient(circle at 50% 50%, ${cursor.strokeStyle} 0%, ${cursor.fillStyle} 45%, rgba(0,0,0,0) 100%)`;
    } else if (cursor.toolKind === "eraser") {
      background = "rgba(255,255,255,0.14)";
    }

    paintCursorEl.style.display = "block";
    paintCursorEl.style.width = `${Math.round(width)}px`;
    paintCursorEl.style.height = `${Math.round(height)}px`;
    paintCursorEl.style.borderRadius = borderRadius;
    paintCursorEl.style.border = border;
    paintCursorEl.style.boxShadow = boxShadow;
    paintCursorEl.style.background = background;
    paintCursorEl.style.backgroundRepeat = "no-repeat";
    paintCursorEl.style.backgroundPosition = "center";
    paintCursorEl.style.backgroundSize = "contain";
    paintCursorEl.style.transform = `translate(${Math.round(cursor.x - hotspotX)}px, ${Math.round(cursor.y - hotspotY)}px) rotate(${rotateDeg}deg)`;
  }

  function showPaintSizePreview() {
    if (!paintSizePreviewEl || !paintSizePreviewSampleEl) return;
    const layerKind = editor.primaryTool === "mask" ? "mask" : "paint";
    const toolKind = layerKind === "mask" ? editor.maskTool : editor.paintTool;
    if (toolKind === "lasso_fill") return;
    const presetId = getBrushPresetIdForTool(toolKind);
    const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
    const rawSize = Number(editor.brushSizes[presetId] ?? 10);
    const size = Math.max(1, rawSize) * Math.max(0.1, Number(preset.sizeScale ?? 1));
    const radius = Math.max(6, size * 0.5);
    const isEraser = toolKind === "eraser";
    const baseColor = layerKind === "mask"
      ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 }
      : (isEraser ? { r: 1, g: 1, b: 1, a: 0.22 } : cloneColor(editor.paintColor));
    const fill = layerKind === "mask"
      ? colorToCss(baseColor, 0.22)
      : (isEraser ? "rgba(255,255,255,0.14)" : colorToCss(baseColor, clamp(Math.max(0.18, Number(baseColor.a ?? 1) * 0.34), 0.18, 0.56)));
    const stroke = layerKind === "mask"
      ? colorToCss(baseColor, 0.96)
      : (isEraser ? "rgba(255,255,255,0.72)" : colorToCss(baseColor, clamp(Math.max(0.56, Number(baseColor.a ?? 1) * 0.96), 0.56, 1)));

    let width = radius * 2;
    let height = radius * 2;
    let borderRadius = "999px";
    let rotateDeg = 0;
    let background = fill;
    const borderColorInner = "rgba(222, 222, 222, 0.72)";
    const borderColorOuter = "rgba(52, 52, 52, 0.72)";

    if (layerKind === "mask") {
      background = `repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)`;
    } else if (toolKind === "marker") {
      const aspect = Math.max(1, Number(preset?.aspect ?? 1));
      width = Math.max(16, radius * 2 * aspect);
      height = Math.max(10, radius * 2);
      borderRadius = `${Math.min(8, height * 0.42)}px`;
      rotateDeg = Number(preset?.angle?.value || 0) * RAD2DEG;
    } else if (toolKind === "brush") {
      background = `radial-gradient(circle at 50% 50%, ${stroke} 0%, ${fill} 48%, rgba(0,0,0,0) 100%)`;
    } else if (toolKind === "lasso_fill") {
      width = Math.max(18, radius * 1.8);
      height = width;
      background = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${stroke} 43%, ${stroke} 58%, rgba(0,0,0,0) 59%)`;
    } else if (isEraser) {
      background = "rgba(255,255,255,0.12)";
    }

    paintSizePreviewSampleEl.style.width = `${Math.round(width)}px`;
    paintSizePreviewSampleEl.style.height = `${Math.round(height)}px`;
    paintSizePreviewSampleEl.style.borderRadius = borderRadius;
    paintSizePreviewSampleEl.style.background = background;
    paintSizePreviewSampleEl.style.border = `1px solid ${borderColorInner}`;
    paintSizePreviewSampleEl.style.boxShadow = `0 0 0 1px ${borderColorOuter}`;
    paintSizePreviewSampleEl.style.transform = `rotate(${rotateDeg}deg)`;

    if (paintSizePreviewTimer) {
      clearTimeout(paintSizePreviewTimer);
      paintSizePreviewTimer = 0;
    }
    paintSizePreviewEl.classList.remove("fade-out");
    paintSizePreviewEl.classList.add("show");
  }

  function hidePaintSizePreview() {
    if (!paintSizePreviewEl || !paintSizePreviewEl.classList.contains("show")) return;
    paintSizePreviewEl.classList.add("fade-out");
    if (paintSizePreviewTimer) clearTimeout(paintSizePreviewTimer);
    paintSizePreviewTimer = window.setTimeout(() => {
      paintSizePreviewEl.classList.remove("show", "fade-out");
      paintSizePreviewTimer = 0;
    }, 180);
  }

  function buildFreehandStrokeRecord(layerKind, toolKind, points, targetSpace) {
    const presetId = getBrushPresetIdForTool(toolKind);
    const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
    const rawSize = editor.brushSizes[presetId] ?? 10;
    const size = Math.max(1, rawSize) * Math.max(0.1, preset.sizeScale ?? 1);
    const radiusSpec = captureStrokeRadiusSpec(targetSpace, size);
    const preparedPoints = points.map((pt) => ({
      ...pt,
      t: Number(pt?.t || 0),
      widthScale: Number.isFinite(Number(pt?.widthScale)) ? Math.max(0, Number(pt.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(pt?.pressureLike)) ? Math.max(0, Number(pt.pressureLike)) : 1,
    }));
    const stroke = {
      id: makePaintId(layerKind),
      actionGroupId: makePaintId("ag"),
      targetSpace: targetSpace && typeof targetSpace === "object"
        ? { ...targetSpace, viewMode: String(editor.mode || "pano") }
        : { kind: "ERP_GLOBAL", viewMode: String(editor.mode || "pano") },
      layerKind,
      toolKind,
      size,
      createdAt: Date.now(),
      color: layerKind === "paint" ? { ...editor.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: radiusSpec.radiusModel,
      radiusValue: radiusSpec.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: preparedPoints.map((pt) => ({ ...pt })),
        points: preparedPoints.map((pt) => ({ ...pt })),
      },
    };
    applyPresetToStroke(stroke, preset);
    logPaintDebug("stroke-created", {
      mode: editor.mode,
      layerKind,
      toolKind,
      presetId,
      presetAspect: Number(preset.aspect ?? 1),
      strokeAspect: Number(stroke.aspect ?? 1),
      stampKind: String(stroke.stampKind || ""),
      size: Number(stroke.size || 0),
      radiusModel: String(stroke.radiusModel || ""),
      radiusValue: Number(stroke.radiusValue || 0),
      targetSpace: { ...stroke.targetSpace },
    });
    return stroke;
  }

  function buildLassoFillStrokeRecord(layerKind, toolKind, points, targetSpace) {
    const preparedPoints = points.map((pt) => ({
      ...pt,
      t: Number(pt?.t || 0),
      widthScale: Number.isFinite(Number(pt?.widthScale)) ? Math.max(0, Number(pt.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(pt?.pressureLike)) ? Math.max(0, Number(pt.pressureLike)) : 1,
    }));
    const presetId = getBrushPresetIdForTool(toolKind);
    const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
    const stroke = {
      id: makePaintId(layerKind),
      actionGroupId: makePaintId("ag"),
      targetSpace: targetSpace && typeof targetSpace === "object"
        ? { ...targetSpace, viewMode: String(editor.mode || "pano") }
        : { kind: "ERP_GLOBAL", viewMode: String(editor.mode || "pano") },
      layerKind,
      toolKind,
      size: 10,
      createdAt: Date.now(),
      color: layerKind === "paint" ? { ...editor.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: preparedPoints.map((pt) => ({ ...pt })),
      },
    };
    applyPresetToStroke(stroke, preset);
    logPaintDebug("lasso-created", {
      mode: editor.mode,
      layerKind,
      toolKind,
      presetId,
      presetAspect: Number(preset.aspect ?? 1),
      strokeAspect: Number(stroke.aspect ?? 1),
      stampKind: String(stroke.stampKind || ""),
      targetSpace: { ...stroke.targetSpace },
    });
    return stroke;
  }

  function getPaintingLayerList(layerKind) {
    const root = state.painting || (state.painting = normalizePaintingState(null));
    const layer = root[layerKind] || (root[layerKind] = { strokes: [] });
    if (!Array.isArray(layer.strokes)) layer.strokes = [];
    return layer.strokes;
  }

  function appendPaintPoint(interaction, pos, ts = performance.now()) {
    let next;
    if (editor.mode === "frame") {
      // Frame view: convert screen position to ERP UV via frame's world projection.
      // This keeps strokes world-fixed regardless of subsequent frame camera moves.
      const shot = getActiveCutoutShot();
      if (!shot) return false;
      next = screenPosToFrameAsErpPoint(pos, shot, ts);
      if (!next) return false; // out-of-frame — caller (pointermove) handles segmentation
    } else {
      next = screenPosToErpPoint(pos, ts);
    }
    if (!next) return false;
    const rawPoints = interaction.stroke.geometry.rawPoints || interaction.stroke.geometry.points;
    const points = interaction.stroke.geometry.points;
    // Dedup against raw coords so OEF smoothing doesn't cause points to be incorrectly skipped
    const prevRaw = rawPoints[rawPoints.length - 1];
    if (prevRaw) {
      const du = Math.abs(Number(next.u ?? next.x ?? 0) - Number(prevRaw.u ?? prevRaw.x ?? 0));
      const dv = Math.abs(Number(next.v ?? next.y ?? 0) - Number(prevRaw.v ?? prevRaw.y ?? 0));
      if (du < 0.0015 && dv < 0.0015) return false;
    }
    const sample = {
      ...next,
      t: Number(next?.t || 0),
      widthScale: 1,
      pressureLike: 1,
    };
    rawPoints.push({ ...sample });
    points.push({ ...sample });
    // Incremental rendering: send raw point to engine (O(1), no full re-render)
    const targetDescriptor = getActivePaintTargetDescriptor(interaction);
    if (targetDescriptor) {
      const engineTarget = editor.paintEngine.ensureTarget(targetDescriptor);
      editor.paintEngine.appendStrokePoint(engineTarget, Number(sample.u ?? 0), Number(sample.v ?? 0), interaction.stroke);
    }
    return true;
  }

  function appendLassoPoint(interaction, pos, ts = performance.now()) {
    let next;
    if (editor.mode === "frame") {
      const shot = getActiveCutoutShot();
      if (!shot) return false;
      next = screenPosToFrameAsErpPoint(pos, shot, ts);
    } else {
      next = screenPosToErpPoint(pos, ts);
    }
    const points = interaction?.stroke?.geometry?.points;
    if (!next || !Array.isArray(points)) return false;
    const prev = points[points.length - 1];
    if (prev) {
      const du = Math.abs(Number(next.u ?? next.x ?? 0) - Number(prev.u ?? prev.x ?? 0));
      const dv = Math.abs(Number(next.v ?? next.y ?? 0) - Number(prev.v ?? prev.y ?? 0));
      if (du < 0.0015 && dv < 0.0015) return false;
    }
    points.push({
      ...next,
      t: Number(next?.t || 0),
      widthScale: 1,
      pressureLike: 1,
    });
    return true;
  }

  function getStrokeRadiusUvValue(stroke) {
    const spec = getStrokeRadiusSpec(stroke);
    if (spec.model === "erp_uv_norm") return Math.max(1e-6, Number(spec.value || 0));
    return Math.max(1e-6, Number(stroke?.size || 10) * 0.5 / 2048);
  }

  function getFreehandPointEraseRadiusUv(stroke, point) {
    return getStrokeRadiusUvValue(stroke)
      * getStrokePointScalar(point, "widthScale", 1)
      * getStrokePointScalar(point, "pressureLike", 1);
  }

  function getWrappedDistancePointToSegment(point, a, b) {
    const px = Number(point?.u || 0);
    const py = Number(point?.v || 0);
    const ax = px + shortestWrappedDelta(Number(a?.u || 0), px);
    const ay = Number(a?.v || 0);
    const bx = px + shortestWrappedDelta(Number(b?.u || 0), px);
    const by = Number(b?.v || 0);
    const abx = bx - ax;
    const aby = by - ay;
    const denom = abx * abx + aby * aby;
    if (denom <= 1e-12) return Math.hypot(px - ax, py - ay);
    const t = clamp(((px - ax) * abx + (py - ay) * aby) / denom, 0, 1);
    return Math.hypot(px - (ax + abx * t), py - (ay + aby * t));
  }

  function isPointErasedByStroke(point, pointRadiusUv, eraserPoints, eraserRadiusUv) {
    const threshold = Math.max(1e-6, pointRadiusUv + eraserRadiusUv);
    for (let i = 0; i < eraserPoints.length; i += 1) {
      const sample = eraserPoints[i];
      const sampleDist = Math.hypot(
        shortestWrappedDelta(Number(sample?.u || 0), Number(point?.u || 0)),
        Number(sample?.v || 0) - Number(point?.v || 0),
      );
      if (sampleDist <= threshold) return true;
      if (i === 0) continue;
      if (getWrappedDistancePointToSegment(point, eraserPoints[i - 1], sample) <= threshold) return true;
    }
    return false;
  }

  function movePointTowardWrapped(startPoint, endPoint, distanceUv) {
    const sx = Number(startPoint?.u || 0);
    const sy = Number(startPoint?.v || 0);
    const dx = shortestWrappedDelta(Number(endPoint?.u || 0), sx);
    const dy = Number(endPoint?.v || 0) - sy;
    const len = Math.hypot(dx, dy);
    if (!Number.isFinite(len) || len <= 1e-8) return { ...startPoint };
    const t = clamp(Number(distanceUv || 0) / len, 0, 0.49);
    return {
      ...startPoint,
      u: ((sx + dx * t) % 1 + 1) % 1,
      v: sy + dy * t,
    };
  }

  function trimSplitChunkEndpoints(stroke, chunkPoints, options = {}) {
    if (!Array.isArray(chunkPoints) || chunkPoints.length < 2) return Array.isArray(chunkPoints) ? chunkPoints.map((pt) => ({ ...pt })) : [];
    const trimmed = chunkPoints.map((pt) => ({ ...pt }));
    if (options.trimStart) {
      trimmed[0] = movePointTowardWrapped(trimmed[0], trimmed[1], getFreehandPointEraseRadiusUv(stroke, trimmed[0]));
    }
    if (options.trimEnd) {
      const lastIndex = trimmed.length - 1;
      trimmed[lastIndex] = movePointTowardWrapped(trimmed[lastIndex], trimmed[lastIndex - 1], getFreehandPointEraseRadiusUv(stroke, trimmed[lastIndex]));
    }
    return trimmed;
  }

  function splitFreehandStrokeByEraser(stroke, eraserStroke) {
    const geometry = stroke?.geometry || null;
    if (!geometry || String(geometry.geometryKind || "") !== "freehand_open") {
      return { changed: false, chunks: [] };
    }
    const strokePoints = Array.isArray(geometry.processedPoints) && geometry.processedPoints.length
      ? geometry.processedPoints
      : (Array.isArray(geometry.rawPoints) && geometry.rawPoints.length ? geometry.rawPoints : (Array.isArray(geometry.points) ? geometry.points : []));
    const eraserPoints = Array.isArray(eraserStroke?.geometry?.processedPoints) && eraserStroke.geometry.processedPoints.length
      ? eraserStroke.geometry.processedPoints
      : (Array.isArray(eraserStroke?.geometry?.rawPoints) && eraserStroke.geometry.rawPoints.length ? eraserStroke.geometry.rawPoints : (Array.isArray(eraserStroke?.geometry?.points) ? eraserStroke.geometry.points : []));
    if (!strokePoints.length || !eraserPoints.length) return { changed: false, chunks: [] };
    const eraserRadiusUv = getStrokeRadiusUvValue(eraserStroke);
    const erasedFlags = strokePoints.map((pt) => isPointErasedByStroke(pt, getFreehandPointEraseRadiusUv(stroke, pt), eraserPoints, eraserRadiusUv));
    if (!erasedFlags.some(Boolean)) return { changed: false, chunks: [] };
    const chunks = [];
    let current = [];
    let currentStartIndex = -1;
    strokePoints.forEach((pt, index) => {
      if (erasedFlags[index]) {
        if (current.length) {
          chunks.push({ points: current, startIndex: currentStartIndex, endIndex: index - 1 });
        }
        current = [];
        currentStartIndex = -1;
        return;
      }
      if (!current.length) currentStartIndex = index;
      current.push({ ...pt });
    });
    if (current.length) chunks.push({ points: current, startIndex: currentStartIndex, endIndex: strokePoints.length - 1 });
    return { changed: true, chunks };
  }

  function applyPaintEraserInteraction(interaction) {
    const eraserStroke = interaction?.stroke || null;
    if (!eraserStroke || interaction?.layerKind !== "paint" || String(eraserStroke?.toolKind || "") !== "eraser") return false;
    rebuildPaintEngineIfNeeded();
    const erpDesc = getActivePaintTargetDescriptor();
    const eraserSurface = createRasterSurface(erpDesc.width, erpDesc.height);
    if (!rasterizeStrokeToSurface(eraserSurface, eraserStroke, { w: erpDesc.width, h: erpDesc.height })) return false;
    const eraserData = eraserSurface.ctx?.getImageData(0, 0, erpDesc.width, erpDesc.height)?.data || null;
    if (!eraserData) return false;

    const groupMeta = new Map(getPaintingGroupList().map((group) => [String(group?.actionGroupId || group?.id || "").trim(), group ? { ...group } : null]));
    const nextStrokes = [];
    const nextGroups = [];
    const nextRasterObjects = [...getRasterObjectList().filter((item) => String(item?.layerKind || "paint") !== "paint")];
    let changed = false;
    let nextReplacementZ = getDisplayListObjects().reduce((max, entry) => Math.max(max, Number(entry?.z_index || 0)), -1) + 1;

    function getAlphaBoundsFromData(alphaData, width, height, threshold = 8) {
      let minX = width;
      let minY = height;
      let maxX = -1;
      let maxY = -1;
      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          if (alphaData[(y * width + x) * 4 + 3] <= threshold) continue;
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
      }
      if (maxX < minX || maxY < minY) return null;
      return { minX, minY, maxX, maxY };
    }

    const eraserBoundsPx = getAlphaBoundsFromData(eraserData, erpDesc.width, erpDesc.height, 8);
    if (!eraserBoundsPx) return false;

    function boxesIntersect(a, b) {
      if (!a || !b) return false;
      return !(a.maxX < b.minX || b.maxX < a.minX || a.maxY < b.minY || b.maxY < a.minY);
    }

    function getGroupApproxBoundsPx(group, strokes) {
      const frame = ensureGroupFrame(group?.actionGroupId || group?.id || "", "paint", strokes);
      if (!frame) return null;
      const minU = frame.centerUv.u - frame.halfW;
      const maxU = frame.centerUv.u + frame.halfW;
      const minV = frame.centerUv.v - frame.halfH;
      const maxV = frame.centerUv.v + frame.halfH;
      const width = erpDesc.width;
      const height = erpDesc.height;
      return {
        minX: Math.floor(((minU % 1 + 1) % 1) * width),
        maxX: Math.ceil((((maxU % 1 + 1) % 1) * width)),
        minY: Math.floor(clamp(minV, 0, 1) * height),
        maxY: Math.ceil(clamp(maxV, 0, 1) * height),
        wraps: (maxU - minU) >= 1 || minU < 0 || maxU > 1,
      };
    }

    function getRasterApproxBoundsPx(item) {
      const bbox = item?.bbox || null;
      if (!bbox) return null;
      const tf = item?.transform || {};
      const width = erpDesc.width;
      const height = erpDesc.height;
      const u0 = Number(bbox.u0 || 0) + Number(tf.du || 0);
      const u1 = Number(bbox.u1 || 0) + Number(tf.du || 0);
      const v0 = Number(bbox.v0 || 0) + Number(tf.dv || 0);
      const v1 = Number(bbox.v1 || 0) + Number(tf.dv || 0);
      return {
        minX: Math.floor((((u0 % 1) + 1) % 1) * width),
        maxX: Math.ceil((((u1 % 1) + 1) % 1) * width),
        minY: Math.floor(clamp(v0, 0, 1) * height),
        maxY: Math.ceil(clamp(v1, 0, 1) * height),
        wraps: (u1 - u0) >= 1 || u0 < 0 || u1 > 1,
      };
    }

    function approxBoundsHit(bounds) {
      if (!bounds) return true;
      if (bounds.wraps) {
        return boxesIntersect(eraserBoundsPx, { minX: 0, maxX: bounds.maxX, minY: bounds.minY, maxY: bounds.maxY })
          || boxesIntersect(eraserBoundsPx, { minX: bounds.minX, maxX: erpDesc.width - 1, minY: bounds.minY, maxY: bounds.maxY });
      }
      return boxesIntersect(eraserBoundsPx, bounds);
    }

    function eraseCanvasAndDetectTouch(sourceCanvas) {
      if (!sourceCanvas) return { touched: false, canvas: null };
      const working = createRasterSurface(erpDesc.width, erpDesc.height, { readback: true });
      working.ctx.drawImage(sourceCanvas, 0, 0);
      const beforeData = working.ctx.getImageData(0, 0, erpDesc.width, erpDesc.height);
      working.ctx.save();
      working.ctx.globalCompositeOperation = "destination-out";
      working.ctx.drawImage(eraserSurface.canvas, 0, 0);
      working.ctx.restore();
      const afterData = working.ctx.getImageData(0, 0, erpDesc.width, erpDesc.height);
      for (let i = 0; i < erpDesc.width * erpDesc.height; i += 1) {
        const eraserAlpha = eraserData[i * 4 + 3];
        if (eraserAlpha <= 8) continue;
        const beforeAlpha = beforeData.data[i * 4 + 3];
        const afterAlpha = afterData.data[i * 4 + 3];
        if (beforeAlpha > afterAlpha) {
          return { touched: true, canvas: working.canvas };
        }
      }
      return { touched: false, canvas: null };
    }

    function createReplacementObjects(canvas, layerKind, baseMeta) {
      const baseZ = Number(baseMeta?.z_index);
      const created = createRasterFrozenObjectsFromCanvas(canvas, layerKind, baseMeta).map((item, index) => ({
        ...item,
        z_index: Number.isFinite(baseZ) ? baseZ + (index * 0.001) : nextReplacementZ + (index * 0.001),
      }));
      if (created.length) {
        nextReplacementZ = Math.max(nextReplacementZ, ...created.map((item) => Number(item?.z_index || 0))) + 1;
      }
      return created;
    }

    for (const group of getPaintingGroupList()) {
      const gid = String(group?.actionGroupId || group?.id || "").trim();
      if (!gid) continue;
      const groupStrokes = getStrokeGroupStrokes(gid, "paint");
      if (!approxBoundsHit(getGroupApproxBoundsPx(group, groupStrokes))) {
        nextGroups.push(group);
        nextStrokes.push(...groupStrokes);
        continue;
      }
      const groupTarget = editor.paintEngine?.getGroupTarget?.(gid) || null;
      const groupCanvas = groupTarget?.committedPaint?.canvas || null;
      if (!groupCanvas) {
        nextGroups.push(group);
        nextStrokes.push(...groupStrokes);
        continue;
      }
      const erased = eraseCanvasAndDetectTouch(groupCanvas);
      if (!erased.touched || !erased.canvas) {
        nextGroups.push(group);
        nextStrokes.push(...groupStrokes);
        continue;
      }
      changed = true;
      const created = createReplacementObjects(erased.canvas, "paint", groupMeta.get(gid) || group || {});
      nextRasterObjects.push(...created);
    }

    for (const rasterObject of getRasterObjectList().filter((item) => String(item?.layerKind || "paint") === "paint")) {
      if (!approxBoundsHit(getRasterApproxBoundsPx(rasterObject))) {
        nextRasterObjects.push(rasterObject);
        continue;
      }
      const rasterCanvas = buildRasterObjectEditCanvas(rasterObject, null);
      if (!rasterCanvas) {
        nextRasterObjects.push(rasterObject);
        continue;
      }
      const erased = eraseCanvasAndDetectTouch(rasterCanvas);
      if (!erased.touched || !erased.canvas) {
        nextRasterObjects.push(rasterObject);
        continue;
      }
      changed = true;
      const created = createReplacementObjects(erased.canvas, "paint", rasterObject);
      nextRasterObjects.push(...created);
    }

    if (!changed) return false;
    state.painting.paint.strokes = nextStrokes;
    state.painting.groups = nextGroups.sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
    state.painting.raster_objects = nextRasterObjects.sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
    clearSelection({ preservePanelValues: false });
    return true;
  }

  // Commit the current frame-stroke segment to state and start a fresh stroke with the
  // same action group.  Called when the pointer crosses the frame boundary mid-drag so
  // that the segment drawn inside the frame is preserved without a "teleport" line to
  // wherever the pointer re-enters.
  function _segmentFrameStroke(it) {
    const rawPoints = it.stroke?.geometry?.rawPoints || it.stroke?.geometry?.points || [];
    if (rawPoints.length >= 1) {
      // Save the completed inside-frame segment.
      commitPaintInteraction(it);
      const targetDescriptor = getActivePaintTargetDescriptor(it);
      if (targetDescriptor) {
        if (String(it.stroke?.toolKind || "") === "eraser") {
          editor.paintEngine.cancelActiveStroke(targetDescriptor);
        } else {
          editor.paintEngine.commitActiveStroke(it.stroke, targetDescriptor);
        }
      }
      it._hasCommittedSegments = true;
    }
    // Start a new blank stroke — same tool/layer/style but fresh geometry.
    const prev = it.stroke;
    const targetSpace = { kind: "ERP_GLOBAL", viewMode: String(editor.mode || "frame") };
    const newStroke = buildFreehandStrokeRecord(it.layerKind, prev.toolKind, [], targetSpace);
    newStroke.actionGroupId = prev.actionGroupId; // keep same undo group
    it.stroke = newStroke;
    const targetDescriptor = getActivePaintTargetDescriptor(it);
    if (targetDescriptor) {
      editor.paintEngine.beginStroke(newStroke, targetDescriptor);
    }
  }

  function _segmentFrameLassoFill(it) {
    const points = it.stroke?.geometry?.points || [];
    if (points.length >= 3) {
      commitPaintInteraction(it);
      const targetDescriptor = getActivePaintTargetDescriptor(it);
      if (targetDescriptor) editor.paintEngine.commitActiveStroke(it.stroke, targetDescriptor);
      it._hasCommittedSegments = true;
    }
    const prev = it.stroke;
    const targetSpace = { kind: "ERP_GLOBAL", viewMode: String(editor.mode || "frame") };
    const newStroke = buildLassoFillStrokeRecord(it.layerKind, prev.toolKind, [], targetSpace);
    newStroke.actionGroupId = prev.actionGroupId;
    it.stroke = newStroke;
    const targetDescriptor = getActivePaintTargetDescriptor(it);
    if (targetDescriptor) {
      editor.paintEngine.beginStroke(newStroke, targetDescriptor);
    }
  }

  function commitPaintInteraction(interaction) {
    const geometry = interaction?.stroke?.geometry || null;
    if (!geometry) return false;
    const toolKind = String(interaction?.stroke?.toolKind || "pen");
    if (interaction.layerKind === "paint" && toolKind === "eraser") {
      if (geometry.geometryKind !== "lasso_fill") {
        geometry.processedPoints = processFreehandPoints(geometry.rawPoints || geometry.points || [], interaction.stroke.targetSpace, true);
      }
      return applyPaintEraserInteraction(interaction);
    }
    const shouldCreatePaintGroup = interaction.layerKind === "paint" && toolKind !== "eraser";
    if (geometry.geometryKind === "lasso_fill") {
      const points = Array.isArray(geometry.points) ? geometry.points : [];
      if (points.length < 3) return false;
      if (shouldCreatePaintGroup) ensurePaintingGroupEntry(interaction.stroke?.actionGroupId);
      getPaintingLayerList(interaction.layerKind).push(interaction.stroke);
      return true;
    }
    const rawPoints = geometry.rawPoints || geometry.points || [];
    if (rawPoints.length < 1) return false;
    // ADR 0006: processedPoints is durable; rasterizer (Python) uses it directly.
    geometry.processedPoints = processFreehandPoints(rawPoints, interaction.stroke.targetSpace, true);
    if (shouldCreatePaintGroup) ensurePaintingGroupEntry(interaction.stroke?.actionGroupId);
    getPaintingLayerList(interaction.layerKind).push(interaction.stroke);
    return true;
  }

  function hitObjectAt(p) {
    if (type === "cutout" && editor.mode === "frame") {
      const shot = getActiveCutoutShot();
      const rect = getFrameViewRect(shot);
      if (!shot || !rect) return null;
      const insideRect = Number(p?.x || 0) >= Number(rect.x || 0)
        && Number(p?.x || 0) <= Number(rect.x || 0) + Number(rect.w || 0)
        && Number(p?.y || 0) >= Number(rect.y || 0)
        && Number(p?.y || 0) <= Number(rect.y || 0) + Number(rect.h || 0);
      if (!insideRect) return null;
      const erpPoint = screenPosToFrameAsErpPoint(p, shot, performance.now());
      const dir = erpPoint ? erpPointToWorldDir(erpPoint) : null;
      if (dir) {
        for (const item of getCutoutSelectableItemsForHit()) {
          if (!isStickerItem(item)) continue;
          const local = worldDirToFrameLocalPoint(item, dir);
          if (!local) continue;
          if (Number(local.x) >= 0 && Number(local.x) <= 1 && Number(local.y) >= 0 && Number(local.y) <= 1) {
            const geom = objectGeom(item);
            if (geom?.visible) return { item, geom };
          }
        }
      }
      const items = getOrderedDisplayListObjects(false).slice().sort((a, b) => Number(b?.z_index || 0) - Number(a?.z_index || 0));
      for (const entry of items) {
        if (entry.type === "strokeGroup") {
          const item = getStrokeGroupItem(makeStrokeGroupSelectionId("paint", entry.actionGroupId || entry.id || ""));
          if (!item) continue;
          const geom = objectGeom(item);
          if (!geom?.visible) continue;
          const paths = Array.isArray(geom.strokePaths) ? geom.strokePaths : [];
          for (const path of paths) {
            const pts = Array.isArray(path?.points) ? path.points : [];
            if (!pts.length) continue;
            if (path.closed && pts.length >= 3 && pointInPoly(p, pts)) return { item, geom };
            const threshold = Math.max(8, Number(path?.lineWidth || 0) * 0.5 + 6);
            for (let i = 0; i < pts.length - 1; i += 1) {
              if (distToSegment2(p, pts[i], pts[i + 1]) <= threshold * threshold) return { item, geom };
            }
            if (pts.length === 1 && dist2(p, pts[0]) <= threshold * threshold) return { item, geom };
          }
          continue;
        }
        if (entry.type === "rasterObject") {
          const item = getRasterObjectItem(makeRasterObjectSelectionId(entry.item?.id || entry.id || ""));
          if (!item) continue;
          const geom = objectGeom(item);
          if (hitRasterObjectAt(item, geom, p, erpPoint)) return { item, geom };
          continue;
        }
        const item = entry.item;
        if (!item || !isStickerItem(item)) continue;
        if (!dir) continue;
        const local = worldDirToFrameLocalPoint(item, dir);
        if (!local) continue;
        if (Number(local.x) >= 0 && Number(local.x) <= 1 && Number(local.y) >= 0 && Number(local.y) <= 1) {
          const geom = objectGeom(item);
          if (geom?.visible) return { item, geom };
        }
      }
      return null;
    }
    const items = [
      ...getOrderedDisplayListObjects(false)
      .slice()
      .sort((a, b) => Number(b?.z_index || 0) - Number(a?.z_index || 0))
      .map((entry) => {
        if (entry.type === "strokeGroup") {
          return getStrokeGroupItem(makeStrokeGroupSelectionId("paint", entry.actionGroupId || entry.id || ""));
        }
        if (entry.type === "rasterObject") {
          return getRasterObjectItem(makeRasterObjectSelectionId(entry.item?.id || entry.id || ""));
        }
        return entry.item;
      })
      .filter(Boolean),
      ...(type === "cutout" ? getCutoutSelectableItemsForHit().filter((item) => isShotItem(item)) : []),
    ];
    for (const item of items) {
      if (isStrokeGroupItem(item)) {
        const geom = objectGeom(item);
        if (!geom?.visible) continue;
        const paths = Array.isArray(geom.strokePaths) ? geom.strokePaths : [];
        for (const path of paths) {
          const pts = Array.isArray(path?.points) ? path.points : [];
          if (!pts.length) continue;
          if (path.closed && pts.length >= 3 && pointInPoly(p, pts)) return { item, geom };
          const threshold = Math.max(8, Number(path?.lineWidth || 0) * 0.5 + 6);
          for (let i = 0; i < pts.length - 1; i += 1) {
            if (distToSegment2(p, pts[i], pts[i + 1]) <= threshold * threshold) return { item, geom };
          }
          if (pts.length === 1 && dist2(p, pts[0]) <= threshold * threshold) return { item, geom };
        }
        continue;
      }
      if (isRasterObjectItem(item)) {
        const geom = objectGeom(item);
        if (!geom?.visible) continue;
        if (hitRasterObjectAt(item, geom, p)) return { item, geom };
        continue;
      }
      const g = objectGeom(item);
      if (!g.visible) continue;
      if (pointInPoly(p, g.corners)) return { item, geom: g };
    }
    return null;
  }

  function handleHit(geom, p) {
    if (!geom || !geom.visible) return { kind: "none", cursor: editor.mode === "pano" ? "grab" : "default" };
    if (geom.kind === "strokeGroup") {
      const cornerIdx = geom.corners.findIndex((c) => dist2(c, p) <= 11 * 11);
      if (cornerIdx >= 0) {
        const c = geom.corners[cornerIdx];
        const vx = c.x - geom.center.x;
        const vy = c.y - geom.center.y;
        const cursor = (vx * vy) >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx, cursor };
      }
      const paths = Array.isArray(geom.strokePaths) ? geom.strokePaths : [];
      for (const path of paths) {
        const pts = Array.isArray(path?.points) ? path.points : [];
        if (path.closed && pts.length >= 3 && pointInPoly(p, pts)) return { kind: "move", cursor: "default" };
        const threshold = Math.max(8, Number(path?.lineWidth || 0) * 0.5 + 6);
        for (let i = 0; i < pts.length - 1; i += 1) {
          if (distToSegment2(p, pts[i], pts[i + 1]) <= threshold * threshold) return { kind: "move", cursor: "default" };
        }
      }
      if (pointInPoly(p, geom.corners)) return { kind: "move", cursor: "default" };
      return { kind: "none", cursor: editor.mode === "pano" ? "grab" : "default" };
    }
    if (geom.kind === "rasterObject") {
      const cornerIdx = geom.corners.findIndex((c) => dist2(c, p) <= 11 * 11);
      if (cornerIdx >= 0) {
        const c = geom.corners[cornerIdx];
        const vx = c.x - geom.center.x;
        const vy = c.y - geom.center.y;
        const cursor = (vx * vy) >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx, cursor };
      }
      if (pointInPoly(p, geom.corners)) return { kind: "move", cursor: "default" };
      return { kind: "none", cursor: editor.mode === "pano" ? "grab" : "default" };
    }
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
    if (pointInPoly(p, geom.corners)) return { kind: "move", cursor: "default" };
    return { kind: "none", cursor: editor.mode === "pano" ? "grab" : "default" };
  }

  function rectFromPoints(a, b) {
    return {
      x0: Math.min(Number(a?.x || 0), Number(b?.x || 0)),
      y0: Math.min(Number(a?.y || 0), Number(b?.y || 0)),
      x1: Math.max(Number(a?.x || 0), Number(b?.x || 0)),
      y1: Math.max(Number(a?.y || 0), Number(b?.y || 0)),
    };
  }

  function rectContainsPoint(rect, point) {
    return !!rect && !!point
      && Number(point.x) >= Number(rect.x0)
      && Number(point.x) <= Number(rect.x1)
      && Number(point.y) >= Number(rect.y0)
      && Number(point.y) <= Number(rect.y1);
  }

  function rectIntersectsGeom(rect, geom) {
    if (!rect || !geom?.visible || !Array.isArray(geom.corners)) return false;
    if (geom.corners.some((corner) => rectContainsPoint(rect, corner))) return true;
    const cx = (Number(rect.x0) + Number(rect.x1)) * 0.5;
    const cy = (Number(rect.y0) + Number(rect.y1)) * 0.5;
    if (pointInPoly({ x: cx, y: cy }, geom.corners)) return true;
    return false;
  }

  function updateCursor(p) {
    syncPaintCursorElement();
    if (editor.interaction) {
      if (editor.interaction.kind === "paint_stroke" || editor.interaction.kind === "paint_lasso_fill") setCanvasCursor("none");
      else if (editor.interaction.kind === "view") setCanvasCursor("grabbing");
      else if (editor.interaction.kind === "pan_frame") setCanvasCursor("grabbing");
      else if (editor.interaction.kind === "roll_frame") setCanvasCursor("grabbing");
    else if (editor.interaction.kind === "move" || editor.interaction.kind === "move_multi" || editor.interaction.kind === "move_stroke_group" || editor.interaction.kind === "move_raster_object") setCanvasCursor("move");
      else if (editor.interaction.kind === "scale" || editor.interaction.kind === "scale_x" || editor.interaction.kind === "scale_y" || editor.interaction.kind === "scale_raster_object") setCanvasCursor(editor.interaction.cursor || "nwse-resize");
      else if (editor.interaction.kind === "rotate") setCanvasCursor("grabbing");
      else setCanvasCursor("default");
      return;
    }
    if (isActivePaintCursorVisible()) {
      setCanvasCursor("none");
      return;
    }
    if (editor.mode === "frame") {
      if (editor.altModifier && !readOnly) {
        setCanvasCursor(FRAME_ROLL_CURSOR);
        return;
      }
      if (editor.primaryTool !== "cursor") {
        setCanvasCursor("default");
        return;
      }
      setCanvasCursor("grab");
      return;
    }
    if (editor.primaryTool === "cursor" && editor.marqueeModifier) {
      setCanvasCursor("default");
      return;
    }
    const selected = getSelected();
    const geom = selected ? objectGeom(selected) : null;
    const selectedLocked = selected ? isItemLocked(selected) : false;
    const h = selectedLocked ? { kind: "none", cursor: "default" } : handleHit(geom, p);
    if (!selectedLocked && h.kind !== "none") {
      setCanvasCursor(h.cursor);
      return;
    }
    if (editor.primaryTool === "cursor") {
      const hit = hitObjectAt(p);
      if (hit) {
        setCanvasCursor("default");
        return;
      }
    }
    setCanvasCursor(editor.mode === "pano" ? "grab" : "default");
  }

  function updateSelectionMenu() {
    if (!selectionMenu) return;
    if (editor.mode === "frame") {
      uiState.selectionMenu = { visible: false, left: 0, top: 0, items: [] };
      return;
    }
    const selected = getSelected();
    const selectedItems = getSelectedItems();
    if ((!selected && selectedItems.length === 0) || editor.interaction) {
      uiState.selectionMenu = { visible: false, left: 0, top: 0, items: [] };
      return;
    }
    const selectedKind = getSelectedKind();
    const model = buildSelectionMenuModel({
      type,
      selected,
      selectedItems,
      selectedKind,
      geom: selectedItems.length > 1 ? getMultiSelectionGeom(selectedItems) : objectGeom(selected),
      allLocked: areAllSelectedItemsLocked(selectedItems),
      selectedLocked: isItemLocked(selected),
      activeAspect: getCutoutAspectLabel(selected),
      cutoutAspectOpen: editor.cutoutAspectOpen,
      isExternalSticker,
      isStickerHidden,
      canRestoreSelectedToInitial,
      iconSet: ICON,
    });

    if (!model.visible) {
      uiState.selectionMenu = { visible: false, left: 0, top: 0, items: [] };
      return;
    }

    const placeSelectionMenu = (menuW, menuH, { requireFitsBelow = true } = {}) => {
      const pad = 14;
      const minX = Number(model.anchor?.minX);
      const maxX = Number(model.anchor?.maxX);
      const maxY = Number(model.anchor?.maxY);
      if (![minX, maxX, maxY].every(Number.isFinite)) return null;
      const maxLeft = Math.max(pad, canvas.width - menuW - pad);
      const x = clamp(((minX + maxX) * 0.5) - menuW * 0.5, pad, maxLeft);
      const y = maxY + 18;
      if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
      if (requireFitsBelow && y + menuH > canvas.height - pad) return null;
      return { left: x, top: y };
    };

    const estimatedW = Math.max(1, Number(editor.menuSize?.w || 220));
    const estimatedH = Math.max(1, Number(editor.menuSize?.h || 40));
    const initialPlacement = placeSelectionMenu(estimatedW, estimatedH, { requireFitsBelow: false });
    if (!initialPlacement) {
      uiState.selectionMenu = { visible: false, left: 0, top: 0, items: [] };
      return;
    }

    uiState.selectionMenu = {
      visible: true,
      left: initialPlacement.left,
      top: initialPlacement.top,
      items: model.items,
    };
    requestAnimationFrame(() => {
      if (!selectionMenu || uiState.selectionMenu.visible !== true) return;
      const rect = selectionMenu.getBoundingClientRect();
      const menuW = Math.round(Number(rect?.width || 0)) || 220;
      const menuH = Math.round(Number(rect?.height || 0)) || 40;
      editor.menuSize = { w: menuW, h: menuH, measured: true };
      const measuredPlacement = placeSelectionMenu(menuW, menuH);
      if (!measuredPlacement) {
        uiState.selectionMenu.visible = false;
        return;
      }
      uiState.selectionMenu.left = measuredPlacement.left;
      uiState.selectionMenu.top = measuredPlacement.top;
    });
  }

  function hideTooltip() {
    if (tooltip.timer) {
      clearTimeout(tooltip.timer);
      tooltip.timer = 0;
    }
    tooltip.target = null;
    uiState.tooltip.visible = false;
  }

  function showTooltipFor(el) {
    if (!tooltipEl || !el || !el.isConnected) return;
    const text = String(el.getAttribute("data-tip") || "").trim();
    if (!text) return;
    uiState.tooltip.text = text;
    uiState.tooltip.visible = true;
    const expectedTarget = el;
    requestAnimationFrame(() => {
      if (tooltip.target !== expectedTarget || !tooltipEl || !expectedTarget?.isConnected) return;
      const hostRect = stageWrap.getBoundingClientRect();
      const rect = expectedTarget.getBoundingClientRect();
      const pad = 8;
      const topGap = 12;
      const mw = Math.round(Number(tooltipEl.getBoundingClientRect()?.width || 0)) || 100;
      const mh = Math.round(Number(tooltipEl.getBoundingClientRect()?.height || 0)) || 24;
      const inToolRail = !!expectedTarget.closest(".pano-floating-left");
      const inFrameRail = !!expectedTarget.closest(".pano-frame-rail");
      const inFooter = !!expectedTarget.closest(".pano-paint-footer") || !!expectedTarget.closest(".pano-paint-color-float");
      let variant = "";
      let x = rect.left - hostRect.left + rect.width * 0.5 - mw * 0.5;
      let y = rect.top - hostRect.top - mh - topGap;
      if (inToolRail) {
        variant = "tool-rail";
        x = rect.right - hostRect.left + 10;
        y = rect.top - hostRect.top + rect.height * 0.5 - mh * 0.5;
        x = clamp(x, pad, Math.max(pad, hostRect.width - mw - pad));
        y = clamp(y, pad, Math.max(pad, hostRect.height - mh - pad));
      } else if (inFrameRail) {
        variant = "frame-rail";
        x = rect.left - hostRect.left - mw - 10;
        y = rect.top - hostRect.top + rect.height * 0.5 - mh * 0.5;
        x = clamp(x, pad, Math.max(pad, hostRect.width - mw - pad));
        y = clamp(y, pad, Math.max(pad, hostRect.height - mh - pad));
      } else if (inFooter) {
        variant = "footer";
        const footerHost = expectedTarget.closest(".pano-paint-footer");
        const footerRect = footerHost ? footerHost.getBoundingClientRect() : rect;
        x = footerRect.left - hostRect.left + footerRect.width * 0.5 - mw * 0.5;
        y = footerRect.bottom - hostRect.top + 5;
        x = clamp(x, pad, Math.max(pad, hostRect.width - mw - pad));
        y = Math.max(pad, y);
      }
      x = clamp(x, pad, Math.max(pad, hostRect.width - mw - pad));
      y = Math.max(pad, y);
      uiState.tooltip.left = x;
      uiState.tooltip.top = y;
      uiState.tooltip.variant = variant;
      uiState.tooltip.visible = true;
    });
  }

  const viewController = createPanoInteractionController({
    getView: () => ({ yaw: editor.viewYaw, pitch: editor.viewPitch, fov: editor.viewFov }),
    setView: (next) => {
      editor.viewYaw = wrapYaw(Number(next.yaw || 0));
      editor.viewPitch = clamp(Number(next.pitch || 0), -89.9, 89.9);
      editor.viewFov = clamp(Number(next.fov || editor.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const rect = canvas.getBoundingClientRect();
      return {
        w: Math.max(1, Number(rect.width || canvas.clientWidth || 0)),
        h: Math.max(1, Number(rect.height || canvas.clientHeight || 0)),
      };
    },
    getInvert: () => ({
      x: state.ui_settings?.invert_view_x ? -1 : 1,
      y: state.ui_settings?.invert_view_y ? -1 : 1,
    }),
    getUnwrapRect,
    onInteraction: () => {
      runtime.backgroundDirty = true;
      runtime.dirty = true;
    },
  });

  function applyRollInteractionAngle(interaction, angle, event = {}) {
    if (interaction?.kind !== "roll_frame" || !interaction.shot) return;
    interaction.accumulatedRad += shortestAngleDeltaRad(angle, interaction.lastAngle);
    interaction.lastAngle = angle;
    const roll = resolveFrameRollDeg(interaction.start.roll_deg, interaction.accumulatedRad, {
      shiftKey: event.shiftKey,
      altKey: interaction.altStarted ? false : event.altKey,
    });
    interaction.shot.roll_deg = roll;
    interaction.changed = interaction.changed || Math.abs(interaction.accumulatedRad) > 1e-9;
    const rollParam = (uiState.sidePanel?.params || []).find((param) => param.key === "roll_deg");
    if (rollParam) {
      rollParam.value = roll;
      rollParam.displayValue = formatParamValue(roll);
      rollParam.fillPct = ((roll + 180) / 360) * 100;
    }
    syncFrameRollKnob();
    syncFrameRollTooltip(interaction);
    requestDraw({ localOnly: true });
  }

  const frameRollAngleForEvent = (event, center) => {
    const point = screenPos(event);
    return Math.atan2(point.y - center.y, point.x - center.x);
  };
  function syncFrameRollTooltip(interaction) {
    if (interaction?.kind !== "roll_frame" || !interaction.shot) return;
    if (tooltip.timer) {
      clearTimeout(tooltip.timer);
      tooltip.timer = 0;
    }
    tooltip.target = null;
    const rect = getFrameViewRect(interaction.shot);
    const canvasBounds = canvas.getBoundingClientRect?.();
    const hostBounds = stageWrap.getBoundingClientRect?.();
    if (!rect || !canvasBounds || !hostBounds || canvas.width <= 0 || canvas.height <= 0) return;
    const scaleX = canvasBounds.width / canvas.width;
    const scaleY = canvasBounds.height / canvas.height;
    uiState.tooltip.text = `${formatParamValue(interaction.shot.roll_deg)}°`;
    uiState.tooltip.left = canvasBounds.left - hostBounds.left + (rect.x + rect.w * 0.5) * scaleX;
    uiState.tooltip.top = canvasBounds.top - hostBounds.top + (rect.y + rect.h * 0.5) * scaleY + 12;
    uiState.tooltip.variant = "roll";
    uiState.tooltip.visible = true;
  };
  frameRollKnobEl?.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || readOnly || editor.mode !== "frame") return;
    const shot = getActiveCutoutShot();
    if (!shot) return;
    const rect = getFrameViewRect(shot);
    if (!rect) return;
    const center = { x: rect.x + rect.w * 0.5, y: rect.y + rect.h * 0.5 };
    const angle = frameRollAngleForEvent(event, center);
    editor.interaction = {
      kind: "roll_frame", shot, center, lastAngle: angle, accumulatedRad: 0,
      start: { roll_deg: Number(shot.roll_deg ?? shot.rot_deg ?? 0) },
      changed: false, altStarted: false, source: "knob",
    };
    frameRollKnobEl.setPointerCapture?.(event.pointerId);
    event.preventDefault();
    syncFrameRollKnob();
    syncFrameRollTooltip(editor.interaction);
    requestDraw({ localOnly: true });
  });
  frameRollKnobEl?.addEventListener("pointermove", (event) => {
    if (editor.interaction?.kind !== "roll_frame" || editor.interaction.source !== "knob") return;
    applyRollInteractionAngle(
      editor.interaction,
      frameRollAngleForEvent(event, editor.interaction.center),
      event,
    );
  });
  const finishKnobRoll = () => {
    const interaction = editor.interaction;
    if (interaction?.kind !== "roll_frame" || interaction.source !== "knob") return;
    if (interaction.changed) {
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
    }
    editor.interaction = null;
    hideTooltip();
    syncViewToggleState();
    syncFrameRollKnob();
    requestDraw();
  };
  frameRollKnobEl?.addEventListener("pointerup", finishKnobRoll);
  frameRollKnobEl?.addEventListener("pointercancel", () => cancelFrameCameraGesture());
  frameRollKnobEl?.addEventListener("lostpointercapture", () => {
    if (editor.interaction?.source === "knob") cancelFrameCameraGesture();
  });
  frameRollKnobEl?.addEventListener("dblclick", (event) => {
    const shot = editor.mode === "frame" && !readOnly ? getActiveCutoutShot() : null;
    if (!shot || Math.abs(Number(shot.roll_deg ?? shot.rot_deg ?? 0)) <= 1e-9) return;
    shot.roll_deg = 0;
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    syncFrameRollKnob();
    requestDraw();
    event.preventDefault();
  });

  canvas.onpointerdown = (e) => {
    const p = screenPos(e);
    setPointerPos(p, true);
    editor.viewTween = null;
    viewController.state.inertia.active = false;
    viewController.state.inertia.vx = 0;
    viewController.state.inertia.vy = 0;
    if (e.button === 1) {
      e.preventDefault();
      if (editor.mode === "frame") {
        const shot = getActiveCutoutShot();
        if (!shot || readOnly) return;
        editor.interaction = {
          kind: "pan_frame",
          shot,
          last: p,
          start: {
            yaw_deg: Number(shot.yaw_deg || 0),
            pitch_deg: Number(shot.pitch_deg || 0),
          },
          changed: false,
        };
      } else {
        const dragPos = editor.mode === "unwrap" ? p : screenPosCss(e);
        editor.interaction = { kind: "view", last: dragPos, lastTs: performance.now() };
        viewController.startDrag(dragPos.x, dragPos.y, e.pointerId, performance.now());
      }
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      return;
    }
    if (e.button !== 0) return;
    if (editor.mode === "frame" && e.altKey && !readOnly) {
      const shot = getActiveCutoutShot();
      const rect = getFrameViewRect(shot);
      if (!shot || !rect) return;
      const center = { x: rect.x + rect.w * 0.5, y: rect.y + rect.h * 0.5 };
      const startAngle = Math.atan2(p.y - center.y, p.x - center.x);
      editor.interaction = {
        kind: "roll_frame", shot, center, lastAngle: startAngle, accumulatedRad: 0,
        start: { roll_deg: Number(shot.roll_deg ?? shot.rot_deg ?? 0) },
        changed: false, altStarted: true,
      };
      canvas.setPointerCapture(e.pointerId);
      e.preventDefault();
      syncFrameRollKnob();
      requestDraw({ localOnly: true });
      return;
    }
    if (editor.mode === "frame" && editor.primaryTool === "cursor") {
      const shot = getActiveCutoutShot();
      if (!shot || readOnly) return;
      editor.interaction = {
        kind: "pan_frame", shot, last: p,
        start: { yaw_deg: Number(shot.yaw_deg || 0), pitch_deg: Number(shot.pitch_deg || 0) },
        changed: false,
      };
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      e.preventDefault();
      return;
    }
    if (readOnly) {
      if (editor.mode === "pano") {
        const dragPos = screenPosCss(e);
        editor.interaction = { kind: "view", last: dragPos, lastTs: performance.now() };
        viewController.startDrag(dragPos.x, dragPos.y, e.pointerId, performance.now());
        updateCursor(p);
        canvas.setPointerCapture(e.pointerId);
      }
      return;
    }
    if (paintColorPop && !paintColorPop.hidden) {
      return;
    }

    if ((editor.primaryTool === "paint" || editor.primaryTool === "mask") && (supportsErpPainting() || supportsFramePainting())) {
      const layerKind = editor.primaryTool === "mask" ? "mask" : "paint";
      const toolKind = editor.primaryTool === "mask" ? editor.maskTool : editor.paintTool;
      const activeShot = editor.mode === "frame" && supportsFramePainting() ? getActiveCutoutShot() : null;
      // Always use ERP_GLOBAL: frame-view strokes are converted to world-space ERP UV
      // via the frame's projection so they stay fixed in the panorama when the frame moves.
      const targetSpace = { kind: "ERP_GLOBAL" };
      const startPoint = activeShot
        ? screenPosToFrameAsErpPoint(p, activeShot, performance.now())
        : screenPosToErpPoint(p, performance.now());
      if (!startPoint) {
        updateCursor(p);
        return;
      }
      editor.interaction = {
        kind: toolKind === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind,
        _livePreviewToken: makePaintId("live"),
        stroke: toolKind === "lasso_fill"
          ? buildLassoFillStrokeRecord(layerKind, toolKind, [startPoint], targetSpace)
          : buildFreehandStrokeRecord(layerKind, toolKind, [startPoint], targetSpace),
      };
      invalidateLivePaintPreviewCaches();
      const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
      if (targetDescriptor) {
        editor.paintEngine.beginStroke(editor.interaction.stroke, targetDescriptor);
        if (editor.interaction.kind === "paint_stroke") {
          // Seed the incremental renderer with the first point
          const engineTarget = editor.paintEngine.ensureTarget(targetDescriptor);
          const cx = Number(startPoint?.u ?? startPoint?.x ?? 0);
          const cy = Number(startPoint?.v ?? startPoint?.y ?? 0);
          editor.paintEngine.appendStrokePoint(engineTarget, cx, cy, editor.interaction.stroke);
        } else {
          // Lasso fill: use full-redraw path
          editor.paintEngine.updateActiveStroke(editor.interaction.stroke, targetDescriptor);
        }
      }
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      requestDraw();
      return;
    }

    const selectedItems = getSelectedItems();
    const selected = getSelected();
    const selGeom = selectedItems.length > 1 ? getMultiSelectionGeom(selectedItems) : (selected ? objectGeom(selected) : null);

    if (editor.primaryTool === "cursor" && (e.ctrlKey || e.metaKey)) {
      editor.interaction = { kind: "marquee_select", start: p, current: p };
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      requestDraw({ localOnly: true });
      return;
    }

    if (selectedItems.length > 1 && selGeom?.visible) {
      const h = selectedItems.some((item) => isItemLocked(item)) ? { kind: "none" } : handleHit(selGeom, p);
      if (h.kind === "move") {
        editor.interaction = {
          kind: "move_multi",
          items: selectedItems.map((item) => item),
          offset: { x: p.x - selGeom.center.x, y: p.y - selGeom.center.y },
          startCenter: { x: selGeom.center.x, y: selGeom.center.y },
          stickerSnapshots: selectedItems
            .filter((item) => isStickerItem(item))
            .map((item) => ({
              id: String(item.id || ""),
              yaw_deg: Number(item.yaw_deg || 0),
              pitch_deg: Number(item.pitch_deg || 0),
              center: (() => {
                const geom = objectGeom(item);
                return geom?.visible ? { x: Number(geom.center?.x || 0), y: Number(geom.center?.y || 0) } : { x: p.x, y: p.y };
              })(),
            })),
          strokeSnapshots: selectedItems
            .filter((item) => isStrokeGroupItem(item))
            .map((item) => ({
              id: String(item.actionGroupId || item.id || ""),
              layerKind: String(item.layerKind || "paint"),
              snapshot: cloneJson(getStrokeGroupStrokes(item.actionGroupId, item.layerKind)),
              frameSnapshot: cloneJson(ensureGroupFrame(item.actionGroupId, item.layerKind)),
              center: (() => {
                const geom = objectGeom(item);
                return geom?.visible ? { x: Number(geom.center?.x || 0), y: Number(geom.center?.y || 0) } : { x: p.x, y: p.y };
              })(),
              centerUv: getStrokeGroupCenterUv(item.actionGroupId, item.layerKind),
            })),
          rasterSnapshots: selectedItems
            .filter((item) => isRasterObjectItem(item))
            .map((item) => ({
              id: parseRasterObjectSelectionId(item.rasterObjectId || item.id || ""),
              snapshot: cloneJson(getRasterObjectList().find((entry) => String(entry?.id || "") === parseRasterObjectSelectionId(item.rasterObjectId || item.id || ""))),
              center: (() => {
                const geom = objectGeom(item);
                return geom?.visible ? { x: Number(geom.center?.x || 0), y: Number(geom.center?.y || 0) } : { x: p.x, y: p.y };
              })(),
              centerUv: getRasterObjectCenterUv(item),
            })),
        };
        updateCursor(p);
        canvas.setPointerCapture(e.pointerId);
        return;
      }
    } else if (selected && selGeom?.visible) {
      const h = isItemLocked(selected) ? { kind: "none" } : handleHit(selGeom, p);
      if (h.kind === "scale") {
        editor.interaction = isStrokeGroupItem(selected)
          ? {
            kind: "scale_stroke_group",
            item: selected,
            center: selGeom.center,
            startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
            snapshot: cloneJson(getStrokeGroupStrokes(selected.actionGroupId, selected.layerKind)),
            frameSnapshot: cloneJson(ensureGroupFrame(selected.actionGroupId, selected.layerKind)),
            cursor: h.cursor,
          }
          : isRasterObjectItem(selected)
          ? {
            kind: "scale_raster_object",
            item: selected,
            center: selGeom.center,
            startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
            snapshot: cloneJson(getRasterObjectList().find((entry) => String(entry?.id || "") === parseRasterObjectSelectionId(selected.rasterObjectId || selected.id || ""))),
            cursor: h.cursor,
          }
          : {
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
        editor.interaction = isStrokeGroupItem(selected)
          ? {
            kind: "rotate_stroke_group",
            item: selected,
            center: selGeom.center,
            startAng: Math.atan2(p.y - selGeom.center.y, p.x - selGeom.center.x),
            snapshot: cloneJson(getStrokeGroupStrokes(selected.actionGroupId, selected.layerKind)),
            frameSnapshot: cloneJson(ensureGroupFrame(selected.actionGroupId, selected.layerKind)),
          }
          : {
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
        if (isStrokeGroupItem(selected)) {
          const startUv = editor.mode === "frame"
            ? (() => {
              const shot = getActiveCutoutShot();
              return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
            })()
            : screenPosToErpPoint(p, performance.now());
          editor.interaction = {
            kind: "move_stroke_group",
            item: selected,
            startUv,
            snapshot: cloneJson(getStrokeGroupStrokes(selected.actionGroupId, selected.layerKind)),
            frameSnapshot: cloneJson(ensureGroupFrame(selected.actionGroupId, selected.layerKind)),
          };
          updateCursor(p);
          canvas.setPointerCapture(e.pointerId);
          return;
        }
        if (isRasterObjectItem(selected)) {
          const startUv = editor.mode === "frame"
            ? (() => {
              const shot = getActiveCutoutShot();
              return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
            })()
            : screenPosToErpPoint(p, performance.now());
          editor.interaction = {
            kind: "move_raster_object",
            item: selected,
            startUv,
            snapshot: cloneJson(getRasterObjectList().find((entry) => String(entry?.id || "") === parseRasterObjectSelectionId(selected.rasterObjectId || selected.id || ""))),
          };
          updateCursor(p);
          canvas.setPointerCapture(e.pointerId);
          return;
        }
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
      setSelectedItem(hit.item);
      if (type === "cutout" && isNewSelection) editor.cutoutAspectOpen = false;
      if (isNewSelection) updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      if (isItemLocked(hit.item)) {
        updateCursor(p);
        return;
      }
      editor.interaction = {
        kind: isStrokeGroupItem(hit.item) ? "move_stroke_group" : (isRasterObjectItem(hit.item) ? "move_raster_object" : "move"),
        item: hit.item,
        offset: { x: p.x - hit.geom.center.x, y: p.y - hit.geom.center.y },
        startUv: (isStrokeGroupItem(hit.item) || isRasterObjectItem(hit.item))
          ? (editor.mode === "frame"
            ? (() => {
              const shot = getActiveCutoutShot();
              return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
            })()
            : screenPosToErpPoint(p, performance.now()))
          : null,
        snapshot: isStrokeGroupItem(hit.item)
          ? cloneJson(getStrokeGroupStrokes(hit.item.actionGroupId, hit.item.layerKind))
          : (isRasterObjectItem(hit.item)
            ? cloneJson(getRasterObjectList().find((entry) => String(entry?.id || "") === parseRasterObjectSelectionId(hit.item.rasterObjectId || hit.item.id || "")))
            : null),
        frameSnapshot: isStrokeGroupItem(hit.item)
          ? cloneJson(ensureGroupFrame(hit.item.actionGroupId, hit.item.layerKind))
          : null,
      };
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      return;
    }

    const hadSelection = !!editor.selectedId;
    if (hadSelection) {
      pushHistory();
      commitState();
    }
    clearSelection();
    if (hadSelection) updateSidePanel();
    updateSelectionMenu();
    requestDraw();

    if (editor.mode === "pano") {
      const dragPos = screenPosCss(e);
      editor.interaction = { kind: "view", last: dragPos, lastTs: performance.now() };
      viewController.startDrag(dragPos.x, dragPos.y, e.pointerId, performance.now());
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
    }
  };

  canvas.onpointermove = (e) => {
    const p = screenPos(e);
    setPointerPos(p, true);
    if (!editor.interaction) {
      updateCursor(p);
      return;
    }
    updateCursor(p);
    const it = editor.interaction;

    if (it.kind === "paint_stroke") {
      const samples = typeof e.getCoalescedEvents === "function" ? e.getCoalescedEvents() : [e];
      let changed = false;
      samples.forEach((sample) => {
        const sp = screenPos(sample);
        if (editor.mode === "frame") {
          // Frame-boundary guard: segment the stroke on exit, restart on re-entry.
          const shot = getActiveCutoutShot();
          const rect = shot ? getFrameViewRect(shot) : null;
          if (rect) {
            const fx = (sp.x - rect.x) / Math.max(1, rect.w);
            const fy = (sp.y - rect.y) / Math.max(1, rect.h);
            const inFrame = fx >= 0 && fx <= 1 && fy >= 0 && fy <= 1;
            if (!inFrame) {
              it._outOfFrame = true;
              return; // drop point — no artifact
            }
            if (it._outOfFrame) {
              // Re-entered: commit previous inside-frame segment, start fresh
              it._outOfFrame = false;
              _segmentFrameStroke(it);
            }
          }
        }
        // appendPaintPoint now calls appendStrokePoint internally (O(1) incremental rendering)
        if (appendPaintPoint(it, sp, performance.now())) changed = true;
      });
      if (changed) requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "paint_lasso_fill") {
      const samples = typeof e.getCoalescedEvents === "function" ? e.getCoalescedEvents() : [e];
      let changed = false;
      samples.forEach((sample) => {
        const sp = screenPos(sample);
        if (editor.mode === "frame") {
          const shot = getActiveCutoutShot();
          const rect = shot ? getFrameViewRect(shot) : null;
          if (rect) {
            const fx = (sp.x - rect.x) / Math.max(1, rect.w);
            const fy = (sp.y - rect.y) / Math.max(1, rect.h);
            const inFrame = fx >= 0 && fx <= 1 && fy >= 0 && fy <= 1;
            if (!inFrame) {
              it._outOfFrame = true;
              return;
            }
            if (it._outOfFrame) {
              it._outOfFrame = false;
              _segmentFrameLassoFill(it);
            }
          }
        }
        if (appendLassoPoint(it, sp, performance.now())) changed = true;
      });
      if (changed) {
        const targetDescriptor = getActivePaintTargetDescriptor(it);
        if (targetDescriptor) editor.paintEngine.updateActiveStroke(it.stroke, targetDescriptor);
        requestDraw({ localOnly: true });
      }
      return;
    }

    if (it.kind === "view") {
      const now = performance.now();
      const dragPos = editor.mode === "unwrap" ? p : screenPosCss(e);
      viewController.moveDrag(dragPos.x, dragPos.y, editor.mode === "unwrap" ? "unwrap" : "pano", now);
      it.lastTs = now;
      it.last = dragPos;
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "pan_frame") {
      const layout = getFrameViewLayout(it.shot);
      if (!layout || !it.shot) return;
      const invertX = state.ui_settings?.invert_view_x ? -1 : 1;
      const invertY = state.ui_settings?.invert_view_y ? -1 : 1;
      const dx = (p.x - it.last.x) * invertX;
      const dy = (p.y - it.last.y) * invertY;
      const focal = Math.max(1, Number(layout.focalPx || 1));
      // Screen delta -> film-plane tangent delta, then undo roll so the drag is
      // expressed in the camera's unrolled axes. Without this a rolled shot
      // rotates along the wrong screen direction.
      const rollRad = Number(it.shot.roll_deg ?? it.shot.rot_deg ?? 0) * DEG2RAD;
      const cosRoll = Math.cos(rollRad);
      const sinRoll = Math.sin(rollRad);
      const tanX = dx / focal;
      const tanY = -dy / focal;
      const unrolledX = tanX * cosRoll - tanY * sinRoll;
      const unrolledY = tanX * sinRoll + tanY * cosRoll;
      // Yaw is measured around world up, so a horizontal move covers more yaw
      // the further the camera is pitched. Floor the divisor to keep the drag
      // usable near the poles.
      const pitchRad = Number(it.shot.pitch_deg || 0) * DEG2RAD;
      const cosPitch = Math.max(0.25, Math.abs(Math.cos(pitchRad)));
      it.shot.yaw_deg = wrapYaw(
        Number(it.shot.yaw_deg || 0) - (Math.atan(unrolledX) / cosPitch) * RAD2DEG,
      );
      it.shot.pitch_deg = clamp(
        Number(it.shot.pitch_deg || 0) - Math.atan(unrolledY) * RAD2DEG,
        -90,
        90,
      );
      it.changed = it.changed || Math.abs(dx) > 0 || Math.abs(dy) > 0;
      it.last = p;
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "roll_frame") {
      if (it.source === "knob") return;
      const angle = Math.atan2(p.y - it.center.y, p.x - it.center.x);
      applyRollInteractionAngle(it, angle, e);
      return;
    }

    if (it.kind === "move") {
      const tx = p.x - it.offset.x;
      const ty = p.y - it.offset.y;
      if (editor.mode === "frame" && type === "cutout") {
        const shot = getActiveCutoutShot();
        const rect = getFrameViewRect(shot);
        if (!shot || !rect) return;
        const framePoint = {
          x: clamp((tx - rect.x) / Math.max(1, rect.w), 0, 1),
          y: clamp((ty - rect.y) / Math.max(1, rect.h), 0, 1),
        };
        const dir = frameLocalPointToWorldDir(shot, framePoint);
        if (!dir) return;
        const yp = dirToYawPitch(dir);
        it.item.yaw_deg = yp.yaw;
        it.item.pitch_deg = yp.pitch;
      } else if (editor.mode === "unwrap") {
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
      if (isStickerItem(it.item)) {
        markObjectVisualsDirty();
      }
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "move_stroke_group") {
      const currentUv = editor.mode === "frame"
        ? (() => {
          const shot = getActiveCutoutShot();
          return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
        })()
        : screenPosToErpPoint(p, performance.now());
      if (!currentUv || !it.startUv) return;
      const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(it.startUv.u || 0));
      const dv = Number(currentUv.v || 0) - Number(it.startUv.v || 0);
      if (applyStrokeGroupOffset(it.item?.actionGroupId, du, dv, it.snapshot, it.item?.layerKind, it.frameSnapshot)) {
        markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
        requestDraw({ localOnly: true });
      }
      return;
    }

    if (it.kind === "move_raster_object") {
      const currentUv = editor.mode === "frame"
        ? (() => {
          const shot = getActiveCutoutShot();
          return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
        })()
        : screenPosToErpPoint(p, performance.now());
      if (!currentUv || !it.startUv) return;
      const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(it.startUv.u || 0));
      const dv = Number(currentUv.v || 0) - Number(it.startUv.v || 0);
      if (applyRasterObjectOffset(it.item?.rasterObjectId || it.item?.id || "", du, dv, it.snapshot)) {
        markPaintCompositeVisualsDirty();
        requestDraw({ localOnly: true });
      }
      return;
    }

    if (it.kind === "scale_raster_object") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / Math.max(1, Number(it.startDist || 1));
      if (applyRasterObjectTransform(it.item?.rasterObjectId || it.item?.id || "", ratio, it.snapshot)) {
        markPaintCompositeVisualsDirty();
        requestDraw({ localOnly: true });
      }
      return;
    }

    if (it.kind === "move_multi") {
      const tx = p.x - Number(it.offset?.x || 0);
      const ty = p.y - Number(it.offset?.y || 0);
      let changed = false;
      let paintStrokeChanged = false;
      let rasterChanged = false;
      const dx = tx - Number(it.startCenter?.x || tx);
      const dy = ty - Number(it.startCenter?.y || ty);
      for (const snap of (Array.isArray(it.stickerSnapshots) ? it.stickerSnapshots : [])) {
        const sticker = (type === "cutout" ? getCutoutSelectableItems() : getList()).find((entry) => String(entry?.id || "") === String(snap.id || ""));
        if (!sticker || !isStickerItem(sticker)) continue;
        const targetScreen = {
          x: Number(snap.center?.x || 0) + dx,
          y: Number(snap.center?.y || 0) + dy,
        };
        if (editor.mode === "frame" && type === "cutout") {
          const shot = getActiveCutoutShot();
          const rect = getFrameViewRect(shot);
          if (!shot || !rect) continue;
          const framePoint = {
            x: clamp((targetScreen.x - rect.x) / Math.max(1, rect.w), 0, 1),
            y: clamp((targetScreen.y - rect.y) / Math.max(1, rect.h), 0, 1),
          };
          const dir = frameLocalPointToWorldDir(shot, framePoint);
          if (!dir) continue;
          const yp = dirToYawPitch(dir);
          sticker.yaw_deg = yp.yaw;
          sticker.pitch_deg = yp.pitch;
        } else if (editor.mode === "unwrap") {
          const r = getUnwrapRect();
          const nx = clamp((targetScreen.x - r.x) / Math.max(r.w, 1), 0, 1);
          const ny = clamp((targetScreen.y - r.y) / Math.max(r.h, 1), 0, 1);
          sticker.yaw_deg = wrapYaw(nx * 360 - 180);
          sticker.pitch_deg = clamp(90 - ny * 180, -90, 90);
        } else {
          const dir = screenToWorldDir(targetScreen.x, targetScreen.y);
          const yp = dirToYawPitch(dir);
          sticker.yaw_deg = yp.yaw;
          sticker.pitch_deg = yp.pitch;
        }
        changed = true;
      }
      for (const snap of (Array.isArray(it.strokeSnapshots) ? it.strokeSnapshots : [])) {
        const targetScreen = {
          x: Number(snap.center?.x || 0) + dx,
          y: Number(snap.center?.y || 0) + dy,
        };
        const currentUv = editor.mode === "frame"
          ? (() => {
            const shot = getActiveCutoutShot();
            return shot ? screenPosToFrameAsErpPoint(targetScreen, shot, performance.now()) : null;
          })()
          : screenPosToErpPoint(targetScreen, performance.now());
        const startUvForGroup = snap.centerUv || null;
        if (currentUv && startUvForGroup) {
          const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(startUvForGroup.u || 0));
          const dv = Number(currentUv.v || 0) - Number(startUvForGroup.v || 0);
          if (applyStrokeGroupOffset(snap.id, du, dv, snap.snapshot, snap.layerKind, snap.frameSnapshot)) {
            changed = true;
            paintStrokeChanged = true;
          }
        }
      }
      for (const snap of (Array.isArray(it.rasterSnapshots) ? it.rasterSnapshots : [])) {
        const targetScreen = {
          x: Number(snap.center?.x || 0) + dx,
          y: Number(snap.center?.y || 0) + dy,
        };
        const currentUv = editor.mode === "frame"
          ? (() => {
            const shot = getActiveCutoutShot();
            return shot ? screenPosToFrameAsErpPoint(targetScreen, shot, performance.now()) : null;
          })()
          : screenPosToErpPoint(targetScreen, performance.now());
        const startUvForObject = snap.centerUv || null;
        if (currentUv && startUvForObject) {
          const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(startUvForObject.u || 0));
          const dv = Number(currentUv.v || 0) - Number(startUvForObject.v || 0);
          if (applyRasterObjectOffset(snap.id, du, dv, snap.snapshot)) {
            changed = true;
            rasterChanged = true;
          }
        }
      }
      if (changed) {
        if (paintStrokeChanged) {
          markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
        } else if (rasterChanged) {
          markPaintCompositeVisualsDirty();
        } else {
          markObjectVisualsDirty();
        }
        requestDraw({ localOnly: true });
      }
      return;
    }

    if (it.kind === "scale_stroke_group") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / Math.max(1, Number(it.startDist || 1));
      if (applyStrokeGroupTransform(it.item?.actionGroupId, ratio, 0, it.snapshot, it.item?.layerKind, it.frameSnapshot)) {
        markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
        requestDraw({ localOnly: true });
      }
      return;
    }

    if (it.kind === "rotate_stroke_group") {
      let delta = (Math.atan2(p.y - it.center.y, p.x - it.center.x) - Number(it.startAng || 0)) * RAD2DEG;
      if (e.shiftKey) delta = Math.round(delta / 45) * 45;
      if (applyStrokeGroupTransform(it.item?.actionGroupId, 1, delta, it.snapshot, it.item?.layerKind, it.frameSnapshot)) {
        markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
        requestDraw({ localOnly: true });
      }
      return;
    }

    if (it.kind === "marquee_select") {
      it.current = p;
      requestDraw({ localOnly: true });
      return;
    }


    if (it.kind === "scale") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / it.startDist;
      it.item.hFOV_deg = clamp(it.startHFOV * ratio, 1, 179);
      it.item.vFOV_deg = clamp(it.startVFOV * ratio, 1, 179);
      it.item.aspect_id = deriveCutoutAspectLabelFromFov(it.item);
      if (isStickerItem(it.item)) markObjectVisualsDirty();
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "scale_x") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / it.startDist;
      it.item.hFOV_deg = clamp(it.startHFOV * ratio, 1, 179);
      it.item.aspect_id = deriveCutoutAspectLabelFromFov(it.item);
      if (isStickerItem(it.item)) markObjectVisualsDirty();
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "scale_y") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / it.startDist;
      it.item.vFOV_deg = clamp(it.startVFOV * ratio, 1, 179);
      it.item.aspect_id = deriveCutoutAspectLabelFromFov(it.item);
      if (isStickerItem(it.item)) markObjectVisualsDirty();
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "rotate") {
      const a = Math.atan2(p.y - it.center.y, p.x - it.center.x);
      let delta = (a - it.startAng) * RAD2DEG;
      let out = it.startRot - delta;
      if (e.shiftKey) out = Math.round(out / 45) * 45;
      const key = isStickerItem(it.item) ? "rot_deg" : "roll_deg";
      it.item[key] = out;
      if (isStickerItem(it.item)) markObjectVisualsDirty();
      requestDraw({ localOnly: true });
    }
  };

  canvas.onpointerup = () => {
    const ended = editor.interaction;
    if (ended?.kind === "roll_frame" && ended.source === "knob") return;
    if (editor.interaction?.kind === "paint_stroke" || editor.interaction?.kind === "paint_lasso_fill") {
      invalidateLivePaintPreviewCaches();
      const didCommit = commitPaintInteraction(editor.interaction);
      // _hasCommittedSegments: set when frame boundary segmented a stroke mid-drag.
      // Even if the final segment is empty (pointer ended outside frame), we still need
      // to push history for the previously committed inside-frame segments.
      const hadSegments = Boolean(editor.interaction._hasCommittedSegments);
      if (didCommit || hadSegments) {
        markPaintStrokeVisualsDirty();
        // Invalidate the persistent frame so objectGeom() recomputes bbox on next select.
        const committedGroupId = String(editor.interaction.stroke?.actionGroupId || "").trim();
        if (committedGroupId) {
          const grpEntry = getPaintingGroupList().find((g) => String(g?.actionGroupId || "") === committedGroupId);
          if (grpEntry) grpEntry.frame = null;
        }
        const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
        if (targetDescriptor) {
          if (!didCommit) {
            // Final segment was empty (stroke ended outside frame); cancel engine stroke.
            editor.paintEngine.cancelActiveStroke(targetDescriptor);
          } else if (String(editor.interaction.stroke?.toolKind || "") === "eraser") {
            editor.paintEngine.cancelActiveStroke(targetDescriptor);
            refreshPaintEngineRevisionCache();
          } else {
            editor.paintEngine.commitActiveStroke(editor.interaction.stroke, targetDescriptor);
          }
        }
        pushHistory();
        commitState();
        updateSidePanel();
        updateSelectionMenu();
        node.setDirtyCanvas(true, true);
        requestDraw();
      } else {
        const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
        if (targetDescriptor) editor.paintEngine.cancelActiveStroke(targetDescriptor);
      }
    } else if (editor.interaction?.kind === "marquee_select") {
      const rect = rectFromPoints(editor.interaction.start, editor.interaction.current);
      const pool = [
        ...(type === "cutout"
          ? getCutoutSelectableItemsForHit().filter((item) => !isShotItem(item))
          : [...getList()]),
        ...getSelectableStrokeGroupItems(),
        ...getSelectableRasterObjectItems(),
      ];
      const hits = pool.filter((item) => rectIntersectsGeom(rect, objectGeom(item)));
      setSelectedItems(hits, hits[hits.length - 1]?.id || null);
      if (type === "cutout" && hits.length) editor.cutoutAspectOpen = false;
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
    } else if (editor.interaction?.kind === "pan_frame" || editor.interaction?.kind === "roll_frame") {
      if (editor.interaction.changed) {
        pushHistory();
        commitAndRefreshNode();
        updateSidePanel();
      }
    } else if (editor.interaction && editor.interaction.kind !== "view") {
      let compositeChanged = false;
      if (editor.interaction.kind === "move_stroke_group"
        || editor.interaction.kind === "scale_stroke_group"
        || editor.interaction.kind === "rotate_stroke_group") {
        compositeChanged = true;
      }
      if (editor.interaction.kind === "move_raster_object" || editor.interaction.kind === "scale_raster_object") {
        compositeChanged = true;
      }
      if (editor.interaction.kind === "move_multi" && Array.isArray(editor.interaction.strokeSnapshots) && editor.interaction.strokeSnapshots.length) {
        compositeChanged = true;
      }
      if (editor.interaction.kind === "move_multi" && Array.isArray(editor.interaction.rasterSnapshots) && editor.interaction.rasterSnapshots.length) {
        compositeChanged = true;
      }
      if (compositeChanged) {
        const strokeDragKinds = ["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"];
        const isStrokeDrag = strokeDragKinds.includes(editor.interaction.kind)
          || (editor.interaction.kind === "move_multi" && Array.isArray(editor.interaction.strokeSnapshots) && editor.interaction.strokeSnapshots.length);
        if (isStrokeDrag) {
          markPaintStrokeVisualsDirty({ rebuildPaintEngine: true });
        } else {
          markPaintCompositeVisualsDirty();
        }
      }
      pushHistory();
      commitState();
      node.setDirtyCanvas(true, true);
      syncSidePanelControls();
      editor.hqFrames = 1;
      updateSelectionMenu();
      requestDraw();
    }
    editor.interaction = null;
    if (ended?.kind === "roll_frame") hideTooltip();
    invalidateLivePaintPreviewCaches();
    if (ended && ended.kind === "view") {
      viewController.endDrag(performance.now());
    }
    syncViewToggleState();
    updateSelectionMenu();
    updateCursor(editor.pointerPos);
    requestDraw();
  };

  canvas.onpointercancel = () => {
    if (cancelFrameCameraGesture()) return;
    if (editor.interaction?.kind === "view") {
      viewController.endDrag(performance.now());
    }
    if (editor.interaction?.kind === "paint_stroke" || editor.interaction?.kind === "paint_lasso_fill") {
      invalidateLivePaintPreviewCaches();
      const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
      if (targetDescriptor) editor.paintEngine.cancelActiveStroke(targetDescriptor);
    }
    editor.interaction = null;
    invalidateLivePaintPreviewCaches();
    syncViewToggleState();
    updateCursor(editor.pointerPos);
    requestDraw({ localOnly: true });
  };
  canvas.onlostpointercapture = () => {
    cancelFrameCameraGesture();
  };

  canvas.onauxclick = (e) => {
    if (e.button === 1) e.preventDefault();
  };

  canvas.onmousemove = (e) => {
    const p = screenPos(e);
    const pointerChanged = setPointerPos(p, true);
    if (editor.interaction) return;
    updateCursor(p);
    if (pointerChanged && editor.mode === "frame" && editor.primaryTool === "cursor") {
      requestDraw({ localOnly: true });
    }
  };

  canvas.onmouseleave = () => {
    setPointerPos(editor.pointerPos, false);
    updateCursor(editor.pointerPos);
    if (editor.mode === "frame" && editor.primaryTool === "cursor") requestDraw({ localOnly: true });
  };

  canvas.onwheel = (e) => {
    if (editor.mode === "frame") {
      const p = screenPos(e);
      const factor = e.deltaY < 0 ? 1.1 : (1 / 1.1);
      if (zoomFrameViewAt(p, factor)) requestDraw({ localOnly: true });
      e.preventDefault();
      return;
    }
    if (editor.mode !== "pano") return;
    if (viewController.applyWheelEvent(e)) requestDraw({ localOnly: true });
    e.preventDefault();
  };

  canvas.ondragover = (e) => {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    e.preventDefault();
    setDropCue(true);
  };

  canvas.ondrop = (e) => {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
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
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    if (!dragHasImageFiles(e)) return;
    dragCue.depth += 1;
    setDropCue(true);
    e.preventDefault();
  };
  const onWindowDragOver = (e) => {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    if (!dragCue.active && dragHasImageFiles(e)) setDropCue(true);
    if (dragCue.active) e.preventDefault();
  };
  const onWindowDragLeave = (e) => {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    if (!dragCue.active) return;
    dragCue.depth = Math.max(0, dragCue.depth - 1);
    const leftWindow = (Number(e.clientX) <= 0 && Number(e.clientY) <= 0);
    if (dragCue.depth === 0 || leftWindow) setDropCue(false);
  };
  const onWindowDrop = (e) => {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    dragCue.depth = 0;
    setDropCue(false);
    if (dragHasImageFiles(e)) e.preventDefault();
  };
  window.addEventListener("dragenter", onWindowDragEnter, true);
  window.addEventListener("dragover", onWindowDragOver, true);
  window.addEventListener("dragleave", onWindowDragLeave, true);
  window.addEventListener("drop", onWindowDrop, true);

  function syncUndoRedoButtons() {
    const { canUndo, canRedo } = getHistoryCapabilities();
    patchUiButton(uiState.toolButtons, "value", "undo", { disabled: !canUndo });
    patchUiButton(uiState.toolButtons, "value", "redo", { disabled: !canRedo });
  };
  const applySidePanelParam = (key, rawValue, commit = false) => {
    const frameInspectorShot = type === "cutout" && editor.mode === "frame" ? getActiveCutoutShot() : null;
    const selected = frameInspectorShot || getSelected();
    const selectedKind = frameInspectorShot ? "shot" : getSelectedKind();
    if (!selected || selectedKind === "stroke") return;
    const param = (uiState.sidePanel?.params || []).find((item) => item.key === key);
    if (!param || param.enabled === false) return;
    let out = Number(rawValue);
    if (Number.isNaN(out)) out = 0;
    out = clamp(out, Number(param.min), Number(param.max));
    if (key === "yaw_deg") out = wrapYaw(out);
    selected[key] = out;
    if (type === "cutout" && (key === "hFOV_deg" || key === "vFOV_deg")) {
      selected.aspect_id = deriveCutoutAspectLabelFromFov(selected);
    }
    updateSidePanel();
    requestDraw();
    if (commit) pushHistory();
  };
  side?.addEventListener("click", async (ev) => {
    const target = ev.target.closest("[data-action]");
    if (!target) return;
    const action = String(target.getAttribute("data-action") || "");
    if (action === "coverage-set") {
      const nextCoverage = normalizeCoverageValue(target.getAttribute("data-coverage"));
      if (nextCoverage === normalizeCoverageValue(state.coverage)) return;
      state.coverage = nextCoverage;
      editor.coverage = nextCoverage;
      if (coverageWidget) {
        coverageWidget.value = String(nextCoverage);
      }
      if (previewMode) {
        runtime.backgroundDirty = true;
      } else {
        commitState();
        syncCoverageChangeToNodePreviews({
          syncPreview: type !== "cutout",
          syncGraph: type !== "cutout",
        });
      }
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (action === "toggle-selection-picker") {
      if (uiState.sidePanel?.selectionPicker?.disabled) return;
      uiState.sidePanel.selectionPicker.open = !uiState.sidePanel.selectionPicker.open;
      return;
    }
    if (action === "select-picker-item") {
      uiState.sidePanel.selectionPicker.open = false;
      const selectedId = String(target.getAttribute("data-selection-id") || "");
      let nextItem = null;
      if (selectedId) {
        if (type === "stickers") nextItem = getList().find((item) => String(item?.id || "") === selectedId) || null;
        else nextItem = getCutoutInspectorItems().find((entry) => String(entry?.item?.id || "") === selectedId)?.item || null;
      }
      setSelectedItem(nextItem || null);
      if (nextItem && !isStrokeGroupItem(nextItem)) {
        startViewTween(
          wrapYaw(Number(nextItem.yaw_deg || 0)),
          clamp(Number(nextItem.pitch_deg || 0), -89.9, 89.9),
          editor.viewFov,
        );
      }
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (action === "copy-state-inline") {
      const selected = getSelected();
      const selectedKind = getSelectedKind();
      if (!selected || selectedKind === "stroke" || getSelectedItems().length > 1) return;
      const text = JSON.stringify(type === "cutout" && selectedKind !== "image"
        ? buildCanonicalCutoutStickerState(selected)
        : buildCanonicalSelectedStickerState(selected));
      try {
        await navigator.clipboard.writeText(text);
        if (uiState.sidePanel?.copyStateButton) {
          uiState.sidePanel.copyStateButton.label = "Copied";
          window.setTimeout(() => {
            if (uiState.sidePanel?.copyStateButton) uiState.sidePanel.copyStateButton.label = "Copy State";
          }, 900);
        }
      } catch {
        // ignore clipboard failures
      }
      return;
    }
    if (action === "toggle-visibility") {
      const key = String(target.getAttribute("data-visibility") || "");
      if (key === "panorama") editor.showPanorama = !editor.showPanorama;
      else if (key === "objects") editor.showObjects = !editor.showObjects;
      else if (key === "mask") editor.showMask = !editor.showMask;
      updateSidePanel();
      requestDraw();
      return;
    }
    if (action === "set-invert-x") {
      state.ui_settings.invert_view_x = target.getAttribute("data-value") === "1";
      persistUiSettings();
      updateSidePanel();
      node.setDirtyCanvas?.(true, true);
      requestDraw();
      return;
    }
    if (action === "set-invert-y") {
      state.ui_settings.invert_view_y = target.getAttribute("data-value") === "1";
      persistUiSettings();
      updateSidePanel();
      node.setDirtyCanvas?.(true, true);
      requestDraw();
      return;
    }
    if (action === "toggle-quality-picker") {
      if (uiState.sidePanel?.uiSettings) uiState.sidePanel.uiSettings.qualityOpen = !uiState.sidePanel.uiSettings.qualityOpen;
      return;
    }
    if (action === "set-quality") {
      const q = String(target.getAttribute("data-quality") || "balanced");
      state.ui_settings.preview_quality = (q === "draft" || q === "high") ? q : "balanced";
      persistUiSettings();
      updateSidePanel();
      node.setDirtyCanvas?.(true, true);
      requestDraw();
      return;
    }
    if (action === "ui-reset-defaults") {
      state.ui_settings.invert_view_x = false;
      state.ui_settings.invert_view_y = false;
      state.ui_settings.preview_quality = "balanced";
      persistUiSettings();
      updateSidePanel();
      node.setDirtyCanvas?.(true, true);
      requestDraw();
      return;
    }
    if (action === "close-preview") {
      void closeEditor();
      return;
    }
    if (action === "cancel-close") {
      void closeEditor();
      return;
    }
    if (action === "save-close") {
      apply();
      void closeEditor();
    }
  });
  side?.addEventListener("input", (ev) => {
    const target = ev.target.closest("[data-action='param-input']");
    if (!target) return;
    applySidePanelParam(String(target.getAttribute("data-param-key") || ""), target.value, false);
  });
  side?.addEventListener("change", (ev) => {
    const target = ev.target.closest("[data-action='param-input']");
    if (!target) return;
    applySidePanelParam(String(target.getAttribute("data-param-key") || ""), target.value, true);
  });
  const syncGridToggleButton = () => syncFloatingViewButtonState();
  syncGridToggleButton();
  root.addEventListener("click", (ev) => {
    if (ev.target?.matches?.("[data-confirm-overlay]")) {
      const resolver = uiState.confirmDialog?.resolve;
      uiState.confirmDialog = { visible: false, title: "", text: "", confirmLabel: "Confirm", resolve: null };
      resolver?.(false);
      return;
    }
    const viewTarget = ev.target.closest("[data-view]");
    if (viewTarget) {
      if (viewTarget.disabled) return;
      const previousMode = editor.mode;
      editor.mode = String(viewTarget.getAttribute("data-view") || "pano");
      if (type === "cutout" && editor.mode === "frame") {
        if (previousMode !== "frame") runtime.frameSafeRect = null;
        updateSidePanel();
        updateSelectionMenu();
      }
      forceCursorTool();
      syncViewToggleState();
      requestDraw();
      return;
    }
    const actionTarget = ev.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (actionTarget && !readOnly) {
      if (actionTarget.matches("[data-tool-mode]")) {
        const newTool = String(actionTarget.getAttribute("data-tool-mode") || "cursor");
        editor.primaryTool = newTool;
        if (newTool === "paint" || newTool === "mask") clearSelection({ preservePanelValues: true });
        syncPaintUi();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (actionTarget.matches("[data-tool-ui-action]")) {
        const action = String(actionTarget.getAttribute("data-tool-ui-action") || "");
        if ((action === "undo" || action === "redo") && actionTarget.disabled) return;
        if (action === "undo") restoreHistory(-1);
        else if (action === "redo") restoreHistory(1);
        else if (action === "clear") clearAll();
        else if (action === "add" || action === "add-image") addImageSticker();
        else if (action === "add-or-look") addCutoutFrame();
        return;
      }
      if (actionTarget.matches("[data-paint-tool]")) {
        editor.primaryTool = "paint";
        const tool = String(actionTarget.getAttribute("data-paint-tool") || "pen");
        editor.paintTool = tool;
        clearSelection({ preservePanelValues: true });
        if (BRUSH_PRESETS[tool]) editor.activeBrushPresetId = tool;
        syncPaintUi();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (actionTarget.matches("[data-mask-tool]")) {
        editor.primaryTool = "mask";
        editor.maskTool = String(actionTarget.getAttribute("data-mask-tool") || "pen");
        clearSelection({ preservePanelValues: true });
        syncPaintUi();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (actionTarget.matches("[data-paint-layer-clear-current]")) {
        const layerKind = String(actionTarget.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        clearPaintingLayer(layerKind);
        return;
      }
      if (actionTarget.matches("[data-paint-color-swatch]")) {
        const swatch = PAINT_COLOR_SWATCHES.find((item) => item.id === actionTarget.getAttribute("data-paint-color-swatch"));
        if (!swatch) return;
        editor.paintColor = cloneColor(swatch.color);
        closePaintColorPop(true);
        syncPaintUi();
        return;
      }
      if (actionTarget.matches("[data-paint-color-custom]")) {
        ev.preventDefault();
        ev.stopPropagation();
        if (paintColorPop && !paintColorPop.hidden) closePaintColorPop(true);
        else openPaintColorPop();
        syncPaintUi();
        return;
      }
    }
    const action = String(actionTarget?.getAttribute?.("data-action") || "");
    if (action === "video-play-toggle") {
      ev.preventDefault();
      ev.stopPropagation();
      if (!(videoEl instanceof HTMLVideoElement)) return;
      refreshModalVideoSource();
      if (videoEl.paused) {
        videoState.mode = "playback";
        videoState.pendingPlaybackResume = false;
        videoState.resumeAfterScrub = false;
        const duration = Number(uiState.videoTransport.duration || videoEl.duration || 0);
        const currentTime = Number(videoEl.currentTime || videoState.editorTime || 0);
        const restartFrom = (duration > 0 && currentTime >= (duration - 0.001)) ? 0 : Number(videoState.editorTime || currentTime || 0);
        const playSeekTolerance = Math.max(frameTolerance(), 0.04);
        videoState.editorTime = restartFrom;
        if (Math.abs(currentTime - restartFrom) > playSeekTolerance) {
          videoState.seeking = false;
          videoState.pendingPlaybackResume = true;
          issueVideoSeek(restartFrom);
        } else {
          void videoEl.play().catch(() => {});
        }
      } else {
        videoEl.pause();
        videoState.mode = "scrub";
        videoState.resumeAfterScrub = false;
        videoState.pendingPlaybackResume = false;
        videoState.editorTime = Number(videoEl.currentTime || 0);
        captureStillFrameFromVideo();
      }
      syncVideoTransportState({
        ready: !!videoEl.getAttribute("src"),
        playing: !videoEl.paused && !videoEl.ended,
        visible: getVideoTransportVisible(),
        currentTime: videoState.editorTime,
        duration: uiState.videoTransport.duration,
        frameCount: uiState.videoTransport.frameCount,
        fps: uiState.videoTransport.fps,
        mode: videoState.mode,
      });
      requestDraw({ cause: "frame_view", localOnly: true });
      return;
    }
    if (action === "video-audio-toggle") {
      ev.preventDefault();
      ev.stopPropagation();
      if (!(videoEl instanceof HTMLVideoElement)) return;
      if (!uiState.videoTransport.hasAudio) return;
      const nextMuted = !videoEl.muted;
      videoEl.muted = nextMuted;
      if (!nextMuted && Number(videoEl.volume || 0) <= 0) {
        videoEl.volume = Math.max(0.01, Number(uiState.videoTransport.volume || 1));
      }
      syncVideoTransportState({
        ready: !!videoEl.getAttribute("src"),
        playing: !videoEl.paused && !videoEl.ended,
        visible: getVideoTransportVisible(),
        currentTime: videoState.editorTime,
        duration: uiState.videoTransport.duration,
        frameCount: uiState.videoTransport.frameCount,
        fps: uiState.videoTransport.fps,
        mode: videoState.mode,
        hasAudio: uiState.videoTransport.hasAudio,
        muted: videoEl.muted,
        volume: Number(videoEl.volume ?? uiState.videoTransport.volume ?? 1),
      });
      if (typeof actionTarget?.blur === "function") actionTarget.blur();
      return;
    }
    if (action === "video-loop-toggle") {
      ev.preventDefault();
      ev.stopPropagation();
      if (!(videoEl instanceof HTMLVideoElement)) return;
      const nextLoop = !uiState.videoTransport.loop;
      uiState.videoTransport.loop = nextLoop;
      videoEl.loop = nextLoop;
      syncVideoTransportState({
        ready: !!videoEl.getAttribute("src"),
        playing: !videoEl.paused && !videoEl.ended,
        visible: getVideoTransportVisible(),
        currentTime: videoState.editorTime,
        duration: uiState.videoTransport.duration,
        frameCount: uiState.videoTransport.frameCount,
        fps: uiState.videoTransport.fps,
        mode: videoState.mode,
        hasAudio: uiState.videoTransport.hasAudio,
        loop: nextLoop,
        muted: videoEl.muted,
        volume: Number(videoEl.volume ?? uiState.videoTransport.volume ?? 1),
      });
      if (typeof actionTarget?.blur === "function") actionTarget.blur();
      return;
    }
    if (!readOnly) {
      if (action === "frame-aspect") {
        uiState.frameRail.aspectOpen = !uiState.frameRail.aspectOpen;
        return;
      }
      if (action === "frame-aspect-set") {
        const shot = editor.mode === "frame" ? getActiveCutoutShot() : null;
        if (!shot) return;
        applyCutoutAspect(shot, String(actionTarget.getAttribute("data-aspect") || "1:1"));
        uiState.frameRail.aspectOpen = false;
        syncSidePanelControls();
        pushHistory();
        commitAndRefreshNode();
        syncViewToggleState();
        requestDraw();
        return;
      }
      if (action === "frame-rotate-90") {
        const shot = editor.mode === "frame" ? getActiveCutoutShot() : null;
        if (!shot) return;
        rotateCutoutAspect90(shot);
        uiState.frameRail.aspectOpen = false;
        syncSidePanelControls();
        pushHistory();
        commitAndRefreshNode();
        syncViewToggleState();
        requestDraw();
        return;
      }
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
        const aspect = String(actionTarget.getAttribute("data-aspect") || "1:1");
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
      if (action === "replace-image") {
        replaceSelectedImage();
        return;
      }
      if (action === "toggle-lock") {
        toggleSelectedLock();
        return;
      }
      if (action === "back-initial") {
        restoreSelectedToInitialPose();
        return;
      }
      if (action === "toggle-visible") {
        toggleSelectedExternalStickerVisibility();
        return;
      }
      if (action === "delete") {
        deleteSelected();
        return;
      }
    }
    if (action === "reset-view") {
      if (editor.mode === "frame") return;
      startViewTween(0, 0, 100, 180, 680);
      return;
    }
    if (action === "toggle-grid") {
      if (editor.mode === "frame") return;
      editor.showGrid = !editor.showGrid;
      setNodeGridVisibility(node?.id, editor.showGrid);
      syncGridToggleButton();
      requestDraw();
      return;
    }
    if (action === "toggle-fullscreen") {
      ev.preventDefault();
      ev.stopPropagation();
      toggleFullscreen();
      return;
    }
    if (action === "toggle-output-preview-size") {
      ev.preventDefault();
      ev.stopPropagation();
      const nextExpanded = !editor.outputPreviewExpanded;
      editor.outputPreviewExpanded = nextExpanded;
      editor.outputPreviewAnimFrom = editor.outputPreviewAnim;
      editor.outputPreviewAnimTo = nextExpanded ? 1 : 0;
      editor.outputPreviewAnimStartTs = performance.now();
      syncOutputPreviewToggleButton();
      requestDraw();
      return;
    }
    const historyBtn = ev.target.closest("[data-paint-history-index]");
    if (!historyBtn) return;
    const idx = Number(historyBtn.getAttribute("data-paint-history-index"));
    const color = editor.customPaintHistory[idx];
    if (!color) return;
    editor.customPaintColor = cloneColor(color);
    editor.paintColor = cloneColor(color);
    syncPaintUi();
  });
  root.addEventListener("input", (ev) => {
    const videoSeek = ev.target.closest("[data-video-seek]");
    if (videoSeek) {
      if (!(videoEl instanceof HTMLVideoElement)) return;
      refreshModalVideoSource();
      const nextTime = clamp(Number(videoSeek.value || 0), 0, Number(uiState.videoTransport.duration || 0));
      videoState.mode = "scrub";
      if (!videoState.seeking && !videoEl.paused && !videoEl.ended) {
        videoState.resumeAfterScrub = true;
        videoEl.pause();
      }
      videoState.editorTime = nextTime;
      presentCachedFrameForTime(nextTime);
      syncVideoTransportState({
        ready: !!videoEl.getAttribute("src"),
        playing: false,
        visible: getVideoTransportVisible(),
        currentTime: nextTime,
        duration: uiState.videoTransport.duration,
        frameCount: uiState.videoTransport.frameCount,
        fps: uiState.videoTransport.fps,
        mode: "scrub",
      });
      if (Number(stillCanvas.__panoFrameIdx || 0) > 0) {
        runtime.backgroundDirty = true;
        runtime.dirty = true;
        requestDraw({ cause: "frame_view", localOnly: true });
      }
      issueVideoSeek(nextTime);
      return;
    }
    const videoVolume = ev.target.closest("[data-video-volume]");
    if (videoVolume) {
      if (!(videoEl instanceof HTMLVideoElement)) return;
      const nextVolume = clamp(Number(videoVolume.value || 0), 0, 1);
      videoEl.volume = nextVolume;
      videoEl.muted = nextVolume <= 0.0001;
      syncVideoTransportState({
        ready: !!videoEl.getAttribute("src"),
        playing: !videoEl.paused && !videoEl.ended,
        visible: getVideoTransportVisible(),
        currentTime: videoState.editorTime,
        duration: uiState.videoTransport.duration,
        frameCount: uiState.videoTransport.frameCount,
        fps: uiState.videoTransport.fps,
        mode: videoState.mode,
        hasAudio: uiState.videoTransport.hasAudio,
        muted: videoEl.muted,
        volume: nextVolume,
      });
      return;
    }
    const slider = ev.target.closest("[data-paint-size-slider]");
    if (slider) {
      if (slider.disabled) return;
      const v = Math.max(1, Math.min(120, Math.round(Number(slider.value))));
      const sizePresetId = getBrushPresetIdForTool(editor.primaryTool === "paint" ? editor.paintTool : editor.maskTool);
      editor.brushSizes[sizePresetId] = v;
      syncPaintUi();
      showPaintSizePreview();
      return;
    }
    const alphaSlider = ev.target.closest("[data-paint-alpha-slider]");
    if (alphaSlider) {
      const next = { ...editor.customPaintColor, a: clamp(Number(alphaSlider.value) / 100, 0, 1) };
      editor.customPaintColor = cloneColor(next);
      editor.paintColor = cloneColor(next);
      syncPaintUi();
    }
  });
  root.addEventListener("change", (ev) => {
    if (ev.target.closest("[data-video-seek]")) {
      if (!(videoEl instanceof HTMLVideoElement)) return;
      videoState.pendingPlaybackResume = !!videoState.resumeAfterScrub;
      videoState.resumeAfterScrub = false;
      if (!videoState.pendingPlaybackResume) {
        videoState.mode = "scrub";
      }
      if (!videoState.seeking) {
        if (videoState.pendingPlaybackResume) {
          videoState.pendingPlaybackResume = false;
          videoState.mode = "playback";
          void videoEl.play().catch(() => {});
        } else {
          captureStillFrameFromVideo();
          requestDraw({ cause: "frame_view", localOnly: true });
        }
      }
      return;
    }
    if (ev.target.closest("[data-video-volume]")) {
      if (typeof ev.target?.blur === "function") ev.target.blur();
      return;
    }
    if (ev.target.closest("[data-paint-size-slider]")) hidePaintSizePreview();
  });
  root.addEventListener("pointerup", (ev) => {
    if (ev.target.closest("[data-video-volume]")) {
      if (typeof ev.target?.blur === "function") ev.target.blur();
      return;
    }
    if (ev.target.closest("[data-paint-size-slider]")) hidePaintSizePreview();
  });
  root.addEventListener("pointercancel", (ev) => {
    if (ev.target.closest("[data-video-volume]")) {
      if (typeof ev.target?.blur === "function") ev.target.blur();
      return;
    }
    if (ev.target.closest("[data-paint-size-slider]")) hidePaintSizePreview();
  });
  root.addEventListener("focusout", (ev) => {
    if (ev.target.closest("[data-paint-size-slider]")) hidePaintSizePreview();
  });
  root.addEventListener("pointerover", (ev) => {
    const target = ev.target.closest("[data-tip]");
    if (!target || !root.contains(target)) return;
    if (tooltip.target === target) return;
    tooltip.target = target;
    if (tooltip.timer) clearTimeout(tooltip.timer);
    tooltip.timer = window.setTimeout(() => {
      if (tooltip.target === target) showTooltipFor(target);
    }, 220);
  });
  root.addEventListener("pointerout", (ev) => {
    const target = ev.target.closest("[data-tip]");
    if (!target || tooltip.target !== target) return;
    const nextTarget = ev.relatedTarget instanceof Element ? ev.relatedTarget.closest?.("[data-tip]") : null;
    if (nextTarget === target) return;
    hideTooltip();
  });
  root.addEventListener("pointerdown", (event) => {
    if (!event.target.closest("[data-frame-roll-knob]")) hideTooltip();
  });
  const updatePaintColorFromSv = (clientX, clientY) => {
    if (!paintColorSv) return;
    const rect = paintColorSv.getBoundingClientRect();
    const sat = clamp((clientX - rect.left) / Math.max(1, rect.width), 0, 1);
    const val = 1 - clamp((clientY - rect.top) / Math.max(1, rect.height), 0, 1);
    const hsv = rgb01ToHsv(editor.customPaintColor);
    const next = { ...hsv01ToRgb(hsv.h, sat, val), a: Number(editor.customPaintColor?.a ?? 1) };
    editor.customPaintColor = cloneColor(next);
    editor.paintColor = cloneColor(next);
    syncPaintUi();
  };
  const updatePaintColorFromHue = (clientX) => {
    if (!paintHueStrip) return;
    const rect = paintHueStrip.getBoundingClientRect();
    const hue = clamp((clientX - rect.left) / Math.max(1, rect.width), 0, 1);
    const hsv = rgb01ToHsv(editor.customPaintColor);
    const next = { ...hsv01ToRgb(hue, hsv.s, hsv.v), a: Number(editor.customPaintColor?.a ?? 1) };
    editor.customPaintColor = cloneColor(next);
    editor.paintColor = cloneColor(next);
    syncPaintUi();
  };
  const bindDrag = (startEvent, onMove) => {
    const pointerId = startEvent.pointerId;
    onMove(startEvent);
    const handleMove = (moveEvent) => {
      if (moveEvent.pointerId !== pointerId) return;
      onMove(moveEvent);
    };
    const finish = (endEvent) => {
      if (endEvent.pointerId !== pointerId) return;
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", finish);
      window.removeEventListener("pointercancel", finish);
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", finish);
    window.addEventListener("pointercancel", finish);
  };
  if (paintColorSv) {
    paintColorSv.onpointerdown = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      bindDrag(ev, (moveEvent) => updatePaintColorFromSv(moveEvent.clientX, moveEvent.clientY));
    };
  }
  if (paintHueStrip) {
    paintHueStrip.onpointerdown = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      bindDrag(ev, (moveEvent) => updatePaintColorFromHue(moveEvent.clientX));
    };
  }
  root.addEventListener("click", (ev) => {
    const target = ev.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!target) return;
    const ok = target.getAttribute("data-action") === "confirm-accept";
    const resolver = uiState.confirmDialog?.resolve;
    uiState.confirmDialog = { visible: false, title: "", text: "", confirmLabel: "Confirm", resolve: null };
    resolver?.(ok);
  });
  const syncFullscreenButton = () => {
    const active = !!editor.fullscreen;
    patchUiButton(uiState.floatingButtons, "action", "toggle-fullscreen", {
      icon: active ? ICON.fullscreen_close : ICON.fullscreen,
      label: active ? "Exit Fullscreen" : "Fullscreen",
      tip: active ? "Exit fullscreen" : "Fullscreen",
    });
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
    queueVideoTransportLayout();
    requestDraw();
  };
  const isOverlayFullscreen = () => document.fullscreenElement === overlay;
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenEnabled) {
        setFullscreenState(!editor.fullscreen);
        return;
      }
      if (!isOverlayFullscreen()) {
        await overlay.requestFullscreen?.();
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
  syncFullscreenButton();
  const syncOutputPreviewToggleButton = () => {
    const expanded = !!editor.outputPreviewExpanded;
    uiState.outputPreviewToggle.icon = expanded ? ICON.fullscreen_close : ICON.fullscreen;
    uiState.outputPreviewToggle.label = expanded ? "Reduce Preview" : "Expand Preview";
    uiState.outputPreviewToggle.tip = expanded ? "Reduce preview" : "Expand preview";
  }
  syncOutputPreviewToggleButton();
  const modalPrevOnExecuted = node.onExecuted;
  const modalPrevOnConnectionsChange = node.onConnectionsChange;
  let modalOnExecuted = null;
  let modalOnConnectionsChange = null;
  let modalExternalStickerSync = null;
  if (!readOnly && type === "stickers") {
    modalExternalStickerSync = (reason = "sync") => {
      reconcileExternalStickerFromInputs(reason);
    };
    node.__panoExternalStickerSync = modalExternalStickerSync;
    modalOnExecuted = function onPanoEditorExecuted(...args) {
      if (typeof modalPrevOnExecuted === "function") {
        modalPrevOnExecuted.apply(this, args);
      }
      invalidateMediaUiImage(imageCache, EXTERNAL_STICKER_PREVIEW_KEY);
      this.__panoExternalStickerSync?.("executed");
    };
    node.onExecuted = modalOnExecuted;
    modalOnConnectionsChange = function onPanoEditorConnectionsChange(...args) {
      if (typeof modalPrevOnConnectionsChange === "function") {
        modalPrevOnConnectionsChange.apply(this, args);
      }
      this.__panoExternalStickerSync?.("connections");
    };
    node.onConnectionsChange = modalOnConnectionsChange;
  }
  if (!readOnly) {
    _paintLayerSyncRegistry.set(String(node.id ?? "0"), () => syncPaintingLayerAsync());
  }

  let closeEditorPromise = null;
  const closeEditor = async () => {
    if (closeEditorPromise) return closeEditorPromise;
    closeEditorPromise = (async () => {
      _paintLayerSyncRegistry.delete(String(node.id ?? "0"));
      flushFrameWheelCommit();
      if (!readOnly) commitState();
      if (document.fullscreenElement === overlay) {
        document.exitFullscreen?.().catch(() => { });
      }
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      node.__panoLiveStateOverride = null;
      node.__panoLivePaintSurface = null;
      if (node.__panoFlushStateBeforeQueue === flushStateBeforeQueue) {
        node.__panoFlushStateBeforeQueue = null;
      }
      node.__panoDomPreview?.requestDraw?.();
      node.graph?.setDirtyCanvas?.(true, true);
      app?.canvas?.setDirty?.(true, true);
      hideTooltip();
      stopRenderLoop();
      if (videoEl instanceof HTMLVideoElement) videoEl.pause();
      videoCleanupFns.forEach((fn) => {
        try { fn(); } catch { }
      });
      modalPanoCore?.dispose?.();
      cutoutPreviewMount?.unmount?.();
      cutoutPreviewCamera?.dispose?.();
      setDropCue(false);
      window.removeEventListener("keydown", onEscClose, true);
      window.removeEventListener("keydown", onDeleteKey, true);
      window.removeEventListener("keydown", onModifierKeyChange, true);
      window.removeEventListener("keyup", onModifierKeyChange, true);
      window.removeEventListener("blur", onWindowBlur);
      window.removeEventListener("keydown", onUndoRedoKey, true);
      window.removeEventListener("dragenter", onWindowDragEnter, true);
      window.removeEventListener("dragover", onWindowDragOver, true);
      window.removeEventListener("dragleave", onWindowDragLeave, true);
      window.removeEventListener("drop", onWindowDrop, true);
      if (!readOnly && type === "stickers") {
        if (node.onExecuted === modalOnExecuted) node.onExecuted = modalPrevOnExecuted;
        if (node.onConnectionsChange === modalOnConnectionsChange) node.onConnectionsChange = modalPrevOnConnectionsChange;
        if (node.__panoExternalStickerSync === modalExternalStickerSync) node.__panoExternalStickerSync = null;
      }
      vueApp.unmount();
      mountHost.remove();
      triggerBackgroundPersistenceOnClose();
      closeEditorPromise = null;
      return true;
    })().catch((error) => {
      console.error("[PanoramaCutoutSync] closeEditor failed", error);
      closeEditorPromise = null;
      return false;
    });
    return closeEditorPromise;
  };
  const onEscClose = (ev) => {
    if (ev.key !== "Escape") return;
    if (cancelFrameCameraGesture()) {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
      return;
    }
    if (editor.fullscreen && document.fullscreenElement === overlay) {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
      document.exitFullscreen?.().catch(() => { });
      return;
    }
    if (editor.fullscreen) {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
      setFullscreenState(false);
      return;
    }
    ev.preventDefault();
    ev.stopPropagation();
    ev.stopImmediatePropagation?.();
    void closeEditor();
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
  const onModifierKeyChange = (ev) => {
    const next = !!(ev.ctrlKey || ev.metaKey);
    const nextAlt = !!ev.altKey;
    if (editor.marqueeModifier === next && editor.altModifier === nextAlt) return;
    editor.marqueeModifier = next;
    editor.altModifier = nextAlt;
    syncFrameRollKnob();
    updateCursor(editor.pointerPos);
  };
  const onWindowBlur = () => {
    editor.marqueeModifier = false;
    editor.altModifier = false;
    syncFrameRollKnob();
    updateCursor(editor.pointerPos);
  };
  const onUndoRedoKey = (ev) => {
    if (readOnly) return;
    if (!ev.ctrlKey && !ev.metaKey) return;
    const key = String(ev.key || "").toLowerCase();
    const code = String(ev.code || "");
    if (key !== "z" && code !== "KeyZ") return;
    const t = ev.target;
    const tag = (t?.tagName || "").toUpperCase();
    if (tag === "INPUT" || tag === "TEXTAREA" || t?.isContentEditable) return;
    const { canUndo, canRedo } = getHistoryCapabilities();
    if ((ev.shiftKey && !canRedo) || (!ev.shiftKey && !canUndo)) return;
    restoreHistory(ev.shiftKey ? 1 : -1);
    ev.preventDefault();
    ev.stopPropagation();
  };
  window.addEventListener("keydown", onEscClose, true);
  window.addEventListener("keydown", onDeleteKey, true);
  window.addEventListener("keydown", onModifierKeyChange, true);
  window.addEventListener("keyup", onModifierKeyChange, true);
  window.addEventListener("blur", onWindowBlur);
  window.addEventListener("keydown", onUndoRedoKey, true);
  overlay.addEventListener("pointerdown", (ev) => {
    if (ev.target === overlay) void closeEditor();
  });

  function runBootStep(label, fn, { rollbackState = false } = {}) {
    let snapshot = "";
    try {
      if (rollbackState) snapshot = JSON.stringify(state);
      fn();
    } catch (error) {
      if (snapshot) {
        try {
          const restored = JSON.parse(snapshot);
          Object.keys(state).forEach((key) => delete state[key]);
          Object.assign(state, restored);
          if (!readOnly) commitState();
        } catch (restoreError) {
          console.error(`[PanoramaStickers] editor boot step "${label}" rollback failed`, restoreError);
        }
      }
      uiState.stageWarningDetail = `boot:${label}`;
      console.error(`[PanoramaStickers] editor boot step "${label}" failed`, error);
    }
  }

  runBootStep("cutout-focus", applyInitialCutoutFocus);
  if (!readOnly && type === "stickers") {
    runBootStep("external-sticker-sync", () => reconcileExternalStickerFromInputs("open"), { rollbackState: true });
  }
  void migrateLegacyEmbeddedAssets().catch((error) => {
    uiState.stageWarningDetail = "boot:asset-migration";
    console.error('[PanoramaStickers] editor boot step "asset-migration" failed', error);
  });
  runBootStep("history", pushHistory);
  runBootStep("undo-redo", syncUndoRedoButtons);
  runBootStep("paint-ui", syncPaintUi);
  runBootStep("side-panel", updateSidePanel);
  runBootStep("look-at-frame", syncLookAtFrameButtonState);
  runBootStep("video-source", refreshModalVideoSource);
  runBootStep("canvas-size", syncCanvasSize);
  runBootStep("cursor", () => updateCursor(editor.pointerPos));
  requestDraw();
  runtime.rafId = requestAnimationFrame(tick);
}

app.registerExtension(createPanoEditorExtension({
  app,
  openEditor: showEditor,
  attachStickers: attachStickersNodePreview,
  attachCutout: attachCutoutPreview,
  attachPreview: attachPreviewNode,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: ENABLE_STICKERS_NODE_PREVIEW,
}));
