// Loading the `scene` items of the space view (#71), in the three.js chunk. A GLB loads with three.js's
// GLTFLoader; a PLY loads with Spark, which is its own chunk and is imported the first time a SPLAT
// loads, so editors and node previews without a SPLAT never load it.
import { Box3, DoubleSide, Group, MeshBasicMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

let spark = null;

// Spark's module, imported once on first use.
export function loadSpark() {
  spark ||= import("@sparkjsdev/spark");
  return spark;
}

// A GLB that draws without light (its meta's `unlit`, docs/render-contract.md "光が効く要素") draws on both sides
// like the node's renderer: each material becomes a MeshBasicMaterial with its base color, texture and vertex
// colors.
export function makeUnlit(root) {
  root.traverse((object) => {
    if (!object.isMesh) return;
    const unlit = (material) => {
      const basic = new MeshBasicMaterial({ map: material.map ?? null, color: material.color, vertexColors: material.vertexColors, side: DoubleSide });
      material.dispose();
      return basic;
    };
    object.material = Array.isArray(object.material) ? object.material.map(unlit) : unlit(object.material);
  });
  return root;
}

// A GLB light falls on keeps the MeshStandardMaterial GLTFLoader made of it, drawn on both sides as the node
// draws it (docs/render-contract.md "材質"). Its sampler stays as the GLB has it.
export function makeLit(root) {
  root.traverse((object) => {
    if (!object.isMesh) return;
    for (const material of [object.material].flat()) material.side = DoubleSide;
  });
  return root;
}

export function disposeObject(root) {
  root.traverse((object) => {
    object.geometry?.dispose();
    for (const material of [object.material].flat()) {
      material?.map?.dispose();
      material?.dispose();
    }
  });
}

function boxValue(box) {
  return box.isEmpty() ? null : { min: box.min.toArray(), max: box.max.toArray() };
}

async function fetchBytes(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.arrayBuffer();
}

const gltfLoader = new GLTFLoader();

// load() of createSceneItems (pano_scene_items.js): the item's object, its box in its own frame (a
// SPLAT's in 3DGS coordinates) and the bytes it loaded, for the budget of loaded items. The fetched bytes
// are let go once handed to the parser, so only the parsed item stays. A GLB draws without light unless
// `unlit` is false (the meta's mark).
export async function loadSceneItem(kind, url, signal, { unlit = true } = {}) {
  if (Array.isArray(url)) return loadViews(url, signal, unlit);
  let bytes = await fetchBytes(url, signal);
  signal.throwIfAborted();
  const size = bytes.byteLength;
  if (kind === "splat") {
    const { SplatMesh } = await loadSpark();
    signal.throwIfAborted();
    // The node writes a SPLAT item as PLY; its URL (/view?filename=...) does not end in the extension.
    // The editor picks a SPLAT on its box (pano_three_view.js pickAt): Spark's raycast walks every splat
    // on the main thread.
    const mesh = new SplatMesh({ fileBytes: bytes, fileType: "ply", raycastable: false });
    bytes = null;
    await mesh.initialized;
    return { object: mesh, box: boxValue(mesh.getBoundingBox(true)), size };
  }
  const parsing = gltfLoader.parseAsync(bytes, "");
  bytes = null;
  const gltf = await parsing;
  const object = unlit ? makeUnlit(gltf.scene) : makeLit(gltf.scene);
  return { object, box: boxValue(new Box3().setFromObject(gltf.scene)), size };
}

// An item of several views (a DA3_GEOMETRY multiview element, docs/threejs-spark-integration.md): the GLB of every
// view in one object, which resolves once all of them loaded (a view that fails fails the item), its box around
// them all and its size the sum of their bytes.
async function loadViews(urls, signal, unlit) {
  const settled = await Promise.allSettled(urls.map((url) => loadSceneItem("mesh", url, signal, { unlit })));
  const views = settled.filter((result) => result.status === "fulfilled").map((result) => result.value);
  const failed = settled.find((result) => result.status === "rejected");
  if (failed || signal.aborted) {
    // The views that did load go with the item.
    views.forEach((view) => disposeObject(view.object));
    signal.throwIfAborted();
    throw failed.reason;
  }
  const object = new Group();
  for (const view of views) object.add(view.object);
  return { object, box: boxValue(new Box3().setFromObject(object)), size: views.reduce((total, view) => total + view.size, 0) };
}

export function disposeSceneItem(item) {
  if (!item.object) return;
  if (item.kind === "splat") item.object.dispose();
  else disposeObject(item.object);
}
