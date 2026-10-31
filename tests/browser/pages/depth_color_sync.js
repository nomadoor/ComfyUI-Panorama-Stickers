// A DA3_GEOMETRY mono depth grid sequence on the new editor's `scene` input whose depth files are HTTP URLs
// (/depth-sync/f_N.f32, served by tests/browser/depth_color_sync.spec.js with page.route, optionally delayed), so its
// items load late as over a slow network. Item N's depth is > 0 only in the columns x < N + 2, so the width drawn
// tells which item's shape is drawn; the proxy video's red grows with its time, so the red drawn tells which item's
// colors are drawn (calibrated against the video at each item's time, i ÷ 24).
import { editorSession } from "/web_src/pano_node_bridge.js";
import { openStudioEditor } from "/web_src/studio/editor.js";
import { rememberView } from "/web_src/studio/view_camera.js";
import { diagnostics } from "/web_src/pano_diagnostics.js";
import { makeVideo } from "./media.js";

// The stage's three.js view's stats (renderer.info, the `scene` items), as the diagnostics sample them.
const sources = new Map();
const addSource = diagnostics.addSource;
diagnostics.addSource = (name, read) => {
  sources.set(name, read);
  return addSource(name, read);
};

// The stage's canvas keeps its pixels, so a frame can be read after it is presented.
const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

const studio = (window.__studio = { ready: false, error: null });

const storage = new Map();
const memoryStorage = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) };
const W = 65;
const H = 33;
const FRAMES = 48;
const FOCAL = (W - 1) / 2 / Math.tan(25 * Math.PI / 180);

// The red of the video's picture at `time`.
async function redAt(video, time) {
  await new Promise((resolve) => {
    video.onseeked = resolve;
    video.currentTime = time;
  });
  const canvas = document.createElement("canvas");
  canvas.width = 8;
  canvas.height = 8;
  const g = canvas.getContext("2d");
  g.drawImage(video, 0, 0, 8, 8);
  return g.getImageData(4, 4, 1, 1).data[0];
}

try {
  const files = Array.from({ length: FRAMES }, (_, n) => `/depth-sync/f_${n}.f32`);
  const intrinsics = files.map(() => [FOCAL, 0, (W - 1) / 2, 0, FOCAL, (H - 1) / 2, 0, 0, 1]);
  // red = 40 + 4 × the item of the time painted (MediaRecorder paints at about 30 fps of real time).
  const start = performance.now();
  const video = await makeVideo({ width: 64, height: 64, seconds: FRAMES / 24 + 0.3, paint: (g) => {
    const item = Math.min(FRAMES - 1, Math.round(((performance.now() - start) / 1000) * 24));
    g.fillStyle = `rgb(${40 + 4 * item}, 0, 0)`;
    g.fillRect(0, 0, 64, 64);
  } });
  // The red at each item's time, which the colors of that item show.
  studio.reds = [];
  for (let n = 0; n < FRAMES; n += 1) studio.reds.push(await redAt(video, n / 24));
  const meta = { kind: "depth_grid", unlit: true, width: W, height: H, depth: { dtype: "float32", byte_order: "little", bytes: W * H * 4 }, intrinsics, video: video.src, video_fps: 24, frames: FRAMES };
  const state = { version: 2, timeline: { fps: 24 }, scene: { clip: { start: 0, in: 0, duration: FRAMES } }, stickers: [] };
  const origins = [{ id: 100, title: "world", type: "MOGE_GEOMETRY", image: null }];
  const graphNodes = [...origins];
  const node = {
    id: 31, title: "Panorama Studio", comfyClass: "PanoramaStudio", __panoStudio: true, __panoSceneStateV2: true,
    inputs: [{ name: "world", link: 1 }],
    widgets: [{ name: "state_json", value: JSON.stringify(state) }, { name: "bg_color", value: "#000000" }],
    graph: { getNodeById: (id) => graphNodes.find((item) => item.id === id) ?? null, _nodes: graphNodes, nodes: graphNodes },
    isInputConnected: (i) => !!origins[i],
    getInputLink: (i) => (origins[i] ? { origin_id: origins[i].id, origin_slot: 0, type: origins[i].type } : null),
    getInputNode: (i) => origins[i] ?? null,
  };
  graphNodes.push(node);
  const app = { graph: node.graph, getNodeImageUrls: () => [], nodeOutputs: { 31: { pano_scene_files: files, pano_scene_meta: [meta] } } };
  editorSession(node).view = rememberView({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, target: [0, 0, -3] }, "panorama");
  // A ComfyUI api with only its events (docs/threejs-spark-integration.md "生成を邪魔しない"): emit(type, detail).
  const events = new EventTarget();
  const api = {
    addEventListener: (type, listener) => events.addEventListener(type, listener),
    removeEventListener: (type, listener) => events.removeEventListener(type, listener),
  };
  studio.emit = (type, detail = null) => events.dispatchEvent(new CustomEvent(type, { detail }));
  const editor = await openStudioEditor(node, { app, api, storage: memoryStorage });
  studio.stats = () => [...sources].filter(([name]) => name.startsWith("three.")).map(([name, read]) => ({ name, ...read() }));
  studio.close = () => editor.close();
  // The stage's row through the plane's middle: the leftmost and rightmost red pixels, the red in the middle of them,
  // and the playhead.
  const probe = document.createElement("canvas");
  studio.sample = () => {
    const canvas = document.querySelector("[data-stage-canvas]");
    probe.width = canvas.width;
    probe.height = 1;
    const g = probe.getContext("2d", { willReadFrequently: true });
    g.drawImage(canvas, 0, Math.floor(canvas.height / 2), canvas.width, 1, 0, 0, canvas.width, 1);
    const row = g.getImageData(0, 0, canvas.width, 1).data;
    let left = -1;
    let right = -1;
    for (let x = 0; x < canvas.width; x += 1) {
      if (row[x * 4] > 30 && row[x * 4 + 1] < 20 && row[x * 4 + 2] < 20) {
        if (left < 0) left = x;
        right = x;
      }
    }
    const middle = Math.floor((left + right) / 2);
    const text = document.querySelector(".pano-studio-tl-frame")?.textContent ?? "";
    return { t: performance.now(), left, right, red: right < 0 ? null : row[middle * 4], playhead: Number(text.split("/")[0]) };
  };
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack || error);
  studio.ready = true;
}
