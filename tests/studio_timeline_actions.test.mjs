import assert from "node:assert/strict";
import test from "node:test";

import {
  applyClipDrag,
  applyEdit,
  clipDragChanged,
  deleteKeys,
  deleteTarget,
  enteredFps,
  jumpTarget,
  keyRow,
  lengthEdit,
  LOOP_SETTING_KEY,
  moveKeys,
  readLoopSetting,
  selectKeys,
  selectRow,
  startClipDrag,
  toggleVisible,
  writeLoopSetting,
} from "../web_src/studio/timeline_actions.js";
import { ctxOf, EASE, studioState, upstreamLayer } from "./studio_timeline_fixtures.mjs";

const none = { row: null, keys: [] };
const frames = (lane) => lane.keyframes.map((key) => key.frame);
const frozen = (ctx) => JSON.stringify([ctx.state, ctx.upstream.map((layer) => layer.sceneState)]);

// docs/timeline-ui.md "Keyframe の選び方".
test("a row click selects its object and clears the Keyframes; a Sticker outside its Clip range moves the playhead to its start", () => {
  const ctx = ctxOf(studioState());
  assert.deepEqual(selectRow(ctx, { row: null, keys: [{ row: "camera", lane: null, frame: 0 }] }, "camera", 0), { selection: { row: "camera", keys: [] }, seek: null });
  assert.deepEqual(selectRow(ctx, none, "sticker_1", 0), { selection: { row: "sticker_1", keys: [] }, seek: 10 });
  assert.deepEqual(selectRow(ctx, none, "sticker_1", 12), { selection: { row: "sticker_1", keys: [] }, seek: null });
});

test("a hidden row is not selected; the background, painting and scene rows select nothing", () => {
  const state = studioState({ painting_visible: false });
  state.stickers[1].visible = false;
  const ctx = ctxOf(state, { background: { end: null }, sceneRow: true });
  assert.equal(selectRow(ctx, none, "sticker_2", 0), null);
  // The hidden painting is not selected either.
  assert.equal(selectRow(ctx, none, "painting", 0), null);
  for (const id of ["background", "scene"]) assert.deepEqual(selectRow(ctx, { row: "camera", keys: [] }, id, 0), { selection: none, seek: null }, id);
});

test("clicking a Keyframe selects only it, Shift adds, and an empty click clears", () => {
  const a = { row: "camera", lane: null, frame: 0 };
  const b = { row: "sticker_1", lane: "position", frame: 20 };
  const one = selectKeys({ row: "camera", keys: [b] }, [a], { additive: false });
  assert.deepEqual(one, { row: "camera", keys: [a] });
  assert.deepEqual(selectKeys(one, [b, a], { additive: true }).keys, [a, b]);
  assert.deepEqual(selectKeys(one, [], { additive: false }).keys, []);
  assert.deepEqual(selectKeys(one, [], { additive: true }).keys, [a]);
});

test("dragging selected Keyframes moves them all by the same frames, across rows and Lanes", () => {
  const ctx = ctxOf(studioState());
  const before = frozen(ctx);
  const selection = { row: null, keys: [{ row: "camera", lane: null, frame: 0 }, { row: "sticker_1", lane: "rotation", frame: 20 }] };
  const result = moveKeys(ctx, selection, 5, 100);
  assert.equal(frozen(ctx), before, "the snapshot is not changed");
  assert.equal(result.delta, 5);
  assert.deepEqual(frames(result.edit.state.camera.position), [5, 48]);
  assert.deepEqual(frames(result.edit.state.stickers[0].rotation), [25]);
  assert.deepEqual(frames(result.edit.state.stickers[0].position), [0, 20]);
  assert.deepEqual(result.selection.keys, [{ row: "camera", lane: null, frame: 5 }, { row: "sticker_1", lane: "rotation", frame: 25 }]);
  // The sky Sticker was not touched, so the new state shares it.
  assert.equal(result.edit.state.stickers[1], ctx.state.stickers[1]);
});

test("a move stops for every selected Keyframe at frame 0 and at the output's last frame", () => {
  const ctx = ctxOf(studioState());
  const selection = { row: null, keys: [{ row: "camera", lane: null, frame: 48 }, { row: "sticker_1", lane: null, frame: 0 }] };
  // The chair's Keyframe at its own frame 0 is Timeline frame 10: it stops the move back at -10.
  assert.equal(moveKeys(ctx, selection, -30, 100).delta, -10);
  // The Camera's at 48 stops the move on at 99 - 48.
  assert.equal(moveKeys(ctx, selection, 80, 100).delta, 51);
});

test("a moved Keyframe replaces one of its own Lane it lands on", () => {
  const ctx = ctxOf(studioState());
  const result = moveKeys(ctx, { row: null, keys: [{ row: "camera", lane: "position", frame: 0 }] }, 48, 100);
  assert.deepEqual(frames(result.edit.state.camera.position), [48]);
});

test("Keyframes of locked and inherited-only rows do not move or delete", () => {
  const state = studioState();
  state.stickers[0].locked = true;
  const ctx = ctxOf(state, { upstream: [upstreamLayer({ key: "#0", editable: false })] });
  const selection = { row: null, keys: [{ row: "sticker_1", lane: null, frame: 0 }, { row: "upstream:#0:sticker_1", lane: null, frame: 0 }] };
  assert.equal(moveKeys(ctx, selection, 3, 100), null);
  assert.equal(deleteKeys(ctx, selection, 0), null);
});

test("Delete removes every selected Keyframe; a Lane left empty keeps its value at the playhead", () => {
  const ctx = ctxOf(studioState());
  const selection = { row: "sticker_1", keys: [{ row: "sticker_1", lane: null, frame: 20 }, { row: "camera", lane: "position", frame: 0 }, { row: "camera", lane: "position", frame: 48 }] };
  const result = deleteKeys(ctx, selection, 24);
  const chair = result.edit.state.stickers[0];
  assert.deepEqual(frames(chair.position), [0]);
  assert.deepEqual(frames(chair.rotation), []);
  // The rotation Lane's only Keyframe was deleted: its value stays.
  assert.deepEqual(chair.rotation.value, { yaw_deg: 30, pitch_deg: 0, roll_deg: 0 });
  assert.deepEqual(frames(result.edit.state.camera.position), []);
  // Timeline frame 24 is halfway: the Camera stays where the playhead showed it.
  assert.ok(Math.abs(result.edit.state.camera.position.value[0] - 0.5) < 1e-9);
  assert.deepEqual(result.selection, { row: "sticker_1", keys: [] });
});

test("the Delete key deletes the selected Keyframes first, else the selected object", () => {
  assert.equal(deleteTarget({ row: "sticker_1", keys: [{ row: "camera", lane: null, frame: 0 }] }), "keys");
  assert.equal(deleteTarget({ row: "sticker_1", keys: [] }), "object");
  assert.equal(deleteTarget(none), null);
});

// docs/timeline-ui.md "記録の規則": the row dot keys every Lane but the lens ones.
test("the row dot keys every Lane but the lens at the playhead, in the owner's own frames", () => {
  const ctx = ctxOf(studioState());
  const camera = keyRow(ctx, "camera", 24).state.camera;
  assert.deepEqual([frames(camera.position), frames(camera.rotation), frames(camera.fov), frames(camera.curve)], [[0, 24, 48], [24], [24], []]);
  const chair = keyRow(ctx, "sticker_1", 30).state.stickers[0];
  assert.deepEqual(["position", "rotation", "scale", "opacity"].map((name) => frames(chair[name])), [[0, 20], [20], [20], [20]]);
});

test("the row dot changes nothing where every row Lane already has a Keyframe, and nothing on locked or Lane-less rows", () => {
  const ctx = ctxOf(studioState());
  const keyed = applyEdit(ctx, keyRow(ctx, "camera", 24));
  assert.equal(keyRow(keyed, "camera", 24), null);
  keyed.state.stickers[1].locked = true;
  assert.equal(keyRow(keyed, "sticker_2", 0), null);
  assert.equal(keyRow(ctxOf(studioState(), { sceneRow: true }), "scene", 0), null);
  assert.equal(keyRow(ctxOf(studioState(), { readOnly: true }), "camera", 0), null);
});

test("keying the Camera row of a state without a Camera writes the default Camera with the Keyframes", () => {
  const ctx = ctxOf(studioState({ camera: null }));
  const { state } = keyRow(ctx, "camera", 5);
  assert.deepEqual(frames(ctx.state.camera.position), []);
  assert.deepEqual(frames(state.camera.position), [5]);
  assert.equal(state.camera.projection, "erp");
});

test("an upstream row's edits change its layer's working copy only", () => {
  const ctx = ctxOf(studioState(), { upstream: [upstreamLayer()] });
  const edit = keyRow(ctx, "upstream:scene_up:sticker_1", 10);
  assert.equal(edit.state, ctx.state);
  const sticker = edit.upstream.scene_up.stickers[0];
  assert.deepEqual(frames(sticker.scale), [10]);
  assert.equal(sticker.origin.id, "sticker_1");
  // The painting is shared with the layer, not copied.
  assert.equal(edit.upstream.scene_up.painting, ctx.upstream[0].sceneState.painting);
  const next = applyEdit(ctx, edit);
  assert.equal(next.upstream[0].sceneState, edit.upstream.scene_up);
  assert.equal(next.upstream[0].name, "Studio #4");
});

// docs/timeline-ui.md "表示（目のアイコン）".
test("the eye hides and shows; hiding the selected object releases it; locked Stickers toggle too", () => {
  const state = studioState({ painting_visible: false });
  state.stickers[0].locked = true;
  const ctx = ctxOf(state);
  const hidden = toggleVisible(ctx, { row: "sticker_1", keys: [] }, "sticker_1");
  assert.equal(hidden.edit.state.stickers[0].visible, false);
  assert.deepEqual(hidden.selection, none);
  const paint = toggleVisible(ctx, none, "painting");
  assert.equal(paint.edit.state.painting_visible, true);
  assert.equal(paint.edit.state.painting, state.painting);
  assert.equal(toggleVisible(ctxOf(studioState(), { readOnly: true }), none, "camera"), null);
  assert.equal(toggleVisible(ctxOf(studioState(), { background: { end: null } }), none, "background"), null);
});

const PAINTED = { raster_objects: [{ id: "r1", type: "raster_frozen", layerKind: "paint", rasterDataUrl: "data:image/png;base64,AAAA", bbox: { u0: 0.2, v0: 0.2, u1: 0.3, v1: 0.3 } }] };
// docs/studio-ui.md "ペイントのまとまり": hiding the painting lets a selected paint group go.
test("hiding the painting releases a selected stroke group or raster object; showing it keeps the selection", () => {
  const ctx = ctxOf(studioState({ painting: PAINTED }));
  for (const row of ["paint_group:g1", "raster:r1"]) {
    assert.deepEqual(toggleVisible(ctx, { row, keys: [] }, "painting").selection, none, row);
  }
  const hiddenCtx = ctxOf(studioState({ painting_visible: false }));
  assert.deepEqual(toggleVisible(hiddenCtx, { row: "camera", keys: [] }, "painting").selection, { row: "camera", keys: [] });
});

// docs/timeline-ui.md "タイムラインの長さ": Clip range drags.
test("moving a Clip range keeps its start inside the output and may run its end past it", () => {
  const ctx = ctxOf(studioState());
  const drag = startClipDrag(ctx, "sticker_1");
  assert.deepEqual(applyClipDrag(ctx, drag, "move", 25).state.stickers[0].clip, { start: 35, in: 0, duration: 60 });
  assert.deepEqual(applyClipDrag(ctx, drag, "move", 500).state.stickers[0].clip, { start: 99, in: 0, duration: 60 });
  assert.deepEqual(applyClipDrag(ctx, drag, "move", -50).state.stickers[0].clip, { start: 0, in: 0, duration: 60 });
});

test("trimming the head keeps the material in place; trimming the end stops at the output's end", () => {
  const ctx = ctxOf(studioState());
  const drag = startClipDrag(ctx, "sticker_1");
  assert.deepEqual(applyClipDrag(ctx, drag, "start", 5).state.stickers[0].clip, { start: 15, in: 5, duration: 55 });
  assert.deepEqual(applyClipDrag(ctx, drag, "end", 100).state.stickers[0].clip, { start: 10, in: 0, duration: null });
  assert.deepEqual(applyClipDrag(ctx, drag, "end", -20).state.stickers[0].clip, { start: 10, in: 0, duration: 40 });
});

test("a drag never lengthens an Auto length its Clip range's end sets", () => {
  // No timeline.length, no background: the chair's end (70) sets the length.
  const ctx = ctxOf(studioState({ timeline: { fps: 24, length: null } }));
  const drag = startClipDrag(ctx, "sticker_1");
  assert.equal(drag.limit, 70);
  assert.deepEqual(applyClipDrag(ctx, drag, "move", 20).state.stickers[0].clip, { start: 10, in: 0, duration: 60 });
  assert.deepEqual(applyClipDrag(ctx, drag, "move", -4).state.stickers[0].clip, { start: 6, in: 0, duration: 60 });
});

test("locked and inherited-only Clip ranges do not start a drag", () => {
  const state = studioState();
  state.stickers[0].locked = true;
  assert.equal(startClipDrag(ctxOf(state), "sticker_1"), null);
  assert.equal(startClipDrag(ctxOf(studioState(), { upstream: [upstreamLayer({ key: "#0", editable: false })] }), "upstream:#0:sticker_1"), null);
  assert.equal(startClipDrag(ctxOf(studioState()), "camera"), null);
});

test("the background row's Clip range drags like a Sticker's", () => {
  const ctx = ctxOf(studioState(), { background: { end: 50 } });
  const drag = startClipDrag(ctx, "background");
  assert.equal(drag.end, 50);
  assert.deepEqual(applyClipDrag(ctx, drag, "end", -10).state.background.clip, { start: 0, in: 0, duration: 40 });
});

// docs/timeline-ui.md "前後の Keyframe へ飛ぶ".
test("prev and next jump to the nearest Keyframe before or after the playhead and stop at the ends", () => {
  const ctx = ctxOf(studioState());
  assert.equal(jumpTarget(ctx, none, 0, 1), 10);
  assert.equal(jumpTarget(ctx, none, 10, 1), 30);
  assert.equal(jumpTarget(ctx, none, 30, -1), 10);
  assert.equal(jumpTarget(ctx, none, 48, 1), null);
  assert.equal(jumpTarget(ctx, none, 0, -1), null);
  assert.equal(jumpTarget(ctx, { row: "sticker_1", keys: [] }, 30, 1), null);
});

// docs/timeline-ui.md "タイムラインの表示": the length field and its reset.
test("the length field sets timeline.length in range, ignores what is not a number, and the reset sets null", () => {
  const ctx = ctxOf(studioState());
  assert.equal(lengthEdit(ctx, 240).state.timeline.length, 240);
  assert.equal(lengthEdit(ctx, 1e308).state.timeline.length, 10000000);
  assert.equal(lengthEdit(ctx, Number.NaN), null);
  assert.equal(lengthEdit(ctx, 100), null);
  assert.equal(lengthEdit(ctx, null).state.timeline.length, null);
  assert.equal(lengthEdit(ctxOf(studioState({ timeline: { fps: 24, length: null } })), null), null);
  assert.equal(lengthEdit(ctxOf(studioState(), { readOnly: true }), 50), null);
});

test("the fps field gives the fps to rebase to, or null when locked, unchanged or not a positive number", () => {
  const ctx = ctxOf(studioState());
  assert.equal(enteredFps(ctx, 30), 30);
  assert.equal(enteredFps(ctx, 5000), 1000);
  assert.equal(enteredFps(ctx, 24), null);
  assert.equal(enteredFps(ctx, 0), null);
  assert.equal(enteredFps(ctxOf(studioState(), { fpsLocked: true }), 30), null);
});

// docs/timeline-ui.md "タイムラインの長さ": the loop switch, on by default, remembered per browser.
test("the loop setting is on by default and remembered in the browser's storage", () => {
  const store = new Map();
  const storage = { getItem: (key) => store.get(key) ?? null, setItem: (key, value) => store.set(key, String(value)) };
  assert.equal(readLoopSetting(storage), true);
  writeLoopSetting(storage, false);
  assert.equal(store.get(LOOP_SETTING_KEY), "0");
  assert.equal(readLoopSetting(storage), false);
  writeLoopSetting(storage, true);
  assert.equal(readLoopSetting(storage), true);
  const broken = { getItem: () => { throw new Error("blocked"); }, setItem: () => { throw new Error("blocked"); } };
  assert.equal(readLoopSetting(broken), true);
  assert.doesNotThrow(() => writeLoopSetting(broken, false));
  assert.equal(readLoopSetting(null), true);
});

test("an edit keeps the Easing a moved Keyframe had", () => {
  const ctx = ctxOf(studioState());
  const moved = moveKeys(ctx, { row: null, keys: [{ row: "camera", lane: "position", frame: 0 }] }, 2, 100);
  assert.deepEqual(moved.edit.state.camera.position.keyframes[0].easing, EASE);
});

test("a Clip range drag that comes back to where it began changes nothing", () => {
  const ctx = ctxOf(studioState(), { upstream: [upstreamLayer()] });
  const drag = startClipDrag(ctx, "sticker_1");
  assert.equal(clipDragChanged(ctx, drag, applyClipDrag(ctx, drag, "move", 0)), false);
  assert.equal(clipDragChanged(ctx, drag, applyClipDrag(ctx, drag, "move", 3)), true);
  const up = startClipDrag(ctx, "upstream:scene_up:sticker_1");
  const edit = applyClipDrag(ctx, up, "start", 4);
  assert.equal(edit.state, ctx.state);
  assert.deepEqual(edit.upstream.scene_up.stickers[0].clip, { start: 4, in: 4, duration: null });
  assert.equal(clipDragChanged(ctx, up, edit), true);
});
