import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { SKY_STICKER_LANES, WORLD_STICKER_LANES, loadSceneState, rebaseSceneState, rebaseUpstreamRecord } from "../web_src/pano_scene_state.js";
import { applyUpstreamOverrides } from "../web_src/pano_scene_inherit.js";

const CASES = ["lanes", "delete", "placement_mismatch", "fps_rebase", "layer_anchor", "chained", "chained_anchor"];
const fixture = (name) => JSON.parse(readFileSync(new URL(`./fixtures/scene_inherit/${name}.json`, import.meta.url), "utf8"));
const record = (raw) => loadSceneState({ version: 2, upstream: [raw] }).upstream[0];
const applyAll = (item) => item.records.map(record).reduce(applyUpstreamOverrides, loadSceneState(item.layer));

test("the fixture records give the expected normalized state", () => {
  for (const name of CASES) {
    const item = fixture(name);
    const result = applyAll(item);
    assert.deepEqual(result, loadSceneState(item.expected), name);
    assert.deepEqual(loadSceneState(result), result, name);
  }
});

test("overridden Lanes replace whole Lanes and the other Lanes follow the layer", () => {
  const item = fixture("lanes");
  const layer = loadSceneState(item.layer);
  const result = applyUpstreamOverrides(layer, record(item.records[0]));
  assert.deepEqual(result.stickers[0].direction.keyframes, [{ frame: 3, value: { yaw_deg: -20, pitch_deg: 5 }, easing: "auto" }]);
  assert.equal(result.stickers[0].roll, layer.stickers[0].roll);
  assert.equal(result.stickers[2], layer.stickers[2]);
});

test("deleted Stickers are removed and the result has no records of its own", () => {
  const result = applyAll(fixture("delete"));
  assert.deepEqual(result.stickers.map((sticker) => sticker.id), ["sticker_1", "sticker_4"]);
  assert.deepEqual(result.upstream, []);
  assert.equal(result.id, "scene_a");
});

test("an override for the other placement does not apply", () => {
  const item = fixture("placement_mismatch");
  const layer = loadSceneState(item.layer);
  assert.equal(applyUpstreamOverrides(layer, record(item.records[0])), layer);
});

test("a record of another fps is rebased to the layer fps", () => {
  const item = fixture("fps_rebase");
  const layer = loadSceneState(item.layer);
  const result = applyAll(item);
  // The overridden Clip range's origin (start - in = 6 at 30 fps) is 4.8 at 24 fps: Keyframes follow its rounding.
  assert.deepEqual(result.stickers[0].clip, { start: 8, in: 3, duration: 16 });
  assert.deepEqual(result.stickers[0].direction.keyframes.map((key) => key.frame), [0, 5]);
  assert.deepEqual(result.stickers[1].rotation.keyframes.map((key) => key.frame), [1, 2, 12]);
  const raw = record(item.records[0]);
  assert.equal(rebaseUpstreamRecord(raw, layer).fps, 24);
  assert.deepEqual(rebaseUpstreamRecord(raw, { ...layer, timeline: { ...layer.timeline, fps: 30 } }), raw);
});

test("Lane Keyframes without a Clip range override are relative to the layer Sticker's origin", () => {
  assert.equal(applyAll(fixture("layer_anchor")).stickers[0].roll.keyframes[0].frame, 3);
  assert.equal(applyAll(fixture("chained_anchor")).stickers[0].roll.keyframes[0].frame, 3);
});

test("Lanes written back unchanged from an editor at the same or a higher fps do not move", () => {
  const layer = loadSceneState({
    version: 2,
    id: "scene_a",
    timeline: { fps: 24 },
    stickers: [
      { id: "sticker_1", placement: "sky", source: { kind: "file", filename: "a.png" }, clip: { start: 8, in: 1 },
        roll: { keyframes: [0, 1, 2, 3, 5, 13, 41].map((frame) => ({ frame, value: frame })) } },
      { id: "sticker_2", placement: "world", source: { kind: "file", filename: "b.png" }, clip: { start: 17, in: 6, duration: 50 },
        opacity: { keyframes: [-3, 0, 1, 7, 11, 100].map((frame) => ({ frame, value: 0.5 })) } },
    ],
  });
  for (const fps of [24, 30000 / 1001, 30, 60, 120, 1000]) {
    const editor = rebaseSceneState(layer, fps);
    const stickers = editor.stickers.map((sticker) => {
      const list = sticker.placement === "world" ? WORLD_STICKER_LANES : SKY_STICKER_LANES;
      return { id: sticker.id, placement: sticker.placement, ...Object.fromEntries(list.map(([name]) => [name, sticker[name]])) };
    });
    assert.deepEqual(applyUpstreamOverrides(layer, record({ layer: "scene_a", fps, stickers })), layer, String(fps));
  }
});

test("the inputs are not changed", () => {
  for (const name of CASES) {
    const item = fixture(name);
    const layer = loadSceneState(item.layer);
    const records = item.records.map(record);
    const before = structuredClone([layer, records]);
    for (const each of records) applyUpstreamOverrides(layer, each);
    assert.deepEqual([layer, records], before, name);
  }
});

test("no record or a record of another layer returns the layer itself", () => {
  const layer = loadSceneState(fixture("lanes").layer);
  assert.equal(applyUpstreamOverrides(layer, null), layer);
  assert.equal(applyUpstreamOverrides(layer, undefined), layer);
  assert.equal(applyUpstreamOverrides(layer, record({ layer: "scene_b", fps: 24, deleted: ["sticker_1"] })), layer);
  assert.equal(applyUpstreamOverrides(layer, record({ layer: "scene_a", fps: 24, deleted: ["sticker_9"] })), layer);
  // A layer without an id (its state was never written) only inherits.
  const unnamed = loadSceneState({ version: 2, stickers: [{ source: { kind: "port" } }] });
  assert.equal(unnamed.id, null);
  assert.equal(applyUpstreamOverrides(unnamed, record({ layer: "scene_a", fps: 24, deleted: ["sticker_1"] })), unnamed);
});

test("chained records apply in order and the later record wins", () => {
  const item = fixture("chained");
  const first = applyUpstreamOverrides(loadSceneState(item.layer), record(item.records[0]));
  assert.equal(first.stickers[0].roll.value, 10);
  const second = applyUpstreamOverrides(first, record(item.records[1]));
  assert.deepEqual(second.stickers[0].roll, { value: 20, keyframes: [{ frame: 10, value: 20, easing: [0.42, 0, 0.58, 1] }] });
  assert.equal(second.stickers[0].opacity.value, 0.5);
});

function deepFreeze(value) {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const child of Object.values(value)) deepFreeze(child);
  }
  return value;
}

test("frozen inputs apply without errors", () => {
  for (const name of CASES) {
    const item = fixture(name);
    const records = item.records.map((raw) => deepFreeze(record(raw)));
    const result = records.reduce((state, each) => applyUpstreamOverrides(deepFreeze(state), each), deepFreeze(loadSceneState(item.layer)));
    assert.deepEqual(result, loadSceneState(item.expected), name);
  }
});
