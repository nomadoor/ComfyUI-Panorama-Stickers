import assert from "node:assert/strict";
import test from "node:test";

import {
  buildSharedImageCacheKey,
  createSharedImageCache,
  nextMediaRevision,
} from "../web_src/pano_shared_image_cache.js";

class FakeImage {
  complete = false;
  naturalWidth = 0;
  width = 0;
}

test("a pending shared image notifies every subscribed node once", () => {
  const cache = createSharedImageCache({ ImageCtor: FakeImage });
  const first = {};
  const second = {};
  const settled = [];
  const image = cache.get(first, "same", "/same.png", () => settled.push("first"));
  assert.equal(cache.get(second, "same", "/same.png", () => settled.push("second")), image);

  image.complete = true;
  image.naturalWidth = 10;
  image.onload();

  assert.deepEqual(settled.sort(), ["first", "second"]);
  assert.equal(image.onload, null);
});

test("disposing one node removes only its pending subscription", () => {
  const cache = createSharedImageCache({ ImageCtor: FakeImage });
  const first = {};
  const second = {};
  const settled = [];
  const image = cache.get(first, "same", "/same.png", () => settled.push("first"));
  cache.get(second, "same", "/same.png", () => settled.push("second"));

  cache.disposeOwner(first);
  image.onerror();

  assert.deepEqual(settled, ["second"]);
});

test("a failed shared image is retried on the next request", () => {
  const cache = createSharedImageCache({ ImageCtor: FakeImage });
  const owner = {};
  const first = cache.get(owner, "same", "/same.png");

  first.onerror();
  const retry = cache.get(owner, "same", "/same.png");

  assert.notEqual(retry, first);
});

test("the same URL and state hash select a fresh image after each execution revision", () => {
  const cache = createSharedImageCache({ ImageCtor: FakeImage });
  const owner = {};
  const firstRevision = nextMediaRevision(0);
  const secondRevision = nextMediaRevision(firstRevision);
  const first = cache.get(owner, buildSharedImageCacheKey("/same.png", "same", firstRevision), "/same.png?pano_rev=1");
  const second = cache.get(owner, buildSharedImageCacheKey("/same.png", "same", secondRevision), "/same.png?pano_rev=2");

  assert.equal(firstRevision, 1);
  assert.equal(secondRevision, 2);
  assert.notEqual(first, second);
});

test("settled unobserved images are evicted by the cache bound", () => {
  const cache = createSharedImageCache({ ImageCtor: FakeImage, maxEntries: 2 });
  const owner = {};
  const first = cache.get(owner, "first", "/first.png");
  first.complete = true;
  first.naturalWidth = 1;
  first.onload();
  const second = cache.get(owner, "second", "/second.png");
  second.complete = true;
  second.naturalWidth = 1;
  second.onload();
  cache.get(owner, "third", "/third.png");

  assert.notEqual(cache.get(owner, "first", "/first.png"), first);
});
