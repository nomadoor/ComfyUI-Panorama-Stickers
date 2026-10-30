import assert from "node:assert/strict";
import test from "node:test";
import { TIP_DELAY, TIP_EDGE, TIP_GAP, TIP_SKIP, placeTip, splitTipKeys, tipSide } from "../web_src/studio/tooltip.js";

// docs/studio-ui.md "ツールチップ": the bubble sits beside the control, 8px away, on its group's side; it flips to the
// opposite side at the editor's edge and is pushed back inside along the side; a trailing "(key)" becomes the hint.

const bounds = { left: 0, top: 0, width: 1000, height: 600 };
const size = { width: 80, height: 24 };
const overlaps = (a, b) => a.left < b.left + b.width && b.left < a.left + a.width && a.top < b.top + b.height && b.top < a.top + a.height;

test("the values the spec names", () => {
  assert.equal(TIP_DELAY, 400);
  assert.equal(TIP_SKIP, 300);
  assert.equal(TIP_GAP, 8);
  assert.equal(TIP_EDGE, 8);
});

test("each side puts the bubble 8px from the control, centered along it", () => {
  const anchor = { left: 400, top: 300, width: 34, height: 34 };
  assert.deepEqual(placeTip({ anchor, size, bounds, side: "top" }), { left: 377, top: 268, side: "top" });
  assert.deepEqual(placeTip({ anchor, size, bounds, side: "bottom" }), { left: 377, top: 342, side: "bottom" });
  assert.deepEqual(placeTip({ anchor, size, bounds, side: "right" }), { left: 442, top: 305, side: "right" });
  assert.deepEqual(placeTip({ anchor, size, bounds, side: "left" }), { left: 312, top: 305, side: "left" });
  for (const side of ["top", "bottom", "left", "right"]) {
    const at = placeTip({ anchor, size, bounds, side });
    assert.ok(!overlaps({ ...at, ...size }, anchor), side);
  }
});

test("it flips to the opposite side when the preferred one leaves the editor", () => {
  // Near the right edge, a right bubble would leave: it goes left.
  assert.equal(placeTip({ anchor: { left: 940, top: 300, width: 34, height: 34 }, size, bounds, side: "right" }).side, "left");
  // Near the top, an above bubble would leave: it goes below.
  assert.equal(placeTip({ anchor: { left: 400, top: 10, width: 34, height: 34 }, size, bounds, side: "top" }).side, "bottom");
  // Near the bottom, below flips above.
  assert.equal(placeTip({ anchor: { left: 400, top: 560, width: 34, height: 34 }, size, bounds, side: "bottom" }).side, "top");
  // Near the left, left flips right.
  assert.equal(placeTip({ anchor: { left: 20, top: 300, width: 34, height: 34 }, size, bounds, side: "left" }).side, "right");
  // The edge counts: exactly fitting inside TIP_EDGE stays.
  const fits = { left: 1000 - TIP_EDGE - size.width - TIP_GAP - 34, top: 300, width: 34, height: 34 };
  assert.equal(placeTip({ anchor: fits, size, bounds, side: "right" }).side, "right");
  assert.equal(placeTip({ anchor: { ...fits, left: fits.left + 1 }, size, bounds, side: "right" }).side, "left");
});

test("when neither side fits it takes the one that leaves less", () => {
  const tall = { left: 0, top: 0, width: 300, height: 100 };
  const anchor = { left: 100, top: 30, width: 34, height: 34 };
  // Room above 30-8-8 = 14, below 100-8-64-8 = 20: below leaves less.
  assert.equal(placeTip({ anchor, size, bounds: tall, side: "top" }).side, "bottom");
  assert.equal(placeTip({ anchor: { ...anchor, top: 40 }, size, bounds: tall, side: "bottom" }).side, "top");
});

test("along the side it is pushed back inside the editor", () => {
  // A wide bubble above a control at the left edge starts at the edge, not before it.
  const wide = { width: 200, height: 24 };
  assert.equal(placeTip({ anchor: { left: 20, top: 300, width: 34, height: 34 }, size: wide, bounds, side: "top" }).left, TIP_EDGE);
  assert.equal(placeTip({ anchor: { left: 960, top: 300, width: 34, height: 34 }, size: wide, bounds, side: "bottom" }).left, 1000 - TIP_EDGE - 200);
  // A bubble right of a control near the bottom stays above the bottom edge.
  assert.equal(placeTip({ anchor: { left: 30, top: 580, width: 34, height: 16 }, size, bounds, side: "right" }).top, 600 - TIP_EDGE - 24);
});

test("the rects may be anywhere on the page", () => {
  const page = { left: 200, top: 100, width: 1000, height: 600 };
  const at = placeTip({ anchor: { left: 230, top: 400, width: 34, height: 34 }, size, bounds: page, side: "left" });
  assert.equal(at.side, "right");
  assert.equal(at.left, 230 + 34 + TIP_GAP);
});

test("the group decides the side; a control's own data-tip-side wins; others go above", () => {
  const element = (own, groups) => ({
    getAttribute: (name) => (name === "data-tip-side" ? own : null),
    closest: (selector) => (groups.includes(selector) ? {} : null),
  });
  assert.equal(tipSide(element(null, [".pano-studio-at-rail"])), "right");
  assert.equal(tipSide(element(null, [".pano-studio-at-nav"])), "left");
  assert.equal(tipSide(element(null, [".pano-studio-at-bar"])), "top");
  assert.equal(tipSide(element(null, [".pano-studio-at-buttons"])), "top");
  assert.equal(tipSide(element(null, [".pano-studio-at-tabs"])), "bottom");
  assert.equal(tipSide(element(null, [".pano-studio-at-output"])), "bottom");
  assert.equal(tipSide(element(null, [".pano-studio-at-edge-left"])), "right");
  assert.equal(tipSide(element(null, [".pano-studio-at-edge-right"])), "left");
  assert.equal(tipSide(element(null, [".pano-studio-at-edge-bottom"])), "top");
  assert.equal(tipSide(element(null, [])), "top");
  assert.equal(tipSide(element("left", [".pano-studio-at-rail"])), "left");
  assert.equal(tipSide(element("sideways", [".pano-studio-at-rail"])), "right");
});

test("a trailing (key) is the shortcut hint; other brackets stay text", () => {
  assert.deepEqual(splitTipKeys("Move (1)"), { text: "Move", keys: "1" });
  assert.deepEqual(splitTipKeys("Undo (Ctrl+Z)"), { text: "Undo", keys: "Ctrl+Z" });
  assert.deepEqual(splitTipKeys("Redo (Shift+Ctrl+Z)"), { text: "Redo", keys: "Shift+Ctrl+Z" });
  assert.deepEqual(splitTipKeys("Play (Space)"), { text: "Play", keys: "Space" });
  assert.deepEqual(splitTipKeys("Delete (Del)"), { text: "Delete", keys: "Del" });
  assert.deepEqual(splitTipKeys("Keyframe all values here (not the lens)"), { text: "Keyframe all values here (not the lens)", keys: "" });
  assert.deepEqual(splitTipKeys("Loop: on"), { text: "Loop: on", keys: "" });
  assert.deepEqual(splitTipKeys("Paint · in development"), { text: "Paint · in development", keys: "" });
  assert.deepEqual(splitTipKeys("(1)"), { text: "(1)", keys: "" });
  assert.deepEqual(splitTipKeys(""), { text: "", keys: "" });
  assert.deepEqual(splitTipKeys(null), { text: "", keys: "" });
});
