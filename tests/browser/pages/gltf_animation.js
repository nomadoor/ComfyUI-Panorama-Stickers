// An animated 3D file as the editor draws it (ADR 0043, docs/threejs-spark-integration.md "glTF のアニメーション"): a
// glTF made here with a skinned quad (left, its joint moves) and a morphed quad (right, its morph weight grows), and
// the editor GLB (the core's static MESH) whose one material — red, unlit, with vertex colors the original lacks —
// draws both. Drawn through pano_three_view.js at two clip times, at a speed and with the second clip, then picked.
// The page reports through window.__check; tests/browser/gltf_animation.spec.js reads it.
import { createThreeView } from "../../../web_src/pano_three_view.js";

const check = (window.__check = { done: false, error: null, frames: [], box: null });
const W = 320;
const H = 240;

// A glTF as JSON with its one buffer inline (base64), for GLTFLoader.
function gltfOf(json, parts) {
  const views = [];
  let offset = 0;
  const bytes = [];
  for (const part of parts) {
    const data = new Uint8Array(part.buffer, part.byteOffset, part.byteLength);
    views.push({ buffer: 0, byteOffset: offset, byteLength: data.byteLength });
    bytes.push(data);
    offset += Math.ceil(data.byteLength / 4) * 4;
  }
  const all = new Uint8Array(offset);
  let at = 0;
  for (const data of bytes) {
    all.set(data, at);
    at += Math.ceil(data.byteLength / 4) * 4;
  }
  let binary = "";
  for (const byte of all) binary += String.fromCharCode(byte);
  const text = JSON.stringify({ asset: { version: "2.0" }, ...json, buffers: [{ byteLength: offset, uri: `data:application/octet-stream;base64,${btoa(binary)}` }], bufferViews: views });
  return URL.createObjectURL(new Blob([text], { type: "model/gltf+json" }));
}

const quad = (x0, x1) => new Float32Array([x0, -0.5, 0, x1, -0.5, 0, x1, 0.5, 0, x0, 0.5, 0]);
const accessor = (bufferView, componentType, count, type, extra = {}) => ({ bufferView, componentType, count, type, ...extra });
const FLOAT = 5126;
const BOUNDS = (x0, x1) => ({ min: [x0, -0.5, 0], max: [x1, 0.5, 0] });

// The original: node 1 the skinned quad (joints 2 and 3), node 4 the morphed quad. Clip "Up" moves joint 3 and the
// morph weight from 0 at 0 s to 1 at 2 s; clip "Down" moves joint 3 down.
function original() {
  const identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  const parts = [
    quad(-2, -1), // 0 skinned positions
    new Uint16Array([1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]), // 1 joints
    new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]), // 2 weights
    new Uint16Array([0, 1, 2, 0, 2, 3]), // 3 indices
    new Float32Array([...identity, ...identity]), // 4 inverse binds
    quad(1, 2), // 5 morphed positions
    new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]), // 6 morph target
    new Float32Array([0, 2]), // 7 times
    new Float32Array([0, 0, 0, 0, 1, 0]), // 8 joint up
    new Float32Array([0, 1]), // 9 weights
    new Float32Array([0, 0, 0, 0, -1, 0]), // 10 joint down
  ];
  return gltfOf({
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [
      { children: [1, 2, 4] },
      { mesh: 0, skin: 0 },
      { children: [3] },
      {},
      { mesh: 1 },
    ],
    skins: [{ joints: [2, 3], inverseBindMatrices: 7 }],
    meshes: [
      { primitives: [{ attributes: { POSITION: 0, JOINTS_0: 1, WEIGHTS_0: 2 }, indices: 3 }] },
      { primitives: [{ attributes: { POSITION: 4 }, indices: 3, targets: [{ POSITION: 5 }] }], weights: [0] },
    ],
    accessors: [
      accessor(0, FLOAT, 4, "VEC3", BOUNDS(-2, -1)),
      accessor(1, 5123, 4, "VEC4"),
      accessor(2, FLOAT, 4, "VEC4"),
      accessor(3, 5123, 6, "SCALAR"),
      accessor(5, FLOAT, 4, "VEC3", BOUNDS(1, 2)),
      accessor(6, FLOAT, 4, "VEC3", { min: [0, 1, 0], max: [0, 1, 0] }),
      accessor(7, FLOAT, 2, "SCALAR", { min: [0], max: [2] }),
      accessor(4, FLOAT, 2, "MAT4"),
      accessor(8, FLOAT, 2, "VEC3"),
      accessor(9, FLOAT, 2, "SCALAR"),
      accessor(10, FLOAT, 2, "VEC3"),
    ],
    animations: [
      { name: "Up", samplers: [{ input: 6, output: 8 }, { input: 6, output: 9 }], channels: [{ sampler: 0, target: { node: 3, path: "translation" } }, { sampler: 1, target: { node: 4, path: "weights" } }] },
      { name: "Down", samplers: [{ input: 6, output: 10 }], channels: [{ sampler: 0, target: { node: 3, path: "translation" } }] },
    ],
  }, parts);
}

// The editor GLB: both quads at rest in one mesh, with white vertex colors and a red material.
function editorGlb() {
  const positions = new Float32Array([...quad(-2, -1), ...quad(1, 2)]);
  const parts = [positions, new Float32Array(8 * 3).fill(1), new Uint16Array([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7])];
  return gltfOf({
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{ mesh: 0 }],
    meshes: [{ primitives: [{ attributes: { POSITION: 0, COLOR_0: 1 }, indices: 2, material: 0 }] }],
    materials: [{ pbrMetallicRoughness: { baseColorFactor: [1, 0, 0, 1] } }],
    accessors: [accessor(0, FLOAT, 8, "VEC3", { min: [-2, -0.5, 0], max: [2, 0.5, 0] }), accessor(1, FLOAT, 8, "VEC3"), accessor(2, 5123, 12, "SCALAR")],
  }, parts);
}

try {
  const view = createThreeView({ createCanvas: () => document.body.appendChild(document.createElement("canvas")) });
  view.resize(W, H);
  const probe = document.createElement("canvas");
  probe.width = W;
  probe.height = H;
  const probe2d = probe.getContext("2d", { willReadFrequently: true });
  const url = editorGlb();
  const src = original();
  const camera = { quaternion: { x: 0, y: 0, z: 0, w: 1 }, fovY_deg: 40, aspect: W / H, position: [0, 0, 5], near: 0.1, far: 100 };
  const draw = (animation) => {
    const scene = {
      kind: "mesh", url, urls: [url], prefetch: [], unlit: true, sources: {},
      transform: { position: [0, 0, 0], quaternion: { x: 0, y: 0, z: 0, w: 1 }, scale: 1 },
      itemQuaternion: { x: 0, y: 0, z: 0, w: 1 },
      animation: { src, ...animation },
    };
    view.clear(0x000000);
    view.render({ rect: { x: 0, y: 0, w: W, h: H }, camera, background: null, layers: [], owner: "page", space: { grid: null, sceneUrls: [url], scene, stickerUrls: [], sticker: null, stickers: [], lines: [], upstreamItems: [], upstreamStickers: [], gizmo: null } });
    probe2d.clearRect(0, 0, W, H);
    probe2d.drawImage(view.canvas, 0, 0);
  };
  // Where a point of the z = 0 plane shows.
  const tanY = Math.tan(20 * Math.PI / 180);
  const at = (x, y) => [Math.round(W / 2 * (1 + x / 5 / tanY / (W / H))), Math.round(H / 2 * (1 - y / 5 / tanY))];
  const color = (x, y) => [...probe2d.getImageData(...at(x, y), 1, 1).data.slice(0, 3)];
  for (let frame = 0; frame < 300 && !view.sceneBox(url); frame += 1) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    draw({ clip: 0, speed: 1, time: 0 });
  }
  check.box = view.sceneBox(url);
  // Each pose: the colors at the quads' rest centers and 0.8 above (and below) them.
  for (const [label, animation] of [["rest", { clip: 0, speed: 1, time: 0 }], ["up", { clip: 0, speed: 1, time: 1.6 }], ["speed", { clip: 0, speed: 2, time: 0.8 }], ["loop", { clip: 0, speed: 1, time: 3.6 }], ["down", { clip: 1, speed: 1, time: 1.6 }], ["again", { clip: 0, speed: 1, time: 0 }]]) {
    draw(animation);
    check.frames.push({
      label,
      skinned: { rest: color(-1.5, 0), up: color(-1.5, 0.8), down: color(-1.5, -0.8) },
      morphed: { rest: color(1.5, 0), up: color(1.5, 0.8) },
      pick: view.pickSurface(camera, ...at(-1.5, 0.8), W, H),
    });
  }
  check.done = true;
} catch (error) {
  check.error = String(error?.stack || error);
  check.done = true;
}
