import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import {
  DEPTH_GRID_CORNERS,
  DEPTH_GRID_VERTEX,
  createDepthGridMaterial,
  createDepthGridPickMaterial,
  depthGridBox,
  depthGridGeometry,
  depthGridPoint,
  depthGridTooLarge,
  inverseIntrinsics,
  quadCorner,
  quadDrawn,
  readDepthGrid,
} from "../web_src/pano_depth_grid.js";

// docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド" and docs/studio-node.md "DA3_GEOMETRY mono の
// エディタ用ファイル": the parts of the depth grid that run without WebGL.
const close = (actual, expected, tolerance = 1e-12) => assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} != ${expected}`);
const form = (width, height) => ({ width, height, depth: { dtype: "float32", byte_order: "little", bytes: width * height * 4 } });

// A raw .f32 as the node writes it: no header, float32 little-endian, row 0 the image's top, left to right.
function f32(values) {
  const buffer = new ArrayBuffer(values.length * 4);
  const view = new DataView(buffer);
  values.forEach((value, index) => view.setFloat32(index * 4, value, true));
  return buffer;
}

test("a depth file is read as its rows of float32, checked against the meta's form", () => {
  const values = readDepthGrid(f32([1, 2, 0, 4, 5, 6]), form(3, 2));
  assert.ok(values instanceof Float32Array);
  assert.deepEqual([...values], [1, 2, 0, 4, 5, 6]);
  // Another size, dtype or byte order than the meta's is a file the editor cannot read.
  assert.throws(() => readDepthGrid(f32([1, 2, 3, 4, 5]), form(3, 2)), /20 bytes, not 24/);
  assert.throws(() => readDepthGrid(f32([1, 2, 3, 4, 5, 6]), { ...form(3, 2), depth: { dtype: "float16", byte_order: "little", bytes: 24 } }), /float16/);
  assert.throws(() => readDepthGrid(f32([1, 2, 3, 4, 5, 6]), { ...form(3, 2), depth: { dtype: "float32", byte_order: "big", bytes: 24 } }), /big/);
  assert.throws(() => readDepthGrid(f32([1, 2, 3, 4, 5, 6]), { ...form(3, 2), depth: { dtype: "float32", byte_order: "little", bytes: 28 } }), /28/);
});

test("K⁻¹ is the inverse of the item's K, in double precision", () => {
  const k = [1200, 0, 959.5, 0, 1180, 539.5, 0, 0, 1];
  const inverse = inverseIntrinsics(k);
  // K · K⁻¹ = I.
  for (let row = 0; row < 3; row += 1) {
    for (let column = 0; column < 3; column += 1) {
      const sum = [0, 1, 2].reduce((total, index) => total + k[row * 3 + index] * inverse[index * 3 + column], 0);
      close(sum, row === column ? 1 : 0, 1e-12);
    }
  }
  close(inverse[0], 1 / 1200);
  close(inverse[2], -959.5 / 1200);
  assert.equal(inverseIntrinsics([0, 0, 0, 0, 1, 0, 0, 0, 1]), null);
  assert.equal(inverseIntrinsics([1, 0, 0]), null);
});

test("a pixel's point is depth × K⁻¹ (x, y, 1) turned into glTF (x, −y, −z)", () => {
  const inverse = inverseIntrinsics([2, 0, 1, 0, 4, 1, 0, 0, 1]);
  const [x, y, z] = depthGridPoint(inverse, 3, 2, 5);
  close(x, 5 * (3 - 1) / 2);
  close(y, -5 * (2 - 1) / 4);
  close(z, -5);
});

test("each quad draws two triangles (a, b, c) and (a, c, d) from its instance and vertex numbers", () => {
  assert.deepEqual(DEPTH_GRID_CORNERS, [0, 1, 2, 0, 2, 3]);
  // A 4 x 3 grid has 3 x 2 quads; quad 4 is the second row's second.
  const corners = [0, 1, 2, 3, 4, 5].map((vertex) => quadCorner(4, vertex, 4));
  assert.deepEqual(corners, [[1, 1], [2, 1], [2, 2], [1, 1], [2, 2], [1, 2]]);
  // The shader is made from the same corners.
  assert.ok(DEPTH_GRID_VERTEX.includes("int[6](0, 1, 2, 0, 2, 3)"));
});

test("a quad with a corner of depth 0 or less is not drawn", () => {
  // 3 x 3 grid; the center pixel's depth is 0, so every quad (all share it) goes; the corners' quads otherwise stay.
  const values = Float32Array.from([1, 1, 1, 1, 0, 1, 1, 1, 1]);
  assert.deepEqual([0, 1, 2, 3].map((quad) => quadDrawn(values, 3, quad)), [false, false, false, false]);
  const kept = Float32Array.from([1, 1, 1, 1, 2, 1, 1, 1, -1]);
  assert.deepEqual([0, 1, 2, 3].map((quad) => quadDrawn(kept, 3, quad)), [true, true, true, false]);
});

test("the item's box is around the points of the pixels with depth above 0", () => {
  const inverse = inverseIntrinsics([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  // Pixels (0, 0) depth 2, (1, 0) depth 0 (left out), (0, 1) depth 1, (1, 1) depth 3.
  const box = depthGridBox(Float32Array.from([2, 0, 1, 3]), 2, 2, inverse);
  assert.deepEqual(box, { min: [0, -3, -3], max: [3, 0, -1] });
  assert.equal(depthGridBox(Float32Array.from([0, 0, 0, 0]), 2, 2, inverse), null);
});

test("a grid larger than the GPU's textures is refused with the GPU's limit", () => {
  assert.equal(depthGridTooLarge(4096, 2160, 4096), null);
  assert.equal(depthGridTooLarge(3840, 2160, 2048), "The depth of this DA3 geometry is 3840 × 2160, larger than this GPU's textures (MAX_TEXTURE_SIZE 2048).");
});

test("one static grid per size: no vertex data, 6 vertices per quad instance, never culled by bounds", () => {
  const geometry = depthGridGeometry(4, 3);
  assert.equal(geometry.isInstancedBufferGeometry, true);
  assert.equal(geometry.instanceCount, 6);
  assert.deepEqual([geometry.drawRange.start, geometry.drawRange.count], [0, 6]);
  assert.deepEqual(Object.keys(geometry.attributes), []);
  assert.equal(depthGridGeometry(4, 3), geometry);
  assert.notEqual(depthGridGeometry(5, 3), geometry);
});

test("the material and its pick material share the depth, K⁻¹ and grid, and draw both sides without light", async () => {
  const { DataTexture, DoubleSide, FloatType, RedFormat } = await import("three");
  const depthMap = new DataTexture(new Float32Array(12), 4, 3, RedFormat, FloatType);
  const material = createDepthGridMaterial({ depthMap, inverseK: inverseIntrinsics([2, 0, 1, 0, 2, 1, 0, 0, 1]), width: 4, height: 3 });
  assert.equal(material.side, DoubleSide);
  assert.equal(material.lights, false);
  assert.equal(material.uniforms.depthMap.value, depthMap);
  assert.deepEqual(material.uniforms.gridSize.value.toArray(), [4, 3]);
  // three's Matrix3 is set from the rows and kept by columns, as GLSL's mat3.
  assert.deepEqual(material.uniforms.inverseK.value.toArray(), [0.5, 0, 0, 0, 0.5, 0, -0.5, -0.5, 1]);
  material.opacity = 0.25;
  assert.equal(material.uniforms.opacity.value, 0.25);
  assert.ok(material.vertexShader.includes(DEPTH_GRID_VERTEX));
  const shared = { pickMode: { value: 0 }, far: { value: 1 } };
  const pick = createDepthGridPickMaterial(material, shared);
  assert.equal(pick.uniforms.depthMap, material.uniforms.depthMap);
  assert.equal(pick.uniforms.inverseK, material.uniforms.inverseK);
  assert.equal(pick.uniforms.pickMode, shared.pickMode);
  assert.equal(pick.side, DoubleSide);
  assert.ok(pick.vertexShader.includes(DEPTH_GRID_VERTEX));
});

// The file Python writes for a DA3_GEOMETRY mono frame and what it keeps (tests/fixtures/da3_depth_grid, which
// tests/test_scene_editor_files.py checks): the editor reads the same pixels, points and quads.
test("the editor reads Python's depth file to the same kept pixels, points and quads", () => {
  const fixture = (name) => new URL(`./fixtures/da3_depth_grid/${name}`, import.meta.url);
  const { meta, keep, points, quads } = JSON.parse(readFileSync(fixture("case.json"), "utf8"));
  const file = readFileSync(fixture("depth_0.f32"));
  const values = readDepthGrid(file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength), meta);
  const { width, height } = meta;
  assert.deepEqual(Array.from({ length: height }, (_, y) => Array.from({ length: width }, (_, x) => (values[y * width + x] > 0 ? 1 : 0))), keep);
  const inverse = inverseIntrinsics(meta.intrinsics[0]);
  const kept = [];
  for (let y = 0; y < height; y += 1) for (let x = 0; x < width; x += 1) if (values[y * width + x] > 0) kept.push([x, y]);
  assert.deepEqual(kept, points.map(([x, y]) => [x, y]));
  points.forEach(([x, y, ...expected]) => {
    depthGridPoint(inverse, x, y, values[y * width + x]).forEach((value, axis) => close(value, expected[axis], 1e-5));
  });
  const drawn = [];
  for (let quad = 0; quad < (width - 1) * (height - 1); quad += 1) if (quadDrawn(values, width, quad)) drawn.push(quadCorner(quad, 0, width));
  assert.deepEqual(drawn, quads);
});

// Review P2: a depth grid's colors are one texture per input (the `scene`, a 3D Sticker, an upstream slot), which every
// item of that input draws with, freed when the input goes; not one per item, which would pile up outside the budget.
test("the colors are one texture per input, shared by its items and freed when the input goes", async () => {
  const { createDepthColorTextures } = await import("../web_src/pano_three_view.js");
  const made = [];
  const textures = createDepthColorTextures((media) => {
    const texture = { media, disposed: false, needsUpdate: false, dispose() { this.disposed = true; } };
    made.push(texture);
    return texture;
  });
  const still = { width: 4, height: 3 };
  const first = textures.texture("scene", { media: still, revision: "still:1" });
  // Another item of the same input, and a new still of the same picture: the same texture, uploaded again.
  assert.equal(textures.texture("scene", { media: still, revision: "still:1" }), first);
  assert.equal(textures.texture("scene", { media: still, revision: "still:2" }), first);
  assert.equal(first.needsUpdate, true);
  assert.equal(made.length, 1);
  // Another input has its own.
  const sticker = textures.texture("sticker", { media: { width: 4, height: 3 }, revision: 1 });
  assert.notEqual(sticker, first);
  assert.equal(textures.size, 2);
  // The playing VIDEO in place of the still, or a still of another size: a new texture, the old one freed.
  const video = { videoWidth: 4, videoHeight: 3 };
  const playing = textures.texture("scene", { media: video, revision: "video" });
  assert.notEqual(playing, first);
  assert.equal(first.disposed, true);
  // An input no render asks for any more lets its texture go.
  textures.retain(["scene"]);
  assert.equal(sticker.disposed, true);
  assert.equal(textures.size, 1);
  textures.dispose();
  assert.equal(playing.disposed, true);
  assert.equal(textures.size, 0);
});

// The video washed out while playing: three uploads a VideoTexture as RGBA8 even when it is sRGB (WebGLTextures.js
// getInternalFormat, forceLinearTransfer) and its own materials decode it in the shader (DECODE_VIDEO_TEXTURE). The
// depth grid's shader decodes it the same way, by the same rule; a still (SRGB8_ALPHA8) is decoded by the GPU.
test("a playing sRGB VIDEO's colors are decoded in the shader, as three's materials do; a still's are not", async () => {
  const { DataTexture, FloatType, RedFormat, SRGBColorSpace, Texture, VideoTexture } = await import("three");
  const material = createDepthGridMaterial({ depthMap: new DataTexture(new Float32Array(12), 4, 3, RedFormat, FloatType), inverseK: inverseIntrinsics([2, 0, 1, 0, 2, 1, 0, 0, 1]), width: 4, height: 3 });
  const texture = (Type) => {
    const made = new Type({ addEventListener() {}, removeEventListener() {} });
    made.colorSpace = SRGBColorSpace;
    return made;
  };
  globalThis.HTMLVideoElement ??= class {};
  material.uniforms.colorMap.value = texture(VideoTexture);
  assert.equal(material.uniforms.decodeVideoSrgb.value, true);
  material.uniforms.colorMap.value = texture(Texture);
  assert.equal(material.uniforms.decodeVideoSrgb.value, false);
  const linearVideo = new VideoTexture({ addEventListener() {}, removeEventListener() {} });
  material.uniforms.colorMap.value = linearVideo;
  assert.equal(material.uniforms.decodeVideoSrgb.value, false);
  // Decoded per texel before the blend (linear-space bilinear, clamped to the edge); a still keeps the hardware path.
  assert.match(material.fragmentShader, /if \(!decodeVideoSrgb\) return texture\(colorMap, uv\);/);
  assert.equal((material.fragmentShader.match(/sRGBTransferEOTF\(texelFetch\(colorMap, clamp\(/g) ?? []).length, 4);
  assert.match(material.fragmentShader, /return mix\(mix\(a, b, f\.x\), mix\(c, d, f\.x\), f\.y\);/);
});
