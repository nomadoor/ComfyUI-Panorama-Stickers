// The painting's layers, its stroke groups and their z_index on the Sky's one axis (docs/scene-state-v2.md `painting`,
// "Sky の重なり順"), the points a stroke is drawn along, and a stroke group's frame on the sphere (docs/studio-ui.md
// "ペイントのまとまり").
import { BRUSH_PRESETS, DEFAULT_BRUSH_PRESET_ID } from "../pano_brush_presets.js";
import { DEG2RAD, cameraBasis, dot, tangentDirection } from "../pano_camera_math.js";
import { clamp } from "../pano_math.js";
import { directionOfErpPoint, erpPointOfDirection, shortestWrappedDelta } from "../pano_paint_sphere.js";
import { brushPresetIdForTool } from "./record.js";

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
