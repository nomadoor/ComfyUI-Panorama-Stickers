// The editor's three.js view with a playing VIDEO background and a 3DGS sticker while the camera turns: the
// scene that crashed Chrome when Spark 2.1 uploaded its sort order with UNPACK_PREMULTIPLY_ALPHA left on
// (ADR 0031). The page reports through window.__check; tests/browser/three_view.spec.js reads it.
import { createThreeView } from "/web_src/pano_three_view.js";
import { makeSplatPly, makeVideo } from "./media.js";

const check = (window.__check = {
  done: false, contextLost: false, error: null, renderer: null, stats: null,
  draws: 0, sorts: 0, turnSorts: 0, nonEmpty: false, videoFrames: 0, videoGap: null, videoPaused: null,
});

const W = 960;
const H = 540;
const LOAD_MS = 20000;
const TURN_MS = 4000;

try {
  const video = await makeVideo();
  const url = URL.createObjectURL(new Blob([makeSplatPly()]));
  let raf = 0;
  const request = () => (raf ||= requestAnimationFrame(frame));
  const view = createThreeView({
    createCanvas: () => document.body.appendChild(document.createElement("canvas")),
    onUpdate: request,
    onSplats: request,
  });
  view.resize(W, H);
  view.canvas.addEventListener("webglcontextlost", () => (check.contextLost = true));
  const gl = view.canvas.getContext("webgl2");
  const info = gl.getExtension("WEBGL_debug_renderer_info");
  check.renderer = info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);

  const sticker = {
    kind: "splat", url, urls: [url], prefetch: [], id: "port", opacity: 1,
    transform: { position: [0, 0, -3], quaternion: { x: 0, y: 0, z: 0, w: 1 }, scale: 1 },
    itemQuaternion: { x: 1, y: 0, z: 0, w: 0 },
  };
  const space = { grid: null, sceneUrls: [], scene: null, stickerUrls: [url], sticker, stickers: [], lines: [], upstreamItems: [], upstreamStickers: [], gizmo: null };
  const background = { media: video, revision: "video", coverage: 360, source: "video" };
  const probe = document.createElement("canvas");
  probe.width = 32;
  probe.height = 18;
  const probe2d = probe.getContext("2d", { willReadFrequently: true });

  let yaw = 0;
  let begin = 0;
  let turnStart = 0;

  // view.stats() hands over the Spark counts since the last call, so every call adds them up here.
  const sample = () => {
    const stats = view.stats();
    const sorts = stats.sparks.reduce((sum, entry) => sum + (entry.sorts || 0), 0);
    check.sorts += sorts;
    if (turnStart) check.turnSorts += sorts;
    return stats;
  };

  // Draw still until the splats load and Spark sorts them once (or LOAD_MS passes), then turn the camera for
  // TURN_MS, so every sort counted while turning is a sort again for a moved camera.
  function frame(now) {
    raf = 0;
    if (check.done) return;
    begin ||= now;
    if (!turnStart && ((sample().sceneItems.loaded > 0 && check.sorts > 0) || now - begin > LOAD_MS)) {
      turnStart = now;
    }
    if (turnStart) yaw += 0.03;
    const camera = { quaternion: { x: 0, y: Math.sin(yaw / 2), z: 0, w: Math.cos(yaw / 2) }, fovY_deg: 60, aspect: W / H, position: [0, 0, 0], near: 0.01, far: 1000 };
    view.clear();
    view.render({ rect: { x: 0, y: 0, w: W, h: H }, camera, background, layers: [], space, owner: undefined });
    check.draws += 1;
    // Sample the frame in the same task as the draw, before the drawing buffer is cleared.
    probe2d.drawImage(view.canvas, 0, 0, probe.width, probe.height);
    const pixels = probe2d.getImageData(0, 0, probe.width, probe.height).data;
    let min = 255;
    let max = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      const luma = pixels[i] + pixels[i + 1] + pixels[i + 2];
      min = Math.min(min, luma);
      max = Math.max(max, luma);
    }
    check.nonEmpty ||= max - min > 30;
    if (!turnStart || now - turnStart < TURN_MS) request();
    else {
      check.stats = sample();
      check.videoPaused = video.paused;
      check.videoGap = Math.round(now - lastVideoFrame);
      check.done = true;
    }
  }
  // Count the VIDEO frames presented while the camera turns, and when the last one came.
  let lastVideoFrame = 0;
  const countFrames = (now) => {
    if (check.done) return;
    if (turnStart) {
      check.videoFrames += 1;
      lastVideoFrame = now;
    }
    video.requestVideoFrameCallback(countFrames);
  };
  video.requestVideoFrameCallback(countFrames);
  await video.play();
  request();
} catch (error) {
  check.error = String(error?.stack || error);
  check.done = true;
}
