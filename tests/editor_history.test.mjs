import assert from "node:assert/strict";
import test from "node:test";

import { HISTORY_LIMIT, createEditorHistory, createHistory, historySnapshot, savedSelectionId } from "../web_src/editor/history.js";
import { createHistoryController } from "../web_src/pano_paint_history.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";

test("a snapshot is the state without its history and painting layer", () => {
  const state = { version: 2, stickers: [{ id: "a" }], editor_history: { entries: [] }, painting_layer: { revision: "r" } };
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

// The editor's history module over a Panorama Studio state, with its Undo history.
function editorHistory({ readOnly = false, uploading = () => false } = {}) {
  const noop = () => {};
  const state = { ...loadSceneState({ version: 2, camera: {}, stickers: [{ id: "a", source: { kind: "port" } }, { id: "b", source: { kind: "file", filename: "b.png" } }] }), active: { selected_sticker_id: "a", selected_shot_id: null } };
  const editor = { frame: 0, historyController: createEditorHistory(state), selectedId: "a", selectedIds: ["a"] };
  const calls = { commits: 0, buttons: 0, cleared: 0 };
  // The state the node keeps differs from the working one only by what syncPortHandoff writes back.
  let stored = (working) => working;
  const history = createHistory({ editor, readOnly, runtime: {}, state, stateV2: true, studio: true, type: "stickers" });
  history.connect({
    cancelLiveEdits: () => false,
    clearWorldSelection: () => { calls.cleared += 1; }, commitState: () => { calls.commits += 1; },
    getActiveCutoutShot: () => (state.camera ? { id: "camera" } : null), isUploadingSticker: uploading,
    markObjectVisualsDirty: noop, markPaintStrokeVisualsDirty: noop, playback: { seek: noop }, pruneUpstreamRecords: noop,
    rebuildUpstreamWorking: noop, releaseHiddenSelection: noop, requestDraw: noop, stopTimelinePlayback: noop,
    storedEditorState: () => stored(state), syncCutoutShot: noop, syncPaintUi: noop, syncPortHandoff: noop,
    syncUndoRedoButtons: () => { calls.buttons += 1; }, syncUpstreamEdits: noop, updateSidePanel: noop,
  });
  return { state, editor, history, calls, setStored: (fn) => { stored = fn; } };
}

test("pushHistory records the state as the node keeps it, and Undo and Redo restore it and its selection", () => {
  const { state, editor, history, calls, setStored } = editorHistory();
  const opened = structuredClone(state);
  state.stickers[1].opacity.value = 0.5;
  state.active.selected_sticker_id = "b";
  // The port Sticker as stored (the handoff's Lanes are not), not as it is shown.
  setStored((working) => ({ ...working, stickers: working.stickers.map((item) => (item.id === "a" ? { ...item, roll: { value: 9, keyframes: [] } } : item)) }));
  history.pushHistory();
  assert.equal(JSON.parse(editor.historyController.entries[1]).stickers[0].roll.value, 9);
  assert.deepEqual(history.getHistoryCapabilities(), { canUndo: true, canRedo: false });

  editor.selectedId = "camera";
  history.restoreHistory(-1);
  assert.deepEqual(state.stickers, opened.stickers);
  assert.deepEqual([editor.selectedId, editor.selectedIds], ["a", ["a"]]);
  assert.deepEqual(history.getHistoryCapabilities(), { canUndo: false, canRedo: true });

  history.restoreHistory(1);
  assert.deepEqual([state.stickers[1].opacity.value, state.stickers[0].roll.value], [0.5, 9]);
  assert.deepEqual([editor.selectedId, editor.selectedIds], ["b", ["b"]]);
  assert.equal(calls.commits, 2);
  // Past the newest step nothing is restored or written.
  history.restoreHistory(1);
  assert.equal(calls.commits, 2);
});

test("Panorama Studio's Camera stays selected when the restored step selects it and no Sticker", () => {
  const { state, editor, history } = editorHistory();
  state.active.selected_sticker_id = null;
  state.active.selected_shot_id = "camera";
  state.camera.fov.value = 60;
  history.pushHistory();
  history.restoreHistory(-1);
  history.restoreHistory(1);
  assert.deepEqual([editor.selectedId, editor.selectedIds], ["camera", ["camera"]]);
});

test("a read-only editor records nothing, and a Sticker still uploading waits for its upload", () => {
  const readOnly = editorHistory({ readOnly: true });
  readOnly.state.stickers[1].opacity.value = 0.5;
  readOnly.history.pushHistory();
  assert.equal(readOnly.editor.historyController.entries.length, 1);

  const uploading = editorHistory({ uploading: (item) => item.id === "b" });
  uploading.state.stickers[1].opacity.value = 0.5;
  uploading.history.pushHistory();
  assert.equal(uploading.editor.historyController.entries.length, 1);
});

// docs/editor-interaction.md「上書きの掃除」: only an edit prunes the upstream records. The steps of opening and of a
// selection change keep them, so selecting writes nothing to state_json.
test("an edit's step prunes the overrides of elements gone upstream; opening and selecting do not", () => {
  const state = { stickers: [], step: 0 };
  const editor = {};
  editor.historyController = createEditorHistory(state);
  const history = createHistory({ editor, readOnly: false, state, stateV2: true });
  let pruned = 0;
  history.connect({
    cancelLiveEdits: () => false,
    isUploadingSticker: () => false, pruneUpstreamRecords: () => { pruned += 1; }, storedEditorState: () => state,
    syncCutoutShot() {}, syncPortHandoff() {},
    syncUndoRedoButtons() {}, syncUpstreamEdits() {},
  });
  history.pushHistory({ initial: true });
  state.step = 1;
  history.pushHistory({ prune: false });
  assert.equal(pruned, 0);
  assert.equal(editor.historyController.entries.length, 2, "the selection's step is kept");
  state.step = 2;
  history.pushHistory();
  assert.equal(pruned, 1);
});
