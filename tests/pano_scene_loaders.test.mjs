import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneItem } from "../web_src/pano_scene_loaders.js";

// A GLB of one triangle, as the node writes a MESH item (no texture).
function triangleGlb() {
  const positions = new Float32Array([0, 0, -1, 1, 0, -1, 0, 1, -1]);
  const json = JSON.stringify({
    asset: { version: "2.0" },
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{ mesh: 0 }],
    meshes: [{ primitives: [{ attributes: { POSITION: 0 } }] }],
    accessors: [{ bufferView: 0, componentType: 5126, count: 3, type: "VEC3", min: [0, 0, -1], max: [1, 1, -1] }],
    bufferViews: [{ buffer: 0, byteLength: positions.byteLength }],
    buffers: [{ byteLength: positions.byteLength }],
  });
  const jsonBytes = new TextEncoder().encode(json.padEnd(Math.ceil(json.length / 4) * 4, " "));
  const glb = new ArrayBuffer(12 + 8 + jsonBytes.length + 8 + positions.byteLength);
  const view = new DataView(glb);
  view.setUint32(0, 0x46546c67, true);
  view.setUint32(4, 2, true);
  view.setUint32(8, glb.byteLength, true);
  view.setUint32(12, jsonBytes.length, true);
  view.setUint32(16, 0x4e4f534a, true);
  new Uint8Array(glb, 20).set(jsonBytes);
  const binary = 20 + jsonBytes.length;
  view.setUint32(binary, positions.byteLength, true);
  view.setUint32(binary + 4, 0x004e4942, true);
  new Uint8Array(glb, binary + 8).set(new Uint8Array(positions.buffer));
  return glb;
}

test("a loaded item reports the bytes it loaded and keeps no reference to them", async (t) => {
  const bytes = triangleGlb();
  t.mock.method(globalThis, "fetch", async () => ({ ok: true, arrayBuffer: async () => bytes }));

  const item = await loadSceneItem("mesh", "/view?filename=pano_scene_a_0.glb", new AbortController().signal);

  assert.equal(item.size, bytes.byteLength);
  assert.deepEqual(item.box, { min: [0, 0, -1], max: [1, 1, -1] });
  const buffers = [];
  item.object.traverse((object) => {
    for (const attribute of Object.values(object.geometry?.attributes ?? {})) buffers.push(attribute.array.buffer);
  });
  assert.equal(buffers.length, 1);
  assert.equal(buffers.includes(bytes), false);
  assert.deepEqual(Object.keys(item).sort(), ["box", "object", "size"]);
});
