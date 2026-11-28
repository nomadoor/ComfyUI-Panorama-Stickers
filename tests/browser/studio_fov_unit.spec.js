import { expect, test } from "@playwright/test";

// The H FOV's unit (docs/studio-ui.md "H FOV の単位") in the new editor on tests/browser/pages/studio_camera_wired.html,
// in a real browser engine: ComfyUI's setting chooses ° or mm for the inspector's H FOV box, the Camera tab's FOV ruler
// head and its FOV number, and the view's FOV number in the 3D tab and the Preview window; an open editor or window
// follows a change at once, the units are plain text, the head and the number keep their widths, and a typed mm goes
// into the state as degrees unrounded.

const SETTING = "PanoramaSuite.Editor.FovUnit";

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page, query = "aspect=16:9&mode=frame") {
  const problems = watch(page);
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`/tests/browser/pages/studio_camera_wired.html?${query}`);
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();
  await expect(page.locator("[data-frame-box]")).toHaveCount(1);
  return problems;
}

const hfovBox = (page) => page.locator('[data-card="camera"] [data-field="hFOV_deg"]');
const boxValue = (page) => hfovBox(page).locator(".pano-studio-field-value");
const boxUnit = (page) => hfovBox(page).locator(".pano-studio-field-unit");
const rulerValue = (page) => page.locator('[data-ruler="FOV"] [data-ruler-value]');
const fovNumber = (page) => page.locator('[data-action="fov"]');
const width = (locator) => locator.evaluate((el) => el.getBoundingClientRect().width);
const setUnit = (page, unit) => page.evaluate(([id, value]) => window.__studio.setSetting(id, value), [SETTING, unit]);

test("the setting switches the box, the ruler head and the FOV number in an open editor; units are plain text; widths stay", async ({ page }) => {
  const problems = await open(page);
  const hfov = (await page.evaluate(() => window.__studio.camera())).hFOV_deg;
  const mm = await page.evaluate(async (deg) => {
    const { fovToFocalMm } = await import("/web_src/pano_lens.js");
    const { formatFocalMm } = await import("/web_src/studio/camera_ui.js");
    return formatFocalMm(fovToFocalMm(deg, 1));
  }, hfov);
  await expect(boxUnit(page)).toHaveText("°");
  // Nothing in the editor switches the unit: the units are text, not buttons.
  expect(await boxUnit(page).evaluate((el) => el.tagName)).toBe("SPAN");
  await expect(rulerValue(page).locator("button")).toHaveCount(0);
  const headWidth = await width(rulerValue(page));

  await setUnit(page, "mm");
  await expect(boxUnit(page)).toHaveText("mm");
  await expect(boxValue(page)).toHaveText(mm);
  await expect(rulerValue(page)).toHaveText(`${mm}mm`);
  await expect(fovNumber(page)).toHaveText(`${mm}mm`);
  expect(await width(rulerValue(page))).toBe(headWidth);
  // Nothing in the state changed: no Undo step.
  expect(await page.evaluate(() => window.__studio.session.canUndo)).toBe(false);

  // The widest mm (1°, typed as a focal length past the range) fits the head and the number, which keep their widths.
  const wideNumber = await width(fovNumber(page));
  await hfovBox(page).click();
  await hfovBox(page).locator("input").fill("99999");
  await hfovBox(page).locator("input").press("Enter");
  await expect(rulerValue(page)).toHaveText("2063mm");
  await expect(fovNumber(page)).toHaveText("2063mm");
  expect(await width(rulerValue(page))).toBe(headWidth);
  expect(await width(fovNumber(page))).toBe(wideNumber);
  const fits = await page.evaluate(() => {
    const head = document.querySelector('[data-ruler="FOV"] [data-ruler-value]');
    return [head.scrollWidth, head.clientWidth];
  });
  expect(fits[0]).toBeLessThanOrEqual(fits[1]);
  await page.evaluate(() => window.__studio.session.undo?.());

  // The 3D tab's number is the view's FOV, in mm too (κ 1), in the same width as the Camera tab's; it still moves by
  // whole degrees (the arrow key: one step, docs/space-and-view.md "寄る").
  await page.locator('[role="tablist"] button', { hasText: "3D" }).click();
  const viewMm = (fov) => page.evaluate(async (deg) => {
    const { viewFovText } = await import("/web_src/studio/camera_ui.js");
    return viewFovText(deg, "mm");
  }, fov);
  const viewFov = Number(await fovNumber(page).getAttribute("aria-valuenow"));
  await expect(fovNumber(page)).toHaveText(await viewMm(viewFov));
  await expect(fovNumber(page)).toHaveAttribute("aria-valuetext", await viewMm(viewFov));
  await expect(fovNumber(page)).toHaveAttribute("data-tip", "Focal length · 36 mm wide sensor (Alt+Wheel)");
  expect(await width(fovNumber(page))).toBe(wideNumber);
  await fovNumber(page).focus();
  await page.keyboard.press("Shift+ArrowLeft");
  await expect(fovNumber(page)).toHaveAttribute("aria-valuenow", String(viewFov - 1));
  await expect(fovNumber(page)).toHaveText(await viewMm(viewFov - 1));
  await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();

  await setUnit(page, "deg");
  await expect(boxUnit(page)).toHaveText("°");
  await expect(rulerValue(page)).toHaveText(/°$/);
  await expect(fovNumber(page)).toHaveText(/°$/);
  await page.locator('[role="tablist"] button', { hasText: "3D" }).click();
  await expect(fovNumber(page)).toHaveText(/^\d+°$/);
  await expect(fovNumber(page)).toHaveAttribute("data-tip", "Field of view (Alt+Wheel)");
  expect(problems).toEqual([]);
});

test("the Preview window's FOV number follows the setting: mm when set before opening, and a change while open", async ({ page }) => {
  const problems = [];
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("/tests/browser/pages/preview_window.html?fovUnit=mm");
  await page.waitForFunction(() => window.__preview?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__preview.open())).toBe(true);
  const number = fovNumber(page);
  const fov = Number(await number.getAttribute("aria-valuenow"));
  const mm = await page.evaluate(async (deg) => (await import("/web_src/studio/camera_ui.js")).viewFovText(deg, "mm"), fov);
  await expect(number).toHaveText(mm);
  const wide = await width(number);
  await page.evaluate((id) => window.__preview.setSetting(id, "deg"), SETTING);
  await expect(number).toHaveText(`${fov}°`);
  expect(await width(number)).toBeLessThan(wide);
  await page.evaluate((id) => window.__preview.setSetting(id, "mm"), SETTING);
  await expect(number).toHaveText(mm);
  expect(await width(number)).toBe(wide);
  expect(problems).toEqual([]);
});

test("a typed mm goes into fov as degrees, unrounded; the setting set before opens the editor in mm", async ({ page }) => {
  const problems = await open(page, "aspect=16:9&mode=frame&fovUnit=mm");
  await expect(boxUnit(page)).toHaveText("mm");
  const box = hfovBox(page);
  // Opening the box and pressing Enter without typing changes nothing (the shown mm is rounder than the degrees).
  const before = (await page.evaluate(() => window.__studio.camera())).hFOV_deg;
  await box.click();
  await box.locator("input").press("Enter");
  expect((await page.evaluate(() => window.__studio.camera())).hFOV_deg).toBe(before);
  expect(await page.evaluate(() => window.__studio.session.canUndo)).toBe(false);
  await box.click();
  const input = box.locator("input");
  await input.fill("400");
  await input.press("Enter");
  const hfov = (await page.evaluate(() => window.__studio.camera())).hFOV_deg;
  const want = 2 * Math.atan(18 / 400) * 180 / Math.PI;
  expect(Math.abs(hfov - want)).toBeLessThan(1e-9);
  await expect(boxValue(page)).toHaveText("400");
  expect(problems).toEqual([]);
});

test("switching to mm while open places the bottom bar again, clear of the wider View group", async ({ page }) => {
  const problems = await open(page);
  // Paint's bar in the 3D tab, beside the View group whose FOV number widens in mm.
  await page.locator('[role="tablist"] button', { hasText: "3D" }).click();
  await page.getByRole("button", { name: "Paint", exact: true }).click();
  await expect(page.locator(".pano-studio-at-bar > *")).toHaveCount(1);
  const boxes = () => page.evaluate(() => {
    const rect = (selector) => document.querySelector(selector).getBoundingClientRect();
    return { bar: rect(".pano-studio-at-bar > *"), view: rect(".pano-studio-at-buttons") };
  });
  // A stage just wide enough that the bar, placed for the degrees' View group, sits right beside it.
  for (let width = 1600; width >= 900; width -= 10) {
    await page.setViewportSize({ width, height: 1080 });
    await page.waitForTimeout(50);
    const at = await boxes();
    if (at.view.left - at.bar.right < 20) break;
  }
  await setUnit(page, "mm");
  await expect.poll(async () => {
    const at = await boxes();
    return at.view.left - 8 - at.bar.right;
  }).toBeGreaterThanOrEqual(-0.5);
  expect(problems).toEqual([]);
});

test("in mm the H FOV row and the FOV ruler head say Focal and fit; the ruler's tooltip is the focal length's", async ({ page }) => {
  const problems = await open(page);
  const rowName = page.locator('[data-card="camera"] [data-row="H FOV"] .pano-studio-row-name');
  const rulerName = page.locator('[data-ruler="FOV"] .pano-studio-edge-ruler-name');
  await expect(rowName).toHaveText("H FOV");
  await expect(rulerName).toHaveText("FOV");
  await expect(page.locator('[data-ruler="FOV"]')).toHaveAttribute("data-tip", "FOV (Alt+Wheel)");
  await setUnit(page, "mm");
  await expect(rowName).toHaveText("Focal");
  await expect(rulerName).toHaveText("Focal");
  await expect(page.locator('[data-ruler="FOV"]')).toHaveAttribute("data-tip", "Focal length · 36 mm wide sensor (Alt+Wheel)");
  await expect(hfovBox(page)).toHaveAttribute("aria-label", "Focal length");
  await expect(page.locator('[data-card="camera"] [data-row="H FOV"] [aria-label="Reset Focal"]')).toHaveCount(1);
  // Whole, not cut: each name's text fits its box.
  for (const name of [rowName, rulerName]) {
    const [text, box] = await name.evaluate((el) => [el.scrollWidth, el.clientWidth]);
    expect(text).toBeLessThanOrEqual(box);
  }
  expect(problems).toEqual([]);
});
