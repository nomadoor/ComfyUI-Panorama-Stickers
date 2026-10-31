import assert from "node:assert/strict";
import test from "node:test";

import { createPaintDisplay, PAINT_DISPLAY_PLACES, placeRasterObjectErp } from "../web_src/pano_paint_display.js";
import { normalizePaintingState } from "../web_src/pano_paint_types.js";

// The paint display (web_src/pano_paint_display.js, docs/editor-architecture.md "Paint layers"): the raster objects'
// placement, and each rule column of PAINT_DISPLAY_PLACES on its own, the others held at BASE.

test("raster object placement matches the modal ERP transform including seam copies", () => {
  const placement = placeRasterObjectErp({
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
  assert.equal(placeRasterObjectErp({ bbox: { u0: 0.5, v0: 0.2, u1: 0.5, v1: 0.6 } }, 1000, 500), null);
  assert.equal(placeRasterObjectErp({ bbox: { u0: 0, v0: 0, u1: 1, v1: 1 } }, 0, 500), null);
  assert.equal(placeRasterObjectErp({}, 1000, 500), null);
});

test("minPixel grows a thinner box from its top left; 0 keeps it as it is, centered", () => {
  const thin = { bbox: { u0: 0.5, v0: 0.2, u1: 0.5004, v1: 0.6 } };
  const grown = placeRasterObjectErp(thin, 1000, 500, { minPixel: 1 });
  assert.equal(grown.width, 1);
  assert.ok(Math.abs(grown.centerX - 500.5) < 1e-9);
  const kept = placeRasterObjectErp(thin, 1000, 500, { minPixel: 0 });
  assert.ok(Math.abs(kept.width - 0.4) < 1e-9);
  assert.ok(Math.abs(kept.centerX - 500.2) < 1e-9);
});

// --- A browser of fakes: images that load on flush(), canvases that log drawImage.

function fakes() {
  const images = [];
  const canvases = [];
  const saved = { Image: globalThis.Image, document: globalThis.document };
  globalThis.Image = class FakeImage {
    constructor() {
      Object.assign(this, { complete: false, naturalWidth: 0, width: 0, onload: null, onerror: null });
      images.push(this);
    }
    set src(value) {
      this._src = value;
    }
    get src() {
      return this._src;
    }
  };
  globalThis.document = {
    createElement() {
      const canvas = { width: 0, height: 0, draws: [] };
      canvas.getContext = () => new Proxy({}, {
        get: (target, name) => (name === "drawImage" ? (...args) => canvas.draws.push(args.slice(1)) : () => {}),
      });
      canvases.push(canvas);
      return canvas;
    },
  };
  return {
    images,
    canvases,
    flush(broken = false) {
      for (const image of images) {
        if (image.complete) continue;
        Object.assign(image, { complete: true, naturalWidth: broken ? 0 : 64, width: broken ? 0 : 64 });
        (broken ? image.onerror : image.onload)?.();
      }
    },
    restore() {
      Object.assign(globalThis, saved);
    },
  };
}

const BASE = { engine: "caller", keep: "latest", release: false, retain: "none", minPixel: 1, ready: "decoded", images: "recent16", rasterSize: () => ({ width: 100, height: 50 }) };
const raster = (id, du = 0, extra = {}) => ({
  id, type: "raster_frozen", layerKind: "paint", z_index: 0, bbox: { u0: 0.1, v0: 0.1, u1: 0.3, v1: 0.3 },
  rasterDataUrl: `data:image/png;base64,${id}`, transform: { du, dv: 0, rot_deg: 0, scale: 1 }, ...extra,
});
const stateOf = (rasters, extra = {}) => ({ painting: normalizePaintingState({ raster_objects: rasters, ...extra.painting }), painting_visible: extra.visible ?? true, stickers: [] });

function withFakes(fn) {
  const env = fakes();
  try {
    fn(env);
  } finally {
    env.restore();
  }
}

test("every place's row is a set of rule options createPaintDisplay takes", () => {
  withFakes(() => {
    for (const row of Object.values(PAINT_DISPLAY_PLACES)) {
      createPaintDisplay({ ...row, size: () => ({ width: 100, height: 50 }), image: () => null }).dispose();
    }
  });
});

test("options that do not go together are refused", () => {
  assert.throws(() => createPaintDisplay({ ...BASE, keep: "seen" }), /seenLimit/);
  assert.throws(() => createPaintDisplay({ ...BASE, seenLimit: 4 }), /seenLimit/);
  assert.throws(() => createPaintDisplay({ ...BASE, engine: "own" }), /mask/);
  assert.throws(() => createPaintDisplay({ ...BASE, engine: "own", mask: true }), /size/);
  assert.throws(() => createPaintDisplay({ ...BASE, mask: true }), /mask/);
  assert.throws(() => createPaintDisplay({ ...BASE, images: "caller" }), /image/);
  assert.throws(() => createPaintDisplay({ ...BASE, retain: "some" }), /retain/);
});

test("keep: latest makes a look again after another; seen gives a look seen before and clears past seenLimit", () => {
  withFakes((env) => {
    const latest = createPaintDisplay(BASE);
    latest.rasterCanvas(raster("a"));
    env.flush();
    const first = latest.rasterCanvas(raster("a"));
    latest.rasterCanvas(raster("a", 0.2));
    assert.notEqual(latest.rasterCanvas(raster("a")), first);

    const seen = createPaintDisplay({ ...BASE, keep: "seen", seenLimit: 2 });
    seen.rasterCanvas(raster("a"));
    env.flush();
    const a0 = seen.rasterCanvas(raster("a"));
    assert.ok(a0);
    seen.rasterCanvas(raster("a", 0.2));
    assert.equal(seen.rasterCanvas(raster("a")), a0);
    seen.rasterCanvas(raster("a", 0.3));
    seen.rasterCanvas(raster("a", 0.4));
    // Three were kept, more than 2: all went before the fourth look was added.
    assert.notEqual(seen.rasterCanvas(raster("a")), a0);
  });
});

test("release shrinks a canvas let go to nothing; without it the canvas is only dropped", () => {
  withFakes((env) => {
    for (const release of [true, false]) {
      const display = createPaintDisplay({ ...BASE, release });
      display.rasterCanvas(raster("a"));
      env.flush();
      const first = display.rasterCanvas(raster("a"));
      display.rasterCanvas(raster("a", 0.5));
      assert.equal(first.width, release ? 0 : 100);
    }
  });
});

test("retain: state keeps the state's rasters, asked the ones asked for (none while hidden), none keeps all", () => {
  withFakes((env) => {
    const kept = (rule, state) => {
      const display = createPaintDisplay({ ...BASE, retain: rule });
      display.layers(stateOf([raster("a"), raster("b")]));
      env.flush();
      const before = display.layers(stateOf([raster("a"), raster("b")])).map((layer) => layer.media);
      display.layers(state);
      const after = display.layers(stateOf([raster("a"), raster("b")])).map((layer) => layer.media);
      return before.map((media, index) => media === after[index]);
    };
    assert.deepEqual(kept("state", stateOf([raster("a")])), [true, false]);
    assert.deepEqual(kept("state", stateOf([raster("a"), raster("b")], { visible: false })), [true, true]);
    assert.deepEqual(kept("asked", stateOf([raster("a"), raster("b")], { visible: false })), [false, false]);
    assert.deepEqual(kept("asked", stateOf([raster("b")])), [false, true]);
    assert.deepEqual(kept("none", stateOf([])), [true, true]);
  });
});

test("ready: complete draws an image that failed to load; decoded waits for pixels", () => {
  withFakes((env) => {
    const complete = createPaintDisplay({ ...BASE, ready: "complete" });
    const decoded = createPaintDisplay({ ...BASE, ready: "decoded" });
    complete.rasterCanvas(raster("x"));
    decoded.rasterCanvas(raster("x"));
    env.flush(true);
    assert.ok(complete.rasterCanvas(raster("x")));
    assert.equal(decoded.rasterCanvas(raster("x")), null);
  });
});

test("images: perEntry makes an image per canvas; recent16 one per data URL; caller asks image()", () => {
  withFakes((env) => {
    let readies = 0;
    const perEntry = createPaintDisplay({ ...BASE, images: "perEntry", onReady: () => (readies += 1) });
    perEntry.rasterCanvas(raster("a"));
    perEntry.rasterCanvas(raster("a", 0.2));
    assert.equal(env.images.length, 2);
    assert.equal(perEntry.rasterImage(raster("a")), env.images[1]);
    env.flush();
    assert.equal(readies, 2);

    const recent = createPaintDisplay({ ...BASE, images: "recent16" });
    recent.rasterCanvas(raster("b"));
    recent.rasterCanvas(raster("b", 0.2));
    assert.equal(env.images.length, 3);
    assert.equal(recent.rasterImage(raster("b")), null);

    const asked = [];
    const caller = createPaintDisplay({ ...BASE, images: "caller", image: (item, onReady) => (asked.push([item.id, onReady]), null) });
    const mine = () => {};
    caller.rasterCanvas(raster("c"), mine);
    assert.deepEqual(asked, [["c", mine]]);
  });
});

test("minPixel is passed to the placement of every canvas", () => {
  withFakes((env) => {
    const thin = raster("t", 0, { bbox: { u0: 0.5, v0: 0.1, u1: 0.502, v1: 0.3 } });
    for (const minPixel of [1, 0]) {
      const display = createPaintDisplay({ ...BASE, minPixel });
      display.rasterCanvas(thin);
      env.flush();
      const canvas = display.rasterCanvas(thin);
      assert.ok(Math.abs(canvas.draws[0][2] - (minPixel ? 1 : 0.2)) < 1e-9);
    }
  });
});

test("engine: own makes its engine on the first group or (with mask) mask asked, draws it again for a new painting, keeps it without strokes", () => {
  withFakes(() => {
    const made = [];
    const createEngine = (descriptor) => {
      const engine = {
        descriptor, rebuilds: 0, groups: new Set(),
        rebuildCommitted({ painting }) {
          engine.rebuilds += 1;
          engine.groups = new Set(painting.paint.strokes.map((item) => item.actionGroupId));
        },
        getGroupDisplayCanvas: (id) => (engine.groups.has(id) ? `canvas:${id}` : null),
        getMaskDisplay: () => ({ media: "mask", revision: "m" }),
      };
      made.push(engine);
      return engine;
    };
    const stroke = (id, actionGroupId, layerKind = "paint") => ({
      id, actionGroupId, layerKind, toolKind: "pen", targetSpace: { kind: "ERP_GLOBAL" }, size: 10, opacity: 1,
      color: { r: 1, g: 0, b: 0, a: 1 }, geometry: { geometryKind: "freehand_open", points: [{ u: 0.5, v: 0.5 }, { u: 0.51, v: 0.5 }] },
    });
    const maskOnly = stateOf([], { painting: { mask: { strokes: [stroke("m", "gm", "mask")] } } });
    let width = 200;
    const own = (mask) => createPaintDisplay({ ...BASE, engine: "own", mask, size: () => ({ width, height: width / 2 }), createEngine });
    // The mask makes the engine only where the mask is shown.
    assert.deepEqual(own(false).layers(maskOnly), []);
    assert.equal(made.length, 0);
    assert.deepEqual(own(true).layers(maskOnly).map((layer) => layer.id), ["mask_display"]);
    assert.equal(made.length, 1);

    const display = own(false);
    const one = stateOf([], { painting: { paint: { strokes: [stroke("s", "g")] } } });
    const [first] = display.layers(one);
    assert.deepEqual(display.layers(one), [first]);
    const two = stateOf([], { painting: { paint: { strokes: [stroke("s", "g"), stroke("t", "g")] } } });
    const [second] = display.layers(two);
    assert.equal(second.media, first.media);
    assert.notEqual(second.revision, first.revision);
    assert.equal(made.length, 2);
    // Without strokes it draws nothing and keeps the engine; another size makes another.
    assert.deepEqual(display.layers(stateOf([])), []);
    display.layers(two);
    assert.equal(made.length, 2);
    width = 400;
    display.layers(two);
    assert.equal(made.length, 3);
  });
});

test("dispose lets go of the canvases and detaches the images' callbacks", () => {
  withFakes((env) => {
    const display = createPaintDisplay({ ...BASE, release: true, images: "perEntry" });
    display.rasterCanvas(raster("a"));
    env.flush();
    const canvas = display.rasterCanvas(raster("a"));
    display.rasterCanvas(raster("b"));
    display.dispose();
    assert.equal(canvas.width, 0);
    assert.equal(env.images[1].onload, null);
    assert.equal(display.rasterCanvas(raster("a")), null);
  });
});
