import { expect, test } from "@playwright/test";

// docs/threejs-spark-integration.md "読み込み中・再生中の表示": while a DA3_GEOMETRY mono depth grid shows a loaded item
// in place of the playhead's (its depth files arrive late, as over a slow network), its colors are that item's, not
// the playhead's; the playhead still moves with the clock. On tests/browser/pages/depth_color_sync.html (the new
// editor, its `scene` a depth grid sequence of 48 items whose depth files page.route serves with a delay), every frame
// sampled while it plays draws the shape and the colors of the same item: exactly, while an item stands in for the
// playhead's (its still), and within one frame while the playhead's own item is drawn (the playing proxy, which may
// be a frame off the playhead: the follower's rule, "ノードの出力との差").

const W = 65;
const H = 33;
const FRAMES = 48;

function depthBody(n) {
  const values = new Float32Array(W * H);
  for (let y = 0; y < H; y += 1) values.fill(3, y * W, y * W + Math.min(W, n + 2));
  return Buffer.from(values.buffer);
}

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  return problems;
}

async function open(page, delay, requested = []) {
  const problems = watch(page);
  await page.route("**/depth-sync/*.f32", async (route) => {
    const n = Number(route.request().url().match(/f_(\d+)\.f32/)[1]);
    requested.push(n);
    if (delay) await new Promise((resolve) => setTimeout(resolve, delay));
    await route.fulfill({ status: 200, contentType: "application/octet-stream", body: depthBody(n) }).catch(() => {});
  });
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto("/tests/browser/pages/depth_color_sync.html");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  return problems;
}

// The screen x (canvas pixels) of each item's right edge: its last column with depth, n + 1, on the plane 3 ahead.
function rightEdges(page) {
  return page.evaluate(async ({ W, FRAMES }) => {
    const { stageCamera } = await import("/web_src/studio/stage_view.js");
    const { projectPoint } = await import("/web_src/pano_space.js");
    const canvas = document.querySelector("[data-stage-canvas]");
    const rect = canvas.getBoundingClientRect();
    const camera = stageCamera({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, target: [0, 0, -3] }, rect.width, rect.height, 50);
    const focal = (W - 1) / 2 / Math.tan(25 * Math.PI / 180);
    return Array.from({ length: FRAMES }, (_, n) => projectPoint(camera, [((n + 1) - (W - 1) / 2) / focal * 3, 0, -3], rect.width, rect.height).x * canvas.width / rect.width);
  }, { W, FRAMES });
}

// Plays for `ms` and returns each animation frame's { playhead, shape (the item whose shape is drawn), color (the
// item whose colors are drawn, as a fraction between the items' calibrated reds) }.
async function play(page, ms) {
  const edges = await rightEdges(page);
  const reds = await page.evaluate(() => window.__studio.reds);
  await page.locator('[data-tl="play"]').click();
  const samples = await page.evaluate((ms) => new Promise((resolve) => {
    const out = [];
    const t0 = performance.now();
    const tick = () => {
      out.push(window.__studio.sample());
      if (performance.now() - t0 < ms) requestAnimationFrame(tick);
      else resolve(out);
    };
    requestAnimationFrame(tick);
  }), ms);
  await page.locator('[data-tl="play"]').click();
  const nearest = (values, value) => values.reduce((best, v, i) => (Math.abs(v - value) < Math.abs(values[best] - value) ? i : best), 0);
  // How many items the colors are off the shape: 0 when the red is the red of the shape's item's time (the recorded
  // video can show one picture at two items' times), a half more when it lies between two items' reds (a frame of the
  // playing video between two items' times), Infinity without a red.
  const offOf = (red, shape) => {
    if (red === null) return Infinity;
    const same = reds.flatMap((value, item) => (Math.abs(value - red) <= 3 ? [Math.abs(item - shape)] : []));
    if (same.length) return Math.min(...same);
    const below = reds.findLastIndex((value) => value < red);
    return below < 0 || below === reds.length - 1 ? Infinity : Math.min(Math.abs(below - shape), Math.abs(below + 1 - shape)) + 0.5;
  };
  const rows = samples.filter((s) => s.right >= 0 && Number.isFinite(s.playhead)).map((s) => {
    const shape = nearest(edges, s.right);
    return { playhead: s.playhead, shape, off: offOf(s.red, shape), red: s.red };
  });
  // Whether each frame drew the playhead's own item (the playhead read with the frame can be one frame on), and how
  // many frames ago the last such frame was.
  // Playback starts on the frame it rested on, whose own item is drawn.
  let since = 0;
  rows.forEach((row, index) => {
    const before = rows[index - 1]?.playhead ?? row.playhead;
    row.own = row.shape === row.playhead || row.shape === before;
    since = row.own ? 0 : since + 1;
    row.since = since;
  });
  return rows;
}

// The most the colors may be off the shape in a frame (in items). While another item stands in for the playhead's
// (its still): none. While the playhead's own item is drawn, and in the few frames after it while the stand-in's still
// is sought: up to two (the playing proxy may be a frame and a half off the playhead, the follower's rule, and it is
// paused where it played).
const SETTLE = 5;
const allowed = (row) => (row.since <= SETTLE ? 2 : 0);

for (const delay of [300, 800]) {
  test(`with the depth files ${delay} ms late, every frame played draws one item's shape and colors`, async ({ page }) => {
    test.setTimeout(90_000);
    const problems = await open(page, delay);
    // At rest on frame 0 the item and its colors are drawn.
    await expect.poll(() => page.evaluate(() => window.__studio.sample().right), { timeout: 20_000 }).toBeGreaterThan(0);
    const rows = await play(page, 2500);
    const off = rows.filter((row) => row.off > allowed(row));
    // On a failure the message carries the calibrated reds too, to tell a still that missed its time from a red read off.
    const reds = off.length ? await page.evaluate(() => window.__studio.reds) : null;
    expect(off, JSON.stringify({ off: off.slice(0, 10), reds })).toEqual([]);
    expect(rows.length).toBeGreaterThan(60);
    // The items load slower than the playhead moves: other items stand in for most frames, and the playhead still moves.
    const standIns = rows.filter((row) => row.since > SETTLE);
    expect(standIns.length).toBeGreaterThan(rows.length / 2);
    expect(new Set(rows.map((row) => row.playhead)).size).toBeGreaterThan(30);
    // More than one item is shown while it plays.
    expect(new Set(rows.map((row) => row.shape)).size).toBeGreaterThan(2);
    expect(problems).toEqual([]);
  });
}

test("with the depth files on time, the playhead's item and its playing colors are drawn as before", async ({ page }) => {
  test.setTimeout(90_000);
  const problems = await open(page, 0);
  await expect.poll(() => page.evaluate(() => window.__studio.sample().right), { timeout: 20_000 }).toBeGreaterThan(0);
  const rows = await play(page, 1500);
  expect(rows.length).toBeGreaterThan(20);
  // How far the shape lags the playhead depends on the machine's load (the files arrive through page.route), so only
  // the colors are checked: those of the shape's item, as above.
  const off = rows.filter((row) => row.off > allowed(row));
  expect(off, JSON.stringify(off.slice(0, 10))).toEqual([]);
  expect(problems).toEqual([]);
});

// docs/threejs-spark-integration.md "止まっている間の先読み" and "生成を邪魔しない": at rest the editor loads all the
// items that fit the budget (48 small ones here) from the playhead on; while ComfyUI runs a job (its events, faked by
// the page) only the item drawn and the ones ahead stay, and their GPU textures go; after it, they load again. Playing
// goes back to loading the next items only.
test("at rest the editor loads every item, lets them go while ComfyUI runs, and loads them again after", async ({ page }) => {
  test.setTimeout(90_000);
  const requested = [];
  const problems = await open(page, 0, requested);
  const scene = () => page.evaluate(() => {
    // The stage's view (the editor's, once its three.js chunk is there).
    const stats = window.__studio.stats().find((entry) => entry.sceneItems);
    return stats ? { loaded: stats.sceneItems.loaded, textures: stats.textures } : { loaded: -1 };
  });
  await expect.poll(async () => (await scene()).loaded, { timeout: 30_000 }).toBe(48);
  expect(new Set(requested).size).toBe(48);
  // Loaded is not on the GPU: three.js uploads an item's depth texture when it is first drawn.
  const atRest = await scene();
  console.log("at rest, all loaded, one drawn:", JSON.stringify(atRest));
  // Playing loads none of them again, and draws many of them (each one's texture uploaded and kept while it is).
  const loadedBefore = requested.length;
  await page.locator('[data-tl="play"]').click();
  await page.waitForTimeout(1500);
  await page.locator('[data-tl="play"]').click();
  expect(requested.length).toBe(loadedBefore);
  await page.waitForTimeout(300);
  const played = await scene();
  console.log("after playing:", JSON.stringify(played));
  expect(played.textures).toBeGreaterThan(atRest.textures + 10);
  // ComfyUI runs (its queue has a job, the `status` event): the item drawn and the 8 ahead stay, the others go with their GPU textures, and nothing loads.
  await page.evaluate(() => window.__studio.emit("status", { exec_info: { queue_remaining: 1 } }));
  await expect.poll(async () => (await scene()).loaded, { timeout: 10_000 }).toBeLessThanOrEqual(9);
  const running = await scene();
  console.log("while ComfyUI runs:", JSON.stringify(running));
  // At most one depth texture per item kept, and the color's.
  expect(running.textures).toBeLessThanOrEqual(running.loaded + 1);
  const before = requested.length;
  await page.waitForTimeout(500);
  expect(requested.length).toBe(before);
  // Its queue empties: everything loads again at rest.
  await page.evaluate(() => window.__studio.emit("status", { exec_info: { queue_remaining: 0 } }));
  await expect.poll(async () => (await scene()).loaded, { timeout: 30_000 }).toBe(48);
  expect(problems).toEqual([]);
});
