import { expect, test } from "@playwright/test";

// The new editor shows the port Sticker with the Pose handoff of the node's result (docs/studio-ui.md "`port` の
// Sticker", docs/editor-interaction.md "`port` の Sticker の Pose handoff の表示と記録") on
// tests/browser/pages/studio_inputs.html, in a real browser engine: `sticker` and `sticker_state` linked, the port
// Sticker stored at yaw -25 and handed at yaw 25.

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
  await page.setViewportSize({ width: 1440, height: 860 });
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
const portDirection = (page) => page.evaluate(() => window.__studio.session.state.stickers.find((item) => item.source.kind === "port").direction.value);

test("the port Sticker is drawn where the Pose handoff puts it; an edit and closing write the stored Sticker with the override", async ({ page }) => {
  const problems = await open(page, "handoff");
  const colors = await page.evaluate(() => window.__studio.colors);
  const [handed, stored] = await skyPlaces(page, [[25, 0], [-25, 0]]);
  await expect.poll(() => stageAt(page, handed).then((rgb) => near(rgb, colors.port)), { timeout: 10_000 }).toBe(true);
  expect(near(await stageAt(page, stored), colors.port)).toBe(false);
  expect(await portDirection(page)).toEqual({ yaw_deg: 25, pitch_deg: 0 });

  // Select it on the stage; its Rotation row is the handoff's (its reset has nothing to put back), Back to source unlit.
  await page.mouse.click(handed.x, handed.y);
  await expect.poll(() => page.evaluate(() => window.__studio.session.selection.row)).toBe("sticker_1");
  await expect(page.locator('[data-bar="revert"]')).toHaveAttribute("aria-disabled", "true");

  // An edit of a handed Lane (the inspector's Roll), then closing.
  await page.evaluate(() => window.__studio.session.applyInspector({ type: "field", target: { kind: "sticker", id: "sticker_1" }, field: "rot_deg", value: 30, phase: "commit" }, { playhead: 0 }));
  await page.evaluate(() => window.__studio.close());
  const written = await page.evaluate(() => JSON.parse(window.__studio.stateText()).stickers[0]);
  expect(written.placement).toBe("sky");
  expect(written.handoff_overrides).toEqual(["roll"]);
  expect(written.roll.value).toBe(30);
  // The inherited Lanes are written as they were stored, as the old editor writes them.
  expect(written.direction.value).toEqual({ yaw_deg: -25, pitch_deg: 0 });
  expect(problems).toEqual([]);
});

test("a result that comes while the editor is open moves the port Sticker to its Pose handoff", async ({ page }) => {
  const problems = await open(page, "handoff-late");
  const colors = await page.evaluate(() => window.__studio.colors);
  const [handed, stored] = await skyPlaces(page, [[25, 0], [-25, 0]]);
  await expect.poll(() => stageAt(page, stored).then((rgb) => near(rgb, colors.port)), { timeout: 10_000 }).toBe(true);
  expect(await portDirection(page)).toEqual({ yaw_deg: -25, pitch_deg: 0 });
  await page.evaluate(() => window.__studio.arrive());
  await expect.poll(() => stageAt(page, handed).then((rgb) => near(rgb, colors.port)), { timeout: 10_000 }).toBe(true);
  expect(near(await stageAt(page, stored), colors.port)).toBe(false);
  // Opening and closing with only the handoff shown writes nothing.
  const before = await page.evaluate(() => window.__studio.stateText());
  await page.evaluate(() => window.__studio.close());
  expect(await page.evaluate(() => window.__studio.stateText())).toBe(before);
  expect(problems).toEqual([]);
});
