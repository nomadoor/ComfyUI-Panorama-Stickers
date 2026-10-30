// The wait and the reveal of a placed 3D file (web_src/studio/load_reveal.js): docs/studio-ui.md "Add とドロップの見せ方"
// "置く間" — a stand-in box with a band of light while it loads, the band fading and the item fading in over
// LOAD_REVEAL_MS once it has drawn, nothing moving with reduced motion; and its guide (world_guides.js worldGuideItems).
import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import { LOAD_REVEAL_MS, LOAD_REVEAL_STEP_MS, LOAD_SHIMMER_MS, createLoadReveal, easeOut } from "../web_src/studio/load_reveal.js";
import { DROP_PREVIEW_BOX } from "../web_src/studio/view_scale.js";
import { worldGuideItems } from "../web_src/studio/world_guides.js";

function clock() {
  const time = { now: 1000 };
  return { time, now: () => time.now };
}

test("while it loads: the stand-in box (DROP_PREVIEW_BOX, then the route's), the band at full strength, the item unseen", () => {
  const { time, now } = clock();
  const reveal = createLoadReveal({ now });
  assert.equal(reveal.animating(), false);
  reveal.start("a");
  assert.deepEqual(reveal.pendingBox("a"), DROP_PREVIEW_BOX);
  const box = { min: [-1, 0, -1], max: [1, 3, 1] };
  reveal.box("a", box);
  assert.deepEqual(reveal.pendingBox("a"), box);
  assert.equal(reveal.shimmer("a"), 1);
  assert.equal(reveal.opacity("a"), 0);
  assert.equal(reveal.animating(), true);
  assert.equal(reveal.revealing(), false);
  // The band crosses once each LOAD_SHIMMER_MS.
  time.now = 1000 + LOAD_SHIMMER_MS * 2.25;
  assert.ok(Math.abs(reveal.phase() - ((1000 + LOAD_SHIMMER_MS * 2.25) % LOAD_SHIMMER_MS) / LOAD_SHIMMER_MS) < 1e-9);
  reveal.observe("a", false);
  assert.equal(reveal.opacity("a"), 0, "not drawn yet");
  assert.equal(reveal.pendingBox("other"), null);
  assert.equal(reveal.opacity("other"), 1, "an object not placed now shows as it is");
});

test("once drawn: the item fades in and the band out over LOAD_REVEAL_MS, ease-out; then it is done", () => {
  const { time, now } = clock();
  const reveal = createLoadReveal({ now });
  reveal.start("a");
  reveal.observe("a", true);
  assert.equal(reveal.pendingBox("a"), null, "the item's own box takes over");
  assert.equal(reveal.opacity("a"), 0);
  assert.equal(reveal.shimmer("a"), 1);
  assert.equal(reveal.revealing(), true);
  // Frame by frame (25 ms each) up to half of it.
  for (let gone = 0; gone < LOAD_REVEAL_MS / 2; gone += 25) {
    time.now += 25;
    reveal.observe("a", true);
  }
  assert.ok(Math.abs(reveal.opacity("a") - easeOut(0.5)) < 1e-9);
  assert.ok(reveal.opacity("a") > 0.5, "ease-out: past half at half the time");
  assert.ok(Math.abs(reveal.shimmer("a") - (1 - easeOut(0.5))) < 1e-9);
  for (let step = 0; step < 10; step += 1) {
    time.now += 25;
    reveal.observe("a", true);
  }
  assert.equal(reveal.opacity("a"), 1);
  assert.equal(reveal.shimmer("a"), 0);
  assert.equal(reveal.animating(), false);
});

test("with reduced motion: no band, and the item shows at once when drawn; the stand-in guide still shows", () => {
  const { now } = clock();
  const reveal = createLoadReveal({ now, reducedMotion: () => true });
  reveal.start("a");
  assert.deepEqual(reveal.pendingBox("a"), DROP_PREVIEW_BOX);
  assert.equal(reveal.shimmer("a"), 0);
  assert.equal(reveal.animating(), false, "nothing to draw each frame");
  reveal.observe("a", true);
  assert.equal(reveal.opacity("a"), 1);
});

test("a failed or taken-away placement stops", () => {
  const { now } = clock();
  const reveal = createLoadReveal({ now });
  reveal.start("a");
  reveal.start("b");
  reveal.drop("a");
  reveal.retain(new Set(["c"]));
  assert.equal(reveal.animating(), false);
  assert.equal(reveal.pendingBox("b"), null);
});

test("a placed 3D file still loading has a guide of its stand-in box at its value now, marked loading; its center is the box's", () => {
  const state = loadSceneState({
    version: 2,
    stickers: [{ id: "m", placement: "world", source: { kind: "file", filename: "m.glb", subfolder: "3d" }, position: { value: [2, -1.6, -6] } }],
  });
  const value = { position: [2, -1.6, -6], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 1, active: true };
  const content = { evaluated: { stickers: [value] }, space: { stickers: [], fileStickers: [] } };
  assert.deepEqual(worldGuideItems(state, content), [], "no box: no guide");
  const [item] = worldGuideItems(state, content, () => null, () => DROP_PREVIEW_BOX);
  assert.equal(item.kind, "box");
  assert.equal(item.loading, true);
  assert.equal(item.segments.length, 12);
  assert.deepEqual(item.center, [2, -1.1, -6], "the stand-in box's middle: half its height above its bottom");
  // Hidden (not active): no guide.
  assert.deepEqual(worldGuideItems(state, { ...content, evaluated: { stickers: [{ ...value, active: false }] } }, () => null, () => DROP_PREVIEW_BOX), []);
});

test("a frame held up moves the reveal on by LOAD_REVEAL_STEP_MS at most, so the fade still shows", () => {
  const { time, now } = clock();
  const reveal = createLoadReveal({ now });
  reveal.start("a");
  reveal.observe("a", true);
  time.now += 500;
  reveal.observe("a", true);
  assert.ok(Math.abs(reveal.opacity("a") - easeOut(LOAD_REVEAL_STEP_MS / LOAD_REVEAL_MS)) < 1e-9);
  assert.ok(reveal.opacity("a") < 0.5);
});
