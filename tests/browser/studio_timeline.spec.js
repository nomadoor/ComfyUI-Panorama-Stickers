import { writeFileSync } from "node:fs";
import { expect, test } from "@playwright/test";

// The new UI's Timeline (web_src/components/studio/StudioTimeline*.vue, web/pano_studio.css) on
// tests/browser/pages/studio_timeline.html: docs/timeline-ui.md (rows and dots, Keyframe selection, the playhead moved
// by the ruler only, Delete, Clip ranges, the eye, the upstream group) and docs/studio-ui.md "タイムラインのバー".

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1200, height: 1000 });
  await page.goto("/tests/browser/pages/studio_timeline.html");
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__check.error)).toBeNull();
  return problems;
}

test("the Timeline draws in dark and light without console errors", async ({ page }, testInfo) => {
  const problems = await open(page);
  const shot = await page.screenshot({ fullPage: true });
  await testInfo.attach("timeline", { body: shot, contentType: "image/png" });
  if (process.env.TIMELINE_SHOT) writeFileSync(process.env.TIMELINE_SHOT, shot);
  expect(problems).toEqual([]);
});

const events = (page) => page.evaluate(() => window.__events.splice(0));
const dark = (page) => page.locator('[data-theme-col="dark"]');
const scene = (page, name) => page.evaluate((key) => window.__scene[key](), name);

// The client x of a Timeline frame on the dark Timeline's tracks (timeline_model.js frameToX, 8px pad, span 100).
async function frameX(page, frame) {
  const box = await dark(page).locator('[data-tl="ruler"]').boundingBox();
  return box.x + 8 + (frame / 99) * (box.width - 16);
}

async function trackY(page, id) {
  const box = await dark(page).locator(`[data-track="${id}"]`).boundingBox();
  return box.y + box.height / 2;
}

test("the bar and a row's head are in the spec's order", async ({ page }) => {
  await open(page);
  const bar = await dark(page).locator(".pano-studio-tl-bar [data-tl]").evaluateAll((els) => els.map((el) => el.dataset.tl));
  expect(bar).toEqual(["play", "prev", "next", "loop", "time", "fps", "length", "length-reset", "collapse"]);
  const head = await dark(page).locator('[data-head="camera"] > *').evaluateAll((els) => els.map((el) => el.dataset.part || el.getAttribute("class")));
  expect(head[0]).toBe("eye");
  expect(head[1]).toBe("expand");
  expect(head[2]).toContain("pano-studio-tl-head-icon");
  expect(head[3]).toBe("name");
  expect(head[4]).toBe("dot");
  // A row without an eye (the background) keeps its place, so the names line up.
  const nameX = await dark(page).locator('[data-head] [data-part="name"]').evaluateAll((els) => [...new Set(els.map((el) => Math.round(el.getBoundingClientRect().x)))]);
  expect(nameX.length).toBe(1);
  await expect(dark(page).locator(".pano-studio-tl-group-name")).toHaveText("From Studio #4");
});

test("the playhead is a coral 2px line with its ▼ on the ruler only", async ({ page }) => {
  await open(page);
  const look = await page.evaluate(() => {
    const col = document.querySelector('[data-theme-col="dark"]');
    const line = getComputedStyle(col.querySelector(".pano-studio-tl-playhead"));
    const marks = [...col.querySelectorAll(".pano-studio-tl-playhead-mark")];
    return {
      color: line.borderLeftColor,
      width: line.borderLeftWidth,
      marks: marks.length,
      inRuler: marks.every((mark) => !!mark.closest(".pano-studio-tl-ruler")),
      coral: getComputedStyle(col).getPropertyValue("--studio-coral").trim(),
    };
  });
  expect(look).toEqual({ color: "rgb(243, 113, 89)", width: "2px", marks: 1, inRuler: true, coral: "#f37159" });
});

test("the ruler moves the playhead; a click on a track does not", async ({ page }) => {
  await open(page);
  const ruler = await dark(page).locator('[data-tl="ruler"]').boundingBox();
  await page.mouse.click(await frameX(page, 60), ruler.y + ruler.height / 2);
  expect(await scene(page, "playhead")).toBe(60);
  await events(page);
  await page.mouse.click(await frameX(page, 20), await trackY(page, "camera"));
  expect(await scene(page, "playhead")).toBe(60);
  expect((await events(page)).filter((event) => event.name === "seek")).toEqual([]);
  // A scrub seeks as it goes and once at its end.
  await page.mouse.move(await frameX(page, 10), ruler.y + 10);
  await page.mouse.down();
  await page.mouse.move(await frameX(page, 30), ruler.y + 10, { steps: 4 });
  await page.mouse.up();
  const seeks = (await events(page)).filter((event) => event.name === "seek").map((event) => event.value.phase);
  expect(seeks[0]).toBe("start");
  expect(seeks.at(-1)).toBe("end");
  expect(await scene(page, "playhead")).toBe(30);
});

test("the row dot keys the row's Lanes at the playhead", async ({ page }) => {
  await open(page);
  await dark(page).locator('[data-head="camera"] [data-part="dot"]').click();
  const [edit] = (await events(page)).filter((event) => event.name === "edit");
  expect(edit.value).toMatchObject({ kind: "state", phase: "commit", stopsPlayback: true });
  const camera = (await scene(page, "state")).camera;
  expect(camera.position.keyframes.map((key) => key.frame)).toEqual([0, 24, 48]);
  expect(camera.curve.keyframes).toEqual([]);
  await expect(dark(page).locator('[data-head="camera"] [data-part="dot"]')).toHaveAttribute("data-state", "now");
  await expect(dark(page).locator('[data-track="camera"] .pano-studio-tl-key')).toHaveCount(3);
});

test("a Keyframe click selects it, Shift adds, a box selects what it covers, an empty click clears", async ({ page }) => {
  await open(page);
  const cameraKeys = dark(page).locator('[data-track="camera"] .pano-studio-tl-key');
  await cameraKeys.nth(1).click();
  expect(await scene(page, "selection")).toEqual({ row: null, keys: [{ row: "camera", lane: null, frame: 48 }] });
  await expect(cameraKeys.nth(1)).toHaveClass(/is-selected/);
  const ice = await cameraKeys.nth(1).evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(ice).toBe("rgb(174, 206, 219)");
  await page.keyboard.down("Shift");
  await cameraKeys.nth(0).click();
  await page.keyboard.up("Shift");
  expect((await scene(page, "selection")).keys.length).toBe(2);
  // A box from an empty spot of the Camera's track down to the chair's, frames 5..35: the chair's two pins.
  await page.mouse.move(await frameX(page, 5), (await trackY(page, "camera")) + 6);
  await page.mouse.down();
  await page.mouse.move(await frameX(page, 35), await trackY(page, "sticker_1"), { steps: 5 });
  await expect(dark(page).locator(".pano-studio-tl-marquee")).toHaveCount(1);
  await page.mouse.up();
  expect((await scene(page, "selection")).keys).toEqual([{ row: "sticker_1", lane: null, frame: 0 }, { row: "sticker_1", lane: null, frame: 20 }]);
  expect(await scene(page, "playhead")).toBe(24);
  await page.mouse.click(await frameX(page, 90), await trackY(page, "camera"));
  expect((await scene(page, "selection")).keys).toEqual([]);
});

test("dragging selected Keyframes moves them; Escape puts them back", async ({ page }) => {
  await open(page);
  const key = dark(page).locator('[data-track="camera"] .pano-studio-tl-key').nth(1);
  const y = await trackY(page, "camera");
  await page.mouse.move(await frameX(page, 48), y);
  await page.mouse.down();
  await page.mouse.move(await frameX(page, 58), y, { steps: 6 });
  await page.mouse.up();
  const edits = (await events(page)).filter((event) => event.name === "edit").map((event) => event.value.phase);
  expect(edits.includes("live")).toBe(true);
  expect(edits.at(-1)).toBe("commit");
  expect((await scene(page, "state")).camera.position.keyframes.map((item) => item.frame)).toEqual([0, 58]);
  expect((await scene(page, "selection")).keys).toEqual([{ row: "camera", lane: null, frame: 58 }]);
  await expect(key).toHaveAttribute("data-frame", "58");

  await page.mouse.move(await frameX(page, 58), y);
  await page.mouse.down();
  await page.mouse.move(await frameX(page, 80), y, { steps: 6 });
  await page.keyboard.press("Escape");
  await page.mouse.up();
  const last = (await events(page)).filter((event) => event.name === "edit").at(-1);
  expect(last.value.phase).toBe("cancel");
  expect((await scene(page, "state")).camera.position.keyframes.map((item) => item.frame)).toEqual([0, 58]);
});

test("Delete removes the selected Keyframes", async ({ page }) => {
  await open(page);
  await dark(page).locator('[data-track="sticker_1"] .pano-studio-tl-key').nth(1).click();
  await page.keyboard.press("Delete");
  const chair = (await scene(page, "state")).stickers.find((sticker) => sticker.id === "sticker_1");
  expect(chair.position.keyframes.map((key) => key.frame)).toEqual([0]);
  expect(chair.rotation.keyframes).toEqual([]);
  expect((await scene(page, "selection")).keys).toEqual([]);
});

test("a Clip range moves by its bar and trims by its ends", async ({ page }) => {
  await open(page);
  const y = await trackY(page, "sticker_1");
  await page.mouse.move(await frameX(page, 50), y);
  await page.mouse.down();
  await page.mouse.move(await frameX(page, 55), y, { steps: 5 });
  await page.mouse.up();
  expect((await scene(page, "state")).stickers.find((sticker) => sticker.id === "sticker_1").clip).toEqual({ start: 15, in: 0, duration: 60 });
  const end = await dark(page).locator('[data-track="sticker_1"] [data-part="clip-end"]').boundingBox();
  await page.mouse.move(end.x + end.width / 2, y);
  await page.mouse.down();
  await page.mouse.move(end.x + end.width / 2 - (await frameX(page, 10)) + (await frameX(page, 0)), y, { steps: 5 });
  await page.mouse.up();
  expect((await scene(page, "state")).stickers.find((sticker) => sticker.id === "sticker_1").clip).toEqual({ start: 15, in: 0, duration: 50 });
  // A click on the bar records nothing.
  await events(page);
  await page.mouse.click(await frameX(page, 40), y);
  expect((await events(page)).filter((event) => event.name === "edit")).toEqual([]);
});

test("a row's name selects its object (moving the playhead into its Clip range) and a double-click asks for Frame Selected", async ({ page }) => {
  await open(page);
  const ruler = await dark(page).locator('[data-tl="ruler"]').boundingBox();
  await page.mouse.click(await frameX(page, 5), ruler.y + 10);
  await dark(page).locator('[data-head="sticker_1"] [data-part="name"]').click();
  expect(await scene(page, "playhead")).toBe(10);
  expect((await scene(page, "selection")).row).toBe("sticker_1");
  await expect(dark(page).locator('[data-head="sticker_1"]')).toHaveClass(/is-selected/);
  await events(page);
  await dark(page).locator('[data-head="camera"] [data-part="name"]').dblclick();
  expect((await events(page)).filter((event) => event.name === "frame-selected").map((event) => event.value)).toEqual(["camera"]);
});

test("the eye hides without stopping playback; the loop switch, prev and next, collapse", async ({ page }) => {
  await open(page);
  await dark(page).locator('[data-head="sticker_2"] [data-part="eye"]').click();
  const [edit] = (await events(page)).filter((event) => event.name === "edit");
  expect(edit.value.stopsPlayback).toBe(false);
  expect((await scene(page, "state")).stickers.find((sticker) => sticker.id === "sticker_2").visible).toBe(false);
  await expect(dark(page).locator('[data-head="sticker_2"]')).toHaveClass(/is-hidden/);

  const loop = dark(page).locator('[data-tl="loop"]');
  await expect(loop).toHaveAttribute("aria-checked", "true");
  await loop.click();
  await expect(loop).toHaveAttribute("aria-checked", "false");

  await dark(page).locator('[data-tl="next"]').click();
  expect(await scene(page, "playhead")).toBe(30);
  await dark(page).locator('[data-tl="prev"]').click();
  expect(await scene(page, "playhead")).toBe(10);

  await dark(page).locator('[data-tl="collapse"]').click();
  await expect(dark(page).locator(".pano-studio-tl-body")).toBeHidden();
  await expect(dark(page).locator('[data-tl="play"]')).toBeVisible();
});

test("the read-only Timeline changes nothing", async ({ page }) => {
  await open(page);
  const light = page.locator('[data-theme-col="light"]');
  // Disabled, not hidden: they stay in place and say why.
  await expect(light.locator('[data-head="camera"] [data-part="dot"]')).toHaveAttribute("aria-disabled", "true");
  await expect(light.locator('[data-head="camera"] [data-part="dot"]')).toHaveAttribute("title", "Read-only");
  await light.locator('[data-head="camera"] [data-part="dot"]').click({ force: true });
  await light.locator('[data-head="sticker_2"] [data-part="eye"]').click({ force: true });
  expect((await events(page)).filter((event) => event.name === "edit")).toEqual([]);
});

test("▶ opens a row into its Lanes, whose Keyframes a box selects one Lane at a time", async ({ page }, testInfo) => {
  await open(page);
  await dark(page).locator('[data-head="sticker_1"] [data-part="expand"]').click();
  await expect(dark(page).locator('[data-head^="sticker_1:"]')).toHaveText(["Position", "Rotation", "Scale", "Opacity"]);
  await page.mouse.move(await frameX(page, 25), (await trackY(page, "sticker_1:position")) - 8);
  await page.mouse.down();
  await page.mouse.move(await frameX(page, 35), await trackY(page, "sticker_1:rotation"), { steps: 5 });
  const shot = await page.screenshot();
  await testInfo.attach("open-row-box", { body: shot, contentType: "image/png" });
  if (process.env.TIMELINE_SHOT) writeFileSync(process.env.TIMELINE_SHOT.replace(/\.png$/, "-open.png"), shot);
  await page.mouse.up();
  expect((await scene(page, "selection")).keys).toEqual([
    { row: "sticker_1", lane: "position", frame: 20 },
    { row: "sticker_1", lane: "rotation", frame: 20 },
  ]);
  await expect(dark(page).locator('[data-track="sticker_1:rotation"] .pano-studio-tl-key.is-selected')).toHaveCount(1);
});
