// docs/studio-ui.md "一行の知らせの種類": which line shows at the top center and its kind.
import assert from "node:assert/strict";
import test from "node:test";
import { LINE_TEXT, NOTICE_KINDS, stageEmpty, topLine } from "../web_src/studio/notice_line.js";

const ui = (fields = {}) => ({ notice: null, view: "ready", background: "none", empty: false, ...fields });

test("an operation that did nothing is a stopped notice and comes first", () => {
  assert.deepEqual(topLine(ui({ notice: "Nothing to frame", view: "loading", background: "failed" })), { kind: "stopped", text: "Nothing to frame" });
});

// docs/studio-ui.md "一行の知らせの種類": a short notice of an operation that was done is the "done" kind (a lime dot),
// after a stopped notice and before loading.
test("a done operation's short notice is the done kind, after a stopped notice and before loading", () => {
  assert.deepEqual(topLine(ui({ done: LINE_TEXT.cameraMoved, view: "loading", empty: true })), { kind: "done", text: "Camera moved to this view" });
  assert.deepEqual(topLine(ui({ done: LINE_TEXT.cameraMoved, notice: "Nothing to frame" })), { kind: "stopped", text: "Nothing to frame" });
});

test("loading shows the ring, the 3D view before the background", () => {
  assert.deepEqual(topLine(ui({ view: "loading", background: "loading" })), { kind: "loading", text: LINE_TEXT.viewLoading });
  assert.deepEqual(topLine(ui({ background: "loading" })), { kind: "loading", text: LINE_TEXT.backgroundLoading });
});

test("a background that cannot be read and a 3D view that cannot be made are warnings", () => {
  assert.deepEqual(topLine(ui({ background: "failed" })), { kind: "warning", text: LINE_TEXT.backgroundFailed });
  assert.deepEqual(topLine(ui({ view: "failed", background: "failed" })), { kind: "warning", text: LINE_TEXT.viewFailed });
});

test("the empty stage's hint is the info kind (a neutral dot), and nothing else shows nothing", () => {
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

// docs/studio-ui.md "一行の知らせの種類": a depth grid waiting for its proxy video loads after a placed 3D file; one too
// large for the GPU is a warning after the 3D view's and before the background's.
test("a depth grid's colors loading come after a placed 3D file; one too large is a warning before the background's", () => {
  assert.deepEqual(topLine(ui({ depthNotice: "Loading depth video…" })), { kind: "loading", text: "Loading depth video…" });
  assert.deepEqual(topLine(ui({ depthNotice: "Loading depth video…", adding: true })), { kind: "loading", text: LINE_TEXT.addLoading });
  assert.deepEqual(topLine(ui({ depthNotice: "too large", background: "failed" })), { kind: "warning", text: "too large" });
  assert.deepEqual(topLine(ui({ depthNotice: "too large", view: "failed" })), { kind: "warning", text: LINE_TEXT.viewFailed });
});

test("every line's kind is one of the five", () => {
  for (const fields of [{ notice: "x" }, { done: "x" }, { view: "loading" }, { background: "failed" }, { empty: true }, {}]) {
    assert.ok(NOTICE_KINDS.includes(topLine(ui(fields)).kind));
  }
});

test("a state_json that cannot be read is a warning before the other warnings, after what did nothing and loading", () => {
  assert.deepEqual(topLine(ui({ stateUnreadable: true, view: "failed", background: "failed", addWarning: "x", empty: true })), { kind: "warning", text: LINE_TEXT.stateUnreadable });
  assert.equal(topLine(ui({ stateUnreadable: true, background: "loading" })).kind, "loading");
  assert.equal(topLine(ui({ stateUnreadable: true, notice: "Nothing to frame" })).kind, "stopped");
  assert.equal(LINE_TEXT.stateUnreadable, "This node's saved state can't be read, so changes won't be saved");
});

// docs/studio-ui.md "読み込み中と空の画面": the stage is empty only when nothing is drawn and no input brings anything.
const nothing = { background: "none", stickers: 0, paint: 0, linked: [], worldItems: 0, upstream: 0 };

test("a stage with nothing of its own and no input linked is empty and shows the hint", () => {
  assert.equal(stageEmpty(nothing), true);
  assert.deepEqual(topLine(ui({ empty: stageEmpty(nothing) })), { kind: "info", text: LINE_TEXT.empty });
});

test("a linked `world` input is not an empty stage: its 3D content arrives through the input", () => {
  assert.equal(stageEmpty({ ...nothing, linked: ["world"] }), false);
  assert.deepEqual(topLine(ui({ empty: stageEmpty({ ...nothing, linked: ["world"] }) })), { kind: "info", text: "" });
});

test("everything drawn or brought by an input counts", () => {
  for (const name of ["world", "background", "sticker", "scene"]) assert.equal(stageEmpty({ ...nothing, linked: [name] }), false, name);
  assert.equal(stageEmpty({ ...nothing, linked: ["camera_state"] }), true);
  for (const background of ["loading", "ready", "failed"]) assert.equal(stageEmpty({ ...nothing, background }), false, background);
  assert.equal(stageEmpty({ ...nothing, stickers: 1 }), false);
  assert.equal(stageEmpty({ ...nothing, paint: 1 }), false);
  assert.equal(stageEmpty({ ...nothing, worldItems: 1 }), false);
  assert.equal(stageEmpty({ ...nothing, upstream: 2 }), false);
});
