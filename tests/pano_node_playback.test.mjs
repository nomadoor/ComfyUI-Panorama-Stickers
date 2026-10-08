import assert from "node:assert/strict";
import test from "node:test";

import { createNodePlayback, surfaceShown } from "../web_src/pano_node_playback.js";
import { portMediaSource } from "../web_src/pano_port_media.js";
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

function setup(state = loadSceneState(null), { camera = false } = {}) {
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
    camera,
  });
  // What each draw of the node passes: the surface shown with these candidates and the port Sticker's MP4.
  const follow = (sources, shown = true, sticker = null) => playback.follow({ shown, sources, state, sticker });
  return { playback, video, stickerVideo, clock, log, state, follow };
}

function timedState(length = 48) {
  const state = loadSceneState(null);
  keyAllLanes(state.scene, 0);
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
  // Stickers has no Camera (ADR 0028): the Keyframes of the state's Camera do not make it play.
  const camera = loadSceneState({ version: 2, camera: {} });
  keyAllLanes(camera.camera, 0);
  assert.equal(setup(camera).follow([]), false);
  // Panorama Studio shoots through its Camera, so its Keyframes make the node play and set its span (#89).
  camera.camera.fov.keyframes.push({ frame: 200, value: 50, easing: "auto" });
  const studio = setup(camera, { camera: true });
  assert.equal(studio.follow([]), true);
  studio.playback.toggle();
  studio.clock.framesAhead(150);
  assert.ok(studio.log.frames.at(-1) > 120, "the span reaches the Camera's last Keyframe");
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
  // The node's open editor covers it.
  assert.equal(surfaceShown(element, false, true), false);
});

// The editor plays the same 1080p VIDEO itself: the surface under it must not hold a second decoder.
test("while the node's editor is open, the surface lets its VIDEOs go and shows the same frame after", () => {
  const element = { isConnected: true, clientWidth: 320 };
  const { playback, video, stickerVideo, clock, state } = setup(portState());
  const draw = (editorOpen) => playback.follow({ shown: surfaceShown(element, false, editorOpen), sources: ["/bg.mp4"], state, sticker: STICKER });
  draw(false);
  video.loaded(1);
  playback.toggle();
  video.present(14 / FPS);
  assert.equal(stickerVideo.src, "/sticker.mp4");
  const loads = [video.loads, stickerVideo.loads];
  assert.equal(draw(true), false);
  assert.equal(playback.playing, false);
  assert.equal(video.src, "");
  assert.equal(stickerVideo.src, "");
  assert.deepEqual([video.loads, stickerVideo.loads], [loads[0] + 1, loads[1] + 1]);
  assert.equal(playback.source, "");
  assert.equal(clock.callbacks.size, 0);
  // The editor closes: the surface loads the VIDEO again at the frame it left.
  assert.equal(draw(false), true);
  assert.equal(video.src, "/bg.mp4");
  video.loaded(1);
  assert.deepEqual(video.seeks.at(-1), 14 / FPS);
  video.land();
  assert.equal(playback.frame, 14);
  assert.equal(stickerVideo.src, "/sticker.mp4");
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

test("play loops within the output's length, with no minimum, and a one-frame Timeline does not play", () => {
  // An Auto length set by a Clip range ending at 30 (no 5 s floor).
  const clipped = loadSceneState({ version: 2, timeline: { fps: FPS }, stickers: [{ id: "s", source: { kind: "file", filename: "a.png" }, clip: { start: 0, in: 0, duration: 30 } }] });
  keyAllLanes(clipped.stickers[0], 0);
  const auto = setup(clipped);
  auto.follow([]);
  auto.playback.toggle();
  auto.clock.framesAhead(29);
  assert.equal(auto.playback.frame, 29);
  auto.clock.framesAhead(1);
  assert.equal(auto.playback.frame, 0, "past the last frame it starts over");
  // A length set shorter than the Clip range ends the loop there.
  clipped.timeline.length = 10;
  auto.clock.framesAhead(10);
  assert.equal(auto.playback.frame, 0);
  // The node's result gives the background's frames: they set the Auto length, not the VIDEO element.
  const video = setup(loadSceneState(null));
  video.playback.follow({ shown: true, sources: ["/bg.mp4"], state: video.state, media: { bg: { video: true, frames: 12, duration: 0.5 } } });
  video.video.loaded(60);
  video.playback.toggle();
  video.video.present(11 / FPS);
  assert.equal(video.playback.frame, 11);
  video.video.present(12 / FPS);
  assert.notEqual(video.playback.frame, 12, "frame 12 is past the output");
  // A still: one frame, nothing to play.
  const still = setup(timedState(1));
  assert.equal(still.follow([]), true, "the button stays, harmless");
  still.playback.toggle();
  assert.equal(still.playback.playing, false);
  assert.equal(still.clock.callbacks.size, 0);
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
  // Without a result, the VIDEO the surface plays sets the Auto length.
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
  state.scene.position.keyframes = [];
  state.scene.rotation.keyframes = [];
  state.scene.scale.keyframes = [];
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
  const loads = [video.loads, stickerVideo.loads];
  playback.dispose();
  // Without a src and load()ed, neither element holds a decoder, though it lives until it is collected.
  assert.equal(video.src, "");
  assert.equal(stickerVideo.src, "");
  assert.deepEqual([video.loads, stickerVideo.loads], [loads[0] + 1, loads[1] + 1]);
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

// The VIDEO on the port is swapped for an IMAGE without a run: the node's result is stale, so the
// playback follows no media, and the picture is the IMAGE's first frame or nothing, under another source.
test("a swap on the port changes the source of the port Sticker's picture", () => {
  const { playback, follow, stickerVideo } = setup(portState());
  follow([], true, STICKER);
  stickerVideo.loaded(3);
  assert.equal(portMediaSource(playback.stickerMedia, "first"), "/sticker.mp4");
  follow([], true, null);
  assert.equal(stickerVideo.src, "");
  assert.equal(playback.stickerPicture("still", null), null);
  assert.equal(playback.stickerPicture("still", "image"), "image");
  assert.equal(portMediaSource(playback.stickerMedia, "image"), "image");
});

test("the background VIDEO follows its Clip range on the node, with bg_color before it", () => {
  const state = loadSceneState({ version: 2, timeline: { fps: FPS }, background: { clip: { start: 12, in: 0 } } });
  const { playback, follow, video, clock } = setup(state);
  follow(["/bg.mp4"]);
  video.loaded(2);
  // Before its Clip range nothing of the VIDEO shows, and nothing is sought for it.
  assert.equal(playback.frame, 0);
  assert.equal(playback.backgroundShows, false);
  assert.deepEqual(video.seeks, []);
  playback.toggle();
  // The clock runs to frame 12, where the VIDEO starts from its first frame and sets the playhead.
  clock.framesAhead(12);
  assert.equal(playback.frame, 12);
  assert.equal(video.paused, false);
  assert.equal(playback.backgroundShows, true);
  video.present(10 / FPS);
  assert.equal(playback.frame, 22);
  // The derived length is the VIDEO's own 48 frames: its last 12 frames fall past the output's end.
  video.present(35 / FPS);
  assert.equal(playback.frame, 47);
  // An upstream background (`media.bg` null) is not placed by the node's own Clip range, but by its Studio's.
  playback.follow({ shown: true, sources: ["/bg.mp4"], state, media: { bg: null } });
  assert.equal(playback.backgroundShows, true);
  playback.follow({ shown: true, sources: ["/bg.mp4"], state, media: { bg: null, upstreamClip: { start: 70, in: 0, duration: null } } });
  assert.equal(playback.backgroundShows, false);
});

test("an upstream background on the node ends with its media, as in the editor and the output", () => {
  const state = loadSceneState({ version: 2, timeline: { fps: FPS, length: 100 } });
  const { playback, video, clock } = setup(state);
  const media = { bg: null, upstreamClip: { start: 10, in: 0, duration: null }, upstreamMedia: { video: true, frames: 48, duration: 2 } };
  playback.follow({ shown: true, sources: ["/bg.mp4"], state, media });
  video.loaded(2);
  playback.toggle();
  clock.framesAhead(10);
  video.present(47 / FPS);
  assert.equal(playback.frame, 57);
  assert.equal(playback.backgroundShows, true);
  // Past the end of its media (frame 58), bg_color shows.
  video.present(48 / FPS);
  assert.equal(playback.frame, 58);
  assert.equal(playback.backgroundShows, false);
});

test("past the end of a background VIDEO with the default Clip range, the node shows bg_color, as the output", () => {
  const state = loadSceneState({ version: 2, timeline: { fps: FPS, length: 100 } });
  const { playback, follow, video, clock } = setup(state);
  follow(["/bg.mp4"]);
  video.loaded(2);
  playback.toggle();
  video.present(47 / FPS);
  assert.equal(playback.frame, 47);
  assert.equal(playback.backgroundShows, true);
  // The VIDEO ends; the clock runs on past it, where bg_color shows.
  video.ended = true;
  video.dispatchEvent(new Event("ended"));
  clock.framesAhead(2);
  assert.ok(playback.frame >= 48);
  assert.equal(playback.backgroundShows, false);
  // An upstream background with its Studio's default Clip range ends with its media too.
  playback.follow({ shown: true, sources: ["/bg.mp4"], state, media: { bg: null, upstreamMedia: { video: true, frames: 48, duration: 2 } } });
  assert.equal(playback.backgroundShows, false);
});
