// The paint objects the editors grab (docs/studio-ui.md "ペイントのまとまり"): stroke groups (the strokes of one
// actionGroupId) and paint raster objects. Their hits on screen, how a drag moves and scales them, the Sky's z order
// they are put back into, and what deleting one takes. Pure: the old editor (editor/items.js, hit_test.js,
// paint_layers.js, object_geometry.js, pointer_transform.js, selection.js, commands.js) and the new one
// (studio/stage_objects.js, session.js) both call these, so the two move and order the paint the same way.
//
// The new editor selects a paint object by the id of its Sky layer (pano_paint_layers.js skyPaintLayers): a stroke group
// as `paint_group:<actionGroupId>`, a raster object as `raster:<id>` (paintObjectRow, paintObjectOf).
//
// Points are ERP points { u, v } (u wraps in 0..1, v runs 0..1 from the top); screen points are { x, y } px.
import { BRUSH_PRESETS, DEFAULT_BRUSH_PRESET_ID } from "./pano_brush_presets.js";
import { clamp, dist2, distToSegment2, pointInPoly } from "./pano_math.js";
import { shortestWrappedDelta, syncPaintGroups } from "./pano_paint_strokes.js";

const DEG2RAD = Math.PI / 180;

// How near (px) a corner handle of a selected paint object is hit.
export const PAINT_CORNER_HIT_PX = 11;
// A raster object is hit where its pixel's alpha (0..255) is over this.
export const RASTER_HIT_ALPHA = 8;

// --- ERP points.

// `point` moved by (du, dv): u wraps, v stays in 0..1.
export function translateErpPoint(point, du, dv) {
  if (!point || typeof point !== "object") return point;
  return {
    ...point,
    u: ((Number(point.u || 0) + Number(du || 0)) % 1 + 1) % 1,
    v: clamp(Number(point.v || 0) + Number(dv || 0), 0, 1),
  };
}

// `point` turned by rotationDeg and scaled by `scale` (at least 0.02) about `center`, in ERP u and v.
export function transformErpPointAround(point, center, scale = 1, rotationDeg = 0) {
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

// The point transformErpPointAround takes to `point` (v not clamped).
export function inverseTransformErpPointAround(point, center, scale = 1, rotationDeg = 0) {
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

// --- Stroke groups.

// The points a stroke is drawn and hit along: a lasso's outline, else its processed, raw or recorded points.
export function strokePoints(stroke) {
  const geometry = stroke?.geometry || null;
  return geometry?.geometryKind === "lasso_fill"
    ? geometry?.points
    : (geometry?.processedPoints || geometry?.rawPoints || geometry?.points || []);
}

// The mean of the strokes' points (u averaged the short way round from the first), { u: 0.5, v: 0.5 } without any.
export function strokeGroupCenterUv(strokes) {
  const pts = [];
  strokes.forEach((stroke) => {
    const src = strokePoints(stroke);
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

// Writes map(point) of each point list (points, rawPoints, processedPoints) of the strokes of the group `gid` in
// `strokes`, from the same stroke in `sources` (by id) when it is there, else from itself. Returns whether any changed.
function mapStrokeGroupPoints(strokes, gid, sources, map) {
  const sourceMap = Array.isArray(sources)
    ? new Map(sources.map((stroke) => [String(stroke?.id || ""), stroke]))
    : null;
  let changed = false;
  strokes.forEach((stroke) => {
    if (String(stroke?.actionGroupId || "").trim() !== gid) return;
    const source = sourceMap?.get(String(stroke?.id || "")) || stroke;
    const geometry = stroke?.geometry;
    const sourceGeometry = source?.geometry;
    if (!geometry || !sourceGeometry) return;
    for (const key of ["points", "rawPoints", "processedPoints"]) {
      if (!Array.isArray(sourceGeometry[key])) continue;
      geometry[key] = sourceGeometry[key].map(map);
      changed = true;
    }
  });
  return changed;
}

// Moves the stroke group `gid` of the stroke list `strokes` by (du, dv) from `snapshots` (its strokes as a drag
// started; null moves them from where they are). Returns whether it changed a point.
export function offsetStrokeGroup(strokes, gid, du, dv, snapshots = null) {
  return mapStrokeGroupPoints(strokes, gid, snapshots, (pt) => translateErpPoint(pt, du, dv));
}

// Scales the stroke group `gid` of `strokes` by `scale` and turns it by rotationDeg about `centerUv`, from
// `sources` (its strokes as a drag started; null transforms them where they are). Returns whether it changed a point.
export function transformStrokeGroup(strokes, gid, scale, rotationDeg, sources, centerUv) {
  return mapStrokeGroupPoints(strokes, gid, sources, (pt) => transformErpPointAround(pt, centerUv, scale, rotationDeg));
}

// The four ERP corners (top left, top right, bottom right, bottom left) of a stroke group's frame (strokeGroupFrame),
// none without one.
export function frameCornersUv(frame) {
  if (!frame?.centerUv) return [];
  const centerU = Number(frame.centerUv.u || 0);
  const centerV = Number(frame.centerUv.v || 0);
  const halfW = Number(frame.halfW || 0);
  const halfH = Number(frame.halfH || 0);
  return [
    { u: ((centerU - halfW) % 1 + 1) % 1, v: clamp(centerV - halfH, 0, 1) },
    { u: ((centerU + halfW) % 1 + 1) % 1, v: clamp(centerV - halfH, 0, 1) },
    { u: ((centerU + halfW) % 1 + 1) % 1, v: clamp(centerV + halfH, 0, 1) },
    { u: ((centerU - halfW) % 1 + 1) % 1, v: clamp(centerV + halfH, 0, 1) },
  ];
}

// The width (px) a stroke is hit within on screen, from its size and its brush preset `presetId`.
export function strokeHitLineWidth(stroke, presetId) {
  const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
  return Math.max(10, Number(stroke?.size || 10) * Math.max(0.1, Number(preset?.sizeScale ?? 1)) + 10);
}

// Whether the screen point `p` hits a stroke group drawn as `paths` ([{ points, closed, lineWidth }], screen px):
// inside a closed (lasso) path, or within max(8, lineWidth / 2 + 6) px of a path's line.
export function strokePathsHit(p, paths) {
  for (const path of Array.isArray(paths) ? paths : []) {
    const pts = Array.isArray(path?.points) ? path.points : [];
    if (!pts.length) continue;
    if (path.closed && pts.length >= 3 && pointInPoly(p, pts)) return true;
    const threshold = Math.max(8, Number(path?.lineWidth || 0) * 0.5 + 6);
    for (let i = 0; i < pts.length - 1; i += 1) {
      if (distToSegment2(p, pts[i], pts[i + 1]) <= threshold * threshold) return true;
    }
    if (pts.length === 1 && dist2(p, pts[0]) <= threshold * threshold) return true;
  }
  return false;
}

// The corner handle of a selected paint object's screen geometry `geom` ({ center, corners }) under `p`:
// { kind: "scale", cornerIdx, cursor }, or null.
export function paintCornerHandle(geom, p) {
  const cornerIdx = geom.corners.findIndex((c) => dist2(c, p) <= PAINT_CORNER_HIT_PX * PAINT_CORNER_HIT_PX);
  if (cornerIdx < 0) return null;
  const c = geom.corners[cornerIdx];
  const vx = c.x - geom.center.x;
  const vy = c.y - geom.center.y;
  const cursor = (vx * vy) >= 0 ? "nwse-resize" : "nesw-resize";
  return { kind: "scale", cornerIdx, cursor };
}

// --- Raster objects.

// Moves the raster object `item` by (du, dv) from `snapshot` (it as a drag started; null moves it from where it is):
// its transform's du, and its dv kept in -1..1.
export function offsetRasterObject(item, du, dv, snapshot = null) {
  const source = snapshot && typeof snapshot === "object" ? snapshot : item;
  const sourceTf = source?.transform || {};
  const nextDu = Number(sourceTf.du || 0) + Number(du || 0);
  const nextDv = clamp(Number(sourceTf.dv || 0) + Number(dv || 0), -1, 1);
  if (!item.transform) item.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 };
  item.transform.du = nextDu;
  item.transform.dv = nextDv;
  return true;
}

// Scales the raster object `item` by `scale` from `snapshot` (null: from where it is), kept in 0.01..100.
export function scaleRasterObject(item, scale = 1, snapshot = null) {
  const source = snapshot && typeof snapshot === "object" ? snapshot : item;
  const sourceTf = source?.transform || {};
  const sourceScale = Math.max(0.01, Number(sourceTf.scale || 1));
  const nextScale = clamp(sourceScale * Math.max(0.01, Number(scale || 1)), 0.01, 100);
  if (!item.transform) item.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 };
  item.transform.scale = nextScale;
  return true;
}

// The ERP center of a raster object as it is moved.
export function rasterObjectCenterUv(item) {
  const bbox = item?.bbox || null;
  const tf = item?.transform || {};
  if (!bbox) return { u: 0.5, v: 0.5 };
  const centerU = (Number(bbox.u0 || 0) + Number(bbox.u1 || 0)) * 0.5 + Number(tf.du || 0);
  return {
    u: ((centerU % 1) + 1) % 1,
    v: clamp((Number(bbox.v0 || 0) + Number(bbox.v1 || 0)) * 0.5 + Number(tf.dv || 0), 0, 1),
  };
}

// The four ERP corners of a raster object's transformed box (top left, top right, bottom right, bottom left), none
// without a bbox.
export function rasterObjectCornersUv(item) {
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

// The alpha (0..255) of the raster object `item` at the ERP point `erpPoint`: 0 outside its box, null when it cannot
// be read (no point or box, a box with no size, or alphaAt(localU, localV) — its image's alpha at a point of the box,
// 0..1 across — gives null while the image cannot be read).
export function rasterObjectAlphaAt(item, erpPoint, alphaAt) {
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
  const basePoint = inverseTransformErpPointAround(untranslated, center, Number(tf.scale || 1), Number(tf.rot_deg || 0));
  const bw = Number(bbox.u1 || 0) - Number(bbox.u0 || 0);
  const bh = Number(bbox.v1 || 0) - Number(bbox.v0 || 0);
  if (!(bw > 1e-6) || !(bh > 1e-6)) return null;
  const localU = shortestWrappedDelta(Number(basePoint.u || 0), Number(bbox.u0 || 0)) / bw;
  const localV = (Number(basePoint.v || 0) - Number(bbox.v0 || 0)) / bh;
  if (localU < 0 || localU > 1 || localV < 0 || localV > 1) return 0;
  return alphaAt(localU, localV);
}

// Whether a raster object is hit where its alpha is `alpha` (rasterObjectAlphaAt): anywhere in its box when the alpha
// cannot be read.
export function rasterAlphaHits(alpha) {
  if (alpha === null) return true;
  return alpha > RASTER_HIT_ALPHA;
}

// --- Scaling from the pointer.

// The distance (at least 1 px) from a scale's screen center to the pointer.
export function pointerDistance(center, p) {
  return Math.max(1, Math.hypot(p.x - center.x, p.y - center.y));
}

// The ratio a scale has reached with the pointer at `p`: its distance from `center` over startDistance.
export function pointerScaleRatio(center, startDistance, p) {
  return pointerDistance(center, p) / Math.max(1, Number(startDistance || 1));
}

// --- The Sky's z order (docs/scene-state-v2.md "Sky の重なり順").

// The entries of the Sky's display list ({ z_index, ... }) from back to front: by z_index, ties in the order given
// (the sky Stickers, the stroke groups, the raster objects, each in list order).
export function skyDisplayOrder(entries) {
  return entries.slice().sort((a, b) => Number(a.z_index || 0) - Number(b.z_index || 0));
}

// The display list `ordered` (back to front) with the entries `moving(entry)` chooses moved to the front (`where`
// "front") or the back ("back"), or null when none is chosen or the last (first) one chosen is the front (back) already.
export function restackSkyOrder(ordered, moving, where) {
  const chosen = [];
  const staying = [];
  ordered.forEach((entry) => (moving(entry) ? chosen : staying).push(entry));
  if (!chosen.length) return null;
  if (where === "front") {
    if (chosen[chosen.length - 1] === ordered[ordered.length - 1]) return null;
    return [...staying, ...chosen];
  }
  if (chosen[0] === ordered[0]) return null;
  return [...chosen, ...staying];
}

// Numbers the display list's items again from 0 in its order (entry.item.z_index).
export function numberSkyOrder(ordered) {
  ordered.forEach((entry, index) => {
    if (entry.item) entry.item.z_index = index;
  });
}

// --- Deleting.

// Takes the stroke groups `groupIds` (their paint strokes and group entries) and the raster objects `rasterIds` out of
// `painting` (ids compared trimmed).
export function deletePaintObjects(painting, { groupIds = [], rasterIds = [] } = {}) {
  const groups = new Set([...groupIds].map((id) => String(id || "").trim()));
  const rasters = new Set([...rasterIds].map((id) => String(id || "").trim()));
  if (groups.size) {
    painting.paint.strokes = (Array.isArray(painting?.paint?.strokes) ? painting.paint.strokes : [])
      .filter((stroke) => !groups.has(String(stroke?.actionGroupId || "").trim()));
    painting.groups = (Array.isArray(painting.groups) ? painting.groups : [])
      .filter((group) => !groups.has(String(group?.actionGroupId || group?.id || "").trim()));
  }
  if (rasters.size) {
    painting.raster_objects = (Array.isArray(painting.raster_objects) ? painting.raster_objects : [])
      .filter((item) => !rasters.has(String(item?.id || "").trim()));
  }
}

// --- The new editor's rows of the paint objects.

const GROUP_ROW = "paint_group:";
const RASTER_ROW = "raster:";

// The paint object a selection row names: { kind: "group", id } (an actionGroupId), { kind: "raster", id }, or null.
export function paintObjectRow(row) {
  const text = typeof row === "string" ? row : "";
  if (text.startsWith(GROUP_ROW) && text.length > GROUP_ROW.length) return { kind: "group", id: text.slice(GROUP_ROW.length) };
  if (text.startsWith(RASTER_ROW) && text.length > RASTER_ROW.length) return { kind: "raster", id: text.slice(RASTER_ROW.length) };
  return null;
}

// The stroke groups of `painting` as the editors count them, without writing it: syncPaintGroups over a copy (a stroke
// of no group comes as a group of its own at the front, a group without strokes goes), sorted by z_index.
export function countedPaintGroups(painting, skyStickers) {
  if (!painting) return [];
  return syncPaintGroups({ ...painting, groups: Array.isArray(painting.groups) ? [...painting.groups] : [] }, skyStickers);
}

// The sky Stickers of a state v2.
const skyStickersOf = (state) => state.stickers.filter((item) => item.placement === "sky");

// The paint object the row `row` selects in the state v2 `state`: { kind, id, row, item, locked } (item the counted
// group, or the paint raster object), or null when the row names none that is there.
export function paintObjectOf(state, row) {
  const target = paintObjectRow(row);
  if (!target || !state?.painting) return null;
  const item = target.kind === "group"
    ? countedPaintGroups(state.painting, skyStickersOf(state)).find((group) => String(group.actionGroupId || "") === target.id)
    : (state.painting.raster_objects ?? []).find((entry) => entry.id === target.id && String(entry.layerKind || "paint") === "paint");
  return item ? { ...target, row, item, locked: item.locked === true } : null;
}

// The Sky's display list of the state v2 `draft` from back to front, made to match its strokes (syncPaintGroups writes
// the groups): [{ key, item }] with keys the selection rows (a sky Sticker's id, `paint_group:`, `raster:`). The upstream
// Stickers are not in it (they lie under the node's own Sky).
export function skyDisplayList(draft) {
  const sky = skyStickersOf(draft).filter((item) => !item.origin);
  const groups = draft.painting ? syncPaintGroups(draft.painting, skyStickersOf(draft)) : [];
  const rasters = (draft.painting?.raster_objects ?? []).filter((item) => String(item.layerKind || "paint") === "paint");
  return skyDisplayOrder([
    ...sky.map((item) => ({ key: item.id, z_index: item.z_index, item })),
    ...groups.map((item) => ({ key: `${GROUP_ROW}${item.actionGroupId}`, z_index: item.z_index, item })),
    ...rasters.map((item) => ({ key: `${RASTER_ROW}${item.id}`, z_index: item.z_index, item })),
  ]);
}
