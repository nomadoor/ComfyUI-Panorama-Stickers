// The new editor's session (web_src/studio/session.js): the working state, the selection the Timeline and the
// inspector share, one Undo history for both, Delete and Escape in their orders (docs/studio-ui.md "閉じ方",
// docs/timeline-ui.md "記録の規則"), and the text written to state_json (docs/timeline-ui.md: nothing when unchanged).
import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState, sceneStateText } from "../web_src/pano_scene_state.js";
import { createStudioSession, inspectorSelection } from "../web_src/studio/session.js";
import { keyRow } from "../web_src/studio/timeline_actions.js";

const file = (filename) => ({ kind: "file", filename, subfolder: "", storage: "input" });

function sky(id, extra = {}) {
  return { id, placement: "sky", source: file(`${id}.png`), size: { value: { hFOV_deg: 40, vFOV_deg: 30 } }, ...extra };
}

function world(id, extra = {}) {
  return { id, placement: "world", source: file(`${id}.glb`), position: { value: [1, 2, 3] }, scale: { value: 2 }, ...extra };
}

const load = (raw) => loadSceneState({ version: 2, ...raw });
const text = (raw) => sceneStateText(load(raw));
const node = { __panoSceneStateV2: true };
const field = (id, name, value, phase = "commit") => ({ type: "field", target: { kind: "sticker", id }, field: name, value, phase });

test("the inspector's selection follows the Timeline's: the selected row's object, and the selected Keyframes per owner", () => {
  assert.deepEqual(inspectorSelection({ row: null, keys: [] }), { ids: [], keyframes: null });
  assert.deepEqual(inspectorSelection({ row: "camera", keys: [] }), { ids: ["camera"], keyframes: null });
  assert.deepEqual(inspectorSelection({ row: "sticker_1", keys: [{ row: "sticker_1", lane: "size", frame: 4 }, { row: "sticker_1", lane: "size", frame: 0 }] }), {
    ids: ["sticker_1"],
    keyframes: { owner: "sticker_1", lane: "size", frames: [0, 4] },
  });
  // Keyframes of more than one Lane of a row stand for all the row's Lanes at their frames.
  assert.deepEqual(inspectorSelection({ row: null, keys: [{ row: "camera", lane: "fov", frame: 2 }, { row: "camera", lane: null, frame: 6 }] }).keyframes, {
    owner: "camera",
    lane: null,
    frames: [2, 6],
  });
  // The background and the painting have no Easing.
  assert.equal(inspectorSelection({ row: null, keys: [{ row: "background", lane: null, frame: 0 }] }).keyframes, null);
});

test("an inspector edit changes a new state object, one Undo step on commit; Undo and Redo go back and forth", () => {
  const session = createStudioSession({ state: load({ stickers: [world("sticker_1")] }) });
  const opened = session.state;
  assert.equal(session.canUndo, false);
  const result = session.applyInspector(field("sticker_1", "position_x", 5), { playhead: 0 });
  assert.equal(result.history, true);
  assert.notEqual(session.state, opened);
  assert.equal(opened.stickers[0].position.value[0], 1, "the state before the edit is left as it was");
  assert.equal(session.state.stickers[0].position.value[0], 5);
  assert.equal(session.canUndo, true);
  assert.ok(session.undo());
  assert.equal(session.state.stickers[0].position.value[0], 1);
  assert.equal(session.canUndo, false);
  assert.equal(session.canRedo, true);
  assert.ok(session.redo());
  assert.equal(session.state.stickers[0].position.value[0], 5);
  assert.equal(session.undo() && session.undo(), null, "nothing before the opening state");
});

test("a value box's drag shows live without Undo steps; its cancel puts back the state from before its first input", () => {
  const session = createStudioSession({ state: load({ stickers: [world("sticker_1")] }) });
  session.applyInspector(field("sticker_1", "position_x", 2, "input"), { playhead: 0 });
  session.applyInspector(field("sticker_1", "position_x", 3, "input"), { playhead: 0 });
  assert.equal(session.state.stickers[0].position.value[0], 3);
  assert.equal(session.canUndo, false);
  session.applyInspector({ ...field("sticker_1", "position_x", 3), phase: "cancel" }, { playhead: 0 });
  assert.equal(session.state.stickers[0].position.value[0], 1);
  assert.equal(session.canUndo, false);
  session.applyInspector(field("sticker_1", "position_x", 4, "input"), { playhead: 0 });
  session.applyInspector(field("sticker_1", "position_x", 4, "commit"), { playhead: 0 });
  assert.equal(session.canUndo, true);
  session.undo();
  assert.equal(session.state.stickers[0].position.value[0], 1, "the drag is one step back to where it began");
});

test("the Easing panel's edit reaches every selected owner's Keyframes", () => {
  const keyed = (frames) => ({ value: { hFOV_deg: 40, vFOV_deg: 30 }, keyframes: frames.map((frame) => ({ frame, value: { hFOV_deg: 40 + frame, vFOV_deg: 30 } })) });
  const fov = { value: 90, keyframes: [{ frame: 0, value: 90 }, { frame: 10, value: 60 }] };
  const session = createStudioSession({ state: load({ camera: { fov }, stickers: [sky("sticker_1", { size: keyed([0, 10]) })] }) });
  session.select({ row: null, keys: [{ row: "camera", lane: "fov", frame: 0 }, { row: "sticker_1", lane: "size", frame: 0 }] });
  const panel = inspectorSelection(session.selection).keyframes;
  const result = session.applyInspector({ type: "easing", keyframes: panel, easing: [0, 0, 1, 1], phase: "commit" }, { playhead: 0 });
  assert.equal(result.history, true);
  assert.deepEqual(session.state.camera.fov.keyframes[0].easing, [0, 0, 1, 1]);
  assert.deepEqual(session.state.stickers[0].size.keyframes[0].easing, [0, 0, 1, 1]);
});

test("Timeline edits: live shows without a step, commit is one step, cancel goes back; fps rebases as one step", () => {
  const session = createStudioSession({ state: load({ stickers: [world("sticker_1")] }) });
  const ctx = { state: session.state, upstream: [], media: {} };
  const edit = keyRow(ctx, "sticker_1", 0);
  session.applyTimeline({ kind: "state", ...edit, phase: "live", stopsPlayback: true });
  assert.equal(session.state, edit.state);
  assert.equal(session.canUndo, false);
  session.applyTimeline({ kind: "state", state: ctx.state, upstream: {}, phase: "cancel", stopsPlayback: true });
  assert.equal(session.state, ctx.state);
  const committed = session.applyTimeline({ kind: "state", ...edit, selection: { row: "sticker_1", keys: [] }, phase: "commit", stopsPlayback: true });
  assert.deepEqual(committed, { changed: true, history: true, stopPlayback: true, fps: null });
  assert.deepEqual(session.selection, { row: "sticker_1", keys: [] });
  assert.equal(session.canUndo, true);
  const rebased = session.applyTimeline({ kind: "fps", fps: 48 });
  assert.deepEqual(rebased.fps, { from: 24, to: 48 });
  assert.equal(session.state.timeline.fps, 48);
  const undone = session.undo();
  assert.deepEqual(undone.fps, { from: 48, to: 24 });
  assert.equal(session.state.timeline.fps, 24);
});

test("Delete: the selected Sticker goes (one step, its selection too); the Camera says it can't be deleted", () => {
  const session = createStudioSession({ state: load({ stickers: [world("sticker_1"), sky("sticker_2")] }) });
  assert.deepEqual(session.deleteSelectedObject(), { changed: false, notice: null });
  session.select({ row: "camera", keys: [] });
  assert.deepEqual(session.deleteSelectedObject(), { changed: false, notice: "The camera can't be deleted" });
  session.select({ row: "sticker_1", keys: [] });
  assert.deepEqual(session.deleteSelectedObject(), { changed: true, notice: null });
  assert.deepEqual(session.state.stickers.map((item) => item.id), ["sticker_2"]);
  assert.deepEqual(session.selection, { row: null, keys: [] });
  session.undo();
  assert.deepEqual(session.state.stickers.map((item) => item.id), ["sticker_1", "sticker_2"]);
});

test("Escape takes back the Keyframe selection first, then the object's, then says there is nothing left", () => {
  const session = createStudioSession({ state: load({ stickers: [world("sticker_1")] }) });
  session.select({ row: "sticker_1", keys: [{ row: "sticker_1", lane: null, frame: 0 }] });
  assert.equal(session.escape(), "keys");
  assert.deepEqual(session.selection, { row: "sticker_1", keys: [] });
  assert.equal(session.escape(), "object");
  assert.deepEqual(session.selection, { row: null, keys: [] });
  assert.equal(session.escape(), null);
});

test("a read-only session takes no edit and records nothing", () => {
  const session = createStudioSession({ state: load({ stickers: [world("sticker_1")] }), readOnly: true });
  const before = session.state;
  assert.equal(session.applyInspector(field("sticker_1", "position_x", 5), { playhead: 0 }).changed, false);
  assert.equal(session.applyTimeline({ kind: "fps", fps: 48 }).changed, false);
  session.select({ row: "sticker_1", keys: [] });
  assert.equal(session.deleteSelectedObject().changed, false);
  assert.equal(session.state, before);
  assert.equal(session.canUndo, false);
  assert.equal(session.stateText(node, ""), null);
});

test("the text for state_json: none when the state means the widget's text, else the state's text with a Scene id", () => {
  const raw = { stickers: [world("sticker_1")] };
  const current = text(raw);
  const session = createStudioSession({ state: load(raw) });
  assert.equal(session.stateText(node, current), null);
  // An equivalent text written another way is the same state, and an empty widget is the empty state.
  assert.equal(session.stateText(node, JSON.stringify({ version: 2, ...raw })), null);
  assert.equal(createStudioSession({ state: load({}) }).stateText(node, ""), null);
  // An edit undone back to the opening state writes nothing.
  session.applyInspector(field("sticker_1", "position_x", 5), { playhead: 0 });
  session.undo();
  assert.equal(session.stateText(node, current), null);
  session.redo();
  const parsed = JSON.parse(session.stateText(node, current));
  assert.equal(parsed.stickers[0].position.value[0], 5);
  assert.match(parsed.id, /^[A-Za-z0-9_-]{16}$/);
});
