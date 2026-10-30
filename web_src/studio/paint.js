// Painting on the new UI's stage (docs/studio-ui.md "ペイントの道具"): a stroke of the Paint or Mask tool drawn on
// the Sky, recorded and committed by the lower paint strokes (pano_paint_strokes.js, as the old editor), its pixels drawn
// by a paint engine (pano_paint_engine.js), and the painting as the Sky layers the stage draws (pano_paint_layers.js
// skyPaintLayers), the live stroke included. Also the brush ring the overlay draws at the pointer.
//
// Directions come in the panorama convention (pano_editor_view.js viewProjection's rays): the Sky lies at infinity,
// so only the direction of the pointer decides where it paints, wherever the viewpoint is (CONTEXT.md "Sky").
//
// state(): the working state v2. tools(): the paint tools (paint_bar.js). edit(apply): writes a change of the painting
// as one Undo step (session.js editPainting) and returns its outcome. onStart(): a stroke began (playback stops).
// onChange(): what the stage draws of the painting changed (draw again). nodeLayer() gives the canvases the node's paint
// layer is uploaded from when the editor closes (paint_upload.js).
import { createPanoCanvas, releasePanoCanvas } from "../pano_diagnostics.js";
import { createPaintEngineManager } from "../pano_paint_engine.js";
import { drawRasterObjectErp, engineMask, skyPaintLayers } from "../pano_paint_layers.js";
import {
  brushPresetIdForTool, brushStrokeSize, colorToCss, commitPaintStroke, ensurePaintGroup, erpPointOfDirection,
  freehandStrokeRecord, lassoFillStrokeRecord, nextPaintZIndex, paintTargetDescriptor, strokeGroupFrame, strokeSample,
  syncPaintGroups, takesStrokePoint, topDisplayZIndex,
} from "../pano_paint_strokes.js";
import { brushOf, painting, toolBrush, toolLayer } from "./paint_bar.js";

// The brush ring at the pointer (docs/design.md "新しい UI の見た目" "ブラシの輪").
export const BRUSH_RING = Object.freeze({
  line: "rgba(255, 255, 255, 0.85)",
  lineWidth: 1.5,
  under: "rgba(0, 0, 0, 0.4)",
  underWidth: 3,
  fillAlpha: 0.25,
  mask: Object.freeze({ r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 1 }),
  minRadius: 3,
});

// The angle (radians) between two directions.
function angleBetween(a, b) {
  const la = Math.hypot(a.x, a.y, a.z) || 1;
  const lb = Math.hypot(b.x, b.y, b.z) || 1;
  const cos = (a.x * b.x + a.y * b.y + a.z * b.z) / (la * lb);
  return Math.acos(Math.max(-1, Math.min(1, cos)));
}

// The brush ring for the tools at `point` (CSS px of the view) where dirAt(point) gives the direction: { x, y, radius,
// fill } or null for the lasso (which has no ring). Its radius is the stroke's height there: an ERP stroke of radius
// r (a fraction of the ERP's width) spans 2πr of angle up and down whatever the direction.
export function brushRing(tools, point, dirAt) {
  if (!painting(tools) || !point) return null;
  const brush = toolBrush(tools);
  if (brush === "lasso_fill") return null;
  const size = brushStrokeSize(brush, brushOf(tools));
  const angle = (size * 0.5 / 2048) * 2 * Math.PI;
  const here = dirAt(point);
  const below = dirAt({ x: point.x, y: point.y + 1 });
  const perPixel = here && below ? angleBetween(here, below) : 0;
  const radius = Math.max(BRUSH_RING.minRadius, perPixel > 0 ? angle / perPixel : BRUSH_RING.minRadius);
  const mask = tools.tool === "mask";
  const fill = brush === "eraser" ? null : colorToCss(mask ? BRUSH_RING.mask : tools.paintColor, BRUSH_RING.fillAlpha);
  return { x: point.x, y: point.y, radius, fill };
}

export function createStudioPaint({ state, tools, edit, onStart = () => {}, onChange = () => {}, now = () => performance.now() }) {
  const descriptor = paintTargetDescriptor();
  let engine = null;
  // The painting the engine was rebuilt from (by reference, then by its strokes).
  let builtFrom = null;
  let builtKey = null;
  // The stroke under way: { layerKind, stroke }, or null.
  let active = null;
  // Counts what changed in the drawn painting (the stage's content is made again on a change).
  let revision = 0;
  // The raster objects on ERP canvases: id -> { key, canvas, image }.
  const rasters = new Map();
  let disposed = false;

  const bump = () => {
    revision += 1;
  };
  const skyOf = (scene) => scene.stickers.filter((item) => item.placement === "sky");

  function ensureEngine() {
    engine ??= createPaintEngineManager(descriptor);
    return engine;
  }

  // The engine draws the committed painting of the state; not while a stroke is under way (a rebuild ends its preview).
  function syncEngine() {
    const current = state().painting;
    if (active || !current || current === builtFrom) return;
    builtFrom = current;
    const key = JSON.stringify([current.paint?.strokes ?? [], current.mask?.strokes ?? []]);
    if (key === builtKey) return;
    builtKey = key;
    ensureEngine().rebuildCommitted({ painting: current });
    bump();
  }

  // A raster object on an ERP canvas of the paint's size, once its image has loaded (null before).
  function rasterCanvas(item) {
    const tf = item.transform || {};
    const key = [item.rasterDataUrl.length, item.rasterDataUrl.slice(-32), item.bbox.u0, item.bbox.v0, item.bbox.u1, item.bbox.v1, tf.du, tf.dv, tf.rot_deg, tf.scale].join(":");
    let entry = rasters.get(item.id);
    if (entry && entry.key !== key) {
      if (entry.canvas) releasePanoCanvas(entry.canvas);
      entry = null;
    }
    if (!entry) {
      const image = new Image();
      entry = { key, canvas: null, image };
      image.onload = () => {
        if (disposed) return;
        bump();
        onChange();
      };
      image.src = item.rasterDataUrl;
      rasters.set(item.id, entry);
    }
    if (!entry.canvas && entry.image.complete && entry.image.naturalWidth) {
      const canvas = createPanoCanvas({ label: "studio.paint-raster" });
      canvas.width = descriptor.width;
      canvas.height = descriptor.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;
      drawRasterObjectErp(ctx, entry.image, item, descriptor.width, descriptor.height);
      entry.canvas = canvas;
    }
    return entry.canvas;
  }

  // The alpha (0..255) of the raster object `item`'s image at (u, v) of its box (0..1 across), for the Cursor's hit
  // (stage_objects.js), or null while its image has not loaded. Its pixels are read once per image (by its data URL,
  // kept while a raster object of the state has it).
  const rasterPixels = new Map();
  function rasterAlpha(item, u, v) {
    const image = rasters.get(item.id)?.image;
    if (!image?.complete || !image.naturalWidth) return null;
    let pixels = rasterPixels.get(item.rasterDataUrl);
    if (!pixels) {
      const canvas = createPanoCanvas({ label: "studio.paint-raster-alpha" });
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return null;
      ctx.drawImage(image, 0, 0);
      pixels = { width: canvas.width, height: canvas.height, alpha: ctx.getImageData(0, 0, canvas.width, canvas.height).data };
      releasePanoCanvas(canvas);
      rasterPixels.set(item.rasterDataUrl, pixels);
    }
    const x = Math.min(pixels.width - 1, Math.max(0, Math.floor(u * pixels.width)));
    const y = Math.min(pixels.height - 1, Math.max(0, Math.floor(v * pixels.height)));
    return Number(pixels.alpha[(y * pixels.width + x) * 4 + 3] || 0);
  }

  // The painting as Sky layers (skyPaintLayers), the live stroke's group at the top while a new paint stroke is under
  // way (as the old editor's getOrderedDisplayListObjects).
  function layers() {
    const scene = state();
    const current = scene.painting;
    if (!current) return [];
    syncEngine();
    const strokes = (current.paint?.strokes?.length ?? 0) + (current.mask?.strokes?.length ?? 0);
    if (!strokes && !current.raster_objects?.length && !active) return [];
    let groups = current.groups;
    const gid = active?.layerKind === "paint" && active.stroke.toolKind !== "eraser" ? String(active.stroke.actionGroupId || "") : "";
    if (gid && !groups.some((group) => String(group.actionGroupId || group.id || "") === gid)) {
      groups = [...groups, { id: gid, actionGroupId: gid, z_index: nextPaintZIndex(current, skyOf(scene)) }];
    }
    const kept = new Set(current.raster_objects.map((item) => item.id));
    for (const [id, entry] of [...rasters]) {
      if (kept.has(id)) continue;
      if (entry.canvas) releasePanoCanvas(entry.canvas);
      rasters.delete(id);
    }
    const urls = new Set(current.raster_objects.map((item) => item.rasterDataUrl));
    for (const url of [...rasterPixels.keys()]) if (!urls.has(url)) rasterPixels.delete(url);
    const shown = engine;
    return skyPaintLayers({ ...scene, painting: { ...current, groups } }, {
      group: (id) => shown?.getGroupDisplay(id) ?? null,
      raster: (item) => {
        const media = rasterCanvas(item);
        return media && { media, revision: rasters.get(item.id).key };
      },
      mask: () => engineMask(shown),
    });
  }

  // The paint eraser's sources over the state `draft` (pano_paint_strokes.js erasePaint): the engine's committed group
  // canvases, the raster objects' canvases.
  function eraserSources(draft) {
    const presetIdOf = (toolKind) => brushPresetIdForTool(toolKind, tools().activePresetId);
    return {
      descriptor,
      groupStrokes: (gid) => draft.painting.paint.strokes.filter((stroke) => String(stroke?.actionGroupId || "").trim() === gid),
      groupFrame: (group, strokes) => {
        group.frame = strokeGroupFrame(strokes, presetIdOf);
        return group.frame;
      },
      groupCanvas: (gid) => engine?.getGroupTarget(gid)?.committedPaint?.canvas || null,
      rasterCanvas: (item) => rasterCanvas(item),
      topZ: () => topDisplayZIndex(draft.painting, skyOf(draft)),
    };
  }

  // A stroke of the chosen tool starts at the view's `point`, where dirAt(point) gives the direction; samples(event)
  // gives the points of a move (its coalesced events). Returns the drag's handler ({ move(point, event), end(), cancel() })
  // or null when it does not paint (no painting tool, a hidden painting, no direction).
  function press(point, dirAt, samples = (event, at) => [at]) {
    const t = tools();
    if (disposed || !painting(t) || state().painting_visible === false) return null;
    const direction = dirAt(point);
    if (!direction) return null;
    syncEngine();
    ensureEngine();
    const layerKind = toolLayer(t);
    const toolKind = toolBrush(t);
    const start = erpPointOfDirection(direction, now());
    const targetSpace = { kind: "ERP_GLOBAL" };
    const lasso = toolKind === "lasso_fill";
    const stroke = lasso
      ? lassoFillStrokeRecord(layerKind, toolKind, [start], targetSpace, brushOf(t))
      : freehandStrokeRecord(layerKind, toolKind, [start], targetSpace, brushOf(t));
    active = { layerKind, stroke };
    engine.beginStroke(stroke, descriptor);
    if (lasso) engine.updateActiveStroke(stroke, descriptor);
    else engine.appendStrokePoint(engine.ensureTarget(descriptor), start.u, start.v, stroke);
    bump();
    onStart();
    onChange();

    function add(at) {
      const dir = dirAt(at);
      if (!dir) return false;
      const next = erpPointOfDirection(dir, now());
      const geometry = stroke.geometry;
      if (lasso) {
        if (!takesStrokePoint(geometry.points[geometry.points.length - 1], next)) return false;
        geometry.points.push(strokeSample(next));
        return true;
      }
      const raw = geometry.rawPoints || geometry.points;
      if (!takesStrokePoint(raw[raw.length - 1], next)) return false;
      const sample = strokeSample(next);
      raw.push({ ...sample });
      geometry.points.push({ ...sample });
      engine.appendStrokePoint(engine.ensureTarget(descriptor), Number(sample.u ?? 0), Number(sample.v ?? 0), stroke);
      return true;
    }

    const handler = {
      move(at, event = {}) {
        if (active?.stroke !== stroke) return;
        let changed = false;
        for (const sample of samples(event, at)) changed = add(sample) || changed;
        if (!changed) return;
        if (lasso) engine.updateActiveStroke(stroke, descriptor);
        bump();
        onChange();
      },
      end() {
        if (active?.stroke !== stroke) return;
        const outcome = edit((draft) => commitPaintStroke(draft.painting, layerKind, stroke, {
          ensureGroup: (gid) => ensurePaintGroup(draft.painting, skyOf(draft), gid),
          eraser: () => eraserSources(draft),
        }));
        if (outcome.changed && !(layerKind === "paint" && stroke.toolKind === "eraser")) engine.commitActiveStroke(stroke, descriptor);
        else engine.cancelActiveStroke(descriptor);
        active = null;
        bump();
        onChange();
      },
      cancel() {
        if (active?.stroke !== stroke) return;
        engine.cancelActiveStroke(descriptor);
        active = null;
        bump();
        onChange();
      },
    };
    return handler;
  }

  // Gives up the stroke under way (Undo, a Clear, the editor closing). Returns whether there was one.
  function cancel() {
    if (!active) return false;
    engine?.cancelActiveStroke(descriptor);
    active = null;
    bump();
    onChange();
    return true;
  }

  // The canvases the node's paint layer is uploaded from (paint_upload.js): the committed painting of the state as the
  // engine draws it, not a stroke under way. { groupIds (the stroke groups in their order), paintCanvas (the groups
  // composed in that order), maskCanvas, groupCanvas(gid) }, as the old editor uploads them.
  function nodeLayer() {
    syncEngine();
    ensureEngine();
    const scene = state();
    const groupIds = scene.painting
      ? syncPaintGroups(structuredClone(scene.painting), skyOf(scene)).map((group) => String(group.actionGroupId || "")).filter(Boolean)
      : [];
    const target = engine.getErpTarget(groupIds);
    const shown = engine;
    return {
      groupIds,
      paintCanvas: target.displayPaint.canvas,
      maskCanvas: target.committedMask.canvas,
      groupCanvas: (gid) => shown.getGroupTarget(gid)?.committedPaint?.canvas ?? null,
    };
  }

  return {
    press,
    cancel,
    layers,
    nodeLayer,
    rasterAlpha,
    get stroking() {
      return !!active;
    },
    revision: () => revision,
    dispose() {
      disposed = true;
      active = null;
      for (const entry of rasters.values()) {
        if (entry.canvas) releasePanoCanvas(entry.canvas);
        entry.image.onload = null;
      }
      rasters.clear();
      rasterPixels.clear();
      engine = null;
    },
  };
}
