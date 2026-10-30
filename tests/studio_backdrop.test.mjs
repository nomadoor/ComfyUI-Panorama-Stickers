// docs/studio-ui.md "閉じ方": a click on the backdrop closes the editor; a drag from inside the frame does not.
import assert from "node:assert/strict";
import test from "node:test";
import { createBackdropClose } from "../web_src/studio/backdrop.js";

const backdrop = { name: "backdrop" };
const frame = { name: "frame" };
const on = (target, button = 0) => ({ target, currentTarget: backdrop, button });

test("down and up on the backdrop close", () => {
  const close = createBackdropClose();
  close.down(on(backdrop));
  assert.equal(close.up(on(backdrop)), true);
});

test("a drag that starts in the frame and ends on the backdrop does not close", () => {
  const close = createBackdropClose();
  close.down(on(frame));
  assert.equal(close.up(on(backdrop)), false);
});

test("a release without a press on the backdrop (the press was elsewhere) does not close", () => {
  const close = createBackdropClose();
  assert.equal(close.up(on(backdrop)), false);
});

test("a press on the backdrop released in the frame does not close, and does not carry to the next release", () => {
  const close = createBackdropClose();
  close.down(on(backdrop));
  assert.equal(close.up(on(frame)), false);
  assert.equal(close.up(on(backdrop)), false);
});

test("only the left button closes", () => {
  const close = createBackdropClose();
  close.down(on(backdrop, 2));
  assert.equal(close.up(on(backdrop, 2)), false);
  close.down(on(backdrop, 0));
  assert.equal(close.up(on(backdrop, 1)), false);
});
