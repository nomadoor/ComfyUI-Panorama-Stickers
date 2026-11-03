// The paint objects' turns (web_src/pano_paint_objects.js): a stroke group turns and scales on the sphere, about the
// direction of its center, as a sky image does (docs/studio-ui.md "ペイントのまとまり"); a raster object's frame and hits
// turn on the plane that measures longitude and latitude in the same degrees, as it is drawn (docs/render-contract.md
// "ペイントのラスタの置き方").
import assert from "node:assert/strict";
import test from "node:test";

import {
  frameCornersUv, rasterObjectAlphaAt, rasterObjectCornersUv, rotateRasterObject, transformStrokeGroup,
  turnErpPointOnSphere, turnStrokeGroup,
} from "../web_src/pano_paint_objects.js";
import { directionOfErpPoint, strokeGroupFrame } from "../web_src/pano_paint_strokes.js";
import { normalizePaintingState } from "../web_src/pano_paint_types.js";

const near = (actual, expected, label, eps = 1e-9) => assert.ok(Math.abs(actual - expected) < eps, `${label}: ${actual} vs ${expected}`);
const dot = (a, b) => a.x * b.x + a.y * b.y + a.z * b.z;
// The point (x, y) of a frame's tangent plane, from its record.
const tangent = (frame, p) => [dot(p, frame.right) / dot(p, frame.center), dot(p, frame.up) / dot(p, frame.center)];
const stroke = (points, id = "s1") => ({ id, actionGroupId: "g1", layerKind: "paint", toolKind: "pen", size: 10, geometry: { geometryKind: "freehand_open", points, rawPoints: points, processedPoints: points } });

test("a point turns about a direction clockwise as seen from inside: right of the center goes down, at the equator and at a pole", () => {
  // Straight ahead (u 0.5): 36° right of it, a quarter turn takes it 36° down.
  const turned = turnErpPointOnSphere({ u: 0.6, v: 0.5, t: 3 }, directionOfErpPoint({ u: 0.5, v: 0.5 }), 90);
  near(turned.u, 0.5, "u");
  near(turned.v, 0.7, "v");
  assert.equal(turned.t, 3, "the point keeps its other fields");
  // At the north pole the axes are cameraBasis's (longitude 0): a point toward the right (u 0.75) goes down (u 0.5).
  const atPole = turnErpPointOnSphere({ u: 0.75, v: 10 / 180 }, { x: 1e-12, y: 1, z: -1e-12 }, 90);
  near(atPole.u, 0.5, "u at the pole", 1e-6);
  near(atPole.v, 10 / 180, "v at the pole", 1e-9);
});

test("a point turned by the group's turn keeps its place in the frame's turned axes (the sign matches the frame's)", () => {
  const points = [{ u: 0.4, v: 0.3 }, { u: 0.55, v: 0.28 }, { u: 0.47, v: 0.36 }];
  const before = strokeGroupFrame([stroke(points)], undefined, 10);
  const turnedPoints = points.map((p) => turnErpPointOnSphere(p, before.center, 25));
  const after = strokeGroupFrame([stroke(turnedPoints)], undefined, 35);
  points.forEach((p, index) => {
    const [x0, y0] = tangent(before, directionOfErpPoint(p));
    const [x1, y1] = tangent(after, directionOfErpPoint(turnedPoints[index]));
    near(x1, x0, `x ${index}`, 1e-9);
    near(y1, y0, `y ${index}`, 1e-9);
  });
});

test("a stroke group's frame is the box of its points on the tangent plane at their mean direction, padded by π·uvPad", () => {
  // From 18° left to 18° right on the equator, ahead.
  const points = Array.from({ length: 7 }, (_, k) => ({ u: 0.45 + k * (0.1 / 6), v: 0.5 }));
  const frame = strokeGroupFrame([stroke(points)]);
  const pad = Math.tan(Math.PI * frame.uvPad);
  near(frame.center.z, 1, "center ahead");
  near(frame.box.x, 0, "box x");
  near(frame.box.y, 0, "box y");
  near(frame.halfW, Math.tan(18 * Math.PI / 180) + pad, "halfW");
  near(frame.halfH, pad, "halfH");
  near(frame.rot_deg, 0, "rot_deg");
  near(frame.centerUv.u, 0.5, "centerUv u");
  near(frame.centerUv.v, 0.5, "centerUv v");
  // Its corners are the box's, back on the sphere: top left, top right, bottom right, bottom left.
  const corners = frameCornersUv(frame);
  assert.ok(corners[0].u < 0.5 && corners[0].v < 0.5 && corners[1].u > 0.5 && corners[2].v > 0.5 && corners[3].u < 0.5);
  near(corners[0].u + corners[1].u, 1, "symmetric");
});

test("a wide group near a pole keeps its frame's shape when it turns (no corner pressed onto the pole's line)", () => {
  // 108° of longitude along latitude 45° (v 0.25).
  const points = Array.from({ length: 13 }, (_, k) => ({ u: 0.35 + k * 0.025, v: 0.25 }));
  const painting = { groups: [{ id: "g1", actionGroupId: "g1", z_index: 0, rot_deg: 0 }], paint: { strokes: [stroke(points)] } };
  const before = strokeGroupFrame(painting.paint.strokes);
  const beforeCorners = frameCornersUv(before);
  assert.equal(turnStrokeGroup(painting, "g1", 30, before.center), true);
  const after = strokeGroupFrame(painting.paint.strokes, undefined, painting.groups[0].rot_deg);
  near(after.halfW, before.halfW, "halfW", 1e-9);
  near(after.halfH, before.halfH, "halfH", 1e-9);
  // Its corners are the old ones turned about the center.
  frameCornersUv(after).forEach((corner, index) => {
    const want = turnErpPointOnSphere(beforeCorners[index], before.center, 30);
    near(corner.u, want.u, `corner ${index} u`, 1e-9);
    near(corner.v, want.v, `corner ${index} v`, 1e-9);
    assert.ok(corner.v > 0, `corner ${index} is not on the pole's line`);
  });
});

test("a group across the seam has a frame across u 0, and points far from the center keep the frame finite", () => {
  const across = strokeGroupFrame([stroke([{ u: 0.97, v: 0.5 }, { u: 0.03, v: 0.5 }])]);
  near(across.centerUv.u === 0 ? 1 : across.centerUv.u, 1, "center on the seam");
  const corners = frameCornersUv(across);
  assert.ok(corners[0].u > 0.9 && corners[1].u < 0.1, `${corners[0].u} ${corners[1].u}`);
  // Three points 120° apart on the equator and one at the north pole: the mean is the pole; the equator lies 90° away.
  const spread = strokeGroupFrame([stroke([{ u: 0, v: 0.5 }, { u: 1 / 3, v: 0.5 }, { u: 2 / 3, v: 0.5 }, { u: 0.5, v: 0.02 }])]);
  assert.ok(Number.isFinite(spread.halfW) && Number.isFinite(spread.halfH) && spread.halfW > 10);
  frameCornersUv(spread).forEach((corner) => assert.ok(Number.isFinite(corner.u) && Number.isFinite(corner.v)));
});

test("turning a stroke group adds to its rot_deg and turns its points about the center by what the angle changed; a snap stops the angle", () => {
  const painting = () => ({
    groups: [{ id: "g1", actionGroupId: "g1", z_index: 0, rot_deg: 10 }],
    paint: { strokes: [stroke([{ u: 0.6, v: 0.4 }])] },
  });
  const center = directionOfErpPoint({ u: 0.5, v: 0.5 });
  let draft = painting();
  assert.equal(turnStrokeGroup(draft, "g1", 25, center), true);
  assert.equal(draft.groups[0].rot_deg, 35);
  let want = turnErpPointOnSphere({ u: 0.6, v: 0.4 }, center, 25);
  near(draft.paint.strokes[0].geometry.points[0].u, want.u, "u");
  near(draft.paint.strokes[0].geometry.points[0].v, want.v, "v");
  draft = painting();
  turnStrokeGroup(draft, "g1", 25, center, { snapDeg: 15 });
  assert.equal(draft.groups[0].rot_deg, 30);
  want = turnErpPointOnSphere({ u: 0.6, v: 0.4 }, center, 20);
  near(draft.paint.strokes[0].geometry.points[0].u, want.u, "snapped u");
  // The point straight opposite the center does not move.
  draft = { ...painting(), paint: { strokes: [stroke([{ u: 0, v: 0.5 }])] } };
  turnStrokeGroup(draft, "g1", 40, center);
  assert.equal(draft.paint.strokes[0].geometry.points[0].u, 0);
});

test("a stroke group scales on its frame's tangent plane about its box's center; the ratio stops at 0.02", () => {
  const points = [{ u: 0.45, v: 0.5 }, { u: 0.55, v: 0.5 }];
  const strokes = [stroke(points)];
  const frame = strokeGroupFrame(strokes);
  assert.equal(transformStrokeGroup(strokes, "g1", 2, null, frame), true);
  const lon = (u) => (u - 0.5) * 360;
  near(lon(strokes[0].geometry.points[1].u), Math.atan(2 * Math.tan(18 * Math.PI / 180)) * 180 / Math.PI, "twice as far on the plane", 1e-9);
  near(strokes[0].geometry.points[1].v, 0.5, "v");
  const tiny = [stroke(points)];
  transformStrokeGroup(tiny, "g1", 0.001, null, strokeGroupFrame(tiny));
  near(lon(tiny[0].geometry.points[1].u), Math.atan(0.02 * Math.tan(18 * Math.PI / 180)) * 180 / Math.PI, "by 0.02", 1e-9);
  // Its source points (as a drag started) are read when given.
  const source = [stroke(points)];
  const moved = [stroke([{ u: 0.1, v: 0.1 }, { u: 0.2, v: 0.2 }])];
  transformStrokeGroup(moved, "g1", 1, source, strokeGroupFrame(source));
  near(moved[0].geometry.points[0].u, 0.45, "from the source", 1e-9);
});

test("scaling leaves the points 89.5° or farther from the center where they are: ratio 1 changes nothing in a 216°-wide group", () => {
  const points = Array.from({ length: 13 }, (_, k) => ({ u: 0.2 + k * 0.05, v: 0.5 }));
  const strokes = [stroke(points)];
  const frame = strokeGroupFrame(strokes);
  transformStrokeGroup(strokes, "g1", 1, null, frame);
  strokes[0].geometry.points.forEach((point, index) => {
    near(point.u, points[index].u, `u ${index}`, 1e-9);
    near(point.v, points[index].v, `v ${index}`, 1e-9);
  });
  // At twice the size the far ends (108° from the center) stay; the near ones move out.
  const doubled = [stroke(points)];
  transformStrokeGroup(doubled, "g1", 2, null, strokeGroupFrame(doubled));
  assert.equal(doubled[0].geometry.points[0].u, 0.2);
  assert.equal(doubled[0].geometry.points[12].u, 0.8);
  assert.ok(doubled[0].geometry.points[7].u > points[7].u + 1e-3);
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
