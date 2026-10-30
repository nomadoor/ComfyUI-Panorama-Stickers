import { expect, test } from "@playwright/test";

// The new Preview window (docs/studio-ui.md "Preview のウィンドウ") on tests/browser/pages/preview_window.html: an
// IMAGE source fills the stage; a VIDEO source plays and seeks under the playback strip; ✕ and Escape close it; its
// keys do not reach ComfyUI's listeners behind it.

async function open(page, query = "") {
  const problems = [];
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/preview_window.html${query}`);
  await page.waitForFunction(() => window.__preview?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__preview.error)).toBeNull();
  expect(await page.evaluate(() => window.__preview.open())).toBe(true);
  await expect(page.locator("[data-preview-window]")).toHaveCount(1);
  return problems;
}

test("an IMAGE source fills the stage, with no inspector, timeline or rail", async ({ page }) => {
  const problems = await open(page);
  await expect.poll(() => page.evaluate(() => window.__preview.sample()), { timeout: 20_000 }).toBeGreaterThan(20);
  await expect(page.locator("[data-region=inspector], [data-region=timeline], .pano-studio-at-rail")).toHaveCount(0);
  await expect(page.locator("[data-action=close]")).toBeVisible();
  await expect(page.locator("[data-action=reset-view]")).toBeVisible();
  await expect(page.locator("[data-action=grid]")).toBeVisible();
  await expect(page.locator("[data-action=fullscreen]")).toBeVisible();
  if (process.env.PREVIEW_SHOT) await page.screenshot({ path: process.env.PREVIEW_SHOT });
  expect(problems).toEqual([]);
});

test("✕ closes the window", async ({ page }) => {
  await open(page);
  await page.locator("[data-action=close]").click();
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
});

test("Escape closes the window and no key reaches ComfyUI behind it", async ({ page }) => {
  await open(page);
  await page.locator("[data-stage-canvas]").click({ position: { x: 300, y: 300 } });
  await page.evaluate(() => (window.__comfy.length = 0));
  await page.keyboard.press("w");
  await page.keyboard.press("Delete");
  expect(await page.evaluate(() => window.__comfy)).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
});

test("a VIDEO source: the strip plays and seeks, and the frame on the stage follows", async ({ page }) => {
  const problems = await open(page, "?video");
  await expect(page.locator("[data-region=playback]")).toBeVisible();
  await expect.poll(() => page.evaluate(() => window.__preview.playback().frames), { timeout: 20_000 }).toBeGreaterThan(10);
  await expect.poll(() => page.evaluate(() => window.__preview.sample()), { timeout: 20_000 }).toBeGreaterThan(5);
  const dark = await page.evaluate(() => window.__preview.sample());
  // Seek near the end: the frame and the picture move (the gray grows lighter over the VIDEO).
  const last = await page.evaluate(() => window.__preview.playback().frames - 2);
  await page.locator("[data-seek]").fill(String(last));
  await expect.poll(() => page.evaluate(() => window.__preview.playback().frame), { timeout: 10_000 }).toBe(last);
  await expect.poll(() => page.evaluate(() => window.__preview.sample()), { timeout: 10_000 }).toBeGreaterThan(dark + 20);
  await expect(page.locator("[data-time]")).toContainText("/ 0:0");
  // Play from the start: the frame advances.
  await page.locator("[data-seek]").fill("0");
  await expect.poll(() => page.evaluate(() => window.__preview.playback().frame), { timeout: 10_000 }).toBe(0);
  await page.locator("[data-action=play]").click();
  await expect.poll(() => page.evaluate(() => window.__preview.playback().frame), { timeout: 10_000 }).toBeGreaterThan(5);
  await page.locator("[data-action=play]").click();
  await expect.poll(() => page.evaluate(() => window.__preview.playback().playing)).toBe(false);
  if (process.env.PREVIEW_SHOT_VIDEO) await page.screenshot({ path: process.env.PREVIEW_SHOT_VIDEO });
  await page.locator("[data-action=close]").click();
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
  await expect(page.locator("video")).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("a PANO_SCENE source: its objects draw read-only over its background, and the strip seeks its Timeline", async ({ page }) => {
  const problems = await open(page, "?scene");
  // The red board ahead at the center, the blue upstream background above.
  await expect.poll(async () => {
    const { center } = await page.evaluate(() => window.__preview.colors());
    return center[0] > 150 && center[1] < 90 && center[2] < 90;
  }, { timeout: 20_000 }).toBe(true);
  await expect.poll(async () => {
    const { top } = await page.evaluate(() => window.__preview.colors());
    return top[2] > top[0] + 40;
  }, { timeout: 20_000 }).toBe(true);
  await expect(page.locator("[data-region=playback]")).toBeVisible();
  expect(await page.evaluate(() => window.__preview.playback().frames)).toBe(48);
  await page.locator("[data-seek]").fill("30");
  await expect.poll(() => page.evaluate(() => window.__preview.playback().frame)).toBe(30);
  // Nothing is selected or edited: a click on the board keeps it as it is and no gizmo or selection bar shows.
  await page.locator("[data-stage-canvas]").click({ position: { x: 568, y: 345 } });
  await expect(page.locator(".pano-studio-at-bar, [data-region=inspector]")).toHaveCount(0);
  if (process.env.PREVIEW_SHOT_SCENE) await page.screenshot({ path: process.env.PREVIEW_SHOT_SCENE });
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
  expect(problems).toEqual([]);
});

// docs/space-and-view.md "Preview のウィンドウ": the grid starts hidden; a drag let go while moving coasts, a press stops it.
test("the grid starts hidden, and a look drag let go while moving coasts until a press stops it", async ({ page }) => {
  const problems = await open(page);
  await expect(page.locator("[data-action=grid]")).toHaveAttribute("aria-checked", "false");
  await expect.poll(() => page.evaluate(() => window.__preview.sample()), { timeout: 20_000 }).toBeGreaterThan(20);
  const canvas = page.locator("[data-stage-canvas]");
  const box = await canvas.boundingBox();
  const y = box.y + box.height / 2;
  // The drag is sent in the page at 10 ms a move, so a slow headless frame does not separate the last moves from the
  // release (ADR 0010 measures the speed over the last 80 ms).
  await page.evaluate(async ({ x, y }) => {
    const target = document.querySelector("[data-stage-canvas]");
    const send = (type, clientX, buttons) => target.dispatchEvent(new PointerEvent(type, { bubbles: true, pointerId: 1, pointerType: "mouse", isPrimary: true, button: 0, buttons, clientX, clientY: y }));
    send("pointerdown", x, 1);
    for (let i = 1; i <= 8; i += 1) {
      await new Promise((resolve) => setTimeout(resolve, 10));
      send("pointermove", x - i * 30, 1);
    }
    send("pointerup", x - 240, 0);
  }, { x: box.x + 700, y });
  const released = await page.evaluate(() => window.__preview.pose().yaw_deg);
  await page.waitForTimeout(150);
  const later = await page.evaluate(() => window.__preview.pose().yaw_deg);
  expect(Math.abs(later - released)).toBeGreaterThan(0.5);
  await page.mouse.move(box.x + 700, y);
  // A press stops it where it is.
  await page.mouse.down();
  const stopped = await page.evaluate(() => window.__preview.pose().yaw_deg);
  await page.waitForTimeout(150);
  expect(await page.evaluate(() => window.__preview.pose().yaw_deg)).toBeCloseTo(stopped, 6);
  await page.mouse.up();
  // A drag held still before it is let go does not coast.
  await page.mouse.move(box.x + 500, y);
  await page.mouse.down();
  await page.mouse.move(box.x + 400, y);
  await page.waitForTimeout(200);
  await page.mouse.up();
  const held = await page.evaluate(() => window.__preview.pose().yaw_deg);
  await page.waitForTimeout(150);
  expect(await page.evaluate(() => window.__preview.pose().yaw_deg)).toBeCloseTo(held, 6);
  expect(problems).toEqual([]);
});

test("an IMAGE opens at the node's yaw and pitch and hands them back on close, keeping the node's FOV", async ({ page }) => {
  await open(page, "?handoff");
  const pose = await page.evaluate(() => window.__preview.pose());
  expect(pose.position).toEqual([0, 0, 0]);
  expect(pose.yaw_deg).toBeCloseTo(30, 6);
  expect(pose.pitch_deg).toBeCloseTo(5, 6);
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
  const view = await page.evaluate(() => window.__preview.runtimeView());
  expect(view.yaw).toBeCloseTo(30, 6);
  expect(view.fov).toBe(70);
  expect(await page.evaluate(() => window.__preview.told)).toContain("draw");
});

test("a Scene opens at the node viewer's view and playhead, stops the node meanwhile, and hands both back", async ({ page }) => {
  const problems = await open(page, "?scene&handoff");
  const pose = await page.evaluate(() => window.__preview.pose());
  expect(pose.position).toEqual([0.5, 0, 1]);
  expect(pose.yaw_deg).toBeCloseTo(40, 6);
  expect(pose.pitch_deg).toBeCloseTo(-10, 6);
  // The node was playing: the window goes on playing from its frame, and the node rests and does not draw.
  let record = await page.evaluate(() => window.__preview.record());
  expect(record.windowOpen).toBe(true);
  expect(record.playing).toBe(false);
  expect(await page.evaluate(() => window.__preview.told)).toEqual(["rest"]);
  expect(await page.evaluate(() => window.__preview.playback().playing)).toBe(true);
  await expect.poll(() => page.evaluate(() => window.__preview.playback().frame)).toBeGreaterThan(12);
  // Space pauses it; the frame stays.
  await page.locator("[data-stage-canvas]").click({ position: { x: 300, y: 300 } });
  await page.keyboard.press("Space");
  await expect.poll(() => page.evaluate(() => window.__preview.playback().playing)).toBe(false);
  const frame = await page.evaluate(() => window.__preview.playback().frame);
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
  record = await page.evaluate(() => window.__preview.record());
  expect(record.windowOpen).toBe(false);
  expect(record.frame).toBe(frame);
  expect(record.playing).toBe(false);
  expect(record.view.viewPosition).toEqual([0.5, 0, 1]);
  expect(record.view.viewYaw).toBeCloseTo(40, 6);
  expect(await page.evaluate(() => window.__preview.told)).toEqual(["rest", "activate"]);
  expect(problems).toEqual([]);
});

// docs/studio-ui.md "Preview のウィンドウ": Space as in the editor.
test("Space plays and pauses; not with Ctrl", async ({ page }) => {
  await open(page, "?scene");
  await page.locator("[data-stage-canvas]").click({ position: { x: 300, y: 300 } });
  await page.keyboard.press("Space");
  await expect.poll(() => page.evaluate(() => window.__preview.playback().playing)).toBe(true);
  await page.keyboard.press("Space");
  await expect.poll(() => page.evaluate(() => window.__preview.playback().playing)).toBe(false);
  await page.keyboard.press("Control+Space");
  await page.waitForTimeout(100);
  expect(await page.evaluate(() => window.__preview.playback().playing)).toBe(false);
});

// docs/studio-ui.md "Preview のウィンドウ": a Scene's background shows inside its Clip range, its bg_color outside.
test("a Scene's background outside its Clip range shows its bg_color", async ({ page }) => {
  const problems = await open(page, "?scene&clip");
  const green = ({ top }) => top[1] > 150 && top[0] < 90 && top[2] < 90;
  const blue = ({ top }) => top[2] > top[0] + 40 && top[1] < 150;
  await expect.poll(async () => green(await page.evaluate(() => window.__preview.colors())), { timeout: 20_000 }).toBe(true);
  await page.locator("[data-seek]").fill("15");
  await expect.poll(async () => blue(await page.evaluate(() => window.__preview.colors())), { timeout: 20_000 }).toBe(true);
  await page.locator("[data-seek]").fill("25");
  await expect.poll(async () => green(await page.evaluate(() => window.__preview.colors())), { timeout: 20_000 }).toBe(true);
  expect(problems).toEqual([]);
});

// docs/studio-ui.md "Preview のウィンドウ": an IMAGE covers the node's background_range.
test("an IMAGE covers the node's background_range: with 180 the back shows no picture", async ({ page }) => {
  // ?back: the node looks back (yaw 180), so the window opens looking at the half a 180 picture does not cover.
  await open(page, "?handoff&back");
  await expect.poll(() => page.evaluate(() => window.__preview.sample()), { timeout: 20_000 }).toBeGreaterThan(20);
  const full = await page.evaluate(() => window.__preview.sample());
  await open(page, "?handoff&back&range180");
  await page.waitForTimeout(1000);
  const half = await page.evaluate(() => window.__preview.sample());
  expect(Math.abs(full - half)).toBeGreaterThan(10);
});
