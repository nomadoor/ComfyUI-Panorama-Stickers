import assert from "node:assert/strict";
import test from "node:test";

import {
  createPreviewFullscreenController,
  measurePreviewCanvasSize,
  shouldTogglePreviewPlaybackFromKey,
} from "../web_src/pano_preview_node_surface.js";

function makeClassList() {
  const values = new Set();
  return {
    add(value) { values.add(value); },
    remove(value) { values.delete(value); },
    contains(value) { return values.has(value); },
  };
}

function makeFullscreenBoundary({ enabled = true, rejectRequest = false } = {}) {
  const listeners = new Set();
  const documentRef = {
    fullscreenEnabled: enabled,
    fullscreenElement: null,
    addEventListener(name, listener) {
      if (name === "fullscreenchange") listeners.add(listener);
    },
    removeEventListener(name, listener) {
      if (name === "fullscreenchange") listeners.delete(listener);
    },
    async exitFullscreen() {
      documentRef.fullscreenElement = null;
      listeners.forEach((listener) => listener());
    },
  };
  const root = {
    classList: makeClassList(),
    async requestFullscreen() {
      if (rejectRequest) throw new Error("denied");
      documentRef.fullscreenElement = root;
      listeners.forEach((listener) => listener());
    },
  };
  return { documentRef, root, listeners };
}

test("preview fullscreen controller enters and exits native fullscreen", async () => {
  const boundary = makeFullscreenBoundary();
  const states = [];
  const controller = createPreviewFullscreenController({
    root: boundary.root,
    documentRef: boundary.documentRef,
    onChange: (active) => states.push(active),
  });

  await controller.toggle();
  assert.equal(boundary.documentRef.fullscreenElement, boundary.root);
  assert.equal(controller.isActive(), true);

  await controller.toggle();
  assert.equal(boundary.documentRef.fullscreenElement, null);
  assert.equal(controller.isActive(), false);
  assert.deepEqual(states.at(-2), true);
  assert.deepEqual(states.at(-1), false);

  controller.destroy();
  assert.equal(boundary.listeners.size, 0);
});

test("preview fullscreen controller falls back to the existing read-only Preview", async () => {
  const boundary = makeFullscreenBoundary({ enabled: true, rejectRequest: true });
  let fallbackCalls = 0;
  const controller = createPreviewFullscreenController({
    root: boundary.root,
    documentRef: boundary.documentRef,
    onFallback: () => { fallbackCalls += 1; },
  });

  await controller.toggle();
  assert.equal(controller.isActive(), false);
  assert.equal(fallbackCalls, 1);
  controller.destroy();
  assert.equal(boundary.listeners.size, 0);
});

test("destroying Preview during a pending fullscreen request suppresses late fallback and updates", async () => {
  let rejectRequest;
  const pendingRequest = new Promise((_, reject) => { rejectRequest = reject; });
  const boundary = makeFullscreenBoundary();
  boundary.root.requestFullscreen = () => pendingRequest;
  const states = [];
  let fallbackCalls = 0;
  const controller = createPreviewFullscreenController({
    root: boundary.root,
    documentRef: boundary.documentRef,
    onChange: (active) => states.push(active),
    onFallback: () => { fallbackCalls += 1; },
  });

  const toggle = controller.toggle();
  controller.destroy();
  const stateCountAfterDestroy = states.length;
  rejectRequest(new Error("removed"));
  await toggle;

  assert.equal(fallbackCalls, 0);
  assert.equal(states.length, stateCountAfterDestroy);
  assert.equal(boundary.listeners.size, 0);
});

test("preview playback shortcut ignores keys from the fullscreen button", () => {
  const root = {};
  const button = {};

  assert.equal(shouldTogglePreviewPlaybackFromKey({ key: " ", target: root }, root), true);
  assert.equal(shouldTogglePreviewPlaybackFromKey({ key: "Spacebar", target: root }, root), true);
  assert.equal(shouldTogglePreviewPlaybackFromKey({ key: " ", target: button }, root), false);
  assert.equal(shouldTogglePreviewPlaybackFromKey({ key: "Enter", target: root }, root), false);
});

test("preview canvas size follows the CSS box at device resolution", () => {
  assert.deepEqual(
    measurePreviewCanvasSize({ width: 446.4, height: 325.8 }, 2),
    { width: 893, height: 652 },
  );
  assert.deepEqual(
    measurePreviewCanvasSize({ width: 0, height: Number.NaN }, 0),
    { width: 1, height: 1 },
  );
});
