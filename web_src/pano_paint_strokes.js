// The paint and mask strokes the editors record, below both UIs (docs/editor-architecture.md "Paint layers"): the
// colors the brushes offer, a stroke's record and its points, how a stroke rasterizes, the stroke groups and their
// z_index, committing a stroke to the painting (docs/scene-state-v2.md `painting`), and the paint eraser, which turns
// the paint it touches into raster objects. The old editor (editor/paint_strokes.js, paint_input.js, items.js) and the
// new UI's (studio/paint.js) record strokes through these, so both write the same painting. Pure except for the
// canvases a raster needs; the paint engine's pixels (pano_paint_engine.js) are the caller's.
import { BRUSH_PRESETS, DEFAULT_BRUSH_PRESET_ID, applyPresetToStroke } from "./pano_brush_presets.js";
import { createPanoCanvas, releasePanoCanvas } from "./pano_diagnostics.js";
import { cameraBasis, dot, tangentDirection } from "./pano_camera_math.js";
import { clamp } from "./pano_math.js";
import { pixelRangesMeet, rasterObjectPixelRanges } from "./pano_paint_display.js";
import { directionOfErpPoint, erpPointOfDirection, shortestWrappedDelta, stampHalfWidthPx, strokeErpPath } from "./pano_paint_sphere.js";
import { normalizePaintingState } from "./pano_paint_types.js";

export { directionOfErpPoint, erpPointOfDirection, shortestWrappedDelta };

const DEG2RAD = Math.PI / 180;
const lerp = (a, b, t) => a + (b - a) * t;

// --- Colors.

// The color dots of the paint tools.
export const PAINT_COLOR_SWATCHES = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } },
];

export function colorToCss(color, alphaOverride = null) {
  const alpha = alphaOverride == null ? Number(color?.a ?? 1) : Number(alphaOverride);
  return `rgba(${Math.round(clamp(Number(color?.r ?? 0), 0, 1) * 255)}, ${Math.round(clamp(Number(color?.g ?? 0), 0, 1) * 255)}, ${Math.round(clamp(Number(color?.b ?? 0), 0, 1) * 255)}, ${clamp(alpha, 0, 1)})`;
}
export function colorsApproximatelyEqual(a, b, eps = 0.015) {
  if (!a || !b) return false;
  return Math.abs(Number(a.r ?? 0) - Number(b.r ?? 0)) <= eps
    && Math.abs(Number(a.g ?? 0) - Number(b.g ?? 0)) <= eps
    && Math.abs(Number(a.b ?? 0) - Number(b.b ?? 0)) <= eps
    && Math.abs(Number(a.a ?? 1) - Number(b.a ?? 1)) <= eps;
}
export function cloneColor(color) {
  return {
    r: clamp(Number(color?.r ?? 0), 0, 1),
    g: clamp(Number(color?.g ?? 0), 0, 1),
    b: clamp(Number(color?.b ?? 0), 0, 1),
    a: clamp(Number(color?.a ?? 1), 0, 1),
  };
}
export function isPresetPaintColor(color) {
  return PAINT_COLOR_SWATCHES.some((swatch) => colorsApproximatelyEqual(color, swatch.color));
}
export function hsv01ToRgb(h, s, v) {
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
export function rgb01ToHsv(color) {
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

// --- Ids, the ERP and the paint target.

export function makePaintId(prefix) {
  return `${prefix}_${Math.random().toString(16).slice(2, 10)}`;
}

// The paint target of the editors: an ERP of the node's output preset width (2048 when the node has none, as
// Panorama Studio), half as tall.
export function paintTargetDescriptor(presetWidth = 2048) {
  const width = Math.max(1, presetWidth);
  return { kind: "ERP_GLOBAL", width, height: Math.max(1, Math.round(width * 0.5)) };
}

// --- The brushes and a stroke's record.

// The brush preset a tool draws with: the eraser draws with the default one; a tool that is no preset (the lasso)
// with the preset last chosen (`activePresetId`).
export function brushPresetIdForTool(toolKind, activePresetId = DEFAULT_BRUSH_PRESET_ID) {
  const kind = String(toolKind || "").trim();
  if (kind === "eraser") return DEFAULT_BRUSH_PRESET_ID;
  if (BRUSH_PRESETS[kind]) return kind;
  return activePresetId || DEFAULT_BRUSH_PRESET_ID;
}

// The size of a tool's stroke for the size slider's values per preset (`brushSizes`).
export function brushStrokeSize(toolKind, { brushSizes, activePresetId }) {
  const presetId = brushPresetIdForTool(toolKind, activePresetId);
  const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
  const rawSize = brushSizes[presetId] ?? 10;
  return Math.max(1, rawSize) * Math.max(0.1, preset.sizeScale ?? 1);
}

function captureStrokeRadiusSpec(sizePx) {
  const r = Number(sizePx || 0) * 0.5;
  // ERP: normalize against 2048 (full equirectangular canvas reference width).
  return {
    radiusModel: "erp_uv_norm",
    radiusValue: Math.max(1e-6, r / 2048),
  };
}

function preparedStrokePoints(points) {
  return points.map((pt) => ({
    ...pt,
    t: Number(pt?.t || 0),
    widthScale: Number.isFinite(Number(pt?.widthScale)) ? Math.max(0, Number(pt.widthScale)) : 1,
    pressureLike: Number.isFinite(Number(pt?.pressureLike)) ? Math.max(0, Number(pt.pressureLike)) : 1,
  }));
}

function strokeTargetSpace(targetSpace, viewMode) {
  return targetSpace && typeof targetSpace === "object"
    ? { ...targetSpace, viewMode: String(viewMode || "pano") }
    : { kind: "ERP_GLOBAL", viewMode: String(viewMode || "pano") };
}

// A freehand stroke's record from its first `points`: `brush` is the tools' settings { brushSizes, activePresetId,
// paintColor, viewMode } (viewMode the view it is drawn in, kept in its target space).
export function freehandStrokeRecord(layerKind, toolKind, points, targetSpace, brush) {
  const presetId = brushPresetIdForTool(toolKind, brush.activePresetId);
  const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
  const size = brushStrokeSize(toolKind, brush);
  const radiusSpec = captureStrokeRadiusSpec(size);
  const preparedPoints = preparedStrokePoints(points);
  const stroke = {
    id: makePaintId(layerKind),
    actionGroupId: makePaintId("ag"),
    targetSpace: strokeTargetSpace(targetSpace, brush.viewMode),
    layerKind,
    toolKind,
    size,
    createdAt: Date.now(),
    color: layerKind === "paint" ? { ...brush.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
    radiusModel: radiusSpec.radiusModel,
    radiusValue: radiusSpec.radiusValue,
    geometry: {
      geometryKind: "freehand_open",
      rawPoints: preparedPoints.map((pt) => ({ ...pt })),
      points: preparedPoints.map((pt) => ({ ...pt })),
    },
  };
  applyPresetToStroke(stroke, preset);
  return stroke;
}

// A lasso fill's record from its first `points` (`brush` as freehandStrokeRecord's).
export function lassoFillStrokeRecord(layerKind, toolKind, points, targetSpace, brush) {
  const preparedPoints = preparedStrokePoints(points);
  const presetId = brushPresetIdForTool(toolKind, brush.activePresetId);
  const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
  const stroke = {
    id: makePaintId(layerKind),
    actionGroupId: makePaintId("ag"),
    targetSpace: strokeTargetSpace(targetSpace, brush.viewMode),
    layerKind,
    toolKind,
    size: 10,
    createdAt: Date.now(),
    color: layerKind === "paint" ? { ...brush.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
    radiusModel: null,
    radiusValue: null,
    geometry: {
      geometryKind: "lasso_fill",
      points: preparedPoints.map((pt) => ({ ...pt })),
    },
  };
  applyPresetToStroke(stroke, preset);
  return stroke;
}

// Whether a pointer sample `next` ({ u, v }) is far enough from the stroke's last one `prev` to be kept.
export function takesStrokePoint(prev, next) {
  if (!prev) return true;
  const du = Math.abs(Number(next.u ?? next.x ?? 0) - Number(prev.u ?? prev.x ?? 0));
  const dv = Math.abs(Number(next.v ?? next.y ?? 0) - Number(prev.v ?? prev.y ?? 0));
  return !(du < 0.0015 && dv < 0.0015);
}

// The sample a stroke keeps of an ERP point.
export function strokeSample(point) {
  return { ...point, t: Number(point?.t || 0), widthScale: 1, pressureLike: 1 };
}

// --- A freehand stroke's points.

function getStrokePointScalar(point, name, fallback = 1) {
  const value = Number(point?.[name]);
  return Number.isFinite(value) ? Math.max(0, value) : fallback;
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

function getFreehandResampleSpacing(finalPass = false) {
  return finalPass ? 0.0012 : 0.0018;
}

// The points a freehand stroke draws (ADR 0006: the final pass's are durable, `processedPoints`): its raw points
// resampled evenly, smoothed, and resampled again, continuous across the ERP seam.
export function processFreehandPoints(rawPoints, targetSpace, finalPass = false) {
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
  const spacing = getFreehandResampleSpacing(finalPass);
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

// --- Rasterizing a stroke on a 2D canvas.

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

// A 2D canvas of width x height and its context ({ canvas, ctx }); `readback` asks for a context read often.
export function createRasterSurface(width, height, options = {}) {
  const surface = createPanoCanvas({ label: options.label || "editor.raster-surface" });
  surface.width = Math.max(1, Math.round(width));
  surface.height = Math.max(1, Math.round(height));
  const surfaceCtx = surface.getContext("2d", options.readback ? { willReadFrequently: true } : void 0);
  if (surfaceCtx) {
    surfaceCtx.clearRect(0, 0, surface.width, surface.height);
    surfaceCtx.imageSmoothingEnabled = true;
  }
  return { canvas: surface, ctx: surfaceCtx };
}

function getNativeRadiusPxForStrokePoint(stroke, point, targetWidth, targetHeight, shot = null) {
  void targetHeight;
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

// A stamp at the sample: an ellipse rv down and stampHalfWidthPx across (wider by 1 / cos(latitude), up to the whole
// width; docs/render-contract.md "ペイントのストロークの描き方"), on an ERP of bounds.w x bounds.h.
function drawDiscStamp(targetCtx, sample, bounds) {
  const r = Math.max(0.5, Number(sample?.radiusPx || 0.5));
  if (!Number.isFinite(sample?.x) || !Number.isFinite(sample?.y) || !Number.isFinite(r)) return;
  const across = stampHalfWidthPx(r, 1, Number(sample.y || 0) / Math.max(1, bounds.h), bounds.w);
  for (const offset of [-bounds.w, 0, bounds.w]) {
    const x = Number(sample.x || 0) + offset;
    if (x + across < 0 || x - across > bounds.w) continue;
    targetCtx.beginPath();
    targetCtx.ellipse(x, Number(sample.y || 0), across, r, 0, 0, Math.PI * 2);
    targetCtx.fill();
  }
}

function drawStampedStroke(targetCtx, samples, stroke, bounds, options = {}) {
  if (!targetCtx || !Array.isArray(samples) || !samples.length) return;
  targetCtx.save();
  configureStrokeFill(targetCtx, stroke, options);
  const drawSample = (sample) => drawDiscStamp(targetCtx, sample, bounds);
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
    const ar = Math.max(0.5, Number(a.radiusPx || 0.5));
    const br = Math.max(0.5, Number(b.radiusPx || 0.5));
    if (!Number.isFinite(ax) || !Number.isFinite(ay) || !Number.isFinite(bx) || !Number.isFinite(by)) continue;
    if (!Number.isFinite(ar) || !Number.isFinite(br)) continue;
    const dx = bx - ax;
    const dy = by - ay;
    const len = Math.hypot(dx, dy);
    if (!Number.isFinite(len) || len < 1e-6) {
      drawSample(a);
      continue;
    }
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
  // Its edges (the closing one too) on great circles, u continuous across the seam, with the seam's copies.
  const coords = points.map((point) => ({ u: Number(point?.[xKey] || 0), v: Number(point?.[yKey] || 0) }));
  const path = strokeErpPath([...coords, coords[0]], getNativeRadiusPxForStrokePoint(stroke, null, bounds.w, bounds.h), bounds.w, bounds.h).slice(0, -1);
  const xs = path.map((point) => point.u * bounds.w);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  for (const offset of [0, ...(minX < 0 ? [bounds.w] : []), ...(maxX > bounds.w ? [-bounds.w] : [])]) {
    targetCtx.beginPath();
    path.forEach((point, index) => (index ? targetCtx.lineTo : targetCtx.moveTo).call(targetCtx, point.u * bounds.w + offset, point.v * bounds.h));
    targetCtx.closePath();
    targetCtx.fill();
  }
  targetCtx.restore();
  const ys = path.map((point) => point.v * bounds.h);
  return { minX, maxX, minY: Math.min(...ys), maxY: Math.max(...ys) };
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

// The stamps' samples along the stroke's path on the sphere (strokeErpPath: u continuous across the seam).
function buildNativeStrokeSamples(stroke, bounds) {
  const raw = getStrokeRasterPoints(stroke);
  if (!Array.isArray(raw) || !raw.length) return [];
  const w = Number(bounds?.w || 1);
  const h = Number(bounds?.h || 1);
  const points = strokeErpPath(raw, getNativeRadiusPxForStrokePoint(stroke, null, w, h), w, h);
  return points.map((point) => ({
    x: Number(point?.u || 0) * Number(bounds?.w || 1),
    y: Number(point?.v || 0) * Number(bounds?.h || 1),
    radiusPx: getNativeRadiusPxForStrokePoint(stroke, point, Number(bounds?.w || 1), Number(bounds?.h || 1)),
  }));
}

// Draws the stroke and returns the integer box { x0, y0, x1, y1 } (x1, y1 exclusive) of the canvas it may have
// drawn on, or false when it drew nothing.
export function rasterizeStrokeToSurface(surface, stroke, bounds = null) {
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
  // The box of shapes over [x0, x1) x [y0, y1), with a pixel or two of their anti-aliased edges.
  const box = (x0, y0, x1, y1) => {
    const width = Math.max(1, Math.round(Number(surface.canvas?.width || targetBounds.w || 1)));
    const height = Math.max(1, Math.round(Number(surface.canvas?.height || targetBounds.h || 1)));
    const out = {
      x0: Math.max(0, Math.floor(x0) - 2), y0: Math.max(0, Math.floor(y0) - 2),
      x1: Math.min(width, Math.ceil(x1) + 2), y1: Math.min(height, Math.ceil(y1) + 2),
    };
    if (!(out.x1 > out.x0 && out.y1 > out.y0)) return { x0: 0, y0: 0, x1: 0, y1: 0 };
    return out;
  };
  // A shape past the left or right edge has a copy on the other side: the box goes the whole way across.
  const across = (x0, x1) => (x0 < 0 || x1 > targetBounds.w ? [0, targetBounds.w] : [x0, x1]);
  if (geometryKind === "lasso_fill") {
    const drawn = drawNativeLassoFill(surface.ctx, getStrokeRasterPoints(rasterStroke), rasterStroke, targetBounds);
    if (!drawn) return box(0, 0, -1, -1);
    const [x0, x1] = across(drawn.minX, drawn.maxX);
    return box(x0, drawn.minY, x1, drawn.maxY);
  }
  const samples = buildNativeStrokeSamples(rasterStroke, targetBounds);
  if (!samples.length) return false;
  drawStampedStroke(surface.ctx, samples, rasterStroke, targetBounds, { preview: false });
  // Each ellipse drawn lies within the ellipses of the samples it is drawn between (drawStampedStroke); at most a
  // sample's half width across (stampHalfWidthPx at its row; the rows between take the wider of the two ends, so the
  // widest of the stroke's rows bounds them).
  let x0 = Infinity;
  let y0 = Infinity;
  let x1 = -Infinity;
  let y1 = -Infinity;
  let reach = 0;
  for (const sample of samples) {
    const r = Math.max(0.5, Number(sample?.radiusPx || 0.5));
    if (!Number.isFinite(sample?.x) || !Number.isFinite(sample?.y) || !Number.isFinite(r)) continue;
    reach = Math.max(reach, stampHalfWidthPx(r, 1, Math.min(sample.y, targetBounds.h - sample.y) / targetBounds.h, targetBounds.w));
    x0 = Math.min(x0, sample.x);
    y0 = Math.min(y0, sample.y - r);
    x1 = Math.max(x1, sample.x);
    y1 = Math.max(y1, sample.y + r);
  }
  if (!Number.isFinite(x0)) return box(0, 0, -1, -1);
  const [left, right] = across(x0 - reach, x1 + reach);
  return box(left, y0, right, y1);
}

// --- Raster objects made from a painted canvas.

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

// The raster objects (`raster_frozen`, each with its PNG) of the connected painted parts of an ERP canvas.
export function createRasterFrozenObjectsFromCanvas(canvas, layerKind, baseMeta = {}) {
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
    const out = createPanoCanvas({ label: "editor.lasso-fill" });
    out.width = cw;
    out.height = ch;
    const outCtx = out.getContext("2d");
    if (!outCtx) {
      releasePanoCanvas(out);
      return null;
    }
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
    // The object keeps its PNG; the working canvas goes.
    const rasterDataUrl = out.toDataURL("image/png");
    releasePanoCanvas(out);
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
      rasterDataUrl,
      transform: {
        du: startX / w,
        dv: 0,
        rot_deg: 0,
        scale: 1,
      },
    };
  }).filter(Boolean);
}

// --- The painting: its layers, its stroke groups and their z_index.

// The stroke list of the layer `layerKind` ("paint" or "mask") of `painting`, made when it is missing.
export function paintingLayerStrokes(painting, layerKind) {
  const layer = painting[layerKind] || (painting[layerKind] = { strokes: [] });
  if (!Array.isArray(layer.strokes)) layer.strokes = [];
  return layer.strokes;
}

// The stroke groups of `painting`, made when missing.
export function paintingGroups(painting) {
  if (!Array.isArray(painting.groups)) painting.groups = [];
  return painting.groups;
}

// The z_index over everything on the Sky's one axis: the sky Stickers `skyStickers`, the stroke groups and the paint
// raster objects of `painting` (docs/scene-state-v2.md "Sky の重なり順").
export function nextPaintZIndex(painting, skyStickers) {
  let maxZ = -1;
  for (const item of skyStickers) {
    maxZ = Math.max(maxZ, Number(item?.z_index || 0));
  }
  for (const group of paintingGroups(painting)) {
    maxZ = Math.max(maxZ, Number(group?.z_index || 0));
  }
  for (const item of (Array.isArray(painting?.raster_objects) ? painting.raster_objects : [])) {
    if (String(item?.layerKind || "paint") !== "paint") continue;
    maxZ = Math.max(maxZ, Number(item?.z_index || 0));
  }
  return maxZ + 1;
}

// The stroke group `actionGroupId` of `painting`, added at the top (nextPaintZIndex) when it is not there, or moved to
// `zIndex` when one is given.
export function ensurePaintGroup(painting, skyStickers, actionGroupId, zIndex = null) {
  const gid = String(actionGroupId || "").trim();
  if (!gid) return null;
  const groups = paintingGroups(painting);
  let entry = groups.find((group) => String(group?.actionGroupId || "") === gid);
  if (!entry) {
    entry = {
      id: gid,
      type: "strokeGroup",
      actionGroupId: gid,
      z_index: zIndex == null ? nextPaintZIndex(painting, skyStickers) : Math.max(0, Number(zIndex || 0)),
      locked: false,
      frame: null,
    };
    groups.push(entry);
  } else if (zIndex != null) {
    entry.z_index = Math.max(0, Number(zIndex || 0));
  }
  return entry;
}

// The stroke ids' groups of the paint layer, in their order.
function strokeActionGroupIds(painting, layerKind = "paint") {
  const strokes = Array.isArray(painting?.[layerKind]?.strokes) ? painting[layerKind].strokes : [];
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

// The stroke groups of `painting` made to match its paint strokes: a group without strokes goes, a stroke's group
// that is missing comes at the top; sorted by z_index. Writes them to `painting.groups` and returns them.
export function syncPaintGroups(painting, skyStickers) {
  const ids = new Set(strokeActionGroupIds(painting, "paint"));
  const groups = paintingGroups(painting);
  const next = groups.filter((group) => ids.has(String(group?.actionGroupId || "")));
  ids.forEach((gid) => {
    if (!next.some((group) => String(group?.actionGroupId || "") === gid)) {
      next.push({
        id: gid,
        type: "strokeGroup",
        actionGroupId: gid,
        z_index: nextPaintZIndex(painting, skyStickers),
        locked: false,
        frame: null,
      });
    }
  });
  next.sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
  painting.groups = next;
  return next;
}

// The highest z_index of the Sky's display list (the sky Stickers, the stroke groups after syncPaintGroups, the paint
// raster objects), -1 when it is empty.
export function topDisplayZIndex(painting, skyStickers) {
  const groups = syncPaintGroups(painting, skyStickers);
  const rasters = (Array.isArray(painting?.raster_objects) ? painting.raster_objects : []).filter((item) => String(item?.layerKind || "paint") === "paint");
  return [...skyStickers, ...groups, ...rasters].reduce((max, entry) => Math.max(max, Number(entry?.z_index || 0)), -1);
}

// The points a stroke is drawn and hit along: a lasso's outline, else its processed, raw or recorded points.
export function strokePoints(stroke) {
  const geometry = stroke?.geometry || null;
  return geometry?.geometryKind === "lasso_fill"
    ? geometry?.points
    : (geometry?.processedPoints || geometry?.rawPoints || geometry?.points || []);
}

// A stroke group's frame on the sphere (docs/studio-ui.md "ペイントのまとまり" "選んだ形"), as a sky image's.

// How far (degrees) from its center a point lies at most in a stroke group's frame: the half of a sky image's widest
// angle of view (179°), past which the tangent plane does not reach.
const FRAME_LIMIT_DEG = 89.5;
// A center direction whose x and z are both under this lies on a pole: its longitude counts as 0.
const POLE_EPS = 1e-9;

// Whether the direction `d` lies on a pole (its x and z both under POLE_EPS), where it has no longitude.
export function isPoleDirection(d) {
  return Math.abs(d.x) < POLE_EPS && Math.abs(d.z) < POLE_EPS;
}

// The axes of a stroke group's frame of center direction `center` turned by rotationDeg (clockwise seen from inside):
// cameraBasis at the center's longitude and latitude with the roll -rotationDeg (a sky Sticker's roll turns its picture
// counter-clockwise, docs/scene-state-v2.md): { center, right, up } (center: the basis's forward). On a pole the
// longitude is 0.
export function strokeGroupAxes(center, rotationDeg = 0) {
  const yaw = isPoleDirection(center) ? 0 : Math.atan2(center.x, center.z) / DEG2RAD;
  const pitch = Math.asin(clamp(center.y, -1, 1)) / DEG2RAD;
  const basis = cameraBasis(yaw, pitch, -Number(rotationDeg || 0));
  return { center: basis.fwd, right: basis.right, up: basis.up };
}

// The point (x, y) of the tangent plane of `axes` ({ center, right, up }) where the direction `p` lies (gnomonic), a
// point FRAME_LIMIT_DEG or farther from the center taken at that angle on its own bearing (with `clamp` false, null
// for it); null for the direction opposite the center.
export function frameTangentOf(axes, p, { clamp: clampFar = true } = {}) {
  const along = dot(p, axes.center);
  const x = dot(p, axes.right);
  const y = dot(p, axes.up);
  const limit = Math.cos(FRAME_LIMIT_DEG * DEG2RAD);
  if (along > limit) return [x / along, y / along];
  if (!clampFar) return null;
  const length = Math.hypot(x, y);
  if (length < 1e-12) return null;
  const reach = Math.tan(FRAME_LIMIT_DEG * DEG2RAD);
  return [(x / length) * reach, (y / length) * reach];
}

// The direction of the point (x, y) of the tangent plane of `axes` (pano_camera_math.js tangentDirection, as a sky
// image's corners).
export function frameDirectionAt(axes, x, y) {
  return tangentDirection({ fwd: axes.center, right: axes.right, up: axes.up }, x, y);
}

// The frame of a stroke group's points (rotationDeg is the group's rot_deg), or null with no points: { center, right, up
// (its axes, strokeGroupAxes), box: { x, y } (the box's center on the tangent plane), halfW, halfH (its half sizes there,
// padded), rot_deg, uvPad, centerUv (the ERP point of the box's center) }, all plain numbers. The center is the points'
// mean direction (their ERP mean's when that is about zero); the box holds the points on the tangent plane, padded by
// tan(π · uvPad) each way (uvPad from the widest brush). `presetIdOf(toolKind)` gives a stroke's brush preset.
export function strokeGroupFrame(strokes, presetIdOf = (toolKind) => brushPresetIdForTool(toolKind), rotationDeg = 0) {
  const normalizeU = (u) => ((Number(u || 0) % 1) + 1) % 1;
  const sourcePoints = [];
  for (const stroke of strokes) {
    const pts = strokePoints(stroke);
    if (Array.isArray(pts)) sourcePoints.push(...pts);
  }
  if (!sourcePoints.length) return null;
  const directions = sourcePoints.map((pt) => directionOfErpPoint(pt));
  const sum = directions.reduce((acc, d) => ({ x: acc.x + d.x, y: acc.y + d.y, z: acc.z + d.z }), { x: 0, y: 0, z: 0 });
  const length = Math.hypot(sum.x, sum.y, sum.z);
  let center;
  if (length >= 1e-9) {
    center = { x: sum.x / length, y: sum.y / length, z: sum.z / length };
  } else {
    const baseU = normalizeU(sourcePoints[0]?.u || 0);
    let sumU = 0;
    let sumV = 0;
    sourcePoints.forEach((pt) => {
      sumU += baseU + shortestWrappedDelta(normalizeU(pt?.u || 0), baseU);
      sumV += Number(pt?.v || 0);
    });
    center = directionOfErpPoint({ u: normalizeU(sumU / sourcePoints.length), v: sumV / sourcePoints.length });
  }
  const turn = Number(rotationDeg || 0);
  const axes = strokeGroupAxes(center, turn);
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  directions.forEach((d) => {
    const at = frameTangentOf(axes, d);
    if (!at) return;
    minX = Math.min(minX, at[0]); maxX = Math.max(maxX, at[0]);
    minY = Math.min(minY, at[1]); maxY = Math.max(maxY, at[1]);
  });
  if (!Number.isFinite(minX)) minX = maxX = minY = maxY = 0;
  const maxStrokeWidth = strokes.reduce((max, stroke) => {
    const presetId = presetIdOf(String(stroke?.toolKind || "pen"));
    const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
    const size = Math.max(1, Number(stroke?.size || 10)) * Math.max(0.1, Number(preset?.sizeScale ?? 1));
    return Math.max(max, size);
  }, 0);
  const uvPad = Math.max(0.0035, maxStrokeWidth / 2048);
  const pad = Math.tan(Math.PI * uvPad);
  const box = { x: (minX + maxX) * 0.5, y: (minY + maxY) * 0.5 };
  const { u, v } = erpPointOfDirection(frameDirectionAt(axes, box.x, box.y));
  return {
    center: { ...axes.center },
    right: { ...axes.right },
    up: { ...axes.up },
    box,
    halfW: (maxX - minX) * 0.5 + pad,
    halfH: (maxY - minY) * 0.5 + pad,
    rot_deg: turn,
    uvPad,
    centerUv: { u, v },
  };
}

// --- The paint eraser.

// The paint eraser's stroke `eraserStroke` over `painting`: every stroke group and paint raster object whose pixels
// it takes becomes raster objects of what is left (createRasterFrozenObjectsFromCanvas), in its place in the z order.
// Changes `painting` and returns true when it took any pixel, false (unchanged) when it took none.
// descriptor: the paint target ({ width, height }). groupStrokes(gid): the paint strokes of a group. groupFrame(group,
// strokes): its frame (strokeGroupFrame). groupCanvas(gid): the group's committed paint canvas (the paint engine's), or
// null. rasterCanvas(item): a raster object on an ERP canvas of the target's size, or null while its image loads.
// topZ(): the display list's highest z_index (topDisplayZIndex).
export function erasePaint(painting, eraserStroke, { descriptor: erpDesc, groupStrokes, groupFrame, groupCanvas, rasterCanvas, topZ }) {
  const eraserSurface = createRasterSurface(erpDesc.width, erpDesc.height);
  if (!rasterizeStrokeToSurface(eraserSurface, eraserStroke, { w: erpDesc.width, h: erpDesc.height })) return false;
  const eraserData = eraserSurface.ctx?.getImageData(0, 0, erpDesc.width, erpDesc.height)?.data || null;
  if (!eraserData) return false;

  const rasterList = () => (Array.isArray(painting.raster_objects) ? painting.raster_objects : []);
  const groupMeta = new Map(paintingGroups(painting).map((group) => [String(group?.actionGroupId || group?.id || "").trim(), group ? { ...group } : null]));
  const nextStrokes = [];
  const nextGroups = [];
  const nextRasterObjects = [...rasterList().filter((item) => String(item?.layerKind || "paint") !== "paint")];
  let changed = false;
  // topZ() may make the groups match the strokes (syncPaintGroups) before they are walked.
  let nextReplacementZ = topZ() + 1;

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

  // The ERP box of a stroke group's points, padded by its frame's uvPad down and by a stamp's half width at its most
  // polar row across (docs/studio-ui.md "ペイントのまとまり", docs/render-contract.md "ペイントのストロークの描き方": the
  // eraser's first test reads the points, not the frame): u from the points' mean u the short way round.
  function getGroupApproxBoundsPx(group, strokes) {
    const frame = groupFrame(group, strokes);
    if (!frame) return null;
    const points = strokes.flatMap((stroke) => {
      const pts = strokePoints(stroke);
      return Array.isArray(pts) ? pts : [];
    });
    if (!points.length) return null;
    const baseU = Number(points[0]?.u || 0);
    const offsets = points.map((pt) => shortestWrappedDelta(Number(pt?.u || 0), baseU));
    const meanU = baseU + offsets.reduce((sum, du) => sum + du, 0) / offsets.length;
    let minU = Infinity, maxU = -Infinity, minV = Infinity, maxV = -Infinity;
    points.forEach((pt) => {
      const u = meanU + shortestWrappedDelta(Number(pt?.u || 0), meanU);
      minU = Math.min(minU, u); maxU = Math.max(maxU, u);
      minV = Math.min(minV, Number(pt?.v || 0)); maxV = Math.max(maxV, Number(pt?.v || 0));
    });
    const width = erpDesc.width;
    const height = erpDesc.height;
    // Across, a stamp reaches stampHalfWidthPx at the group's most polar row (the whole width where that is half of it).
    const polar = Math.min(minV, 1 - maxV);
    const across = stampHalfWidthPx(frame.uvPad * width, 1, Math.max(0, polar - frame.uvPad), width);
    if (across >= width * 0.5) {
      minU = 0;
      maxU = 1;
    } else {
      minU -= across / width;
      maxU += across / width;
    }
    minV -= frame.uvPad; maxV += frame.uvPad;
    const minY = Math.floor(clamp(minV, 0, 1) * height);
    const maxY = Math.ceil(clamp(maxV, 0, 1) * height);
    // A range a turn wide or more covers the whole width.
    if (maxU - minU >= 1) return { minX: 0, maxX: width - 1, minY, maxY, wraps: false };
    return {
      minX: Math.floor(((minU % 1 + 1) % 1) * width),
      maxX: Math.ceil((((maxU % 1 + 1) % 1) * width)),
      minY,
      maxY,
      wraps: ((minU % 1 + 1) % 1) > ((maxU % 1 + 1) % 1),
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

  for (const group of paintingGroups(painting)) {
    const gid = String(group?.actionGroupId || group?.id || "").trim();
    if (!gid) continue;
    const strokes = groupStrokes(gid);
    if (!approxBoundsHit(getGroupApproxBoundsPx(group, strokes))) {
      nextGroups.push(group);
      nextStrokes.push(...strokes);
      continue;
    }
    const canvas = groupCanvas(gid);
    if (!canvas) {
      nextGroups.push(group);
      nextStrokes.push(...strokes);
      continue;
    }
    const erased = eraseCanvasAndDetectTouch(canvas);
    if (!erased.touched || !erased.canvas) {
      nextGroups.push(group);
      nextStrokes.push(...strokes);
      continue;
    }
    changed = true;
    const created = createReplacementObjects(erased.canvas, "paint", groupMeta.get(gid) || group || {});
    nextRasterObjects.push(...created);
  }

  for (const rasterObject of rasterList().filter((item) => String(item?.layerKind || "paint") === "paint")) {
    // The pixels it covers (pano_paint_display.js rasterObjectPixelRanges); one without a box is tried whole.
    if (rasterObject?.bbox && !pixelRangesMeet(rasterObjectPixelRanges(rasterObject, erpDesc.width, erpDesc.height), eraserBoundsPx)) {
      nextRasterObjects.push(rasterObject);
      continue;
    }
    const canvas = rasterCanvas(rasterObject);
    if (!canvas) {
      nextRasterObjects.push(rasterObject);
      continue;
    }
    const erased = eraseCanvasAndDetectTouch(canvas);
    if (!erased.touched || !erased.canvas) {
      nextRasterObjects.push(rasterObject);
      continue;
    }
    changed = true;
    const created = createReplacementObjects(erased.canvas, "paint", rasterObject);
    nextRasterObjects.push(...created);
  }

  if (!changed) return false;
  painting.paint.strokes = nextStrokes;
  painting.groups = nextGroups.sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
  painting.raster_objects = nextRasterObjects.sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
  return true;
}

// --- Committing a stroke.

// Commits the finished stroke `stroke` of the layer `layerKind` to `painting`: a freehand stroke gets its durable
// processedPoints; a paint stroke (not the eraser) gets its stroke group (ensureGroup(actionGroupId), which adds it:
// ensurePaintGroup) and goes on the paint layer, a mask stroke on the mask layer; the paint eraser erases (erasePaint,
// with the sources eraser() gives). Returns whether the painting changed (a lasso of fewer than 3 points or a stroke
// with no point does not).
export function commitPaintStroke(painting, layerKind, stroke, { ensureGroup, eraser }) {
  const geometry = stroke?.geometry || null;
  if (!geometry) return false;
  const toolKind = String(stroke?.toolKind || "pen");
  if (layerKind === "paint" && toolKind === "eraser") {
    if (geometry.geometryKind !== "lasso_fill") {
      geometry.processedPoints = processFreehandPoints(geometry.rawPoints || geometry.points || [], stroke.targetSpace, true);
    }
    const sources = eraser();
    return sources ? erasePaint(painting, stroke, sources) : false;
  }
  const shouldCreatePaintGroup = layerKind === "paint" && toolKind !== "eraser";
  if (geometry.geometryKind === "lasso_fill") {
    const points = Array.isArray(geometry.points) ? geometry.points : [];
    if (points.length < 3) return false;
    if (shouldCreatePaintGroup) ensureGroup(stroke?.actionGroupId);
    paintingLayerStrokes(painting, layerKind).push(stroke);
    return true;
  }
  const rawPoints = geometry.rawPoints || geometry.points || [];
  if (rawPoints.length < 1) return false;
  // ADR 0006: processedPoints is durable; rasterizer (Python) uses it directly.
  geometry.processedPoints = processFreehandPoints(rawPoints, stroke.targetSpace, true);
  if (shouldCreatePaintGroup) ensureGroup(stroke?.actionGroupId);
  paintingLayerStrokes(painting, layerKind).push(stroke);
  return true;
}

// The painting of a state, made when it has none.
export function statePainting(state) {
  return state.painting || (state.painting = normalizePaintingState(null));
}
