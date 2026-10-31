import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { BufferGeometry, DoubleSide, Group, Mesh, MeshStandardMaterial, Texture } from "three";

import { disposeObject, loadSceneItem, makeLit, makeUnlit } from "../web_src/pano_scene_loaders.js";
import { DEFAULT_LIGHTS, createDefaultLights } from "../web_src/pano_three_view.js";

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

const materialsOf = (root) => {
  const materials = [];
  root.traverse((object) => {
    if (object.isMesh) materials.push(...[object.material].flat());
  });
  return materials;
};

// docs/threejs-spark-integration.md: the `unlit` of the meta decides the material, not the GLB's own mark.
test("a GLB marked unlit draws without light, one light falls on keeps GLTFLoader's material on both sides", async (t) => {
  const bytes = triangleGlb();
  t.mock.method(globalThis, "fetch", async () => ({ ok: true, arrayBuffer: async () => bytes }));
  const signal = new AbortController().signal;

  const unlit = await loadSceneItem("mesh", "/view?filename=a.glb", signal, { unlit: true });
  assert.deepEqual(materialsOf(unlit.object).map((material) => [material.type, material.side]), [["MeshBasicMaterial", DoubleSide]]);
  const lit = await loadSceneItem("mesh", "/view?filename=a.glb", signal, { unlit: false });
  const [standard] = materialsOf(lit.object);
  assert.equal(standard.type, "MeshStandardMaterial");
  assert.equal(standard.side, DoubleSide);
  // A GLB without normals is shaded by its faces, as GLTFLoader sets it.
  assert.equal(standard.flatShading, true);
  // Without the mark it draws as before, without light.
  const before = await loadSceneItem("mesh", "/view?filename=a.glb", signal);
  assert.equal(materialsOf(before.object)[0].type, "MeshBasicMaterial");
});

// docs/render-contract.md "既定の照明": the values Python reads from the same fixture.
test("the default lights are the documented rig, fixed in the World and aimed at its origin", () => {
  const fixture = JSON.parse(readFileSync(new URL("./fixtures/default_lighting.json", import.meta.url), "utf8"));
  assert.deepEqual(JSON.parse(JSON.stringify(DEFAULT_LIGHTS)), fixture.lights);
  const group = createDefaultLights();
  const lights = group.children.filter((object) => object.isLight);
  const drawn = lights.map((light) => ({
    type: light.isAmbientLight ? "ambient" : "directional",
    color: light.color.toArray(),
    intensity: light.intensity,
    ...(light.isDirectionalLight ? { position: light.position.toArray() } : {}),
  }));
  assert.deepEqual(drawn, fixture.lights);
  const directional = lights.filter((light) => light.isDirectionalLight);
  group.updateMatrixWorld(true);
  for (const light of directional) {
    assert.deepEqual(light.target.position.toArray(), [0, 0, 0]);
    assert.equal(light.castShadow, false);
  }
});

// docs/threejs-spark-integration.md: the views of a DA3_GEOMETRY multiview element are one item, shown once all of
// them loaded, counted as the sum of their bytes, without light as its meta says.
test("an item of several views is all their GLBs in one object, its box around them and its size their sum", async (t) => {
  const glb = triangleGlb();
  const fetched = [];
  t.mock.method(globalThis, "fetch", async (url) => {
    fetched.push(url);
    return { ok: true, arrayBuffer: async () => glb.slice(0) };
  });
  const item = await loadSceneItem("mesh", ["/view?filename=v0.glb", "/view?filename=v1.glb"], new AbortController().signal, { unlit: true });
  assert.deepEqual(fetched, ["/view?filename=v0.glb", "/view?filename=v1.glb"]);
  assert.equal(item.size, glb.byteLength * 2);
  assert.deepEqual(item.box, { min: [0, 0, -1], max: [1, 1, -1] });
  assert.equal(item.object.children.length, 2);
  assert.deepEqual(materialsOf(item.object).map((material) => material.type), ["MeshBasicMaterial", "MeshBasicMaterial"]);
});

test("an item of several views fails as a whole when one view does not load", async (t) => {
  const glb = triangleGlb();
  t.mock.method(globalThis, "fetch", async (url) => (url.endsWith("v1.glb") ? { ok: false, status: 404 } : { ok: true, arrayBuffer: async () => glb.slice(0) }));
  await assert.rejects(loadSceneItem("mesh", ["/view?filename=v0.glb", "/view?filename=v1.glb"], new AbortController().signal, { unlit: true }), /HTTP 404/);
});

// docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド": a depth file becomes its R32F texture on the
// shared grid, counted as W × H × 4 bytes.
function depthFile(values) {
  const buffer = new ArrayBuffer(values.length * 4);
  const view = new DataView(buffer);
  values.forEach((value, index) => view.setFloat32(index * 4, value, true));
  return buffer;
}
const depthSource = (extra = {}) => ({
  url: "/view?filename=d0.f32", width: 3, height: 2, depth: { dtype: "float32", byte_order: "little", bytes: 24 },
  intrinsics: [1, 0, 0, 0, 1, 0, 0, 0, 1], ...extra,
});

test("a depth grid item is its depth texture on the shared grid, its box from the depths above 0", async (t) => {
  const { FloatType, NearestFilter, RedFormat } = await import("three");
  const { depthGridGeometry } = await import("../web_src/pano_depth_grid.js");
  const bytes = depthFile([1, 2, 0, 1, 1, 1]);
  t.mock.method(globalThis, "fetch", async () => ({ ok: true, arrayBuffer: async () => bytes }));
  const item = await loadSceneItem("depth_grid", depthSource(), new AbortController().signal, { unlit: true, maxTextureSize: 4096 });
  assert.equal(item.size, 3 * 2 * 4);
  assert.equal(item.object.geometry, depthGridGeometry(3, 2));
  assert.equal(item.object.frustumCulled, false);
  const texture = item.object.material.uniforms.depthMap.value;
  assert.deepEqual([texture.format, texture.type, texture.minFilter, texture.magFilter, texture.generateMipmaps, texture.flipY], [RedFormat, FloatType, NearestFilter, NearestFilter, false, false]);
  assert.deepEqual([...texture.image.data], [1, 2, 0, 1, 1, 1]);
  assert.deepEqual(item.box, { min: [0, -1, -2], max: [2, 0, -1] });
});

// docs/threejs-spark-integration.md "生成を邪魔しない": an item let go frees its GPU texture (three.js deletes the
// uploaded texture on its dispose event) and its materials; its grid is shared and stays.
test("a depth grid item let go disposes its depth texture and materials", async (t) => {
  const { disposeSceneItem } = await import("../web_src/pano_scene_loaders.js");
  const bytes = depthFile([1, 2, 0, 1, 1, 1]);
  t.mock.method(globalThis, "fetch", async () => ({ ok: true, arrayBuffer: async () => bytes }));
  const item = await loadSceneItem("depth_grid", depthSource(), new AbortController().signal, { unlit: true, maxTextureSize: 4096 });
  const disposed = [];
  item.object.material.uniforms.depthMap.value.addEventListener("dispose", () => disposed.push("texture"));
  item.object.material.addEventListener("dispose", () => disposed.push("material"));
  const geometry = item.object.geometry;
  geometry.addEventListener("dispose", () => disposed.push("geometry"));
  disposeSceneItem({ kind: "depth_grid", object: item.object });
  assert.deepEqual(disposed, ["texture", "material"]);
});

test("a depth file of another form, or larger than the GPU's textures, does not load", async (t) => {
  t.mock.method(globalThis, "fetch", async () => ({ ok: true, arrayBuffer: async () => depthFile([1, 1, 1, 1, 1]) }));
  const signal = new AbortController().signal;
  await assert.rejects(loadSceneItem("depth_grid", depthSource(), signal, { maxTextureSize: 4096 }), /20 bytes, not 24/);
  await assert.rejects(loadSceneItem("depth_grid", depthSource({ depth: { dtype: "float32", byte_order: "big", bytes: 24 } }), signal, { maxTextureSize: 4096 }), /big/);
  await assert.rejects(loadSceneItem("depth_grid", depthSource({ intrinsics: [0, 0, 0, 0, 0, 0, 0, 0, 0] }), signal, { maxTextureSize: 4096 }), /K/);
  await assert.rejects(loadSceneItem("depth_grid", depthSource(), signal, { maxTextureSize: 2 }), /MAX_TEXTURE_SIZE 2/);
});

// A GLB lets go of every texture of its materials, not only the base color: those of a material made unlit go
// as it is replaced (the base color stays with the unlit one), the rest when the item goes.
test("a GLB's textures are all disposed: normal, roughness, metalness, emissive, occlusion and the base color", () => {
  const slots = ["map", "normalMap", "roughnessMap", "metalnessMap", "emissiveMap", "aoMap"];
  const glb = () => {
    const disposed = new Set();
    const material = new MeshStandardMaterial();
    for (const slot of slots) {
      material[slot] = new Texture();
      material[slot].addEventListener("dispose", () => disposed.add(slot));
    }
    const root = new Group();
    root.add(new Mesh(new BufferGeometry(), material));
    return { root, disposed };
  };
  const unlit = glb();
  makeUnlit(unlit.root);
  assert.deepEqual([...unlit.disposed].sort(), slots.filter((slot) => slot !== "map").sort());
  disposeObject(unlit.root);
  assert.deepEqual([...unlit.disposed].sort(), [...slots].sort());
  const lit = glb();
  disposeObject(makeLit(lit.root));
  assert.deepEqual([...lit.disposed].sort(), [...slots].sort());
});
