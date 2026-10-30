// Panorama Studio's node surface (web_src/pano_preview_runtime.js attachPanoramaPreview with a Studio node,
// components/PanoStudioNodeSurface.vue) on a stand-in node, for tests/browser/studio_node_surface.spec.js
// (docs/studio-node-surface.md). ComfyUI is not used: the node's DOM widget goes into #node, and its widgets call back
// as ComfyUI 1.57's do (callback.call(widget, value, canvas, node), reading `this.options`). `?mode=panorama|frame`
// picks the Camera. The page reports through window.__surface.
import { attachPanoramaPreview } from "/web_src/pano_preview_runtime.js";

const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

const params = new URLSearchParams(location.search);
const mode = params.get("mode") || "frame";
const surface = (window.__surface = { ready: false, error: null, opened: 0 });

function solid(color, width = 64, height = 64) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const g = canvas.getContext("2d");
  g.fillStyle = color;
  g.fillRect(0, 0, width, height);
  return canvas.toDataURL("image/png");
}

// The red sky image straight ahead of the Camera at yaw 0; the background is green (background_color, no input).
export const RED = [220, 40, 40];
export const GREEN = [0, 255, 0];
function state(yaw = 0) {
  return {
    version: 2,
    timeline: { fps: 24 },
    camera: {
      projection: mode === "panorama" ? "erp" : "perspective",
      aspect: 16 / 9,
      rotation: { value: { yaw_deg: yaw, pitch_deg: 0, roll_deg: 0 } },
      fov: { value: 60 },
    },
    stickers: [{
      id: "sticker_1",
      placement: "sky",
      source: { kind: "file", data_url: solid(`rgb(${RED.join(",")})`) },
      direction: { value: { yaw_deg: 0, pitch_deg: 0 } },
      size: { value: { hFOV_deg: 40, vFOV_deg: 40 } },
    }],
  };
}

// A ComfyUI-like widget: its callback reads `this`, as the frontend's number widget does.
function widget(name, value, options = {}) {
  return {
    name,
    value,
    options,
    callback(next) {
      if (this.options.round) this.value = Math.round(next / this.options.round) * this.options.round;
    },
  };
}

const host = document.getElementById("node");
const node = {
  id: 5,
  type: "PanoramaStudio",
  comfyClass: "PanoramaStudio",
  title: "Panorama Studio",
  __panoStudio: true,
  __panoSceneStateV2: true,
  size: [360, 400],
  flags: {},
  inputs: [{ name: "background", link: null }, { name: "world", link: null }, { name: "sticker", link: null }, { name: "scene", link: null }],
  widgets: [
    widget("background_color", "#00ff00"),
    widget("background_range", "360"),
    widget("megapixels", 2.0, { round: 0.01 }),
    widget("multiple", 8, { round: 1 }),
    widget("state_json", JSON.stringify(state())),
    { name: "Open Studio Editor", type: "button", value: null, callback() {} },
  ],
  setDirtyCanvas() {},
  isInputConnected(slot) {
    return this.inputs[slot]?.link != null;
  },
  getInputLink() {
    return null;
  },
  addDOMWidget(name, type, element, options) {
    host.appendChild(element);
    const entry = { name, type, element, options, computeSize: () => [360, 240] };
    this.widgets.push(entry);
    return entry;
  },
};

// What ComfyUI does when a widget changes (createWidgetUpdateHandler): set the value, call back with the frontend's args.
surface.setWidget = (name, value) => {
  const target = node.widgets.find((entry) => entry.name === name);
  target.value = value;
  target.callback?.call(target, value, { graph: null }, node);
};
surface.turnCamera = (yaw) => surface.setWidget("state_json", JSON.stringify(state(yaw)));
surface.setMode = (next) => {
  const raw = JSON.parse(node.widgets.find((entry) => entry.name === "state_json").value);
  raw.camera.projection = next === "panorama" ? "erp" : "perspective";
  surface.setWidget("state_json", JSON.stringify(raw));
};
// The picture's box in CSS px of the surface: as wide as the line and right above it (6px), and centered up and down
// with it (as much room above the picture as below the line).
surface.pictureBox = () => {
  const line = host.querySelector(".pano-studio-node-line");
  const frame = host.querySelector(".pano-studio-node-frame");
  const top = frame.clientHeight - (line.offsetTop + line.offsetHeight);
  return { x: line.offsetLeft, y: top, w: line.offsetWidth, h: line.offsetTop - 6 - top };
};
// The color at a point of the picture, (u, v) in 0..1 of the picture's box (the layout the overlay reads).
surface.pictureColor = (u, v) => {
  const canvas = host.querySelector("canvas");
  const ratio = window.devicePixelRatio || 1;
  const box = surface.pictureBox();
  const g = canvas.getContext("2d");
  const [r, gg, b] = g.getImageData(Math.round((box.x + u * box.w) * ratio), Math.round((box.y + v * box.h) * ratio), 1, 1).data;
  return [r, gg, b];
};
// Resizes the stand-in node's DOM widget area, as a node resize does in either renderer.
surface.resize = (width, height) => {
  host.style.width = `${width}px`;
  host.style.height = `${height}px`;
};
// What the surface shows right after the frame that resized it painted: called in the frame of the resize (before the
// ResizeObserver), it answers from the next frame's first callback whether the canvas and the line already had the new
// size's layout.
surface.resizeAndSample = (width, height) => new Promise((resolve) => {
  requestAnimationFrame(() => {
    surface.resize(width, height);
    requestAnimationFrame(() => {
      const canvas = host.querySelector("canvas");
      const ratio = window.devicePixelRatio || 1;
      resolve({
        canvas: [canvas.width, canvas.height],
        expected: [Math.round(width * ratio), Math.round(height * ratio)],
        box: surface.pictureBox(),
      });
    });
  });
});
surface.node = node;

try {
  attachPanoramaPreview(node, { mode: "stickers", onOpen: () => { surface.opened += 1; } });
  surface.ready = true;
} catch (error) {
  surface.error = String(error?.stack || error);
}
