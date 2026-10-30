// Selecting and editing objects on the stage (web_src/studio/stage_objects.js): the press order of
// docs/editor-interaction.md "`world` の Sticker の操作" (the gizmo, the selected sky image's handles, the World object
// by the GPU pick, the Camera's mark, a sky image), what a drag writes by the recording rule, the Camera tab's
// select-only presses, and what the overlay draws. The three.js view is a stand-in; the gizmo is the overlay's
// (gizmo_overlay.js), hit and dragged on screen.
import assert from "node:assert/strict";
import test from "node:test";

import { evaluateLane } from "../web_src/pano_scene_eval.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { buildStickerGeometry } from "../web_src/pano_sticker_geometry.js";
import { viewProjection } from "../web_src/pano_editor_view.js";
import { projectPoint } from "../web_src/pano_space.js";
import { createStudioSession } from "../web_src/studio/session.js";
import { stageContent } from "../web_src/studio/stage_content.js";
import { createStageObjects } from "../web_src/studio/stage_objects.js";
import { stageCamera } from "../web_src/studio/stage_view.js";

const W = 1000;
const H = 500;
const file = (filename) => ({ kind: "file", filename, subfolder: "", storage: "input" });
const image = { naturalWidth: 100, naturalHeight: 100, complete: true };

function setup({ tab = "3d", picked = null, stickers = null, sceneBox = () => null, editorFile = () => null, mode = "translate" } = {}) {
  const session = createStudioSession({
    state: loadSceneState({
      version: 2,
      camera: { projection: "perspective", position: { value: [0, -1, -6] }, rotation: { value: { yaw_deg: 180, pitch_deg: 0, roll_deg: 0 } } },
      stickers: stickers ?? [
        { id: "sky", placement: "sky", source: file("poster.png"), direction: { value: { yaw_deg: 0, pitch_deg: 0 } }, size: { value: { hFOV_deg: 30, vFOV_deg: 30 } } },
        { id: "board", placement: "world", source: file("board.png"), position: { value: [3, 0, -5] } },
      ],
    }),
  });
  const pose = { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, target: [0, 0, -5] };
  const camera = stageCamera(pose, W, H, 50);
  const editorView = {
    sceneBox,
    pickSticker: () => picked,
  };
  let cached = null;
  const content = () => {
    if (!cached || cached.state !== session.state) cached = { state: session.state, value: stageContent(session.state, 0, { media: () => ({ media: image, revision: "r" }), editorFile, sceneBox }) };
    return cached.value;
  };
  const gizmoMode = { value: mode };
  const objects = createStageObjects({
    editorView,
    camera: () => camera,
    size: () => ({ width: W, height: H }),
    state: () => session.state,
    content,
    playhead: () => 0,
    selection: () => session.selection.row,
    select: (row) => session.selectObject(row),
    edits: { live: (apply) => session.gesture(apply), commit: () => session.commitGesture(), cancel: () => session.cancelGesture() },
    tab: () => tab,
    mode: () => gizmoMode.value,
  });
  return { session, objects, camera, gizmoMode };
}

const center = { x: W / 2, y: H / 2 };
// On the sky image, above the Camera's filled mark (its up triangle reaches the center from below).
const onSky = { x: W / 2, y: H / 2 - 80 };

test("a press on a sky image selects it and its drag turns it, as one Undo step", () => {
  const { session, objects, camera } = setup();
  const drag = objects.press(onSky);
  assert.ok(drag);
  assert.equal(session.selection.row, "sky");
  // Dragged a quarter of the stage to the right: its yaw follows the pointer.
  drag.move({ x: W * 0.75, y: onSky.y });
  const projection = viewProjection(camera, W, H);
  const want = projection.ray(W * 0.75, H / 2);
  const yaw = evaluateLane(session.state.stickers[0], "direction", 0).yaw_deg;
  assert.ok(Math.abs(yaw - Math.atan2(want.x, want.z) * 180 / Math.PI) < 1e-6);
  assert.equal(session.canUndo, false);
  drag.end();
  assert.equal(session.canUndo, true);
});

test("the selected sky image's corner scales both FOVs and its edge one, before anything under it", () => {
  const { session, objects, camera } = setup();
  session.selectObject("sky");
  const geometry = buildStickerGeometry({ yaw_deg: 0, pitch_deg: 0, rot_deg: 0, hFOV_deg: 30, vFOV_deg: 30 }, viewProjection(camera, W, H));
  const corner = geometry.corners[1];
  const drag = objects.press(corner);
  drag.move({ x: center.x + (corner.x - center.x) * 2, y: center.y + (corner.y - center.y) * 2 });
  drag.end();
  const size = evaluateLane(session.state.stickers[0], "size", 0);
  assert.ok(Math.abs(size.hFOV_deg - 60) < 1e-6 && Math.abs(size.vFOV_deg - 60) < 1e-6);
  const grown = buildStickerGeometry({ yaw_deg: 0, pitch_deg: 0, rot_deg: 0, hFOV_deg: 60, vFOV_deg: 60 }, viewProjection(camera, W, H));
  const right = grown.edgeMidpoints.find((mid) => mid.edge === "right");
  const edge = objects.press(right);
  edge.move({ x: center.x + (right.x - center.x) * 0.5, y: right.y });
  edge.end();
  const after = evaluateLane(session.state.stickers[0], "size", 0);
  assert.ok(Math.abs(after.hFOV_deg - 30) < 1e-6, "the right edge halves the H FOV");
  assert.ok(Math.abs(after.vFOV_deg - 60) < 1e-6, "and keeps the V FOV");
});

test("a World object under the pointer (the GPU pick) is selected before the sky behind it, and its drag moves nothing", () => {
  const { session, objects } = setup({ picked: "board" });
  const before = session.state;
  const drag = objects.press(center);
  assert.equal(session.selection.row, "board");
  drag.move({ x: 10, y: 10 });
  drag.end();
  assert.equal(session.state, before);
});

// The gizmo's handles on the overlay (gizmo_overlay.js gizmoHandles).
const handlesOf = (objects) => objects.overlay().gizmo?.handles ?? null;
const ballOf = (objects, name) => handlesOf(objects).axes.find((axis) => axis.name === name).end;

test("the selected World object's gizmo shows on the overlay and is pressed first; its X ball's drag moves X only, as one Undo step", () => {
  const { session, objects } = setup();
  session.selectObject("board");
  const handles = handlesOf(objects);
  assert.equal(handles.mode, "translate");
  // The board stands at (3, 0, -5): the gizmo's center is its middle on the screen.
  assert.ok(Math.abs(handles.center.x - W / 2 * (1 + (3 / 5) / Math.tan(50 * Math.PI / 180))) < 1e-6);
  const ball = ballOf(objects, "x");
  assert.equal(objects.hover(ball).cursor, "grab");
  assert.equal(objects.overlay().gizmo.active, "x", "the handle under the pointer is lit");
  const drag = objects.press(ball);
  drag.move({ x: ball.x + 100, y: ball.y + 40 });
  assert.equal(objects.overlay().gizmo.active, "x", "the dragged handle stays lit");
  const guide = objects.overlay().gizmo.guide;
  assert.equal(guide.name, "x", "the X guide line shows while it is dragged");
  assert.ok(Math.abs(guide.a.y - guide.b.y) < 1e-6 && Math.abs(guide.a.y - H / 2) < 1e-6, "level through the grabbed center");
  drag.end();
  assert.equal(objects.overlay().gizmo.guide, null, "and goes when it is let go");
  const position = evaluateLane(session.state.stickers[1], "position", 0);
  assert.ok(position[0] > 3.5, "it moved along X");
  assert.ok(Math.abs(position[1]) < 1e-9 && Math.abs(position[2] + 5) < 1e-9, "and only along X");
  session.undo();
  assert.deepEqual(evaluateLane(session.state.stickers[1], "position", 0), [3, 0, -5]);
});

test("a gizmo drag given up puts the object back", () => {
  const { session, objects } = setup();
  session.selectObject("board");
  const ball = ballOf(objects, "x");
  const drag = objects.press(ball);
  drag.move({ x: ball.x + 100, y: ball.y });
  drag.cancel();
  assert.deepEqual(evaluateLane(session.state.stickers[1], "position", 0), [3, 0, -5]);
  assert.equal(session.canUndo, false);
  assert.equal(objects.overlay().gizmo.active, null);
});

test("the Camera is selected anywhere on its filled mark and gets a Move / Rotate gizmo that writes its Lanes", () => {
  const { session, objects, camera } = setup({ stickers: [] });
  // The Camera stands at (0, -1, -6) facing +Z (toward the view): its frustum fills a patch below the center. A press
  // inside a filled face, away from every line, selects it.
  const screen = objects.overlay().camera.screen;
  const face = screen.fills.at(-1);
  const inside = { x: face.reduce((sum, p) => sum + p.x, 0) / face.length, y: face.reduce((sum, p) => sum + p.y, 0) / face.length };
  assert.equal(objects.hover(inside).cursor, "default");
  assert.ok(objects.press(inside), "a press on its fill");
  assert.equal(session.selection.row, "camera");
  assert.equal(objects.overlay().camera.look, "selected");
  const handles = handlesOf(objects);
  const at = { x: W / 2, y: H / 2 + (1 / 6) * (H / 2) / Math.tan((camera.fovY_deg / 2) * Math.PI / 180) };
  assert.ok(Math.abs(handles.center.x - at.x) < 1e-6 && Math.abs(handles.center.y - at.y) < 1e-6, "the gizmo sits at its position");
  assert.equal(objects.press({ x: 5, y: 5 }), null, "a press on nothing is left to the view");
  // Its Y ball lifts it.
  const ball = ballOf(objects, "y");
  const drag = objects.press(ball);
  drag.move({ x: ball.x, y: ball.y - 30 });
  drag.end();
  const position = evaluateLane(session.state.camera, "position", 0);
  assert.ok(position[1] > -1 + 0.05 && Math.abs(position[0]) < 1e-9 && Math.abs(position[2] + 6) < 1e-9);
});

test("a locked object is selected but shows no gizmo and no handles, and its drag moves nothing", () => {
  const { session, objects } = setup();
  session.selectObject("sky");
  session.toggleLock();
  const before = session.state;
  const drag = objects.press(onSky);
  drag.move({ x: 900, y: 250 });
  drag.end();
  assert.equal(session.state, before);
  assert.equal(objects.overlay().sky.handles, false);
  session.selectObject("board");
  session.toggleLock();
  assert.equal(objects.overlay().gizmo, null);
});

test("in the Camera tab a press only selects: no gizmo, no handles, no drag, and only the selected object's guide is drawn", () => {
  const { session, objects } = setup({ tab: "camera" });
  const before = session.state;
  const drag = objects.press(center);
  assert.equal(session.selection.row, "sky");
  drag.move({ x: 900, y: 250 });
  drag.end();
  assert.equal(session.state, before, "nothing moves");
  session.selectObject("board");
  const scene = objects.overlay();
  assert.equal(scene.gizmo, null);
  assert.equal(scene.camera, null, "the Camera's mark is the 3D tab's");
  assert.deepEqual(scene.guides.map((guide) => guide.look), ["selected"]);
});

test("the overlay draws every World guide, the hovered one bright and the selected one yellow; Alt keeps it from lighting up", () => {
  const { session, objects } = setup();
  // The board stands at (3, 0, -5): its middle on the screen.
  const x = W / 2 * (1 + (3 / 5) / Math.tan(50 * Math.PI / 180));
  const hover = objects.hover({ x, y: H / 2 });
  assert.equal(hover.cursor, "default");
  assert.equal(hover.changed, true);
  assert.deepEqual(objects.overlay().guides.map((guide) => guide.look), ["hover"]);
  objects.hover({ x, y: H / 2 }, { altHeld: true });
  assert.deepEqual(objects.overlay({ altHeld: true }).guides.map((guide) => guide.look), ["normal"]);
  session.selectObject("board");
  assert.deepEqual(objects.overlay().guides.map((guide) => guide.look), ["selected"]);
  assert.equal(objects.overlay().camera.look, "normal");
  assert.equal(objects.hover({ x: 5, y: 5 }).cursor, null);
});

test("the Camera's mark is neither drawn nor hit while the view stands inside it (the view opens at the Camera)", () => {
  const { objects } = setup({ stickers: [] });
  assert.ok(objects.overlay().camera, "seen from afar it is drawn");
  const near = setup({ stickers: [] });
  near.session.gesture((draft) => {
    draft.camera.position.value = [0, 0, -0.05];
    return true;
  });
  assert.equal(near.objects.overlay().camera, null);
  assert.equal(near.objects.press(center), null, "a press there looks around");
});

// A 3D file whose content lies far from its origin (many GLBs are made so): its box in its own frame is around
// (5, 1, 0), and the Sticker's origin stands at (0, -1, -6).
const offsetBox = { min: [4, 0, -1], max: [6, 2, 1] };
const offsetSetup = (mode = "translate", position = [0, -1, -6]) => setup({
  mode,
  stickers: [{ id: "model", placement: "world", source: { kind: "file", filename: "model.glb", subfolder: "3d", storage: "input" }, position: { value: position } }],
  editorFile: () => ({ kind: "mesh", unlit: true, url: "/view/model.glb", generation: 1 }),
  sceneBox: (url) => (url.startsWith("file3d:") ? offsetBox : null),
});

// The screen rectangle around the selected guide's segments, and its middle.
function guideRect(objects, camera) {
  const guide = objects.overlay().guides.find((item) => item.look === "selected");
  const points = guide.segments.flat().map((p) => projectPoint(camera, p, W, H));
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  return { left: Math.min(...xs), right: Math.max(...xs), top: Math.min(...ys), bottom: Math.max(...ys) };
}
const inside = (point, rect) => point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;

test("the gizmo of a 3D file whose content lies away from its origin sits in its guide box, at the box's center", () => {
  for (const mode of ["translate", "rotate", "scale"]) {
    const { session, objects, camera } = offsetSetup(mode);
    session.selectObject("model");
    const handles = handlesOf(objects);
    const rect = guideRect(objects, camera);
    assert.ok(inside(handles.center, rect), `${mode}: the gizmo's center is inside the guide box`);
    // The box's center: (5, 1, 0) from the origin at (0, -1, -6).
    const want = projectPoint(camera, [5, 0, -6], W, H);
    assert.ok(Math.abs(handles.center.x - want.x) < 1e-6 && Math.abs(handles.center.y - want.y) < 1e-6, `${mode}: at the box's center`);
  }
});

test("Rotate and Scale turn and size a 3D file about its box's center: the gizmo stays inside the guide box", () => {
  for (const mode of ["rotate", "scale"]) {
    const { session, objects, camera } = offsetSetup(mode);
    session.selectObject("model");
    const before = handlesOf(objects).center;
    let drag;
    if (mode === "rotate") {
      const ring = handlesOf(objects).rings.find((item) => item.name === "y");
      const grip = ring.points.find((p) => p && p.front);
      drag = objects.press(grip);
      assert.ok(drag, "the Y ring is grabbed");
      drag.move({ x: grip.x + 40, y: grip.y });
    } else {
      const ball = ballOf(objects, "x");
      drag = objects.press(ball);
      assert.ok(drag, "the X square is grabbed");
      drag.move({ x: before.x + (ball.x - before.x) * 2, y: before.y + (ball.y - before.y) * 2 });
    }
    drag.end();
    const after = handlesOf(objects).center;
    assert.ok(Math.hypot(after.x - before.x, after.y - before.y) < 1e-6, `${mode}: the center stays where it was`);
    assert.ok(inside(after, guideRect(objects, camera)), `${mode}: and inside the guide box`);
    assert.equal(session.canUndo, true, `${mode}: one Undo step`);
  }
});
