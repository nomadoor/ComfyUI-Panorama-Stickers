// Images that become Stickers: picked or dropped files added as sky or world Stickers, replacing a Sticker's
// image, uploading them, the legacy embedded assets moved to files, and the drop cue on the stage.
import { queuePendingStickerOperation } from "../pano_editor_extension.js";
import { fileSource, newSceneSticker, newWorldSceneSticker } from "../pano_editor_state.js";
import { newWorldStickerTransform } from "../pano_space.js";
import {
  decodeStickerImageFile,
  dragHasStickerImageFile,
  isStickerImageFile,
  uploadStickerAssetFile,
} from "../pano_sticker_file_import.js";
import { cloneJson, uid } from "./helpers.js";

export function createStickerImport(deps) {
  const {
    api, canvas, dragCue, editor, editorView, imageCache, node, readOnly, sceneV2, stageWrap, state,
    type, vueModal,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let clearWorldSelection, commitAndRefreshNode, computeStickerVFov, contentSphere, currentSpaceCamera,
    forceCursorTool, getNextStickerZIndex, getSelected, isExternalSticker, isSpaceView, isStickerItem,
    markObjectVisualsDirty, pushHistory, requestDraw, selectWorldSticker, setSelectedItem, spaceViewState,
    stickerImageKey, stopTimelinePlayback, updateSelectionMenu, updateSidePanel;

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
    if (sceneV2) {
      // A dropped or picked image is added at the frame shown.
      stopTimelinePlayback();
      await addSceneStickerFromFile(file);
      return;
    }
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

  // Panorama Studio (#72): Add World Image picks an image to place in space.
  function addWorldImageSticker() {
    if (readOnly || !sceneV2) return;
    vueModal?.openImagePicker?.("add-world");
  }

  async function addWorldStickerFromFile(file) {
    if (readOnly || !sceneV2 || !isStickerImageFile(file)) return;
    stopTimelinePlayback();
    await addSceneStickerFromFile(file, "world");
  }

  // Where a world Sticker added now goes (pano_space.js newWorldStickerTransform): on the World content
  // at the center of the view, else ahead of the view. The button that adds it is not over the view, so
  // the center of the view stands for the pointer.
  function newWorldStickerPlace() {
    const center = { x: canvas.width / 2, y: canvas.height / 2 };
    const hit = isSpaceView() ? editorView.pick(currentSpaceCamera(), center.x, center.y, canvas.width, canvas.height) : null;
    return newWorldStickerTransform(spaceViewState(), hit, contentSphere());
  }

  // Panorama Studio: the new Sticker shows from the decoded image while it uploads. Its Source
  // has no file until then, so saving in between leaves it out. A sky Sticker goes where the view looks;
  // a world one where newWorldStickerPlace() puts it.
  async function addSceneStickerFromFile(file, placement = "sky") {
    const id = uid("st");
    const operation = queuePendingStickerOperation(node, `add:${id}`, async () => {
      const { image: img } = await decodeStickerImageFile(file);
      const pose = {
        yaw_deg: editor.viewYaw,
        pitch_deg: editor.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: computeStickerVFov(30, Number(img.naturalWidth || img.width || 1), Number(img.naturalHeight || img.height || 1)),
        rot_deg: 0,
      };
      const source = { kind: "file", filename: "" };
      const sticker = placement === "world"
        ? newWorldSceneSticker(id, source, newWorldStickerPlace())
        : newSceneSticker(id, source, pose, getNextStickerZIndex());
      imageCache.set(stickerImageKey(sticker), img);
      state.stickers.push(sticker);
      if (placement === "world") selectWorldSticker(id);
      else setSelectedItem(sticker);
      forceCursorTool();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      try {
        const uploaded = await uploadStickerAssetFile(file, {
          fetchApi: (path, options) => api.fetchApi(path, options),
        });
        const live = state.stickers.find((item) => item.id === id);
        if (!live) return;
        live.source = fileSource(uploaded);
        imageCache.set(stickerImageKey(live), img);
        pushHistory();
        commitAndRefreshNode();
      } catch (error) {
        state.stickers = state.stickers.filter((item) => item.id !== id);
        if (editor.selectedId === id) setSelectedItem(null);
        if (editor.worldSelectedId === id) clearWorldSelection();
        // Edits made while it uploaded were not recorded yet.
        pushHistory();
        commitAndRefreshNode();
        throw error;
      } finally {
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
      }
    });
    try {
      await operation;
    } catch { }
  }

  // Panorama Studio: the Source changes once the image is uploaded. The vFOV of the value and of
  // every Keyframe follows the new image's aspect.
  async function replaceSceneStickerImage(file, id) {
    const operation = queuePendingStickerOperation(node, `replace:${id}:${uid("asset")}`, async () => {
      const { image: img } = await decodeStickerImageFile(file);
      const uploaded = await uploadStickerAssetFile(file, {
        fetchApi: (path, options) => api.fetchApi(path, options),
      });
      const live = state.stickers.find((item) => item.id === id);
      if (!live) return;
      live.source = fileSource(uploaded);
      live.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
      for (const value of [live.size.value, ...live.size.keyframes.map((key) => key.value)]) {
        value.vFOV_deg = computeStickerVFov(value.hFOV_deg, Number(img.naturalWidth || img.width || 1), Number(img.naturalHeight || img.height || 1));
      }
      imageCache.set(stickerImageKey(live), img);
      markObjectVisualsDirty();
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
    });
    try {
      await operation;
    } catch { }
  }

  async function replaceSelectedImageFromFile(file) {
    if (readOnly) return;
    if (type !== "stickers" && type !== "cutout") return;
    const selected = getSelected();
    if (!selected || !isStickerItem(selected) || isExternalSticker(selected)) return;
    if (!isStickerImageFile(file)) return;
    if (sceneV2) {
      await replaceSceneStickerImage(file, selected.id);
      return;
    }
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

  async function migrateLegacyEmbeddedAssets() {
    if (readOnly || type !== "stickers") return;
    if (sceneV2) {
      await uploadEmbeddedSceneSources();
      return;
    }
    const assets = state.assets && typeof state.assets === "object" ? state.assets : {};
    const entries = Object.entries(assets).filter(([, asset]) => {
      const t = String(asset?.type || "").toLowerCase();
      const v = String(asset?.value || "");
      return t === "dataurl" && v.startsWith("data:image");
    });
    if (!entries.length) return;
    let changed = false;
    for (const [assetId, asset] of entries) {
      try {
        const dataUrl = String(asset?.value || "");
        if (!dataUrl) continue;
        const blob = await fetch(dataUrl).then((r) => r.blob());
        const ext = String(blob.type || "image/png").split("/")[1] || "png";
        const name = String(asset?.name || `${assetId}.${ext}`);
        const file = new File([blob], name, { type: blob.type || "image/png" });
        const uploaded = await uploadStickerAssetFile(file, {
          fetchApi: (path, options) => api.fetchApi(path, options),
        });
        state.assets[assetId] = {
          ...uploaded,
          w: Number(asset?.w || 0),
          h: Number(asset?.h || 0),
        };
        changed = true;
      } catch {
      }
    }
    if (changed) {
      commitAndRefreshNode();
      requestDraw();
    }
  }

  // A Source of state v2 that embeds a data URL (read from a v1 state) becomes an uploaded file.
  async function uploadEmbeddedSceneSources() {
    let changed = false;
    for (const sticker of state.stickers) {
      const dataUrl = sticker.source.data_url;
      if (!dataUrl) continue;
      try {
        const blob = await fetch(dataUrl).then((r) => r.blob());
        const ext = String(blob.type || "image/png").split("/")[1] || "png";
        const file = new File([blob], `${sticker.id}.${ext}`, { type: blob.type || "image/png" });
        const uploaded = await uploadStickerAssetFile(file, {
          fetchApi: (path, options) => api.fetchApi(path, options),
        });
        sticker.source = fileSource(uploaded);
        changed = true;
      } catch {
      }
    }
    if (changed) {
      commitAndRefreshNode();
      requestDraw();
    }
  }

  function onCanvasDragOver(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    e.preventDefault();
    setDropCue(true);
  }

  function onCanvasDrop(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    e.preventDefault();
    e.stopPropagation();
    dragCue.depth = 0;
    setDropCue(false);
    const files = Array.from(e.dataTransfer?.files || []);
    const file = files.find((f) => isStickerImageFile(f));
    if (!file) return;
    void addImageStickerFromFile(file);
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
        clearWorldSelection, commitAndRefreshNode, computeStickerVFov, contentSphere, currentSpaceCamera,
        forceCursorTool, getNextStickerZIndex, getSelected, isExternalSticker, isSpaceView, isStickerItem,
        markObjectVisualsDirty, pushHistory, requestDraw, selectWorldSticker, setSelectedItem, spaceViewState,
        stickerImageKey, stopTimelinePlayback, updateSelectionMenu, updateSidePanel,
      } = api);
    },
    addImageStickerFromFile, addImageSticker, addWorldImageSticker, addWorldStickerFromFile,
    replaceSelectedImageFromFile, replaceSelectedImage, migrateLegacyEmbeddedAssets, pruneUnusedAssets,
    setDropCue, onCanvasDragOver, onCanvasDrop, onWindowDragEnter, onWindowDragOver, onWindowDragLeave,
    onWindowDrop,
  };
}
