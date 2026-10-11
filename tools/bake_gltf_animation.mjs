// Bake what three.js r184 makes of a glTF animation, for tests/test_gltf_animation.py to compare
// core/gltf_animation.py with (docs/render-contract.md, "glTF のアニメーション"; ADR 0043).
//
// usage: node tools/bake_gltf_animation.mjs
//
// It writes a small GLB, tests/fixtures/gltf_anim/anim.glb, built here from fixed numbers, and loads it with three.js's
// GLTFLoader in Node (no browser: nothing is drawn). The GLB has two skins (one on a mesh of two primitives whose node is
// not at the identity, one with uint8 weights that do not sum to 1), morph targets (a sparse one on a skinned primitive,
// one with normals on a mesh without a skin), a node animated without a skin under a node given as a matrix, and three
// clips over STEP, LINEAR, and CUBICSPLINE channels of translation, rotation, scale, and weights, with keys that start
// after 0, a rotation that takes the short arc, one close enough to lerp, and an unnamed clip. For each clip at each
// (seconds, speed) of TIMES, an AnimationMixer plays it as the editor does (LoopRepeat, `timeScale` the speed,
// `setTime(seconds)`), and it records the clip time, every node's matrixWorld, each skin's bone matrices
// (bone.matrixWorld x boneInverse), each mesh's morph influences, and each primitive's vertices in World as
// `SkinnedMesh.getVertexPosition` (three's own CPU skinning and morphing) and `matrixWorld` give them.
// Writes tests/fixtures/gltf_anim/three_r184.json; bake it again when three.js is updated.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "tests/fixtures/gltf_anim");
const revision = JSON.parse(readFileSync(path.join(root, "node_modules/three/package.json"), "utf8")).version;

// (seconds of the clip frame, speed): before the first key, between keys, on a key, past the end (it repeats), at speed.
const TIMES = [[0, 1], [0.1, 1], [0.25, 1], [0.5, 1], [0.8, 1], [1.0, 1], [1.37, 1], [2.9, 1], [0.25, 1.5], [1.1, 1.5], [0.7, 0.1], [3.3, 10]];

// --- The GLB, from fixed numbers.
const json = { asset: { version: "2.0" }, scene: 0, scenes: [], nodes: [], meshes: [], skins: [], animations: [], accessors: [], bufferViews: [], buffers: [] };
const chunks = [];
let length = 0;

function view(bytes) {
  const pad = (4 - (length % 4)) % 4;
  if (pad) {
    chunks.push(new Uint8Array(pad));
    length += pad;
  }
  json.bufferViews.push({ buffer: 0, byteOffset: length, byteLength: bytes.byteLength });
  chunks.push(new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength));
  length += bytes.byteLength;
  return json.bufferViews.length - 1;
}

const COMPONENT = { Float32Array: 5126, Uint16Array: 5123, Uint8Array: 5121 };
const SIZES = { 1: "SCALAR", 2: "VEC2", 3: "VEC3", 4: "VEC4", 16: "MAT4" };

function accessor(values, size, Type = Float32Array, extra = {}) {
  const array = Type.from(values.flat(Infinity));
  const entry = { bufferView: view(array), componentType: COMPONENT[Type.name], count: array.length / size, type: SIZES[size], ...extra };
  if (Type === Float32Array && size <= 4) {
    const columns = [...Array(size).keys()].map((c) => array.filter((_v, i) => i % size === c));
    entry.min = columns.map((c) => Math.min(...c));
    entry.max = columns.map((c) => Math.max(...c));
  }
  json.accessors.push(entry);
  return json.accessors.length - 1;
}

// A sparse accessor of `count` VEC3 that are 0 but at `indices`.
function sparse(count, indices, values) {
  json.accessors.push({
    componentType: 5126, count, type: "VEC3",
    min: [-1, -1, -1], max: [1, 1, 1],
    sparse: {
      count: indices.length,
      indices: { bufferView: view(Uint16Array.from(indices)), componentType: 5123 },
      values: { bufferView: view(Float32Array.from(values.flat())) },
    },
  });
  return json.accessors.length - 1;
}

function node(name, values = {}) {
  json.nodes.push({ name, ...values });
  return json.nodes.length - 1;
}

function compose(t, q, s) {
  return new THREE.Matrix4().compose(new THREE.Vector3(...t), new THREE.Quaternion(...q).normalize(), new THREE.Vector3(...s));
}

function axisAngle(axis, degrees) {
  const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(...axis).normalize(), (degrees * Math.PI) / 180);
  return [q.x, q.y, q.z, q.w];
}

// A bar of `rings` square rings along +Y, `height` tall, as triangles.
function bar(rings, height, width) {
  const positions = [];
  const normals = [];
  for (let r = 0; r < rings; r++) {
    for (const [x, z] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
      positions.push([x * width, (r / (rings - 1)) * height, z * width]);
      normals.push([x / Math.SQRT2, 0, z / Math.SQRT2]);
    }
  }
  const indices = [];
  for (let r = 0; r + 1 < rings; r++) {
    for (let k = 0; k < 4; k++) {
      const a = r * 4 + k;
      const b = r * 4 + ((k + 1) % 4);
      indices.push([a, b, b + 4], [a, b + 4, a + 4]);
    }
  }
  return { positions, normals, indices };
}

// Nodes. root (animated) holds the first skinned mesh, its bones, the second skin, and a frame given as a matrix
// around a mesh animated without a skin.
const scene_nodes = [];
const rootNode = node("root", { translation: [0.2, -0.1, 0.3] });
scene_nodes.push(rootNode);
const boneA0 = node("bone_a0", { translation: [0, 0, 0] });
const boneA1 = node("bone_a1", { translation: [0, 1, 0] });
json.nodes[boneA0].children = [boneA1];
const skinnedA = node("skinned_a", { translation: [0.5, 0.25, -0.4], rotation: axisAngle([0, 1, 0.3], 35), scale: [1.2, 0.8, 1.1] });
const boneB0 = node("bone_b0", { translation: [-1.5, 0, 0] });
const skinnedB = node("skinned_b", { translation: [-1.5, 0, 0] });
const plain = node("plain", { translation: [0, 0.5, 0] });
const frame = node("frame", { matrix: compose([1.2, 0.3, -0.5], axisAngle([1, 0.2, 0], 25), [0.9, 1.3, 0.7]).elements });
json.nodes[frame].children = [plain];
json.nodes[rootNode].children = [boneA0, skinnedA, boneB0, skinnedB, frame];

// The meshes. skinned_a: a bar of 4 rings between its two bones (weights that sum to 0.5 and to 0 at two vertices)
// with a sparse morph target, and a second primitive (a triangle) on bone_a1 alone.
{
  const { positions, normals, indices } = bar(4, 2, 0.25);
  const joints = positions.map(() => [0, 1, 0, 0]);
  const weights = positions.map(([, y]) => [1 - y / 2, y / 2, 0, 0]);
  weights[5] = [0.25, 0.25, 0, 0];
  weights[6] = [0, 0, 0, 0];
  const morph = sparse(positions.length, [12, 13, 14, 15], [[0, 0.4, 0], [0.1, 0.4, 0], [0, 0.4, 0.1], [-0.1, 0.4, 0]]);
  const triangle = [[0.3, 1.2, 0], [0.6, 1.2, 0], [0.45, 1.6, 0.1]];
  json.meshes.push({
    name: "bar_a",
    weights: [0.25],
    primitives: [
      {
        attributes: { POSITION: accessor(positions, 3), NORMAL: accessor(normals, 3), JOINTS_0: accessor(joints, 4, Uint8Array), WEIGHTS_0: accessor(weights, 4) },
        indices: accessor(indices, 1, Uint16Array),
        targets: [{ POSITION: morph }],
      },
      {
        attributes: { POSITION: accessor(triangle, 3), NORMAL: accessor(triangle.map(() => [0, 0, 1]), 3), JOINTS_0: accessor(triangle.map(() => [1, 0, 0, 0]), 4, Uint8Array), WEIGHTS_0: accessor(triangle.map(() => [1, 0, 0, 0]), 4) },
        indices: accessor([[0, 1, 2]], 1, Uint16Array),
        targets: [{ POSITION: accessor(triangle.map(() => [0, 0, 0]), 3) }],
      },
    ],
  });
  json.nodes[skinnedA].mesh = 0;
  json.nodes[skinnedA].skin = 0;
}
// skinned_b: a bar on one bone, its uint8 normalized weights summing to less than 255.
{
  const { positions, normals, indices } = bar(3, 1, 0.2);
  json.meshes.push({
    name: "bar_b",
    primitives: [{
      attributes: {
        POSITION: accessor(positions, 3), NORMAL: accessor(normals, 3),
        JOINTS_0: accessor(positions.map(() => [0, 0, 0, 0]), 4, Uint8Array),
        WEIGHTS_0: accessor(positions.map((_p, i) => [200 - i * 7, 0, 0, 0]), 4, Uint8Array, { normalized: true }),
      },
      indices: accessor(indices, 1, Uint16Array),
    }],
  });
  json.nodes[skinnedB].mesh = 1;
  json.nodes[skinnedB].skin = 1;
}
// plain: a quad with a morph target of positions and normals, no skin.
{
  const positions = [[-0.3, 0, 0], [0.3, 0, 0], [0.3, 0.6, 0], [-0.3, 0.6, 0]];
  json.meshes.push({
    name: "quad",
    weights: [0, 0.5],
    primitives: [{
      attributes: { POSITION: accessor(positions, 3), NORMAL: accessor(positions.map(() => [0, 0, 1]), 3) },
      indices: accessor([[0, 1, 2], [0, 2, 3]], 1, Uint16Array),
      targets: [
        { POSITION: accessor([[0, 0, 0.2], [0, 0, 0.2], [0, 0, 0], [0, 0, 0]], 3), NORMAL: accessor([[0, 0.3, 0], [0, 0.3, 0], [0, 0, 0], [0, 0, 0]], 3) },
        { POSITION: accessor([[0, 0, 0], [0, 0, 0], [0.1, 0.1, 0], [-0.1, 0.1, 0]], 3), NORMAL: accessor(positions.map(() => [0.2, 0, 0]), 3) },
      ],
    }],
  });
  json.nodes[plain].mesh = 2;
}

// The skins: inverse bind matrices of the bones' rest (skin 0), and of a pose apart from it (skin 1).
function worldOf(index, parents) {
  const def = json.nodes[index];
  const local = def.matrix ? new THREE.Matrix4().fromArray(def.matrix) : compose(def.translation || [0, 0, 0], def.rotation || [0, 0, 0, 1], def.scale || [1, 1, 1]);
  return parents[index] === undefined ? local : worldOf(parents[index], parents).multiply(local);
}
const parents = {};
json.nodes.forEach((def, index) => (def.children || []).forEach((child) => (parents[child] = index)));
json.skins.push({ joints: [boneA0, boneA1], inverseBindMatrices: accessor([boneA0, boneA1].map((b) => worldOf(b, parents).invert().elements), 16) });
json.skins.push({ joints: [boneB0], inverseBindMatrices: accessor([compose([-1.4, 0.1, 0], axisAngle([0, 0, 1], 10), [1, 1, 1]).invert().elements], 16) });
json.scenes.push({ nodes: scene_nodes });

// The clips.
function channel(animation, target, path, interpolation, times, values) {
  const size = values[0].length;
  animation.samplers.push({ input: accessor(times, 1), output: accessor(values, size), interpolation });
  animation.channels.push({ sampler: animation.samplers.length - 1, target: { node: target, path } });
}
function cubic(values, tangent) {
  // [in tangent, value, out tangent] per key.
  return values.flatMap((v, i) => [v.map((x) => x * tangent * (i % 2 ? -1 : 1)), v, v.map((x) => x * tangent)]);
}
{
  const walk = { name: "walk", samplers: [], channels: [] };
  // LINEAR rotations, the second pair more than 180 degrees apart as given (the short arc is the other way).
  const q0 = axisAngle([0, 0, 1], 0);
  const q1 = axisAngle([0, 0, 1], 40);
  const q2 = axisAngle([0, 0, 1], -60).map((x) => -x);
  channel(walk, boneA0, "rotation", "LINEAR", [0.2, 0.6, 1.2], [q0, q1, q2]);
  channel(walk, boneA1, "translation", "CUBICSPLINE", [0, 0.5, 1.0], cubic([[0, 1, 0], [0.2, 1.1, 0], [0, 0.9, 0.1]], 0.7));
  channel(walk, rootNode, "rotation", "CUBICSPLINE", [0, 1.2], cubic([axisAngle([0, 1, 0], 0), axisAngle([0, 1, 0], 70)], 0.3));
  channel(walk, skinnedA, "weights", "LINEAR", [0.1, 0.9], [[0], [1]]);
  channel(walk, plain, "translation", "LINEAR", [0, 1.2], [[0, 0.5, 0], [0.4, 0.7, -0.2]]);
  channel(walk, plain, "weights", "CUBICSPLINE", [0, 0.6, 1.2], cubic([[0, 0.5], [1, 0], [0.3, 0.3]], 0.5));
  channel(walk, boneB0, "scale", "STEP", [0, 0.4, 0.8], [[1, 1, 1], [1.3, 0.7, 1], [0.8, 1.2, 1.1]]);
  json.animations.push(walk);
  const wave = { name: "wave", samplers: [], channels: [] };
  // A rotation close enough to lerp (dot above 0.9995), and STEP weights.
  channel(wave, boneB0, "rotation", "LINEAR", [0.1, 0.7], [axisAngle([1, 0, 0], 10), axisAngle([1, 0, 0], 11.5)]);
  channel(wave, plain, "weights", "STEP", [0, 0.3, 0.5], [[1, 0], [0, 1], [0.5, 0.5]]);
  channel(wave, skinnedB, "translation", "LINEAR", [0, 0.5], [[-1.5, 0, 0], [-1.5, 0.3, 0]]);
  json.animations.push(wave);
  // An unnamed clip: three.js names it animation_2.
  const third = { samplers: [], channels: [] };
  channel(third, boneA1, "rotation", "STEP", [0.3, 0.9], [axisAngle([1, 0, 0], 30), axisAngle([1, 0, 0], -30)]);
  json.animations.push(third);
}

// The GLB container.
const bin = new Uint8Array(length + ((4 - (length % 4)) % 4));
let offset = 0;
for (const chunk of chunks) {
  bin.set(chunk, offset);
  offset += chunk.byteLength;
}
json.buffers.push({ byteLength: bin.byteLength });
let text = new TextEncoder().encode(JSON.stringify(json));
text = Uint8Array.from([...text, ...new Array((4 - (text.length % 4)) % 4).fill(0x20)]);
const glb = new Uint8Array(12 + 8 + text.length + 8 + bin.length);
const header = new DataView(glb.buffer);
header.setUint32(0, 0x46546c67, true);
header.setUint32(4, 2, true);
header.setUint32(8, glb.length, true);
header.setUint32(12, text.length, true);
header.setUint32(16, 0x4e4f534a, true);
glb.set(text, 20);
header.setUint32(20 + text.length, bin.length, true);
header.setUint32(24 + text.length, 0x004e4942, true);
glb.set(bin, 28 + text.length);
mkdirSync(out, { recursive: true });
writeFileSync(path.join(out, "anim.glb"), glb);

// --- What three.js makes of it.
async function load() {
  const buffer = glb.buffer.slice(glb.byteOffset, glb.byteOffset + glb.byteLength);
  return new Promise((resolve, reject) => new GLTFLoader().parse(buffer, "", resolve, reject));
}

function nodeObject(gltf, index) {
  let found = null;
  gltf.scene.traverse((object) => {
    const mapping = gltf.parser.associations.get(object);
    if (found === null && mapping && mapping.nodes === index) found = object;
  });
  return found;
}

function primitives(object) {
  return object.isMesh ? [object] : object.children.filter((child) => child.isMesh);
}

// Seven digits keep the numbers well inside the tolerance.
const round = (values) => Array.from(values, (v) => Number(v.toPrecision(7)));
const clips = [];
const sampleGltf = await load();
for (const [clipIndex, clip] of sampleGltf.animations.entries()) {
  const samples = [];
  for (const [seconds, speed] of TIMES) {
    const gltf = await load();
    const mixer = new THREE.AnimationMixer(gltf.scene);
    const action = mixer.clipAction(gltf.animations[clipIndex]);
    action.timeScale = speed;
    action.play();
    mixer.setTime(seconds);
    gltf.scene.updateMatrixWorld(true);
    const nodes = json.nodes.map((_def, index) => round(nodeObject(gltf, index).matrixWorld.elements));
    const skins = json.skins.map((skin) => skin.joints.map((joint, k) => {
      const object = nodeObject(gltf, joint);
      let mesh = null;
      gltf.scene.traverse((o) => { if (mesh === null && o.isSkinnedMesh && o.skeleton.bones.includes(object)) mesh = o; });
      return round(new THREE.Matrix4().multiplyMatrices(object.matrixWorld, mesh.skeleton.boneInverses[k]).elements);
    }));
    const weights = {};
    const vertices = {};
    json.nodes.forEach((def, index) => {
      if (def.mesh === undefined) return;
      const meshes = primitives(nodeObject(gltf, index));
      weights[index] = round(meshes[0].morphTargetInfluences || []);
      vertices[index] = meshes.map((mesh) => {
        const position = mesh.geometry.getAttribute("position");
        const points = [];
        const point = new THREE.Vector3();
        for (let i = 0; i < position.count; i++) {
          mesh.getVertexPosition(i, point);
          points.push(...round(point.applyMatrix4(mesh.matrixWorld).toArray()));
        }
        return points;
      });
    });
    samples.push({ seconds, speed, clip_time: action.time, nodes, skins, weights, vertices });
  }
  clips.push({ name: clip.name, duration: clip.duration, samples });
}
writeFileSync(path.join(out, "three_r184.json"), JSON.stringify({ three: revision, glb: "anim.glb", tolerance: 1e-5, clips }) + "\n");
console.log(`${clips.length} clips x ${TIMES.length} times, three ${revision} -> ${out}`);
