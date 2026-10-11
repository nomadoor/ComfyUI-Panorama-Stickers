// Loading the `scene` items of the space view (#71), in the three.js chunk. A GLB loads with three.js's
// GLTFLoader; a PLY loads with Spark, which is its own chunk and is imported the first time a SPLAT
// loads, so editors and node previews without a SPLAT never load it.
import { AnimationMixer, Box3, BufferAttribute, DataTexture, DoubleSide, FloatType, Group, LoopRepeat, Mesh, MeshBasicMaterial, NearestFilter, RedFormat } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  createDepthGridMaterial,
  depthGridBox,
  depthGridGeometry,
  depthGridTooLarge,
  inverseIntrinsics,
  readDepthGrid,
} from "./pano_depth_grid.js";

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
      const basic = unlitMaterial(material);
      material.dispose();
      return basic;
    };
    object.material = Array.isArray(object.material) ? object.material.map(unlit) : unlit(object.material);
  });
  return root;
}

// The material a GLB's material draws with without light: its base color, texture and vertex colors, on both sides.
function unlitMaterial(material) {
  return new MeshBasicMaterial({ map: material.map ?? null, color: material.color, vertexColors: material.vertexColors, side: DoubleSide });
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
  const animation = root.userData?.animation;
  if (animation) animation.mixer.uncacheRoot(root);
  root.traverse((object) => {
    object.skeleton?.dispose();
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
export async function loadSceneItem(kind, url, signal, { unlit = true, maxTextureSize = Infinity } = {}) {
  if (kind === "depth_grid") return loadDepthGrid(url, signal, maxTextureSize);
  if (kind === "mesh" && url?.animation) return loadAnimated(url, signal, unlit);
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

// An animated 3D file (ADR 0043, docs/threejs-spark-integration.md "glTF のアニメーション"): its original file's default
// scene as GLTFLoader reads it (its SkinnedMeshes, morphs and node hierarchy, which three.js poses), every mesh drawn
// with the one material of the editor GLB (the core's MESH that save_glb wrote, so the material is the output's), and
// the editor GLB's box (the bind pose's, the content box). A material with vertex colors on a shape without them sees
// colors of 1. Its AnimationMixer is posed by poseAnimation; it never runs on a clock. size is both files' bytes.
async function loadAnimated({ url, animation }, signal, unlit) {
  const [glb, original] = await Promise.all([fetchBytes(url, signal), fetchBytes(animation, signal)]);
  signal.throwIfAborted();
  const size = glb.byteLength + original.byteLength;
  const [core, gltf] = await Promise.all([gltfLoader.parseAsync(glb, ""), gltfLoader.parseAsync(original, "")]);
  let material = null;
  core.scene.traverse((object) => {
    if (object.isMesh && !material) material = [object.material].flat()[0];
  });
  const box = boxValue(new Box3().setFromObject(core.scene));
  // Of the editor GLB only its material stays.
  core.scene.traverse((object) => {
    object.geometry?.dispose();
    for (const each of object.isMesh ? [object.material].flat() : []) if (each !== material) each.dispose();
  });
  if (!material) {
    disposeObject(gltf.scene);
    throw new Error("The 3D file's editor GLB has no mesh.");
  }
  let drawn = material;
  if (unlit) {
    drawn = unlitMaterial(material);
    material.dispose();
  } else material.side = DoubleSide;
  const root = gltf.scene;
  root.traverse((object) => {
    if (!object.isMesh) return;
    for (const own of [object.material].flat()) {
      own.map?.dispose();
      own.dispose();
    }
    object.material = drawn;
    const { geometry } = object;
    if (drawn.vertexColors && !geometry.attributes.color) {
      geometry.setAttribute("color", new BufferAttribute(new Float32Array(geometry.attributes.position.count * 3).fill(1), 3));
    }
    // A posed shape leaves the bounds of its rest shape.
    if (object.isSkinnedMesh || geometry.morphAttributes.position) object.frustumCulled = false;
  });
  root.userData.animation = { mixer: new AnimationMixer(root), clips: gltf.animations, action: null };
  return { object: root, box, size };
}

// Poses an animated 3D file's object (loadAnimated) as a request's `animation` says ({ clip: the clip's index in the
// file, speed, time: the clip frame in seconds; pano_animation.js animationPose}): the clip's action loops
// (LoopRepeat) at timeScale = speed, and the mixer is set to `time`. An object of a static file is left as it is.
export function poseAnimation(object, pose) {
  const animation = object?.userData?.animation;
  if (!animation || !pose) return;
  const clip = animation.clips[pose.clip] ?? animation.clips[0];
  if (!clip) return;
  if (animation.action?.getClip() !== clip) {
    animation.action?.stop();
    animation.action = animation.mixer.clipAction(clip);
    animation.action.setLoop(LoopRepeat, Infinity);
    animation.action.play();
  }
  animation.action.timeScale = pose.speed;
  animation.mixer.setTime(pose.time);
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

// A DA3_GEOMETRY mono item (docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド"): its depth file
// (source: { url, width, height, depth, intrinsics }, sceneFilesOf) as an R32F texture (nearest, no mip, no flipY:
// texture row 0 is the file's row 0, the image's top) on the shared grid of its size. Its size is W × H × 4 bytes and
// its box is around the points of the depths above 0. A file of another form than the meta's, a K without an
// inverse, or a grid larger than the GPU's textures (maxTextureSize) does not load.
async function loadDepthGrid(source, signal, maxTextureSize) {
  const { url, width, height, intrinsics } = source;
  const tooLarge = depthGridTooLarge(width, height, maxTextureSize);
  if (tooLarge) throw new Error(tooLarge);
  const inverseK = inverseIntrinsics(intrinsics);
  if (!inverseK) throw new Error("The depth grid's K has no inverse.");
  let bytes = await fetchBytes(url, signal);
  signal.throwIfAborted();
  const values = readDepthGrid(bytes, source);
  bytes = null;
  const depthMap = new DataTexture(values, width, height, RedFormat, FloatType);
  depthMap.minFilter = NearestFilter;
  depthMap.magFilter = NearestFilter;
  depthMap.generateMipmaps = false;
  depthMap.flipY = false;
  depthMap.needsUpdate = true;
  const object = new Mesh(depthGridGeometry(width, height), createDepthGridMaterial({ depthMap, inverseK, width, height }));
  object.frustumCulled = false;
  object.userData.depthGrid = true;
  return { object, box: depthGridBox(values, width, height, inverseK), size: width * height * 4 };
}

// A depth grid's mesh frees its texture and materials; its grid is shared by its size and holds no vertex data.
function disposeDepthGrid(object) {
  const { material } = object;
  material.uniforms.depthMap.value?.dispose();
  material.dispose();
  object.userData.pickMaterial?.dispose();
}

export function disposeSceneItem(item) {
  if (!item.object) return;
  if (item.kind === "splat") item.object.dispose();
  else if (item.kind === "depth_grid") disposeDepthGrid(item.object);
  else disposeObject(item.object);
}
