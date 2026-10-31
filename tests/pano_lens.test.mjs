import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import {
  LENS_OVERSCAN_MAX_AREA,
  lensAngle,
  lensDirectionFilm,
  lensFaceCoordinates,
  lensFilmDirection,
  lensFovLimit,
  lensPickWindow,
  lensRadius,
  lensRenderPlan,
  rotateByQuaternion,
} from "../web_src/pano_lens.js";

// docs/render-contract.md "カメラのレンズ" (ADR 0042): the same mapping as core/math.py, bound by the shared fixture.
const fixture = JSON.parse(readFileSync(new URL("./fixtures/lens/lens.json", import.meta.url), "utf8"));
const close = (actual, expected, label) => assert.ok(Math.abs(actual - expected) <= fixture.tolerance, `${label}: ${actual} != ${expected}`);
const DEG = Math.PI / 180;

test("the lens mapping, its inverse and the hFOV limit match the fixture", () => {
  for (const { curve, theta, radius } of fixture.mapping) {
    close(lensRadius(theta, curve), radius, `lens_radius(${theta}, ${curve})`);
    close(lensAngle(radius, curve), theta, `lens_angle(${radius}, ${curve})`);
  }
  for (const { curve, hfov_max_deg: limit } of fixture.limits) close(lensFovLimit(curve), limit, `limit(${curve})`);
});

test("each pixel's ray of a lens Camera matches the fixture, and pixels past 180 degrees are not drawn", () => {
  for (const { curve, hfov_deg: hfov, width, height, f, pixels } of fixture.cases) {
    const focal = (width / 2) / lensRadius((hfov / 2) * DEG, curve);
    close(focal, f, `f of ${curve}, ${hfov}`);
    for (const { column, row, ray, theta_deg: thetaDeg, drawn } of pixels) {
      const x = column + 0.5 - width / 2;
      const y = height / 2 - (row + 0.5);
      const label = `${curve}/${hfov} pixel ${column},${row}`;
      close(lensAngle(Math.hypot(x, y) / focal, curve) / DEG, thetaDeg, label);
      // The editor's ray, in three.js's camera axes (looking down -z).
      const direction = lensFilmDirection(x / focal, y / focal, curve);
      assert.equal(direction !== null, drawn, label);
      if (!direction) continue;
      [direction[0], direction[1], -direction[2]].forEach((value, axis) => close(value, ray[axis], `${label} axis ${axis}`));
      // And back to the same film point, where the lens reaches.
      const film = lensDirectionFilm(direction, curve);
      if (film) [film.x, film.y].forEach((value, axis) => close(value * focal, [x, y][axis], `${label} film ${axis}`));
    }
  }
});

// An edit near the bound does not switch the path back and forth: after the cube, the pinhole takes a smaller area.
test("a view that drew through the cube goes back to the pinhole only well inside the pinhole's area", () => {
  const kinds = (hfov, previous) => {
    const focal = 160 / lensRadius((hfov / 2) * DEG, 0.9);
    return lensRenderPlan({ width: 320, height: 240, focal, curve: 0.9, previous }).kind;
  };
  // Widening goes to the cube at the bound whatever the view drew before.
  assert.deepEqual([152, 156, 158].map((hfov) => kinds(hfov, "pinhole")), ["pinhole", "pinhole", "cube"]);
  // Narrowing from the cube stays there until the pinhole holds LENS_PINHOLE_RETURN of its area.
  assert.deepEqual([156, 154, 152, 140].map((hfov) => kinds(hfov, "cube")), ["cube", "cube", "pinhole", "pinhole"]);
  // A view's first lens image takes the plain bound.
  assert.equal(kinds(156, null), "pinhole");
});

// docs/threejs-spark-integration.md "Camera から見た空間の表示": one rule picks the pinhole with overscan or the cube.
test("a lens image draws through a pinhole the sampling never enlarges, within its area, else through the cube", () => {
  const plan = (curve, hfov, width = 1024, height = 1024) => {
    const focal = (width / 2) / lensRadius((hfov / 2) * DEG, curve);
    return { focal, ...lensRenderPlan({ width, height, focal, curve }) };
  };
  for (const [curve, hfov] of [[0.9, 100], [0.7, 90], [1, 90]]) {
    const { kind, faces: [face], focal } = plan(curve, hfov);
    assert.equal(kind, "pinhole", `${curve} at ${hfov}`);
    assert.ok(face.width * face.height <= LENS_OVERSCAN_MAX_AREA * 1024 * 1024);
    // Every output pixel's ray falls on the pinhole, whose pixels there are no farther apart than the output's.
    const pinhole = face.width / 2 / face.tanX;
    for (const [px, py] of [[0, 0], [512, 0], [1024, 1024], [700, 300], [512, 512]]) {
      const at = (dx, dy) => lensFaceCoordinates(face, lensFilmDirection((px + dx - 512) / focal, (512 - py - dy) / focal, curve));
      const here = at(0, 0);
      assert.ok(Math.abs(here.x) <= 1 && Math.abs(here.y) <= 1, `${curve}: (${px}, ${py}) on the pinhole`);
      const step = Math.hypot((at(1, 0).x - here.x) * face.tanX * pinhole, (at(1, 0).y - here.y) * face.tanY * pinhole);
      assert.ok(step >= 1 - 1e-6, `${curve}: (${px}, ${py}) one output pixel is ${step} pinhole pixels`);
    }
  }
  // A fisheye wider than 180° draws through the cube's faces.
  assert.equal(plan(0, 220).kind, "cube");
  assert.equal(plan(0, 220).faces.length, 6);
});

// The cube stands aligned to the World; it draws only the faces the image's cone of directions meets (a 220° 16:9
// fisheye's corners, 126° off its axis, reach the face behind it).
test("the cube draws the faces its image samples, and every sampled direction falls on one of them", () => {
  const turn = (yaw) => ({ x: 0, y: Math.sin(yaw * DEG / 2), z: 0, w: Math.cos(yaw * DEG / 2) });
  for (const [curve, hfov, yaw, unseen] of [[0, 220, 0, []], [0.5, 140, 0, [5]], [0, 140, 90, [1]], [0.3, 300, 0, []], [0, 160, 30, [5]]]) {
    const width = 1280;
    const height = 720;
    const focal = (width / 2) / lensRadius((hfov / 2) * DEG, curve);
    const quaternion = turn(yaw);
    const { faces } = lensRenderPlan({ width, height, focal, curve, quaternion });
    const label = `κ ${curve} at ${hfov}°, yaw ${yaw}`;
    assert.deepEqual(faces.flatMap((face, index) => (face.seen ? [] : [index])), unseen, label);
    for (let y = 0; y < height; y += 24) {
      for (let x = 0; x < width; x += 24) {
        const pick = lensPickWindow((x + 0.5 - width / 2) / focal, (height / 2 - y - 0.5) / focal, curve, 100, quaternion);
        if (pick) assert.ok(faces.find((face) => face.quaternion === pick.quaternion).seen, `${label}: (${x}, ${y})`);
      }
    }
  }
});

// docs/threejs-spark-integration.md "当たり判定": a pixel of the bent image picks along its own ray.
test("a pointer on the bent image picks through a cube face pixel on the same ray", () => {
  // The Camera turned in the World: the faces are the World's, the ray the Camera's turned.
  const camera = { x: 0.1, y: 0.3, z: -0.2, w: Math.sqrt(1 - 0.01 - 0.09 - 0.04) };
  for (const curve of [0, 0.5, 0.9]) {
    for (const [x, y] of [[0, 0], [0.4, -0.2], [-1.5, 0.9], [2.5, 0.1], [0.05, -3]]) {
      const film = lensFilmDirection(x, y, curve);
      const direction = film && rotateByQuaternion(camera, film);
      const pick = lensPickWindow(x, y, curve, 1000, camera);
      if (!direction) {
        assert.equal(pick, null);
        continue;
      }
      // The face pixel's ray, as a pinhole camera turned by the face shoots it.
      const local = [(pick.x / pick.size) * 2 - 1, 1 - (pick.y / pick.size) * 2, -1];
      const ray = rotateByQuaternion(pick.quaternion, local);
      const length = Math.hypot(...ray);
      ray.forEach((value, axis) => close(value / length, direction[axis], `${curve} (${x}, ${y}) axis ${axis}`));
    }
  }
});

test("a Camera is a lens Camera for the Camera tab's hits, guides and gizmo when its κ at the inspector's 0.01 is not 1", async () => {
  const { LENS_CURVE_DIGITS, lensCurveBent } = await import("../web_src/pano_lens.js");
  assert.equal(LENS_CURVE_DIGITS, 2);
  // Shown as 1.00: a pinhole.
  assert.equal(lensCurveBent(1), false);
  assert.equal(lensCurveBent(0.998), false);
  assert.equal(lensCurveBent(1.004), false);
  // Shown as 0.99 or less: a lens.
  assert.equal(lensCurveBent(0.99), true);
  assert.equal(lensCurveBent(0.994), true);
  assert.equal(lensCurveBent(0.5), true);
  assert.equal(lensCurveBent(0), true);
});

// docs/space-and-view.md "レンズの Camera の当たり": one function maps a 3D point to the lens Camera's stage point, and
// its inverse gives the ray back; the guides, the hover, the gizmo and the handles all go through them.
test("a 3D point maps onto a lens Camera's stage like a pinhole at κ 1, and back to its ray at other κ", async () => {
  const { lensProjectPoint, lensStageRay, withLensImage } = await import("../web_src/pano_lens.js");
  const { projectPoint, spaceCamera } = await import("../web_src/pano_space.js");
  const W = 800;
  const H = 400;
  const view = { position: [1, 0.5, 2], yaw_deg: 30, pitch_deg: -10, roll_deg: 5, hFOV_deg: 90, distance: 5 };
  const pinhole = spaceCamera(view, W, H, { center: [0, 0, 0], radius: 50 });
  const focal = (W / 2) / Math.tan(45 * DEG);
  const lens = (curve) => withLensImage(pinhole, { curve, focalPx: focal, centerX: W / 2, centerY: H / 2 });
  const points = [[1, 0.5, -3], [3, 1, -1], [-2, -1, -4], [1.2, 0.4, 1.5]];
  for (const p of points) {
    const a = projectPoint(pinhole, p, W, H);
    const b = lensProjectPoint(lens(1), p);
    if (!a) continue;
    assert.ok(b, `κ 1 maps ${p}`);
    assert.ok(Math.abs(a.x - b.x) < 1e-6 && Math.abs(a.y - b.y) < 1e-6, `κ 1 is the pinhole at ${p}`);
    // projectPoint on a camera carrying the lens image is the same function.
    assert.deepEqual(projectPoint(lens(1), p, W, H), b);
  }
  // A point `deg` off the axis to the right, two units from the eye.
  const offAxis = (deg) => rotateByQuaternion(pinhole.quaternion, [2 * Math.sin(deg * DEG), 0, -2 * Math.cos(deg * DEG)]).map((value, axis) => value + pinhole.position[axis]);
  for (const curve of [0.8, 0.5]) {
    let behind = 0;
    for (const p of [...points, [1, 0.5, 4], [4, 0.5, 2.2], offAxis(100), offAxis(-105)]) {
      const at = lensProjectPoint(lens(curve), p);
      if (!at) continue;
      if (!projectPoint(pinhole, p, W, H)) behind += 1;
      const ray = lensStageRay(lens(curve), at.x, at.y);
      const d = p.map((value, axis) => value - pinhole.position[axis]);
      const length = Math.hypot(...d);
      assert.ok(Math.abs(at.z - length) < 1e-9, "its depth is the distance from the eye");
      d.forEach((value, axis) => assert.ok(Math.abs(value / length - ray.direction[axis]) < 1e-9, `round trip κ ${curve} at ${p}`));
    }
    assert.ok(behind >= 1, `κ ${curve} maps a point behind the camera's plane`);
  }
});

test("points past lens_fov_limit are not mapped, and a lens Camera's straight line maps to a fine curve cut there", async () => {
  const { lensProjectPoint, lensPolylines, withLensImage } = await import("../web_src/pano_lens.js");
  const { spaceCamera } = await import("../web_src/pano_space.js");
  const pinhole = spaceCamera({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 90, distance: 5 }, 1920, 1080, { center: [0, 0, 0], radius: 50 });
  const camera = withLensImage(pinhole, { curve: 0.8, focalPx: 600, centerX: 960, centerY: 540 });
  const limit = lensFovLimit(0.8) / 2 * DEG;
  const at = (angle) => [Math.sin(angle), 0, -Math.cos(angle)];
  assert.ok(lensProjectPoint(camera, at(limit - 0.01)), "inside the limit");
  assert.equal(lensProjectPoint(camera, at(limit + 0.01)), null, "past the limit");
  assert.ok(lensProjectPoint(camera, at(100 * DEG)), "behind the camera's plane, still in the lens");
  // A segment across the view: every point of its curve lies on the lens image of the 3D line.
  const project = (p) => lensProjectPoint(camera, p);
  const [run] = lensPolylines(project, [-3, -1, -2], [3, -1, -2]);
  assert.ok(run.length >= 9, `subdivided (${run.length} points)`);
  for (let i = 1; i < run.length; i += 1) {
    // Each piece's middle in 3D maps within half a px of the piece's chord middle: the curve does not look angular.
    const a = run[i - 1];
    const b = run[i];
    const mid = project(a.world.map((value, axis) => (value + b.world[axis]) / 2));
    assert.ok(Math.hypot(mid.x - (a.x + b.x) / 2, mid.y - (a.y + b.y) / 2) < 0.5, `piece ${i}`);
  }
  // From ahead and below to behind: the run stops at the limit.
  const runs = lensPolylines(project, [0, -1, -1], [0, -1, 3]);
  assert.equal(runs.length, 1);
  const last = runs[0][runs[0].length - 1].world;
  const angle = Math.atan2(Math.hypot(last[0], last[1]), -last[2]);
  assert.ok(angle < limit && angle > limit - 0.5 * DEG, `cut near the limit (${angle / DEG})`);
});

test("straight behind the axis is no film point: at κ under 0.5 it would be the whole ring, not one point", () => {
  assert.equal(lensDirectionFilm([0, 0, 1], 0.4), null);
  assert.equal(lensDirectionFilm([0, 0, 1], 0), null);
  assert.deepEqual(lensDirectionFilm([0, 0, -1], 0.4), { x: 0, y: 0 });
  // Just off straight behind it is a point far out.
  const near = lensDirectionFilm([1e-6, 0, 1], 0.4);
  assert.ok(near && near.x > 1);
});
