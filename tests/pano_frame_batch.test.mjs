import assert from "node:assert/strict";
import test from "node:test";

import { createFrameBatch } from "../web_src/pano_frame_batch.js";

// requestAnimationFrame, replaced: frames run only when the test says so.
function fakeFrames() {
  const callbacks = new Map();
  let next = 1;
  return {
    requested: 0,
    cancelled: 0,
    requestFrame(callback) {
      this.requested += 1;
      callbacks.set(next, callback);
      return next++;
    },
    cancelFrame(id) {
      this.cancelled += 1;
      callbacks.delete(id);
    },
    runFrame() {
      const due = [...callbacks.values()];
      callbacks.clear();
      for (const callback of due) callback();
    },
  };
}

// A Timeline drag as the editor runs it: each move changes the state at once and asks for the
// Timeline and the view; the end cancels what is pending and refreshes everything once.
function timelineDrag(frames) {
  const counts = { timeline: 0, view: 0, end: 0 };
  const batch = createFrameBatch({
    requestFrame: (callback) => frames.requestFrame(callback),
    cancelFrame: (id) => frames.cancelFrame(id),
    tasks: { timeline: () => (counts.timeline += 1), view: () => (counts.view += 1) },
  });
  const state = { start: 0 };
  return {
    counts,
    state,
    move(delta) {
      state.start = delta;
      batch.request("timeline");
      batch.request("view");
    },
    end() {
      batch.cancel();
      counts.end += 1;
    },
  };
}

test("100 drag moves in one frame refresh once in that frame, and the end once", () => {
  const frames = fakeFrames();
  const drag = timelineDrag(frames);
  for (let delta = 1; delta <= 100; delta += 1) drag.move(delta);
  assert.equal(drag.state.start, 100, "the state follows each move at once");
  assert.equal(frames.requested, 1);
  assert.deepEqual(drag.counts, { timeline: 0, view: 0, end: 0 });
  frames.runFrame();
  assert.deepEqual(drag.counts, { timeline: 1, view: 1, end: 0 });

  // Moves spread over frames: at most one refresh per frame.
  for (let frame = 0; frame < 10; frame += 1) {
    for (let move = 0; move < 10; move += 1) drag.move(move);
    frames.runFrame();
  }
  assert.deepEqual(drag.counts, { timeline: 11, view: 11, end: 0 });
  frames.runFrame();
  assert.deepEqual(drag.counts, { timeline: 11, view: 11, end: 0 }, "a frame without moves does nothing");

  // The end drops the refresh still pending and does its own, once.
  for (let move = 0; move < 100; move += 1) drag.move(move);
  drag.end();
  frames.runFrame();
  assert.deepEqual(drag.counts, { timeline: 11, view: 11, end: 1 });
  assert.equal(frames.cancelled, 1);
});

test("a frame runs only the tasks asked for, in the order of the tasks", () => {
  const frames = fakeFrames();
  const ran = [];
  const batch = createFrameBatch({
    requestFrame: (callback) => frames.requestFrame(callback),
    cancelFrame: (id) => frames.cancelFrame(id),
    tasks: { seek: () => ran.push("seek"), timeline: () => ran.push("timeline"), view: () => ran.push("view") },
  });
  batch.request("view");
  batch.request("seek");
  batch.request("view");
  frames.runFrame();
  assert.deepEqual(ran, ["seek", "view"]);
});
