// The new editor (web_src/studio/editor.js) on a stand-in Panorama Studio node whose state has a sky image, a world
// image plane and a Frame mode Camera, over an ERP made in the page, for tests/browser/studio_select.spec.js (selecting,
// the guides, the gizmo, the sky image's handles and the bar at the bottom center). ComfyUI is not used. The page
// reports through window.__studio.
import { editorSession } from "/web_src/pano_node_bridge.js";
import { openStudioEditor } from "/web_src/studio/editor.js";
import { rememberView } from "/web_src/studio/view_camera.js";

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

// An ERP: a sky and a ground, stripes every 30° of yaw.
async function makeErp() {
  const url = canvasUrl(1024, 512, (g) => {
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
  });
  const blob = await (await fetch(url)).blob();
  return URL.createObjectURL(blob);
}

const poster = canvasUrl(160, 120, (g) => {
  g.fillStyle = "#d9573f";
  g.fillRect(0, 0, 160, 120);
  g.fillStyle = "#fff";
  g.fillRect(20, 20, 120, 80);
});
const board = canvasUrl(128, 128, (g) => {
  g.fillStyle = "#2f7d5b";
  g.fillRect(0, 0, 128, 128);
  g.fillStyle = "#f2f2f2";
  g.fillRect(16, 16, 96, 96);
});

export const STATE = {
  version: 2,
  timeline: { fps: 24, length: 48 },
  camera: {
    projection: "perspective",
    aspect: 16 / 9,
    position: { value: [-1.3, -0.5, -1.6] },
    rotation: { value: { yaw_deg: 25, pitch_deg: 0, roll_deg: 0 } },
    fov: { value: 60 },
  },
  stickers: [
    {
      id: "sticker_1",
      placement: "sky",
      source: { kind: "file", data_url: poster },
      direction: { value: { yaw_deg: -38, pitch_deg: 6 } },
      size: { value: { hFOV_deg: 24, vFOV_deg: 18 } },
      z_index: 1,
    },
    {
      id: "sticker_2",
      placement: "world",
      source: { kind: "file", data_url: board },
      position: { value: [0.9, -0.4, -2.6] },
      rotation: { value: { yaw_deg: -20, pitch_deg: 0, roll_deg: 0 } },
      scale: { value: 1.1 },
    },
  ],
};

// The views the page can open with (?view=above for ABOVE_VIEW); studio_select.spec.js projects with the same poses.
const OPEN_VIEW = Object.freeze({ position: [0, 0.1, 1.6], yaw_deg: 0, pitch_deg: -4, target: [0, -0.2, -2.4] });
const ABOVE_VIEW = Object.freeze({ position: [0, 2.0, 1.4], yaw_deg: 0, pitch_deg: -Math.atan2(2.2, 3.8) * 180 / Math.PI, target: [0, -0.2, -2.4] });

const studio = (window.__studio = { ready: false, error: null, renderer: null });
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
    isInputConnected: (index) => index === 0,
    getInputLink: (index) => (index === 0 ? { origin_id: 7, origin_slot: 0 } : null),
    getInputNode: (index) => (index === 0 ? origin : null),
  };
  const app = { getNodeImageUrls: (target) => (target === origin ? [url] : []), nodeOutputs: {} };
  // The view opens behind the Camera, so the Camera's mark, the board and the sky image all show.
  // ?view=above opens it from higher up, looking down 30 degrees, so the gizmo's XZ square shows.
  const above = new URLSearchParams(location.search).get("view") === "above";
  editorSession(node).view = rememberView(above ? ABOVE_VIEW : OPEN_VIEW, "panorama");
  const editor = await openStudioEditor(node, { app, api: null, storage: memoryStorage });
  studio.session = editor.session;
  studio.node = node;
  studio.close = () => editor.close();
  studio.rendererOf = () => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const gl = canvas.getContext("webgl2");
    const info = gl?.getExtension("WEBGL_debug_renderer_info");
    return gl ? (info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) : null;
  };
  // The overlay's pixels at (x, y) CSS px of the stage: [r, g, b, a].
  studio.overlayAt = (x, y) => {
    const overlay = document.querySelector("[data-stage-overlay]");
    const ratio = overlay.width / overlay.getBoundingClientRect().width;
    return Array.from(overlay.getContext("2d").getImageData(Math.round(x * ratio), Math.round(y * ratio), 1, 1).data);
  };
  // The count of overlay pixels near the selected guide's yellow.
  studio.yellowPixels = () => {
    const overlay = document.querySelector("[data-stage-overlay]");
    const data = overlay.getContext("2d").getImageData(0, 0, overlay.width, overlay.height).data;
    let count = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] > 200 && Math.abs(data[i] - 0xe8) < 24 && Math.abs(data[i + 1] - 0xcf) < 24 && Math.abs(data[i + 2] - 0x74) < 32) count += 1;
    }
    return count;
  };
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack || error);
  studio.ready = true;
}
