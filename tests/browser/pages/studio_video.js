// The new editor (web_src/studio/editor.js) opened on a stand-in Panorama Studio node whose background is a VIDEO,
// for tests/browser/studio_video.spec.js. The VIDEO is recorded in the page (media.js makeVideo): each frame is a gray
// whose level grows with the time it was painted at (VIDEO_GRAY), so the frame on the stage tells its time. The
// node's result gives the editor MP4 entry, its meta and the Timeline fps the VIDEO sets, as a run would
// (docs/studio-node.md). ComfyUI is not used. The page reports through window.__studio.
import { openStudioEditor } from "/web_src/studio/editor.js";
import { makeVideo } from "./media.js";

// The drawing buffer is kept, so the test can sample the stage between frames.
const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

const SECONDS = 2;
const FPS = 30;
// The gray of the frame painted `t` seconds into the recording.
const grayAt = (t) => Math.max(0, Math.min(255, Math.round(16 + (t / SECONDS) * 220)));

const studio = (window.__studio = { ready: false, error: null, fps: FPS });
const storage = new Map();
const memoryStorage = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) };

// The mean gray of a region of an image source, drawn into a small canvas.
function meanGray(source, sx, sy, sw, sh) {
  const probe = document.createElement("canvas");
  probe.width = 32;
  probe.height = 8;
  const g = probe.getContext("2d", { willReadFrequently: true });
  g.drawImage(source, sx, sy, sw, sh, 0, 0, 32, 8);
  const data = g.getImageData(0, 0, 32, 8).data;
  let sum = 0;
  for (let i = 0; i < data.length; i += 4) sum += (data[i] + data[i + 1] + data[i + 2]) / 3;
  return sum / (data.length / 4);
}

try {
  let start = null;
  const recorded = await makeVideo({
    width: 256,
    height: 128,
    seconds: SECONDS,
    paint: (g, frame, width, height) => {
      const now = performance.now();
      if (start === null) start = now;
      const level = grayAt((now - start) / 1000);
      g.fillStyle = `rgb(${level}, ${level}, ${level})`;
      g.fillRect(0, 0, width, height);
    },
  });
  const duration = recorded.duration;
  const frames = Math.round(duration * FPS);
  studio.frames = frames;
  const origin = { id: 7, title: "Load Video" };
  const node = {
    id: 12,
    title: "Panorama Studio",
    __panoStudio: true,
    inputs: [{ name: "bg_media", link: 1 }],
    widgets: [{ name: "state_json", value: "" }, { name: "bg_color", value: "#00ff00" }],
    graph: { getNodeById: (id) => (id === 7 ? origin : null) },
    getInputLink: (index) => (index === 0 ? { origin_id: 7, origin_slot: 0, type: "VIDEO" } : null),
    getInputNode: (index) => (index === 0 ? origin : null),
  };
  // The node's result as a run leaves it: the editor MP4 of the background, its meta, and the fps the VIDEO sets.
  const app = {
    getNodeImageUrls: () => [],
    nodeOutputs: {
      12: {
        pano_input_videos: [recorded.src],
        pano_input_video_meta: [{ fps: FPS, frames, duration, has_audio: false }],
        pano_timeline_fps: [FPS],
      },
    },
  };
  const editor = await openStudioEditor(node, { app, api: null, storage: memoryStorage });
  studio.state = () => editor.session.state;
  studio.close = () => editor.close();
  // The editor's background VIDEO element (the only <video> in the page; the recorded one is not in it).
  const element = () => document.querySelector("video");
  // What the stage shows: the mean gray of its upper part (the sky; the ground grid is below the horizon).
  studio.stageGray = () => {
    const canvas = document.querySelector("[data-stage-canvas]");
    return meanGray(canvas, 0, 0, canvas.width, Math.floor(canvas.height * 0.25));
  };
  // The VIDEO element's own picture and time, and whether it plays.
  studio.video = () => {
    const video = element();
    return {
      time: video.currentTime,
      paused: video.paused,
      gray: video.readyState >= 2 ? meanGray(video, 0, 0, video.videoWidth, video.videoHeight) : null,
    };
  };
  studio.grayAt = grayAt;
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack || error);
  studio.ready = true;
}
