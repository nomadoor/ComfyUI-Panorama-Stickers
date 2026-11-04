// Rasterizing a stroke on a 2D canvas (docs/render-contract.md "ペイントのストロークの描き方"), and the raster objects
// made from a painted ERP canvas. Pure except for the canvases a raster needs.
import { createPanoCanvas, releasePanoCanvas } from "../pano_diagnostics.js";
import { DEG2RAD } from "../pano_camera_math.js";
import { stampHalfWidthPx, strokeErpPath } from "../pano_paint_sphere.js";
import { getStrokePointScalar, lerp, makePaintId } from "./record.js";

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

export function getNativeRadiusPxForStrokePoint(stroke, point, targetWidth, targetHeight, shot = null) {
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
