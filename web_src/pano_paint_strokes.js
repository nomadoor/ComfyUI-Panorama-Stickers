// The paint and mask strokes the editors record, below both UIs (docs/editor-architecture.md "Paint layers"): the
// colors the brushes offer, a stroke's record and its points, how a stroke rasterizes, the stroke groups and their
// z_index, committing a stroke to the painting (docs/scene-state-v2.md `painting`), and the paint eraser, which turns
// the paint it touches into raster objects. The old editor (editor/paint_strokes.js, paint_input.js, items.js) and the
// new UI's (studio/paint.js) record strokes through these, so both write the same painting. Pure except for the
// canvases a raster needs; the paint engine's pixels (pano_paint_engine.js) are the caller's.
import { BRUSH_PRESETS, DEFAULT_BRUSH_PRESET_ID, applyPresetToStroke } from "./pano_brush_presets.js";
import { createPanoCanvas, releasePanoCanvas } from "./pano_diagnostics.js";
import { clamp } from "./pano_math.js";
import { normalizePaintingState } from "./pano_paint_types.js";

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

// The difference a - b of two ERP u values the short way round, in [-0.5, 0.5].
export function shortestWrappedDelta(a, b) {
  let d = Number(a || 0) - Number(b || 0);
  while (d > 0.5) d -= 1;
  while (d < -0.5) d += 1;
  return d;
}

// The ERP point of a direction in the panorama convention (pano_editor_view.js viewProjection's rays: the old
// editor's view and the new UI's stage both give one), at time `t`.
export function erpPointOfDirection(d, t = 0) {
  const lon = Math.atan2(d.x, d.z);
  const lat = Math.asin(clamp(d.y, -1, 1));
  return {
    targetKind: "ERP_GLOBAL",
    u: ((lon / (2 * Math.PI)) + 0.5 + 1) % 1,
    v: clamp(0.5 - (lat / Math.PI), 0, 1),
    t: Number(t || 0),
  };
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
  if (geometryKind === "lasso_fill") {
    const points = getStrokeRasterPoints(rasterStroke);
    drawNativeLassoFill(surface.ctx, points, rasterStroke, targetBounds);
    const xs = points.map((point) => Number(point?.u || 0) * targetBounds.w);
    const ys = points.map((point) => Number(point?.v || 0) * targetBounds.h);
    return xs.length ? box(Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)) : box(0, 0, -1, -1);
  }
  const samples = buildNativeStrokeSamples(rasterStroke, targetBounds);
  if (!samples.length) return false;
  drawStampedStroke(surface.ctx, samples, rasterStroke, targetBounds, { preview: false });
  // Each disc drawn lies within the discs of the samples it is drawn between (drawStampedStroke).
  const maxRadiusPx = Math.max(targetBounds.w, targetBounds.h) * 0.25;
  let x0 = Infinity;
  let y0 = Infinity;
  let x1 = -Infinity;
  let y1 = -Infinity;
  for (const sample of samples) {
    const r = Math.max(0.5, Math.min(maxRadiusPx, Number(sample?.radiusPx || 0.5)));
    if (!Number.isFinite(sample?.x) || !Number.isFinite(sample?.y) || !Number.isFinite(r)) continue;
    x0 = Math.min(x0, sample.x - r);
    y0 = Math.min(y0, sample.y - r);
    x1 = Math.max(x1, sample.x + r);
    y1 = Math.max(y1, sample.y + r);
  }
  return Number.isFinite(x0) ? box(x0, y0, x1, y1) : box(0, 0, -1, -1);
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

// The axis-aligned box of a stroke group's points (rot_deg 0): { centerUv, rot_deg, halfW, halfH, uvPad }, or null
// with no points. `presetIdOf(toolKind)` gives a stroke's brush preset (for its width).
export function strokeGroupFrame(strokes, presetIdOf = (toolKind) => brushPresetIdForTool(toolKind)) {
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
    const presetId = presetIdOf(String(stroke?.toolKind || "pen"));
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

  function getGroupApproxBoundsPx(group, strokes) {
    const frame = groupFrame(group, strokes);
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
    if (!approxBoundsHit(getRasterApproxBoundsPx(rasterObject))) {
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
