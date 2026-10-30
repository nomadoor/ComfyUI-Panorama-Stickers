// Paint Engine Manager
//
// Architecture:
//   Source of truth    = stroke records (durable, in state_json.painting)
//   Native raster cache = committedPaint / committedMask per target (derived)
//   Active stroke      = currentStroke (ephemeral, accumulated incrementally)
//   Display            = composed from committed + currentStroke on demand, again only where they
//                        changed (pano_paint_damage.js)
//
// Rendering strategy: Stamp-based soft brush
//
//   Each freehand stroke is rendered as a sequence of pre-baked OffscreenCanvas stamp
//   images (radial gradient) placed along the path at spacing intervals.
//   The stamp is cached by (radiusPx, hardness, color) — LRU, max 128 entries.
//
//   Live drawing (O(1) per pointermove):
//     - Each new raw point triggers a spacing walk on the single [prev→current] segment.
//     - Only the new stamps for that segment are drawn to currentStroke.
//     - At commit, currentStroke is merged (drawImage) into the committed layer.
//
//   Rebuild (undo/redo, reload):
//     - Full spacing walk replayed from processedPoints (or rawPoints if not set).
//
//   Eraser: draws white stamps to currentStroke (source-over); the group displays
//           (getGroupDisplay) apply destination-out for the live preview; commit applies destination-out
//           to the committed layer.
//
//   Lasso fill: polygon fill via canvas Path2D — no stamps needed.
//
//   ERP seam: stamps near the u=0 / u=1 wrap boundary are mirrored so the stroke
//             renders correctly at the panorama seam.

import { createPanoCanvas } from "./pano_diagnostics.js";
import { addRect, createDamageLog, intersectRects, joinRects, shapeRect } from "./pano_paint_damage.js";

// ─── Canvas Surface Utilities ─────────────────────────────────────────────────

function createCanvasSurface(width, height) {
  const canvas = createPanoCanvas({ label: "paint.surface" });
  canvas.width = Math.max(1, Math.round(width));
  canvas.height = Math.max(1, Math.round(height));
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
  }
  return { canvas, ctx };
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

function measureAlphaBounds(canvas, threshold = 8) {
  const ctx = canvas?.getContext?.("2d");
  const width = Number(canvas?.width || 0);
  const height = Number(canvas?.height || 0);
  if (!ctx || width < 1 || height < 1) return null;
  const data = ctx.getImageData(0, 0, width, height).data;
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (data[(y * width + x) * 4 + 3] <= threshold) continue;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }
  if (maxX < minX || maxY < minY) return null;
  return {
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
    aspect: Number(((maxX - minX + 1) / Math.max(1, (maxY - minY + 1))).toFixed(4)),
  };
}

function createScratchCanvas(width, height) {
  return createPanoCanvas({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(width)),
    height: Math.max(1, Math.ceil(height)),
    offscreen: true,
  });
}

function resizeSurface(surface, width, height) {
  if (!surface) return createCanvasSurface(width, height);
  const nextW = Math.max(1, Math.round(width));
  const nextH = Math.max(1, Math.round(height));
  if (surface.canvas.width !== nextW || surface.canvas.height !== nextH) {
    surface.canvas.width = nextW;
    surface.canvas.height = nextH;
    surface.ctx.imageSmoothingEnabled = true;
  }
  return surface;
}

function clearSurface(surface) {
  if (!surface?.ctx) return;
  surface.ctx.clearRect(0, 0, surface.canvas.width, surface.canvas.height);
}

// A target's pixels (its committed surface or its live stroke) changed: globalDisplay is composed again
// (composeAllLayers). Where the display canvases changed is the damage logs' (pano_paint_damage.js).
function markDirty(target) {
  target.displayDirty = true;
}

// ─── Mask Hatch Overlay ───────────────────────────────────────────────────────

// Shared temp canvas for drawMaskTint.
let _maskTintTmp = null;
// Cached small tile canvas for the diagonal stripe pattern.
let _maskHatchTile = null;
// Cached CanvasPattern for the hatch tile (bound to _maskTintTmp.ctx).
let _maskHatchPattern = null;
let _maskHatchPatternCtx = null;
// Shared temp canvas reused for eraser compositing (composeDisplayPaint + rebuildCommitted).
let _eraserTmp = null;
// Shared temp canvas reused for low-opacity stroke compositing (drawStrokeToSurface).
let _strokeOpacityTmp = null;

// Returns a small canvas with a 45° diagonal stripe pattern.
// Cached after first creation; reused for every drawMaskTint call.
function getMaskHatchTile() {
  if (_maskHatchTile) return _maskHatchTile;
  // lineWidth=6, sz=17: perpendicular period = 17/√2 ≈ 12px → stripe≈6px, gap≈6px (equal).
  const lw = 6;
  const sz = 17;
  const c = createPanoCanvas({ label: "paint.hatch" });
  c.width = sz;
  c.height = sz;
  const ctx = c.getContext("2d");
  // Dark base so the non-stripe gaps are visibly darker, not fully transparent.
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, sz, sz);
  ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
  ctx.lineWidth = lw;
  ctx.lineCap = "square";
  ctx.beginPath();
  // Three parallel segments to make the sz×sz tile tile seamlessly at 45°.
  ctx.moveTo(0, 0);             ctx.lineTo(sz, sz);
  ctx.moveTo(-sz / 2, sz / 2);  ctx.lineTo(sz / 2, sz + sz / 2);
  ctx.moveTo(sz / 2, -sz / 2);  ctx.lineTo(sz + sz / 2, sz / 2);
  ctx.stroke();
  _maskHatchTile = c;
  return c;
}

// Overlay a diagonal-stripe (hatch) pattern over mask-shaped pixels on displayCtx, within `rect` (pano_paint_damage.js;
// the whole canvas by default). The pattern is anchored at the canvas origin, so a rectangle is drawn exactly as
// the whole canvas draws it there. Does NOT affect non-mask pixels (paint pixels remain unchanged).
function drawMaskTint(displayCtx, maskCanvas, rect = wholeRect(maskCanvas)) {
  if (!displayCtx || !maskCanvas) return;
  const w = maskCanvas.width;
  const h = maskCanvas.height;
  _maskTintTmp = resizeSurface(_maskTintTmp, w, h);
  const tmp = _maskTintTmp;
  clearRect(tmp.ctx, rect);
  drawRect(tmp.ctx, maskCanvas, rect);
  tmp.ctx.globalCompositeOperation = "source-in";
  if (_maskHatchPatternCtx !== tmp.ctx) {
    _maskHatchPattern = tmp.ctx.createPattern(getMaskHatchTile(), "repeat");
    _maskHatchPatternCtx = tmp.ctx;
  }
  tmp.ctx.fillStyle = _maskHatchPattern;
  tmp.ctx.fillRect(rect.x0, rect.y0, rect.x1 - rect.x0, rect.y1 - rect.y0);
  tmp.ctx.globalCompositeOperation = "source-over";
  displayCtx.save();
  displayCtx.globalCompositeOperation = "source-over";
  drawRect(displayCtx, tmp.canvas, rect);
  displayCtx.restore();
}

// ─── Rectangles (pano_paint_damage.js) ───────────────────────────────────────

function wholeRect(canvas) {
  return { x0: 0, y0: 0, x1: canvas.width, y1: canvas.height };
}

function clearRect(ctx, rect) {
  ctx.clearRect(rect.x0, rect.y0, rect.x1 - rect.x0, rect.y1 - rect.y0);
}

// Draws `rect` of source onto the same rectangle of ctx: whole pixels, unscaled, as drawImage(source, 0, 0) draws them.
function drawRect(ctx, source, rect) {
  const w = rect.x1 - rect.x0;
  const h = rect.y1 - rect.y0;
  ctx.drawImage(source, rect.x0, rect.y0, w, h, rect.x0, rect.y0, w, h);
}

// ─── Coordinate Helpers ───────────────────────────────────────────────────────

function getTargetCoord(point) {
  if (!point || typeof point !== "object") return { x: 0, y: 0 };
  return { x: Number(point.u || 0), y: Number(point.v || 0) };
}

// Return the point list for rendering.
// Priority: rawPoints (source of truth) > points.
// processedPoints is intentionally ignored — live and rebuild use the same raw data.
function getRawPoints(stroke) {
  const geometry = stroke?.geometry;
  if (!geometry) return [];
  if (Array.isArray(geometry.rawPoints) && geometry.rawPoints.length) return geometry.rawPoints;
  if (Array.isArray(geometry.points) && geometry.points.length) return geometry.points;
  return [];
}

// ─── Brush Radius ─────────────────────────────────────────────────────────────

function getRadiusPx(stroke, descriptor) {
  const radiusValue = Number(stroke?.radiusValue);
  const radiusModel = String(stroke?.radiusModel || "").trim();
  const w = descriptor?.width || 1;
  if (radiusModel === "erp_uv_norm" && radiusValue > 0) {
    // radiusValue = radius_px / reference_width (reference = 2048)
    return Math.max(0.5, radiusValue * w);
  }
  if (radiusModel === "degree_norm" && radiusValue > 0) {
    // radiusValue = angle_radius_degrees / 90; at equator, pixel_radius ≈ angle/360 * width
    return Math.max(0.5, (radiusValue * 90 / 360) * w);
  }
  return Math.max(0.5, Number(stroke?.baseSize || stroke?.size || 10) * 0.5);
}

// Stamp spacing in pixels. Falls back to brush-type defaults if not set on the stroke.
// Spacing = fraction of diameter. Smaller = denser stamps = smoother appearance.
function getSpacingPx(stroke, radiusPx) {
  const explicit = Number(stroke?.spacing);
  if (Number.isFinite(explicit) && explicit > 0) return Math.max(1, explicit * radiusPx * 2);
  const toolKind = String(stroke?.toolKind || "pen");
  const denseTools = toolKind === "brush" || toolKind === "eraser";
  const fraction = denseTools ? 0.15 : 0.2;
  return Math.max(1, fraction * radiusPx * 2);
}

// ─── Stamp Texture Cache ──────────────────────────────────────────────────────

// LRU cache: Map retains insertion order; oldest entry = first key.
const _stampCache = new Map();
const STAMP_CACHE_MAX = 128;

// Build (or retrieve cached) stamp OffscreenCanvas for the given brush parameters.
// The stamp is a radial gradient: full opacity out to (hardness * radius), fading to 0 at radius.
// Color (r255, g255, b255) and opacity are baked in so the same texture is ready to draw.
function buildStampTexture(radiusPx, hardness, r255, g255, b255, opacity) {
  const rr = Math.max(1, Math.round(radiusPx));
  const h = Math.max(0, Math.min(1, hardness));
  const key = `${rr}:${h.toFixed(2)}:${r255}:${g255}:${b255}:${opacity.toFixed(3)}`;

  if (_stampCache.has(key)) {
    const stamp = _stampCache.get(key);
    // LRU: promote to most-recent by re-inserting
    _stampCache.delete(key);
    _stampCache.set(key, stamp);
    return stamp;
  }

  // Evict the oldest entry when at capacity
  if (_stampCache.size >= STAMP_CACHE_MAX) {
    _stampCache.delete(_stampCache.keys().next().value);
  }

  const size = rr * 2 + 2;
  const center = rr + 1;
  const canvas = createScratchCanvas(size, size);
  const ctx = canvas.getContext("2d");

  // Radial gradient: innerR = hardness boundary (hard core), outerR = brush edge
  const innerR = h * rr;       // inside this → full opacity
  const outerR = rr + 1;       // at this radius → fully transparent
  const colorFull = `rgba(${r255},${g255},${b255},${opacity})`;
  const colorZero = `rgba(${r255},${g255},${b255},0)`;
  const grad = ctx.createRadialGradient(center, center, innerR, center, center, outerR);
  grad.addColorStop(0, colorFull);
  grad.addColorStop(1, colorZero);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  _stampCache.set(key, canvas);
  return canvas;
}

// ─── Chisel Stamp Texture ────────────────────────────────────────────────────

// Build (or retrieve cached) chisel stamp for the given brush parameters.
// Shape: stadium (discorectangle) — two semicircular caps joined by a flat rectangle.
//   rx = half-width (long axis), ry = half-height (short axis, = radiusPx).
//   halfFlat = rx - ry  — half-length of the flat middle section.
// Interior alpha modulation:
//   edge lift  — stamps are more opaque near the shape boundary (ink piles at nib edge).
//   centre dip — stamps are slightly hollow at the very centre.
// The angle is NOT baked in; rotation is applied at draw time via ctx.rotate().
// col = { r, g, b, a } where a = flow (already incorporates color.a * flow from getStampColor).
// fiber ∈ [0,1]: anisotropic nib-channel noise — elongated streaks along nib axis (x), ~1.5px wide in y.
function buildChiselTexture(rx, ry, hardness, col, edgeLift, centerDip, fiber) {
  const { r: r255, g: g255, b: b255, a: flow } = col;
  const cw = Math.max(2, Math.ceil(rx) * 2);
  const ch = Math.max(2, Math.ceil(ry) * 2);
  const el = Math.max(0, edgeLift);
  const cd = Math.max(0, Math.min(0.99, centerDip));
  const fb = Math.max(0, Math.min(1, fiber ?? 0));
  const key = `chisel:${cw}:${ch}:${hardness.toFixed(2)}:${r255}:${g255}:${b255}:${flow.toFixed(3)}:${el.toFixed(2)}:${cd.toFixed(2)}:${fb.toFixed(2)}`;

  if (_stampCache.has(key)) {
    const stamp = _stampCache.get(key);
    _stampCache.delete(key);
    _stampCache.set(key, stamp);
    return stamp;
  }
  if (_stampCache.size >= STAMP_CACHE_MAX) _stampCache.delete(_stampCache.keys().next().value);

  const oc = createScratchCanvas(cw, ch);
  const ctx = oc.getContext("2d");
  const img = ctx.createImageData(cw, ch);
  const d = img.data;

  const halfFlat = Math.max(0, rx - ry);  // flat-section half-length
  const h = Math.max(0, Math.min(1, hardness));
  // Normalise modulation so the peak (at the shape edge) equals flow.
  const peakMod = 1 + el;

  for (let py = 0; py < ch; py++) {
    for (let px = 0; px < cw; px++) {
      // Offset from canvas centre in actual pixels.
      const ax = px + 0.5 - rx;
      const ay = py + 0.5 - ry;

      // Stadium SDF: distance from the nearest point on the centre-axis segment.
      const bx = Math.max(Math.abs(ax) - halfFlat, 0);
      const dist = Math.hypot(bx, ay);
      const sdf = dist / ry;   // 0 = centre segment, 1 = shape boundary

      if (sdf >= 1) continue;  // outside shape

      // Edge-softness mask (hardness controls crispness).
      const shapeMask = sdf <= h ? 1 : Math.max(0, (1 - sdf) / Math.max(1e-4, 1 - h));

      // Interior modulation: edge lift + centre dip.
      const innerT = 1 - sdf;  // 1 at centre, 0 at boundary
      const lift = 1 + el * (1 - innerT) * (1 - innerT);
      const dip  = 1 - cd * innerT * innerT;
      const mod  = lift * dip / peakMod;

      // Nib-fiber texture: felt channels running along the nib's long axis (x in stamp space).
      // Fine y-bands (~1.5px) with slow x-variation (~8px) create elongated streaks.
      let fiberMod = 1;
      if (fb > 0) {
        const fy = Math.floor((ay + ry) / 1.5);
        const fx = Math.floor((ax + rx) / 8);
        const fiberNoise = _seededFloat(_stampSeed(fy * 41 + 500, fx * 19 + 300));
        fiberMod = 1 - fb * 0.42 * fiberNoise;
      }

      const alpha = Math.round(255 * Math.min(1, flow * shapeMask * mod * fiberMod));
      if (alpha <= 0) continue;

      const i = (py * cw + px) * 4;
      d[i]   = r255;
      d[i + 1] = g255;
      d[i + 2] = b255;
      d[i + 3] = alpha;
    }
  }
  ctx.putImageData(img, 0, 0);
  _stampCache.set(key, oc);
  return oc;
}

// ─── Scatter PRNG ─────────────────────────────────────────────────────────────

// Deterministic position hash (FNV-1a inspired) → seed for _seededFloat.
// Using position × 4-pixel precision so sub-pixel jitter doesn't change scatter.
function _stampSeed(cx, cy) {
  const xi = Math.trunc(Math.round(cx * 4));
  const yi = Math.trunc(Math.round(cy * 4));
  let h = 2166136261;
  h = Math.imul(h ^ (xi & 0xFF), 16777619);
  h = Math.imul(h ^ ((xi >> 8) & 0xFF), 16777619);
  h = Math.imul(h ^ (yi & 0xFF), 16777619);
  h = Math.imul(h ^ ((yi >> 8) & 0xFF), 16777619);
  return h >>> 0;
}

// Mulberry32 PRNG step — returns a float in [0, 1).
function _seededFloat(seed) {
  let s = (seed + 0x6D2B79F5) >>> 0;
  s = Math.imul(s ^ (s >>> 15), s | 1);
  s ^= s + Math.imul(s ^ (s >>> 7), s | 61);
  return ((s ^ (s >>> 14)) >>> 0) / 4294967296;
}

// ─── Stamp Context Builder ────────────────────────────────────────────────────

// ─── Crayon Stamp Texture ─────────────────────────────────────────────────────

// Returns the alpha (0-255) for a single crayon stamp pixel, or 0 if the pixel is transparent.
function _crayonPixelAlpha(px, py, rx, ry, h, gr, flow) {
  const ax       = px + 0.5 - rx;
  const ay       = py + 0.5 - ry;
  const halfFlat = Math.max(0, rx - ry);
  const bx       = Math.max(Math.abs(ax) - halfFlat, 0);
  const sdf = Math.hypot(bx, ay) / ry;
  if (sdf >= 1) return 0;

  const jitter     = _seededFloat(_stampSeed(px * 17 + 3, py * 13 + 7));
  const effSdf     = sdf + gr * 0.22 * (jitter - 0.5);
  if (effSdf >= 1) return 0;

  const shapeMask  = effSdf <= h ? 1 : Math.max(0, (1 - effSdf) / Math.max(1e-4, 1 - h));
  const noise      = _crayonPixelNoise(px, py, ax, ay, rx, ry);
  const threshold  = gr * 0.55;
  if (noise < threshold) return 0;

  const coverage   = (noise - threshold) / Math.max(1e-4, 1 - threshold);
  const grainMask  = 0.45 + 0.55 * coverage;
  return Math.round(255 * Math.min(1, flow * shapeMask * grainMask));
}

// Multi-scale wax-grain noise at a single pixel position (ax, ay relative to canvas centre).
// Returns a combined noise value in [0, 1].
function _crayonPixelNoise(px, py, ax, ay, rx, ry) {
  const cxC  = Math.floor((ax + rx) / 3);
  const cyC  = Math.floor((ay + ry) / 2);
  const nC   = _seededFloat(_stampSeed(cxC * 13 + 700, cyC * 17 + 400));
  const cxM  = Math.floor((ax + rx) / 1.5);
  const cyM  = Math.floor((ay + ry) / 1.5);
  const nM   = _seededFloat(_stampSeed(cxM * 23 + 800, cyM * 29 + 500));
  const nF   = _seededFloat(_stampSeed(px * 3 + 100, py * 5 + 200));
  return nC * 0.55 + nM * 0.3 + nF * 0.15;
}

// Build (or retrieve cached) crayon stamp.
// Shape: stadium SDF (same as chisel), but alpha is modulated by per-pixel wax grain noise
// so the interior has a fibrous, uneven texture and the edge is organically irregular.
// col = { r, g, b, a } — a includes flow.  grain ∈ [0, 1].
function buildCrayonTexture(rx, ry, hardness, col, grain) {
  const { r: r255, g: g255, b: b255, a: flow } = col;
  const cw  = Math.max(2, Math.ceil(rx) * 2);
  const ch  = Math.max(2, Math.ceil(ry) * 2);
  const gr  = Math.max(0, Math.min(1, grain));
  const key = `crayon:${cw}:${ch}:${hardness.toFixed(2)}:${r255}:${g255}:${b255}:${flow.toFixed(3)}:${gr.toFixed(2)}`;

  if (_stampCache.has(key)) {
    const s = _stampCache.get(key);
    _stampCache.delete(key);
    _stampCache.set(key, s);
    return s;
  }
  if (_stampCache.size >= STAMP_CACHE_MAX) _stampCache.delete(_stampCache.keys().next().value);

  const oc  = createScratchCanvas(cw, ch);
  const ctx = oc.getContext("2d");
  const img = ctx.createImageData(cw, ch);
  const d   = img.data;

  const h = Math.max(0, Math.min(1, hardness));

  for (let py = 0; py < ch; py++) {
    for (let px = 0; px < cw; px++) {
      const alpha = _crayonPixelAlpha(px, py, rx, ry, h, gr, flow);
      if (alpha <= 0) continue;
      const i = (py * cw + px) * 4;
      d[i]     = r255;
      d[i + 1] = g255;
      d[i + 2] = b255;
      d[i + 3] = alpha;
    }
  }
  ctx.putImageData(img, 0, 0);
  _stampCache.set(key, oc);
  return oc;
}

// ─── Stamp Context Builder ────────────────────────────────────────────────────

// Build the shared stamp context (sc) from a stroke record and descriptor.
// Centralises texture dispatch (round / chisel / crayon) and scatter params.
// sc = { ctx, stampTex, radiusPx, spacingPx, desc, aspect, angle, stampKind, scatter }
function buildStampContext(ctx, stroke, descriptor) {
  const stampKind = String(stroke?.stampKind || "round");
  const radiusPx  = getRadiusPx(stroke, descriptor);
  const hardness  = Math.max(0, Math.min(1, Number(stroke?.hardness ?? 0.9)));
  const col       = getStampColor(stroke);
  const aspect    = Math.max(0.1, Number(stroke?.aspect ?? 1));
  const angle     = Number(stroke?.angle?.value ?? 0);
  const spacingPx = getSpacingPx(stroke, radiusPx);
  const viewMode  = String(stroke?.targetSpace?.viewMode || "");
  const latitudeCorrection = descriptor?.kind === "ERP_GLOBAL" && viewMode !== "unwrap";
  const rawSc     = stroke?.scatter;
  const scatter   = rawSc
    ? { radius: Number(rawSc.radius ?? 1.5), count: Math.max(1, Math.round(rawSc.count ?? 6)) }
    : null;

  let stampTex;
  if (stampKind === "chisel") {
    const rx       = radiusPx * aspect;
    const ry       = radiusPx;
    const edgeLift = Math.max(0, Number(stroke?.chiselEdgeLift ?? 0.4));
    const centDip  = Math.max(0, Number(stroke?.chiselCenterDip ?? 0.3));
    const fiber    = Math.max(0, Math.min(1, Number(stroke?.chiselFiber ?? 0)));
    stampTex = buildChiselTexture(rx, ry, hardness, col, edgeLift, centDip, fiber);
  } else if (stampKind === "crayon") {
    const rx    = radiusPx * aspect;
    const ry    = radiusPx;
    const grain = Math.max(0, Math.min(1, Number(stroke?.crayonGrain ?? 0.65)));
    stampTex = buildCrayonTexture(rx, ry, hardness, col, grain);
  } else {
    stampTex = buildStampTexture(radiusPx, hardness, col.r, col.g, col.b, col.a);
  }

  return { ctx, stampTex, radiusPx, spacingPx, desc: descriptor, aspect, angle, stampKind, scatter, latitudeCorrection };
}

// ─── Stamp Color ─────────────────────────────────────────────────────────────

// Returns {r, g, b, a} for buildStampTexture.
// Eraser and mask strokes always use white (composited with destination-out / tint later).
// Paint strokes: alpha = color.a * flow.
// stroke.opacity is NOT baked here — it is applied at composite time (commitActiveStroke /
// drawStrokeToSurface), so that "flat" and "accumulate" modes both honour it correctly.
function getStampColor(stroke) {
  const layerKind = String(stroke?.layerKind || "paint");
  const toolKind = String(stroke?.toolKind || "pen");
  if (toolKind === "eraser" || layerKind === "mask") {
    return { r: 255, g: 255, b: 255, a: 1 };
  }
  const c = stroke?.color || { r: 1, g: 0.25, b: 0.25, a: 1 };
  const flow = Math.max(0, Math.min(1, Number(stroke?.flow ?? 1)));
  const alpha = Math.max(0, Math.min(1, Number(c.a ?? 1))) * flow;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(c.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(c.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(c.b || 0))) * 255),
    a: alpha,
  };
}

// CSS color string for lasso fill polygon (not stamp-based).
// Uses color.a directly — stroke.opacity is intentionally excluded so the fill
// matches the user's chosen color exactly regardless of brush preset opacity.
function strokeStyleForKind(stroke) {
  const layerKind = String(stroke?.layerKind || "paint");
  const toolKind = String(stroke?.toolKind || "pen");
  if (toolKind === "eraser" || layerKind === "mask") return "rgba(255,255,255,1)";
  const c = stroke?.color || { r: 1, g: 0.25, b: 0.25, a: 1 };
  const alpha = Math.max(0, Math.min(1, Number(c.a ?? 1)));
  return `rgba(${Math.round(Number(c.r || 0) * 255)},${Math.round(Number(c.g || 0) * 255)},${Math.round(Number(c.b || 0) * 255)},${alpha})`;
}

// ─── Curve Helpers ────────────────────────────────────────────────────────────

// ─── Stamp Drawing ────────────────────────────────────────────────────────────

// Place one stamp image at (ox, oy) applying latitude correction and angle rotation.
// For chisel stamps the angle is baked via ctx.rotate so the nib stays oriented.
// Seam width accounts for the bounding box of the rotated stamp.
function _placeStamp(sc, ox, oy, rv, rh) {
  const ang = sc.angle;
  const W   = sc.desc.width;

  function _draw(x, y) {
    if (ang === 0) {
      sc.ctx.drawImage(sc.stampTex, x - rh, y - rv, rh * 2, rv * 2);
    } else {
      sc.ctx.save();
      sc.ctx.translate(x, y);
      sc.ctx.rotate(ang);
      sc.ctx.drawImage(sc.stampTex, -rh, -rv, rh * 2, rv * 2);
      sc.ctx.restore();
    }
  }

  // Seam wrap: use rotated bounding-box half-width so angled stamps near u=0/1 are mirrored.
  const seamW = ang === 0
    ? rh
    : rh * Math.abs(Math.cos(ang)) + rv * Math.abs(Math.sin(ang));
  // sc.bounds, when the caller keeps it, collects where the stamps land (pano_paint_damage.js).
  const seamH = ang === 0
    ? rv
    : rh * Math.abs(Math.sin(ang)) + rv * Math.abs(Math.cos(ang));
  const place = (x, y) => {
    _draw(x, y);
    if (sc.bounds) sc.bounds = addRect(sc.bounds, shapeRect(x - seamW, y - seamH, x + seamW, y + seamH, W, sc.desc.height));
  };
  place(ox, oy);
  if (ox - seamW < 0) place(ox + W, oy);
  if (ox + seamW > W) place(ox - W, oy);
}

// Draw one stamp at (cx, cy) using the shared stamp context sc.
// sc = { ctx, stampTex, radiusPx, spacingPx, desc, aspect, angle, stampKind, scatter }
//
// ERP latitude correction: horizontal radius is stretched by 1/cos(lat).
// Preset aspect further scales the horizontal radius (e.g. 2.6 for a wide chisel marker).
// For scatter brushes: each call spawns sc.scatter.count sub-stamps at random positions
// within sc.scatter.radius × radiusPx, using a deterministic position-seeded PRNG.
function _drawSingleStamp(sc, cx, cy, widthScale) {
  const ws = Math.max(0.01, Number.isFinite(widthScale) ? widthScale : 1);

  if (sc.scatter) {
    const { radius, count } = sc.scatter;
    const scatterPx = radius * sc.radiusPx * ws;
    const seed0 = _stampSeed(cx, cy);
    for (let i = 0; i < count; i++) {
      const a = _seededFloat(seed0 + i * 2) * Math.PI * 2;
      const d = Math.sqrt(_seededFloat(seed0 + i * 2 + 1)) * scatterPx;
      const sx = cx + Math.cos(a) * d;
      const sy = cy + Math.sin(a) * d;
      const subRv = Math.max(0.5, sc.radiusPx * ws * 0.48);
      const lat   = (0.5 - sy / Math.max(1, sc.desc.height)) * Math.PI;
      const lonScale = sc.latitudeCorrection ? (1 / Math.max(0.05, Math.cos(lat))) : 1;
      const rh    = subRv * sc.aspect * lonScale;
      _placeStamp(sc, sx, sy, subRv, rh);
    }
    return;
  }

  const rv = Math.max(0.5, sc.radiusPx * ws);
  const lat = (0.5 - cy / Math.max(1, sc.desc.height)) * Math.PI;
  const lonScale = sc.latitudeCorrection ? (1 / Math.max(0.05, Math.cos(lat))) : 1;
  const rh  = rv * sc.aspect * lonScale;
  _placeStamp(sc, cx, cy, rv, rh);
}

// Draw a complete freehand stroke using the stamp engine.
// Uses the same centripetal Catmull-Rom + midpoint-anchor algorithm as live rendering,
// so rebuild (undo/redo) looks identical to the stroke as it was drawn.
// Returns where it drew (pano_paint_damage.js rectangles).
function drawStampStroke(ctx, stroke, descriptor) {
  const points = getRawPoints(stroke);
  if (!ctx || points.length === 0) return [];

  const W = descriptor.width;
  const H = descriptor.height;
  const sc = { ...buildStampContext(ctx, stroke, descriptor), bounds: [] };

  ctx.save();
  ctx.globalCompositeOperation = "source-over";

  // Convert UV to pixel space, unwrapping the seam so consecutive points always
  // take the short path (|dx| ≤ W/2). Stamps near x<0 or x>W are mirrored by _placeStamp.
  const pts = [];
  for (let i = 0; i < points.length; i++) {
    let px = Number(points[i].u || 0) * W;
    const py = Number(points[i].v || 0) * H;
    if (i > 0 && Math.abs(px - pts[i - 1].x) > W * 0.5) {
      px += px < pts[i - 1].x ? W : -W;
    }
    pts.push({ x: px, y: py });
  }

  // First stamp at p0
  _drawSingleStamp(sc, pts[0].x, pts[0].y, 1);

  if (pts.length === 1) { ctx.restore(); return sc.bounds; }

  // Mirror appendStrokePoint: midpoint anchors + centripetal CR
  let pprev = pts[0];
  let prev  = pts[0];
  let lastMid = pts[0];
  let dist = 0;

  for (let i = 1; i < pts.length; i++) {
    const curr = pts[i];
    const mid = { x: (prev.x + curr.x) * 0.5, y: (prev.y + curr.y) * 0.5 };
    if (i === 1) {
      dist = _walkLinearStamps(sc, lastMid.x, lastMid.y, mid.x, mid.y, dist);
    } else {
      dist = _walkCRStamps(sc, pprev, lastMid, mid, curr, dist);
    }
    pprev = prev;
    prev = curr;
    lastMid = mid;
  }

  // Final tail: lastMid → last raw point
  if (pts.length === 2) {
    _walkLinearStamps(sc, lastMid.x, lastMid.y, prev.x, prev.y, dist);
  } else {
    _walkCRStamps(sc, pprev, lastMid, prev, prev, dist);
  }

  ctx.restore();
  return sc.bounds;
}

// Returns where it drew (pano_paint_damage.js rectangles).
function drawLassoFillNative(ctx, stroke, descriptor) {
  const points = Array.isArray(stroke?.geometry?.points) ? stroke.geometry.points : [];
  if (!ctx || points.length < 3) return [];

  const w = descriptor.width;
  const h = descriptor.height;
  const style = strokeStyleForKind(stroke);

  // Convert to pixel space and seam-unwrap so the polygon takes the short path
  // across any u=0/u=1 crossing (same strategy as drawStampStroke).
  const px = [];
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (let i = 0; i < points.length; i++) {
    const c = getTargetCoord(points[i]);
    let x = Number(c.x || 0) * w;
    if (i > 0 && Math.abs(x - px[i - 1].x) > w * 0.5) {
      x += x < px[i - 1].x ? w : -w;
    }
    const y = Number(c.y || 0) * h;
    px.push({ x, y });
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }

  let bounds = [];
  function drawPoly(offsetX) {
    ctx.beginPath();
    ctx.moveTo(px[0].x + offsetX, px[0].y);
    for (let i = 1; i < px.length; i++) ctx.lineTo(px[i].x + offsetX, px[i].y);
    ctx.closePath();
    ctx.fill();
    bounds = addRect(bounds, shapeRect(minX + offsetX, minY, maxX + offsetX, maxY, w, h));
  }

  ctx.save();
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = style;
  drawPoly(0);
  if (minX < 0) drawPoly(w);    // polygon crosses seam leftward → mirror to right half
  if (maxX > w) drawPoly(-w);   // polygon crosses seam rightward → mirror to left half
  ctx.restore();
  return bounds;
}

// Draw a stroke to the given ctx.
// Eraser strokes are rendered as WHITE marks; caller applies destination-out when compositing.
// For non-eraser strokes, stroke.opacity is applied when compositing onto ctx.
// Returns where it drew (pano_paint_damage.js rectangles).
function drawStrokeToSurface(ctx, stroke, descriptor) {
  const kind = String(stroke?.geometry?.geometryKind || "");
  if (kind === "lasso_fill") {
    return drawLassoFillNative(ctx, stroke, descriptor);
  }
  const isEraser = String(stroke?.toolKind || "") === "eraser";
  const opacity = isEraser ? 1 : Math.max(0, Math.min(1, Number(stroke?.opacity ?? 1)));
  if (opacity >= 0.999) {
    return drawStampStroke(ctx, stroke, descriptor);
  } else {
    // Two-step composite: draw stamps at full flow into a shared temp surface,
    // then composite at stroke opacity. Ensures correct flat/accumulate behaviour on rebuild.
    _strokeOpacityTmp = resizeSurface(_strokeOpacityTmp, descriptor.width, descriptor.height);
    clearSurface(_strokeOpacityTmp);
    const bounds = drawStampStroke(_strokeOpacityTmp.ctx, stroke, descriptor);
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.drawImage(_strokeOpacityTmp.canvas, 0, 0);
    ctx.restore();
    return bounds;
  }
}

// Apply destination-out: erase target where eraserCanvas has white marks.
function applyEraserToSurface(targetCtx, eraserCanvas) {
  targetCtx.save();
  targetCtx.globalCompositeOperation = "destination-out";
  targetCtx.drawImage(eraserCanvas, 0, 0);
  targetCtx.restore();
}

function targetKeyOf(descriptor) {
  return descriptor.kind === "ERP_GLOBAL" ? "erp" : `frame:${String(descriptor.frameId || "")}`;
}

// ─── Incremental Stamp Helpers ────────────────────────────────────────────────

// Shared context passed to stamp-walk helpers to keep parameter counts small.
// { ctx, stampTex, radiusPx, spacingPx, desc }  where desc = { width, height }

// Walk stamps along a straight segment (ax,ay)→(bx,by). Returns new distSinceStamp.
function _walkLinearStamps(sc, ax, ay, bx, by, distSinceStamp) {
  const dx = bx - ax;
  const dy = by - ay;
  const segLen = Math.hypot(dx, dy);
  if (segLen < 1e-9) return distSinceStamp;
  let toNext = sc.spacingPx - distSinceStamp;
  while (toNext <= segLen) {
    const t = toNext / segLen;
    _drawSingleStamp(sc, ax + dx * t, ay + dy * t, 1);
    toNext += sc.spacingPx;
  }
  return segLen - toNext + sc.spacingPx;
}

// Walk stamps along a centripetal Catmull-Rom segment from p1 to p2.
// p0 and p3 are the flanking points used to compute entry/exit tangents.
// All points are {x, y} in pixel space. Returns new distSinceStamp.
// Centripetal parameterization (alpha=0.5) avoids overshoot at uneven point spacing.
function _walkCRStamps(sc, p0, p1, p2, p3, distSinceStamp) {
  // Knot intervals: sqrt of Euclidean distance (centripetal, alpha=0.5)
  const eps = 1e-4;
  const d01 = Math.sqrt(Math.hypot(p1.x - p0.x, p1.y - p0.y)) + eps;
  const d12 = Math.sqrt(Math.hypot(p2.x - p1.x, p2.y - p1.y)) + eps;
  const d23 = Math.sqrt(Math.hypot(p3.x - p2.x, p3.y - p2.y)) + eps;

  const t0 = 0;
  const t1 = d01;
  const t2 = t1 + d12;
  const t3 = t2 + d23;
  const dt = t2 - t1;

  // Walk 16 linear sub-segments along the CR curve from p1 to p2
  const N = 16;
  let dist = distSinceStamp;
  let prevX = p1.x;
  let prevY = p1.y;

  for (let i = 1; i <= N; i++) {
    const t = t1 + dt * i / N;

    // Barry-Goldman non-uniform Catmull-Rom evaluation
    const A1x = ((t1 - t) * p0.x + (t - t0) * p1.x) / (t1 - t0);
    const A1y = ((t1 - t) * p0.y + (t - t0) * p1.y) / (t1 - t0);
    const A2x = ((t2 - t) * p1.x + (t - t1) * p2.x) / (t2 - t1);
    const A2y = ((t2 - t) * p1.y + (t - t1) * p2.y) / (t2 - t1);
    const A3x = ((t3 - t) * p2.x + (t - t2) * p3.x) / (t3 - t2);
    const A3y = ((t3 - t) * p2.y + (t - t2) * p3.y) / (t3 - t2);

    const B1x = ((t2 - t) * A1x + (t - t0) * A2x) / (t2 - t0);
    const B1y = ((t2 - t) * A1y + (t - t0) * A2y) / (t2 - t0);
    const B2x = ((t3 - t) * A2x + (t - t1) * A3x) / (t3 - t1);
    const B2y = ((t3 - t) * A2y + (t - t1) * A3y) / (t3 - t1);

    const Cx = ((t2 - t) * B1x + (t - t1) * B2x) / (t2 - t1);
    const Cy = ((t2 - t) * B1y + (t - t1) * B2y) / (t2 - t1);

    dist = _walkLinearStamps(sc, prevX, prevY, Cx, Cy, dist);
    prevX = Cx;
    prevY = Cy;
  }
  return dist;
}

// ─── Incremental Stamp Append ─────────────────────────────────────────────────

// Append one point to the active freehand stroke using centripetal Catmull-Rom stamp placement.
// x, y are normalized target-space coords [0, 1].
//
// Algorithm: midpoint anchors + centripetal CR (mirrors drawStampStroke exactly).
//   P0        → stamp at P0; initialize pprev=prev=P0, lastMid=P0
//   P1        → linear walk from lastMid to mid(P0,P1); shift history
//   P2 .. Pn  → CR walk from lastMid to mid(Pn-1,Pn), guided by pprev and Pn
//   commit    → CR tail from lastMid to last raw point (ghost = last raw point)
//
// activeStroke state:
//   pprev           — two raw points ago (pixel space {x,y})
//   prev            — one raw point ago  (pixel space {x,y})
//   lastMidX/Y      — midpoint anchor stamps were last drawn up to
//   radiusPx, stampTex, spacingPx, distSinceStamp
//   isEraser, layerKind, pointCount
// Returns where it drew (pano_paint_damage.js rectangles).
function appendStrokePoint(target, x, y, stroke) {
  const ctx = target.currentStroke.ctx;
  if (!ctx) return [];

  const desc = target.descriptor;
  const W  = desc.width;
  const py = y * desc.height;
  const as = target.activeStroke;
  // Seam-unwrap: choose whichever side of the wrap is closer to the previous point
  // so the stamp walk takes the short path across any seam crossing.
  let px = x * W;
  if (as && Math.abs(px - as.prev.x) > W * 0.5) {
    px += px < as.prev.x ? W : -W;
  }

  if (!as) {
    // First point: build stamp context, place initial stamp, initialize CR history.
    const sc0 = { ...buildStampContext(ctx, stroke, desc), bounds: [] };
    const strokeOpacity = Math.max(0, Math.min(1, Number(stroke?.opacity ?? 1)));
    const velocityWidthFactor = Math.max(0, Number(stroke?.velocityWidthFactor ?? 0));
    const isEraser = String(stroke?.toolKind || "") === "eraser";
    const layerKind = String(stroke?.layerKind || "paint");

    ctx.globalCompositeOperation = "source-over";
    _drawSingleStamp(sc0, px, py, 1);

    target.activeStroke = {
      pprev: { x: px, y: py },
      prev:  { x: px, y: py },
      lastMidX: px, lastMidY: py,
      stampTex: sc0.stampTex, radiusPx: sc0.radiusPx, spacingPx: sc0.spacingPx,
      aspect: sc0.aspect, angle: sc0.angle, stampKind: sc0.stampKind, scatter: sc0.scatter,
      latitudeCorrection: sc0.latitudeCorrection,
      strokeOpacity, velocityWidthFactor,
      distSinceStamp: 0,
      isEraser, layerKind,
      pointCount: 1,
    };
    markDirty(target);
    return sc0.bounds;
  }

  const midX = (as.prev.x + px) * 0.5;
  const midY = (as.prev.y + py) * 0.5;

  ctx.globalCompositeOperation = "source-over";
  const sc = {
    ctx,
    stampTex: as.stampTex, radiusPx: as.radiusPx, spacingPx: as.spacingPx,
    desc, aspect: as.aspect, angle: as.angle, stampKind: as.stampKind, scatter: as.scatter,
    latitudeCorrection: as.latitudeCorrection,
    bounds: [],
  };

  if (as.pointCount === 1) {
    // Second point: linear from first stamp to first midpoint anchor.
    as.distSinceStamp = _walkLinearStamps(sc, as.lastMidX, as.lastMidY, midX, midY, as.distSinceStamp);
  } else {
    // Third+ point: centripetal CR from lastMid to newMid, guided by pprev and curr.
    as.distSinceStamp = _walkCRStamps(
      sc,
      as.pprev,
      { x: as.lastMidX, y: as.lastMidY },
      { x: midX, y: midY },
      { x: px, y: py },
      as.distSinceStamp,
    );
  }

  as.pprev = as.prev;
  as.prev  = { x: px, y: py };
  as.lastMidX = midX;
  as.lastMidY = midY;
  as.pointCount++;
  markDirty(target);
  return sc.bounds;
}

// ─── Engine Factory ────────────────────────────────────────────────────────────
//
// ADR 0009: Display List Unification
//
//   Each actionGroup is a first-class display object with its own ERP paint surface.
//   Mask stays as a single separate surface (never in the display list).
//   composeAllLayers() blends the groups in z-order (the mask is not in it), when getErpTarget asks.
//
//   getErpTarget(orderedGroupIds?) returns a view compatible with the old single-target
//   interface so pano_editor.js callers need minimal changes:
//     .displayPaint.canvas  — final composited ERP (all groups, with the live stroke)
//     .committedMask.canvas — raw mask ERP (for WebGL setMaskErp)
//     .descriptor
//
//   Display canvases (pano_paint_damage.js): the views draw each group's display and the mask display
//   (getGroupDisplay, getMaskDisplay), each with a damage log, so a stroke step draws them again and the views
//   upload them only where the step drew. A group's display is its committed paint, or a canvas with the live
//   stroke over it while the stroke shows on the group; the group's damage log follows the display across
//   both canvases (where one differs from the other), so a view keeps its texture when the display moves to the
//   other canvas (pano_three_view.js createLayerTextures). The committed surfaces (what the node gets) are
//   always drawn whole, and a rebuild draws again only the groups whose strokes changed.

// The values of a stroke record in order (keys too), to tell whether a stroke changed between rebuilds: the
// editor changes strokes in place.
function strokeValues(value, out = []) {
  if (value === null || typeof value !== "object") {
    out.push(value);
  } else if (Array.isArray(value)) {
    out.push("[", value.length);
    for (const item of value) strokeValues(item, out);
  } else {
    out.push("{");
    for (const key of Object.keys(value)) {
      out.push(key);
      strokeValues(value[key], out);
    }
    out.push("}");
  }
  return out;
}

function sameValues(a, b) {
  if (a.length !== b.length) return false;
  for (let index = 0; index < a.length; index += 1) if (!Object.is(a[index], b[index])) return false;
  return true;
}

function rectsOverlap(a, b) {
  if (a === null || b === null) return true;
  return a.some((x) => b.some((y) => x.x0 < y.x1 && y.x0 < x.x1 && x.y0 < y.y1 && y.y0 < x.y1));
}

export function createPaintEngineManager(options = {}) {
  const ERP_W = Math.max(1, Math.round(Number(options?.width || 2048)));
  const ERP_H = Math.max(1, Math.round(Number(options?.height || 1024)));
  const ERP_DESC = { kind: "ERP_GLOBAL", width: ERP_W, height: ERP_H };
  const ERP_RECT = { x0: 0, y0: 0, x1: ERP_W, y1: ERP_H };
  // Per-actionGroup paint surfaces.  Keyed by String(actionGroupId).
  const groupTargets = new Map();
  // The values of the strokes read by a rebuild told that strokes do not change in place (rebuildCommitted's
  // immutableStrokes), by stroke object.
  const knownValues = new WeakMap();
  let valuesOf = strokeValues;

  // Shared current-stroke scratch canvas — only one group OR mask is active at a time,
  // so a single 8MB canvas suffices for all live-stroke rendering.
  const sharedCurrentStroke = createCanvasSurface(ERP_W, ERP_H);
  // Where the shared stroke canvas changed, and where it may have pixels (rectangles; null: anywhere).
  const strokeDamage = createDamageLog();
  let strokeInk = [];

  // Single mask surface — not part of the display list.
  const maskTarget = {
    descriptor: ERP_DESC,
    committedMask: createCanvasSurface(ERP_W, ERP_H),
    damage: createDamageLog(),
    currentStroke: sharedCurrentStroke,
    activeStroke: null,
    displayDirty: true,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: false,
    lassoPreviewActive: false,
    // The mask strokes it was last rebuilt from ({ values, rects }), and where it changed since.
    drawn: [],
    changed: [],
  };
  const paintScratchTarget = {
    actionGroupId: "__eraser__",
    descriptor: ERP_DESC,
    committedPaint: createCanvasSurface(ERP_W, ERP_H),
    currentStroke: sharedCurrentStroke,
    activeStroke: null,
    displayDirty: true,
    lassoPreviewActive: false,
  };

  // Final composited display (all groups in z-order + mask overlay).
  const globalDisplay = createCanvasSurface(ERP_W, ERP_H);

  // Active stroke tracking.
  let activeGroupId = null;   // null when mask is active or idle
  let activeLayerKind = "";   // "paint" | "mask" | ""
  let previousOrderedGroupIds = null;
  // The mask display: { surface, damage, seen }.
  let maskDisplay = null;

  // ─── Group Target Helpers ──────────────────────────────────────────────────

  // A group: its committed paint, the damage log of its display (`display`), the canvas with the live stroke
  // while it shows (`preview`: { surface, seen }), where its paint may have pixels (`ink`), the strokes it was
  // last rebuilt from (`drawn`, { values, rects, eraser }) and where its committed paint changed since (`changed`).
  function createGroupTarget(actionGroupId) {
    return {
      actionGroupId,
      descriptor: ERP_DESC,
      committedPaint: createCanvasSurface(ERP_W, ERP_H),
      display: createDamageLog(),
      preview: null,
      ink: [],
      drawn: [],
      changed: [],
      currentStroke: sharedCurrentStroke,
      activeStroke: null,
      displayDirty: true,
      lassoPreviewActive: false,
    };
  }

  function ensureGroupTarget(actionGroupId) {
    let group = groupTargets.get(actionGroupId);
    if (!group) {
      group = createGroupTarget(actionGroupId);
      groupTargets.set(actionGroupId, group);
    }
    return group;
  }

  // Backward-compatible accessor: returns the currently active target (group or mask).
  // Editor code calls ensureTarget(descriptor) then passes the result to appendStrokePoint.
  function ensureTarget(_descriptor) {
    if (activeLayerKind === "mask") return maskTarget;
    if (!activeGroupId) return paintScratchTarget;
    return ensureGroupTarget(activeGroupId);
  }

  // A group's committed paint changed within rects (null: anywhere).
  function commitChanged(group, rects) {
    group.changed = joinRects(group.changed, rects);
    if (!group.preview) group.display.mark(rects);
  }

  // The group shows its committed paint again; it differs from the canvas with the live stroke only where the
  // stroke canvas has pixels.
  function endPreview(group, changed = strokeInk) {
    if (!group.preview) return;
    group.preview = null;
    group.display.mark(changed);
  }

  // ─── Shared stroke canvas ───────────────────────────────────────────────────

  // The shared stroke canvas was drawn on within rects.
  function inkStroke(rects) {
    strokeInk = joinRects(strokeInk, rects);
    strokeDamage.mark(rects);
  }

  // Clears the shared stroke canvas: it changes where it had pixels.
  function clearStroke() {
    clearSurface(sharedCurrentStroke);
    strokeDamage.mark(strokeInk);
    strokeInk = [];
  }

  // ─── Composition ────────────────────────────────────────────────────────────

// Composite all paint groups in display order.
// Mask remains an independent layer and must be consumed explicitly via
// committedMask / getMaskDisplay rather than being baked into displayPaint.
// orderedGroupIds: bottom → top (matches objects[] z-order).
// Groups not in the map are silently skipped.
// Composes directly from each group's committedPaint into globalDisplay —
// no per-group displayPaint intermediate canvas needed. Only getErpTarget reads it, so it is composed there.
  function composeAllLayers(orderedGroupIds) {
    const orderChanged = !previousOrderedGroupIds
      || previousOrderedGroupIds.length !== orderedGroupIds.length
      || orderedGroupIds.some((gid, index) => gid !== previousOrderedGroupIds[index]);
    const activePaintStroke = activeLayerKind === "paint"
      ? ((activeGroupId ? groupTargets.get(activeGroupId) : paintScratchTarget)?.activeStroke || null)
      : null;
    let anyDirty = maskTarget.displayDirty || paintScratchTarget.displayDirty || orderChanged;
    for (const gid of orderedGroupIds) {
      const group = groupTargets.get(gid);
      if (group?.displayDirty) { anyDirty = true; break; }
    }
    if (activePaintStroke) anyDirty = true;
    if (!anyDirty) return;

    // Reset dirty flags before drawing.
    maskTarget.displayDirty = false;
    paintScratchTarget.displayDirty = false;
    for (const gid of orderedGroupIds) {
      const group = groupTargets.get(gid);
      if (group) group.displayDirty = false;
    }
    previousOrderedGroupIds = [...orderedGroupIds];

    const gCtx = globalDisplay.ctx;
    clearSurface(globalDisplay);
    const activePaintEraser = !!activePaintStroke?.isEraser;

    for (const gid of orderedGroupIds) {
      const group = groupTargets.get(gid);
      if (!group) continue;

      const isActive = activeGroupId === group.actionGroupId && activeLayerKind === "paint";
      const as = isActive ? group.activeStroke : null;

      if (activePaintEraser) {
        // Paint eraser preview: apply current eraser stroke to every existing paint group.
        _eraserTmp = resizeSurface(_eraserTmp, ERP_W, ERP_H);
        clearSurface(_eraserTmp);
        _eraserTmp.ctx.drawImage(group.committedPaint.canvas, 0, 0);
        applyEraserToSurface(_eraserTmp.ctx, sharedCurrentStroke.canvas);
        gCtx.drawImage(_eraserTmp.canvas, 0, 0);
      } else {
        gCtx.drawImage(group.committedPaint.canvas, 0, 0);
        if (as) {
          const strokeOpacity = group.lassoPreviewActive
            ? 0.5
            : Math.max(0, Math.min(1, as.strokeOpacity ?? 1));
          gCtx.save();
          gCtx.globalAlpha = strokeOpacity;
          gCtx.drawImage(sharedCurrentStroke.canvas, 0, 0);
          gCtx.restore();
        }
      }
    }

  }

  // ─── Rebuild ────────────────────────────────────────────────────────────────

  // Draws a stroke list onto a cleared surface, as the whole rebuild draws it: paint strokes as they are, an
  // eraser through _eraserTmp. Returns the list as { values, rects, eraser } and whether a mask stroke painted.
  function drawStrokes(surface, strokes, desc) {
    clearSurface(surface);
    let painted = false;
    const drawn = strokes.map((stroke) => {
      const eraser = String(stroke?.toolKind || "pen") === "eraser";
      let rects;
      if (eraser) {
        _eraserTmp = resizeSurface(_eraserTmp, desc.width, desc.height);
        clearSurface(_eraserTmp);
        rects = drawStrokeToSurface(_eraserTmp.ctx, stroke, desc);
        applyEraserToSurface(surface.ctx, _eraserTmp.canvas);
      } else {
        rects = drawStrokeToSurface(surface.ctx, stroke, desc);
        painted = true;
      }
      return { values: valuesOf(stroke), rects, eraser };
    });
    return { drawn, painted };
  }

  // Where a surface drawn from `before` and drawn from `after` can differ: within the strokes that are not in
  // both lists' common start and end (a pixel no such stroke covers is drawn by the same strokes in both).
  function changedBetween(before, after) {
    let start = 0;
    while (start < before.length && start < after.length && sameValues(before[start].values, after[start].values)) start += 1;
    let end = 0;
    while (end < before.length - start && end < after.length - start
      && sameValues(before[before.length - 1 - end].values, after[after.length - 1 - end].values)) end += 1;
    let rects = [];
    for (const item of [...before.slice(start, before.length - end), ...after.slice(start, after.length - end)]) {
      rects = joinRects(rects, item.rects);
    }
    return rects;
  }

  // The strokes of the state drawn into the committed surfaces. A group or the mask is drawn again (whole) only
  // when its strokes changed or its committed pixels changed since the last rebuild; its display then changes
  // only where those strokes are. With `immutableStrokes` (a caller whose stroke records never change in place: the
  // new editor's states, studio/paint.js), a stroke object read before is not read again.
  function rebuildCommitted(state, { immutableStrokes = false } = {}) {
    valuesOf = immutableStrokes ? knownValuesOf : strokeValues;
    try {
      rebuildCommittedNow(state);
    } finally {
      valuesOf = strokeValues;
    }
  }

  function knownValuesOf(stroke) {
    if (!stroke || typeof stroke !== "object") return strokeValues(stroke);
    let values = knownValues.get(stroke);
    if (!values) {
      values = strokeValues(stroke);
      knownValues.set(stroke, values);
    }
    return values;
  }

  function rebuildCommittedNow(state) {
    for (const group of groupTargets.values()) {
      endPreview(group, null);
      group.activeStroke = null;
      markDirty(group);
    }
    clearStroke();
    maskTarget.activeStroke = null;
    markDirty(maskTarget);
    markDirty(paintScratchTarget);
    previousOrderedGroupIds = null;

    const allStrokes = [
      ...(Array.isArray(state?.painting?.paint?.strokes) ? state.painting.paint.strokes : []),
      ...(Array.isArray(state?.painting?.mask?.strokes) ? state.painting.mask.strokes : []),
    // Only ERP_GLOBAL strokes are supported. Legacy FRAME_LOCAL strokes are silently ignored.
    ].filter((stroke) => stroke?.targetSpace?.kind === "ERP_GLOBAL");
    const isMask = (stroke) => String(stroke?.layerKind || "paint") === "mask";
    const paint = allStrokes.filter((stroke) => !isMask(stroke));
    const mask = allStrokes.filter(isMask);

    // Each group's strokes: its own paint strokes and the paint erasers after its first one (an eraser before it
    // erases nothing of it).
    const lists = new Map([...groupTargets.keys()].map((gid) => [gid, []]));
    for (const stroke of paint) {
      if (String(stroke?.toolKind || "pen") === "eraser") {
        for (const list of lists.values()) if (list.length) list.push(stroke);
      } else {
        const gid = String(stroke?.actionGroupId || "__default__");
        ensureGroupTarget(gid);
        if (!lists.has(gid)) lists.set(gid, []);
        lists.get(gid).push(stroke);
      }
    }
    for (const [gid, list] of lists) {
      const group = groupTargets.get(gid);
      const values = list.map((stroke) => valuesOf(stroke));
      const same = group.changed !== null && group.changed.length === 0
        && values.length === group.drawn.length && values.every((item, index) => sameValues(item, group.drawn[index].values));
      if (same) continue;
      const { drawn } = drawStrokes(group.committedPaint, list, ERP_DESC);
      const ink = drawn.filter((item) => !item.eraser).reduce((all, item) => joinRects(all, item.rects), []);
      // Without paint before or after, a pixel is empty whatever the erasers.
      const rects = joinRects(group.changed, intersectRects(changedBetween(group.drawn, drawn), joinRects(group.ink, ink), ERP_W, ERP_H));
      group.drawn = drawn;
      group.changed = [];
      group.ink = ink;
      group.display.mark(rects);
    }

    const maskValues = mask.map((stroke) => valuesOf(stroke));
    const maskSame = maskTarget.changed !== null && maskTarget.changed.length === 0
      && maskValues.length === maskTarget.drawn.length && maskValues.every((item, index) => sameValues(item, maskTarget.drawn[index].values));
    if (!maskSame) {
      const { drawn, painted } = drawStrokes(maskTarget.committedMask, mask, maskTarget.descriptor);
      const rects = joinRects(maskTarget.changed, changedBetween(maskTarget.drawn, drawn));
      maskTarget.drawn = drawn;
      maskTarget.changed = [];
      maskTarget.painted = painted;
      maskTarget.damage.mark(rects);
    }
  }

  // ─── Stroke Lifecycle ────────────────────────────────────────────────────────

  function beginStroke(stroke, descriptor) {
    activeLayerKind = String(stroke?.layerKind || "");
    const isEraser = String(stroke?.toolKind || "") === "eraser";

    clearStroke();
    if (activeLayerKind === "mask") {
      activeGroupId = null;
      maskTarget.activeStroke = null;
      markDirty(maskTarget);
    } else {
      const group = isEraser
        ? paintScratchTarget
        : ensureGroupTarget(String(stroke?.actionGroupId || "__default__"));
      activeGroupId = isEraser ? "" : String(stroke?.actionGroupId || "__default__");
      group.activeStroke = null;
      markDirty(group);
    }
  }

  // One point of the active freehand stroke into the shared stroke canvas (appendStrokePoint).
  function appendPoint(target, x, y, stroke) {
    inkStroke(appendStrokePoint(target, x, y, stroke));
  }

  function commitActiveStroke(stroke, descriptor) {
    const layerKind = String(stroke?.layerKind || "paint");
    const isEraser = String(stroke?.toolKind || "") === "eraser";

    const target = layerKind === "mask"
      ? maskTarget
      : (isEraser ? paintScratchTarget : ensureGroupTarget(String(stroke?.actionGroupId || activeGroupId || "__default__")));
    const as = target.activeStroke;
    const targetDesc = target.descriptor;

    // Draw the pending tail: stamps placed up to lastMid; now draw lastMid → last raw point.
    if (as && as.pointCount > 1) {
      const ctx = target.currentStroke.ctx;
      ctx.globalCompositeOperation = "source-over";
      const sc = {
        ctx,
        stampTex: as.stampTex, radiusPx: as.radiusPx, spacingPx: as.spacingPx,
        desc: targetDesc, aspect: as.aspect, angle: as.angle,
        stampKind: as.stampKind, scatter: as.scatter, latitudeCorrection: as.latitudeCorrection,
        bounds: [],
      };
      if (as.pointCount === 2) {
        _walkLinearStamps(sc, as.lastMidX, as.lastMidY, as.prev.x, as.prev.y, as.distSinceStamp);
      } else {
        _walkCRStamps(sc, as.pprev, { x: as.lastMidX, y: as.lastMidY }, as.prev, as.prev, as.distSinceStamp);
      }
      inkStroke(sc.bounds);
    }

    // Redraw lasso fill at full opacity before merging (preview was at 50%).
    if (target.lassoPreviewActive) {
      clearStroke();
      inkStroke(drawLassoFillNative(target.currentStroke.ctx, stroke, targetDesc));
      target.lassoPreviewActive = false;
    }

    // The committed surfaces take the whole stroke canvas; they change only where it has pixels.
    const surface = layerKind === "mask" ? maskTarget.committedMask : target.committedPaint;
    if (isEraser && layerKind === "paint") {
      for (const group of groupTargets.values()) {
        applyEraserToSurface(group.committedPaint.ctx, target.currentStroke.canvas);
        endPreview(group);
        commitChanged(group, strokeInk);
        markDirty(group);
      }
    } else if (isEraser) {
      applyEraserToSurface(surface.ctx, target.currentStroke.canvas);
      target.changed = joinRects(target.changed, strokeInk);
      target.damage.mark(strokeInk);
    } else {
      if (layerKind === "mask") maskTarget.painted = true;
      const opacity = Math.max(0, Math.min(1, as?.strokeOpacity ?? 1));
      surface.ctx.save();
      surface.ctx.globalAlpha = opacity;
      surface.ctx.drawImage(target.currentStroke.canvas, 0, 0);
      surface.ctx.restore();
      if (layerKind === "mask") {
        target.changed = joinRects(target.changed, strokeInk);
        target.damage.mark(strokeInk);
      } else {
        endPreview(target);
        commitChanged(target, strokeInk);
        target.ink = joinRects(target.ink, strokeInk);
      }
    }

    if (panoPaintDebugEnabled()) {
      logPaintDebug("commit-bounds", {
        layerKind,
        toolKind: String(stroke?.toolKind || ""),
        targetKind: String(targetDesc?.kind || ""),
        targetWidth: Number(targetDesc?.width || 0),
        targetHeight: Number(targetDesc?.height || 0),
        targetViewMode: String(stroke?.targetSpace?.viewMode || ""),
        strokeAspect: Number(stroke?.aspect ?? 1),
        activeBounds: measureAlphaBounds(target.currentStroke.canvas),
        surfaceBounds: measureAlphaBounds(surface.canvas),
      });
    }

    clearStroke();
    target.activeStroke = null;
    markDirty(target);
    activeGroupId = null;
    activeLayerKind = "";
  }

  function cancelActiveStroke(descriptor) {
    if (activeLayerKind === "mask") {
      maskTarget.activeStroke = null;
      maskTarget.lassoPreviewActive = false;
      markDirty(maskTarget);
    } else if (activeLayerKind === "paint" && !activeGroupId) {
      paintScratchTarget.activeStroke = null;
      paintScratchTarget.lassoPreviewActive = false;
      markDirty(paintScratchTarget);
    } else if (activeGroupId) {
      const group = groupTargets.get(activeGroupId);
      if (group) {
        group.activeStroke = null;
        group.lassoPreviewActive = false;
        markDirty(group);
      }
    }
    // The groups show their committed paint again.
    for (const group of groupTargets.values()) endPreview(group);
    clearStroke();
    activeGroupId = null;
    activeLayerKind = "";
  }

  // Full-redraw path for lasso fill preview (polygon is short, O(n) acceptable).
  function updateActiveStroke(stroke, descriptor) {
    activeLayerKind = String(stroke?.layerKind || "");
    const kind = String(stroke?.geometry?.geometryKind || "");
    if (kind !== "lasso_fill") return;

    if (activeLayerKind === "mask") {
      clearStroke();
      inkStroke(drawLassoFillNative(maskTarget.currentStroke.ctx, stroke, maskTarget.descriptor));
      maskTarget.lassoPreviewActive = true;
      markDirty(maskTarget);
    } else {
      const isEraser = String(stroke?.toolKind || "") === "eraser";
      const group = isEraser
        ? paintScratchTarget
        : ensureGroupTarget(String(stroke?.actionGroupId || activeGroupId || "__default__"));
      activeGroupId = isEraser ? "" : String(stroke?.actionGroupId || activeGroupId || "__default__");
      clearStroke();
      inkStroke(drawLassoFillNative(group.currentStroke.ctx, stroke, group.descriptor));
      group.lassoPreviewActive = true;
      markDirty(group);
    }
  }

  // Returns a view compatible with the old single-target interface:
  //   .displayPaint.canvas  — composited ERP paint only (all paint groups in z-order)
  //   .committedMask.canvas — raw mask ERP for WebGL setMaskErp
  //   .descriptor
  // orderedGroupIds: optional display-order from editor's objects[] (bottom → top).
  // Defaults to Map insertion order when not provided.
  function getErpTarget(orderedGroupIds) {
    composeAllLayers(orderedGroupIds ?? [...groupTargets.keys()]);
    return {
      displayPaint: globalDisplay,
      committedMask: maskTarget.committedMask,
      descriptor: ERP_DESC,
    };
  }

  function getGroupTarget(actionGroupId) {
    return groupTargets.get(String(actionGroupId)) ?? null;
  }

  // Which rectangles of a display drawn from a committed surface (whose changes `committed` logs, or null when it
  // does not change while the display shows the stroke) and the stroke canvas changed since `seen` (null: none
  // drawn yet, the display shows the committed pixels; then it changes where the stroke canvas has pixels).
  // Where the stroke canvas has no pixels, the display is the committed surface's whatever the mode, so a change
  // of mode or of showsStroke draws it again where the stroke canvas has pixels or changed.
  function displayChanges(seen, committed, showsStroke, mode) {
    if (!seen) return strokeInk;
    let rects = committed ? committed.since(seen.committed) : [];
    if (showsStroke || seen.showsStroke) rects = joinRects(rects, strokeDamage.since(seen.stroke));
    if (showsStroke !== seen.showsStroke || mode !== seen.mode) rects = joinRects(rects, strokeInk);
    return rects;
  }

  // A display canvas as a paint layer source (pano_paint_layers.js): its media, its revision, and where it
  // changed since a revision before (changed(revision), pano_paint_damage.js).
  function displayLayer(canvas, damage) {
    return { media: canvas, revision: damage.revision, changed: damage.since };
  }

  // A paint group as the views draw it ({ media, revision, changed }, or null without the group): its committed
  // paint, or a canvas with the live stroke over it while it is drawn in this group or while the paint eraser
  // crosses the group's paint (a group the eraser does not reach shows its committed paint, which is what the
  // eraser would leave of it). The canvas with the stroke is drawn whole when the stroke starts showing, as
  // the committed paint with the stroke, and then again only where the stroke's pixels changed.
  function getGroupDisplay(actionGroupId) {
    const group = groupTargets.get(String(actionGroupId));
    if (!group) return null;
    const isActive = activeLayerKind === "paint" && activeGroupId === group.actionGroupId;
    const activePaintStroke = activeLayerKind === "paint"
      ? ((activeGroupId ? groupTargets.get(activeGroupId) : paintScratchTarget)?.activeStroke || null)
      : null;
    const eraser = !!activePaintStroke?.isEraser;
    const as = isActive ? group.activeStroke : null;
    if (!(as || (eraser && rectsOverlap(group.ink, strokeInk)))) {
      endPreview(group);
      return displayLayer(group.committedPaint.canvas, group.display);
    }
    const alpha = eraser ? 1 : (group.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, as?.strokeOpacity ?? 1)));
    const mode = eraser ? "erase" : `paint:${alpha}`;
    let rects = null;
    if (!group.preview) {
      group.preview = { surface: createCanvasSurface(ERP_W, ERP_H), seen: null };
      // It differs from the committed paint the display showed only where the stroke canvas has pixels.
      group.display.mark(strokeInk);
    } else {
      rects = displayChanges(group.preview.seen, null, true, mode);
    }
    const { ctx } = group.preview.surface;
    if (rects === null || rects.length) {
      for (const rect of rects ?? [ERP_RECT]) {
        clearRect(ctx, rect);
        drawRect(ctx, group.committedPaint.canvas, rect);
        ctx.save();
        if (eraser) ctx.globalCompositeOperation = "destination-out";
        else ctx.globalAlpha = alpha;
        drawRect(ctx, sharedCurrentStroke.canvas, rect);
        ctx.restore();
      }
      if (rects) group.display.mark(rects);
    }
    group.preview.seen = { stroke: strokeDamage.revision, showsStroke: true, mode };
    return displayLayer(group.preview.surface.canvas, group.display);
  }

  function getGroupDisplayCanvas(actionGroupId) {
    return getGroupDisplay(actionGroupId)?.media ?? null;
  }

  // The mask as the views draw it (hatched), with its live stroke ({ media, revision, changed }), or null
  // without a mask. The canvas is drawn again only where the mask's or its live stroke's pixels changed.
  function getMaskDisplay() {
    const stroke = activeLayerKind === "mask" ? maskTarget.activeStroke : null;
    if (!maskTarget.painted && (!stroke || stroke.isEraser)) {
      maskDisplay = null;
      return null;
    }
    const erase = !!stroke?.isEraser;
    const showsStroke = !!stroke;
    const mode = erase ? "erase" : "paint";
    const record = maskDisplay ?? { surface: createCanvasSurface(ERP_W, ERP_H), damage: createDamageLog(), seen: null };
    const rects = record.seen ? displayChanges(record.seen, maskTarget.damage, showsStroke, mode) : null;
    if (rects === null || rects.length) {
      const { ctx } = record.surface;
      for (const rect of rects ?? [ERP_RECT]) {
        clearRect(ctx, rect);
        if (erase) {
          _eraserTmp = resizeSurface(_eraserTmp, ERP_W, ERP_H);
          clearRect(_eraserTmp.ctx, rect);
          drawRect(_eraserTmp.ctx, maskTarget.committedMask.canvas, rect);
          _eraserTmp.ctx.save();
          _eraserTmp.ctx.globalCompositeOperation = "destination-out";
          drawRect(_eraserTmp.ctx, sharedCurrentStroke.canvas, rect);
          _eraserTmp.ctx.restore();
          drawMaskTint(ctx, _eraserTmp.canvas, rect);
        } else {
          drawMaskTint(ctx, maskTarget.committedMask.canvas, rect);
          if (stroke) drawMaskTint(ctx, sharedCurrentStroke.canvas, rect);
        }
      }
      record.damage.mark(rects);
    }
    record.seen = { committed: maskTarget.damage.revision, stroke: strokeDamage.revision, showsStroke, mode };
    maskDisplay = record;
    return displayLayer(record.surface.canvas, record.damage);
  }

  return {
    descriptor: ERP_DESC,
    rebuildCommitted,
    beginStroke,
    appendStrokePoint: appendPoint,
    updateActiveStroke,
    commitActiveStroke,
    cancelActiveStroke,
    getErpTarget,
    ensureTarget,
    getGroupTarget,
    getGroupDisplay,
    getGroupDisplayCanvas,
    getMaskDisplay,
  };
}
