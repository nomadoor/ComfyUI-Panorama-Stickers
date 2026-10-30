import assert from "node:assert/strict";
import test from "node:test";

import { paintingCompositeCount, uploadPaintCanvas, uploadPaintingLayer } from "../web_src/pano_paint_upload.js";

// The paint layer the editors upload for the node (docs/editor-architecture.md, docs/studio-ui.md "ペイントの道具"):
// the files, where they go, and the painting_layer the node reads (comfy_image_resolver.py resolve_painting_layer_payload).

// A canvas stand-in whose PNG is its name.
const canvas = (name) => ({ name, toBlob: (done, type) => done(new Blob([name], { type })) });

function fakeApi({ status = 200, name = (file) => file } = {}) {
  const calls = [];
  return {
    calls,
    async fetchApi(path, { method, body }) {
      const image = body.get("image");
      calls.push({ path, method, file: image.name, blob: await image.text(), type: body.get("type"), subfolder: body.get("subfolder"), overwrite: body.get("overwrite") });
      return { status, json: async () => ({ name: name(image.name), subfolder: "panorama_stickers", type: "input" }) };
    },
  };
}

test("a canvas goes to ComfyUI's input/panorama_stickers as a PNG, overwriting, and comes back as a comfy_image", async () => {
  const api = fakeApi();
  const ref = await uploadPaintCanvas(api, canvas("p"), "pano_paint_3.png");
  assert.deepEqual(api.calls, [{ path: "/upload/image", method: "POST", file: "pano_paint_3.png", blob: "p", type: "input", subfolder: "panorama_stickers", overwrite: "1" }]);
  assert.deepEqual(ref, { type: "comfy_image", filename: "pano_paint_3.png", subfolder: "panorama_stickers", storage: "input" });
  await assert.rejects(uploadPaintCanvas(fakeApi({ status: 500 }), canvas("p"), "x.png"), /upload failed \(500\)/);
  await assert.rejects(uploadPaintCanvas(fakeApi({ name: () => "" }), canvas("p"), "x.png"), /missing filename/);
});

test("the painting layer: the paint, each group in order (ids made safe for a file name), then the mask", async () => {
  const api = fakeApi();
  const groups = { "ag_1": canvas("g1"), "ag/2": canvas("g2") };
  const layer = await uploadPaintingLayer(api, {
    nodeId: "9",
    counts: { totalPaintCount: 2, totalMaskCount: 1 },
    paintCanvas: canvas("paint"),
    maskCanvas: canvas("mask"),
    groupIds: ["ag_1", "", "missing", "ag/2"],
    groupCanvas: (gid) => groups[gid] ?? null,
    revision: "r:2048x1024",
  });
  assert.deepEqual(api.calls.map((call) => [call.file, call.blob]), [
    ["pano_paint_9.png", "paint"], ["pano_group_9_ag_1.png", "g1"], ["pano_group_9_ag_2.png", "g2"], ["pano_mask_9.png", "mask"],
  ]);
  const ref = (filename) => ({ type: "comfy_image", filename, subfolder: "panorama_stickers", storage: "input" });
  assert.deepEqual(layer, {
    paint: ref("pano_paint_9.png"),
    mask: ref("pano_mask_9.png"),
    groups: [
      { id: "ag_1", actionGroupId: "ag_1", image: ref("pano_group_9_ag_1.png") },
      { id: "ag/2", actionGroupId: "ag/2", image: ref("pano_group_9_ag_2.png") },
    ],
    revision: "r:2048x1024",
  });
});

test("a layer with nothing on it is not uploaded", async () => {
  const api = fakeApi();
  const layer = await uploadPaintingLayer(api, {
    nodeId: "9", counts: { totalPaintCount: 0, totalMaskCount: 1 }, paintCanvas: canvas("paint"), maskCanvas: canvas("mask"),
    groupIds: ["ag_1"], groupCanvas: () => canvas("g"), revision: "r",
  });
  assert.deepEqual(api.calls.map((call) => call.file), ["pano_mask_9.png"]);
  assert.equal(layer.paint, null);
  assert.deepEqual(layer.groups, []);
});

test("the counts: strokes and raster objects of each layer", () => {
  assert.deepEqual(paintingCompositeCount(null), { paintCount: 0, maskCount: 0, paintRasterCount: 0, maskRasterCount: 0, totalPaintCount: 0, totalMaskCount: 0 });
  const painting = { paint: { strokes: [{}, {}] }, mask: { strokes: [{}] }, raster_objects: [{ layerKind: "paint" }, {}, { layerKind: "mask" }] };
  assert.deepEqual(paintingCompositeCount(painting), { paintCount: 2, maskCount: 1, paintRasterCount: 2, maskRasterCount: 1, totalPaintCount: 4, totalMaskCount: 2 });
});
