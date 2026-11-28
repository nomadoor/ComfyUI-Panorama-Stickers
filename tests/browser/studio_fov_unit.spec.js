import { expect, test } from "@playwright/test";

// The H FOV's unit (docs/studio-ui.md "H FOV の単位") in the new editor on tests/browser/pages/studio_camera_wired.html,
// in a real browser engine: the unit marks of the inspector's H FOV box and of the Camera tab's FOV ruler head switch one
// setting between ° and mm, the Camera tab's FOV number follows, the head and the number keep their widths, a typed mm
// goes into the state as degrees unrounded, and the choice is kept per browser.

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
const boxUnit = (page) => hfovBox(page).locator('[data-part="unit"]');
const rulerValue = (page) => page.locator('[data-ruler="FOV"] [data-ruler-value]');
const rulerUnit = (page) => rulerValue(page).locator('[data-part="unit"]');
const fovNumber = (page) => page.locator('[data-action="fov"]');
const width = (locator) => locator.evaluate((el) => el.getBoundingClientRect().width);

test("the box's and the ruler head's unit marks switch one setting; the FOV number follows; widths stay", async ({ page }) => {
  const problems = await open(page);
  const hfov = (await page.evaluate(() => window.__studio.camera())).hFOV_deg;
  const mm = await page.evaluate(async (deg) => {
    const { fovToFocalMm } = await import("/web_src/pano_lens.js");
    const { formatFocalMm } = await import("/web_src/studio/camera_ui.js");
    return formatFocalMm(fovToFocalMm(deg, 1));
  }, hfov);
  await expect(boxUnit(page)).toHaveText("°");
  const headWidth = await width(rulerValue(page));
  const numberWidth = await width(fovNumber(page));

  await rulerUnit(page).click();
  await expect(boxUnit(page)).toHaveText("mm");
  await expect(hfovBox(page).locator(".pano-studio-field-value")).toHaveText(mm);
  await expect(rulerValue(page)).toHaveText(`${mm}mm`);
  await expect(fovNumber(page)).toHaveText(`${mm}mm`);
  expect(await width(rulerValue(page))).toBe(headWidth);
  expect(await page.evaluate(() => window.__studio.setting("PanoramaSuite.Studio.FovUnit"))).toBe("mm");
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
    const number = document.querySelector('[data-action="fov"] .pano-studio-fov-num');
    return { head: [head.scrollWidth, head.clientWidth], number: number.getBoundingClientRect().width };
  });
  expect(fits.head[0]).toBeLessThanOrEqual(fits.head[1]);
  console.log(`head ${headWidth}px, number deg ${numberWidth}px, mm ${fits.number}px`);
  await page.evaluate(() => window.__studio.session.undo?.());

  // The 3D tab's number is the view's FOV, in degrees whatever the unit.
  await page.locator('[role="tablist"] button', { hasText: "3D" }).click();
  await expect(fovNumber(page)).toHaveText(/^\d+°$/);
  await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();

  await boxUnit(page).click();
  await expect(rulerValue(page)).toHaveText(/°$/);
  await expect(fovNumber(page)).toHaveText(/°$/);
  expect(problems).toEqual([]);
});

test("a typed mm goes into fov as degrees, unrounded; the unit kept from before opens in mm", async ({ page }) => {
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
  await expect(box.locator(".pano-studio-field-value")).toHaveText("400");
  expect(problems).toEqual([]);
});

test("Panorama mode grays the unit marks with their rows; a locked Camera's still switch", async ({ page }) => {
  const problems = await open(page, "aspect=16:9&mode=panorama");
  await expect(boxUnit(page)).toHaveAttribute("aria-disabled", "true");
  await expect(rulerUnit(page)).toHaveAttribute("aria-disabled", "true");
  // A grayed mark leaves the tooltip to its row's reason (nothing to press says nothing about pressing).
  await expect(boxUnit(page)).not.toHaveAttribute("data-tip", /.+/);
  await expect(rulerUnit(page)).not.toHaveAttribute("data-tip", /.+/);
  const before = await boxUnit(page).textContent();
  await rulerUnit(page).click({ force: true });
  await expect(boxUnit(page)).toHaveText(before);

  await open(page, "aspect=16:9&mode=frame&locked=1");
  await expect(rulerUnit(page)).not.toHaveAttribute("aria-disabled", "true");
  const unit = await rulerUnit(page).textContent();
  await rulerUnit(page).click();
  await expect(rulerUnit(page)).not.toHaveText(unit);
  // The box sits in the locked row (aria-disabled), so the press is forced past Playwright's check of its ancestors.
  await boxUnit(page).click({ force: true });
  await expect(rulerUnit(page)).toHaveText(unit);
  expect(problems).toEqual([]);
});
