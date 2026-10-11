// Images and 3D files that become Stickers: picked or dropped files added as sky or world Stickers (a 3D file
// only in Panorama Studio, as a world Sticker), replacing a Sticker's image, uploading them, the legacy embedded
// assets moved to files, and the drop cue on the stage.
import { queuePendingStickerOperation } from "../pano_editor_extension.js";
import { placeDirection } from "../pano_editor_view.js";
import { fileSource, newSceneSticker, newWorldSceneSticker, takeStickerId } from "../pano_editor_state.js";
import { evaluateSticker } from "../pano_scene_eval.js";
import {
  FIT_3D_MIN_DISTANCE,
  fileStickerKey,
  fit3dPosition,
  fitSphereOfBox,
  newWorld3dStickerTransform,
  newWorldStickerTransform,
  viewFitFov,
} from "../pano_space.js";
import {
  WORLD_FILE_ACCEPT,
  decodeStickerImageFile,
  dragHasStickerImageFile,
  dragHasStudioFile,
  file3dTooLargeMessage,
  isSticker3dFile,
  isStickerImageFile,
  uploadStickerAssetFile,
  uploadWorld3dFile,
} from "../pano_sticker_file_import.js";
import { isUpstreamSticker } from "../pano_upstream.js";
import { cloneJson, uid } from "./helpers.js";

export function createStickerImport(deps) {
  const {
    api, canvas, dragCue, editor, editorView, imageCache, node, readOnly, sceneV2, stageWrap, state,
    type, vueModal,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let clearWorldSelection, commitAndRefreshNode, computeStickerVFov, contentSphere, currentSpaceCamera,
    file3dEditorFile, forceCursorTool, getNextStickerZIndex, getSelected, isExternalSticker, isSpaceView,
    isStickerItem, markObjectVisualsDirty, pushHistory, requestDraw, requestFile3d, screenPos, selectWorldSticker,
    setSelectedItem, spaceViewState, stickerImageKey, stopTimelinePlayback, syncTimeline, updateSelectionMenu,
    updateSidePanel;

  // The 3D files being placed (docs/editor-interaction.md "3D ファイルを置く流れ"): the ids of their Stickers,
  // from the upload until their item draws, and the reason the last one failed, shown until the next file is
  // placed or the editor closes.
  const loading3d = new Set();
  let file3dFailure = "";

  // Panorama Studio's editor also takes a 3D file; the legacy editor takes images only.
  function dragHasImageFiles(e) {
    return sceneV2 ? dragHasStudioFile(e?.dataTransfer) : dragHasStickerImageFile(e?.dataTransfer);
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

  // Panorama Studio: Add to World picks an image or a 3D file to place in space.
  function addToWorld() {
    if (readOnly || !sceneV2) return;
    vueModal?.openImagePicker?.("add-world", WORLD_FILE_ACCEPT);
  }

  // A picked (or dropped) image or 3D file placed in space as a world Sticker. `point` is where a 3D file was
  // dropped on the canvas (canvas pixels), null for the button.
  async function addWorldStickerFromFile(file, point = null) {
    if (readOnly || !sceneV2) return;
    if (isStickerImageFile(file)) {
      stopTimelinePlayback();
      await addSceneStickerFromFile(file, "world");
    } else if (isSticker3dFile(file)) {
      stopTimelinePlayback();
      await addFile3dSticker(file, file3dPlacement(point));
    }
  }

  // What a new 3D file is fitted with once the route gives its box (docs/editor-interaction.md "3D の Sticker を
  // 収めて置く"), taken when it is placed so moving the view meanwhile changes nothing: the view, the direction
  // through the drop point on the panorama view (else through the view's center), the FOV the view fits content
  // in, and the nearest distance (twice the view's near plane, at least FIT_3D_MIN_DISTANCE).
  function file3dPlacement(point) {
    const view = spaceViewState();
    const camera = currentSpaceCamera();
    const at = point && editor.mode === "pano" ? point : null;
    return {
      view,
      eye: [...view.position],
      dir: placeDirection(camera, at, canvas.width, canvas.height),
      fovDeg: viewFitFov(view, canvas.width, canvas.height),
      minDistance: Math.max(FIT_3D_MIN_DISTANCE, camera.near * 2),
    };
  }

  // A 3D file placed as a world Sticker (docs/editor-interaction.md "3D ファイルを置く流れ"): it shows nothing
  // until the route's editor file draws, since only the node's readers give the output's look. The Sticker is
  // selected at once, and its Source has no file (it is not saved, and no Undo step is taken) until the route
  // answered; then placing it is one Undo step. When it fails it goes, and the reason shows.
  async function addFile3dSticker(file, placement) {
    file3dFailure = "";
    const tooLarge = file3dTooLargeMessage(file);
    if (tooLarge) {
      file3dFailure = tooLarge;
      requestDraw();
      return;
    }
    const id = takeStickerId(state);
    const provisional = newWorld3dStickerTransform(placement.view, placement.dir);
    state.stickers.push(newWorldSceneSticker(id, { kind: "file", filename: "" }, provisional));
    loading3d.add(id);
    selectWorldSticker(id);
    forceCursorTool();
    updateSidePanel();
    updateSelectionMenu();
    syncTimeline();
    requestDraw();
    const operation = queuePendingStickerOperation(node, `add:${id}`, async () => {
      try {
        const source = await uploadWorld3dFile(file, {
          fetchApi: (path, options) => api.fetchApi(path, options),
        });
        const answer = await requestFile3d(source);
        if (answer.state !== "ready") throw new Error(answer.error);
        const live = state.stickers.find((item) => item.id === id);
        if (!live) {
          loading3d.delete(id);
          return;
        }
        live.source = source;
        fitFile3dSticker(live, provisional.position, placement, answer.box);
        pushHistory();
        commitAndRefreshNode();
      } catch (error) {
        loading3d.delete(id);
        file3dFailure = String(error?.message || error);
        state.stickers = state.stickers.filter((item) => item.id !== id);
        if (editor.selectedId === id) setSelectedItem(null);
        if (editor.worldSelectedId === id) clearWorldSelection();
        // Edits made while it was placed were not recorded yet.
        pushHistory();
        commitAndRefreshNode();
        throw error;
      } finally {
        updateSidePanel();
        updateSelectionMenu();
        syncTimeline();
        requestDraw();
      }
    });
    try {
      await operation;
    } catch { }
  }

  // A new 3D file Sticker goes where its content (the route's `box`) fits the view it was placed from, unless it
  // was moved or keyed while it uploaded (its position is no longer the provisional one), or it has no usable box.
  // It is turned as it is at the playhead.
  function fitFile3dSticker(sticker, provisionalPosition, placement, box) {
    const lane = sticker.position;
    const untouched = !lane.keyframes.length && lane.value.every((value, axis) => value === provisionalPosition[axis]);
    const sphere = fitSphereOfBox(box);
    if (!untouched || !sphere) return;
    const value = evaluateSticker(sticker, editor.frame);
    lane.value = fit3dPosition(placement.eye, placement.dir, sphere, value, placement.fovDeg, placement.minDistance);
  }

  // The stage's line about the 3D files being placed: the reason the last one failed, else "Loading 3D model…"
  // while one shown at the playhead has not drawn yet, else nothing. A 3D file has drawn once its item loaded
  // under the key of its editor file.
  function file3dImportNotice() {
    for (const id of [...loading3d]) {
      const sticker = state.stickers.find((item) => item.id === id);
      const file = sticker?.source.filename ? file3dEditorFile(sticker) : null;
      const key = file && fileStickerKey(id, file.generation);
      // Gone, drawn, or not shown at this frame (hidden, outside its Clip range): nothing is left to wait for here.
      if (!sticker || (key && editorView.sceneBox(key)) || !evaluateSticker(sticker, editor.frame).active) loading3d.delete(id);
      // The editor file came but three.js could not show it: say so (the output reads it apart).
      else if (key && editorView.sceneItemError(key) && !/\b404\b/.test(editorView.sceneItemError(key))) {
        loading3d.delete(id);
        file3dFailure = `Could not show ${sticker.source.filename}: ${editorView.sceneItemError(key)}`;
      }
    }
    if (file3dFailure) return file3dFailure;
    return loading3d.size ? "Loading 3D model…" : "";
  }

  // The ids of the 3D file Stickers still uploading, which the Timeline shows as 3D Stickers.
  function loading3dIds() {
    return loading3d;
  }


  // Where a world image added now goes (pano_space.js newWorldStickerTransform): on the World content at the
  // center of the view, else ahead of the view. The button that adds it is not over the view, so the center of
  // the view stands for the pointer.
  function newWorldStickerPlace() {
    const center = { x: canvas.width / 2, y: canvas.height / 2 };
    const hit = isSpaceView() ? editorView.pick(currentSpaceCamera(), center.x, center.y, canvas.width, canvas.height) : null;
    return newWorldStickerTransform(spaceViewState(), hit, contentSphere());
  }

  // Panorama Studio: the new Sticker shows from the decoded image while it uploads. Its Source
  // has no file until then, so saving in between leaves it out. A sky Sticker goes where the view looks;
  // a world one where newWorldStickerPlace() puts it.
  async function addSceneStickerFromFile(file, placement = "sky") {
    // A new file ends the note of a 3D file that failed before.
    file3dFailure = "";
    const id = takeStickerId(state);
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
    if (!selected || !isStickerItem(selected) || isExternalSticker(selected) || isUpstreamSticker(selected)) return;
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
    if (!selected || !isStickerItem(selected) || isExternalSticker(selected) || isUpstreamSticker(selected)) return;
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

  // An image becomes a sky Sticker; else, in Panorama Studio, a 3D file goes into space as Add to World puts it.
  function onCanvasDrop(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    e.preventDefault();
    e.stopPropagation();
    dragCue.depth = 0;
    setDropCue(false);
    const files = Array.from(e.dataTransfer?.files || []);
    const file = files.find((f) => isStickerImageFile(f));
    if (file) {
      void addImageStickerFromFile(file);
      return;
    }
    const model = sceneV2 ? files.find((f) => isSticker3dFile(f)) : null;
    if (model) void addWorldStickerFromFile(model, screenPos(e));
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
        file3dEditorFile, forceCursorTool, getNextStickerZIndex, getSelected, isExternalSticker, isSpaceView,
        isStickerItem, markObjectVisualsDirty, pushHistory, requestDraw, requestFile3d, screenPos, selectWorldSticker,
        setSelectedItem, spaceViewState, stickerImageKey, stopTimelinePlayback, syncTimeline, updateSelectionMenu,
        updateSidePanel,
      } = api);
    },
    addImageStickerFromFile, addImageSticker, addToWorld, addWorldStickerFromFile, file3dImportNotice, loading3dIds,
    replaceSelectedImageFromFile, replaceSelectedImage, migrateLegacyEmbeddedAssets, pruneUnusedAssets,
    setDropCue, onCanvasDragOver, onCanvasDrop, onWindowDragEnter, onWindowDragOver, onWindowDragLeave,
    onWindowDrop,
  };
}
