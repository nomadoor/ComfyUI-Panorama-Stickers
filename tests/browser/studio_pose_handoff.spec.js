import { expect, test } from "@playwright/test";

// The new editor places the port Sticker by the sticker_state of the node's result (docs/studio-ui.md "`port` の
// Sticker", docs/editor-interaction.md "`port` の Sticker の Pose handoff の表示と記録", ADR 0067) on
// tests/browser/pages/studio_inputs.html, in a real browser engine: `sticker` and `sticker_state` linked, the port
// Sticker stored at yaw -25 and the shot's Camera at yaw 25. Its edits write its offset from that Camera.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  return problems;
}

async function open(page, which) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`/tests/browser/pages/studio_inputs.html?case=${which}`);
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await page.waitForTimeout(600);
  return problems;
}

// Where sky directions (yaw, pitch) land on the stage, in page px, from the view the page opens with.
async function skyPlaces(page, directions) {
  return page.evaluate(async (list) => {
    const { stageCamera } = await import("/web_src/studio/stage_view.js");
    const { viewProjection } = await import("/web_src/pano_editor_view.js");
    const { yawPitchToDir } = await import("/web_src/pano_camera_math.js");
    const rect = document.querySelector("[data-stage-canvas]").getBoundingClientRect();
    const camera = stageCamera({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, target: [0, 0, -3] }, rect.width, rect.height, 50);
    const projection = viewProjection(camera, rect.width, rect.height);
    return list.map(([yaw, pitch]) => {
      const q = projection.project(yawPitchToDir(yaw, pitch));
      return { x: rect.left + q.x, y: rect.top + q.y };
    });
  }, directions);
}

const hex = (color) => [1, 3, 5].map((i) => parseInt(color.slice(i, i + 2), 16));
const near = (rgb, color, tolerance = 40) => hex(color).every((value, i) => Math.abs(rgb[i] - value) <= tolerance);
const stageAt = (page, point) => page.evaluate(({ x, y }) => window.__studio.stageAt(x, y), point);
const port = (page) => page.evaluate(() => window.__studio.session.state.stickers.find((item) => item.source.kind === "port"));

test("the port Sticker is drawn where the shot's Camera puts it; a drag writes its offset and closing writes only that", async ({ page }) => {
  const problems = await open(page, "handoff");
  const colors = await page.evaluate(() => window.__studio.colors);
  const [handed, stored, moved] = await skyPlaces(page, [[25, 0], [-25, 0], [10, 0]]);
  await expect.poll(() => stageAt(page, handed).then((rgb) => near(rgb, colors.port)), { timeout: 10_000 }).toBe(true);
  expect(near(await stageAt(page, stored), colors.port)).toBe(false);
  // The working state keeps its own direction: nothing is copied from the Camera.
  expect((await port(page)).direction.value).toEqual({ yaw_deg: -25, pitch_deg: 0 });

  // Select it on the stage: Offset, Zoom and Opacity rows; Back to source unlit.
  await page.mouse.click(handed.x, handed.y);
  await expect.poll(() => page.evaluate(() => window.__studio.session.selection.row)).toBe("sticker_1");
  await expect(page.locator('[data-bar="revert"]')).toHaveAttribute("aria-disabled", "true");
  await expect(page.locator('[data-row="Offset"]')).toHaveCount(1);
  await expect(page.locator('[data-row="Zoom"]')).toHaveCount(1);
  await expect(page.locator('[data-row="Rotation"]')).toHaveCount(0);

  // Drag its body to yaw 10: the offset turns it 15 to the left of the Camera.
  await page.mouse.move(handed.x, handed.y);
  await page.mouse.down();
  await page.mouse.move(moved.x, moved.y, { steps: 8 });
  await page.mouse.up();
  await expect.poll(async () => Math.round((await port(page)).offset_rotation.value.yaw_deg)).toBe(-15);
  await expect.poll(() => stageAt(page, moved).then((rgb) => near(rgb, colors.port)), { timeout: 10_000 }).toBe(true);
  await expect(page.locator('[data-bar="revert"]')).not.toHaveAttribute("aria-disabled", "true");

  await page.evaluate(() => window.__studio.close());
  const written = await page.evaluate(() => JSON.parse(window.__studio.stateText()).stickers[0]);
  expect(written.placement).toBe("sky");
  expect(Math.round(written.offset_rotation.value.yaw_deg)).toBe(-15);
  expect(written.direction.value).toEqual({ yaw_deg: -25, pitch_deg: 0 });
  expect("placedByShot" in written || "handoff_overrides" in written).toBe(false);
  expect(problems).toEqual([]);
});

test("an edge handle of the returned shot says why it does not stretch it; Back to source takes the offset back", async ({ page }) => {
  const problems = await open(page, "handoff");
  const [handed] = await skyPlaces(page, [[25, 0]]);
  const colors = await page.evaluate(() => window.__studio.colors);
  await expect.poll(() => stageAt(page, handed).then((rgb) => near(rgb, colors.port)), { timeout: 10_000 }).toBe(true);
  await page.mouse.click(handed.x, handed.y);
  await expect.poll(() => page.evaluate(() => window.__studio.session.selection.row)).toBe("sticker_1");
  // Zoom 150% in the inspector (the state keeps 1.5).
  await page.locator('[data-region="inspector"] [data-row="Zoom"] [data-field="offset_fov"]').click();
  const input = page.locator('[data-region="inspector"] [data-row="Zoom"] input').first();
  await input.fill("150");
  await input.press("Enter");
  await expect.poll(async () => (await port(page)).offset_fov.value).toBe(1.5);
  // The right edge's handle: the middle of the frame's right side, hFOV 30 wide around yaw 25.
  const [edge] = await skyPlaces(page, [[40, 0]]);
  let found = null;
  for (let dx = -10; dx <= 10 && !found; dx += 2) {
    await page.mouse.move(edge.x + dx, edge.y);
    const text = await page.locator(".pano-studio-notice").textContent().catch(() => "");
    if (text.includes("Can't stretch a returned shot")) found = { x: edge.x + dx, y: edge.y };
  }
  expect(found).not.toBeNull();
  const before = await port(page);
  await page.mouse.down();
  await page.mouse.move(found.x + 60, found.y, { steps: 6 });
  await page.mouse.up();
  expect(await port(page)).toEqual(before);
  // Back to source: no offset, one Undo step.
  await page.locator('[data-bar="revert"]').click();
  await expect.poll(async () => (await port(page)).offset_fov).toEqual({ value: 1, keyframes: [] });
  expect(problems).toEqual([]);
});

test("a result that comes while the editor is open places the port Sticker by its shot, writing nothing", async ({ page }) => {
  const problems = await open(page, "handoff-late");
  const colors = await page.evaluate(() => window.__studio.colors);
  const [handed, stored] = await skyPlaces(page, [[25, 0], [-25, 0]]);
  await expect.poll(() => stageAt(page, stored).then((rgb) => near(rgb, colors.port)), { timeout: 10_000 }).toBe(true);
  await page.evaluate(() => window.__studio.arrive());
  await expect.poll(() => stageAt(page, handed).then((rgb) => near(rgb, colors.port)), { timeout: 10_000 }).toBe(true);
  expect(near(await stageAt(page, stored), colors.port)).toBe(false);
  // Opening and closing with only the shot applied writes nothing.
  const before = await page.evaluate(() => window.__studio.stateText());
  await page.evaluate(() => window.__studio.close());
  expect(await page.evaluate(() => window.__studio.stateText())).toBe(before);
  expect(problems).toEqual([]);
});
