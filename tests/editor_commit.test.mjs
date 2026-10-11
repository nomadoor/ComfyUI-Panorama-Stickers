import assert from "node:assert/strict";
import test from "node:test";

import { createCommit } from "../web_src/editor/commit.js";
import { loadSceneState, sceneStateText } from "../web_src/pano_scene_state.js";

const noop = () => {};

// The editor's commit module on Panorama Studio's node, whose state widget holds `text`. `stored` gives the
// state the node keeps for the working one (the port Sticker without the Pose handoff shown, ADR 0030).
function studioCommit(text, { readOnly = false, stored = (working) => working } = {}) {
  const state = { ...loadSceneState(text), active: { selected_sticker_id: null, selected_shot_id: null } };
  const written = [];
  const widget = { value: text, callback: (value) => written.push(value) };
  const node = { __panoSceneStateV2: true, properties: {}, setDirtyCanvas: noop };
  const commit = createCommit({ app: null, bgWidget: null, cameraV2: true, coverageWidget: null, node, presetWidget: null, readOnly, state, stateWidget: widget });
  commit.connect({
    needsPaintingLayerSync: () => false, resolveEditorOutputPresetWidth: (value) => value, storedEditorState: () => stored(state),
    syncCutoutShot: noop, syncPaintingLayerAsync: noop, syncPortHandoff: noop, syncUpstreamEdits: noop,
  });
  return { state, widget, written, node, commit };
}

const STICKERS = [{ id: "sticker_1", source: { kind: "port" } }, { id: "sticker_2", source: { kind: "file", filename: "a.png" } }];

test("commitState writes nothing while the widget's text already means the state", () => {
  // The same state in another form, and the empty default, are not written over.
  for (const text of [JSON.stringify({ version: 2, id: "scene_a", stickers: STICKERS }), ""]) {
    const { widget, written, commit } = studioCommit(text);
    commit.commitState();
    assert.deepEqual([widget.value, written], [text, []]);
  }
});

test("commitState writes the state as the node keeps it, and once per change", () => {
  const text = sceneStateText(loadSceneState({ version: 2, id: "scene_a", stickers: STICKERS }));
  // The port Sticker's stored roll, not the one shown with the handoff.
  const stored = (working) => ({ ...working, stickers: working.stickers.map((item) => (item.id === "sticker_1" ? { ...item, roll: { value: 0, keyframes: [] } } : item)) });
  const { state, widget, written, node, commit } = studioCommit(text, { stored });
  state.stickers[0].roll.value = 45;
  commit.commitState();
  assert.deepEqual(written, []);

  state.stickers[1].opacity.value = 0.25;
  state.active.selected_sticker_id = "sticker_2";
  commit.commitState();
  commit.commitState();

  assert.equal(written.length, 1);
  assert.equal(widget.value, written[0]);
  const saved = loadSceneState(widget.value);
  assert.deepEqual([saved.id, saved.stickers[0].roll.value, saved.stickers[1].opacity.value], ["scene_a", 0, 0.25]);
  // The selection goes to the node's property, not into state_json.
  assert.equal(JSON.parse(widget.value).active, undefined);
  assert.deepEqual(node.properties.pano_editor_active, { selected_sticker_id: "sticker_2", selected_shot_id: null });
});

test("the first write gives a state without a Scene id one, which the working state keeps", () => {
  const { state, widget, commit } = studioCommit("", { stored: (working) => structuredClone(working) });
  state.stickers.push(...loadSceneState({ version: 2, stickers: STICKERS }).stickers);
  commit.commitState();

  const { id } = JSON.parse(widget.value);
  assert.match(id, /^[A-Za-z0-9_-]{16}$/);
  assert.equal(state.id, id);
  state.stickers[1].opacity.value = 0.5;
  commit.commitState();
  assert.equal(JSON.parse(widget.value).id, id);
});

test("a read-only editor writes nothing", () => {
  const { state, widget, written, commit } = studioCommit("", { readOnly: true });
  state.timeline.fps = 30;
  commit.commitState();
  commit.commitAndRefreshNode();
  assert.deepEqual([widget.value, written], ["", []]);
});
