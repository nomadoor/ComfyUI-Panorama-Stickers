// The Preview's viewer of a Scene on two nodes (docs/preview-node.md "`PANO_SCENE` を見る"): a Scene with a 3DGS
// `scene` read from the Preview's `ui` as an upstream layer, drawn through one shared on-node view, the view moved
// in 6DoF by a drag, the wheel and the keys. The page reports through window.__check;
// tests/browser/scene_viewer.spec.js reads it.
import { createThreeView } from "../../../web_src/pano_three_view.js";
import { createSharedView } from "../../../web_src/pano_preview_view.js";
import { createSceneViewer, sceneViewerRecord } from "../../../web_src/pano_scene_viewer.js";
import { VIEW_CONTROL_PRESETS } from "../../../web_src/pano_view_controls.js";
import { makeSplatPly } from "./media.js";

const check = (window.__check = {
  done: false, error: null, renderer: null, contexts: 0, contextLost: false, stats: null,
  firstNonEmpty: false, movedNonEmpty: false, secondNonEmpty: false, moved: null, draws: 0,
});

// Every WebGL context the page makes is counted.
const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, ...rest) {
  const had = this.__counted;
  const context = getContext.call(this, type, ...rest);
  if (context && /webgl/.test(type) && !had) {
    this.__counted = true;
    check.contexts += 1;
    this.addEventListener("webglcontextlost", () => (check.contextLost = true));
  }
  return context;
};

const W = 480;
const H = 270;
const LOAD_MS = 20000;

function nonEmpty(canvas) {
  const pixels = canvas.getContext("2d", { willReadFrequently: true }).getImageData(0, 0, canvas.width, canvas.height).data;
  let min = 765;
  let max = 0;
  for (let i = 0; i < pixels.length; i += 16) {
    const luma = pixels[i] + pixels[i + 1] + pixels[i + 2];
    min = Math.min(min, luma);
    max = Math.max(max, luma);
  }
  return max - min > 30;
}

try {
  const url = URL.createObjectURL(new Blob([makeSplatPly({ radius: 1 })]));
  const ui = {
    pano_upstream_layers: [{
      state: { version: 2, id: "scene_a", stickers: [] },
      ui: { pano_scene_files: [{ url }], pano_scene_meta: [{ kind: "splat" }] },
    }],
    pano_timeline_fps: [24],
    pano_timeline_frames: [1],
    pano_upstream_coverage: [360],
    pano_upstream_bg_color: [[0, 0, 0]],
  };
  let view = null;
  const acquire = createSharedView(async () => {
    view = createThreeView({ createCanvas: () => document.createElement("canvas") });
    return view;
  });
  // Two Preview nodes, each with its own canvas, record and handle on the one shared view.
  const nodes = [0, 1].map(() => {
    const canvas = document.body.appendChild(document.createElement("canvas"));
    canvas.width = W;
    canvas.height = H;
    const node = { canvas, record: sceneViewerRecord() };
    node.handle = acquire(() => {});
    node.viewer = createSceneViewer({
      record: node.record,
      uiList: (key) => ui[key] ?? [],
      mediaSource: (entry) => entry?.url ?? "",
      mediaAssetSource: () => "",
      surface: node.handle,
      size: () => ({ width: W, height: H }),
      viewControls: () => VIEW_CONTROL_PRESETS.default,
      revisionOf: () => 1,
    });
    return node;
  });
  const draw = (node) => {
    const drawn = node.handle.render({ width: W, height: H, ...node.viewer.input() });
    if (!drawn) return false;
    const ctx = node.canvas.getContext("2d");
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(drawn.canvas, drawn.x, drawn.y, drawn.width, drawn.height, 0, 0, W, H);
    check.draws += 1;
    return true;
  };
  const frames = (count) => new Promise((resolve) => {
    let left = count;
    const step = (ts) => {
      nodes.forEach((node) => node.viewer.tick(ts));
      draw(nodes[0]);
      if (--left <= 0) resolve();
      else requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });

  // Draw until the splats load.
  const begin = performance.now();
  while (performance.now() - begin < LOAD_MS) {
    await frames(5);
    if (view?.stats().sceneItems.loaded > 0) break;
  }
  await frames(10);
  check.firstNonEmpty = nonEmpty(nodes[0].canvas);
  const gl = view.canvas.getContext("webgl2");
  const info = gl.getExtension("WEBGL_debug_renderer_info");
  check.renderer = info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);

  // 6DoF: a left drag on empty space orbits, the wheel steps back out of the splats, the keys move back further.
  const { viewer, record } = nodes[0];
  viewer.pointerDown({ button: 0, x: W / 2, y: H / 2 });
  viewer.pointerMove({ x: W / 2 + 60, y: H / 2 + 10 });
  viewer.pointerUp();
  for (let i = 0; i < 4; i += 1) viewer.wheel(-1, { x: W / 2, y: H / 2 });
  const keys = { t: 0, elapsed(ts) { const s = this.t ? (ts - this.t) / 1000 : 0; this.t = ts; return s; }, direction: () => ({ forward: -1, right: 0, up: 0 }), speed: (scale) => scale };
  for (const ts of [1000, 1300, 1600]) viewer.stepKeys(keys, ts);
  await frames(20);
  check.moved = { mode: record.view.spaceMode, position: record.view.viewPosition, yaw: record.view.viewYaw };
  check.movedNonEmpty = nonEmpty(nodes[0].canvas);

  // The second node draws its own view through the same context.
  draw(nodes[1]);
  check.secondNonEmpty = nonEmpty(nodes[1].canvas);
  check.secondPosition = nodes[1].record.view.viewPosition;
  check.stats = view.stats();
  check.done = true;
} catch (error) {
  check.error = String(error?.stack || error);
  check.done = true;
}
