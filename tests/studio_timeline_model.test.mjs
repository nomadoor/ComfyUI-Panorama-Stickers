import assert from "node:assert/strict";
import test from "node:test";

import { ICON } from "../web_src/icons.js";
import {
  buildStudioTimeline,
  frameToX,
  hasOwnTime,
  jumpFrames,
  keysInRange,
  timecode,
  timelineCamera,
  xToFrame,
  xToFrameExact,
} from "../web_src/studio/timeline_model.js";
import { ctxOf, studioState, upstreamLayer } from "./studio_timeline_fixtures.mjs";

const view = (ctx, options = {}) => buildStudioTimeline(ctx, { selection: { row: null, keys: [] }, playhead: 0, ...options });
const row = (model, id) => [...model.rows, ...model.groups.flatMap((group) => group.rows)].find((item) => item.id === id);

// docs/timeline-ui.md "タイムラインの表示": background, Camera, Stickers front to back (sky, then world), painting, scene.
test("the rows come in the spec's order with the row head's icon and name", () => {
  const state = studioState({ painting_visible: false });
  const model = view(ctxOf(state, { background: { end: null }, sceneRow: true }));
  assert.deepEqual(model.rows.map((item) => item.id), ["background", "camera", "sticker_2", "sticker_1", "painting", "scene"]);
  assert.deepEqual(model.rows.map((item) => item.label), ["Background", "Camera", "poster.png", "chair.glb", "Paint", "Scene"]);
  // docs/design.md "アイコン": Sky is view-360 (ICON.pano), World is box; the background the panorama.
  assert.deepEqual(model.rows.map((item) => item.icon), [ICON.unwrap, ICON.camera, ICON.pano, ICON.box, ICON.paintbrush_vertical_tool, ICON.box]);
});

test("without bg_media, a painting or a scene input those rows are left out", () => {
  const model = view(ctxOf(studioState()));
  assert.deepEqual(model.rows.map((item) => item.id), ["camera", "sticker_2", "sticker_1"]);
});

test("a state whose camera is null shows the Camera row as the default Camera, without Keyframes", () => {
  const state = studioState({ camera: null });
  assert.equal(state.camera, null);
  const camera = row(view(ctxOf(state)), "camera");
  assert.deepEqual(camera.pins, []);
  assert.equal(camera.dot.state, "none");
  assert.equal(camera.eye.icon, ICON.eye);
  assert.equal(timelineCamera(state).position.keyframes.length, 0);
});

test("a row's pins are at Timeline frames, half where only some of its Lanes have a Keyframe", () => {
  const model = view(ctxOf(studioState()));
  // chair.glb: its material starts at start - in = 10.
  assert.deepEqual(row(model, "sticker_1").pins.map(({ frame, ownerFrame, full }) => [frame, ownerFrame, full]), [[10, 0, false], [30, 20, false]]);
  assert.deepEqual(row(model, "camera").pins.map((pin) => pin.frame), [0, 48]);
  assert.deepEqual(row(model, "sticker_1").clip, { start: 10, end: 70 });
});

test("Keyframes at or past the output's end are not on the Timeline", () => {
  const model = view(ctxOf(studioState({ timeline: { fps: 24, length: 40 } })));
  assert.equal(model.span, 40);
  assert.deepEqual(row(model, "camera").pins.map((pin) => pin.frame), [0]);
});

test("an open row has one line per Lane, the lens Lane included, and the row dot leaves the lens out", () => {
  const model = view(ctxOf(studioState()), { openRows: new Set(["camera", "sticker_1"]) });
  assert.deepEqual(row(model, "camera").lanes.map((lane) => lane.label), ["Position", "Rotation", "FOV", "Lens curve"]);
  assert.deepEqual(row(model, "sticker_1").lanes.map((lane) => lane.lane), ["position", "rotation", "scale", "opacity"]);
  assert.deepEqual(row(model, "sticker_1").lanes[0].keys.map((key) => key.frame), [10, 30]);
  assert.equal(row(model, "sticker_2").open, false);
  assert.deepEqual(row(model, "sticker_2").lanes, []);
});

test("the selection marks pins and Lane Keyframes: a pin covers its row's Lanes at that frame", () => {
  const selection = { row: "sticker_1", keys: [{ row: "sticker_1", lane: null, frame: 20 }, { row: "camera", lane: "position", frame: 48 }] };
  const model = view(ctxOf(studioState()), { selection, openRows: new Set(["camera", "sticker_1"]) });
  const chair = row(model, "sticker_1");
  assert.equal(chair.selected, true);
  assert.deepEqual(chair.pins.map((pin) => pin.selected), [false, true]);
  assert.deepEqual(chair.lanes[0].keys.map((key) => key.selected), [false, true]);
  assert.deepEqual(chair.lanes[1].keys.map((key) => key.selected), [true]);
  const camera = row(model, "camera");
  assert.deepEqual(camera.pins.map((pin) => pin.selected), [false, false]);
  assert.deepEqual(camera.lanes[0].keys.map((key) => key.selected), [false, true]);
});

// docs/timeline-ui.md "インスペクタの Keyframe のポチ" gives the three looks; the row dot uses them for its row's Lanes.
test("the row dot shows none, has, or now when every row Lane has a Keyframe at the playhead", () => {
  const state = studioState();
  assert.equal(row(view(ctxOf(state), { playhead: 30 }), "sticker_1").dot.state, "has");
  assert.equal(row(view(ctxOf(state), { playhead: 30 }), "sticker_2").dot.state, "none");
  for (const name of ["scale", "opacity"]) state.stickers[0][name].keyframes.push({ frame: 20, value: 1, easing: [0.42, 0, 0.58, 1] });
  assert.equal(row(view(ctxOf(state), { playhead: 30 }), "sticker_1").dot.state, "now");
  assert.equal(row(view(ctxOf(state), { playhead: 31 }), "sticker_1").dot.state, "has");
});

test("rows without Lanes have no row dot; locked, read-only and inherited-only rows have it disabled with a reason", () => {
  const state = studioState({ painting_visible: false });
  state.stickers[1].locked = true;
  const model = view(ctxOf(state, { background: { end: 50 }, sceneRow: true }));
  for (const id of ["background", "painting", "scene"]) assert.equal(row(model, id).dot, null, id);
  assert.equal(row(model, "sticker_2").dot.disabled, true);
  assert.match(row(model, "sticker_2").dot.tip, /Locked/);
  assert.equal(row(model, "sticker_1").dot.disabled, false);
  const readOnly = view(ctxOf(state, { readOnly: true }));
  assert.equal(row(readOnly, "camera").dot.disabled, true);
  const inherited = view(ctxOf(state, { upstream: [upstreamLayer({ key: "#0", editable: false })] }));
  const up = row(inherited, "upstream:#0:sticker_1");
  assert.equal(up.dot.disabled, true);
  assert.match(up.dot.tip, /inherited/i);
  assert.equal(up.eye.disabled, true);
});

test("the eye: the background has none (its place is kept); hidden rows show the dashed eye", () => {
  const state = studioState({ painting_visible: false });
  state.stickers[0].visible = false;
  const model = view(ctxOf(state, { background: { end: null } }));
  assert.equal(row(model, "background").eye, null);
  assert.deepEqual(row(model, "sticker_1").eye, { icon: ICON.eye_dashed, label: "Show", disabled: false, tip: "Show" });
  assert.equal(row(model, "painting").eye.icon, ICON.eye_dashed);
  assert.equal(row(model, "camera").eye.icon, ICON.eye);
});

test("the expand button: Sticker and Camera rows open, background and scene have it disabled, the painting has none", () => {
  const model = view(ctxOf(studioState({ painting_visible: false }), { background: { end: null }, sceneRow: true }));
  assert.equal(row(model, "camera").expand, "yes");
  assert.equal(row(model, "sticker_1").expand, "yes");
  assert.equal(row(model, "background").expand, "disabled");
  assert.equal(row(model, "scene").expand, "disabled");
  assert.equal(row(model, "painting").expand, "none");
});

test("the background's bar ends where its media ends, or with the Timeline", () => {
  const video = { media: { bg: { video: true, frames: 50, duration: 50 / 24 } } };
  assert.deepEqual(row(view(ctxOf(studioState(), { ...video, background: { end: 50 } })), "background").clip, { start: 0, end: 50 });
  // A VIDEO linked before a run: its length is not known yet.
  assert.deepEqual(row(view(ctxOf(studioState(), { background: { end: null, video: true } })), "background").clip, { start: 0, end: null });
});

// docs/timeline-ui.md "Clip range のバー（新しい UI）": a bar only for what has its own time.
test("hasOwnTime: a background VIDEO or IMAGE batch has its own time, a single image does not", () => {
  const entry = (ctx) => ({ ctx, entry: { kind: "background", owner: ctx.state.background, layer: null } });
  const check = (extra) => {
    const { ctx, entry: item } = entry(ctxOf(studioState(), { background: { end: null }, ...extra }));
    return hasOwnTime(ctx, item);
  };
  assert.equal(check({ media: { bg: { video: true, frames: 48, duration: 2 } } }), true);
  assert.equal(check({ media: { bg: { frames: 12 } } }), true);
  assert.equal(check({ background: { end: null, video: true } }), true);
  assert.equal(check({ media: { bg: { frames: 1 } } }), false);
  assert.equal(check({}), false);
  const still = view(ctxOf(studioState(), { background: { end: null }, media: { bg: { frames: 1 } } }));
  assert.equal(row(still, "background").clip, null);
});

test("hasOwnTime: a still image, a static 3D file, the Camera and the Paint have no bar; only their dots", () => {
  const state = studioState({ painting_visible: false });
  state.stickers[0].clip = { start: 0, in: 0, duration: null };
  const model = view(ctxOf(state, { sceneRow: true }));
  for (const id of ["camera", "sticker_1", "sticker_2", "painting", "scene"]) assert.equal(row(model, id).clip, null, id);
  // The chair's Keyframes still show, at Timeline frames.
  assert.deepEqual(row(model, "sticker_1").pins.map((pin) => pin.frame), [0, 20]);
});

test("hasOwnTime: a port VIDEO or IMAGE batch, an animated 3D file and a scene input with items have a bar", () => {
  const state = studioState();
  state.stickers[0].clip = { start: 0, in: 0, duration: null };
  state.stickers[1].source = { kind: "port" };
  const animations = { stickers: { sticker_1: [{ name: "Walk", duration: 2 }] }, scene: [{ name: "Spin", duration: 1 }] };
  const model = view(ctxOf(state, { sceneRow: true, media: { port: { kind: "VIDEO", frames: 48, duration: 2 }, animations } }));
  assert.deepEqual(row(model, "sticker_2").clip, { start: 0, end: 48 });
  assert.deepEqual(row(model, "sticker_1").clip, { start: 0, end: null });
  assert.deepEqual(row(model, "scene").clip, { start: 0, end: null });
  const batch = view(ctxOf(state, { media: { port: { kind: "IMAGE", frames: 5, duration: 5 / 24 }, sceneItems: 3 }, sceneRow: true }));
  assert.notEqual(row(batch, "sticker_2").clip, null);
  assert.notEqual(row(batch, "scene").clip, null);
  assert.equal(row(batch, "sticker_1").clip, null);
  // One item, or nothing known yet (before a run), is no time of its own.
  const single = view(ctxOf(state, { media: { sceneItems: 1 }, sceneRow: true }));
  assert.equal(row(single, "sticker_2").clip, null);
  assert.equal(row(single, "scene").clip, null);
});

test("hasOwnTime: a Clip range that is not the default keeps its bar, whatever the thing is", () => {
  const state = studioState();
  // poster.png, a still image, trimmed to start at 30.
  state.stickers[1].clip = { start: 30, in: 0, duration: null };
  state.scene.clip = { start: 0, in: 0, duration: 40 };
  const model = view(ctxOf(state, { sceneRow: true, background: { end: null } }));
  assert.deepEqual(row(model, "sticker_2").clip, { start: 30, end: null });
  assert.deepEqual(row(model, "sticker_1").clip, { start: 10, end: 70 });
  assert.deepEqual(row(model, "scene").clip, { start: 0, end: 40 });
  state.background.clip = { start: 0, in: 6, duration: null };
  assert.deepEqual(row(view(ctxOf(state, { background: { end: null } })), "background").clip, { start: 0, end: null });
});

test("hasOwnTime: upstream rows follow the same rule, from their layer's media", () => {
  const still = upstreamLayer({ scene: true });
  const plain = view(ctxOf(studioState(), { upstream: [still] }));
  assert.equal(row(plain, "upstream:scene_up:sticker_1").clip, null);
  assert.equal(row(plain, "upstream:scene_up:scene").clip, null);
  const timed = upstreamLayer({ scene: true });
  timed.sceneState.stickers[0].source = { kind: "port" };
  timed.portMeta = { kind: "VIDEO", frames: 30, duration: 1.25 };
  timed.sceneItems = 4;
  const model = view(ctxOf(studioState(), { upstream: [timed] }));
  assert.deepEqual(row(model, "upstream:scene_up:sticker_1").clip, { start: 0, end: 30 });
  assert.notEqual(row(model, "upstream:scene_up:scene").clip, null);
  const animated = upstreamLayer();
  animated.animations = { stickers: { "upstream:scene_up:sticker_1": [{ name: "Walk", duration: 1 }] } };
  assert.notEqual(row(view(ctxOf(studioState(), { upstream: [animated] })), "upstream:scene_up:sticker_1").clip, null);
  const trimmed = upstreamLayer();
  trimmed.sceneState.stickers[0].clip = { start: 5, in: 0, duration: null };
  assert.deepEqual(row(view(ctxOf(studioState(), { upstream: [trimmed] })), "upstream:scene_up:sticker_1").clip, { start: 5, end: null });
});

// docs/timeline-ui.md "上流の層の行".
test("an upstream layer is a group headed From <node name>, with Revert and Restore deleted (n)", () => {
  const record = { layer: "scene_up", stickers: [{ id: "sticker_1", placement: "world" }], scene: { visible: false }, deleted: ["x"] };
  const model = view(ctxOf(studioState(), { upstream: [upstreamLayer({ record, deleted: 2 })] }));
  const [group] = model.groups;
  assert.equal(group.label, "From Studio #4");
  assert.equal(group.tip, "Items from the scene input. Changes here are saved in this node.");
  assert.equal(group.revert.disabled, false);
  assert.match(group.revert.tip, /upstream/);
  assert.deepEqual(group.restore, { label: "Restore deleted (2)", disabled: false });
  const [up] = group.rows;
  assert.equal(up.id, "upstream:scene_up:sticker_1");
  assert.equal(up.label, "room.ply");
  assert.equal(up.upstream, true);
  assert.equal(up.overridden, true);
});

test("an upstream layer without a name falls back to its key; an inherited-only one says so and disables its actions", () => {
  const model = view(ctxOf(studioState(), { upstream: [upstreamLayer({ key: "#0", name: "", editable: false })] }));
  const [group] = model.groups;
  assert.equal(group.label, "From #0 · inherited only");
  assert.equal(group.revert.disabled, true);
  assert.equal(group.restore.disabled, true);
  assert.equal(group.restore.label, "Restore deleted (0)");
  assert.equal(group.rows[0].overridden, false);
});

// docs/studio-ui.md "ノードの入力から来た物": until the new editor edits upstream items, a layer shows read-only.
test("a read-only upstream layer keeps its name and disables its rows and actions with the Read-only tip", () => {
  const record = { layer: "scene_up", stickers: [], scene: { visible: false }, deleted: ["x"] };
  const model = view(ctxOf(studioState(), { upstream: [upstreamLayer({ record, deleted: 2, readOnly: true })] }));
  const [group] = model.groups;
  assert.equal(group.label, "From Studio #4");
  assert.equal(group.revert.disabled, true);
  assert.equal(group.restore.disabled, true);
  const [up] = group.rows;
  assert.equal(up.dot.disabled, true);
  assert.equal(up.dot.tip, "Read-only");
  assert.equal(up.eye.disabled, true);
  assert.equal(up.eye.tip, "Read-only");
  assert.equal(up.clipEditable, false);
  assert.equal(up.keysEditable, false);
  // The node's own rows stay editable.
  assert.equal(row(model, "sticker_1").dot.disabled, false);
});

test("the node's own scene row does not show while an upstream Scene is there", () => {
  const model = view(ctxOf(studioState(), { sceneRow: true, upstream: [upstreamLayer({ scene: true })] }));
  assert.equal(model.rows.some((item) => item.id === "scene"), false);
  assert.deepEqual(model.groups[0].rows.map((item) => item.id), ["upstream:scene_up:sticker_1", "upstream:scene_up:scene"]);
});

// docs/studio-ui.md "タイムラインのバー".
test("the bar: time and frame, fps, the length (the span while timeline.length is null) and its reset", () => {
  const model = view(ctxOf(studioState()), { playhead: 78, playing: true, loop: false });
  assert.equal(model.bar.timecode, "00:03.06");
  assert.equal(model.bar.frameText, "78 / 100");
  assert.equal(model.bar.playing, true);
  assert.equal(model.bar.loop, false);
  assert.equal(model.bar.fps, 24);
  assert.equal(model.bar.length, 100);
  assert.equal(model.bar.lengthResetDisabled, false);
  const auto = view(ctxOf(studioState({ timeline: { fps: 24, length: null } })));
  // The Auto length: the Camera's last Keyframe + 1 or the Clip range's end, whichever the rule takes.
  assert.equal(auto.bar.length, auto.span);
  assert.equal(auto.bar.lengthResetDisabled, true);
});

test("a Timeline of one frame cannot play", () => {
  const model = view(ctxOf(studioState({ timeline: { fps: 24, length: 1 } })));
  assert.equal(model.bar.playable, false);
});

test("timecode is minutes, seconds and the frame in the second", () => {
  assert.equal(timecode(0, 24), "00:00.00");
  assert.equal(timecode(78, 24), "00:03.06");
  assert.equal(timecode(24 * 61 + 23, 24), "01:01.23");
  assert.equal(timecode(1234, 1000), "00:01.234");
});

// docs/timeline-ui.md "前後の Keyframe へ飛ぶ".
test("prev and next count the selected row's Keyframes, its lens Lane included", () => {
  const state = studioState();
  state.camera.curve.keyframes.push({ frame: 60, value: 1.2, easing: [0.42, 0, 0.58, 1] });
  const ctx = ctxOf(state);
  assert.deepEqual(jumpFrames(ctx, { row: "camera", keys: [] }, 100), [0, 48, 60]);
  assert.deepEqual(jumpFrames(ctx, { row: "sticker_1", keys: [] }, 100), [10, 30]);
  const model = view(ctx, { selection: { row: "camera", keys: [] }, playhead: 48 });
  assert.deepEqual(model.bar.prev, { frame: 0, disabled: false });
  assert.deepEqual(model.bar.next, { frame: 60, disabled: false });
});

test("without a selection, prev and next count every shown row's Keyframes, not hidden rows' nor those past the end", () => {
  const state = studioState({ timeline: { fps: 24, length: 40 } });
  state.stickers[0].visible = false;
  const ctx = ctxOf(state, { upstream: [upstreamLayer()] });
  assert.deepEqual(jumpFrames(ctx, { row: null, keys: [] }, 40), [0]);
  const model = view(ctx, { playhead: 0 });
  assert.deepEqual(model.bar.prev, { frame: null, disabled: true });
  assert.deepEqual(model.bar.next, { frame: null, disabled: true });
  state.stickers[0].visible = true;
  assert.deepEqual(jumpFrames(ctx, { row: null, keys: [] }, 40), [0, 10, 30]);
});

test("frames and x positions map both ways across the track with its padding", () => {
  assert.equal(frameToX(0, 101, 1016, 8), 8);
  assert.equal(frameToX(100, 101, 1016, 8), 1008);
  assert.equal(xToFrame(508, 101, 1016, 8), 50);
  assert.equal(xToFrame(-30, 101, 1016, 8), 0);
  assert.equal(xToFrame(5000, 101, 1016, 8), 100);
  assert.equal(frameToX(0, 1, 1016, 8), 8);
  assert.equal(xToFrame(700, 1, 1016, 8), 0);
  // A box's edge is not rounded nor held, so it takes in exactly the Keyframes it covers.
  assert.equal(xToFrameExact(513, 101, 1016, 8), 50.5);
  assert.equal(xToFrameExact(-2, 101, 1016, 8), -1);
});

test("keysInRange finds the pins and Lane Keyframes of the lines and frames a box covers", () => {
  const model = view(ctxOf(studioState()), { openRows: new Set(["sticker_1"]) });
  const at = (rowId, lane) => model.lines.findIndex((line) => line.row === rowId && line.lane === lane);
  // From the chair's position line to its rotation line, frames 25..35.
  const hits = keysInRange(model.lines, at("sticker_1", "position"), at("sticker_1", "rotation"), 25, 35);
  assert.deepEqual(hits, [{ row: "sticker_1", lane: "position", frame: 20 }, { row: "sticker_1", lane: "rotation", frame: 20 }]);
  const pins = keysInRange(model.lines, 0, model.lines.length - 1, 0, 12);
  assert.deepEqual(pins, [{ row: "camera", lane: null, frame: 0 }, { row: "sticker_1", lane: null, frame: 0 }, { row: "sticker_1", lane: "position", frame: 0 }]);
});

test("a port Sticker's bar without a duration ends where its media ends, or with the Timeline before a run", () => {
  const state = studioState();
  state.stickers[1].source = { kind: "port" };
  state.stickers[1].clip = { start: 4, in: 0, duration: null };
  assert.deepEqual(row(view(ctxOf(state, { media: { port: { kind: "VIDEO", frames: 48, duration: 2 } } })), "sticker_2").clip, { start: 4, end: 52 });
  assert.deepEqual(row(view(ctxOf(state)), "sticker_2").clip, { start: 4, end: null });
  assert.equal(row(view(ctxOf(state)), "sticker_2").label, "Sticker input");
});
