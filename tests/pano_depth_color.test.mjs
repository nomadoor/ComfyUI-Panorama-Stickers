import assert from "node:assert/strict";
import test from "node:test";

import { createDepthColors, withDepthColor } from "../web_src/pano_depth_color.js";

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
  assert.equal(colors.picture("gone", null, false), null);
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

// docs/threejs-spark-integration.md "読み込み中・再生中の表示": an item drawn in place of the playhead's shows its own
// time's still, also while the playhead advances; the picture says which time it shows.
test("a still asked for while the playhead advances rests on that time instead of playing", () => {
  const { colors, videos, canvases } = harness();
  colors.picture("scene", { src: "a.mp4", fps: 24, time: 0 }, true);
  videos[0].readyState = 4;
  videos[0].emit("loadeddata");
  videos[0].emit("playing");
  assert.equal(colors.picture("scene", { src: "a.mp4", fps: 24, time: 0 }, true).time, 0);
  const held = { src: "a.mp4", fps: 24, time: 5 / 24, still: true };
  colors.picture("scene", held, true);
  assert.equal(videos[0].paused, true);
  assert.equal(videos[0].currentTime, 5 / 24);
  videos[0].emit("seeked");
  const picture = colors.picture("scene", held, true);
  assert.equal(picture.media, canvases[0]);
  assert.equal(picture.time, 5 / 24);
  // The same still asked for again seeks nothing more.
  videos[0].currentTime = 99;
  colors.picture("scene", held, true);
  assert.equal(videos[0].currentTime, 99);
  // Without a video, picture() tells what the input shows now without following anything.
  assert.equal(colors.picture("scene", null, true).media, canvases[0]);
  assert.equal(videos[0].currentTime, 99);
  assert.equal(colors.picture("other", null, true), null);
  assert.equal(videos.length, 1);
});

// An item drawn in place of the playhead's can change every frame (its items load a little late); each seek that
// lands is captured, so the still shows a known item while the next seek runs, instead of waiting for one that keeps
// moving.
test("each still sought that lands is captured, also when a later time is wanted by then", () => {
  const { colors, videos } = harness();
  const at = (n) => ({ src: "a.mp4", fps: 24, time: n / 24, still: true });
  colors.picture("scene", at(1), true);
  videos[0].readyState = 4;
  videos[0].emit("loadeddata");
  assert.equal(videos[0].currentTime, 1 / 24);
  colors.picture("scene", at(2), true);
  videos[0].emit("seeked");
  assert.equal(colors.picture("scene", at(3), true).time, 1 / 24);
  assert.equal(videos[0].currentTime, 2 / 24);
  videos[0].emit("seeked");
  assert.equal(colors.picture("scene", at(3), true).time, 2 / 24);
  assert.equal(videos[0].currentTime, 3 / 24);
  videos[0].emit("seeked");
  assert.equal(colors.picture("scene", at(3), true).time, 3 / 24);
});

test("a depth grid request's colors are asked for at the item drawn, and say which item they show", () => {
  const asked = [];
  let shows = null;
  const picture = (slot, video) => {
    asked.push([slot, video && { ...video }]);
    return shows === null ? null : video ? { media: "m", revision: "r", source: video.src, time: shows } : { media: "m" };
  };
  const slots = [];
  const request = { kind: "depth_grid", url: "d2", urls: ["d0", "d2", "d3"], video: { src: "p.mp4", fps: 24, items: ["d0", null, "d2", "d3"] } };
  const withColor = withDepthColor(request, "scene", picture, slots);
  assert.deepEqual(slots, ["scene"]);
  // Without a picture yet, asking wakes the video resting on the playhead's item, so it loads beside the grid; ready
  // is whether it shows a picture now.
  assert.equal(withColor.color.ready, false);
  assert.deepEqual(asked, [["scene", null], ["scene", { src: "p.mp4", fps: 24, time: 2 / 24, still: true }]]);
  asked.length = 0;
  // The playhead's item follows the playhead; another item asks for its own time's still.
  assert.equal(withColor.color.at("d2"), null);
  assert.equal(withColor.color.at("d0"), null);
  assert.deepEqual(asked, [["scene", { src: "p.mp4", fps: 24, time: 2 / 24, still: false }], ["scene", { src: "p.mp4", fps: 24, time: 0, still: true }]]);
  shows = 3 / 24;
  // Once the input shows a picture, asking does not follow again (only at() does).
  asked.length = 0;
  assert.equal(withDepthColor(request, "scene", picture, []).color.ready, true);
  assert.deepEqual(asked, [["scene", null]]);
  assert.deepEqual(withColor.color.at("d0"), { media: "m", revision: "r", source: "p.mp4", slot: "scene", key: "d3" });
  // A picture of no item's time (the picture a pause left) shows no known item.
  shows = Number.NaN;
  assert.equal(withColor.color.at("d0").key, null);
  // Without a video there are no colors; other kinds come back as they are.
  assert.equal(withDepthColor({ ...request, video: null }, "scene", picture, []).color, null);
  const mesh = { kind: "mesh" };
  assert.equal(withDepthColor(mesh, "scene", picture, []), mesh);
});

// The stage's line for the depth grids shown (editor/render_loop.js, after the 3D file notes).
test("Loading depth video… shows while a depth grid shown has no colors, and a grid too large for the GPU says so", async () => {
  const { DEPTH_VIDEO_LOADING, depthGridNotice } = await import("../web_src/pano_depth_color.js");
  const errorOf = (url) => (url === "big" ? "The depth of this 3D content is 3840 × 2160, larger than this GPU's textures (MAX_TEXTURE_SIZE 2048)." : url === "gone" ? "HTTP 404" : null);
  const grid = (url, color) => ({ kind: "depth_grid", url, color });
  assert.equal(DEPTH_VIDEO_LOADING, "Loading depth video…");
  assert.equal(depthGridNotice([grid("a", { ready: true })], errorOf), "");
  assert.equal(depthGridNotice([grid("a", { ready: true }), grid("b", null)], errorOf), DEPTH_VIDEO_LOADING);
  assert.equal(depthGridNotice([grid("a", { ready: false })], errorOf), DEPTH_VIDEO_LOADING);
  assert.equal(depthGridNotice([grid("b", null), grid("big", null)], errorOf), errorOf("big"));
  // Other items, a frame without an item, and other errors say nothing here.
  assert.equal(depthGridNotice([{ kind: "mesh", url: "m", color: null }, grid(null, null), null], errorOf), "");
  assert.equal(depthGridNotice([grid("gone", { ready: true })], errorOf), "");
  // It says Loading depth video… only while the video is what it waits for: an item of the grid has loaded.
  const loaded = (key) => key === "d1";
  assert.equal(depthGridNotice([{ ...grid("d2", { ready: false }), urls: ["d0", "d1", "d2"] }], errorOf, loaded), DEPTH_VIDEO_LOADING);
  assert.equal(depthGridNotice([{ ...grid("d2", { ready: false }), urls: ["d0", "d2"] }], errorOf, loaded), "");
});
