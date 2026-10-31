// The paint's raster objects and a stroke group drawn by the four places that show paint on the Sky
// (docs/editor-architecture.md "Paint layers": the new UI's stage web_src/studio/paint.js, the old editor's views
// web_src/editor/paint_layers.js, a node surface web_src/pano_surface_paint.js, an upstream Scene's layer
// web_src/pano_upstream_layers.js), for tests/browser/paint_rasters.spec.js. Each place's ERP canvases are hashed
// (SHA-256 of their pixels), and the new editor is opened on a Studio node with the same painting, so its stage can be
// photographed. The rasters are made in the page. ComfyUI is not used. The page reports through window.__rasters.
import { createPaintLayers } from "/web_src/editor/paint_layers.js";
import { normalizePaintingState } from "/web_src/pano_paint_types.js";
import { loadSceneState, sceneStateText } from "/web_src/pano_scene_state.js";
import { surfacePaintLayers } from "/web_src/pano_surface_paint.js";
import { createUpstreamLayers } from "/web_src/pano_upstream_layers.js";
import { openStudioEditor } from "/web_src/studio/editor.js";
import { createStudioPaint } from "/web_src/studio/paint.js";

const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

const report = (window.__rasters = { ready: false, error: null, hashes: null, renderer: null });

function canvasUrl(width, height, draw) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  draw(canvas.getContext("2d"));
  return canvas.toDataURL("image/png");
}

// A raster with soft edges and a few colors, so a turn, a scale and the seam show in its pixels.
const art = (hue) => canvasUrl(96, 48, (g) => {
  const fill = g.createLinearGradient(0, 0, 96, 48);
  fill.addColorStop(0, `hsl(${hue} 80% 55%)`);
  fill.addColorStop(1, `hsl(${hue + 120} 80% 45%)`);
  g.fillStyle = fill;
  g.beginPath();
  g.ellipse(48, 24, 46, 22, 0.2, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "rgba(255,255,255,0.8)";
  g.fillRect(10, 10, 20, 8);
});

const raster = (id, hue, bbox, transform, z = 1, layerKind = "paint") => ({
  id, type: "raster_frozen", layerKind, z_index: z, locked: false, bbox, rasterDataUrl: art(hue), transform,
});

// Turned and grown in front, across the seam, thin (0.4 px at 1024 wide, 0.8 px at 2048), and a mask raster.
const PAINTING = normalizePaintingState({
  version: 1,
  groups: [{ id: "g1", actionGroupId: "g1", z_index: 0 }],
  paint: {
    strokes: [{
      id: "s1", actionGroupId: "g1", layerKind: "paint", toolKind: "pen", targetSpace: { kind: "ERP_GLOBAL" }, size: 24, opacity: 1,
      color: { r: 0.9, g: 0.2, b: 0.1, a: 1 },
      geometry: { geometryKind: "freehand_open", points: [{ u: 0.44, v: 0.6 }, { u: 0.5, v: 0.62 }, { u: 0.56, v: 0.58 }] },
    }],
  },
  mask: { strokes: [] },
  raster_objects: [
    raster("front", 30, { u0: 0.45, v0: 0.4, u1: 0.55, v1: 0.5 }, { du: 0.01, dv: -0.02, rot_deg: 30, scale: 1.7 }, 1),
    raster("seam", 200, { u0: 0.0, v0: 0.3, u1: 0.12, v1: 0.42 }, { du: 0.95, dv: 0.03, rot_deg: -12, scale: 0.8 }, 2),
    raster("thin", 300, { u0: 0.52, v0: 0.42, u1: 0.52 + 0.4 / 1024, v1: 0.47 }, { du: 0, dv: 0, rot_deg: 0, scale: 1 }, 3),
    raster("mask", 90, { u0: 0.3, v0: 0.3, u1: 0.4, v1: 0.4 }, { du: 0, dv: 0, rot_deg: 0, scale: 1 }, 4, "mask"),
  ],
});

async function hashOf(canvas) {
  const g = canvas.getContext("2d", { willReadFrequently: true });
  const data = g.getImageData(0, 0, canvas.width, canvas.height).data;
  const digest = await crypto.subtle.digest("SHA-256", data);
  return `${canvas.width}x${canvas.height}:${Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("").slice(0, 32)}`;
}

const frame = () => new Promise((resolve) => requestAnimationFrame(resolve));

// Calls layers() until every paint raster (and the group, where the place draws strokes) has a canvas.
async function settled(layers, expected) {
  let out = [];
  for (let i = 0; i < 120; i += 1) {
    out = layers();
    if (out.filter((layer) => /raster:|paint_group:/.test(layer.id)).length >= expected) return out;
    await frame();
  }
  return out;
}

async function hashes(layers) {
  const out = {};
  for (const layer of layers) {
    const id = String(layer.id).replace(/^upstream:[^:]*:/, "");
    if (layer.media instanceof HTMLCanvasElement) out[id] = await hashOf(layer.media);
  }
  return out;
}

async function studioHashes() {
  const scene = { painting: PAINTING, painting_visible: true, stickers: [] };
  const paint = createStudioPaint({ state: () => scene, tools: () => ({}), edit: () => ({}) });
  const out = await hashes(await settled(() => paint.layers(), 4));
  paint.dispose();
  return out;
}

async function editorHashes(width) {
  const state = { painting: PAINTING, painting_visible: true, stickers: [] };
  const editor = { interaction: null, paintEngine: { descriptor: { width, height: width / 2 }, getGroupDisplay: () => null, getMaskDisplay: () => null } };
  const layers = createPaintLayers({
    api: {}, editor, node: { id: 1 }, rasterErpCanvasCache: new Map(), rasterImageAlphaCache: new Map(), rasterImageCache: new Map(), state,
  });
  layers.connect({
    commitState() {}, createRasterSurface: () => null, getActivePaintTargetDescriptor: () => ({ width, height: width / 2 }),
    getDesiredPaintTargetDescriptor: () => ({ width, height: width / 2 }), getOrderedDisplayListObjects: () => [],
    getOrderedPaintGroupIds: () => [], getPaintingCompositeRevisionKey: () => "", parseRasterObjectSelectionId: (id) => String(id || "").replace(/^raster:/, ""),
    processFreehandPoints: (points) => points, rasterizeStrokeToSurface: () => null, rebuildPaintEngineIfNeeded() {},
    requestDraw() {}, screenPosToErpPoint: () => null,
  });
  return hashes(await settled(() => layers.buildEditorViewPaintLayers(), 3));
}

async function surfaceHashes(preset) {
  const surface = { dom: { requestDraw() {} } };
  const state = { output_preset: preset, painting: PAINTING, painting_visible: true, stickers: [] };
  return hashes(await settled(() => surfacePaintLayers(surface, state), 4));
}

async function upstreamHashes(width) {
  const list = [{ state: JSON.parse(sceneStateText({ ...loadSceneState({}), painting: PAINTING })), ui: {} }];
  const upstream = createUpstreamLayers({
    list: () => list, fps: () => 24, records: () => [], mediaSource: () => null, mediaAssetSource: () => null,
    revisionOf: () => 0, paintTarget: () => ({ width, height: width / 2 }), playing: () => false,
  });
  const out = await hashes(await settled(() => upstream.viewInput(0).sky, 4));
  upstream.dispose();
  return out;
}

// The new editor on a stand-in Panorama Studio node whose state has the painting, over a plain ERP.
async function openEditor() {
  const erp = canvasUrl(1024, 512, (g) => {
    g.fillStyle = "#8a9099";
    g.fillRect(0, 0, 1024, 256);
    g.fillStyle = "#4d4a45";
    g.fillRect(0, 256, 1024, 256);
  });
  const origin = { id: 7, title: "Load Image" };
  const node = {
    id: 12,
    title: "Panorama Studio",
    __panoStudio: true,
    inputs: [{ name: "bg_media", link: 1 }],
    widgets: [{ name: "state_json", value: sceneStateText({ ...loadSceneState({}), painting: PAINTING }) }],
    graph: { getNodeById: (id) => (id === 7 ? origin : null) },
    isInputConnected: (index) => index === 0,
    getInputLink: (index) => (index === 0 ? { origin_id: 7, origin_slot: 0 } : null),
    getInputNode: (index) => (index === 0 ? origin : null),
  };
  const storage = new Map();
  const app = { getNodeImageUrls: (target) => (target === origin ? [erp] : []), nodeOutputs: {} };
  await openStudioEditor(node, { app, api: null, storage: { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) } });
  const canvas = document.querySelector("[data-stage-canvas]");
  const gl = canvas?.getContext("webgl2");
  const info = gl?.getExtension("WEBGL_debug_renderer_info");
  report.renderer = gl ? (info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) : null;
}

try {
  report.hashes = {
    studio: await studioHashes(),
    editor2048: await editorHashes(2048),
    editor4096: await editorHashes(4096),
    surface2048: await surfaceHashes(2048),
    surface512: await surfaceHashes(512),
    upstream2048: await upstreamHashes(2048),
  };
  report.userAgent = navigator.userAgent;
  if (!new URLSearchParams(location.search).has("noeditor")) await openEditor();
  report.ready = true;
} catch (error) {
  report.error = String(error?.stack || error);
  report.ready = true;
}
