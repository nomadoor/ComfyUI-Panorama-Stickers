import assert from "node:assert/strict";
import test from "node:test";

import {
  buildRasterObjectErpPlacement,
  createRasterObjectSurfaceCache,
  resolveRasterPreviewSize,
} from "../web_src/pano_raster_object_surface.js";

test("raster object placement matches the modal ERP transform including seam copies", () => {
  const placement = buildRasterObjectErpPlacement({
    bbox: { u0: 0.25, v0: 0.2, u1: 0.5, v1: 0.6 },
    transform: { du: 0.1, dv: -0.05, rot_deg: 90, scale: 1.5 },
  }, 1000, 500);

  assert.ok(Math.abs(placement.centerX - 475) < 1e-9);
  assert.ok(Math.abs(placement.centerY - 175) < 1e-9);
  assert.ok(Math.abs(placement.width - 250) < 1e-9);
  assert.ok(Math.abs(placement.height - 200) < 1e-9);
  assert.ok(Math.abs(placement.rotationRad - Math.PI / 2) < 1e-12);
  assert.equal(placement.scale, 1.5);
  assert.deepEqual(placement.wrapOffsets, [-1000, 0, 1000]);
});

test("invalid raster bounds are rejected before allocating a surface", () => {
  assert.equal(buildRasterObjectErpPlacement({ bbox: { u0: 0.5, v0: 0.2, u1: 0.5, v1: 0.6 } }, 1000, 500), null);
  assert.equal(buildRasterObjectErpPlacement({ bbox: { u0: 0, v0: 0, u1: 1, v1: 1 } }, 0, 500), null);
});

test("node preview raster surfaces are capped independently from output resolution", () => {
  assert.deepEqual(resolveRasterPreviewSize(512), { width: 512, height: 256 });
  assert.deepEqual(resolveRasterPreviewSize(2048), { width: 1024, height: 512 });
  assert.deepEqual(resolveRasterPreviewSize(4096), { width: 1024, height: 512 });
});

test("a raster object retains only its latest transformed surface", () => {
  const previousImage = globalThis.Image;
  const previousDocument = globalThis.document;
  let canvasCount = 0;
  globalThis.Image = class ReadyImage {
    complete = true;
    naturalWidth = 100;
    naturalHeight = 50;
  };
  globalThis.document = {
    createElement() {
      canvasCount += 1;
      return {
        width: 0,
        height: 0,
        getContext: () => ({
          save() {},
          translate() {},
          rotate() {},
          scale() {},
          drawImage() {},
          restore() {},
        }),
      };
    },
  };
  try {
    const cache = createRasterObjectSurfaceCache();
    const base = {
      id: "raster-a",
      layerKind: "paint",
      rasterDataUrl: "data:image/png;base64,ready",
      bbox: { u0: 0, v0: 0, u1: 0.5, v1: 0.5 },
      transform: { du: 0, dv: 0, rot_deg: 0, scale: 1 },
    };
    const first = cache.get(base, 100, 50);
    const second = cache.get({ ...base, transform: { ...base.transform, du: 0.1 } }, 100, 50);
    const rebuiltFirst = cache.get(base, 100, 50);
    cache.retain([]);
    const afterRemoval = cache.get(base, 100, 50);

    assert.notEqual(first.source, second.source);
    assert.notEqual(first.source, rebuiltFirst.source);
    assert.notEqual(rebuiltFirst.source, afterRemoval.source);
    assert.equal(canvasCount, 4);
  } finally {
    globalThis.Image = previousImage;
    globalThis.document = previousDocument;
  }
});

test("dispose detaches pending raster image callbacks", () => {
  const previousImage = globalThis.Image;
  const images = [];
  globalThis.Image = class FakeImage {
    constructor() {
      this.complete = false;
      images.push(this);
    }
  };
  try {
    const cache = createRasterObjectSurfaceCache();
    cache.get({
      id: "pending",
      layerKind: "paint",
      rasterDataUrl: "data:image/png;base64,pending",
      bbox: { u0: 0, v0: 0, u1: 0.5, v1: 0.5 },
    }, 100, 50, () => {});
    assert.equal(typeof images[0].onload, "function");
    cache.dispose();
    assert.equal(images[0].onload, null);
    assert.equal(images[0].onerror, null);
  } finally {
    globalThis.Image = previousImage;
  }
});
