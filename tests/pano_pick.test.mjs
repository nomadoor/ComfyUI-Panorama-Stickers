import assert from "node:assert/strict";
import test from "node:test";

import { BoxGeometry, Group, LineSegments, Mesh, MeshBasicMaterial, Object3D, PerspectiveCamera, PlaneGeometry, Scene, ShaderMaterial, Vector3 } from "three";

import {
  PICK_ID_LIMIT,
  nearestHit,
  packPick24,
  pickCacheKey,
  pickRay,
  pickWindow,
  pointAt,
  rayBoxDepth,
  readPickBytes,
  readPickFloat,
  unpackPick24,
} from "../web_src/pano_pick.js";
import { applyViewportCamera, cachedLines, pickPass, setChildren } from "../web_src/pano_three_view.js";
import { projectPoint, spaceCamera } from "../web_src/pano_space.js";

function close(actual, expected, tolerance = 1e-9) {
  assert.ok(Math.abs(actual - expected) <= tolerance, `expected ${expected}, received ${actual}`);
}

function closeVec(actual, expected, tolerance = 1e-9) {
  assert.equal(actual.length, expected.length);
  actual.forEach((value, index) => close(value, expected[index], tolerance));
}

const width = 640;
const height = 360;
const views = [
  { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, distance: 1 },
  { position: [1, -0.5, 2], yaw_deg: 35, pitch_deg: -20, roll_deg: 10, hFOV_deg: 60, distance: 3 },
];

test("ids and depths packed in the bytes of an RGBA8 pixel read back as they were written", () => {
  for (const n of [0, 1, 255, 256, 65535, 65536, 123456, PICK_ID_LIMIT]) {
    const bytes = packPick24(n);
    assert.ok(bytes.every((value) => Number.isInteger(value) && value >= 0 && value <= 255));
    assert.equal(unpackPick24(bytes), n);
  }
  // The depth is its part of `far` in 24 bits, as the shader rounds it.
  const far = 500;
  const depth = 12.345;
  const read = readPickBytes([...packPick24(7), 255], [...packPick24(Math.floor(depth / far * PICK_ID_LIMIT + 0.5)), 255], far);
  assert.equal(read.id, 7);
  close(read.depth, depth, far / PICK_ID_LIMIT);
  // Id 0 is the clear color: nothing was drawn there.
  assert.equal(readPickBytes([0, 0, 0, 0], [0, 0, 0, 0], far), null);
  assert.deepEqual(readPickFloat([3, 4.5, 0, 1]), { id: 3, depth: 4.5 });
  assert.equal(readPickFloat([0, 0, 0, 0]), null);
});

test("the pick draws the one pixel whose center is the pointer", () => {
  for (const view of views) {
    const setup = spaceCamera(view, width, height);
    const camera = new PerspectiveCamera();
    camera.position.set(...setup.position);
    camera.near = setup.near;
    camera.far = setup.far;
    applyViewportCamera(camera, setup);
    for (const [x, y] of [[width / 2, height / 2], [10.25, 300.5], [600, 20]]) {
      const offset = pickWindow(x, y, width, height);
      camera.setViewOffset(offset.fullWidth, offset.fullHeight, offset.x, offset.y, offset.width, offset.height);
      camera.updateMatrixWorld();
      // A point the full view shows at (x, y) lands at the center of the 1 x 1 view.
      const ray = pickRay(setup, x, y, width, height);
      const ndc = new Vector3(...pointAt(ray, 4)).project(camera);
      close(ndc.x, 0, 1e-6);
      close(ndc.y, 0, 1e-6);
      camera.clearViewOffset();
    }
  }
});

test("the depth a pick reads back is the World point drawn at the pointer", () => {
  for (const view of views) {
    const setup = spaceCamera(view, width, height);
    for (const offset of [[0.3, 0.2, 5], [-1.5, 0.7, 2], [0, 0, 9]]) {
      const forward = pointAt(pickRay(setup, width / 2, height / 2, width, height), 1).map((value, axis) => value - setup.position[axis]);
      const point = pointAt(pickRay(setup, width / 2 + offset[0] * 100, height / 2 + offset[1] * 100, width, height), offset[2]);
      const seen = projectPoint(setup, point, width, height);
      // Its depth along the view axis, as the pick shader writes it.
      close(seen.z, point.reduce((sum, value, axis) => sum + (value - setup.position[axis]) * forward[axis], 0), 1e-9);
      closeVec(pointAt(pickRay(setup, seen.x, seen.y, width, height), seen.z), point, 1e-9);
    }
  }
});

test("a SPLAT's box is hit where the ray enters it, or leaves it from inside", () => {
  const box = { min: [-1, -1, -6], max: [1, 1, -4] };
  close(rayBoxDepth([0, 0, 0], [0, 0, -1], box), 4);
  close(rayBoxDepth([0.5, 0, 0], [0, 0.1, -1], box), 4);
  // A ray along a face's plane outside the box misses it.
  assert.equal(rayBoxDepth([2, 0, 0], [0, 0, -1], box), null);
  assert.equal(rayBoxDepth([0, 0, 0], [0, 0, 1], box), null);
  close(rayBoxDepth([0, 0, -5], [0, 0, -1], box), 1);
  // A scaled direction scales the depth back, so a ray in the box's own frame keeps its parameter.
  close(rayBoxDepth([0, 0, 0], [0, 0, -2], box), 2);
});

test("the nearest hit within the view's depth range wins", () => {
  const camera = { near: 0.5, far: 50 };
  assert.deepEqual(nearestHit([{ depth: 3, id: "a" }, { depth: 2, id: "b" }, null], camera), { depth: 2, id: "b" });
  assert.deepEqual(nearestHit([{ depth: 0.1, id: "a" }, { depth: 60, id: "b" }, { depth: 7, id: "c" }], camera), { depth: 7, id: "c" });
  assert.equal(nearestHit([], camera), null);
  // A preferred hit (a world Sticker plane) comes before a nearer one (a SPLAT's box).
  const hits = [{ depth: 2, id: "box" }, { depth: 5, id: "plane", plane: true }, { depth: 60, id: "far", plane: true }];
  assert.equal(nearestHit(hits, camera, (hit) => hit.plane).id, "plane");
  assert.equal(nearestHit(hits.slice(0, 1), camera, (hit) => hit.plane).id, "box");
});

test("a pick is reused for the same pixel of the same view over the same content", () => {
  const setup = spaceCamera(views[1], width, height);
  const key = pickCacheKey(setup, 10, 20, width, height, "c");
  assert.equal(pickCacheKey(spaceCamera(views[1], width, height), 10, 20, width, height, "c"), key);
  assert.notEqual(pickCacheKey(setup, 11, 20, width, height, "c"), key);
  assert.notEqual(pickCacheKey(setup, 10, 20, width, height + 1, "c"), key);
  assert.notEqual(pickCacheKey(spaceCamera({ ...views[1], yaw_deg: 36 }, width, height), 10, 20, width, height, "c"), key);
  assert.notEqual(pickCacheKey(setup, 10, 20, width, height, "d"), key);
});

test("the pick pass draws only the pickable meshes, each in its pick material, and puts all back", () => {
  const world = new Scene();
  const guides = new Group().add(new Mesh(new BoxGeometry(), new MeshBasicMaterial()));
  const itemMaterial = new MeshBasicMaterial();
  const item = new Mesh(new BoxGeometry(), itemMaterial);
  const outline = new LineSegments();
  const content = new Group().add(new Group().add(item, outline));
  const planeMaterial = new MeshBasicMaterial();
  const plane = new Mesh(new PlaneGeometry(), planeMaterial);
  const hiddenPlane = new Mesh(new PlaneGeometry(), new MeshBasicMaterial());
  hiddenPlane.visible = false;
  const gizmo = new Object3D();
  world.add(guides, content, plane, hiddenPlane, gizmo);
  const materials = [new ShaderMaterial(), new ShaderMaterial()];

  const seen = pickPass(world, [{ object: content }, { object: plane }], (index) => materials[index], () => ({
    hidden: [guides, gizmo, outline, hiddenPlane].map((object) => object.visible),
    shown: [content, item, plane].map((object) => object.visible),
    materials: [item.material, plane.material],
  }));

  assert.deepEqual(seen.hidden, [false, false, false, false]);
  assert.deepEqual(seen.shown, [true, true, true]);
  assert.deepEqual(seen.materials, materials);
  assert.deepEqual([guides, gizmo, outline, content, plane].map((object) => object.visible), [true, true, true, true, true]);
  assert.equal(hiddenPlane.visible, false);
  assert.equal(item.material, itemMaterial);
  assert.equal(plane.material, planeMaterial);
});

test("the upstream Scene's planes and items are picked as the node's own (ADR 0030)", () => {
  // An upstream plane in front of the node's own plane, and an upstream 3D item: the pick draws them all.
  const world = new Scene();
  const own = new Mesh(new PlaneGeometry(), new MeshBasicMaterial());
  const upstreamPlane = new Mesh(new PlaneGeometry(), new MeshBasicMaterial());
  const upstreamItem = new Group().add(new Mesh(new BoxGeometry(), new MeshBasicMaterial()));
  world.add(own, upstreamPlane, upstreamItem);
  const entries = [{ object: own }, { object: upstreamPlane }, { object: upstreamItem }];
  const seen = pickPass(world, entries, () => new ShaderMaterial(), () => [own, upstreamPlane, upstreamItem].map((object) => object.visible));
  assert.deepEqual(seen, [true, true, true]);
  // buildWorld picks the upstream items and planes as the node's own: tests/browser (file_3d, lens_stickers).
});

test("the pick pass puts all back when drawing throws", () => {
  const world = new Scene();
  const guides = new Group();
  const material = new MeshBasicMaterial();
  const item = new Mesh(new BoxGeometry(), material);
  world.add(guides, item);
  assert.throws(() => pickPass(world, [{ object: item }], () => new ShaderMaterial(), () => {
    assert.equal(guides.visible, false);
    throw new Error("context lost");
  }), /context lost/);
  assert.equal(guides.visible, true);
  assert.equal(item.material, material);
});

test("the World is filled again only when what it holds changes", () => {
  const world = new Scene();
  const [a, b, c] = [new Object3D(), new Object3D(), new Object3D()];
  let removed = 0;
  [a, b, c].forEach((object) => object.addEventListener("removed", () => { removed += 1; }));
  assert.equal(setChildren(world, [a, b]), true);
  assert.equal(setChildren(world, [a, b]), false);
  assert.equal(removed, 0);
  assert.deepEqual(world.children, [a, b]);
  assert.equal(setChildren(world, [b, a, c]), true);
  assert.deepEqual(world.children, [b, a, c]);
  assert.equal(setChildren(world, []), true);
  assert.deepEqual(world.children, []);
});

test("the World's lines are made again only when their segments or colors change", () => {
  const cache = { key: null, lines: [] };
  const sets = [{ segments: [[[0, 0, 0], [1, 0, 0]]], color: 0xff0000 }];
  const first = cachedLines(cache, sets);
  assert.equal(first.length, 1);
  assert.deepEqual([...first[0].geometry.getAttribute("position").array], [0, 0, 0, 1, 0, 0]);
  let disposed = 0;
  first[0].geometry.addEventListener("dispose", () => { disposed += 1; });
  assert.equal(cachedLines(cache, structuredClone(sets)), first);
  assert.equal(disposed, 0);
  const moved = cachedLines(cache, [{ ...sets[0], color: 0x00ff00 }]);
  assert.notEqual(moved, first);
  assert.equal(disposed, 1);
  assert.equal(moved[0].material.color.getHex(), 0x00ff00);
});
