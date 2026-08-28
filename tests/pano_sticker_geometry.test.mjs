import assert from "node:assert/strict";
import test from "node:test";

import {
  buildStickerGeometry,
  hitStickerGeometry,
  moveStickerToScreenPoint,
  pickStickerAtPoint,
  rotateStickerFromPointer,
  scaleStickerFromPointer,
  screenPointToWorldDirection,
} from "../web_src/pano_sticker_geometry.js";

const camera = { yawDeg: 0, pitchDeg: 0, fovDeg: 100 };
const viewport = { width: 1000, height: 500 };
const sticker = {
  id: "sticker",
  yaw_deg: 0,
  pitch_deg: 0,
  hFOV_deg: 20,
  vFOV_deg: 10,
  rot_deg: 0,
};

test("center screen ray follows the shared ERP camera convention", () => {
  const center = screenPointToWorldDirection({ x: 500, y: 250 }, camera, viewport);
  const right = screenPointToWorldDirection({ x: 750, y: 250 }, camera, viewport);
  const upper = screenPointToWorldDirection({ x: 500, y: 125 }, camera, viewport);

  assert.ok(Math.abs(center.x) < 1e-12);
  assert.ok(Math.abs(center.y) < 1e-12);
  assert.ok(Math.abs(center.z - 1) < 1e-12);
  assert.ok(right.x > 0 && right.z > 0, "screen-right must increase yaw");
  assert.ok(upper.y > 0, "screen-up must increase pitch");
});

test("selected handles win hit testing while unselected bodies follow visual z order", () => {
  const selected = { ...sticker, id: "selected", z_index: 0, hFOV_deg: 20, vFOV_deg: 20 };
  const top = { ...sticker, id: "top", z_index: 4, hFOV_deg: 40, vFOV_deg: 40 };
  const selectedGeometry = buildStickerGeometry(selected, camera, viewport);

  const handlePick = pickStickerAtPoint(
    [selected, top],
    "selected",
    selectedGeometry.corners[0],
    camera,
    viewport,
  );
  assert.equal(handlePick.item.id, "selected");
  assert.equal(handlePick.hit.kind, "scale");

  const bodyPick = pickStickerAtPoint([selected, top], "selected", { x: 500, y: 250 }, camera, viewport);
  assert.equal(bodyPick.item.id, "top");
  assert.equal(bodyPick.hit.kind, "move");
});

test("sticker geometry is centered, ordered, and exposes modal-compatible handles", () => {
  const geom = buildStickerGeometry(sticker, camera, viewport);

  assert.equal(geom.visible, true);
  assert.ok(Math.abs(geom.center.x - 500) < 1e-9);
  assert.ok(Math.abs(geom.center.y - 250) < 1e-9);
  assert.equal(geom.corners.length, 4);
  assert.equal(geom.boundaryEdges.length, 4);
  assert.deepEqual(geom.boundaryEdges.map((edge) => edge.length), [29, 29, 29, 29]);
  assert.ok(geom.corners[0].x < geom.corners[1].x);
  assert.ok(geom.corners[0].y < geom.corners[3].y);
  assert.ok(geom.rotateHandle.y < geom.rotateStemBase.y);
  assert.deepEqual(hitStickerGeometry(geom, geom.center), { kind: "move", cursor: "default" });
  assert.deepEqual(hitStickerGeometry(geom, geom.corners[0]), { kind: "scale", cornerIndex: 0, cursor: "nwse-resize" });
  assert.deepEqual(hitStickerGeometry(geom, geom.corners[1]), { kind: "scale", cornerIndex: 1, cursor: "nesw-resize" });
  assert.deepEqual(hitStickerGeometry(geom, geom.rotateHandle), { kind: "rotate", cursor: "grab" });
});

test("moving a sticker maps the pointer ray back to yaw and pitch", () => {
  const moved = moveStickerToScreenPoint(sticker, { x: 750, y: 125 }, camera, viewport);

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
