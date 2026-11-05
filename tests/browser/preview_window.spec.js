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

// The real shape after a run: the IMAGE is made upstream (no file to read), and only the node's own result has it.
test("an IMAGE made upstream shows from the node's own run result (pano_input_images)", async ({ page }) => {
  const problems = await open(page, "?processed");
  await expect.poll(() => page.evaluate(() => window.__preview.sample()), { timeout: 20_000 }).toBeGreaterThan(20);
  expect(problems).toEqual([]);
});

test("✕ closes the window", async ({ page }) => {
  await open(page);
  await page.locator("[data-action=close]").click();
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
});

test("an opening that throws leaves nothing behind, and the window opens again", async ({ page }) => {
  await open(page);
  await page.evaluate(() => window.__preview.close());
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
  const before = await page.evaluate(() => document.body.childElementCount);
  for (const where of ["early", "late"]) {
    expect(await page.evaluate((at) => window.__preview.openBroken(at), where)).toBe(where === "early" ? "broken title" : "broken hand-over");
    await expect(page.locator("[data-preview-window]")).toHaveCount(0);
    // The node's display that was told the window opens (it may have paused its VIDEO) is told it closed.
    expect(await page.evaluate(() => window.__preview.told.splice(0))).toEqual(where === "early" ? [] : [["closed", {}]]);
    expect(await page.evaluate(() => document.body.childElementCount)).toBe(before);
    expect(await page.evaluate(() => window.__preview.open())).toBe(true);
    await expect(page.locator("[data-preview-window]")).toHaveCount(1);
    await page.evaluate(() => window.__preview.close());
    await expect(page.locator("[data-preview-window]")).toHaveCount(0);
  }
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

// docs/space-and-view.md "Preview のウィンドウ" (the grids start shown, ADR 0058); a drag let go while moving coasts, a press stops it.
test("the grid starts shown, and a look drag let go while moving coasts until a press stops it", async ({ page }) => {
  const problems = await open(page);
  await expect(page.locator("[data-action=grid]")).toHaveAttribute("aria-checked", "true");
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

// ADR 0061: the FOV goes to the window and back too.
test("an IMAGE opens at the node's yaw, pitch and FOV and hands them back on close", async ({ page }) => {
  await open(page, "?handoff");
  const pose = await page.evaluate(() => window.__preview.pose());
  expect(pose.position).toEqual([0, 0, 0]);
  expect(pose.yaw_deg).toBeCloseTo(30, 6);
  expect(pose.pitch_deg).toBeCloseTo(5, 6);
  expect(pose.hFOV_deg).toBe(70);
  await expect(page.locator("[data-action=fov]")).toHaveText("70°");
  // Zoomed in the window, the node takes the window's FOV.
  await page.evaluate(() => document.querySelector("[data-stage-canvas]").dispatchEvent(new WheelEvent("wheel", { deltaY: -100, altKey: true, bubbles: true, cancelable: true })));
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
  const view = await page.evaluate(() => window.__preview.runtimeView());
  expect(view.yaw).toBeCloseTo(30, 6);
  expect(view.fov).toBe(68);
  expect(await page.evaluate(() => window.__preview.told)).toContain("draw");
});

test("a Scene opens at the node viewer's view and playhead, stops the node meanwhile, and hands both back", async ({ page }) => {
  const problems = await open(page, "?scene&handoff");
  const pose = await page.evaluate(() => window.__preview.pose());
  expect(pose.position).toEqual([0.5, 0, 1]);
  expect(pose.yaw_deg).toBeCloseTo(40, 6);
  expect(pose.pitch_deg).toBeCloseTo(-10, 6);
  expect(pose.hFOV_deg).toBe(100);
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
  expect(record.view.viewFov).toBe(100);
  expect(await page.evaluate(() => window.__preview.told)).toEqual(["rest", "activate"]);
  expect(problems).toEqual([]);
});

// docs/studio-ui.md "Preview のウィンドウ": an IMAGE / VIDEO source's VIDEO on the node stops while the window is open
// and hands its playhead over and back, as a Scene's node viewer does.
test("a VIDEO on the node stops while the window is open, the window goes on from it, and hands its playhead back", async ({ page }) => {
  const problems = await open(page, "?video&handoff");
  // The node was playing: it stops at once, and the window plays on from the node's frame.
  expect(await page.evaluate(() => window.__preview.told)).toEqual(["opened"]);
  expect(await page.evaluate(() => window.__preview.handedOver.playing)).toBe(true);
  expect(await page.evaluate(() => window.__preview.nodeVideo().paused)).toBe(true);
  const handedFrame = await page.evaluate(() => Math.floor(window.__preview.handedOver.time * 30 + 1e-3));
  expect(await page.evaluate(() => window.__preview.playback().playing)).toBe(true);
  const firstFrame = await page.evaluate(() => window.__preview.playback().frame);
  expect(Math.abs(firstFrame - handedFrame)).toBeLessThanOrEqual(2);
  // While the window plays, the node stays where it stopped.
  const nodeTime = await page.evaluate(() => window.__preview.nodeVideo().time);
  await page.waitForTimeout(300);
  expect(await page.evaluate(() => window.__preview.nodeVideo())).toEqual({ time: nodeTime, paused: true });
  // Paused and sought in the window: closing hands that frame back, paused.
  await page.locator("[data-stage-canvas]").click({ position: { x: 300, y: 300 } });
  await page.keyboard.press("Space");
  await expect.poll(() => page.evaluate(() => window.__preview.playback().playing)).toBe(false);
  await page.locator("[data-seek]").fill("40");
  await expect.poll(() => page.evaluate(() => window.__preview.playback().frame), { timeout: 10_000 }).toBe(40);
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
  expect(await page.evaluate(() => window.__preview.told)).toEqual(["opened", "closed"]);
  const back = await page.evaluate(() => window.__preview.nodeVideo());
  expect(back.paused).toBe(true);
  expect(back.time).toBeCloseTo(40 / 30, 3);
  // Opened again and closed while playing: the node plays on.
  expect(await page.evaluate(() => window.__preview.open())).toBe(true);
  await page.locator("[data-action=play]").click();
  await expect.poll(() => page.evaluate(() => window.__preview.playback().playing)).toBe(true);
  await page.locator("[data-action=close]").click();
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
  await expect.poll(() => page.evaluate(() => window.__preview.nodeVideo().paused)).toBe(false);
  expect(problems).toEqual([]);
});

// docs/studio-ui.md "Preview のウィンドウ": the "?" list has the window's keys only (shortcuts.js context "preview").
test("the window's shortcut list has no selection or editing rows", async ({ page }) => {
  await open(page, "?video");
  await page.locator("[data-action=shortcuts]").click();
  const list = page.locator("[data-shortcut-group]");
  await expect(list.first()).toBeVisible();
  expect(await list.evaluateAll((groups) => groups.map((group) => group.dataset.shortcutGroup))).toEqual(["view", "playback", "editor"]);
  const text = await page.locator(".pano-studio-shortcuts-rows").allInnerTexts();
  for (const label of ["Select", "Add to selection", "Delete", "Undo", "Copy keyframes"]) expect(text.join("\n")).not.toContain(label);
  expect(text.join("\n")).toContain("Play / pause");
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

// docs/timeline-ui.md \"どの背景を出すか\" (web_src/pano_background_choice.js): the window's background as it is now. Where it differs
// from another view's, aligning them is an open owner decision; change these only with that decision.
test("as it is: a Scene without a background or a bg_color shows black", async ({ page }) => {
  const problems = await open(page, "?scene&nocolor");
  // Black, not the stage's clear color (0x070707), which shows where nothing is drawn.
  const black = ({ top }) => top.every((value) => value <= 2);
  await page.waitForTimeout(1000);
  await expect.poll(async () => black(await page.evaluate(() => window.__preview.colors())), { timeout: 20_000 }).toBe(true);
  expect(problems).toEqual([]);
});

test("as it is: background_range changed while the window is open applies on the next draw", async ({ page }) => {
  await open(page, "?handoff&back");
  await expect.poll(() => page.evaluate(() => window.__preview.sample()), { timeout: 20_000 }).toBeGreaterThan(20);
  const full = await page.evaluate(() => window.__preview.sample());
  await page.evaluate(() => window.__preview.setRange("180"));
  await page.setViewportSize({ width: 1400, height: 860 });
  await expect.poll(async () => Math.abs(full - await page.evaluate(() => window.__preview.sample())), { timeout: 20_000 }).toBeGreaterThan(10);
});

// docs/studio-ui.md "Preview のウィンドウ" and docs/space-and-view.md "寄る" (ADR 0061): the View group has the FOV number
// and its reset, Reset View (off at the start view), the grid and Fullscreen, no Frame Selected; Alt + wheel zooms at
// once (not damped), and Reset View brings the FOV back.
test("the window's View group: the FOV number zooms with Alt + wheel at once, and Reset View brings it back", async ({ page }) => {
  const problems = await open(page);
  const number = page.locator("[data-action=fov]");
  await expect(number).toHaveText("100°");
  await expect(page.locator("[data-action=frame-selected]")).toHaveCount(0);
  await expect(page.locator("[data-action=reset-view]")).toHaveAttribute("aria-disabled", "true");
  const order = await page.locator(".pano-studio-at-buttons [data-action]").evaluateAll((list) => list.map((el) => el.getAttribute("data-action")));
  expect(order).toEqual(["fov", "fov-reset", "reset-view", "grid", "fullscreen"]);
  const canvas = page.locator("[data-stage-canvas]");
  const box = await canvas.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  // Alt held: the number lights, as it changes with Alt + wheel (docs/space-and-view.md "寄る").
  await expect(number).not.toHaveClass(/is-lit/);
  await page.keyboard.down("Alt");
  await expect(number).toHaveClass(/is-lit/);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.keyboard.up("Alt");
  await expect(number).not.toHaveClass(/is-lit/);
  expect((await page.evaluate(() => window.__preview.pose())).hFOV_deg).toBe(96);
  await expect(number).toHaveText("96°");
  await page.locator("[data-action=reset-view]").click();
  await expect(number).toHaveText("100°");
  await expect(page.locator("[data-action=reset-view]")).toHaveAttribute("aria-disabled", "true");
  expect(problems).toEqual([]);
});

// docs/space-and-view.md "Sky だけのときのホイール" (ADR 0061): an IMAGE has no World content: a wheel step moves the view
// and the top line says Sky only (info) for BOUND_NOTICE_SECONDS; Alt + wheel says nothing. With nothing linked to
// `source` there is nothing to zoom into and nothing is said.
test("a wheel step over an IMAGE says Sky only for a while; with nothing linked it says nothing", async ({ page }) => {
  const problems = await open(page);
  const canvas = page.locator("[data-stage-canvas]");
  const box = await canvas.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.keyboard.down("Alt");
  await page.mouse.wheel(0, -100);
  await page.keyboard.up("Alt");
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0);
  const before = await page.evaluate(() => window.__preview.pose().position);
  await page.mouse.wheel(0, -100);
  const notice = page.locator(".pano-studio-notice");
  await expect(notice).toHaveText("Sky only · Alt+wheel zooms");
  await expect(notice).toHaveAttribute("data-notice", "info");
  await expect.poll(() => page.evaluate(() => window.__preview.pose().position)).not.toEqual(before);
  await expect(notice).toHaveCount(0, { timeout: 4000 });
  await page.keyboard.press("Escape");
  await open(page, "?unlinked");
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.wheel(0, -100);
  await page.waitForTimeout(300);
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0);
  expect(problems).toEqual([]);
});
