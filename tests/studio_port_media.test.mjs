// The new editor's port Sticker media (web_src/studio/port_media.js, docs/studio-ui.md "ノードの入力から来た物"): the
// `sticker` input's picture and 3D media from the node's current result.
import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import { createPortMedia } from "../web_src/studio/port_media.js";

const port = loadSceneState({
  version: 2,
  stickers: [{ id: "sticker_1", placement: "sky", source: { kind: "port" } }],
}).stickers[0];
const own = loadSceneState({
  version: 2,
  stickers: [{ id: "sticker_2", placement: "sky", source: { kind: "file", filename: "a.png", subfolder: "", storage: "input" } }],
}).stickers[0];

function setup(result, { current = true } = {}) {
  const made = [];
  class FakeImage {
    constructor() {
      made.push(this);
    }
  }
  let changes = 0;
  const media = createPortMedia({
    uiList: (key) => result[key] ?? [],
    source: (entry) => (entry ? `/view?filename=${entry.filename}` : null),
    current: () => current,
    fps: () => 24,
    playing: () => false,
    onChange: () => (changes += 1),
    ImageCtor: FakeImage,
  });
  return { media, made, changes: () => changes };
}

const loaded = (image, width, height) => Object.assign(image, { complete: true, naturalWidth: width, naturalHeight: height });

test("the port Sticker shows the first frame of the sticker input once it has loaded", () => {
  const { media, made, changes } = setup({ pano_sticker_input_images: [{ filename: "first.png" }] });
  assert.equal(media.picture(port, 0), null, "nothing until the image loads");
  assert.equal(made.length, 1);
  assert.equal(made[0].src, "/view?filename=first.png");
  loaded(made[0], 300, 100);
  made[0].onload();
  assert.equal(changes(), 1);
  const shown = media.picture(port, 0);
  assert.equal(shown.media, made[0]);
  assert.deepEqual(media.size(), { width: 300, height: 100 });
  media.picture(port, 5);
  assert.equal(made.length, 1, "loaded once");
});

test("no picture for another Sticker, a hidden port Sticker, or a result from before the input changed", () => {
  const result = { pano_sticker_input_images: [{ filename: "first.png" }] };
  const { media, made } = setup(result);
  media.picture(port, 0);
  loaded(made[0], 300, 100);
  assert.equal(media.picture(own, 0), null);
  assert.equal(media.picture({ ...port, visible: false }, 0), null);
  const stale = setup(result, { current: false });
  assert.equal(stale.media.picture(port, 0), null);
  assert.equal(stale.media.size(), null);
  assert.equal(stale.media.meta(), null);
});

test("the 3D media and the media meta of the sticker input come from the current result", () => {
  const result = {
    pano_sticker_files: [{ filename: "a.ply" }, { filename: "b.ply" }],
    pano_sticker_meta: [{ kind: "splat" }],
  };
  const { media } = setup(result);
  assert.deepEqual(media.files().urls, ["/view?filename=a.ply", "/view?filename=b.ply"]);
  assert.deepEqual(media.meta(), { kind: "IMAGE", frames: 2 }, "two items count as a sequence");
  assert.equal(setup(result, { current: false }).media.files(), null);
  const video = setup({ pano_sticker_input_video_meta: [{ kind: "VIDEO", fps: 24, frames: 48, duration: 2 }] });
  assert.deepEqual(video.media.meta(), { kind: "VIDEO", fps: 24, frames: 48, duration: 2 });
});
