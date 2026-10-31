// Panorama Studio's node surface (web_src/pano_preview_runtime.js attachPanoramaPreview with a Studio node,
// components/PanoStudioNodeSurface.vue) on a stand-in node, for tests/browser/studio_node_surface.spec.js
// (docs/studio-node-surface.md). ComfyUI is not used: the node's DOM widget goes into #node, and its widgets call back
// as ComfyUI 1.57's do (callback.call(widget, value, canvas, node), reading `this.options`). `?mode=panorama|frame`
// picks the Camera. `?case=moge` links a MOGE_GEOMETRY VIDEO batch to `world` as a run leaves it in the node's result (a
// depth grid sequence, docs/studio-node.md "実行結果の `ui`"), without the sky image; `?case=upstream` links another
// Studio's Scene to `scene` whose layer has a blue sky image straight ahead, without the node's own (`&override=hide`: the
// node's state hides that image, an upstream override); `?nodes=2` puts a second Studio node
// with the same inputs in #node2. The page reports through window.__surface.
import { app } from "./comfy/app.js";
import { makeVideo } from "./media.js";
import { editorSession, nodeSurface } from "/web_src/pano_node_bridge.js";
import { attachPanoramaPreview } from "/web_src/pano_preview_runtime.js";

const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

const params = new URLSearchParams(location.search);
const mode = params.get("mode") || "frame";
const which = params.get("case") || "";
const surface = (window.__surface = { ready: false, error: null, opened: 0 });

// The VIDEO elements made once the nodes attach (the depth grids' color VIDEOs among them), to see which hold a source,
// and the images made (the upstream layer's among them), to see when they are made again.
const videos = [];
const images = [];
const NativeImage = window.Image;
window.Image = function Image(...args) {
  const image = new NativeImage(...args);
  images.push(image);
  return image;
};
const createElement = document.createElement.bind(document);
let recording = false;
document.createElement = (tag, options) => {
  const element = createElement(tag, options);
  if (recording && String(tag).toLowerCase() === "video") videos.push(element);
  return element;
};

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
// The depth grids' color (their proxy VIDEO's).
export const DEPTH = [192, 48, 48];
// The upstream layer's sky image.
export const BLUE = [40, 150, 210];
function state(yaw = 0) {
  return {
    version: 2,
    timeline: { fps: 24 },
    ...(params.get("override") === "hide"
      ? { upstream: [{ layer: "scene_up", fps: 24, stickers: [{ id: "sticker_1", placement: "sky", visible: false }] }] }
      : {}),
    camera: {
      projection: mode === "panorama" ? "erp" : "perspective",
      aspect: 16 / 9,
      rotation: { value: { yaw_deg: yaw, pitch_deg: 0, roll_deg: 0 } },
      fov: { value: 60 },
    },
    stickers: which === "moge" || which === "upstream" ? [] : [{
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

// A MOGE_GEOMETRY VIDEO batch of four items (docs/studio-node.md "`MOGE_GEOMETRY` の透視投影の列のエディタ用ファイル"): item
// k is a plane 3 ahead only in its k-th quarter across (items 0 and 1 left of the middle, 2 and 3 right of it), so the
// picture tells which item it shows. The proxy VIDEO is one color.
async function mogeResult() {
  const W = 33;
  const H = 33;
  const frames = 4;
  const files = Array.from({ length: frames }, (_, index) => {
    const values = new Float32Array(W * H);
    for (let y = 0; y < H; y += 1) values.fill(3, y * W + index * 8, y * W + index * 8 + 8);
    return URL.createObjectURL(new Blob([values.buffer]));
  });
  const f = (W - 1) / 2 / Math.tan(25 * Math.PI / 180);
  const video = await makeVideo({ width: 64, height: 64, seconds: 0.6, paint: (g) => {
    g.fillStyle = `rgb(${DEPTH.join(",")})`;
    g.fillRect(0, 0, 64, 64);
  } });
  const meta = {
    kind: "depth_grid", unlit: true, width: W, height: H, depth: { dtype: "float32", byte_order: "little", bytes: W * H * 4 },
    intrinsics: files.map(() => [f, 0, (W - 1) / 2, 0, f, (H - 1) / 2, 0, 0, 1]), video: video.src, video_fps: 24, frames,
  };
  return { pano_scene_files: files, pano_scene_meta: [meta] };
}

// Another Studio's Scene on `scene` as a run leaves it (docs/studio-node.md "上流の Scene"): one layer with a blue sky image.
let upstreamImageUrl = "";
function upstreamResult() {
  upstreamImageUrl = solid(`rgb(${BLUE.join(",")})`);
  const layer = {
    version: 2,
    id: "scene_up",
    timeline: { fps: 24 },
    camera: null,
    stickers: [{
      id: "sticker_1",
      placement: "sky",
      source: { kind: "file", data_url: upstreamImageUrl },
      direction: { value: { yaw_deg: 0, pitch_deg: 0 } },
      size: { value: { hFOV_deg: 40, vFOV_deg: 40 } },
    }],
  };
  return { pano_upstream_layers: [{ state: layer, ui: {} }], pano_upstream_frames: [1], pano_timeline_fps: [24] };
}

function makeNode(id, host) {
  return {
    id,
    type: "PanoramaStudio",
    comfyClass: "PanoramaStudio",
    title: "Panorama Studio",
    __panoStudio: true,
    __panoSceneStateV2: true,
    size: [360, 400],
    flags: {},
    inputs: [{ name: "background", link: null }, { name: "world", link: which === "moge" ? 1 : null }, { name: "sticker", link: null }, { name: "scene", link: which === "upstream" ? 2 : null }],
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
}

const host = document.getElementById("node");
const node = makeNode(5, host);
const host2 = document.getElementById("node2");
const node2 = params.get("nodes") === "2" ? makeNode(6, host2) : null;
if (!node2) host2.remove();

// What ComfyUI does when a widget changes (createWidgetUpdateHandler): set the value, call back with the frontend's args.
surface.setWidget = (name, value) => {
  const target = node.widgets.find((entry) => entry.name === name);
  target.value = value;
  target.callback?.call(target, value, { graph: null }, node);
};
// A widget the node does not have (an older graph): taken away, and the surface drawn again.
surface.removeWidget = (name) => {
  node.widgets = node.widgets.filter((entry) => entry.name !== name);
  const text = node.widgets.find((entry) => entry.name === "state_json");
  text.callback?.call(text, text.value, { graph: null }, node);
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
// The display frame and whether the node plays (`index` 0 is #node, 1 is #node2).
surface.playback = (index = 0) => {
  const playback = nodeSurface(index ? node2 : node).playback?.playback;
  return { frame: playback?.frame ?? null, playing: !!playback?.playing };
};
// Where the depth grid shows on a row of the picture: the share of its pixels in the depth color and their mean u.
surface.depthRow = (v = 0.5, index = 0) => {
  const target = index ? host2 : host;
  const canvas = target.querySelector("canvas");
  const line = target.querySelector(".pano-studio-node-line");
  const frame = target.querySelector(".pano-studio-node-frame");
  const ratio = window.devicePixelRatio || 1;
  const top = frame.clientHeight - (line.offsetTop + line.offsetHeight);
  const box = { x: line.offsetLeft, y: top, w: line.offsetWidth, h: line.offsetTop - 6 - top };
  const y = Math.round((box.y + v * box.h) * ratio);
  const data = canvas.getContext("2d").getImageData(Math.round(box.x * ratio), y, Math.round(box.w * ratio), 1).data;
  let count = 0;
  let sum = 0;
  const width = data.length / 4;
  for (let x = 0; x < width; x += 1) {
    const rgb = [data[x * 4], data[x * 4 + 1], data[x * 4 + 2]];
    if (rgb.every((value, i) => Math.abs(value - DEPTH[i]) <= 40)) {
      count += 1;
      sum += x / width;
    }
  }
  return { share: count / width, u: count ? sum / count : null };
};
// The VIDEOs made since the nodes attached that are not in the page (the depth grids' color VIDEOs) and hold a source.
surface.depthVideosLoaded = () => videos.filter((video) => !video.isConnected && !!video.getAttribute("src")).length;
// How many images were made for the upstream layer's sky image (one more each time its layers are read again).
surface.upstreamImagesMade = () => images.filter((image) => image.src === upstreamImageUrl).length;
// Opens or closes the node's editor as pano_node_bridge.js records it (the modal itself is not made here).
surface.editor = (open) => {
  editorSession(node).open = open;
  nodeSurface(node).dom?.requestDraw?.();
};
// Removes the node (ComfyUI calls onRemoved).
surface.remove = (index = 0) => (index ? node2 : node).onRemoved?.();
// Collapses or expands the node (a draw follows, as ComfyUI's canvas draws the node again).
surface.collapse = (collapsed) => {
  node.flags.collapsed = collapsed;
  nodeSurface(node).dom?.requestDraw?.();
};

try {
  if (which === "moge") app.nodeOutputs = { 5: await mogeResult(), 6: null };
  if (which === "upstream") app.nodeOutputs = { 5: upstreamResult() };
  if (node2 && which === "moge") app.nodeOutputs[6] = app.nodeOutputs[5];
  recording = true;
  attachPanoramaPreview(node, { mode: "stickers", onOpen: () => { surface.opened += 1; } });
  if (node2) attachPanoramaPreview(node2, { mode: "stickers", onOpen: () => {} });
  surface.ready = true;
} catch (error) {
  surface.error = String(error?.stack || error);
}
