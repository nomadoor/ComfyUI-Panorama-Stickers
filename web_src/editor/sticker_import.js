// Images that become Stickers: picked or dropped image files added as Stickers, replacing a Sticker's image,
// uploading them, and the drop cue on the stage.
import { queuePendingStickerOperation } from "../pano_sticker_operations.js";
import {
  decodeStickerImageFile,
  dragHasStickerImageFile,
  isStickerImageFile,
  uploadStickerAssetFile,
} from "../pano_sticker_file_import.js";
import { cloneJson, uid } from "./helpers.js";

export function createStickerImport(deps) {
  const {
    api, dragCue, editor, imageCache, node, readOnly, stageWrap, state, type, vueModal,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let commitAndRefreshNode, computeStickerVFov, forceCursorTool, getNextStickerZIndex, getSelected, isExternalSticker,
    isStickerItem, markObjectVisualsDirty, pushHistory, requestDraw, setSelectedItem, updateSelectionMenu,
    updateSidePanel;

  function dragHasImageFiles(e) {
    return dragHasStickerImageFile(e?.dataTransfer);
  }

  function setDropCue(on) {
    const next = !!on;
    if (dragCue.active === next) return;
    dragCue.active = next;
    stageWrap.classList.toggle("drop-active", next);
  }

  function pruneUnusedAssets() {
    const used = new Set(
      (state.stickers || [])
        .map((s) => String(s?.asset_id || ""))
        .filter((id) => !!id),
    );
    Object.keys(state.assets || {}).forEach((id) => {
      if (!used.has(id)) {
        delete state.assets[id];
        imageCache.delete(id);
      }
    });
  }

  async function addImageStickerFromFile(file) {
    if (readOnly) return;
    if (type !== "stickers" && type !== "cutout") return;
    if (!isStickerImageFile(file)) return;
    const aid = uid("asset");
    const operation = queuePendingStickerOperation(node, `add:${aid}`, async () => {
      try {
        const { image: img } = await decodeStickerImageFile(file);
        imageCache.set(aid, img);
        const id = uid("st");
        state.stickers.push({
          id,
          asset_id: aid,
          yaw_deg: editor.viewYaw,
          pitch_deg: editor.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: computeStickerVFov(30, Number(img.naturalWidth || img.width || 1), Number(img.naturalHeight || img.height || 1)),
          rot_deg: 0,
          z_index: getNextStickerZIndex(),
        });
        setSelectedItem(state.stickers[state.stickers.length - 1]);
        forceCursorTool();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        const uploaded = await uploadStickerAssetFile(file, {
          fetchApi: (path, options) => api.fetchApi(path, options),
        });
        const liveStickers = Array.isArray(state.stickers) ? state.stickers : [];
        const matching = liveStickers.filter((item) => String(item?.asset_id || "") === aid);
        if (!matching.length) return;
        state.assets[aid] = uploaded;
        pruneUnusedAssets();
        pushHistory();
        commitAndRefreshNode();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
      } catch (error) {
        delete state.assets[aid];
        imageCache.delete(aid);
        const liveStickers = Array.isArray(state.stickers) ? state.stickers : [];
        const removed = liveStickers.filter((item) => String(item?.asset_id || "") === aid);
        if (removed.length) {
          state.stickers = liveStickers.filter((item) => String(item?.asset_id || "") !== aid);
          if (removed.some((item) => String(item?.id || "") === String(editor.selectedId || ""))) {
            setSelectedItem(null);
          }
          updateSidePanel();
          updateSelectionMenu();
          requestDraw();
          commitAndRefreshNode();
        }
        throw error;
      }
    });
    try {
      await operation;
    } catch { }
  }

  function addImageSticker() {
    if (readOnly) return;
    if (type !== "stickers" && type !== "cutout") return;
    vueModal?.openImagePicker?.("add");
  }

  async function replaceSelectedImageFromFile(file) {
    if (readOnly) return;
    if (type !== "stickers" && type !== "cutout") return;
    const selected = getSelected();
    if (!selected || !isStickerItem(selected) || isExternalSticker(selected)) return;
    if (!isStickerImageFile(file)) return;
    const selectedId = String(selected.id || "");
    const nextAssetId = uid("asset");
    const operation = queuePendingStickerOperation(node, `replace:${selectedId}:${nextAssetId}`, async () => {
      const liveSelected = (Array.isArray(state.stickers) ? state.stickers : [])
        .find((item) => String(item?.id || "") === selectedId) || null;
      if (!liveSelected || !isStickerItem(liveSelected) || isExternalSticker(liveSelected)) return;
      const previousAssetId = String(liveSelected.asset_id || "");
      const previousAsset = previousAssetId ? cloneJson(state.assets?.[previousAssetId] || null) : null;
      const previousVfov = Number(liveSelected.vFOV_deg || 0);
      const previousCrop = liveSelected.crop && typeof liveSelected.crop === "object"
        ? { ...liveSelected.crop }
        : null;
      try {
        const { image: img } = await decodeStickerImageFile(file);
        imageCache.set(nextAssetId, img);
        liveSelected.asset_id = nextAssetId;
        liveSelected.vFOV_deg = computeStickerVFov(
          Number(liveSelected.hFOV_deg || 30),
          Number(img.naturalWidth || img.width || 1),
          Number(img.naturalHeight || img.height || 1),
        );
        liveSelected.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        markObjectVisualsDirty();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        const uploaded = await uploadStickerAssetFile(file, {
          fetchApi: (path, options) => api.fetchApi(path, options),
        });
        const currentSticker = (Array.isArray(state.stickers) ? state.stickers : [])
          .find((item) => String(item?.id || "") === selectedId) || null;
        if (!currentSticker || String(currentSticker.asset_id || "") !== nextAssetId) return;
        state.assets[nextAssetId] = uploaded;
        pruneUnusedAssets();
        pushHistory();
        commitAndRefreshNode();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
      } catch (error) {
        delete state.assets[nextAssetId];
        imageCache.delete(nextAssetId);
        const currentSticker = (Array.isArray(state.stickers) ? state.stickers : [])
          .find((item) => String(item?.id || "") === selectedId) || null;
        if (currentSticker && String(currentSticker.asset_id || "") === nextAssetId) {
          if (previousAssetId && previousAsset) state.assets[previousAssetId] = previousAsset;
          currentSticker.asset_id = previousAssetId;
          currentSticker.vFOV_deg = previousVfov;
          currentSticker.crop = previousCrop ? { ...previousCrop } : null;
        }
        markObjectVisualsDirty();
        commitAndRefreshNode();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        throw error;
      }
    });
    try {
      await operation;
    } catch { }
  }

  function replaceSelectedImage() {
    if (readOnly) return;
    const selected = getSelected();
    if (!selected || !isStickerItem(selected) || isExternalSticker(selected)) return;
    vueModal?.openImagePicker?.("replace");
  }

  function onCanvasDragOver(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    e.preventDefault();
    setDropCue(true);
  }

  // An image becomes a Sticker.
  function onCanvasDrop(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    e.preventDefault();
    e.stopPropagation();
    dragCue.depth = 0;
    setDropCue(false);
    const files = Array.from(e.dataTransfer?.files || []);
    const file = files.find((f) => isStickerImageFile(f));
    if (file) void addImageStickerFromFile(file);
  }

  function onWindowDragEnter(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    if (!dragHasImageFiles(e)) return;
    dragCue.depth += 1;
    setDropCue(true);
    e.preventDefault();
  }
  function onWindowDragOver(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    if (!dragCue.active && dragHasImageFiles(e)) setDropCue(true);
    if (dragCue.active) e.preventDefault();
  }
  function onWindowDragLeave(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    if (!dragCue.active) return;
    dragCue.depth = Math.max(0, dragCue.depth - 1);
    const leftWindow = (Number(e.clientX) <= 0 && Number(e.clientY) <= 0);
    if (dragCue.depth === 0 || leftWindow) setDropCue(false);
  }
  function onWindowDrop(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    dragCue.depth = 0;
    setDropCue(false);
    if (dragHasImageFiles(e)) e.preventDefault();
  }

  return {
    connect(api) {
      ({
        commitAndRefreshNode, computeStickerVFov, forceCursorTool, getNextStickerZIndex, getSelected, isExternalSticker,
        isStickerItem, markObjectVisualsDirty, pushHistory, requestDraw, setSelectedItem, updateSelectionMenu,
        updateSidePanel,
      } = api);
    },
    addImageStickerFromFile, addImageSticker, replaceSelectedImageFromFile, replaceSelectedImage, pruneUnusedAssets,
    setDropCue, onCanvasDragOver, onCanvasDrop, onWindowDragEnter, onWindowDragOver, onWindowDragLeave,
    onWindowDrop,
  };
}
