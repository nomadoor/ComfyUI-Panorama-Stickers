import { expect, test } from "@playwright/test";
import { frameRect, rollRulerWidth } from "../../web_src/studio/frame_layout.js";

// The Camera tab's parts (StudioCameraFrame, StudioEdgeRuler; docs/studio-ui.md "Camera タブ", docs/design.md "大きさ")
// on tests/browser/pages/studio_camera_tab.html: the frame fitted into the stage less 120 / 60 / 84 for each ratio, the
// dim outside, the rulers on the frame's edges, Panorama mode's gray FOV and Lens over the live ERP, and the rulers'
// drag (Shift finer, Escape back).

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash"));
  return problems;
}

async function open(page, aspect, mode = "frame") {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/studio_camera_tab.html?aspect=${aspect}&mode=${mode}`);
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 60_000 });
  const check = await page.evaluate(() => window.__check);
  expect(check.error).toBeNull();
  return { problems, check };
}

const box = (page, selector) => page.locator(selector).first().evaluate((el) => {
  const stage = document.querySelector("[data-stage]").getBoundingClientRect();
  const r = el.getBoundingClientRect();
  return { x: r.left - stage.left, y: r.top - stage.top, width: r.width, height: r.height, right: r.right - stage.left, bottom: r.bottom - stage.top };
});

for (const [aspect, ratio] of [["16:9", 16 / 9], ["1:1", 1], ["9:16", 9 / 16]]) {
  test(`the frame of ${aspect} fits the stage less the margins, with the rulers on its edges`, async ({ page }) => {
    const { problems, check } = await open(page, aspect);
    const want = frameRect(1180, 560, ratio);
    expect(check.rect).toEqual(want);
    const frame = await box(page, "[data-frame-box]");
    expect(frame).toMatchObject({ x: want.x, y: want.y, width: want.width, height: want.height });
    // The four dim bands cover the stage outside the frame and nothing inside it.
    const dims = await page.locator(".pano-studio-camera-frame-dim").evaluateAll((els) => els.map((el) => {
      const r = el.getBoundingClientRect();
      return { area: r.width * r.height, color: getComputedStyle(el).backgroundColor };
    }));
    expect(dims).toHaveLength(4);
    expect(dims.reduce((sum, d) => sum + d.area, 0)).toBeCloseTo(1180 * 560 - want.width * want.height, -1);
    expect(dims[0].color).toBe("rgba(8, 8, 9, 0.82)");
    const line = await page.locator("[data-frame-box]").evaluate((el) => getComputedStyle(el).outlineColor);
    expect(line).toBe("rgba(255, 255, 255, 0.35)");

    const fov = await box(page, '[data-ruler="FOV"]');
    const lens = await box(page, '[data-ruler="Lens"]');
    const roll = await box(page, '[data-ruler="Roll"]');
    expect(fov.right).toBeCloseTo(want.x - 14, 0);
    expect(fov.height).toBeCloseTo(want.height, 0);
    expect(lens.x).toBeCloseTo(want.x + want.width + 14, 0);
    expect(roll.y).toBeCloseTo(want.y + want.height + 10, 0);
    expect(roll.width).toBeCloseTo(Math.round(rollRulerWidth(want.width)), 0);
    expect(roll.x + roll.width / 2).toBeCloseTo(want.x + want.width / 2, 0);
    // Numbers on the scales, the value under the middle mark among them.
    await expect(page.locator('[data-ruler="FOV"] .pano-studio-edge-ruler-num', { hasText: /^60$/ })).toHaveCount(1);
    await expect(page.locator('[data-ruler="Roll"] .pano-studio-edge-ruler-num', { hasText: /^0$/ })).toHaveCount(1);
    await expect(page.locator("[data-timecode]")).toHaveText("00:03.06 · 78 / 240");
    // The left column but Undo and Redo, and Reset View, stay in place, disabled.
    for (const tool of ["cursor", "paint", "mask", "add", "camera"]) {
      await expect(page.locator(`[data-tool="${tool}"]`)).toHaveAttribute("aria-disabled", "true");
    }
    await expect(page.locator('[data-action="reset-view"]')).toHaveAttribute("aria-disabled", "true");
    await expect(page.locator('[data-tool="undo"]')).not.toHaveAttribute("aria-disabled", "true");
    expect(problems).toEqual([]);
  });
}

test("Panorama mode shows the live ERP in a 2 : 1 frame, FOV and Lens gray, Roll live", async ({ page }) => {
  const { problems, check } = await open(page, "16:9", "panorama");
  console.log(`renderer: ${check.renderer}`);
  expect(check.rect).toEqual(frameRect(1180, 560, 2));
  expect(check.erp.draws).toBe(1);
  expect(check.erp.width).toBe(2 * check.erp.height);
  // The ERP is drawn: the canvas in the frame is not one flat color.
  const colors = await page.locator("[data-erp] canvas").evaluate((canvas) => {
    const data = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;
    const seen = new Set();
    for (let i = 0; i < data.length; i += 4 * 97) seen.add(`${data[i] >> 4},${data[i + 1] >> 4},${data[i + 2] >> 4}`);
    return seen.size;
  });
  expect(colors).toBeGreaterThan(5);
  for (const name of ["FOV", "Lens"]) {
    await expect(page.locator(`[data-ruler="${name}"] [role="slider"]`)).toHaveAttribute("aria-disabled", "true");
    await expect(page.locator(`[data-ruler="${name}"]`)).toHaveAttribute("title", "Used in Frame mode");
  }
  await expect(page.locator('[data-ruler="Roll"] [role="slider"]')).not.toHaveAttribute("aria-disabled", "true");
  // A drag on a gray ruler sends nothing.
  const fov = page.locator('[data-ruler="FOV"] [role="slider"]');
  const r = await fov.boundingBox();
  await page.mouse.move(r.x + r.width / 2, r.y + r.height / 2);
  await page.mouse.down();
  await page.mouse.move(r.x + r.width / 2, r.y + r.height / 2 + 40);
  await page.mouse.up();
  expect(await page.evaluate(() => window.__events.splice(0))).toEqual([]);
  expect(problems).toEqual([]);
});

test("dragging a ruler moves its scale under the mark: input on the way, change at the end, Shift finer, Escape back", async ({ page }) => {
  const { problems } = await open(page, "16:9");
  const take = () => page.evaluate(() => window.__events.splice(0));
  const roll = page.locator('[data-ruler="Roll"] [role="slider"]');
  const r = await roll.boundingBox();
  const cx = r.x + r.width / 2;
  const cy = r.y + r.height / 2;

  // 8 px per degree: 40 px to the right brings -9 under the mark (the scale moves with the pointer).
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  await page.mouse.move(cx + 40, cy, { steps: 4 });
  await page.mouse.up();
  let events = await take();
  expect(events.at(-1)).toEqual({ name: "roll:change", value: -9 });
  expect(events.filter((e) => e.name === "roll:input").at(-1).value).toBe(-9);
  await expect(page.locator('[data-ruler="Roll"] [data-ruler-value]')).toHaveText("-9°");

  // Shift: a tenth of the movement.
  await page.mouse.move(cx, cy);
  await page.keyboard.down("Shift");
  await page.mouse.down();
  await page.mouse.move(cx - 40, cy, { steps: 4 });
  await page.mouse.up();
  await page.keyboard.up("Shift");
  events = await take();
  expect(events.at(-1)).toEqual({ name: "roll:change", value: -8.5 });

  // Escape during the drag: the value goes back, and the drag ends with cancel.
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  await page.mouse.move(cx + 80, cy, { steps: 4 });
  await page.keyboard.press("Escape");
  await page.mouse.up();
  events = await take();
  expect(events.slice(-2)).toEqual([{ name: "roll:input", value: -8.5 }, { name: "roll:cancel" }]);

  // A press without a move records nothing.
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  await page.mouse.up();
  expect(await take()).toEqual([{ name: "roll:cancel" }]);

  // Vertical: dragging FOV's scale up brings larger values under the mark; arrow keys step it; the dot toggles.
  const fov = page.locator('[data-ruler="FOV"] [role="slider"]');
  const f = await fov.boundingBox();
  await page.mouse.move(f.x + f.width / 2, f.y + f.height / 2);
  await page.mouse.down();
  await page.mouse.move(f.x + f.width / 2, f.y + f.height / 2 - 20, { steps: 2 });
  await page.mouse.up();
  expect((await take()).at(-1)).toEqual({ name: "fov:change", value: 65 });
  await fov.press("ArrowUp");
  expect(await take()).toEqual([{ name: "fov:input", value: 67 }, { name: "fov:change", value: 67 }]);
  await page.locator('[data-ruler="FOV"] .pano-studio-keydot').click();
  expect(await take()).toEqual([{ name: "fov:key" }]);
  expect(problems).toEqual([]);
});
