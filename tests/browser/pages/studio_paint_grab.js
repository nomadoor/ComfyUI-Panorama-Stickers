// The new editor (web_src/studio/editor.js) on a stand-in Panorama Studio node for tests/browser/studio_paint_grab.spec.js
// (the Cursor grabbing the paint: docs/studio-ui.md "ペイントのまとまり"). The state has a sky image straight ahead (z 1)
// and a World image board below it, over an ERP made in the page. ComfyUI is not used. The page reports through
// window.__studio.
import { editorSession } from "/web_src/pano_node_bridge.js";
import { openStudioEditor } from "/web_src/studio/editor.js";
import { rememberView } from "/web_src/studio/view_camera.js";

const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

function canvasUrl(width, height, fill) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const g = canvas.getContext("2d");
  g.fillStyle = fill;
  g.fillRect(0, 0, width, height);
  return canvas.toDataURL("image/png");
}

// A gray sky and a darker ground.
async function makeErp() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const g = canvas.getContext("2d");
  g.fillStyle = "#8a9099";
  g.fillRect(0, 0, 1024, 256);
  g.fillStyle = "#4d4a45";
  g.fillRect(0, 256, 1024, 256);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve));
  return URL.createObjectURL(blob);
}

// The sky image is green, the board blue, so a red stroke shows over either.
export const STATE = {
  version: 2,
  timeline: { fps: 24, length: 48 },
  stickers: [
    {
      id: "sticker_1",
      placement: "sky",
      source: { kind: "file", data_url: canvasUrl(160, 120, "#2fbf4f") },
      direction: { value: { yaw_deg: 0, pitch_deg: 0 } },
      size: { value: { hFOV_deg: 16, vFOV_deg: 12 } },
      z_index: 1,
    },
    {
      id: "sticker_2",
      placement: "world",
      source: { kind: "file", data_url: canvasUrl(160, 80, "#2f5fdf") },
      position: { value: [0, -0.7, -2] },
      scale: { value: 0.8 },
    },
  ],
};

const studio = (window.__studio = { ready: false, error: null });

try {
  const url = await makeErp();
  const origin = { id: 7, title: "Load Image" };
  const node = {
    id: 22,
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
  const editor = await openStudioEditor(node, { app, storage: { getItem: () => null, setItem() {} } });
  studio.session = editor.session;
  studio.paint = editor.paint;
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
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack || error);
  studio.ready = true;
}
