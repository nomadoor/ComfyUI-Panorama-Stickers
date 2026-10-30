import { expect, test } from "@playwright/test";

// The new editor's background VIDEO (web_src/studio/editor.js through pano_media_session.js createBackgroundVideo) on
// tests/browser/pages/studio_video.html: docs/timeline-ui.md "再生の状態" (新しい UI) and "タイムラインの表示" (the fps
// a VIDEO sets). The VIDEO is recorded in the page; each frame's gray grows with its time, so the stage tells which
// frame it shows. Checked in a real browser engine: the frame on the stage follows the playhead on a seek, while it
// plays and when it pauses, and the Timeline loops.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

// The playhead and the span the bar shows ("12 / 60").
async function playhead(page) {
  const text = await page.locator(".pano-studio-tl-frame").textContent();
  const [frame, span] = text.split("/").map((part) => Number(part.trim()));
  return { frame, span };
}

const stageGray = (page) => page.evaluate(() => window.__studio.stageGray());
const videoNow = (page) => page.evaluate(() => window.__studio.video());
const grayAt = (page, seconds) => page.evaluate((t) => window.__studio.grayAt(t), seconds);

// Waits until the stage stops changing (a seek has landed and its still is drawn).
async function settledGray(page) {
  let last = await stageGray(page);
  for (let i = 0; i < 50; i += 1) {
    await page.waitForTimeout(100);
    const next = await stageGray(page);
    if (Math.abs(next - last) < 0.5) return next;
    last = next;
  }
  return last;
}

// Clicks the ruler at `fraction` of its width: a seek.
async function seekTo(page, fraction) {
  const box = await page.locator('[data-tl="ruler"]').boundingBox();
  await page.mouse.click(box.x + 8 + (box.width - 16) * fraction, box.y + box.height / 2);
}

async function open(page) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/tests/browser/pages/studio_video.html");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  // The VIDEO loaded and the stage drew it: the loading line has gone.
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  return problems;
}

// The frame shown at rest is the playhead's: the VIDEO stands at the playhead's time, the stage draws its picture,
// and the picture is the one painted at that time.
async function expectShowsPlayhead(page, fps) {
  const gray = await settledGray(page);
  const { frame } = await playhead(page);
  const video = await videoNow(page);
  expect(video.paused).toBe(true);
  expect(Math.abs(video.time - frame / fps)).toBeLessThanOrEqual(1.5 / fps);
  expect(Math.abs(gray - video.gray)).toBeLessThan(10);
  expect(Math.abs(video.gray - await grayAt(page, frame / fps))).toBeLessThan(24);
  return { frame, gray };
}

test("the background VIDEO sets the fps, and the frame on the stage follows the playhead on a seek, while playing and paused", async ({ page }) => {
  const problems = await open(page);
  const fps = await page.evaluate(() => window.__studio.fps);
  const frames = await page.evaluate(() => window.__studio.frames);

  // The state opened rebased to the VIDEO's fps (it had the default 24), the fps field is locked, and the Timeline is
  // as long as the VIDEO (its Auto length).
  expect(await page.evaluate(() => window.__studio.state().timeline.fps)).toBe(fps);
  await expect(page.locator('[data-tl="fps"]')).toHaveAttribute("aria-disabled", "true");
  await expect(page.locator('[data-tl="fps"]')).toHaveAttribute("aria-valuenow", String(fps));
  expect((await playhead(page)).span).toBe(frames);

  // A seek shows the playhead's frame, later and earlier.
  await seekTo(page, 0.75);
  const late = await expectShowsPlayhead(page, fps);
  expect(late.frame).toBeGreaterThan(frames * 0.6);
  await seekTo(page, 0.2);
  const early = await expectShowsPlayhead(page, fps);
  expect(early.frame).toBeLessThan(frames * 0.35);
  expect(late.gray - early.gray).toBeGreaterThan(60);

  // Play: the VIDEO plays, the playhead moves, and the stage shows later frames as it goes.
  await page.locator('[data-tl="play"]').click();
  await expect(page.locator('[data-tl="play"]')).toHaveAttribute("aria-label", "Pause");
  await page.waitForTimeout(400);
  const playing = await videoNow(page);
  expect(playing.paused).toBe(false);
  const first = await playhead(page);
  const firstGray = await stageGray(page);
  await page.waitForTimeout(400);
  const second = await playhead(page);
  const secondGray = await stageGray(page);
  expect(second.frame).toBeGreaterThan(first.frame);
  expect(secondGray).toBeGreaterThan(firstGray + 15);
  // While it plays, the stage's frame is near the playhead's (the two are read a moment apart).
  expect(Math.abs(secondGray - await grayAt(page, second.frame / fps))).toBeLessThan(40);

  // Pause: the playhead and the frame stay, and they agree.
  await page.locator('[data-tl="play"]').click();
  await expect(page.locator('[data-tl="play"]')).toHaveAttribute("aria-label", "Play");
  const paused = await expectShowsPlayhead(page, fps);
  await page.waitForTimeout(500);
  expect((await playhead(page)).frame).toBe(paused.frame);
  expect(Math.abs(await stageGray(page) - paused.gray)).toBeLessThan(1);

  // Loop: played past its end, the Timeline starts over and the VIDEO with it.
  await seekTo(page, 0.97);
  await expectShowsPlayhead(page, fps);
  await page.locator('[data-tl="play"]').click();
  await page.waitForTimeout(700);
  const wrapped = await playhead(page);
  expect(wrapped.frame).toBeLessThan(frames * 0.5);
  await expect(page.locator('[data-tl="play"]')).toHaveAttribute("aria-label", "Pause");
  await page.locator('[data-tl="play"]').click();
  await expectShowsPlayhead(page, fps);

  // Closing lets the VIDEO go.
  await page.evaluate(() => window.__studio.close());
  expect(await page.locator("video").count()).toBe(0);
  expect(problems).toEqual([]);
});
