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
