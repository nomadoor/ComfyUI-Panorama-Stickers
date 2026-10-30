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

test("every line's kind is one of the four", () => {
  for (const fields of [{ notice: "x" }, { view: "loading" }, { background: "failed" }, { empty: true }, {}]) {
    assert.ok(NOTICE_KINDS.includes(topLine(ui(fields)).kind));
  }
});
