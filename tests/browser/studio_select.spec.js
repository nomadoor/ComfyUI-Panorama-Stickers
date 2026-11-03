import { expect, test } from "@playwright/test";

// Selecting and editing objects on the new editor's stage (web_src/studio/stage.js, stage_objects.js,
// stage_overlay.js, components/studio/StudioSelectionBar.vue) on tests/browser/pages/studio_select.html, in a real
// browser engine: docs/studio-ui.md "下の中央のバー", docs/space-and-view.md "World の物のガイド" and the press order of
// docs/editor-interaction.md "`world` の Sticker の操作". The World image is picked on the GPU.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page, testInfo) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto("/tests/browser/pages/studio_select.html");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  // The images have loaded and drawn (the sky image's layer is in the frame).
  await page.waitForTimeout(400);
  const renderer = await page.evaluate(() => window.__studio.rendererOf());
  testInfo.annotations.push({ type: "renderer", description: String(renderer) });
  console.log(`renderer: ${renderer}`);
  return problems;
}

// Where World points and sky directions land on the stage, in page px, from the view the page opens with.
async function places(page) {
  return page.evaluate(async () => {
    const { stageCamera } = await import("/web_src/studio/stage_view.js");
    const { projectPoint } = await import("/web_src/pano_space.js");
    const { viewProjection } = await import("/web_src/pano_editor_view.js");
    const { yawPitchToDir } = await import("/web_src/pano_camera_math.js");
    const canvas = document.querySelector("[data-stage-canvas]");
    const rect = canvas.getBoundingClientRect();
    const position = [0, 0.1, 1.6];
    const pose = { position, yaw_deg: 0, pitch_deg: -4, roll_deg: 0, target: [0, -0.2, -2.4] };
    const camera = stageCamera(pose, rect.width, rect.height, 50);
    const at = (p) => {
      const q = projectPoint(camera, p, rect.width, rect.height);
      return { x: rect.left + q.x, y: rect.top + q.y };
    };
    const sky = viewProjection(camera, rect.width, rect.height).project(yawPitchToDir(-38, 6));
    // The Move gizmo's X ball on the World image (gizmo_overlay.js; Move uses the World axes).
    const { gizmoHandles } = await import("/web_src/studio/gizmo_overlay.js");
    const handles = gizmoHandles({ mode: "translate", transform: { position: [0.9, -0.4, -2.6], quaternion: { x: 0, y: 0, z: 0, w: 1 }, scale: 1 } }, camera, rect.width, rect.height);
    const xBall = handles.axes.find((axis) => axis.name === "x").end;
    // The point of the Camera's filled mark farthest from its lines (camera_marker.js).
    const { cameraMarkerLength, cameraMarkerScreen, cameraMarkerShape } = await import("/web_src/studio/camera_marker.js");
    const { evaluateCamera } = await import("/web_src/pano_scene_eval.js");
    const { loadSceneState } = await import("/web_src/pano_scene_state.js");
    const { pointInPolygon } = await import("/web_src/studio/world_guides.js");
    const state = loadSceneState(window.__studio.session.state);
    const value = evaluateCamera(state.camera, 0);
    const length = cameraMarkerLength(value, camera, rect.height, -1.6);
    const marker = cameraMarkerScreen(cameraMarkerShape(value, state.camera.projection, length), camera, rect.width, rect.height);
    const toLine = (p, { a, b }) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / Math.max(dx * dx + dy * dy, 1e-12)));
      return Math.hypot(a.x + dx * t - p.x, a.y + dy * t - p.y);
    };
    let fill = null;
    let clear = 0;
    for (let x = 0; x < rect.width; x += 2) {
      for (let y = 0; y < rect.height; y += 2) {
        const p = { x, y };
        if (!marker.fills.some((face) => pointInPolygon(p, face))) continue;
        const distance = Math.min(...marker.lines.map((line) => toLine(p, line)));
        if (distance > clear) [fill, clear] = [p, distance];
      }
    }
    return {
      xBall: { x: rect.left + xBall.x, y: rect.top + xBall.y },
      cameraFill: { x: rect.left + fill.x, y: rect.top + fill.y, clear },
      stage: { x: rect.left, y: rect.top, width: rect.width, height: rect.height },
      board: at([0.9, -0.4, -2.6]),
      camera: at([-1.3, -0.5, -1.6]),
      sky: { x: rect.left + sky.x, y: rect.top + sky.y },
      empty: { x: rect.left + rect.width * 0.5, y: rect.top + rect.height * 0.12 },
    };
  });
}

const selected = (page) => page.evaluate(() => window.__studio.session.selection.row);
const stateOf = (page) => page.evaluate(() => window.__studio.session.state);

async function click(page, point) {
  await page.mouse.move(point.x, point.y);
  await page.mouse.down();
  await page.mouse.up();
}

async function drag(page, from, to, steps = 8) {
  await page.mouse.move(from.x, from.y);
  await page.mouse.down();
  for (let i = 1; i <= steps; i += 1) await page.mouse.move(from.x + (to.x - from.x) * i / steps, from.y + (to.y - from.y) * i / steps);
  await page.mouse.up();
}

test("a click selects the World image (GPU pick), the bar shows its buttons, the guide turns yellow, an empty click lets go", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const at = await places(page);
  await expect(page.locator(".pano-studio-at-bar .pano-studio-float")).toHaveCount(0);
  await click(page, at.board);
  expect(await selected(page)).toBe("sticker_2");
  const bar = page.locator('.pano-studio-at-bar [data-kind="world-image"]');
  await expect(bar).toHaveCount(1);
  await expect(bar.locator("[data-bar]")).toHaveCount(7);
  await expect(bar.locator('[data-bar="gizmo:translate"]')).toHaveAttribute("data-tip", "Move (1)");
  await expect(bar.locator('[data-bar="gizmo:translate"]')).toHaveClass(/is-active/);
  await expect(bar.locator('[data-bar="replace"]')).toHaveAttribute("aria-disabled", "true");
  // The inspector shows the selected object's card (the shared selection).
  await expect(page.locator('[data-region="inspector"]')).toContainText("Position");
  await expect.poll(() => page.evaluate(() => window.__studio.yellowPixels())).toBeGreaterThan(40);
  // 1, 2, 3 switch the gizmo.
  await page.keyboard.press("2");
  await expect(bar.locator('[data-bar="gizmo:rotate"]')).toHaveClass(/is-active/);
  await page.keyboard.press("3");
  await expect(bar.locator('[data-bar="gizmo:scale"]')).toHaveClass(/is-active/);
  await page.keyboard.press("1");
  await expect(bar.locator('[data-bar="gizmo:translate"]')).toHaveClass(/is-active/);
  await click(page, at.empty);
  expect(await selected(page)).toBeNull();
  await expect(page.locator(".pano-studio-at-bar .pano-studio-float")).toHaveCount(0);
  await expect.poll(() => page.evaluate(() => window.__studio.yellowPixels())).toBe(0);
  expect(problems).toEqual([]);
});

test("dragging the gizmo's X ball moves the World image along X only, as one Undo step, and Escape gives a drag up", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const at = await places(page);
  await click(page, at.board);
  const before = (await stateOf(page)).stickers[1].position.value;
  // The overlay draws the X ball in coral (the gizmo is the overlay's, not three.js's).
  const ball = await page.evaluate(({ x, y }) => window.__studio.overlayAt(x, y), { x: at.xBall.x - at.stage.x, y: at.xBall.y - at.stage.y });
  expect(ball[3]).toBeGreaterThan(200);
  expect(Math.abs(ball[0] - 0xf3)).toBeLessThan(24);
  expect(Math.abs(ball[1] - 0x71)).toBeLessThan(24);
  // Pulled right and down: it goes along X only.
  const handle = at.xBall;
  await drag(page, handle, { x: handle.x + 120, y: handle.y + 50 });
  const after = (await stateOf(page)).stickers[1].position.value;
  expect(after[0]).toBeGreaterThan(before[0] + 0.1);
  expect(Math.abs(after[1] - before[1])).toBeLessThan(1e-6);
  expect(Math.abs(after[2] - before[2])).toBeLessThan(1e-6);
  expect(await selected(page)).toBe("sticker_2");
  await page.keyboard.press("Control+z");
  expect((await stateOf(page)).stickers[1].position.value).toEqual(before);
  // A drag given up with Escape puts it back and keeps the editor open.
  await page.mouse.move(handle.x, handle.y);
  await page.mouse.down();
  for (let i = 1; i <= 6; i += 1) await page.mouse.move(handle.x + i * 20, handle.y);
  await page.keyboard.press("Escape");
  await page.mouse.up();
  expect((await stateOf(page)).stickers[1].position.value).toEqual(before);
  await expect(page.locator(".pano-studio-editor")).toHaveCount(1);
  expect(problems).toEqual([]);
});

test("the sky image: a click selects it, its body's drag turns it, a corner scales it; it has no gizmo", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const at = await places(page);
  await click(page, at.sky);
  expect(await selected(page)).toBe("sticker_1");
  const bar = page.locator('.pano-studio-at-bar [data-kind="sky"]');
  await expect(bar).toHaveCount(1);
  await expect(bar.locator('[data-bar^="gizmo:"]')).toHaveCount(0);
  await drag(page, at.sky, { x: at.sky.x + 80, y: at.sky.y });
  const turned = (await stateOf(page)).stickers[0].direction.value;
  expect(turned.yaw_deg).toBeGreaterThan(-38 + 3);
  // The corner handle (the overlay draws it in yellow) scales both FOVs.
  const size = (await stateOf(page)).stickers[0].size.value;
  const corner = await page.evaluate(async () => {
    const { stageCamera } = await import("/web_src/studio/stage_view.js");
    const { viewProjection } = await import("/web_src/pano_editor_view.js");
    const { buildStickerGeometry } = await import("/web_src/pano_sticker_geometry.js");
    const canvas = document.querySelector("[data-stage-canvas]");
    const rect = canvas.getBoundingClientRect();
    const camera = stageCamera({ position: [0, 0.1, 1.6], yaw_deg: 0, pitch_deg: -4, roll_deg: 0, target: [0, -0.2, -2.4] }, rect.width, rect.height, 50);
    const value = window.__studio.session.state.stickers[0];
    const geometry = buildStickerGeometry({ ...value.direction.value, rot_deg: 0, ...value.size.value }, viewProjection(camera, rect.width, rect.height));
    return { corner: { x: rect.left + geometry.corners[2].x, y: rect.top + geometry.corners[2].y }, center: { x: rect.left + geometry.center.x, y: rect.top + geometry.center.y } };
  });
  const out = { x: corner.center.x + (corner.corner.x - corner.center.x) * 1.5, y: corner.center.y + (corner.corner.y - corner.center.y) * 1.5 };
  await drag(page, corner.corner, out);
  const grown = (await stateOf(page)).stickers[0].size.value;
  expect(grown.hFOV_deg).toBeGreaterThan(size.hFOV_deg * 1.3);
  expect(grown.vFOV_deg).toBeGreaterThan(size.vFOV_deg * 1.3);
  expect(problems).toEqual([]);
});

test("a click in the middle of the Camera's filled face, away from its lines, selects it", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const at = await places(page);
  expect(at.cameraFill.clear).toBeGreaterThan(10);
  // The face is filled on the overlay there (a light see-through white).
  const pixel = await page.evaluate(({ x, y }) => window.__studio.overlayAt(x, y), { x: at.cameraFill.x - at.stage.x, y: at.cameraFill.y - at.stage.y });
  expect(pixel[3]).toBeGreaterThan(10);
  expect(pixel[3]).toBeLessThan(160);
  await page.mouse.move(at.cameraFill.x, at.cameraFill.y);
  await expect.poll(() => page.evaluate(() => getComputedStyle(document.querySelector("[data-stage-canvas]")).cursor)).toBe("default");
  await click(page, at.cameraFill);
  expect(await selected(page)).toBe("camera");
  // Selected, its lines turn yellow.
  await expect.poll(() => page.evaluate(() => window.__studio.yellowPixels())).toBeGreaterThan(40);
  expect(problems).toEqual([]);
});

test("the Camera is selected by its lines; Delete says it can't be deleted; its bar has Move and Rotate", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const at = await places(page);
  await click(page, at.camera);
  expect(await selected(page)).toBe("camera");
  const bar = page.locator('.pano-studio-at-bar [data-kind="camera"]');
  await expect(bar.locator("[data-bar]")).toHaveCount(3);
  await page.keyboard.press("Delete");
  await expect(page.locator(".pano-studio-notice")).toContainText("The camera can't be deleted");
  expect((await stateOf(page)).camera).not.toBeNull();
  expect(problems).toEqual([]);
});

test("Lock keeps the World image from the gizmo and Delete; Duplicate adds a selected copy; Delete removes it", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const at = await places(page);
  await click(page, at.board);
  const bar = page.locator('.pano-studio-at-bar [data-kind="world-image"]');
  await bar.locator('[data-bar="lock"]').click();
  expect((await stateOf(page)).stickers[1].locked).toBe(true);
  await expect(bar.locator('[data-bar="delete"]')).toHaveAttribute("aria-disabled", "true");
  const before = (await stateOf(page)).stickers[1].position.value;
  await drag(page, { x: at.board.x + 40, y: at.board.y }, { x: at.board.x + 160, y: at.board.y });
  expect((await stateOf(page)).stickers[1].position.value).toEqual(before);
  await bar.locator('[data-bar="lock"]').click();
  await bar.locator('[data-bar="duplicate"]').click();
  const stickers = (await stateOf(page)).stickers;
  expect(stickers.length).toBe(3);
  expect(await selected(page)).toBe(stickers[2].id);
  await page.keyboard.press("Delete");
  expect((await stateOf(page)).stickers.length).toBe(2);
  expect(problems).toEqual([]);
});

test("dragging the gizmo's XZ square draws the X and Z guide lines through the grabbed center, in their colors", async ({ page }, testInfo) => {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto("/tests/browser/pages/studio_select.html?view=above");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await page.waitForTimeout(400);
  // From the page's ABOVE_VIEW (studio_select.js): the board, the XZ square's middle and both guide lines on the stage.
  const at = await page.evaluate(async () => {
    const { stageCamera } = await import("/web_src/studio/stage_view.js");
    const { projectPoint } = await import("/web_src/pano_space.js");
    const { gizmoHandles, gizmoDrag, gizmoGuideSegment } = await import("/web_src/studio/gizmo_overlay.js");
    const { screenSegment } = await import("/web_src/studio/world_guides.js");
    const rect = document.querySelector("[data-stage-canvas]").getBoundingClientRect();
    const pose = { position: [0, 2.0, 1.4], yaw_deg: 0, pitch_deg: -Math.atan2(2.2, 3.8) * 180 / Math.PI, target: [0, -0.2, -2.4] };
    const camera = stageCamera(pose, rect.width, rect.height, 50);
    const gizmo = { mode: "translate", transform: { position: [0.9, -0.4, -2.6], quaternion: { x: 0, y: 0, z: 0, w: 1 }, scale: 1 } };
    const handles = gizmoHandles(gizmo, camera, rect.width, rect.height);
    const plane = handles.planes.find((entry) => entry.name === "xz");
    const grip = { x: plane.points.reduce((sum, p) => sum + p.x, 0) / 4, y: plane.points.reduce((sum, p) => sum + p.y, 0) / 4 };
    const lines = gizmoDrag(gizmo, "xz", camera, grip, rect.width, rect.height).guides.map((guide) => {
      const [a, b] = screenSegment(camera, gizmoGuideSegment(guide, camera), rect.width, rect.height);
      return { name: guide.name, a, b };
    });
    const board = projectPoint(camera, [0.9, -0.4, -2.6], rect.width, rect.height);
    return { shown: plane.shown, stage: { x: rect.left, y: rect.top }, size: { width: rect.width, height: rect.height }, center: handles.center, grip, lines, board };
  });
  expect(at.shown).toBe(true);
  const page_ = (p) => ({ x: at.stage.x + p.x, y: at.stage.y + p.y });
  await click(page, page_(at.board));
  expect(await selected(page)).toBe("sticker_2");
  // Held mid-drag: the overlay's pixels along each guide line, away from the gizmo, are in that axis's color.
  const grip = page_(at.grip);
  await page.mouse.move(grip.x, grip.y);
  await page.mouse.down();
  for (let i = 1; i <= 6; i += 1) await page.mouse.move(grip.x + i * 12, grip.y + i * 5);
  const colors = { x: [0xf3, 0x71, 0x59], z: [0xae, 0xce, 0xdb] };
  for (const line of at.lines) {
    const dx = line.b.x - line.a.x;
    const dy = line.b.y - line.a.y;
    const length = Math.hypot(dx, dy);
    // Points 100 to 260 px from the center both ways that lie on the stage and the line; of each, the most opaque of the pixel and
    // its neighbors across the line (the line is 1.5 px and smoothed).
    const samples = [];
    for (const away of [-260, -200, -140, -100, 100, 140, 200, 260]) {
      const p = { x: at.center.x + dx / length * away, y: at.center.y + dy / length * away };
      if (p.x < 2 || p.y < 2 || p.x > at.size.width - 2 || p.y > at.size.height - 2) continue;
      // A line going away from the view ends on screen where it vanishes (Z here): only points on the segment count.
      const t = ((p.x - line.a.x) * dx + (p.y - line.a.y) * dy) / (length * length);
      if (t < 0.01 || t > 0.99) continue;
      const near = [-1, 0, 1].map((k) => ({ x: p.x - dy / length * k, y: p.y + dx / length * k }));
      const pixels = await page.evaluate((points) => points.map(({ x, y }) => window.__studio.overlayAt(x, y)), near);
      samples.push(pixels.reduce((best, rgba) => (rgba[3] > best[3] ? rgba : best)));
    }
    expect(samples.length, line.name).toBeGreaterThanOrEqual(3);
    const matching = samples.filter((rgba) => rgba[3] > 120 && rgba.slice(0, 3).every((value, index) => Math.abs(value - colors[line.name][index]) < 30));
    expect(matching.length, `${line.name}: ${JSON.stringify(samples)}`).toBe(samples.length);
  }
  await page.screenshot({ path: testInfo.outputPath("plane-guides-xz.png") });
  await page.mouse.up();
  // Let go: the guide lines go.
  const p = at.lines[0];
  const off = { x: at.center.x + (p.b.x - p.a.x) / Math.hypot(p.b.x - p.a.x, p.b.y - p.a.y) * 200, y: at.center.y + (p.b.y - p.a.y) / Math.hypot(p.b.x - p.a.x, p.b.y - p.a.y) * 200 };
  // (the overlay redraws on a later frame)
  await expect.poll(async () => (await page.evaluate(({ x, y }) => window.__studio.overlayAt(x, y), off))[3]).toBeLessThan(40);
  expect(problems).toEqual([]);
});

// docs/design.md "下の中央のバーの名前の欄": the name's box of the bar now shown (its width and its text's).
const barName = (page) => page.locator(".pano-studio-at-bar .pano-studio-bar-name").evaluate((el) => ({ width: el.getBoundingClientRect().width, text: el.scrollWidth, name: el.textContent }));

test("the bar's name field: the Camera's fixed name fits its text, a World image's name keeps 140px", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const at = await places(page);
  await click(page, at.camera);
  expect(await selected(page)).toBe("camera");
  const camera = await barName(page);
  expect(camera.name).toBe("Camera");
  expect(camera.width).toBeLessThan(80);
  expect(Math.abs(camera.width - camera.text)).toBeLessThanOrEqual(1);
  await click(page, at.board);
  expect(await selected(page)).toBe("sticker_2");
  expect((await barName(page)).width).toBeCloseTo(140, 0);
  expect(problems).toEqual([]);
});
