import assert from "node:assert/strict";
import test from "node:test";

import { createSpace } from "../web_src/editor/space.js";
import { panDepth, spaceCamera } from "../web_src/pano_space.js";

// docs/editor-interaction.md "視点の操作": how the space view moves, through the editor's view functions, with a fake
// three.js view (pickSurface) and the content's sphere. The Preview's viewer moves by the same rules.
function harness({ hit = null, sphere = { center: [0, 0, -5], radius: 2 }, editor: overrides = {} } = {}) {
  const picks = [];
  const editor = {
    mode: "pano", spaceMode: "6dof", viewPosition: [0, 0, 0], viewYaw: 0, viewPitch: 0, viewFov: 90, viewDistance: 1,
    viewMoved: false, viewTransition: null, interaction: null, frame: 0, ...overrides,
  };
  const canvas = { width: 800, height: 400, setPointerCapture() {} };
  let revision = 1;
  const space = createSpace({
    app: { ui: { settings: { getSettingValue: () => undefined } } }, cameraV2: false, canvas, editor,
    editorView: {
      pickSurface: (...args) => {
        picks.push(args);
        return hit;
      },
      contentRevision: () => revision,
      sceneBox: () => null,
    },
    node: {}, runtime: {}, sceneV2: true, shotEditor: false, state: { stickers: [], camera: null }, stateV2: true,
    studio: true, viewController: { state: { inertia: { active: true, vx: 1, vy: 1 } } },
  });
  const noop = () => {};
  space.connect({
    editorViewInput: () => ({ space: { sphere } }), editorViewSceneState: () => ({ stickers: [] }), getActiveCutoutShot: () => null,
    isCameraSelected: () => false, isErpCamera: () => false, isFreeFrameView: () => false, moveFrameByKeys: noop,
    moveKeys: { elapsed: () => 0 }, requestDraw: noop, sceneFiles: () => null, startAnimation: (start) => start(), stickerById: () => null,
    syncFloatingViewButtonState: noop, updateCursor: noop,
  });
  return { space, editor, canvas, picks, sphere, setRevision: (value) => { revision = value; } };
}

test("a 6DoF orbit turns about the surface under the pointer, else the content's center; a pan moves at the pivot's depth", () => {
  const onSurface = harness({ hit: [1, 2, -3] });
  onSurface.space.startSpaceDrag("orbit", { x: 10, y: 20 }, 1);
  assert.deepEqual(onSurface.editor.interaction, { kind: "space_orbit", last: { x: 10, y: 20 }, pivot: [1, 2, -3] });
  // The pick looks from the view as drawn, at the canvas point.
  const [camera, x, y, width, height] = onSurface.picks[0];
  assert.deepEqual([x, y, width, height], [10, 20, 800, 400]);
  assert.deepEqual(camera, spaceCamera(onSurface.space.spaceViewState(), 800, 400, onSurface.sphere));
  // Over empty space before the view moved: the content's center.
  const empty = harness();
  empty.space.startSpaceDrag("orbit", { x: 10, y: 20 }, 1);
  assert.deepEqual(empty.editor.interaction.pivot, [0, 0, -5]);
  const pan = harness({ hit: [1, 2, -3] });
  pan.space.startSpaceDrag("pan", { x: 10, y: 20 }, 1);
  assert.deepEqual(pan.editor.interaction, { kind: "space_pan", last: { x: 10, y: 20 }, depth: panDepth(pan.space.spaceViewState(), 2) });
});

test("a 6DoF wheel step zooms toward the surface under the pointer, picking again only when the pick cannot be reused", () => {
  const h = harness({ hit: [0, 0, -4] });
  h.space.zoomSpaceAt({ x: 400, y: 200 }, 1);
  assert.equal(h.picks.length, 1);
  assert.equal(h.editor.viewMoved, true);
  const after = h.editor.viewPosition[2];
  assert.ok(after < 0 && after > -4);
  // The next step at the same point reuses the pick and keeps going toward it.
  h.space.zoomSpaceAt({ x: 400, y: 200 }, 1);
  assert.equal(h.picks.length, 1);
  assert.ok(h.editor.viewPosition[2] < after);
  // Other content picks again.
  h.setRevision(2);
  h.space.zoomSpaceAt({ x: 400, y: 200 }, 1);
  assert.equal(h.picks.length, 2);
});

test("a view transition starts from the view shown now; one already there ends at once; grabbing the view drops it", () => {
  const h = harness({ editor: { viewMoved: true, viewDistance: 3 } });
  const from = h.space.spaceViewState();
  h.space.transitionView({ ...from, yaw_deg: 90 });
  assert.deepEqual(h.editor.viewTransition.from, from);
  assert.equal(h.editor.viewTransition.to.yaw_deg, 90);
  h.space.cancelViewTransition();
  assert.equal(h.editor.viewTransition, null);
  // Already there: the end (Reset View's moved: false) applies at once.
  h.space.transitionView(h.space.spaceViewState(), { mode: "6dof", moved: false });
  assert.equal(h.editor.viewTransition, null);
  assert.equal(h.editor.viewMoved, false);
});

test("6DoF starts where 3DoF stands; back to 3DoF moves to the origin keeping the direction, and enters 3DoF there", () => {
  const h = harness({ editor: { spaceMode: "3dof", viewYaw: 30 } });
  h.space.setSpaceMode("6dof");
  assert.equal(h.editor.spaceMode, "6dof");
  assert.equal(h.editor.viewTransition, null);
  assert.deepEqual(h.editor.viewPosition, [0, 0, 0]);
  h.editor.viewPosition = [3, 1, -2];
  h.editor.viewMoved = true;
  h.space.setSpaceMode("3dof");
  const { to, end } = h.editor.viewTransition;
  assert.deepEqual(to.position, [0, 0, 0]);
  assert.equal(to.yaw_deg, 30);
  assert.equal(to.distance, 2);
  assert.deepEqual(end, { mode: "3dof", moved: false });
  // Still 6DoF on the way; the end enters 3DoF.
  assert.equal(h.editor.spaceMode, "6dof");
  h.space.applyViewTransitionEnd(end);
  assert.equal(h.editor.spaceMode, "3dof");
  assert.deepEqual(h.space.spaceViewState().position, [0, 0, 0]);
});

test("a 6DoF drag pans at its depth or orbits about its pivot by the pointer's move", async () => {
  const { orbitView, panView } = await import("../web_src/pano_space.js");
  const pan = harness({ editor: { viewMoved: true, viewDistance: 2 } });
  const before = pan.space.spaceViewState();
  const drag = { kind: "space_pan", last: { x: 90, y: 45 }, depth: 2 };
  pan.space.moveSpaceView(drag, { x: 100, y: 50 });
  assert.deepEqual(pan.space.spaceViewState().position, panView(before, 10, 5, 800, 400, 2).position);
  assert.deepEqual(drag.last, { x: 100, y: 50 });
  const orbit = harness({ editor: { viewMoved: true, viewDistance: 2 } });
  const start = orbit.space.spaceViewState();
  orbit.space.moveSpaceView({ kind: "space_orbit", last: { x: 90, y: 45 }, pivot: [0, 0, -1] }, { x: 100, y: 50 });
  const expected = orbitView(start, 10, 5, 400, [0, 0, -1]);
  assert.deepEqual([orbit.editor.viewYaw, orbit.editor.viewPitch], [expected.yaw_deg, expected.pitch_deg]);
});
