// The new editor (web_src/studio/editor.js) opened on a stand-in Panorama Studio node whose background input is
// linked to an ERP made in the page, for tests/browser/studio_editor.spec.js. ComfyUI is not used: the node, its
// graph and app.getNodeImageUrls are the least the editor reads. The page reports through window.__studio.
import { editorSession } from "/web_src/pano_node_bridge.js";
import { openStudioEditor } from "/web_src/studio/editor.js";

// The drawing buffer is kept, so the test can sample the stage between frames (the editor draws with
// preserveDrawingBuffer off; nothing else changes).
const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

// An ERP with a sky and a ground of different colors and vertical stripes every 30° of yaw, so a turn shows.
async function makeErp() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const g = canvas.getContext("2d");
  const sky = g.createLinearGradient(0, 0, 0, 256);
  sky.addColorStop(0, "#3a6fb0");
  sky.addColorStop(1, "#bcd6ee");
  g.fillStyle = sky;
  g.fillRect(0, 0, 1024, 256);
  g.fillStyle = "#6b5a3e";
  g.fillRect(0, 256, 1024, 256);
  for (let i = 0; i < 12; i += 1) {
    g.fillStyle = `hsl(${i * 30} 70% 50%)`;
    g.fillRect(i * (1024 / 12), 200, 20, 112);
  }
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  return URL.createObjectURL(blob);
}

// ?processed: the background IMAGE comes from a node that makes it (no file, no images of its own, as ImageInvert in
// ComfyUI), so the picture is only in the node's own run result (pano_input_images, a temp file; ADR 0003).
const PROCESSED = new URLSearchParams(location.search).has("processed");

const studio = (window.__studio = { ready: false, error: null, contextLost: false, renderer: null });
const storage = new Map();
const memoryStorage = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) };

try {
  const url = await makeErp();
  const origin = { id: 7, title: PROCESSED ? "Invert Image" : "Load Image" };
  const node = {
    id: 12,
    title: "Panorama Studio",
    __panoStudio: true,
    inputs: [{ name: "bg_media", link: 1 }],
    widgets: [{ name: "state_json", value: "" }],
    graph: { getNodeById: (id) => (id === 7 ? origin : null) },
    getInputLink: (index) => (index === 0 ? { origin_id: 7, origin_slot: 0 } : null),
    getInputNode: (index) => (index === 0 ? origin : null),
  };
  const app = {
    getNodeImageUrls: (target) => (target === origin && !PROCESSED ? [url] : []),
    nodeOutputs: PROCESSED ? { 12: { pano_input_images: [url] } } : {},
  };
  let editor = null;
  // A context lost while the editor is open counts; closing lets the context go on purpose.
  let canvas = null;
  const onLost = () => (studio.contextLost = true);
  const open = async () => {
    editor = await openStudioEditor(node, { app, api: null, storage: memoryStorage });
    canvas = document.querySelector("[data-stage-canvas]");
    canvas.addEventListener("webglcontextlost", onLost);
  };
  studio.open = open;
  studio.close = () => {
    canvas?.removeEventListener("webglcontextlost", onLost);
    editor?.close();
  };
  studio.memory = () => editorSession(node).view;
  // The stage's pixels, a 64 x 36 sampling of its canvas: [r, g, b] rows.
  studio.sample = () => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const probe = document.createElement("canvas");
    probe.width = 64;
    probe.height = 36;
    const g = probe.getContext("2d", { willReadFrequently: true });
    g.drawImage(canvas, 0, 0, 64, 36);
    return Array.from(g.getImageData(0, 0, 64, 36).data);
  };
  studio.rendererOf = () => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const gl = canvas.getContext("webgl2");
    const info = gl?.getExtension("WEBGL_debug_renderer_info");
    return gl ? (info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) : null;
  };
  await open();
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack || error);
  studio.ready = true;
}
