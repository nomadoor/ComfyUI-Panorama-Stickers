// docs/space-and-view.md "オービットの中心の印": when the orbit center's mark shows and how strong (ADR 0058).
import assert from "node:assert/strict";
import test from "node:test";

import { orbitMarkPoint, orbitMarkerAlpha, orbitMarkerFading } from "../web_src/studio/orbit_marker.js";
import { ORBIT_MARK_FADE_SECONDS, ORBIT_MARK_HOLD_SECONDS } from "../web_src/studio/view_scale.js";

const close = (actual, expected, eps = 1e-9) => assert.ok(Math.abs(actual - expected) <= eps, `${actual} != ${expected}`);

test("the hold and fade lengths are the spec's", () => {
  assert.equal(ORBIT_MARK_HOLD_SECONDS, 0.6);
  assert.equal(ORBIT_MARK_FADE_SECONDS, 0.5);
});

test("the mark shows while it is asked for or an orbit runs, and not otherwise", () => {
  assert.equal(orbitMarkerAlpha({}), 0);
  for (const asked of ["alt", "orbitKnob", "centerButton", "picking", "orbiting"]) assert.equal(orbitMarkerAlpha({ [asked]: true }), 1, asked);
});

test("after T is set the mark holds, then fades linearly, then is gone", () => {
  assert.equal(orbitMarkerAlpha({ sinceSet: 0 }), 1);
  assert.equal(orbitMarkerAlpha({ sinceSet: ORBIT_MARK_HOLD_SECONDS }), 1);
  close(orbitMarkerAlpha({ sinceSet: ORBIT_MARK_HOLD_SECONDS + ORBIT_MARK_FADE_SECONDS / 2 }), 0.5);
  assert.equal(orbitMarkerAlpha({ sinceSet: ORBIT_MARK_HOLD_SECONDS + ORBIT_MARK_FADE_SECONDS }), 0);
  assert.equal(orbitMarkerFading(ORBIT_MARK_HOLD_SECONDS), true);
  assert.equal(orbitMarkerFading(ORBIT_MARK_HOLD_SECONDS + ORBIT_MARK_FADE_SECONDS), false);
  assert.equal(orbitMarkerFading(null), false);
});

test("the mark's point: the next orbit's center for Alt and the orbit knob, else T (the destination T, not one an eased move carries)", () => {
  const T = [0, -1.6, -9];
  const center = [3, 0, -4];
  // Alt or a hover on the orbit knob: the next orbit's center wins, also over a hover on Set orbit center.
  assert.deepEqual(orbitMarkPoint({ alt: true, target: T, nextCenter: center }), center);
  assert.deepEqual(orbitMarkPoint({ orbitKnob: true, target: T, nextCenter: center }), center);
  assert.deepEqual(orbitMarkPoint({ alt: true, centerButton: true, target: T, nextCenter: center }), center);
  // With no selected center the next orbit turns about T.
  assert.deepEqual(orbitMarkPoint({ alt: true, target: T, nextCenter: null }), T);
  // During an orbit and while Set orbit center waits: T.
  assert.deepEqual(orbitMarkPoint({ alt: true, orbiting: true, target: T, nextCenter: center }), T);
  assert.deepEqual(orbitMarkPoint({ alt: true, picking: true, target: T, nextCenter: center }), T);
  assert.deepEqual(orbitMarkPoint({ centerButton: true, target: T, nextCenter: center }), T);
  assert.deepEqual(orbitMarkPoint({ sinceSet: 0.1, target: T, nextCenter: center }), T);
});
