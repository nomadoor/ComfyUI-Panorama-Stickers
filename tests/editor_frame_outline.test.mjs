import assert from "node:assert/strict";
import test from "node:test";

import { createObjectGeometry } from "../web_src/editor/object_geometry.js";
import { createProjection } from "../web_src/editor/projection.js";
import { lensAxesFilm } from "../web_src/pano_lens.js";
import { hitFrameAffordance } from "../web_src/pano_sticker_affordance.js";

// The Panorama view (3DoF) of Panorama Studio's Camera at lens curve `curve`: its frame's screen geometry, and the
// view's projection, over a 1000 x 560 canvas.
function frameGeometry(curve, { hFOV_deg = 90, vFOV_deg = 58.7, roll_deg = 0, viewFov = 120 } = {}) {
  const canvas = { width: 1000, height: 560 };
  const editor = { mode: "pano", viewYaw: 0, viewPitch: 0, viewFov, frame: 0, _strokeGeomCache: new Map() };
  const shot = { id: "camera", yaw_deg: 10, pitch_deg: 5, roll_deg, hFOV_deg, vFOV_deg, curve };
  const deps = { backgroundCanvas: canvas, canvas, editor, state: { camera: {} }, studio: true, cameraV2: true };
  const modules = [createProjection(deps), createObjectGeometry(deps)];
  const api = {};
  for (const { connect, ...exports } of modules) Object.assign(api, exports);
  Object.assign(api, {
    getActiveCutoutShot: () => null, getSceneItemGeomCacheKey: () => Symbol("fresh"), isFreeSpaceView: () => false,
    isRasterObjectItem: () => false, isSceneSticker: () => false, isShotItem: () => true, isStickerItem: () => false,
    isStrokeGroupItem: () => false, paintingShown: () => true, poseOf: (item) => item,
  });
  for (const { connect } of modules) connect(api);
  return { geom: api.objectGeom(shot), api, shot };
}

// The distance from p to the closed polyline `points`.
function distanceToOutline(p, points) {
  let best = Infinity;
  points.forEach((a, index) => {
    const b = points[(index + 1) % points.length];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / ((dx * dx + dy * dy) || 1)));
    best = Math.min(best, Math.hypot(p.x - (a.x + dx * t), p.y - (a.y + dy * t)));
  });
  return best;
}

for (const curve of [1, 0.5, 0]) {
  test(`the Camera frame's outline at κ ${curve} is its image's true edge, and its marks sit on it`, () => {
    const { geom, api, shot } = frameGeometry(curve, { roll_deg: 12 });
    assert.equal(geom.visible, true);
    // Every outline point is a point of the image's edge: back through the lens, one film coordinate is ±1.
    const frame = api.getStickerFrame(shot);
    const axes = { fwd: frame.centerDir, right: frame.right, up: frame.up };
    for (const point of geom.outline) {
      const film = lensAxesFilm(axes, api.screenToWorldDir(point.x, point.y), curve);
      const edge = Math.max(Math.abs(film.x / frame.tanX), Math.abs(film.y / frame.tanY));
      assert.ok(Math.abs(edge - 1) < 1e-3, `κ ${curve}: ${edge}`);
    }
    // The corners and the edge midpoints, where the marks and handles are drawn, lie on the drawn outline.
    for (const point of [...geom.corners, ...geom.edgeMidpoints]) {
      assert.ok(distanceToOutline(point, geom.outline) < 0.5, `κ ${curve}: ${JSON.stringify(point)} is off the outline`);
    }
    // Inside the outline moves the frame; just outside the middle of its left edge it does not.
    const mid = geom.edgeMidpoints.find((point) => point.edge === "left");
    const inward = { x: geom.center.x - mid.x, y: geom.center.y - mid.y };
    const length = Math.hypot(inward.x, inward.y);
    const at = (d) => ({ x: mid.x + inward.x / length * d, y: mid.y + inward.y / length * d });
    assert.equal(hitFrameAffordance(geom, at(20)).kind, "move");
    assert.equal(hitFrameAffordance(geom, at(-20)).kind, "none");
  });
}
