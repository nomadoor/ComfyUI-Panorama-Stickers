import assert from "node:assert/strict";
import test from "node:test";

import { PerspectiveCamera, Vector3 } from "three";

import { viewProjection } from "../web_src/pano_editor_view.js";
import { previewNodeCamera } from "../web_src/pano_preview_view.js";
import {
  buildStickerGeometry,
  hitStickerGeometry,
  moveStickerToScreenPoint,
  pickStickerAtPoint,
  rotateStickerFromPointer,
  scaleStickerAxisFromPointer,
  scaleStickerFromPointer,
} from "../web_src/pano_sticker_geometry.js";
import { applyViewportCamera } from "../web_src/pano_three_view.js";
import { panoToWorld, worldToPano } from "../web_src/pano_world.js";
import { RAD2DEG, yawPitchToDir } from "../web_src/pano_camera_math.js";

const nodeView = (view, width, height) => viewProjection(previewNodeCamera(view, width, height), width, height);
const projection = nodeView({ yaw: 0, pitch: 0, fov: 100 }, 1000, 500);
const sticker = {
  id: "sticker",
  yaw_deg: 0,
  pitch_deg: 0,
  hFOV_deg: 20,
  vFOV_deg: 10,
  rot_deg: 0,
};

test("center screen ray follows the shared ERP camera convention", () => {
  const center = projection.ray(500, 250);
  const right = projection.ray(750, 250);
  const upper = projection.ray(500, 125);

  assert.ok(Math.abs(center.x) < 1e-12);
  assert.ok(Math.abs(center.y) < 1e-12);
  assert.ok(Math.abs(center.z - 1) < 1e-12);
  assert.ok(right.x > 0 && right.z > 0, "screen-right must increase yaw");
  assert.ok(upper.y > 0, "screen-up must increase pitch");
});

test("selected handles win hit testing while unselected bodies follow visual z order", () => {
  const selected = { ...sticker, id: "selected", z_index: 0, hFOV_deg: 20, vFOV_deg: 20 };
  const top = { ...sticker, id: "top", z_index: 4, hFOV_deg: 40, vFOV_deg: 40 };
  const selectedGeometry = buildStickerGeometry(selected, projection);

  const handlePick = pickStickerAtPoint(
    [selected, top],
    "selected",
    selectedGeometry.corners[0],
    projection,
  );
  assert.equal(handlePick.item.id, "selected");
  assert.equal(handlePick.hit.kind, "scale");

  const bodyPick = pickStickerAtPoint([selected, top], "selected", { x: 500, y: 250 }, projection);
  assert.equal(bodyPick.item.id, "top");
  assert.equal(bodyPick.hit.kind, "move");
});

test("sticker geometry is centered, ordered, and exposes modal-compatible handles", () => {
  const geom = buildStickerGeometry(sticker, projection);

  assert.equal(geom.visible, true);
  assert.ok(Math.abs(geom.center.x - 500) < 1e-9);
  assert.ok(Math.abs(geom.center.y - 250) < 1e-9);
  assert.equal(geom.corners.length, 4);
  assert.equal(geom.boundaryEdges.length, 4);
  assert.deepEqual(geom.boundaryEdges.map((edge) => edge.length), [29, 29, 29, 29]);
  assert.ok(geom.corners[0].x < geom.corners[1].x);
  assert.ok(geom.corners[0].y < geom.corners[3].y);
  assert.ok(geom.rotateHandle.y < geom.rotateStemBase.y);
  assert.ok(Math.abs(Math.hypot(
    geom.rotateHandle.x - geom.rotateStemBase.x,
    geom.rotateHandle.y - geom.rotateStemBase.y,
  ) - 24) < 1e-9);
  assert.deepEqual(hitStickerGeometry(geom, geom.center), { kind: "move", cursor: "default" });
  assert.deepEqual(hitStickerGeometry(geom, geom.corners[0]), { kind: "scale", cornerIndex: 0, cursor: "nwse-resize" });
  assert.deepEqual(hitStickerGeometry(geom, geom.corners[1]), { kind: "scale", cornerIndex: 1, cursor: "nesw-resize" });
  assert.deepEqual(hitStickerGeometry(geom, geom.rotateHandle), { kind: "rotate", cursor: "grab" });
});

test("sticker geometry keeps its frame orientation at the exact pole", () => {
  const polarCamera = nodeView({ yaw: 90, pitch: 90, fov: 100 }, 1000, 500);
  const polarSticker = {
    ...sticker,
    yaw_deg: 90,
    pitch_deg: 90,
  };
  const geom = buildStickerGeometry(polarSticker, polarCamera);

  assert.equal(geom.visible, true);
  assert.ok(geom.corners[0].x < geom.corners[1].x, "top edge must run screen-left to screen-right");
  assert.ok(geom.corners[0].y < geom.corners[3].y, "left edge must run screen-top to screen-bottom");
});

test("moving a sticker maps the pointer ray back to yaw and pitch", () => {
  const moved = moveStickerToScreenPoint(sticker, { x: 750, y: 125 }, projection);

  assert.ok(moved.yaw_deg > 0);
  assert.ok(moved.pitch_deg > 0);
  assert.equal(moved.hFOV_deg, 20);
  assert.equal(moved.rot_deg, 0);
});

test("scale and rotate gestures preserve the modal transform semantics", () => {
  const scaled = scaleStickerFromPointer(sticker, 100, 150);
  const rotated = rotateStickerFromPointer(sticker, 0, Math.PI / 4, false);
  const snapped = rotateStickerFromPointer(sticker, 0, Math.PI / 5, true);

  assert.equal(scaled.hFOV_deg, 30);
  assert.equal(scaled.vFOV_deg, 15);
  assert.equal(rotated.rot_deg, -45);
  assert.equal(snapped.rot_deg, -45);
});

// Where the three.js camera of the drawn view puts a panorama direction, in canvas pixels.
function threeScreenPoint(camera, width, height, dir) {
  const world = panoToWorld(dir);
  const ndc = new Vector3(world.x, world.y, world.z).project(camera);
  return { x: (ndc.x + 1) * 0.5 * width, y: (1 - ndc.y) * 0.5 * height };
}

test("the pointer at a sticker's drawn position picks it, and dragging moves it by the pointer's angle", () => {
  const views = [
    { yaw: 0, pitch: 0, fov: 100 },
    { yaw: 140, pitch: -30, fov: 70 },
    { yaw: -60, pitch: 75, fov: 120 },
  ];
  const camera = new PerspectiveCamera();
  for (const view of views) {
    for (const [width, height] of [[1000, 500], [480, 640]]) {
      applyViewportCamera(camera, previewNodeCamera(view, width, height));
      const drawn = nodeView(view, width, height);
      const item = { id: "a", yaw_deg: view.yaw + 12, pitch_deg: view.pitch - 8, hFOV_deg: 18, vFOV_deg: 12, rot_deg: 20, z_index: 0 };
      const other = { id: "b", yaw_deg: view.yaw - 25, pitch_deg: view.pitch, hFOV_deg: 10, vFOV_deg: 10, rot_deg: 0, z_index: 1 };
      const center = threeScreenPoint(camera, width, height, yawPitchToDir(item.yaw_deg, item.pitch_deg));
      const geometry = buildStickerGeometry(item, drawn);
      assert.ok(Math.hypot(geometry.center.x - center.x, geometry.center.y - center.y) < 1e-6, `${JSON.stringify(view)} ${width}x${height}`);
      const picked = pickStickerAtPoint([item, other], null, center, drawn);
      assert.equal(picked.item.id, "a");
      assert.equal(picked.hit.kind, "move");

      // Dropping the pointer where three.js draws another direction puts the sticker there.
      const target = yawPitchToDir(view.yaw - 5, view.pitch + 4);
      const moved = moveStickerToScreenPoint(item, threeScreenPoint(camera, width, height, target), drawn);
      const movedDir = yawPitchToDir(moved.yaw_deg, moved.pitch_deg);
      const angle = Math.acos(Math.min(1, movedDir.x * target.x + movedDir.y * target.y + movedDir.z * target.z)) * RAD2DEG;
      assert.ok(angle < 1e-6, `${JSON.stringify(view)} ${width}x${height}: ${angle} deg`);
    }
  }
});

test("the view projection and its rays follow the three.js camera", () => {
  const camera = new PerspectiveCamera();
  const view = { yaw: -120, pitch: 40, fov: 90 };
  const [width, height] = [640, 360];
  applyViewportCamera(camera, previewNodeCamera(view, width, height));
  const drawn = nodeView(view, width, height);
  for (const [x, y] of [[0, 0], [320, 180], [100, 300], [639, 5]]) {
    const ndc = new Vector3(x / width * 2 - 1, 1 - y / height * 2, 0.5).unproject(camera).sub(camera.position).normalize();
    const expected = worldToPano(ndc);
    const ray = drawn.ray(x, y);
    assert.ok(Math.hypot(ray.x - expected.x, ray.y - expected.y, ray.z - expected.z) < 1e-9);
    const back = drawn.project(ray);
    assert.ok(Math.hypot(back.x - x, back.y - y) < 1e-6);
    assert.ok(back.z > 0);
  }
  assert.ok(drawn.project(yawPitchToDir(view.yaw + 180, -view.pitch)).z < 0, "behind the camera");
});

// ADR 0042: a sky Sticker of a lens curve has its frame where its lens puts its image's edges.
test("a lens sky Sticker's frame is its lens image's edge, past 90 degrees off its axis", () => {
  const side = nodeView({ yaw: 80, pitch: 0, fov: 100 }, 1000, 500);
  const fisheye = { ...sticker, hFOV_deg: 200, vFOV_deg: 100, curve: 0 };
  const geometry = buildStickerGeometry(fisheye, side);
  assert.equal(geometry.visible, true);
  // The middle of its right edge is 100° to the right of its center.
  const rightEdge = geometry.boundaryEdges[1];
  const middle = rightEdge[Math.floor(rightEdge.length / 2)];
  const ray = side.ray(middle.x, middle.y);
  assert.ok(Math.abs(Math.atan2(ray.x, ray.z) * RAD2DEG - 100) < 0.5, `at ${Math.atan2(ray.x, ray.z) * RAD2DEG}`);
});

test("sticker geometry gives the middle of each edge, where an edge handle scales one axis", () => {
  const geom = buildStickerGeometry(sticker, projection);
  assert.deepEqual(geom.edgeMidpoints.map((mid) => mid.edge), ["top", "right", "bottom", "left"]);
  const [top, right, bottom, left] = geom.edgeMidpoints;
  assert.ok(Math.abs(top.x - 500) < 1e-9 && top.y < 250);
  assert.ok(Math.abs(bottom.x - 500) < 1e-9 && bottom.y > 250);
  assert.ok(right.x > 500 && Math.abs(right.y - 250) < 1e-9);
  assert.ok(left.x < 500 && Math.abs(left.y - 250) < 1e-9);
  assert.deepEqual(top.a, geom.corners[0]);
  assert.deepEqual(top.b, geom.corners[1]);
});

test("an edge handle scales only its axis, held to 1..179 degrees", () => {
  assert.deepEqual(scaleStickerAxisFromPointer(sticker, "scale_x", 100, 150), { ...sticker, hFOV_deg: 30 });
  assert.deepEqual(scaleStickerAxisFromPointer(sticker, "scale_y", 100, 50), { ...sticker, vFOV_deg: 5 });
  assert.equal(scaleStickerAxisFromPointer(sticker, "scale_x", 10, 1000).hFOV_deg, 179);
});

test("rotateStickerFromPointer snaps to the step it is given (the new UI's 15°), the old UI's 45° by default", () => {
  const sticker = { rot_deg: 3 };
  assert.equal(rotateStickerFromPointer(sticker, 0, -0.2, true, 15).rot_deg, 15);
  assert.equal(rotateStickerFromPointer(sticker, 0, -0.2, true).rot_deg, 0);
});
