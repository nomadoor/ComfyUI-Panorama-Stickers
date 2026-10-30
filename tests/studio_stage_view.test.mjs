// The new UI's stage (web_src/studio/stage_view.js, grid.js, layout.js): the output view the editor opens with, the
// three.js camera of the view, the surface hit (GPU pick and ground), what a render draws (docs/space-and-view.md
// "地面のグリッドと原点の印"), and the sizes of the regions the user drags (docs/studio-ui.md "画面の区画").
import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import { projectPoint } from "../web_src/pano_space.js";
import { GROUND_DEFAULT as DEFAULT_GROUND } from "../web_src/studio/defaults.js";
import { GRID_COLORS, groundGrid } from "../web_src/studio/grid.js";
import {
  OUTPUT_MAX_WIDTH,
  OUTPUT_MIN_WIDTH,
  STAGE_MIN_HEIGHT,
  TIMELINE_DEFAULT_HEIGHT,
  TIMELINE_MIN_HEIGHT,
  loadOutputWindow,
  loadTimelineHeight,
  outputWindowSize,
  saveOutputWindow,
  saveTimelineHeight,
  timelineHeight,
} from "../web_src/studio/layout.js";
import { STAGE_CLEAR_COLOR, STAGE_RENDER_MAX_SIDE, STAGE_RENDER_SCALE, groundDepth, outputView, stageCamera, stageRay, stageRenderInput, stageRenderSize, surfaceHit } from "../web_src/studio/stage_view.js";
import { ORIGIN_MARK_RADIUS, eyeHeight, eyeLengths } from "../web_src/studio/view_scale.js";

const close = (actual, expected, eps = 1e-9) => assert.ok(Math.abs(actual - expected) <= eps, `${actual} != ${expected}`);
const closeVec = (actual, expected, eps = 1e-9) => actual.forEach((value, index) => close(value, expected[index], eps));

const level = (overrides = {}) => ({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, target: [0, -1.6, -8], ...overrides });

test("the output view is the Camera's position and yaw at the frame, looking level; without a Camera, the origin", () => {
  const state = loadSceneState({ version: 2, camera: { position: { value: [1, 2, 3] }, rotation: { value: { yaw_deg: 30, pitch_deg: 12, roll_deg: 5 } } } });
  assert.deepEqual(outputView(state, 0), { position: [1, 2, 3], yaw_deg: 30, pitch_deg: 0 });
  assert.deepEqual(outputView(loadSceneState(null), 0), { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0 });
});

test("the stage's camera looks with the view's 100° across, and its far holds the world bound and the grid's fade", () => {
  const camera = stageCamera(level(), 1000, 500, 48);
  closeVec(camera.position, [0, 0, 0]);
  close(camera.aspect, 2);
  // 100° across a 2:1 view.
  close(Math.tan(camera.fovY_deg * Math.PI / 360) * 2, Math.tan(50 * Math.PI / 180), 1e-9);
  const { GRID_MAJOR_FADE } = eyeLengths(eyeHeight(DEFAULT_GROUND));
  assert.ok(camera.far >= 2 * 48 + GRID_MAJOR_FADE[1], `far ${camera.far}`);
  assert.ok(camera.near > 0 && camera.near < 0.1, `near ${camera.near}`);
});

test("the surface hit is the nearer of the GPU pick and the ground; over the sky with no pick, nothing", () => {
  const camera = stageCamera(level(), 1000, 500, 48);
  // The bottom middle of the screen looks down onto the ground at y = -1.6.
  const ray = stageRay(camera, 500, 450, 1000, 500);
  const onGround = surfaceHit(camera, 500, 450, 1000, 500, { ground: -1.6 });
  close(onGround[1], -1.6, 1e-9);
  // The hit shows under the pixel it was found at, turned or not.
  const shown = projectPoint(camera, onGround, 1000, 500);
  close(shown.x, 500, 1e-6);
  close(shown.y, 450, 1e-6);
  const turned = stageCamera(level({ yaw_deg: 40, pitch_deg: -20 }), 1000, 500, 48);
  const elsewhere = projectPoint(turned, surfaceHit(turned, 730, 380, 1000, 500, { ground: -1.6 }), 1000, 500);
  close(elsewhere.x, 730, 1e-6);
  close(elsewhere.y, 380, 1e-6);
  closeVec(onGround, ray.origin.map((value, axis) => value + ray.direction[axis] * groundDepth(ray, -1.6)));
  // A picked point in front of the ground wins; one behind it does not.
  const near = ray.origin.map((value, axis) => value + ray.direction[axis] * 0.5);
  closeVec(surfaceHit(camera, 500, 450, 1000, 500, { ground: -1.6, picked: near }), near);
  const far = ray.origin.map((value, axis) => value + ray.direction[axis] * 50);
  closeVec(surfaceHit(camera, 500, 450, 1000, 500, { ground: -1.6, picked: far }), onGround);
  // Above the horizon the ray never meets the ground.
  assert.equal(surfaceHit(camera, 500, 50, 1000, 500, { ground: -1.6 }), null);
  const sky = ray.origin.map((value, axis) => value + stageRay(camera, 500, 50, 1000, 500).direction[axis] * 3);
  closeVec(surfaceHit(camera, 500, 50, 1000, 500, { ground: -1.6, picked: sky }), sky);
});

test("the grid lies on the ground, fades by the eye height's distances, marks the origin, and hides with Hide Grid", () => {
  const grid = groundGrid({ ground: -1.6 });
  assert.equal(grid.y, -1.6);
  closeVec(grid.minorFade, [12.8, 38.4], 1e-9);
  closeVec(grid.majorFade, [25.6, 48], 1e-9);
  assert.equal(grid.originRadius, ORIGIN_MARK_RADIUS);
  assert.equal(grid.colors, GRID_COLORS);
  // The axes take the gizmo's colors: X coral #f37159, Z ice #aecedb (docs/design.md 地面のグリッドの軸).
  closeVec(GRID_COLORS.axisX, [0xf3 / 255, 0x71 / 255, 0x59 / 255, 0.75], 1e-9);
  closeVec(GRID_COLORS.axisZ, [0xae / 255, 0xce / 255, 0xdb / 255, 0.75], 1e-9);
  // The distances follow E, with its floor near a ground of 0.
  closeVec(groundGrid({ ground: -3 }).minorFade, [24, 72], 1e-9);
  closeVec(groundGrid({ ground: 0.1 }).majorFade, [8, 15], 1e-9);
  assert.equal(groundGrid({ ground: -1.6, hidden: true }), null);
  assert.equal(groundGrid().y, DEFAULT_GROUND);
});

test("a stage render draws the background and the grid over the whole canvas, and no World content yet", () => {
  const camera = stageCamera(level(), 800, 400, 48);
  const background = { media: {}, revision: "a", coverage: 360 };
  const input = stageRenderInput({ camera, canvasWidth: 1600, canvasHeight: 800, background, ground: -1.6, gridHidden: false });
  assert.deepEqual(input.rect, { x: 0, y: 0, w: 1600, h: 800 });
  assert.equal(input.camera, camera);
  assert.equal(input.background, background);
  assert.equal(input.clearColor, STAGE_CLEAR_COLOR);
  assert.deepEqual(input.layers, []);
  assert.deepEqual(input.space.ground, { ...groundGrid({ ground: -1.6 }), linePx: STAGE_RENDER_SCALE });
  assert.equal(input.space.grid, null);
  assert.deepEqual([input.space.stickers, input.space.lines, input.space.sceneUrls], [[], [], []]);
  const hidden = stageRenderInput({ camera, canvasWidth: 2, canvasHeight: 2, background: null, ground: -1.6, gridHidden: true, clearColor: null });
  assert.equal(hidden.space.ground, null);
  assert.equal(hidden.background, null);
  assert.equal(hidden.clearColor, null);
});

function memoryStorage() {
  const kept = new Map();
  return { getItem: (key) => kept.get(key) ?? null, setItem: (key, value) => kept.set(key, String(value)) };
}

test("the timeline keeps its least height and leaves the stage its least height; its height is kept per browser", () => {
  assert.equal(timelineHeight(Number.NaN, 900), TIMELINE_DEFAULT_HEIGHT);
  assert.equal(timelineHeight(10, 900), TIMELINE_MIN_HEIGHT);
  assert.equal(timelineHeight(5000, 900), 900 - STAGE_MIN_HEIGHT);
  // Too short for both: the timeline keeps its least height.
  assert.equal(timelineHeight(300, 200), TIMELINE_MIN_HEIGHT);
  const storage = memoryStorage();
  assert.equal(loadTimelineHeight(storage), TIMELINE_DEFAULT_HEIGHT);
  saveTimelineHeight(storage, 333.4);
  assert.equal(loadTimelineHeight(storage), 333);
  // Storage that refuses keeps nothing and breaks nothing.
  const refusing = { getItem: () => { throw new Error("denied"); }, setItem: () => { throw new Error("denied"); } };
  saveTimelineHeight(refusing, 400);
  assert.equal(loadTimelineHeight(refusing), TIMELINE_DEFAULT_HEIGHT);
  assert.equal(loadTimelineHeight(null), TIMELINE_DEFAULT_HEIGHT);
});

test("the Output window keeps the output's ratio within its least and largest width, and its fold, per browser", () => {
  assert.deepEqual(outputWindowSize(300, 2), { width: 300, height: 150 });
  assert.deepEqual(outputWindowSize(300, 16 / 9), { width: 300, height: 169 });
  assert.equal(outputWindowSize(1, 2).width, OUTPUT_MIN_WIDTH);
  assert.equal(outputWindowSize(1e6, 2).width, OUTPUT_MAX_WIDTH);
  const storage = memoryStorage();
  saveOutputWindow(storage, { width: 280, collapsed: true });
  assert.deepEqual(loadOutputWindow(storage), { width: 280, collapsed: true });
  // Folded by default (owner, 2026-10-30).
  assert.deepEqual(loadOutputWindow(null).collapsed, true);
});

test("the stage draws STAGE_RENDER_SCALE times the device pixels, its longer side at most STAGE_RENDER_MAX_SIDE", () => {
  assert.deepEqual(stageRenderSize(800, 400, 1, 1920, 1080), { width: Math.round(800 * STAGE_RENDER_SCALE), height: Math.round(400 * STAGE_RENDER_SCALE) });
  assert.deepEqual(stageRenderSize(800, 400, 2, 1920, 1080), { width: Math.round(1600 * STAGE_RENDER_SCALE), height: Math.round(800 * STAGE_RENDER_SCALE) });
  const big = stageRenderSize(2000, 1000, 2, 2560, 1440);
  assert.equal(big.width, STAGE_RENDER_MAX_SIDE);
  assert.equal(big.height, STAGE_RENDER_MAX_SIDE / 2);
});
