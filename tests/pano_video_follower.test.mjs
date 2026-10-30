import assert from "node:assert/strict";
import test from "node:test";

import { createFrameSequence, portMediaFrames, portMediaTime } from "../web_src/pano_port_media.js";
import { createVideoFollower, createVideoPlayback } from "../web_src/pano_video_playback.js";

const FPS = 24;
const VIDEO_META = { kind: "VIDEO", fps: 30, frames: 60, duration: 2 };
const IMAGE_META = { kind: "IMAGE", fps: 24, frames: 10, duration: 10 / 24 };
const STILL = { still: true };
const FIRST = { first: true };

// A <video> that loads, seeks and plays only when the test says so.
class FakeVideo extends EventTarget {
  constructor() {
    super();
    this.attributes = new Map();
    this.readyState = 0;
    this.paused = true;
    this.ended = false;
    this.muted = false;
    this.time = 0;
    this.seeks = [];
    this.plays = 0;
    this.listeners = 0;
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

  load() {
    this.readyState = 0;
    this.time = 0;
    this.paused = true;
  }

  play() {
    this.plays += 1;
    this.paused = false;
    return Promise.resolve();
  }

  pause() {
    this.paused = true;
  }

  loaded() {
    this.readyState = 4;
    this.dispatchEvent(new Event("loadeddata"));
  }

  land() {
    this.dispatchEvent(new Event("seeked"));
  }

  // Playback has started and the picture is on screen.
  started() {
    this.dispatchEvent(new Event("playing"));
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

// The editor's wiring without a background VIDEO (the clock plays the Timeline): every frame and
// change of the playback draws, and each draw has the follower follow the playhead and pick the
// port Sticker's picture.
function setup({ clip = { start: 0, in: 0, duration: null }, meta = VIDEO_META, span = 96 } = {}) {
  const video = new FakeVideo();
  const clock = new FakeClock();
  const log = { captures: 0, pictures: [] };
  let follower = null;
  let playback = null;
  const draw = () => {
    if (!follower || !playback) return;
    const time = portMediaTime(clip, playback.frame, FPS, meta);
    follower.follow({ src: "/sticker.mp4", time, playing: playback.advancing, fps: FPS });
    log.pictures.push(follower.picture(STILL, FIRST));
  };
  follower = createVideoFollower({
    video,
    onCapture: () => {
      log.captures += 1;
    },
    onChange: draw,
  });
  playback = createVideoPlayback({
    video: null,
    clock,
    fps: () => FPS,
    span: () => span,
    loop: () => true,
    onFrame: draw,
    onCapture: () => {},
    onChange: draw,
  });
  playback.setSource(false);
  const picture = () => {
    draw();
    return log.pictures.at(-1);
  };
  return { video, clock, log, follower, playback, picture, clip };
}

test("a VIDEO shows its frame at the time since start - in of the Clip range, and nothing outside it", () => {
  const clip = { start: 10, in: 4, duration: 30 };
  // Frame 10 shows 4 frames into the media; a hair past the PTS counts as it.
  assert.ok(Math.abs(portMediaTime(clip, 10, FPS, VIDEO_META) - 4 / FPS) < 1e-4);
  assert.ok(portMediaTime(clip, 10, FPS, VIDEO_META) > 4 / FPS);
  assert.equal(portMediaTime(clip, 9, FPS, VIDEO_META), null);
  assert.equal(portMediaTime(clip, 40, FPS, VIDEO_META), null);
  // Past the media's end (2 s from start - in = frame 6), even inside an open Clip range.
  const open = { start: 10, in: 4, duration: null };
  assert.notEqual(portMediaTime(open, 53, FPS, VIDEO_META), null);
  assert.equal(portMediaTime(open, 54, FPS, VIDEO_META), null);
  assert.equal(portMediaFrames(open, FPS, VIDEO_META), 54);
  assert.equal(portMediaFrames(clip, FPS, VIDEO_META), 0);
});

test("an IMAGE batch shows its nearest image at the Timeline fps, sought in the middle of its MP4 frame", () => {
  const clip = { start: 2, in: 1, duration: null };
  // Frame 2 is image 1; its frame in a 12 fps MP4 (encoded at an earlier Timeline fps) is 1/12 to 2/12.
  const meta = { ...IMAGE_META, fps: 12 };
  assert.equal(portMediaTime(clip, 2, FPS, meta), 1.5 / 12);
  assert.equal(portMediaTime(clip, 2.4, FPS, meta), 1.5 / 12);
  assert.equal(portMediaTime(clip, 2.6, FPS, meta), 2.5 / 12);
  assert.equal(portMediaTime(clip, 10, FPS, meta), 9.5 / 12);
  assert.equal(portMediaTime(clip, 11, FPS, meta), null);
  assert.equal(portMediaFrames(clip, FPS, meta), 11);
});

test("at rest the follower seeks to the playhead's frame and shows the still once it lands", () => {
  const { video, log, playback, picture } = setup();
  assert.equal(picture(), FIRST);
  video.loaded();
  assert.deepEqual(video.seeks.length, 1);
  assert.equal(video.muted, true);
  video.land();
  assert.equal(log.captures, 1);
  assert.equal(picture(), STILL);

  // A seek keeps the old still on screen until the new frame lands.
  playback.seek(20);
  assert.equal(picture(), STILL);
  assert.ok(Math.abs(video.seeks.at(-1) - 20 / FPS) < 1e-4);
  // Seeks while one is in flight go to the latest frame once it lands, and only then capture.
  playback.seek(30);
  playback.seek(40);
  assert.equal(video.seeks.length, 2);
  video.land();
  assert.equal(log.captures, 1);
  assert.ok(Math.abs(video.seeks.at(-1) - 40 / FPS) < 1e-4);
  video.land();
  assert.equal(log.captures, 2);
  // Drawing again at the same frame does not seek.
  picture();
  assert.equal(video.seeks.length, 3);
});

test("the follower plays with the playhead, resyncs past the drift and stops on the frame shown", async () => {
  const { video, clock, log, playback, picture } = setup();
  video.loaded();
  video.land();
  playback.play();
  assert.equal(video.paused, false);
  assert.equal(video.plays, 1);
  // Until the VIDEO presents, the still stays.
  assert.equal(picture(), STILL);
  video.started();
  assert.equal(picture(), video);

  // The VIDEO keeps pace: no seek while it is within the drift.
  const seeks = video.seeks.length;
  video.time = 12 / FPS;
  clock.framesAhead(12);
  assert.equal(playback.frame, 12);
  assert.equal(video.seeks.length, seeks);
  // It fell behind by two frames: one seek to the playhead, and it plays on.
  video.time = 22 / FPS;
  clock.framesAhead(12);
  assert.equal(video.seeks.length, seeks + 1);
  assert.ok(Math.abs(video.seeks.at(-1) - playback.frame / FPS) < 1e-4);
  assert.equal(video.paused, false);
  video.land();
  assert.equal(video.paused, false);

  // Stop: the paused picture is captured at once, then the playhead's frame is sought and captured.
  const captures = log.captures;
  video.time += 0.3 / FPS;
  playback.stop();
  assert.equal(video.paused, true);
  assert.equal(log.captures, captures + 1);
  assert.equal(picture(), STILL);
  assert.ok(Math.abs(video.seeks.at(-1) - playback.frame / FPS) < 1e-4);
  video.land();
  assert.equal(log.captures, captures + 2);
  await Promise.resolve();
});

test("the follower is hidden and paused outside the Clip range and the media, and plays again inside", () => {
  const { video, clock, playback, picture } = setup({ clip: { start: 24, in: 0, duration: 24 }, span: 96 });
  video.loaded();
  assert.equal(picture(), null);
  assert.equal(video.seeks.length, 0);
  playback.play();
  clock.framesAhead(30);
  assert.equal(playback.frame, 30);
  picture();
  assert.equal(video.paused, false);
  assert.ok(Math.abs(video.seeks.at(-1) - 6 / FPS) < 1e-4);
  video.land();
  video.started();
  assert.equal(picture(), video);
  clock.framesAhead(20);
  assert.equal(picture(), null);
  assert.equal(video.paused, true);
});

test("the follower starts over with the Timeline's loop", () => {
  const { video, clock, playback, picture } = setup({ span: 48 });
  video.loaded();
  video.land();
  playback.play();
  video.started();
  clock.framesAhead(40);
  video.land();
  assert.ok(Math.abs(video.time - 40 / FPS) < 1e-4);
  clock.framesAhead(10);
  assert.equal(playback.frame < 10, true);
  picture();
  assert.ok(video.seeks.at(-1) < 10 / FPS);
  assert.equal(video.paused, false);
});

test("a follower plays with a background VIDEO only once the playhead moves", () => {
  const video = new FakeVideo();
  const background = new FakeVideo();
  background.duration = 4;
  background.seekable = { length: 1, end: () => 4 };
  const clip = { start: 0, in: 0, duration: null };
  let playback = null;
  const follower = createVideoFollower({ video, onCapture: () => {}, onChange: () => {} });
  const draw = () => {
    if (playback) follower.follow({ src: "/s.mp4", time: portMediaTime(clip, playback.frame, FPS, VIDEO_META), playing: playback.advancing, fps: FPS });
  };
  playback = createVideoPlayback({
    video: background,
    clock: new FakeClock(),
    fps: () => FPS,
    span: () => 96,
    loop: () => true,
    onFrame: draw,
    onCapture: () => {},
    onChange: draw,
  });
  background.loaded();
  playback.setSource(true);
  video.loaded();
  playback.seek(12);
  playback.play();
  // The background is still seeking: the playhead waits, and so does the follower.
  assert.equal(playback.state, "seeking");
  draw();
  assert.equal(video.paused, true);
  // Its first seek lands on the old frame, so it seeks to the playhead's.
  video.land();
  assert.ok(Math.abs(video.seeks.at(-1) - 12 / FPS) < 1e-4);
  background.land();
  assert.equal(playback.state, "playingVideo");
  draw();
  assert.equal(video.paused, true);
  // It plays from the playhead once there.
  video.land();
  assert.equal(video.paused, false);
  assert.equal(video.seeks.length, 2);
  playback.stop();
  draw();
  assert.equal(video.paused, true);
});

test("a new source drops the still and a failed one shows the first frame", () => {
  const video = new FakeVideo();
  const follower = createVideoFollower({ video, onCapture: () => {}, onChange: () => {} });
  follower.follow({ src: "/sticker.mp4", time: 0.5, playing: false, fps: FPS });
  video.loaded();
  video.land();
  assert.equal(follower.picture(STILL, FIRST), STILL);
  follower.follow({ src: "/other.mp4", time: 0.5, playing: false, fps: FPS });
  assert.equal(video.src, "/other.mp4");
  assert.equal(follower.picture(STILL, FIRST), FIRST);
  video.dispatchEvent(new Event("error"));
  assert.equal(follower.picture(STILL, FIRST), FIRST);
  follower.dispose();
  assert.equal(video.src, "");
  assert.equal(video.listeners, 0);
});

test("near the end of a VIDEO shorter than its meta, the follower stays on its last frame without seeking", () => {
  const video = new FakeVideo();
  const follower = createVideoFollower({ video, onCapture: () => {}, onChange: () => {} });
  follower.follow({ src: "/s.mp4", time: 1.9, playing: false, fps: FPS });
  video.loaded();
  video.duration = 1.95;
  video.land();
  follower.follow({ src: "/s.mp4", time: 1.9, playing: true, fps: FPS });
  assert.equal(video.paused, false);
  // The VIDEO ends at 1.95 s; the playhead goes on to 2.1 s, still inside the meta's duration.
  video.time = 1.95;
  video.ended = true;
  video.paused = true;
  const seeks = video.seeks.length;
  for (const time of [1.98, 2.02, 2.06, 2.1]) follower.follow({ src: "/s.mp4", time, playing: true, fps: FPS });
  assert.equal(video.seeks.length, seeks);
});

test("a VIDEO that has data again after a drop goes on without a new follow()", () => {
  const video = new FakeVideo();
  let captures = 0;
  const follower = createVideoFollower({ video, onCapture: () => { captures += 1; }, onChange: () => {} });
  video.readyState = 1;
  follower.follow({ src: "/s.mp4", time: 0.5, playing: false, fps: FPS });
  video.readyState = 4;
  video.dispatchEvent(new Event("canplay"));
  assert.deepEqual(video.seeks, [0.5]);
  video.land();
  assert.equal(captures, 1);
});

test("an RGBA IMAGE batch shows the PNG of the playhead's image once loaded, loading a few ahead", () => {
  const created = [];
  const sequence = createFrameSequence({
    createImage: (src) => {
      const image = { src, complete: false, naturalWidth: 0 };
      created.push(image);
      return image;
    },
    onLoad: () => {},
  });
  const urls = Array.from({ length: 10 }, (_, index) => `/f${index}.png`);
  const meta = { ...IMAGE_META, frames: 10 };
  const clip = { start: 0, in: 0, duration: null };
  const at = (frame) => sequence.picture(urls, portMediaTime(clip, frame, FPS, meta), meta, FIRST);
  assert.equal(at(2), FIRST);
  assert.deepEqual(created.map((image) => image.src), ["/f2.png", "/f3.png", "/f4.png", "/f5.png", "/f6.png"]);
  const loaded = (src) => Object.assign(created.find((image) => image.src === src), { complete: true, naturalWidth: 8 });
  loaded("/f2.png");
  assert.equal(at(2).src, "/f2.png");
  // The next image is not loaded yet: the one before stays.
  assert.equal(at(3).src, "/f2.png");
  loaded("/f3.png");
  assert.equal(at(3).src, "/f3.png");
  assert.equal(at(-1), null);
  assert.equal(at(12), null);
  // Other PNGs (another run) start over.
  assert.equal(sequence.picture(urls.map((url) => `${url}?2`), 3 / FPS + 0.5 / FPS, meta, FIRST), FIRST);
});
