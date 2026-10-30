// The wait and the reveal of a 3D file placed on the new UI's stage (docs/studio-ui.md "Add とドロップの見せ方" "置く間";
// docs/space-and-view.md "World の物のガイド"; the values: docs/design.md "新しい UI の見た目" "大きさ", "動き"): until its
// item has drawn, its guide shows a stand-in box (DROP_PREVIEW_BOX, then the route's box) with a band of light running
// through it; once it has drawn, the band fades and the item fades in over LOAD_REVEAL_MS. With reduced motion, no band
// and no fade. Time only: add_files.js says what was placed, editor.js multiplies the item's opacity and asks whether
// it has drawn, world_guides.js takes the stand-in box, stage_overlay.js draws the band.
import { DROP_PREVIEW_BOX } from "./view_scale.js";

// How long the band takes to cross the guide once (it repeats), and how long the reveal takes (ms).
export const LOAD_SHIMMER_MS = 1400;
export const LOAD_REVEAL_MS = 250;
// The most of the reveal one frame moves on (ms): a frame held up (the item's first draws compile shaders) does not
// skip the fade.
export const LOAD_REVEAL_STEP_MS = 40;
// The band (docs/design.md "大きさ" "読み込み中のガイドの光の帯"): its width as a share of the diagonal of the guide's screen
// rectangle, its white at the middle on the lines and on the faces, and how much wider its line is than the guide's.
export const LOAD_LOOK = Object.freeze({ band: 0.35, lineAlpha: 0.9, fillAlpha: 0.18, extraWidth: 1 });

// The ease-out of the reveal (quadratic: a cubic one is past half within a fifth of the time, and the item blends in
// linear light, so it looked as if it popped in): t in 0..1.
export function easeOut(t) {
  const clamped = Math.max(0, Math.min(1, t));
  return 1 - (1 - clamped) ** 2;
}

// now(): the clock (ms). reducedMotion(): the OS asks for less motion.
export function createLoadReveal({ now = () => performance.now(), reducedMotion = () => false } = {}) {
  // By Sticker id: { box (the route's, in its own frame, or null before it answers), revealAt (ms of the last look,
  // null before its item has drawn), elapsed (ms of the reveal gone, each look adding at most LOAD_REVEAL_STEP_MS) }.
  const entries = new Map();

  const progress = (entry) => entry.elapsed / LOAD_REVEAL_MS;

  return {
    // A 3D file was placed as `id`: it loads from now.
    start(id) {
      entries.set(id, { box: null, revealAt: null, elapsed: 0 });
    },
    // The route answered with its box (in its own frame).
    box(id, box) {
      const entry = entries.get(id);
      if (entry && box) entry.box = box;
    },
    // It failed or went away: nothing more shows for it.
    drop(id) {
      entries.delete(id);
    },
    // Keeps only the ids `present` has (a Set): one taken away (Undo) stops.
    retain(present) {
      for (const id of [...entries.keys()]) if (!present.has(id)) entries.delete(id);
    },
    // Whether its item has drawn now (asked at each frame): the reveal starts the first time; it ends when done.
    observe(id, drawn) {
      const entry = entries.get(id);
      if (!entry || !drawn) return;
      const time = now();
      if (entry.revealAt !== null) entry.elapsed += Math.min(Math.max(0, time - entry.revealAt), LOAD_REVEAL_STEP_MS);
      entry.revealAt = time;
      if (reducedMotion() || progress(entry) >= 1) entries.delete(id);
    },
    // The stand-in box of its guide while its item has not drawn, else null.
    pendingBox(id) {
      const entry = entries.get(id);
      return entry && entry.revealAt === null ? entry.box ?? DROP_PREVIEW_BOX : null;
    },
    // What its item's opacity is multiplied by: 0 until it has drawn, then up to 1 over the reveal.
    opacity(id) {
      const entry = entries.get(id);
      if (!entry) return 1;
      if (entry.revealAt === null) return 0;
      return reducedMotion() ? 1 : easeOut(progress(entry));
    },
    // How strong its guide's band is: 1 while it loads, fading out over the reveal; 0 with reduced motion.
    shimmer(id) {
      const entry = entries.get(id);
      if (!entry || reducedMotion()) return 0;
      return entry.revealAt === null ? 1 : 1 - easeOut(progress(entry));
    },
    // Where the band is in its crossing, 0..1.
    phase: () => (now() % LOAD_SHIMMER_MS) / LOAD_SHIMMER_MS,
    // Something moves: the stage draws each frame.
    animating: () => entries.size > 0 && !reducedMotion(),
    // An item is fading in: what shows it (the Output window too) draws again.
    revealing: () => [...entries.values()].some((entry) => entry.revealAt !== null),
  };
}
