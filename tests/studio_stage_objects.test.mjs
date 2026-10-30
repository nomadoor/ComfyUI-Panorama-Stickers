// Selecting and editing objects on the stage (web_src/studio/stage_objects.js): the press order of
// docs/editor-interaction.md "`world` の Sticker の操作" (the gizmo, the selected sky image's handles, the World object
// by the GPU pick, the Camera's lines, a sky image), what a drag writes by the recording rule, the Camera tab's
// select-only presses, and what the overlay draws. The three.js view is a stand-in.
import assert from "node:assert/strict";
import test from "node:test";

import { evaluateLane } from "../web_src/pano_scene_eval.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { buildStickerGeometry } from "../web_src/pano_sticker_geometry.js";
import { viewProjection } from "../web_src/pano_editor_view.js";
import { createStudioSession } from "../web_src/studio/session.js";
import { stageContent } from "../web_src/studio/stage_content.js";
import { createStageObjects } from "../web_src/studio/stage_objects.js";
import { stageCamera } from "../web_src/studio/stage_view.js";

const W = 1000;
const H = 500;
const file = (filename) => ({ kind: "file", filename, subfolder: "", storage: "input" });
const image = { naturalWidth: 100, naturalHeight: 100, complete: true };

function setup({ tab = "3d", picked = null, gizmoHit = false, stickers = null } = {}) {
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
  const calls = [];
  let moved = null;
  const editorView = {
    sceneBox: () => null,
    pickSticker: () => picked,
    gizmoPointer(phase) {
      calls.push(phase);
      if (phase === "hover") return gizmoHit ? "X" : null;
      if (phase === "down") return gizmoHit;
      if (phase === "move") return moved;
      return null;
    },
  };
  let cached = null;
  const content = () => {
    if (!cached || cached.state !== session.state) cached = { state: session.state, value: stageContent(session.state, 0, { media: () => ({ media: image, revision: "r" }) }) };
    return cached.value;
  };
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
  });
  return { session, objects, camera, calls, setMoved: (value) => (moved = value) };
}

const center = { x: W / 2, y: H / 2 };

test("a press on a sky image selects it and its drag turns it, as one Undo step", () => {
  const { session, objects, camera } = setup();
  const drag = objects.press(center);
  assert.ok(drag);
  assert.equal(session.selection.row, "sky");
  // Dragged a quarter of the stage to the right: its yaw follows the pointer.
  drag.move({ x: W * 0.75, y: H / 2 });
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

test("the selected World object's gizmo shows and is pressed first; its drag writes the mode's Lane as one Undo step", () => {
  const { session, objects, calls, setMoved } = setup({ gizmoHit: true });
  session.selectObject("board");
  const gizmo = objects.gizmo();
  assert.equal(gizmo.mode, "translate");
  assert.deepEqual(gizmo.transform.position, [3, 0, -5]);
  assert.equal(gizmo.colors.x, "#f37159");
  const drag = objects.press(center);
  assert.deepEqual(calls, ["hover", "down"]);
  setMoved({ position: [4, 0, -5], quaternion: gizmo.transform.quaternion, scale: [1, 1, 1] });
  drag.move({ x: 600, y: 250 });
  drag.end();
  assert.deepEqual(evaluateLane(session.state.stickers[1], "position", 0), [4, 0, -5]);
  assert.equal(calls.at(-1), "up");
  session.undo();
  assert.deepEqual(evaluateLane(session.state.stickers[1], "position", 0), [3, 0, -5]);
});

test("a gizmo drag given up puts the object back", () => {
  const { session, objects, setMoved } = setup({ gizmoHit: true });
  session.selectObject("board");
  const gizmo = objects.gizmo();
  const drag = objects.press(center);
  setMoved({ position: [9, 0, -5], quaternion: gizmo.transform.quaternion, scale: [1, 1, 1] });
  drag.move({ x: 700, y: 250 });
  drag.cancel();
  assert.deepEqual(evaluateLane(session.state.stickers[1], "position", 0), [3, 0, -5]);
  assert.equal(session.canUndo, false);
});

test("the Camera is selected by its lines and gets a Move / Rotate gizmo that writes its Lanes", () => {
  const { session, objects, camera, setMoved } = setup({ stickers: [] });
  // The Camera stands at (0, -1, -6) facing +Z: its position projects below the center.
  const at = { x: W / 2, y: H / 2 + (1 / 6) * (H / 2) / Math.tan((camera.fovY_deg / 2) * Math.PI / 180) };
  assert.ok(objects.press(at), "a press on its lines");
  assert.equal(session.selection.row, "camera");
  const gizmo = objects.gizmo();
  assert.deepEqual(gizmo.transform.position, [0, -1, -6]);
  assert.equal(objects.press({ x: 5, y: 5 }), null, "a press on nothing is left to the view");
  // Its gizmo moves it (the stand-in view grabs the handle).
  const grab = setup({ stickers: [], gizmoHit: true });
  grab.session.selectObject("camera");
  const shown = grab.objects.gizmo();
  const drag = grab.objects.press(center);
  grab.setMoved({ position: [0, -1, -4], quaternion: shown.transform.quaternion, scale: [1, 1, 1] });
  drag.move({ x: 1, y: 1 });
  drag.end();
  assert.deepEqual(evaluateLane(grab.session.state.camera, "position", 0), [0, -1, -4]);
  setMoved(null);
});

test("a locked object is selected but shows no gizmo and no handles, and its drag moves nothing", () => {
  const { session, objects } = setup();
  session.selectObject("sky");
  session.toggleLock();
  const before = session.state;
  const drag = objects.press(center);
  drag.move({ x: 900, y: 250 });
  drag.end();
  assert.equal(session.state, before);
  assert.equal(objects.overlay().sky.handles, false);
  session.selectObject("board");
  session.toggleLock();
  assert.equal(objects.gizmo(), null);
});

test("in the Camera tab a press only selects: no gizmo, no handles, no drag, and only the selected object's guide is drawn", () => {
  const { session, objects } = setup({ tab: "camera", gizmoHit: true });
  const before = session.state;
  const drag = objects.press(center);
  assert.equal(session.selection.row, "sky");
  drag.move({ x: 900, y: 250 });
  drag.end();
  assert.equal(session.state, before, "nothing moves");
  session.selectObject("board");
  assert.equal(objects.gizmo(), null);
  const scene = objects.overlay();
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
