// The new editor (web_src/studio/editor.js) on a stand-in Panorama Studio node for tests/browser/studio_camera_wired.spec.js
// and the side-by-side with design-drafts/frame-4.html: the Camera tab wired into the stage. The state has a turned and
// rolled Camera (?mode=frame|panorama, ?aspect=16:9|1:1|9:16), four World image planes of pure colors around the Camera
// (front red, right green, back blue, left yellow), a magenta sky image, and a background ERP with stripes. ComfyUI is
// not used. The page reports through window.__studio.
import { editorSession } from "/web_src/pano_node_bridge.js";
import { facingRotation } from "/web_src/pano_space.js";
import { openStudioEditor } from "/web_src/studio/editor.js";
import { rememberView } from "/web_src/studio/view_camera.js";
import { panoPoint } from "./live_erp_scene.js";
import { CAMERA, MARKERS, MARKER_DISTANCE, SKY_MARKER } from "./studio_camera_wired_scene.js";

const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

const params = new URLSearchParams(location.search);
const [aw, ah] = (params.get("aspect") ?? "16:9").split(":").map(Number);
const mode = params.get("mode") ?? "frame";

function canvasUrl(width, height, draw) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  draw(canvas.getContext("2d"));
  return canvas.toDataURL("image/png");
}

const solid = (color) => canvasUrl(64, 64, (g) => {
  g.fillStyle = color;
  g.fillRect(0, 0, 64, 64);
});

async function makeErp() {
  const url = canvasUrl(1024, 512, (g) => {
    const sky = g.createLinearGradient(0, 0, 0, 256);
    sky.addColorStop(0, "#9fc7e6");
    sky.addColorStop(1, "#dceaf3");
    g.fillStyle = sky;
    g.fillRect(0, 0, 1024, 256);
    const ground = g.createLinearGradient(0, 256, 0, 512);
    ground.addColorStop(0, "#e9dcc4");
    ground.addColorStop(1, "#b9a685");
    g.fillStyle = ground;
    g.fillRect(0, 256, 1024, 256);
  });
  const blob = await (await fetch(url)).blob();
  return URL.createObjectURL(blob);
}

const at = (yaw, pitch) => panoPoint(yaw, pitch, MARKER_DISTANCE).map((value, axis) => value + CAMERA.position[axis]);

const STATE = {
  version: 2,
  timeline: { fps: 24, length: 240 },
  camera: {
    projection: mode === "panorama" ? "erp" : "perspective",
    aspect: aw / ah,
    position: { value: [...CAMERA.position] },
    rotation: { value: { yaw_deg: CAMERA.yaw, pitch_deg: CAMERA.pitch, roll_deg: CAMERA.roll } },
    fov: { value: CAMERA.fov },
  },
  stickers: [
    ...MARKERS.map(([name, yaw, pitch, rgb], index) => ({
      id: `sticker_${index + 1}`,
      placement: "world",
      source: { kind: "file", data_url: solid(`rgb(${rgb.join(",")})`) },
      position: { value: at(yaw, pitch) },
      rotation: { value: facingRotation(at(yaw, pitch), CAMERA.position) },
      scale: { value: 0.6 },
    })),
    {
      id: "sticker_9",
      placement: "sky",
      source: { kind: "file", data_url: solid(`rgb(${SKY_MARKER[3].join(",")})`) },
      direction: { value: { yaw_deg: SKY_MARKER[1], pitch_deg: SKY_MARKER[2] } },
      size: { value: { hFOV_deg: 8, vFOV_deg: 8 } },
      z_index: 1,
    },
  ],
};

const studio = (window.__studio = { ready: false, error: null });
const storage = new Map();
const memoryStorage = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) };

try {
  const url = await makeErp();
  const origin = { id: 7, title: "Load Image" };
  const node = {
    id: 31,
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
  editorSession(node).view = rememberView({ position: [0, 0.4, 2.6], yaw_deg: 0, pitch_deg: -6, target: [0, -0.2, -1] }, "panorama");
  const editor = await openStudioEditor(node, { app, api: null, storage: memoryStorage });
  studio.session = editor.session;
  studio.stage = () => editor.stage();
  studio.node = node;
  studio.close = () => editor.close();
  studio.rendererOf = () => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const gl = canvas.getContext("webgl2");
    const info = gl?.getExtension("WEBGL_debug_renderer_info");
    return gl ? (info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) : null;
  };
  // The Camera at the playhead (state v2's evaluator).
  studio.camera = async () => {
    const { evaluateCamera } = await import("/web_src/pano_scene_eval.js");
    return evaluateCamera(editor.session.state.camera, 0);
  };
  // The stage canvas's pixels at (x, y) CSS px of the stage.
  studio.stageAt = (x, y) => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const ratio = canvas.width / canvas.getBoundingClientRect().width;
    const probe = document.createElement("canvas");
    probe.width = 1;
    probe.height = 1;
    const g = probe.getContext("2d", { willReadFrequently: true });
    g.drawImage(canvas, Math.round(x * ratio), Math.round(y * ratio), 1, 1, 0, 0, 1, 1);
    return Array.from(g.getImageData(0, 0, 1, 1).data);
  };
  // The centroid of the stage pixels near a pure color, in the stage's CSS px, or null.
  studio.stageCentroid = (rgb) => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const box = canvas.getBoundingClientRect();
    const probe = document.createElement("canvas");
    probe.width = Math.round(box.width / 2);
    probe.height = Math.round(box.height / 2);
    const g = probe.getContext("2d", { willReadFrequently: true });
    g.drawImage(canvas, 0, 0, probe.width, probe.height);
    const data = g.getImageData(0, 0, probe.width, probe.height).data;
    let sx = 0;
    let sy = 0;
    let n = 0;
    for (let y = 0; y < probe.height; y += 1) {
      for (let x = 0; x < probe.width; x += 1) {
        const i = (y * probe.width + x) * 4;
        if (Math.abs(data[i] - rgb[0]) < 60 && Math.abs(data[i + 1] - rgb[1]) < 60 && Math.abs(data[i + 2] - rgb[2]) < 60) {
          sx += x + 0.5;
          sy += y + 0.5;
          n += 1;
        }
      }
    }
    return n ? { x: (sx / n) * 2, y: (sy / n) * 2, n } : null;
  };
  // The centroids (circular in x) of the ERP canvas's pixels near each marker's color: { name: { x, y, n } | null },
  // with the canvas's size.
  studio.erpCentroids = () => {
    const canvas = document.querySelector("[data-erp]");
    if (!canvas || !canvas.width) return null;
    const g = canvas.getContext("2d", { willReadFrequently: true });
    const W = canvas.width;
    const H = canvas.height;
    const data = g.getImageData(0, 0, W, H).data;
    const out = { width: W, height: H };
    for (const [name, , , rgb] of [...MARKERS, SKY_MARKER]) {
      let sx = 0;
      let cx = 0;
      let sy = 0;
      let n = 0;
      for (let y = 0; y < H; y += 1) {
        for (let x = 0; x < W; x += 1) {
          const i = (y * W + x) * 4;
          if (Math.abs(data[i] - rgb[0]) < 70 && Math.abs(data[i + 1] - rgb[1]) < 70 && Math.abs(data[i + 2] - rgb[2]) < 70) {
            const a = ((x + 0.5) / W) * Math.PI * 2;
            sx += Math.sin(a);
            cx += Math.cos(a);
            sy += y + 0.5;
            n += 1;
          }
        }
      }
      if (!n) {
        out[name] = null;
        continue;
      }
      let a = Math.atan2(sx, cx);
      if (a < 0) a += Math.PI * 2;
      out[name] = { x: (a / (Math.PI * 2)) * W, y: sy / n, n };
    }
    return out;
  };
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack || error);
  studio.ready = true;
}
