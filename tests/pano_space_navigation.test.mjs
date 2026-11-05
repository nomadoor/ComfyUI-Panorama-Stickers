import assert from "node:assert/strict";
import test from "node:test";

import { orbitView, panDepth, panView, spaceCamera } from "../web_src/pano_space.js";
import { createSpaceNavigation } from "../web_src/pano_space_navigation.js";

// docs/editor-interaction.md "視点の操作": how a view moves through the World (createSpaceNavigation, which the
// Preview's Scene viewer moves its view with), with a fake three.js view (pickSurface) and the content's sphere.
function harness({ hit = null, sphere = { center: [0, 0, -5], radius: 2 }, view: overrides = {} } = {}) {
  const picks = [];
  const view = {
    spaceMode: "6dof", viewPosition: [0, 0, 0], viewYaw: 0, viewPitch: 0, viewFov: 90, viewDistance: 1,
    viewMoved: false, viewTransition: null, ...overrides,
  };
  let revision = 1;
  const navigation = createSpaceNavigation({
    view,
    origin: () => [0, 0, 0],
    contentSphere: () => sphere,
    surface: {
      pickSurface: (...args) => {
        picks.push(args);
        return hit;
      },
      contentRevision: () => revision,
    },
    size: () => ({ width: 800, height: 400 }),
  });
  return { navigation, view, picks, sphere, setRevision: (value) => { revision = value; } };
}

test("a 6DoF orbit turns about the surface under the pointer, else the content's center; a pan moves at the pivot's depth", () => {
  const onSurface = harness({ hit: [1, 2, -3] });
  assert.deepEqual(onSurface.navigation.spaceDrag("orbit", { x: 10, y: 20 }), { kind: "space_orbit", last: { x: 10, y: 20 }, pivot: [1, 2, -3] });
  // The pick looks from the view as drawn, at the canvas point.
  const [camera, x, y, width, height] = onSurface.picks[0];
  assert.deepEqual([x, y, width, height], [10, 20, 800, 400]);
  assert.deepEqual(camera, spaceCamera(onSurface.navigation.spaceViewState(), 800, 400, onSurface.sphere));
  // Over empty space before the view moved: the content's center.
  const empty = harness();
  assert.deepEqual(empty.navigation.spaceDrag("orbit", { x: 10, y: 20 }).pivot, [0, 0, -5]);
  const pan = harness({ hit: [1, 2, -3] });
  assert.deepEqual(pan.navigation.spaceDrag("pan", { x: 10, y: 20 }), { kind: "space_pan", last: { x: 10, y: 20 }, depth: panDepth(pan.navigation.spaceViewState(), 2) });
});

test("a 6DoF wheel step zooms toward the surface under the pointer, picking again only when the pick cannot be reused", () => {
  const h = harness({ hit: [0, 0, -4] });
  h.navigation.zoomSpaceAt({ x: 400, y: 200 }, 1);
  assert.equal(h.picks.length, 1);
  assert.equal(h.view.viewMoved, true);
  const after = h.view.viewPosition[2];
  assert.ok(after < 0 && after > -4);
  // The next step at the same point reuses the pick and keeps going toward it.
  h.navigation.zoomSpaceAt({ x: 400, y: 200 }, 1);
  assert.equal(h.picks.length, 1);
  assert.ok(h.view.viewPosition[2] < after);
  // Other content picks again.
  h.setRevision(2);
  h.navigation.zoomSpaceAt({ x: 400, y: 200 }, 1);
  assert.equal(h.picks.length, 2);
});

test("a view transition starts from the view shown now; one already there ends at once; grabbing the view drops it", () => {
  const h = harness({ view: { viewMoved: true, viewDistance: 3 } });
  const from = h.navigation.spaceViewState();
  h.navigation.transitionView({ ...from, yaw_deg: 90 });
  assert.deepEqual(h.view.viewTransition.from, from);
  assert.equal(h.view.viewTransition.to.yaw_deg, 90);
  h.navigation.cancelViewTransition();
  assert.equal(h.view.viewTransition, null);
  // Already there: the end (Reset View's moved: false) applies at once.
  h.navigation.transitionView(h.navigation.spaceViewState(), { mode: "6dof", moved: false });
  assert.equal(h.view.viewTransition, null);
  assert.equal(h.view.viewMoved, false);
});

test("6DoF starts where 3DoF stands; back to 3DoF moves to the origin keeping the direction, and enters 3DoF there", () => {
  const h = harness({ view: { spaceMode: "3dof", viewYaw: 30 } });
  h.navigation.setSpaceMode("6dof");
  assert.equal(h.view.spaceMode, "6dof");
  assert.equal(h.view.viewTransition, null);
  assert.deepEqual(h.view.viewPosition, [0, 0, 0]);
  h.view.viewPosition = [3, 1, -2];
  h.view.viewMoved = true;
  h.navigation.setSpaceMode("3dof");
  const { to, end } = h.view.viewTransition;
  assert.deepEqual(to.position, [0, 0, 0]);
  assert.equal(to.yaw_deg, 30);
  assert.equal(to.distance, 2);
  assert.deepEqual(end, { mode: "3dof", moved: false });
  // Still 6DoF on the way; the end enters 3DoF.
  assert.equal(h.view.spaceMode, "6dof");
  h.navigation.applyViewTransitionEnd(end);
  assert.equal(h.view.spaceMode, "3dof");
  assert.deepEqual(h.navigation.spaceViewState().position, [0, 0, 0]);
});

test("a 6DoF drag pans at its depth or orbits about its pivot by the pointer's move", () => {
  const pan = harness({ view: { viewMoved: true, viewDistance: 2 } });
  const before = pan.navigation.spaceViewState();
  const drag = { kind: "space_pan", last: { x: 90, y: 45 }, depth: 2 };
  pan.navigation.moveSpaceDrag(drag, { x: 100, y: 50 });
  assert.deepEqual(pan.navigation.spaceViewState().position, panView(before, 10, 5, 800, 400, 2).position);
  assert.deepEqual(drag.last, { x: 100, y: 50 });
  const orbit = harness({ view: { viewMoved: true, viewDistance: 2 } });
  const start = orbit.navigation.spaceViewState();
  orbit.navigation.moveSpaceDrag({ kind: "space_orbit", last: { x: 90, y: 45 }, pivot: [0, 0, -1] }, { x: 100, y: 50 });
  const expected = orbitView(start, 10, 5, 400, [0, 0, -1]);
  assert.deepEqual([orbit.view.viewYaw, orbit.view.viewPitch], [expected.yaw_deg, expected.pitch_deg]);
});

// docs/preview-node.md "ノード上" and docs/space-and-view.md "寄る" (ADR 0061): Alt + wheel and a pinch on the Scene viewer
// change the view's FOV by VIEW_FOV_STEP_DEG within its range, at once, the place and direction staying; a transition
// under way stops where it shows.
test("a zoom step changes the view's FOV by one step within the range, and stops a transition where it shows", () => {
  const h = harness({ view: { viewFov: 100 } });
  h.navigation.zoomFov(1);
  assert.equal(h.view.viewFov, 98);
  h.navigation.zoomFov(-1);
  h.navigation.zoomFov(-1);
  assert.equal(h.view.viewFov, 102);
  assert.deepEqual(h.view.viewPosition, [0, 0, 0]);
  assert.equal(h.view.viewMoved, false);
  const low = harness({ view: { viewFov: 35 } });
  low.navigation.zoomFov(1);
  assert.equal(low.view.viewFov, 35);
  const moving = harness({ view: { viewTransition: { to: {} } } });
  moving.navigation.zoomFov(1);
  assert.equal(moving.view.viewTransition, null);
});

// docs/editor-interaction.md "ホイール" reuseWheelPick (ADR 0061): a zoom changes what is under the pointer, so the next
// wheel step picks again.
test("a wheel step after a zoom step picks again", () => {
  const h = harness({ hit: [0, 0, -4] });
  h.navigation.zoomSpaceAt({ x: 400, y: 200 }, 1);
  h.navigation.zoomFov(1);
  h.navigation.zoomSpaceAt({ x: 400, y: 200 }, 1);
  assert.equal(h.picks.length, 2);
});
