// Keyframe copy and paste in the new UI's Timeline (web_src/studio/timeline_actions.js copyKeys, pasteKeys):
// docs/timeline-ui.md "Keyframe のコピーと貼り付け（新しい UI）".
import assert from "node:assert/strict";
import test from "node:test";

import { createStudioSession } from "../web_src/studio/session.js";
import { applyEdit, copyKeys, pasteKeys } from "../web_src/studio/timeline_actions.js";
import { ctxOf, studioState } from "./studio_timeline_fixtures.mjs";

// studioState(): length 100; the Camera's position keyed at 0 ([0,0,0]) and 48 ([1,0,0]); sticker_1 (world, Clip range
// from 10, `in` 0) keyed on position at 0 and 20 and on rotation at 20 (its own frames: Timeline 10, 30, 30);
// sticker_2 (sky) with no Keyframes.
const frames = (lane) => lane.keyframes.map((key) => key.frame);
const frozen = (ctx) => JSON.stringify(ctx.state);
const pasted = (ctx, result) => applyEdit(ctx, result.edit).state;
const sticker = (state, id) => state.stickers.find((item) => item.id === id);

test("nothing selected copies nothing; nothing copied pastes nothing", () => {
  const ctx = ctxOf(studioState());
  assert.equal(copyKeys(ctx, { row: "camera", keys: [] }), null);
  assert.equal(copyKeys(ctx, null), null);
  assert.equal(pasteKeys(ctx, null, { row: "camera", keys: [] }, 10), null);
});

test("a pin pastes at the playhead onto the same Lanes, with its value and Easing, and the pasted pin is selected", () => {
  const ctx = ctxOf(studioState());
  ctx.state.camera.position.keyframes[1].easing = "hold";
  const before = frozen(ctx);
  const clipboard = copyKeys(ctx, { row: "camera", keys: [{ row: "camera", lane: null, frame: 48 }] });
  const result = pasteKeys(ctx, clipboard, { row: "camera", keys: [] }, 70);
  const state = pasted(ctx, result);
  assert.deepEqual(frames(state.camera.position), [0, 48, 70]);
  const key = state.camera.position.keyframes[2];
  assert.deepEqual(key.value, [1, 0, 0]);
  assert.equal(key.easing, "hold");
  // Only the Lanes keyed at the copied frame: the Camera's other Lanes get nothing.
  assert.deepEqual(frames(state.camera.rotation), []);
  assert.deepEqual(result.selection, { row: "camera", keys: [{ row: "camera", lane: null, frame: 70 }] });
  // Nothing given was changed.
  assert.equal(frozen(ctx), before);
});

test("the earliest goes to the playhead and the others keep their offsets; a Sticker's frames are its own", () => {
  const ctx = ctxOf(studioState());
  const keys = [{ row: "sticker_1", lane: "position", frame: 20 }, { row: "sticker_1", lane: "position", frame: 0 }];
  const clipboard = copyKeys(ctx, { row: "sticker_1", keys });
  const result = pasteKeys(ctx, clipboard, { row: "sticker_1", keys }, 50);
  const lane = sticker(pasted(ctx, result), "sticker_1").position;
  // Timeline 50 and 70 are the Sticker's own 40 and 60 (its material starts at Timeline 10).
  assert.deepEqual(frames(lane), [0, 20, 40, 60]);
  assert.deepEqual(lane.keyframes[2].value, [0, 0, 0]);
  assert.deepEqual(lane.keyframes[3].value, [1, 0, 0]);
  assert.deepEqual([...result.selection.keys].sort((a, b) => a.frame - b.frame), [
    { row: "sticker_1", lane: "position", frame: 40 },
    { row: "sticker_1", lane: "position", frame: 60 },
  ]);
});

test("a Keyframe already at a target frame is replaced", () => {
  const ctx = ctxOf(studioState());
  const clipboard = copyKeys(ctx, { row: "camera", keys: [{ row: "camera", lane: "position", frame: 48 }] });
  const state = pasted(ctx, pasteKeys(ctx, clipboard, { row: "camera", keys: [] }, 0));
  assert.deepEqual(frames(state.camera.position), [0, 48]);
  assert.deepEqual(state.camera.position.keyframes[0].value, [1, 0, 0]);
});

test("the selected object takes the paste when it has every copied Lane, else the row they came from does", () => {
  const ctx = ctxOf(studioState());
  // sticker_1's pin at its frame 20: position and rotation, which the Camera has too.
  const clipboard = copyKeys(ctx, { row: "sticker_1", keys: [{ row: "sticker_1", lane: null, frame: 20 }] });
  const onCamera = pasteKeys(ctx, clipboard, { row: "camera", keys: [] }, 5);
  const camera = pasted(ctx, onCamera).camera;
  assert.deepEqual(frames(camera.position), [0, 5, 48]);
  assert.deepEqual(camera.rotation.keyframes.map((key) => [key.frame, key.value.yaw_deg]), [[5, 30]]);
  assert.deepEqual(onCamera.selection.keys, [{ row: "camera", lane: null, frame: 5 }]);
  // The sky image has no position: back onto sticker_1, at the playhead in its own frames.
  const onSource = pasteKeys(ctx, clipboard, { row: "sticker_2", keys: [] }, 40);
  const own = sticker(pasted(ctx, onSource), "sticker_1");
  assert.deepEqual(frames(own.position), [0, 20, 30]);
  assert.deepEqual(frames(own.rotation), [20, 30]);
  assert.deepEqual(frames(sticker(pasted(ctx, onSource), "sticker_2").direction), []);
  assert.deepEqual(onSource.selection.keys, [{ row: "sticker_1", lane: null, frame: 30 }]);
});

test("Keyframes copied from several rows each go back to their own row, keeping their offsets", () => {
  const ctx = ctxOf(studioState());
  const clipboard = copyKeys(ctx, { row: null, keys: [{ row: "camera", lane: "position", frame: 0 }, { row: "sticker_1", lane: "rotation", frame: 20 }] });
  // Camera 0 is the earliest (Timeline 0); sticker_1's rotation is at Timeline 30, 30 frames later.
  const result = pasteKeys(ctx, clipboard, { row: "sticker_2", keys: [] }, 10);
  const state = pasted(ctx, result);
  assert.deepEqual(frames(state.camera.position), [0, 10, 48]);
  // Timeline 40 is sticker_1's own 30.
  assert.deepEqual(frames(sticker(state, "sticker_1").rotation), [20, 30]);
});

test("Keyframes that would land past the Timeline's last frame are not pasted", () => {
  const ctx = ctxOf(studioState());
  const clipboard = copyKeys(ctx, { row: "camera", keys: [{ row: "camera", lane: null, frame: 0 }, { row: "camera", lane: null, frame: 48 }] });
  const result = pasteKeys(ctx, clipboard, { row: "camera", keys: [] }, 60);
  assert.deepEqual(frames(pasted(ctx, result).camera.position), [0, 48, 60]);
  assert.deepEqual(result.selection.keys, [{ row: "camera", lane: null, frame: 60 }]);
  // At the last frame itself, the earliest still pastes.
  assert.deepEqual(frames(pasted(ctx, pasteKeys(ctx, clipboard, { row: "camera", keys: [] }, 99)).camera.position), [0, 48, 99]);
});

test("a locked row copies but takes no paste; a read-only editor pastes nothing", () => {
  const state = studioState();
  state.stickers[0].locked = true;
  const ctx = ctxOf(state);
  const clipboard = copyKeys(ctx, { row: "sticker_1", keys: [{ row: "sticker_1", lane: "position", frame: 20 }] });
  assert.ok(clipboard);
  assert.equal(pasteKeys(ctx, clipboard, { row: "sticker_1", keys: [] }, 50), null);
  // Onto the Camera it goes (it has position and is not locked).
  assert.ok(pasteKeys(ctx, clipboard, { row: "camera", keys: [] }, 50));
  assert.equal(pasteKeys(ctxOf(studioState(), { readOnly: true }), clipboard, { row: "camera", keys: [] }, 50), null);
});

test("the clipboard holds its own copy: an edit after copying does not change what pastes", () => {
  const ctx = ctxOf(studioState());
  const clipboard = copyKeys(ctx, { row: "camera", keys: [{ row: "camera", lane: "position", frame: 48 }] });
  ctx.state.camera.position.keyframes[1].value[0] = 9;
  const state = pasted(ctx, pasteKeys(ctx, clipboard, { row: "camera", keys: [] }, 60));
  assert.deepEqual(state.camera.position.keyframes.at(-1).value, [1, 0, 0]);
});

test("a paste is one Undo step", () => {
  const session = createStudioSession({ state: studioState() });
  const ctx = () => ctxOf(session.state);
  const clipboard = copyKeys(ctx(), { row: "camera", keys: [{ row: "camera", lane: null, frame: 48 }] });
  const result = pasteKeys(ctx(), clipboard, { row: "camera", keys: [] }, 70);
  session.applyTimeline({ kind: "state", ...result.edit, selection: result.selection, phase: "commit", stopsPlayback: true });
  assert.deepEqual(frames(session.state.camera.position), [0, 48, 70]);
  assert.deepEqual(session.selection.keys, [{ row: "camera", lane: null, frame: 70 }]);
  session.undo();
  assert.deepEqual(frames(session.state.camera.position), [0, 48]);
  assert.equal(session.canUndo, false);
});
