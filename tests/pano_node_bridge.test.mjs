import assert from "node:assert/strict";
import test from "node:test";

import {
  clearMediaCache,
  clearNodeSurface,
  disposeNodeRuntime,
  editorOpen,
  editorSession,
  mediaCache,
  nodeSurface,
  peekNodeSurface,
  peekPreviewNode,
  previewNode,
  stateSync,
} from "../web_src/pano_node_bridge.js";

function fakeImage() {
  const image = { onload() {}, onerror() {}, removed: [] };
  image.removeAttribute = (name) => image.removed.push(name);
  return image;
}

test("each node has its own record, and a group stays the same object until it is cleared", () => {
  const a = {};
  const b = {};
  nodeSurface(a).view = { yaw: 10, pitch: 0, fov: 90 };
  stateSync(a).flushers.add(() => {});

  assert.equal(nodeSurface(a), nodeSurface(a));
  assert.notEqual(nodeSurface(a), nodeSurface(b));
  assert.equal(nodeSurface(b).view, null);
  assert.equal(stateSync(b).flushers.size, 0);
  assert.notEqual(mediaCache(a).linkedImages, mediaCache(b).linkedImages);
  // Nothing is written on the node itself, so LiteGraph's serialize() and clone() never see it.
  assert.deepEqual(Object.keys(a), []);
  assert.equal(peekPreviewNode(a), null);
  assert.equal(peekPreviewNode(a), null, "a peek does not make the group");
  assert.equal(peekNodeSurface(a), nodeSurface(a));
  assert.equal(nodeSurface(null), null);
  assert.equal(stateSync(undefined), null);
});

test("clearing a group tears down only that group and starts it again from its defaults", () => {
  const node = {};
  const image = fakeImage();
  const destroyed = [];
  mediaCache(node).linkedImages.set("image", { img: image, pendingImg: null });
  mediaCache(node).ownOutputVideo = { key: "k", player: { destroy: () => destroyed.push("video") } };
  mediaCache(node).ownOutputRev = 3;
  nodeSurface(node).view = { yaw: 1, pitch: 2, fov: 3 };
  const media = mediaCache(node);

  clearMediaCache(node);

  assert.notEqual(mediaCache(node), media);
  assert.equal(mediaCache(node).ownOutputRev, 0);
  assert.equal(mediaCache(node).linkedImages.size, 0);
  assert.deepEqual(destroyed, ["video"]);
  assert.deepEqual(image.removed, ["src"]);
  assert.equal(image.onload, null);
  assert.deepEqual(nodeSurface(node).view, { yaw: 1, pitch: 2, fov: 3 });
  clearMediaCache({});
});

test("disposeNodeRuntime clears the timers and calls the teardown of every group", async () => {
  const node = {};
  const calls = [];
  const fired = [];
  const surface = nodeSurface(node);
  surface.bootMinHeightTimer = setTimeout(() => fired.push("boot"), 5);
  surface.resizeSettleTimer = setTimeout(() => fired.push("resize"), 5);
  surface.restore = () => {
    calls.push("restore");
    surface.restore = null;
  };
  surface.paintDisplay = { dispose: () => calls.push("raster") };
  previewNode(node).runtime = { teardown: () => calls.push("preview") };
  mediaCache(node).ownOutputVideo = { key: "k", player: { destroy: () => calls.push("video") } };
  editorSession(node).flushBeforeQueue = () => {};
  stateSync(node).liveState = { stickers: [] };

  disposeNodeRuntime(node);
  await new Promise((resolve) => setTimeout(resolve, 20));

  assert.deepEqual(fired, []);
  assert.deepEqual(calls, ["restore", "raster", "preview", "video"]);
  assert.notEqual(nodeSurface(node), surface);
  assert.equal(nodeSurface(node).restore, null);
  assert.equal(editorSession(node).flushBeforeQueue, null);
  assert.equal(stateSync(node).liveState, null);
});

test("a node's editor is open only while it says so, and reading it makes no group", () => {
  const node = {};
  assert.equal(editorOpen(node), false);
  assert.equal(editorOpen(null), false);
  editorSession(node).open = true;
  assert.equal(editorOpen(node), true);
  editorSession(node).open = false;
  assert.equal(editorOpen(node), false);
  const other = {};
  editorOpen(other);
  editorSession(other).open = true;
  disposeNodeRuntime(other);
  assert.equal(editorOpen(other), false);
});

test("a teardown that throws does not keep the other groups alive", (t) => {
  const node = {};
  const logged = [];
  t.mock.method(console, "error", (...args) => logged.push(args[0]));
  nodeSurface(node).restore = () => { throw new Error("restore failed"); };
  previewNode(node).runtime = { teardown() { throw new Error("teardown failed"); } };
  const calls = [];
  mediaCache(node).ownOutputVideo = { key: "k", player: { destroy: () => calls.push("video") } };

  disposeNodeRuntime(node);

  assert.deepEqual(calls, ["video"]);
  assert.equal(logged.length, 1);
  assert.equal(previewNode(node).runtime, null);
  disposeNodeRuntime(null);
  clearNodeSurface({});
});
