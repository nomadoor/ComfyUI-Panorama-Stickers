// The items the editor shows and selects: sky Stickers, Cutout shots, paint stroke groups and raster
// objects. Looks them up by id, orders them for display and moves them.
import { BRUSH_PRESETS, DEFAULT_BRUSH_PRESET_ID } from "../pano_brush_presets.js";
import { getCutoutAspectLabel } from "../pano_cutout_view_math.js";
import { setStickerPose, stickerPose } from "../pano_editor_state.js";
import { HIDDEN_PREVIEW_OPACITY } from "../pano_editor_view.js";
import { clamp } from "../pano_math.js";
import { normalizePaintingState } from "../pano_paint_types.js";
import { DEG2RAD, EXTERNAL_STICKER_ID, EXTERNAL_STICKER_SOURCE_KIND } from "./constants.js";

export function createItems(deps) {
  const {
    canvas, editor, sceneV2, state, stateV2, type,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let getActiveCutoutShot, getBrushPresetIdForTool, getFrameViewRect, getPaintingLayerList, getPaintingRevisionKey,
    getSelected, sceneStickerShown;

  function getList() { return type === "stickers" ? skyStickers() : state.shots; }
  // The Stickers the canvas shows and edits. World Stickers of state v2 only appear in the Timeline.
  function skyStickers() {
    return sceneV2 ? state.stickers.filter((item) => item.placement === "sky") : state.stickers;
  }
  function isSceneSticker(item) {
    return sceneV2 && isStickerItem(item);
  }
  // A Sticker added from a file has no file Source until its upload finishes (addSceneStickerFromFile).
  function isUploadingSticker(item) {
    return item.source.kind === "file" && !item.source.filename && !item.source.data_url;
  }
  // The pose fields the canvas geometry and the inspector read: a Sticker of state v2 at the
  // editor's Timeline frame, the item itself otherwise.
  function poseOf(item) {
    return isSceneSticker(item) ? stickerPose(item, editor.frame) : item;
  }
  function writePose(item, pose) {
    if (isSceneSticker(item)) setStickerPose(item, editor.frame, pose);
    else Object.assign(item, pose);
  }
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
    for (const item of skyStickers()) {
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
    const stickers = skyStickers().map((item) => ({
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
  // The Stickers the Cutout editor selects and moves; the sky ones in Panorama Studio's, as the Stickers
  // editor (#89).
  function cutoutStickers() {
    return !Array.isArray(state.stickers) ? [] : skyStickers();
  }
  function getCutoutSelectableItems() {
    const shots = Array.isArray(state.shots) ? state.shots : [];
    return [...shots, ...cutoutStickers()];
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
  function getNextStickerZIndex() {
    return getNextDisplayZIndex();
  }
  function isExternalSticker(item) {
    if (!item || typeof item !== "object") return false;
    if (stateV2) return item.source?.kind === "port";
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
    const pose = poseOf(item);
    const base = [
      kind,
      itemId,
      editor.mode,
      Number(pose?.yaw_deg || 0).toFixed(4),
      Number(pose?.pitch_deg || 0).toFixed(4),
      Number(pose?.hFOV_deg || 0).toFixed(4),
      Number(pose?.vFOV_deg || 0).toFixed(4),
      Number(pose?.rot_deg || 0).toFixed(4),
      Number(pose?.roll_deg || 0).toFixed(4),
      getCutoutAspectLabel(pose),
      isSceneSticker(item) && sceneStickerShown(item),
    ].join(":");
    if (editor.mode === "frame") {
      const shot = getActiveCutoutShot();
      const rect = shot ? getFrameViewRect(shot) : null;
      return `${base}:frame:${String(shot?.id || "")}:${Math.round(Number(rect?.x || 0))}:${Math.round(Number(rect?.y || 0))}:${Math.round(Number(rect?.w || 0))}:${Math.round(Number(rect?.h || 0))}`;
    }
    return `${base}:view:${Math.round(Number(editor.viewYaw || 0) * 100)}:${Math.round(Number(editor.viewPitch || 0) * 100)}:${Math.round(Number(editor.viewFov || 0) * 100)}:${Math.round(Number(canvas?.width || 0))}:${Math.round(Number(canvas?.height || 0))}`;
  }

  function normalizeDisplayZIndices() {
    const ordered = getDisplayListObjects();
    ordered.forEach((entry, index) => {
      if (entry.type === "sticker" && entry.item) entry.item.z_index = index;
      if (entry.type === "strokeGroup" && entry.item) entry.item.z_index = index;
      if (entry.type === "rasterObject" && entry.item) entry.item.z_index = index;
    });
  }

  return {
    connect(api) {
      ({
        getActiveCutoutShot, getBrushPresetIdForTool, getFrameViewRect, getPaintingLayerList, getPaintingRevisionKey,
        getSelected, sceneStickerShown,
      } = api);
    },
    getList, skyStickers, isSceneSticker, isUploadingSticker, poseOf, writePose, getPaintingGroupList,
    makeStrokeGroupSelectionId, makeRasterObjectSelectionId, parseRasterObjectSelectionId,
    ensurePaintingGroupEntry, getFrameCornersUv, ensureGroupFrame, getDisplayListObjects,
    getOrderedPaintGroupIds, getOrderedDisplayListObjects, getSelectableStrokeGroupItems,
    getSelectableRasterObjectItems, cutoutStickers, getCutoutSelectableItems, isShotItem, isStickerItem,
    getRasterObjectList, getRasterObjectItem, isRasterObjectItem, getStrokeGroupItem, isStrokeGroupItem,
    getStrokeGroupStrokes, getStrokeGeomCacheKey, shortestWrappedDelta, getStrokeGroupCenterUv,
    applyStrokeGroupOffset, applyStrokeGroupTransform, applyRasterObjectOffset, applyRasterObjectTransform,
    getNextStickerZIndex, isExternalSticker, isStickerHidden, getStickerDisplayAlpha,
    inverseTransformErpPointAround, getRasterObjectCenterUv, getRasterObjectTransformedErpPoints,
    getRasterObjectGeomCacheKey, getSceneItemGeomCacheKey, normalizeDisplayZIndices,
  };
}
