// A raster object of the paint as the editor's views draw it while the paint eraser is drawn
// (editor/paint_layers.js buildEditorViewPaintLayers): its ERP canvas with the live eraser cut out of it.
import { clamp } from "./pano_math.js";

// A raster object's approximate box on an ERP of width x height ({ minX, maxX, minY, maxY, wraps }), or null.
export function rasterObjectErpBounds(item, width, height) {
  if (!item?.bbox) return null;
  const bbox = item.bbox;
  const tf = item.transform || {};
  const u0 = Number(bbox.u0 || 0) + Number(tf.du || 0);
  const u1 = Number(bbox.u1 || 0) + Number(tf.du || 0);
  const v0 = Number(bbox.v0 || 0) + Number(tf.dv || 0);
  const v1 = Number(bbox.v1 || 0) + Number(tf.dv || 0);
  return {
    minX: Math.floor((((u0 % 1) + 1) % 1) * width),
    maxX: Math.ceil((((u1 % 1) + 1) % 1) * width),
    minY: Math.floor(clamp(v0, 0, 1) * height),
    maxY: Math.ceil(clamp(v1, 0, 1) * height),
    wraps: (u1 - u0) >= 1 || u0 < 0 || u1 > 1,
  };
}

export function erpBoundsIntersect(a, b, width) {
  if (!a || !b) return false;
  const split = (box) => {
    if (!box.wraps) return [box];
    return [
      { minX: 0, maxX: box.maxX, minY: box.minY, maxY: box.maxY, wraps: false },
      { minX: box.minX, maxX: width - 1, minY: box.minY, maxY: box.maxY, wraps: false },
    ];
  };
  const aa = split(a);
  const bb = split(b);
  return aa.some((x) => bb.some((y) => !(x.maxX < y.minX || y.maxX < x.minX || x.maxY < y.minY || y.maxY < x.minY)));
}

// A raster object as the views draw it ({ media, revision, changed }): its ERP canvas (sourceCanvas), or a
// canvas with the live eraser cut out of it where the eraser takes some of its pixels. `display` is the raster
// object's record ({ log: createDamageLog(), base }, kept by the caller): the damage log follows what the views
// show across both canvases, and the canvas with the eraser is drawn again only where the eraser changed.
// previewInfo is the live eraser's preview ({ surface, bounds, box, key }, or null): its canvas, the bounds of its
// pixels over 8, the box it drew in and a key that changes with it. createSurface(width, height) makes a
// { canvas, ctx } that is read back.
export function rasterEraserDisplay(display, sourceCanvas, item, previewInfo, createSurface) {
  const { log } = display;
  if (display.base !== sourceCanvas) {
    Object.assign(display, { base: sourceCanvas, applied: null, box: null, key: null, showing: false });
    log.mark(null);
  }
  const width = Number(sourceCanvas.width || 0);
  const height = Number(sourceCanvas.height || 0);
  const objectBounds = previewInfo?.surface?.canvas && width >= 1 && height >= 1
    ? rasterObjectErpBounds(item, width, height)
    : null;
  const reaches = !!previewInfo?.surface?.canvas && width >= 1 && height >= 1
    && !(objectBounds && !erpBoundsIntersect(objectBounds, previewInfo.bounds, width));
  let touched = false;
  if (reaches) {
    const eraser = previewInfo.surface.canvas;
    const draw = (x0, y0, x1, y1) => {
      const { ctx } = display.applied;
      const w = x1 - x0;
      const h = y1 - y0;
      if (w < 1 || h < 1) return;
      ctx.clearRect(x0, y0, w, h);
      ctx.drawImage(sourceCanvas, x0, y0, w, h, x0, y0, w, h);
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.drawImage(eraser, x0, y0, w, h, x0, y0, w, h);
      ctx.restore();
    };
    let changed = null;
    if (!display.applied) {
      display.applied = createSurface(width, height);
      draw(0, 0, width, height);
      changed = previewInfo.box;
    } else if (display.key !== previewInfo.key) {
      // The eraser had its pixels in the box before and has them in its box now.
      const a = display.box ?? previewInfo.box;
      const b = previewInfo.box;
      changed = { x0: Math.min(a.x0, b.x0), y0: Math.min(a.y0, b.y0), x1: Math.max(a.x1, b.x1), y1: Math.max(a.y1, b.y1) };
      draw(changed.x0, changed.y0, changed.x1, changed.y1);
    }
    const before = display.box;
    display.box = previewInfo.box;
    display.key = previewInfo.key;
    // Whether the eraser takes some of its pixels, within the eraser's bounds.
    const minX = clamp(Math.floor(Number(previewInfo.bounds?.minX || 0)), 0, Math.max(0, width - 1));
    const minY = clamp(Math.floor(Number(previewInfo.bounds?.minY || 0)), 0, Math.max(0, height - 1));
    const maxX = clamp(Math.ceil(Number(previewInfo.bounds?.maxX || 0)), minX, Math.max(0, width - 1));
    const maxY = clamp(Math.ceil(Number(previewInfo.bounds?.maxY || 0)), minY, Math.max(0, height - 1));
    const regionW = Math.max(1, maxX - minX + 1);
    const regionH = Math.max(1, maxY - minY + 1);
    const beforeData = sourceCanvas.getContext("2d").getImageData(minX, minY, regionW, regionH);
    const afterData = display.applied.ctx.getImageData(minX, minY, regionW, regionH);
    for (let i = 0; i < regionW * regionH; i += 1) {
      if (beforeData.data[i * 4 + 3] > afterData.data[i * 4 + 3]) {
        touched = true;
        break;
      }
    }
    if (touched && display.showing && changed) log.mark([changed]);
    if (touched && !display.showing) log.mark([previewInfo.box]);
    if (!touched && display.showing) log.mark([before ?? previewInfo.box]);
  } else {
    if (display.showing) log.mark([display.box]);
    display.applied = null;
    display.box = null;
    display.key = null;
  }
  display.showing = touched;
  return { media: touched ? display.applied.canvas : sourceCanvas, revision: log.revision, changed: log.since };
}

