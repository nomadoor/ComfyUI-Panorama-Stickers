import assert from "node:assert/strict";
import test from "node:test";

import { createNodePlayback, surfaceShown } from "../web_src/pano_node_playback.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { keyAllLanes } from "../web_src/pano_timeline.js";

const FPS = 24;

// The node surface's <video>: it loads, seeks and presents frames when the test says so.
class FakeVideo extends EventTarget {
  constructor() {
    super();
    this.attributes = new Map();
    this.duration = NaN;
    this.readyState = 0;
    this.paused = true;
    this.ended = false;
    this.loop = false;
    this.muted = false;
    this.time = 0;
    this.seeks = [];
    this.loads = 0;
    this.listeners = 0;
    this.frameCallbacks = new Map();
    this.nextHandle = 1;
  }

  get src() {
    return this.attributes.get("src") || "";
  }

  set src(value) {
    this.attributes.set("src", value);
  }

  removeAttribute(name) {
    this.attributes.delete(name);
  }

  get seekable() {
    return { length: 1, end: () => this.duration };
  }

  get currentTime() {
    return this.time;
  }

  set currentTime(value) {
    this.seeks.push(value);
    this.time = value;
    this.ended = false;
  }

  addEventListener(type, listener) {
    this.listeners += 1;
    super.addEventListener(type, listener);
  }

  removeEventListener(type, listener) {
    this.listeners -= 1;
    super.removeEventListener(type, listener);
  }

  requestVideoFrameCallback(callback) {
    const handle = this.nextHandle++;
    this.frameCallbacks.set(handle, callback);
    return handle;
  }

  cancelVideoFrameCallback(handle) {
    this.frameCallbacks.delete(handle);
  }

  load() {
    this.loads += 1;
    this.readyState = 0;
    this.duration = NaN;
    this.time = 0;
  }

  play() {
    this.paused = false;
    return Promise.resolve();
  }

  pause() {
    this.paused = true;
  }

  // The source has loaded its first frame.
  loaded(duration = 2) {
    this.duration = duration;
    this.readyState = 4;
    this.dispatchEvent(new Event("loadeddata"));
  }

  land() {
    this.dispatchEvent(new Event("seeked"));
  }

  present(mediaTime) {
    this.time = mediaTime;
    const callbacks = [...this.frameCallbacks.values()];
    this.frameCallbacks.clear();
    for (const callback of callbacks) callback(0, { mediaTime });
  }

  fail() {
    this.dispatchEvent(new Event("error"));
  }
}

class FakeClock {
  constructor() {
    this.time = 1000;
    this.callbacks = new Map();
    this.nextId = 1;
  }

  now() {
    return this.time;
  }

  requestFrame(callback) {
    const id = this.nextId++;
    this.callbacks.set(id, callback);
    return id;
  }

  cancelFrame(id) {
    this.callbacks.delete(id);
  }

  framesAhead(frames) {
    this.time += (frames / FPS) * 1000 + 1;
    const callbacks = [...this.callbacks.values()];
    this.callbacks.clear();
    for (const callback of callbacks) callback(this.time);
  }
}

function setup(state = loadSceneState(null)) {
  const video = new FakeVideo();
  const clock = new FakeClock();
  const log = { frames: [], captures: 0, changes: 0 };
  const playback = createNodePlayback({
    video,
    clock,
    pageHidden: () => false,
    readState: () => state,
    onFrame: (frame) => log.frames.push(frame),
    onCapture: () => {
      log.captures += 1;
    },
    onChange: () => {
      log.changes += 1;
    },
  });
  // What each draw of the node passes: the surface shown with these candidates.
  const follow = (sources, shown = true) => playback.follow({ shown, sources, state });
  return { playback, video, clock, log, state, follow };
}

function timedState(length = 48) {
  const state = loadSceneState(null);
  keyAllLanes(state.camera, 0);
  state.timeline.length = length;
  return state;
}

test("the play button shows for a timed scene or a background VIDEO that loads", () => {
  const { follow, video } = setup();
  assert.equal(follow([]), false);
  assert.equal(follow(["/view?filename=bg.mp4"]), true);
  video.fail();
  assert.equal(follow(["/view?filename=bg.mp4"]), false);
  const timed = setup(timedState());
  assert.equal(timed.follow([]), true);
});

test("a failed VIDEO gives way to the next candidate, as in the editor, until it leaves the candidates", () => {
  const { playback, follow, video, log } = setup();
  follow(["/own.mp4", "/linked.mp4"]);
  assert.equal(video.src, "/own.mp4");
  video.fail();
  assert.equal(log.changes > 0, true);
  follow(["/own.mp4", "/linked.mp4"]);
  assert.equal(video.src, "/linked.mp4");
  assert.equal(playback.source, "/linked.mp4");
  // A new run names /own.mp4 no more; when it comes back, it is tried again.
  follow(["/linked.mp4"]);
  follow(["/own.mp4", "/linked.mp4"]);
  assert.equal(video.src, "/own.mp4");
});

test("a surface out of sight stops on frame 0 and lets its VIDEO go at once", () => {
  const { playback, follow, video, clock } = setup(timedState(48));
  follow(["/bg.mp4"]);
  video.loaded(1);
  playback.toggle();
  video.present(6 / FPS);
  assert.equal(follow(["/bg.mp4"], false), false);
  assert.equal(playback.playing, false);
  assert.equal(playback.frame, 0);
  assert.equal(video.src, "");
  assert.equal(video.frameCallbacks.size, 0);
  assert.equal(clock.callbacks.size, 0);
  // A collapsed stopped node lets its VIDEO go too.
  follow(["/bg.mp4"]);
  assert.equal(video.src, "/bg.mp4");
  follow(["/bg.mp4"], false);
  assert.equal(video.src, "");
});

test("without a VIDEO, a surface out of sight stops its clock", () => {
  const { playback, follow, clock } = setup(timedState(48));
  follow([]);
  playback.toggle();
  clock.framesAhead(5);
  follow([], false);
  assert.equal(playback.playing, false);
  assert.equal(clock.callbacks.size, 0);
});

test("the surface is shown when not collapsed, in the page and laid out", () => {
  const element = { isConnected: true, clientWidth: 320 };
  assert.equal(surfaceShown(element, false), true);
  assert.equal(surfaceShown(element, true), false);
  assert.equal(surfaceShown({ ...element, isConnected: false }, false), false);
  assert.equal(surfaceShown({ ...element, clientWidth: 0 }, false), false);
});

test("without a VIDEO, play loops the Timeline from frame 0 at its fps and stop goes back to frame 0", () => {
  const { playback, follow, clock, log } = setup(timedState(48));
  assert.equal(playback.frame, 0);
  playback.toggle();
  assert.equal(playback.playing, true);
  clock.framesAhead(30);
  assert.equal(playback.frame, 30);
  clock.framesAhead(20);
  assert.equal(log.frames.includes(0), true);
  assert.equal(playback.playing, true);
  playback.toggle();
  assert.equal(playback.playing, false);
  assert.equal(playback.frame, 0);
  // Stopped, nothing keeps a frame callback.
  assert.equal(clock.callbacks.size, 0);
});

test("the background VIDEO plays muted in sync and stops back on frame 0", () => {
  const { playback, follow, video, log } = setup();
  assert.equal(video.muted, true);
  follow(["/bg.mp4"]);
  video.loaded(2);
  // The stopped surface shows frame 0 of the VIDEO.
  assert.equal(log.captures, 1);
  playback.toggle();
  assert.equal(video.paused, false);
  video.present(12 / FPS);
  assert.equal(playback.frame, 12);
  assert.equal(playback.showsVideo, true);
  playback.stop();
  assert.equal(video.paused, true);
  assert.equal(playback.playing, false);
  assert.equal(playback.frame, 0);
  assert.deepEqual(video.seeks, [0]);
  video.land();
  assert.equal(log.captures, 2);
  assert.equal(video.frameCallbacks.size, 0);
});

test("a VIDEO that sets the Timeline's span loops by itself", () => {
  const { playback, follow, video } = setup();
  follow(["/bg.mp4"]);
  // Longer than the 5 s a Timeline without a length has.
  video.loaded(6);
  playback.toggle();
  assert.equal(video.loop, true);
  playback.stop();
  assert.equal(video.loop, false);
});

test("stop while stopped does nothing", () => {
  const { playback, follow, video, log } = setup();
  follow(["/bg.mp4"]);
  video.loaded(2);
  const frames = log.frames.length;
  playback.stop();
  assert.equal(log.frames.length, frames);
  assert.deepEqual(video.seeks, []);
});

test("a new background source stops playback on frame 0", () => {
  const { playback, follow, video, clock } = setup(timedState(48));
  follow(["/a.mp4"]);
  video.loaded(1);
  playback.toggle();
  video.present(10 / FPS);
  assert.equal(playback.frame, 10);
  follow(["/b.mp4"]);
  assert.equal(playback.playing, false);
  assert.equal(playback.frame, 0);
  assert.equal(video.src, "/b.mp4");
  follow([]);
  assert.equal(video.src, "");
  assert.equal(playback.playing, false);
  assert.equal(clock.callbacks.size, 0);
});

test("dispose releases the VIDEO, its listeners and the frame callbacks", () => {
  const { playback, follow, video, clock } = setup(timedState(48));
  const idle = video.listeners;
  follow(["/bg.mp4"]);
  video.loaded(1);
  playback.toggle();
  video.present(1 / FPS);
  playback.dispose();
  assert.equal(video.src, "");
  assert.equal(video.paused, true);
  assert.equal(video.listeners, idle - 1);
  assert.equal(video.frameCallbacks.size, 0);
  assert.equal(clock.callbacks.size, 0);
});
