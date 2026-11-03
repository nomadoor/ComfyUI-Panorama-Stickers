import { expect, test } from "@playwright/test";

// docs/space-and-view.md "オービットの中心の印", "Set orbit center", "開いたときの視点と Reset View" (ADR 0058): the orbit
// center's mark on the stage's overlay (Alt, a hover on the orbit knob or on Set orbit center, an orbit, a double click),
// the Set orbit center button and its wait, and Reset View, on tests/browser/pages/studio_editor.html,
// studio_camera_wired.html and preview_window.html in a real browser engine.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  return problems;
}

async function open(page) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/tests/browser/pages/studio_editor.html");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  return { problems, stage: page.locator("[data-stage-canvas]") };
}

// The most opaque overlay pixel within `r` CSS px of the stage's (x, y) (CSS px from the stage's corner; default its
// middle), and how many pixels are drawn on the whole overlay.
const overlayAt = (page, at = null, r = 14) => page.evaluate(({ at, r }) => {
  const canvas = document.querySelector("[data-stage-overlay]");
  const ratio = canvas.width / canvas.getBoundingClientRect().width;
  const g = canvas.getContext("2d");
  const all = g.getImageData(0, 0, canvas.width, canvas.height).data;
  let drawn = 0;
  for (let i = 3; i < all.length; i += 4) if (all[i] > 0) drawn += 1;
  const cx = at ? at.x * ratio : canvas.width / 2;
  const cy = at ? at.y * ratio : canvas.height / 2;
  const box = g.getImageData(Math.round(cx - r * ratio), Math.round(cy - r * ratio), Math.round(2 * r * ratio), Math.round(2 * r * ratio)).data;
  let alpha = 0;
  for (let i = 3; i < box.length; i += 4) alpha = Math.max(alpha, box[i]);
  return { alpha, drawn };
}, { at, r });


test("Alt and a hover on the orbit knob show the mark at T, with no line at the top", async ({ page }) => {
  const { problems, stage } = await open(page);
  const box = await stage.boundingBox();
  await page.mouse.move(box.x + box.width * 0.3, box.y + box.height * 0.3);
  expect((await overlayAt(page)).drawn).toBe(0);
  await page.keyboard.down("Alt");
  // The first T is on the screen center's line: the mark is in the middle.
  await expect.poll(async () => (await overlayAt(page)).alpha).toBeGreaterThan(150);
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0);
  await page.keyboard.up("Alt");
  await expect.poll(async () => (await overlayAt(page)).drawn).toBe(0);

  await page.locator('[data-knob="orbit"]').hover();
  await expect.poll(async () => (await overlayAt(page)).alpha).toBeGreaterThan(150);
  await page.mouse.move(box.x + box.width * 0.3, box.y + box.height * 0.3);
  await expect.poll(async () => (await overlayAt(page)).drawn).toBe(0);
  expect(problems).toEqual([]);
});

test("Set orbit center: hover shows the mark, a press waits (lit, crosshair), a click sets T there; Escape cancels", async ({ page }) => {
  const { problems, stage } = await open(page);
  const box = await stage.boundingBox();
  const mid = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  const button = page.locator('[data-action="orbit-center"]');
  await expect(button).toHaveAttribute("data-tip", "Set orbit center · or double-click a spot");
  await button.hover();
  await expect.poll(async () => (await overlayAt(page)).alpha).toBeGreaterThan(150);
  await button.click();
  // Waiting: not the lit fill but the waiting state, and the top line says what to do.
  await expect(button).toHaveClass(/is-waiting/);
  await expect(button).not.toHaveClass(/is-lit/);
  await expect(button).toHaveAttribute("data-tip", "Click a spot to orbit around · Esc to cancel");
  await expect(page.locator(".pano-studio-notice")).toHaveText(/Click a spot to orbit around · Esc to cancel/);
  await page.mouse.move(mid.x + 100, mid.y + 150);
  await expect.poll(() => stage.evaluate((el) => getComputedStyle(el.closest(".pano-studio-stage") ?? el).cursor + "|" + getComputedStyle(el).cursor)).toContain("crosshair");
  // Waiting, the mark stays at T (the middle) though the pointer left the button.
  expect((await overlayAt(page)).alpha).toBeGreaterThan(150);
  // Escape cancels: nothing moves, the button goes out.
  await page.keyboard.press("Escape");
  await expect(button).not.toHaveClass(/is-waiting/);
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0);
  await expect.poll(async () => (await overlayAt(page)).drawn).toBe(0);
  expect(await page.evaluate(() => !!document.querySelector(".pano-studio-editor"))).toBe(true);

  // Press, then click the ground below the middle: T goes there and the view turns to it; the mark fades.
  await button.click();
  await page.mouse.click(mid.x + 120, mid.y + 200);
  await expect(button).not.toHaveClass(/is-waiting/);
  await expect.poll(async () => (await overlayAt(page)).drawn, { timeout: 500 }).toBeGreaterThan(0);
  await expect.poll(async () => (await overlayAt(page)).alpha, { timeout: 1500, intervals: [30] }).toBeGreaterThan(100);
  await expect.poll(async () => (await overlayAt(page)).alpha, { timeout: 3000 }).toBe(0);
  // The click did not select or look around: the view only turned to the spot (one eased move).
  expect(problems).toEqual([]);
});

test("an Alt drag shows the mark while it orbits; a double click shows it at the new T and it fades", async ({ page }) => {
  const { problems, stage } = await open(page);
  const box = await stage.boundingBox();
  const mid = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  await page.mouse.move(mid.x, mid.y);
  await page.keyboard.down("Alt");
  await page.mouse.down();
  await page.mouse.move(mid.x + 40, mid.y + 5, { steps: 4 });
  await page.keyboard.up("Alt");
  // Alt let go during the drag: the orbit goes on, and so does the mark.
  await page.mouse.move(mid.x + 80, mid.y + 10, { steps: 4 });
  expect((await overlayAt(page)).alpha).toBeGreaterThan(150);
  await page.mouse.up();
  await expect.poll(async () => (await overlayAt(page)).alpha).toBe(0);

  // A double click on the ground below the middle: T goes there and the view turns to it; the mark shows, then fades.
  await page.mouse.dblclick(mid.x + 120, mid.y + 200);
  // Right after the click the mark is on the clicked world point, carried toward the middle with the view: it shows,
  // but not at the old T in the middle (it does not slide from there).
  let first = await overlayAt(page, null, 14);
  for (let i = 0; i < 30 && !first.drawn; i += 1) first = await overlayAt(page, null, 14);
  expect(first.drawn).toBeGreaterThan(0);
  expect(first.alpha).toBe(0);
  // The turn ends with T and its mark in the middle.
  await expect.poll(async () => (await overlayAt(page)).alpha, { timeout: 1500, intervals: [30] }).toBeGreaterThan(100);
  // Gone after the fade (the Camera's mark at the origin may show elsewhere on the overlay once the orbit moved the view).
  await expect.poll(async () => (await overlayAt(page)).alpha, { timeout: 3000 }).toBe(0);
  expect(problems).toEqual([]);
});

// The summed overlay alpha within `r` CSS px of the stage's (x, y).
const overlaySum = (page, at, r = 12) => page.evaluate(({ at, r }) => {
  const canvas = document.querySelector("[data-stage-overlay]");
  const ratio = canvas.width / canvas.getBoundingClientRect().width;
  const box = canvas.getContext("2d").getImageData(Math.round((at.x - r) * ratio), Math.round((at.y - r) * ratio), Math.round(2 * r * ratio), Math.round(2 * r * ratio)).data;
  let sum = 0;
  for (let i = 3; i < box.length; i += 4) sum += box[i];
  return sum;
}, { at, r });

test("the Camera tab's Frame view shows the mark at the Camera's T while Alt is held; Set orbit center is off there", async ({ page }) => {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto("/tests/browser/pages/studio_camera_wired.html?aspect=16:9&mode=frame");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();
  await expect(page.locator("[data-frame-box]")).toHaveCount(1);
  await page.waitForTimeout(400);
  const frame = await page.locator("[data-frame-box]").evaluate((el) => {
    const stage = document.querySelector("[data-stage-canvas]").getBoundingClientRect();
    const r = el.getBoundingClientRect();
    return { x: r.left - stage.left + r.width / 2, y: r.top - stage.top + r.height / 2 };
  });
  const before = await overlaySum(page, frame);
  await page.keyboard.down("Alt");
  await expect.poll(() => overlaySum(page, frame)).toBeGreaterThan(before + 2000);
  await page.keyboard.up("Alt");
  await expect.poll(() => overlaySum(page, frame)).toBe(before);
  const button = page.locator('[data-action="orbit-center"]');
  await expect(button).toHaveAttribute("aria-disabled", "true");
  await expect(button).toHaveAttribute("data-tip", "Not available in the Camera view");
  expect(problems).toEqual([]);
});

test("Reset View goes to the World origin, level, yaw 0, not to the Camera the view opened at", async ({ page }) => {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto("/tests/browser/pages/studio_camera_wired.html?aspect=16:9&mode=frame");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  const pose = () => page.evaluate(() => window.__studio.stage().pose());
  // The view opens at the Camera's output view, away from the origin.
  expect(Math.hypot(...(await pose()).position)).toBeGreaterThan(0.2);
  await page.locator('[data-action="reset-view"]').click();
  await expect.poll(async () => Math.hypot(...(await pose()).position), { timeout: 3000 }).toBeLessThan(1e-6);
  const reset = await pose();
  expect(Math.abs(reset.yaw_deg)).toBeLessThan(1e-6);
  expect(Math.abs(reset.pitch_deg)).toBeLessThan(1e-6);
  expect(problems).toEqual([]);
});

test("while Set orbit center waits, a view drag takes Escape first, the wait the next one; a blur and a tab change cancel it", async ({ page }) => {
  const { problems, stage } = await open(page);
  const box = await stage.boundingBox();
  const mid = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  const button = page.locator('[data-action="orbit-center"]');
  await button.click();
  await expect(button).toHaveClass(/is-waiting/);
  // A right drag still looks around while it waits; Escape during it gives the drag up, and the wait goes on.
  await page.mouse.move(mid.x, mid.y);
  await page.mouse.down({ button: "right" });
  await page.mouse.move(mid.x + 40, mid.y, { steps: 3 });
  await page.keyboard.press("Escape");
  await expect(button).toHaveClass(/is-waiting/);
  await page.mouse.up({ button: "right" });
  await page.keyboard.press("Escape");
  await expect(button).not.toHaveClass(/is-waiting/);
  // The editor is still open (that Escape was the wait's).
  await expect(page.locator(".pano-studio-editor")).toHaveCount(1);
  // A blur cancels the wait.
  await button.click();
  await page.evaluate(() => window.dispatchEvent(new Event("blur")));
  await expect(button).not.toHaveClass(/is-waiting/);
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0);
  // A tab change cancels it; the button is off in the Camera tab.
  await button.click();
  await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();
  await expect(button).not.toHaveClass(/is-waiting/);
  await expect(button).toHaveAttribute("aria-disabled", "true");
  expect(problems).toEqual([]);
});

test("with a painting tool chosen, the wait's press sets T and draws no stroke; a double click does not set T", async ({ page }) => {
  const { problems, stage } = await open(page);
  const box = await stage.boundingBox();
  const mid = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  await page.locator('[data-tool="paint"]').click();
  // A stroke would be an edit: Undo would turn on.
  const undo = page.locator('[data-tool="undo"]');
  await expect(undo).toHaveAttribute("aria-disabled", "true");
  const button = page.locator('[data-action="orbit-center"]');
  await button.click();
  // (Clear of the paint bar at the bottom center.)
  await page.mouse.move(mid.x + 80, mid.y + 110);
  await page.mouse.down();
  await page.mouse.move(mid.x + 120, mid.y + 130, { steps: 4 });
  await page.mouse.up();
  await expect(button).not.toHaveClass(/is-waiting/);
  // The view turns to the spot (its mark comes to the middle) and no stroke was drawn.
  await page.mouse.move(5, 5);
  await expect.poll(async () => (await overlayAt(page)).alpha, { timeout: 1500, intervals: [30] }).toBeGreaterThan(100);
  await expect(undo).toHaveAttribute("aria-disabled", "true");
  await expect.poll(async () => (await overlayAt(page)).alpha, { timeout: 3000 }).toBe(0);
  // A double click with Paint chosen paints as two presses and does not set T: no mark comes to the middle.
  await page.mouse.dblclick(mid.x - 90, mid.y + 100);
  await page.mouse.move(5, 5);
  await page.waitForTimeout(500);
  expect((await overlayAt(page)).alpha).toBe(0);
  expect(problems).toEqual([]);
});

test("the Preview window has Set orbit center: its wait line at the top center, the mark, and a click that sets T", async ({ page }) => {
  const problems = [];
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto("/tests/browser/pages/preview_window.html");
  await page.waitForFunction(() => window.__preview?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__preview.open())).toBe(true);
  await expect.poll(() => page.evaluate(() => window.__preview.sample()), { timeout: 20_000 }).toBeGreaterThan(20);
  const stage = page.locator("[data-stage-canvas]");
  const box = await stage.boundingBox();
  const mid = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  // No line at the top until it waits.
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0);
  const button = page.locator('[data-action="orbit-center"]');
  await button.click();
  await expect(button).toHaveClass(/is-waiting/);
  await expect(page.locator(".pano-studio-notice")).toHaveText(/Click a spot to orbit around · Esc to cancel/);
  await expect.poll(async () => (await overlayAt(page)).alpha).toBeGreaterThan(150);
  // Escape cancels the wait and leaves the window open; the next Escape closes it.
  await page.keyboard.press("Escape");
  await expect(button).not.toHaveClass(/is-waiting/);
  await expect(page.locator("[data-preview-window]")).toHaveCount(1);
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0);
  // A click on the ground below the middle sets T there: the mark shows and ends in the middle.
  await button.click();
  await page.mouse.click(mid.x + 100, mid.y + 220);
  await expect(button).not.toHaveClass(/is-waiting/);
  await expect.poll(async () => (await overlayAt(page)).alpha, { timeout: 1500, intervals: [30] }).toBeGreaterThan(100);
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
  expect(problems).toEqual([]);
});
