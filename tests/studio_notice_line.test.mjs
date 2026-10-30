// docs/studio-ui.md "一行の知らせの種類": which line shows at the top center and its kind.
import assert from "node:assert/strict";
import test from "node:test";
import { LINE_TEXT, NOTICE_KINDS, topLine } from "../web_src/studio/notice_line.js";

const ui = (fields = {}) => ({ notice: null, view: "ready", background: "none", empty: false, ...fields });

test("an operation that did nothing is a stopped notice and comes first", () => {
  assert.deepEqual(topLine(ui({ notice: "Nothing to frame", view: "loading", background: "failed" })), { kind: "stopped", text: "Nothing to frame" });
});

test("loading shows the ring, the 3D view before the background", () => {
  assert.deepEqual(topLine(ui({ view: "loading", background: "loading" })), { kind: "loading", text: LINE_TEXT.viewLoading });
  assert.deepEqual(topLine(ui({ background: "loading" })), { kind: "loading", text: LINE_TEXT.backgroundLoading });
});

test("a background that cannot be read and a 3D view that cannot be made are warnings", () => {
  assert.deepEqual(topLine(ui({ background: "failed" })), { kind: "warning", text: LINE_TEXT.backgroundFailed });
  assert.deepEqual(topLine(ui({ view: "failed", background: "failed" })), { kind: "warning", text: LINE_TEXT.viewFailed });
});

test("the empty stage's hint has no mark, and nothing else shows nothing", () => {
  assert.deepEqual(topLine(ui({ empty: true })), { kind: "info", text: LINE_TEXT.empty });
  assert.deepEqual(topLine(ui({ background: "ready" })), { kind: "info", text: "" });
});

test("a placed 3D file loading shows the ring after the background's; an Add failure is a warning after the others", () => {
  assert.deepEqual(topLine(ui({ adding: true })), { kind: "loading", text: LINE_TEXT.addLoading });
  assert.deepEqual(topLine(ui({ adding: true, background: "loading" })), { kind: "loading", text: LINE_TEXT.backgroundLoading });
  assert.deepEqual(topLine(ui({ addWarning: "Could not read a.png", empty: true })), { kind: "warning", text: "Could not read a.png" });
  assert.deepEqual(topLine(ui({ addWarning: "x", background: "failed" })), { kind: "warning", text: LINE_TEXT.backgroundFailed });
  assert.deepEqual(topLine(ui({ addWarning: "x", adding: true })), { kind: "loading", text: LINE_TEXT.addLoading });
  assert.deepEqual(topLine(ui({ addWarning: "x", notice: "There is no ground to place it on" })), { kind: "stopped", text: "There is no ground to place it on" });
});

// docs/studio-ui.md "ノードの入力から来た物": waiting for a run to show the upstream Scene is said with no mark,
// after the warnings and before the empty stage's hint.
test("waiting for the upstream Scene says so with no mark, after the warnings and before the empty hint", () => {
  assert.deepEqual(topLine(ui({ upstreamPending: true, empty: true })), { kind: "info", text: LINE_TEXT.upstreamPending });
  assert.equal(LINE_TEXT.upstreamPending, "Run the workflow to show the upstream scene.");
  assert.deepEqual(topLine(ui({ upstreamPending: true, background: "failed" })), { kind: "warning", text: LINE_TEXT.backgroundFailed });
  assert.deepEqual(topLine(ui({ upstreamPending: true, addWarning: "x" })), { kind: "warning", text: "x" });
});

test("every line's kind is one of the four", () => {
  for (const fields of [{ notice: "x" }, { view: "loading" }, { background: "failed" }, { empty: true }, {}]) {
    assert.ok(NOTICE_KINDS.includes(topLine(ui(fields)).kind));
  }
});

test("a state_json that cannot be read is a warning before the other warnings, after what did nothing and loading", () => {
  assert.deepEqual(topLine(ui({ stateUnreadable: true, view: "failed", background: "failed", addWarning: "x", empty: true })), { kind: "warning", text: LINE_TEXT.stateUnreadable });
  assert.equal(topLine(ui({ stateUnreadable: true, background: "loading" })).kind, "loading");
  assert.equal(topLine(ui({ stateUnreadable: true, notice: "Nothing to frame" })).kind, "stopped");
  assert.equal(LINE_TEXT.stateUnreadable, "This node's saved state can't be read, so changes won't be saved");
});
