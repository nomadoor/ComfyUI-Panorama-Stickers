// The new UI's gizmo (web_src/studio/gizmo_overlay.js): docs/studio-ui.md "ギズモ" (the approved draft specimen-11.html)
// — handles of a fixed size on screen, Move's bars and balls on the World axes, Rotate's rings with only their near
// half hit, Scale's bars on the object's axes, axes along the view hidden, which handle a point hits, and what a drag
// of each handle does.
import assert from "node:assert/strict";
import test from "node:test";

import { DEFAULT_VIEW_HFOV, gizmoDragLanes, projectPoint, sceneTransform, spaceCamera } from "../web_src/pano_space.js";
import { GIZMO_LOOK, gizmoDrag, gizmoGuideSegment, gizmoHandles, gizmoHit } from "../web_src/studio/gizmo_overlay.js";
import { quaternionToRotation } from "../web_src/pano_world.js";

const W = 1000;
const H = 500;
// A view at the origin looking down -Z, and one from above and to the side looking at (0, 0, -5).
const camera = spaceCamera({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: DEFAULT_VIEW_HFOV, distance: 5 }, W, H, { center: [0, 0, 0], radius: 50 });
// From above, right and in front: yaw 21.8° faces (0, 0, -5) from x 2, pitch -16.6° from y 1.5 at 5.39 away.
const oblique = spaceCamera({ position: [2, 1.5, 0], yaw_deg: -Math.atan2(2, 5) * 180 / Math.PI, pitch_deg: -Math.atan2(1.5, Math.hypot(2, 5)) * 180 / Math.PI, roll_deg: 0, hFOV_deg: DEFAULT_VIEW_HFOV, distance: 5 }, W, H, { center: [0, 0, 0], radius: 50 });
const value = { position: [0, 0, -5], yaw_deg: 30, pitch_deg: 0, roll_deg: 0, scale: 1 };
const gizmo = (mode, at = value) => ({ mode, transform: sceneTransform(at) });

const close = (a, b, eps = 1e-6) => Math.abs(a - b) < eps;
const axisOf = (handles, name) => handles.axes.find((axis) => axis.name === name);

test("Move: bars on the World axes reach GIZMO_LOOK.reach px from the center, whatever the distance; the axis along the view hides", () => {
  for (const depth of [5, 20]) {
    const handles = gizmoHandles(gizmo("translate", { ...value, position: [0, 0, -depth] }), camera, W, H);
    assert.ok(close(handles.center.x, W / 2) && close(handles.center.y, H / 2));
    const x = axisOf(handles, "x");
    const y = axisOf(handles, "y");
    assert.ok(close(x.end.x - handles.center.x, GIZMO_LOOK.reach, 1e-6) && close(x.end.y, handles.center.y), "X points right");
    assert.ok(close(handles.center.y - y.end.y, GIZMO_LOOK.reach, 1e-6) && close(y.end.x, handles.center.x), "Y points up");
    assert.equal(axisOf(handles, "z").shown, false, "Z runs along the view: hidden");
  }
});

test("a point hits a ball before a bar, the center dot (Move only), and nothing off the handles", () => {
  const handles = gizmoHandles(gizmo("translate"), camera, W, H);
  const x = axisOf(handles, "x").end;
  assert.equal(gizmoHit(handles, { x: x.x + 4, y: x.y + 3 }), "x");
  assert.equal(gizmoHit(handles, { x: handles.center.x + GIZMO_LOOK.reach / 2, y: handles.center.y + 4 }), "x", "on the bar");
  assert.equal(gizmoHit(handles, { x: handles.center.x + 2, y: handles.center.y - 2 }), "center");
  assert.equal(gizmoHit(handles, { x: handles.center.x + 30, y: handles.center.y + 30 }), null);
  assert.equal(gizmoHit(handles, { x: handles.center.x, y: handles.center.y + 20 }), null, "Z is hidden and not hit");
  const rotate = gizmoHandles(gizmo("rotate"), oblique, W, H);
  assert.equal(gizmoHit(rotate, { x: rotate.center.x + 1, y: rotate.center.y }), null, "Rotate's center dot is only a shape");
});

test("a drag of the X ball moves along X only, however the pointer goes", () => {
  const shown = gizmo("translate");
  const handles = gizmoHandles(shown, camera, W, H);
  const ball = axisOf(handles, "x").end;
  const drag = gizmoDrag(shown, "x", camera, ball, W, H);
  const moved = drag.move(camera, { x: ball.x + 100, y: ball.y + 60 }, W, H);
  assert.ok(moved.position[0] > 0.5, "it moved right");
  assert.ok(close(moved.position[1], 0) && close(moved.position[2], -5), "not along Y or Z");
  const lanes = gizmoDragLanes("translate", value, shown.transform, moved);
  assert.ok(close(lanes.position[1], 0) && close(lanes.position[2], -5));
  // Back where it was grabbed: back where it started.
  const back = drag.move(camera, ball, W, H);
  assert.ok(close(back.position[0], 0));
});

test("a drag of Move's center dot moves across the line of sight", () => {
  const shown = gizmo("translate");
  const handles = gizmoHandles(shown, camera, W, H);
  const drag = gizmoDrag(shown, "center", camera, handles.center, W, H);
  const moved = drag.move(camera, { x: handles.center.x + 50, y: handles.center.y - 50 }, W, H);
  assert.ok(moved.position[0] > 0 && moved.position[1] > 0);
  assert.ok(close(moved.position[2], -5), "the depth stays");
});

test("Rotate: rings round the World axes; only the near half is hit; a drag along a ring turns about its axis and the grabbed point follows", () => {
  const shown = gizmo("rotate");
  // Seen straight on, the Z ring is a circle of GIZMO_LOOK.reach px.
  const straight = gizmoHandles(shown, camera, W, H);
  const zRing = straight.rings.find((ring) => ring.name === "z");
  assert.ok(zRing.points.every((p) => close(Math.hypot(p.x - straight.center.x, p.y - straight.center.y), GIZMO_LOOK.reach, 0.5)));
  const handles = gizmoHandles(shown, oblique, W, H);
  assert.equal(handles.rings.length, 3);
  for (const ring of handles.rings) {
    const near = ring.points.filter((p) => p.front);
    const far = ring.points.filter((p) => !p.front);
    assert.ok(near.length && far.length, "each ring has a near and a far half");
    // A far point away from the other rings is not hit by its own ring.
    const lonely = far.find((p) => handles.rings.every((other) => other === ring || other.points.every((q) => Math.hypot(q.x - p.x, q.y - p.y) > GIZMO_LOOK.lineHit * 2)));
    if (lonely) assert.notEqual(gizmoHit(handles, lonely), ring.name);
  }
  // Grab the Z ring at a near point clear of the others and pull it 20 px along the ring.
  const z = handles.rings.find((ring) => ring.name === "z");
  const grab = z.points.find((p) => p.front && gizmoHit(handles, p) === "z");
  const index = z.points.indexOf(grab);
  const ahead = z.points[index + 1] ?? z.points[index - 1];
  const along = [ahead.x - grab.x, ahead.y - grab.y];
  const step = 20 / Math.hypot(...along);
  const pointer = { x: grab.x + along[0] * step, y: grab.y + along[1] * step };
  const moved = gizmoDrag(shown, "z", oblique, grab, W, H).move(oblique, pointer, W, H);
  const before = quaternionToRotation(shown.transform.quaternion);
  const after = quaternionToRotation(moved.quaternion);
  const turn = [0, 1, 2].map((row) => [0, 1, 2].map((col) => [0, 1, 2].reduce((sum, k) => sum + after[row][k] * before[col][k], 0)));
  assert.ok(close(turn[2][2], 1, 1e-9), "the turn keeps +Z: it is about the Z axis");
  // The grabbed World point, turned, lands nearer the pointer than where it was grabbed.
  const offset = grab.world.map((v, axis) => v - value.position[axis]);
  const turned = [0, 1, 2].map((row) => turn[row][0] * offset[0] + turn[row][1] * offset[1] + turn[row][2] * offset[2] + value.position[row]);
  const landed = projectPoint(oblique, turned, W, H);
  assert.ok(Math.hypot(landed.x - pointer.x, landed.y - pointer.y) < Math.hypot(grab.x - pointer.x, grab.y - pointer.y) * 0.5);
  assert.deepEqual(moved.position, shown.transform.position, "it does not move");
});

test("Scale: bars on the object's own axes; a drag of a square twice as far from the center doubles the size", () => {
  const shown = gizmo("scale");
  const handles = gizmoHandles(shown, camera, W, H);
  const x = axisOf(handles, "x");
  // Yaw 30°: the object's X leans away from the view.
  assert.ok(close(x.dir[0], Math.cos(Math.PI / 6), 1e-9));
  const drag = gizmoDrag(shown, "x", camera, x.end, W, H);
  const moved = drag.move(camera, { x: handles.center.x + (x.end.x - handles.center.x) * 2, y: handles.center.y + (x.end.y - handles.center.y) * 2 }, W, H);
  assert.ok(close(moved.scale[0], 2, 1e-9));
  assert.equal(gizmoDragLanes("scale", value, shown.transform, moved).scale, 2);
});

test("no handles while the gizmo's center is behind the view", () => {
  assert.equal(gizmoHandles(gizmo("translate", { ...value, position: [0, 0, 5] }), camera, W, H), null);
  assert.equal(gizmoHit(null, { x: 1, y: 1 }), null);
});

test("a Move drag pointed past the axis's vanishing point keeps the last place instead of jumping behind the view", () => {
  const shown = gizmo("translate");
  const handles = gizmoHandles(shown, oblique, W, H);
  const z = axisOf(handles, "z");
  const drag = gizmoDrag(shown, "z", oblique, z.end, W, H);
  const along = [z.end.x - handles.center.x, z.end.y - handles.center.y];
  assert.ok(drag.move(oblique, { x: z.end.x + along[0] * 0.2, y: z.end.y + along[1] * 0.2 }, W, H), "near the handle it moves");
  assert.equal(drag.move(oblique, { x: handles.center.x - along[0] * 10, y: handles.center.y - along[1] * 10 }, W, H), null);
});

test("a Scale bar is not hit near the center, so a drag never starts from a tiny distance", () => {
  const handles = gizmoHandles(gizmo("scale"), camera, W, H);
  const x = axisOf(handles, "x");
  const dir = [(x.end.x - handles.center.x) / GIZMO_LOOK.reach, (x.end.y - handles.center.y) / GIZMO_LOOK.reach];
  const near = { x: handles.center.x + dir[0] * 3, y: handles.center.y + dir[1] * 3 };
  assert.equal(gizmoHit(handles, near), null);
  const out = { x: handles.center.x + dir[0] * 30, y: handles.center.y + dir[1] * 30 };
  assert.equal(gizmoHit(handles, out), "x");
});

test("an axis drag carries its guide line through the grabbed center along the axis; Move's center dot has none", () => {
  const shown = gizmo("translate");
  const handles = gizmoHandles(shown, camera, W, H);
  const drag = gizmoDrag(shown, "x", camera, axisOf(handles, "x").end, W, H);
  assert.deepEqual(drag.guide, { name: "x", origin: [0, 0, -5], dir: [1, 0, 0] });
  const [a, b] = gizmoGuideSegment(drag.guide, camera);
  assert.ok(a[0] < -100 && b[0] > 100 && a[1] === 0 && a[2] === -5, "it reaches far both ways");
  assert.equal(gizmoDrag(shown, "center", camera, handles.center, W, H).guide, undefined);
});
