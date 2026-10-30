// The new Preview window (web_src/studio/preview_window.js) opened on a stand-in Panorama Preview node whose `source`
// is linked to an ERP made in the page, for tests/browser/preview_window.spec.js. ComfyUI is not used. ComfyUI's key
// listeners are stood in for by listeners on window and document (window.__comfy).
import { openPreviewWindow } from "/web_src/studio/preview_window.js";
import { peekSceneViewer, previewNode, sceneViewer } from "/web_src/pano_node_bridge.js";
import { makeVideo } from "./media.js";

// ?video: the source is a VIDEO (its gray goes from dark to light over its length), in the node's result.
const VIDEO = new URLSearchParams(location.search).has("video");
// ?scene: the source is a PANO_SCENE whose layer has a red board in the World ahead, over a blue upstream background.
const SCENE = new URLSearchParams(location.search).has("scene");
// ?clip (with ?scene): the Scene's background shows from frame 10 for 10 frames, its bg_color (green) outside.
const CLIP = new URLSearchParams(location.search).has("clip");
// ?range180: the node's background_range is 180.
const RANGE_180 = new URLSearchParams(location.search).has("range180");
// ?handoff: the node's view (a Scene viewer's record, or the IMAGE runtime's view) is set before the window opens.
const HANDOFF = new URLSearchParams(location.search).has("handoff");
const solid = (width, height, color) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const g = canvas.getContext("2d");
  g.fillStyle = color;
  g.fillRect(0, 0, width, height);
  return canvas.toDataURL("image/png");
};
const FPS = 30;

const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

async function makeErp() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const g = canvas.getContext("2d");
  g.fillStyle = "#3a6fb0";
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

const preview = (window.__preview = { ready: false, error: null });
const heard = (window.__comfy = []);
for (const target of [window, document]) {
  for (const type of ["keydown", "keyup", "keypress"]) {
    target.addEventListener(type, (event) => heard.push(`${type}:${event.key}`));
  }
}
try {
  const url = VIDEO || SCENE ? "" : await makeErp();
  let recorded = null;
  if (VIDEO) {
    let start = null;
    recorded = await makeVideo({
      width: 256,
      height: 128,
      seconds: 2,
      paint: (g, frame, width, height) => {
        const now = performance.now();
        if (start === null) start = now;
        const level = Math.max(0, Math.min(255, Math.round(16 + ((now - start) / 2000) * 220)));
        g.fillStyle = `rgb(${level}, ${level}, ${level})`;
        g.fillRect(0, 0, width, height);
      },
    });
    preview.frames = Math.round(recorded.duration * FPS);
  }
  const origin = { id: 7, title: VIDEO ? "Load Video" : "Load Image" };
  const node = {
    id: 21,
    title: "Panorama Preview",
    comfyClass: "PanoramaPreviewNode",
    inputs: [{ name: "source", link: 1 }],
    widgets: [{ name: "background_range", value: RANGE_180 ? "180" : "360" }],
    graph: { getNodeById: (id) => (id === 7 ? origin : null) },
    getInputLink: (index) => (index === 0 ? { origin_id: 7, origin_slot: 0, type: SCENE ? "PANO_SCENE" : VIDEO ? "VIDEO" : "IMAGE" } : null),
    getInputNode: (index) => (index === 0 ? origin : null),
  };
  const layer = {
    version: 2,
    id: "scene_up",
    timeline: { fps: 24 },
    camera: null,
    stickers: [{ id: "sticker_1", placement: "world", source: { kind: "file", data_url: solid(128, 128, "#e02020") }, position: { value: [0, 0, -3] }, scale: { value: 1.2 } }],
  };
  const nodeOutputs = SCENE
    ? {
      21: {
        pano_upstream_layers: [{ state: layer, ui: {} }],
        pano_upstream_coverage: [360],
        pano_upstream_bg_color: [CLIP ? [0, 1, 0] : [0, 0, 0]],
        pano_upstream_input_images: [solid(512, 256, "#2040c0")],
        ...(CLIP ? { pano_upstream_bg_clip: [{ clip: { start: 10, in: 0, duration: 10 }, fps: 24 }] } : {}),
        pano_timeline_fps: [24],
        pano_timeline_frames: [48],
      },
    }
    : VIDEO
    ? { 21: { pano_videos: [recorded.src], pano_video_meta: [{ fps: FPS, frames: preview.frames, duration: recorded.duration, has_audio: false }] } }
    : {};
  // The node's own display, stood in for: what the window takes over and hands back.
  const told = (preview.told = []);
  if (SCENE) {
    sceneViewer(node).record = {
      view: { spaceMode: "6dof", viewPosition: HANDOFF ? [0.5, 0, 1] : [0, 0, 0], viewYaw: HANDOFF ? 40 : 0, viewPitch: HANDOFF ? -10 : 0, viewFov: 100, viewDistance: 8, viewMoved: false, viewTransition: null },
      frame: HANDOFF ? 12 : 0,
      playing: HANDOFF,
      showGrid: true,
    };
    sceneViewer(node).surface = { rest: () => told.push("rest"), activate: () => told.push("activate"), detach() {} };
  } else if (HANDOFF) {
    previewNode(node).runtime = { view: { yaw: new URLSearchParams(location.search).has("back") ? 180 : 30, pitch: new URLSearchParams(location.search).has("back") ? 0 : 5, fov: 70 }, requestDraw: () => told.push("draw"), teardown() {} };
  }
  preview.record = () => JSON.parse(JSON.stringify({ ...(peekSceneViewer(node)?.record ?? {}), windowOpen: !!peekSceneViewer(node)?.windowOpen }));
  preview.runtimeView = () => ({ ...(previewNode(node).runtime?.view ?? {}) });
  preview.pose = () => win.stage().pose();
  const app = { getNodeImageUrls: (target) => (target === origin && url ? [url] : []), nodeOutputs };
  let win = null;
  preview.open = async () => {
    win = await openPreviewWindow(node, { app, api: null, storage: { getItem: () => null, setItem: () => {} } });
    return !!win;
  };
  preview.close = () => win?.close();
  preview.playback = () => ({ ...win.playback });
  // The mean [r, g, b] of the stage's center (a tenth of its width and height) and of its top band.
  preview.colors = () => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const probe = document.createElement("canvas");
    probe.width = 40;
    probe.height = 40;
    const g = probe.getContext("2d", { willReadFrequently: true });
    g.drawImage(canvas, 0, 0, 40, 40);
    const mean = (x0, y0, x1, y1) => {
      const data = g.getImageData(x0, y0, x1 - x0, y1 - y0).data;
      const sum = [0, 0, 0];
      for (let i = 0; i < data.length; i += 4) for (let c = 0; c < 3; c += 1) sum[c] += data[i + c];
      return sum.map((v) => Math.round(v / (data.length / 4)));
    };
    return { center: mean(18, 18, 22, 22), top: mean(0, 0, 40, 4) };
  };
  // The mean color of the stage's middle band.
  preview.sample = () => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const probe = document.createElement("canvas");
    probe.width = 32;
    probe.height = 18;
    const g = probe.getContext("2d", { willReadFrequently: true });
    g.drawImage(canvas, 0, 0, 32, 18);
    const data = g.getImageData(0, 0, 32, 18).data;
    let sum = 0;
    for (let i = 0; i < data.length; i += 4) sum += data[i] + data[i + 1] + data[i + 2];
    return sum / (data.length / 4) / 3;
  };
  preview.ready = true;
} catch (error) {
  preview.error = String(error?.stack || error);
  preview.ready = true;
}
