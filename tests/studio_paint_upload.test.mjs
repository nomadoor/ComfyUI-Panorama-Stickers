import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState, sceneStateText } from "../web_src/pano_scene_state.js";
import { needsPaintLayer, paintLayerRevision, textWithPaintLayer, uploadPaintLayer } from "../web_src/studio/paint_upload.js";

// The paint layer the new UI uploads when it closes (web_src/studio/paint_upload.js, docs/studio-ui.md "ペイントの道具"):
// when, with which revision, and how it goes into state_json. The files themselves are pano_paint_upload.js's
// (tests/pano_paint_upload.test.mjs); the editor closing and uploading is in tests/browser/studio_paint.spec.js.

const stroke = (id, layerKind = "paint") => ({
  id, actionGroupId: `ag_${id}`, layerKind, toolKind: "pen", size: 20, opacity: 1, hardness: 0.92, flow: 1, spacing: 0.14, createdAt: 0,
  color: layerKind === "paint" ? { r: 1, g: 0, b: 0, a: 1 } : null,
  targetSpace: { kind: "ERP_GLOBAL" }, radiusModel: "erp_uv_norm", radiusValue: 0.005,
  geometry: { geometryKind: "freehand_open", points: [{ u: 0.5, v: 0.5 }] },
});
const painting = (paint = [], mask = []) => ({
  version: 1,
  groups: paint.map((item, index) => ({ id: item.actionGroupId, type: "strokeGroup", actionGroupId: item.actionGroupId, z_index: index, locked: false, frame: null })),
  paint: { strokes: paint },
  mask: { strokes: mask },
  raster_objects: [],
});
const ref = (filename) => ({ type: "comfy_image", filename, subfolder: "panorama_stickers", storage: "input" });
const layer = (nodeId, revision, { paint = true, mask = false } = {}) => ({
  paint: paint ? ref(`pano_paint_${nodeId}.png`) : null, mask: mask ? ref(`pano_mask_${nodeId}.png`) : null, groups: [], revision,
});

test("a layer is uploaded when there is paint or a mask and the state has no layer of the paint's size for this node", () => {
  const painted = painting([stroke("a")]);
  assert.equal(needsPaintLayer({ painting: painting(), painting_layer: null }, "4"), false);
  assert.equal(needsPaintLayer({ painting: null, painting_layer: null }, "4"), false);
  assert.equal(needsPaintLayer({ painting: painted, painting_layer: null }, "4"), true);
  assert.equal(needsPaintLayer({ painting: painting([], [stroke("m", "mask")]), painting_layer: null }, "4"), true);
  assert.equal(needsPaintLayer({ painting: painted, painting_layer: layer("4", "x:2048x1024") }, "4"), false);
  // Another size, another node's files (a pasted node), or a missing mask.
  assert.equal(needsPaintLayer({ painting: painted, painting_layer: layer("4", "x:4096x2048") }, "4"), true);
  assert.equal(needsPaintLayer({ painting: painted, painting_layer: layer("3", "x:2048x1024") }, "4"), true);
  assert.equal(needsPaintLayer({ painting: painting([stroke("a")], [stroke("m", "mask")]), painting_layer: layer("4", "x:2048x1024") }, "4"), true);
});

test("the revision follows the painting and ends with the paint's size", () => {
  const a = painting([stroke("a")]);
  assert.equal(paintLayerRevision(a), paintLayerRevision(structuredClone(a)));
  assert.notEqual(paintLayerRevision(a), paintLayerRevision(painting([stroke("b")])));
  assert.match(paintLayerRevision(a), /^studio_[0-9a-f]{8}:2048x1024$/);
});

test("the layer goes into state_json only while its painting is the one uploaded; the rest of the text stays", () => {
  // The painting as the editor reads it back from the text it wrote on closing.
  const current = sceneStateText(loadSceneState({ version: 2, timeline: { fps: 30, length: 90 }, painting: painting([stroke("a")]) }));
  const scene = loadSceneState(current);
  const uploaded = layer("4", "r:2048x1024");
  const text = textWithPaintLayer(current, scene.painting, uploaded);
  const written = loadSceneState(text);
  assert.deepEqual(written.painting_layer, uploaded);
  assert.equal(sceneStateText({ ...written, painting_layer: null }), current);
  // A painting changed since (another editor wrote it), or a text that cannot be read: nothing is written.
  const changed = sceneStateText(loadSceneState({ version: 2, painting: painting([stroke("b")]) }));
  assert.equal(textWithPaintLayer(changed, scene.painting, uploaded), null);
  assert.equal(textWithPaintLayer("{not json", scene.painting, uploaded), null);
});

test("the upload sends the canvases the editor draws, with the painting's revision", async () => {
  const files = [];
  const api = {
    async fetchApi(path, { body }) {
      const image = body.get("image");
      files.push([image.name, await image.text()]);
      return { status: 200, json: async () => ({ name: image.name, subfolder: "panorama_stickers", type: "input" }) };
    },
  };
  const canvas = (name) => ({ toBlob: (done, type) => done(new Blob([name], { type })) });
  const current = painting([stroke("a")], [stroke("m", "mask")]);
  const result = await uploadPaintLayer(api, {
    nodeId: "4",
    painting: current,
    sources: { groupIds: ["ag_a"], paintCanvas: canvas("paint"), maskCanvas: canvas("mask"), groupCanvas: (gid) => (gid === "ag_a" ? canvas("group") : null) },
  });
  assert.deepEqual(files, [["pano_paint_4.png", "paint"], ["pano_group_4_ag_a.png", "group"], ["pano_mask_4.png", "mask"]]);
  assert.equal(result.revision, paintLayerRevision(current));
  assert.deepEqual(result.paint, ref("pano_paint_4.png"));
  assert.deepEqual(result.mask, ref("pano_mask_4.png"));
  assert.deepEqual(result.groups, [{ id: "ag_a", actionGroupId: "ag_a", image: ref("pano_group_4_ag_a.png") }]);
});
