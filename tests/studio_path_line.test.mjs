// docs/studio-ui.md "軌道の線" (web_src/studio/path_line.js): the path line draws the evaluator's shape, its handles
// are the shape's control points, a handle drag keeps a line through a Keyframe that is not a corner, and the point
// types change the marks without changing the path where they say so.
import assert from "node:assert/strict";
import test from "node:test";

import { evaluateLane, laneView } from "../web_src/pano_scene_eval.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import {
  frameNear, keyUnder, onLine, pathHandles, pathOf, pointTargets, pointType, setPointType, togglePointCorner, writeHandle,
} from "../web_src/studio/path_line.js";

const camera = (keyframes, extra = {}) => loadSceneState({ version: 2, camera: { ...extra, position: { keyframes } } }).camera;
const close = (a, b, eps = 1e-6) => a.every((value, i) => Math.abs(value - b[i]) <= eps);
const KEYS = [
  { frame: 0, value: [0, 0, 0] },
  { frame: 10, value: [4, 0, 0] },
  { frame: 30, value: [4, 0, 4] },
];

test("the path runs through the evaluated positions, from the first Keyframe to the last", () => {
  const owner = camera(KEYS);
  const path = pathOf(owner);
  assert.equal(path.segments.length, 2);
  assert.ok(close(path.segments[0].points[0], [0, 0, 0]) && close(path.segments[1].points.at(-1), [4, 0, 4]));
  // Every frame's point is the evaluation there.
  assert.deepEqual(path.frames.map((item) => item.frame), Array.from({ length: 31 }, (_, i) => i));
  for (const item of path.frames) assert.ok(close(item.point, evaluateLane(owner, "position", item.frame)), `${item.frame}`);
  // A Sticker's frames are Timeline frames (its time base starts at its Clip range origin).
  assert.equal(pathOf(owner, null, 5).frames[0].frame, 5);
  assert.equal(pathOf(camera(KEYS.slice(0, 1))), null, "one Keyframe has no path");
});

test("a looping owner's path goes round, back to the first Keyframe", () => {
  const owner = camera(KEYS, { loop: true });
  const path = pathOf(owner, 40);
  assert.equal(path.loop, true);
  assert.equal(path.segments.length, 3);
  assert.ok(close(path.segments[2].points.at(-1), [0, 0, 0]));
  assert.equal(path.frames.at(-1).frame, 39);
});

test("a hold segment is drawn straight between its ends", () => {
  const path = pathOf(camera([{ ...KEYS[0], easing: "hold" }, KEYS[1], KEYS[2]]));
  assert.equal(path.segments[0].hold, true);
  assert.deepEqual(path.segments[0].points, [[0, 0, 0], [4, 0, 0]]);
});

test("the handles of a Keyframe are the shape's control points, automatic until written", () => {
  const owner = camera(KEYS);
  const path = pathOf(owner);
  const handles = pathHandles(path, 1);
  assert.deepEqual(handles.map((handle) => [handle.side, handle.written]), [["in", false], ["out", false]]);
  // They line up (a Smooth key passes through), pointing back and on.
  const [into, out] = handles.map((handle) => handle.offset);
  const cross = into[0] * out[2] - into[2] * out[0];
  assert.ok(Math.abs(cross) < 1e-9 && into[0] * out[0] + into[2] * out[2] < 0);
  // The ends have one side; a hold side has none.
  assert.deepEqual(pathHandles(path, 0).map((handle) => handle.side), ["out"]);
  assert.deepEqual(pathHandles(pathOf(camera([KEYS[0], { ...KEYS[1], easing: "hold" }, KEYS[2]])), 1).map((handle) => handle.side), ["in"]);
});

test("a handle drag writes that side and lines the other up, keeping its length; a corner moves one side", () => {
  const owner = camera(KEYS);
  const before = pathHandles(pathOf(owner), 1).find((handle) => handle.side === "in").offset;
  writeHandle(owner, 1, "out", [0, 2, 2]);
  const key = owner.position.keyframes[1];
  assert.deepEqual(key.handles.out, [0, 2, 2]);
  const length = Math.hypot(...key.handles.in);
  assert.ok(Math.abs(length - Math.hypot(...before)) < 1e-9);
  assert.ok(close(key.handles.in.map((value) => -value / length), [0, 2 / Math.hypot(2, 2), 2 / Math.hypot(2, 2)]));
  assert.equal(pointType(key), "bezier");
  const corner = camera([KEYS[0], { ...KEYS[1], corner: true }, KEYS[2]]);
  writeHandle(corner, 1, "out", [0, 2, 2]);
  assert.deepEqual(corner.position.keyframes[1].handles, { out: [0, 2, 2] });
});

test("Bezier writes the shape as it is, Corner makes straight segments, Auto takes the handles off", () => {
  const owner = camera(KEYS);
  const at = (frames) => frames.map((frame) => evaluateLane(owner, "position", frame));
  const before = at([0, 3, 7, 12, 18, 25, 30]);
  assert.equal(setPointType(owner, [10], "bezier"), true);
  assert.equal(pointType(owner.position.keyframes[1]), "bezier");
  at([0, 3, 7, 12, 18, 25, 30]).forEach((point, i) => assert.ok(close(point, before[i], 1e-6), `${point} != ${before[i]}`));
  assert.equal(setPointType(owner, [10], "bezier"), false, "nothing to change");
  setPointType(owner, [10], "corner");
  assert.equal(owner.position.keyframes[1].corner, true);
  assert.equal(owner.position.keyframes[1].handles, undefined);
  for (const frame of [2, 5, 8]) {
    const [x, y, z] = evaluateLane(owner, "position", frame);
    assert.ok(x > 0 && x < 4 && Math.abs(y) < 1e-9 && Math.abs(z) < 1e-9, "straight to the corner");
  }
  setPointType(owner, [10], "auto");
  assert.equal(pointType(owner.position.keyframes[1]), "auto");
  assert.equal("corner" in owner.position.keyframes[1], false);
});

test("a double click turns a point to Corner, and a corner back to Auto", () => {
  const owner = camera(KEYS);
  assert.equal(togglePointCorner(owner, 1), "corner");
  assert.equal(pointType(owner.position.keyframes[1]), "corner");
  assert.equal(togglePointCorner(owner, 1), "auto");
  assert.equal(pointType(owner.position.keyframes[1]), "auto");
});

test("the point types act on the selected Keyframes, else the one at the playhead", () => {
  const owner = camera(KEYS);
  assert.deepEqual(pointTargets(owner, [10, 30, 99], 0), [10, 30]);
  assert.deepEqual(pointTargets(owner, [], 10), [10]);
  assert.deepEqual(pointTargets(owner, [], 11), []);
});

test("on the screen: the nearest point within its reach, the line, and the frame nearest the pointer", () => {
  const screen = {
    keys: [{ x: 0, y: 0 }, { x: 100, y: 0 }, null],
    segments: [{ k: 0, hold: false, runs: [[{ x: 0, y: 0 }, { x: 100, y: 0 }]] }],
    frames: [{ frame: 0, x: 0, y: 0 }, { frame: 1, x: 50, y: 0 }, { frame: 2, x: 100, y: 0 }],
  };
  assert.equal(keyUnder(screen, { x: 96, y: 3 }), 1);
  assert.equal(keyUnder(screen, { x: 50, y: 0 }), null);
  assert.equal(onLine(screen, { x: 50, y: 6 }), true);
  assert.equal(onLine(screen, { x: 50, y: 9 }), false);
  assert.equal(frameNear(screen, { x: 60, y: 4 }), 1);
});

test("the path line uses the evaluator's lane view, so the shape is the one the output moves along", () => {
  const owner = camera(KEYS, { loop: true });
  assert.equal(pathOf(owner, 40).view.loop, laneView(owner.position.keyframes, 40).loop);
});
