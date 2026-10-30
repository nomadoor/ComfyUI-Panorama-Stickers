import assert from "node:assert/strict";
import test from "node:test";
import { worldRotation } from "../web_src/pano_world.js";
import { liveErpRatio, liveErpSize, liveErpView } from "../web_src/studio/erp_preview.js";
import { liveErpFaceSize } from "../web_src/pano_live_erp.js";

// docs/threejs-spark-integration.md "Panorama モードの ERP の表示": what the live ERP is given (the Camera's World
// position and turn, the range) and at what size it draws.

test("the view is the Camera's World position, worldRotation's matrix and the range", () => {
  const view = liveErpView({ position: [1, 2, -3], yaw_deg: 30, pitch_deg: -10, roll_deg: 5 }, 180);
  assert.deepEqual(view.position, [1, 2, -3]);
  assert.deepEqual(view.turn, worldRotation(30, -10, 5));
  assert.equal(view.coverage, 180);
  assert.equal(liveErpView({ position: [0, 0, 0] }).coverage, 360);
  // A Camera without a position sits at the origin.
  assert.deepEqual(liveErpView(null).position, [0, 0, 0]);
});

test("the ERP takes the box's device pixels at its ratio: 2 : 1 for 360, 1 : 1 for 180", () => {
  assert.equal(liveErpRatio(360), 2);
  assert.equal(liveErpRatio(180), 1);
  assert.deepEqual(liveErpSize(168, 84, 2), { width: 336, height: 168 });
  assert.deepEqual(liveErpSize(400, 300, 1), { width: 400, height: 200 });
  assert.deepEqual(liveErpSize(400, 300, 1, 180), { width: 300, height: 300 });
  assert.deepEqual(liveErpSize(0, 0, 1), { width: 1, height: 1 });
});

test("a face matches the ERP's pixels per radian at its center, within the GPU's cube size", () => {
  // 512 px over 360°: 81.5 px per radian, a face spans 2 tan 45° = 2.
  assert.equal(liveErpFaceSize(512, 360), 163);
  assert.equal(liveErpFaceSize(512, 180), 326);
  assert.equal(liveErpFaceSize(8, 360), 16);
  assert.equal(liveErpFaceSize(100000, 360), 2048);
  assert.equal(liveErpFaceSize(100000, 360, 1024), 1024);
});

test("the renderer imports three.js only, so it can sit in the three.js chunk (docs/threejs-spark-integration.md 遅延読み込み)", async () => {
  const { readFileSync } = await import("node:fs");
  const source = readFileSync(new URL("../web_src/pano_live_erp.js", import.meta.url), "utf8");
  const imports = [...source.matchAll(/^\s*import\s+(?:[^'";]*?\s+from\s+)?["']([^"']+)["']/gm)].map((match) => match[1]);
  assert.deepEqual(imports, ["three"]);
});
