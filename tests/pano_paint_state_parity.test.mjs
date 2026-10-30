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

const numbers = JSON.parse(readFileSync(new URL("./fixtures/painting_numbers.json", import.meta.url), "utf8"));

function numbersCasePainting(item) {
  const [painting, pick] = numbersCasePatched(item);
  const [first] = pick(painting);
  const targets = { stroke: first, raster: first, bbox: first.bbox, transform: first.transform, point: first.geometry?.points[0], color: first.color };
  for (const [name, keys] of Object.entries(item.drop ?? {})) for (const key of keys) delete targets[name][key];
  return [painting, pick];
}

function numbersCasePatched(item) {
  const drop = item.drop ?? {};
  if (["raster", "bbox", "transform"].some((part) => part in item || part in drop)) {
    const raster = { ...numbers.raster, ...item.raster };
    raster.bbox = { ...raster.bbox, ...item.bbox };
    raster.transform = { ...raster.transform, ...item.transform };
    return [{ raster_objects: [raster] }, (out) => out.raster_objects];
  }
  const stroke = { ...numbers.stroke, ...item.stroke };
  stroke.color = { ...stroke.color, ...item.color };
  const points = stroke.geometry.points.map((point) => ({ ...point }));
  Object.assign(points[0], item.point);
  stroke.geometry = { ...stroke.geometry, points };
  return [{ paint: { strokes: [stroke] } }, (out) => out.paint.strokes];
}

for (const [name, item] of Object.entries(numbers.cases)) {
  test(`painting numbers: ${name}`, () => {
    const [painting, pick] = numbersCasePainting(item);
    const items = pick(normalizePaintingState(painting));
    if (item.expected === null) {
      assert.deepEqual(items, []);
      return;
    }
    assert.equal(items.length, 1);
    const actual = Object.fromEntries(Object.keys(item.expected).map((key) => [key, key === "point" ? items[0].geometry.points[0] : items[0][key]]));
    assert.deepEqual(actual, item.expected);
  });
}
