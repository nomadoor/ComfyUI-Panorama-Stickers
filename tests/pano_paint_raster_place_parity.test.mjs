// Where a paint raster object lies on an ERP (docs/render-contract.md "ペイントのラスタの置き方"): the editor places it,
// frames it and finds the pixels it covers as the node does, for the cases of tests/fixtures/paint_raster_place.json
// (Python: tests/test_paint_raster_place_parity.py).
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { placeRasterObjectErp, rasterObjectPixelRanges } from "../web_src/pano_paint_display.js";
import { rasterObjectCornersUv } from "../web_src/pano_paint_objects.js";

const { cases } = JSON.parse(readFileSync(new URL("./fixtures/paint_raster_place.json", import.meta.url), "utf8"));
const near = (actual, expected, label) => assert.ok(Math.abs(actual - expected) <= 1e-4, `${label}: ${actual} vs ${expected}`);

for (const [name, { item, width, height, placement, corners, ranges }] of Object.entries(cases)) {
  test(`raster object placement: ${name}`, () => {
    const placed = placeRasterObjectErp(item, width, height);
    for (const key of ["centerX", "centerY", "width", "height", "rotationDeg", "scale"]) near(placed[key], placement[key], key);
    placement.matrix.forEach((value, index) => near(placed.matrix[index], value, `matrix[${index}]`));
    const framed = rasterObjectCornersUv(item);
    assert.equal(framed.length, 4);
    corners.forEach(([u, v], index) => {
      near(framed[index].u, u, `corner ${index} u`);
      near(framed[index].v, v, `corner ${index} v`);
    });
    assert.deepEqual(rasterObjectPixelRanges(item, width, height).map(({ x0, y0, x1, y1 }) => [x0, y0, x1, y1]), ranges);
  });
}
