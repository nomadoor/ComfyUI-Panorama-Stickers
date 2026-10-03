import assert from "node:assert/strict";
import test from "node:test";

import { BufferAttribute, BufferGeometry, Color, DoubleSide, Group, Mesh, MeshStandardMaterial, PerspectiveCamera, Quaternion, Texture, Vector3 } from "three";

import { makeUnlit } from "../web_src/pano_scene_loaders.js";

import {
  DEFAULT_DISTANCE,
  SPLAT_TO_SCENE,
  boundingSphere,
  cameraFrustumSegments,
  cameraTrajectory,
  cameraView,
  contentPoints,
  dollyView,
  frameView,
  gridSpec,
  hasWorldContent,
  initialSpaceView,
  orbitView,
  panView,
  pivotOf,
  projectPoint,
  sceneFilesOf,
  sceneItemBox,
  sceneItemIndex,
  sceneRequest,
  sceneTransform,
  spaceCamera,
  transformPoint,
  viewAxes,
  worldStickerPlane,
} from "../web_src/pano_space.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { evaluateSceneState } from "../web_src/pano_scene_eval.js";

function close(actual, expected, tolerance = 1e-9) {
  assert.ok(Math.abs(actual - expected) <= tolerance, `expected ${expected}, received ${actual}`);
}

function closeVec(actual, expected, tolerance = 1e-9) {
  assert.equal(actual.length, expected.length);
  actual.forEach((value, index) => close(value, expected[index], tolerance));
}

const view = (overrides = {}) => ({ position: [1, 2, 3], yaw_deg: 30, pitch_deg: -10, hFOV_deg: 90, distance: 4, ...overrides });

test("the Viewport camera opens at the World origin, where the Stickers ERP is taken from", () => {
  const start = initialSpaceView(20, 5, 100);
  assert.deepEqual(start, { position: [0, 0, 0], yaw_deg: 20, pitch_deg: 5, hFOV_deg: 100, distance: DEFAULT_DISTANCE });
});

test("view axes follow the panorama angles in World glTF: yaw 0 looks down -Z, positive yaw looks right", () => {
  closeVec(viewAxes(0, 0).forward, [0, 0, -1]);
  closeVec(viewAxes(90, 0).forward, [1, 0, 0]);
  closeVec(viewAxes(0, 90).forward, [0, 1, 0]);
  closeVec(viewAxes(0, 0).right, [1, 0, 0]);
  closeVec(viewAxes(0, 0).up, [0, 1, 0]);
});

test("orbiting keeps the pivot and its distance, and a drag across the view height is a full turn", () => {
  const start = view();
  const turned = orbitView(start, 50, 20, 400);
  closeVec(pivotOf(turned), pivotOf(start));
  close(turned.distance, start.distance);
  close(turned.yaw_deg, start.yaw_deg + 45);
  close(turned.pitch_deg, start.pitch_deg - 18);
  const full = orbitView(start, 400, 0, 400);
  closeVec(full.position, start.position, 1e-9);
});

test("orbiting to the right moves the view to the left of the pivot, like OrbitControls", () => {
  const start = { position: [0, 0, 5], yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, distance: 5 };
  const turned = orbitView(start, 100, 0, 400);
  assert.ok(turned.position[0] < 0);
  closeVec(pivotOf(turned), [0, 0, 0]);
});

test("orbiting stops short of the poles", () => {
  assert.equal(orbitView(view(), 0, -10000, 400).pitch_deg, 89.9);
});

test("panning moves the pivot's plane with the pointer", () => {
  const start = view();
  const width = 800;
  const height = 400;
  const pivot = pivotOf(start);
  const moved = panView(start, 30, -12, width, height);
  close(moved.distance, start.distance);
  const before = projectPoint(spaceCamera(start, width, height), pivot, width, height);
  const after = projectPoint(spaceCamera(moved, width, height), pivot, width, height);
  close(after.x - before.x, 30, 1e-6);
  close(after.y - before.y, -12, 1e-6);
});

test("a pan from a pivot that came close still moves through the content", () => {
  const close = view({ distance: 1e-4 });
  const moved = panView(close, 100, 0, 800, 400, 10);
  assert.ok(Math.hypot(...moved.position.map((value, axis) => value - close.position[axis])) > 0.1);
});

test("a dolly step moves toward the pivot by a part of the distance, and back out", () => {
  const start = view();
  const closer = dollyView(start, 1);
  closeVec(pivotOf(closer), pivotOf(start));
  close(closer.distance, start.distance * 0.85);
  const back = dollyView(start, -1);
  close(back.distance, start.distance * 1.15);
  closeVec(pivotOf(back), pivotOf(start));
});

test("a dolly past the closest pivot distance flies the pivot ahead with the view", () => {
  const start = view({ distance: 0.01 });
  const next = dollyView(start, 1, 1);
  close(next.distance, 0.01);
  const { forward } = viewAxes(start.yaw_deg, start.pitch_deg);
  closeVec(next.position, start.position.map((value, axis) => value + forward[axis] * 0.01));
});

test("framing fits a sphere in the view without turning it", () => {
  const width = 640;
  const height = 360;
  const sphere = { center: [3, -1, -7], radius: 2 };
  const framed = frameView(view(), sphere, width, height);
  assert.equal(framed.yaw_deg, view().yaw_deg);
  closeVec(pivotOf(framed), sphere.center);
  const camera = spaceCamera(framed, width, height);
  const { right, up, forward } = viewAxes(framed.yaw_deg, framed.pitch_deg);
  for (const axis of [right, up, forward]) {
    for (const sign of [-1, 1]) {
      const point = sphere.center.map((value, index) => value + axis[index] * sign * sphere.radius);
      const projected = projectPoint(camera, point, width, height);
      assert.ok(projected.x >= 0 && projected.x <= width && projected.y >= 0 && projected.y <= height);
    }
  }
});

test("the space camera projects like the three.js camera it sets up", () => {
  const width = 500;
  const height = 300;
  const setup = spaceCamera(view(), width, height, { center: [0, 0, 0], radius: 10 });
  const camera = new PerspectiveCamera(setup.fovY_deg, setup.aspect, setup.near, setup.far);
  camera.position.set(...setup.position);
  camera.quaternion.set(setup.quaternion.x, setup.quaternion.y, setup.quaternion.z, setup.quaternion.w);
  camera.updateMatrixWorld();
  const point = pivotOf(view()).map((value, index) => value + [0.7, -0.4, 0.2][index]);
  const ndc = new Vector3(...point).project(camera);
  const projected = projectPoint(setup, point, width, height);
  close(projected.x, (ndc.x + 1) / 2 * width, 1e-6);
  close(projected.y, (1 - ndc.y) / 2 * height, 1e-6);
  assert.equal(projectPoint(setup, setup.position.map((value, index) => value - viewAxes(30, -10).forward[index]), width, height), null);
  assert.ok(setup.near > 0 && setup.far > setup.near);
});

test("the space camera's depth range holds the framed content and the grid, at a bounded ratio", () => {
  const width = 640;
  const height = 360;
  for (const sphere of [{ center: [3, -1, -7], radius: 2 }, { center: [0, 0, 0], radius: 0.01 }, { center: [500, 20, -900], radius: 400 }]) {
    const framed = frameView(view(), sphere, width, height);
    const camera = spaceCamera(framed, width, height, sphere);
    const depth = (p) => {
      const d = p.map((value, axis) => value - camera.position[axis]);
      const { forward } = viewAxes(framed.yaw_deg, framed.pitch_deg);
      return d[0] * forward[0] + d[1] * forward[1] + d[2] * forward[2];
    };
    const { forward, right, up } = viewAxes(framed.yaw_deg, framed.pitch_deg);
    for (const axis of [forward, right, up]) {
      for (const sign of [-1, 1]) {
        const p = sphere.center.map((value, index) => value + axis[index] * sign * sphere.radius);
        assert.ok(depth(p) > camera.near && depth(p) < camera.far, `${sphere.radius}: ${depth(p)}`);
      }
    }
    const half = gridSpec(sphere.radius).size / 2;
    for (const corner of [[half, 0, half], [-half, 0, half], [half, 0, -half], [-half, 0, -half]]) {
      assert.ok(Math.hypot(...corner.map((value, axis) => value - camera.position[axis])) < camera.far);
    }
    assert.ok(camera.far / camera.near < 1e5);
  }
});

test("the scene item at a clip frame is the nearest one, as batch_index picks it", () => {
  assert.equal(sceneItemIndex(-3.2, 1), 0);
  assert.equal(sceneItemIndex(42, 1), 0);
  assert.equal(sceneItemIndex(0, 5), 0);
  assert.equal(sceneItemIndex(2.49, 5), 2);
  assert.equal(sceneItemIndex(2.5, 5), 3);
  assert.equal(sceneItemIndex(4.4, 5), 4);
  assert.equal(sceneItemIndex(4.5, 5), null);
  assert.equal(sceneItemIndex(-0.6, 5), null);
});

test("the scene item follows the scene Clip range and Keyframes at the playhead", () => {
  const state = loadSceneState({
    version: 2,
    scene: {
      clip: { start: 10, in: 2, duration: 20 },
      position: { value: [0, 0, 0], keyframes: [{ frame: 0, value: [0, 0, 0] }, { frame: 10, value: [0, 2, 0] }] },
    },
  });
  const evaluated = evaluateSceneState(state, 13);
  assert.equal(evaluated.scene.active, true);
  assert.equal(sceneItemIndex(evaluated.scene.clip_frame, 8), 5);
  closeVec(evaluated.scene.position, [0, 1, 0], 1e-9);
  assert.equal(evaluateSceneState(state, 9).scene.active, false);
});

test("the scene transform places an item point like the three.js group it sets up", () => {
  const scene = { position: [1, -2, 3], yaw_deg: 40, pitch_deg: 15, roll_deg: -20, scale: 2.5 };
  const transform = sceneTransform(scene);
  const group = new Group();
  group.position.set(...transform.position);
  group.quaternion.set(transform.quaternion.x, transform.quaternion.y, transform.quaternion.z, transform.quaternion.w);
  group.scale.setScalar(transform.scale);
  group.updateMatrixWorld();
  const point = [0.3, -1.2, 2];
  const expected = new Vector3(...point).applyMatrix4(group.matrixWorld);
  closeVec(transformPoint(scene, point), [expected.x, expected.y, expected.z], 1e-9);
});

test("a SPLAT turns 180 degrees about X into the scene frame, as Load3D does", () => {
  const turned = new Vector3(1, 2, 3).applyQuaternion(new Quaternion(SPLAT_TO_SCENE.x, SPLAT_TO_SCENE.y, SPLAT_TO_SCENE.z, SPLAT_TO_SCENE.w));
  closeVec([turned.x, turned.y, turned.z], [1, -2, -3]);
  const box = { min: [-1, -2, 3], max: [4, 5, 6] };
  assert.deepEqual(sceneItemBox("splat", box), { min: [-1, -5, -6], max: [4, 2, -3] });
  assert.equal(sceneItemBox("mesh", box), box);
});

test("a world Sticker plane is scale wide, as tall as its cropped media, and faces a Camera it is in front of", () => {
  const value = { position: [0, 0, -5], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 2 };
  const plane = worldStickerPlane(value, { x0: 0, y0: 0, x1: 0.5, y1: 1 }, 400, 300);
  assert.equal(plane.width, 2);
  close(plane.height, 2 * 300 / 200);
  const normal = new Vector3(0, 0, 1).applyQuaternion(new Quaternion(plane.quaternion.x, plane.quaternion.y, plane.quaternion.z, plane.quaternion.w));
  closeVec([normal.x, normal.y, normal.z], [0, 0, 1]);
  assert.equal(worldStickerPlane(value, { x0: 0.5, y0: 0, x1: 0.5, y1: 1 }, 400, 300), null);
  assert.equal(worldStickerPlane(value, { x0: 0, y0: 0, x1: 1, y1: 1 }, 0, 0), null);
});

test("the content bounds hold the moved scene box and the Sticker planes", () => {
  const evaluated = { scene: { active: true, position: [10, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 2 } };
  const plane = worldStickerPlane({ position: [0, 0, -5], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 2 }, { x0: 0, y0: 0, x1: 1, y1: 1 }, 10, 10);
  const points = contentPoints(evaluated, { min: [-1, -1, -1], max: [1, 1, 1] }, [plane]);
  assert.equal(points.length, 12);
  const sphere = boundingSphere(points);
  closeVec(sphere.center, [5.5, 0, -1.5]);
  assert.ok(points.every((p) => Math.hypot(p[0] - 5.5, p[1], p[2] + 1.5) <= sphere.radius + 1e-9));
  assert.equal(contentPoints({ scene: { ...evaluated.scene, active: false } }, { min: [0, 0, 0], max: [1, 1, 1] }, []).length, 0);
  assert.equal(boundingSphere([]), null);
});

test("the grid spacing follows the content size by powers of ten", () => {
  assert.deepEqual(gridSpec(5), { step: 1, size: 40, divisions: 40 });
  assert.equal(gridSpec(0.4).step, 0.01);
  assert.equal(gridSpec(600).step, 100);
});

test("a Camera's frustum spans its hFOV and aspect, with a mark on its up side", () => {
  const camera = { position: [1, 2, 3], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 90, aspect: 2 };
  const segments = cameraFrustumSegments(camera, 2);
  assert.equal(segments.length, 11);
  closeVec(segments[0][0], [1, 2, 3]);
  closeVec(segments[0][1], [-1, 1, 1]);
  closeVec(segments[2][1], [3, 3, 1]);
  assert.ok(segments[9][0][1] > 3);
});

test("a Camera's trajectory samples its position Lane over the Timeline", () => {
  const still = loadSceneState({ version: 2, camera: { position: { value: [1, 2, 3], keyframes: [] } } });
  assert.deepEqual(cameraTrajectory(still, 100), [[1, 2, 3]]);
  const moving = loadSceneState({
    version: 2,
    camera: { position: { value: [0, 0, 0], keyframes: [{ frame: 0, value: [0, 0, 0] }, { frame: 10, value: [10, 0, 0], easing: "auto" }] } },
  });
  const path = cameraTrajectory(moving, 11);
  assert.equal(path.length, 11);
  closeVec(path[0], [0, 0, 0]);
  closeVec(path[10], [10, 0, 0]);
  assert.equal(cameraTrajectory(moving, 5000, 100).length, 100);
  const view = cameraView(evaluateSceneState(moving, 10).camera);
  closeVec(view.position, [10, 0, 0]);
});

test("a scene GLB draws unlit on both sides with its base color, texture and vertex colors", () => {
  const map = new Texture();
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(new Float32Array(9), 3));
  const textured = new Mesh(geometry, new MeshStandardMaterial({ map, color: new Color(0.5, 0.25, 1) }));
  const colored = new Mesh(geometry, [new MeshStandardMaterial({ vertexColors: true })]);
  const root = new Group().add(textured, colored);
  makeUnlit(root);
  assert.equal(textured.material.type, "MeshBasicMaterial");
  assert.equal(textured.material.map, map);
  assert.equal(textured.material.side, DoubleSide);
  assert.deepEqual(textured.material.color.toArray(), [0.5, 0.25, 1]);
  assert.equal(colored.material[0].type, "MeshBasicMaterial");
  assert.equal(colored.material[0].vertexColors, true);
  assert.equal(colored.material[0].side, DoubleSide);
});

test("the scene files of a node result give the kind and a URL per item, null for an empty item", () => {
  const source = (entry) => `/view?filename=${entry.filename}`;
  const files = [{ filename: "a.glb" }, null, { filename: "c.glb" }];
  assert.deepEqual(sceneFilesOf(files, [{ kind: "mesh" }], source), { kind: "mesh", urls: ["/view?filename=a.glb", null, "/view?filename=c.glb"] });
  assert.equal(sceneFilesOf([], [{ kind: "mesh" }], source), null);
  assert.equal(sceneFilesOf(files, [{ kind: "points" }], source), null);
  assert.equal(sceneFilesOf(files, [], source), null);
});

test("the space view shows when scene is linked, its files are in the result, or a world Sticker is there", () => {
  const sky = [{ placement: "sky" }];
  assert.equal(hasWorldContent({ sceneLinked: false, files: null, stickers: sky }), false);
  assert.equal(hasWorldContent({ sceneLinked: true, files: null, stickers: [] }), true);
  assert.equal(hasWorldContent({ sceneLinked: false, files: { kind: "mesh", urls: ["a"] }, stickers: [] }), true);
  assert.equal(hasWorldContent({ sceneLinked: false, files: null, stickers: [...sky, { placement: "world" }] }), true);
});

test("the scene request names the item of the frame, the next one ahead, and the turn of a SPLAT", () => {
  const scene = { active: true, clip_frame: 1.2, position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 1 };
  const files = { kind: "mesh", urls: ["a", null, "c", "d"] };
  const request = sceneRequest(files, scene);
  assert.equal(request.url, null);
  assert.deepEqual(request.urls, ["a", "c", "d"]);
  assert.deepEqual(request.prefetch, ["c"]);
  assert.deepEqual(request.itemQuaternion, { x: 0, y: 0, z: 0, w: 1 });
  assert.equal(sceneRequest(files, { ...scene, clip_frame: 3 }).url, "d");
  assert.deepEqual(sceneRequest(files, { ...scene, clip_frame: 3 }).prefetch, []);
  assert.equal(sceneRequest(files, { ...scene, clip_frame: 7 }).url, null);
  assert.equal(sceneRequest(files, { ...scene, active: false }), null);
  assert.equal(sceneRequest(null, scene), null);
  assert.deepEqual(sceneRequest({ kind: "splat", urls: ["s"] }, { ...scene, clip_frame: 40 }).itemQuaternion, SPLAT_TO_SCENE);
});
