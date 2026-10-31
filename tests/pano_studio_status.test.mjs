import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import { STUDIO_MAX_OUTPUT_SIDE, createStudioStatus, studioNodeStatus, studioOutputSize, studioRunKey, studioSizeWidgets } from "../web_src/pano_studio_status.js";

const TABLE = JSON.parse(readFileSync(new URL("./fixtures/studio_output_size.json", import.meta.url), "utf8"));

function state(fields = {}) {
  return loadSceneState({ version: 2, ...fields });
}

const frame = (aspect, fields = {}) => state({ camera: { aspect, ...fields } });
const panorama = (fields = {}) => state({ camera: { projection: "erp", ...fields } });
const SIZE = { megapixels: 2, multiple: 8 };

// The same cases test_studio_status_parity.py holds the run to.
test("the output size is the fixture's (ADR 0048)", () => {
  assert.equal(STUDIO_MAX_OUTPUT_SIDE, TABLE.max_side);
  for (const { name, state: raw, megapixels, multiple, width, height, reduced_from: reducedFrom } of TABLE.cases) {
    assert.deepEqual(studioOutputSize(loadSceneState(raw), megapixels, multiple), { width, height, reducedFrom }, name);
  }
});

test("the node status names how the Camera shoots and the size it gives", () => {
  assert.deepEqual(studioNodeStatus(state(), SIZE), { mode: "panorama", shot: "Panorama 360°", size: "2048 × 1024", ratio: 2, cap: "" });
  assert.deepEqual(studioNodeStatus(panorama({ erp_range: 180 }), SIZE), { mode: "panorama", shot: "Panorama 180°", size: "1448 × 1448", ratio: 1, cap: "" });
  assert.deepEqual(studioNodeStatus(frame(16 / 9), SIZE), { mode: "frame", shot: "Frame 16:9", size: "1928 × 1088", ratio: 1928 / 1088, cap: "" });
  // A hidden Camera still shoots (ADR 0048).
  assert.deepEqual(studioNodeStatus(panorama({ visible: false }), SIZE), { mode: "panorama", shot: "Panorama 360°", size: "2048 × 1024", ratio: 2, cap: "" });
});

test("a Frame names the preset within 1% of its aspect, else the size's W:H", () => {
  const shot = (aspect) => studioNodeStatus(frame(aspect), SIZE).shot;
  const sized = (aspect) => {
    const { width, height } = studioOutputSize(frame(aspect), 2, 8);
    return `Frame ${width}:${height}`;
  };
  assert.equal(shot(1), "Frame 1:1");
  assert.equal(shot(4 / 3), "Frame 4:3");
  assert.equal(shot(3 / 2), "Frame 3:2");
  assert.equal(shot(3 / 4), "Frame 3:4");
  assert.equal(shot(2 / 3), "Frame 2:3");
  assert.equal(shot(9 / 16), "Frame 9:16");
  assert.equal(shot((16 / 9) * 1.0099), "Frame 16:9");
  assert.equal(shot((16 / 9) * 0.9901), "Frame 16:9");
  assert.equal(shot(2.39), sized(2.39));
  assert.equal(shot((16 / 9) * 1.0101), sized((16 / 9) * 1.0101));
});

test("a size brought under the cap says so in the size's tooltip", () => {
  assert.deepEqual(studioNodeStatus(frame(5), { megapixels: 16, multiple: 8 }),
    { mode: "frame", shot: "Frame 8192:1640", size: "8192 × 1640", ratio: 8192 / 1640, cap: `Capped at ${STUDIO_MAX_OUTPUT_SIDE} (9160 × 1832)` });
});

test("the size of a run whose inputs are unchanged wins over the estimate", () => {
  const stateText = "{}";
  const options = { stateText, megapixels: 2, multiple: 8, backgroundRange: 360, backgroundColor: "#00ff00" };
  const run = { width: 512, height: 256, capped: false, reduced_from: null, key: studioRunKey(stateText, 2, 8, "360", "#00ff00") };

  assert.deepEqual(studioNodeStatus(state(), { ...options, run }), { mode: "panorama", shot: "Panorama 360°", size: "512 × 256", ratio: 2, cap: "" });
  assert.deepEqual(studioNodeStatus(state(), { ...options, run: { ...run, capped: true, reduced_from: [9160, 1832] } }),
    { mode: "panorama", shot: "Panorama 360°", size: "512 × 256", ratio: 2, cap: `Capped at ${STUDIO_MAX_OUTPUT_SIDE} (9160 × 1832)` });
  // Edited since the run: the estimate from the state and the widgets.
  const estimate = studioNodeStatus(state(), options);
  assert.equal(estimate.size, "2048 × 1024");
  for (const edit of [{ stateText: "{ }" }, { megapixels: 1 }, { multiple: 16 }, { backgroundRange: 180 }, { backgroundColor: "#ff0000" }]) {
    assert.deepEqual(studioNodeStatus(state(), { ...options, ...edit, run }), studioNodeStatus(state(), { ...options, ...edit }), JSON.stringify(edit));
  }
});

test("the run key is made from the state text and the four widgets", () => {
  const key = studioRunKey("{}", 2, 8, "360", "#00ff00");
  assert.match(key, /^[0-9a-f]{8}$/);
  assert.equal(studioRunKey("{}", "2", 8, 360, "#00ff00"), key);
  for (const other of [["{ }", 2, 8, "360", "#00ff00"], ["{}", 2.1, 8, "360", "#00ff00"], ["{}", 2, 12, "360", "#00ff00"], ["{}", 2, 8, "180", "#00ff00"], ["{}", 2, 8, "360", "#00ff01"]]) {
    assert.notEqual(studioRunKey(...other), key, JSON.stringify(other));
  }
});

test("the status is worked out again only when its inputs change", () => {
  let loads = 0;
  const status = createStudioStatus();
  const load = () => {
    loads += 1;
    return state();
  };
  const options = { stateText: "{}", megapixels: 0.5, multiple: 8, backgroundRange: 360, backgroundColor: "", run: null };

  assert.deepEqual(status(options, load), { mode: "panorama", shot: "Panorama 360°", size: "1024 × 512", ratio: 2, cap: "" });
  assert.equal(status({ ...options }, load), null);
  assert.equal(loads, 1);
  assert.deepEqual(status({ ...options, megapixels: 2 }, load), { mode: "panorama", shot: "Panorama 360°", size: "2048 × 1024", ratio: 2, cap: "" });
  assert.notEqual(status({ ...options, megapixels: 2, multiple: 16 }, load), null);
  assert.notEqual(status({ ...options, megapixels: 2, multiple: 16, backgroundRange: 180 }, load), null);
  assert.equal(loads, 4);
});

test("the size widgets are read as numbers, the node's defaults (2 megapixels, multiples of 8) standing in for a missing one", () => {
  const widgets = { megapixels: "1.5", multiple: 16 };
  assert.deepEqual(studioSizeWidgets((name) => widgets[name]), { megapixels: 1.5, multiple: 16 });
  assert.deepEqual(studioSizeWidgets(() => undefined), { megapixels: 2, multiple: 8 });
});

test("the editor's line is the node surface's line of the estimate: a last run's size does not count", () => {
  const options = { stateText: "{}", megapixels: 2, multiple: 8, backgroundRange: 360, backgroundColor: "" };
  const run = { key: studioRunKey("{}", 2, 8, "360", ""), width: 512, height: 256, reduced_from: null };
  assert.equal(studioNodeStatus(state(), { ...options, run }).size, "512 × 256");
  // What the editor passes: the widgets only.
  assert.deepEqual(studioNodeStatus(state(), { megapixels: 2, multiple: 8 }), { mode: "panorama", shot: "Panorama 360°", size: "2048 × 1024", ratio: 2, cap: "" });
});
