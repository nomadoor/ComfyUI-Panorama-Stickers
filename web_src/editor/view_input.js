// What the three.js views draw: the input of a frame (background and Sky layers), built once per frame from
// the state, and the calls that draw the panorama view, a shot and the Unwrap view with it.
import { shotCamera, shotLensImage, workingSkyLayers } from "../pano_editor_view.js";
import { evaluateSceneState } from "../pano_scene_eval.js";
import { loadSceneState } from "../pano_scene_state.js";

export function createViewInput(deps) {
  const {
    canvas, editor, editorView, imageCache, scheduler, state, stillCanvas, videoEl,
  } = deps;
  // The kind of lens image each owner of a shot view drew last (pano_lens.js lensRenderPlan's `previous`).
  const lensKinds = new Map();
  // Bound by connect() to the other modules and showEditor.
  let backgroundColor, backgroundCoverage, buildEditorViewPaintLayers, currentViewCamera, deviceRect, getConnectedErpImage,
    getMediaRevisionToken, getStickerImage, isDecodedImageReady;

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

  function buildEditorViewInput() {
    const bgImg = getConnectedErpImage();
    const paintLayers = buildEditorViewPaintLayers();
    // A dropped or replaced image shows while it uploads, before its asset exists in the state.
    const assets = { ...state.assets };
    for (const item of state.stickers) {
      const assetId = String(item?.asset_id || "");
      if (assetId && !assets[assetId] && imageCache.has(assetId)) assets[assetId] = { type: "comfy_image", filename: assetId };
    }
    // The state v2 is rebuilt only when the state changes (scheduler.stateRevision). Paint comes from the
    // paint engine's ERP canvases, so the strokes are left out.
    if (editorViewScene.revision !== scheduler.stateRevision) {
      editorViewScene = { revision: scheduler.stateRevision, sceneState: loadSceneState({ ...state, assets, painting: null }) };
    }
    const evaluated = evaluateSceneState(editorViewScene.sceneState, editor.frame);
    // The legacy editor shows its hidden external Sticker faintly (getStickerDisplayAlpha).
    const media = (item) => {
      const img = getStickerImage(item);
      return img ? { media: img, revision: getMediaRevisionToken(img) } : null;
    };
    const layers = workingSkyLayers(editorViewScene.sceneState, editor.frame, state.stickers, { media, paintLayers, evaluated });
    // The background VIDEO and its still are one source, so a seek keeps the frame before.
    const bgSource = bgImg && (bgImg === videoEl || bgImg === stillCanvas) ? videoEl.dataset.panoSrc : bgImg;
    const background = isDecodedImageReady(bgImg)
      ? { media: bgImg, revision: getMediaRevisionToken(bgImg), coverage: backgroundCoverage(), source: bgSource }
      : null;
    return { background, layers };
  }

  // The panorama view on the whole three.js canvas. Returns whether it could draw.
  function renderEditorView() {
    const { background, layers } = editorViewInput();
    const width = canvas.width;
    const height = canvas.height;
    const rect = deviceRect({ x: 0, y: 0, w: width, h: height });
    if (!background && !layers.length) {
      editorView.clear(0x070707);
      return editorView.ready;
    }
    editorView.clear();
    return !!editorView.render({ rect, camera: currentViewCamera(), background, layers, space: null });
  }

  // Draws what the shot sees into rect (device pixels of the three.js canvas; it may reach past the
  // canvas). Returns the part of the canvas drawn ({ canvas, x, y, width, height }), or null when there is
  // nothing to draw yet.
  // clearColor is what shows where nothing is drawn (as editorView.clear's), transparent without one.
  // A lens Camera (ADR 0042) draws through the lens pass (pano_editor_view.js shotLensImage): `lens` places its image
  // in rect's pixels (the Frame view's), else the image fills rect (the camera preview).
  function drawEditorViewShot(rect, shot, owner, clearColor = null, lens = null) {
    const { background, layers } = editorViewInput();
    if (!background && !layers.length) return null;
    const lensImage = shotLensImage(shot, rect.w, rect.h, parseInt(String(backgroundColor() ?? "#000000").replace("#", ""), 16) || 0, lens, lensKinds.get(owner) ?? null);
    lensKinds.set(owner, lensImage?.kind ?? null);
    return editorView.render({ rect, camera: shotCamera(shot), background, layers, space: null, owner, clearColor, ...(lensImage ? { lens: lensImage } : {}) });
  }

  // The Unwrap view in rect of the 2D overlay, on the three.js canvas. Returns whether it could draw.
  function renderEditorViewUnwrap(rect) {
    editorView.clear(0x070707);
    return !!editorView.renderUnwrap({ rect: deviceRect(rect), ...editorViewInput() });
  }

  return {
    connect(api) {
      ({
        backgroundColor, backgroundCoverage, buildEditorViewPaintLayers, currentViewCamera, deviceRect, getConnectedErpImage,
        getMediaRevisionToken, getStickerImage, isDecodedImageReady,
      } = api);
    },
    endEditorViewFrame, renderEditorView, drawEditorViewShot, renderEditorViewUnwrap,
  };
}
