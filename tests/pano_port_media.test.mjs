import assert from "node:assert/strict";
import test from "node:test";

import { backgroundPlace, backgroundShownAt, bgMediaEnd } from "../web_src/pano_port_media.js";

// docs/timeline-ui.md "背景の行": where the background shows by its Clip range.
test("the playhead's frame maps to the background's time by its Clip range, and bg_color shows outside it", () => {
  assert.equal(backgroundPlace({ start: 0, in: 0, duration: null }), null);
  assert.deepEqual(backgroundPlace({ start: 10, in: 4, duration: 20 }), { origin: 6, start: 10, end: 30 });
  assert.deepEqual(backgroundPlace({ start: 0, in: 6, duration: null }), { origin: -6, start: 0, end: Infinity });
  const video = { video: true, frames: 48, duration: 2 };
  const clip = { start: 10, in: 4, duration: null };
  assert.equal(bgMediaEnd(clip, 24, video), 54);
  assert.deepEqual([9, 10, 53, 54].map((frame) => backgroundShownAt(clip, frame, 24, video)), [false, true, true, false]);
  // With a duration the Clip range ends it; a single image shows throughout its Clip range.
  assert.deepEqual([19, 20].map((frame) => backgroundShownAt({ start: 0, in: 0, duration: 20 }, frame, 24, video)), [true, false]);
  assert.deepEqual([2, 3, 500].map((frame) => backgroundShownAt({ start: 3, in: 0, duration: null }, frame, 24, { frames: 1 })), [false, true, true]);
  // The default Clip range ends with the media too, as in the output; a single image shows throughout.
  assert.deepEqual([47, 48, 500].map((frame) => backgroundShownAt({ start: 0, in: 0, duration: null }, frame, 24, video)), [true, false, false]);
  assert.equal(backgroundShownAt({ start: 0, in: 0, duration: null }, 500, 24, { frames: 1 }), true);
  // Under an upstream Scene, a VIDEO ends where its last frame ends at the Timeline fps.
  assert.deepEqual([47, 48].map((frame) => backgroundShownAt({ start: 0, in: 0, duration: null }, frame, 30, video, true)), [true, true]);
  assert.equal(backgroundShownAt({ start: 0, in: 0, duration: null }, 60, 30, video, true), false);
});
