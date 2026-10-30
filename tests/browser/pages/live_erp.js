// The live ERP (web_src/pano_live_erp.js) on the test scene of live_erp_scene.js, for tests/browser/live_erp.spec.js:
// the ERP's orientation against pano_camera_math.js (360 and 180, two poses each), what each change draws again (the
// rotation-only fast path, nothing while nothing changed), and the one radial Spark sort. Results go to window.__check.
import * as THREE from "three";
import * as Spark from "@sparkjsdev/spark";
import { createLiveErp } from "../../../web_src/pano_live_erp.js";
import { liveErpView } from "../../../web_src/studio/erp_preview.js";
import { worldToPano } from "../../../web_src/pano_world.js";
import { MARKERS, buildScene, buildSplats, expectedPixel, panoPoint } from "./live_erp_scene.js";

const check = (window.__check = { done: false, error: null, renderer: null, orientation: [], redraws: {}, images: {} });
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));

// Centroid (circular in x) of the pixels near a pure color.
function centroid(pixels, W, H, rgb) {
  let sx = 0, cx = 0, sy = 0, n = 0;
  for (let y = 0; y < H; y += 1) {
    for (let x = 0; x < W; x += 1) {
      const i = (y * W + x) * 4;
      if (Math.abs(pixels[i] - rgb[0]) < 70 && Math.abs(pixels[i + 1] - rgb[1]) < 70 && Math.abs(pixels[i + 2] - rgb[2]) < 70) {
        const a = ((x + 0.5) / W) * Math.PI * 2;
        sx += Math.sin(a); cx += Math.cos(a); sy += y + 0.5; n += 1;
      }
    }
  }
  if (!n) return null;
  let a = Math.atan2(sx, cx);
  if (a < 0) a += Math.PI * 2;
  return { x: (a / (Math.PI * 2)) * W, y: sy / n, n };
}

async function run() {
  const glCanvas = document.createElement("canvas");
  const renderer = new THREE.WebGLRenderer({ canvas: glCanvas, antialias: false });
  renderer.setPixelRatio(1);
  renderer.setSize(4, 4, false);
  const gl = renderer.getContext();
  const info = gl.getExtension("WEBGL_debug_renderer_info");
  check.renderer = info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
  glCanvas.addEventListener("webglcontextlost", () => (check.contextLost = true));

  const { scene, sky } = buildScene();
  let dirtyCalls = 0;
  const spark = new Spark.SparkRenderer({ renderer, enableLod: false, onDirty: () => { dirtyCalls += 1; } });
  scene.add(spark);
  const mesh = new Spark.SplatMesh({ packedSplats: buildSplats(Spark), raycastable: false });
  scene.add(mesh);
  await mesh.initialized;

  const erp = createLiveErp({ renderer, canvas: document.createElement("canvas"), near: 0.05, far: 200 });
  document.body.appendChild(erp.canvas);
  const ctx = erp.canvas.getContext("2d", { willReadFrequently: true });

  // A full draw with the splats sorted: draw, wait for the sort, draw the faces again.
  const settle = async () => {
    const first = erp.draw({ scene, spark });
    if (first.sorted) {
      await first.sorted;
      erp.invalidate("splats");
      erp.draw({ scene, spark });
    }
    await nextFrame();
  };
  const place = (position) => sky.position.set(...position);

  const W = 512;
  const poses = [
    { position: [0.3, 0.2, -0.4], rotation: { yaw: 30, pitch: 15, roll: 0 } },
    { position: [-0.2, 0.0, 0.3], rotation: { yaw: -120, pitch: -10, roll: 10 } },
  ];
  for (const coverage of [360, 180]) {
    const H = coverage === 360 ? W / 2 : W;
    erp.setSize(W, H);
    for (const pose of poses) {
      const view = liveErpView({ position: pose.position, yaw_deg: pose.rotation.yaw, pitch_deg: pose.rotation.pitch, roll_deg: pose.rotation.roll }, coverage);
      place(view.position);
      erp.setView(view);
      erp.invalidate("content");
      await settle();
      const pixels = ctx.getImageData(0, 0, W, H).data;
      const camPano = worldToPano({ x: pose.position[0], y: pose.position[1], z: pose.position[2] });
      for (const [name, yaw, pitch, distance, rgb] of MARKERS) {
        let dir;
        if (!Number.isFinite(distance)) {
          const p = panoPoint(yaw, pitch, 1);
          dir = worldToPano({ x: p[0], y: p[1], z: p[2] });
        } else {
          const p = worldToPano((([x, y, z]) => ({ x, y, z }))(panoPoint(yaw, pitch, distance)));
          dir = { x: p.x - camPano.x, y: p.y - camPano.y, z: p.z - camPano.z };
        }
        const want = expectedPixel(dir, pose.rotation, W, H, coverage);
        // Outside the range (180), or within a marker's size of its edge: not checked.
        if (Math.abs(want.lon) > coverage / 2 - 8) continue;
        const got = centroid(pixels, W, H, rgb);
        let dx = got ? got.x - want.x : null;
        if (dx !== null && coverage === 360) dx = ((dx + W / 2) % W + W) % W - W / 2;
        check.orientation.push({
          coverage, pose: pose.rotation, name,
          want: { x: +want.x.toFixed(1), y: +want.y.toFixed(1) },
          got: got && { x: +got.x.toFixed(1), y: +got.y.toFixed(1), n: got.n },
          errorPx: got ? +Math.hypot(dx, got.y - want.y).toFixed(2) : null,
        });
      }
      check.images[`${coverage}_yaw${pose.rotation.yaw}`] = erp.canvas.toDataURL("image/png");
    }
  }

  // Redraws: what each change draws again.
  erp.setSize(256, 128);
  const base = liveErpView({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0 });
  place(base.position);
  erp.setView(base);
  erp.invalidate("content");
  await settle();
  const counts = () => ({ ...erp.counts });
  const step = (label, change) => {
    const before = counts();
    change();
    const done = erp.draw({ scene, spark });
    const after = counts();
    check.redraws[label] = {
      faces: after.faces - before.faces,
      passes: after.passes - before.passes,
      sorts: after.sorts - before.sorts,
      drew: { faces: done.faces, pass: done.pass },
    };
    return done;
  };
  step("nothing changed", () => {});
  step("turn only", () => erp.setView(liveErpView({ position: [0, 0, 0], yaw_deg: 40, pitch_deg: 10, roll_deg: 5 })));
  step("same turn again", () => erp.setView(liveErpView({ position: [0, 0, 0], yaw_deg: 40, pitch_deg: 10, roll_deg: 5 })));
  const moved = step("position", () => erp.setView(liveErpView({ position: [0.2, 0, 0], yaw_deg: 40, pitch_deg: 10, roll_deg: 5 })));
  if (moved.sorted) await moved.sorted;
  step("splats sorted", () => erp.invalidate("splats"));
  step("content", () => erp.invalidate("content"));
  step("size", () => erp.setSize(512, 256));
  check.dirtyCalls = dirtyCalls;
  check.faceSize = erp.faceSize;
  check.sparkAutoUpdate = spark.autoUpdate;
  check.sparkTarget = spark.target ?? null;

  // An empty World with the stage's clear color, set as the editor sets it (pano_three_view.js renderLiveErp: on the
  // canvas, before the faces): every face's direction reads the same color, the first face too.
  erp.setSize(256, 128);
  erp.setView(liveErpView({ position: [0, 0, 0] }));
  renderer.setRenderTarget(null);
  renderer.setClearColor(new THREE.Color(0x070707), 1);
  erp.draw({ scene: new THREE.Scene() });
  renderer.setClearColor(0x000000, 0);
  const blank = ctx.getImageData(0, 0, 256, 128).data;
  const blankAt = (lon, lat) => {
    const x = Math.min(255, Math.floor((lon / 360 + 0.5) * 256));
    const y = Math.min(127, Math.floor((0.5 - lat / 180) * 128));
    return Array.from(blank.slice((y * 256 + x) * 4, (y * 256 + x) * 4 + 3));
  };
  check.blank = { "+X": blankAt(90, 0), "-X": blankAt(-90, 0), "+Y": blankAt(0, 80), "-Y": blankAt(0, -80), "+Z": blankAt(179, 0), "-Z": blankAt(0, 0) };

  // Timing of the paths (SwiftShader is not a measure, docs/threejs-spark-integration.md).
  const time = (fn) => { const t = performance.now(); fn(); return +(performance.now() - t).toFixed(2); };
  check.timing = {
    turnOnly: time(() => { erp.setView(liveErpView({ position: [0.2, 0, 0], yaw_deg: 50 })); erp.draw({ scene, spark }); }),
    faces: time(() => { erp.invalidate("splats"); erp.draw({ scene, spark }); }),
  };
}

run().then(
  () => { check.done = true; },
  (error) => { check.error = String(error?.stack ?? error); check.done = true; },
);
