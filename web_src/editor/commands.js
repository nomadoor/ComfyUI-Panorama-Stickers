// The editor's edit commands on the selection and the state: clear, duplicate, delete, and the confirmation
// they may ask for.
import { retainActiveCutoutShot } from "../pano_editor_state.js";
import { wrapYaw } from "../pano_math.js";
import { deletePaintObjects } from "../pano_paint_objects.js";
import { normalizePaintingState } from "../pano_paint_types.js";
import { uid } from "./helpers.js";

export function createCommands(deps) {
  const {
    editor, readOnly, state, type, uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let cancelLiveEdits, clearCutoutFrame, collectExternalStickersForClearAll, commitAndRefreshNode,
    getActivePaintTargetDescriptor, getList, getNextStickerZIndex, getPaintingGroupList, getPaintingLayerList,
    getRasterObjectList, getSelected, getSelectedItems, isExternalSticker, isItemLocked, isRasterObjectItem,
    isStickerHidden, isStickerItem, isStrokeGroupItem, markObjectVisualsDirty, markPaintCompositeVisualsDirty,
    markPaintStrokeVisualsDirty, parseRasterObjectSelectionId, pruneUnusedAssets, pushHistory, requestDraw, syncPaintUi,
    updateSelectionMenu, updateSidePanel;

  // The confirm dialog over the stage: resolves true on its confirm button, false on Cancel, a click beside it
  // or Escape (settleCanvasConfirm).
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

  // Closes the confirm dialog with the answer `ok`.
  function settleCanvasConfirm(ok) {
    const resolve = uiState.confirmDialog?.resolve;
    uiState.confirmDialog = { visible: false, title: "", text: "", confirmLabel: "Confirm", resolve: null };
    resolve?.(ok);
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
      state.stickers = keptExternalStickers;
      state.assets = {};
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
    // A paint stroke under way on the layer (pointer_paint.js) is cleared with it.
    const strokingLayer = () => (editor.interaction?.kind === "paint_stroke" || editor.interaction?.kind === "paint_lasso_fill")
      && editor.interaction.layerKind === kind;
    if (!strokes.length && !strokingLayer()) return;
    const ok = await showCanvasConfirm(
      `Clear ${label}`,
      `This will remove all ${kind} strokes in the current node.`,
      `Clear ${label}`,
    );
    if (!ok) return;
    if (strokingLayer()) {
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
    if (!isStickerItem(selected) || isExternalSticker(selected)) return;
    const copy = JSON.parse(JSON.stringify(selected));
    copy.id = uid("st");
    copy.yaw_deg = wrapYaw((copy.yaw_deg || 0) + 8);
    copy.z_index = getNextStickerZIndex();
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

  function deleteSelected() {
    if (readOnly) return;
    const selectedItems = getSelectedItems();
    const selected = getSelected();
    if (!selected && selectedItems.length === 0) return;
    if (selectedItems.some((item) => isItemLocked(item))) return;
    cancelLiveEdits();
    if (selectedItems.length > 1) {
      const paintStrokeIds = new Set(selectedItems
        .filter((item) => isStrokeGroupItem(item))
        .map((item) => String(item.actionGroupId || item.id || "")));
      const rasterIds = new Set(selectedItems
        .filter((item) => isRasterObjectItem(item))
        .map((item) => parseRasterObjectSelectionId(item.rasterObjectId || item.id || "")));
      const stickerIds = new Set(selectedItems.filter(isStickerItem).map((item) => String(item.id || "")));
      if (paintStrokeIds.size > 0) {
        deletePaintObjects(state.painting, { groupIds: paintStrokeIds });
        markPaintStrokeVisualsDirty();
      }
      if (rasterIds.size > 0) {
        deletePaintObjects(state.painting, { rasterIds });
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
      deletePaintObjects(state.painting, { groupIds: [String(selected.actionGroupId || selected.id || "")] });
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
      deletePaintObjects(state.painting, { rasterIds: [parseRasterObjectSelectionId(selected.rasterObjectId || selected.id || "")] });
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

  function forceCursorTool() {
    if (editor.primaryTool === "cursor") return;
    editor.primaryTool = "cursor";
    syncPaintUi();
    updateSidePanel();
  }

  return {
    connect(api) {
      ({
        cancelLiveEdits, clearCutoutFrame, collectExternalStickersForClearAll, commitAndRefreshNode,
        getActivePaintTargetDescriptor, getList, getNextStickerZIndex, getPaintingGroupList, getPaintingLayerList,
        getRasterObjectList, getSelected, getSelectedItems, isExternalSticker, isItemLocked, isRasterObjectItem,
        isStickerHidden, isStickerItem, isStrokeGroupItem, markObjectVisualsDirty, markPaintCompositeVisualsDirty,
        markPaintStrokeVisualsDirty, parseRasterObjectSelectionId, pruneUnusedAssets, pushHistory, requestDraw, syncPaintUi,
        updateSelectionMenu, updateSidePanel,
      } = api);
    },
    clearAll, clearPaintingLayer, duplicateSelected, deleteSelected, forceCursorTool, settleCanvasConfirm,
  };
}
