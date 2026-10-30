// Where a file added or dropped on the new UI's stage lands and the mark while it is dragged (web_src/studio/landing.js;
// docs/space-and-view.md "Add とドロップ", "着く所", "ドラッグ中の印").
import assert from "node:assert/strict";
import test from "node:test";

import { viewProjection } from "../web_src/pano_editor_view.js";
import { boxCorners, transformPoint } from "../web_src/pano_space.js";
import { buildStickerGeometry } from "../web_src/pano_sticker_geometry.js";
import {
  DROP_LOOK,
  dropLabelPlace,
  dropMarker,
  facingYaw,
  file3dPosition,
  file3dTransform,
  groundBelow,
  groundLanding,
  landingBoxes,
  landingHit,
  markRect,
  skyPose,
  worldImageTransform,
} from "../web_src/studio/landing.js";
import { stageCamera, stageRay } from "../web_src/studio/stage_view.js";

const near = (a, b, eps = 1e-6) => Math.abs(a - b) <= eps;
const nearVec = (a, b, eps = 1e-6) => a.length === b.length && a.every((v, i) => near(v, b[i], eps));
const unit = (v) => {
  const l = Math.hypot(...v);
  return v.map((x) => x / l);
};

const GROUND = -1.6;
const W = 1000;
const H = 600;
// A view at the origin looking level ahead (-Z), its target 8 ahead.
const POSE = { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, target: [0, 0, -8] };
const CAMERA = stageCamera(POSE, W, H, 48);

test("a ray down to the ground lands on it; one up into the sky does not", () => {
  const down = { origin: [0, 0, 0], direction: unit([0, -1, -1]) };
  assert.ok(nearVec(landingHit(down, { ground: GROUND, radius: 48 }), [0, GROUND, -1.6]));
  const up = { origin: [0, 0, 0], direction: unit([0, 1, -1]) };
  assert.equal(landingHit(up, { ground: GROUND, radius: 48 }), null);
});

test("a hit outside the world bound counts as none", () => {
  const shallow = { origin: [0, 0, 0], direction: unit([0, -0.01, -1]) };
  // The ground is 160 ahead: past the bound of 48.
  assert.equal(landingHit(shallow, { ground: GROUND, radius: 48 }), null);
  assert.ok(landingHit(shallow, { ground: GROUND, radius: 200 }));
});

test("the nearest of the ground, a 3D box and the GPU pick wins", () => {
  const ray = { origin: [0, 0, 0], direction: unit([0, -1, -1]) };
  // A box 1 wide around (0, -0.5, -0.5): the ray enters it before the ground.
  const box = { box: { min: [-0.5, -0.5, -0.5], max: [0.5, 0.5, 0.5] }, transform: { position: [0, -0.8, -0.8], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 1 } };
  const withBox = landingHit(ray, { ground: GROUND, boxes: [box], radius: 48 });
  assert.ok(withBox[1] > GROUND + 0.5);
  const picked = [0, -0.2, -0.2];
  assert.ok(nearVec(landingHit(ray, { ground: GROUND, picked, radius: 48 }), picked));
  // A pick behind the view does not count.
  assert.ok(nearVec(landingHit(ray, { ground: GROUND, picked: [0, 1, 1], radius: 48 }), [0, GROUND, GROUND]));
});

test("the CPU boxes are the shown 3D Stickers' loaded item boxes with their transforms", () => {
  const value = { position: [1, 0, -3], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 1 };
  const content = { space: { fileStickers: [{ id: "a", url: "u1", kind: "mesh", value }, { id: "b", url: "u2", kind: "mesh", value }] } };
  const boxes = landingBoxes(content, (url) => (url === "u1" ? { min: [0, 0, 0], max: [1, 1, 1] } : null));
  assert.equal(boxes.length, 1);
  assert.deepEqual(boxes[0].transform, value);
});

test("a 3D file dropped on the sky goes to the farthest ground point inside the bound, level along the ray", () => {
  const ray = { origin: [0, 0, 0], direction: unit([1, 1, -1]) };
  const point = groundLanding(ray, { ground: GROUND, radius: 10 });
  assert.ok(near(Math.hypot(...point), 10));
  assert.equal(point[1], GROUND);
  assert.ok(near(point[0], -point[2]) && point[0] > 0);
});

test("straight up it goes the view's yaw; from a ground point outside the bound, the nearest point inside", () => {
  const up = { origin: [0, 0, 0], direction: [0, 1, 0] };
  const ahead = groundLanding(up, { ground: GROUND, radius: 10, viewYaw: 90 });
  assert.ok(ahead[0] > 9 && near(ahead[2], 0));
  const outside = { origin: [0, 0, 30], direction: unit([0, 0.2, -1]) };
  const entry = groundLanding(outside, { ground: GROUND, radius: 10 });
  assert.ok(near(Math.hypot(...entry), 10) && entry[2] > 0);
  // Facing away from the bound: no ground inside that way.
  const away = { origin: [0, 0, 30], direction: unit([0, 0.2, 1]) };
  assert.equal(groundLanding(away, { ground: GROUND, radius: 10 }), null);
});

test("Add with nothing at the center lands on the ground below T", () => {
  assert.deepEqual(groundBelow([2, 0.4, -6], GROUND), [2, GROUND, -6]);
});

test("a sky image faces along the ray, NEW_STICKER_HFOV wide and as tall as its aspect", () => {
  const pose = skyPose(unit([0, 0, -1]), { width: 200, height: 100 });
  assert.ok(near(pose.yaw_deg, 0) && near(pose.pitch_deg, 0));
  assert.equal(pose.hFOV_deg, 30);
  assert.ok(pose.vFOV_deg < 16 && pose.vFOV_deg > 14);
  const right = skyPose(unit([1, 1, 0]), { width: 1, height: 1 });
  assert.ok(near(right.yaw_deg, 90) && near(right.pitch_deg, 45));
});

test("the sky image placed along a pointer's ray is centered under the pointer", () => {
  const ray = stageRay(CAMERA, 700, 150, W, H);
  const pose = skyPose(ray.direction, { width: 1, height: 1 });
  const geometry = buildStickerGeometry({ ...pose }, viewProjection(CAMERA, W, H));
  assert.ok(near(geometry.center.x, 700, 1e-3) && near(geometry.center.y, 150, 1e-3));
});

test("a World image stands on the ground below the hit, E tall, its width the scale, turned level to the view", () => {
  const t = worldImageTransform([3, -0.5, -4], { ground: GROUND, eye: [0, 0, 0], size: { width: 300, height: 150 } });
  assert.ok(nearVec(t.position, [3, GROUND + 0.8, -4]));
  assert.ok(near(t.scale, 3.2));
  assert.deepEqual([t.rotation.pitch_deg, t.rotation.roll_deg], [0, 0]);
  assert.ok(near(t.rotation.yaw_deg, Math.atan2(3, 4) * 180 / Math.PI));
});

test("a 3D file faces the view level, at scale 1, its origin on the landing point until its box is known", () => {
  const t = file3dTransform([0, GROUND, -5], { eye: [0, 0, 0] });
  assert.deepEqual(t.position, [0, GROUND, -5]);
  assert.ok(near(t.rotation.yaw_deg, 0));
  assert.equal(t.scale, 1);
  assert.equal(facingYaw([0, 0, 0], [0, -3, 0], 33), 33);
});

test("once the box is known, its turned bottom sits on the landing point, its level middle over it", () => {
  const box = { min: [-1, 2, 0], max: [3, 4, 1] };
  const value = { yaw_deg: 90, pitch_deg: 0, roll_deg: 0, scale: 1 };
  const point = [5, GROUND, -2];
  const position = file3dPosition(point, box, value);
  const turned = boxCorners(box).map((corner) => transformPoint({ ...value, position }, corner));
  assert.ok(near(Math.min(...turned.map((p) => p[1])), GROUND));
  for (const axis of [0, 2]) {
    const mid = (Math.min(...turned.map((p) => p[axis])) + Math.max(...turned.map((p) => p[axis]))) / 2;
    assert.ok(near(mid, point[axis]));
  }
  assert.equal(file3dPosition(point, null, value), null);
  assert.equal(file3dPosition(point, { min: [0, 0, 0], max: [1, -1, 1] }, value), null);
});

test("an image over the ground marks a World plane with a bracket at each of its four corners", () => {
  const ray = stageRay(CAMERA, 500, 450, W, H);
  const hit = landingHit(ray, { ground: GROUND, radius: 48 });
  const mark = dropMarker({ kind: "image", ray, hit, camera: CAMERA, width: W, height: H, ground: GROUND, radius: 48 });
  assert.equal(mark.placement, "world");
  assert.equal(mark.fills.length, 1);
  assert.equal(mark.brackets.length, 4);
  for (const bracket of mark.brackets) assert.equal(bracket.length, 3);
  // The brackets are a fifth of an edge: the plane is upright and 1:1 here, so each arm is about a fifth of the width.
  const [a, corner] = mark.brackets[0];
  const width = Math.hypot(mark.fills[0][1].x - mark.fills[0][0].x, mark.fills[0][1].y - mark.fills[0][0].y);
  assert.ok(Math.abs(Math.hypot(a.x - corner.x, a.y - corner.y) - width * DROP_LOOK.bracket) < width * 0.05);
});

test("an image over the sky marks the sky frame, its brackets running along its curved edges from its corners", () => {
  const ray = stageRay(CAMERA, 300, 120, W, H);
  const mark = dropMarker({ kind: "image", ray, hit: null, camera: CAMERA, width: W, height: H, ground: GROUND, radius: 48 });
  assert.equal(mark.placement, "sky");
  const geometry = buildStickerGeometry({ ...skyPose(ray.direction, { width: 1, height: 1 }) }, viewProjection(CAMERA, W, H));
  assert.equal(mark.brackets.length, 4);
  mark.brackets.forEach((bracket, k) => {
    const corner = geometry.boundaryEdges[k][0];
    assert.ok(bracket.some((p) => near(p.x, corner.x, 1e-6) && near(p.y, corner.y, 1e-6)), `corner ${k}`);
    // Every point of the bracket is on the frame's edge polylines (it follows the edges, not a flat L).
    assert.ok(bracket.length > 3);
  });
  assert.ok(mark.fills[0].length >= 4 * 20);
});

test("a 3D file marks its provisional box: the faces toward the view filled, short lines from every corner it sees", () => {
  // The box turns its front to the view, so from above its front and its top show, and six corners.
  const pose = { position: [2, 1.5, 2], yaw_deg: -30, pitch_deg: -25, roll_deg: 0, target: [0, GROUND, -3] };
  const camera = stageCamera(pose, W, H, 48);
  const ray = stageRay(camera, 500, 330, W, H);
  const hit = landingHit(ray, { ground: GROUND, radius: 48 });
  const mark = dropMarker({ kind: "3d", ray, hit, camera, width: W, height: H, ground: GROUND, radius: 48 });
  assert.equal(mark.placement, "world");
  assert.equal(mark.fills.length, 2);
  assert.equal(mark.brackets.length, 6 * 3);
});

test("a 3D file over the sky marks the box on the ground; with no ground inside the bound there is no mark", () => {
  const up = stageRay(CAMERA, 500, 50, W, H);
  const mark = dropMarker({ kind: "3d", ray: up, hit: null, camera: CAMERA, width: W, height: H, ground: GROUND, radius: 48 });
  assert.equal(mark?.placement, "world");
  const outside = stageCamera({ position: [0, 0, 60], yaw_deg: 180, pitch_deg: 10, roll_deg: 0, target: [0, 0, 70] }, W, H, 48);
  const away = stageRay(outside, 500, 200, W, H);
  assert.equal(dropMarker({ kind: "3d", ray: away, hit: null, camera: outside, width: W, height: H, ground: GROUND, radius: 48 }), null);
});

// --- The label's place (docs/space-and-view.md "ドラッグ中の印" "ラベルの置き場所").

const LABEL = { width: 70, height: 26 };
const STAGE = { width: W, height: H };
const rectOf = (p) => ({ left: p.x, top: p.y, right: p.x + LABEL.width, bottom: p.y + LABEL.height });
const crosses = (a, b) => Math.min(a.right, b.right) > Math.max(a.left, b.left) && Math.min(a.bottom, b.bottom) > Math.max(a.top, b.top);
const within = (r) => r.left >= DROP_LOOK.labelMargin && r.top >= DROP_LOOK.labelMargin && r.right <= W - DROP_LOOK.labelMargin && r.bottom <= H - DROP_LOOK.labelMargin;

test("the drop marks are colored by where they go: World the soft yellow, Sky ice", () => {
  assert.equal(DROP_LOOK.colors.world.line, "#e8cf74");
  assert.equal(DROP_LOOK.colors.sky.line, "#aecedb");
  assert.equal(DROP_LOOK.colors.sky.fill, "rgba(174, 206, 219, 0.25)");
});

test("the label never lies on the mark: right of it level with the pointer, else left, below, above, inside the stage", () => {
  // The sky frame around the pointer at the stage's middle: the label goes to its right.
  const pointer = { x: W / 2, y: H * 0.3 };
  const sky = dropMarker({ kind: "image", ray: stageRay(CAMERA, pointer.x, pointer.y, W, H), hit: null, camera: CAMERA, width: W, height: H, ground: GROUND, radius: 48 });
  const box = markRect(sky);
  assert.ok(box.left < pointer.x && box.right > pointer.x, "the mark covers the pointer");
  const right = dropLabelPlace({ mark: sky, pointer, size: LABEL, stage: STAGE });
  assert.ok(near(right.x, box.right + DROP_LOOK.labelGap) && near(right.y, pointer.y - LABEL.height / 2));
  assert.ok(!crosses(rectOf(right), box) && within(rectOf(right)));
  // Near the right edge it flips to the left; near the bottom right corner too.
  for (const at of [{ x: W - 30, y: H / 2 }, { x: W - 30, y: H - 20 }, { x: 30, y: 15 }]) {
    const mark = { fills: [[{ x: at.x - 60, y: at.y - 40 }, { x: at.x + 20, y: at.y - 40 }, { x: at.x + 20, y: at.y + 10 }, { x: at.x - 60, y: at.y + 10 }]], brackets: [] };
    const place = dropLabelPlace({ mark, pointer: at, size: LABEL, stage: STAGE });
    assert.ok(!crosses(rectOf(place), markRect(mark)), `off the mark at ${at.x},${at.y}`);
    assert.ok(within(rectOf(place)), `inside the stage at ${at.x},${at.y}`);
  }
  // A mark as wide as the stage: below it, centered on the pointer.
  const wide = { fills: [[{ x: -50, y: 100 }, { x: W + 50, y: 100 }, { x: W + 50, y: 200 }, { x: -50, y: 200 }]], brackets: [] };
  const below = dropLabelPlace({ mark: wide, pointer: { x: 400, y: 150 }, size: LABEL, stage: STAGE });
  assert.ok(near(below.y, 200 + DROP_LOOK.labelGap) && near(below.x, 400 - LABEL.width / 2));
});

test("a mark that fills the stage: the label goes where it overlaps the mark least, still inside the stage", () => {
  const all = { fills: [[{ x: -10, y: -10 }, { x: W + 10, y: -10 }, { x: W + 10, y: H - 30 }, { x: -10, y: H - 30 }]], brackets: [] };
  const place = dropLabelPlace({ mark: all, pointer: { x: 500, y: 300 }, size: LABEL, stage: STAGE });
  assert.ok(within(rectOf(place)));
  assert.ok(near(place.y, H - DROP_LOOK.labelMargin - LABEL.height), "at the bottom, where the mark ends");
});
