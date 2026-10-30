import assert from "node:assert/strict";
import test from "node:test";

import { DRAW_REASON, createFrameScheduler } from "../web_src/pano_frame_scheduler.js";
import { readEditorSource } from "./editor_source.mjs";

// A fake browser frame clock: runFrame() runs the frames asked for so far, as one animation frame.
function createFrames() {
  const queued = new Map();
  let next = 1;
  let now = 0;
  return {
    requestAnimationFrame(callback) {
      const id = next++;
      queued.set(id, callback);
      return id;
    },
    cancelAnimationFrame(id) {
      queued.delete(id);
    },
    get pending() {
      return queued.size;
    },
    runFrame() {
      now += 16;
      const due = [...queued.values()];
      queued.clear();
      due.forEach((callback) => callback(now));
    },
  };
}

function setup({ animating = () => false } = {}) {
  const frames = createFrames();
  const draws = [];
  const scheduler = createFrameScheduler({
    requestAnimationFrame: frames.requestAnimationFrame,
    cancelAnimationFrame: frames.cancelAnimationFrame,
    draw: (ts, reasons) => draws.push([...reasons].sort()),
    animating,
  });
  return { frames, draws, scheduler };
}

test("an idle editor asks for no animation frame", () => {
  const { frames, draws } = setup();
  assert.equal(frames.pending, 0);
  frames.runFrame();
  assert.deepEqual(draws, []);
});

test("flush runs the pending frame now, with its reasons and callbacks, and the animation frame no longer runs it", () => {
  const { frames, draws, scheduler } = setup();
  const ran = [];
  scheduler.requestFrame((ts) => ran.push(ts));
  scheduler.requestDraw(DRAW_REASON.RESIZE);
  scheduler.flush(5);
  assert.deepEqual(ran, [5]);
  assert.deepEqual(draws, [[DRAW_REASON.RESIZE]]);
  assert.equal(frames.pending, 0);
  assert.equal(scheduler.pending, false);
  frames.runFrame();
  assert.equal(draws.length, 1);
  // With nothing pending, flush draws nothing.
  scheduler.flush(6);
  assert.equal(draws.length, 1);
});

test("flush inside a frame leaves the request to the frame's end", () => {
  const frames = createFrames();
  const draws = [];
  let scheduler = null;
  scheduler = createFrameScheduler({
    requestAnimationFrame: frames.requestAnimationFrame,
    cancelAnimationFrame: frames.cancelAnimationFrame,
    draw: (ts, reasons) => {
      draws.push([...reasons].sort());
      if (draws.length === 1) {
        scheduler.requestDraw(DRAW_REASON.RESIZE);
        scheduler.flush(ts);
      }
    },
    animating: () => false,
  });
  scheduler.requestDraw(DRAW_REASON.STATE);
  frames.runFrame();
  assert.equal(draws.length, 1);
  assert.equal(frames.pending, 1);
  frames.runFrame();
  assert.deepEqual(draws, [[DRAW_REASON.STATE], [DRAW_REASON.RESIZE]]);
});

test("requestDraw draws the next frame once, with every reason asked for, and then stops", () => {
  const { frames, draws, scheduler } = setup();
  scheduler.requestDraw(DRAW_REASON.STATE);
  scheduler.requestDraw(DRAW_REASON.OVERLAY);
  scheduler.requestDraw(DRAW_REASON.STATE);
  assert.equal(frames.pending, 1);
  frames.runFrame();
  assert.deepEqual(draws, [[DRAW_REASON.OVERLAY, DRAW_REASON.STATE]]);
  assert.equal(frames.pending, 0);
  frames.runFrame();
  assert.equal(draws.length, 1);
});

test("an unknown reason is refused", () => {
  const { scheduler } = setup();
  assert.throws(() => scheduler.requestDraw("everything"), /Unknown draw reason/);
});

test("frames keep coming only while something animates", () => {
  let remaining = 3;
  const { frames, draws, scheduler } = setup({ animating: () => remaining > 0 });
  scheduler.requestDraw(DRAW_REASON.VIEW);
  for (let i = 0; i < 10; i += 1) {
    frames.runFrame();
    remaining -= 1;
  }
  // The asked frame, then the frames while it animated; then nothing is asked for.
  assert.deepEqual(draws, [[DRAW_REASON.VIEW], [], []]);
  assert.equal(frames.pending, 0);
});

test("an animation that starts without a draw request starts the frames with wake()", () => {
  let moving = false;
  const { frames, draws, scheduler } = setup({ animating: () => moving });
  moving = true;
  scheduler.wake();
  frames.runFrame();
  frames.runFrame();
  moving = false;
  frames.runFrame();
  frames.runFrame();
  assert.equal(draws.length, 2);
  assert.equal(frames.pending, 0);
});

test("requestFrame callbacks run first in the frame, so what they ask for draws in the same frame", () => {
  const { frames, draws, scheduler } = setup();
  const order = [];
  scheduler.requestFrame((ts) => {
    order.push(["callback", ts]);
    scheduler.requestDraw(DRAW_REASON.STATE);
  });
  frames.runFrame();
  assert.deepEqual(order, [["callback", 16]]);
  assert.deepEqual(draws, [[DRAW_REASON.STATE]]);
  assert.equal(frames.pending, 0);
});

test("a callback asked for inside a frame runs in the next one, and cancelFrame drops it", () => {
  const { frames, scheduler } = setup();
  const ran = [];
  scheduler.requestFrame(() => {
    ran.push("first");
    scheduler.requestFrame(() => ran.push("second"));
  });
  const dropped = scheduler.requestFrame(() => ran.push("dropped"));
  scheduler.cancelFrame(dropped);
  frames.runFrame();
  assert.deepEqual(ran, ["first"]);
  frames.runFrame();
  assert.deepEqual(ran, ["first", "second"]);
  assert.equal(frames.pending, 0);
});

test("a draw that asks for another draw gets one more frame, not a loop", () => {
  const frames = createFrames();
  let draws = 0;
  let scheduler = null;
  scheduler = createFrameScheduler({
    requestAnimationFrame: frames.requestAnimationFrame,
    cancelAnimationFrame: frames.cancelAnimationFrame,
    draw: () => {
      draws += 1;
      if (draws === 1) scheduler.requestDraw(DRAW_REASON.MEDIA);
    },
    animating: () => false,
  });
  scheduler.requestDraw(DRAW_REASON.STATE);
  for (let i = 0; i < 5; i += 1) frames.runFrame();
  assert.equal(draws, 2);
  assert.equal(frames.pending, 0);
});

test("stop() cancels the pending frame and ignores later requests", () => {
  const { frames, draws, scheduler } = setup({ animating: () => true });
  scheduler.requestDraw(DRAW_REASON.STATE);
  scheduler.stop();
  assert.equal(frames.pending, 0);
  scheduler.requestDraw(DRAW_REASON.STATE);
  scheduler.requestFrame(() => draws.push("callback"));
  frames.runFrame();
  assert.deepEqual(draws, []);
});

test("a callback or a draw that throws is reported, and the frame and the next ones go on", () => {
  const frames = createFrames();
  const errors = [];
  const ran = [];
  let moving = true;
  const scheduler = createFrameScheduler({
    requestAnimationFrame: frames.requestAnimationFrame,
    cancelAnimationFrame: frames.cancelAnimationFrame,
    draw: (ts, reasons) => {
      ran.push(["draw", [...reasons]]);
      if (reasons.has(DRAW_REASON.MEDIA)) throw new Error("draw");
    },
    animating: () => moving,
    onError: (error) => errors.push(error.message),
  });
  scheduler.requestFrame(() => { throw new Error("first"); });
  scheduler.requestFrame(() => ran.push(["second"]));
  scheduler.requestDraw(DRAW_REASON.MEDIA);
  frames.runFrame();
  assert.deepEqual(errors, ["first", "draw"]);
  assert.deepEqual(ran, [["second"], ["draw", [DRAW_REASON.MEDIA]]]);
  // The animation still takes the next frame.
  assert.equal(frames.pending, 1);
  moving = false;
  frames.runFrame();
  assert.equal(frames.pending, 0);
});

test("only a STATE request counts a state change; the other reasons leave the revision", () => {
  const { scheduler } = setup();
  assert.equal(scheduler.stateRevision, 0);
  for (const reason of Object.values(DRAW_REASON).filter((value) => value !== DRAW_REASON.STATE)) scheduler.requestDraw(reason);
  assert.equal(scheduler.stateRevision, 0);
  scheduler.requestDraw(DRAW_REASON.STATE);
  scheduler.requestDraw(DRAW_REASON.STATE);
  assert.equal(scheduler.stateRevision, 2);
});

test("a Keyframe drag's batched view task counts a state change on each frame it runs", async () => {
  const { readFileSync } = await import("node:fs");
  const { createFrameBatch } = await import("../web_src/pano_frame_batch.js");
  const editor = readEditorSource();
  // The editor's view task asks with STATE (pano_editor.js dragFrames).
  const tasks = editor.slice(editor.indexOf("const dragFrames = createFrameBatch({"), editor.indexOf("\n  });\n", editor.indexOf("const dragFrames = createFrameBatch({")));
  assert.match(tasks, /view: \(\) => \{\s*syncCutoutShot\(\);\s*requestDraw\(\{ localOnly: true, reason: DRAW_REASON\.STATE \}\);\s*\}/);
  // The same wiring: moves batched into the scheduler's frames, each frame one state change and one draw.
  const { frames, draws, scheduler } = setup();
  const batch = createFrameBatch({
    requestFrame: (callback) => scheduler.requestFrame(callback),
    cancelFrame: (id) => scheduler.cancelFrame(id),
    tasks: { view: () => scheduler.requestDraw(DRAW_REASON.STATE) },
  });
  batch.request("view");
  batch.request("view");
  frames.runFrame();
  assert.equal(scheduler.stateRevision, 1);
  assert.deepEqual(draws, [[DRAW_REASON.STATE]]);
  batch.request("view");
  frames.runFrame();
  assert.equal(scheduler.stateRevision, 2);
  assert.equal(draws.length, 2);
});
