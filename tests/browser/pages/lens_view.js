// A lens Camera's image as the editor draws it (docs/threejs-spark-integration.md "Camera から見た空間の表示", ADR
// 0042): an ERP of smooth bands and large squares drawn through pano_three_view.js's lens pass, held to a direct
// pinhole draw of the same ERP along pano_lens.js's rays. Through the pinhole with overscan (κ 0.9, 0.7) and the cube
// (κ 0 at 300°), where the pixels past 180° are bg_color; a SPLAT drawn through the cube sorts per face, and the
// view's hide (releaseSplats) lets every face's Spark renderer go. The page reports through window.__check;
// tests/browser/lens_view.spec.js reads it.
import { createThreeView } from "../../../web_src/pano_three_view.js";
import { lensFilmDirection, lensRadius, lensRenderPlan } from "../../../web_src/pano_lens.js";
import { makeSplatPly } from "./media.js";

const check = (window.__check = { done: false, error: null, renderer: null, contextLost: false, cases: [], splat: null, cache: null });
const W = 320;
const H = 240;
const BG = 0x3366cc;

// The ERP: hue across, brightness down, and a 6 x 3 checker of light and dark over it.
function erp() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const g = canvas.getContext("2d");
  for (let x = 0; x < 512; x += 1) {
    g.fillStyle = `hsl(${(x / 512) * 360} 70% 50%)`;
    g.fillRect(x, 0, 1, 256);
  }
  for (let i = 0; i < 6; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      g.fillStyle = (i + j) % 2 ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)";
      g.fillRect(i * 512 / 6, j * 256 / 3, 512 / 6, 256 / 3);
    }
  }
  return canvas;
}

try {
  const view = createThreeView({ createCanvas: () => document.body.appendChild(document.createElement("canvas")) });
  view.resize(W, H);
  view.canvas.addEventListener("webglcontextlost", () => (check.contextLost = true));
  const gl = view.canvas.getContext("webgl2");
  const info = gl.getExtension("WEBGL_debug_renderer_info");
  check.renderer = info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
  const background = { media: erp(), revision: "erp", coverage: 360, source: "erp" };
  const probe = document.createElement("canvas");
  probe.width = W;
  probe.height = H;
  const probe2d = probe.getContext("2d", { willReadFrequently: true });
  // Looking a little up and to the side, so the image crosses the ERP's features.
  const quaternion = { x: 0.1, y: 0.3, z: 0, w: Math.sqrt(1 - 0.1 * 0.1 - 0.3 * 0.3) };
  const pixels = (lens, fovY) => {
    view.clear();
    view.render({ rect: { x: 0, y: 0, w: W, h: H }, camera: { quaternion, fovY_deg: fovY, aspect: W / H }, background, layers: [], ...(lens ? { lens } : {}) });
    probe2d.clearRect(0, 0, W, H);
    probe2d.drawImage(view.canvas, 0, 0);
    return probe2d.getImageData(0, 0, W, H).data;
  };
  // The reference: a pinhole of 150° vertically, which holds every ray within about 75° of the axis.
  const fovY = 150;
  const reference = pixels(null, fovY);
  const tanY = Math.tan((fovY / 2) * Math.PI / 180);
  const tanX = tanY * W / H;
  for (const [curve, hfov] of [[0.9, 100], [0.7, 90], [0, 300]]) {
    const focal = (W / 2) / lensRadius((hfov / 2) * Math.PI / 180, curve);
    const plan = lensRenderPlan({ width: W, height: H, focal, curve, quaternion });
    const drawn = pixels({ curve, focal, centerX: W / 2, centerY: H / 2, background: BG, faces: plan.faces }, fovY);
    let sum = 0;
    let count = 0;
    let past = 0;
    let pastBg = 0;
    for (let y = 1; y < H - 1; y += 1) {
      for (let x = 1; x < W - 1; x += 1) {
        const i = (y * W + x) * 4;
        const ray = lensFilmDirection((x + 0.5 - W / 2) / focal, (H / 2 - y - 0.5) / focal, curve);
        if (!ray) {
          past += 1;
          if (Math.abs(drawn[i] - 0x33) <= 1 && Math.abs(drawn[i + 1] - 0x66) <= 1 && Math.abs(drawn[i + 2] - 0xcc) <= 1) pastBg += 1;
          continue;
        }
        if (!(ray[2] < -0.3)) continue;
        const u = ray[0] / -ray[2] / tanX;
        const v = ray[1] / -ray[2] / tanY;
        if (Math.abs(u) > 0.98 || Math.abs(v) > 0.98) continue;
        const rx = Math.min(W - 1, Math.max(0, Math.round((u + 1) / 2 * W - 0.5)));
        const ry = Math.min(H - 1, Math.max(0, Math.round((1 - v) / 2 * H - 0.5)));
        const j = (ry * W + rx) * 4;
        sum += Math.abs(drawn[i] - reference[j]) + Math.abs(drawn[i + 1] - reference[j + 1]) + Math.abs(drawn[i + 2] - reference[j + 2]);
        count += 3;
      }
    }
    check.cases.push({ curve, hfov, kind: plan.kind, compared: count / 3, mean: sum / Math.max(1, count), past, pastBg });
  }
  // The cube's faces stand aligned to the World: a turn of the Camera alone draws only the pass, and the picture is
  // the one a fresh draw makes.
  {
    // The draw calls a render makes: the pass is one, each face its Sky.
    let viewports = 0;
    const proto = WebGL2RenderingContext.prototype;
    const drawElements = proto.drawElements;
    proto.drawElements = function (...args) { viewports += 1; return drawElements.apply(this, args); };
    // Two owners with lenses of their own, drawn in turn: each keeps its own faces.
    const turned = { x: 0.05, y: 0.4, z: 0, w: Math.sqrt(1 - 0.0025 - 0.16) };
    const draw = (owner, curve, hfov, q) => {
      const focal = (W / 2) / lensRadius((hfov / 2) * Math.PI / 180, curve);
      const lens = { curve, focal, centerX: W / 2, centerY: H / 2, background: BG, faces: lensRenderPlan({ width: W, height: H, focal, curve, quaternion: q }).faces };
      view.clear();
      view.render({ rect: { x: 0, y: 0, w: W, h: H }, camera: { quaternion: q, fovY_deg: 60, aspect: W / H }, background, layers: [], lens, owner });
      probe2d.clearRect(0, 0, W, H);
      probe2d.drawImage(view.canvas, 0, 0);
      return probe2d.getImageData(0, 0, W, H).data;
    };
    const differing = (a, b) => a.reduce((total, value, index) => total + (value !== b[index] ? 1 : 0), 0);
    const owners = [["a", 0, 220], ["b", 0.5, 140]];
    for (const [owner, curve, hfov] of owners) draw(owner, curve, hfov, quaternion);
    check.cache = {};
    for (const [owner, curve, hfov] of owners) {
      viewports = 0;
      const reused = draw(owner, curve, hfov, turned);
      const reusedDraws = viewports;
      view.release(owner);
      viewports = 0;
      const fresh = draw(owner, curve, hfov, turned);
      check.cache[owner] = { reusedDraws, freshDraws: viewports, different: differing(reused, fresh) };
    }
    proto.drawElements = drawElements;
  }

  // A SPLAT ahead, through the fisheye's cube, for the owner "preview"; then its hide.
  const url = URL.createObjectURL(new Blob([makeSplatPly({ radius: 1 })]));
  const splat = {
    kind: "splat", url, urls: [url], prefetch: [], unlit: true,
    transform: { position: [0, 0, -3], quaternion: { x: 0, y: 0, z: 0, w: 1 }, scale: 1 },
    itemQuaternion: { x: 1, y: 0, z: 0, w: 0 },
  };
  const space = { grid: null, sceneUrls: [url], scene: splat, stickerUrls: [], sticker: null, stickers: [], lines: [], upstreamItems: [], upstreamStickers: [], gizmo: null };
  const focal = (W / 2) / lensRadius(Math.PI * 300 / 360, 0);
  const lens = { curve: 0, focal, centerX: W / 2, centerY: H / 2, background: BG, faces: lensRenderPlan({ width: W, height: H, focal, curve: 0 }).faces };
  const camera = { quaternion: { x: 0, y: 0, z: 0, w: 1 }, fovY_deg: 60, aspect: W / H, position: [0, 0, 0], near: 0.01, far: 100 };
  let drawnSplat = 0;
  for (let frame = 0; frame < 300 && drawnSplat < 20; frame += 1) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    view.clear();
    view.render({ rect: { x: 0, y: 0, w: W, h: H }, camera, background: null, layers: [], space, lens, owner: "preview" });
    if (view.stats().sceneItems.loaded > 0) drawnSplat += 1;
  }
  probe2d.clearRect(0, 0, W, H);
  probe2d.drawImage(view.canvas, 0, 0);
  const center = probe2d.getImageData(W / 2 - 2, H / 2 - 2, 4, 4).data;
  const renderers = view.stats().sparks.length;
  view.releaseSplats("preview");
  check.splat = { loaded: drawnSplat > 0, centerAlpha: center[3], renderers, afterHide: view.stats().sparks.length };

  // A Lens curve leaving 1 (or coming back to the lens) shows the splats in its first frame: the frame drawn as the
  // edit lands is the one drawn once the Spark renderers have sorted again. Mean difference per channel, in levels.
  const shotOf = (owner, curve, hfov) => {
    const lensFocal = (W / 2) / lensRadius((hfov / 2) * Math.PI / 180, curve);
    const plan = curve === 1 ? null : lensRenderPlan({ width: W, height: H, focal: lensFocal, curve, quaternion: camera.quaternion });
    view.clear();
    view.render({ rect: { x: 0, y: 0, w: W, h: H }, camera: { ...camera, fovY_deg: 2 * Math.atan(Math.tan(hfov / 2 * Math.PI / 180) * H / W) * 180 / Math.PI }, background: null, layers: [], space, owner, ...(plan ? { lens: { curve, focal: lensFocal, centerX: W / 2, centerY: H / 2, background: BG, faces: plan.faces } } : {}) });
    probe2d.clearRect(0, 0, W, H);
    probe2d.drawImage(view.canvas, 0, 0);
    return { kind: plan?.kind ?? null, pixels: probe2d.getImageData(0, 0, W, H).data };
  };
  const settle = async (owner, curve, hfov) => {
    let last = null;
    for (let frame = 0; frame < 30; frame += 1) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      last = shotOf(owner, curve, hfov);
    }
    return last;
  };
  const meanDifference = (a, b) => {
    let sum = 0;
    for (let i = 0; i < a.length; i += 4) sum += Math.abs(a[i] - b[i]) + Math.abs(a[i + 1] - b[i + 1]) + Math.abs(a[i + 2] - b[i + 2]);
    return sum / (a.length / 4 * 3);
  };
  check.entry = [];
  // κ 0.9 at 90° draws through the pinhole, at 170° through the cube; the cube's view drew through its cube once.
  for (const [owner, hfov, warm] of [["pinhole-entry", 90, false], ["cube-entry", 170, true]]) {
    if (warm) await settle(owner, 0.9, hfov);
    await settle(owner, 1, hfov);
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const first = shotOf(owner, 0.9, hfov);
    const settled = await settle(owner, 0.9, hfov);
    check.entry.push({ owner, kind: first.kind, difference: meanDifference(first.pixels, settled.pixels) });
    view.releaseSplats(owner);
  }
  check.done = true;
} catch (error) {
  check.error = String(error?.stack || error);
  check.done = true;
}
