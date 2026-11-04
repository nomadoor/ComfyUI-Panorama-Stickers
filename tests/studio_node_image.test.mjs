import assert from "node:assert/strict";
import test from "node:test";

import { BACKGROUND_UI_KEYS } from "../web_src/pano_background_choice.js";
import { NODE_INPUT_IMAGE_KEY, loadNodeInputImage } from "../web_src/studio/node_image.js";

const image = (state = "loading") => ({
  complete: state !== "loading",
  naturalWidth: state === "ready" ? 64 : 0,
});
const settle = (picture, state) => Object.assign(picture, image(state));

// pano_comfy_media.js's adapter: the node's own result image (`own`, or null without one) and the linked input's
// (`linked`, or null when no input is linked); each keeps the callback it was given.
function fakeMedia({ own = null, linked = null } = {}) {
  const calls = [];
  const media = {
    calls,
    uiImage(node, key, cache, onSettle) {
      calls.push(["uiImage", node, key, cache instanceof Map]);
      media.settleOwn = onSettle;
      return own;
    },
    resolvePreferredExactLinkedSource(node, inputs) {
      calls.push(["resolve", node, inputs]);
      return { src: linked ? "/view?filename=linked.png" : "" };
    },
    loadPreferredExactLinkedImage(node, inputs, onSettle, cacheKey) {
      calls.push(["loadLinked", node, inputs, cacheKey]);
      media.settleLinked = onSettle;
      return linked;
    },
  };
  return media;
}

const node = { id: 7 };
const inputs = ["background"];

test("the key read is the Studio background's image key", () => {
  assert.equal(NODE_INPUT_IMAGE_KEY, BACKGROUND_UI_KEYS.studio.image);
  assert.equal(NODE_INPUT_IMAGE_KEY, "pano_input_images");
});

test("a current result's image is read first; the linked file is not asked for", () => {
  const own = image();
  const media = fakeMedia({ own, linked: image() });
  const changes = [];
  const loader = loadNodeInputImage({ media, node, inputs, channel: "background", cacheKey: "k", onChange: () => changes.push(1), current: () => true });
  assert.equal(loader.image(), own);
  assert.equal(loader.state(), "loading");
  assert.deepEqual(media.calls, [["uiImage", node, NODE_INPUT_IMAGE_KEY, true]]);
  settle(own, "ready");
  media.settleOwn(own);
  assert.equal(loader.state(), "ready");
  assert.deepEqual(changes, [1]);
});

test("the currency check gets the node and the channel", () => {
  const seen = [];
  loadNodeInputImage({ media: fakeMedia(), node, inputs, channel: "background", current: (...args) => {
    seen.push(args);
    return false;
  } });
  assert.deepEqual(seen, [[node, "background"]]);
});

test("a result image that does not load falls back to the linked file", () => {
  const own = image();
  const linked = image();
  const media = fakeMedia({ own, linked });
  const changes = [];
  const loader = loadNodeInputImage({ media, node, inputs, channel: "background", cacheKey: "key", onChange: () => changes.push(1), current: () => true });
  settle(own, "failed");
  media.settleOwn(own);
  assert.equal(loader.image(), linked);
  assert.equal(loader.state(), "loading");
  assert.deepEqual(media.calls.slice(1), [["resolve", node, inputs], ["loadLinked", node, inputs, "key"]]);
  settle(linked, "ready");
  media.settleLinked(linked);
  assert.equal(loader.state(), "ready");
  assert.deepEqual(changes, [1, 1]);
});

test("a failed result image without a linked file fails", () => {
  const own = image();
  const media = fakeMedia({ own, linked: null });
  const loader = loadNodeInputImage({ media, node, inputs, channel: "background", current: () => true });
  settle(own, "failed");
  media.settleOwn(own);
  assert.equal(loader.image(), null);
  assert.equal(loader.state(), "failed");
});

test("a failed result image whose linked file is already loaded is ready at once", () => {
  const own = image();
  const media = fakeMedia({ own, linked: image("ready") });
  const loader = loadNodeInputImage({ media, node, inputs, channel: "background", current: () => true });
  settle(own, "failed");
  media.settleOwn(own);
  assert.equal(loader.state(), "ready");
});

test("a stale result is not read: the linked file is", () => {
  const linked = image();
  const media = fakeMedia({ own: image("ready"), linked });
  const loader = loadNodeInputImage({ media, node, inputs, channel: "background", current: () => false });
  assert.equal(loader.image(), linked);
  assert.equal(loader.state(), "loading");
  assert.ok(!media.calls.some(([name]) => name === "uiImage"));
  settle(linked, "failed");
  media.settleLinked(linked);
  assert.equal(loader.state(), "failed");
});

test("without a result image or a linked file there is nothing to show", () => {
  const media = fakeMedia();
  const loader = loadNodeInputImage({ media, node, inputs, channel: "background", current: () => true });
  assert.equal(loader.image(), null);
  assert.equal(loader.state(), "none");
  assert.ok(!media.calls.some(([name]) => name === "loadLinked"));
});

test("an image already loaded from the cache is ready at once", () => {
  const loader = loadNodeInputImage({ media: fakeMedia({ own: image("ready") }), node, inputs, channel: "background", current: () => true });
  assert.equal(loader.state(), "ready");
});

test("a settle of an image no longer shown is ignored", () => {
  const own = image();
  const linked = image();
  const media = fakeMedia({ own, linked });
  const changes = [];
  const loader = loadNodeInputImage({ media, node, inputs, channel: "background", onChange: () => changes.push(1), current: () => true });
  settle(own, "failed");
  media.settleOwn(own);
  // The result image settling again after the fallback changes nothing.
  settle(own, "ready");
  media.settleOwn(own);
  // Another image's settle through the linked callback changes nothing either.
  media.settleLinked(image("ready"));
  assert.equal(loader.image(), linked);
  assert.equal(loader.state(), "loading");
  assert.deepEqual(changes, [1]);
});
