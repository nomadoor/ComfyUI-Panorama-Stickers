import { expect, test } from "@playwright/test";

// What comes from the node's inputs on the new editor's stage and Timeline (docs/studio-ui.md "ノードの入力から来た物")
// on tests/browser/pages/studio_inputs.html, in a real browser engine: the `sticker` input's port Sticker (its image,
// its GLB), another Studio's Scene on `scene` (its layers edited as overrides, docs/studio-ui.md "上流の物の編集"; its
// background), with the node's result made in the page.

const SHOTS = process.env.STUDIO_SHOTS_DIR || null;

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page, testInfo, which) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/studio_inputs.html?case=${which}`);
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  // A refused pointer lock: a value box drags with the cursor shown (headless Chromium's lock stalls the mouse, as in
  // tests/browser/studio_inspector.spec.js).
  await page.evaluate(() => {
    Element.prototype.requestPointerLock = () => Promise.reject(new DOMException("refused", "NotAllowedError"));
  });
  await page.waitForTimeout(600);
  const renderer = await page.evaluate(() => window.__studio.rendererOf());
  testInfo.annotations.push({ type: "renderer", description: String(renderer) });
  console.log(`renderer: ${renderer}`);
  return problems;
}

// Where a sky direction (yaw, pitch) and a World point land on the stage, in page px, from the view the page opens
// with (the origin, looking at the front).
async function places(page, { sky = [], world = [] }) {
  return page.evaluate(async ({ sky, world }) => {
    const { stageCamera } = await import("/web_src/studio/stage_view.js");
    const { projectPoint } = await import("/web_src/pano_space.js");
    const { viewProjection } = await import("/web_src/pano_editor_view.js");
    const { yawPitchToDir } = await import("/web_src/pano_camera_math.js");
    const canvas = document.querySelector("[data-stage-canvas]");
    const rect = canvas.getBoundingClientRect();
    const camera = stageCamera({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, target: [0, 0, -3] }, rect.width, rect.height, 50);
    const projection = viewProjection(camera, rect.width, rect.height);
    const at = (q) => ({ x: rect.left + q.x, y: rect.top + q.y });
    return {
      sky: sky.map(([yaw, pitch]) => at(projection.project(yawPitchToDir(yaw, pitch)))),
      world: world.map((p) => at(projectPoint(camera, p, rect.width, rect.height))),
    };
  }, { sky, world });
}

const hex = (color) => [1, 3, 5].map((i) => parseInt(color.slice(i, i + 2), 16));
const near = (rgb, color, tolerance = 40) => hex(color).every((value, i) => Math.abs(rgb[i] - value) <= tolerance);
const stageAt = (page, point) => page.evaluate(({ x, y }) => window.__studio.stageAt(x, y), point);

async function shot(page, name) {
  if (SHOTS) await page.screenshot({ path: `${SHOTS}/upstream-${name}.png` });
}

test("the sticker input's image is drawn as its port Sticker, selected by a click, with Back to source in the bar", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "port");
  const colors = await page.evaluate(() => window.__studio.colors);
  const { sky: [front] } = await places(page, { sky: [[0, 0]] });
  await expect.poll(() => stageAt(page, front).then((rgb) => near(rgb, colors.port)), { timeout: 10_000 }).toBe(true);
  // Its vFOV follows the 2:1 image (hFOV 40° gives about 20.6°), not the stored 40°: 15° up is past its edge.
  const { sky: [above] } = await places(page, { sky: [[0, 15]] });
  expect(near(await stageAt(page, above), colors.port)).toBe(false);

  await page.mouse.click(front.x, front.y);
  await expect.poll(() => page.evaluate(() => window.__studio.session.selection.row)).toBe("sticker_1");
  await expect(page.locator('[data-bar="revert"]')).toBeVisible();
  await expect(page.locator('[data-bar="delete"]')).toHaveAttribute("aria-disabled", "true");
  await expect(page.locator('[data-head="sticker_1"]')).toBeVisible();
  await expect(page.locator('.pano-studio-tl-line.is-selected [data-head="sticker_1"]')).toBeVisible();
  await shot(page, "port");
  expect(problems).toEqual([]);
});

test("the sticker input's GLB is drawn as its world port Sticker and selected by a click", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "port3d");
  const { world: [center] } = await places(page, { world: [[0, 0, -3]] });
  // The box is orange where it stands (not the stage's dark ground).
  await expect.poll(async () => {
    const [r, g, b] = await stageAt(page, center);
    return r > 120 && r > b + 40 && g > b;
  }, { timeout: 15_000 }).toBe(true);
  await page.mouse.click(center.x, center.y);
  await expect.poll(() => page.evaluate(() => window.__studio.session.selection.row)).toBe("sticker_1");
  await expect(page.locator('[data-bar="revert"]')).toBeVisible();
  await expect(page.locator('[data-bar="gizmo:translate"]')).toBeVisible();
  await shot(page, "port3d");
  expect(problems).toEqual([]);
});

// The Move gizmo's X ball of a World object whose guide's center is `center`, from the view the page opens with
// (gizmo_overlay.js; Move uses the World axes), in page px.
async function xBall(page, center) {
  return page.evaluate(async (center) => {
    const { stageCamera } = await import("/web_src/studio/stage_view.js");
    const { gizmoHandles } = await import("/web_src/studio/gizmo_overlay.js");
    const canvas = document.querySelector("[data-stage-canvas]");
    const rect = canvas.getBoundingClientRect();
    const camera = stageCamera({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, target: [0, 0, -3] }, rect.width, rect.height, 50);
    const handles = gizmoHandles({ mode: "translate", transform: { position: center, quaternion: { x: 0, y: 0, z: 0, w: 1 }, scale: 1 } }, camera, rect.width, rect.height);
    const ball = handles.axes.find((axis) => axis.name === "x").end;
    return { x: rect.left + ball.x, y: rect.top + ball.y };
  }, center);
}

async function drag(page, from, to, steps = 8) {
  await page.mouse.move(from.x, from.y);
  await page.mouse.down();
  for (let i = 1; i <= steps; i += 1) await page.mouse.move(from.x + (to.x - from.x) * i / steps, from.y + (to.y - from.y) * i / steps);
  await page.mouse.up();
}

const selectedRow = (page) => page.evaluate(() => window.__studio.session.selection.row);
const records = (page) => page.evaluate(() => JSON.parse(JSON.stringify(window.__studio.session.state.upstream)));
const overrideOf = async (page, id) => (await records(page)).find((item) => item.layer === "scene_up")?.stickers.find((item) => item.id === id) ?? null;
// The override colour (docs/design.md "色" 桃, the dark theme's) as computed CSS.
const OVERRIDE_RGB = "rgb(232, 121, 166)";

// How many pieces the selection frame of `color` breaks into along the overlay's row where it has the most pixels:
// one for a solid frame's edge, many for a dashed one (docs/design.md "形と重なり").
const frameRuns = (page, color) => page.evaluate((color) => {
  const overlay = document.querySelector("[data-stage-overlay]");
  const data = overlay.getContext("2d").getImageData(0, 0, overlay.width, overlay.height).data;
  const want = [1, 3, 5].map((i) => parseInt(color.slice(i, i + 2), 16));
  const hit = (i) => data[i + 3] > 200 && want.every((v, k) => Math.abs(data[i + k] - v) < 30);
  let best = { pixels: 0, runs: 0 };
  for (let y = 0; y < overlay.height; y += 1) {
    let pixels = 0;
    let runs = 0;
    let inside = false;
    for (let x = 0; x < overlay.width; x += 1) {
      const on = hit((y * overlay.width + x) * 4);
      if (on) pixels += 1;
      if (on && !inside) runs += 1;
      inside = on;
    }
    if (pixels > best.pixels) best = { pixels, runs };
  }
  return best.runs;
}, color);
const inspectorRow = (page, name) => page.locator(`.pano-studio-inspector [data-row="${name}"]`);

// docs/studio-ui.md "上流の物の編集": the upstream objects are selected on the stage and edited with the stage's drags,
// the gizmo, the inspector and the bar, each edit written to the state's `upstream` records as an override.
test("another Studio's Scene on scene: its objects are selected on the stage and edited as overrides, written to state_json", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "upstream");
  const colors = await page.evaluate(() => window.__studio.colors);
  const { sky: [front], world: [board] } = await places(page, { sky: [[0, 0]], world: [[1.6, 0, -3]] });
  await expect.poll(() => stageAt(page, front).then((rgb) => near(rgb, colors.upstreamSky)), { timeout: 10_000 }).toBe(true);
  await expect.poll(() => stageAt(page, board).then((rgb) => near(rgb, colors.upstreamBoard)), { timeout: 10_000 }).toBe(true);
  const group = page.locator('[data-group="scene_up"]');
  await expect(group).toContainText("From Studio Up");
  await expect(group.locator('[data-part="revert"]')).toHaveAttribute("aria-disabled", "true");
  await expect(page.locator('[data-head="upstream:scene_up:sticker_1"] [data-part="eye"]')).not.toHaveAttribute("aria-disabled", "true");

  // The sky image: a click selects it, its card says where it came from, its bar has Lock, Delete and Back to source.
  await page.mouse.click(front.x, front.y);
  await expect.poll(() => selectedRow(page)).toBe("upstream:scene_up:sticker_1");
  await expect(page.locator('[data-region="inspector"]')).toContainText("From Studio Up");
  // Back to source: off as upstream has it, without the override colour; the selected frame is dashed.
  await expect(page.locator('[data-bar="revert"]')).toHaveAttribute("aria-disabled", "true");
  await expect(page.locator('[data-bar="revert"]')).toHaveAttribute("data-tip", "Back to source · as upstream has it");
  await expect(page.locator('[data-bar="revert"]')).not.toHaveClass(/is-override/);
  await expect.poll(() => frameRuns(page, "#aecedb")).toBeGreaterThan(6);
  await expect(page.locator('[data-bar="delete"]')).not.toHaveAttribute("aria-disabled", "true");
  await expect(page.locator('[data-bar="duplicate"]')).toHaveAttribute("aria-disabled", "true");
  // Its body's drag turns it (to the left, away from the board): one override of its direction, nothing else.
  await drag(page, front, { x: front.x - 120, y: front.y });
  await expect.poll(async () => Object.keys((await overrideOf(page, "sticker_1")) ?? {}).sort()).toEqual(["direction", "id", "placement"]);
  // Overridden: Back to source on in the override colour, the Timeline row's dot in the same colour.
  await expect(page.locator('[data-bar="revert"]')).not.toHaveAttribute("aria-disabled", "true");
  await expect(page.locator('[data-bar="revert"]')).toHaveCSS("color", OVERRIDE_RGB);
  await expect(page.locator('[data-head="upstream:scene_up:sticker_1"] .pano-studio-tl-override')).toHaveCSS("background-color", OVERRIDE_RGB);
  const { sky: [moved] } = await places(page, { sky: [[(await overrideOf(page, "sticker_1")).direction.value.yaw_deg, 0]] });
  await expect.poll(() => stageAt(page, moved).then((rgb) => near(rgb, colors.upstreamSky)), { timeout: 10_000 }).toBe(true);
  expect(near(await stageAt(page, front), colors.upstreamSky)).toBe(false);
  // The inspector: the Opacity dot keys it at the playhead, its value box's drag changes the Keyframe.
  await inspectorRow(page, "Opacity").locator(".pano-studio-keydot").click();
  await expect.poll(async () => (await overrideOf(page, "sticker_1"))?.opacity?.keyframes.length).toBe(1);
  const box = await inspectorRow(page, "Opacity").locator('[data-field="opacity"]').boundingBox();
  await drag(page, { x: box.x + box.width / 2, y: box.y + box.height / 2 }, { x: box.x + box.width / 2 - 60, y: box.y + box.height / 2 }, 10);
  await expect.poll(async () => (await overrideOf(page, "sticker_1")).opacity.keyframes[0].value).toBeLessThan(1);
  await expect(inspectorRow(page, "Opacity").locator(".pano-studio-row-mark")).toHaveCount(1);
  await expect(inspectorRow(page, "Opacity").locator(".pano-studio-row-mark")).toHaveCSS("background-color", OVERRIDE_RGB);
  // Lock: the override, and Delete and Back to source go off while it is locked.
  await page.locator('[data-bar="lock"]').click();
  await expect.poll(async () => (await overrideOf(page, "sticker_1")).locked).toBe(true);
  await expect(page.locator('[data-bar="delete"]')).toHaveAttribute("aria-disabled", "true");
  await page.locator('[data-bar="lock"]').click();
  await expect.poll(async () => (await overrideOf(page, "sticker_1")).locked).toBe(false);
  await shot(page, "edit-sky");

  // The world board: a click selects it, its gizmo's X ball moves it.
  await page.mouse.click(board.x, board.y);
  await expect.poll(() => selectedRow(page)).toBe("upstream:scene_up:sticker_2");
  await expect.poll(() => frameRuns(page, "#e8cf74")).toBeGreaterThan(6);
  const ball = await xBall(page, [1.6, 0, -3]);
  await drag(page, ball, { x: ball.x + 80, y: ball.y });
  await expect.poll(async () => (await overrideOf(page, "sticker_2"))?.position?.value[0] ?? 0).toBeGreaterThan(1.7);
  await shot(page, "edit-board");
  // Delete: it goes from the stage, the record deletes it, and the group's Restore deleted brings it back.
  await page.keyboard.press("Delete");
  await expect.poll(async () => (await records(page))[0].deleted).toEqual(["sticker_2"]);
  expect(await selectedRow(page)).toBeNull();
  expect(await overrideOf(page, "sticker_2")).toBeNull();
  const restore = group.locator('[data-part="restore"]');
  await expect(restore).toContainText("Restore deleted (1)");
  await restore.click();
  await expect.poll(async () => (await records(page))[0].deleted).toEqual([]);
  await expect.poll(() => stageAt(page, board).then((rgb) => near(rgb, colors.upstreamBoard)), { timeout: 10_000 }).toBe(true);

  // Back to source: the sky image's overrides all go; Undo brings them back.
  await page.locator('[data-head="upstream:scene_up:sticker_1"] [data-part="name"]').click();
  await expect.poll(() => selectedRow(page)).toBe("upstream:scene_up:sticker_1");
  await page.locator('[data-bar="revert"]').click();
  await expect.poll(() => records(page)).toEqual([]);
  await expect.poll(() => stageAt(page, front).then((rgb) => near(rgb, colors.upstreamSky)), { timeout: 10_000 }).toBe(true);
  await page.keyboard.press("Control+z");
  await expect.poll(async () => Object.keys((await overrideOf(page, "sticker_1")) ?? {}).sort()).toEqual(["direction", "id", "locked", "opacity", "placement"]);

  // Closing writes the records into state_json; the upstream Studio's own state is not touched.
  await page.evaluate(() => window.__studio.close());
  const written = JSON.parse(await page.evaluate(() => window.__studio.stateText()));
  const [record] = written.upstream;
  expect(record.layer).toBe("scene_up");
  expect(record.stickers.map((item) => item.id)).toEqual(["sticker_1"]);
  expect(Object.keys(record.stickers[0]).sort()).toEqual(["direction", "id", "locked", "opacity", "placement"]);
  expect(written.stickers).toEqual([]);
  expect(problems).toEqual([]);
});

// docs/timeline-ui.md "上流の層の行": the own `world` is drawn over the upstream layers, so its `scene` row stays.
test("an upstream Scene and the node's own world: the own scene row shows above the group and its eye edits the state", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "upstream-world");
  const own = page.locator('[data-head="scene"]');
  await expect(own).toBeVisible();
  await expect(page.locator('[data-group="scene_up"]')).toContainText("From Studio Up");
  await expect(page.locator('[data-head="upstream:scene_up:sticker_1"]')).toBeVisible();
  // The own rows come first, the upstream group below them.
  const ownBox = await own.boundingBox();
  const groupBox = await page.locator('[data-group="scene_up"]').boundingBox();
  expect(ownBox.y).toBeLessThan(groupBox.y);
  // The own row is the node's own: its eye hides the own `scene` and writes no upstream override.
  await own.locator('[data-part="eye"]').click();
  await expect.poll(() => page.evaluate(() => window.__studio.session.state.scene.visible)).toBe(false);
  expect(await page.evaluate(() => JSON.stringify(window.__studio.session.state.upstream))).toBe("[]");
  await shot(page, "own-world");
  expect(problems).toEqual([]);
});

test("a Scene linked to scene before the node ran: the line asks for a run", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "upstream-pending");
  await expect(page.locator(".pano-studio-notice")).toContainText("Run the workflow to show the upstream scene.");
  await shot(page, "pending");
  expect(problems).toEqual([]);
});

// docs/studio-ui.md "ノードの入力から来た物", docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド": a MoGe
// VIDEO batch on `world` arrives as a depth grid (a depth file and a K per frame, a color proxy video); the editor draws
// the item of the playhead's frame with the proxy's colors.
test("a MoGe VIDEO batch on world draws the depth grid item of the playhead's frame with its proxy colors", async ({ page }, testInfo) => {
  let problems = await open(page, testInfo, "moge");
  const colors = await page.evaluate(() => window.__studio.colors);
  const { world: [center] } = await places(page, { world: [[0, 0, -3]] });
  await expect.poll(() => stageAt(page, center).then((rgb) => near(rgb, colors.depth)), { timeout: 15_000 }).toBe(true);
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0);
  await shot(page, "moge");
  expect(problems).toEqual([]);

  // The clip at item 0, whose depth is above 0 only in its left quarter: once its left part is drawn, the middle is not.
  problems = await open(page, testInfo, "moge-item0");
  const { world: [left] } = await places(page, { world: [[-1.05, 0, -3]] });
  await expect.poll(() => stageAt(page, left).then((rgb) => near(rgb, colors.depth)), { timeout: 15_000 }).toBe(true);
  expect(near(await stageAt(page, center), colors.depth)).toBe(false);
  expect(problems).toEqual([]);
});

// docs/studio-ui.md "読み込み中と空の画面": a linked `world` brings 3D content, so the stage is not empty.
test("the empty stage's hint shows with nothing linked, and not with `world` linked", async ({ page }, testInfo) => {
  let problems = await open(page, testInfo, "empty");
  await expect(page.locator(".pano-studio-notice")).toHaveText("Drop an image or a 3D file, or press Add");
  await expect(page.locator(".pano-studio-notice")).toHaveAttribute("data-notice", "info");
  expect(problems).toEqual([]);

  problems = await open(page, testInfo, "world");
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("the upstream background shows while the node has no background of its own, and the node's own replaces it", async ({ page }, testInfo) => {
  let problems = await open(page, testInfo, "upstream");
  const colors = await page.evaluate(() => window.__studio.colors);
  // Above the sky images: only the background is there.
  const { sky: [above] } = await places(page, { sky: [[0, 30]] });
  await expect.poll(() => stageAt(page, above).then((rgb) => near(rgb, colors.upstreamBg, 30)), { timeout: 10_000 }).toBe(true);
  await shot(page, "background");
  expect(problems).toEqual([]);

  problems = await open(page, testInfo, "upstream-own");
  await expect.poll(() => stageAt(page, above).then((rgb) => near(rgb, colors.ownBg, 30)), { timeout: 10_000 }).toBe(true);
  await shot(page, "background-own");
  expect(problems).toEqual([]);
});

// docs/timeline-ui.md \"どの背景を出すか\" (web_src/pano_background_choice.js): the editor's background as it is now. Where it differs
// from another view's, aligning them is an open owner decision; change these only with that decision.
test("the upstream background outside its Clip range shows its bg_color, else the node's, green when that is empty", async ({ page }, testInfo) => {
  let problems = await open(page, testInfo, "upstream-clip");
  const colors = await page.evaluate(() => window.__studio.colors);
  const { sky: [above] } = await places(page, { sky: [[0, 30]] });
  await expect.poll(() => stageAt(page, above).then((rgb) => near(rgb, colors.upstreamColor, 30)), { timeout: 10_000 }).toBe(true);
  expect(problems).toEqual([]);

  problems = await open(page, testInfo, "upstream-clip-nocolor");
  await expect.poll(() => stageAt(page, above).then((rgb) => near(rgb, colors.empty, 30)), { timeout: 10_000 }).toBe(true);
  expect(problems).toEqual([]);
});

test("as it is: a result that comes after opening brings the upstream bg_color at once, but not the upstream image", async ({ page }, testInfo) => {
  let problems = await open(page, testInfo, "upstream-late-clip");
  const colors = await page.evaluate(() => window.__studio.colors);
  const { sky: [above] } = await places(page, { sky: [[0, 30]] });
  await page.evaluate(() => window.__studio.arrive());
  await page.setViewportSize({ width: 1400, height: 860 });
  // The colour is decided on each draw: outside the upstream Clip range its bg_color shows.
  await expect.poll(() => stageAt(page, above).then((rgb) => near(rgb, colors.upstreamColor, 30)), { timeout: 10_000 }).toBe(true);
  expect(problems).toEqual([]);

  problems = await open(page, testInfo, "upstream-late");
  await page.evaluate(() => window.__studio.arrive());
  await page.setViewportSize({ width: 1400, height: 860 });
  // The upstream layers are read on each draw: their sky image shows, so the stage drew the new result.
  const { sky: [later, ahead] } = await places(page, { sky: [[0, 30], [0, 0]] });
  await expect.poll(() => stageAt(page, ahead).then((rgb) => near(rgb, colors.upstreamSky, 30)), { timeout: 10_000 }).toBe(true);
  // The background image was chosen when the editor opened, without the result: the upstream image does not show.
  await page.waitForTimeout(500);
  expect(near(await stageAt(page, later), colors.upstreamBg, 30)).toBe(false);
  expect(problems).toEqual([]);
});

// docs/studio-ui.md "上流の物の編集": in the Camera tab's Frame view, the selected upstream sky image's body drag turns it,
// as the node's own (docs/studio-ui.md "Camera タブ").
test("Camera tab Frame view: the selected upstream sky image's body drag turns it, written as an override", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "upstream");
  const colors = await page.evaluate(() => window.__studio.colors);
  // The Camera to the view (the origin, looking at the front), in Frame mode, then the Camera tab.
  await page.locator('.pano-studio-at-rail [data-tool="camera"]').click();
  await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();
  await page.locator('[data-head="upstream:scene_up:sticker_1"] [data-part="name"]').click();
  await expect.poll(() => selectedRow(page)).toBe("upstream:scene_up:sticker_1");
  // The middle of the sky image's color on the stage.
  const find = () => page.evaluate((color) => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const rect = canvas.getBoundingClientRect();
    const probe = document.createElement("canvas");
    probe.width = canvas.width;
    probe.height = canvas.height;
    const g = probe.getContext("2d");
    g.drawImage(canvas, 0, 0);
    const data = g.getImageData(0, 0, probe.width, probe.height).data;
    const want = [1, 3, 5].map((i) => parseInt(color.slice(i, i + 2), 16));
    let sx = 0;
    let sy = 0;
    let n = 0;
    for (let y = 0; y < probe.height; y += 3) {
      for (let x = 0; x < probe.width; x += 3) {
        const i = (y * probe.width + x) * 4;
        if (want.every((v, k) => Math.abs(data[i + k] - v) < 30)) {
          sx += x;
          sy += y;
          n += 1;
        }
      }
    }
    return n ? { x: rect.left + (sx / n) * rect.width / probe.width, y: rect.top + (sy / n) * rect.height / probe.height } : null;
  }, colors.upstreamSky);
  await expect.poll(find, { timeout: 10_000 }).not.toBeNull();
  const at = await find();
  await drag(page, at, { x: at.x - 60, y: at.y });
  await expect.poll(async () => Object.keys((await overrideOf(page, "sticker_1")) ?? {}).sort()).toEqual(["direction", "id", "placement"]);
  await expect.poll(async () => (await find())?.x ?? Infinity).toBeLessThan(at.x - 20);
  await shot(page, "camera-tab");
  expect(problems).toEqual([]);
});

// docs/studio-ui.md "上流の物の編集": a double-click on an upstream row's name frames it, as the node's own rows.
test("a double-click on an upstream World object's row frames it on the stage", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "upstream");
  const colors = await page.evaluate(() => window.__studio.colors);
  const before = await page.evaluate(() => window.__studio.stage().destination());
  await page.locator('[data-head="upstream:scene_up:sticker_2"] [data-part="name"]').dblclick();
  // The view turns to the board at (1.6, 0, -3): the stage's middle shows it.
  await expect.poll(async () => {
    const destination = await page.evaluate(() => window.__studio.stage().destination());
    return JSON.stringify(destination) !== JSON.stringify(before);
  }, { timeout: 10_000 }).toBe(true);
  const middle = await page.evaluate(() => {
    const rect = document.querySelector("[data-stage-canvas]").getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  });
  await expect.poll(() => stageAt(page, middle).then((rgb) => near(rgb, colors.upstreamBoard)), { timeout: 10_000 }).toBe(true);
  expect(problems).toEqual([]);
});
