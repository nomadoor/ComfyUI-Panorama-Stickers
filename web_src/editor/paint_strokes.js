// Paint strokes and the paint engine: the points of a freehand stroke, its radius, how it rasterizes, the
// revisions that tell the paint engine and the display caches to rebuild, and the raster objects made
// from a painted canvas.
import { createPanoCanvas, releasePanoCanvas } from "../pano_diagnostics.js";
import { clamp } from "../pano_math.js";
import { createPaintEngineManager } from "../pano_paint_engine.js";
import { DEG2RAD } from "./constants.js";
import { lerp, makePaintId } from "./helpers.js";

export function createPaintStrokes(deps) {
  const {
    editor, runtime, state,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let invalidatePaintingLayerState, resolveEditorOutputPresetWidth,
    shortestWrappedDelta;

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
    const surface = createPanoCanvas({ label: "editor.raster-surface" });
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

  function markObjectVisualsDirty() {
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

  // Draws the stroke and returns the integer box { x0, y0, x1, y1 } (x1, y1 exclusive) of the canvas it may have
  // drawn on, or false when it drew nothing.
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
    drawNativeStrokePath(surface.ctx, samples, rasterStroke, targetBounds);
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

  return {
    connect(api) {
      ({
        invalidatePaintingLayerState, resolveEditorOutputPresetWidth,
        shortestWrappedDelta,
      } = api);
    },
    processFreehandPoints, createRasterSurface, getPaintingRevisionKey, getPaintingCompositeRevisionKey,
    refreshPaintEngineRevisionCache, markObjectVisualsDirty,
    markPaintStrokeVisualsDirty, markPaintCompositeVisualsDirty, rebuildPaintEngineIfNeeded,
    getDesiredPaintTargetDescriptor, getActivePaintTargetDescriptor, rasterizeStrokeToSurface,
    createRasterFrozenObjectsFromCanvas,
  };
}
