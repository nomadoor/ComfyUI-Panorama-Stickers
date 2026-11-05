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
      coral: ((el, name) => {
        // A token is light-dark(light, dark): resolve it where it is used (the root's color-scheme), as #rrggbb.
        const probe = document.createElement("i");
        probe.style.color = `var(${name})`;
        el.append(probe);
        const [r, g, b] = getComputedStyle(probe).color.match(/\d+/g).map(Number);
        probe.remove();
        return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
      })(col, "--studio-coral"),
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
  const ice = await cameraKeys.nth(1).evaluate((el) => getComputedStyle(el, "::before").backgroundColor);
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

test("the empty area below the rows starts a box and clears on a click, without moving the playhead", async ({ page }) => {
  await open(page);
  const body = await dark(page).locator(".pano-studio-tl-body").boundingBox();
  const last = await dark(page).locator(".pano-studio-tl-lines").boundingBox();
  // The fixture's rows leave room below them in the Timeline's body.
  expect(body.y + body.height - (last.y + last.height)).toBeGreaterThan(40);
  const below = last.y + last.height + 20;
  // A box from below every row up past the Camera's track (above the first row), frames 45..49: the Camera's key at 48 (the upstream key at 50 stays out).
  await page.mouse.move(await frameX(page, 45), below);
  await page.mouse.down();
  await page.mouse.move(await frameX(page, 49), (await trackY(page, "camera")) - 30, { steps: 5 });
  await expect(dark(page).locator(".pano-studio-tl-marquee")).toHaveCount(1);
  await page.mouse.up();
  expect((await scene(page, "selection")).keys).toEqual([{ row: "camera", lane: null, frame: 48 }]);
  // Shift adds: a box from below up over the Camera's key at 0.
  await page.keyboard.down("Shift");
  await page.mouse.move(await frameX(page, 4), below);
  await page.mouse.down();
  await page.mouse.move(await frameX(page, 0) - 4, await trackY(page, "camera"), { steps: 5 });
  await page.mouse.up();
  await page.keyboard.up("Shift");
  expect((await scene(page, "selection")).keys.filter((key) => key.row === "camera")).toEqual([
    { row: "camera", lane: null, frame: 48 },
    { row: "camera", lane: null, frame: 0 },
  ]);
  await events(page);
  // A click below the rows lets them go and does not seek; the name column below the rows does nothing.
  const head = await dark(page).locator('[data-head="camera"]').boundingBox();
  await page.mouse.click(head.x + head.width / 2, below);
  expect((await scene(page, "selection")).keys.length).toBeGreaterThan(0);
  await page.mouse.click(await frameX(page, 70), below);
  expect((await scene(page, "selection")).keys).toEqual([]);
  expect(await scene(page, "playhead")).toBe(24);
  expect((await events(page)).filter((event) => event.name === "seek")).toEqual([]);
});

// docs/timeline-ui.md "Keyframe の選び方": the box stays between the ruler's bottom and the track column's bottom, its
// top edge and corners always seen, and it selects the Keyframes inside the box as drawn (the cursor may go past it).
async function marqueeBox(page) {
  return dark(page).locator(".pano-studio-tl-marquee").evaluate((el) => {
    const r = el.getBoundingClientRect();
    return { top: r.top, bottom: r.bottom };
  });
}

test("a box dragged up past the ruler stops at the ruler's bottom and selects what it shows", async ({ page }) => {
  await open(page);
  const ruler = dark(page).locator(".pano-studio-tl-line.is-ruler");
  const rulerBottom = await ruler.evaluate((el) => el.getBoundingClientRect().bottom);
  const lines = await dark(page).locator(".pano-studio-tl-lines").boundingBox();
  const below = lines.y + lines.height + 20;
  // From below the rows up into the bar above the ruler, frames 45..49: the Camera's key at 48.
  await page.mouse.move(await frameX(page, 45), below);
  await page.mouse.down();
  await page.mouse.move(await frameX(page, 49), rulerBottom - 40, { steps: 6 });
  const box = await marqueeBox(page);
  expect(Math.abs(box.top - rulerBottom)).toBeLessThan(0.5);
  const fillBottom = await dark(page).locator('[data-tl="fill"]').evaluate((el) => el.getBoundingClientRect().bottom);
  expect(box.bottom).toBeLessThanOrEqual(fillBottom + 0.5);
  await page.mouse.up();
  expect((await scene(page, "selection")).keys).toEqual([{ row: "camera", lane: null, frame: 48 }]);
});

test("in a scrolled body the box stops at the ruler's bottom and leaves the rows under the ruler out", async ({ page }) => {
  await open(page);
  // A short Timeline whose rows do not fit, scrolled to its end: the Camera's row is behind the ruler or above it.
  await dark(page).locator(".area").evaluate((el) => { el.style.height = "150px"; });
  const body = dark(page).locator(".pano-studio-tl-body");
  await body.evaluate((el) => { el.scrollTop = el.scrollHeight; });
  expect(await body.evaluate((el) => el.scrollTop)).toBeGreaterThan(20);
  const ruler = dark(page).locator(".pano-studio-tl-line.is-ruler");
  const rulerBottom = await ruler.evaluate((el) => el.getBoundingClientRect().bottom);
  const camera = await dark(page).locator('[data-track="camera"]').evaluate((el) => el.getBoundingClientRect().bottom);
  expect(camera).toBeLessThanOrEqual(rulerBottom);
  const fill = await dark(page).locator('[data-tl="fill"]').boundingBox();
  await page.mouse.move(await frameX(page, 45), fill.y + fill.height - 4);
  await page.mouse.down();
  await page.mouse.move(await frameX(page, 49), rulerBottom - 60, { steps: 6 });
  const box = await marqueeBox(page);
  expect(Math.abs(box.top - rulerBottom)).toBeLessThan(0.5);
  const bodyBottom = await body.evaluate((el) => el.getBoundingClientRect().bottom);
  expect(box.bottom).toBeLessThanOrEqual(bodyBottom + 0.5);
  await page.mouse.up();
  // The upstream key at 50 is outside 45..49; the Camera's key at 48 is under the ruler, outside the box.
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

// docs/timeline-ui.md "Clip range のバー（新しい UI）".
test("a still image's row has no Clip range bar, and its dot is grabbed from anywhere on its hit area", async ({ page }) => {
  await open(page);
  await expect(dark(page).locator('[data-track="sticker_2"] [data-part="clip"]')).toHaveCount(0);
  await expect(dark(page).locator('[data-track="camera"] [data-part="clip"]')).toHaveCount(0);
  // The chair's trimmed Clip range and the background VIDEO keep their bars.
  await expect(dark(page).locator('[data-track="sticker_1"] [data-part="clip"]')).toHaveCount(1);
  await expect(dark(page).locator('[data-track="background"] [data-part="clip"]')).toHaveCount(1);
  await dark(page).locator('[data-head="sticker_2"] [data-part="dot"]').click();
  const key = dark(page).locator('[data-track="sticker_2"] .pano-studio-tl-key');
  await expect(key).toHaveAttribute("data-frame", "24");
  const box = await key.boundingBox();
  const track = await dark(page).locator('[data-track="sticker_2"]').boundingBox();
  // The hit area spans the row's height and 18px, wider than the 9px diamond.
  expect(Math.round(box.width)).toBe(18);
  expect(box.height).toBeGreaterThanOrEqual(track.height - 2);
  // Press near the row's bottom edge and 7px right of the diamond's centre: still the dot.
  const x0 = box.x + box.width / 2 + 7;
  const y0 = track.y + track.height - 3;
  await page.mouse.move(x0, y0);
  await page.mouse.down();
  await page.mouse.move(x0 + (await frameX(page, 34)) - (await frameX(page, 24)), y0, { steps: 6 });
  await page.mouse.up();
  const poster = (await scene(page, "state")).stickers.find((sticker) => sticker.id === "sticker_2");
  expect(poster.direction.keyframes.map((item) => item.frame)).toEqual([34]);
  expect(poster.clip).toEqual({ start: 0, in: 0, duration: null });
});

test("a VIDEO row keeps its bar, and a dot on the bar is grabbed instead of the bar", async ({ page }) => {
  await open(page);
  await page.evaluate(() => window.__scene.portVideo());
  const bar = dark(page).locator('[data-track="sticker_2"] [data-part="clip"]');
  await expect(bar).toHaveCount(1);
  await dark(page).locator('[data-head="sticker_2"] [data-part="dot"]').click();
  const key = dark(page).locator('[data-track="sticker_2"] .pano-studio-tl-key');
  const box = await key.boundingBox();
  const barBox = await bar.boundingBox();
  // The dot is on the bar.
  expect(box.x + box.width / 2).toBeGreaterThan(barBox.x);
  expect(box.x + box.width / 2).toBeLessThan(barBox.x + barBox.width);
  const x0 = box.x + box.width / 2 + 6;
  const y0 = barBox.y + barBox.height / 2 + 6;
  const hit = await page.evaluate(([x, y]) => document.elementFromPoint(x, y)?.className, [x0, y0]);
  expect(hit).toContain("pano-studio-tl-key");
  await page.mouse.move(x0, y0);
  await page.mouse.down();
  await page.mouse.move(x0 + (await frameX(page, 30)) - (await frameX(page, 24)), y0, { steps: 6 });
  await page.mouse.up();
  const poster = (await scene(page, "state")).stickers.find((sticker) => sticker.id === "sticker_2");
  expect(poster.direction.keyframes.map((item) => item.frame)).toEqual([30]);
  expect(poster.clip).toEqual({ start: 0, in: 0, duration: null });
  // Away from the dot, the bar still moves the Clip range.
  await page.mouse.move(await frameX(page, 50), y0);
  await page.mouse.down();
  await page.mouse.move(await frameX(page, 55), y0, { steps: 5 });
  await page.mouse.up();
  expect((await scene(page, "state")).stickers.find((sticker) => sticker.id === "sticker_2").clip).toEqual({ start: 5, in: 0, duration: null });
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
  await expect(light.locator('[data-head="camera"] [data-part="dot"]')).toHaveAttribute("data-tip", "Read-only");
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

// docs/timeline-ui.md "fps と Length の欄" and docs/design.md: the value's width is taken first (Length 5 digits, fps
// 4), so more digits move nothing in the bar (the right group sits at the right end: a wider value would push its names
// and the fields left of it), shown or typed.
test("the fps and Length fields keep their width as digits are added, shown and typed", async ({ page }) => {
  await open(page);
  const length = dark(page).locator('[data-tl="length"]');
  const fpsField = dark(page).locator('[data-tl="fps"]');
  // The left and right edges of every part of the bar's right group: the fields, their names, the buttons.
  const layout = () => dark(page).locator(".pano-studio-tl-bar").evaluate((bar) =>
    [...bar.querySelectorAll(".pano-studio-tl-field, .pano-studio-tl-field-name, [data-tl]")]
      .filter((el) => !["play", "prev", "next", "loop", "time"].includes(el.dataset.tl))
      .map((el) => {
        const r = el.getBoundingClientRect();
        return `${el.dataset.tl || el.className}:${r.left}-${r.right}`;
      })
      .join(" "));
  const shown = [];
  const typed = [];
  for (const value of ["9", "10", "100", "1000", "10000"]) {
    await length.click();
    await length.locator("input").fill(value);
    typed.push(await layout());
    await length.locator("input").press("Enter");
    await expect(length).toHaveAttribute("aria-valuenow", value);
    shown.push(await layout());
  }
  expect(new Set(shown).size).toBe(1);
  // The open text box takes the same width as the shown value.
  expect(new Set([...typed, ...shown]).size).toBe(1);
  // Left aligned, digits of one width.
  const look = await length.evaluate((el) => {
    const value = el.querySelector(".pano-studio-field-value");
    return { align: getComputedStyle(value).textAlign, nums: getComputedStyle(value).fontVariantNumeric };
  });
  expect(look).toEqual({ align: "left", nums: "tabular-nums" });

  const byFps = [];
  for (const fps of [1, 24, 120, 1000]) {
    await page.evaluate((value) => window.__scene.setFps(value), fps);
    await expect(fpsField).toHaveAttribute("aria-valuenow", String(fps));
    byFps.push(await layout());
  }
  expect(new Set(byFps).size).toBe(1);
  await fpsField.click();
  expect(await layout()).toBe(byFps[0]);
  await page.keyboard.press("Escape");
});

// docs/timeline-ui.md "タイムラインの長さ": the unit mark right of the Length number switches frames and seconds in place,
// outside the value's width; the read-only Timeline switches it too (it changes nothing in the state).
test("the Length unit mark switches frames and seconds, typed seconds go in as frames, and it works read-only", async ({ page }) => {
  await open(page);
  const length = dark(page).locator('[data-tl="length"]');
  const unit = dark(page).locator('[data-part="length-unit"]');
  await expect(unit).toHaveText("f");
  await expect(unit).toHaveAttribute("data-tip", "Show seconds");
  const fieldRight = await length.evaluate((el) => el.getBoundingClientRect().right);
  expect(await unit.evaluate((el) => el.getBoundingClientRect().left)).toBeGreaterThanOrEqual(fieldRight - 0.5);
  // Switching in place: nothing in the bar moves.
  const places = () => dark(page).locator(".pano-studio-tl-bar").evaluate((bar) =>
    [...bar.querySelectorAll(".pano-studio-tl-field, [data-tl], [data-part]")].map((el) => {
      const r = el.getBoundingClientRect();
      return `${r.left}-${r.right}`;
    }).join(" "));
  const before = await places();
  await unit.click();
  expect(await places()).toBe(before);
  await expect(unit).toHaveText("s");
  await expect(unit).toHaveAttribute("data-tip", "Show frames");
  // 100 frames at 24 fps.
  await expect(length.locator(".pano-studio-field-value")).toHaveText("4.17");
  expect((await events(page)).filter((event) => event.name === "edit")).toEqual([]);
  await length.click();
  await length.locator("input").fill("2");
  await length.locator("input").press("Enter");
  expect((await scene(page, "state")).timeline.length).toBe(48);
  await expect(length.locator(".pano-studio-field-value")).toHaveText("2.00");
  // Less than a frame is one frame.
  await length.click();
  await length.locator("input").fill("0");
  await length.locator("input").press("Enter");
  expect((await scene(page, "state")).timeline.length).toBe(1);
  await expect(length.locator(".pano-studio-field-value")).toHaveText("0.04");
  await unit.click();
  await expect(length.locator(".pano-studio-field-value")).toHaveText("1");

  // Read-only: the field stays shut, the mark still switches the display.
  const light = page.locator('[data-theme-col="light"]');
  const lightUnit = light.locator('[data-part="length-unit"]');
  await events(page);
  await lightUnit.click();
  await expect(lightUnit).toHaveText("s");
  await expect(light.locator('[data-tl="length"] .pano-studio-field-value')).toHaveText("0.04");
  expect((await events(page)).filter((event) => event.name === "edit")).toEqual([]);
});

// Where the browser has no `field-sizing: content` (Chromium < 123, Firefox), the opened box keeps the reserved width
// (web/pano_studio.css `@supports not (field-sizing: content)`), so opening it moves nothing. This Chromium has it:
// the test turns it off and applies the fallback block's rules as such a browser would.
test("without field-sizing the opened fps and Length boxes keep the reserved width", async ({ page }) => {
  await open(page);
  const applied = await page.evaluate(() => {
    const fallback = [...document.styleSheets].flatMap((sheet) => {
      try {
        return [...sheet.cssRules];
      } catch {
        return [];
      }
    }).filter((rule) => rule instanceof CSSSupportsRule && /not\s*\(\s*field-sizing:\s*content\s*\)/.test(rule.conditionText));
    const style = document.createElement("style");
    style.textContent = [
      ".pano-studio-tl-field .pano-studio-field-input { field-sizing: fixed !important; }",
      ...fallback.flatMap((rule) => [...rule.cssRules].map((inner) => inner.cssText)),
    ].join("\n");
    document.head.append(style);
    return fallback.length;
  });
  expect(applied).toBeGreaterThan(0);
  const layout = () => dark(page).locator(".pano-studio-tl-bar").evaluate((bar) =>
    [...bar.querySelectorAll(".pano-studio-tl-field, .pano-studio-tl-field-name, [data-tl]")]
      .map((el) => `${el.getBoundingClientRect().left}-${el.getBoundingClientRect().right}`).join(" "));
  for (const name of ["length", "fps"]) {
    const field = dark(page).locator(`[data-tl="${name}"]`);
    const shown = await layout();
    await field.click();
    await expect(field.locator("input")).toBeFocused();
    expect(await layout()).toBe(shown);
    await page.keyboard.press("Escape");
  }
});
