// The paint of a state as the Sky layers one place shows (docs/editor-architecture.md "Paint layers"): the new UI's
// stage (studio/paint.js), the old editor's views (editor/paint_layers.js), a node surface (pano_surface_paint.js) and
// an upstream Scene's layer (pano_upstream_layers.js) each make one display. It places the raster objects on ERP
// canvases, keeps those canvases and lets them go, loads their images, draws the stroke groups of a place that only
// reads the paint with a paint engine of its own, and lays it all out with skyPaintLayers (pano_paint_layers.js).
//
// The places differ in when they make a canvas again, let it go and how they keep the images. Those rules are the
// columns of PAINT_DISPLAY_PLACES, each read here as an option of its own; nothing here asks which place it is.
import { createPanoCanvas, releasePanoCanvas } from "./pano_diagnostics.js";
import { createPaintEngineManager } from "./pano_paint_engine.js";
import { engineMask, skyPaintLayers } from "./pano_paint_layers.js";

// Each place's rules (createPaintDisplay's options). A place spreads its row: createPaintDisplay({ ...PAINT_DISPLAY_PLACES.surface, size }).
// engine: "caller" (the place draws strokes with its own engine and passes group / mask to layers()) or "own" (this
//   display makes a paint engine of `size` when a group, or with `mask` the mask, is first asked for and the painting
//   has strokes, draws it again when the painting changes, and keeps it while the painting has no strokes).
// keep: "latest" (one canvas per raster object, its latest) or "seen" (a canvas per raster object's look ever seen,
//   all let go before adding one when there are more than `seenLimit`).
// release: whether a canvas let go is shrunk to nothing (releasePanoCanvas).
// retain: after layers(), let go of the canvases of raster objects not in the state ("state"), not asked for ("asked":
//   a hidden painting asks for none), or none ("none").
// minPixel: the least width and height, in pixels, a raster object is drawn at (placeRasterObjectErp).
// ready: when an image can be drawn: "decoded" (complete with pixels) or "complete" (complete or sized).
// images: "perEntry" (an image per canvas, made again with it), "recent16" (an image per data URL, at most 16 loaded
//   ones kept, the oldest let go) or "caller" (`image(item, onReady)` gives it).
export const PAINT_DISPLAY_PLACES = Object.freeze({
  studio: Object.freeze({ engine: "caller", keep: "latest", release: true, retain: "state", minPixel: 1, ready: "decoded", images: "perEntry" }),
  editor: Object.freeze({ engine: "caller", keep: "seen", seenLimit: 64, release: false, retain: "none", minPixel: 1, ready: "complete", images: "caller" }),
  surface: Object.freeze({ engine: "own", mask: false, keep: "latest", release: false, retain: "asked", minPixel: 0, ready: "decoded", images: "recent16" }),
  upstream: Object.freeze({ engine: "own", mask: true, keep: "latest", release: true, retain: "none", minPixel: 1, ready: "decoded", images: "caller" }),
});

function finite(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

// Where the raster object `item` (its bbox in ERP uv and its transform) lies on an ERP of width x height: its center,
// size (at least `minPixel` pixels each way, grown from its top left), rotation, scale and the seam's copies. Null
// when it has no box, an empty box, or the ERP has no size.
export function placeRasterObjectErp(item, width, height, { minPixel = 1 } = {}) {
  const erpWidth = finite(width);
  const erpHeight = finite(height);
  const bbox = item?.bbox;
  if (!bbox || erpWidth < 1 || erpHeight < 1) return null;
  const u0 = finite(bbox.u0);
  const v0 = finite(bbox.v0);
  const u1 = finite(bbox.u1);
  const v1 = finite(bbox.v1);
  if (u1 <= u0 || v1 <= v0) return null;
  const transform = item.transform || {};
  const boxWidth = Math.max(minPixel, (u1 - u0) * erpWidth);
  const boxHeight = Math.max(minPixel, (v1 - v0) * erpHeight);
  return {
    centerX: u0 * erpWidth + boxWidth * 0.5 + finite(transform.du) * erpWidth,
    centerY: v0 * erpHeight + boxHeight * 0.5 + finite(transform.dv) * erpHeight,
    width: boxWidth,
    height: boxHeight,
    rotationRad: finite(transform.rot_deg) * (Math.PI / 180),
    scale: Math.max(0.01, finite(transform.scale, 1)),
    wrapOffsets: [-erpWidth, 0, erpWidth],
  };
}

// Draws the raster object `item` (its image `image`) on the ERP canvas context `ctx` of width x height, wrapped across
// the seam. Returns whether it drew.
export function drawRasterObjectErp(ctx, image, item, width, height, { minPixel = 1 } = {}) {
  const placement = placeRasterObjectErp(item, width, height, { minPixel });
  if (!placement) return false;
  for (const wrapOffset of placement.wrapOffsets) {
    ctx.save();
    ctx.translate(placement.centerX + wrapOffset, placement.centerY);
    ctx.rotate(placement.rotationRad);
    ctx.scale(placement.scale, placement.scale);
    ctx.drawImage(image, -placement.width * 0.5, -placement.height * 0.5, placement.width, placement.height);
    ctx.restore();
  }
  return true;
}

const COLUMNS = {
  engine: ["caller", "own"],
  keep: ["latest", "seen"],
  retain: ["state", "asked", "none"],
  ready: ["decoded", "complete"],
  images: ["perEntry", "recent16", "caller"],
};

function checkOptions(options) {
  for (const [name, values] of Object.entries(COLUMNS)) {
    if (!values.includes(options[name])) throw new Error(`createPaintDisplay: ${name} must be one of ${values.join(", ")}`);
  }
  if (typeof options.release !== "boolean") throw new Error("createPaintDisplay: release must be true or false");
  if (!Number.isFinite(options.minPixel) || options.minPixel < 0) throw new Error("createPaintDisplay: minPixel must be a number >= 0");
  if ((options.keep === "seen") !== Number.isFinite(options.seenLimit)) throw new Error("createPaintDisplay: seenLimit goes with keep \"seen\" only");
  if ((options.engine === "own") !== (typeof options.mask === "boolean")) throw new Error("createPaintDisplay: mask goes with engine \"own\" only");
  if (options.engine === "own" && typeof options.size !== "function") throw new Error("createPaintDisplay: engine \"own\" needs size()");
  if (options.images === "caller" && typeof options.image !== "function") throw new Error("createPaintDisplay: images \"caller\" needs image()");
  if (typeof options.rasterSize !== "function" && typeof options.size !== "function") throw new Error("createPaintDisplay: rasterSize() or size() is needed");
}

// Images by data URL, at most 16 loaded ones kept (the least recently asked for let go first). Every caller waiting for
// an image is told once when it loads or fails.
function createRecentImages() {
  const images = new Map();
  function trim() {
    if (images.size <= 16) return;
    for (const [key, entry] of images) {
      if (images.size <= 16) break;
      if (!entry.settled) continue;
      entry.image.onload = null;
      entry.image.onerror = null;
      images.delete(key);
    }
  }
  function get(dataUrl, onReady) {
    let entry = images.get(dataUrl);
    if (entry) {
      images.delete(dataUrl);
      images.set(dataUrl, entry);
      if (!entry.settled && typeof onReady === "function") entry.listeners.add(onReady);
      return entry.image;
    }
    const image = new Image();
    entry = { image, listeners: new Set(typeof onReady === "function" ? [onReady] : []), settled: false };
    images.set(dataUrl, entry);
    const settle = () => {
      entry.settled = true;
      const listeners = [...entry.listeners];
      entry.listeners.clear();
      listeners.forEach((listener) => listener());
      trim();
    };
    image.onload = settle;
    image.onerror = settle;
    image.src = dataUrl;
    trim();
    return image;
  }
  function dispose() {
    images.forEach((entry) => {
      entry.listeners.clear();
      entry.image.onload = null;
      entry.image.onerror = null;
    });
    images.clear();
  }
  return { get, dispose };
}

// The display of one place (see PAINT_DISPLAY_PLACES for the rule options). size() gives the own engine's descriptor
// ({ width, height, kind? }), rasterSize() (size() when not given) the raster canvases' { width, height }. image(item,
// onReady) gives a raster object's image (images "caller"). onReady() is called when an image has loaded (the place
// draws again). createEngine makes the own paint engine. label names the raster canvases (pano_diagnostics.js).
//
// layers(state, { group, mask, raster }) gives skyPaintLayers of `state` ({ painting, painting_visible, stickers }):
// with engine "caller", group(id) and mask() are the place's; raster(item, canvas), when given, gives the layer of a
// raster object from its canvas (else { media: canvas, revision }). rasterCanvas(item, onReady) gives a raster
// object's ERP canvas (null while its image loads); rasterImage(item) its image (images "perEntry", else null).
export function createPaintDisplay(options) {
  const {
    engine: engineRule, mask: showsMask = false, keep, seenLimit, release, retain, minPixel, ready, images: imageRule,
    size, rasterSize = size, image: callerImage = null, onReady = () => {}, createEngine = createPaintEngineManager,
    label = "paint-raster",
  } = options;
  checkOptions({ ...options, rasterSize });

  // keep "latest": id -> { key, dataUrl, canvas, image }. keep "seen": key -> canvas.
  const entries = new Map();
  const seen = new Map();
  const recent = imageRule === "recent16" ? createRecentImages() : null;
  const imageIds = new WeakMap();
  let nextImageId = 1;
  let disposed = false;
  // The own engine, its descriptor's key, the painting it drew last and the times it drew (the groups' revision).
  let engine = null;
  let engineKey = "";
  let builtFrom = null;
  let builds = 0;

  const isReady = (img) => !!img && (ready === "complete"
    ? !!(img.complete || img.width || img.naturalWidth)
    : !!(img.complete && Number(img.naturalWidth || img.width || 0) >= 1));

  function imageIdOf(img) {
    if (!imageIds.has(img)) imageIds.set(img, nextImageId++);
    return imageIds.get(img);
  }

  function letGo(canvas) {
    if (release && canvas) releasePanoCanvas(canvas);
  }

  function loadImage(item, ready) {
    if (imageRule === "caller") return callerImage(item, ready);
    return recent.get(String(item.rasterDataUrl || ""), ready);
  }

  function draw(img, item, width, height) {
    const canvas = createPanoCanvas({ label });
    canvas.width = Math.max(1, Math.round(width));
    canvas.height = Math.max(1, Math.round(height));
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    drawRasterObjectErp(ctx, img, item, canvas.width, canvas.height, { minPixel });
    return canvas;
  }

  function lookKey(item, width, height) {
    const bbox = item.bbox;
    const tf = item.transform || {};
    return [item.id, width, height, bbox.u0, bbox.v0, bbox.u1, bbox.v1, tf.du, tf.dv, tf.rot_deg, tf.scale].join(":");
  }

  function rasterCanvas(item, ready = onReady) {
    if (disposed || !item?.bbox) return null;
    const { width, height } = rasterSize();
    if (keep === "seen") {
      const img = loadImage(item, ready);
      if (!isReady(img)) return null;
      const key = `${lookKey(item, width, height)}:${imageIdOf(img)}`;
      const cached = seen.get(key);
      if (cached) return cached;
      if (seen.size > seenLimit) {
        seen.forEach(letGo);
        seen.clear();
      }
      const canvas = draw(img, item, width, height);
      if (canvas) seen.set(key, canvas);
      return canvas;
    }
    const key = lookKey(item, width, height);
    const dataUrl = item.rasterDataUrl;
    let entry = entries.get(item.id);
    if (entry && (entry.key !== key || entry.dataUrl !== dataUrl)) {
      letGo(entry.canvas);
      entries.delete(item.id);
      entry = null;
    }
    if (!entry) {
      entry = { key, dataUrl, canvas: null, image: null };
      if (imageRule === "perEntry") {
        const img = new Image();
        img.onload = () => {
          if (!disposed) onReady();
        };
        img.src = dataUrl;
        entry.image = img;
      }
      entries.set(item.id, entry);
    }
    if (!entry.canvas) {
      const img = entry.image ?? loadImage(item, ready);
      if (!isReady(img)) return null;
      entry.canvas = draw(img, item, width, height);
    }
    return entry.canvas;
  }

  function dropEntries(keepId) {
    for (const [id, entry] of [...entries]) {
      if (keepId(id)) continue;
      letGo(entry.canvas);
      entries.delete(id);
    }
  }

  // The own engine with the strokes of `painting`, or null without strokes (an engine made before stays).
  function ownEngine(painting) {
    if (!painting.paint.strokes.length && !painting.mask.strokes.length) return null;
    const descriptor = size();
    const key = `${descriptor.width}x${descriptor.height}`;
    if (!engine || engineKey !== key) {
      engine = createEngine(descriptor);
      engineKey = key;
      builtFrom = null;
    }
    if (builtFrom !== painting) {
      builtFrom = painting;
      builds += 1;
      engine.rebuildCommitted({ painting });
    }
    return engine;
  }

  function layers(state, sources = {}) {
    const asked = new Set();
    const own = engineRule === "own";
    const out = skyPaintLayers(state, {
      group: own
        ? (id) => {
          const media = ownEngine(state.painting)?.getGroupDisplayCanvas(id);
          return media ? { media, revision: `${builds}:${id}` } : null;
        }
        : (id) => sources.group?.(id) ?? null,
      raster: (item) => {
        asked.add(item.id);
        const canvas = rasterCanvas(item);
        if (!canvas) return null;
        if (sources.raster) return sources.raster(item, canvas);
        return { media: canvas, revision: keep === "seen" ? `${lookKey(item, canvas.width, canvas.height)}` : entries.get(item.id).key };
      },
      mask: own
        ? () => (showsMask ? engineMask(ownEngine(state.painting)) : null)
        : () => sources.mask?.() ?? null,
    });
    if (retain === "state") {
      const kept = new Set((state.painting?.raster_objects ?? []).map((item) => item.id));
      dropEntries((id) => kept.has(id));
    } else if (retain === "asked") {
      dropEntries((id) => asked.has(id));
    }
    return out;
  }

  return {
    layers,
    rasterCanvas,
    rasterImage(item) {
      return entries.get(item?.id)?.image ?? null;
    },
    dispose() {
      disposed = true;
      for (const entry of entries.values()) {
        letGo(entry.canvas);
        if (entry.image) entry.image.onload = null;
      }
      entries.clear();
      seen.forEach(letGo);
      seen.clear();
      recent?.dispose();
      engine = null;
      builtFrom = null;
    },
  };
}
