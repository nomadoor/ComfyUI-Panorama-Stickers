// The bundle's entry (web_src/main.js) on a Panorama Preview node built the way ComfyUI's frontend builds it, for
// tests/browser/preview_entry.spec.js: the extension main.js registers gets the node's class and the node, and the
// node surface's own buttons open what they open. ComfyUI's app and api are the stand-ins in pages/comfy/.
//
// The node as the frontend (comfyui_frontend_package 1.57) has it: `source` is an io.MatchType input, whose slot
// type stays the template's union ("IMAGE,VIDEO,PANO_SCENE", withComfyMatchType sets it from the other inputs of the
// template and the allowed types) while the link takes the concrete type of the output it comes from.
//
// ?video / ?scene: the source is a VIDEO or a PANO_SCENE (an IMAGE without either). ?off: the setting
// PanoramaSuite.Editor.NewUI is off. ?result: the IMAGE's origin has a result with an image, which the node surface
// reads (pano_comfy_media.js "previewNode").
import { app } from "./comfy/app.js";
import "/web_src/main.js";

const query = new URLSearchParams(location.search);
const SOURCE = query.has("scene") ? "PANO_SCENE" : query.has("video") ? "VIDEO" : "IMAGE";
if (query.has("off")) window.__comfySettings = { "PanoramaSuite.Editor.NewUI": false };

const entry = (window.__entry = { ready: false, error: null, fullscreenAsked: 0 });
// Headless Chromium grants element fullscreen; counting the asks tells the browser's fullscreen apart from a window.
const requestFullscreen = Element.prototype.requestFullscreen;
Element.prototype.requestFullscreen = function (...args) {
  entry.fullscreenAsked += 1;
  return requestFullscreen.apply(this, args);
};

try {
  const extension = app.extensions.find((item) => item.name === "ComfyUI.PanoramaSuite.Editor");
  await extension.setup?.();

  function PanoramaPreviewNode() {}
  PanoramaPreviewNode.comfyClass = "PanoramaPreviewNode";
  PanoramaPreviewNode.prototype.comfyClass = "PanoramaPreviewNode";
  extension.beforeRegisterNodeDef(PanoramaPreviewNode, { name: "PanoramaPreviewNode" });

  const origin = { id: 7, type: SOURCE === "VIDEO" ? "LoadVideo" : SOURCE === "IMAGE" ? "LoadImage" : "PanoramaStudio", outputs: [{ name: "out", type: SOURCE, links: [1] }] };
  const links = { 1: { id: 1, origin_id: 7, origin_slot: 0, target_id: 21, target_slot: 0, type: SOURCE } };
  const host = document.getElementById("graph");
  const node = new PanoramaPreviewNode();
  const graph = {
    links,
    getNodeById: (id) => (id === 7 ? origin : id === 21 ? node : null),
  };
  Object.assign(node, {
    id: 21,
    type: "PanoramaPreviewNode",
    title: "Panorama Preview",
    size: [360, 260],
    flags: {},
    graph,
    inputs: [{ name: "source", type: "IMAGE,VIDEO,PANO_SCENE", link: 1 }],
    outputs: [{ name: "output", type: SOURCE, links: null }],
    widgets: [{ name: "background_range", type: "combo", value: "360" }],
    getInputLink(slot) {
      const id = this.inputs[slot]?.link;
      return id == null ? null : links[id] ?? null;
    },
    isInputConnected(slot) {
      return this.inputs[slot]?.link != null;
    },
    getInputNode(slot) {
      const link = this.getInputLink(slot);
      return link ? graph.getNodeById(link.origin_id) : null;
    },
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
    setDirtyCanvas() {},
    setSize(size) { this.size = size; },
  });
  if (query.has("result")) app.nodeOutputs = { 7: { images: [{ filename: "bg.png", subfolder: "", type: "temp" }] } };
  app.canvas.graph = graph;
  node.onNodeCreated?.();
  extension.nodeCreated(node);
  entry.node = node;
  entry.openButton = () => node.widgets.find((widget) => widget.name === "Open Preview" && !widget.hidden);
  entry.ready = true;
} catch (error) {
  entry.error = String(error?.stack || error);
  entry.ready = true;
}
