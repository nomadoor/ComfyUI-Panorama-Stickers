// docs/space-and-view.md "視点は一つ", "世界の境界", "注視点 `T`", "直接の操作", "なめらかに動く操作", "Frame 表示": the
// viewpoint (P, yaw, pitch, T) and how every operation moves it. GPU picks come in as arguments.
import assert from "node:assert/strict";
import test from "node:test";

import { fitDistance, viewAxes, viewFitFov } from "../web_src/pano_space.js";
import { KEY_MOVE_FAST } from "../web_src/pano_view_keys.js";
import {
  VIEW_NOTICES,
  clipToBound,
  createNotice,
  createViewCamera,
  easeOut,
  frameSelectedSphere,
  initialTarget,
  openingView,
  orbitCenter,
  recallView,
  rememberView,
} from "../web_src/studio/view_camera.js";

const SCREEN = { width: 1000, height: 500, hFOV_deg: 100 };
// The default ground: E = 1.6, the bound 48, d within [0.008, 48], the first T 8 ahead without a hit.
const WORLD = { ground: -1.6, boxes: [], content: null, camera: [0, 0, 0] };

const sub = (a, b) => a.map((v, i) => v - b[i]);
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const len = (a) => Math.hypot(...a);
const close = (actual, expected, eps = 1e-6) => assert.ok(Math.abs(actual - expected) <= eps, `${actual} != ${expected}`);
const closeVec = (actual, expected, eps = 1e-6) => actual.forEach((v, i) => close(v, expected[i], eps));

function pose(overrides = {}) {
  const base = { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, ...overrides };
  const forward = viewAxes(base.yaw_deg, base.pitch_deg).forward;
  return { target: base.position.map((v, i) => v + forward[i] * 8), ...base, ...overrides };
}

function camera(start = pose(), { frame = false, world = WORLD, screen = SCREEN } = {}) {
  const view = createViewCamera({ pose: start, frame });
  view.setWorld(world);
  view.setScreen(screen);
  return view;
}

// The pixel (x, y) where the World point p shows in a pinhole view of `screen` (the spec's pan formula).
function screenPoint(p, view, screen = SCREEN) {
  const { right, up, forward } = viewAxes(view.yaw_deg, view.pitch_deg, view.roll_deg ?? 0);
  const offset = sub(p, view.position);
  const z = dot(offset, forward);
  const tanX = Math.tan(screen.hFOV_deg * Math.PI / 360);
  const tanY = tanX * screen.height / screen.width;
  return { x: screen.width / 2 * (1 + dot(offset, right) / (z * tanX)), y: screen.height / 2 * (1 - dot(offset, up) / (z * tanY)), z };
}

function onCenterLine(p, d) {
  const forward = viewAxes(p.yaw_deg, p.pitch_deg).forward;
  closeVec(p.target, p.position.map((v, i) => v + forward[i] * d));
}

// --- The first T.

test("the first T is where the screen center's line hits the ground", () => {
  const T = initialTarget(pose({ pitch_deg: -45 }), WORLD);
  closeVec(T, [0, -1.6, -1.6]);
});

test("the first T is TARGET_DEFAULT_DISTANCE ahead when the line hits nothing", () => {
  closeVec(initialTarget(pose(), WORLD), [0, 0, -8]);
  closeVec(initialTarget(pose({ pitch_deg: 30 }), WORLD), [0, 4, -8 * Math.cos(Math.PI / 6)]);
});

test("the first T takes the nearest of the ground and the 3D boxes", () => {
  const boxes = [{ box: { min: [-1, -1.6, -4], max: [1, 1, -3] } }];
  closeVec(initialTarget(pose({ pitch_deg: -10 }), { ...WORLD, boxes }), viewAxes(0, -10).forward.map((v) => v * (3 / Math.cos(10 * Math.PI / 180))));
});

test("the first T enters a turned and scaled box by its transform", () => {
  // A box turned 90 degrees about the vertical, scaled 2, at (0, 0, -11): its local x spans World z from -13 to -9.
  const boxes = [{ box: { min: [-1, -1, -0.5], max: [1, 1, 0.5] }, transform: { position: [0, 0, -11], yaw_deg: 90, pitch_deg: 0, roll_deg: 0, scale: 2 } }];
  closeVec(initialTarget(pose(), { ...WORLD, boxes }), [0, 0, -9]);
});

test("the first T counts only hits inside the world bound", () => {
  // Looking down 1 degree: the ground is 91.7 away, past the bound of 48.
  closeVec(initialTarget(pose({ pitch_deg: -1 }), WORLD), viewAxes(0, -1).forward.map((v) => v * 8));
});

test("the first T counts the ground only up to TARGET_DEFAULT_DISTANCE", () => {
  // Looking down 3 degrees: the ground is 30.5 away, inside the bound but past the default distance of 8.
  closeVec(initialTarget(pose({ pitch_deg: -3 }), WORLD), viewAxes(0, -3).forward.map((v) => v * 8));
  // Looking down 15 degrees: the ground is 6.2 away, nearer than 8, and T is on it.
  const T = initialTarget(pose({ pitch_deg: -15 }), WORLD);
  close(T[1], -1.6);
  // A 3D box past the default distance still counts.
  const boxes = [{ box: { min: [-1, -1.6, -21], max: [1, 1, -20] } }];
  closeVec(initialTarget(pose({ pitch_deg: -3 }), { ...WORLD, boxes }), viewAxes(0, -3).forward.map((v) => v * (20 / Math.cos(3 * Math.PI / 180))));
});

test("the first T is kept within the distance range", () => {
  const boxes = [{ box: { min: [-1, -1, -1.001], max: [1, 1, 1] } }];
  // A box 2 mm ahead puts T at TARGET_MIN_DISTANCE.
  const near = initialTarget(pose({ position: [0, 0, 1.002] }), { ...WORLD, boxes });
  close(len(sub(near, [0, 0, 1.002])), 0.008);
});

// --- Looking around.

test("looking around turns yaw by dx / width x H FOV and pitch by dy / height x V FOV, P stays, T follows at d", () => {
  const view = camera();
  view.look(100, 50);
  const shown = view.pose();
  closeVec(shown.position, [0, 0, 0]);
  close(shown.yaw_deg, -10);
  const vFov = 2 * Math.atan(Math.tan(50 * Math.PI / 180) * 0.5) * 180 / Math.PI;
  close(shown.pitch_deg, vFov / 10);
  onCenterLine(shown, 8);
});

test("looking around stops at PITCH_LIMIT", () => {
  const view = camera();
  view.look(0, 100000);
  close(view.pose().pitch_deg, 89.9);
  view.look(0, -1000000);
  close(view.pose().pitch_deg, -89.9);
});

// --- Orbit.

test("an orbit turns about T at ORBIT_DEG_PER_PIXEL, T stays in the World", () => {
  const view = camera();
  view.beginOrbit(null);
  view.orbit(100, -50);
  const shown = view.pose();
  close(shown.yaw_deg, 30);
  close(shown.pitch_deg, 15);
  closeVec(shown.target, [0, 0, -8]);
  close(len(sub(shown.position, shown.target)), 8);
  // T stays on the screen too (here at its center).
  const at = screenPoint(shown.target, shown);
  close(at.x, 500);
  close(at.y, 250);
});

test("an orbit is not stopped by the world bound", () => {
  const view = camera(pose({ position: [0, 0, 44], target: [0, 0, 0] }));
  view.beginOrbit(null);
  const result = view.orbit(0, -300);
  assert.equal(result.notice, null);
  close(len(sub(view.pose().position, [0, 0, 0])), 44);
});

test("an orbit started with a center makes it T without turning the view", () => {
  const start = pose();
  const view = camera(start);
  view.beginOrbit([3, 0, -6]);
  const shown = view.pose();
  closeVec(shown.target, [3, 0, -6]);
  closeVec(shown.position, start.position);
  close(shown.yaw_deg, 0);
  view.orbit(50, 0);
  closeVec(view.pose().target, [3, 0, -6]);
  close(len(sub(view.pose().position, [3, 0, -6])), len([3, 0, -6]));
});

test("the orbit center is the selected object's sphere center when it shows, the Camera's position in the 3D tab", () => {
  assert.deepEqual(orbitCenter({ selection: { kind: "object", sphere: { center: [1, 2, 3], radius: 1 } } }), [1, 2, 3]);
  assert.equal(orbitCenter({ selection: { kind: "object", sphere: null } }), null);
  assert.equal(orbitCenter({ selection: null }), null);
  assert.deepEqual(orbitCenter({ selection: { kind: "camera", position: [4, 0, 1] } }), [4, 0, 1]);
  // In the Camera tab the Camera itself does not count.
  assert.equal(orbitCenter({ selection: { kind: "camera", position: [4, 0, 1] }, frame: true }), null);
  assert.deepEqual(orbitCenter({ selection: { kind: "object", sphere: { center: [1, 2, 3], radius: 1 } }, frame: true }), [1, 2, 3]);
});

test("a center closer than TARGET_MIN_DISTANCE goes to that distance on the line from P", () => {
  const view = camera();
  view.beginOrbit([0, 0, -0.001]);
  closeVec(view.pose().target, [0, 0, -0.008]);
});

// --- T follows the screen center.

test("after an orbit about an off-center T, the next look puts T back on the center line at d", () => {
  const view = camera();
  view.beginOrbit([3, 0, -6]);
  view.look(0, 0);
  onCenterLine(view.pose(), len([3, 0, -6]));
});

// --- Pan.

test("a pan keeps the grabbed point under the pointer", () => {
  const view = camera(pose({ pitch_deg: -20 }));
  const grabbed = [2, -1.6, -5];
  const before = screenPoint(grabbed, view.pose());
  view.beginPan(grabbed);
  view.pan(37, -12);
  const after = screenPoint(grabbed, view.pose());
  close(after.x, before.x + 37);
  close(after.y, before.y - 12);
  close(after.z, before.z);
});

test("a pan over nothing moves at T's depth, and T follows at d", () => {
  const view = camera();
  view.beginPan(null);
  view.pan(100, 0);
  const shown = view.pose();
  // One pixel is 2 x 8 x tan(50 deg) / 1000 at depth 8.
  close(shown.position[0], -100 * 2 * 8 * Math.tan(50 * Math.PI / 180) / 1000);
  onCenterLine(shown, 8);
});

test("a grab behind the view uses T's depth, a far grab is capped at TARGET_MAX_DISTANCE", () => {
  const behind = camera();
  behind.beginPan([0, 0, 5]);
  behind.pan(10, 0);
  close(behind.pose().position[0], -10 * 2 * 8 * Math.tan(50 * Math.PI / 180) / 1000);
  const far = camera();
  far.beginPan([0, 0, -400]);
  far.pan(10, 0);
  close(far.pose().position[0], -10 * 2 * 48 * Math.tan(50 * Math.PI / 180) / 1000);
});

test("a pan stops where it reaches the world bound and says so", () => {
  const view = camera(pose({ position: [-47, 0, 0] }));
  view.beginPan(null);
  const result = view.pan(1000, 0);
  assert.equal(result.notice, "bound");
  close(len(view.pose().position), 48);
  onCenterLine(view.pose(), 8);
});

// --- The world bound.

test("a move that leaves the bound stops where it crosses it", () => {
  const result = clipToBound([0, 0, 0], [0, 0, -100], 48);
  assert.equal(result.stopped, true);
  closeVec(result.position, [0, 0, -48]);
  assert.deepEqual(clipToBound([0, 0, 0], [0, 0, -10], 48), { position: [0, 0, -10], stopped: false });
});

test("outside the bound only moves that come nearer pass", () => {
  const nearer = clipToBound([0, 0, -60], [0, 0, -59], 48);
  assert.deepEqual(nearer, { position: [0, 0, -59], stopped: false });
  const farther = clipToBound([0, 0, -60], [1, 0, -60], 48);
  assert.deepEqual(farther, { position: [0, 0, -60], stopped: true });
});

// --- Joystick and keys.

test("the joystick moves d per second per JOYSTICK_PIXELS of offset along forward, and d stays", () => {
  const view = camera(pose({ pitch_deg: -30 }));
  view.beginJoystick();
  view.joystick(50, 1);
  const shown = view.pose();
  closeVec(shown.position, viewAxes(0, -30).forward.map((v) => v * 4));
  onCenterLine(shown, 8);
  view.joystick(-100, 0.5);
  closeVec(view.pose().position, [0, 0, 0]);
});

test("WASD moves d per second, KEY_MOVE_FAST times that with Shift, P and T together", () => {
  const view = camera(pose({ pitch_deg: -30 }));
  view.beginKeys();
  view.keys({ forward: 1, right: 0, up: 0 }, 0.5, false);
  closeVec(view.pose().position, [0, 0, -4]);
  onCenterLine(view.pose(), 8);
  view.keys({ forward: 0, right: 0, up: 1 }, 0.25, true);
  closeVec(view.pose().position, [0, 8 * 0.25 * KEY_MOVE_FAST, -4]);
});

test("the joystick and the keys stop at the world bound", () => {
  const view = camera(pose({ position: [0, 0, -45] }));
  view.beginKeys();
  assert.equal(view.keys({ forward: 1, right: 0, up: 0 }, 1, false).notice, "bound");
  closeVec(view.pose().position, [0, 0, -48]);
  view.beginJoystick();
  assert.equal(view.joystick(100, 1).notice, "bound");
});

// --- Eased actions.

test("eased actions go ease-out 1 - (1 - t)^3", () => {
  close(easeOut(0), 0);
  close(easeOut(0.5), 0.875);
  close(easeOut(1), 1);
  close(easeOut(2), 1);
});

test("a wheel step scales P and T about the hit G, which stays under the pointer", () => {
  const start = pose({ pitch_deg: -20 });
  const view = camera(start);
  const G = [1, -1.6, -5];
  const before = screenPoint(G, start);
  const result = view.wheel(1, G);
  assert.equal(result.notice, null);
  view.step(0.4);
  const shown = view.pose();
  const k = 1 / 1.2;
  closeVec(shown.position, G.map((g, i) => g + k * (start.position[i] - g)));
  closeVec(shown.target, G.map((g, i) => g + k * (start.target[i] - g)));
  const after = screenPoint(G, shown);
  close(after.x, before.x);
  close(after.y, before.y);
});

test("a wheel step over nothing zooms about T: T stays, d is divided or multiplied by WHEEL_FACTOR", () => {
  const view = camera();
  view.wheel(1, null);
  view.step(1);
  closeVec(view.pose().target, [0, 0, -8]);
  close(len(sub(view.pose().position, view.pose().target)), 8 / 1.2);
  view.wheel(-1, null);
  view.step(1);
  close(len(sub(view.pose().position, view.pose().target)), 8);
});

test("a wheel hit farther than TARGET_MAX_DISTANCE or outside the bound counts as none", () => {
  // Inside the bound but 49 from the view.
  const far = camera(pose({ position: [0, 0, 20], target: [0, 0, 12] }));
  far.wheel(1, [0, 0, -29]);
  far.step(1);
  closeVec(far.pose().target, [0, 0, 12]);
  // Within reach of the view but outside the bound.
  const view = camera(pose({ position: [0, 0, -40], target: [0, 0, -48] }));
  view.wheel(1, [0, 0, -60]);
  view.step(1);
  closeVec(view.pose().target, [0, 0, -48]);
});

test("a wheel step keeps d within the range, and says so when it cannot move", () => {
  const near = camera(pose({ target: [0, 0, -0.009] }));
  near.wheel(1, null);
  near.step(1);
  close(len(near.pose().target), 0.009);
  close(len(sub(near.pose().position, near.pose().target)), 0.008);
  const result = near.wheel(1, null);
  assert.equal(result.notice, "bound");
  assert.equal(near.animating(), false);
  const far = camera(pose({ position: [0, 0, 20], target: [0, 0, -28] }));
  assert.equal(far.wheel(-1, null).notice, "bound");
});

test("a wheel step stopped by the bound moves T by the same share", () => {
  const view = camera(pose({ position: [0, 0, 47], target: [0, 0, 37] }));
  // Out about G = (0, 0, 30): P would go to 30 + 1.2 x 17 = 50.4 and T to 30 + 1.2 x 7 = 38.4.
  const result = view.wheel(-1, [0, 0, 30]);
  assert.equal(result.notice, "bound");
  view.step(1);
  const shown = view.pose();
  closeVec(shown.position, [0, 0, 48]);
  const share = (48 - 47) / (50.4 - 47);
  closeVec(shown.target, [0, 0, 37 + (38.4 - 37) * share]);
});

test("a wheel step during an eased move scales from the view shown, so the point under the pointer stays there", () => {
  const view = camera();
  view.wheel(1, null);
  view.step(0.1);
  assert.equal(view.animating(), true);
  // G is picked on the view shown mid-move, off the center line.
  const shown = view.pose();
  const G = [1, 0.5, -6];
  const before = sub(G, shown.position);
  view.wheel(1, G);
  view.step(1);
  const after = view.pose();
  // The view turned nowhere and G is in the same direction from P: it stays under the pointer.
  close(after.yaw_deg, shown.yaw_deg);
  close(after.pitch_deg, shown.pitch_deg);
  closeVec(sub(G, after.position).map((v) => v / len(sub(G, after.position))), before.map((v) => v / len(before)));
  // P and T scaled about G from where they showed, by one step.
  closeVec(after.position, G.map((g, i) => g + (shown.position[i] - g) / 1.2));
  close(len(sub(after.position, after.target)), len(sub(shown.position, shown.target)) / 1.2);
});

test("a wheel step that cannot move leaves an eased move under way going", () => {
  // T at the farthest distance: a step out has nowhere to go.
  const view = camera(pose({ target: [0, 0, -48] }));
  view.focus([0, 0, -48]);
  view.step(0.05);
  assert.equal(view.animating(), true);
  assert.deepEqual(view.wheel(-1, null), { moved: false, notice: "bound" });
  assert.equal(view.animating(), true);
});

test("a wheel step eases over WHEEL_EASE_SECONDS", () => {
  const view = camera();
  view.wheel(1, null);
  view.step(0.2);
  close(view.pose().position[2], -(8 - 8 / 1.2) * easeOut(0.5));
  assert.equal(view.animating(), true);
  view.step(0.2);
  assert.equal(view.animating(), false);
});

test("a direct operation during an eased move stops it where it shows", () => {
  const view = camera();
  view.wheel(1, null);
  view.step(0.2);
  const shown = view.pose();
  view.look(0, 0);
  assert.equal(view.animating(), false);
  closeVec(view.pose().position, shown.position);
});

test("a double click makes the hit T and turns to it over ACTION_EASE_SECONDS, P stays", () => {
  const view = camera();
  const result = view.focus([4, -1.6, -4]);
  assert.equal(result.notice, null);
  view.step(0.2);
  assert.equal(view.animating(), true);
  view.step(0.2);
  const shown = view.pose();
  closeVec(shown.position, [0, 0, 0]);
  closeVec(shown.target, [4, -1.6, -4]);
  close(shown.yaw_deg, 45);
  const at = screenPoint(shown.target, shown);
  close(at.x, 500);
  close(at.y, 250);
});

test("a double click on nothing moves nothing and says so", () => {
  const view = camera();
  assert.equal(view.focus(null).notice, "nothing-to-focus");
  assert.equal(view.animating(), false);
  assert.equal(VIEW_NOTICES["nothing-to-focus"], "Nothing to focus on");
  assert.equal(VIEW_NOTICES["nothing-to-frame"], "Nothing to frame");
  assert.equal(VIEW_NOTICES.bound, "The view can't go farther");
});

test("Frame Selected keeps the direction, fits the sphere and makes its center T", () => {
  const start = pose({ yaw_deg: 30, pitch_deg: -10 });
  const view = camera(start);
  const sphere = { center: [2, 0, -6], radius: 1 };
  view.frameSelected(sphere);
  view.step(0.4);
  const shown = view.pose();
  const distance = fitDistance(1, viewFitFov({ hFOV_deg: 100 }, 1000, 500));
  const forward = viewAxes(30, -10).forward;
  closeVec(shown.position, sphere.center.map((c, i) => c - forward[i] * distance));
  closeVec(shown.target, sphere.center);
  close(shown.yaw_deg, 30);
  close(shown.pitch_deg, -10);
});

test("Frame Selected without a sphere moves nothing and says so", () => {
  const view = camera();
  assert.equal(view.frameSelected(null).notice, "nothing-to-frame");
  assert.equal(view.animating(), false);
});

test("the sphere Frame Selected fits", () => {
  const content = { center: [0, 0, -5], radius: 2 };
  assert.deepEqual(frameSelectedSphere({ selection: { kind: "camera", position: [1, 0, 0] }, content, ground: -1.6 }), { center: [1, 0, 0], radius: 1.6 });
  assert.deepEqual(frameSelectedSphere({ selection: { kind: "object", sphere: { center: [3, 0, 0], radius: 1 } }, content, ground: -1.6 }), { center: [3, 0, 0], radius: 1 });
  assert.equal(frameSelectedSphere({ selection: null, content, ground: -1.6 }), content);
  assert.equal(frameSelectedSphere({ selection: null, content: null, ground: -1.6 }), null);
});

test("an eased destination is not cut by the bound, and the bound grows to hold it", () => {
  const view = camera();
  view.frameSelected({ center: [0, 0, -70], radius: 1 });
  view.step(1);
  assert.ok(len(view.pose().position) > 48);
  close(view.bound(), len(view.pose().position) + 3.2);
  // A pan from there moves freely within the grown bound.
  view.beginPan(null);
  assert.equal(view.pan(1, 0).notice, null);
});

test("Reset View eases to the opening's output view with the first T found there", () => {
  const view = camera(pose({ position: [5, 1, 5], yaw_deg: 120, pitch_deg: 30 }));
  view.reset(openingView({ output: { position: [0, 0, 0], yaw_deg: 10 }, world: WORLD }).pose);
  view.step(0.4);
  const shown = view.pose();
  closeVec(shown.position, [0, 0, 0]);
  close(shown.yaw_deg, 10);
  close(shown.pitch_deg, 0);
  onCenterLine(shown, 8);
});

test("yaw eases the shortest way round", () => {
  const view = camera(pose({ yaw_deg: 170 }));
  view.reset(pose({ yaw_deg: -170 }));
  view.step(0.2);
  const yaw = view.pose().yaw_deg;
  assert.ok(Math.abs(yaw) > 170, `${yaw}`);
});

// --- Opening and the view memory.

test("without a memory the view opens at the output: the Camera's position and yaw, pitch 0, the first T", () => {
  const opened = openingView({ memory: null, output: { position: [1, 0, 2], yaw_deg: 45 }, world: WORLD });
  assert.equal(opened.tab, "panorama");
  closeVec(opened.pose.position, [1, 0, 2]);
  assert.equal(opened.pose.yaw_deg, 45);
  assert.equal(opened.pose.pitch_deg, 0);
  onCenterLine(opened.pose, 8);
});

test("the memory keeps the tab, P, yaw, pitch and d, and opens with T d ahead", () => {
  const view = camera(pose({ position: [1, 2, 3], yaw_deg: 20, pitch_deg: -5, target: [1, 2, 3 - 4] }));
  const memory = rememberView(view.destination(), "frame");
  const recalled = recallView(memory, { frameAvailable: true, ground: -1.6 });
  assert.equal(recalled.tab, "frame");
  closeVec(recalled.pose.position, [1, 2, 3]);
  close(recalled.pose.yaw_deg, 20);
  close(recalled.pose.pitch_deg, -5);
  onCenterLine(recalled.pose, 4);
  // A Frame view that cannot open, or a value that is no number, opens all at the output.
  assert.equal(recallView(memory, { frameAvailable: false, ground: -1.6 }), null);
  assert.equal(recallView({ ...memory, yaw_deg: Number.NaN }, { frameAvailable: true, ground: -1.6 }), null);
  const opened = openingView({ memory: { ...memory, yaw_deg: "x" }, output: { position: [0, 0, 0], yaw_deg: 0 }, world: WORLD, frameAvailable: true });
  assert.equal(opened.tab, "panorama");
  closeVec(opened.pose.position, [0, 0, 0]);
});

test("closed during an eased move, the memory keeps where it was going", () => {
  const view = camera();
  view.wheel(1, null);
  view.step(0.1);
  const memory = rememberView(view.destination(), "panorama");
  close(memory.distance, 8 / 1.2);
  closeVec(memory.position, [0, 0, -(8 - 8 / 1.2)]);
});

test("a remembered view is used when it is valid", () => {
  const memory = rememberView(pose({ position: [0, 1, 0] }), "panorama");
  const opened = openingView({ memory, output: { position: [9, 9, 9], yaw_deg: 0 }, world: WORLD, frameAvailable: false });
  closeVec(opened.pose.position, [0, 1, 0]);
});

// --- The Frame view: the operations move the Camera.

test("in the Frame view a wheel step and Frame Selected apply at once", () => {
  const view = camera(pose(), { frame: true });
  view.wheel(1, null);
  assert.equal(view.animating(), false);
  close(len(sub(view.pose().position, view.pose().target)), 8 / 1.2);
  view.frameSelected({ center: [0, 0, -20], radius: 1 });
  assert.equal(view.animating(), false);
  closeVec(view.pose().target, [0, 0, -20]);
});

test("the Frame view has no double click and no Reset View", () => {
  const view = camera(pose(), { frame: true });
  assert.equal(view.focus([1, 0, -3]).moved, false);
  assert.equal(view.reset(pose({ yaw_deg: 90 })).moved, false);
  closeVec(view.pose().target, [0, 0, -8]);
  assert.equal(view.pose().yaw_deg, 0);
});

test("in the Frame view the Camera keeps its roll, and a pan moves along the rolled screen axes", () => {
  const start = pose({ roll_deg: 90 });
  const view = camera(start, { frame: true });
  const grabbed = [1, 0.5, -6];
  const before = screenPoint(grabbed, start);
  view.beginPan(grabbed);
  view.pan(20, 10);
  const after = screenPoint(grabbed, view.pose());
  close(after.x, before.x + 20);
  close(after.y, before.y + 10);
  view.look(30, 0);
  view.beginOrbit(null);
  view.orbit(30, 10);
  assert.equal(view.pose().roll_deg, 90);
});

test("in the Frame view the bound counts the Camera where the gesture started", () => {
  // The Camera at 46 makes the bound 49.2; a pan from there may reach 49.2 but no farther, though the Camera moves.
  const view = camera(pose({ position: [46, 0, 0] }), { frame: true, world: { ...WORLD, camera: null } });
  view.beginPan(null);
  view.pan(-200, 0);
  close(view.bound(), 49.2);
  const result = view.pan(-2000, 0);
  assert.equal(result.notice, "bound");
  close(len(view.pose().position), 49.2);
  view.endGesture();
});

test("in the Frame view entering puts T at the first T of the Camera's view", () => {
  const view = camera(pose(), { frame: true });
  view.enter({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: -45, roll_deg: 10 });
  closeVec(view.pose().target, [0, -1.6, -1.6]);
  assert.equal(view.pose().roll_deg, 10);
});

// --- The notice.

test("a notice shows for BOUND_NOTICE_SECONDS after the last time it was shown", () => {
  const notice = createNotice();
  assert.equal(notice.current(0), null);
  notice.show("bound", 1);
  assert.equal(notice.current(2.9), VIEW_NOTICES.bound);
  notice.show("bound", 2.5);
  assert.equal(notice.current(4.4), VIEW_NOTICES.bound);
  assert.equal(notice.current(4.5), null);
  notice.show(null, 5);
  assert.equal(notice.current(5), null);
});
