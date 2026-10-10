import assert from "node:assert/strict";
import test from "node:test";

import { createDepthColors } from "../web_src/pano_depth_color.js";

// docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド": each depth grid input's colors come from its
// proxy MP4, which follows the playhead (createVideoFollower), and nothing is drawn until the video has a picture.
class FakeVideo {
  constructor() {
    this.listeners = new Map();
    this.readyState = 0;
    this.currentTime = 0;
    this.paused = true;
    this.videoWidth = 4;
    this.videoHeight = 3;
    this.src = "";
    this.duration = 10;
  }
  addEventListener(type, listener) { this.listeners.set(type, listener); }
  removeEventListener(type) { this.listeners.delete(type); }
  emit(type) { this.listeners.get(type)?.(); }
  removeAttribute() { this.src = ""; }
  load() {}
  pause() { this.paused = true; }
  play() { this.paused = false; return Promise.resolve(); }
}

function harness() {
  const videos = [];
  const canvases = [];
  const released = [];
  let changes = 0;
  const colors = createDepthColors({
    createVideo: () => {
      const video = new FakeVideo();
      videos.push(video);
      return video;
    },
    createCanvas: () => {
      const canvas = { width: 0, height: 0, getContext: () => ({ drawImage() {} }) };
      canvases.push(canvas);
      return canvas;
    },
    releaseCanvas: (canvas) => released.push(canvas),
    onChange: () => { changes += 1; },
  });
  return { colors, videos, canvases, released, changes: () => changes };
}

test("a depth grid has no colors until its video has a picture at the item's time", () => {
  const { colors, videos, canvases } = harness();
  const video = { src: "/view?filename=proxy.mp4", fps: 24, time: 2 / 24 };
  assert.equal(colors.picture("scene", video, false), null);
  assert.equal(videos.length, 1);
  assert.equal(videos[0].src, "/view?filename=proxy.mp4");
  // Loaded, it seeks to the item's time; once there its still is the picture.
  videos[0].readyState = 4;
  videos[0].emit("loadeddata");
  assert.equal(videos[0].currentTime, 2 / 24);
  assert.equal(colors.picture("scene", video, false), null);
  videos[0].emit("seeked");
  const picture = colors.picture("scene", video, false);
  assert.equal(picture.media, canvases[0]);
  assert.equal(picture.source, "/view?filename=proxy.mp4");
  assert.equal(canvases[0].width, 4);
  // Another frame's still is a new revision.
  const next = { ...video, time: 3 / 24 };
  colors.picture("scene", next, false);
  videos[0].emit("seeked");
  assert.notEqual(colors.picture("scene", next, false).revision, picture.revision);
});

test("each input has its own video, and an input that goes lets its video go", () => {
  const { colors, videos, released } = harness();
  colors.picture("scene", { src: "a.mp4", fps: 24, time: 0 }, false);
  colors.picture("upstream:#0:scene", { src: "b.mp4", fps: 24, time: 0 }, false);
  assert.equal(videos.length, 2);
  colors.retain(["scene"]);
  assert.equal(videos[1].src, "");
  assert.equal(released.length, 1);
  // Without a video (an older result), nothing is drawn.
  assert.equal(colors.picture("scene", null, false), null);
  colors.dispose();
  assert.equal(videos[0].src, "");
  assert.equal(released.length, 2);
});

test("while the playhead advances the playing video is the picture once it plays", () => {
  const { colors, videos } = harness();
  const video = { src: "a.mp4", fps: 24, time: 0 };
  colors.picture("scene", video, true);
  videos[0].readyState = 4;
  videos[0].emit("loadeddata");
  assert.equal(videos[0].paused, false);
  assert.equal(colors.picture("scene", video, true), null);
  videos[0].emit("playing");
  assert.equal(colors.picture("scene", video, true).media, videos[0]);
});

// The stage's line for the depth grids shown (editor/render_loop.js, after the 3D file notes).
test("Loading depth video… shows while a depth grid shown has no colors, and a grid too large for the GPU says so", async () => {
  const { DEPTH_VIDEO_LOADING, depthGridNotice } = await import("../web_src/pano_depth_color.js");
  const errorOf = (url) => (url === "big" ? "The depth of this 3D content is 3840 × 2160, larger than this GPU's textures (MAX_TEXTURE_SIZE 2048)." : url === "gone" ? "HTTP 404" : null);
  const grid = (url, color) => ({ kind: "depth_grid", url, color });
  assert.equal(DEPTH_VIDEO_LOADING, "Loading depth video…");
  assert.equal(depthGridNotice([grid("a", { media: {} })], errorOf), "");
  assert.equal(depthGridNotice([grid("a", { media: {} }), grid("b", null)], errorOf), DEPTH_VIDEO_LOADING);
  assert.equal(depthGridNotice([grid("b", null), grid("big", null)], errorOf), errorOf("big"));
  // Other items, a frame without an item, and other errors say nothing here.
  assert.equal(depthGridNotice([{ kind: "mesh", url: "m", color: null }, grid(null, null), null], errorOf), "");
  assert.equal(depthGridNotice([grid("gone", { media: {} })], errorOf), "");
});
