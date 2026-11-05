// The paint eraser (docs/studio-ui.md "ペイントのまとまり", docs/render-contract.md "ペイントのストロークの描き方"): it
// turns the paint it touches into raster objects of what is left.
import { clamp } from "../pano_math.js";
import { pixelRangesMeet, rasterObjectPixelRanges } from "../pano_paint_display.js";
import { shortestWrappedDelta, stampHalfWidthPx } from "../pano_paint_sphere.js";
import { paintingGroups, strokePoints } from "./groups.js";
import { createRasterFrozenObjectsFromCanvas, createRasterSurface, getNativeRadiusPxForStrokePoint, rasterizeStrokeToSurface } from "./raster.js";

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

  // The ERP box of a stroke group's points, padded by a stamp's radius down and by its half width at the most polar
  // row across (docs/studio-ui.md "ペイントのまとまり", docs/render-contract.md "ペイントのストロークの描き方": the
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
    // A stamp's vertical radius on this ERP (the widest of the strokes', wider nibs counted) pads it down; across, a
    // stamp reaches stampHalfWidthPx at the group's most polar row (the whole width where that is half of it).
    const radius = strokes.reduce((max, stroke) => Math.max(max, getNativeRadiusPxForStrokePoint(stroke, null, width)
      * Math.max(1, Number(stroke?.aspect ?? 1))), 0.5);
    const pad = radius / height;
    const polar = Math.min(minV, 1 - maxV);
    const across = stampHalfWidthPx(radius, 1, Math.max(0, polar - pad), width);
    if (across >= width * 0.5) {
      minU = 0;
      maxU = 1;
    } else {
      minU -= across / width;
      maxU += across / width;
    }
    minV -= pad; maxV += pad;
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
