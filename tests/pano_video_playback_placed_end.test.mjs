import assert from "node:assert/strict";
import test from "node:test";

import { createVideoPlayback } from "../web_src/pano_video_playback.js";

// A browser as Chromium runs one: 60 Hz rendering frames, in each the VIDEO frame callbacks and then the animation
// frames, all with the frame's start time `ts`, while performance.now() (clock.now) is already ts + `lag` ms. Media
// events run between frames. A VIDEO's natural end is timeupdate, pause (ended true), ended.
function play({ place, span = 48, fps = 24, frames = 24, ms = 4000, lag = 4 }) {
  let now = 0;
  const tasks = [];
  const raf = new Map(); let rafId = 1;
  const vfc = new Map(); let vfcId = 1;
  const listeners = {};
  const fire = (type) => (listeners[type] || []).slice().forEach((f) => f());
  const queue = (type) => tasks.push(() => fire(type));
  const duration = frames / fps;
  let playStartTs = null, playStartTime = 0;
  const video = {
    currentTime: 0, duration, readyState: 4, paused: true, ended: false, seeking: false, loop: false,
    seekable: { length: 1, end: () => duration },
    addEventListener: (t, f) => (listeners[t] ||= []).push(f),
    removeEventListener: (t, f) => { listeners[t] = (listeners[t] || []).filter((x) => x !== f); },
    play() {
      if (this.ended) setTime(0); // HTML: play() on an ended media seeks to the start
      this.paused = false; playStartTs = null; playStartTime = this.currentTime; queue("play"); return Promise.resolve();
    },
    pause() { if (!this.paused) { this.paused = true; queue("pause"); } },
    requestVideoFrameCallback(cb) { const id = vfcId++; vfc.set(id, cb); return id; },
    cancelVideoFrameCallback(id) { vfc.delete(id); },
  };
  function setTime(t) { video._t = t; video.ended = false; video.seeking = true; tasks.push(() => { video.seeking = false; video.ended = video.currentTime >= duration; fire("seeked"); }); playStartTs = null; playStartTime = t; }
  Object.defineProperty(video, "currentTime", { get() { return this._t ?? 0; }, set(t) { setTime(t); }, configurable: true });
  const log = [];
  let frame = -1;
  const pb = createVideoPlayback({
    video, fps: () => fps, span: () => span, loop: () => true, place: () => place,
    clock: { now: () => now, requestFrame: (cb) => { const id = rafId++; raf.set(id, cb); return id; }, cancelFrame: (id) => raf.delete(id) },
    onFrame: (f) => { if (f < frame && !(f === 0 && frame === span - 1)) log.push(`t=${now.toFixed(0)} back ${frame}->${f} [${pb?.state}]`); frame = f; },
    onCapture: () => {}, onChange: () => {},
  });
  pb.setSource(true);
  pb.play();
  const visited = new Set();
  for (let ts = 0; ts < ms; ts += 1000 / 60) {
    // tasks between frames
    now = ts - 1000 / 60 + lag;
    while (tasks.length) tasks.shift()();
    // media pipeline: advance the playing video
    if (!video.paused && !video.seeking) {
      if (playStartTs === null) playStartTs = ts;
      const t = playStartTime + (ts - playStartTs) / 1000;
      if (t >= duration) {
        video._t = duration; video.ended = true; video.paused = true;
        tasks.push(() => fire("timeupdate"), () => fire("pause"), () => fire("ended"));
      } else {
        video._t = t;
        const presented = Math.floor(t * fps + 1e-6) / fps; // mediaTime of the frame on screen
        const due = [...vfc]; vfc.clear();
        now = ts + lag;
        for (const [, cb] of due) cb(ts, { mediaTime: presented });
      }
    }
    now = ts + lag;
    const due = [...raf]; raf.clear();
    for (const [, cb] of due) cb(ts);
    visited.add(frame);
  }
  return { max: Math.max(...visited), backward: log.length };
}


for (const [label, place] of [
  ["a background shifted later on the Timeline", { origin: 12, start: 12, end: Infinity }],
  ["a background trimmed at its end", { origin: 0, start: 0, end: 12 }],
  ["a background placed past its media end", { origin: 0, start: 0, end: 30 }],
  ["a background trimmed at its head and end", { origin: -6, start: 0, end: 12 }],
  ["the default background", null],
]) {
  test(`${label} plays through the Timeline and loops, never stepping back`, () => {
    for (const lag of [0, 4]) {
      const { max, backward } = play({ place, lag });
      assert.equal(max, 47, `lag ${lag}: the playhead reaches the Timeline's end`);
      assert.equal(backward, 0, `lag ${lag}: the playhead never steps back but at the loop`);
    }
  });
}
