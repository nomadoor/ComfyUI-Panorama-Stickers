// The Camera's mark in the new UI's 3D tab (web_src/studio/camera_marker.js): docs/studio-ui.md "エディタの中の Camera"
// (the approved draft camera-1.html) and docs/space-and-view.md "ホバーの判定": the filled frustum and up triangle of
// the Frame mode, the filled sphere, equator and front arrow of the Panorama mode, the hidden edges, and a hit anywhere
// on the filled shape, not only on its lines.
import assert from "node:assert/strict";
import test from "node:test";

import { DEFAULT_VIEW_HFOV, projectPoint, spaceCamera } from "../web_src/pano_space.js";
import {
  CAMERA_HIT_PIXELS,
  cameraMarkerHit,
  cameraMarkerLength,
  cameraMarkerScreen,
  cameraMarkerShape,
  cameraMarkerShown,
} from "../web_src/studio/camera_marker.js";
import { CAMERA_GUIDE_MIN_PIXELS, eyeLengths } from "../web_src/studio/view_scale.js";
import { pointInPolygon } from "../web_src/studio/world_guides.js";

const W = 1000;
const H = 500;
const LENGTH = eyeLengths(1.6).CAMERA_GUIDE_LENGTH;

function view(position, yaw_deg = 0, pitch_deg = 0) {
  return spaceCamera({ position, yaw_deg, pitch_deg, roll_deg: 0, hFOV_deg: DEFAULT_VIEW_HFOV, distance: 5 }, W, H, { center: [0, 0, 0], radius: 50 });
}

// A Frame mode Camera at the origin facing -Z (yaw 0), and a view from its right (+X) looking back at it (yaw -90
// faces -X), a little above.
const frameCamera = { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 60, aspect: 16 / 9, curve: 1 };
const side = view([3, 0.5, -LENGTH / 2], -90, -8);

const distanceToSegment = (p, a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(a.x + dx * t - p.x, a.y + dy * t - p.y);
};

test("the Frame mode's mark is the frustum CAMERA_GUIDE_LENGTH deep: four side faces and the far face, eight edges, the up triangle", () => {
  const shape = cameraMarkerShape(frameCamera, "perspective", LENGTH);
  assert.equal(shape.kind, "frame");
  assert.equal(shape.faces.length, 5);
  assert.equal(shape.edges.length, 8);
  assert.equal(shape.top.length, 3);
  assert.ok(shape.faces[4].every((point) => Math.abs(point[2] + LENGTH) < 1e-9), "the far face is CAMERA_GUIDE_LENGTH ahead (-Z)");
  assert.ok(shape.top.every((point) => point[1] > 0), "the up triangle is above");
});

test("a press in the middle of a filled face hits the Frame mode's mark, far from every line; a press beside it does not", () => {
  const near = view([1.4, 0.3, -LENGTH / 2], -90, -8);
  const screen = cameraMarkerScreen(cameraMarkerShape(frameCamera, "perspective", LENGTH), near, W, H);
  assert.equal(screen.fills.length, 5);
  // The point of the filled faces farthest from every line (a search over the faces' box).
  const all = screen.fills.flat();
  const xs = all.map((p) => p.x);
  const ys = all.map((p) => p.y);
  let middle = null;
  let nearest = 0;
  for (let x = Math.min(...xs); x <= Math.max(...xs); x += 1) {
    for (let y = Math.min(...ys); y <= Math.max(...ys); y += 1) {
      const p = { x, y };
      if (!screen.fills.some((face) => pointInPolygon(p, face))) continue;
      const distance = Math.min(...screen.lines.map((line) => distanceToSegment(p, line.a, line.b)));
      if (distance > nearest) [middle, nearest] = [p, distance];
    }
  }
  assert.ok(nearest > CAMERA_HIT_PIXELS * 2, `a point of the faces is ${nearest.toFixed(1)} px from the lines`);
  assert.equal(cameraMarkerHit(screen, middle), true);
  assert.equal(cameraMarkerHit(screen, { x: 5, y: 5 }), false);
  // Near a line, outside every face, it still hits.
  const apex = screen.dot;
  assert.equal(cameraMarkerHit(screen, { x: apex.x - CAMERA_HIT_PIXELS + 1, y: apex.y }), true);
});

test("edges whose faces all turn away from the view are hidden: seen from the side, the far rectangle's far-side edge", () => {
  const shape = cameraMarkerShape(frameCamera, "perspective", LENGTH);
  // From behind the Camera (+Z, looking -Z) every edge has a side face turned to the view: none is hidden.
  const behind = cameraMarkerScreen(shape, view([0, 0.3, 3]), W, H);
  assert.equal(behind.lines.filter((line) => line.hidden).length, 0);
  // From the right (+X) and a little above, the left, bottom and far faces turn away: the three edges between them
  // (the bottom-left spoke, the far rectangle's bottom and left edges) are hidden, the rest are not.
  const fromSide = cameraMarkerScreen(shape, side, W, H);
  const hidden = fromSide.lines.filter((line) => line.hidden);
  assert.equal(hidden.length, 3);
  const [c0, c1, , c3] = shape.faces[4];
  const at = (point) => projectPoint(side, point, W, H);
  const same = (line, [a, b]) => {
    const close = (p, q) => Math.hypot(p.x - q.x, p.y - q.y) < 1e-6;
    return (close(line.a, at(a)) && close(line.b, at(b))) || (close(line.a, at(b)) && close(line.b, at(a)));
  };
  for (const edge of [[shape.apex, c0], [c0, c1], [c3, c0]]) assert.ok(hidden.some((line) => same(line, edge)));
});

test("the Panorama mode's mark is a filled sphere a quarter CAMERA_GUIDE_LENGTH round, its equator and an arrow to its front", () => {
  const camera = { position: [0, 0, -4], yaw_deg: 0, pitch_deg: 0, roll_deg: 0 };
  const shape = cameraMarkerShape(camera, "erp", LENGTH);
  assert.equal(shape.kind, "sphere");
  assert.ok(Math.abs(shape.radius - LENGTH * 0.25) < 1e-12);
  assert.ok(shape.ring.every((point) => Math.abs(point[1]) < 1e-9), "the ring lies on the equator");
  const tip = shape.arrow[0][1];
  assert.ok(tip[2] < -4 - shape.radius, "the arrow points to the front (-Z) out of the sphere");
  const front = view([0, 0, 0]);
  const screen = cameraMarkerScreen(shape, front, W, H);
  const center = projectPoint(front, [0, 0, -4], W, H);
  assert.ok(Math.abs(screen.circle.x - center.x) < 1e-9 && screen.circle.r > 10, "the sphere shows round about its center");
  assert.equal(cameraMarkerHit(screen, { x: screen.circle.x + screen.circle.r * 0.6, y: screen.circle.y - screen.circle.r * 0.5 }), true, "inside the sphere, off its lines");
  assert.equal(cameraMarkerHit(screen, { x: screen.circle.x + screen.circle.r * 3, y: screen.circle.y - screen.circle.r * 3 }), false);
});

test("the mark shows only while the Camera is visible and the view stands at least CAMERA_GUIDE_LENGTH from it", () => {
  assert.equal(cameraMarkerShown({ position: [0, 0, 0], visible: true }, [0, 0, LENGTH * 1.01], -1.6), true);
  assert.equal(cameraMarkerShown({ position: [0, 0, 0], visible: true }, [0, 0, LENGTH * 0.5], -1.6), false);
  assert.equal(cameraMarkerShown({ position: [0, 0, 0], visible: false }, [0, 0, 9], -1.6), false);
});

test("a face that passes behind the view is cut at the near plane, not dropped", () => {
  // The view stands beside the frustum's far end, inside the far rectangle's reach, looking back at the Camera.
  const shape = cameraMarkerShape(frameCamera, "perspective", LENGTH);
  const inside = view([0, 0, -LENGTH * 0.9], 180);
  const screen = cameraMarkerScreen(shape, inside, W, H);
  assert.ok(screen.fills.length >= 4, "the side faces still fill");
});

test("the mark is CAMERA_GUIDE_LENGTH long near, and far away never shows shorter than CAMERA_GUIDE_MIN_PIXELS", () => {
  const camera = { position: [0, 0, 0], yaw_deg: 90, pitch_deg: 0, roll_deg: 0, hFOV_deg: 60, aspect: 16 / 9, curve: 1 };
  assert.equal(cameraMarkerLength(camera, view([0, 0, 2]), H, -1.6), LENGTH);
  const far = view([0, 0, 30]);
  const length = cameraMarkerLength(camera, far, H, -1.6);
  assert.ok(length > LENGTH);
  // The frustum points along +X, across the line of sight: its depth shows CAMERA_GUIDE_MIN_PIXELS long.
  const shape = cameraMarkerShape(camera, "perspective", length);
  const apex = projectPoint(far, shape.apex, W, H);
  const middle = shape.faces[4].reduce((sum, p) => sum.map((v, i) => v + p[i] / 4), [0, 0, 0]);
  const tip = projectPoint(far, middle, W, H);
  assert.ok(Math.abs(Math.hypot(tip.x - apex.x, tip.y - apex.y) - CAMERA_GUIDE_MIN_PIXELS) < 0.5);
});
