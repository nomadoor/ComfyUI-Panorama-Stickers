import { expect, test } from "@playwright/test";

// docs/threejs-spark-integration.md "glTF のアニメーション" (ADR 0043): an animated 3D file draws its original's skin and
// morphs with the editor GLB's material, posed by the clip frame through AnimationMixer.setTime, and is picked in its
// pose; its box is the rest shape's.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

const RED = [255, 0, 0];
const NONE = [0, 0, 0];

test("an animated 3D file shows and is picked in its clip's pose at the playhead", async ({ page }) => {
  const problems = watch(page);
  await page.goto("/tests/browser/pages/gltf_animation.html");
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 45_000 }).catch(() => {});
  const check = await page.evaluate(() => window.__check);
  expect(problems).toEqual([]);
  expect(check.error).toBeNull();
  // The box is the editor GLB's, the rest shape's.
  expect(check.box).toEqual({ min: [-2, -0.5, 0], max: [2, 0.5, 0] });
  const frame = (label) => check.frames.find((item) => item.label === label);
  // At 0 s both quads rest; red, the editor GLB's material, though the original has no vertex colors.
  expect(frame("rest").skinned).toEqual({ rest: RED, up: NONE, down: NONE });
  expect(frame("rest").morphed).toEqual({ rest: RED, up: NONE });
  expect(frame("rest").pick).toBeNull();
  // At 1.6 s of "Up" the joint and the morph have moved 0.8 up, and the pick finds the skinned quad there.
  for (const label of ["up", "speed", "loop"]) {
    expect(frame(label).skinned, label).toEqual({ rest: NONE, up: RED, down: NONE });
    expect(frame(label).morphed, label).toEqual({ rest: NONE, up: RED });
    expect(frame(label).pick[1], label).toBeCloseTo(0.8, 1);
  }
  // The second clip moves the joint down and leaves the morph at its default weight.
  expect(frame("down").skinned).toEqual({ rest: NONE, up: NONE, down: RED });
  expect(frame("down").morphed).toEqual({ rest: RED, up: NONE });
  // Back at 0 s of the first clip, nothing of the other is left.
  expect(frame("again").skinned).toEqual(frame("rest").skinned);
  expect(frame("again").morphed).toEqual(frame("rest").morphed);
});
