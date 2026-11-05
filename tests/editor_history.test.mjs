import assert from "node:assert/strict";
import test from "node:test";

import { HISTORY_LIMIT, createEditorHistory, createHistory, historySnapshot, savedSelectionId } from "../web_src/editor/history.js";
import { createHistoryController } from "../web_src/pano_paint_history.js";

test("a snapshot is the state without its painting layer", () => {
  const state = { version: 2, stickers: [{ id: "a" }], painting_layer: { revision: "r" } };
  assert.deepEqual(JSON.parse(historySnapshot(state)), { version: 2, stickers: [{ id: "a" }] });
});

test("an editor's history starts at the state it opens on and keeps the last HISTORY_LIMIT steps", () => {
  const history = createEditorHistory({ step: 0 });
  assert.deepEqual(history.entries, [historySnapshot({ step: 0 })]);
  assert.equal(history.undo(), null);
  for (let step = 1; step <= HISTORY_LIMIT + 5; step += 1) history.commitActionGroup(historySnapshot({ step }));
  assert.equal(history.entries.length, HISTORY_LIMIT);
  assert.equal(JSON.parse(history.entries[0]).step, 6);
  assert.equal(JSON.parse(history.undo()).step, HISTORY_LIMIT + 4);
});

// A state with raster objects, whose PNG data URLs are the large strings a step would otherwise copy.
function rasterState(length) {
  const raster = (letter) => `data:image/png;base64,${letter.repeat(length)}`;
  return {
    version: 2, stickers: [{ id: "a", yaw: { value: 0, keyframes: [] }, label: "pano-history-string:0" }],
    painting: { strokes: [], groups: [], raster_objects: ["A", "B", "C"].map((letter, i) => ({ id: `r${i}`, rasterDataUrl: raster(letter), transform: { du: 0 } })) },
    painting_layer: { revision: "r" },
  };
}

test("Undo and Redo give back a step with raster objects exactly as it was recorded", () => {
  const state = rasterState(4096);
  const history = createEditorHistory(state);
  const opened = historySnapshot(state);
  state.painting.raster_objects[1].rasterDataUrl = `data:image/png;base64,${"D".repeat(4096)}`;
  state.painting.raster_objects[2].transform.du = 0.5;
  history.record(state);
  const edited = historySnapshot(state);
  assert.equal(history.undo(), opened);
  assert.equal(history.redo(), edited);
  assert.deepEqual(history.entries, [opened, edited]);
  // Recording the same state again adds no step.
  history.record(state);
  assert.equal(history.entries.length, 2);
});

test("a large string the steps share is kept once, and goes when no kept step has it", () => {
  const length = 64 * 1024;
  const state = rasterState(length);
  const history = createEditorHistory(state);
  for (let edit = 1; edit <= HISTORY_LIMIT; edit += 1) {
    state.stickers[0].yaw.value = edit;
    history.record(state);
  }
  // Three rasters once each, plus small steps; not three rasters per step.
  assert.ok(history.storedLength < 4 * length, `${history.storedLength}`);
  // New rasters in every step: once the old ones are in no kept step, they are not kept either.
  state.painting.raster_objects.forEach((item) => { item.rasterDataUrl = `data:image/png;base64,${"E".repeat(length)}${item.id}`; });
  for (let edit = 1; edit <= HISTORY_LIMIT; edit += 1) {
    state.stickers[0].yaw.value = -edit;
    history.record(state);
  }
  assert.ok(history.storedLength < 4 * length, `${history.storedLength}`);
});

test("Undo restores the selection the editor of each type keeps: the Sticker, or the Cutout's shot", () => {
  const state = { active: { selected_sticker_id: "sticker", selected_shot_id: "shot" } };
  assert.equal(savedSelectionId("stickers", state), "sticker");
  assert.equal(savedSelectionId("cutout", state), "shot");
  assert.equal(savedSelectionId("cutout", { active: { selected_sticker_id: "sticker", selected_shot_id: null } }), null);
  assert.equal(savedSelectionId("stickers", {}), null);
});

// The step list (pano_paint_history.js) the editor's history is made of.
test("recording a step after Undo drops the steps Redo would have brought back", () => {
  const history = createHistoryController();
  for (const step of ["a", "b", "c"]) history.commitActionGroup(step);
  assert.equal(history.undo(), "b");
  assert.equal(history.undo(), "a");
  history.commitActionGroup("d");
  assert.deepEqual([history.entries, history.index], [["a", "d"], 1]);
  assert.equal(history.redo(), null);
  assert.equal(history.undo(), "a");
});

test("a step the same as the current one is not recorded again", () => {
  const history = createHistoryController();
  history.commitActionGroup("a");
  history.commitActionGroup("a");
  history.commitActionGroup("b");
  history.commitActionGroup("b");
  assert.deepEqual(history.entries, ["a", "b"]);
  // After Undo the current step is "a": recording "a" keeps the Redo step, recording "b" again replaces it.
  history.undo();
  history.commitActionGroup("a");
  assert.deepEqual([history.entries, history.index], [["a", "b"], 0]);
});

test("the step list keeps the last 80 steps by default and Undo stops at the oldest", () => {
  const history = createHistoryController();
  for (let step = 1; step <= 85; step += 1) history.commitActionGroup(String(step));
  assert.equal(history.entries.length, 80);
  assert.equal(history.entries[0], "6");
  let undone = 0;
  while (history.undo() !== null) undone += 1;
  assert.equal(undone, 79);
});

// The editor's history module over a legacy Stickers state (v1), with its Undo history.
function editorHistory({ readOnly = false } = {}) {
  const noop = () => {};
  const state = {
    stickers: [{ id: "a", asset_id: "asset_a", yaw_deg: 0 }, { id: "b", asset_id: "asset_b", yaw_deg: 10 }],
    assets: {},
    active: { selected_sticker_id: "a", selected_shot_id: null },
  };
  const editor = { frame: 0, historyController: createEditorHistory(state), selectedId: "a", selectedIds: ["a"] };
  const calls = { commits: 0, buttons: 0 };
  const history = createHistory({ editor, readOnly, runtime: {}, state, type: "stickers" });
  history.connect({
    cancelLiveEdits: () => false, commitState: () => { calls.commits += 1; }, markObjectVisualsDirty: noop,
    markPaintStrokeVisualsDirty: noop, releaseHiddenSelection: noop, requestDraw: noop, syncPaintUi: noop,
    syncUndoRedoButtons: () => { calls.buttons += 1; }, updateSidePanel: noop,
  });
  return { state, editor, history, calls };
}

test("pushHistory records the state, and Undo and Redo restore it and its selection", () => {
  const { state, editor, history, calls } = editorHistory();
  const opened = structuredClone(state);
  state.stickers[1].yaw_deg = 45;
  state.active.selected_sticker_id = "b";
  history.pushHistory();
  assert.equal(JSON.parse(editor.historyController.entries[1]).stickers[1].yaw_deg, 45);
  assert.deepEqual(history.getHistoryCapabilities(), { canUndo: true, canRedo: false });

  editor.selectedId = "other";
  history.restoreHistory(-1);
  assert.deepEqual(state.stickers, opened.stickers);
  assert.deepEqual([editor.selectedId, editor.selectedIds], ["a", ["a"]]);
  assert.deepEqual(history.getHistoryCapabilities(), { canUndo: false, canRedo: true });

  history.restoreHistory(1);
  assert.equal(state.stickers[1].yaw_deg, 45);
  assert.deepEqual([editor.selectedId, editor.selectedIds], ["b", ["b"]]);
  assert.equal(calls.commits, 2);
  // Past the newest step nothing is restored or written.
  history.restoreHistory(1);
  assert.equal(calls.commits, 2);
});

test("a read-only editor records nothing", () => {
  const readOnly = editorHistory({ readOnly: true });
  readOnly.state.stickers[1].yaw_deg = 45;
  readOnly.history.pushHistory();
  assert.equal(readOnly.editor.historyController.entries.length, 1);
});

// docs/editor-interaction.md「ポインタの取り消しとフォーカスの喪失」: Undo cancels a pointer's edit under way before it
// changes anything (a run's result: tests/editor_media_session_inputs.test.mjs).
test("Undo cancels a pointer's edit under way first", () => {
  const order = [];
  const { state, history } = editorHistory();
  history.connect({
    cancelLiveEdits: () => { order.push(`cancel ${state.stickers[1].yaw_deg}`); return false; }, commitState() {},
    markObjectVisualsDirty() {}, markPaintStrokeVisualsDirty() {}, releaseHiddenSelection() {}, requestDraw() {},
    syncPaintUi() {}, syncUndoRedoButtons() {}, updateSidePanel() {},
  });
  state.stickers[1].yaw_deg = 45;
  history.pushHistory();
  history.restoreHistory(-1);
  assert.deepEqual(order, ["cancel 45"], "on the state it then restores from");
});
