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
    const length = cameraMarkerLength(-1.6);
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

const stateOf = (page) => page.evaluate(() => window.__studio.session.state);

async function click(page, point) {
  await page.mouse.move(point.x, point.y);
  await page.mouse.down();
  await page.mouse.up();
}

// docs/studio-ui.md "Look at": Pick waits for a click; a click on a World object makes it the Camera's target at the
// point clicked (one Undo step, the Camera selected); a click on nothing says so and keeps waiting; Escape stops it.
test("Pick and a click on the World image make it the Camera's target; the mark shows, Rotate is off", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const at = await places(page);
  await page.locator(".pano-studio-tl-head-name", { hasText: "Camera" }).first().click();
  const pick = page.locator('[data-part="look-pick"]');
  await expect(page.locator('[data-part="look-target"]')).toHaveText("None");
  await pick.click();
  await expect(page.locator(".pano-studio-notice")).toContainText("Click a spot to look at · Esc to cancel");
  await expect(pick).toHaveAttribute("aria-pressed", "true");
  // Nothing under the press: it says so and keeps waiting.
  await click(page, at.empty);
  await expect(page.locator(".pano-studio-notice")).toContainText("Nothing to look at here");
  await click(page, at.board);
  await page.waitForTimeout(200);
  const state = await stateOf(page);
  expect(state.camera.look_at.value.sticker).toBe("sticker_2");
  expect(state.camera.look_at.value.offset.every((value) => Number.isFinite(value) && Math.abs(value) < 1)).toBe(true);
  expect(await page.evaluate(() => window.__studio.session.selection.row)).toBe("camera");
  await expect(page.locator('[data-part="look-target"]')).not.toHaveText("None");
  await expect(page.locator('[data-part="card-badge"]')).toContainText("Look at");
  await expect(pick).toHaveAttribute("aria-pressed", "false");
  // The mark (a yellow ring with ticks around a white dot) stands where the Camera looks; Rotate is off with its reason.
  const mark = await page.evaluate(async () => {
    const { lookMarkPoint } = await import("/web_src/studio/look_at.js");
    const { loadSceneState } = await import("/web_src/pano_scene_state.js");
    const state = loadSceneState(window.__studio.session.state);
    return lookMarkPoint(state, 0);
  });
  expect(mark).not.toBeNull();
  const yellowNear = await page.evaluate(({ x, y }) => {
    const rect = document.querySelector("[data-stage-overlay]").getBoundingClientRect();
    let hits = 0;
    for (let a = 0; a < 32; a += 1) {
      for (const r of [11, 12]) {
        const [red, green, blue, alpha] = window.__studio.overlayAt(x - rect.left + r * Math.cos(a), y - rect.top + r * Math.sin(a));
        if (alpha > 200 && Math.abs(red - 0xe8) < 40 && Math.abs(green - 0xcf) < 40 && Math.abs(blue - 0x74) < 50) hits += 1;
      }
    }
    return hits;
  }, at.board);
  expect(yellowNear).toBeGreaterThan(0);
  const rotate = page.locator('.pano-studio-at-bar [data-bar="gizmo:rotate"]');
  await expect(rotate).toHaveAttribute("aria-disabled", "true");
  await expect(rotate).toHaveAttribute("data-tip", "Rotate · Set by Look at");
  // The Offset row: a typed value moves the point on the board's box; its reset takes it to the box's center.
  const offsetRow = page.locator('[data-region="inspector"] [data-row="Offset"]');
  await offsetRow.locator('[data-field="look_offset_y"]').click();
  const input = offsetRow.locator("input").first();
  await input.fill("0.5");
  await input.press("Enter");
  await expect.poll(async () => (await stateOf(page)).camera.look_at.value.offset[1]).toBe(0.5);
  await offsetRow.getByRole("button", { name: "Reset Offset" }).click();
  await expect.poll(async () => (await stateOf(page)).camera.look_at.value.offset).toEqual([0, 0, 0]);
  // The row's reset takes it off.
  await page.locator('[data-region="inspector"] [data-row="Look at"]').getByRole("button", { name: "Reset Look at" }).click();
  expect((await stateOf(page)).camera.look_at.value).toBeNull();
  // Escape stops a wait.
  await pick.click();
  await page.keyboard.press("Escape");
  await expect(pick).toHaveAttribute("aria-pressed", "false");
  expect(problems).toEqual([]);
});
