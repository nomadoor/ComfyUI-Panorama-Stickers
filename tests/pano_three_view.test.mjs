import assert from "node:assert/strict";
import test from "node:test";

import { VideoTexture } from "three";

import { shotCamera, shotLensImage, viewportCamera } from "../web_src/pano_editor_view.js";
import { spaceCamera } from "../web_src/pano_space.js";
import { PICK_ID_LIMIT, packPick24 } from "../web_src/pano_pick.js";
import { createLayerTextures, createThreeView } from "../web_src/pano_three_view.js";
import { liveErpView } from "../web_src/studio/erp_preview.js";
import { readWebSource, webSourceFiles } from "./editor_source.mjs";
import { createFakeWebGl } from "./fake_webgl.mjs";

// docs/threejs-spark-integration.md: the three.js view (pano_three_view.js createThreeView) driven in Node on a fake
// WebGL context (tests/fake_webgl.mjs). The fake draws nothing; these tests check what the view asks of the context
// and what it does with the pixels a pick reads back. tests/browser/ draws for real.

globalThis.ImageData ??= class { constructor(data, width, height) { Object.assign(this, { data, width, height }); } };

function withVideoElement(run) {
  const previous = globalThis.HTMLVideoElement;
  globalThis.HTMLVideoElement = class { static HAVE_CURRENT_DATA = 2; };
  try {
    return run();
  } finally {
    globalThis.HTMLVideoElement = previous;
  }
}

function fakeView() {
  const fake = createFakeWebGl();
  const view = createThreeView({ createCanvas: () => fake.canvas });
  return { fake, view };
}

const SKY_CAMERA = viewportCamera({ yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 90 }, 64, 32);
const SPACE_CAMERA = spaceCamera({ yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 90, position: [0, 0, 0], distance: 2 }, 64, 32);
const image = (width = 64, height = 32) => ({ width, height });

// A world Sticker plane straight ahead of SPACE_CAMERA.
function plane(id, extra = {}) {
  return {
    id,
    media: image(),
    revision: 1,
    opacity: 1,
    position: [0, 0, -2],
    quaternion: { x: 0, y: 0, z: 0, w: 1 },
    width: 1,
    height: 1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    ...extra,
  };
}

function renderSpace(view, stickers, extra = {}) {
  return view.render({ width: 64, height: 32, camera: SPACE_CAMERA, background: null, layers: [], owner: "stage", space: { grid: null, sceneUrls: [], scene: null, stickers, lines: [], ...extra } });
}

const count = (fake, name) => fake.calls.filter(([each]) => each === name).length;

test("a background VIDEO uploads through a VideoTexture, which sizes its storage from the video", () => withVideoElement(() => {
  const textures = createLayerTextures();
  const video = Object.assign(new globalThis.HTMLVideoElement(), { videoWidth: 64, videoHeight: 32, readyState: 2 });
  const draw = textures.draw("stage");
  assert.ok(draw.texture({ id: "background", media: video, revision: "1" }, 0, false) instanceof VideoTexture);
  assert.ok(!(draw.texture({ id: "still", media: image(), revision: "1" }, 0, false) instanceof VideoTexture));
  draw.end();
}));

// A draw that throws still marks what it used, so nothing is left without an owner: the texture of the media it
// switched to goes when the owner is released.
test("a draw that throws ends with its marks", () => withVideoElement(() => {
  const { view } = fakeView();
  const input = (background, layers = []) => ({ width: 64, height: 32, camera: SKY_CAMERA, background: { media: background, revision: 1 }, layers, owner: "stage" });
  view.render(input(image()));
  assert.equal(view.stats().layerTextures, 1);
  const throwing = { kind: "erp", id: "broken", media: image(), revision: 1, get opacity() { throw new Error("broken layer"); } };
  assert.throws(() => view.render(input(image(), [throwing])), /broken layer/);
  view.release("stage");
  assert.equal(view.stats().layerTextures, 0);
}));

// Chrome crashes the tab on texSubImage2D(RGBA_INTEGER, UNSIGNED_INT) with UNPACK_PREMULTIPLY_ALPHA set, which Spark
// issues for its sort order after three uploaded a premultiplied Sky layer.
test("every three view draw leaves the unpack flags off, so Spark's raw integer upload never runs premultiplied", () => withVideoElement(() => {
  const { fake, view } = fakeView();
  const sticker = { kind: "sticker", id: "s", media: image(32, 32), revision: 1, opacity: 1, quaternion: { x: 0, y: 0, z: 0, w: 1 }, rect: { x0: -0.5, y0: -0.5, x1: 0.5, y1: 0.5 } };
  const lensShot = { yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 200, vFOV_deg: 150, curve: 0.4, position: [0, 0, 0] };
  const erpCanvas = { width: 0, height: 0, getContext: () => ({ putImageData() {}, drawImage() {}, clearRect() {} }) };
  const flags = ["UNPACK_PREMULTIPLY_ALPHA_WEBGL", "UNPACK_FLIP_Y_WEBGL"].map(fake.constant);
  const written = (flag) => fake.calls.filter(([name, [which]]) => name === "pixelStorei" && which === flag).map(([, [, value]]) => value);
  for (const render of [
    () => view.render({ width: 64, height: 32, camera: SKY_CAMERA, background: { media: image(), revision: 1 }, layers: [sticker], owner: "stage" }),
    () => view.renderUnwrap({ width: 64, height: 32, background: { media: image(), revision: 2, coverage: 180 }, layers: [{ ...sticker, revision: 2 }], owner: "unwrap" }),
    // A lens Camera's frame (ADR 0042), drawn through its faces.
    () => view.render({ width: 64, height: 32, camera: shotCamera(lensShot), lens: shotLensImage(lensShot, 64, 32, 0), background: { media: image(), revision: 3 }, layers: [{ ...sticker, revision: 3 }], owner: "lens" }),
    // Panorama mode's live ERP, put on a 2D canvas.
    () => view.renderLiveErp({ owner: "erp", canvas: erpCanvas, view: liveErpView({ ...lensShot, curve: 1 }), width: 64, height: 32, near: 0.1, far: 100, background: { media: image(), revision: 4 }, layers: [{ ...sticker, revision: 4 }] }),
  ]) {
    fake.calls.length = 0;
    render();
    for (const flag of flags) {
      // The draw uploaded with the flag on, and left it off.
      assert.ok(written(flag).includes(true), `uploads with ${flag} on`);
      assert.equal(written(flag).at(-1), false);
    }
  }
}));

// docs/threejs-spark-integration.md: what is seen is picked, on the GPU: the pixel under the pointer is drawn with
// the pickable content and read back ({ id: 1 + its index, depth } on a float target).
test("the three.js view picks the World Sticker plane it last drew, at the depth the GPU read back", () => withVideoElement(() => {
  const { fake, view } = fakeView();
  renderSpace(view, [plane("w1")]);
  fake.pixels = () => [1, 2, 0, 1];
  assert.equal(view.pickSticker(SPACE_CAMERA, 32, 16, 64, 32), "w1");
  const point = view.pick(SPACE_CAMERA, 32, 16, 64, 32);
  assert.ok(Math.hypot(point[0], point[1], point[2] + 2) < 1e-6, String(point));
  // A plane is a surface: the navigation pick takes it.
  assert.deepEqual(view.pickSurface(SPACE_CAMERA, 32, 16, 64, 32), point);
  // Over nothing (the clear color, id 0) there is no hit.
  fake.pixels = () => [0, 0, 0, 0];
  assert.equal(view.pick(SPACE_CAMERA, 10, 10, 64, 32), null);
}));

test("a World Sticker plane that is not seen (opacity 0) is drawn but never picked", () => withVideoElement(() => {
  const { fake, view } = fakeView();
  renderSpace(view, [plane("hidden", { opacity: 0 }), plane("shown", { position: [0, 0, -3] })]);
  // The one pickable entry is the plane that shows.
  fake.pixels = () => [1, 3, 0, 1];
  assert.equal(view.pickSticker(SPACE_CAMERA, 32, 16, 64, 32), "shown");
  fake.pixels = () => [2, 2, 0, 1];
  assert.equal(view.pickSticker(SPACE_CAMERA, 40, 16, 64, 32), null);
  // With only the hidden plane nothing is drawn for a pick.
  renderSpace(view, [plane("hidden", { opacity: 0 })]);
  const reads = count(fake, "readPixels");
  assert.equal(view.pick(SPACE_CAMERA, 32, 16, 64, 32), null);
  assert.equal(count(fake, "readPixels"), reads);
}));

test("the pick draws only the pickable content, not the guides", () => withVideoElement(() => {
  const { fake, view } = fakeView();
  // The guides are lines (drawArrays); the planes are indexed (drawElements).
  renderSpace(view, [plane("w1")], { grid: { step: 1, size: 10, divisions: 10 } });
  assert.ok(count(fake, "drawArrays") > 0, "the render draws the guides");
  fake.calls.length = 0;
  fake.pixels = () => [1, 2, 0, 1];
  assert.equal(view.pickSticker(SPACE_CAMERA, 32, 16, 64, 32), "w1");
  assert.equal(count(fake, "drawArrays"), 0);
  assert.ok(count(fake, "drawElements") > 0);
  // The next render draws the guides again.
  renderSpace(view, [plane("w1")], { grid: { step: 1, size: 10, divisions: 10 } });
  assert.ok(count(fake, "drawArrays") > 0);
}));

test("a pick is reused while the pixel, the view and the content stay, and drawn again when the content moves", () => withVideoElement(() => {
  const { fake, view } = fakeView();
  fake.pixels = () => [1, 2, 0, 1];
  renderSpace(view, [plane("w1")]);
  view.pick(SPACE_CAMERA, 32, 16, 64, 32);
  const reads = count(fake, "readPixels");
  // The same pixel of the same view over the same content (drawn again as it was) reads nothing.
  renderSpace(view, [plane("w1")]);
  view.pickSticker(SPACE_CAMERA, 32, 16, 64, 32);
  assert.equal(count(fake, "readPixels"), reads);
  // Another pixel, or the plane moved, or another plane drawn: read again.
  view.pick(SPACE_CAMERA, 33, 16, 64, 32);
  assert.equal(count(fake, "readPixels"), reads + 1);
  renderSpace(view, [plane("w1", { position: [0, 0, -2.5] })]);
  view.pick(SPACE_CAMERA, 33, 16, 64, 32);
  assert.equal(count(fake, "readPixels"), reads + 2);
  renderSpace(view, [plane("w1", { position: [0, 0, -2.5] }), plane("w2", { position: [1, 0, -3] })]);
  view.pick(SPACE_CAMERA, 33, 16, 64, 32);
  assert.equal(count(fake, "readPixels"), reads + 3);
}));

// A failed draw switches from the float target to RGBA8, then gives up; a failed pick is not kept, and the view draws
// to its canvas again after it.
test("a pick whose draw fails tries RGBA8 next, then gives up, and leaves the canvas as the target", () => withVideoElement(() => {
  const { fake, view } = fakeView();
  const errors = [];
  const consoleError = console.error;
  console.error = (...args) => errors.push(args);
  try {
    renderSpace(view, [plane("w1")]);
    const buffers = [];
    // On RGBA8 the id is drawn first, then the depth as its part of `far`.
    const depthBytes = packPick24(Math.round(2 / SPACE_CAMERA.far * PICK_ID_LIMIT));
    fake.pixels = (buffer) => {
      buffers.push(buffer.constructor.name);
      if (buffer instanceof Float32Array) return [1, 2, 0, 1];
      return buffers.length % 2 ? [...packPick24(1), 255] : [...depthBytes, 255];
    };
    const lastTarget = () => fake.calls.filter(([name]) => name === "bindFramebuffer").at(-1)[1][1];
    fake.fail("drawElements");
    assert.equal(view.pick(SPACE_CAMERA, 32, 16, 64, 32), null);
    assert.equal(lastTarget(), null);
    assert.equal(errors.length, 1);
    // Not kept: the same pixel draws again, on an RGBA8 target (an id draw and a depth draw).
    assert.equal(view.pickSticker(SPACE_CAMERA, 32, 16, 64, 32), "w1");
    assert.deepEqual(buffers, ["Uint8Array", "Uint8Array"]);
    // RGBA8 fails too: picks draw no more.
    fake.fail("drawElements");
    assert.equal(view.pick(SPACE_CAMERA, 33, 16, 64, 32), null);
    assert.equal(lastTarget(), null);
    const reads = count(fake, "readPixels");
    const draws = count(fake, "drawElements");
    assert.equal(view.pick(SPACE_CAMERA, 34, 16, 64, 32), null);
    assert.equal(count(fake, "readPixels"), reads);
    assert.equal(count(fake, "drawElements"), draws);
  } finally {
    console.error = consoleError;
  }
}));

// One triangle around the origin as a GLB, which GLTFLoader reads in Node (a .gltf's buffer URI would need the DOM).
function triangleGlb() {
  const positions = new Float32Array([-1, -1, 0, 1, -1, 0, 0, 1, 0]);
  const json = {
    asset: { version: "2.0" },
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{ mesh: 0 }],
    meshes: [{ primitives: [{ attributes: { POSITION: 0 } }] }],
    accessors: [{ bufferView: 0, componentType: 5126, count: 3, type: "VEC3", min: [-1, -1, 0], max: [1, 1, 0] }],
    bufferViews: [{ buffer: 0, byteLength: positions.byteLength }],
    buffers: [{ byteLength: positions.byteLength }],
  };
  const text = new TextEncoder().encode(JSON.stringify(json));
  const jsonChunk = new Uint8Array(Math.ceil(text.length / 4) * 4).fill(0x20);
  jsonChunk.set(text);
  const binChunk = new Uint8Array(positions.buffer);
  const out = new ArrayBuffer(12 + 8 + jsonChunk.length + 8 + binChunk.length);
  const view = new DataView(out);
  view.setUint32(0, 0x46546c67, true);
  view.setUint32(4, 2, true);
  view.setUint32(8, out.byteLength, true);
  view.setUint32(12, jsonChunk.length, true);
  view.setUint32(16, 0x4e4f534a, true);
  new Uint8Array(out, 20).set(jsonChunk);
  const bin = 20 + jsonChunk.length;
  view.setUint32(bin, binChunk.length, true);
  view.setUint32(bin + 4, 0x004e4942, true);
  new Uint8Array(out, bin + 8).set(binChunk);
  return out;
}

// The port Sticker's 3D item (a GLB at `url`) at `position`, with `opacity`.
function meshSticker(position, opacity) {
  const url = "/view?filename=a.glb";
  const turn = { x: 0, y: 0, z: 0, w: 1 };
  return { id: "s3d", kind: "mesh", url, urls: [url], prefetch: [], transform: { position, quaternion: turn, scale: 1 }, itemQuaternion: turn, unlit: true, opacity };
}

test("a 3D Sticker's item is picked as that Sticker while it is seen, and a pick reads again when it moves", async () => {
  const previousFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response(triangleGlb());
  try {
    await withVideoElement(async () => {
      const fake = createFakeWebGl();
      let loaded;
      const updated = new Promise((resolve) => { loaded = resolve; });
      const view = createThreeView({ createCanvas: () => fake.canvas, onUpdate: () => loaded() });
      const render = (sticker) => renderSpace(view, [], { sticker, stickerUrls: [sticker.url] });
      render(meshSticker([0, 0, -2], 1));
      await updated;
      fake.pixels = () => [1, 2, 0, 1];
      render(meshSticker([0, 0, -2], 1));
      assert.equal(view.pickSticker(SPACE_CAMERA, 32, 16, 64, 32), "s3d");
      const reads = count(fake, "readPixels");
      render(meshSticker([0, 0.5, -2], 1));
      assert.equal(view.pickSticker(SPACE_CAMERA, 32, 16, 64, 32), "s3d");
      assert.equal(count(fake, "readPixels"), reads + 1);
      // Not seen: drawn, never picked.
      render(meshSticker([0, 0.5, -2], 0));
      assert.equal(view.pickSticker(SPACE_CAMERA, 32, 16, 64, 32), null);
      view.dispose();
    });
  } finally {
    globalThis.fetch = previousFetch;
  }
});

// docs/threejs-spark-integration.md: every SplatMesh is made with Spark's raycast off (the editor picks a SPLAT on its
// box; Spark's raycast walks every splat on the main thread), and every SparkRenderer without its LoD worker (the editor
// does not page or LoD its SPLATs). Spark needs a Worker and WebGL, so Node cannot make either: the options are read
// from the source, in whichever file makes them. tests/browser/ draws SPLATs for real.
test("every SplatMesh is made with raycastable: false and every SparkRenderer with enableLod: false", () => {
  const made = { SplatMesh: 0, SparkRenderer: 0 };
  for (const file of webSourceFiles([".js"])) {
    for (const [, kind, options] of readWebSource(file).matchAll(/new (?:\w+\.)?(SplatMesh|SparkRenderer)\((\{[^)]*\})?\)/g)) {
      made[kind] += 1;
      const option = kind === "SplatMesh" ? /\braycastable: false\b/ : /\benableLod: false\b/;
      assert.match(options ?? "", option, `${file}: new ${kind}(${options ?? ""})`);
    }
  }
  assert.ok(made.SplatMesh > 0 && made.SparkRenderer > 0, JSON.stringify(made));
});
