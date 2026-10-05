import assert from "node:assert/strict";
import test from "node:test";

import { HISTORY_LIMIT, createEditorHistory, historySnapshot, savedSelectionId } from "../web_src/editor/history.js";

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

test("Undo restores the selection the editor of each type keeps: the Sticker, or the Cutout's shot", () => {
  const state = { active: { selected_sticker_id: "sticker", selected_shot_id: "shot" } };
  assert.equal(savedSelectionId("stickers", state), "sticker");
  assert.equal(savedSelectionId("cutout", state), "shot");
  assert.equal(savedSelectionId("cutout", { active: { selected_sticker_id: "sticker", selected_shot_id: null } }), null);
  assert.equal(savedSelectionId("stickers", {}), null);
});
