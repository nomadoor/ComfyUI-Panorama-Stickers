import assert from "node:assert/strict";
import test from "node:test";

import { createVideoPlayback, frameAtTime, frameShownAt } from "../web_src/pano_video_playback.js";

const FPS = 24;

// A <video> that seeks, plays and presents frames only when the test says so.
class FakeVideo extends EventTarget {
  constructor({ duration = 2, seekableEnd = duration, readyState = 4, frameCallback = true } = {}) {
    super();
    this.duration = duration;
    this.seekableEnd = seekableEnd;
    this.readyState = readyState;
    this.paused = true;
    this.ended = false;
    this.seeks = [];
    this.plays = 0;
    this.listeners = 0;
    this.time = 0;
    this.loop = false;
    // The frame time the element would upload, or null while it has none: a seek in flight, or a
    // play() that has not presented a frame yet.
    this.picture = readyState >= 2 ? 0 : null;
    this.frameCallbacks = new Map();
    this.nextHandle = 1;
    if (frameCallback) {
      this.requestVideoFrameCallback = (callback) => {
        const handle = this.nextHandle++;
        this.frameCallbacks.set(handle, callback);
        return handle;
      };
      this.cancelVideoFrameCallback = (handle) => this.frameCallbacks.delete(handle);
    }
  }

  get seekable() {
    return { length: 1, end: () => this.seekableEnd };
  }

  get currentTime() {
    return this.time;
  }

  set currentTime(value) {
    this.seeks.push(value);
    this.time = value;
    this.ended = false;
    this.picture = null;
  }

  addEventListener(type, listener) {
    this.listeners += 1;
    super.addEventListener(type, listener);
  }

  removeEventListener(type, listener) {
    this.listeners -= 1;
    super.removeEventListener(type, listener);
  }

  // An ended VIDEO plays from its start.
  play() {
    this.plays += 1;
    if (this.ended) this.time = 0;
    this.ended = false;
    this.paused = false;
    this.picture = null;
    return Promise.resolve();
  }

  // A paused VIDEO shows the frame at its currentTime (PTS <= currentTime).
  pause() {
    this.paused = true;
    if (this.picture !== null) this.picture = Math.floor(this.time * FPS + 1e-3) / FPS;
  }

  // The seek lands, at `time` when the browser stops short of the target.
  land(time = this.time) {
    this.time = time;
    this.picture = time;
    this.dispatchEvent(new Event("seeked"));
  }

  // The playing VIDEO presents the frame at `mediaTime`, a little ahead of which its currentTime runs.
  present(mediaTime) {
    this.time = mediaTime + 0.01;
    this.picture = mediaTime;
    const callbacks = [...this.frameCallbacks.values()];
    this.frameCallbacks.clear();
    for (const callback of callbacks) callback(0, { mediaTime });
  }

  load(readyState = 4) {
    this.readyState = readyState;
    this.picture = this.time;
    this.dispatchEvent(new Event("loadeddata"));
  }

  end() {
    this.time = this.duration;
    this.picture = this.duration - 1 / FPS;
    this.paused = true;
    this.ended = true;
    this.dispatchEvent(new Event("pause"));
    this.dispatchEvent(new Event("ended"));
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

  advance(ms) {
    this.time += ms;
    const callbacks = [...this.callbacks.values()];
    this.callbacks.clear();
    for (const callback of callbacks) callback(this.time);
  }

  framesAhead(frames) {
    this.advance((frames / FPS) * 1000 + 1);
  }
}

function setup({ video = new FakeVideo(), span = 72, loop = true, source = true, place = null } = {}) {
  const clock = new FakeClock();
  const log = { frames: [], captures: 0, still: null, blank: 0 };
  // What the editor would draw: the VIDEO while the playback shows it, else the still.
  const shown = () => (playback.showsVideo ? video.picture : log.still);
  const check = () => {
    if (log.still !== null && shown() === null) log.blank += 1;
  };
  const playback = createVideoPlayback({
    video,
    clock,
    fps: () => FPS,
    span: () => (typeof span === "function" ? span() : span),
    loop: () => loop,
    place: () => place,
    onFrame: (frame) => {
      log.frames.push(frame);
      check();
    },
    onCapture: () => {
      log.captures += 1;
      log.still = video.picture;
    },
    onChange: check,
  });
  if (source) playback.setSource(true);
  return { playback, video, clock, log };
}

// Plays from the playhead's frame, landing the seek there if one is needed.
function startPlaying(ctx) {
  ctx.playback.play();
  if (ctx.playback.state === "seeking") ctx.video.land();
  assert.equal(ctx.playback.state, "playingVideo");
}

test("frameAtTime rounds a time to the nearest Timeline frame", () => {
  assert.equal(frameAtTime(0, 24), 0);
  assert.equal(frameAtTime(10 / 24, 24), 10);
  assert.equal(frameAtTime(10.49 / 24, 24), 10);
  assert.equal(frameAtTime(10.5 / 24, 24), 11);
});

test("a loaded source shows the playhead's frame as the still", () => {
  const { playback, log } = setup();
  assert.equal(playback.state, "idle");
  assert.equal(log.captures, 1);
  assert.equal(playback.showsVideo, false);
});

test("play from the start plays the VIDEO without seeking", () => {
  const { playback, video } = setup();
  playback.play();
  assert.equal(playback.state, "playingVideo");
  assert.deepEqual(video.seeks, []);
  assert.equal(video.plays, 1);
  // The still stays on screen until the VIDEO presents its first frame.
  assert.equal(playback.showsVideo, false);
  video.present(0);
  assert.equal(playback.showsVideo, true);
});

test("play from the middle seeks to the playhead first, then plays", () => {
  const { playback, video } = setup();
  playback.seek(12);
  video.land();
  playback.play();
  assert.equal(playback.state, "playingVideo");
  assert.deepEqual(video.seeks, [12 / FPS]);
  assert.equal(video.plays, 1);
});

test("play on the last frame starts over from the first", () => {
  const { playback, video } = setup();
  playback.seek(71);
  video.land();
  playback.play();
  video.land();
  assert.equal(playback.frame, 0);
  assert.equal(playback.state, "playingVideo");
});

test("play from past the VIDEO's end runs on the clock to the Timeline's end", () => {
  const { playback, video, clock } = setup();
  playback.seek(60);
  video.land();
  const seeks = video.seeks.length;
  playback.play();
  assert.equal(playback.state, "playingClock");
  assert.equal(video.seeks.length, seeks);
  assert.equal(video.plays, 0);
  clock.framesAhead(5);
  assert.equal(playback.frame, 65);
});

test("play before the VIDEO has data starts once it has, at the playhead", () => {
  const video = new FakeVideo({ readyState: 0 });
  const { playback } = setup({ video });
  playback.seek(12);
  playback.play();
  assert.equal(playback.state, "loading");
  assert.equal(playback.playing, true);
  video.load();
  assert.equal(playback.state, "seeking");
  video.land();
  assert.equal(playback.state, "playingVideo");
  assert.equal(video.plays, 1);
});

test("a stop before the VIDEO has data leaves the still at the playhead once it loads", () => {
  const video = new FakeVideo({ readyState: 0 });
  const { playback, log } = setup({ video });
  playback.seek(12);
  playback.play();
  playback.stop();
  assert.equal(playback.playing, false);
  video.load();
  video.land();
  assert.equal(playback.state, "idle");
  assert.equal(video.plays, 0);
  assert.equal(log.captures, 1);
});

test("a stop while the seek to play is in flight shows the frame instead of playing", () => {
  const { playback, video } = setup();
  playback.seek(12);
  video.land();
  video.time = 0;
  playback.play();
  assert.equal(playback.state, "seeking");
  playback.stop();
  assert.equal(playback.playing, false);
  video.land();
  assert.equal(playback.state, "idle");
  assert.equal(video.plays, 0);
});

test("a play whose seek would not move the VIDEO plays at once", () => {
  const { playback, video } = setup();
  video.time = 12 / FPS + 0.004;
  playback.seek(12);
  assert.equal(playback.state, "idle");
  playback.play();
  assert.equal(playback.state, "playingVideo");
  assert.deepEqual(video.seeks, []);
});

test("a seek waiting to resume playback that lands on the playhead resumes it", () => {
  const { playback, video } = setup();
  playback.seek(12);
  playback.play();
  assert.equal(playback.state, "seeking");
  // The seek lands on the frame already shown; nothing seeks again and playback goes on.
  video.land(12 / FPS - 0.001);
  assert.equal(playback.state, "playingVideo");
  assert.equal(video.seeks.length, 1);
});

test("seeks while one is in flight go to the latest frame, one at a time", () => {
  const { playback, video, log } = setup();
  playback.seek(10);
  playback.seek(20);
  playback.seek(30);
  assert.deepEqual(video.seeks, [10 / FPS]);
  assert.equal(playback.frame, 30);
  video.land();
  assert.deepEqual(video.seeks, [10 / FPS, 30 / FPS]);
  video.land();
  assert.equal(playback.state, "idle");
  assert.equal(log.captures, 2);
});

test("a seek past the seekable end goes to the end, and landing short of it twice is accepted", () => {
  const video = new FakeVideo({ duration: 2, seekableEnd: 1.95 });
  const { playback } = setup({ video });
  playback.seek(47);
  assert.deepEqual(video.seeks, [1.95]);
  video.land(1.95 - 1 / FPS);
  assert.deepEqual(video.seeks, [1.95, 1.95]);
  video.land(1.95 - 1 / FPS);
  assert.equal(playback.state, "idle");
  assert.equal(video.seeks.length, 2);
  assert.equal(playback.frame, 47);
});

test("an error while waiting for data stops playback instead of leaving it playing", () => {
  const video = new FakeVideo({ readyState: 0 });
  const { playback } = setup({ video });
  playback.play();
  video.fail();
  assert.equal(playback.state, "error");
  assert.equal(playback.playing, false);
  assert.equal(video.listeners, 0);
  // The playhead still plays, on the clock, until the source changes.
  playback.play();
  assert.equal(playback.state, "playingClock");
  playback.stop();
  playback.setSource(true);
  assert.equal(playback.state, "loading");
});

test("an error during a seek ends the seek", () => {
  const { playback, video } = setup();
  playback.seek(12);
  video.fail();
  assert.equal(playback.state, "error");
  assert.equal(video.listeners, 0);
  playback.seek(20);
  assert.equal(playback.state, "error");
  assert.equal(playback.frame, 20);
});

test("a new source while playing stops playback and shows the playhead's frame once it loads", () => {
  const { playback, video, log } = setup();
  startPlaying({ playback, video });
  video.present(10 / FPS);
  assert.equal(playback.frame, 10);
  video.readyState = 0;
  playback.setSource(true);
  assert.equal(playback.state, "loading");
  assert.equal(playback.playing, false);
  assert.equal(video.frameCallbacks.size, 0);
  video.load();
  video.land();
  assert.equal(playback.state, "idle");
  assert.equal(playback.frame, 10);
  assert.equal(log.captures, 2);
});

test("a removed source leaves the playhead on the clock", () => {
  const { playback, video } = setup();
  playback.setSource(false);
  assert.equal(playback.state, "idle");
  assert.equal(video.listeners, 0);
  playback.play();
  assert.equal(playback.state, "playingClock");
});

// The last frame callback can lag currentTime by frames (callbacks throttled for an element that is
// not composited, or stopped on a hidden page). Pause keeps the picture the paused VIDEO shows.
for (const lag of [0, 1, 2, 3]) {
  test(`stop with frame callbacks ${lag} frames behind keeps the paused picture and puts the playhead on it`, () => {
    const { playback, video, log } = setup();
    startPlaying({ playback, video });
    video.present(10 / FPS);
    video.time = (10 + lag + 0.4) / FPS;
    const seeks = video.seeks.length;
    const captures = log.captures;
    playback.stop();
    assert.equal(video.paused, true);
    assert.equal(playback.state, "idle");
    assert.equal(playback.frame, 10 + lag);
    assert.equal(video.seeks.length, seeks);
    assert.equal(log.captures, captures + 1);
    assert.equal(frameShownAt(log.still, FPS), playback.frame);
    assert.equal(log.frames.at(-1), playback.frame);
    assert.equal(video.listeners, 0);
    assert.equal(video.frameCallbacks.size, 0);
  });
}

test("frameShownAt takes the last frame at or before a time, and a time a hair before a frame as that frame", () => {
  assert.equal(frameShownAt(12.9 / 24, 24), 12);
  assert.equal(frameShownAt(13 / 24, 24), 13);
  assert.equal(frameShownAt(13 / 24 - 1e-9, 24), 13);
});

test("an ended VIDEO seeks to the playhead before it plays, even when it is on the same frame", () => {
  // The end, 1.97 s, rounds to frame 47, inside the VIDEO.
  const video = new FakeVideo({ duration: 1.97 });
  const { playback } = setup({ video });
  playback.seek(47);
  video.land();
  video.time = 1.97;
  video.ended = true;
  playback.play();
  assert.equal(playback.state, "seeking");
  assert.equal(video.seeks.at(-1), 47 / FPS);
  video.land();
  assert.equal(playback.state, "playingVideo");
  assert.equal(video.time, 47 / FPS);
  assert.equal(playback.frame, 47);
});

test("stop past the VIDEO's end keeps the clock's frame", () => {
  const { playback, video, clock } = setup();
  startPlaying({ playback, video });
  video.present(47 / FPS);
  video.end();
  assert.equal(playback.state, "playingClock");
  clock.framesAhead(10);
  assert.equal(playback.frame, 57);
  playback.stop();
  assert.equal(playback.frame, 57);
  assert.equal(playback.playing, false);
});

test("at the Timeline's end playback starts over with the VIDEO from its start", () => {
  const { playback, video, clock } = setup({ span: 60 });
  startPlaying({ playback, video });
  video.present(47 / FPS);
  video.end();
  clock.framesAhead(13);
  assert.equal(playback.frame, 0);
  assert.equal(playback.state, "seeking");
  assert.deepEqual(video.seeks.at(-1), 0);
  video.land();
  assert.equal(playback.state, "playingVideo");
  assert.equal(video.plays, 2);
});

test("across the loop with a VIDEO shorter than the Timeline, the frame before stays until the VIDEO presents again", () => {
  const { playback, video, clock, log } = setup({ span: 60 });
  startPlaying({ playback, video });
  video.present(0);
  video.present(47 / FPS);
  video.end();
  assert.equal(log.still, 47 / FPS);
  clock.framesAhead(13);
  assert.equal(playback.state, "seeking");
  video.land();
  assert.equal(playback.state, "playingVideo");
  assert.equal(playback.showsVideo, false);
  video.present(0);
  assert.equal(playback.showsVideo, true);
  assert.equal(log.blank, 0);
});

test("a VIDEO as long as the Timeline loops by itself, without a seek", () => {
  const { playback, video, log } = setup({ span: 48 });
  startPlaying({ playback, video });
  assert.equal(video.loop, true);
  video.present(0);
  video.present(47 / FPS);
  const seeks = video.seeks.length;
  // The VIDEO wraps around on its own.
  video.present(0);
  assert.equal(playback.frame, 0);
  assert.equal(playback.state, "playingVideo");
  assert.equal(playback.showsVideo, true);
  assert.equal(video.seeks.length, seeks);
  assert.equal(log.blank, 0);
  playback.stop();
  assert.equal(video.loop, false);
});

test("without loop playback stops on the Timeline's last frame", () => {
  const { playback, video, clock } = setup({ span: 48, loop: false });
  startPlaying({ playback, video });
  video.present(47 / FPS);
  video.end();
  clock.framesAhead(3);
  assert.equal(playback.frame, 47);
  assert.equal(playback.playing, false);
});

test("without a VIDEO the clock loops at the Timeline's end", () => {
  const { playback, clock } = setup({ video: null, source: false, span: 10 });
  playback.seek(8);
  playback.play();
  clock.framesAhead(1);
  assert.equal(playback.frame, 9);
  clock.framesAhead(1);
  assert.equal(playback.frame, 0);
  assert.equal(playback.state, "playingClock");
  clock.framesAhead(3);
  assert.equal(playback.frame, 3);
});

test("with requestVideoFrameCallback the playhead follows the presented frames' mediaTime", () => {
  const { playback, video, clock, log } = setup();
  startPlaying({ playback, video });
  video.present(10.4 / FPS);
  assert.equal(playback.frame, 10);
  clock.framesAhead(3);
  assert.equal(playback.frame, 10);
  assert.ok(log.frames.length > 0);
});

test("without requestVideoFrameCallback the playhead follows currentTime on each clock frame", () => {
  const video = new FakeVideo({ frameCallback: false });
  const { playback, clock } = setup({ video });
  startPlaying({ playback, video });
  video.time = 10.4 / FPS;
  clock.advance(16);
  assert.equal(playback.frame, 10);
  video.time = 25 / FPS;
  playback.stop();
  assert.equal(playback.frame, 25);
});

test("a VIDEO paused by something else stops playback; a refused play() too", async () => {
  const { playback, video } = setup();
  startPlaying({ playback, video });
  video.paused = true;
  video.dispatchEvent(new Event("pause"));
  assert.equal(playback.playing, false);

  video.play = () => Promise.reject(new Error("refused"));
  playback.play();
  await Promise.resolve();
  await Promise.resolve();
  assert.equal(playback.playing, false);
});

test("a seek during playback stops it at the sought frame", () => {
  const { playback, video } = setup();
  startPlaying({ playback, video });
  video.present(5 / FPS);
  playback.seek(30);
  assert.equal(video.paused, true);
  assert.equal(playback.playing, false);
  video.land();
  assert.equal(playback.state, "idle");
  assert.equal(playback.frame, 30);
});

test("dispose removes every listener and callback", () => {
  const { playback, video, clock } = setup();
  startPlaying({ playback, video });
  playback.dispose();
  assert.equal(video.listeners, 0);
  assert.equal(video.frameCallbacks.size, 0);
  assert.equal(clock.callbacks.size, 0);
});

test("the playhead stays on the Timeline, and a Timeline of one frame does not play", () => {
  const { playback } = setup({ span: 10, source: false });
  playback.seek(25);
  assert.equal(playback.frame, 9, "a seek past the end stops on the last frame");
  const still = setup({ span: 1, source: false });
  still.playback.play();
  assert.equal(still.playback.playing, false);
  assert.equal(still.clock.callbacks.size, 0);
  still.playback.seek(5);
  assert.equal(still.playback.frame, 0);
});

test("a Timeline cut to one frame while it plays stops on frame 0 instead of starting over", () => {
  let span = 10;
  const { playback, clock } = setup({ span: () => span, source: false });
  playback.play();
  clock.framesAhead(3);
  assert.equal(playback.playing, true);
  span = 1;
  clock.framesAhead(1);
  assert.equal(playback.playing, false);
  assert.equal(playback.frame, 0);
  assert.equal(clock.callbacks.size, 0);
});

// The background's Clip range places the VIDEO on the Timeline (backgroundPlace): its first frame at `origin`,
// shown from `start` until `end`.
test("a placed VIDEO shows its time at the playhead and nothing outside its place", () => {
  // start 24, in 12: the VIDEO's first frame is at Timeline frame 12, shown from frame 24 (its time 0.5 s).
  const { playback, video } = setup({ place: { origin: 12, start: 24, end: 60 } });
  assert.equal(playback.state, "idle");
  // Before the place, nothing is sought: the still is left as it is (the editor shows bg_color).
  playback.seek(10);
  assert.equal(playback.state, "idle");
  assert.deepEqual(video.seeks, []);
  playback.seek(30);
  assert.equal(playback.state, "seeking");
  assert.deepEqual(video.seeks, [18 / FPS]);
  video.land();
  playback.seek(60);
  assert.equal(playback.state, "idle");
  assert.deepEqual(video.seeks, [18 / FPS]);
});

test("a placed VIDEO starts where its place starts and hands over to the clock where it ends", () => {
  const { playback, video, clock } = setup({ place: { origin: 12, start: 24, end: 36 } });
  playback.play();
  // The clock runs until the place, the VIDEO waiting on its first shown time.
  assert.equal(playback.state, "playingClock");
  assert.deepEqual(video.seeks, [12 / FPS]);
  video.land();
  clock.framesAhead(24);
  assert.equal(playback.frame, 24);
  // It plays from there without another seek, and its frames set the playhead.
  assert.equal(playback.state, "playingVideo");
  assert.deepEqual(video.seeks, [12 / FPS]);
  assert.equal(video.plays, 1);
  video.present(20 / FPS);
  assert.equal(playback.frame, 32);
  assert.equal(video.loop, false);
  // At the end of its place the VIDEO pauses and the clock goes on.
  video.present(24 / FPS);
  assert.equal(playback.frame, 36);
  assert.equal(playback.state, "playingClock");
  assert.equal(video.paused, true);
  clock.framesAhead(4);
  assert.equal(playback.frame, 40);
});

test("a placed VIDEO stops on the frame its paused time shows", () => {
  const { playback, video } = setup({ place: { origin: -6, start: 0, end: Infinity } });
  startPlaying({ playback, video });
  // From frame 0 the VIDEO plays from 0.25 s, its head trimmed by 6 frames.
  assert.deepEqual(video.seeks, [6 / FPS]);
  video.present(16 / FPS);
  assert.equal(playback.frame, 10);
  video.time = 20 / FPS;
  playback.stop();
  assert.equal(playback.frame, 14);
  assert.equal(playback.state, "idle");
});

test("a placed VIDEO runs on the clock past its own end", () => {
  // A 2 s VIDEO from frame 24 ends at frame 72; the Timeline is 100 frames long.
  const { playback, video, clock } = setup({ span: 100, place: { origin: 24, start: 24, end: Infinity } });
  playback.seek(70);
  video.land();
  playback.play();
  assert.equal(playback.state, "playingVideo");
  video.end();
  assert.equal(playback.state, "playingClock");
  clock.framesAhead(10);
  assert.equal(playback.frame, 80);
});

// A <video> that, as a browser does, has no current frame while a seek is in flight (readyState HAVE_METADATA,
// `seeking` set) until it lands.
class SeekingVideo extends FakeVideo {
  constructor(options) {
    super(options);
    this.seeking = false;
  }

  set currentTime(value) {
    super.currentTime = value;
    this.seeking = true;
    this.readyState = 1;
  }

  get currentTime() {
    return super.currentTime;
  }

  land(time = this.time) {
    this.seeking = false;
    this.readyState = 4;
    super.land(time);
  }
}

test("a placed VIDEO still seeking to its start when the clock reaches it plays once the seek lands", () => {
  const video = new SeekingVideo();
  const { playback, clock } = setup({ video, place: { origin: 12, start: 24, end: 60 } });
  playback.play();
  // The clock waits the VIDEO on its first shown time; that seek is still in flight at frame 24.
  assert.equal(video.seeking, true);
  clock.framesAhead(24);
  assert.equal(playback.frame, 24);
  assert.equal(playback.state, "seeking");
  assert.equal(playback.playing, true);
  // It waits for that seek instead of sending another, and plays when it lands.
  assert.deepEqual(video.seeks, [12 / FPS]);
  video.land();
  assert.equal(playback.state, "playingVideo");
  assert.equal(video.plays, 1);
});

test("a seek lands on the VIDEO's time for the place at its landing, not a time of the place before", () => {
  const video = new SeekingVideo();
  const place = { origin: 12, start: 0, end: Infinity };
  const { playback } = setup({ video, place });
  video.land();
  playback.seek(30);
  // It lands short, so the same target is sought once more.
  video.land(17 / FPS);
  assert.deepEqual(video.seeks.slice(-1), [18 / FPS]);
  // The Clip range moves while that seek is in flight: the same frame now shows another time.
  place.origin = 14;
  playback.seek(30);
  video.land(18 / FPS);
  assert.equal(playback.state, "seeking");
  assert.deepEqual(video.seeks.slice(-1), [16 / FPS]);
  video.land();
  assert.equal(playback.state, "idle");
  assert.equal(video.time, 16 / FPS);
});
