import { expect, test } from "@playwright/test";
import { CAMERA } from "./pages/studio_camera_wired_scene.js";

// The left column's Camera button and the Camera's Lock in the new editor (tests/browser/pages/studio_camera_wired.html,
// a real browser engine): docs/studio-ui.md "エディタの中の Camera" (the Camera to the view in both modes as one Undo
// step, its tooltip and when it is off) and the Lock of the bar at the bottom center (camera.locked, one Undo step;
// while locked the gizmo, the Camera tab's drags and rulers and the inspector's Camera rows change nothing).

const SHOTS = "/home/nomax/dev/nomadoor/worktrees/pst-proto-view/design-drafts/shots";

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function load(page, query) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/studio_camera_wired.html?${query}`);
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  console.log(`renderer: ${await page.evaluate(() => window.__studio.rendererOf())}`);
  await page.waitForTimeout(300);
  return problems;
}

const rail = (page) => page.locator('.pano-studio-at-rail [data-tool="camera"]');
const camera = (page) => page.evaluate(async () => {
  const value = await window.__studio.camera();
  const state = window.__studio.session.state.camera;
  return { ...value, projection: state.projection, locked: state.locked === true };
});
const view = (page) => page.evaluate(() => window.__studio.stage().pose());
const canUndo = (page) => page.evaluate(() => window.__studio.session.canUndo);
const turn = (a, b) => Math.abs(((a - b + 540) % 360) - 180);

async function expectAtView(page) {
  const [shot, pose] = [await camera(page), await view(page)];
  shot.position.forEach((value, axis) => expect(Math.abs(value - pose.position[axis])).toBeLessThan(1e-6));
  expect(turn(shot.yaw_deg, pose.yaw_deg)).toBeLessThan(1e-6);
  expect(Math.abs(shot.pitch_deg - pose.pitch_deg)).toBeLessThan(1e-6);
  // Roll and the FOV stay the Camera's.
  expect(Math.abs(shot.roll_deg - CAMERA.roll)).toBeLessThan(1e-6);
  expect(Math.abs(shot.hFOV_deg - CAMERA.fov)).toBeLessThan(1e-6);
}

async function expectOpening(page, projection) {
  const shot = await camera(page);
  shot.position.forEach((value, axis) => expect(Math.abs(value - CAMERA.position[axis])).toBeLessThan(1e-6));
  expect(Math.abs(shot.yaw_deg - CAMERA.yaw)).toBeLessThan(1e-6);
  expect(shot.projection).toBe(projection);
}

for (const [mode, projection, tip] of [["frame", "perspective", "Camera to view"], ["panorama", "erp", "Camera to view · Switches to Frame mode"]]) {
  test(`the Camera button brings the Camera to the view as one Undo step (${mode} mode)`, async ({ page }) => {
    const problems = await load(page, `mode=${mode}`);
    await expect(rail(page)).toHaveAttribute("data-tip", tip);
    await expect(rail(page)).not.toHaveAttribute("aria-disabled", "true");
    const before = await view(page);
    await rail(page).click();
    expect((await camera(page)).projection).toBe("perspective");
    await expectAtView(page);
    expect(await view(page)).toEqual(before);
    // The Camera is selected (its card in the inspector) and the top center says it moved, with the lime dot.
    expect(await page.evaluate(() => window.__studio.session.selection.row)).toBe("camera");
    await expect(page.locator('[data-card="camera"]')).toHaveCount(1);
    const line = page.locator(".pano-studio-notice");
    await expect(line).toHaveText("Camera moved to this view");
    await expect(line).toHaveAttribute("data-notice", "done");
    await expect(rail(page)).toHaveAttribute("data-tip", "Camera to view");
    // Pressed again at the same view: nothing moves, no Undo step; the notice hides on its own.
    await expect(line).toHaveCount(0, { timeout: 5_000 });
    await page.evaluate(() => window.__studio.session.select({ row: null }));
    await rail(page).click();
    expect(await page.evaluate(() => window.__studio.session.selection.row)).toBeNull();
    await page.waitForTimeout(200);
    await expect(line).toHaveCount(0);
    await page.locator('[data-tool="undo"]').click();
    await expectOpening(page, projection);
    expect(await canUndo(page)).toBe(false);
    if (mode === "panorama") await page.screenshot({ path: `${SHOTS}/camera-button-lock-after-undo.png` });
    expect(problems).toEqual([]);
  });
}

// docs/design.md "動き": a move runs the viewfinder cue once (a CSS layer of four brackets and a vignette) and removes
// it; with reduced motion the brackets only show still and fade. FRAMES are the contact sheet's moments.
const FRAMES = [0, 30, 60, 90, 120, 200, 300, 370, 410, 450, 600, 700, 1000, 1100, 1180];
const cueAnimations = (page) => page.evaluate(() => document.getAnimations().filter((item) => item.animationName?.startsWith("pano-studio-cue-")).map((item) => item.animationName));

// Every cue animation paused at the same moment from the press (each one's currentTime counts its delay).
async function cueAt(page, ms) {
  await page.evaluate((at) => {
    for (const item of document.getAnimations()) {
      if (!item.animationName?.startsWith("pano-studio-cue-")) continue;
      item.pause();
      item.currentTime = Math.min(at, 1259);
    }
  }, ms);
}

const cueStyle = (page) => page.evaluate(() => [...document.querySelectorAll("[data-cue-bracket]")].map((el) => {
  const style = getComputedStyle(el);
  return { opacity: Number(style.opacity), transform: style.transform, width: el.getBoundingClientRect().width };
}));

test("a move runs the viewfinder cue once, a press mid-way restarts it, and a press that moves nothing runs none", async ({ page }) => {
  const problems = await load(page, "mode=frame");
  await rail(page).click();
  const cue = page.locator("[data-camera-cue]");
  await expect(cue).toHaveCount(1);
  await expect(cue.locator("[data-cue-bracket]")).toHaveCount(4);
  await expect(cue.locator(".pano-studio-cue-vignette")).toHaveCount(1);
  await expect(page.locator(".pano-studio-notice")).toHaveAttribute("data-notice", "done");
  await expect(page.locator(".pano-studio-notice .pano-studio-notice-dot")).toHaveCSS("background-color", "rgb(214, 231, 151)");
  expect((await cueAnimations(page)).sort()).toEqual([
    "pano-studio-cue-glow", "pano-studio-cue-life",
    ...Array(4).fill("pano-studio-cue-fade"), ...Array(4).fill("pano-studio-cue-move"),
  ].sort());
  for (const at of FRAMES) {
    await cueAt(page, at);
    await page.screenshot({ path: `${SHOTS}/camera-to-view-a-${String(at).padStart(4, "0")}ms.png` });
  }
  // Settled and held at 700ms: all four fully shown at their rest, 8% of the stage's shorter side (28px to 56px).
  await cueAt(page, 700);
  const stage = await page.locator('[data-region="stage"]').boundingBox();
  const size = Math.min(56, Math.max(28, 0.08 * Math.min(stage.width, stage.height)));
  for (const bracket of await cueStyle(page)) {
    expect(bracket.opacity).toBe(1);
    expect(bracket.transform).toBe("matrix(1, 0, 0, 1, 0, 0)");
    expect(Math.abs(bracket.width - size)).toBeLessThan(0.5);
  }
  // Before the press and after the fade, nothing shows.
  await cueAt(page, 0);
  expect((await cueStyle(page)).every((bracket) => bracket.opacity === 0)).toBe(true);
  await cueAt(page, 1259);
  expect((await cueStyle(page)).every((bracket) => bracket.opacity < 0.02)).toBe(true);
  // Let it run out: the layer is removed.
  await page.evaluate(() => document.getAnimations().forEach((item) => item.animationName?.startsWith("pano-studio-cue-") && item.play()));
  await expect(cue).toHaveCount(0, { timeout: 3_000 });

  // A press mid-way (after an Undo, so the Camera moves again) starts it over: one layer, from the start.
  await page.locator('[data-tool="undo"]').click();
  await rail(page).click();
  await page.waitForTimeout(400);
  await page.locator('[data-tool="undo"]').click();
  await rail(page).click();
  await expect(cue).toHaveCount(1);
  const times = await page.evaluate(() => document.getAnimations().filter((item) => item.animationName === "pano-studio-cue-life").map((item) => item.currentTime));
  expect(times).toHaveLength(1);
  expect(times[0]).toBeLessThan(300);
  await expect(cue).toHaveCount(0, { timeout: 3_000 });
  // Pressed again at the same view: the Camera does not move and no cue runs.
  await rail(page).click();
  await page.waitForTimeout(100);
  await expect(cue).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("with reduced motion the cue's brackets show still and fade, with no vignette, then go", async ({ page }) => {
  const problems = await load(page, "mode=frame");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await rail(page).click();
  await expect(page.locator(".pano-studio-notice")).toHaveText("Camera moved to this view");
  const cue = page.locator("[data-camera-cue]");
  await expect(cue).toHaveCount(1);
  expect((await cueAnimations(page)).sort()).toEqual(["pano-studio-cue-life", ...Array(4).fill("pano-studio-cue-still")].sort());
  await expect(cue.locator(".pano-studio-cue-vignette")).toBeHidden();
  await cueAt(page, 100);
  for (const bracket of await cueStyle(page)) {
    expect(bracket.opacity).toBe(1);
    expect(bracket.transform).toBe("none");
  }
  await page.screenshot({ path: `${SHOTS}/camera-to-view-a-reduced-motion.png` });
  await page.evaluate(() => document.getAnimations().forEach((item) => item.animationName?.startsWith("pano-studio-cue-") && item.play()));
  await expect(cue).toHaveCount(0, { timeout: 2_000 });
  expect(problems).toEqual([]);
});

test("the Camera button is off in the Camera tab, saying why", async ({ page }) => {
  const problems = await load(page, "mode=frame");
  await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();
  await expect(rail(page)).toHaveAttribute("aria-disabled", "true");
  await expect(rail(page)).toHaveAttribute("data-tip", "Not available in the Camera view");
  await rail(page).click({ force: true });
  await expectOpening(page, "perspective");
  expect(problems).toEqual([]);
});

// The Camera's Move gizmo's Y ball in page px (gizmo_overlay.js, from the stage's camera).
const yBall = (page) => page.evaluate(async () => {
  const { gizmoHandles } = await import("/web_src/studio/gizmo_overlay.js");
  const { sceneTransform } = await import("/web_src/pano_space.js");
  const value = await window.__studio.camera();
  const canvas = document.querySelector("[data-stage-canvas]");
  const rect = canvas.getBoundingClientRect();
  const cam = window.__studio.stage().landing.camera();
  const handles = gizmoHandles({ mode: "translate", transform: sceneTransform({ ...value, scale: 1 }) }, cam, rect.width, rect.height);
  const end = handles.axes.find((axis) => axis.name === "y").end;
  return { x: rect.left + end.x, y: rect.top + end.y };
});

async function dragBy(page, from, dx, dy) {
  await page.mouse.move(from.x, from.y);
  await page.mouse.down();
  await page.mouse.move(from.x + dx / 2, from.y + dy / 2, { steps: 4 });
  await page.mouse.move(from.x + dx, from.y + dy, { steps: 4 });
  await page.mouse.up();
}

test("the Lock locks the Camera as one Undo step: no gizmo, Camera tab and inspector edits blocked, and unlocking restores them", async ({ page }) => {
  const problems = await load(page, "mode=frame");
  await page.locator('[data-head="camera"] [data-part="name"]').first().click();
  expect(await page.evaluate(() => window.__studio.session.selection.row)).toBe("camera");
  const lock = page.locator('.pano-studio-at-bar [data-bar="lock"]');
  await expect(lock).toHaveAttribute("data-tip", "Lock");

  // Unlocked, the gizmo's Y ball lifts the Camera (the check below means something).
  const ball = await yBall(page);
  await dragBy(page, ball, 0, -30);
  expect((await camera(page)).position[1]).toBeGreaterThan(CAMERA.position[1] + 0.01);
  await page.locator('[data-tool="undo"]').click();
  await expectOpening(page, "perspective");

  await lock.click();
  expect((await camera(page)).locked).toBe(true);
  await expect(lock).toHaveAttribute("data-tip", "Unlock");
  expect(await canUndo(page)).toBe(true);
  // The gizmo is gone: the same drag selects or looks around, and the Camera stays.
  await dragBy(page, ball, 0, -30);
  await expectOpening(page, "perspective");
  // The Camera button is off.
  await expect(rail(page)).toHaveAttribute("aria-disabled", "true");
  await expect(rail(page)).toHaveAttribute("data-tip", "Camera to view · Locked");
  await page.locator('[data-head="camera"] [data-part="name"]').first().click();
  // The inspector's Camera rows are grayed, saying "Locked".
  const fields = page.locator('[data-card="camera"] [data-field]');
  expect(await fields.count()).toBeGreaterThan(3);
  expect(await fields.evaluateAll((els) => els.every((el) => el.getAttribute("aria-disabled") === "true"))).toBe(true);
  expect(await page.locator('[data-card="camera"] [data-tip="Locked"]').count()).toBeGreaterThan(0);
  await page.locator('.pano-studio-at-rail').hover();
  await page.screenshot({ path: `${SHOTS}/camera-button-lock-3d-locked.png` });

  // The Camera tab: the rulers are grayed with "Locked", and a drag on the stage moves nothing.
  await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();
  await expect(page.locator("[data-frame-box]")).toHaveCount(1);
  await page.waitForTimeout(300);
  for (const name of ["FOV", "Lens", "Roll"]) {
    await expect(page.locator(`[data-ruler="${name}"]`)).toHaveClass(/is-disabled/);
    await expect(page.locator(`[data-ruler="${name}"]`)).toHaveAttribute("data-tip", "Locked");
  }
  const frame = await page.locator("[data-frame-box]").boundingBox();
  await dragBy(page, { x: frame.x + frame.width / 2, y: frame.y + frame.height / 2 }, 80, 30);
  const roll = await page.locator('[data-ruler="Roll"] [data-ruler-track]').boundingBox();
  await dragBy(page, { x: roll.x + roll.width / 2, y: roll.y + roll.height / 2 }, 60, 0);
  await expectOpening(page, "perspective");
  expect(Math.abs((await camera(page)).roll_deg - CAMERA.roll)).toBeLessThan(1e-6);
  await page.screenshot({ path: `${SHOTS}/camera-button-lock-camera-tab-locked.png` });

  // Unlocking restores the edits.
  await page.locator('[role="tablist"] button', { hasText: "3D" }).click();
  await page.locator('[data-head="camera"] [data-part="name"]').first().click();
  await page.locator('.pano-studio-at-bar [data-bar="lock"]').click();
  expect((await camera(page)).locked).toBe(false);
  await expect(rail(page)).not.toHaveAttribute("aria-disabled", "true");
  expect(await page.locator('[data-card="camera"] [data-field]').evaluateAll((els) => els.some((el) => el.getAttribute("aria-disabled") !== "true"))).toBe(true);
  await dragBy(page, await yBall(page), 0, -30);
  expect((await camera(page)).position[1]).toBeGreaterThan(CAMERA.position[1] + 0.01);
  // Undo: the lift, then the unlock (locked again), then the lock.
  await page.locator('[data-tool="undo"]').click();
  await page.locator('[data-tool="undo"]').click();
  expect((await camera(page)).locked).toBe(true);
  await page.locator('[data-tool="undo"]').click();
  expect((await camera(page)).locked).toBe(false);
  expect(problems).toEqual([]);
});
