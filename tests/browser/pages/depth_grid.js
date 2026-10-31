// A DA3_GEOMETRY mono item drawn as the editor's space view draws it (docs/threejs-spark-integration.md
// "DA3_GEOMETRY mono の深度のグリッド"): a depth file made here (a plane 2 ahead, with a square of depth 0 in its
// middle), its colors from a video made here, through pano_space.js sceneRequest, the queue, loadSceneItem and the
// depth grid's shader. The page reports through window.__check; tests/browser/three_view.spec.js reads it.
import { createThreeView } from "../../../web_src/pano_three_view.js";
import { sceneFilesOf, sceneRequest } from "../../../web_src/pano_space.js";
import { makeVideo } from "./media.js";
import { drawUntilSettled, presentedFrames, within } from "./settle.js";

const check = (window.__check = { done: false, contextLost: false, error: null, renderer: null, stats: null, inside: null, hole: null, pick: null, orientation: {}, colorTextures: null, colorTexturesAfter: null });

const SIZE = 256;
const W = 65;
const H = 65;
const LOAD_MS = 20000;

// K so the grid's corners land on the view's edges at depth 2: fx = (W − 1) ÷ 2 ÷ tan 30°, the principal point the
// middle pixel.
const f = (W - 1) / 2 / Math.tan(Math.PI / 6);
const intrinsics = [f, 0, (W - 1) / 2, 0, f, (H - 1) / 2, 0, 0, 1];

// A request's `color` (pano_depth_color.js withDepthColor's shape) that always gives `picture`.
const pictureColor = (picture) => ({ ready: true, at: () => picture });

function depthFile() {
  const values = new Float32Array(W * H).fill(2);
  for (let y = 28; y <= 36; y += 1) for (let x = 28; x <= 36; x += 1) values[y * W + x] = 0;
  return values.buffer;
}

// The mean RGBA of a few pixels around (x, y) of the frame read into probe2d.
function sample(probe2d, x, y) {
  const data = probe2d.getImageData(x - 2, y - 2, 5, 5).data;
  const sum = [0, 0, 0, 0];
  for (let i = 0; i < data.length; i += 4) for (let c = 0; c < 4; c += 1) sum[c] += data[i + c];
  return sum.map((value) => value / (data.length / 4));
}

try {
  const video = await makeVideo({ width: 128, height: 128 });
  await video.play();
  const url = URL.createObjectURL(new Blob([depthFile()]));
  const meta = {
    kind: "depth_grid", unlit: true, width: W, height: H, depth: { dtype: "float32", byte_order: "little", bytes: W * H * 4 },
    intrinsics: [intrinsics], video: { filename: "proxy" }, video_fps: 24, frames: 1,
  };
  const files = sceneFilesOf([{ filename: "depth" }], [meta], (entry) => (entry.filename === "depth" ? url : "proxy.mp4"));
  const scene = { active: true, clip_frame: 0, position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 1 };
  const request = { ...sceneRequest(files, scene), color: pictureColor({ media: video, revision: "video", source: "proxy.mp4" }) };
  let raf = 0;
  const ask = () => (raf ||= requestAnimationFrame(frame));
  const view = createThreeView({ createCanvas: () => document.body.appendChild(document.createElement("canvas")), onUpdate: ask, onSplats: ask });
  view.resize(SIZE, SIZE);
  view.canvas.addEventListener("webglcontextlost", () => (check.contextLost = true));
  const gl = view.canvas.getContext("webgl2");
  const info = gl.getExtension("WEBGL_debug_renderer_info");
  check.renderer = info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
  const camera = { quaternion: { x: 0, y: 0, z: 0, w: 1 }, fovY_deg: 60, aspect: 1, position: [0, 0, 0], near: 0.01, far: 100 };
  const space = { grid: null, sceneUrls: files.urls, scene: request, stickerUrls: [], sticker: null, stickers: [], lines: [], upstreamItems: [], upstreamStickers: [], gizmo: null };
  const probe = document.createElement("canvas");
  probe.width = SIZE;
  probe.height = SIZE;
  const probe2d = probe.getContext("2d", { willReadFrequently: true });
  let begin = 0;
  let loaded = 0;
  function frame(now) {
    raf = 0;
    begin ||= now;
    view.clear();
    view.render({ rect: { x: 0, y: 0, w: SIZE, h: SIZE }, camera, background: null, layers: [], space });
    probe2d.clearRect(0, 0, SIZE, SIZE);
    probe2d.drawImage(view.canvas, 0, 0);
    if (view.stats().sceneItems.loaded > 0) loaded += 1;
    if (loaded < 5 && now - begin < LOAD_MS) {
      ask();
      return;
    }
    // A pixel on the plane, and the middle of the square of depth 0, whose quads are not drawn.
    check.inside = sample(probe2d, SIZE / 4, SIZE / 4);
    check.hole = sample(probe2d, SIZE / 2, SIZE / 2);
    // The pick of a point on the plane lands on the drawn surface, 2 ahead.
    check.pick = view.pick(camera, SIZE / 4, SIZE / 4, SIZE, SIZE);
    check.stats = view.stats();
    void orientation();
  }

  // Draws `drawn` until its picture is uploaded and holds still: from a VIDEO, once it has presented two frames
  // since, and within two levels of the frame before (each of the page's VIDEO frames changes by one level).
  function showSettled(drawn, media) {
    const presented = media instanceof HTMLVideoElement ? presentedFrames(media) : () => Infinity;
    return drawUntilSettled(() => {
      view.clear();
      view.render({ rect: { x: 0, y: 0, w: SIZE, h: SIZE }, camera, background: null, layers: [], space: drawn });
      probe2d.clearRect(0, 0, SIZE, SIZE);
      probe2d.drawImage(view.canvas, 0, 0);
      return probe2d.getImageData(0, 0, SIZE, SIZE).data;
    }, { ready: () => presented() >= 2, same: within(2) });
  }

  // The image's top is the grid's top whatever picture the colors come from: the proxy VIDEO playing, the still
  // canvas the follower captures, an ImageBitmap. Each is red above and blue below.
  async function orientation() {
    // A canvas that never changes gives a recorder no frames, so each frame changes a little.
    const halves = (g, w, h, frame = 0) => {
      g.fillStyle = `rgb(255 ${frame % 2} 0)`;
      g.fillRect(0, 0, w, h / 2);
      g.fillStyle = `rgb(0 ${frame % 2} 255)`;
      g.fillRect(0, h / 2, w, h / 2);
    };
    const still = document.createElement("canvas");
    still.width = 64;
    still.height = 64;
    halves(still.getContext("2d"), 64, 64);
    const halvesVideo = await makeVideo({ width: 128, height: 128, seconds: 1, paint: (g, frame, w, h) => halves(g, w, h, frame) });
    await halvesVideo.play();
    const pictures = { canvas: still, bitmap: await createImageBitmap(still), video: halvesVideo };
    for (const [name, media] of Object.entries(pictures)) {
      const drawn = { ...space, scene: { ...request, color: pictureColor({ media, revision: name, source: name }) } };
      await showSettled(drawn, media);
      check.orientation[name] = { top: sample(probe2d, SIZE / 2, SIZE / 8), bottom: sample(probe2d, SIZE / 2, (SIZE * 7) / 8) };
    }
    // The same mid-tone color drawn from the playing VIDEO and from the still the follower copies off it: the two
    // uploads differ (three keeps a VideoTexture in RGBA8 and an sRGB still in SRGB8_ALPHA8), and must draw alike.
    const tone = await makeVideo({ width: 64, height: 64, seconds: 1, paint: (g, frame, w, h) => {
      g.fillStyle = `rgb(180 ${90 + (frame % 2)} 40)`;
      g.fillRect(0, 0, w, h);
    } });
    await tone.play();
    await new Promise((resolve) => tone.requestVideoFrameCallback(resolve));
    const toneStill = document.createElement("canvas");
    toneStill.width = 64;
    toneStill.height = 64;
    toneStill.getContext("2d").drawImage(tone, 0, 0);
    check.tone = {};
    for (const [name, media] of [["video", tone], ["still", toneStill]]) {
      const drawn = { ...space, scene: { ...request, color: pictureColor({ media, revision: name, source: name }) } };
      await showSettled(drawn, media);
      check.tone[name] = sample(probe2d, SIZE / 4, SIZE / 4);
    }
    // A sharp edge between white and black, magnified (16 x 16 picture over the grid): a playing VIDEO must blend it
    // in linear space, as its still and the node do, not in sRGB.
    const edge = await makeVideo({ width: 16, height: 16, seconds: 1, paint: (g, frame, w, h) => {
      g.fillStyle = `rgb(255 ${255 - (frame % 2)} 255)`;
      g.fillRect(0, 0, w / 2, h);
      g.fillStyle = `rgb(0 ${frame % 2} 0)`;
      g.fillRect(w / 2, 0, w / 2, h);
    } });
    await edge.play();
    await new Promise((resolve) => edge.requestVideoFrameCallback(resolve));
    const edgeStill = document.createElement("canvas");
    edgeStill.width = 16;
    edgeStill.height = 16;
    edgeStill.getContext("2d").drawImage(edge, 0, 0);
    check.edge = {};
    for (const [name, media] of [["video", edge], ["still", edgeStill]]) {
      const drawn = { ...space, scene: { ...request, color: pictureColor({ media, revision: name, source: name }) } };
      await showSettled(drawn, media);
      // The red of a row across the edge, away from the hole in the middle.
      check.edge[name] = Array.from(probe2d.getImageData(SIZE / 2 - 24, SIZE / 8, 48, 1).data).filter((_, index) => index % 4 === 0);
    }
    // One color texture per input, however many pictures it showed; none once no depth grid draws.
    check.colorTextures = view.stats().depthColorTextures;
    view.render({ rect: { x: 0, y: 0, w: SIZE, h: SIZE }, camera, background: null, layers: [], space: { ...space, scene: null, sceneUrls: [] } });
    check.colorTexturesAfter = view.stats().depthColorTextures;
    check.done = true;
  }
  ask();
} catch (error) {
  check.error = String(error?.stack || error);
  check.done = true;
}
