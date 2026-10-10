// What the three.js views draw: the input of a frame (background, Sky layers, World content and the space
// guides), built once per frame from the state at the playhead, and the calls that draw the panorama view,
// a shot and the Unwrap view with it.
import { CAMERA_SHOT_ID } from "../pano_editor_state.js";
import { shotCamera, workingSkyLayers, worldStickerLayers } from "../pano_editor_view.js";
import { bgColorBackground } from "../pano_port_media.js";
import { evaluateSceneState, evaluateSticker } from "../pano_scene_eval.js";
import { loadSceneState } from "../pano_scene_state.js";
import {
  DEFAULT_DISTANCE,
  boundingSphere,
  cameraFrustumSegments,
  cameraTrajectory,
  contentPoints,
  fileStickerRequests,
  gridSpec,
  placedCamera,
  polylineSegments,
  sceneItemBox,
  sceneRequest,
  sceneTransform,
  spaceCamera,
  spaceModeWithContent,
  stickerContentRequest,
  stickerContentUrls,
} from "../pano_space.js";
import { depthGridNotice } from "../pano_depth_color.js";
import { isUpstreamSticker } from "../pano_upstream.js";
import { CUTOUT_FRAME_ACCENT, CUTOUT_FRUSTUM_COLOR, CUTOUT_TRAJECTORY_COLOR } from "./constants.js";

export function createViewInput(deps) {
  const {
    canvas, editor, editorView, imageCache, readOnly, scheduler, state, stateV2, stillCanvas, videoEl,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let applySpaceMode, backgroundColor, backgroundCoverage, backgroundShowsAt, buildEditorViewPaintLayers, cameraFrustumLength, cameraShoots, cancelViewTransition,
    currentViewCamera, cutoutCamera, depthColor, deviceRect, file3dEditorFile, followPortSticker, frameViewDistance, getConnectedErpImage,
    getMediaRevisionToken, getStickerImage, hasSpaceContent, isDecodedImageReady, isExternalSticker,
    isFreeSpaceView, isSpaceView, isUploadingSticker, isWorldMenuShown, portVideo, refreshFile3d, sceneFiles,
    selectedWorldSticker, spaceModeState, spaceOrigin, spaceViewState, stickerFiles, stickerImageKey,
    retainDepthColors, syncFloatingViewButtonState, timelineSpanFrames, updateSelectionMenu, upstreamViewInput,
    worldStickerEditable;
  // The stage's line for the depth grids of the frame built last (depthVideoNotice).
  let depthNotice = "";

  // The state v2 the views draw, made again when the state changes (scheduler.stateRevision).
  let editorViewScene = { revision: -1, sceneState: null };
  // The input built for the frame being drawn, shared by its views; drawScene clears it.
  let editorViewFrameInput = null;

  // What the three.js views draw: the background ERP, and the Sky layers from back to front.
  function editorViewInput() {
    editorViewFrameInput ||= buildEditorViewInput();
    return editorViewFrameInput;
  }

  // The frame drawn next builds its input again (drawScene).
  function endEditorViewFrame() {
    editorViewFrameInput = null;
  }

  // The state v2 the views draw, as editorViewInput() built it.
  function editorViewSceneState() {
    return editorViewScene.sceneState;
  }

  function buildEditorViewInput() {
    const bgImg = getConnectedErpImage();
    const paintLayers = buildEditorViewPaintLayers();
    // A dropped or replaced image shows while it uploads, before its asset (v1) or file Source
    // (state v2) exists in the state.
    const assets = { ...state.assets };
    for (const item of stateV2 ? [] : state.stickers) {
      const assetId = String(item?.asset_id || "");
      if (assetId && !assets[assetId] && imageCache.has(assetId)) assets[assetId] = { type: "comfy_image", filename: assetId };
    }
    const stickers = stateV2
      ? state.stickers.map((item) => (isUploadingSticker(item)
        ? { ...item, source: { kind: "file", filename: stickerImageKey(item) } }
        : item))
      : state.stickers;
    // The state v2 is rebuilt only when the state changes (scheduler.stateRevision). Paint comes from the
    // paint engine's ERP canvases, so the strokes are left out. A Timeline drag changes Clip ranges on
    // every move without a state draw request, so they are copied in on each build instead.
    if (editorViewScene.revision !== scheduler.stateRevision) {
      editorViewScene = { revision: scheduler.stateRevision, sceneState: loadSceneState({ ...state, stickers, assets, painting: null }) };
    }
    if (stateV2) copyClipRanges(editorViewScene.sceneState);
    // The Stickers and the World are evaluated at the playhead once per frame.
    const evaluated = evaluateSceneState(editorViewScene.sceneState, editor.frame);
    const portPicture = portVideo ? followPortSticker() : null;
    const media = (item) => {
      // A hidden Sticker of state v2 is not drawn; the legacy editor shows its hidden port Sticker faintly.
      if (stateV2 && !item.visible) return null;
      if (portVideo && isExternalSticker(item)) return portPicture;
      const img = getStickerImage(item);
      return img ? { media: img, revision: getMediaRevisionToken(img) } : null;
    };
    // The upstream Scene's Sky (Panorama Studio, #90) lies under the node's own.
    const upstream = upstreamViewInput();
    const layers = [...upstream.sky, ...workingSkyLayers(editorViewScene.sceneState, editor.frame, state.stickers, { media, paintLayers, evaluated })];
    // The background VIDEO and its still are one source, so a seek keeps the frame before.
    const bgSource = bgImg && (bgImg === videoEl || bgImg === stillCanvas) ? videoEl.dataset.panoSrc : bgImg;
    // Outside the background's Clip range and media, bg_color shows in its place, as in the node's output.
    let background = isDecodedImageReady(bgImg)
      ? { media: bgImg, revision: getMediaRevisionToken(bgImg), coverage: backgroundCoverage(), source: bgSource }
      : null;
    if (!backgroundShowsAt(editor.frame)) background = bgColorBackground(backgroundColor());
    // When the World content goes away, 6DoF goes back to 3DoF at the origin at once, ending a transition.
    const hasContent = hasSpaceContent();
    const spaceMode = spaceModeWithContent(spaceModeState(), hasContent, spaceOrigin());
    if (spaceMode.mode !== editor.spaceMode) cancelViewTransition();
    applySpaceMode(spaceMode);
    // `content` is the World alone, as the Camera sees it in the Frame view and the camera
    // preview (#77); `space` adds the guides of the panorama view.
    const content = hasContent ? buildSpaceContent(editorViewScene.sceneState, evaluated, media, upstream) : null;
    if (!content) {
      retainDepthColors([]);
      depthNotice = "";
    }
    const space = isSpaceView() ? { ...content, ...spaceGuides(content) } : null;
    return { background, layers, space, content };
  }

  // The working state's Clip ranges, into the state v2 the views draw. A Clip range of the working state
  // is already normalized (integer frames), so it is copied as it is.
  function copyClipRanges(sceneState) {
    const clips = new Map(state.stickers.map((item) => [item.id, item.clip]));
    sceneState.scene.clip = { ...state.scene.clip };
    for (const item of sceneState.stickers) {
      const clip = clips.get(item.id);
      if (clip) item.clip = { ...clip };
    }
  }

  // The World at the playhead: the `scene` item the node draws at this frame with the `scene` transform,
  // the items of the 3D port Sticker and of the 3D file Stickers with their transforms and opacities, the world
  // Sticker planes, the upstream Scene's planes and items (`upstream`, upstreamViewInput()), and the sphere
  // around all of it (null without content) that frames it and scales the navigation.
  function buildSpaceContent(sceneState, evaluated, media, upstream) {
    const files = sceneFiles();
    // A depth grid (DA3_GEOMETRY mono) draws with the colors of its input's proxy video, by the input's name.
    const depthNames = [];
    const withColors = (name, request) => {
      if (request?.kind !== "depth_grid") return request;
      depthNames.push(name);
      const color = depthColor(name, request.video);
      // The input's name keys its one color texture (pano_three_view.js createDepthColorTextures).
      return { ...request, color: color && { ...color, slot: name } };
    };
    const scene = withColors("scene", sceneRequest(files, evaluated.scene));
    const box = scene?.url ? editorView.sceneBox(scene.url) : null;
    const sceneBox = box && sceneItemBox(scene.kind, box);
    const portFiles = stickerFiles();
    const sticker = withColors("sticker", stickerContentRequest(portFiles, sceneState, evaluated));
    const stickerBox = sticker?.url ? editorView.sceneBox(sticker.url) : null;
    const items = stickerBox ? [{ box: sceneItemBox(sticker.kind, stickerBox), value: sticker.value }] : [];
    const fileStickers = fileStickerRequests(sceneState, evaluated, file3dEditorFile);
    for (const { request } of fileStickers) {
      const fileBox = request ? editorView.sceneBox(request.url) : null;
      if (fileBox) items.push({ box: sceneItemBox(request.kind, fileBox), value: request.value });
    }
    refreshGoneFiles(sceneState, fileStickers, upstream.items);
    const upstreamItems = upstream.items.map((entry) => (entry.request?.kind === "depth_grid" ? { ...entry, request: withColors(entry.slot, entry.request) } : entry));
    retainDepthColors(depthNames);
    depthNotice = depthGridNotice([scene, sticker, ...upstreamItems.map((entry) => entry.request)], (key) => editorView.sceneItemError(key));
    const stickers = worldStickerLayers(sceneState, editor.frame, state.stickers, { media, evaluated });
    for (const { request, value } of upstreamItems) {
      const upstreamBox = request?.url ? editorView.sceneBox(request.url) : null;
      if (upstreamBox) items.push({ box: sceneItemBox(request.kind, upstreamBox), value });
    }
    const sphere = boundingSphere(contentPoints(evaluated, sceneBox, [...stickers, ...upstream.stickers], items));
    return {
      evaluated,
      sceneUrls: files ? files.urls.filter(Boolean) : [],
      scene,
      stickerUrls: stickerContentUrls(portFiles, sceneState),
      sticker,
      fileStickers: fileStickers.map((entry) => entry.request).filter(Boolean),
      fileStickerKeys: fileStickers.map((entry) => entry.key),
      stickers,
      upstreamStickers: upstream.stickers,
      upstreamItems,
      sphere,
    };
  }

  // A 3D file Sticker (its own or an upstream layer's) whose editor file is gone (a 404: the server dropped the
  // temp file) asks the route again.
  function refreshGoneFiles(sceneState, fileStickers, upstreamItems) {
    const gone = (key) => /\b404\b/.test(editorView.sceneItemError(key) ?? "");
    for (const { id, key } of fileStickers) {
      const sticker = gone(key) ? sceneState.stickers.find((item) => item.id === id) : null;
      if (sticker) refreshFile3d(sticker.source);
    }
    for (const item of upstreamItems) {
      if (item.source && gone(item.urls[0])) refreshFile3d(item.source);
    }
  }

  // The stage's line for the depth grids shown in the frame built last (pano_depth_color.js depthGridNotice).
  function depthVideoNotice() {
    return depthNotice;
  }

  // The guides of the panorama view over the World `content`: the grid, the gizmo, and in the Cutout
  // editor its Camera's frustum and trajectory.
  function spaceGuides(content) {
    const radius = content.sphere?.radius || DEFAULT_DISTANCE;
    return {
      gizmo: isCameraSelected() ? cameraGizmo() : worldGizmo(content.evaluated),
      grid: editor.showGrid && !editor.fullscreen ? gridSpec(radius) : null,
      lines: cameraShoots() ? cameraLines(radius) : [],
    };
  }

  // The gizmo of the selected world Sticker where it shows at the playhead (its evaluated value in
  // `evaluated`, or an upstream element's from its working Sticker), or null while it is hidden, outside its
  // Clip range or not editable.
  function worldGizmo(evaluated) {
    const sticker = selectedWorldSticker();
    const value = isUpstreamSticker(sticker) ? evaluateSticker(sticker, editor.frame) : evaluated.stickers.find((item) => item.id === sticker?.id);
    if (!worldStickerEditable(sticker) || !value?.active) return null;
    return { mode: editor.gizmoMode, transform: sceneTransform(value) };
  }

  // The Camera's selection is the canvas selection of its shot, as the frame's selection always was.
  function isCameraSelected() {
    return cameraShoots() && editor.selectedId === CAMERA_SHOT_ID;
  }

  // The Camera's trajectory over the Timeline, made again when the state or the span changes.
  let trajectory = { revision: -1, span: -1, segments: [] };
  function cameraLines(radius) {
    const span = timelineSpanFrames();
    if (trajectory.revision !== scheduler.stateRevision || trajectory.span !== span) {
      trajectory = { revision: scheduler.stateRevision, span, segments: polylineSegments(cameraTrajectory(state, span)) };
    }
    const { segments } = trajectory;
    const lines = segments.length ? [{ segments, color: CUTOUT_TRAJECTORY_COLOR }] : [];
    if (!isFreeSpaceView()) return lines;
    const color = isCameraSelected() ? CUTOUT_FRAME_ACCENT : CUTOUT_FRUSTUM_COLOR;
    return [...lines, { segments: cameraFrustumSegments(cutoutCamera(), cameraFrustumLength(radius)), color }];
  }

  // The selected Camera's gizmo in 6DoF: Move or Rotate (it has no scale).
  function cameraGizmo() {
    if (!isFreeSpaceView() || !isCameraSelected() || readOnly) return null;
    return { mode: editor.gizmoMode === "rotate" ? "rotate" : "translate", transform: sceneTransform({ ...cutoutCamera(), scale: 1 }) };
  }

  // The panorama view on the whole three.js canvas. Returns whether it could draw.
  function renderEditorView() {
    const { background, layers, space } = editorViewInput();
    const width = canvas.width;
    const height = canvas.height;
    const rect = deviceRect({ x: 0, y: 0, w: width, h: height });
    let drawn = false;
    if (!background && !layers.length && !space) {
      editorView.clear(0x070707);
      drawn = editorView.ready;
    } else {
      editorView.clear();
      drawn = !!editorView.render({
        rect,
        camera: space ? spaceCamera(spaceViewState(), width, height, space.sphere) : currentViewCamera(),
        background,
        layers,
        space,
      });
    }
    // The frame's input may have taken 6DoF back to 3DoF (its World content went away); the 3DoF / 6DoF
    // segments show it with this frame.
    syncFloatingViewButtonState();
    // The world Sticker's menu follows it with the view and the playhead, and goes with its gizmo.
    if (editor.worldSelectedId || isCameraSelected() || isWorldMenuShown()) updateSelectionMenu();
    return drawn;
  }

  // The three.js camera that looks through the shot. With World content (Panorama Studio's Camera) it
  // stands at the shot's position and draws the World too, as the node shoots it.
  function shotViewCamera(shot) {
    const { content } = editorViewInput();
    if (!content || !shot.position) return shotCamera(shot);
    return placedCamera(shotCamera(shot), shot.position, frameViewDistance(), content.sphere);
  }

  // Draws what the shot sees into rect (device pixels of the three.js canvas; it may reach past the
  // canvas). Returns the part of the canvas drawn ({ canvas, x, y, width, height }), or null when there is
  // nothing to draw yet.
  // clearColor is what shows where nothing is drawn (as editorView.clear's), transparent without one.
  function drawEditorViewShot(rect, shot, owner, clearColor = null) {
    const { background, layers, content } = editorViewInput();
    if (!background && !layers.length && !content) return null;
    const space = content && shot.position ? content : null;
    return editorView.render({ rect, camera: shotViewCamera(shot), background, layers, space, owner, clearColor });
  }

  // The Unwrap view in rect of the 2D overlay, on the three.js canvas. Returns whether it could draw.
  function renderEditorViewUnwrap(rect) {
    editorView.clear(0x070707);
    return !!editorView.renderUnwrap({ rect: deviceRect(rect), ...editorViewInput() });
  }

  return {
    connect(api) {
      ({
        applySpaceMode, backgroundColor, backgroundCoverage, backgroundShowsAt, buildEditorViewPaintLayers, cameraFrustumLength, cameraShoots, cancelViewTransition,
        currentViewCamera, cutoutCamera, depthColor, deviceRect, file3dEditorFile, followPortSticker, frameViewDistance, getConnectedErpImage,
        getMediaRevisionToken, getStickerImage, hasSpaceContent, isDecodedImageReady, isExternalSticker,
        isFreeSpaceView, isSpaceView, isUploadingSticker, isWorldMenuShown, portVideo, refreshFile3d, sceneFiles,
        selectedWorldSticker, spaceModeState, spaceOrigin, spaceViewState, stickerFiles, stickerImageKey,
        retainDepthColors, syncFloatingViewButtonState, timelineSpanFrames, updateSelectionMenu, upstreamViewInput,
        worldStickerEditable,
      } = api);
    },
    depthVideoNotice, editorViewInput, endEditorViewFrame, editorViewSceneState, isCameraSelected, renderEditorView,
    shotViewCamera, drawEditorViewShot, renderEditorViewUnwrap,
  };
}
