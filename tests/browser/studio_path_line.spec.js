import { expect, test } from "@playwright/test";

// The Camera's path line in the new editor's 3D tab, on tests/browser/pages/studio_path_line.html in a real browser
// engine (docs/studio-ui.md "軌道の線"): it shows for the selected Camera; a press on a Keyframe point selects it and
// takes the playhead there, its drag moves that Keyframe; a double click makes it a Corner and back; a press on the line
// takes the playhead to that frame; the hints show in the top line; a handle drag makes the point Bezier.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function load(page) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("/tests/browser/pages/studio_path_line.html");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await page.waitForTimeout(300);
  return problems;
}

const keys = (page) => page.evaluate(() => window.__studio.keys());
const playhead = (page) => page.evaluate(() => Number(document.querySelector(".pano-studio-tl-frame")?.textContent?.split("/")[0]));
const selection = (page) => page.evaluate(() => window.__studio.session.selection);
const at = (page, frame) => page.evaluate((f) => window.__studio.pathAt(f), frame);

async function selectCamera(page) {
  await page.locator(".pano-studio-tl-head-name", { hasText: "Camera" }).first().click();
  expect((await selection(page)).row).toBe("camera");
  const stage = await page.locator("[data-stage-canvas]").boundingBox();
  await page.mouse.move(stage.x + 5, stage.y + 5);
  await page.waitForTimeout(150);
  return stage;
}

test("the selected Camera's path line shows; a point selects its Keyframe and takes the playhead to it", async ({ page }) => {
  const problems = await load(page);
  expect(await page.evaluate(() => window.__studio.yellowCount())).toBe(0);
  await selectCamera(page);
  expect(await page.evaluate(() => window.__studio.yellowCount())).toBeGreaterThan(200);
  const point = await at(page, 20);
  await page.mouse.move(point.x, point.y);
  await page.waitForTimeout(100);
  expect(await page.locator(".pano-studio-notice").textContent()).toContain("Click to go to this Keyframe · Double-click for Corner");
  await page.mouse.down();
  await page.mouse.up();
  await page.waitForTimeout(150);
  expect((await selection(page)).keys).toEqual([{ row: "camera", lane: "position", frame: 20 }]);
  expect(await playhead(page)).toBe(20);
  expect(problems).toEqual([]);
});

test("a point's drag moves its Keyframe, a double click makes it a Corner and back, as Undo steps", async ({ page }) => {
  const problems = await load(page);
  await selectCamera(page);
  const point = await at(page, 20);
  const before = await keys(page);
  await page.mouse.move(point.x, point.y);
  await page.mouse.down();
  await page.mouse.move(point.x + 30, point.y + 20, { steps: 6 });
  await page.mouse.up();
  await page.waitForTimeout(150);
  const moved = await keys(page);
  expect(moved[1].value).not.toEqual(before[1].value);
  expect(moved[0].value).toEqual(before[0].value);
  expect(moved.map((key) => key.frame)).toEqual([0, 20, 40]);
  // Double click on the moved point: Corner, then Auto.
  const next = await at(page, 20);
  await page.mouse.dblclick(next.x, next.y);
  await page.waitForTimeout(150);
  expect((await keys(page))[1].corner).toBe(true);
  // The playhead on that Keyframe puts the gizmo's center over the point, which takes the press (and the hover): move
  // the playhead off it along the line, then the point says what its double click does now.
  const away = await at(page, 32);
  await page.mouse.click(away.x, away.y);
  await page.mouse.move(next.x + 1, next.y);
  await page.waitForTimeout(100);
  expect(await page.locator(".pano-studio-notice").textContent()).toContain("Double-click for Auto");
  await page.mouse.dblclick(next.x, next.y);
  await page.waitForTimeout(150);
  expect((await keys(page))[1].corner).toBeUndefined();
  expect(problems).toEqual([]);
});

test("the line takes the playhead to the frame there; a handle drag makes the point Bezier", async ({ page }) => {
  const problems = await load(page);
  await selectCamera(page);
  const middle = await at(page, 30);
  await page.mouse.move(middle.x, middle.y);
  await page.waitForTimeout(100);
  expect(await page.locator(".pano-studio-notice").textContent()).toContain("Click to go to this frame");
  await page.mouse.down();
  await page.mouse.up();
  await page.waitForTimeout(150);
  expect(Math.abs((await playhead(page)) - 30)).toBeLessThanOrEqual(1);
  // Select the middle Keyframe and drag its out handle.
  const point = await at(page, 20);
  await page.mouse.click(point.x, point.y);
  await page.waitForTimeout(150);
  const handle = await page.evaluate(() => {
    const keysNow = window.__studio.keys();
    const a = keysNow[1].value;
    const b = keysNow[2].value;
    // The automatic out handle points along the bisector, about a third of the way to the next Keyframe.
    return window.__studio.at([a[0] + (b[0] - a[0]) * 0.3, a[1], a[2] + (b[2] - a[2]) * 0.3]);
  });
  // Find the handle's tip near there: the cursor turns to grab over it.
  let tip = null;
  for (let dx = -14; dx <= 14 && !tip; dx += 2) {
    for (let dy = -14; dy <= 14 && !tip; dy += 2) {
      await page.mouse.move(handle.x + dx, handle.y + dy);
      const text = await page.locator(".pano-studio-notice").textContent();
      if (text.includes("Drag to bend")) tip = { x: handle.x + dx, y: handle.y + dy };
    }
  }
  expect(tip).not.toBeNull();
  await page.mouse.down();
  await page.mouse.move(tip.x, tip.y - 30, { steps: 6 });
  await page.mouse.up();
  await page.waitForTimeout(150);
  const bent = (await keys(page))[1];
  expect(bent.handles?.out).toBeTruthy();
  expect(bent.handles?.in).toBeTruthy();
  // Lined up: the two sides point opposite ways.
  const [o, i] = [bent.handles.out, bent.handles.in];
  const cos = (o[0] * i[0] + o[1] * i[1] + o[2] * i[2]) / Math.hypot(...o) / Math.hypot(...i);
  expect(cos).toBeLessThan(-0.999);
  expect(problems).toEqual([]);
});

// docs/studio-ui.md "軌道の線": a press on a looping line's way back past the output's last frame takes the playhead to
// the same place a period earlier (CodeRabbit review: it went past the last frame).
test("a press on a looping line's way back past the last frame takes the playhead a period earlier", async ({ page }) => {
  const problems = watch(page);
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("/tests/browser/pages/studio_path_line.html?loop=1");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await page.waitForTimeout(300);
  await selectCamera(page);
  // Frame 4 is where the way back from frame 40 is at frame 52 (period 48).
  const back = await at(page, 4);
  await page.mouse.move(back.x, back.y);
  await page.waitForTimeout(100);
  await page.mouse.down();
  await page.mouse.up();
  // Inside the output (its last frame is 47) and at the pressed place a period earlier.
  await expect.poll(async () => {
    const frame = await playhead(page);
    return frame <= 47 && Math.abs(frame - 4) <= 1;
  }).toBe(true);
  expect(problems).toEqual([]);
});
