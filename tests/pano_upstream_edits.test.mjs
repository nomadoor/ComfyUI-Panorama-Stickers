// The write-back of the upstream working copies' edits as the node's `upstream` records, shared by the old and the
// new editor (web_src/pano_upstream_edits.js, docs/studio-ui.md "上流の物の編集" "書き戻し").
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { setStickerPose } from "../web_src/pano_editor_state.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { createUpstreamEdits } from "../web_src/pano_upstream_edits.js";
import { createUpstreamLayers } from "../web_src/pano_upstream_layers.js";

globalThis.Image ??= class {};

const fixture = JSON.parse(readFileSync(new URL("./fixtures/scene_inherit/editor_working.json", import.meta.url), "utf8"));

// The fixture's own state with its records, the upstream layers of its result and the edits over them. `writes`
// counts setRecords.
function setup({ list = fixture.layers.map((state) => ({ state, ui: {} })) } = {}) {
  const box = { state: loadSceneState(fixture.own), writes: 0 };
  const layers = createUpstreamLayers({
    list: () => list,
    fps: () => box.state.timeline.fps,
    records: () => box.state.upstream,
    mediaSource: () => "",
    mediaAssetSource: () => "",
    revisionOf: () => "",
    paintTarget: () => ({ width: 2, height: 1 }),
    playing: () => false,
    onRebuild: (working) => edits.rebuilt(working),
  });
  const edits = createUpstreamEdits({
    records: () => box.state.upstream,
    setRecords: (records) => {
      box.writes += 1;
      box.state = { ...box.state, upstream: records };
    },
    layers,
    fps: () => box.state.timeline.fps,
  });
  const sticker = (id) => layers.entries().flatMap((entry) => entry.working.sceneState.stickers).find((item) => item.id === id);
  return { box, edits, layers, sticker };
}

test("an edit of a working copy is written back once, and nothing without one", () => {
  const { box, edits, sticker } = setup();
  assert.equal(edits.sync(), false, "opened only: nothing is written");
  assert.equal(box.writes, 0);
  setStickerPose(sticker("upstream:scene_a:sticker_1"), 10, { rot_deg: 12 });
  assert.equal(edits.sync(), true);
  const override = box.state.upstream.find((item) => item.layer === "scene_a").stickers.find((item) => item.id === "sticker_1");
  assert.ok(override.roll, "the edited Lane goes into the layer's record");
  assert.equal(edits.sync(), false, "written back once: the baseline follows");
  assert.equal(box.writes, 1);
});

test("a record change writes the edits back first and makes the working copies again from the records", () => {
  const { box, edits, sticker } = setup();
  sticker("upstream:scene_a:sticker_3").locked = true;
  assert.equal(edits.deleteStickers([sticker("upstream:scene_a:sticker_1")]), true);
  const record = box.state.upstream.find((item) => item.layer === "scene_a");
  assert.deepEqual(record.deleted, ["sticker_2", "sticker_1"]);
  assert.equal(record.stickers.find((item) => item.id === "sticker_3").locked, true, "the edit before it was kept");
  assert.equal(sticker("upstream:scene_a:sticker_1"), undefined, "the working copies follow the records");
  assert.equal(edits.restoreDeleted("scene_a"), true);
  assert.ok(sticker("upstream:scene_a:sticker_1"));
  assert.equal(edits.restoreDeleted("scene_a"), false, "nothing more to restore");
});

test("a revert puts the upstream value in the working copy and the next write-back writes nothing", () => {
  const { box, edits, sticker } = setup();
  assert.equal(edits.revertSticker(sticker("upstream:scene_a:sticker_1"), "direction"), true);
  assert.equal(sticker("upstream:scene_a:sticker_1").direction.value.yaw_deg, 10, "the upstream value");
  const writes = box.writes;
  assert.equal(edits.sync(), false);
  assert.equal(edits.prune(), false);
  assert.equal(box.writes, writes);
  assert.equal(edits.revertLayer("scene_a"), true);
  assert.equal(edits.revertLayer("scene_a"), false);
});

test("the pruning drops the overrides of elements no longer in their layers, only while the result is there", () => {
  const layersWithout = fixture.layers.map((state) => (state.id === "scene_a" ? { ...state, stickers: state.stickers.filter((item) => item.id !== "sticker_3") } : state));
  const { box, edits } = setup({ list: layersWithout.map((state) => ({ state, ui: {} })) });
  assert.equal(edits.prune(), true);
  assert.deepEqual(box.state.upstream.find((item) => item.layer === "scene_a").stickers.map((item) => item.id), ["sticker_1"]);
  assert.equal(setup({ list: null }).edits.prune(), false);
});
