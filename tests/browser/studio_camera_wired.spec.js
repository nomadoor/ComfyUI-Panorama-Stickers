import { expect, test } from "@playwright/test";
import { GROUND_DEFAULT } from "../../web_src/studio/defaults.js";
import { frameRect } from "../../web_src/studio/frame_layout.js";
import { WHEEL_FACTOR, eyeHeight, eyeLengths } from "../../web_src/studio/view_scale.js";

// The Camera tab wired into the new editor's stage (web_src/studio/stage.js, stage_view.js cameraFrameView,
// pano_three_view.js renderLiveErp, components/studio/StudioEditor.vue) on tests/browser/pages/studio_camera_wired.html,
// in a real browser engine: docs/studio-ui.md "Camera タブ", docs/space-and-view.md "Frame 表示",
// docs/threejs-spark-integration.md "Panorama モードの ERP の表示". The Camera is turned (yaw 30, pitch 6) and rolled
// (-4); four World image planes of pure colors stand 3 units around it, a magenta sky image at yaw -45, pitch 30.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page, testInfo, query = "aspect=16:9&mode=frame") {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/studio_camera_wired.html?${query}`);
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  await page.waitForTimeout(400);
  const renderer = await page.evaluate(() => window.__studio.rendererOf());
  testInfo.annotations.push({ type: "renderer", description: String(renderer) });
  console.log(`renderer: ${renderer}`);
  await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();
  await expect(page.locator("[data-frame-box]")).toHaveCount(1);
  await page.waitForTimeout(400);
  return problems;
}

const stageBox = (page) => page.locator("[data-stage-canvas]").evaluate((el) => {
  const r = el.getBoundingClientRect();
  return { x: r.left, y: r.top, width: r.width, height: r.height };
});
const frameBox = (page) => page.locator("[data-frame-box]").evaluate((el) => {
  const stage = document.querySelector("[data-stage-canvas]").getBoundingClientRect();
  const r = el.getBoundingClientRect();
  return { x: r.left - stage.left, y: r.top - stage.top, width: r.width, height: r.height };
});
const camera = (page) => page.evaluate(() => window.__studio.camera());
const history = (page) => page.evaluate(() => ({ undo: window.__studio.session.canUndo, redo: window.__studio.session.canRedo }));

// Where the World point `p` lands in the frame box of a pinhole Camera, from the Camera's own basis (pano_camera_math.js
// cameraBasis, the output's convention), independent of the stage's code.
async function expectedInFrame(page, p, frame, cam) {
  return page.evaluate(async ({ p, frame, cam }) => {
    const { cameraBasis } = await import("/web_src/pano_camera_math.js");
    const { worldToPano } = await import("/web_src/pano_world.js");
    const at = worldToPano({ x: p[0] - cam.position[0], y: p[1] - cam.position[1], z: p[2] - cam.position[2] });
    const { right, up, fwd } = cameraBasis(cam.yaw_deg, cam.pitch_deg, cam.roll_deg);
    const dot = (a, b) => a.x * b.x + a.y * b.y + a.z * b.z;
    const focal = frame.width / 2 / Math.tan((cam.hFOV_deg * Math.PI) / 360);
    return { x: frame.x + frame.width / 2 + (dot(at, right) / dot(at, fwd)) * focal, y: frame.y + frame.height / 2 - (dot(at, up) / dot(at, fwd)) * focal };
  }, { p, frame, cam });
}

const RED = [255, 0, 0];
// The red plane's center: 3 units at yaw 0 from the Camera (the page's MARKERS).
const redAt = (cam) => {
  const d = 3;
  return [cam.position[0], cam.position[1], cam.position[2] - d];
};

test("Frame mode: the stage looks through the Camera into the frame of the output's ratio", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const stage = await stageBox(page);
  const frame = await frameBox(page);
  expect(frame).toMatchObject(frameRect(stage.width, stage.height, 16 / 9));
  const cam = await camera(page);
  // The red plane lands where the Camera's own projection puts it (within a few px: the plane is 0.6 wide, its
  // centroid is the visible part's).
  const want = await expectedInFrame(page, redAt(cam), frame, cam);
  const got = await page.evaluate((rgb) => window.__studio.stageCentroid(rgb), RED);
  expect(got).not.toBeNull();
  expect(Math.hypot(got.x - want.x, got.y - want.y)).toBeLessThan(8);
  // No timecode at the top center (the timeline has it), the bar at the bottom center gone, the rail and Reset View
  // disabled.
  await expect(page.locator("[data-timecode]")).toHaveCount(0);
  await expect(page.locator('[data-region="bar"] > *')).toHaveCount(0);
  await expect(page.locator('[data-action="reset-view"]')).toHaveAttribute("aria-disabled", "true");
  for (const tool of ["cursor", "paint", "mask", "add", "camera"]) {
    await expect(page.locator(`[data-tool="${tool}"]`)).toHaveAttribute("aria-disabled", "true");
  }
  await expect(page.locator('[data-ruler="FOV"] [data-ruler-value]')).toHaveText("60°");
  await expect(page.locator('[data-ruler="Roll"] [data-ruler-value]')).toHaveText("-4°");
  expect(await page.evaluate(() => window.__studio.stage().mode())).toBe("frame");
  expect(problems).toEqual([]);
});

test("Frame mode: a FOV ruler drag changes the Camera and the stage as one Undo step; Escape puts it back", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const frame = await frameBox(page);
  const ruler = page.locator('[data-ruler="FOV"] [role="slider"]');
  const r = await ruler.boundingBox();
  const cx = r.x + r.width / 2;
  const cy = r.y + r.height / 2;
  const before = await page.evaluate((rgb) => window.__studio.stageCentroid(rgb), RED);

  // 4 px a degree: 40 px up brings 70 under the mark (the scale moves with the pointer).
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  await page.mouse.move(cx, cy - 40, { steps: 4 });
  await page.mouse.up();
  await page.waitForTimeout(200);
  let cam = await camera(page);
  expect(cam.hFOV_deg).toBeCloseTo(70, 5);
  await expect(page.locator('[data-ruler="FOV"] [data-ruler-value]')).toHaveText("70°");
  expect(await history(page)).toEqual({ undo: true, redo: false });
  // The picture is wider: the red plane moved toward the frame's middle, where the projection puts it.
  const after = await page.evaluate((rgb) => window.__studio.stageCentroid(rgb), RED);
  const middle = frame.x + frame.width / 2;
  expect(Math.abs(after.x - middle)).toBeLessThan(Math.abs(before.x - middle) - 10);
  const want = await expectedInFrame(page, redAt(cam), frame, cam);
  expect(Math.hypot(after.x - want.x, after.y - want.y)).toBeLessThan(8);

  // One Undo step back to 60.
  await page.keyboard.press("Control+z");
  await page.waitForTimeout(100);
  expect((await camera(page)).hFOV_deg).toBeCloseTo(60, 5);
  expect(await history(page)).toEqual({ undo: false, redo: true });

  // Escape during the drag puts the value back, with no step; the editor stays open.
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  await page.mouse.move(cx, cy - 60, { steps: 4 });
  expect((await camera(page)).hFOV_deg).toBeCloseTo(75, 5);
  await page.keyboard.press("Escape");
  await page.mouse.up();
  cam = await camera(page);
  expect(cam.hFOV_deg).toBeCloseTo(60, 5);
  expect(await history(page)).toEqual({ undo: false, redo: true });
  await expect(page.locator("[data-frame-box]")).toHaveCount(1);

  // The FOV ruler's Keyframe dot keys the Camera's `fov` Lane at the playhead, as the inspector's H FOV dot does.
  await page.locator('[data-ruler="FOV"] .pano-studio-keydot').click();
  const lanes = await page.evaluate(() => ({ fov: window.__studio.session.state.camera.fov.keyframes.map((key) => key.frame), rotation: window.__studio.session.state.camera.rotation.keyframes.length }));
  expect(lanes).toEqual({ fov: [0], rotation: 0 });
  // The Roll ruler's dot keys `rotation`.
  await page.locator('[data-ruler="Roll"] .pano-studio-keydot').click();
  expect(await page.evaluate(() => window.__studio.session.state.camera.rotation.keyframes.map((key) => key.frame))).toEqual([0]);
  expect(problems).toEqual([]);
});

test("Frame mode: a drag on the stage turns the Camera, one Undo step; the inspector shows the Scene card", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const stage = await stageBox(page);
  const frame = await frameBox(page);
  const start = await camera(page);
  // Look around in place: 60 px to the right of the frame's 571 px turns the yaw by 60 / width x H FOV the other way.
  const x = stage.x + frame.x + frame.width * 0.6;
  const y = stage.y + frame.y + frame.height * 0.2;
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + 60, y, { steps: 6 });
  await page.mouse.up();
  await page.waitForTimeout(150);
  const turned = await camera(page);
  expect(turned.position).toEqual(start.position);
  expect(turned.roll_deg).toBeCloseTo(start.roll_deg, 4);
  expect(turned.yaw_deg).toBeLessThan(start.yaw_deg - 3);
  expect(await history(page)).toEqual({ undo: true, redo: false });
  await page.keyboard.press("Control+z");
  expect((await camera(page)).yaw_deg).toBeCloseTo(start.yaw_deg, 4);
  // Nothing selected: the inspector holds the Scene card (the Camera's over the Ground's).
  await expect(page.locator('[data-region="inspector"] [data-card]')).toHaveCount(2);
  await expect(page.locator('[data-region="inspector"] [data-card="camera"]')).toHaveCount(1);
  expect(problems).toEqual([]);
});

// A drag of 100 px to the right with `button` from (x, y) of the page.
async function drag100(page, x, y, button) {
  await page.mouse.move(x, y);
  await page.mouse.down({ button });
  await page.mouse.move(x + 100, y, { steps: 5 });
  await page.mouse.up({ button });
  await page.waitForTimeout(200);
}

test("Frame mode: a pan on a plane keeps the plane under the pointer; a wheel step there keeps it too", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const stage = await stageBox(page);
  // The red plane, 3 ahead: grabbed with the right button, it follows the pointer 1:1 (docs/space-and-view.md "パン").
  const red = await page.evaluate((rgb) => window.__studio.stageCentroid(rgb), RED);
  await drag100(page, stage.x + red.x, stage.y + red.y, "right");
  const panned = await page.evaluate((rgb) => window.__studio.stageCentroid(rgb), RED);
  expect(Math.abs(panned.x - (red.x + 100))).toBeLessThan(4);
  expect(Math.abs(panned.y - red.y)).toBeLessThan(4);
  // One wheel step toward the plane scales about the point under the pointer: the plane stays there.
  await page.mouse.move(stage.x + panned.x, stage.y + panned.y);
  await page.mouse.wheel(0, -100);
  await page.waitForTimeout(200);
  const wheeled = await page.evaluate((rgb) => window.__studio.stageCentroid(rgb), RED);
  expect(Math.hypot(wheeled.x - panned.x, wheeled.y - panned.y)).toBeLessThan(4);
  expect(problems).toEqual([]);
});

test("Frame mode: over the background, a Camera looking slightly down pans and wheels at the default depth, not at the far ground", async ({ page }, testInfo) => {
  // Looking 3 degrees down from 1.5 above the ground: the center line meets the ground 28.6 ahead. The first T takes a
  // ground hit only up to TARGET_DEFAULT_DISTANCE (docs/space-and-view.md "初めの `T`"), so it is that far ahead.
  const problems = await open(page, testInfo, "aspect=16:9&mode=frame&pitch=-3");
  const stage = await stageBox(page);
  const frame = await frameBox(page);
  const depth = eyeLengths(eyeHeight(GROUND_DEFAULT)).TARGET_DEFAULT_DISTANCE;
  const sky = { x: stage.x + frame.x + frame.width / 2, y: stage.y + frame.y + frame.height * 0.1 };
  const start = await camera(page);
  // A pan over the sky at the top of the frame hits nothing: P moves 2 z tan(H FOV / 2) / W a pixel at T's depth z.
  await drag100(page, sky.x, sky.y, "right");
  const panned = await camera(page);
  const moved = Math.hypot(...panned.position.map((value, axis) => value - start.position[axis]));
  const want = (2 * depth * Math.tan((start.hFOV_deg * Math.PI) / 360) / frame.width) * 100;
  expect(Math.abs(moved - want)).toBeLessThan(want * 0.05);
  // A wheel step toward the sky scales about T: P goes 1 - 1 / WHEEL_FACTOR of d.
  await page.mouse.move(sky.x, sky.y);
  await page.mouse.wheel(0, -100);
  await page.waitForTimeout(200);
  const wheeled = await camera(page);
  const stepped = Math.hypot(...wheeled.position.map((value, axis) => value - panned.position[axis]));
  expect(Math.abs(stepped - depth * (1 - 1 / WHEEL_FACTOR))).toBeLessThan(depth * 0.02);
  expect(problems).toEqual([]);
});

test("Frame mode: a Lens ruler drag that shows 1.00 leaves the Camera a pinhole, so a click selects and a pan grabs 1:1", async ({ page }, testInfo) => {
  // The Lens ruler's value is what its label shows (docs/studio-ui.md "Camera タブ" 辺の目盛り): a drag ending a pixel
  // short of 1 (0.9975 at 400 px a unit) is 1.00, not a lens Camera that shows 1.00, on which nothing can be picked.
  const problems = await open(page, testInfo);
  const stage = await stageBox(page);
  const r = await page.locator('[data-ruler="Lens"] [role="slider"]').boundingBox();
  const cx = r.x + r.width / 2;
  const cy = r.y + r.height / 2;
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  await page.mouse.move(cx, cy + 12, { steps: 4 });
  await page.mouse.move(cx, cy + 1, { steps: 4 });
  await page.mouse.up();
  await page.waitForTimeout(200);
  await expect(page.locator('[data-ruler="Lens"] [data-ruler-value]')).toHaveText("1.00");
  expect((await camera(page)).curve).toBe(1);
  // A click on the red plane selects it, and a right drag on it keeps it under the pointer.
  const red = await page.evaluate((rgb) => window.__studio.stageCentroid(rgb), RED);
  await page.mouse.click(stage.x + red.x, stage.y + red.y);
  await page.waitForTimeout(100);
  expect(await page.evaluate(() => window.__studio.session.selection.row)).toBe("sticker_1");
  await drag100(page, stage.x + red.x, stage.y + red.y, "right");
  const panned = await page.evaluate((rgb) => window.__studio.stageCentroid(rgb), RED);
  expect(Math.abs(panned.x - (red.x + 100))).toBeLessThan(4);
  expect(problems).toEqual([]);
});

// Through a lens Camera of the frame box (κ = cam.curve, its image's center scale f fitting the H FOV in the box's width,
// docs/render-contract.md "カメラのレンズ"), from the Camera's own basis, independent of the stage's code: the World ray
// through the stage point `px`, and the stage point of the World point `p`.
async function lensRay(page, px, frame, cam) {
  return page.evaluate(async ({ px, frame, cam }) => {
    const { cameraBasis } = await import("/web_src/pano_camera_math.js");
    const { lensAxesDirection, lensRadius } = await import("/web_src/pano_lens.js");
    const { panoToWorld } = await import("/web_src/pano_world.js");
    const focal = frame.width / 2 / lensRadius((cam.hFOV_deg * Math.PI) / 360, cam.curve);
    const film = { x: (px.x - frame.x - frame.width / 2) / focal, y: (frame.y + frame.height / 2 - px.y) / focal };
    const d = panoToWorld(lensAxesDirection(cameraBasis(cam.yaw_deg, cam.pitch_deg, cam.roll_deg), film.x, film.y, cam.curve));
    return { origin: [...cam.position], direction: [d.x, d.y, d.z] };
  }, { px, frame, cam });
}

async function lensPixel(page, p, frame, cam) {
  return page.evaluate(async ({ p, frame, cam }) => {
    const { cameraBasis } = await import("/web_src/pano_camera_math.js");
    const { lensAxesFilm, lensRadius } = await import("/web_src/pano_lens.js");
    const { worldToPano } = await import("/web_src/pano_world.js");
    const focal = frame.width / 2 / lensRadius((cam.hFOV_deg * Math.PI) / 360, cam.curve);
    const at = worldToPano({ x: p[0] - cam.position[0], y: p[1] - cam.position[1], z: p[2] - cam.position[2] });
    const film = lensAxesFilm(cameraBasis(cam.yaw_deg, cam.pitch_deg, cam.roll_deg), at, cam.curve);
    return { x: frame.x + frame.width / 2 + film.x * focal, y: frame.y + frame.height / 2 - film.y * focal };
  }, { p, frame, cam });
}

test("Frame mode: on a lens Camera a click selects the object under the pointer, a pan keeps the grabbed point under it, a wheel step too", async ({ page }, testInfo) => {
  // docs/space-and-view.md "レンズの Camera の当たり": the pointer goes back along the lens (lensPickWindow).
  const problems = await open(page, testInfo, "aspect=16:9&mode=frame&curve=0.7");
  const frame = await frameBox(page);
  const stage = await stageBox(page);
  const start = await camera(page);
  expect(start.curve).toBe(0.7);
  // The red plane lies 30° left of the Camera's axis, where a pinhole's pan would be some 14% off.
  const red = await page.evaluate((rgb) => window.__studio.stageCentroid(rgb), RED);
  await page.mouse.click(stage.x + red.x, stage.y + red.y);
  await page.waitForTimeout(100);
  expect(await page.evaluate(() => window.__studio.session.selection.row)).toBe("sticker_1");
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0);
  // The grabbed point: the pointer's ray on the red plane, which faces the Camera's position 3 ahead at yaw 0 (z = const).
  const ray = await lensRay(page, red, frame, start);
  const planeZ = start.position[2] - 3;
  const t = (planeZ - ray.origin[2]) / ray.direction[2];
  const grabbed = ray.origin.map((value, axis) => value + ray.direction[axis] * t);
  await drag100(page, stage.x + red.x, stage.y + red.y, "right");
  const panned = await camera(page);
  expect(panned.yaw_deg).toBeCloseTo(start.yaw_deg, 6);
  const after = await lensPixel(page, grabbed, frame, panned);
  expect(Math.hypot(after.x - (red.x + 100), after.y - red.y)).toBeLessThan(3);
  // One wheel step toward it scales about the point under the pointer: it stays there.
  await page.mouse.move(stage.x + red.x + 100, stage.y + red.y);
  await page.mouse.wheel(0, -100);
  await page.waitForTimeout(200);
  const wheeled = await camera(page);
  expect(Math.hypot(...wheeled.position.map((value, axis) => value - panned.position[axis]))).toBeGreaterThan(0.05);
  const still = await lensPixel(page, grabbed, frame, wheeled);
  expect(Math.hypot(still.x - (red.x + 100), still.y - red.y)).toBeLessThan(3);
  expect(problems).toEqual([]);
});

test("Camera tab selection: a click selects the World object, outlined in yellow, with its bar and its card (ADR 0051)", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const stage = await stageBox(page);
  // The red plane, at the left of the frame.
  const red = await page.evaluate((rgb) => window.__studio.stageCentroid(rgb), RED);
  await page.mouse.click(stage.x + red.x, stage.y + red.y);
  await page.waitForTimeout(200);
  expect(await page.evaluate(() => window.__studio.session.selection.row)).toBe("sticker_1");
  // Its outline (the selected guide's yellow) on the overlay, its bar and its card, as in the 3D tab.
  const yellow = await page.evaluate(() => {
    const overlay = document.querySelector("[data-stage-overlay]");
    const data = overlay.getContext("2d").getImageData(0, 0, overlay.width, overlay.height).data;
    let count = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] > 200 && Math.abs(data[i] - 0xe8) < 24 && Math.abs(data[i + 1] - 0xcf) < 24 && Math.abs(data[i + 2] - 0x74) < 32) count += 1;
    }
    return count;
  });
  expect(yellow).toBeGreaterThan(40);
  await expect(page.locator('[data-region="bar"] [data-kind="world-image"]')).toHaveCount(1);
  await expect(page.locator('[data-region="inspector"]')).toContainText("Opacity");
  // A click on nothing lets it go: back to the Scene card.
  const frame = await frameBox(page);
  await page.mouse.click(stage.x + frame.x + frame.width * 0.85, stage.y + frame.y + frame.height * 0.15);
  await page.waitForTimeout(200);
  expect(await page.evaluate(() => window.__studio.session.selection.row)).toBeNull();
  await expect(page.locator('[data-region="bar"] > *')).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("Panorama mode: the frame shows the live ERP from the Camera, oriented as the output", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "aspect=16:9&mode=panorama");
  await page.waitForFunction(() => window.__studio.stage().liveErp()?.counts.faces > 0);
  const stage = await stageBox(page);
  expect(await frameBox(page)).toMatchObject(frameRect(stage.width, stage.height, 2));
  const found = await page.evaluate(async () => {
    const { MARKERS, SKY_MARKER, CAMERA, MARKER_DISTANCE } = await import("/tests/browser/pages/studio_camera_wired_scene.js");
    const { expectedPixel, panoPoint } = await import("/tests/browser/pages/live_erp_scene.js");
    const { worldToPano } = await import("/web_src/pano_world.js");
    const got = window.__studio.erpCentroids();
    const rotation = { yaw: CAMERA.yaw, pitch: CAMERA.pitch, roll: CAMERA.roll };
    const rows = [];
    for (const [name, yaw, pitch] of MARKERS) {
      const p = panoPoint(yaw, pitch, MARKER_DISTANCE);
      const dir = worldToPano({ x: p[0], y: p[1], z: p[2] });
      rows.push({ name, want: expectedPixel(dir, rotation, got.width, got.height, 360), got: got[name] });
    }
    const s = panoPoint(SKY_MARKER[1], SKY_MARKER[2], 1);
    rows.push({ name: "sky", want: expectedPixel(worldToPano({ x: s[0], y: s[1], z: s[2] }), rotation, got.width, got.height, 360), got: got.sky });
    return { width: got.width, height: got.height, rows };
  });
  expect(found.width).toBe(2 * found.height);
  for (const row of found.rows) {
    expect(row.got, row.name).not.toBeNull();
    let dx = row.got.x - row.want.x;
    dx = ((dx + found.width / 2) % found.width + found.width) % found.width - found.width / 2;
    expect(Math.hypot(dx, row.got.y - row.want.y), row.name).toBeLessThan(3);
  }
  // FOV and Lens gray, Roll live; the knobs and Frame Selected disabled; a drag on the stage moves nothing.
  for (const name of ["FOV", "Lens"]) await expect(page.locator(`[data-ruler="${name}"] [role="slider"]`)).toHaveAttribute("aria-disabled", "true");
  await expect(page.locator('[data-ruler="Roll"] [role="slider"]')).not.toHaveAttribute("aria-disabled", "true");
  for (const knob of ["orbit", "pan", "move"]) await expect(page.locator(`[data-knob="${knob}"]`)).toHaveAttribute("aria-disabled", "true");
  await expect(page.locator('[data-action="frame-selected"]')).toHaveAttribute("aria-disabled", "true");
  const before = await camera(page);
  await page.mouse.move(stage.x + stage.width / 2, stage.y + stage.height / 2);
  await page.mouse.down();
  await page.mouse.move(stage.x + stage.width / 2 + 80, stage.y + stage.height / 2 + 30, { steps: 4 });
  await page.mouse.up();
  await page.mouse.wheel(0, -200);
  await page.waitForTimeout(100);
  expect(await camera(page)).toEqual(before);
  expect(await history(page)).toEqual({ undo: false, redo: false });
  expect(problems).toEqual([]);
});

test("Panorama mode: turning the Camera (Roll) draws the pass only, not the six faces", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "aspect=16:9&mode=panorama");
  await page.waitForFunction(() => window.__studio.stage().liveErp()?.counts.faces > 0);
  // Let the first draws settle (the images load into the faces).
  await page.waitForTimeout(500);
  const before = await page.evaluate(() => window.__studio.stage().liveErp().counts);
  const roll = page.locator('[data-ruler="Roll"] [role="slider"]');
  const r = await roll.boundingBox();
  await page.mouse.move(r.x + r.width / 2, r.y + r.height / 2);
  await page.mouse.down();
  await page.mouse.move(r.x + r.width / 2 + 48, r.y + r.height / 2, { steps: 6 });
  await page.mouse.up();
  await page.waitForTimeout(200);
  expect((await camera(page)).roll_deg).toBeCloseTo(-10, 4);
  const after = await page.evaluate(() => window.__studio.stage().liveErp().counts);
  expect(after.passes).toBeGreaterThan(before.passes);
  expect(after.faces).toBe(before.faces);
  // What a draw took (SwiftShader runs on the CPU: not a measure of the GPU, docs/threejs-spark-integration.md).
  const passMs = await page.evaluate(() => window.__studio.stage().liveErp().ms);
  console.log(`live ERP: pass only ${passMs.toFixed(1)} ms (SwiftShader)`);
  const facesMs = await page.evaluate(() => window.__studio.stage().liveErp().facesMs);
  console.log(`live ERP: six faces and the pass ${facesMs.toFixed(1)} ms (SwiftShader)`);
  expect(problems).toEqual([]);
});

// The colors seen on the Output window's picture (a probe of its canvas, any context): the count of red pixels and of
// distinct colors.
const outputPicture = (page, kind) => page.evaluate((which) => {
  const canvas = document.querySelector(`[data-output-picture="${which}"]`);
  if (!canvas || !canvas.width) return null;
  const probe = document.createElement("canvas");
  probe.width = 120;
  probe.height = Math.max(1, Math.round((120 * canvas.height) / canvas.width));
  const g = probe.getContext("2d", { willReadFrequently: true });
  g.drawImage(canvas, 0, 0, probe.width, probe.height);
  const data = g.getImageData(0, 0, probe.width, probe.height).data;
  const seen = new Set();
  let red = 0;
  for (let i = 0; i < data.length; i += 4) {
    seen.add(`${data[i] >> 4},${data[i + 1] >> 4},${data[i + 2] >> 4}`);
    if (data[i] > 200 && data[i + 1] < 60 && data[i + 2] < 60) red += 1;
  }
  return { width: canvas.width, height: canvas.height, colors: seen.size, red };
}, kind);

for (const mode of ["frame", "panorama"]) {
  test(`the Output window shows the Camera's output in ${mode} mode in the 3D tab, and folds in the Camera tab`, async ({ page }, testInfo) => {
    const problems = watch(page);
    await page.setViewportSize({ width: 1440, height: 860 });
    await page.goto(`/tests/browser/pages/studio_camera_wired.html?aspect=16:9&mode=${mode}`);
    await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
    expect(await page.evaluate(() => window.__studio.error)).toBeNull();
    await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
    console.log(`renderer: ${await page.evaluate(() => window.__studio.rendererOf())}`);
    // Folded by default; opened in the 3D tab, it draws.
    await expect(page.locator('[data-region="output"]')).toHaveClass(/is-collapsed/);
    await page.locator('[data-action="output-fold"]').click();
    const kind = mode === "frame" ? "frame" : "erp";
    await expect.poll(async () => (await outputPicture(page, kind))?.red ?? 0, { timeout: 10_000 }).toBeGreaterThan(3);
    const picture = await outputPicture(page, kind);
    expect(picture.colors).toBeGreaterThan(5);
    if (kind === "erp") expect(picture.width).toBe(2 * picture.height);
    // The Camera tab folds it (docs/studio-ui.md "Output の小窓"); the 3D tab opens it again.
    await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();
    await expect(page.locator('[data-region="output"]')).toHaveClass(/is-collapsed/);
    await page.locator('[role="tablist"] button', { hasText: "3D" }).click();
    await expect(page.locator('[data-region="output"]')).not.toHaveClass(/is-collapsed/);
    await page.waitForTimeout(400);
    expect((await outputPicture(page, kind)).red).toBeGreaterThan(3);
    expect(problems).toEqual([]);
  });
}

// The pixels of the lower half of the frame (the ground), as a sum over a coarse probe: the grid's lines change it.
const groundSum = (page, selector) => page.evaluate((which) => {
  const canvas = document.querySelector(which);
  const frame = document.querySelector("[data-frame-box]").getBoundingClientRect();
  const box = canvas.getBoundingClientRect();
  const sx = canvas.width / box.width;
  const sy = canvas.height / box.height;
  const probe = document.createElement("canvas");
  probe.width = 160;
  probe.height = 45;
  const g = probe.getContext("2d", { willReadFrequently: true });
  g.drawImage(canvas, (frame.left - box.left) * sx, (frame.top - box.top + frame.height / 2) * sy, frame.width * sx, (frame.height / 2) * sy, 0, 0, 160, 45);
  return Array.from(g.getImageData(0, 0, 160, 45).data);
}, selector);
const differ = (a, b) => a.reduce((sum, value, index) => sum + Math.abs(value - b[index]), 0) / a.length;

for (const [mode, selector] of [["frame", "[data-stage-canvas]"], ["panorama", "[data-erp]"]]) {
  test(`the ground grid shows in the Camera tab's ${mode} mode and the grid button hides it`, async ({ page }, testInfo) => {
    const problems = await open(page, testInfo, `aspect=16:9&mode=${mode}`);
    if (mode === "panorama") await page.waitForFunction(() => window.__studio.stage().liveErp()?.counts.faces > 0);
    await page.waitForTimeout(300);
    const shown = await groundSum(page, selector);
    await page.locator('[data-action="grid"]').click();
    await expect(page.locator('[data-action="grid"]')).toHaveAttribute("aria-checked", "false");
    await page.waitForTimeout(300);
    const hidden = await groundSum(page, selector);
    expect(differ(shown, hidden)).toBeGreaterThan(0.25);
    await page.locator('[data-action="grid"]').click();
    await page.waitForTimeout(300);
    expect(differ(shown, await groundSum(page, selector))).toBeLessThan(0.05);
    expect(problems).toEqual([]);
  });
}

// The edge rulers' numbers stay clear of the left column and the view knobs (docs/design.md "大きさ": the frame's side
// margins), for every ratio and in Panorama mode, at the editor's real size.
for (const query of ["aspect=16:9&mode=frame", "aspect=1:1&mode=frame", "aspect=9:16&mode=frame", "aspect=16:9&mode=panorama"]) {
  test(`the edge rulers do not run under the left column or the knobs (${query})`, async ({ page }, testInfo) => {
    const problems = await open(page, testInfo, query);
    const places = await page.evaluate(() => {
      const extent = (selector) => {
        const boxes = [...document.querySelectorAll(`${selector}, ${selector} *`)].map((el) => el.getBoundingClientRect()).filter((box) => box.width > 0);
        return { left: Math.min(...boxes.map((box) => box.left)), right: Math.max(...boxes.map((box) => box.right)) };
      };
      return {
        rail: document.querySelector(".pano-studio-at-rail").getBoundingClientRect().right,
        nav: document.querySelector(".pano-studio-at-nav").getBoundingClientRect().left,
        fov: extent('[data-ruler="FOV"]'),
        lens: extent('[data-ruler="Lens"]'),
      };
    });
    expect(places.fov.left).toBeGreaterThanOrEqual(places.rail + 8);
    expect(places.lens.right).toBeLessThanOrEqual(places.nav - 8);
    expect(problems).toEqual([]);
  });
}

// docs/studio-ui.md "Camera タブ" 右下の画角の数字 (ADR 0061): the number shows the Camera's H FOV in the FOV ruler's text,
// grayed with its reason; the reset too; the view's FOV is kept for the 3D tab.
test("the Camera tab's FOV number shows the Camera's H FOV in the ruler's text, grayed", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const number = page.locator('[data-action="fov"]');
  const ruler = await page.locator('[data-ruler="FOV"] [data-ruler-value]').textContent();
  await expect(number).toHaveText(ruler);
  await expect(number).toHaveAttribute("aria-disabled", "true");
  await expect(number).toHaveAttribute("tabindex", "-1");
  await expect(number).toHaveAttribute("data-tip", "Camera FOV · Change it with the FOV ruler");
  await expect(page.locator('[data-action="fov-reset"]')).toHaveAttribute("aria-disabled", "true");
  await expect(page.locator('[data-action="fov-reset"]')).toHaveAttribute("data-tip", "Camera FOV · Change it with the FOV ruler");
  await expect(page.locator('[data-action="reset-view"]')).toHaveAttribute("data-tip", "Not available in the Camera view");
  // Its drag does nothing.
  const box = await number.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2 + 40, box.y + box.height / 2);
  await page.mouse.up();
  await expect(number).toHaveText(ruler);
  // Back in the 3D tab the number is the view's FOV again.
  await page.locator('[role="tablist"] button', { hasText: "3D" }).click();
  await expect(number).toHaveText("100°");
  await expect(number).not.toHaveAttribute("aria-disabled", "true");
  expect(problems).toEqual([]);
});

test("in Panorama mode the FOV number's tooltip says it is not available", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "aspect=16:9&mode=panorama");
  await expect(page.locator('[data-action="fov"]')).toHaveAttribute("data-tip", "Not available in Panorama mode");
  expect(problems).toEqual([]);
});

// docs/space-and-view.md "Frame 表示" (ADR 0061): Alt + wheel changes the Camera's H FOV by the FOV ruler's arrow-key
// step, the position stays, a run is one Undo step apart from a plain wheel run; Alt (without a drag) lights the FOV
// ruler (docs/studio-ui.md "Camera タブ").
test("Frame mode: Alt + wheel changes the Camera's FOV, not its position, as one Undo step; Alt lights the FOV ruler", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const stage = await stageBox(page);
  const frame = await frameBox(page);
  const fovRuler = page.locator('[data-ruler="FOV"]');
  await expect(fovRuler).toHaveAttribute("data-tip", "Alt+wheel over the view also changes it");
  const before = await camera(page);
  const x = stage.x + frame.x + frame.width / 2;
  const y = stage.y + frame.y + frame.height / 2;
  await page.mouse.move(x, y);
  await expect(fovRuler).not.toHaveClass(/is-lit/);
  await page.keyboard.down("Alt");
  await expect(fovRuler).toHaveClass(/is-lit/);
  await expect(page.locator('[data-ruler="Lens"]')).not.toHaveClass(/is-lit/);
  // The View group's number is off in the Camera tab: the ruler lights instead (docs/space-and-view.md "寄る").
  await expect(page.locator('[data-action="fov"]')).not.toHaveClass(/is-lit/);
  // Rolled away three steps: three small ticks smaller.
  for (let i = 0; i < 3; i += 1) await page.mouse.wheel(0, -100);
  let cam = await camera(page);
  expect(cam.hFOV_deg).toBeCloseTo(before.hFOV_deg - 6, 5);
  expect(cam.position).toEqual(before.position);
  await expect(fovRuler.locator("[data-ruler-value]")).toHaveText(`${before.hFOV_deg - 6}°`);
  await expect(page.locator('[data-action="fov"]')).toHaveText(`${before.hFOV_deg - 6}°`);
  // Rolled back one: one tick larger.
  await page.mouse.wheel(0, 100);
  expect((await camera(page)).hFOV_deg).toBeCloseTo(before.hFOV_deg - 4, 5);
  // An Alt drag (an orbit) does not light it.
  await page.mouse.down();
  await page.mouse.move(x + 20, y);
  await expect(fovRuler).not.toHaveClass(/is-lit/);
  await page.mouse.up();
  await page.keyboard.up("Alt");
  await expect(fovRuler).not.toHaveClass(/is-lit/);
  await page.waitForTimeout(400);
  // The Alt + wheel run and the orbit: two steps; the first Undo takes the orbit back, the second the FOV.
  await page.keyboard.press("Control+z");
  await page.waitForTimeout(100);
  cam = await camera(page);
  expect(cam.position).toEqual(before.position);
  expect(cam.hFOV_deg).toBeCloseTo(before.hFOV_deg - 4, 5);
  await page.keyboard.press("Control+z");
  await page.waitForTimeout(100);
  expect((await camera(page)).hFOV_deg).toBeCloseTo(before.hFOV_deg, 5);
  expect(await history(page)).toEqual({ undo: false, redo: true });
  // A plain wheel step right after an Alt + wheel step is a step of its own.
  await page.keyboard.down("Alt");
  await page.mouse.wheel(0, -100);
  await page.keyboard.up("Alt");
  await page.mouse.wheel(0, -100);
  await page.waitForTimeout(400);
  await page.keyboard.press("Control+z");
  await page.waitForTimeout(100);
  cam = await camera(page);
  expect(cam.position).toEqual(before.position);
  expect(cam.hFOV_deg).toBeCloseTo(before.hFOV_deg - 2, 5);
  expect(problems).toEqual([]);
});

// docs/space-and-view.md "黙って何もしない操作": Alt + wheel in Panorama mode changes nothing and says it is not available.
test("Panorama mode: Alt + wheel changes nothing and says it is not available", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "aspect=16:9&mode=panorama");
  const stage = await stageBox(page);
  const frame = await frameBox(page);
  const before = await camera(page);
  await page.mouse.move(stage.x + frame.x + frame.width / 2, stage.y + frame.y + frame.height / 2);
  await page.keyboard.down("Alt");
  await expect(page.locator('[data-ruler="FOV"]')).not.toHaveClass(/is-lit/);
  await page.mouse.wheel(0, -100);
  await page.keyboard.up("Alt");
  const notice = page.locator(".pano-studio-notice");
  await expect(notice).toHaveText("Not available in Panorama mode");
  await expect(notice).toHaveAttribute("data-notice", "stopped");
  expect(await camera(page)).toEqual(before);
  expect(await history(page)).toEqual({ undo: false, redo: false });
  expect(problems).toEqual([]);
});

// docs/space-and-view.md "Frame 表示": an Alt + wheel run writes its Keyframe where it began; a seek before the run rests
// (FRAME_WHEEL_REST_MS) does not write it again at the new playhead.
test("Frame mode: an Alt + wheel run keeps its Keyframe where it began when the playhead moves before it rests", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "aspect=16:9&mode=frame&fovkeys=1");
  const stage = await stageBox(page);
  const frame = await frameBox(page);
  const x = stage.x + frame.x + frame.width / 2;
  const y = stage.y + frame.y + frame.height / 2;
  await page.evaluate(({ x, y }) => {
    const canvas = document.querySelector("[data-stage-canvas]");
    canvas.dispatchEvent(new WheelEvent("wheel", { deltaY: -100, deltaMode: 0, altKey: true, clientX: x, clientY: y, bubbles: true, cancelable: true }));
    document.querySelector('[data-tl="next"]').click();
  }, { x, y });
  await page.waitForTimeout(400);
  const keys = await page.evaluate(() => window.__studio.session.state.camera.fov.keyframes.map((key) => [key.frame, key.value]));
  expect(keys).toEqual([[0, 58], [40, 60]]);
  expect(await history(page)).toEqual({ undo: true, redo: false });
  expect(problems).toEqual([]);
});

// docs/space-and-view.md "Frame 表示": nothing for a locked Camera or a read-only editor; the ruler does not light.
test("Frame mode: Alt + wheel does nothing to a locked Camera", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "aspect=16:9&mode=frame&locked=1");
  const stage = await stageBox(page);
  const frame = await frameBox(page);
  const before = await camera(page);
  await page.mouse.move(stage.x + frame.x + frame.width / 2, stage.y + frame.y + frame.height / 2);
  await page.keyboard.down("Alt");
  await expect(page.locator('[data-ruler="FOV"]')).not.toHaveClass(/is-lit/);
  await page.mouse.wheel(0, -100);
  await page.keyboard.up("Alt");
  expect(await camera(page)).toEqual(before);
  expect(await history(page)).toEqual({ undo: false, redo: false });
  expect(problems).toEqual([]);
});

// docs/space-and-view.md "Sky だけのときのホイール": with no World content the wheel still moves the Camera, and the top
// line says Sky only (the info kind) until BOUND_NOTICE_SECONDS after the last step; with World content nothing is said.
test("Frame mode, sky only: the wheel moves the Camera and the line says Sky only", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "aspect=16:9&mode=frame&sky=1");
  const stage = await stageBox(page);
  const frame = await frameBox(page);
  const before = await camera(page);
  await page.mouse.move(stage.x + frame.x + frame.width / 2, stage.y + frame.y + frame.height / 2);
  await page.mouse.wheel(0, -100);
  const notice = page.locator(".pano-studio-notice");
  await expect(notice).toHaveText("Sky only · Alt+wheel changes the FOV");
  await expect(notice).toHaveAttribute("data-notice", "info");
  expect((await camera(page)).position).not.toEqual(before.position);
  await expect(notice).toHaveCount(0, { timeout: 4000 });
  expect(problems).toEqual([]);
});

test("Frame mode with World content: the wheel says nothing", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const stage = await stageBox(page);
  const frame = await frameBox(page);
  await page.mouse.move(stage.x + frame.x + frame.width / 2, stage.y + frame.y + frame.height / 2);
  await page.mouse.wheel(0, -100);
  await page.waitForTimeout(300);
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0);
  expect(problems).toEqual([]);
});

// docs/studio-ui.md "一行の知らせの種類": the editor's notice of an operation that did not work comes before the Sky-only one.
test("Frame mode, sky only: Delete on the Camera after the Sky-only notice is a stopped notice", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "aspect=16:9&mode=frame&sky=1");
  const stage = await stageBox(page);
  const frame = await frameBox(page);
  await page.mouse.move(stage.x + frame.x + frame.width / 2, stage.y + frame.y + frame.height / 2);
  await page.mouse.wheel(0, -100);
  const notice = page.locator(".pano-studio-notice");
  await expect(notice).toHaveAttribute("data-notice", "info");
  await page.locator('.pano-studio-tl-head[data-head="camera"] [data-part="name"]').click();
  await page.locator(".pano-studio-editor").focus();
  await page.keyboard.press("Delete");
  await expect(notice).toHaveText(/The camera can't be deleted/);
  await expect(notice).toHaveAttribute("data-notice", "stopped");
  expect(problems).toEqual([]);
});
