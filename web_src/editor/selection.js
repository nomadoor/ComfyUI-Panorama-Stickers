// The editor's selection: the canvas selection (sky Stickers, shots, paint items), the world Sticker
// selected in space, their locks and the inspector's list of items.
import { ICON } from "../icons.js";
import { getCutoutAspectLabel } from "../pano_cutout_view_math.js";
import { CAMERA_SHOT_ID } from "../pano_editor_state.js";
import { isUpstreamSticker, upstreamStickerEditable } from "../pano_upstream.js";
import { EXTERNAL_STICKER_ID, EXTERNAL_STICKER_PREVIEW_KEY } from "./constants.js";

export function createSelection(deps) {
  const {
    editor, readOnly, runtime, sceneV2, shotEditor, state, timeline, type,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let cameraShoots, commitAndRefreshNode, computeStickerVFov, cutoutStickers, getActiveCutoutShot,
    getCutoutSelectableItems, getDisplayListObjects, getList, getPaintingGroupList, getRasterObjectItem,
    getRasterObjectList, getStickerUiImage, getStrokeGroupItem, hasCamera, isExternalSticker, isRasterObjectItem,
    isSceneSticker, isShotItem, isStickerHidden, isStickerItem, isStrokeGroupItem, markObjectVisualsDirty,
    normalizeDisplayZIndices, objectGeom, paintingShown, parseRasterObjectSelectionId, poseOf, pushHistory,
    requestDraw, sceneStickerShown, stickerById, updateSelectionMenu, updateSidePanel;

  function getSelected() {
    const id = String(editor.selectedId || "");
    if (!id) return null;
    const groupItem = getStrokeGroupItem(id);
    if (groupItem) return groupItem;
    const rasterItem = getRasterObjectItem(id);
    if (rasterItem) return rasterItem;
    if (shotEditor) {
      return getCutoutSelectableItems().find((item) => String(item?.id || "") === id) || null;
    }
    return getList().find((s) => String(s?.id || "") === id) || null;
  }
  function getSelectedItems() {
    const ids = Array.isArray(editor.selectedIds) && editor.selectedIds.length
      ? editor.selectedIds
      : (editor.selectedId ? [editor.selectedId] : []);
    const out = [];
    const seen = new Set();
    ids.forEach((id) => {
      const key = String(id || "").trim();
      if (!key || seen.has(key)) return;
      seen.add(key);
      const item = key === String(editor.selectedId || "") ? getSelected() : (
        getStrokeGroupItem(key)
        || getRasterObjectItem(key)
        || (shotEditor
          ? getCutoutSelectableItems().find((entry) => String(entry?.id || "") === key)
          : getList().find((entry) => String(entry?.id || "") === key))
      );
      if (item) out.push(item);
    });
    return out;
  }
  function getMultiSelectionGeom(items = null) {
    const selectedItems = Array.isArray(items) ? items : getSelectedItems();
    if (!selectedItems || selectedItems.length < 2) return null;
    const geoms = selectedItems
      .map((item) => objectGeom(item))
      .filter((geom) => geom?.visible && Array.isArray(geom.corners) && geom.corners.length);
    if (!geoms.length) return null;
    const xs = geoms.flatMap((geom) => geom.corners.map((p) => Number(p?.x || 0)));
    const ys = geoms.flatMap((geom) => geom.corners.map((p) => Number(p?.y || 0)));
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    return {
      kind: "multiSelection",
      visible: true,
      center: { x: (minX + maxX) * 0.5, y: (minY + maxY) * 0.5 },
      corners: [
        { x: minX, y: minY },
        { x: maxX, y: minY },
        { x: maxX, y: maxY },
        { x: minX, y: maxY },
      ],
      edgeMidpoints: [
        { edge: "top", x: (minX + maxX) * 0.5, y: minY, a: { x: minX, y: minY }, b: { x: maxX, y: minY } },
        { edge: "right", x: maxX, y: (minY + maxY) * 0.5, a: { x: maxX, y: minY }, b: { x: maxX, y: maxY } },
        { edge: "bottom", x: (minX + maxX) * 0.5, y: maxY, a: { x: maxX, y: maxY }, b: { x: minX, y: maxY } },
        { edge: "left", x: minX, y: (minY + maxY) * 0.5, a: { x: minX, y: maxY }, b: { x: minX, y: minY } },
      ],
      rotateStemBase: { x: (minX + maxX) * 0.5, y: minY },
      rotateHandle: { x: (minX + maxX) * 0.5, y: minY - 30 },
    };
  }
  function isItemSelected(item) {
    const id = String(item?.id || "").trim();
    return !!id && Array.isArray(editor.selectedIds) && editor.selectedIds.includes(id);
  }
  function getSelectedKind() {
    const selected = getSelected();
    if (!selected) return null;
    if (isStrokeGroupItem(selected) || isRasterObjectItem(selected)) return "stroke";
    return isShotItem(selected) ? "frame" : "image";
  }
  function isItemLocked(item) {
    if (!item || typeof item !== "object") return false;
    if (isStrokeGroupItem(item)) {
      const gid = String(item.actionGroupId || item.id || "").trim();
      const group = getPaintingGroupList().find((entry) => String(entry?.actionGroupId || entry?.id || "").trim() === gid);
      return group?.locked === true;
    }
    if (isRasterObjectItem(item)) {
      const rid = parseRasterObjectSelectionId(item.rasterObjectId || item.id || "");
      const raster = getRasterObjectList().find((entry) => String(entry?.id || "").trim() === rid);
      return raster?.locked === true;
    }
    // An upstream element of a layer that is only inherited is not edited (ADR 0030).
    if (isUpstreamSticker(item) && !upstreamStickerEditable(item)) return true;
    return item.locked === true;
  }
  function areAllSelectedItemsLocked(items = null) {
    const selectedItems = Array.isArray(items) ? items : getSelectedItems();
    return selectedItems.length > 0 && selectedItems.every((item) => isItemLocked(item));
  }
  function setItemLocked(item, locked) {
    const next = locked === true;
    if (!item || typeof item !== "object") return false;
    if (isStrokeGroupItem(item)) {
      const gid = String(item.actionGroupId || item.id || "").trim();
      const group = getPaintingGroupList().find((entry) => String(entry?.actionGroupId || entry?.id || "").trim() === gid);
      if (!group || group.locked === next) return false;
      group.locked = next;
      return true;
    }
    if (isRasterObjectItem(item)) {
      const rid = parseRasterObjectSelectionId(item.rasterObjectId || item.id || "");
      const raster = getRasterObjectList().find((entry) => String(entry?.id || "").trim() === rid);
      if (!raster || raster.locked === next) return false;
      raster.locked = next;
      return true;
    }
    if (item.locked === next || (isUpstreamSticker(item) && !upstreamStickerEditable(item))) return false;
    item.locked = next;
    return true;
  }
  function toggleSelectedLock() {
    if (readOnly) return;
    const selectedItems = getSelectedItems();
    if (!selectedItems.length) return;
    const nextLocked = !areAllSelectedItemsLocked(selectedItems);
    let changed = false;
    selectedItems.forEach((item) => {
      if (setItemLocked(item, nextLocked)) changed = true;
    });
    if (!changed) return;
    pushHistory();
    commitAndRefreshNode();
    updateSelectionMenu();
    updateSidePanel();
    requestDraw();
  }
  function setSelectedItem(item) {
    clearWorldSelection();
    // Delete acts on the selection, so a Keyframe selection must not outlive a new selection.
    timeline.selection = null;
    editor.selectedId = item?.id || null;
    editor.selectedIds = item?.id ? [item.id] : [];
    // An upstream element's working id is the editor's own, so the node's properties never keep it.
    if (item && isStickerItem(item) && !isUpstreamSticker(item)) state.active.selected_sticker_id = item.id || null;
    else state.active.selected_sticker_id = null;
    if (item && isShotItem(item)) state.active.selected_shot_id = item.id || null;
    else if (!item) state.active.selected_shot_id = null;
    else if (!isShotItem(item)) state.active.selected_shot_id = state.active.selected_shot_id;
  }
  function setSelectedItems(items, primaryId = null) {
    const nextIds = [];
    const seen = new Set();
    (Array.isArray(items) ? items : []).forEach((item) => {
      const id = String(item?.id || "").trim();
      if (!id || seen.has(id)) return;
      seen.add(id);
      nextIds.push(id);
    });
    editor.selectedIds = nextIds;
    clearWorldSelection();
    timeline.selection = null;
    const preferred = String(primaryId || "").trim();
    editor.selectedId = preferred && nextIds.includes(preferred)
      ? preferred
      : (nextIds[nextIds.length - 1] || null);
    const primary = getSelected();
    state.active.selected_sticker_id = primary && isStickerItem(primary) && !isUpstreamSticker(primary) ? primary.id || null : null;
    if (primary && isShotItem(primary)) state.active.selected_shot_id = primary.id || null;
    else if (!nextIds.length) state.active.selected_shot_id = null;
  }
  function getCutoutInspectorItems() {
    const shots = (Array.isArray(state.shots) ? state.shots : []).map((item, index) => ({
      kind: "frame",
      item,
      label: String(item?.label || `Frame ${index + 1}`),
    }));
    const images = cutoutStickers().map((item, index) => {
      const baseLabel = isExternalSticker(item)
        ? String(item.id || EXTERNAL_STICKER_ID)
        : String(state.assets?.[item.asset_id]?.name || item.asset_id || item.id || `Image ${index + 1}`);
      return {
        kind: "image",
        item,
        label: baseLabel,
      };
    });
    return [...shots, ...images];
  }

  function getSelectionItemIcon(kind) {
    if (kind === "frame") return ICON.camera;
    if (kind === "stroke") return ICON.paintbrush_vertical_tool;
    return ICON.image;
  }

  function getSelectionItemLabelData(entry) {
    if (!entry || !entry.item) {
      return {
        label: String(entry?.label || ""),
        icon: null,
      };
    }
    return {
      label: String(entry.label || ""),
      icon: getSelectionItemIcon(entry.kind),
    };
  }
  function toggleSelectedExternalStickerVisibility() {
    if (readOnly) return;
    const selected = getSelected();
    if (!selected || !isExternalSticker(selected)) return;
    selected.visible = isStickerHidden(selected);
    releaseHiddenSelection();
    markObjectVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw();
  }
  function restoreSelectedToInitialPose() {
    if (readOnly || type !== "stickers") return;
    const selected = getSelected();
    if (!selected || !isExternalSticker(selected)) return;
    const initial = selected.initial_pose;
    if (!initial || typeof initial !== "object") return;
    selected.yaw_deg = Number(initial.yaw_deg ?? selected.yaw_deg ?? 0);
    selected.pitch_deg = Number(initial.pitch_deg ?? selected.pitch_deg ?? 0);
    selected.hFOV_deg = Number(initial.hFOV_deg ?? selected.hFOV_deg ?? 30);
    const previewImg = getStickerUiImage(EXTERNAL_STICKER_PREVIEW_KEY, () => {
      requestDraw();
    });
    if (previewImg && (previewImg.complete || previewImg.naturalWidth || previewImg.width)) {
      selected.vFOV_deg = computeStickerVFov(
        Number(initial.hFOV_deg ?? selected.hFOV_deg ?? 30),
        Number(previewImg.naturalWidth || previewImg.width || 1),
        Number(previewImg.naturalHeight || previewImg.height || 1),
      );
    } else {
      selected.vFOV_deg = Number(initial.vFOV_deg ?? selected.vFOV_deg ?? 30);
    }
    selected.rot_deg = Number(initial.rot_deg ?? selected.rot_deg ?? 0);
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw();
  }
  function getRestorePoseForSticker(item) {
    if (!item || !isExternalSticker(item)) return null;
    const initial = item.initial_pose;
    if (!initial || typeof initial !== "object") return null;
    const pose = {
      yaw_deg: Number(initial.yaw_deg ?? item.yaw_deg ?? 0),
      pitch_deg: Number(initial.pitch_deg ?? item.pitch_deg ?? 0),
      hFOV_deg: Number(initial.hFOV_deg ?? item.hFOV_deg ?? 30),
      vFOV_deg: Number(initial.vFOV_deg ?? item.vFOV_deg ?? 30),
      rot_deg: Number(initial.rot_deg ?? item.rot_deg ?? 0),
    };
    const previewImg = getStickerUiImage(EXTERNAL_STICKER_PREVIEW_KEY, () => {
      requestDraw();
    });
    if (previewImg && (previewImg.complete || previewImg.naturalWidth || previewImg.width)) {
      pose.vFOV_deg = computeStickerVFov(
        pose.hFOV_deg,
        Number(previewImg.naturalWidth || previewImg.width || 1),
        Number(previewImg.naturalHeight || previewImg.height || 1),
      );
    }
    return pose;
  }
  function canRestoreSelectedToInitial() {
    const selected = getSelected();
    if (!selected || !isExternalSticker(selected)) return false;
    const restorePose = getRestorePoseForSticker(selected);
    if (!restorePose) return false;
    const close = (a, b) => Math.abs(Number(a || 0) - Number(b || 0)) <= 1e-4;
    return !(
      close(selected.yaw_deg, restorePose.yaw_deg)
      && close(selected.pitch_deg, restorePose.pitch_deg)
      && close(selected.hFOV_deg, restorePose.hFOV_deg)
      && close(selected.vFOV_deg, restorePose.vFOV_deg)
      && close(selected.rot_deg, restorePose.rot_deg)
    );
  }
  function clearSelection(options = {}) {
    const preservePanelValues = options.preservePanelValues !== false;
    const selectedBeforeClear = preservePanelValues ? poseOf(getSelected()) : null;
    if (selectedBeforeClear) {
      editor.panelLastValues = {
        yaw_deg: Number(selectedBeforeClear.yaw_deg || 0),
        pitch_deg: Number(selectedBeforeClear.pitch_deg || 0),
        hFOV_deg: Number(selectedBeforeClear.hFOV_deg || (type === "stickers" ? 30 : 90)),
        vFOV_deg: Number(selectedBeforeClear.vFOV_deg || (type === "stickers" ? 30 : 60)),
        rot_deg: Number(selectedBeforeClear.rot_deg || 0),
        roll_deg: Number(selectedBeforeClear.roll_deg || 0),
        aspect_id: getCutoutAspectLabel(selectedBeforeClear),
      };
    }
    editor.selectedId = null;
    editor.selectedIds = [];
    clearWorldSelection();
    editor.cutoutAspectOpen = false;
    state.active.selected_sticker_id = null;
    state.active.selected_shot_id = null;
  }
  // The selected world Sticker of state v2 (#72), or null: the node's own or an upstream element's working
  // Sticker (ADR 0030). It is selected in the space view or on its Timeline row, and the gizmo and the inspector
  // edit it.
  function selectedWorldSticker() {
    if (!sceneV2 || !editor.worldSelectedId) return null;
    const sticker = stickerById(editor.worldSelectedId);
    return sticker?.placement === "world" ? sticker : null;
  }
  function selectWorldSticker(id) {
    setSelectedItem(null);
    editor.worldSelectedId = id;
    // The gizmo draws in the three.js frame.
    runtime.backgroundDirty = true;
  }
  function clearWorldSelection() {
    if (!editor.worldSelectedId) return;
    editor.worldSelectedId = null;
    editor.gizmoAxis = null;
    runtime.backgroundDirty = true;
  }
  // Whether the selected world Sticker can be edited: not locked, in an editor that edits, and not the
  // element of an upstream layer that is only inherited.
  function worldStickerEditable(sticker) {
    return !!sticker && !readOnly && !isItemLocked(sticker);
  }
  function applyInitialCutoutFocus() {
    if (type !== "cutout") return;
    const activeShot = getActiveCutoutShot();
    if (!activeShot) return;
    editor.selectedId = String(activeShot.id || "") || null;
    editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
  }

  // What does not show stops being edited: a hidden Sticker, Camera or painting, and a Sticker outside its
  // Clip range.
  function releaseHiddenSelection() {
    const selected = getSelected();
    if ((isSceneSticker(selected) && !sceneStickerShown(selected))
      || (editor.selectedId === CAMERA_SHOT_ID && hasCamera() && !cameraShoots())
      || (getSelectedKind() === "stroke" && !paintingShown())) setSelectedItem(null);
    if (selectedWorldSticker()?.visible === false) clearWorldSelection();
  }

  function bringSelectedToFront() {
    if (readOnly) return;
    const selectedItems = getSelectedItems();
    const selected = getSelected();
    if (!selected || selectedItems.length === 0) return;
    // The upstream elements are ordered upstream (ADR 0030).
    if (selectedItems.some(isUpstreamSticker)) return;
    if (selectedItems.some((item) => isItemLocked(item))) return;
    normalizeDisplayZIndices();
    const ordered = getDisplayListObjects();
    const selectedKeys = new Set(selectedItems.map((item) => {
      if (isStickerItem(item)) return `sticker:${String(item.id || "")}`;
      if (isRasterObjectItem(item)) return `rasterObject:${parseRasterObjectSelectionId(item.rasterObjectId || item.id || "")}`;
      return `strokeGroup:${String(item.actionGroupId || item.id || "")}`;
    }));
    const moving = [];
    const staying = [];
    ordered.forEach((entry) => {
      const key = entry.type === "sticker"
        ? `sticker:${String(entry.item?.id || "")}`
        : (entry.type === "rasterObject"
          ? `rasterObject:${String(entry.item?.id || entry.id || "")}`
          : `strokeGroup:${String(entry.actionGroupId || "")}`);
      if (selectedKeys.has(key)) moving.push(entry);
      else staying.push(entry);
    });
    if (!moving.length || moving[moving.length - 1] === ordered[ordered.length - 1]) return;
    const nextOrdered = [...staying, ...moving];
    nextOrdered.forEach((item, index) => {
      if (item.type === "sticker" && item.item) item.item.z_index = index;
      if (item.type === "strokeGroup" && item.item) item.item.z_index = index;
      if (item.type === "rasterObject" && item.item) item.item.z_index = index;
    });
    markObjectVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSelectionMenu();
    requestDraw();
  }

  function sendSelectedToBack() {
    if (readOnly) return;
    const selectedItems = getSelectedItems();
    const selected = getSelected();
    if (!selected || selectedItems.length === 0) return;
    // The upstream elements are ordered upstream (ADR 0030).
    if (selectedItems.some(isUpstreamSticker)) return;
    if (selectedItems.some((item) => isItemLocked(item))) return;
    normalizeDisplayZIndices();
    const ordered = getDisplayListObjects();
    const selectedKeys = new Set(selectedItems.map((item) => {
      if (isStickerItem(item)) return `sticker:${String(item.id || "")}`;
      if (isRasterObjectItem(item)) return `rasterObject:${parseRasterObjectSelectionId(item.rasterObjectId || item.id || "")}`;
      return `strokeGroup:${String(item.actionGroupId || item.id || "")}`;
    }));
    const moving = [];
    const staying = [];
    ordered.forEach((entry) => {
      const key = entry.type === "sticker"
        ? `sticker:${String(entry.item?.id || "")}`
        : (entry.type === "rasterObject"
          ? `rasterObject:${String(entry.item?.id || entry.id || "")}`
          : `strokeGroup:${String(entry.actionGroupId || "")}`);
      if (selectedKeys.has(key)) moving.push(entry);
      else staying.push(entry);
    });
    if (!moving.length || moving[0] === ordered[0]) return;
    const nextOrdered = [...moving, ...staying];
    nextOrdered.forEach((item, index) => {
      if (item.type === "sticker" && item.item) item.item.z_index = index;
      if (item.type === "strokeGroup" && item.item) item.item.z_index = index;
      if (item.type === "rasterObject" && item.item) item.item.z_index = index;
    });
    markObjectVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSelectionMenu();
    requestDraw();
  }

  return {
    connect(api) {
      ({
        cameraShoots, commitAndRefreshNode, computeStickerVFov, cutoutStickers, getActiveCutoutShot,
        getCutoutSelectableItems, getDisplayListObjects, getList, getPaintingGroupList, getRasterObjectItem,
        getRasterObjectList, getStickerUiImage, getStrokeGroupItem, hasCamera, isExternalSticker, isRasterObjectItem,
        isSceneSticker, isShotItem, isStickerHidden, isStickerItem, isStrokeGroupItem, markObjectVisualsDirty,
        normalizeDisplayZIndices, objectGeom, paintingShown, parseRasterObjectSelectionId, poseOf, pushHistory,
        requestDraw, sceneStickerShown, stickerById, updateSelectionMenu, updateSidePanel,
      } = api);
    },
    getSelected, getSelectedItems, getMultiSelectionGeom, isItemSelected, getSelectedKind, isItemLocked,
    areAllSelectedItemsLocked, toggleSelectedLock, setSelectedItem, setSelectedItems, getCutoutInspectorItems,
    getSelectionItemIcon, getSelectionItemLabelData, toggleSelectedExternalStickerVisibility,
    restoreSelectedToInitialPose, canRestoreSelectedToInitial, clearSelection, selectedWorldSticker,
    selectWorldSticker, clearWorldSelection, worldStickerEditable, applyInitialCutoutFocus,
    releaseHiddenSelection, bringSelectedToFront, sendSelectedToBack,
  };
}
