import assert from "node:assert/strict";
import test from "node:test";

import {
  drawStickerSelectionBoundary,
  drawStickerSelectionHandles,
  hitFrameAffordance,
  hitStickerSelectionAffordance,
  stickerSelectionAccent,
} from "../web_src/pano_sticker_affordance.js";

function recordingContext() {
  const arcs = [];
  const lines = [];
  let current = null;
  return {
    arcs,
    lines,
    fillStyle: "",
    strokeStyle: "",
    lineWidth: 0,
    beginPath() { current = []; },
    closePath() {},
    moveTo(x, y) { current?.push({ x, y }); },
    lineTo(x, y) { current?.push({ x, y }); },
    stroke() { if (current?.length) lines.push({ points: current, color: this.strokeStyle, width: this.lineWidth }); },
    fill() {},
    arc(x, y, radius) { arcs.push({ x, y, radius, color: this.fillStyle }); },
  };
}

test("selection accents match the modal for internal, external, and locked stickers", () => {
  assert.equal(stickerSelectionAccent({}), "#0070f3");
  assert.equal(stickerSelectionAccent({ source_kind: "external_image" }), "#f59e0b");
  assert.equal(stickerSelectionAccent({ locked: true }), "#ff4d4f");
});

test("shared sticker boundary owns the selected and idle stroke tokens", () => {
  const ctx = recordingContext();
  const edges = [
    [{ x: 0, y: 0 }, { x: 10, y: 0 }],
    [{ x: 10, y: 0 }, { x: 10, y: 10 }],
    [{ x: 10, y: 10 }, { x: 0, y: 10 }],
    [{ x: 0, y: 10 }, { x: 0, y: 0 }],
  ];

  assert.equal(drawStickerSelectionBoundary(ctx, edges, { selected: true }), true);
  assert.equal(ctx.lines[0].color, "rgba(250, 250, 250, 0.9)");
  assert.equal(ctx.lines[0].width, 2);
});

test("shared sticker hit descriptor owns modal-compatible hover cursors", () => {
  const geometry = {
    visible: true,
    center: { x: 50, y: 50 },
    corners: [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }],
    rotateHandle: { x: 50, y: -30 },
  };

  assert.deepEqual(hitStickerSelectionAffordance(geometry, geometry.corners[0]), {
    kind: "scale", cornerIndex: 0, cursor: "nwse-resize",
  });
  assert.deepEqual(hitStickerSelectionAffordance(geometry, geometry.rotateHandle), { kind: "rotate", cursor: "grab" });
  assert.deepEqual(hitStickerSelectionAffordance(geometry, geometry.center), { kind: "move", cursor: "default" });
});

test("shared sticker handles use compact circle sizes and a white rotation stem", () => {
  const ctx = recordingContext();
  const geometry = {
    corners: [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }],
    rotateStemBase: { x: 5, y: 0 },
    rotateHandle: { x: 5, y: -30 },
  };

  drawStickerSelectionHandles(ctx, geometry, { accent: "#0070f3" });

  assert.deepEqual(ctx.arcs.map((arc) => arc.radius), [5.5, 5.5, 5.5, 5.5, 8]);
  assert.deepEqual(ctx.arcs.map((arc) => arc.color), Array(5).fill("#0070f3"));
  assert.deepEqual(ctx.lines, [{
    points: [{ x: 5, y: 0 }, { x: 5, y: -30 }],
    color: "rgba(250, 250, 250, 0.9)",
    width: 1.8,
  }]);
});

test("a frame's handles: edges and corners resize it unless it cannot be resized, which keeps rotate and move (#89)", () => {
  const geometry = {
    corners: [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 60 }, { x: 0, y: 60 }],
    center: { x: 50, y: 30 },
    edgeMidpoints: [{ edge: "top", x: 50, y: 0 }, { edge: "right", x: 100, y: 30 }, { edge: "bottom", x: 50, y: 60 }, { edge: "left", x: 0, y: 30 }],
    rotateHandle: { x: 50, y: -30 },
  };
  const kind = (point, options) => hitFrameAffordance(geometry, point, options).kind;
  assert.equal(kind({ x: 98, y: 30 }, { edges: true }), "scale_x");
  assert.equal(kind({ x: 50, y: 2 }, { edges: true }), "scale_y");
  assert.equal(kind({ x: 50, y: 2 }), "move", "the box of a multi-selection has no edge handles");
  assert.equal(kind({ x: 2, y: 2 }, { edges: true }), "scale");
  // Panorama Studio's 360-degree Camera: no size handles, the rotate handle and the move stay.
  for (const point of [{ x: 98, y: 30 }, { x: 50, y: 2 }, { x: 2, y: 2 }]) assert.equal(kind(point, { edges: true, resize: false }), "move");
  assert.equal(kind({ x: 50, y: -30 }, { edges: true, resize: false }), "rotate");
  assert.equal(kind({ x: 50, y: 30 }, { edges: true, resize: false }), "move");
  assert.deepEqual(hitFrameAffordance(geometry, { x: 300, y: 300 }, { emptyCursor: "grab" }), { kind: "none", cursor: "grab" });
});

test("a Sticker has no edge handles: its top and bottom edges do not scale it alone (a port Sticker's vFOV follows its media)", () => {
  const geometry = {
    visible: true,
    center: { x: 50, y: 50 },
    corners: [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }],
    rotateHandle: { x: 50, y: -30 },
  };
  for (const point of [{ x: 50, y: 1 }, { x: 50, y: 99 }]) {
    assert.deepEqual(hitStickerSelectionAffordance(geometry, point), { kind: "move", cursor: "default" });
  }
});

