// The bundle's entry (web_src/main.js) on one of the legacy nodes (PanoramaStickers, PanoramaCutout, PanoramaPreview),
// built the way ComfyUI's frontend builds it, for tests/browser/legacy_editors.spec.js: the node surface's buttons
// open the old editor (ADR 0044 "旧ノードの UI"), and closing it writes what it edited to the node's state_json.
// ComfyUI's app and api are the stand-ins in pages/comfy/; the upload route answers here, as ComfyUI's /upload/image.
//
// ?node=stickers | cutout | preview (the legacy Panorama Preview, read-only). With preview, ?linked: erp_image comes from
// node 22, whose result has an image; ?video: the node's own result has an MP4 (what the node surface reads of them,
// pano_comfy_media.js "previewNode").
// ?bg (Stickers): the node's own result has an orange background ERP (pano_input_images), which its node
// surface draws (window.__entry.surfaceColor()).
import { api } from "./comfy/api.js";
import { app } from "./comfy/app.js";
import "/web_src/main.js";

const QUERY = new URLSearchParams(location.search);
const KIND = QUERY.get("node") || "stickers";
const CLASS = { stickers: "PanoramaStickers", cutout: "PanoramaCutout", preview: "PanoramaPreview" }[KIND];

const entry = (window.__entry = { ready: false, error: null, uploads: 0 });
const BACKGROUND = QUERY.has("bg");

const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

api.fetchApi = (route, options = {}) => {
  if (route === "/upload/image" && options.method === "POST") {
    entry.uploads += 1;
    return Promise.resolve(new Response(JSON.stringify({ name: `sticker_${entry.uploads}.png`, subfolder: "panorama_stickers", type: "input" }), { status: 200 }));
  }
  return Promise.resolve(new Response("{}", { status: 404 }));
};

// The legacy Preview's editor opens when the browser's fullscreen is not there (pano_preview_node_surface.js
// createPreviewFullscreenController's fallback); headless Chromium grants it, so the page refuses it.
if (KIND === "preview") Element.prototype.requestFullscreen = () => Promise.reject(new Error("no fullscreen here"));

const WIDGETS = {
  stickers: [
    ["output_preset", "combo", "2048"],
    ["coverage", "combo", "360"],
    ["bg_color", "text", "#00ff00"],
    ["state_json", "text", ""],
    ["fps", "number", 24],
  ],
  cutout: [
    ["coverage", "combo", "360"],
    // Without a frame, so the editor's Add Frame has one to add (a new node gets a 1:1 frame from an empty state).
    ["state_json", "text", JSON.stringify({ version: 1, shots: [] })],
    ["output_megapixels", "number", 1],
    ["fps", "number", 24],
  ],
  preview: [
    ["coverage", "combo", "360"],
    ["fps", "number", 24],
  ],
};
const INPUTS = {
  stickers: [{ name: "bg_erp", type: "IMAGE", link: null }, { name: "sticker_image", type: "IMAGE", link: null }, { name: "sticker_state", type: "STRING", link: null }, { name: "audio", type: "AUDIO", link: null }],
  cutout: [{ name: "erp_image", type: "IMAGE", link: null }, { name: "audio", type: "AUDIO", link: null }],
  preview: [{ name: "erp_image", type: "IMAGE", link: null }, { name: "audio", type: "AUDIO", link: null }],
};
const OUTPUTS = {
  stickers: [{ name: "cond_erp", type: "IMAGE", links: null }, { name: "mask", type: "MASK", links: null }],
  cutout: [{ name: "rect_image", type: "IMAGE", links: null }, { name: "sticker_state_json", type: "STRING", links: null }, { name: "mask", type: "MASK", links: null }],
  preview: [{ name: "image", type: "IMAGE", links: null }],
};

try {
  const extension = app.extensions.find((item) => item.name === "ComfyUI.PanoramaSuite.Editor");
  await extension.setup?.();

  function LegacyNode() {}
  LegacyNode.comfyClass = CLASS;
  LegacyNode.prototype.comfyClass = CLASS;
  extension.beforeRegisterNodeDef(LegacyNode, { name: CLASS });

  const host = document.getElementById("graph");
  const node = new LegacyNode();
  const graph = { links: {}, getNodeById: (id) => (id === 21 ? node : null), setDirtyCanvas() {} };
  Object.assign(node, {
    id: 21,
    type: CLASS,
    title: CLASS,
    size: [360, 260],
    flags: {},
    graph,
    inputs: INPUTS[KIND],
    outputs: OUTPUTS[KIND],
    widgets: WIDGETS[KIND].map(([name, type, value]) => ({ name, type, value, options: {} })),
    getInputLink: () => null,
    isInputConnected: () => false,
    getInputNode: () => null,
    addWidget(type, name, value, callback, options = {}) {
      const widget = { type, name, value, callback, options };
      this.widgets.push(widget);
      return widget;
    },
    addDOMWidget(name, type, element, options = {}) {
      element.style.width = "100%";
      element.style.height = "100%";
      host.appendChild(element);
      const widget = { name, type, element, options };
      this.widgets.push(widget);
      return widget;
    },
    addOutput(name, type) { this.outputs.push({ name, type, links: null }); },
    setDirtyCanvas() {},
    setSize(size) { this.size = size; },
  });
  if (QUERY.has("linked")) {
    const link = { id: 1, origin_id: 22, origin_slot: 0, target_id: 21, target_slot: 0, type: "IMAGE" };
    const origin = { id: 22, type: "LoadImage", outputs: [{ name: "IMAGE", type: "IMAGE", links: [1] }] };
    graph.getNodeById = (id) => (id === 21 ? node : id === 22 ? origin : null);
    node.getInputLink = (slot) => (slot === 0 ? link : null);
    node.isInputConnected = (slot) => slot === 0;
    node.getInputNode = (slot) => (slot === 0 ? origin : null);
    // storage differs from type: the Preview node reads /view's type from storage first, the editor reads type only
    // (aligning the two is an open owner decision; docs/editor-architecture.md "ComfyUI の実行結果を読む").
    app.nodeOutputs = { 22: { images: [{ filename: "erp.png", subfolder: "pano", type: "temp", storage: "output" }] } };
  }
  if (QUERY.has("video")) {
    app.nodeOutputs = { 21: { pano_videos: [{ filename: "pv.mp4", subfolder: "", type: "temp", format: "video/mp4" }] } };
  }
  if (BACKGROUND) {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 128;
    const g = canvas.getContext("2d");
    g.fillStyle = "rgb(230, 140, 30)";
    g.fillRect(0, 0, 256, 128);
    app.nodeOutputs = { 21: { pano_input_images: [canvas.toDataURL("image/png")] } };
  }
  app.graph = graph;
  app.canvas.graph = graph;
  node.onNodeCreated?.();
  extension.nodeCreated(node);
  node.onAdded?.(graph);
  entry.node = node;
  entry.state = () => node.widgets.find((widget) => widget.name === "state_json")?.value ?? null;
  // The [r, g, b] at (u, v) in 0..1 of the node surface's canvas.
  entry.surfaceColor = (u, v) => {
    const canvas = host.querySelector("canvas");
    const data = canvas.getContext("2d").getImageData(Math.round(u * (canvas.width - 1)), Math.round(v * (canvas.height - 1)), 1, 1).data;
    return [data[0], data[1], data[2]];
  };
  entry.ready = true;
} catch (error) {
  entry.error = String(error?.stack || error);
  entry.ready = true;
}
