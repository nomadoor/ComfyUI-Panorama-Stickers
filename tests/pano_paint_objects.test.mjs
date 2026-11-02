// The paint objects' turn on the paint plane (web_src/pano_paint_objects.js; docs/render-contract.md "ペイントのラスタの
// 置き方"): a stroke's points and a raster object's frame and hits turn on the plane that measures longitude and latitude
// in the same degrees, as the raster object is drawn (pano_paint_display.js placeRasterObjectErp).
import assert from "node:assert/strict";
import test from "node:test";

import {
  rasterObjectAlphaAt, rasterObjectCornersUv, transformErpPointAround, transformStrokeGroup,
} from "../web_src/pano_paint_objects.js";

const near = (actual, expected, label) => assert.ok(Math.abs(actual - expected) < 1e-9, `${label}: ${actual} vs ${expected}`);

test("a quarter turn keeps a stroke's shape on the 2:1 ERP: 0.1 of u right of the center goes 0.2 of v down", () => {
  const center = { u: 0.5, v: 0.5 };
  const turned = transformErpPointAround({ u: 0.6, v: 0.5 }, center, 1, 90);
  near(turned.u, 0.5, "u");
  near(turned.v, 0.7, "v");
  const back = transformErpPointAround({ u: 0.5, v: 0.7 }, center, 1, -90);
  near(back.u, 0.6, "u back");
  near(back.v, 0.5, "v back");
  // A stroke's point stays on the ERP: past the pole it lies on the pole's line.
  assert.equal(transformErpPointAround({ u: 0.5, v: 0.1 }, { u: 0.4, v: 0.1 }, 1, -90).v, 0);
});

test("the points are mapped at any scale; only a stroke group's scale stops at 0.02", () => {
  const center = { u: 0.5, v: 0.5 };
  near(transformErpPointAround({ u: 0.6, v: 0.5 }, center, 0.01, 0).u, 0.501, "scale 0.01");
  const point = { u: 0.6, v: 0.5 };
  const strokes = [{ id: "s1", actionGroupId: "g1", geometry: { points: [point] } }];
  assert.equal(transformStrokeGroup(strokes, "g1", 0.001, 0, null, center), true);
  near(strokes[0].geometry.points[0].u, 0.502, "a stroke group scaled by 0.02");
});

test("a turned raster object is hit inside the frame its corners draw", () => {
  const item = { bbox: { u0: 0.4, v0: 0.3, u1: 0.5, v1: 0.5 }, transform: { du: 0.05, dv: 0, rot_deg: 30, scale: 1.5 } };
  const corners = rasterObjectCornersUv(item);
  const middle = { u: corners.reduce((sum, c) => sum + c.u, 0) / 4, v: corners.reduce((sum, c) => sum + c.v, 0) / 4 };
  const read = [];
  const alphaAt = (u, v) => {
    read.push([u, v]);
    return 255;
  };
  const want = [[0, 0], [1, 0], [1, 1], [0, 1]];
  corners.forEach((corner, index) => {
    // A hundredth of the way from the corner to the middle: half a hundredth across the box.
    const inside = { u: corner.u + (middle.u - corner.u) * 0.01, v: corner.v + (middle.v - corner.v) * 0.01 };
    assert.equal(rasterObjectAlphaAt(item, inside, alphaAt), 255, `corner ${index}`);
    const [u, v] = read.at(-1);
    assert.ok(Math.abs(u - (want[index][0] * 0.99 + 0.005)) < 1e-9 && Math.abs(v - (want[index][1] * 0.99 + 0.005)) < 1e-9, `corner ${index}: ${u}, ${v}`);
    const outside = { u: corner.u - (middle.u - corner.u) * 0.01, v: corner.v - (middle.v - corner.v) * 0.01 };
    assert.equal(rasterObjectAlphaAt(item, outside, alphaAt), 0, `outside corner ${index}`);
  });
});
