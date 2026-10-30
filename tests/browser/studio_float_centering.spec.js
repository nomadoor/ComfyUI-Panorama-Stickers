import { expect, test } from "@playwright/test";
import { measureFloats } from "./pages/float_measure.js";

// Every float over the stage of the new editor and of the Preview window keeps its buttons centered (docs/design.md
// "新しい UI の見た目", the floats' centering rule): each button on its float's center line (x in a column, y in a
// row), the lit / chosen fill and the icon on the button's center, within 0.5px, at devicePixelRatio 1 and 2.
// Measured with tests/browser/pages/float_measure.js in a real browser engine.

const LIMIT = 0.5;

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function go(page, file, flag) {
  await page.goto(`/tests/browser/pages/${file}`);
  await page.waitForFunction((name) => window[name]?.ready, flag, { timeout: 30_000 });
  expect(await page.evaluate((name) => window[name].error, flag)).toBeNull();
}

// The rows over the limit, as readable lines (an empty list passes).
function offsets(rows) {
  const out = [];
  for (const row of rows) {
    for (const key of ["group", "fillX", "fillY", "iconX", "iconY"]) {
      if (row[key] !== null && Math.abs(row[key]) > LIMIT) out.push(`${row.float} ${row.button} ${key} ${row[key]}px`);
    }
  }
  return out;
}

// The separator of a column spans the column (less its margins), so centering the buttons does not shrink it.
async function columnSeparators(page) {
  return page.evaluate(() =>
    [...document.querySelectorAll(".pano-studio-float.is-rail > .pano-studio-sep, .pano-studio-float.is-knobs > .pano-studio-sep")].map((sep) => {
      const float = sep.parentElement.getBoundingClientRect();
      const line = sep.getBoundingClientRect();
      return { width: line.width, left: line.left - float.left, right: float.right - line.right };
    }),
  );
}

for (const dpr of [1, 2]) {
  test.describe(`devicePixelRatio ${dpr}`, () => {
    test.use({ viewport: { width: 1440, height: 860 }, deviceScaleFactor: dpr });

    test("the editor's floats: tabs, left column, the knobs with ?, bottom right, Output, the bars", async ({ page }) => {
      const problems = watch(page);
      await go(page, "studio_editor.html", "__studio");
      await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
      const closed = await page.evaluate(measureFloats);
      // "?" lit (the list open) shows the lit fill.
      await page.locator('[data-action="shortcuts"]').click();
      await expect(page.locator('[data-action="shortcuts"]')).toHaveClass(/is-lit/);
      const open = await page.evaluate(measureFloats);
      const floats = new Set(open.map((row) => row.float));
      for (const name of ["tabs", "rail", "nav", "buttons", "output"]) expect(floats.has(name), name).toBe(true);
      expect(open.find((row) => row.button === "Shortcuts")).toBeTruthy();
      expect(offsets([...closed, ...open])).toEqual([]);
      for (const sep of await columnSeparators(page)) {
        expect(sep.width).toBeGreaterThan(20);
        expect(Math.abs(sep.left - sep.right)).toBeLessThanOrEqual(LIMIT);
      }
      expect(problems).toEqual([]);
    });

    test("the paint bar and its colors, the mask bar, and the selection bar", async ({ page }) => {
      const problems = watch(page);
      await go(page, "studio_paint.html", "__studio");
      await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
      await page.locator('[data-tool="paint"]').click();
      await expect(page.locator("[data-paint-bar]")).toHaveCount(1);
      const paint = await page.evaluate(measureFloats);
      expect(paint.some((row) => row.float === "bar/colors")).toBe(true);
      await page.locator('[data-tool="mask"]').click();
      await expect(page.locator('[data-paint-bar][data-kind="mask"]')).toHaveCount(1);
      const mask = await page.evaluate(measureFloats);
      expect(offsets([...paint, ...mask])).toEqual([]);

      await go(page, "studio_select.html", "__studio");
      await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
      await page.waitForTimeout(400);
      // The sky image of the page (as tests/browser/studio_select.spec.js finds it).
      const sky = await page.evaluate(async () => {
        const { stageCamera } = await import("/web_src/studio/stage_view.js");
        const { viewProjection } = await import("/web_src/pano_editor_view.js");
        const { yawPitchToDir } = await import("/web_src/pano_camera_math.js");
        const rect = document.querySelector("[data-stage-canvas]").getBoundingClientRect();
        const pose = { position: [0, 0.1, 1.6], yaw_deg: 0, pitch_deg: -4, roll_deg: 0, target: [0, -0.2, -2.4] };
        const camera = stageCamera(pose, rect.width, rect.height, 50);
        const at = viewProjection(camera, rect.width, rect.height).project(yawPitchToDir(-38, 6));
        return { x: rect.left + at.x, y: rect.top + at.y };
      });
      await page.mouse.click(sky.x, sky.y);
      await expect(page.locator('.pano-studio-at-bar [data-kind="sky"]')).toHaveCount(1);
      const selection = await page.evaluate(measureFloats);
      expect(selection.filter((row) => row.float === "bar").length).toBeGreaterThan(2);
      expect(offsets(selection)).toEqual([]);
      expect(problems).toEqual([]);
    });

    test("the Preview window's floats: close, the knobs with ?, bottom right", async ({ page }) => {
      const problems = watch(page);
      await go(page, "preview_window.html", "__preview");
      expect(await page.evaluate(() => window.__preview.open())).toBe(true);
      const help = page.locator('[data-preview-window] [data-action="shortcuts"]');
      await expect(help).toBeVisible();
      await help.click();
      await expect(help).toHaveClass(/is-lit/);
      const rows = await page.evaluate(measureFloats);
      const floats = new Set(rows.map((row) => row.float));
      for (const name of ["preview/close", "preview/nav", "preview/buttons"]) expect(floats.has(name), name).toBe(true);
      expect(offsets(rows)).toEqual([]);
      expect(problems).toEqual([]);
    });
  });
}
