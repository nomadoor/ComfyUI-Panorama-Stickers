// The Stickers of a lens (docs/threejs-spark-integration.md "Camera から見た空間の表示", ADR 0042) as the editor builds
// and draws them: a sky Sticker of κ 0 over 200° (its image past 90° off its axis, in the panorama and the Unwrap
// views), and a world Sticker's sphere patch of κ 0 over 220°, seen and picked from its lens's center; and a 180
// background under a paint layer that covers the whole sphere. The page reports through window.__check;
// tests/browser/lens_stickers.spec.js reads it.
import { createThreeView } from "../../../web_src/pano_three_view.js";
import { skyLayers, viewportCamera, worldStickerLayers } from "../../../web_src/pano_editor_view.js";
import { loadSceneState } from "../../../web_src/pano_scene_state.js";

const check = (window.__check = { done: false, error: null, sky: null, unwrap: null, patch: null, upstreamPatch: null, coverage: null });
const W = 64;
const H = 48;

// A left-red, right-green image.
function halves() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 32;
  const g = canvas.getContext("2d");
  g.fillStyle = "#ff0000";
  g.fillRect(0, 0, 32, 32);
  g.fillStyle = "#00ff00";
  g.fillRect(32, 0, 32, 32);
  return canvas;
}

function erp(paint) {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 64;
  paint(canvas.getContext("2d"));
  return canvas;
}

try {
  const view = createThreeView({ createCanvas: () => document.body.appendChild(document.createElement("canvas")) });
  view.resize(W, H);
  const probe = document.createElement("canvas");
  probe.width = W;
  probe.height = H;
  const probe2d = probe.getContext("2d", { willReadFrequently: true });
  const center = () => {
    probe2d.clearRect(0, 0, W, H);
    probe2d.drawImage(view.canvas, 0, 0);
    return [...probe2d.getImageData(W / 2, H / 2, 1, 1).data];
  };
  const image = halves();
  const media = () => ({ media: image, revision: "halves" });
  const looking = (yaw, position = null) => ({ ...viewportCamera({ yaw_deg: yaw, pitch_deg: 0, roll_deg: 0, hFOV_deg: 20 }, W, H), ...(position ? { position, near: 0.01, far: 100 } : {}) });

  // The sky Sticker, straight ahead, 200° across.
  const sky = loadSceneState({ version: 2, stickers: [{ id: "sky", placement: "sky", source: { kind: "file", filename: "a.png" }, curve: { value: 0 }, size: { value: { hFOV_deg: 200, vFOV_deg: 100 } } }] });
  const layers = skyLayers(sky, 0, { media, zIndex: () => 0, paintLayers: [] });
  const panorama = (yaw) => {
    view.clear();
    view.render({ rect: { x: 0, y: 0, w: W, h: H }, camera: looking(yaw), background: null, layers });
    return center();
  };
  check.sky = { right95: panorama(95), left95: panorama(-95), right105: panorama(105) };
  // In the Unwrap view, longitude across: 95° right is 0.5 + 95/360 of the width, on the equator.
  view.clear();
  view.renderUnwrap({ rect: { x: 0, y: 0, w: W, h: H }, background: null, layers });
  probe2d.clearRect(0, 0, W, H);
  probe2d.drawImage(view.canvas, 0, 0);
  const at = (lon) => [...probe2d.getImageData(Math.floor((0.5 + lon / 360) * W), H / 2, 1, 1).data];
  check.unwrap = { right95: at(95), left95: at(-95), right105: at(105) };

  // The world Sticker: 2 ahead, 2 wide, its lens κ 0 over 220°.
  const world = loadSceneState({ version: 2, stickers: [{ id: "patch", placement: "world", source: { kind: "file", filename: "a.png" }, position: { value: [0, 0, -2] }, scale: { value: 2 }, lens: { value: { curve: 0, hFOV_deg: 220 } } }] });
  const planes = worldStickerLayers(world, 0, world.stickers, { media });
  const lensCenter = planes[0].patch.center;
  const space = { grid: null, sceneUrls: [], scene: null, stickerUrls: [], sticker: null, stickers: planes, lines: [], upstreamItems: [], upstreamStickers: [], gizmo: null };
  const patch = (yaw) => {
    const camera = looking(yaw, lensCenter);
    view.clear();
    view.render({ rect: { x: 0, y: 0, w: W, h: H }, camera, background: null, layers: [], space });
    const color = center();
    const point = view.pick(camera, W / 2, H / 2, W, H);
    return { color, sticker: view.pickSticker(camera, W / 2, H / 2, W, H), distance: point && Math.hypot(...point.map((value, axis) => value - lensCenter[axis])) };
  };
  check.patch = { radius: planes[0].patch.radius, ahead: patch(0), right100: patch(100), left100: patch(-100), right125: patch(125) };
  // The same patch as an upstream Scene's Sticker (ADR 0030) is drawn and picked as the node's own.
  {
    const camera = looking(0, lensCenter);
    view.clear();
    view.render({ rect: { x: 0, y: 0, w: W, h: H }, camera, background: null, layers: [], space: { ...space, stickers: [], upstreamStickers: [{ ...planes[0], id: "upstream:a:patch" }] } });
    check.upstreamPatch = view.pickSticker(camera, W / 2, H / 2, W, H);
  }

  // A 180 background ahead and a paint layer only behind: the background keeps to its half, the paint covers all.
  const background = { media: erp((g) => { g.fillStyle = "#0000ff"; g.fillRect(0, 0, 128, 64); }), revision: "blue", coverage: 180, source: "blue" };
  const paint = { kind: "erp", id: "paint", media: erp((g) => { g.fillStyle = "#ffff00"; g.fillRect(0, 0, 16, 64); g.fillRect(112, 0, 16, 64); }), revision: "yellow", opacity: 1 };
  const sphere = (yaw) => {
    view.clear();
    view.render({ rect: { x: 0, y: 0, w: W, h: H }, camera: looking(yaw), background, layers: [paint] });
    return center();
  };
  check.coverage = { ahead: sphere(0), behind: sphere(180) };
  check.done = true;
} catch (error) {
  check.error = String(error?.stack || error);
  check.done = true;
}
