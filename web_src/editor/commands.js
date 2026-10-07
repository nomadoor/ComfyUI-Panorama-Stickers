// The editor's edit commands on the selection and the state: clear, duplicate, delete, and the confirmation
// they may ask for.
import { deleteWorldSticker, duplicateSceneSticker, retainActiveCutoutShot, takeStickerId } from "../pano_editor_state.js";
import { wrapYaw } from "../pano_math.js";
import { normalizePaintingState } from "../pano_paint_types.js";
import { isUpstreamSticker } from "../pano_upstream.js";
import { uid } from "./helpers.js";

export function createCommands(deps) {
  const {
    editor, readOnly, sceneV2, state, studio, type, uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let clearCutoutFrame, clearWorldSelection, collectExternalStickersForClearAll, commitAndRefreshNode,
    deleteStudioCamera, deleteUpstreamStickers, getActivePaintTargetDescriptor, getList, getNextStickerZIndex,
    getPaintingGroupList, getPaintingLayerList, getRasterObjectList, getSelected, getSelectedItems, isExternalSticker,
    isItemLocked, isRasterObjectItem, isShotItem, isStickerHidden, isStickerItem, isStrokeGroupItem, isUploadingSticker,
    markObjectVisualsDirty, markPaintCompositeVisualsDirty, markPaintStrokeVisualsDirty,
    parseRasterObjectSelectionId, pruneUnusedAssets, pushHistory, releaseHiddenSelection, requestDraw,
    restoreUpstreamDeleted, revertUpstreamLayer, selectedWorldSticker,
    stopTimelinePlayback, syncFloatingViewButtonState, syncPaintUi, updateSelectionMenu, updateSidePanel,
    worldStickerEditable;

  function showCanvasConfirm(title, text, confirmLabel = "Clear") {
    return new Promise((resolve) => {
      uiState.confirmDialog = {
        visible: true,
        title: String(title || ""),
        text: String(text || ""),
        confirmLabel: String(confirmLabel || "Confirm"),
        resolve,
      };
    });
  }

  async function clearAll() {
    if (readOnly) return;
    const ok = await showCanvasConfirm(
      "Clear All Paint Data",
      type === "stickers"
        ? "This will remove all paint, mask, and sticker images in the current node."
        : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All",
    );
    if (!ok) return;
    state.painting = normalizePaintingState(null);
    markPaintStrokeVisualsDirty();
    const keptExternalStickers = collectExternalStickersForClearAll();
    if (type === "stickers") {
      // World Stickers are not shown on the canvas, so Clear All keeps them.
      state.stickers = sceneV2 ? state.stickers.filter((item) => item.placement === "world" || keptExternalStickers.includes(item)) : keptExternalStickers;
      if (!sceneV2) state.assets = {};
      editor.selectedId = keptExternalStickers[0]?.id || null;
      editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
      state.active.selected_sticker_id = keptExternalStickers[0]?.id || null;
      pruneUnusedAssets();
    } else {
      const retained = retainActiveCutoutShot(state.shots, state.active.selected_shot_id);
      state.stickers = keptExternalStickers;
      state.assets = {};
      state.shots = retained.shots;
      editor.selectedId = retained.selectedShotId;
      editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
      state.active.selected_sticker_id = null;
      state.active.selected_shot_id = retained.selectedShotId;
      if (!retained.selectedShotId && editor.mode === "frame") editor.mode = "pano";
      editor.cutoutAspectOpen = false;
      pruneUnusedAssets();
    }
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw();
  }

  async function clearPaintingLayer(layerKind) {
    if (readOnly) return;
    const kind = layerKind === "mask" ? "mask" : "paint";
    const label = kind === "mask" ? "Mask" : "Paint";
    const strokes = getPaintingLayerList(kind);
    if (!strokes.length && !(editor.interaction?.kind === "draw" && editor.interaction?.layerKind === kind)) return;
    const ok = await showCanvasConfirm(
      `Clear ${label}`,
      `This will remove all ${kind} strokes in the current node.`,
      `Clear ${label}`,
    );
    if (!ok) return;
    if (editor.interaction?.kind === "draw" && editor.interaction?.layerKind === kind) {
      const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
      if (targetDescriptor) editor.paintEngine.cancelActiveStroke(targetDescriptor);
      editor.interaction = null;
    }
    strokes.length = 0;
    state.painting.raster_objects = getRasterObjectList().filter((item) => String(item?.layerKind || "paint") !== kind);
    if (kind === "paint") {
      getPaintingGroupList().length = 0;
    }
    markPaintStrokeVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    syncPaintUi();
    requestDraw();
  }

  function duplicateSelected() {
    if (readOnly) return;
    const selected = getSelected();
    if (!selected) return;
    if (!isStickerItem(selected) || isExternalSticker(selected) || isUpstreamSticker(selected)) return;
    // A Sticker whose image is still uploading has no file to copy yet.
    if (sceneV2 && isUploadingSticker(selected)) return;
    let copy;
    if (sceneV2) {
      copy = duplicateSceneSticker(selected, takeStickerId(state), getNextStickerZIndex());
    } else {
      copy = JSON.parse(JSON.stringify(selected));
      copy.id = uid("st");
      copy.yaw_deg = wrapYaw((copy.yaw_deg || 0) + 8);
      copy.z_index = getNextStickerZIndex();
    }
    state.stickers.push(copy);
    state.active.selected_sticker_id = copy.id;
    editor.selectedId = copy.id;
    editor.selectedIds = [copy.id];
    markObjectVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSelectionMenu();
    updateSidePanel();
    requestDraw();
  }

  // Delete on the selected world Sticker (deleteWorldSticker). Returns whether a world Sticker was selected.
  function deleteSelectedWorldSticker() {
    const sticker = selectedWorldSticker();
    if (!sticker) return false;
    if (!worldStickerEditable(sticker)) return true;
    stopTimelinePlayback();
    // An upstream element is deleted in the node's overrides (ADR 0030).
    if (isUpstreamSticker(sticker)) deleteUpstreamStickers([sticker]);
    else deleteWorldSticker(state, sticker.id);
    clearWorldSelection();
    markObjectVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    syncFloatingViewButtonState();
    requestDraw();
    return true;
  }

  function deleteSelected() {
    if (readOnly) return;
    const selectedItems = getSelectedItems();
    const selected = getSelected();
    if (!selected && selectedItems.length === 0) return;
    if (selectedItems.some((item) => isItemLocked(item))) return;
    stopTimelinePlayback();
    // Upstream elements are deleted in the node's overrides (ADR 0030), in the same Undo step as the rest.
    const upstream = selectedItems.filter(isUpstreamSticker);
    if (upstream.length) {
      deleteUpstreamStickers(upstream);
      markObjectVisualsDirty();
    }
    if (selectedItems.length > 1 || upstream.length) {
      const paintStrokeIds = new Set(selectedItems
        .filter((item) => isStrokeGroupItem(item))
        .map((item) => String(item.actionGroupId || item.id || "")));
      const rasterIds = new Set(selectedItems
        .filter((item) => isRasterObjectItem(item))
        .map((item) => parseRasterObjectSelectionId(item.rasterObjectId || item.id || "")));
      const stickerIds = new Set(selectedItems.filter(isStickerItem).map((item) => String(item.id || "")));
      if (paintStrokeIds.size > 0) {
        state.painting.paint.strokes = (Array.isArray(state.painting?.paint?.strokes) ? state.painting.paint.strokes : [])
          .filter((stroke) => !paintStrokeIds.has(String(stroke?.actionGroupId || "")));
        state.painting.groups = getPaintingGroupList()
          .filter((group) => !paintStrokeIds.has(String(group?.actionGroupId || group?.id || "")));
        markPaintStrokeVisualsDirty();
      }
      if (rasterIds.size > 0) {
        state.painting.raster_objects = getRasterObjectList()
          .filter((item) => !rasterIds.has(String(item?.id || "")));
        markPaintCompositeVisualsDirty();
      }
      if (stickerIds.size > 0) {
        state.stickers = (Array.isArray(state.stickers) ? state.stickers : [])
          .filter((item) => {
            if (!stickerIds.has(String(item?.id || ""))) return true;
            if (!isExternalSticker(item)) return false;
            if (!isStickerHidden(item)) item.visible = false;
            return true;
          });
        pruneUnusedAssets();
        markObjectVisualsDirty();
      }
      editor.selectedId = null;
      editor.selectedIds = [];
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (isStrokeGroupItem(selected)) {
      const gid = String(selected.actionGroupId || selected.id || "").trim();
      state.painting.paint.strokes = (Array.isArray(state.painting?.paint?.strokes) ? state.painting.paint.strokes : [])
        .filter((stroke) => String(stroke?.actionGroupId || "").trim() !== gid);
      state.painting.groups = getPaintingGroupList()
        .filter((group) => String(group?.actionGroupId || group?.id || "").trim() !== gid);
      markPaintStrokeVisualsDirty();
      editor.selectedId = null;
      editor.selectedIds = [];
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (isRasterObjectItem(selected)) {
      const rid = parseRasterObjectSelectionId(selected.rasterObjectId || selected.id || "");
      state.painting.raster_objects = getRasterObjectList()
        .filter((item) => String(item?.id || "").trim() !== rid);
      markPaintCompositeVisualsDirty();
      editor.selectedId = null;
      editor.selectedIds = [];
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (studio && isShotItem(selected)) {
      deleteStudioCamera();
      return;
    }
    if (type === "stickers" || isStickerItem(selected)) {
      if (isExternalSticker(selected)) {
        if (isStickerHidden(selected)) return;
        selected.visible = false;
        markObjectVisualsDirty();
        pushHistory();
        commitAndRefreshNode();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      state.stickers = state.stickers.filter((s) => s.id !== selected.id);
      pruneUnusedAssets();
      markObjectVisualsDirty();
      editor.selectedId = getList()[0]?.id || null;
      editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
      state.active.selected_sticker_id = editor.selectedId;
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    clearCutoutFrame();
  }

  // An action on the upstream layer with `key` (ADR 0030) run from its Timeline header: `change(key)` changes the
  // node's records (editor/upstream.js), and when it did, the change is an Undo step written back.
  function changeUpstreamLayer(change, key) {
    if (readOnly) return;
    stopTimelinePlayback();
    if (!change(key)) return;
    releaseHiddenSelection();
    markObjectVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw();
  }

  // "Restore deleted": the layer's elements deleted here show again.
  function restoreUpstreamDeletedCommand(key) {
    changeUpstreamLayer(restoreUpstreamDeleted, key);
  }

  // "Revert": the layer's `scene` and painting follow upstream again.
  function revertUpstreamLayerCommand(key) {
    changeUpstreamLayer(revertUpstreamLayer, key);
  }

  function forceCursorTool() {
    if (editor.primaryTool === "cursor") return;
    editor.primaryTool = "cursor";
    syncPaintUi();
    updateSidePanel();
  }

  return {
    connect(api) {
      ({
        clearCutoutFrame, clearWorldSelection, collectExternalStickersForClearAll, commitAndRefreshNode,
        deleteStudioCamera, deleteUpstreamStickers, getActivePaintTargetDescriptor, getList, getNextStickerZIndex,
        getPaintingGroupList, getPaintingLayerList, getRasterObjectList, getSelected, getSelectedItems, isExternalSticker,
        isItemLocked, isRasterObjectItem, isShotItem, isStickerHidden, isStickerItem, isStrokeGroupItem, isUploadingSticker,
        markObjectVisualsDirty, markPaintCompositeVisualsDirty, markPaintStrokeVisualsDirty,
        parseRasterObjectSelectionId, pruneUnusedAssets, pushHistory, releaseHiddenSelection, requestDraw,
        restoreUpstreamDeleted, revertUpstreamLayer, selectedWorldSticker,
        stopTimelinePlayback, syncFloatingViewButtonState, syncPaintUi, updateSelectionMenu, updateSidePanel,
        worldStickerEditable,
      } = api);
    },
    clearAll, clearPaintingLayer, duplicateSelected, deleteSelectedWorldSticker, deleteSelected, restoreUpstreamDeletedCommand,
    revertUpstreamLayerCommand, forceCursorTool,
  };
}
