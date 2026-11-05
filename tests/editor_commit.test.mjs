import assert from "node:assert/strict";
import test from "node:test";

import { createCommit } from "../web_src/editor/commit.js";

const noop = () => {};

// The old editor's commit module on a legacy Stickers node (state v1), whose state widget holds `text`.
function legacyCommit(state, { readOnly = false, text = JSON.stringify(state) } = {}) {
  const written = [];
  const widget = { value: text, callback: (value) => written.push(value) };
  const node = { properties: {}, setDirtyCanvas: noop };
  const commit = createCommit({ app: null, bgWidget: null, coverageWidget: null, node, presetWidget: null, readOnly, state, stateWidget: widget });
  commit.connect({ needsPaintingLayerSync: () => false, resolveEditorOutputPresetWidth: (value) => value, syncPaintingLayerAsync: noop });
  return { widget, written, commit };
}

const v1 = () => ({ stickers: [{ id: "st_1", asset_id: "a", yaw_deg: 0 }], assets: {}, coverage: 360, active: { selected_sticker_id: null, selected_shot_id: null } });

test("commitState writes nothing while the widget's text already means the state, and once per change", () => {
  const state = v1();
  const { widget, written, commit } = legacyCommit(state);
  commit.commitState();
  assert.deepEqual(written, []);
  state.stickers[0].yaw_deg = 45;
  commit.commitState();
  commit.commitState();
  assert.equal(written.length, 1);
  assert.equal(widget.value, written[0]);
  assert.equal(JSON.parse(widget.value).stickers[0].yaw_deg, 45);
});

test("a read-only editor writes nothing", () => {
  const state = v1();
  const { widget, written, commit } = legacyCommit(state, { readOnly: true, text: "" });
  state.stickers[0].yaw_deg = 45;
  commit.commitState();
  commit.commitAndRefreshNode();
  assert.deepEqual([widget.value, written], ["", []]);
});
