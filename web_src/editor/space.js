// The panorama view in space (Panorama Studio with World content, and its Camera):
// 3DoF and 6DoF, the Viewport camera's view and its transitions, and navigating it (orbit, pan, zoom, framing).
import { frameViewButton } from "../pano_editor_ui_state.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { editorSession } from "../pano_node_bridge.js";
import { SCENE_INPUT_NAMES, inputLinked } from "../pano_preview_video.js";
import { clipActive, evaluateCamera, evaluateSceneState, evaluateSticker } from "../pano_scene_eval.js";
import { facingRotation, frameSphere, hasWorldContent, sceneContentBox } from "../pano_space.js";
import { createSpaceNavigation } from "../pano_space_navigation.js";
import { isUpstreamSticker } from "../pano_upstream.js";
import { VIEW_CONTROLS_SETTING_ID, viewControlsPreset } from "../pano_view_controls.js";
import { restoredView, viewMemory } from "../pano_view_memory.js";

export function createSpace(deps) {
  const {
    app, cameraV2, canvas, editor, editorView, node, runtime, sceneV2, shotEditor, state, stateV2, studio,
    viewController,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let editorViewInput, editorViewSceneState, getActiveCutoutShot, isCameraSelected, isErpCamera, isFreeFrameView,
    moveFrameByKeys, moveKeys, requestDraw, sceneFiles, startAnimation, stickerById, syncFloatingViewButtonState,
    updateCursor;

  // The Viewport camera's view and how it moves (pano_space_navigation.js), on the editor's view fields.
  const navigation = createSpaceNavigation({
    view: editor,
    origin: () => spaceOrigin(),
    contentSphere: () => contentSphere(),
    surface: editorView,
    size: () => ({ width: canvas.width, height: canvas.height }),
    startAnimation: (start) => startAnimation(start),
    invalidate: () => { runtime.backgroundDirty = true; },
    draw: () => requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW }),
    onModeShown: () => syncFloatingViewButtonState(),
    onTransition: () => {
      viewController.state.inertia.active = false;
      viewController.state.inertia.vx = 0;
      viewController.state.inertia.vy = 0;
    },
  });
  const {
    transitionView, applyViewTransitionEnd, cancelViewTransition, spaceModeState, applySpaceMode, setSpaceMode,
    spaceViewState, setSpaceView, spaceScale, zoomSpaceAt, currentSpaceCamera,
  } = navigation;
  // A 6DoF drag (startSpaceDrag) moving the view, and a transition run by the render loop.
  const moveSpaceView = navigation.moveSpaceDrag;
  const stepViewTransition = navigation.stepTransition;

  // Turns the view to look at yaw / pitch.
  function turnViewTo(yawDeg, pitchDeg) {
    transitionView({ ...spaceViewState(), yaw_deg: yawDeg, pitch_deg: pitchDeg });
  }

  // The camera preview shows the Cutout's frame, or asks for one; Panorama Studio's shows only a Camera
  // with a frame, and nothing without one.
  function cameraPreviewShown() {
    return !studio || (cameraShoots() && !isErpCamera());
  }

  // Panorama Studio's panorama view shows the World when there is World content (a `scene` input or
  // a world Sticker), from the origin in 3DoF and moving through it in 6DoF. Without it the view only
  // looks around.
  function isSpaceView() {
    return editor.mode === "pano" && hasSpaceContent();
  }

  function hasSpaceContent() {
    return stateV2 && hasWorldContent({ sceneLinked: sceneV2 && inputLinked(node, SCENE_INPUT_NAMES), files: sceneFiles(), stickers: state.stickers });
  }

  // The space view in 6DoF, where the Viewport camera moves through the World with the 3D view controls.
  function isFreeSpaceView() {
    return editor.spaceMode === "6dof" && isSpaceView();
  }

  // The preset of the 3D view controls chosen in ComfyUI's settings (pano_view_controls.js).
  function viewControls() {
    return viewControlsPreset(app.ui?.settings?.getSettingValue?.(VIEW_CONTROLS_SETTING_ID));
  }

  // Where 3DoF stands: the World origin, where the ERP without a Camera is taken from, or in Panorama
  // Studio with a Camera the Camera's position at the playhead, so the frame on the panorama is what the
  // Camera sees.
  function spaceOrigin() {
    return cameraShoots() ? cutoutCamera().position : [0, 0, 0];
  }

  // Whether the editor has a Camera: Panorama Studio's, while the user keeps one.
  function hasCamera() {
    return cameraV2 && state.camera !== null;
  }

  // Whether the Camera is shown and shoots. Panorama Studio's hidden Camera stays in the state, on its
  // Timeline row, and is otherwise as none: not drawn, not selected, and the output is the ERP from the
  // World origin, as the node shoots it.
  function cameraShoots() {
    return hasCamera() && state.camera.visible;
  }

  // Whether the painting is shown: a hidden one is neither drawn, selected nor painted on.
  function paintingShown() {
    return state.painting_visible !== false;
  }

  // Whether a Sticker of state v2 shows, and can be selected, at the playhead: it is not hidden and
  // the playhead is in its Clip range.
  function sceneStickerShown(item) {
    return item.visible && clipActive(item.clip, editor.frame);
  }

  // Panorama Studio's Camera at the playhead, by the evaluator the node shoots with.
  function cutoutCamera() {
    return evaluateCamera(state.camera, editor.frame);
  }

  // The sphere around the World content shown in this frame (pano_space.js boundingSphere), or null.
  function contentSphere() {
    const input = editorViewInput();
    return (input.space ?? input.content)?.sphere ?? null;
  }

  // Frame Selected: the view keeps its direction and moves until the selected world Sticker fits (the
  // node's own or an upstream element's), or all the content without one (pano_space.js frameSphere).
  function frameSpaceContent() {
    const space = editorViewInput().space;
    const sceneState = editorViewSceneState();
    const id = editor.worldSelectedId || editor.selectedId;
    const index = sceneState.stickers.findIndex((sticker) => sticker.id === id);
    const upstream = index < 0 ? stickerById(id) : null;
    const request = index < 0
      ? space.upstreamItems.find((entry) => entry.request?.id === id)?.request
      : [space.sticker, ...(space.fileStickers ?? [])].find((item) => item?.id === id);
    const selected = index < 0 && !isUpstreamSticker(upstream) ? null : {
      sticker: upstream ?? sceneState.stickers[index],
      value: upstream ? evaluateSticker(upstream, editor.frame) : evaluateSceneState(sceneState, editor.frame).stickers[index],
      plane: [...space.stickers, ...space.upstreamStickers].find((layer) => layer.id === id) ?? null,
      box: request?.id === id && request.url ? sceneContentBox(request, editorView.sceneBox(request.url)) : null,
    };
    const sphere = isCameraSelected() ? cameraSphere() : frameSphere(contentSphere(), selected);
    if (sphere) navigation.frameSphereView(sphere);
  }

  // Starts a 6DoF orbit at canvas point p about the point under it, or a pan at the pivot's depth.
  function startSpaceDrag(action, p, pointerId) {
    editor.interaction = navigation.spaceDrag(action, p);
    updateCursor(p);
    canvas.setPointerCapture(pointerId);
  }

  // Whether the movement keys move anything here: the 6DoF view, or the Frame view's Camera.
  function canKeyMove() {
    return isFreeSpaceView() || isFreeFrameView();
  }

  // Moves by the movement keys held (pano_view_keys.js, keyboard.js) for the time since the last frame, at
  // the content's size per second: the 6DoF view, which records nothing, or in the Frame view the Camera
  // itself (frame_view.js moveFrameByKeys), as the drags there do. They move nothing in 3DoF, Unwrap or a
  // transition; the clock runs on there, so nothing jumps once it can move again. Returns whether it moved.
  function stepKeyMove(ts) {
    const seconds = moveKeys.elapsed(ts);
    if (!seconds || editor.viewTransition) return false;
    const distance = moveKeys.speed(spaceScale()) * seconds;
    if (isFreeFrameView()) return moveFrameByKeys(moveKeys.direction(), distance);
    if (!isFreeSpaceView()) return false;
    return navigation.keyMove(moveKeys.direction(), distance);
  }

  // The view is kept for the node until the page or the workflow loads again (pano_view_memory.js), and
  // the next opening starts from it.
  function saveView() {
    editorSession(node).view = viewMemory(editor);
  }

  // A remembered view that is no longer valid (a value that is no number, the Frame view without a Camera
  // that has a frame) opens at the default view. 6DoF without World content goes back to 3DoF at the
  // origin on the first frame, as it does whenever the content goes away (view_input.js).
  function restoreView() {
    const frame = shotEditor && !frameViewButton({ hasShot: !!getActiveCutoutShot(), erp: isErpCamera() }).disabled;
    const view = restoredView(editorSession(node).view, { frame });
    if (view) Object.assign(editor, view);
  }

  // --- Panorama Studio's Camera in space. In 6DoF the panorama view draws its frustum at the
  // playhead and its trajectory over the Timeline, and the Camera is selected by its frustum and moved and
  // turned with the gizmo, as a world Sticker is. In 3DoF the view stands at the Camera and shows its frame
  // on the panorama as before.

  // How far ahead the frustum reaches: a fifth of the content's size.
  function cameraFrustumLength(radius) {
    return radius * 0.2;
  }

  // The sphere Frame Selected and Look At Frame fit for the Camera: around its frustum.
  function cameraSphere() {
    return { center: cutoutCamera().position, radius: cameraFrustumLength(spaceScale()) };
  }

  // The view turned to look at the World point `at` from where it stands.
  function lookingAt(view, at) {
    const { yaw_deg, pitch_deg } = facingRotation(view.position, at);
    return { ...view, yaw_deg, pitch_deg };
  }

  return {
    connect(api) {
      ({
        editorViewInput, editorViewSceneState, getActiveCutoutShot, isCameraSelected, isErpCamera, isFreeFrameView,
        moveFrameByKeys, moveKeys, requestDraw, sceneFiles, startAnimation, stickerById, syncFloatingViewButtonState,
        updateCursor,
      } = api);
    },
    transitionView, applyViewTransitionEnd, cancelViewTransition, turnViewTo, cameraPreviewShown, isSpaceView,
    hasSpaceContent, isFreeSpaceView, viewControls, spaceModeState, applySpaceMode, setSpaceMode, spaceViewState,
    spaceOrigin, hasCamera, cameraShoots, paintingShown, sceneStickerShown, cutoutCamera, contentSphere,
    setSpaceView, spaceScale, frameSpaceContent, zoomSpaceAt, startSpaceDrag, canKeyMove, stepKeyMove, saveView,
    restoreView, currentSpaceCamera, cameraFrustumLength, cameraSphere, lookingAt, moveSpaceView, stepViewTransition,
  };
}
