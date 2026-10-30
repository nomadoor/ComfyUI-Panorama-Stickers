import { expect, test } from "@playwright/test";

// What comes from the node's inputs on the new editor's stage and Timeline (docs/studio-ui.md "ノードの入力から来た物")
// on tests/browser/pages/studio_inputs.html, in a real browser engine: the `sticker` input's port Sticker (its image,
// its GLB), another Studio's Scene on `scene` (its layers read-only, its background), with the node's result made in
// the page.

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
