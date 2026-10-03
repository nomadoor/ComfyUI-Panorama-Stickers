import assert from "node:assert/strict";
import test from "node:test";

import {
  VIEW_TRANSITION_MAX_MS,
  VIEW_TRANSITION_MIN_MS,
  blendView,
  easeInOutCubic,
  shownSpaceMode,
  spaceModeChoice,
  startViewTransition,
  viewTransitionDuration,
  viewTransitionFrame,
} from "../web_src/pano_view_transition.js";

const view = (overrides = {}) => ({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: 1, ...overrides });

function assertViewClose(actual, expected) {
  actual.position.forEach((value, index) => assert.ok(Math.abs(value - expected.position[index]) < 1e-9, `position ${actual.position} vs ${expected.position}`));
  for (const key of ["yaw_deg", "pitch_deg", "hFOV_deg", "distance"]) {
    assert.ok(Math.abs(actual[key] - expected[key]) < 1e-9, `${key} ${actual[key]} vs ${expected[key]}`);
  }
}

test("the transition eases in and out with a cubic", () => {
  assert.equal(easeInOutCubic(0), 0);
  assert.equal(easeInOutCubic(0.5), 0.5);
  assert.equal(easeInOutCubic(1), 1);
  assert.ok(easeInOutCubic(0.1) < 0.1);
  assert.ok(easeInOutCubic(0.9) > 0.9);
  assert.ok(Math.abs(easeInOutCubic(0.25) + easeInOutCubic(0.75) - 1) < 1e-12);
});

test("blendView moves the position and the pivot distance in a straight line, and the yaw the shortest way", () => {
  const from = view({ position: [0, 0, 0], yaw_deg: 170, pitch_deg: -10, hFOV_deg: 60, distance: 2 });
  const to = view({ position: [4, -2, 6], yaw_deg: -170, pitch_deg: 30, hFOV_deg: 100, distance: 4 });
  assertViewClose(blendView(from, to, 0), from);
  assertViewClose(blendView(from, to, 1), { ...to, yaw_deg: -170 });
  // Halfway in time is halfway in value: through 180, not back through 0.
  assertViewClose(blendView(from, to, 0.5), { position: [2, -1, 3], yaw_deg: -180, pitch_deg: 10, hFOV_deg: 80, distance: 3 });
  const quarter = blendView(from, to, 0.25);
  assert.ok(quarter.yaw_deg > 170 && quarter.yaw_deg < 180);
  // Out of range progress stays at the ends.
  assertViewClose(blendView(from, to, -1), from);
});

test("the transition takes longer the more it turns and the farther it travels for the content's size", () => {
  const from = view();
  assert.equal(viewTransitionDuration(from, view({ yaw_deg: 0.001 })), VIEW_TRANSITION_MIN_MS);
  const quarterTurn = viewTransitionDuration(from, view({ yaw_deg: 90 }));
  const halfTurn = viewTransitionDuration(from, view({ yaw_deg: 180 }));
  assert.ok(quarterTurn > VIEW_TRANSITION_MIN_MS && quarterTurn < halfTurn);
  assert.equal(halfTurn, VIEW_TRANSITION_MAX_MS);
  // The shortest way round: 350 degrees one way is 10 the other.
  assert.equal(viewTransitionDuration(view({ yaw_deg: 175 }), view({ yaw_deg: -175 })), viewTransitionDuration(from, view({ yaw_deg: 10 })));
  // Travel is measured in the content's size.
  const near = viewTransitionDuration(from, view({ position: [1, 0, 0] }), 10);
  const far = viewTransitionDuration(from, view({ position: [10, 0, 0] }), 10);
  assert.ok(near > VIEW_TRANSITION_MIN_MS && near < far);
  assert.equal(viewTransitionDuration(from, view({ position: [100, 0, 0] }), 1), VIEW_TRANSITION_MAX_MS);
  assert.equal(viewTransitionDuration(from, view({ position: [100, 0, 0] }), 10), VIEW_TRANSITION_MAX_MS);
});

test("a transition shows the eased view at each time and arrives at its end", () => {
  const from = view({ yaw_deg: 0 });
  const to = view({ yaw_deg: 90, position: [0, 0, 4] });
  const transition = startViewTransition(from, to, 1000, { scale: 4 });
  assert.ok(transition.durationMs >= VIEW_TRANSITION_MIN_MS && transition.durationMs <= VIEW_TRANSITION_MAX_MS);
  assert.deepEqual(viewTransitionFrame(transition, 1000), { view: blendView(from, to, 0), done: false });
  const mid = viewTransitionFrame(transition, 1000 + transition.durationMs / 2);
  assert.equal(mid.done, false);
  assertViewClose(mid.view, blendView(from, to, 0.5));
  assert.deepEqual(viewTransitionFrame(transition, 1000 + transition.durationMs), { view: to, done: true });
  assert.deepEqual(viewTransitionFrame(transition, 99999), { view: to, done: true });
});

test("there is no transition to the view already shown", () => {
  assert.equal(startViewTransition(view({ yaw_deg: 180 }), view({ yaw_deg: -180 }), 0), null);
  assert.notEqual(startViewTransition(view(), view({ distance: 2 }), 0), null);
});

test("a new transition during another starts from the view shown then, without a jump", () => {
  const first = startViewTransition(view(), view({ position: [10, 0, 0], yaw_deg: 90 }), 0, { scale: 10, end: { mode: "3dof", moved: false } });
  const ts = first.durationMs / 3;
  const shown = viewTransitionFrame(first, ts).view;
  const target = view({ position: [0, 5, 0], yaw_deg: -45 });
  const second = startViewTransition(shown, target, ts, { scale: 10 });
  assertViewClose(viewTransitionFrame(second, ts).view, shown);
  // The new one replaces the old with its own end: the 3DoF the first ended in is not applied.
  assert.equal(second.end, null);
  assert.deepEqual(viewTransitionFrame(second, ts + second.durationMs), { view: target, done: true });
});

test("a transition stopped by a drag or a wheel step leaves the view it showed, and its end is dropped", () => {
  // The editor keeps the view of the last frame shown and forgets the transition; only an arrived one
  // applies its end (the 3DoF it was taking the view back to).
  const transition = startViewTransition(view({ position: [3, 0, 0] }), view(), 0, { end: { mode: "3dof", moved: false } });
  const frame = viewTransitionFrame(transition, transition.durationMs / 2);
  assert.equal(frame.done, false);
  assert.ok(frame.view.position[0] > 0 && frame.view.position[0] < 3);
  assert.equal(shownSpaceMode("6dof", transition), "3dof");
  assert.equal(shownSpaceMode("6dof", null), "6dof");
  assert.equal(shownSpaceMode("3dof", startViewTransition(view(), view({ yaw_deg: 30 }), 0)), "3dof");
});

test("a transition shows its start before its start time", () => {
  const from = view({ yaw_deg: 10, position: [1, 2, 3] });
  const transition = startViewTransition(from, view({ yaw_deg: 80 }), 1000);
  const frame = viewTransitionFrame(transition, 500);
  assert.equal(frame.done, false);
  assertViewClose(frame.view, from);
});

test("turning only the pitch or the FOV takes longer the more it turns", () => {
  const from = view();
  const pitch = viewTransitionDuration(from, view({ pitch_deg: 45 }));
  const fov = viewTransitionDuration(from, view({ hFOV_deg: 70 }));
  assert.equal(pitch, viewTransitionDuration(from, view({ yaw_deg: 45 })));
  assert.ok(pitch > VIEW_TRANSITION_MIN_MS && pitch < VIEW_TRANSITION_MAX_MS);
  assert.ok(fov > VIEW_TRANSITION_MIN_MS && fov < pitch);
  assert.ok(viewTransitionDuration(from, view({ pitch_deg: 89 })) > pitch);
});

test("the 3DoF | 6DoF buttons choose from the mode the view is in and where a transition goes", () => {
  const goingBack = startViewTransition(view({ position: [3, 0, 0] }), view(), 0, { end: { mode: "3dof", moved: false } });
  const reset = startViewTransition(view({ yaw_deg: 40 }), view(), 0, { end: { mode: "6dof", moved: false } });
  // 3DoF from 6DoF moves back to the origin; on the way back, or in 3DoF, it does nothing more.
  assert.equal(spaceModeChoice("6dof", null, "3dof"), "return");
  assert.equal(spaceModeChoice("6dof", reset, "3dof"), "return");
  assert.equal(spaceModeChoice("6dof", goingBack, "3dof"), "keep");
  assert.equal(spaceModeChoice("3dof", null, "3dof"), "keep");
  // 6DoF on the way back stops it where it shows: the view is in 6DoF already, and stays there.
  assert.equal(spaceModeChoice("6dof", goingBack, "6dof"), "switch");
  assert.equal(spaceModeChoice("6dof", null, "6dof"), "keep");
  assert.equal(spaceModeChoice("6dof", reset, "6dof"), "keep");
  assert.equal(spaceModeChoice("3dof", null, "6dof"), "switch");
});

test("once a transition back to 3DoF is dropped, the buttons show the mode the view is in", () => {
  const goingBack = startViewTransition(view({ position: [3, 0, 0] }), view(), 0, { end: { mode: "3dof", moved: false } });
  // On the way the view is in 6DoF and the buttons show the 3DoF it goes to.
  assert.equal(shownSpaceMode("6dof", goingBack), "3dof");
  // A drag drops it (the editor's cancelViewTransition): the buttons show 6DoF, which is what the view
  // is in, and each button works from there.
  assert.equal(shownSpaceMode("6dof", null), "6dof");
  assert.equal(spaceModeChoice("6dof", null, "6dof"), "keep");
  assert.equal(spaceModeChoice("6dof", null, "3dof"), "return");
});
