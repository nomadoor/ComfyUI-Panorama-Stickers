// The new editor (web_src/studio/editor.js) on a stand-in Panorama Studio node whose state has a sky image, over an ERP
// made in the page, for tests/browser/studio_paint.spec.js (the Paint and Mask tools: docs/studio-ui.md "ペイントの道具").
// ComfyUI is not used. The page reports through window.__studio. The old editor's stroke record (web_src/editor/
// paint_input.js) is made here too, so the test compares the formats the two write. ComfyUI's upload API is a stand-in
// that keeps what it is sent (studio.uploads: { name, type, subfolder, overwrite, url }), for the paint layer.
import { editorSession } from "/web_src/pano_node_bridge.js";
import { openStudioEditor } from "/web_src/studio/editor.js";
import { rememberView } from "/web_src/studio/view_camera.js";
import { createPaintInput } from "/web_src/editor/paint_input.js";

const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

function canvasUrl(width, height, draw) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  draw(canvas.getContext("2d"));
  return canvas.toDataURL("image/png");
}

// An ERP: a gray sky and a darker ground, so painted colors stand out.
async function makeErp() {
  const url = canvasUrl(1024, 512, (g) => {
    g.fillStyle = "#8a9099";
    g.fillRect(0, 0, 1024, 256);
    g.fillStyle = "#4d4a45";
    g.fillRect(0, 256, 1024, 256);
  });
  const blob = await (await fetch(url)).blob();
  return URL.createObjectURL(blob);
}

const poster = canvasUrl(160, 120, (g) => {
  g.fillStyle = "#d9573f";
  g.fillRect(0, 0, 160, 120);
});

export const STATE = {
  version: 2,
  timeline: { fps: 24, length: 48 },
  stickers: [
    {
      id: "sticker_1",
      placement: "sky",
      source: { kind: "file", data_url: poster },
      direction: { value: { yaw_deg: -40, pitch_deg: 10 } },
      size: { value: { hFOV_deg: 16, vFOV_deg: 12 } },
      z_index: 1,
    },
  ],
};

const studio = (window.__studio = { ready: false, error: null, uploads: [] });

const dataUrlOf = (blob) => new Promise((resolve) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.readAsDataURL(blob);
});
const api = {
  async fetchApi(path, { body }) {
    const image = body.get("image");
    const upload = { path, name: image.name, type: body.get("type"), subfolder: body.get("subfolder"), overwrite: body.get("overwrite") };
    upload.url = await dataUrlOf(image);
    studio.uploads.push(upload);
    return { status: 200, json: async () => ({ name: image.name, subfolder: upload.subfolder, type: upload.type }) };
  },
};
const storage = new Map();
const memoryStorage = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) };

try {
  const url = await makeErp();
  const origin = { id: 7, title: "Load Image" };
  const node = {
    id: 21,
    title: "Panorama Studio",
    __panoStudio: true,
    __panoSceneStateV2: true,
    inputs: [{ name: "bg_media", link: 1 }],
    widgets: [{ name: "state_json", value: JSON.stringify(STATE) }],
    graph: { getNodeById: (id) => (id === 7 ? origin : null) },
    getInputLink: (index) => (index === 0 ? { origin_id: 7, origin_slot: 0 } : null),
    getInputNode: (index) => (index === 0 ? origin : null),
  };
  const app = { getNodeImageUrls: (target) => (target === origin ? [url] : []), nodeOutputs: {} };
  editorSession(node).view = rememberView({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, target: [0, 0, -2] }, "panorama");
  // Opens the editor on the node (again after a close: it reads the state_json the close wrote).
  const openEditor = async () => {
    const editor = await openStudioEditor(node, { app, api, storage: memoryStorage });
    studio.session = editor.session;
    studio.close = () => editor.close();
  };
  await openEditor();
  studio.node = node;
  studio.reopen = openEditor;
  // The pixel at (x, y) of an uploaded PNG (data URL): [r, g, b, a], and its size.
  studio.pngAt = async (url, x, y) => {
    const image = new Image();
    image.src = url;
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    return { width: canvas.width, height: canvas.height, pixel: Array.from(ctx.getImageData(x, y, 1, 1).data) };
  };
  // The stage's pixels at (x, y) CSS px of the stage: [r, g, b, a].
  studio.stageAt = (x, y) => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const ratio = canvas.width / canvas.getBoundingClientRect().width;
    const copy = document.createElement("canvas");
    copy.width = 1;
    copy.height = 1;
    copy.getContext("2d").drawImage(canvas, Math.round(x * ratio), Math.round(y * ratio), 1, 1, 0, 0, 1, 1);
    return Array.from(copy.getContext("2d").getImageData(0, 0, 1, 1).data);
  };
  // The stage's pixels in the rectangle (x, y, width, height) CSS px of the stage: a flat [r, g, b, a, ...] array.
  studio.stageRegion = (x, y, width, height) => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const ratio = canvas.width / canvas.getBoundingClientRect().width;
    const [w, h] = [Math.round(width * ratio), Math.round(height * ratio)];
    const copy = document.createElement("canvas");
    copy.width = w;
    copy.height = h;
    copy.getContext("2d").drawImage(canvas, Math.round(x * ratio), Math.round(y * ratio), w, h, 0, 0, w, h);
    return Array.from(copy.getContext("2d").getImageData(0, 0, w, h).data);
  };
  // The old editor's freehand and lasso records with the same brush (editor/paint_input.js), for the format check.
  studio.oldRecords = () => {
    const editorState = { mode: "pano", brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 }, activeBrushPresetId: "pen", paintColor: { r: 1, g: 0, b: 0, a: 1 } };
    const input = createPaintInput({ editor: editorState, state: {}, timers: { set: () => 0, clear: () => {} } });
    const point = { targetKind: "ERP_GLOBAL", u: 0.5, v: 0.4, t: 1 };
    return {
      freehand: input.buildFreehandStrokeRecord("paint", "pen", [point], { kind: "ERP_GLOBAL" }),
      lasso: input.buildLassoFillStrokeRecord("paint", "lasso_fill", [point], { kind: "ERP_GLOBAL" }),
    };
  };
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack || error);
  studio.ready = true;
}
