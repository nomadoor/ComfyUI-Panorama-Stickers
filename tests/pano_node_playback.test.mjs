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
    this.dispatchEvent(new Event("loadedmetadata"));
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
  const stickerVideo = new FakeVideo();
  const clock = new FakeClock();
  const log = { frames: [], captures: 0, stickerCaptures: 0, changes: 0, images: [] };
  const playback = createNodePlayback({
    video,
    stickerVideo,
    createImage: (src, onLoad) => {
      const image = { src, complete: false, naturalWidth: 0, load: () => Object.assign(image, { complete: true, naturalWidth: 8 }) && onLoad() };
      log.images.push(image);
      return image;
    },
    clock,
    readState: () => state,
    onFrame: (frame) => log.frames.push(frame),
    onCapture: () => {
      log.captures += 1;
    },
    onStickerCapture: () => {
      log.stickerCaptures += 1;
    },
    onChange: () => {
      log.changes += 1;
    },
  });
  // What each draw of the node passes: the surface shown with these candidates and the port Sticker's MP4.
  const follow = (sources, shown = true, sticker = null) => playback.follow({ shown, sources, state, sticker });
  return { playback, video, stickerVideo, clock, log, state, follow };
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

test("a surface out of sight pauses, lets its VIDEO go at once and shows the same frame again", () => {
  const { playback, follow, video, clock, log } = setup(timedState(48));
  follow(["/bg.mp4"]);
  video.loaded(1);
  playback.toggle();
  video.present(6 / FPS);
  assert.equal(follow(["/bg.mp4"], false), false);
  assert.equal(playback.playing, false);
  assert.equal(playback.frame, 6);
  assert.equal(video.src, "");
  assert.equal(video.frameCallbacks.size, 0);
  assert.equal(clock.callbacks.size, 0);
  // Back in sight, the same VIDEO loads again and shows the paused frame.
  assert.equal(follow(["/bg.mp4"]), true);
  assert.equal(video.src, "/bg.mp4");
  video.loaded(1);
  assert.deepEqual(video.seeks.at(-1), 6 / FPS);
  video.land();
  assert.equal(playback.frame, 6);
  assert.equal(log.captures > 0, true);
});

test("without a VIDEO, a surface out of sight pauses its clock on its frame", () => {
  const { playback, follow, clock } = setup(timedState(48));
  follow([]);
  playback.toggle();
  clock.framesAhead(5);
  follow([], false);
  assert.equal(playback.playing, false);
  assert.equal(playback.frame, 5);
  assert.equal(clock.callbacks.size, 0);
});

test("the surface is shown when not collapsed, in the page and laid out", () => {
  const element = { isConnected: true, clientWidth: 320 };
  assert.equal(surfaceShown(element, false), true);
  assert.equal(surfaceShown(element, true), false);
  assert.equal(surfaceShown({ ...element, isConnected: false }, false), false);
  assert.equal(surfaceShown({ ...element, clientWidth: 0 }, false), false);
});

test("without a VIDEO, play loops the Timeline from frame 0 at its fps; pause keeps the frame and play goes on from it", () => {
  const { playback, clock, log } = setup(timedState(48));
  assert.equal(playback.frame, 0);
  playback.toggle();
  assert.equal(playback.playing, true);
  clock.framesAhead(30);
  assert.equal(playback.frame, 30);
  clock.framesAhead(20);
  assert.equal(log.frames.includes(0), true);
  assert.equal(playback.playing, true);
  const frame = playback.frame;
  playback.toggle();
  assert.equal(playback.playing, false);
  assert.equal(playback.frame, frame);
  // Paused, nothing keeps a frame callback.
  assert.equal(clock.callbacks.size, 0);
  playback.toggle();
  clock.framesAhead(3);
  assert.equal(playback.frame, frame + 3);
});

test("the background VIDEO plays muted in sync and pauses on the frame it presented", () => {
  const { playback, follow, video, log } = setup();
  assert.equal(video.muted, true);
  follow(["/bg.mp4"]);
  video.loaded(2);
  // Before it plays, the surface shows frame 0 of the VIDEO.
  assert.equal(log.captures, 1);
  playback.toggle();
  assert.equal(video.paused, false);
  video.present(12 / FPS);
  assert.equal(playback.frame, 12);
  assert.equal(playback.showsVideo, true);
  playback.toggle();
  assert.equal(video.paused, true);
  assert.equal(playback.playing, false);
  assert.equal(playback.frame, 12);
  assert.equal(video.frameCallbacks.size, 0);
  // Play goes on from the paused frame.
  playback.toggle();
  if (video.seeks.length) video.land();
  assert.equal(playback.playing, true);
  assert.equal(video.paused, false);
  video.present(13 / FPS);
  assert.equal(playback.frame, 13);
});

test("a VIDEO that sets the Timeline's span loops by itself", () => {
  const { playback, follow, video } = setup();
  follow(["/bg.mp4"]);
  // Longer than the 5 s a Timeline without a length has.
  video.loaded(6);
  playback.toggle();
  assert.equal(video.loop, true);
  playback.pause();
  assert.equal(video.loop, false);
});

test("pause while paused does nothing", () => {
  const { playback, follow, video, log } = setup();
  follow(["/bg.mp4"]);
  video.loaded(2);
  const frames = log.frames.length;
  playback.pause();
  assert.equal(log.frames.length, frames);
  assert.deepEqual(video.seeks, []);
});

test("another background VIDEO brings the node back to frame 0", () => {
  const { playback, follow, video, clock } = setup(timedState(48));
  follow(["/a.mp4"]);
  video.loaded(1);
  playback.toggle();
  video.present(10 / FPS);
  playback.pause();
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

test("a Timeline that no longer reaches the paused frame, or nothing left to play, brings it back to frame 0", () => {
  const state = timedState(48);
  const { playback, follow, clock } = setup(state);
  follow([]);
  playback.toggle();
  clock.framesAhead(40);
  playback.pause();
  assert.equal(playback.frame, 40);
  state.timeline.length = 50;
  follow([]);
  assert.equal(playback.frame, 40);
  state.timeline.length = 30;
  follow([]);
  assert.equal(playback.frame, 0);
  playback.toggle();
  clock.framesAhead(20);
  playback.pause();
  assert.equal(playback.frame, 20);
  state.camera.fov.keyframes = [];
  state.camera.position.keyframes = [];
  state.camera.rotation.keyframes = [];
  assert.equal(follow([]), false);
  assert.equal(playback.frame, 0);
});

test("a new playback, as after a reload, starts on frame 0", () => {
  const { playback } = setup(timedState(48));
  assert.equal(playback.frame, 0);
  assert.equal(playback.playing, false);
});

test("dispose releases the VIDEO, its listeners and the frame callbacks", () => {
  const { playback, follow, video, stickerVideo, clock } = setup(timedState(48));
  const idle = video.listeners;
  follow(["/bg.mp4"]);
  video.loaded(1);
  playback.toggle();
  video.present(1 / FPS);
  playback.dispose();
  assert.equal(video.src, "");
  assert.equal(video.paused, true);
  assert.equal(video.listeners, idle - 2);
  assert.equal(stickerVideo.listeners, 0);
  assert.equal(video.frameCallbacks.size, 0);
  assert.equal(clock.callbacks.size, 0);
});

// The port Sticker's VIDEO: a 3 s MP4 on a Sticker whose Clip range starts at frame 6, 12 frames in.
const STICKER = { src: "/sticker.mp4", meta: { kind: "VIDEO", fps: 30, frames: 90, duration: 3 } };

function portState() {
  return loadSceneState({ version: 2, stickers: [{ id: "p", source: { kind: "port" }, clip: { start: 6, in: 12 } }] });
}

test("the port Sticker's VIDEO makes the node playable, spans the Timeline and plays muted with the clock", () => {
  const { playback, follow, stickerVideo, clock, log } = setup(portState());
  assert.equal(follow([], true, STICKER), true);
  assert.equal(stickerVideo.src, "/sticker.mp4");
  assert.equal(stickerVideo.muted, true);
  stickerVideo.loaded(3);
  // At rest on frame 0, before the Clip range: nothing shows and nothing seeks.
  assert.equal(playback.stickerPicture("still", "first"), null);
  assert.deepEqual(stickerVideo.seeks, []);
  playback.toggle();
  clock.framesAhead(10);
  follow([], true, STICKER);
  assert.equal(playback.frame, 10);
  // Frame 10 is 16 frames into the media, which starts at start - in = frame -6.
  assert.equal(stickerVideo.paused, false);
  assert.ok(Math.abs(stickerVideo.seeks.at(-1) - 16 / FPS) < 1e-4);
  stickerVideo.land();
  stickerVideo.dispatchEvent(new Event("playing"));
  assert.equal(playback.stickerPicture("still", "first"), stickerVideo);
  // Pause: the VIDEO pauses with the playhead and rests on its frame.
  playback.toggle();
  follow([], true, STICKER);
  assert.equal(stickerVideo.paused, true);
  assert.equal(log.stickerCaptures > 0, true);
  assert.equal(playback.stickerPicture("still", "first"), "still");
  // Out of sight, the VIDEO is let go.
  follow([], false, STICKER);
  assert.equal(stickerVideo.src, "");
});

test("the port Sticker's media end widens the Timeline span", () => {
  const state = portState();
  state.stickers[0].clip.start = 200;
  const { playback, follow, clock } = setup(state);
  follow([], true, STICKER);
  playback.toggle();
  // The media ends at 200 - 12 + 3 s = frame 260; frame 250 is still on the Timeline.
  clock.framesAhead(250);
  assert.equal(playback.frame, 250);
});

test("an RGBA IMAGE batch on the port shows its PNGs along the playhead, without the VIDEO element", () => {
  const frames = Array.from({ length: 10 }, (_, index) => `/f${index}.png`);
  const sticker = { frames, meta: { kind: "IMAGE", fps: 24, frames: 10, duration: 10 / 24 } };
  const state = loadSceneState({ version: 2, stickers: [{ id: "p", source: { kind: "port" }, clip: { start: 2, in: 0 } }] });
  const { playback, follow, stickerVideo, clock, log } = setup(state);
  assert.equal(follow([], true, sticker), true);
  assert.equal(stickerVideo.src, "");
  assert.equal(playback.stickerPicture("still", "first"), null);
  playback.toggle();
  clock.framesAhead(5);
  follow([], true, sticker);
  assert.equal(playback.stickerPicture("still", "first"), "first");
  log.images.find((image) => image.src === "/f3.png").load();
  assert.equal(playback.stickerPicture("still", "first").src, "/f3.png");
  assert.equal(log.changes > 0, true);
});
