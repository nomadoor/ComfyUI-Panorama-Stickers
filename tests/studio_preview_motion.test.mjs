// docs/space-and-view.md "Preview のウィンドウ": the Preview window's damping (the view shown follows the view the
// operations move), its inertia after a look, orbit or pan drag, the view it opens with and hands back, and its ground.
import assert from "node:assert/strict";
import test from "node:test";

import { PANO_INERTIA_DAMPING, PANO_INERTIA_START_SPEED, PANO_INERTIA_STOP_SPEED } from "../web_src/pano_interaction_controller.js";
import { GROUND_DEFAULT } from "../web_src/pano_scene_state.js";
import { createPreviewMotion, previewGround, previewHandBack, previewOpening, previewOpeningPose } from "../web_src/studio/preview_motion.js";
import { createViewCamera } from "../web_src/studio/view_camera.js";
import { ORBIT_DEG_PER_PIXEL, PREVIEW_DAMPING } from "../web_src/studio/view_scale.js";

const SCREEN = { width: 1000, height: 500, hFOV_deg: 100 };
const WORLD = { ground: -1.6, boxes: [], content: null, camera: null };
const close = (actual, expected, eps = 1e-6) => assert.ok(Math.abs(actual - expected) <= eps, `${actual} != ${expected}`);

function camera(start = { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0 }) {
  const view = createViewCamera({ pose: { ...start, roll_deg: 0, target: start.position } });
  view.setWorld(WORLD);
  view.setScreen(SCREEN);
  view.enter(start);
  return view;
}

test("the view shown follows the moved view by PREVIEW_DAMPING ^ (1000 dt) of the difference each frame", () => {
  const view = camera();
  const motion = createPreviewMotion({ pose: view.pose() });
  view.look(-100, 0);
  const goal = view.pose().yaw_deg;
  assert.equal(motion.pose().yaw_deg, 0);
  motion.step(0.016, view);
  close(motion.pose().yaw_deg, goal * (1 - PREVIEW_DAMPING ** 16), 1e-9);
  assert.equal(motion.animating(), true);
  for (let i = 0; i < 200; i += 1) motion.step(0.016, view);
  close(motion.pose().yaw_deg, goal, 1e-9);
  assert.equal(motion.animating(), false);
});

test("a frame after a pause counts FRAME_FALLBACK_SECONDS, and a frame without time counts it too", () => {
  const view = camera();
  const a = createPreviewMotion({ pose: view.pose() });
  const b = createPreviewMotion({ pose: view.pose() });
  view.look(-100, 0);
  a.step(5, view);
  b.step(0, view);
  close(a.pose().yaw_deg, b.pose().yaw_deg, 1e-12);
  close(a.pose().yaw_deg, view.pose().yaw_deg * (1 - PREVIEW_DAMPING ** (1000 / 60)), 1e-9);
});

test("the yaw follows the short way round", () => {
  const view = camera({ position: [0, 0, 0], yaw_deg: 175, pitch_deg: 0 });
  const motion = createPreviewMotion({ pose: view.pose() });
  view.look(-100, 0); // past 180
  motion.step(0.016, view);
  const shown = motion.pose().yaw_deg;
  assert.ok(shown > 175 || shown < -170, `${shown} went the long way`);
});

test("an eased action keeps its own length: the view shown is the eased view", () => {
  const view = camera();
  const motion = createPreviewMotion({ pose: view.pose() });
  view.reset({ position: [1, 0, 0], yaw_deg: 90, pitch_deg: 0 });
  view.step(0.1);
  motion.step(0.1, view);
  assert.deepEqual(motion.pose().position, view.pose().position);
  close(motion.pose().yaw_deg, view.pose().yaw_deg);
});

// Drags of `count` moves of (dx, dy) px, `ms` apart, ending at `end` ms.
function drag(motion, view, action, { dx, dy = 0, count = 6, ms = 16, end = 100 }) {
  for (let i = 0; i < count; i += 1) {
    const at = end - (count - 1 - i) * ms;
    view[action](dx, dy);
    motion.sample(action, dx, dy, at);
  }
}

test("a look drag let go while moving coasts at the speed of its last moves and slows as the look's inertia", () => {
  const view = camera();
  const motion = createPreviewMotion({ pose: view.pose() });
  drag(motion, view, "look", { dx: -10 });
  assert.equal(motion.release("look", 100), true);
  assert.equal(motion.coasting(), true);
  const before = view.pose().yaw_deg;
  motion.step(0.01, view);
  // 10 px per 16 ms is 625 px/s; 10 ms moves 6.25 px, a yaw of 6.25 / 1000 x 100°.
  close(view.pose().yaw_deg - before, 6.25 / 1000 * 100, 1e-6);
  // The speed falls by exp(-PANO_INERTIA_DAMPING dt) each frame until it is under the stop speed.
  let frames = 0;
  while (motion.coasting() && frames < 10000) {
    motion.step(0.016, view);
    frames += 1;
  }
  const expected = Math.ceil(Math.log((PANO_INERTIA_STOP_SPEED / ORBIT_DEG_PER_PIXEL) / (625 * Math.exp(-PANO_INERTIA_DAMPING * 0.01))) / (-PANO_INERTIA_DAMPING * 0.016));
  assert.ok(Math.abs(frames - expected) <= 1, `${frames} frames, ${expected} expected`);
});

test("a drag stopped before it is let go does not coast, nor one slower than the start speed", () => {
  const view = camera();
  const still = createPreviewMotion({ pose: view.pose() });
  drag(still, view, "look", { dx: -10, end: 100 });
  assert.equal(still.release("look", 300), false);
  const slow = createPreviewMotion({ pose: view.pose() });
  // Just under the start speed, in px/s times ORBIT_DEG_PER_PIXEL.
  const px = (PANO_INERTIA_START_SPEED / ORBIT_DEG_PER_PIXEL) * 0.016 * 0.9;
  drag(slow, view, "look", { dx: -px });
  assert.equal(slow.release("look", 100), false);
});

test("an orbit and a pan coast too; the joystick does not", () => {
  const view = camera();
  const orbit = createPreviewMotion({ pose: view.pose() });
  view.beginOrbit(null);
  drag(orbit, view, "orbit", { dx: 8, dy: 4 });
  assert.equal(orbit.release("orbit", 100), true);
  const before = view.pose();
  orbit.step(0.016, view);
  assert.notDeepEqual(view.pose().position, before.position);
  view.endGesture();

  const pan = createPreviewMotion({ pose: view.pose() });
  view.beginPan(null);
  drag(pan, view, "pan", { dx: 8 });
  assert.equal(pan.release("pan", 100), true);
  const x = view.pose().position[0];
  pan.step(0.016, view);
  assert.ok(view.pose().position[0] < x, "the pan coasts on to the left (the drag went right)");

  const joystick = createPreviewMotion({ pose: view.pose() });
  joystick.sample("joystick", 0, 10, 90);
  joystick.sample("joystick", 0, 10, 100);
  assert.equal(joystick.release("joystick", 100), false);
});

test("a press stops the coast where it is; the coast says when it ended", () => {
  const view = camera();
  const motion = createPreviewMotion({ pose: view.pose() });
  drag(motion, view, "look", { dx: -10 });
  motion.release("look", 100);
  assert.equal(motion.stop(), true);
  assert.equal(motion.coasting(), false);
  const yaw = view.pose().yaw_deg;
  motion.step(0.016, view);
  assert.equal(view.pose().yaw_deg, yaw);
  assert.equal(motion.stop(), false);

  drag(motion, view, "look", { dx: -10, end: 200 });
  motion.release("look", 200);
  let ended = false;
  for (let i = 0; i < 1000 && !ended; i += 1) ended = motion.step(0.016, view).ended;
  assert.equal(ended, true);
  assert.equal(motion.coasting(), false);
});

test("a coasting pan stops at the world bound with the bound's notice", () => {
  const view = camera({ position: [46, 0, 0], yaw_deg: 0, pitch_deg: 0 });
  const motion = createPreviewMotion({ pose: view.pose() });
  view.beginPan(null);
  drag(motion, view, "pan", { dx: -40 });
  motion.release("pan", 100);
  let notice = null;
  for (let i = 0; i < 1000 && motion.coasting(); i += 1) notice = motion.step(0.016, view).result?.notice ?? notice;
  assert.equal(notice, "bound");
  assert.ok(Math.hypot(...view.pose().position) <= 48 + 1e-6);
});

test("the opening pose: the node's P, yaw and pitch (a Scene), the node's yaw and pitch from the origin (an IMAGE or a VIDEO), else the origin", () => {
  assert.deepEqual(previewOpeningPose({ scene: { viewPosition: [1, 2, 3], viewYaw: 30, viewPitch: -10 } }), { position: [1, 2, 3], yaw_deg: 30, pitch_deg: -10 });
  assert.deepEqual(previewOpeningPose({ image: { yaw: 45, pitch: 5, fov: 70 } }), { position: [0, 0, 0], yaw_deg: 45, pitch_deg: 5 });
  assert.deepEqual(previewOpeningPose({}), { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0 });
  assert.deepEqual(previewOpeningPose({ scene: { viewPosition: [NaN, 0, 0], viewYaw: "x", viewPitch: 0 } }), { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0 });
});

test("the hand-back: a Scene's record takes P, yaw and pitch; an IMAGE or VIDEO view takes yaw and pitch and keeps its FOV", () => {
  const pose = { position: [1, 0, -2], yaw_deg: 20, pitch_deg: 12, roll_deg: 0, target: [0, 0, 0] };
  const sceneView = { spaceMode: "6dof", viewPosition: [0, 0, 0], viewYaw: 0, viewPitch: 0, viewFov: 100, viewDistance: 8, viewMoved: false, viewTransition: { x: 1 } };
  previewHandBack(pose, { scene: sceneView });
  assert.deepEqual(sceneView.viewPosition, [1, 0, -2]);
  assert.equal(sceneView.viewYaw, 20);
  assert.equal(sceneView.viewPitch, 12);
  assert.equal(sceneView.viewTransition, null);
  assert.equal(sceneView.viewMoved, true);
  const image = { view: { yaw: 0, pitch: 0, fov: 70 } };
  previewHandBack(pose, { image });
  assert.deepEqual(image.view, { yaw: 20, pitch: 12, fov: 70 });
});

test("the ground: a Scene's most downstream layer with a ground, else GROUND_DEFAULT; an IMAGE or VIDEO stands on GROUND_DEFAULT", () => {
  assert.equal(previewGround(null), GROUND_DEFAULT);
  assert.equal(previewGround([]), GROUND_DEFAULT);
  assert.equal(previewGround([{ state: { version: 2, ground: -1 } }, { state: { version: 2 } }]), -1);
  assert.equal(previewGround([{ state: { version: 2, ground: -1 } }, { state: { version: 2, ground: -0.5 } }]), -0.5);
  assert.equal(previewGround([{ state: { version: 2, ground: "low" } }]), GROUND_DEFAULT);
});

test("the opening keeps the node's pitch (within PITCH_LIMIT) and finds the first T there", () => {
  const { pose } = previewOpening({ image: { yaw: 10, pitch: -30, fov: 100 } }, WORLD);
  assert.equal(pose.pitch_deg, -30);
  assert.equal(pose.yaw_deg, 10);
  // Looking 30° down from 1.6 above the ground meets it 3.2 ahead.
  close(Math.hypot(...pose.target), 3.2, 1e-9);
  assert.equal(previewOpening({ image: { yaw: 0, pitch: 95, fov: 100 } }, WORLD).pose.pitch_deg, 89.9);
});
