// A 3D file Sticker in the editor's three.js view (docs/threejs-spark-integration.md "3D ファイルの `file` の Source の
// `world` の Sticker"): a box with a checkered texture and normals, made into a GLB here with three.js's
// GLTFExporter, drawn as the space view draws a 3D file Sticker (pano_space.js fileStickerRequests, the 3D Sticker
// queue, loadSceneItem, the default lights). `?unlit=1` draws it as an item marked unlit. The same box as an item of
// an upstream Scene (ADR 0030) is picked as the node's own. The page reports through window.__check;
// tests/browser/file_3d.spec.js reads it. Nothing here depends on which renderer runs.
import { BoxGeometry, CanvasTexture, Mesh, MeshStandardMaterial, SRGBColorSpace, Scene } from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { createThreeView } from "../../../web_src/pano_three_view.js";
import { evaluateSceneState } from "../../../web_src/pano_scene_eval.js";
import { loadSceneState } from "../../../web_src/pano_scene_state.js";
import { fileStickerRequests } from "../../../web_src/pano_space.js";

const check = (window.__check = {
  done: false, contextLost: false, error: null, renderer: null, stats: null, nonEmpty: false, top: null, bottom: null,
  upstreamPick: null,
});

const SIZE = 512;
const LOAD_MS = 20000;
const unlit = new URLSearchParams(location.search).get("unlit") === "1";

function checkerTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  for (let y = 0; y < 8; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      ctx.fillStyle = (x + y) % 2 ? "#d8d8d8" : "#787878";
      ctx.fillRect(x * 8, y * 8, 8, 8);
    }
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

async function boxGlb() {
  const scene = new Scene();
  scene.add(new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ map: checkerTexture(), metalness: 0, roughness: 1 })));
  return new GLTFExporter().parseAsync(scene, { binary: true });
}

// The mean luma of the middle of the frame, which the face under the camera fills.
function middleLuma(probe2d) {
  const from = Math.round(SIZE * 0.4);
  const side = Math.round(SIZE * 0.2);
  const pixels = probe2d.getImageData(from, from, side, side).data;
  let sum = 0;
  for (let i = 0; i < pixels.length; i += 4) sum += 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
  return sum / (pixels.length / 4);
}

try {
  const url = URL.createObjectURL(new Blob([await boxGlb()], { type: "model/gltf-binary" }));
  let raf = 0;
  const request = () => (raf ||= requestAnimationFrame(frame));
  const view = createThreeView({
    createCanvas: () => document.body.appendChild(document.createElement("canvas")),
    onUpdate: request,
    onSplats: request,
  });
  view.resize(SIZE, SIZE);
  view.canvas.addEventListener("webglcontextlost", () => (check.contextLost = true));
  const gl = view.canvas.getContext("webgl2");
  const info = gl.getExtension("WEBGL_debug_renderer_info");
  check.renderer = info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);

  // The Sticker of a 3D file, 3 ahead of the origin, unturned, at scale 1.
  const state = loadSceneState({
    version: 2,
    stickers: [{ id: "sticker_1", placement: "world", source: { kind: "file", filename: "box.glb", subfolder: "3d" }, position: { value: [0, 0, -3], keyframes: [] } }],
  });
  const entries = fileStickerRequests(state, evaluateSceneState(state, 0), () => ({ kind: "mesh", unlit, url, generation: 0 }));
  const space = {
    grid: null, sceneUrls: [], scene: null, stickerUrls: [], sticker: null,
    fileStickers: entries.map((entry) => entry.request), fileStickerKeys: entries.map((entry) => entry.key),
    stickers: [], lines: [], upstreamItems: [], upstreamStickers: [], gizmo: null,
  };
  // From 3 above the box looking down at its top, and from 3 below looking up at its bottom.
  const half = Math.SQRT1_2;
  const cameras = {
    top: { position: [0, 3, -3], quaternion: { x: -half, y: 0, z: 0, w: half } },
    bottom: { position: [0, -3, -3], quaternion: { x: half, y: 0, z: 0, w: half } },
  };
  const probe = document.createElement("canvas");
  probe.width = SIZE;
  probe.height = SIZE;
  const probe2d = probe.getContext("2d", { willReadFrequently: true });
  const draw = (side) => {
    view.clear();
    view.render({ rect: { x: 0, y: 0, w: SIZE, h: SIZE }, camera: { ...cameras[side], fovY_deg: 60, aspect: 1, near: 0.01, far: 100 }, background: null, layers: [], space });
    // Read in the same task as the draw, before the drawing buffer is cleared.
    probe2d.clearRect(0, 0, SIZE, SIZE);
    probe2d.drawImage(view.canvas, 0, 0, SIZE, SIZE);
    return middleLuma(probe2d);
  };

  let begin = 0;
  let last = null;
  let stillFrames = 0;
  function frame(now) {
    raf = 0;
    if (check.done) return;
    begin ||= now;
    const luma = draw("top");
    const loaded = view.stats().sceneItems.loaded > 0;
    // Once it loaded, until the picture holds still for 3 frames, so its texture is uploaded.
    stillFrames = loaded && luma === last ? stillFrames + 1 : 0;
    last = loaded ? luma : null;
    if (stillFrames < 3 && now - begin < LOAD_MS) {
      request();
      return;
    }
    check.top = draw("top");
    check.bottom = draw("bottom");
    check.nonEmpty = check.top > 8 && check.bottom > 8;
    check.stats = view.stats();
    void pickUpstream();
  }

  // The box as an upstream layer's item instead of a Sticker of the node: drawn until it loads, then picked from above.
  async function pickUpstream() {
    const request = { ...entries[0].request, id: "upstream:a:sticker_1" };
    const upstream = { ...space, fileStickers: [], fileStickerKeys: [], upstreamItems: [{ slot: "a", urls: request.urls, request, opacity: 1 }] };
    const camera = { ...cameras.top, fovY_deg: 60, aspect: 1, near: 0.01, far: 100 };
    const started = performance.now();
    let hit = null;
    while (!hit && performance.now() - started < LOAD_MS) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      view.clear();
      view.render({ rect: { x: 0, y: 0, w: SIZE, h: SIZE }, camera, background: null, layers: [], space: upstream });
      hit = view.pickSticker(camera, SIZE / 2, SIZE / 2, SIZE, SIZE);
    }
    check.upstreamPick = { sticker: hit, point: view.pickSurface(camera, SIZE / 2, SIZE / 2, SIZE, SIZE) };
    check.done = true;
  }
  request();
} catch (error) {
  check.error = String(error?.stack || error);
  check.done = true;
}
