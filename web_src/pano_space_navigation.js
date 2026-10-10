// Moving a view through the World (docs/editor-interaction.md "視点の操作"): 3DoF and 6DoF, the Viewport camera's
// view and its transitions, the 6DoF drags and wheel steps about the surface under the pointer, and the movement
// keys. Studio's editor (editor/space.js) and the Preview's viewer (pano_scene_viewer.js) move their views with it;
// it holds no editor state (no selection, Camera or working state).
//
// view: the object that holds the view, whose fields it reads and writes: spaceMode ("3dof" or "6dof"),
// viewPosition, viewYaw, viewPitch, viewFov, viewDistance, viewMoved, viewTransition.
// origin(): where 3DoF stands. contentSphere(): the sphere around the World content shown (null without content).
// surface: { pickSurface(camera, x, y, width, height), contentRevision() } of the three.js view the view draws on.
// size(): { width, height } of its canvas. startAnimation(start): runs start (which may set a transition) so the
// frames run. invalidate(): what the view shows changed (the World is drawn anew). draw(): draw again.
// onModeShown(): the mode the view shows may have changed. onTransition(): a transition started (a coasting
// look-around stops).
import {
  DEFAULT_DISTANCE,
  frameView,
  navigationTarget,
  orbitView,
  panDepth,
  panView,
  reuseWheelPick,
  spaceCamera,
  spaceModeView,
  switchSpaceMode,
  zoomView,
} from "./pano_space.js";
import { keyMoveView } from "./pano_view_keys.js";
import { spaceModeChoice, startViewTransition, viewTransitionFrame } from "./pano_view_transition.js";

export function createSpaceNavigation({
  view, origin, contentSphere, surface, size, startAnimation = (start) => start(), invalidate = () => {}, draw = () => {},
  onModeShown = () => {}, onTransition = () => {},
}) {
  // The pick of the last wheel step (pano_space.js reuseWheelPick).
  let wheel = null;

  function spaceModeState() {
    return { mode: view.spaceMode, position: view.viewPosition, moved: view.viewMoved };
  }

  function applySpaceMode(space) {
    view.spaceMode = space.mode;
    view.viewPosition = space.position;
    view.viewMoved = space.moved;
  }

  // The size of the World content shown, which scales the navigation steps.
  function spaceScale() {
    return contentSphere()?.radius || DEFAULT_DISTANCE;
  }

  // The view as pano_space.js takes it; until it moves, its pivot is as far as the content is large.
  function spaceViewState() {
    const distance = view.viewMoved ? view.viewDistance : contentSphere()?.radius || DEFAULT_DISTANCE;
    const state = { position: view.viewPosition, yaw_deg: view.viewYaw, pitch_deg: view.viewPitch, hFOV_deg: view.viewFov, distance };
    return spaceModeView(view.spaceMode, state, origin());
  }

  function setSpaceView(next) {
    view.viewPosition = next.position;
    view.viewYaw = next.yaw_deg;
    view.viewPitch = next.pitch_deg;
    view.viewDistance = next.distance;
    view.viewMoved = true;
    invalidate();
    draw();
  }

  // The three.js camera of the view as the last frame drew it, for picking at canvas points.
  function currentSpaceCamera() {
    const { width, height } = size();
    return spaceCamera(spaceViewState(), width, height, contentSphere());
  }

  function applyViewTransitionEnd(end) {
    applySpaceMode(switchSpaceMode({ ...spaceModeState(), moved: end.moved }, end.mode, origin()));
    invalidate();
  }

  // Moves the view to `target` over a short transition (pano_view_transition.js) from the view shown now, where a
  // running transition has got to, which this one replaces. `end` ({ mode, moved }) is applied when it arrives, or
  // at once when the view is there already.
  function transitionView(target, end = null) {
    const from = spaceViewState();
    startAnimation(() => {
      view.viewTransition = startViewTransition(from, target, performance.now(), { scale: spaceScale(), end });
    });
    if (!view.viewTransition && end) applyViewTransitionEnd(end);
    onTransition();
    onModeShown();
    draw();
  }

  // Drops a running transition where it shows; a way back to 3DoF dropped on the way stays in 6DoF.
  function cancelViewTransition() {
    if (!view.viewTransition) return;
    view.viewTransition = null;
    onModeShown();
  }

  // The view of a running transition at time ts, put into the view; returns whether it moved.
  function stepTransition(ts) {
    if (!view.viewTransition) return false;
    const { view: shown, done } = viewTransitionFrame(view.viewTransition, ts);
    view.viewPosition = shown.position;
    view.viewYaw = shown.yaw_deg;
    view.viewPitch = shown.pitch_deg;
    view.viewFov = shown.hFOV_deg;
    view.viewDistance = shown.distance;
    if (done) {
      const { end } = view.viewTransition;
      view.viewTransition = null;
      if (end) applyViewTransitionEnd(end);
      onModeShown();
    }
    return true;
  }

  // Back in 3DoF the view returns to the origin keeping its direction; 6DoF starts from there. The way back moves
  // in 6DoF and enters 3DoF when it arrives; 6DoF chosen on the way stops it where it shows.
  function setSpaceMode(mode) {
    const choice = spaceModeChoice(view.spaceMode, view.viewTransition, mode);
    if (choice === "keep") return;
    if (choice === "return") {
      transitionView({ ...spaceViewState(), position: origin(), distance: contentSphere()?.radius || DEFAULT_DISTANCE }, { mode, moved: false });
      return;
    }
    cancelViewTransition();
    // 6DoF starts where 3DoF stands now (the origin may have moved since 3DoF began).
    applySpaceMode(switchSpaceMode({ ...spaceModeState(), position: spaceViewState().position }, mode, origin()));
    invalidate();
    onModeShown();
    draw();
  }

  // The view keeps its direction and moves until `sphere` fits, over a transition.
  function frameSphereView(sphere) {
    const current = spaceViewState();
    const { width, height } = size();
    // The pivot moves with the view from the one in use now.
    view.viewDistance = current.distance;
    view.viewMoved = true;
    transitionView(frameView(current, sphere, width, height));
  }

  // The World point of the content under canvas point p that an orbit or a wheel step works on, or null (also
  // over a SPLAT's box).
  function pickSpace(p) {
    const { width, height } = size();
    return surface.pickSurface(currentSpaceCamera(), p.x, p.y, width, height);
  }

  // The point a 6DoF orbit or wheel step works on (pano_space.js navigationTarget): the content hit under the
  // pointer, else the content's center until the view moves, else the pivot.
  function spaceTarget(state, hit) {
    return navigationTarget(state, hit, view.viewMoved ? null : contentSphere()?.center, spaceScale());
  }

  function spaceViewKey() {
    return JSON.stringify([view.viewPosition, view.viewYaw, view.viewPitch]);
  }

  // One 6DoF wheel step at canvas point p toward the point under it (direction > 0) or away. A step reuses the
  // pick of an earlier one as reuseWheelPick() allows.
  function zoomSpaceAt(p, direction) {
    const now = performance.now();
    const next = { x: p.x, y: p.y, time: now, key: surface.contentRevision(), view: spaceViewKey() };
    if (!reuseWheelPick(wheel, next)) {
      const hit = pickSpace(p);
      wheel = { ...next, cost: performance.now() - now, hit };
    }
    const state = spaceViewState();
    setSpaceView(zoomView(state, spaceTarget(state, wheel.hit), direction, spaceScale()));
    wheel.view = spaceViewKey();
    wheel.wheelTime = now;
  }

  // The drag a 6DoF orbit ("orbit") or pan starts at canvas point p: an orbit about the point under it, a pan at the
  // pivot's depth.
  function spaceDrag(action, p) {
    const state = spaceViewState();
    return action === "orbit"
      ? { kind: "space_orbit", last: p, pivot: spaceTarget(state, pickSpace(p)) }
      : { kind: "space_pan", last: p, depth: panDepth(state, spaceScale()) };
  }

  // Moves the view by a spaceDrag() to canvas point p.
  function moveSpaceDrag(drag, p) {
    const state = spaceViewState();
    const { width, height } = size();
    setSpaceView(drag.kind === "space_pan"
      ? panView(state, p.x - drag.last.x, p.y - drag.last.y, width, height, drag.depth)
      : orbitView(state, p.x - drag.last.x, p.y - drag.last.y, height, drag.pivot));
    drag.last = p;
  }

  // Moves the 6DoF view by the movement keys' direction (pano_view_keys.js) for `distance`; returns whether it
  // moved. It records nothing.
  function keyMove(direction, distance) {
    const state = spaceViewState();
    const moved = keyMoveView(state, direction, distance);
    if (moved === state) return false;
    view.viewPosition = moved.position;
    view.viewDistance = state.distance;
    view.viewMoved = true;
    return true;
  }

  return {
    spaceModeState, applySpaceMode, spaceScale, spaceViewState, setSpaceView, currentSpaceCamera, applyViewTransitionEnd,
    transitionView, cancelViewTransition, stepTransition, setSpaceMode, frameSphereView, pickSpace, spaceTarget, zoomSpaceAt,
    spaceDrag, moveSpaceDrag, keyMove,
  };
}
