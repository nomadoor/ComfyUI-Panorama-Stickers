import assert from "node:assert/strict";
import test from "node:test";

import {
  IMAGE_FAILED,
  IMAGE_LOADING,
  IMAGE_READY,
  getImageLoadState,
  markImageFailed,
  markImageLoading,
  markImageReady,
  stageImageStatus,
} from "../web_src/pano_image_state.js";

const decoded = (image) => Number(image?.naturalWidth || 0) > 0;

test("failed images are terminal rather than permanently pending", () => {
  const image = { complete: true, naturalWidth: 0, src: "/missing.png" };
  markImageLoading(image, image.src);
  assert.equal(getImageLoadState(image, decoded), IMAGE_LOADING);

  markImageFailed(image, image.src);
  assert.equal(getImageLoadState(image, decoded), IMAGE_FAILED);
});

test("decoded images become ready and absent images do not block", () => {
  const image = { complete: true, naturalWidth: 1024, src: "/ready.png" };
  markImageReady(image, image.src);
  assert.equal(getImageLoadState(image, decoded), IMAGE_READY);
  assert.equal(getImageLoadState(null, decoded), IMAGE_READY);
});

test("stage status distinguishes pending and failed sources", () => {
  assert.deepEqual(stageImageStatus({ presented: false }), { status: IMAGE_LOADING, detail: "boot" });
  assert.deepEqual(stageImageStatus({ presented: true, background: IMAGE_LOADING, stickers: [] }), {
    status: IMAGE_LOADING,
    detail: "background",
  });
  assert.deepEqual(stageImageStatus({ presented: true, background: IMAGE_READY, stickers: [IMAGE_LOADING] }), {
    status: IMAGE_LOADING,
    detail: "stickers",
  });
  assert.deepEqual(stageImageStatus({ presented: true, background: IMAGE_LOADING, stickers: [IMAGE_LOADING] }), {
    status: IMAGE_LOADING,
    detail: "mixed",
  });
  assert.deepEqual(stageImageStatus({ presented: true, background: IMAGE_FAILED, stickers: [] }), {
    status: IMAGE_FAILED,
    detail: "background",
  });
  assert.deepEqual(stageImageStatus({ presented: true, background: IMAGE_READY, stickers: [IMAGE_FAILED] }), {
    status: IMAGE_FAILED,
    detail: "stickers",
  });
  assert.deepEqual(stageImageStatus({ presented: true, background: IMAGE_READY, stickers: [IMAGE_READY] }), {
    status: IMAGE_READY,
    detail: "",
  });
});
