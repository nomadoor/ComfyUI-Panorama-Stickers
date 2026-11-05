import assert from "node:assert/strict";
import test from "node:test";

import { createDropInput } from "../web_src/studio/drop_input.js";

// An element that keeps its listeners and its children (for contains()).
function element(parent = null) {
  const listeners = new Map();
  const node = {
    parentElement: parent,
    listeners,
    addEventListener(type, listener) {
      if (!listeners.has(type)) listeners.set(type, new Set());
      listeners.get(type).add(listener);
    },
    removeEventListener(type, listener) {
      listeners.get(type)?.delete(listener);
    },
    contains(other) {
      for (let at = other; at; at = at.parentElement) if (at === node) return true;
      return false;
    },
    fire(type, event) {
      for (const listener of [...(listeners.get(type) ?? [])]) listener(event);
      return event;
    },
    count() {
      return [...listeners.values()].reduce((sum, set) => sum + set.size, 0);
    },
  };
  return node;
}

function dragEvent({ type = "image/png", x = 0, y = 0, target = null, relatedTarget = null, files = ["file"] } = {}) {
  return {
    clientX: x,
    clientY: y,
    target,
    relatedTarget,
    dataTransfer: { items: type === null ? [] : [{ kind: "file", type }], files, dropEffect: "unset" },
    prevented: false,
    stopped: false,
    preventDefault() {
      this.prevented = true;
    },
    stopPropagation() {
      this.stopped = true;
    },
  };
}

function setup({ takes = () => true, root = true } = {}) {
  const page = element();
  const editorRoot = root ? element(page) : null;
  const stage = element(editorRoot);
  const canvas = { getBoundingClientRect: () => ({ left: 10, top: 20 }) };
  const calls = [];
  const add = {
    dragOver: (point, kind) => calls.push(["over", point, kind]),
    dragLeave: () => calls.push(["leave"]),
    drop: async (point, files) => {
      calls.push(["drop", point, files]);
    },
  };
  const dispose = createDropInput({ element: stage, canvas, root: editorRoot, add, takes });
  return { page, editorRoot, stage, calls, dispose };
}

test("without an element there is nothing to listen to", () => {
  const dispose = createDropInput({ element: null, canvas: null, add: {} });
  assert.equal(typeof dispose, "function");
  dispose();
});

test("a file dragged over the stage marks where it lands, in the canvas's coordinates, and only again when it moved", () => {
  const { stage, calls } = setup();
  const first = stage.fire("dragenter", dragEvent({ x: 110, y: 70 }));
  assert.equal(first.prevented, true);
  assert.equal(first.dataTransfer.dropEffect, "copy");
  stage.fire("dragover", dragEvent({ x: 110, y: 70 }));
  stage.fire("dragover", dragEvent({ x: 111, y: 70 }));
  stage.fire("dragover", dragEvent({ x: 111, y: 70, type: "model/gltf-binary" }));
  assert.deepEqual(calls, [
    ["over", { x: 100, y: 50 }, "image"],
    ["over", { x: 101, y: 50 }, "image"],
    ["over", { x: 101, y: 50 }, "3d"],
  ]);
});

test("a drag without a Studio file is left alone", () => {
  const { stage, calls } = setup();
  const event = stage.fire("dragover", dragEvent({ type: "text/plain" }));
  assert.equal(event.prevented, false);
  assert.equal(event.dataTransfer.dropEffect, "unset");
  const drop = stage.fire("drop", dragEvent({ type: "text/plain" }));
  assert.equal(drop.prevented, false);
  assert.deepEqual(calls, []);
});

test("while the stage does not take files, a drag shows no drop and clears the mark, and a drop places nothing", () => {
  const { stage, calls } = setup({ takes: () => false });
  const over = stage.fire("dragover", dragEvent({ x: 50, y: 50 }));
  assert.equal(over.prevented, true);
  assert.equal(over.dataTransfer.dropEffect, "none");
  const drop = stage.fire("drop", dragEvent({ x: 50, y: 50 }));
  assert.equal(drop.prevented, true);
  assert.equal(drop.stopped, true);
  assert.deepEqual(calls, [["leave"], ["leave"]]);
});

test("a drop on the stage places the files at the point and is kept from ComfyUI; the next drag marks again", () => {
  const { stage, calls } = setup();
  stage.fire("dragover", dragEvent({ x: 30, y: 40 }));
  const files = ["a.png"];
  const drop = stage.fire("drop", dragEvent({ x: 30, y: 40, files }));
  assert.equal(drop.prevented, true);
  assert.equal(drop.stopped, true);
  stage.fire("dragover", dragEvent({ x: 30, y: 40 }));
  assert.deepEqual(calls, [
    ["over", { x: 20, y: 20 }, "image"],
    ["drop", { x: 20, y: 20 }, files],
    ["over", { x: 20, y: 20 }, "image"],
  ]);
});

test("leaving the stage clears the mark, but not when moving onto a part inside it", () => {
  const { stage, calls } = setup();
  const inner = element(stage);
  stage.fire("dragover", dragEvent({ x: 10, y: 20 }));
  stage.fire("dragleave", dragEvent({ relatedTarget: inner }));
  assert.deepEqual(calls.map(([name]) => name), ["over"]);
  stage.fire("dragleave", dragEvent({ relatedTarget: null }));
  stage.fire("dragover", dragEvent({ x: 10, y: 20 }));
  assert.deepEqual(calls.map(([name]) => name), ["over", "leave", "over"]);
});

test("outside the stage, in the editor and the dimmed page, a file shows no drop and its drop does nothing and reaches no one", () => {
  const { page, editorRoot, stage, calls } = setup();
  for (const target of [editorRoot, page]) {
    const outside = element(editorRoot);
    const over = target.fire("dragover", dragEvent({ target: outside }));
    assert.equal(over.prevented, true);
    assert.equal(over.dataTransfer.dropEffect, "none");
    const drop = target.fire("drop", dragEvent({ target: outside }));
    assert.equal(drop.prevented, true);
    assert.equal(drop.stopped, true);
  }
  // A drag over the stage that bubbles to the editor keeps the stage's drop effect.
  const bubbled = editorRoot.fire("dragover", dragEvent({ target: stage }));
  assert.equal(bubbled.dataTransfer.dropEffect, "unset");
  // A drag without a Studio file is not guarded.
  assert.equal(editorRoot.fire("drop", dragEvent({ type: "text/plain" })).prevented, false);
  assert.deepEqual(calls, [["leave"], ["leave"]]);
});

test("dispose removes every listener and clears the mark", () => {
  const { page, editorRoot, stage, calls, dispose } = setup();
  assert.equal(stage.count(), 4);
  assert.equal(editorRoot.count(), 2);
  assert.equal(page.count(), 2);
  dispose();
  assert.equal(stage.count() + editorRoot.count() + page.count(), 0);
  assert.deepEqual(calls, [["leave"]]);
});

test("without a root only the stage listens", () => {
  const { stage, dispose } = setup({ root: false });
  assert.equal(stage.count(), 4);
  dispose();
  assert.equal(stage.count(), 0);
});
