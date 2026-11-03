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
