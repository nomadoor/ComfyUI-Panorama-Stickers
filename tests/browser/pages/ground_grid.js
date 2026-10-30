// The new UI's ground grid as pano_three_view.js draws it (docs/space-and-view.md "地面のグリッド",
// docs/threejs-spark-integration.md "新しい UI のステージの描画"):
// - the same on the canvas, through a lens Camera's faces (κ 0.99 and 0.5) and in the live ERP: its lines blend over
//   a flat Sky as they do on the canvas (the 3D tab's look), whichever path draws them;
// - the faces hold the canvas's values: a mesh (three.js's own material), the clear color and a SPLAT come out
//   through a lens as on the canvas (pano_live_erp.js canvasValueTarget leans on three.js's WebXR mark, which a
//   three.js update could drop);
// - under the World's objects: a dense, opaque SPLAT ball standing on the ground hides the grid behind it from every
//   place of the view (Spark writes no depth, so the grid is drawn before the splats).
// The page reports through window.__check; tests/browser/ground_grid.spec.js reads it.
import { BoxGeometry, Mesh, MeshBasicMaterial, Scene } from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { createThreeView } from "../../../web_src/pano_three_view.js";
import { lensRadius, lensRenderPlan } from "../../../web_src/pano_lens.js";
import { groundGrid } from "../../../web_src/studio/grid.js";
import { makeSplatPly } from "./media.js";
import { drawUntilSettled, sparkIdle } from "./settle.js";

const check = (window.__check = { done: false, error: null, renderer: null, contextLost: false, lens: [], liveErp: [], faces: [], splat: [], shots: {} });
const W = 320;
const H = 240;
const GROUND = -1.6;
// Wide lines (render px), so each line has a flat top whose value is the line's blend over the Sky.
const LINE_PX = 8;

// A flat ERP of one gray level.
function flatErp(level) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 32;
  const g = canvas.getContext("2d");
  g.fillStyle = `rgb(${level}, ${level}, ${level})`;
  g.fillRect(0, 0, 64, 32);
  return { media: canvas, revision: `flat-${level}`, coverage: 360, source: "erp" };
}

const space = (extra = {}, grid = true) => ({
  grid: null,
  ground: grid ? { ...groundGrid({ ground: GROUND }), linePx: LINE_PX } : null,
  sceneUrls: [], scene: null, stickerUrls: [], sticker: null, fileStickers: [], fileStickerKeys: [], stickers: [], lines: [],
  upstreamItems: [], upstreamStickers: [],
  ...extra,
});

// The flat top of the 1-unit lines below `fromRow`: the commonest gray level (R = G = B within 2) brighter than the
// Sky (`sky`, a level) by more than 6. The 10-unit lines are fainter and fewer, the axes are colored (a few of their
// edge pixels come out nearly gray, so the brightest gray is not the line's top).
function lineTop(data, width, height, fromRow, sky) {
  const counts = new Map();
  for (let y = fromRow; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = (y * width + x) * 4;
      const r = data[i], g = data[i + 1], b = data[i + 2];
      if (Math.max(r, g, b) - Math.min(r, g, b) > 2 || r <= sky + 6) continue;
      counts.set(r, (counts.get(r) ?? 0) + 1);
    }
  }
  let top = -1;
  for (const [level, count] of counts) if (top < 0 || count > counts.get(top)) top = level;
  return top;
}

// A turn of `pitch` degrees about X (negative looks down), then `yaw` about Y.
function turn(yawDeg, pitchDeg) {
  const y = yawDeg * Math.PI / 360;
  const p = pitchDeg * Math.PI / 360;
  return { x: Math.cos(y) * Math.sin(p), y: Math.sin(y) * Math.cos(p), z: -Math.sin(y) * Math.sin(p), w: Math.cos(y) * Math.cos(p) };
}

try {
  const view = createThreeView({ createCanvas: () => document.body.appendChild(document.createElement("canvas")) });
  view.resize(W, H);
  view.canvas.addEventListener("webglcontextlost", () => (check.contextLost = true));
  const gl = view.canvas.getContext("webgl2");
  const info = gl.getExtension("WEBGL_debug_renderer_info");
  check.renderer = info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
  const probe = document.createElement("canvas");
  probe.width = W;
  probe.height = H;
  const probe2d = probe.getContext("2d", { willReadFrequently: true });
  const read = (x = 0, y = 0, w = W, h = H) => {
    probe2d.clearRect(0, 0, W, H);
    probe2d.drawImage(view.canvas, 0, 0);
    return probe2d.getImageData(x, y, w, h).data;
  };

  // 1. The grid through each path over flat Skies of three gray levels.
  const camera = { quaternion: turn(0, -30), fovY_deg: 50, aspect: W / H, position: [0.5, 0, 0.5], near: 0.01, far: 200 };
  const hfov = 2 * Math.atan(Math.tan(camera.fovY_deg / 2 * Math.PI / 180) * W / H) * 180 / Math.PI;
  for (const level of [10, 128, 210]) {
    const background = flatErp(level);
    const row = { level };
    for (const curve of [1, 0.99, 0.5]) {
      const focal = (W / 2) / lensRadius((hfov / 2) * Math.PI / 180, curve);
      const lens = curve === 1 ? null : { curve, focal, centerX: W / 2, centerY: H / 2, background: 0, faces: lensRenderPlan({ width: W, height: H, focal, curve, quaternion: camera.quaternion }).faces };
      view.clear();
      view.render({ rect: { x: 0, y: 0, w: W, h: H }, camera, background, layers: [], space: space(), owner: `lens-${curve}`, ...(lens ? { lens } : {}) });
      const data = read();
      // The Sky as the canvas shows it (a row above the horizon), and the 1-unit line's top blended over it in sRGB
      // values, as on the canvas.
      if (curve === 1) {
        row.sky = data[(2 * W + W / 2) * 4];
        row.expected = Math.round(255 * (0.22 + 0.78 * row.sky / 255));
      }
      row[`k${curve}`] = lineTop(data, W, H, Math.round(H * 0.55), row.sky);
      // Pictures to look at (tests/browser/ground_grid.spec.js saves them when asked).
      if (level === 10) check.shots[`lens-${curve}`] = probe.toDataURL("image/png");
    }
    check.lens.push(row);
  }

  // 2. The live ERP (Panorama mode) at the same place, its lower half.
  for (const level of [10, 128, 210]) {
    const target = document.createElement("canvas");
    view.renderLiveErp({
      owner: `live-${level}`, canvas: target, width: 1024, height: 512, near: 0.01, far: 200,
      view: { position: [0.5, 0, 0.5], turn: [[1, 0, 0], [0, 1, 0], [0, 0, 1]], coverage: 360 },
      background: flatErp(level), layers: [], space: space(),
    });
    const data = target.getContext("2d").getImageData(0, 0, target.width, target.height).data;
    const sky = data[(2 * target.width + target.width / 2) * 4];
    check.liveErp.push({ level, sky, expected: Math.round(255 * (0.22 + 0.78 * sky / 255)), top: lineTop(data, target.width, target.height, Math.round(target.height * 0.6), sky) });
  }

  // 3. Through the pinhole (κ 0.9) and the cube (κ 0 at 200°): a mesh's color, the clear color, a SPLAT's color, at
  // the middle, against the same draw without a lens.
  const box = new Scene();
  box.add(new Mesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial({ color: 0x8a5a2a })));
  const glbUrl = URL.createObjectURL(new Blob([await new GLTFExporter().parseAsync(box, { binary: true })]));
  const ballUrl = URL.createObjectURL(new Blob([makeSplatPly({ count: 40000, radius: 0.8, color: [-0.9, -0.9, -0.9], opacity: 8, logScale: -3 })]));
  const ahead = { position: [0, 0, -3], quaternion: { x: 0, y: 0, z: 0, w: 1 }, scale: 1 };
  const contents = {
    mesh: { sceneUrls: [glbUrl], scene: { kind: "mesh", url: glbUrl, urls: [glbUrl], prefetch: [], unlit: true, sources: {}, transform: ahead, itemQuaternion: { x: 0, y: 0, z: 0, w: 1 } } },
    clear: {},
    splat: { sceneUrls: [ballUrl], scene: { kind: "splat", url: ballUrl, urls: [ballUrl], prefetch: [], unlit: true, transform: ahead, itemQuaternion: { x: 1, y: 0, z: 0, w: 0 } } },
  };
  const front = { quaternion: { x: 0, y: 0, z: 0, w: 1 }, fovY_deg: 40, aspect: W / H, position: [0, 0, 0], near: 0.01, far: 200 };
  const frontHfov = 2 * Math.atan(Math.tan(20 * Math.PI / 180) * W / H) * 180 / Math.PI;
  for (const [name, extra] of Object.entries(contents)) {
    const row = { name };
    for (const [curve, lensHfov] of [[1, frontHfov], [0.9, frontHfov], [0, 200]]) {
      const focal = (W / 2) / lensRadius((lensHfov / 2) * Math.PI / 180, curve);
      const plan = curve === 1 ? null : lensRenderPlan({ width: W, height: H, focal, curve, quaternion: front.quaternion });
      const lens = plan && { curve, focal, centerX: W / 2, centerY: H / 2, background: 0, faces: plan.faces };
      let middle = null;
      await drawUntilSettled(() => {
        view.clear();
        view.render({ rect: { x: 0, y: 0, w: W, h: H }, camera: front, background: null, clearColor: 0x336699, layers: [], space: space(extra, false), owner: `faces-${name}-${curve}`, ...(lens ? { lens } : {}) });
        middle = Array.from(read(W / 2 - 1, H / 2 - 1, 2, 2).slice(0, 3));
        return middle;
      }, { ready: () => name === "clear" || (view.stats().sceneItems.loaded > 0 && sparkIdle() && middle[0] !== 0x33) });
      row[`k${curve}`] = middle;
      if (plan) row[`kind${curve}`] = plan.kind;
    }
    check.faces.push(row);
  }

  // 4. A dense, opaque SPLAT ball standing on the ground, seen from places on either side of the World's origin (where
  // the Spark renderer stands): the patch at its middle with the grid and without it.
  const url = ballUrl;
  const ball = [0, GROUND + 0.8, -3];
  const splat = {
    kind: "splat", url, urls: [url], prefetch: [], unlit: true,
    transform: { position: ball, quaternion: { x: 0, y: 0, z: 0, w: 1 }, scale: 1 },
    itemQuaternion: { x: 1, y: 0, z: 0, w: 0 },
  };
  const dark = flatErp(32);
  for (const from of [[0, 0, -0.5], [0, 0, 1], [0, 0, 4], [3, 0.5, 2], [-2, 1.5, 6]]) {
    const d = ball.map((value, axis) => value - from[axis]);
    const yaw = Math.atan2(-d[0], -d[2]) * 180 / Math.PI;
    const pitch = Math.atan2(d[1], Math.hypot(d[0], d[2])) * 180 / Math.PI;
    const shot = { quaternion: turn(yaw, pitch), fovY_deg: 40, aspect: W / H, position: from, near: 0.01, far: 200 };
    // Drawn until the ball shows at the middle (its first sort can come after the item has loaded) and holds still.
    let middle = null;
    const patch = async (grid) => (await drawUntilSettled(() => {
      view.clear();
      view.render({ rect: { x: 0, y: 0, w: W, h: H }, camera: shot, background: dark, layers: [], space: space({ sceneUrls: [url], scene: splat }, grid), owner: "splat" });
      middle = read(W / 2 - 6, H / 2 - 6, 12, 12);
      return middle;
    }, { ready: () => view.stats().sceneItems.loaded > 0 && sparkIdle() && Math.abs(middle[0] - 32) > 8 })).shown;
    const without = await patch(false);
    const withGrid = await patch(true);
    let most = 0;
    for (let i = 0; i < without.length; i += 4) for (let c = 0; c < 3; c += 1) most = Math.max(most, Math.abs(without[i + c] - withGrid[i + c]));
    check.splat.push({ from, center: Array.from(without.slice(0, 3)), most });
    read();
    check.shots[`splat-${from.join("_")}`] = probe.toDataURL("image/png");
  }
  check.done = true;
} catch (error) {
  check.error = String(error?.stack || error);
  check.done = true;
}
