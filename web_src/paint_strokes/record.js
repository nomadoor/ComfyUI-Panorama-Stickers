// A paint or mask stroke's record (docs/editor-architecture.md "Paint layers"): its id, the paint target, the brush it
// draws with, its first points and the samples it keeps, and the durable points of a freehand stroke (ADR 0006).
import { BRUSH_PRESETS, DEFAULT_BRUSH_PRESET_ID, applyPresetToStroke } from "../pano_brush_presets.js";
import { clamp } from "../pano_math.js";
import { shortestWrappedDelta } from "../pano_paint_sphere.js";

export const lerp = (a, b, t) => a + (b - a) * t;

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

export function getStrokePointScalar(point, name, fallback = 1) {
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
