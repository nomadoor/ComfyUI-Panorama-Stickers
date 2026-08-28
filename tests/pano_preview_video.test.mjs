import assert from "node:assert/strict";
import test from "node:test";

import {
  createLoopingPreviewVideo,
  isNodeOutputMediaCurrent,
  isTrackedMediaInputConnectionChange,
  markNodeOutputMediaCurrent,
  markNodeOutputMediaStale,
  resolvePreviewVideoSource,
} from "../web_src/pano_preview_video.js";

class FakeVideo {
  constructor() {
    this.listeners = new Map();
    this.paused = true;
    this.ended = false;
    this.playCalls = 0;
    this.pauseCalls = 0;
    this.loadCalls = 0;
    this.frameCallbacks = new Map();
    this.nextFrameCallbackId = 0;
    this.cancelledFrameCallbacks = [];
  }

  addEventListener(name, listener) {
    if (!this.listeners.has(name)) this.listeners.set(name, new Set());
    this.listeners.get(name).add(listener);
  }

  removeEventListener(name, listener) {
    this.listeners.get(name)?.delete(listener);
  }

  dispatch(name) {
    for (const listener of [...(this.listeners.get(name) || [])]) listener();
  }

  play() {
    this.playCalls += 1;
    this.paused = false;
    this.dispatch("play");
    return Promise.resolve();
  }

  pause() {
    this.pauseCalls += 1;
    this.paused = true;
    this.dispatch("pause");
  }

  load() {
    this.loadCalls += 1;
  }

  requestVideoFrameCallback(callback) {
    this.nextFrameCallbackId += 1;
    this.frameCallbacks.set(this.nextFrameCallbackId, callback);
    return this.nextFrameCallbackId;
  }

  cancelVideoFrameCallback(id) {
    this.cancelledFrameCallbacks.push(id);
    this.frameCallbacks.delete(id);
  }

  removeAttribute(name) {
    if (name === "src") this.src = "";
  }
}

test("Cutout selects its input ERP video instead of its rectilinear output video", () => {
  const output = {
    ui: {
      pano_input_videos: [{ filename: "erp-input.mp4", type: "temp", format: "video/mp4" }],
      pano_videos: [{ filename: "rect-output.mp4", type: "temp", format: "video/mp4" }],
    },
  };
  const source = (entry) => entry ? `/view/${entry.filename}` : "";

  assert.equal(
    resolvePreviewVideoSource(output, ["pano_input_videos"], source),
    "/view/erp-input.mp4",
  );
  assert.equal(
    resolvePreviewVideoSource(output, ["pano_videos"], source),
    "/view/rect-output.mp4",
  );
});

test("node preview video autoplays muted in a loop and publishes every presented frame", async () => {
  const video = new FakeVideo();
  let presentedFrames = 0;
  const player = createLoopingPreviewVideo({
    documentRef: { createElement: () => video },
    src: "/view/erp-input.mp4",
    onFrame: () => { presentedFrames += 1; },
  });

  assert.equal(player.video, video);
  assert.equal(video.muted, true);
  assert.equal(video.loop, true);
  assert.equal(video.autoplay, true);
  assert.equal(video.playsInline, true);
  assert.equal(video.src, "/view/erp-input.mp4");
  assert.equal(video.loadCalls, 1);

  video.dispatch("canplay");
  await Promise.resolve();
  assert.equal(video.playCalls, 1);
  assert.equal(video.frameCallbacks.size, 1);

  const callback = [...video.frameCallbacks.values()][0];
  video.frameCallbacks.clear();
  callback();
  assert.ok(presentedFrames >= 2);
  assert.equal(video.frameCallbacks.size, 1);

  const framesBeforeDestroy = presentedFrames;
  player.destroy();
  assert.equal(video.paused, true);
  assert.equal(video.src, "");
  assert.equal(video.frameCallbacks.size, 0);
  assert.equal(presentedFrames, framesBeforeDestroy);
});

test("connection changes keep previous UI output stale until the node executes again", () => {
  const node = {};

  assert.equal(isNodeOutputMediaCurrent(node), true);
  markNodeOutputMediaStale(node);
  assert.equal(isNodeOutputMediaCurrent(node), false);
  assert.equal(isNodeOutputMediaCurrent(node, "background"), false);
  assert.equal(isNodeOutputMediaCurrent(node, "external-sticker"), false);
  markNodeOutputMediaCurrent(node);
  assert.equal(isNodeOutputMediaCurrent(node), true);
});

test("background and external sticker output freshness are independent", () => {
  const node = {};

  markNodeOutputMediaStale(node, "background");

  assert.equal(isNodeOutputMediaCurrent(node, "background"), false);
  assert.equal(isNodeOutputMediaCurrent(node, "external-sticker"), true);

  markNodeOutputMediaStale(node, "external-sticker");
  markNodeOutputMediaCurrent(node, "background");

  assert.equal(isNodeOutputMediaCurrent(node, "background"), true);
  assert.equal(isNodeOutputMediaCurrent(node, "external-sticker"), false);
});

test("only a tracked ERP input connection change invalidates node output media", () => {
  const node = {
    inputs: [
      { name: "erp_image" },
      { name: "audio" },
    ],
  };

  assert.equal(isTrackedMediaInputConnectionChange(node, 1, 0), true);
  assert.equal(isTrackedMediaInputConnectionChange(node, "input", 0), true);
  assert.equal(isTrackedMediaInputConnectionChange(node, 1, 1), false);
  assert.equal(isTrackedMediaInputConnectionChange(node, 2, 0), false);
  assert.equal(isTrackedMediaInputConnectionChange(node, "output", 0), false);
});
