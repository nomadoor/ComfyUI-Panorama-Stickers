import assert from "node:assert/strict";
import test from "node:test";

import { createFrameBatch } from "../web_src/pano_frame_batch.js";
import { readEditorSource } from "./editor_source.mjs";

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

const editorSource = readEditorSource();
const editorFunction = (name) => editorSource.slice(editorSource.indexOf(`  function ${name}(`), editorSource.indexOf("\n  }\n", editorSource.indexOf(`  function ${name}(`)));
const timelineAction = (type) => {
  const body = editorFunction("onTimelineAction");
  const start = body.indexOf(`if (action.type === "${type}") {`);
  return body.slice(start, body.indexOf("\n    }\n", start));
};

test("a Timeline drag's moves leave the node preview, the inspector and a full redraw to its end", () => {
  for (const type of ["clip", "move-keys"]) {
    const action = timelineAction(type);
    const moves = action.slice(action.indexOf('if (action.phase !== "end") {'), action.indexOf("dragFrames.cancel();"));
    assert.match(moves, /dragFrames\.request\("timeline"\);/, type);
    assert.doesNotMatch(moves, /refreshTimelineEdit|requestDraw|updateSidePanel|syncNodeLivePreviewSources/, type);
    assert.match(action, /dragFrames\.cancel\(\);\s*timeline\.drag = null;/, type);
  }
  // A Clip range redraws the view only when what it shows at the playhead changes.
  assert.match(timelineAction("clip"), /if \(clipView\(sticker\.clip\) !== shown\) dragFrames\.request\("view"\);/);
  // A scrub seeks once per frame.
  assert.match(timelineAction("seek"), /if \(action\.phase === "move"\) \{\s*timeline\.scrubFrame = action\.frame;\s*dragFrames\.request\("seek"\);\s*return;/);
});

test("drags defer the node preview to their end and Clip ranges do not reload the view's state", () => {
  assert.match(editorFunction("requestDraw"), /if \(isDragging\(\)\) runtime\.nodePreviewPending = true;\s*else syncNodeLivePreviewSources\(\);/);
  assert.match(editorFunction("tickFrame"), /if \(runtime\.nodePreviewPending && !isDragging\(\)\) syncNodeLivePreviewSources\(\);/);
  assert.match(editorFunction("isDragging"), /return !!editor\.interaction \|\| !!timeline\.drag;/);
  assert.doesNotMatch(editorFunction("dragWorldGizmo"), /updateSidePanel\(\)/);
  // The view of a drag redraws the stage without dropping the cached stroke geometry.
  const tasks = editorSource.slice(editorSource.indexOf("const dragFrames = createFrameBatch({"), editorSource.indexOf("\n  });\n", editorSource.indexOf("const dragFrames = createFrameBatch({")));
  // The drag changed the state, so the view's state, the Camera's trajectory and the camera preview are
  // made again (a state draw request counts scheduler.stateRevision).
  assert.match(tasks, /view: \(\) => \{\s*syncCutoutShot\(\);\s*requestDraw\(\{ localOnly: true, reason: DRAW_REASON\.STATE \}\);\s*\}/);
  // The batch takes its frames from the editor's scheduler.
  assert.match(tasks, /requestFrame: \(callback\) => scheduler\.requestFrame\(callback\),/);
  assert.doesNotMatch(tasks, /markObjectVisualsDirty|invalidateObjectVisualCaches/);
  // Closing the editor drops what a drag left pending.
  assert.match(editorSource, /hideTooltip\(\);\s*dragFrames\.cancel\(\);\s*stopRenderLoop\(\);/);
  const input = editorFunction("buildEditorViewInput");
  // The state v2 is made again only when the state changes, not on each frame.
  assert.match(input, /if \(editorViewScene\.revision !== scheduler\.stateRevision\) \{/);
  assert.doesNotMatch(input, /JSON\.stringify/);
  assert.match(input, /if \(stateV2\) copyClipRanges\(editorViewScene\.sceneState\);/);
  // The mask layer reads its canvas once per build, keyed by the paint engine's mask revision.
  const mask = editorFunction("appendMaskDisplayLayerEntry");
  assert.equal(mask.match(/getMaskDisplayCanvas/g).length, 1);
  assert.match(mask, /getMaskDisplayRevision\(\)/);
});
