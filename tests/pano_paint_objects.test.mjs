// The paint objects' turn on the paint plane (web_src/pano_paint_objects.js; docs/render-contract.md "ペイントのラスタの
// 置き方"): a stroke's points and a raster object's frame and hits turn on the plane that measures longitude and latitude
// in the same degrees, as the raster object is drawn (pano_paint_display.js placeRasterObjectErp).
import assert from "node:assert/strict";
import test from "node:test";

import {
  frameCornersUv, rasterObjectAlphaAt, rasterObjectCornersUv, rotateRasterObject, transformErpPointAround, transformStrokeGroup,
  turnStrokeGroup,
} from "../web_src/pano_paint_objects.js";
import { turnPaintOffset } from "../web_src/pano_paint_display.js";
import { normalizePaintingState } from "../web_src/pano_paint_types.js";

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

test("a raster object turns by the pointer's turn from where it was grabbed, unwrapped; a snap stops the angle it reaches", () => {
  const grabbed = { transform: { du: 0.1, dv: 0, rot_deg: 170, scale: 2 } };
  const item = structuredClone(grabbed);
  assert.equal(rotateRasterObject(item, 25, { snapshot: grabbed }), true);
  assert.deepEqual(item.transform, { du: 0.1, dv: 0, rot_deg: 195, scale: 2 });
  rotateRasterObject(item, 37, { snapshot: grabbed, snapDeg: 15 });
  assert.equal(item.transform.rot_deg, 210);
  const bare = {};
  rotateRasterObject(bare, -10);
  assert.deepEqual(bare.transform, { du: 0, dv: 0, rot_deg: -10, scale: 1 });
});

test("a group's rot_deg is read as a finite JSON number, else 0 (old states have none)", () => {
  const { groups } = normalizePaintingState({ groups: [
    { id: "a", actionGroupId: "a", rot_deg: 397.5 },
    { id: "b", actionGroupId: "b" },
    { id: "c", actionGroupId: "c", rot_deg: "30" },
    { id: "d", actionGroupId: "d", rot_deg: null },
  ] });
  assert.deepEqual(groups.map((group) => group.rot_deg), [397.5, 0, 0, 0]);
});

test("a stroke group's frame corners turn with its rot_deg about its center on the paint plane", () => {
  const frame = { centerUv: { u: 0.5, v: 0.5 }, rot_deg: 30, halfW: 0.1, halfH: 0.05 };
  const corners = frameCornersUv(frame);
  [[-0.1, -0.05], [0.1, -0.05], [0.1, 0.05], [-0.1, 0.05]].forEach(([du, dv], index) => {
    const [tu, tv] = turnPaintOffset(du, dv, 1, 30);
    assert.ok(Math.abs(corners[index].u - (0.5 + tu)) < 1e-12 && Math.abs(corners[index].v - (0.5 + tv)) < 1e-12, `corner ${index}`);
  });
});

test("turning a stroke group adds to its rot_deg and turns its points by what the angle changed; a snap stops the angle", () => {
  const painting = () => ({
    groups: [{ id: "g1", actionGroupId: "g1", z_index: 0, rot_deg: 10 }],
    paint: { strokes: [{ id: "s1", actionGroupId: "g1", geometry: { points: [{ u: 0.6, v: 0.5 }] } }] },
  });
  const center = { u: 0.5, v: 0.5 };
  let draft = painting();
  assert.equal(turnStrokeGroup(draft, "g1", 25, center), true);
  assert.equal(draft.groups[0].rot_deg, 35);
  let want = transformErpPointAround({ u: 0.6, v: 0.5 }, center, 1, 25);
  near(draft.paint.strokes[0].geometry.points[0].u, want.u, "u");
  near(draft.paint.strokes[0].geometry.points[0].v, want.v, "v");
  draft = painting();
  turnStrokeGroup(draft, "g1", 25, center, { snapDeg: 15 });
  assert.equal(draft.groups[0].rot_deg, 30);
  want = transformErpPointAround({ u: 0.6, v: 0.5 }, center, 1, 20);
  near(draft.paint.strokes[0].geometry.points[0].u, want.u, "snapped u");
});
