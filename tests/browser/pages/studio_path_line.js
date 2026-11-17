// The new editor (web_src/studio/editor.js) on a stand-in Panorama Studio node for tests/browser/studio_path_line.spec.js:
// the Camera's path line in the 3D tab (docs/studio-ui.md "軌道の線"). The Camera has three position Keyframes on the
// ground in front of the view, which looks down at them. ComfyUI is not used. The page reports through window.__studio.
import { editorSession } from "/web_src/pano_node_bridge.js";
import { evaluateLane } from "/web_src/pano_scene_eval.js";
import { projectPoint } from "/web_src/pano_space.js";
import { openStudioEditor } from "/web_src/studio/editor.js";
import { rememberView } from "/web_src/studio/view_camera.js";

// ?dense=1: a Keyframe every 2 frames along a curve, as a video estimate writes them (for Simplify).
const params = new URLSearchParams(location.search);
const denseKeys = () => {
  const keys = [];
  for (let frame = 0; frame <= 46; frame += 2) {
    const t = frame / 46;
    keys.push({ frame, value: [-3 + 6 * t, -1.2, -4 - 2 * Math.sin(t * Math.PI)] });
  }
  return keys;
};
const STATE = {
  version: 2,
  timeline: { fps: 24, length: 48 },
  camera: {
    projection: "perspective",
    position: { keyframes: params.has("dense") ? denseKeys() : [
      { frame: 0, value: [-3, -1.2, -4] },
      { frame: 20, value: [0, -1.2, -4] },
      { frame: 40, value: [3, -1.2, -6] },
    ] },
    rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 } },
  },
};

const studio = (window.__studio = { ready: false, error: null });
const storage = new Map();
const memoryStorage = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) };

try {
  const node = {
    id: 41,
    title: "Panorama Studio",
    __panoStudio: true,
    __panoSceneStateV2: true,
    inputs: [],
    widgets: [
      { name: "state_json", value: JSON.stringify(STATE) },
      { name: "megapixels", value: 1 },
      { name: "multiple", value: 8 },
    ],
    graph: { getNodeById: () => null },
    isInputConnected: () => false,
    getInputLink: () => null,
    getInputNode: () => null,
  };
  const app = { getNodeImageUrls: () => [], nodeOutputs: {} };
  editorSession(node).view = rememberView({ position: [0, 4, 2], yaw_deg: 0, pitch_deg: -45, target: [0, -1.2, -4.5] }, "panorama");
  const editor = await openStudioEditor(node, { app, api: { apiURL: (route) => route }, storage: memoryStorage });
  studio.session = editor.session;
  studio.editor = editor;
  // The Camera's position Keyframes as they are now.
  studio.keys = () => JSON.parse(JSON.stringify(editor.session.state.camera.position.keyframes));
  // Where a World point lands on the page, from the stage's 3D view now.
  studio.at = (point) => {
    const landing = editor.stage().landing;
    const rect = document.querySelector("[data-stage-canvas]").getBoundingClientRect();
    const { width, height } = landing.size();
    const q = projectPoint(landing.camera(), point, width, height);
    return q ? { x: rect.left + q.x, y: rect.top + q.y } : null;
  };
  // Where the Camera is at a Timeline frame, on the page.
  studio.pathAt = (frame) => studio.at(evaluateLane(editor.session.state.camera, "position", frame));
  studio.topLine = () => document.querySelector("[data-part='top-line'], .pano-studio-notice")?.textContent?.trim() ?? "";
  // The overlay pixels near the path line's yellow, in page CSS px.
  studio.yellowCount = () => {
    const canvas = document.querySelector(".pano-studio-stage-overlay");
    const g = canvas.getContext("2d", { willReadFrequently: true });
    const data = g.getImageData(0, 0, canvas.width, canvas.height).data;
    let count = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] > 200 && Math.abs(data[i] - 0xe8) < 12 && Math.abs(data[i + 1] - 0xcf) < 12 && Math.abs(data[i + 2] - 0x74) < 16) count += 1;
    }
    return count;
  };
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack ?? error);
  studio.ready = true;
}
