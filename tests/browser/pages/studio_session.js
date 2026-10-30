// The new editor (web_src/studio/editor.js) put together: a stand-in Panorama Studio node whose state_json holds a Sky
// image (embedded) and a World 3D file (a box made here into a GLB), with its background input linked to an ERP made
// here, for tests/browser/studio_session.spec.js. ComfyUI is not used: the node, its graph, app.getNodeImageUrls and
// the 3D file route (api.fetchApi) are the least the editor reads. The page reports through window.__studio.
import { BoxGeometry, Mesh, MeshStandardMaterial, Scene } from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { openStudioEditor } from "/web_src/studio/editor.js";

const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

function canvasUrl(width, height, paint) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  paint(canvas.getContext("2d"));
  return canvas;
}

// A dim ERP: dark blue above, dark brown below.
async function erpUrl() {
  const canvas = canvasUrl(1024, 512, (g) => {
    g.fillStyle = "#1c2a40";
    g.fillRect(0, 0, 1024, 256);
    g.fillStyle = "#2e261c";
    g.fillRect(0, 256, 1024, 256);
  });
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  return URL.createObjectURL(blob);
}

async function boxUrl() {
  const scene = new Scene();
  scene.add(new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ color: 0x40c040 })));
  const glb = await new GLTFExporter().parseAsync(scene, { binary: true });
  return URL.createObjectURL(new Blob([glb], { type: "model/gltf-binary" }));
}

const studio = (window.__studio = { ready: false, error: null, writes: 0, routeAsks: 0 });
const storage = new Map();
const memoryStorage = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) };

try {
  const [erp, box] = await Promise.all([erpUrl(), boxUrl()]);
  // A bright red image of 2:1, straight ahead of the opening view.
  const red = canvasUrl(200, 100, (g) => {
    g.fillStyle = "#ff2020";
    g.fillRect(0, 0, 200, 100);
  }).toDataURL("image/png");
  const state = {
    version: 2,
    timeline: { fps: 24, length: 48 },
    stickers: [
      { id: "sticker_1", placement: "sky", source: { kind: "file", data_url: red }, direction: { value: { yaw_deg: 0, pitch_deg: 0 } }, size: { value: { hFOV_deg: 40, vFOV_deg: 20 } }, z_index: 1 },
      { id: "sticker_2", placement: "world", source: { kind: "file", filename: "box.glb", subfolder: "", storage: "input" }, position: { value: [2.5, -1, -4] }, scale: { value: 1 } },
    ],
  };
  const origin = { id: 7, title: "Load Image" };
  const widget = { name: "state_json", value: JSON.stringify(state), callback: () => (studio.writes += 1) };
  const node = {
    id: 12,
    title: "Panorama Studio",
    __panoStudio: true,
    __panoSceneStateV2: true,
    inputs: [{ name: "bg_media", link: 1 }],
    widgets: [widget],
    graph: { getNodeById: (id) => (id === 7 ? origin : null) },
    getInputLink: (index) => (index === 0 ? { origin_id: 7, origin_slot: 0 } : null),
    getInputNode: (index) => (index === 0 ? origin : null),
    setDirtyCanvas: () => {},
  };
  const app = { getNodeImageUrls: (target) => (target === origin ? [erp] : []), nodeOutputs: {} };
  // The 3D file route answers with the box (its editor file) and its box.
  const api = {
    fetchApi: async () => {
      studio.routeAsks += 1;
      return { status: 200, json: async () => ({ kind: "mesh", unlit: false, file: { url: box }, box: { min: [-0.5, -0.5, -0.5], max: [0.5, 0.5, 0.5] } }) };
    },
  };
  let editor = null;
  studio.open = async () => {
    editor = await openStudioEditor(node, { app, api, storage: memoryStorage });
  };
  studio.close = () => editor?.close();
  studio.text = () => widget.value;
  studio.state = () => JSON.parse(JSON.stringify(editor.session.state));
  studio.selection = () => JSON.parse(JSON.stringify(editor.session.selection));
  // The stage's pixels at the middle of its canvas: [r, g, b].
  studio.middle = () => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const probe = document.createElement("canvas");
    probe.width = 64;
    probe.height = 36;
    const g = probe.getContext("2d", { willReadFrequently: true });
    g.drawImage(canvas, 0, 0, 64, 36);
    return Array.from(g.getImageData(32, 18, 1, 1).data.slice(0, 3));
  };
  studio.rendererOf = () => {
    const gl = document.querySelector("[data-stage-canvas]").getContext("webgl2");
    const info = gl?.getExtension("WEBGL_debug_renderer_info");
    return gl ? (info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) : null;
  };
  await studio.open();
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack || error);
  studio.ready = true;
}
