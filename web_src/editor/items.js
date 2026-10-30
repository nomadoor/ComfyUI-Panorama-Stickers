// The items the editor shows and selects: sky Stickers, Cutout shots, paint stroke groups and raster
// objects, and in Panorama Studio the upstream Scene's working Stickers (ADR 0030). Looks them up by id, orders
// them for display and moves them.
import { getCutoutAspectLabel } from "../pano_cutout_view_math.js";
import { CAMERA_SHOT_ID, setCameraField, setStickerPose, stickerPose } from "../pano_editor_state.js";
import { HIDDEN_PREVIEW_OPACITY } from "../pano_editor_view.js";
import {
  frameCornersUv, offsetRasterObject, offsetStrokeGroup, rasterObjectCenterUv, rasterObjectCornersUv,
  scaleRasterObject, skyDisplayOrder, strokeGroupCenterUv, transformStrokeGroup,
} from "../pano_paint_objects.js";
import { ensurePaintGroup, nextPaintZIndex, paintingGroups, shortestWrappedDelta, statePainting, strokeGroupFrame, syncPaintGroups } from "../pano_paint_strokes.js";
import { isUpstreamSticker } from "../pano_upstream.js";
import { EXTERNAL_STICKER_ID, EXTERNAL_STICKER_SOURCE_KIND } from "./constants.js";

export function createItems(deps) {
  const {
    cameraV2, canvas, editor, sceneV2, state, stateV2, type,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let getActiveCutoutShot, getBrushPresetIdForTool, getFrameViewRect, getPaintingLayerList, getPaintingRevisionKey,
    getSelected, getStickerImage, sceneStickerShown, upstreamStickerImage, upstreamStickers;

  function getList() {
    if (type !== "stickers") return state.shots;
    return sceneV2 ? [...skyStickers(), ...upstreamSkyStickers()] : skyStickers();
  }
  // The Stickers the canvas shows and edits. World Stickers of state v2 only appear in the Timeline.
  function skyStickers() {
    return sceneV2 ? state.stickers.filter((item) => item.placement === "sky") : state.stickers;
  }
  // The upstream Scene's working sky Stickers (upstream.js), from back to front: under the node's own Sky, each
  // layer over the one upstream of it, and in a layer by z_index.
  function upstreamSkyStickers() {
    if (!sceneV2) return [];
    const stickers = upstreamStickers();
    const layers = [...new Set(stickers.map((item) => item.origin.layer))];
    return stickers.filter((item) => item.placement === "sky")
      .sort((a, b) => layers.indexOf(a.origin.layer) - layers.indexOf(b.origin.layer) || a.z_index - b.z_index);
  }
  // The Sticker with `id`: the node's own, or an upstream working Sticker.
  function stickerById(id) {
    return state.stickers.find((item) => item.id === id) || upstreamStickers().find((item) => item.id === id) || null;
  }
  function isSceneSticker(item) {
    return sceneV2 && isStickerItem(item);
  }
  // A Sticker added from a file has no file Source until its upload finishes (addSceneStickerFromFile).
  function isUploadingSticker(item) {
    return item.source.kind === "file" && !item.source.filename && !item.source.data_url;
  }
  // The pose fields the canvas geometry and the inspector read: a Sticker of state v2 at the
  // editor's Timeline frame (the port Sticker at the vFOV of its media's first frame, as the view
  // draws it), the item itself otherwise.
  function poseOf(item) {
    if (!isSceneSticker(item)) return item;
    const media = !isExternalSticker(item) ? null : isUpstreamSticker(item) ? upstreamStickerImage(item) : getStickerImage(item);
    return stickerPose(item, editor.frame, media && { width: media.naturalWidth || media.width, height: media.naturalHeight || media.height });
  }
  // Panorama Studio's Camera (docs/editor-interaction.md): its angle of view goes to the Camera's `fov`, its V FOV
  // is computed from the aspect and not written, its pose goes to the shot, which syncCutoutShot writes back.
  function writePose(item, pose) {
    if (isSceneSticker(item)) setStickerPose(item, editor.frame, pose);
    else if (cameraV2 && item?.id === CAMERA_SHOT_ID && state.camera) {
      const { hFOV_deg: hFov, vFOV_deg: vFov, ...rest } = pose;
      void vFov;
      if (hFov !== undefined) setCameraField(state.camera, editor.frame, "hFOV_deg", hFov);
      Object.assign(item, rest);
    } else Object.assign(item, pose);
  }
  function getPaintingGroupList() {
    return paintingGroups(statePainting(state));
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
    return nextPaintZIndex(statePainting(state), skyStickers());
  }
  function ensurePaintingGroupEntry(actionGroupId, zIndex = null) {
    return ensurePaintGroup(statePainting(state), skyStickers(), actionGroupId, zIndex);
  }
  function getFrameCornersUv(frame) {
    return frameCornersUv(frame);
  }
  function syncPaintingGroupEntries() {
    return syncPaintGroups(statePainting(state), skyStickers());
  }
  // Stroke groups must derive their frame from the current stroke data every time.
  // A persistent/stale frame breaks seam-crossing selection and transforms.
  function ensureGroupFrame(actionGroupId, layerKind, strokes) {
    const gid = String(actionGroupId || "").trim();
    if (!gid) return null;
    const entry = getPaintingGroupList().find((g) => String(g?.actionGroupId || "") === gid);
    if (!entry) return null;
    const s = strokes || getStrokeGroupStrokes(gid, layerKind);
    // Axis-aligned (rot_deg 0); rotation is stored separately and accumulated via transforms.
    entry.frame = strokeGroupFrame(s, getBrushPresetIdForTool);
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
    return skyDisplayOrder([...stickers, ...groups, ...rasterObjects]);
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
  // editor does.
  function cutoutStickers() {
    return !Array.isArray(state.stickers) ? [] : skyStickers();
  }
  function getCutoutSelectableItems() {
    const shots = Array.isArray(state.shots) ? state.shots : [];
    return [...shots, ...cutoutStickers(), ...upstreamSkyStickers()];
  }
  function isShotItem(item) {
    return !!item && Array.isArray(state.shots) && state.shots.includes(item);
  }
  function isStickerItem(item) {
    return !!item && ((Array.isArray(state.stickers) && state.stickers.includes(item)) || isUpstreamSticker(item));
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
  function getStrokeGroupCenterUv(idOrActionGroupId, layerKind = null, strokesOverride = null) {
    const resolved = parseStrokeGroupSelectionId(idOrActionGroupId, layerKind);
    const strokes = Array.isArray(strokesOverride) ? strokesOverride : getStrokeGroupStrokes(resolved.actionGroupId, resolved.layerKind);
    return strokeGroupCenterUv(strokes);
  }
  function applyStrokeGroupOffset(idOrActionGroupId, du, dv, snapshots = null, layerKind = null, frameSnapshot = null) {
    const resolved = parseStrokeGroupSelectionId(idOrActionGroupId, layerKind);
    const gid = String(resolved.actionGroupId || "").trim();
    if (!gid) return false;
    const changed = offsetStrokeGroup(getPaintingLayerList(resolved.layerKind), gid, du, dv, snapshots);
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
    // Use the frame's bbox center as pivot when available — it matches what objectGeom() draws.
    const centerUv = frameSnapshot?.centerUv ?? strokeGroupCenterUv(sourceStrokes);
    const changed = transformStrokeGroup(strokes, gid, scale, rotationDeg, sourceStrokes, centerUv);
    if (changed && frameSnapshot) {
      const entry = getPaintingGroupList().find((g) => String(g?.actionGroupId || "") === gid);
      if (entry) entry.frame = null;
    }
    return changed;
  }
  function rasterObjectOf(idOrRasterId) {
    const rid = parseRasterObjectSelectionId(idOrRasterId);
    if (!rid) return null;
    return getRasterObjectList().find((entry) => String(entry?.id || "").trim() === rid) || null;
  }
  function applyRasterObjectOffset(idOrRasterId, du, dv, snapshot = null) {
    const item = rasterObjectOf(idOrRasterId);
    return item ? offsetRasterObject(item, du, dv, snapshot) : false;
  }
  function applyRasterObjectTransform(idOrRasterId, scale = 1, snapshot = null) {
    const item = rasterObjectOf(idOrRasterId);
    return item ? scaleRasterObject(item, scale, snapshot) : false;
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

  function getRasterObjectCenterUv(item) {
    return rasterObjectCenterUv(item);
  }

  function getRasterObjectTransformedErpPoints(item) {
    return rasterObjectCornersUv(item);
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
        getSelected, getStickerImage, sceneStickerShown, upstreamStickerImage, upstreamStickers,
      } = api);
    },
    getList, skyStickers, upstreamSkyStickers, stickerById, isSceneSticker, isUploadingSticker, poseOf, writePose, getPaintingGroupList,
    makeStrokeGroupSelectionId, makeRasterObjectSelectionId, parseRasterObjectSelectionId,
    ensurePaintingGroupEntry, getFrameCornersUv, ensureGroupFrame, getDisplayListObjects,
    getOrderedPaintGroupIds, getOrderedDisplayListObjects, getSelectableStrokeGroupItems,
    getSelectableRasterObjectItems, cutoutStickers, getCutoutSelectableItems, isShotItem, isStickerItem,
    getRasterObjectList, getRasterObjectItem, isRasterObjectItem, getStrokeGroupItem, isStrokeGroupItem,
    getStrokeGroupStrokes, getStrokeGeomCacheKey, shortestWrappedDelta, getStrokeGroupCenterUv,
    applyStrokeGroupOffset, applyStrokeGroupTransform, applyRasterObjectOffset, applyRasterObjectTransform,
    getNextStickerZIndex, isExternalSticker, isStickerHidden, getStickerDisplayAlpha,
    getRasterObjectCenterUv, getRasterObjectTransformedErpPoints,
    getRasterObjectGeomCacheKey, getSceneItemGeomCacheKey, normalizeDisplayZIndices,
  };
}
