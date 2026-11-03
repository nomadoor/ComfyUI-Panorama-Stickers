// The orbit center's mark (docs/space-and-view.md "オービットの中心の印", ADR 0058): when it shows, how strong, and on which
// World point. Pure: stage.js gathers the state, stage_overlay.js draws it with ORBIT_MARK_LOOK (docs/design.md "大きさ").
import { ORBIT_MARK_FADE_SECONDS, ORBIT_MARK_HOLD_SECONDS } from "./view_scale.js";

// How it looks (CSS px; docs/design.md "大きさ" オービットの中心の印): a dot inside a thin ring, each over a dark rim.
export const ORBIT_MARK_LOOK = Object.freeze({
  dotRadius: 2.5,
  dot: "rgba(255, 255, 255, 0.92)",
  dotRim: 1,
  ringRadius: 9,
  ringWidth: 1.25,
  ring: "rgba(255, 255, 255, 0.6)",
  under: "rgba(0, 0, 0, 0.35)",
  underWidth: 3.25,
});

// The state the mark goes by: alt (Alt held), orbitKnob / centerButton (the pointer over the orbit knob / Set orbit
// center), picking (Set orbit center waits), orbiting (an orbit runs), sinceSet (seconds since a double click or Set
// orbit center set T, or null).

// How strong it shows, 0 to 1: 1 while asked for or an orbit runs; after T was set, full for ORBIT_MARK_HOLD_SECONDS,
// then fading linearly over ORBIT_MARK_FADE_SECONDS.
export function orbitMarkerAlpha({ alt = false, orbitKnob = false, centerButton = false, picking = false, orbiting = false, sinceSet = null } = {}) {
  if (alt || orbitKnob || centerButton || picking || orbiting) return 1;
  if (sinceSet === null || !(sinceSet >= 0)) return 0;
  if (sinceSet <= ORBIT_MARK_HOLD_SECONDS) return 1;
  return Math.max(0, 1 - (sinceSet - ORBIT_MARK_HOLD_SECONDS) / ORBIT_MARK_FADE_SECONDS);
}

// Whether the mark after T was set is still showing (the stage draws each frame until it is gone).
export function orbitMarkerFading(sinceSet) {
  return sinceSet !== null && sinceSet >= 0 && sinceSet < ORBIT_MARK_HOLD_SECONDS + ORBIT_MARK_FADE_SECONDS;
}

// The World point it is on: the next orbit's center (`nextCenter`, view_camera.js orbitCenter(), or T without one) for
// Alt and the orbit knob, unless an orbit runs or Set orbit center waits; else `target`, T as it is set (the
// destination, so right after a double click the mark is on the clicked point while the view turns to it).
export function orbitMarkPoint({ alt = false, orbitKnob = false, picking = false, orbiting = false, target, nextCenter = null }) {
  if ((alt || orbitKnob) && !orbiting && !picking) return nextCenter ?? target;
  return target;
}

// Where the mark goes (`at`: pano_space.js projectPoint's point in the view's CSS px, or null behind the view) when it
// is drawn within `box` ({ x, y, width, height } in the same px: the view, or the Camera tab's frame box): { x, y }, or
// null when its ring lies wholly outside the box (docs/space-and-view.md "オービットの中心の印": not drawn off the
// screen; stage_overlay.js clips what is left to the box).
export function markOnView(at, box) {
  if (!at) return null;
  const r = ORBIT_MARK_LOOK.ringRadius + ORBIT_MARK_LOOK.underWidth / 2;
  if (at.x < box.x - r || at.y < box.y - r || at.x > box.x + box.width + r || at.y > box.y + box.height + r) return null;
  return { x: at.x, y: at.y };
}
