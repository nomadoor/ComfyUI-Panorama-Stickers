// What the new UI's stage draws of the working state at the playhead (web_src/studio/stage_content.js): the sky
// images, the world image planes, the 3D file Stickers' items through the lower builders, and the content's sphere.
import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import { worldStickerPlane } from "../web_src/pano_space.js";
import { createStageMedia, stageContent, stickerFrameSphere } from "../web_src/studio/stage_content.js";

const file = (filename) => ({ kind: "file", filename, subfolder: "", storage: "input" });
const state = loadSceneState({
  version: 2,
  stickers: [
    { id: "sky_1", placement: "sky", source: file("sky.png"), size: { value: { hFOV_deg: 30, vFOV_deg: 20 } } },
    { id: "plane_1", placement: "world", source: file("plane.png"), position: { value: [0, 0, -4] }, scale: { value: 2 } },
    { id: "box_1", placement: "world", source: file("thing.glb"), position: { value: [3, 0, -3] }, scale: { value: 1 } },
  ],
});
const image = (width, height) => ({ complete: true, naturalWidth: width, naturalHeight: height, src: "x" });
const media = (sticker) => (sticker.id === "box_1" ? null : { media: image(200, 100), revision: sticker.id });
const editorFile = (sticker) => (sticker.id === "box_1" ? { kind: "mesh", unlit: true, url: "/thing.glb", generation: 0 } : null);
const box = { min: [-0.5, -0.5, -0.5], max: [0.5, 0.5, 0.5] };

test("the sky image is a sky layer, the world image a plane, the 3D file an item to load; the sphere bounds the World", () => {
  const content = stageContent(state, 0, { media, editorFile, sceneBox: (url) => (url.startsWith("file3d:") ? box : null) });
  assert.deepEqual(content.layers.map((layer) => layer.id), ["sky_1"]);
  assert.deepEqual(content.space.stickers.map((plane) => [plane.id, plane.width, plane.height]), [["plane_1", 2, 1]]);
  assert.equal(content.space.fileStickers.length, 1);
  assert.equal(content.space.fileStickers[0].src, "/thing.glb");
  assert.deepEqual(content.space.fileStickerKeys, ["file3d:0:box_1"]);
  assert.equal(content.space.scene, null);
  assert.ok(content.sphere.radius > 2, "the plane and the 3D item are inside");
});

test("before anything loads nothing is drawn and there is no World sphere", () => {
  const content = stageContent(state, 0, { media: () => null });
  assert.deepEqual(content.layers, []);
  assert.deepEqual(content.space.stickers, []);
  assert.deepEqual(content.space.fileStickers, []);
  assert.equal(content.sphere, null);
});

test("Frame Selected of a world Sticker fits its own plane or item; a sky Sticker frames all the content", () => {
  const options = { media, editorFile, sceneBox: (url) => (url.startsWith("file3d:") ? box : null) };
  const content = stageContent(state, 0, options);
  const plane = stickerFrameSphere(state, content, "plane_1", options);
  assert.deepEqual(plane.center.map((v) => Math.round(v * 1e6) / 1e6), [0, 0, -4]);
  const item = stickerFrameSphere(state, content, "box_1", options);
  assert.deepEqual(item.center.map((v) => Math.round(v * 1e6) / 1e6), [3, 0, -3]);
  assert.equal(stickerFrameSphere(state, content, "sky_1", options), content.sphere);
});

test("the media loads each Sticker's image once by its URL and knows its size once loaded", () => {
  const made = [];
  class FakeImage {
    constructor() {
      made.push(this);
    }
  }
  let changes = 0;
  const stageMedia = createStageMedia({ assetSource: (asset) => `/view?filename=${asset.filename}`, source: () => null, onChange: () => (changes += 1), ImageCtor: FakeImage });
  assert.deepEqual(stageMedia.imageSizes(state), {});
  assert.equal(stageMedia.media(state.stickers[0]), null);
  // The 3D file has no image.
  assert.equal(made.length, 2);
  Object.assign(made[0], { complete: true, naturalWidth: 400, naturalHeight: 200 });
  made[0].onload();
  assert.equal(changes, 1);
  assert.deepEqual(stageMedia.imageSizes(state), { sky_1: { width: 400, height: 200 } });
  assert.equal(stageMedia.media(state.stickers[0]).media, made[0]);
  assert.equal(made.length, 2);
  stageMedia.dispose();
});

// docs/studio-ui.md "ノードの入力から来た物": the port Sticker and the upstream layers on the stage.
const portSky = loadSceneState({
  version: 2,
  stickers: [{ id: "sticker_1", placement: "sky", source: { kind: "port" }, size: { value: { hFOV_deg: 40, vFOV_deg: 40 } } }],
});

test("a sky port Sticker is drawn with its media, its vFOV following the media's aspect", () => {
  const portMedia = (sticker) => (sticker.source.kind === "port" ? { media: image(400, 100), revision: "port" } : null);
  const content = stageContent(portSky, 0, { media: portMedia });
  assert.deepEqual(content.layers.map((layer) => layer.id), ["sticker_1"]);
  // The drawn (evaluated) vFOV is the media's, not the stored 40°, so the stage's handles and hits match the picture.
  const vfov = content.evaluated.stickers[0].vFOV_deg;
  assert.ok(vfov > 9 && vfov < 11, `vFOV ${vfov}`);
});

test("a world port Sticker with 3D media is an item of the sticker input, and Frame Selected fits its box", () => {
  const world = loadSceneState({
    version: 2,
    stickers: [
      { id: "sticker_1", placement: "world", source: { kind: "port" }, position: { value: [0, 0, -5] }, scale: { value: 1 } },
      { id: "sticker_2", placement: "world", source: file("thing.glb"), position: { value: [9, 0, 0] }, scale: { value: 1 } },
    ],
  });
  const stickerFiles = { kind: "splat", unlit: true, urls: ["/a.ply"], sources: {} };
  // The item's own box is off its origin, so Frame Selected tells it from the Sticker's position.
  const offBox = { min: [1, 1, 1], max: [2, 2, 2] };
  const thing = (sticker) => (sticker.id === "sticker_2" ? { kind: "mesh", unlit: true, url: "/thing.glb", generation: 0 } : null);
  const options = { media: () => null, stickerFiles, editorFile: thing, sceneBox: (url) => (url === "/a.ply" ? offBox : url.startsWith("file3d:") ? box : null) };
  const content = stageContent(world, 0, options);
  assert.equal(content.space.sticker.url, "/a.ply");
  assert.equal(content.space.sticker.id, "sticker_1");
  assert.deepEqual(content.space.stickerUrls, ["/a.ply"]);
  assert.ok(content.sphere, "the item is in the World sphere");
  const sphere = stickerFrameSphere(world, content, "sticker_1", options);
  // A SPLAT's box is in 3DGS coordinates (y and z turned over into glTF's), placed at the Sticker's position.
  assert.deepEqual(sphere.center.map((v) => Math.round(v * 1e6) / 1e6), [1.5, -1.5, -6.5]);
});

test("the upstream layers' sky lies under the node's own, and their planes and items join the World", () => {
  const upstream = {
    sky: [{ kind: "sticker", id: "upstream:a:sticker_1", zIndex: 9, media: image(10, 10) }],
    stickers: [{ id: "upstream:a:sticker_2", ...worldStickerPlane({ position: [0, 0, -8], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 2 }, { x0: 0, y0: 0, x1: 1, y1: 1 }, 10, 10) }],
    items: [{ slot: "a:scene", urls: ["/up.ply"], request: { url: "/up.ply", kind: "splat" }, value: { position: [0, 0, 0], rotation: [0, 0, 0], scale: 1 } }],
  };
  const content = stageContent(state, 0, { media, editorFile, upstream });
  assert.deepEqual(content.layers.map((layer) => layer.id), ["upstream:a:sticker_1", "sky_1"]);
  assert.equal(content.space.upstreamStickers, upstream.stickers);
  assert.deepEqual(content.space.upstreamItems, upstream.items);
  assert.ok(content.sphere.center[2] < -5 && content.sphere.radius >= 2, "the upstream plane is inside");
});

test("the loaded 3D items are the boxes the first T can hit", () => {
  const content = stageContent(state, 0, { media, editorFile, sceneBox: (url) => (url.startsWith("file3d:") ? box : null) });
  assert.equal(content.boxes.length, 1);
  assert.deepEqual(content.boxes[0].box, box);
  assert.deepEqual(content.boxes[0].transform.position, [3, 0, -3]);
  assert.deepEqual(stageContent(state, 0, { media: () => null }).boxes, []);
});

test("the scene item's box for the first T is moved by the scene transform", () => {
  const moved = loadSceneState({ version: 2, stickers: [], scene: { position: { value: [0, 0, -6] }, scale: { value: 2 } } });
  const sceneFiles = { kind: "mesh", urls: ["scene.glb"] };
  const content = stageContent(moved, 0, { media: () => null, sceneFiles, sceneBox: () => box });
  assert.equal(content.boxes.length, 1);
  assert.deepEqual(content.boxes[0].box, box);
  assert.deepEqual(content.boxes[0].transform.position, [0, 0, -6]);
  assert.equal(content.boxes[0].transform.scale, 2);
});
