// How a paint stroke is drawn on the sphere (docs/render-contract.md "ペイントのストロークの描き方"): the path the editor
// walks and a stamp's horizontal radius, as the node has them, for the cases of tests/fixtures/paint_stroke_sphere.json
// (Python: tests/test_paint_stroke_sphere_parity.py).
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { stampHalfWidthPx, strokeErpPath } from "../web_src/pano_paint_sphere.js";

const { paths, widths } = JSON.parse(readFileSync(new URL("./fixtures/paint_stroke_sphere.json", import.meta.url), "utf8"));
const near = (actual, expected, label) => assert.ok(Math.abs(actual - expected) <= 1e-6, `${label}: ${actual} vs ${expected}`);

for (const [name, { points, radius_px: radius, width, height, path }] of Object.entries(paths)) {
  test(`stroke path on the sphere: ${name}`, () => {
    const out = strokeErpPath(points.map(([u, v], index) => ({ u, v, t: index })), radius, width, height);
    assert.equal(out.length, path.length);
    out.forEach((point, index) => {
      near(point.u, path[index][0], `u ${index}`);
      near(point.v, path[index][1], `v ${index}`);
    });
  });
}

for (const [name, { rv, aspect, width, rows }] of Object.entries(widths)) {
  test(`stamp half width on the sphere: ${name}`, () => {
    for (const [v, rh] of rows) near(stampHalfWidthPx(rv, aspect, v, width), rh, `v ${v}`);
  });
}
