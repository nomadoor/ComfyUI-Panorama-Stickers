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
