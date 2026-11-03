import assert from "node:assert/strict";
import test from "node:test";

import { createItems } from "../web_src/editor/items.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";

// The old editor draws a stroke group's frame with the shared strokeGroupFrame (docs/studio-ui.md "ペイントのまとまり"
// "group の rot_deg の持ち方"): turned by the group's rot_deg, which it keeps.
test("the old editor's stroke group frame is turned by the group's rot_deg", () => {
  const points = [{ u: 0.4, v: 0.45 }, { u: 0.5, v: 0.5 }];
  const stroke = { id: "s1", actionGroupId: "g1", layerKind: "paint", toolKind: "pen", size: 10, opacity: 1, color: { r: 1, g: 0, b: 0, a: 1 }, targetSpace: { kind: "ERP_GLOBAL" }, geometry: { geometryKind: "freehand_open", points, rawPoints: points, processedPoints: points } };
  const state = loadSceneState({ version: 2, painting: { groups: [{ id: "g1", actionGroupId: "g1", z_index: 0, rot_deg: 30 }], paint: { strokes: [stroke] } } });
  const items = createItems({ cameraV2: true, editor: { frame: 0, mode: "pano" }, sceneV2: true, state, stateV2: true, type: "stickers" });
  items.connect({ getBrushPresetIdForTool: () => "pen", getPaintingLayerList: () => state.painting.paint.strokes });
  const frame = items.ensureGroupFrame("g1", "paint");
  assert.equal(frame.rot_deg, 30);
  assert.equal(state.painting.groups[0].rot_deg, 30, "the group keeps it");
});

test("the old editor moves a stroke group as a sky Sticker moves: its center direction to the one given, its points as a rigid body", () => {
  const points = [{ u: 0.48, v: 0.06 }, { u: 0.5, v: 0.065 }, { u: 0.52, v: 0.06 }];
  const stroke = { id: "s1", actionGroupId: "g1", layerKind: "paint", toolKind: "pen", size: 10, opacity: 1, color: { r: 1, g: 0, b: 0, a: 1 }, targetSpace: { kind: "ERP_GLOBAL" }, geometry: { geometryKind: "freehand_open", points, rawPoints: points, processedPoints: points } };
  const state = loadSceneState({ version: 2, painting: { groups: [{ id: "g1", actionGroupId: "g1", z_index: 0, rot_deg: 5 }], paint: { strokes: [stroke] } } });
  const items = createItems({ cameraV2: true, editor: { frame: 0, mode: "pano" }, sceneV2: true, state, stateV2: true, type: "stickers" });
  items.connect({ getBrushPresetIdForTool: () => "pen", getPaintingLayerList: () => state.painting.paint.strokes });
  const snapshot = structuredClone(state.painting.paint.strokes);
  const frame = structuredClone(items.ensureGroupFrame("g1", "paint"));
  // Over the pole, to latitude 80° behind.
  const behind = { x: 0, y: Math.sin(80 * Math.PI / 180), z: -Math.cos(80 * Math.PI / 180) };
  assert.equal(items.applyStrokeGroupOffset("g1", behind, snapshot, "paint", frame), true);
  const moved = state.painting.paint.strokes[0].geometry.points;
  moved.forEach((p) => assert.ok(Math.abs(Math.abs(p.u - 0.5) - 0.5) < 0.05 && p.v > 0.02, `${p.u}, ${p.v}`));
  assert.equal(state.painting.groups[0].rot_deg, 5);
  const after = items.ensureGroupFrame("g1", "paint");
  assert.ok(Math.abs(after.halfW - frame.halfW) < 1e-9 && Math.abs(after.halfH - frame.halfH) < 1e-9);
});

// A group around latitude 80° at longitude 60°, as the old editor keeps it.
function groupAt80() {
  const points = [{ u: 0.66, v: 0.05 }, { u: 0.667, v: 0.055 }, { u: 0.673, v: 0.05 }];
  const stroke = { id: "s1", actionGroupId: "g1", layerKind: "paint", toolKind: "pen", size: 10, opacity: 1, color: { r: 1, g: 0, b: 0, a: 1 }, targetSpace: { kind: "ERP_GLOBAL" }, geometry: { geometryKind: "freehand_open", points, rawPoints: points, processedPoints: points } };
  const state = loadSceneState({ version: 2, painting: { groups: [{ id: "g1", actionGroupId: "g1", z_index: 0, rot_deg: 0 }], paint: { strokes: [stroke] } } });
  const items = createItems({ cameraV2: true, editor: { frame: 0, mode: "unwrap" }, sceneV2: true, state, stateV2: true, type: "stickers" });
  items.connect({ getBrushPresetIdForTool: () => "pen", getPaintingLayerList: () => state.painting.paint.strokes });
  return { state, items, points };
}

test("the old editor's Unwrap move onto the pole (latitude held at 90°) keeps the group's longitude, not 0: it does not spin", () => {
  const { state, items } = groupAt80();
  const snapshot = structuredClone(state.painting.paint.strokes);
  const frame = structuredClone(items.ensureGroupFrame("g1", "paint"));
  // The Unwrap rect's top: pitch 90 at whatever yaw the pointer is over (here 100°), as poseAtScreenPoint gives it.
  const yaw = 100 * Math.PI / 180;
  const top = { x: Math.sin(yaw) * Math.cos(Math.PI / 2), y: 1, z: Math.cos(yaw) * Math.cos(Math.PI / 2) };
  items.applyStrokeGroupOffset("g1", top, snapshot, "paint", frame);
  // Carried with its right axis where it was (the axes at the pole take the group's longitude): every point keeps its
  // component along it.
  const dir = (p) => {
    const lon = (p.u - 0.5) * 2 * Math.PI;
    const lat = (0.5 - p.v) * Math.PI;
    return { x: Math.cos(lat) * Math.sin(lon), y: Math.sin(lat), z: Math.cos(lat) * Math.cos(lon) };
  };
  const along = (p) => {
    const d = dir(p);
    return d.x * frame.right.x + d.y * frame.right.y + d.z * frame.right.z;
  };
  state.painting.paint.strokes[0].geometry.points.forEach((p, index) => {
    assert.ok(Math.abs(along(p) - along(snapshot[0].geometry.points[index])) < 1e-6, `point ${index}: ${along(p)} vs ${along(snapshot[0].geometry.points[index])}`);
  });
});

test("the old editor's move to where the group's center already is leaves its points where they are", () => {
  const { state, items, points } = groupAt80();
  const snapshot = structuredClone(state.painting.paint.strokes);
  const frame = structuredClone(items.ensureGroupFrame("g1", "paint"));
  items.applyStrokeGroupOffset("g1", frame.center, snapshot, "paint", frame);
  state.painting.paint.strokes[0].geometry.points.forEach((p, index) => {
    assert.ok(Math.abs(p.u - points[index].u) < 1e-12 && Math.abs(p.v - points[index].v) < 1e-12, `${index}`);
  });
});
