// The editor reads `painting` as Python does, for the cases of tests/fixtures/painting_normalize.json
// (Python: tests/test_paint_state_parity.py).
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { normalizePaintingState } from "../web_src/pano_paint_types.js";

const { cases } = JSON.parse(readFileSync(new URL("./fixtures/painting_normalize.json", import.meta.url), "utf8"));

for (const [name, { painting, expected }] of Object.entries(cases)) {
  test(`painting version and z_index: ${name}`, () => {
    const out = normalizePaintingState(painting);
    assert.equal(out.version, expected.version);
    assert.deepEqual(out.groups.map((group) => group.z_index), expected.group_z_index);
    assert.deepEqual(out.raster_objects.map((item) => item.z_index), expected.raster_z_index ?? []);
  });
}

const brush = JSON.parse(readFileSync(new URL("./fixtures/paint_stroke_brush.json", import.meta.url), "utf8"));

for (const [name, { brush: values, expected }] of Object.entries(brush.cases)) {
  test(`stroke brush values: ${name}`, () => {
    const stroke = { ...brush.stroke, ...values };
    const out = normalizePaintingState({ [stroke.layerKind]: { strokes: [stroke] } });
    assert.equal(out[stroke.layerKind].strokes.length, 1);
    const [kept] = out[stroke.layerKind].strokes;
    assert.deepEqual(Object.fromEntries(brush.brush_keys.filter((key) => key in kept).map((key) => [key, kept[key]])), expected);
  });
}
