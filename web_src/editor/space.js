// The old editor's view (the legacy nodes): the Viewport camera's view and its transitions (Reset View, turning to
// the Frame's Camera), whether the painting shows, and the view kept for the node when the editor closes.
import { frameViewButton } from "../pano_editor_ui_state.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { editorSession } from "../pano_node_bridge.js";
import { createSpaceNavigation } from "../pano_space_navigation.js";
import { restoredView, viewMemory } from "../pano_view_memory.js";

export function createSpace(deps) {
  const {
    canvas, editor, editorView, node, runtime, shotEditor, state, viewController,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let getActiveCutoutShot, requestDraw, startAnimation, syncFloatingViewButtonState;

  // The Viewport camera's view and how it moves (pano_space_navigation.js), on the editor's view fields. The old
  // editor has no World content: the view stands at the World origin and looks around.
  const navigation = createSpaceNavigation({
    view: editor,
    origin: () => [0, 0, 0],
    contentSphere: () => null,
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
  const { transitionView, cancelViewTransition, spaceViewState } = navigation;
  // A transition run by the render loop.
  const stepViewTransition = navigation.stepTransition;

  // Turns the view to look at yaw / pitch.
  function turnViewTo(yawDeg, pitchDeg) {
    transitionView({ ...spaceViewState(), yaw_deg: yawDeg, pitch_deg: pitchDeg });
  }

  // Whether the painting is shown: a hidden one is neither drawn, selected nor painted on.
  function paintingShown() {
    return state.painting_visible !== false;
  }

  // The view is kept for the node until the page or the workflow loads again (pano_view_memory.js), and
  // the next opening starts from it.
  function saveView() {
    editorSession(node).view = viewMemory(editor);
  }

  // A remembered view that is no longer valid (a value that is no number, the Frame view without a Camera
  // that has a frame) opens at the default view.
  function restoreView() {
    const frame = shotEditor && !frameViewButton({ hasShot: !!getActiveCutoutShot() }).disabled;
    const view = restoredView(editorSession(node).view, { frame });
    if (view) Object.assign(editor, view);
  }

  return {
    connect(api) {
      ({ getActiveCutoutShot, requestDraw, startAnimation, syncFloatingViewButtonState } = api);
    },
    transitionView, cancelViewTransition, turnViewTo, paintingShown, saveView, restoreView,
    stepViewTransition,
  };
}
