// The panorama view in space (Panorama Studio with World content, and its Camera):
// 3DoF and 6DoF, the Viewport camera's view and its transitions, and navigating it (orbit, pan, zoom, framing).
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { nodeInputOrigins } from "../pano_preview_video.js";
import { clipActive, evaluateCamera, evaluateSceneState } from "../pano_scene_eval.js";
import {
  DEFAULT_DISTANCE,
  facingRotation,
  frameSphere,
  frameView,
  hasWorldContent,
  navigationTarget,
  panDepth,
  reuseWheelPick,
  spaceCamera,
  spaceModeView,
  switchSpaceMode,
  zoomView,
} from "../pano_space.js";
import { VIEW_CONTROLS_SETTING_ID, viewControlsPreset } from "../pano_view_controls.js";
import { spaceModeChoice, startViewTransition } from "../pano_view_transition.js";

export function createSpace(deps) {
  const {
    app, cameraV2, canvas, editor, editorView, node, runtime, sceneV2, state, stateV2, studio, viewController,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let editorViewInput, editorViewSceneState, isCameraSelected, isErpCamera, requestDraw, sceneFiles,
    startAnimation, syncFloatingViewButtonState, updateCursor;

  // The pick of the last 6DoF wheel step and of the last Frame view wheel step (pano_space.js
  // reuseWheelPick).
  let spaceWheel = null;

  // Moves the view to `target` over a short transition (pano_view_transition.js) from the view shown
  // now, where a running transition has got to, which this one replaces. `end` ({ mode, moved }) is
  // applied when it arrives, or at once when the view is there already.
  function transitionView(target, end = null) {
    const from = spaceViewState();
    startAnimation(() => {
      editor.viewTransition = startViewTransition(from, target, performance.now(), { scale: spaceScale(), end });
    });
    if (!editor.viewTransition && end) applyViewTransitionEnd(end);
    viewController.state.inertia.active = false;
    viewController.state.inertia.vx = 0;
    viewController.state.inertia.vy = 0;
    syncFloatingViewButtonState();
    requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW });
  }

  function applyViewTransitionEnd(end) {
    applySpaceMode(switchSpaceMode({ ...spaceModeState(), moved: end.moved }, end.mode, spaceOrigin()));
    runtime.backgroundDirty = true;
  }

  // Drops a running transition where it shows. The 3DoF | 6DoF buttons follow: a way back to 3DoF
  // dropped on the way stays in 6DoF.
  function cancelViewTransition() {
    if (!editor.viewTransition) return;
    editor.viewTransition = null;
    syncFloatingViewButtonState();
  }

  // Turns the view to look at yaw / pitch.
  function turnViewTo(yawDeg, pitchDeg) {
    transitionView({ ...spaceViewState(), yaw_deg: yawDeg, pitch_deg: pitchDeg });
  }

  // The camera preview shows the Cutout's frame, or asks for one; Panorama Studio's shows only a Camera
  // with a frame, and nothing without one (#89).
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
    return stateV2 && hasWorldContent({ sceneLinked: sceneV2 && !!nodeInputOrigins(node).scene, files: sceneFiles(), stickers: state.stickers });
  }

  // The space view in 6DoF, where the Viewport camera moves through the World with the 3D view controls.
  function isFreeSpaceView() {
    return editor.spaceMode === "6dof" && isSpaceView();
  }

  // The preset of the 3D view controls chosen in ComfyUI's settings (pano_view_controls.js).
  function viewControls() {
    return viewControlsPreset(app.ui?.settings?.getSettingValue?.(VIEW_CONTROLS_SETTING_ID));
  }

  function spaceModeState() {
    return { mode: editor.spaceMode, position: editor.viewPosition, moved: editor.viewMoved };
  }

  function applySpaceMode(space) {
    editor.spaceMode = space.mode;
    editor.viewPosition = space.position;
    editor.viewMoved = space.moved;
  }

  // Back in 3DoF the view returns to the origin keeping its direction; 6DoF starts from there. The way
  // back moves in 6DoF and enters 3DoF when it arrives, so its frames are 6DoF frames throughout; 6DoF
  // chosen on the way stops it where it shows.
  function setSpaceMode(mode) {
    const choice = spaceModeChoice(editor.spaceMode, editor.viewTransition, mode);
    if (choice === "keep") return;
    if (choice === "return") {
      transitionView({ ...spaceViewState(), position: spaceOrigin(), distance: contentSphere()?.radius || DEFAULT_DISTANCE }, { mode, moved: false });
      return;
    }
    cancelViewTransition();
    // 6DoF starts where 3DoF stands now (the Camera may have moved since 3DoF began).
    applySpaceMode(switchSpaceMode({ ...spaceModeState(), position: spaceViewState().position }, mode, spaceOrigin()));
    runtime.backgroundDirty = true;
    syncFloatingViewButtonState();
    requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW });
  }

  // The content sphere comes from the frame's input (editorViewInput), which the pointer and wheel
  // handlers between frames read as the last frame built it: that is the content on screen, and
  // rebuilding it per event would evaluate the whole state again for nothing.
  function spaceViewState() {
    const distance = editor.viewMoved ? editor.viewDistance : contentSphere()?.radius || DEFAULT_DISTANCE;
    const view = { position: editor.viewPosition, yaw_deg: editor.viewYaw, pitch_deg: editor.viewPitch, hFOV_deg: editor.viewFov, distance };
    return spaceModeView(editor.spaceMode, view, spaceOrigin());
  }

  // Where 3DoF stands: the World origin, where the ERP without a Camera is taken from, or in Panorama
  // Studio with a Camera the Camera's position at the playhead, so the frame on the panorama is what the
  // Camera sees (#89).
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

  function setSpaceView(view) {
    editor.viewPosition = view.position;
    editor.viewYaw = view.yaw_deg;
    editor.viewPitch = view.pitch_deg;
    editor.viewDistance = view.distance;
    editor.viewMoved = true;
    runtime.backgroundDirty = true;
    requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW });
  }

  // The size of the World content shown, which scales the navigation steps.
  function spaceScale() {
    return contentSphere()?.radius || DEFAULT_DISTANCE;
  }

  // Frame Selected: the view keeps its direction and moves until the selected world Sticker fits,
  // or all the content without one (pano_space.js frameSphere).
  function frameSpaceContent() {
    const space = editorViewInput().space;
    const sceneState = editorViewSceneState();
    const id = editor.worldSelectedId || editor.selectedId;
    const index = sceneState.stickers.findIndex((sticker) => sticker.id === id);
    const selected = index < 0 ? null : {
      sticker: sceneState.stickers[index],
      value: evaluateSceneState(sceneState, editor.frame).stickers[index],
      plane: space.stickers.find((layer) => layer.id === id) ?? null,
      item: space.sticker?.id === id && space.sticker.url ? { kind: space.sticker.kind, box: editorView.sceneBox(space.sticker.url) } : null,
    };
    const sphere = isCameraSelected() ? cameraSphere() : frameSphere(contentSphere(), selected);
    if (!sphere) return;
    const view = spaceViewState();
    // The pivot moves with the view from the one in use now.
    editor.viewDistance = view.distance;
    editor.viewMoved = true;
    transitionView(frameView(view, sphere, canvas.width, canvas.height));
  }

  // The World point of the content under canvas point p in the frame on screen that an orbit or a wheel
  // step works on, or null (also over a SPLAT's box, pano_three_view.js pickSurface).
  function pickSpace(p) {
    return editorView.pickSurface(currentSpaceCamera(), p.x, p.y, canvas.width, canvas.height);
  }

  // The point a 6DoF orbit or wheel step works on (pano_space.js navigationTarget): the content hit under
  // the pointer, else the content's center until the view moves, else the pivot.
  function spaceTarget(view, hit) {
    return navigationTarget(view, hit, editor.viewMoved ? null : contentSphere()?.center, spaceScale());
  }

  function spaceViewKey() {
    return JSON.stringify([editor.viewPosition, editor.viewYaw, editor.viewPitch]);
  }

  // One 6DoF wheel step at canvas point p toward the point under it (direction > 0) or away. A step
  // reuses the pick of an earlier one as reuseWheelPick() allows.
  function zoomSpaceAt(p, direction) {
    const now = performance.now();
    const next = { x: p.x, y: p.y, time: now, key: editorView.contentRevision(), view: spaceViewKey() };
    if (!reuseWheelPick(spaceWheel, next)) {
      const hit = pickSpace(p);
      spaceWheel = { ...next, cost: performance.now() - now, hit };
    }
    const view = spaceViewState();
    setSpaceView(zoomView(view, spaceTarget(view, spaceWheel.hit), direction, spaceScale()));
    spaceWheel.view = spaceViewKey();
    spaceWheel.wheelTime = now;
  }

  // Starts a 6DoF orbit at canvas point p about the point under it, or a pan at the pivot's depth.
  function startSpaceDrag(action, p, pointerId) {
    const view = spaceViewState();
    editor.interaction = action === "orbit"
      ? { kind: "space_orbit", last: p, pivot: spaceTarget(view, pickSpace(p)) }
      : { kind: "space_pan", last: p, depth: panDepth(view, spaceScale()) };
    updateCursor(p);
    canvas.setPointerCapture(pointerId);
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

  // The three.js camera of the space view as the last frame drew it, for picking at canvas points.
  function currentSpaceCamera() {
    return spaceCamera(spaceViewState(), canvas.width, canvas.height, contentSphere());
  }

  return {
    connect(api) {
      ({
        editorViewInput, editorViewSceneState, isCameraSelected, isErpCamera, requestDraw, sceneFiles,
        startAnimation, syncFloatingViewButtonState, updateCursor,
      } = api);
    },
    transitionView, applyViewTransitionEnd, cancelViewTransition, turnViewTo, cameraPreviewShown, isSpaceView,
    hasSpaceContent, isFreeSpaceView, viewControls, spaceModeState, applySpaceMode, setSpaceMode, spaceViewState,
    spaceOrigin, hasCamera, cameraShoots, paintingShown, sceneStickerShown, cutoutCamera, contentSphere,
    setSpaceView, spaceScale, frameSpaceContent, zoomSpaceAt, startSpaceDrag, currentSpaceCamera,
    cameraFrustumLength, cameraSphere, lookingAt,
  };
}
