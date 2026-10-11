import assert from "node:assert/strict";
import test from "node:test";

import { createEditorHistory, createHistory } from "../web_src/editor/history.js";
import { createSelection } from "../web_src/editor/selection.js";
import { createSidePanelEvents } from "../web_src/editor/side_panel_events.js";
import { createTimelineActions } from "../web_src/editor/timeline_actions.js";
import { cameraLensFields, CAMERA_SHOT_ID } from "../web_src/pano_editor_state.js";
import { lensAngle, lensFovLimit, lensRadius } from "../web_src/pano_lens.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";

const DEG = Math.PI / 180;
const noop = () => {};

// The inspector of Panorama Studio's Camera over the saved `camera`, at Timeline frame `frame`, edited through the
// side panel's input (a drag's steps, or typing) and change (its release or commit) events, with the editor's
// Undo history and selection.
function inspector(camera, frame = 0) {
  const state = { ...loadSceneState({ version: 2, camera }), active: {} };
  const editor = { frame, mode: "pano", lensCurveEdit: null };
  editor.historyController = createEditorHistory(state);
  const uiState = { sidePanel: { params: [
    { key: "hFOV_deg", min: 1, max: 360, enabled: true },
    { key: "curve", min: 0, max: 1, enabled: true },
  ] } };
  const steps = { history: 0 };
  const history = createHistory({ editor, readOnly: false, runtime: {}, state, stateV2: true, studio: true, type: "stickers" });
  history.connect({
    clearWorldSelection: noop, getActiveCutoutShot: () => null, isUploadingSticker: () => false, markObjectVisualsDirty: noop,
    markPaintStrokeVisualsDirty: noop, playback: { seek: noop }, pruneUpstreamRecords: noop, rebuildUpstreamWorking: noop,
    releaseHiddenSelection: noop, requestDraw: noop, stopTimelinePlayback: noop, storedEditorState: () => state,
    syncCutoutShot: noop, syncPaintUi: noop, syncPortHandoff: noop, syncUndoRedoButtons: noop, syncUpstreamEdits: noop,
    updateSidePanel: noop, commitState: noop,
  });
  const selection = createSelection({ editor, readOnly: false, runtime: {}, sceneV2: true, shotEditor: true, state, timeline: { selection: null }, type: "stickers" });
  selection.connect({ isShotItem: (item) => item?.id === CAMERA_SHOT_ID, isStickerItem: () => false });
  const events = createSidePanelEvents({ cameraV2: true, coverageWidget: null, editor, node: {}, previewMode: false, runtime: {}, shotEditor: true, state, studio: true, type: "stickers", uiState });
  events.connect({
    getActiveCutoutShot: () => null, getSelected: () => ({ id: CAMERA_SHOT_ID }), getSelectedKind: () => "shot",
    isItemLocked: () => false, pushHistory: () => { steps.history += 1; history.pushHistory(); }, requestDraw: noop,
    selectedWorldSticker: () => null, stopTimelinePlayback: noop, syncCutoutShot: noop, updateSidePanel: noop,
  });
  const send = (handler, key, value) => handler({ target: { closest: () => ({ value: String(value), getAttribute: (name) => (name === "data-param-key" ? key : null) }) } });
  return {
    state, editor, steps, history, selection,
    input: (key, value) => send(events.onSidePanelInput, key, value),
    change: (key, value) => send(events.onSidePanelChange, key, value),
    lens: () => cameraLensFields(state.camera, editor.frame),
  };
}

// The image's center scale f for a half width of 1: r_edge ÷ g_κ(hFOV ÷ 2).
const centerScale = ({ hFOV_deg, curve }) => 1 / lensRadius(hFOV_deg * 0.5 * DEG, curve);

test("a Lens curve edit keeps the image's center scale, and the H FOV follows it", () => {
  const view = inspector({ fov: { value: 90 } });
  const start = centerScale(view.lens());
  for (const curve of [0.8, 0.5, 0.2]) {
    view.input("curve", curve);
    const lens = view.lens();
    assert.equal(lens.curve, curve);
    assert.ok(Math.abs(centerScale(lens) - start) < 1e-9 * start, `κ ${curve}`);
    // θ = atan(κ·r_edge ÷ f) ÷ κ at the edge.
    assert.ok(Math.abs(lens.hFOV_deg - 2 * lensAngle(1 / start, curve) / DEG) < 1e-9);
  }
  view.change("curve", 0);
  // κ = 0: θ = r_edge ÷ f.
  assert.ok(Math.abs(view.lens().hFOV_deg - 2 / start / DEG) < 1e-9);
  assert.ok(view.lens().hFOV_deg > 90, "toward the fisheye the H FOV widens");
  assert.equal(view.steps.history, 1, "the edit is one Undo step");
});

test("a drag that passes the limit and comes back restores the H FOV it started from", () => {
  const view = inspector({ fov: { value: 300 }, curve: { value: 0.5 } });
  view.input("curve", 0.2);
  view.input("curve", 0);
  assert.equal(view.lens().hFOV_deg, lensFovLimit(0), "held at the limit of κ");
  view.input("curve", 0.5);
  assert.ok(Math.abs(view.lens().hFOV_deg - 300) < 1e-9, `back at ${view.lens().hFOV_deg}`);
  view.change("curve", 0.5);
  // A new edit starts from where the last one left the Camera.
  view.input("curve", 0.8);
  assert.ok(Math.abs(centerScale(view.lens()) - centerScale({ hFOV_deg: 300, curve: 0.5 })) < 1e-9);
});

test("a drag that ended without its change event leaves no start for the next edit", () => {
  // An Undo step taken after it (another edit's) ends it: the next drag starts from the Camera as it is then.
  const stepped = inspector({ fov: { value: 90 } });
  stepped.input("curve", 0.5);
  stepped.input("hFOV_deg", 120);
  stepped.change("hFOV_deg", 120);
  stepped.input("curve", 0.6);
  assert.ok(Math.abs(centerScale(stepped.lens()) - centerScale({ hFOV_deg: 120, curve: 0.5 })) < 1e-9);
  // So does a new selection: a drag on the same Camera at the same frame then starts from the Camera as it is.
  const selected = inspector({ fov: { value: 90 } });
  selected.input("curve", 0.5);
  const stale = centerScale(selected.lens());
  Object.assign(selected.state.camera, { fov: { ...selected.state.camera.fov, value: 150 } });
  selected.selection.setSelectedItem({ id: CAMERA_SHOT_ID });
  const now = centerScale(selected.lens());
  selected.input("curve", 0.4);
  assert.ok(Math.abs(centerScale(selected.lens()) - now) < 1e-9 * now, "from the Camera as it is now");
  assert.ok(Math.abs(now - stale) > 1e-3, "not from the stale start");
  // And an Undo.
  const undone = inspector({ fov: { value: 90 } });
  undone.change("hFOV_deg", 120);
  undone.input("curve", 0.5);
  undone.history.restoreHistory(-1);
  undone.input("curve", 0.4);
  assert.ok(Math.abs(centerScale(undone.lens()) - centerScale({ hFOV_deg: 90, curve: 1 })) < 1e-9);
});

test("a Lens curve edit writes the curve and fov Lanes at the playhead, each by its recording rule", () => {
  // Both Lanes keyed: each gets a Keyframe at the playhead, the fov one even where the H FOV keeps its value.
  const keyed = inspector({
    fov: { keyframes: [{ frame: 0, value: 90 }, { frame: 20, value: 90 }] },
    curve: { keyframes: [{ frame: 0, value: 1 }, { frame: 20, value: 1 }] },
  }, 10);
  keyed.change("curve", 1);
  assert.deepEqual(keyed.state.camera.curve.keyframes.map((key) => key.frame), [0, 10, 20]);
  assert.deepEqual(keyed.state.camera.fov.keyframes.map((key) => [key.frame, key.value]), [[0, 90], [10, 90], [20, 90]]);
  keyed.change("curve", 0.5);
  assert.deepEqual(keyed.state.camera.curve.keyframes.map((key) => [key.frame, key.value]), [[0, 1], [10, 0.5], [20, 1]]);
  assert.deepEqual(keyed.state.camera.fov.keyframes.map((key) => key.frame), [0, 10, 20]);
  assert.ok(keyed.state.camera.fov.keyframes[1].value > 90);
  // No Keyframes: both static values change.
  const still = inspector({ fov: { value: 90 } });
  still.change("curve", 0.5);
  assert.equal(still.state.camera.curve.value, 0.5);
  assert.ok(still.state.camera.fov.value > 90);
  assert.deepEqual([still.state.camera.curve.keyframes, still.state.camera.fov.keyframes], [[], []]);
});

test("the H FOV field zooms: it writes the fov Lane alone", () => {
  const view = inspector({ fov: { value: 90 }, curve: { value: 0.5 } });
  view.input("hFOV_deg", 120);
  view.change("hFOV_deg", 120);
  assert.deepEqual([view.state.camera.fov.value, view.state.camera.curve.value], [120, 0.5]);
});

test("moving a Keyframe on the curve Lane's row leaves the fov Lane as it is", () => {
  const state = { camera: loadSceneState({ version: 2, camera: {
    fov: { keyframes: [{ frame: 0, value: 90 }, { frame: 10, value: 120 }] },
    curve: { keyframes: [{ frame: 0, value: 1 }, { frame: 10, value: 0.5 }] },
  } }).camera };
  const timeline = { selection: null, drag: null };
  const actions = createTimelineActions({ dragFrames: { request: noop, cancel: noop }, editor: { frame: 0 }, readOnly: false, state, stateV2: true, timeline, uiState: {} });
  actions.connect({
    commitTimelineEdit: noop, refreshTimelineEdit: noop, selectedLanes: (selection) => [selection.lane], stopTimelinePlayback: noop,
    syncTimeline: noop, timelineEditable: () => true, timelineOffset: () => 0, timelineOwner: () => state.camera, timelineSpanFrames: () => 48,
  });
  const fov = structuredClone(state.camera.fov);
  actions.onTimelineAction({ type: "select-keys", owner: "camera", lane: "curve", frames: [10] });
  for (const phase of ["start", "move", "end"]) actions.onTimelineAction({ type: "move-keys", phase, delta: 5 });
  assert.deepEqual(state.camera.curve.keyframes.map((key) => [key.frame, key.value]), [[0, 1], [15, 0.5]]);
  assert.deepEqual(state.camera.fov, fov);
});
