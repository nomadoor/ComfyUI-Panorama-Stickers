import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { BufferAttribute, BufferGeometry, Color, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, Quaternion, Scene, Texture, Vector3 } from "three";

import { placeDirection } from "../web_src/pano_editor_view.js";
import { makeUnlit } from "../web_src/pano_scene_loaders.js";
import { applyViewportCamera, createGizmo } from "../web_src/pano_three_view.js";
import { pickRay, pointAt } from "../web_src/pano_pick.js";

import {
  DEFAULT_DISTANCE,
  SPLAT_TO_SCENE,
  boundingSphere,
  cameraFrustumSegments,
  planeCorners,
  planeOutlineSegments,
  cameraTrajectory,
  contentPoints,
  depthOf,
  facingRotation,
  fit3dPosition,
  fitDistance,
  fitSphereOfBox,
  FIT_3D_MIN_DISTANCE,
  FIT_FALLBACK_FOV_DEG,
  DEFAULT_VIEW_HFOV,
  fileStickerKey,
  fileStickerRequests,
  frameSphere,
  frameView,
  gizmoDragLanes,
  gizmoScreenBox,
  gridSpec,
  hasWorldContent,
  initialSpaceView,
  navigationTarget,
  newWorld3dStickerTransform,
  newWorldStickerTransform,
  NEW_WORLD_STICKER_DISTANCE,
  orbitView,
  panDepth,
  panView,
  pivotOf,
  placedCamera,
  polylineSegments,
  projectPoint,
  reuseWheelPick,
  multiviewKey,
  DEPTH_GRID_PREFETCH,
  sceneFilesOf,
  sceneItemBox,
  sceneItemIndex,
  sceneRequest,
  sceneTransform,
  segmentsHit,
  spaceCamera,
  spaceModeView,
  spaceModeWithContent,
  stickerContentRequest,
  stickerContentUrls,
  switchSpaceMode,
  transformPoint,
  uniformScale,
  viewAxes,
  worldStickerPlane,
  zoomView,
} from "../web_src/pano_space.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { worldRotation } from "../web_src/pano_world.js";
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

// Where a World point lands on a width x height view.
function onScreen(v, p, width = 800, height = 400) {
  return projectPoint(spaceCamera(v, width, height), p, width, height);
}

test("orbiting about a point under the pointer keeps it in its place on the screen and turns like OrbitControls", () => {
  const start = view();
  const width = 800;
  const height = 400;
  // A point off the view's axis, ahead of it.
  const { right, up, forward } = viewAxes(start.yaw_deg, start.pitch_deg);
  const point = [0, 1, 2].map((axis) => start.position[axis] + forward[axis] * 3 + right[axis] * 1.2 - up[axis] * 0.5);
  const before = onScreen(start, point, width, height);
  let turned = start;
  for (const [dx, dy] of [[40, 0], [0, -25], [-70, 30], [15, 15]]) turned = orbitView(turned, dx, dy, height, point);
  const after = onScreen(turned, point, width, height);
  close(after.x, before.x, 1e-6);
  close(after.y, before.y, 1e-6);
  close(after.z, before.z, 1e-9);
  // The angles turn as the drags add up, and the distance to the point stays.
  close(turned.yaw_deg, start.yaw_deg - 15 / height * 360);
  close(turned.pitch_deg, start.pitch_deg - 20 / height * 360);
  const distance = (v) => Math.hypot(...v.position.map((value, axis) => value - point[axis]));
  close(distance(turned), distance(start));
  // The view's pivot goes to the point's depth, so it stays in sight.
  close(turned.distance, depthOf(turned, point));
  assert.ok(turned.distance > 0);
});

test("the point a drag or a wheel step works on is the content under the pointer, else the content center until the view moves, else the pivot", () => {
  const start = view();
  const hit = [1, 1, 1];
  assert.deepEqual(navigationTarget(start, hit, [5, 5, 5]), hit);
  const { forward } = viewAxes(start.yaw_deg, start.pitch_deg);
  const ahead = start.position.map((value, axis) => value + forward[axis] * 7);
  assert.deepEqual(navigationTarget(start, null, ahead), ahead);
  // A center behind the view is not turned about; neither is one once the view has moved (null).
  const behind = start.position.map((value, axis) => value - forward[axis] * 7);
  closeVec(navigationTarget(start, null, behind), pivotOf(start));
  closeVec(navigationTarget(start, null, null), pivotOf(start));
});

test("over empty space a view stuck to its pivot or to the content's center still pans, zooms in and orbits", () => {
  const scale = 2;
  const width = 800;
  const height = 400;
  const moved = (a, b) => Math.hypot(...a.position.map((value, axis) => value - b.position[axis]));
  // Zoomed up to the pivot, and standing next to the content's center.
  const stuck = { position: [0, 0, 0], yaw_deg: 20, pitch_deg: -5, hFOV_deg: 90, distance: 1e-5 };
  const { forward } = viewAxes(stuck.yaw_deg, stuck.pitch_deg);
  const nearCenter = stuck.position.map((value, axis) => value + forward[axis] * 1e-5);
  for (const center of [null, nearCenter]) {
    const target = navigationTarget(stuck, null, center, scale);
    close(Math.hypot(...target.map((value, axis) => value - stuck.position[axis])), scale * 0.05, 1e-9);
    // A 100 px pan moves the view by a part of the content's size.
    assert.ok(moved(panView(stuck, 100, 0, width, height, panDepth(stuck, scale)), stuck) > scale * 0.01);
    // Each wheel step in moves at least the shortest step, step after step.
    let view = stuck;
    for (let step = 0; step < 10; step += 1) {
      const next = zoomView(view, navigationTarget(view, null, null, scale), 1, scale);
      assert.ok(moved(next, view) >= scale * 0.01 - 1e-12);
      view = next;
    }
    // An orbit swings the view around the point ahead.
    assert.ok(moved(orbitView(stuck, 100, 0, height, target), stuck) > scale * 0.01);
  }
  // A hit is used as it is, however close.
  assert.deepEqual(navigationTarget(stuck, nearCenter, null, scale), nearCenter);
  // A pivot farther than the minimum stays.
  closeVec(navigationTarget(view(), null, null, scale), pivotOf(view()));
});

test("a wheel step reuses the last pick near it in place and time, for longer after a slow pick, and never once the content or the view changed", () => {
  const last = { x: 100, y: 50, time: 1000, cost: 5, key: "a", view: "v", wheelTime: 1000, hit: [0, 0, -1] };
  const at = (overrides) => ({ x: 100, y: 50, time: 1100, key: "a", view: "v", ...overrides });
  assert.equal(reuseWheelPick(null, at({})), false);
  assert.equal(reuseWheelPick(last, at({})), true);
  assert.equal(reuseWheelPick(last, at({ x: 103, y: 52 })), true);
  assert.equal(reuseWheelPick(last, at({ x: 104, y: 53 })), false);
  assert.equal(reuseWheelPick(last, at({ time: 1250 })), false);
  assert.equal(reuseWheelPick(last, at({ key: "b" })), false);
  assert.equal(reuseWheelPick(last, at({ view: "w" })), false);
  // A pick over 16 ms holds while the wheel keeps turning (steps under 250 ms apart).
  const slow = { ...last, cost: 40, wheelTime: 1900 };
  assert.equal(reuseWheelPick(slow, at({ time: 2100 })), true);
  assert.equal(reuseWheelPick(slow, at({ time: 2200 })), false);
  assert.equal(reuseWheelPick({ ...last, wheelTime: 1900 }, at({ time: 2100 })), false);
  assert.equal(reuseWheelPick(slow, at({ time: 2100, key: "b" })), false);
});

test("panning moves the pivot's plane with the pointer exactly, along the view's rolled screen axes", () => {
  const width = 800;
  const height = 400;
  for (const roll_deg of [0, 30, 90, -90, 180]) {
    for (const depth of [0.02, 3, 250]) {
      const start = view({ roll_deg, distance: depth });
      const { right, up, forward } = viewAxes(start.yaw_deg, start.pitch_deg, roll_deg);
      const grabbed = [0, 1, 2].map((axis) => start.position[axis] + forward[axis] * depth + right[axis] * depth * 0.3 + up[axis] * depth * 0.1);
      let moved = start;
      const before = onScreen(moved, grabbed, width, height);
      for (const [dx, dy] of [[30, -12], [-5, 40], [100, 0]]) moved = panView(moved, dx, dy, width, height);
      const after = onScreen(moved, grabbed, width, height);
      close(after.x - before.x, 125, 1e-6 * Math.max(1, depth));
      close(after.y - before.y, 28, 1e-6 * Math.max(1, depth));
      close(moved.distance, depth, 1e-9 * depth);
      assert.equal(moved.roll_deg, roll_deg);
    }
  }
});

test("a pan moves at the pivot's depth, never closer than a part of the content's size, whatever the pointer is over", () => {
  const scale = 10;
  assert.equal(panDepth(view({ distance: 4 }), scale), 4);
  assert.equal(panDepth(view({ distance: 1e-5 }), scale), scale * 0.05);
  assert.equal(panDepth(view({ distance: 1e-5 })), DEFAULT_DISTANCE * 0.05);
});

test("a 100 px pan moves the same whatever is under the pointer and whatever wheel steps came before", () => {
  const scale = 10;
  const width = 1600;
  const height = 900;
  const moved = (a, b) => Math.hypot(...a.position.map((value, axis) => value - b.position[axis]));
  const panned = (v) => moved(panView(v, 100, 0, width, height, panDepth(v, scale)), v);
  // The Frame view's Camera stands in the content; its pivot is the content's size ahead (pano_editor.js
  // frameViewDistance), so a pan after wheel steps up to a wall moves as much as the first one.
  const shot = { position: [0, 1.6, 0], yaw_deg: 0, pitch_deg: -10, roll_deg: 0, hFOV_deg: 60 };
  const frameView = (camera) => ({ ...camera, distance: scale });
  const first = panned(frameView(shot));
  const { forward } = viewAxes(shot.yaw_deg, shot.pitch_deg);
  const wall = shot.position.map((value, axis) => value + forward[axis] * 6);
  let camera = frameView(shot);
  for (let step = 0; step < 30; step += 1) {
    const { distance, ...placed } = zoomView(frameView(camera), wall, 1, scale);
    camera = placed;
  }
  assert.ok(moved(camera, shot) > 5);
  close(panned(frameView(camera)), first, 1e-12);
  // The Viewport camera keeps the pivot its wheel steps leave, but never closer than a part of the
  // content's size: the pan slows by at most that much, and does not stop.
  let space = { ...shot, distance: scale };
  for (let step = 0; step < 30; step += 1) space = zoomView(space, wall, 1, scale);
  assert.ok(space.distance >= scale * 0.05 - 1e-12, String(space.distance));
  assert.ok(panned(space) >= first * 0.05 - 1e-12);
});

test("orbiting a rolled view keeps its roll and its pivot on the screen, and the content follows the drag as without roll", () => {
  const width = 800;
  const height = 400;
  const direction = (roll_deg) => {
    const start = view({ roll_deg, distance: 5 });
    const { forward } = viewAxes(start.yaw_deg, start.pitch_deg, roll_deg);
    const near = start.position.map((value, axis) => value + forward[axis] * 2);
    const turned = orbitView(start, 3, -1, height);
    assert.equal(turned.roll_deg, roll_deg);
    const pivotBefore = onScreen(start, pivotOf(start), width, height);
    const pivotAfter = onScreen(turned, pivotOf(start), width, height);
    close(pivotAfter.x, pivotBefore.x, 1e-6);
    close(pivotAfter.y, pivotBefore.y, 1e-6);
    const before = onScreen(start, near, width, height);
    const after = onScreen(turned, near, width, height);
    const dx = after.x - before.x;
    const dy = after.y - before.y;
    return [dx / Math.hypot(dx, dy), dy / Math.hypot(dx, dy)];
  };
  const level = direction(0);
  for (const roll of [30, 90, -90, 180]) closeVec(direction(roll), level, 0.05);
});

test("a wheel step moves toward the point under the pointer, which stays under it", () => {
  const start = view();
  const width = 800;
  const height = 400;
  const { right, up, forward } = viewAxes(start.yaw_deg, start.pitch_deg);
  const target = [0, 1, 2].map((axis) => start.position[axis] + forward[axis] * 4 + right[axis] * 1.5 + up[axis] * 0.8);
  const distance = (v) => Math.hypot(...v.position.map((value, axis) => value - target[axis]));
  const before = onScreen(start, target, width, height);
  const closer = zoomView(start, target, 1, 1);
  close(distance(closer), distance(start) * 0.85);
  const after = onScreen(closer, target, width, height);
  close(after.x, before.x, 1e-6);
  close(after.y, before.y, 1e-6);
  assert.equal(closer.yaw_deg, start.yaw_deg);
  close(closer.distance, depthOf(closer, target));
  // A step out undoes a step in.
  closeVec(zoomView(closer, target, -1, 1).position, start.position, 1e-9);
  // Without content under the pointer, the target is the pivot, which the view does not push ahead.
  const pivot = pivotOf(start);
  const toPivot = zoomView(start, pivot, 1, 1);
  closeVec(pivotOf(toPivot), pivot, 1e-9);
  close(toPivot.distance, start.distance * 0.85);
});

test("wheel steps toward a point do not stall as they come close, and stop short of it", () => {
  const scale = 2;
  const target = [0, 0, -10];
  let current = { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, distance: 10 };
  const distances = [];
  for (let step = 0; step < 400; step += 1) {
    current = zoomView(current, target, 1, scale);
    distances.push(Math.hypot(...current.position.map((value, axis) => value - target[axis])));
  }
  // Every step moves closer until the last stop, which is still in front of the point.
  const stop = distances.at(-1);
  assert.ok(stop > 0 && stop < scale * 0.01, String(stop));
  assert.ok(current.position[2] > target[2]);
  const reached = distances.indexOf(stop);
  assert.ok(reached < 100, `reached after ${reached} steps`);
  for (let index = 1; index <= reached; index += 1) assert.ok(distances[index] < distances[index - 1]);
  // Near the point a step is still a part of the content's size, not of the shrinking distance.
  const near = { ...current, position: [0, 0, -9.9], distance: 0.1 };
  close(Math.hypot(...zoomView(near, target, 1, scale).position.map((value, axis) => value - near.position[axis])), scale * 0.01);
  // At the stop it stays.
  closeVec(zoomView(current, target, 1, scale).position, current.position, 1e-12);
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

test("Frame Selected fits the selected world Sticker, else all the content", () => {
  const content = { center: [0, 0, 0], radius: 50 };
  const world = { placement: "world" };
  const value = { active: true, position: [3, 0, -5], yaw_deg: 90, pitch_deg: 0, roll_deg: 0, scale: 2 };
  // A plane: the sphere through its corners, around its position.
  const plane = worldStickerPlane(value, { x0: 0, y0: 0, x1: 1, y1: 0.75 }, 400, 400);
  const planeSphere = frameSphere(content, { sticker: world, value, plane, item: null });
  closeVec(planeSphere.center, [3, 0, -5]);
  close(planeSphere.radius, Math.hypot(1, 0.75));
  // A 3D item: its box in the scene frame (a SPLAT's turned by sceneItemBox) moved by the transform.
  const box = { min: [0, 0, 0], max: [2, 2, 2] };
  const unturned = { ...value, yaw_deg: 0 };
  const splat = frameSphere(content, { sticker: world, value: unturned, plane: null, item: { kind: "splat", box } });
  closeVec(splat.center, [5, -2, -7]);
  close(splat.radius, 2 * Math.sqrt(3));
  const mesh = frameSphere(content, { sticker: world, value: unturned, plane: null, item: { kind: "mesh", box } });
  closeVec(mesh.center, [5, 2, -3]);
  // Not loaded yet: a sphere as big as its scale at its position.
  assert.deepEqual(frameSphere(content, { sticker: world, value, plane: null, item: null }), { center: [3, 0, -5], radius: 2 });
  assert.deepEqual(frameSphere(null, { sticker: world, value, plane: null, item: { kind: "mesh", box: null } }), { center: [3, 0, -5], radius: 2 });
  // Nothing selected, a sky Sticker selected, or a world Sticker outside its Clip range: all the content.
  assert.equal(frameSphere(content, null), content);
  assert.equal(frameSphere(null, null), null);
  assert.equal(frameSphere(content, { sticker: { placement: "sky" }, value, plane: null, item: null }), content);
  assert.equal(frameSphere(content, { sticker: world, value: { ...value, active: false }, plane, item: null }), content);
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

test("the scene files of a node result give the kind, whether light falls on it and a URL per item, null for an empty item", () => {
  const source = (entry) => `/view?filename=${entry.filename}`;
  const files = [{ filename: "a.glb" }, null, { filename: "c.glb" }];
  assert.deepEqual(sceneFilesOf(files, [{ kind: "mesh", unlit: false }], source), { kind: "mesh", unlit: false, urls: ["/view?filename=a.glb", null, "/view?filename=c.glb"], sources: {} });
  assert.equal(sceneFilesOf(files, [{ kind: "mesh", unlit: true }], source).unlit, true);
  // A result without the mark (a SPLAT, or one from before the mark) draws without light, as before.
  assert.equal(sceneFilesOf(files, [{ kind: "mesh" }], source).unlit, true);
  assert.equal(sceneFilesOf(files, [{ kind: "splat" }], source).unlit, true);
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
  // The material follows the mark of the files.
  assert.equal(sceneRequest({ ...files, unlit: false }, scene).unlit, false);
  assert.equal(sceneRequest(files, scene).unlit, true);
});

test("3DoF keeps the view at the World origin, where the ERP is taken from, whatever 6DoF did", () => {
  let moved = view({ position: [0, 0, 0] });
  moved = orbitView(moved, 120, -40, 600);
  moved = panView(moved, 30, 10, 800, 600, 2);
  moved = zoomView(moved, pivotOf(moved), 1, 2);
  assert.notDeepEqual(moved.position, [0, 0, 0]);
  const fixed = spaceModeView("3dof", moved);
  assert.deepEqual(fixed.position, [0, 0, 0]);
  // The direction and the FOV stay.
  assert.equal(fixed.yaw_deg, moved.yaw_deg);
  assert.equal(fixed.pitch_deg, moved.pitch_deg);
  assert.equal(fixed.hFOV_deg, moved.hFOV_deg);
  assert.deepEqual(spaceCamera(fixed, 800, 600).position, [0, 0, 0]);
  // 6DoF moves freely, and starts from the origin 3DoF stood at.
  assert.equal(spaceModeView("6dof", moved), moved);
  assert.deepEqual(spaceModeView("6dof", fixed).position, [0, 0, 0]);
});

test("the content bounds hold the boxes of the 3D Stickers' items moved by their transforms", () => {
  const evaluated = { scene: { active: false } };
  const value = { position: [0, 0, -2], yaw_deg: 90, pitch_deg: 0, roll_deg: 0, scale: 2 };
  const points = contentPoints(evaluated, null, [], [{ box: { min: [0, 0, 0], max: [1, 1, 1] }, value }]);
  assert.equal(points.length, 8);
  // Yaw 90 looks down +X: the item's +X goes to World +Z and its +Z (back) to World -X.
  closeVec(points[0], [0, 0, -2]);
  assert.ok(points.some((p) => Math.hypot(p[0], p[1], p[2]) < 1e-9));
  assert.ok(points.some((p) => Math.hypot(p[0] + 2, p[1], p[2] + 2) < 1e-9));
  closeVec(boundingSphere(points).center, transformPoint(value, [0.5, 0.5, 0.5]));
});

test("a 3D port Sticker (#63) draws the item of its batch at its clip frame with its transform and opacity", () => {
  const port = (extra = {}) => ({
    id: "sticker_1",
    placement: "world",
    source: { kind: "port" },
    clip: { start: 10, in: 0, duration: 20 },
    position: { value: [0, 0, -2], keyframes: [{ frame: 0, value: [0, 0, -2] }, { frame: 10, value: [0, 2, -2] }] },
    rotation: { value: { yaw_deg: 30, pitch_deg: 0, roll_deg: 0 }, keyframes: [] },
    scale: { value: 1.5, keyframes: [] },
    opacity: { value: 0.25, keyframes: [] },
    ...extra,
  });
  const state = loadSceneState({ version: 2, stickers: [{ id: "a", placement: "sky", source: { kind: "file", filename: "a.png" } }, port()] });
  const files = { kind: "mesh", urls: ["m0", "m1", "m2", null, "m4", "m5", "m6"] };
  const at = (frame) => stickerContentRequest(files, state, evaluateSceneState(state, frame));
  const request = at(15);
  // Clip frame 5: the nearest item, as the node's batch_index picks it, with the next one ahead.
  assert.equal(request.url, "m5");
  assert.deepEqual(request.prefetch, ["m6"]);
  assert.deepEqual(request.urls, ["m0", "m1", "m2", "m4", "m5", "m6"]);
  assert.equal(request.id, "sticker_1");
  assert.equal(request.opacity, 0.25);
  assert.deepEqual(request.itemQuaternion, { x: 0, y: 0, z: 0, w: 1 });
  closeVec(request.transform.position, [0, 1, -2]);
  assert.equal(request.transform.scale, 1.5);
  const expected = sceneTransform({ position: [0, 1, -2], yaw_deg: 30, pitch_deg: 0, roll_deg: 0, scale: 1.5 });
  closeVec(Object.values(request.transform.quaternion), Object.values(expected.quaternion));
  assert.equal(at(13).url, null);
  assert.equal(at(12.4).url, "m2");
  // Outside its Clip range and hidden, nothing draws.
  assert.equal(at(9), null);
  assert.equal(at(30), null);
  const hidden = loadSceneState({ version: 2, stickers: [port({ visible: false })] });
  assert.equal(stickerContentRequest(files, hidden, evaluateSceneState(hidden, 15)), null);
  // A single item shows throughout the Clip range; a SPLAT turns into the scene frame first.
  const single = stickerContentRequest({ kind: "splat", urls: ["s"] }, state, evaluateSceneState(state, 29));
  assert.equal(single.url, "s");
  assert.deepEqual(single.itemQuaternion, SPLAT_TO_SCENE);
  // Without the node's files, or while the port Sticker is still sky, nothing draws.
  assert.equal(stickerContentRequest(null, state, evaluateSceneState(state, 15)), null);
  const sky = loadSceneState({ version: 2, stickers: [{ id: "sticker_1", placement: "sky", source: { kind: "port" } }] });
  assert.equal(stickerContentRequest(files, sky, evaluateSceneState(sky, 0)), null);
});

test("switching back to 3DoF returns to the origin, as does 6DoF losing its World content", () => {
  const opened = { mode: "3dof", position: [0, 0, 0], moved: false };
  const free = switchSpaceMode(opened, "6dof");
  assert.deepEqual(free, { mode: "6dof", position: [0, 0, 0], moved: false });
  const moved = { mode: "6dof", position: [3, 1, -2], moved: true };
  assert.deepEqual(switchSpaceMode(moved, "3dof"), opened);
  // With content the mode stays; without it 6DoF goes back to 3DoF at the origin.
  assert.equal(spaceModeWithContent(moved, true), moved);
  const lost = spaceModeWithContent(moved, false);
  assert.deepEqual(lost, opened);
  // Content that shows again starts in 3DoF, at the origin.
  assert.equal(spaceModeWithContent(lost, true), lost);
  assert.deepEqual(spaceModeView(lost.mode, view({ position: lost.position })).position, [0, 0, 0]);
});

test("the 3D Sticker's items stay loaded only while the state has a world port Sticker", () => {
  const files = { kind: "mesh", urls: ["a", null, "c"] };
  const state = (placement) => loadSceneState({ version: 2, stickers: [{ id: "p", placement, source: { kind: "port" } }] });
  assert.deepEqual(stickerContentUrls(files, state("world")), ["a", "c"]);
  assert.deepEqual(stickerContentUrls(files, state("sky")), []);
  assert.deepEqual(stickerContentUrls(files, loadSceneState({ version: 2, stickers: [] })), []);
  assert.deepEqual(stickerContentUrls(null, state("world")), []);
});

// The plane of a world Sticker at rotation faces `from` upright: its local +Z points at `from` and
// its local +Y has no part across the line of sight to the left or right.
function assertFaces(rotation, at, from) {
  const matrix = worldRotation(rotation.yaw_deg, rotation.pitch_deg, rotation.roll_deg);
  const back = [matrix[0][2], matrix[1][2], matrix[2][2]];
  const toView = from.map((value, axis) => value - at[axis]);
  const length = Math.hypot(...toView);
  closeVec(back, toView.map((value) => value / length), 1e-9);
  const right = [matrix[0][0], matrix[1][0], matrix[2][0]];
  close(right[1], 0, 1e-9);
}

test("a new world Sticker goes on the surface under the pointer, facing the view", () => {
  const width = 640;
  const height = 360;
  const start = { position: [0.5, 1, 2], yaw_deg: 10, pitch_deg: -5, hFOV_deg: 90, distance: 1 };
  const camera = spaceCamera(start, width, height);
  // The pointer over a point of a surface picks that point at its depth.
  const onFace = [0.8, 0.4, -5.5];
  const pointer = projectPoint(camera, onFace, width, height);
  const hit = pointAt(pickRay(camera, pointer.x, pointer.y, width, height), pointer.z);
  closeVec(hit, onFace, 1e-6);
  const placed = newWorldStickerTransform(start, hit, { center: [0, 0, -6], radius: 3 });
  closeVec(placed.position, hit);
  assertFaces(placed.rotation, placed.position, start.position);
  // As wide as a new sky Sticker (30 degrees) looks from the view.
  const distance = Math.hypot(...hit.map((value, axis) => value - start.position[axis]));
  close(placed.scale, 2 * distance * Math.tan(15 * Math.PI / 180));
});

test("without a surface under the pointer a new world Sticker goes ahead at half the content's radius", () => {
  const start = { position: [0.5, 1, 2], yaw_deg: 40, pitch_deg: 20, hFOV_deg: 90, distance: 1 };
  const placed = newWorldStickerTransform(start, null, { center: [9, 9, 9], radius: 6 });
  closeVec(placed.position, start.position.map((value, axis) => value + viewAxes(40, 20).forward[axis] * 3));
  // Straight ahead it has the view's own angles, so it faces the view.
  close(placed.rotation.yaw_deg, 40);
  close(placed.rotation.pitch_deg, 20);
  close(placed.rotation.roll_deg, 0);
  assertFaces(placed.rotation, placed.position, start.position);
  // Without content it goes the default distance ahead; in 3DoF that is from the ERP origin.
  const origin = { ...start, position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0 };
  const empty = newWorldStickerTransform(origin, null, null);
  closeVec(empty.position, [0, 0, -NEW_WORLD_STICKER_DISTANCE]);
  assert.deepEqual(empty.rotation, { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 });
  // A sphere without size counts as no content.
  closeVec(newWorldStickerTransform(origin, null, { center: [0, 0, -1], radius: 0 }).position, [0, 0, -NEW_WORLD_STICKER_DISTANCE]);
});

test("a plane facing a point keeps rotation 0 for a view of rotation 0 behind it", () => {
  assert.deepEqual(facingRotation([0, 0, 0], [0, 0, -3]), { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 });
  for (const at of [[2, 0, 0], [-1, 2, 3], [0.3, -4, -1]]) assertFaces(facingRotation([0, 0, 0], at), at, [0, 0, 0]);
});

test("a gizmo drag sets only its mode's Lane, from the Sticker's value where it is edited", () => {
  const value = { position: [1, -2, 3], yaw_deg: 120, pitch_deg: -35, roll_deg: 20, scale: 2.5 };
  const start = sceneTransform(value);
  // Not moved, it gives the value back.
  const still = { ...start, scale: [2.5, 2.5, 2.5] };
  closeVec(gizmoDragLanes("translate", value, start, still).position, value.position);
  const same = gizmoDragLanes("rotate", value, start, still).rotation;
  closeVec([same.yaw_deg, same.pitch_deg, same.roll_deg], [120, -35, 20], 1e-9);
  assert.deepEqual(gizmoDragLanes("scale", value, start, still), { scale: 2.5 });

  // The drag's change applies to the base: here playback stopped on another frame than the grab's.
  const base = { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 1 };
  assert.deepEqual(gizmoDragLanes("translate", base, start, { ...still, position: [2, -2, 4] }), { position: [1, 0, 1] });
  assert.deepEqual(gizmoDragLanes("scale", base, start, { ...still, scale: [5, 2.5, 2.5] }), { scale: 2 });
  // A turn of 90 degrees about World +Y turns a Sticker of rotation 0 to yaw -90 (World +Y turns -Z toward -X, the left).
  const turned = { ...still, quaternion: { x: 0, y: Math.SQRT1_2, z: 0, w: Math.SQRT1_2 } };
  const startIdentity = { ...start, quaternion: { x: 0, y: 0, z: 0, w: 1 } };
  const { rotation } = gizmoDragLanes("rotate", base, startIdentity, turned);
  closeVec([rotation.yaw_deg, rotation.pitch_deg, rotation.roll_deg], [-90, 0, 0], 1e-9);
  assert.deepEqual(Object.keys(gizmoDragLanes("rotate", base, startIdentity, turned)), ["rotation"]);
});

test("a gizmo's scale stays uniform, taking the axis the drag changed", () => {
  assert.equal(uniformScale(2, [3, 2, 2]), 3);
  assert.equal(uniformScale(2, [2, 1, 2]), 1);
  assert.equal(uniformScale(2, [4, 4, 4]), 4);
  // A drag through the center does not turn it inside out.
  assert.equal(uniformScale(2, [-1, 2, 2]), 2e-3);
});

test("the gizmo drags its handle with the pointer and lets go when it stops showing", () => {
  const camera = new PerspectiveCamera(60, 16 / 9, 0.01, 100);
  camera.updateMatrixWorld();
  const world = new Scene();
  const gizmo = createGizmo(camera);
  const at = (x, y, z) => new Vector3(x, y, z).project(camera);
  const transform = (position) => ({ position, quaternion: { x: 0, y: 0, z: 0, w: 1 }, scale: 1 });
  const show = (position) => {
    world.clear();
    world.add(...gizmo.show({ mode: "translate", transform: transform(position) }));
    world.updateMatrixWorld(true);
  };
  show([0, 0, -5]);
  // The X arrow is grabbed and drags along X with the pointer.
  const grab = at(0.7, 0, -5);
  assert.equal(gizmo.pointer("hover", grab.x, grab.y), "X");
  assert.equal(gizmo.pointer("down", grab.x, grab.y), true);
  const to = at(1.7, 0.3, -5);
  closeVec(gizmo.pointer("move", to.x, to.y).position, [1, 0, -5], 1e-6);
  // While it is dragged a frame does not put it back at the Sticker's value: it stays with the pointer.
  show([3, 3, -5]);
  closeVec(gizmo.pointer("move", to.x, to.y).position, [1, 0, -5], 1e-6);
  gizmo.pointer("up", to.x, to.y);
  assert.equal(gizmo.pointer("move", to.x, to.y), null);

  // A frame without the gizmo (playback left the Clip range, the Sticker went away) ends a drag, and the
  // gizmo can be grabbed again when it shows.
  show([0, 0, -5]);
  gizmo.pointer("hover", grab.x, grab.y);
  assert.equal(gizmo.pointer("down", grab.x, grab.y), true);
  world.clear();
  gizmo.hide();
  assert.equal(gizmo.pointer("move", to.x, to.y), null);
  assert.equal(gizmo.pointer("hover", grab.x, grab.y), null);
  gizmo.pointer("up", to.x, to.y);
  show([0, 0, -5]);
  assert.equal(gizmo.pointer("move", to.x, to.y), null);
  assert.equal(gizmo.pointer("hover", grab.x, grab.y), "X");
  assert.equal(gizmo.pointer("down", grab.x, grab.y), true);
  closeVec(gizmo.pointer("move", to.x, to.y).position, [1, 0, -5], 1e-6);
  gizmo.dispose();
});

test("the box a gizmo covers on screen holds all its handles and their pickers", () => {
  const width = 800;
  const height = 450;
  const views = [
    { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, distance: 1 },
    { position: [1, 0.5, 2], yaw_deg: 30, pitch_deg: -20, hFOV_deg: 50, distance: 1 },
  ];
  const quaternion = new Quaternion().setFromAxisAngle(new Vector3(1, 2, 3).normalize(), 0.7);
  for (const view of views) {
    const setup = spaceCamera(view, width, height);
    const camera = new PerspectiveCamera();
    camera.position.set(...setup.position);
    applyViewportCamera(camera, setup);
    const gizmo = createGizmo(camera);
    const world = new Scene();
    const { right, forward } = viewAxes(view.yaw_deg, view.pitch_deg);
    // At the view's center and off to its side, near and far.
    const points = [[0, 3], [1.5, 3], [-4, 6], [0.3, 1.2]].map(([side, ahead]) => setup.position.map((value, i) => value + right[i] * side + forward[i] * ahead));
    for (const mode of ["translate", "rotate", "scale"]) {
      for (const position of points) {
        world.clear();
        world.add(...gizmo.show({ mode, transform: { position, quaternion: { x: quaternion.x, y: quaternion.y, z: quaternion.z, w: quaternion.w }, scale: 1 } }));
        world.updateMatrixWorld(true);
        const box = gizmoScreenBox(setup, position, mode, width, height);
        const handles = world.children[1].children[0];
        const seen = { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity };
        for (const group of [handles.gizmo[mode], handles.picker[mode]]) {
          group.traverse((object) => {
            const vertices = object.isMesh ? object.geometry.getAttribute("position") : null;
            for (let i = 0; vertices && i < vertices.count; i++) {
              const p = new Vector3().fromBufferAttribute(vertices, i).applyMatrix4(object.matrixWorld).project(camera);
              const x = (p.x + 1) * 0.5 * width;
              const y = (1 - p.y) * 0.5 * height;
              seen.minX = Math.min(seen.minX, x);
              seen.maxX = Math.max(seen.maxX, x);
              seen.minY = Math.min(seen.minY, y);
              seen.maxY = Math.max(seen.maxY, y);
            }
          });
        }
        const where = `${mode} at ${position.map((value) => value.toFixed(2))}`;
        assert.ok(box.minX <= seen.minX + 1e-6 && seen.maxX <= box.maxX + 1e-6, where);
        assert.ok(box.minY <= seen.minY + 1e-6 && seen.maxY <= box.maxY + 1e-6, where);
        // And not much more than they need.
        assert.ok(seen.maxX - seen.minX > 0.6 * (box.maxX - box.minX), where);
      }
    }
    gizmo.dispose();
  }
  // Behind the camera there is none on screen. In a view so wide that the gizmo's sphere takes in the
  // camera, it covers the whole view.
  assert.equal(gizmoScreenBox(spaceCamera(views[0], width, height), [0, 0, 3], "translate", width, height), null);
  const wide = spaceCamera({ ...views[0], hFOV_deg: 170 }, 300, 800);
  assert.deepEqual(gizmoScreenBox(wide, [0, 0, -3], "rotate", 300, 800), { minX: 0, maxX: 300, minY: 0, maxY: 800 });
});

test("near a pole a gizmo turn keeps the Sticker's yaw and turns its roll", () => {
  const matrix = ({ yaw_deg, pitch_deg, roll_deg }) => worldRotation(yaw_deg, pitch_deg, roll_deg).flat();
  const base = { position: [0, 0, 0], yaw_deg: 30, pitch_deg: 90, roll_deg: 10, scale: 1 };
  const start = sceneTransform(base);
  // Not turned, the angles stay as they are instead of jumping to another yaw and roll of the same rotation.
  const still = gizmoDragLanes("rotate", base, start, { ...start, scale: [1, 1, 1] }).rotation;
  closeVec([still.yaw_deg, still.pitch_deg, still.roll_deg], [30, 90, 10], 1e-9);
  // A turn of 20 degrees about World +Y (the axis the Sticker faces along here) is a turn of its roll.
  const turn = { x: 0, y: Math.sin(10 * Math.PI / 180), z: 0, w: Math.cos(10 * Math.PI / 180) };
  const identity = { ...start, quaternion: { x: 0, y: 0, z: 0, w: 1 } };
  const turned = gizmoDragLanes("rotate", base, identity, { ...start, quaternion: turn, scale: [1, 1, 1] }).rotation;
  assert.equal(turned.yaw_deg, 30);
  close(turned.pitch_deg, 90, 1e-9);
  const expected = [[Math.cos(20 * Math.PI / 180), 0, Math.sin(20 * Math.PI / 180)], [0, 1, 0], [-Math.sin(20 * Math.PI / 180), 0, Math.cos(20 * Math.PI / 180)]];
  const want = [0, 1, 2].map((row) => [0, 1, 2].map((col) => [0, 1, 2].reduce((sum, k) => sum + expected[row][k] * worldRotation(30, 90, 10)[k][col], 0)));
  closeVec(matrix(turned), want.flat(), 1e-9);
  // Pointing down too.
  const down = { ...base, pitch_deg: -89.95 };
  const kept = gizmoDragLanes("rotate", down, sceneTransform(down), { ...sceneTransform(down), scale: [1, 1, 1] }).rotation;
  closeVec([kept.yaw_deg, kept.pitch_deg, kept.roll_deg], [30, -89.95, 10], 1e-6);
});

// --- The Cutout's Camera in space (#77).

test("3DoF of the Cutout editor stands at the Camera's position, and 6DoF starts from there", () => {
  const view = { position: [5, 5, 5], yaw_deg: 30, pitch_deg: 10, hFOV_deg: 90, distance: 1 };
  const origin = [1, 2, 3];

  assert.deepEqual(spaceModeView("3dof", view, origin).position, origin);
  assert.deepEqual(spaceModeView("6dof", view, origin), view);
  assert.deepEqual(switchSpaceMode({ mode: "6dof", position: [9, 9, 9], moved: true }, "3dof", origin), { mode: "3dof", position: origin, moved: false });
  // The Stickers editor keeps the World origin.
  assert.deepEqual(spaceModeView("3dof", view).position, [0, 0, 0]);
});

test("the Frame view looks through the Camera from its position with the space view's depth range", () => {
  const camera = { quaternion: { x: 0, y: 0, z: 0, w: 1 }, fovY_deg: 40, aspect: 1.5 };
  const sphere = { center: [0, 0, -5], radius: 2 };

  const placed = placedCamera(camera, [0, 1, 0], 4, sphere);
  const space = spaceCamera({ position: [0, 1, 0], yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, distance: 4 }, 300, 200, sphere);

  assert.deepEqual(placed.position, [0, 1, 0]);
  assert.equal(placed.fovY_deg, 40);
  assert.deepEqual([placed.near, placed.far], [space.near, space.far]);
});

test("the Camera is picked within a few pixels of its frustum's lines on screen", () => {
  const view = spaceCamera({ position: [0, 0, 5], yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, distance: 5 }, 200, 200);
  const frustum = cameraFrustumSegments({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 60, aspect: 1 }, 1);
  const center = projectPoint(view, [0, 0, 0], 200, 200);
  const edge = projectPoint(view, frustum[1][1], 200, 200);

  assert.equal(segmentsHit(view, frustum, center, 200, 200), true);
  assert.equal(segmentsHit(view, frustum, { x: (center.x + edge.x) / 2 + 3, y: (center.y + edge.y) / 2 }, 200, 200), true);
  assert.equal(segmentsHit(view, frustum, { x: 5, y: 5 }, 200, 200), false);
  // Segments behind the view are not picked.
  assert.equal(segmentsHit(view, [[[0, 0, 6], [1, 0, 7]]], { x: 100, y: 100 }, 200, 200), false);
});

test("the trajectory is drawn as the segments between its positions", () => {
  assert.deepEqual(polylineSegments([[0, 0, 0], [1, 0, 0], [1, 1, 0]]), [[[0, 0, 0], [1, 0, 0]], [[1, 0, 0], [1, 1, 0]]]);
  assert.deepEqual(polylineSegments([[0, 0, 0]]), []);
});

// docs/threejs-spark-integration.md "3D ファイルの `file` の Source の `world` の Sticker".
test("each world Sticker of a 3D file asks for its own item, by its id, with its transform and opacity", () => {
  const world = (id, filename, extra = {}) => ({
    id,
    placement: "world",
    source: { kind: "file", filename, subfolder: "3d" },
    clip: { start: 10, in: 0, duration: 20 },
    position: { value: [0, 0, -2], keyframes: [] },
    rotation: { value: { yaw_deg: 30, pitch_deg: 0, roll_deg: 0 }, keyframes: [] },
    scale: { value: 1.5, keyframes: [] },
    opacity: { value: 0.5, keyframes: [] },
    ...extra,
  });
  const state = loadSceneState({
    version: 2,
    stickers: [
      { id: "sky_1", placement: "sky", source: { kind: "file", filename: "a.png" } },
      { id: "plane_1", placement: "world", source: { kind: "file", filename: "a.png" } },
      world("sticker_1", "chair.glb"),
      // The same file twice: two items, since an object has one parent and opacity is on its materials.
      world("sticker_2", "chair.glb", { opacity: { value: 1, keyframes: [] } }),
      world("sticker_3", "points.ply"),
      world("sticker_4", "rig.fbx"),
      { id: "sticker_5", placement: "world", source: { kind: "port" } },
    ],
  });
  const files = {
    "chair.glb": { state: "ready", kind: "mesh", unlit: false, url: "/view?filename=e.glb", generation: 0 },
    "points.ply": { state: "ready", kind: "splat", unlit: true, url: "/view?filename=e.ply", generation: 2 },
    "rig.fbx": { state: "failed" },
  };
  const editorFile = (sticker) => {
    const entry = files[sticker.source.filename];
    return entry?.state === "ready" ? entry : null;
  };
  const at = (frame) => fileStickerRequests(state, evaluateSceneState(state, frame), editorFile);
  const entries = at(15);
  // Only the 3D files that have their editor file: not the planes, the port, or a file the route refused.
  assert.deepEqual(entries.map((entry) => entry.id), ["sticker_1", "sticker_2", "sticker_3"]);
  assert.deepEqual(entries.map((entry) => entry.key), [fileStickerKey("sticker_1", 0), fileStickerKey("sticker_2", 0), fileStickerKey("sticker_3", 2)]);
  assert.notEqual(fileStickerKey("sticker_1", 0), fileStickerKey("sticker_1", 1));
  const [first, second, splat] = entries.map((entry) => entry.request);
  // The item is keyed by the Sticker, not by its URL.
  assert.equal(first.url, entries[0].key);
  assert.deepEqual(first.urls, [entries[0].key]);
  assert.deepEqual(first.prefetch, []);
  assert.equal(first.src, "/view?filename=e.glb");
  assert.equal(second.src, "/view?filename=e.glb");
  assert.notEqual(first.url, second.url);
  assert.equal(first.kind, "mesh");
  assert.equal(first.unlit, false);
  assert.equal(first.id, "sticker_1");
  assert.equal(first.opacity, 0.5);
  assert.equal(second.opacity, 1);
  assert.deepEqual(first.itemQuaternion, { x: 0, y: 0, z: 0, w: 1 });
  closeVec(first.transform.position, [0, 0, -2]);
  assert.equal(first.transform.scale, 1.5);
  const expected = sceneTransform({ position: [0, 0, -2], yaw_deg: 30, pitch_deg: 0, roll_deg: 0, scale: 1.5 });
  closeVec(Object.values(first.transform.quaternion), Object.values(expected.quaternion));
  assert.equal(first.value.active, true);
  // A SPLAT turns into the glTF frame first, as a 3D port Sticker's.
  assert.equal(splat.kind, "splat");
  assert.deepEqual(splat.itemQuaternion, SPLAT_TO_SCENE);
  // Outside its Clip range, or hidden, it asks for nothing but keeps its item (the key stays).
  assert.deepEqual(at(5).map((entry) => [entry.key, entry.request]), entries.map((entry) => [entry.key, null]));
  const hidden = loadSceneState({ version: 2, stickers: [world("sticker_1", "chair.glb", { visible: false })] });
  assert.deepEqual(fileStickerRequests(hidden, evaluateSceneState(hidden, 15), editorFile).map((entry) => entry.request), [null]);
  // A sky Sticker with a 3D file is not drawn (the node warns).
  const sky = loadSceneState({ version: 2, stickers: [{ ...world("sticker_1", "chair.glb"), placement: "sky" }] });
  assert.deepEqual(fileStickerRequests(sky, evaluateSceneState(sky, 15), editorFile), []);
});

// docs/editor-interaction.md "3D の Sticker を収めて置く": the one fit of a new 3D Sticker, the same values as Python's
// core/world.py fit_3d_position (tests/fixtures/place_3d/fit.json, which tests/test_place_3d_parity.py reads too).
const fitCases = () => JSON.parse(readFileSync(new URL("./fixtures/place_3d/fit.json", import.meta.url), "utf8")).cases;

test("a new 3D Sticker is placed by the shared fit, as the fixture gives it", () => {
  const cases = fitCases();
  assert.ok(cases.length >= 6);
  for (const item of cases) {
    const sphere = item.center === null ? null : { center: item.center, radius: item.radius };
    const position = fit3dPosition(item.eye, item.dir, sphere, item.rotation, item.fov_deg, item.min_distance);
    closeVec(position, item.position, 1e-9);
    if (item.fit_distance !== null) close(fitDistance(item.radius, item.fov_deg), item.fit_distance, 1e-9);
  }
});

test("Frame Selected keeps its distance to the fit distance of the fixture", () => {
  for (const item of fitCases()) {
    if (item.fit_distance === null || !(item.radius > 0) || !(item.fov_deg > 0 && item.fov_deg < 180)) continue;
    // A square view: its smaller FOV is its hFOV.
    const framed = frameView({ position: [0, 0, 0], yaw_deg: 10, pitch_deg: 5, hFOV_deg: item.fov_deg, distance: 1 }, { center: [1, 2, 3], radius: item.radius }, 400, 400);
    close(framed.distance, item.fit_distance, 1e-9);
  }
});

test("the node's FOV is the default view hFOV made the vertical of a 16:9 view, as in the front case", () => {
  assert.equal(DEFAULT_VIEW_HFOV, 100);
  close(FIT_FALLBACK_FOV_DEG, 2 * Math.atan(Math.tan(50 * Math.PI / 180) * 9 / 16) * 180 / Math.PI, 1e-12);
  const front = fitCases().find((item) => item.dir[0] === 0 && item.dir[1] === 0 && item.dir[2] === -1 && item.eye.every((value) => value === 0) && item.min_distance === FIT_3D_MIN_DISTANCE && item.center !== null);
  close(front.fov_deg, FIT_FALLBACK_FOV_DEG, 1e-9);
  // A FOV that is not a positive finite number fits with the node's FOV.
  close(fitDistance(1, 0), fitDistance(1, FIT_FALLBACK_FOV_DEG), 1e-12);
  close(fitDistance(1, Number.NaN), fitDistance(1, FIT_FALLBACK_FOV_DEG), 1e-12);
  assert.equal(FIT_3D_MIN_DISTANCE, 0.1);
});

test("the route's box is the sphere the fit uses as it is, and a missing or malformed box is none", () => {
  // The route's box is in the scene glTF frame already: no sceneItemBox turn (a SPLAT's box keeps its signs).
  assert.deepEqual(fitSphereOfBox({ min: [-1, 2, -3], max: [3, 4, 1] }), { center: [1, 3, -1], radius: Math.hypot(4, 2, 4) / 2 });
  assert.deepEqual(fitSphereOfBox({ min: [1, 1, 1], max: [1, 1, 1] }), { center: [1, 1, 1], radius: 0 });
  for (const box of [null, undefined, {}, { min: [0, 0, 0] }, { min: [0, 0], max: [1, 1, 1] }, { min: [0, 0, "0"], max: [1, 1, 1] }, { min: [0, 0, 0], max: [1, Infinity, 1] }, { min: [0, 2, 0], max: [1, 1, 1] }, "box"]) {
    assert.equal(fitSphereOfBox(box), null, JSON.stringify(box));
  }
});

test("a 3D file is placed along the ray through the button's view center or the drop point", () => {
  const view = { position: [0.5, 1, 2], yaw_deg: 40, pitch_deg: 20, hFOV_deg: 90, distance: 1 };
  const camera = spaceCamera(view, 800, 400);
  // The button: the view's forward, pitch included.
  closeVec(placeDirection(camera, null, 800, 400), viewAxes(40, 20).forward, 1e-9);
  // A drop: the ray through the drop point, of length 1.
  const dropped = placeDirection(camera, { x: 100, y: 300 }, 800, 400);
  const ray = pickRay(camera, 100, 300, 800, 400).direction;
  close(Math.hypot(...dropped), 1, 1e-12);
  closeVec(dropped, ray.map((value) => value / Math.hypot(...ray)), 1e-12);
});

test("a new 3D file Sticker stands upright 2 along its direction, turned to the view, at its own size", () => {
  const view = { position: [0.5, 1, 2], yaw_deg: 40, pitch_deg: 20, hFOV_deg: 90, distance: 1 };
  const dir = [0.6, -0.48, -0.64];
  const placed = newWorld3dStickerTransform(view, dir);
  closeVec(placed.position, [0.5 + 1.2, 1 - 0.96, 2 - 1.28], 1e-12);
  // Its front (glTF +Z) faces back along the horizontal of dir: no pitch, no roll.
  close(placed.rotation.yaw_deg, Math.atan2(0.6, 0.64) * 180 / Math.PI, 1e-9);
  close(placed.rotation.yaw_deg, facingRotation(view.position, placed.position).yaw_deg, 1e-9);
  assert.equal(placed.rotation.pitch_deg, 0);
  assert.equal(placed.rotation.roll_deg, 0);
  assert.equal(placed.scale, 1);
  // Straight up or down, it keeps the view's yaw.
  assert.equal(newWorld3dStickerTransform(view, [0, 1, 0]).rotation.yaw_deg, 40);
  // In 3DoF from the origin, ahead: NEW_WORLD_STICKER_DISTANCE down -Z.
  const empty = newWorld3dStickerTransform({ ...view, position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0 }, [0, 0, -1]);
  closeVec(empty.position, [0, 0, -NEW_WORLD_STICKER_DISTANCE]);
  assert.deepEqual(empty.rotation, { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 });
});

// docs/threejs-spark-integration.md: an element whose value is a list of paths (DA3_GEOMETRY multiview) is one
// element of all its views, keyed like the others by its files.
test("an element of several views is one item, keyed by its views' URLs and loaded from all of them", () => {
  const source = (entry) => `/view?filename=${entry.filename}`;
  const views = [{ filename: "v0.glb" }, { filename: "v1.glb" }];
  const files = sceneFilesOf([views, { filename: "b.glb" }, [], null], [{ kind: "mesh", unlit: true }], source);
  const key = multiviewKey(["/view?filename=v0.glb", "/view?filename=v1.glb"]);
  assert.deepEqual(files.urls, [key, "/view?filename=b.glb", null, null]);
  assert.deepEqual(files.sources, { [key]: ["/view?filename=v0.glb", "/view?filename=v1.glb"] });
  assert.equal(files.unlit, true);
  // The same views give the same key; other views another.
  assert.equal(multiviewKey(["/view?filename=v0.glb", "/view?filename=v1.glb"]), key);
  assert.notEqual(multiviewKey(["/view?filename=v1.glb", "/view?filename=v0.glb"]), key);
  assert.notEqual(key, "/view?filename=v0.glb");
  // The requests of `scene` and of a 3D port Sticker carry where each key loads from.
  const scene = { active: true, clip_frame: 0, position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 1 };
  const request = sceneRequest(files, scene);
  assert.equal(request.url, key);
  assert.deepEqual(request.sources, files.sources);
  const state = loadSceneState({ version: 2, stickers: [{ id: "sticker_1", placement: "world", source: { kind: "port" } }] });
  const sticker = stickerContentRequest(files, state, evaluateSceneState(state, 0));
  assert.equal(sticker.url, key);
  assert.deepEqual(sticker.sources, files.sources);
});

// The node's editor-file contract (scene_files.py write_editor_files, tests/test_scene_mesh.py): a multiview element is
// the list of the ui entries of its non-empty views, and an element whose views are all empty is null itself
// (`pano_scene_files == [None]`), not a list holding null.
test("the node's multiview shapes: both views, one view left, and no view left", () => {
  const source = (entry) => `/view?filename=${entry.filename}&type=${entry.type}`;
  const meta = [{ kind: "mesh", unlit: true }];
  const entry = (name) => ({ filename: name, subfolder: "", type: "temp", pano_evictable: true });
  const both = sceneFilesOf([[entry("pano_scene_a_0_0.glb"), entry("pano_scene_a_0_1.glb")]], meta, source);
  assert.deepEqual(Object.values(both.sources), [["/view?filename=pano_scene_a_0_0.glb&type=temp", "/view?filename=pano_scene_a_0_1.glb&type=temp"]]);
  assert.deepEqual(both.urls, Object.keys(both.sources));
  const one = sceneFilesOf([[entry("pano_scene_b_0_1.glb")]], meta, source);
  assert.deepEqual(Object.values(one.sources), [["/view?filename=pano_scene_b_0_1.glb&type=temp"]]);
  // No view left: one empty element, nothing to load; the Timeline still counts one element.
  const none = sceneFilesOf([null], meta, source);
  assert.deepEqual(none, { kind: "mesh", unlit: true, urls: [null], sources: {} });
  const scene = { active: true, clip_frame: 0, position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 1 };
  assert.equal(sceneRequest(none, scene).url, null);
  // A list of only nulls (not what the node writes) is empty too.
  assert.deepEqual(sceneFilesOf([[null]], meta, source).urls, [null]);
  // A mono DA3_GEOMETRY: one entry per frame, null for an empty frame.
  assert.deepEqual(sceneFilesOf([entry("f0.glb"), null], meta, source).urls, ["/view?filename=f0.glb&type=temp", null]);
});

// docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド" and docs/studio-node.md "DA3_GEOMETRY mono の
// エディタ用ファイル": the depth files by URL, each loaded with the grid's size, its depth's form and its own K; the
// colors from the proxy MP4 at i / video_fps.
const depthMeta = (extra = {}) => ({
  kind: "depth_grid", unlit: true, width: 4, height: 3,
  depth: { dtype: "float32", byte_order: "little", bytes: 48 },
  intrinsics: [[2, 0, 1.5, 0, 2, 1, 0, 0, 1], [3, 0, 1.5, 0, 3, 1, 0, 0, 1], [4, 0, 1.5, 0, 4, 1, 0, 0, 1]],
  video: { filename: "proxy.mp4", type: "temp" }, video_fps: 24, frames: 3,
  ...extra,
});

test("a DA3 mono result is depth files by URL, each loaded with its grid and its own K", () => {
  const source = (entry) => `/view?filename=${entry.filename}`;
  const files = sceneFilesOf([{ filename: "d0.f32" }, null, { filename: "d2.f32" }], [depthMeta()], source);
  assert.equal(files.kind, "depth_grid");
  assert.equal(files.unlit, true);
  assert.deepEqual(files.urls, ["/view?filename=d0.f32", null, "/view?filename=d2.f32"]);
  assert.deepEqual(files.sources["/view?filename=d2.f32"], {
    url: "/view?filename=d2.f32", width: 4, height: 3, depth: { dtype: "float32", byte_order: "little", bytes: 48 }, intrinsics: [4, 0, 1.5, 0, 4, 1, 0, 0, 1],
  });
  assert.equal(files.sources["/view?filename=d0.f32"].intrinsics[0], 2);
  assert.deepEqual(files.video, { src: "/view?filename=proxy.mp4", fps: 24 });
  // A meta without its grid's form is not drawn.
  assert.equal(sceneFilesOf([{ filename: "d0.f32" }], [depthMeta({ width: undefined })], source), null);
  assert.equal(sceneFilesOf([{ filename: "d0.f32" }], [depthMeta({ intrinsics: [] })], source), null);
});

test("a depth grid loads DEPTH_GRID_PREFETCH items ahead, and its color comes from the proxy at the item's time", () => {
  assert.equal(DEPTH_GRID_PREFETCH, 8);
  const source = (entry) => `/view?filename=${entry.filename}`;
  const names = Array.from({ length: 12 }, (_, index) => (index === 5 ? null : { filename: `d${index}.f32` }));
  const files = sceneFilesOf(names, [depthMeta({ intrinsics: names.map(() => [1, 0, 0, 0, 1, 0, 0, 0, 1]), frames: 12 })], source);
  const scene = { active: true, clip_frame: 2, position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 1 };
  const request = sceneRequest(files, scene);
  assert.equal(request.url, "/view?filename=d2.f32");
  // The next 8 items, an empty one left out.
  assert.deepEqual(request.prefetch, [3, 4, 6, 7, 8, 9, 10].map((index) => `/view?filename=d${index}.f32`));
  assert.deepEqual(request.video, { src: "/view?filename=proxy.mp4", fps: 24, time: 2 / 24 });
  assert.equal(request.unlit, true);
  assert.deepEqual(request.itemQuaternion, { x: 0, y: 0, z: 0, w: 1 });
  // Other items still load one ahead.
  const meshes = sceneFilesOf(names, [{ kind: "mesh" }], source);
  assert.deepEqual(sceneRequest(meshes, scene).prefetch, ["/view?filename=d3.f32"]);
  assert.equal(sceneRequest(meshes, scene).video, null);
});

// docs/threejs-spark-integration.md (ADR 0042): a lens Camera's frustum is the rays of its image's edges, which past
// 180° no pyramid could show.
test("a lens Camera's frustum follows the rays of its image's edges", () => {
  const camera = { position: [1, 2, 3], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 300, aspect: 1.5, curve: 0.3 };
  const segments = cameraFrustumSegments(camera, 2);
  const ends = segments.flat().filter((point) => point.some((value, axis) => value !== camera.position[axis]));
  const angles = ends.map((point) => {
    const d = point.map((value, axis) => value - camera.position[axis]);
    assert.ok(Math.abs(Math.hypot(...d) - 2) < 1e-9, "every edge point is `length` out along its ray");
    return Math.acos(-d[2] / 2) * 180 / Math.PI;
  });
  // The side edges' middles are 150° off the axis, behind the Camera; none is past the image.
  assert.ok(angles.some((angle) => Math.abs(angle - 150) < 1e-6));
  assert.ok(Math.max(...angles) <= 180 + 1e-9);
});

// docs/render-contract.md "`world` の Sticker の板" (ADR 0042): a world Sticker's lens makes it a sphere patch.
test("a world Sticker's lens patch lies on its sphere around the lens's center, its middle where the plane's is", () => {
  const value = { position: [1, 0, -2], yaw_deg: 30, pitch_deg: 0, roll_deg: 0, scale: 2, lens: { curve: 0, hFOV_deg: 220 } };
  const plane = worldStickerPlane(value, { x0: 0, y0: 0, x1: 1, y1: 1 }, 200, 100);
  const { patch } = plane;
  // Radius scale ÷ (2·g(hFOV ÷ 2)); g is θ at κ 0.
  assert.ok(Math.abs(patch.radius - 2 / (2 * (110 * Math.PI / 180))) < 1e-12);
  const distance = (point) => Math.hypot(...point.map((x, axis) => x - patch.center[axis]));
  assert.ok(Math.abs(Math.hypot(...plane.position.map((x, axis) => x - patch.center[axis])) - patch.radius) < 1e-12);
  const outline = planeOutlineSegments(plane, 8).flat();
  assert.ok(outline.length > 0 && outline.every((point) => Math.abs(distance(point) - patch.radius) < 1e-9));
  // Its corners reach past the plane's side: wider than 180° across, some lie behind the center.
  const forward = plane.position.map((x, axis) => x - patch.center[axis]);
  assert.ok(planeCorners(plane).some((point) => point.reduce((sum, x, axis) => sum + (x - patch.center[axis]) * forward[axis], 0) < 0));
  // Without a lens it stays a plane.
  assert.equal(worldStickerPlane({ ...value, lens: undefined }, { x0: 0, y0: 0, x1: 1, y1: 1 }, 200, 100).patch, undefined);
});
