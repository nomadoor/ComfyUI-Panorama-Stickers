import assert from "node:assert/strict";
import test from "node:test";

import { createHistory, createEditorHistory } from "../web_src/editor/history.js";
import { createItems } from "../web_src/editor/items.js";
import { createTimeline } from "../web_src/editor/timeline.js";
import { createTimelineActions } from "../web_src/editor/timeline_actions.js";
import { buildTimelineModel } from "../web_src/pano_editor_ui_state.js";
import { editorStateWrite, parseSceneEditorState } from "../web_src/pano_editor_state.js";
import { backgroundPlace, backgroundShownAt, bgMediaEnd } from "../web_src/pano_port_media.js";
import { loadSceneState, sceneStateText } from "../web_src/pano_scene_state.js";
import { isTimed, keyAllLanes, laneNames } from "../web_src/pano_timeline.js";

const noop = () => {};
// The Timeline asks whether its VIDEO element plays a source.
globalThis.HTMLVideoElement ??= class {};
const sky = (id, extra = {}) => ({ id, placement: "sky", source: { kind: "file", filename: `${id}.png` }, ...extra });

// Panorama Studio's node with bg_media linked (a VIDEO when `video`), or with nothing linked.
function studioNode({ linked = true, video = true } = {}) {
  const inputs = [{ name: "bg_media" }, { name: "scene" }];
  return {
    id: 1,
    inputs,
    graph: {},
    getInputLink: (slot) => (linked && slot === 0 ? { origin_id: 7, origin_slot: 0, type: video ? "VIDEO" : "IMAGE" } : null),
  };
}

// Panorama Studio's node with its inputs as named since ADR 0048 (docs/studio-node.md "Panorama Studio"), the inputs
// `links` names linked: `background` to a VIDEO, `world` to a 3D file, `scene` to an upstream PANO_SCENE.
function renamedStudioNode(links = ["background"]) {
  const inputs = [{ name: "scene" }, { name: "background" }, { name: "world" }, { name: "sticker" }, { name: "sticker_state" }];
  const types = { scene: "PANO_SCENE", background: "VIDEO", world: "File3DAny" };
  return {
    id: 1,
    inputs,
    graph: {},
    getInputLink: (slot) => (links.includes(inputs[slot].name) ? { origin_id: 7 + slot, origin_slot: 0, type: types[inputs[slot].name] } : null),
  };
}

// The editor's Timeline over `saved`: the real Timeline, its actions, items and history. `transport` is what the
// node's result tells of the background VIDEO (uiState.videoTransport). The playback records its seeks.
function editorTimeline(saved, { node = studioNode(), transport = { ready: true, frameCount: 48, duration: 2 }, upstreamBackground = null } = {}) {
  const state = { ...loadSceneState(saved), active: {}, bg_color: "#ff0000" };
  const editor = { frame: 0, historyController: createEditorHistory(state) };
  const timelineState = { selection: null, openRows: new Set(), drag: null };
  const uiState = { videoTransport: transport, timeline: null };
  const seeks = [];
  const playback = { frame: 0, seek: (frame) => seeks.push(frame), stop: noop };
  const items = createItems({ canvas: {}, editor, sceneV2: true, state, stateV2: true, type: "stickers" });
  items.connect({ upstreamStickers: () => [], upstreamStickerImage: () => null });
  const history = createHistory({ editor, readOnly: false, runtime: {}, state, stateV2: true, studio: true, type: "stickers" });
  const timeline = createTimeline({
    editor, node, readOnly: false, sceneV2: true, state, stateV2: true, studio: true, timeline: timelineState,
    timelinePlayhead: { frame: { value: 0 } }, uiState, videoEl: null, videoTimelineFps: () => null,
  });
  // The drag's per-frame work, as the editor's createFrameBatch: the requests wait for runFrame().
  const pending = new Set();
  const dragFrames = { request: (name) => pending.add(name), cancel: () => pending.clear(), pending };
  const actions = createTimelineActions({ dragFrames, editor, readOnly: false, state, stateV2: true, timeline: timelineState, uiState });
  const steps = { count: 0, commits: 0 };
  // The state's text each time a pointer's edit under way is cancelled (pointer_input.js cancelLiveEdits).
  const cancels = [];
  history.connect({
    cancelLiveEdits: () => { cancels.push(sceneStateText(loadSceneState(state))); return false; },
    clearWorldSelection: noop, commitState: noop, getActiveCutoutShot: () => null, isUploadingSticker: () => false,
    markObjectVisualsDirty: noop, markPaintStrokeVisualsDirty: noop, playback,
    pruneUpstreamRecords: noop, rebuildUpstreamWorking: noop,
    releaseHiddenSelection: noop, requestDraw: noop, stopTimelinePlayback: noop, storedEditorState: () => state,
    syncCutoutShot: noop, syncPaintUi: noop, syncPortHandoff: noop, syncUndoRedoButtons: noop,
    syncUpstreamEdits: noop, updateSidePanel: noop,
  });
  const api = {
    cancelLiveEdits: () => { cancels.push(sceneStateText(loadSceneState(state))); return false; },
    ...items, ...timeline,
    commitAndRefreshNode: () => { steps.commits += 1; }, getPortMediaMeta: () => null, hasCamera: () => false, inspectorTimed: () => false,
    isExternalSticker: (item) => item?.source?.kind === "port", loading3dIds: () => new Set(), markObjectVisualsDirty: noop, playback,
    sceneFiles: () => null, stickerFiles: () => null, file3dEditorFile: () => null,
    pushHistory: () => {
      steps.count += 1;
      history.pushHistory();
    },
    refreshModalVideoSource: noop, releaseHiddenSelection: noop, requestDraw: noop, syncCutoutShot: noop, syncSidePanelModel: noop,
    updateSelectionMenu: noop, updateSidePanel: noop, upstreamBackground: () => upstreamBackground, upstreamLinked: () => false,
    upstreamOutput: () => null, upstreamPortMeta: () => null, upstreamRow: () => null, upstreamTimelineLayers: () => [],
    cameraShoots: () => false, changeTimelineFps: noop, getActiveCutoutShot: () => null, jumpTimelineTo: noop,
    selectWorldSticker: noop, setSelectedItem: noop, syncFloatingViewButtonState: noop, toggleVideoMuted: noop, togglePlayback: noop,
    restoreUpstreamDeletedCommand: noop, revertUpstreamLayerCommand: noop, stickerById: (id) => state.stickers.find((item) => item.id === id) ?? null,
  };
  timeline.connect(api);
  actions.connect({ ...api, syncTimeline: timeline.syncTimeline });
  history.pushHistory({ initial: true });
  return { act: actions.onTimelineAction, cancel: actions.cancelTimelineDrag, cancels, dragFrames, editor, history, seeks, state, steps, timeline, timelineState, uiState };
}

const drag = (act, action, delta) => {
  act({ ...action, phase: "start", delta: 0 });
  act({ ...action, phase: "move", delta });
  act({ ...action, phase: "end", delta });
};

test("the background row comes first, with its Clip range, no eye and no Keyframes", () => {
  const { state, timeline, uiState } = editorTimeline({ version: 2, timeline: { fps: 24 }, stickers: [sky("own")] });
  timeline.syncTimeline();
  const [row, own] = uiState.timeline.rows;
  assert.deepEqual([row.id, own.id], ["background", "own"]);
  assert.equal(row.label, "Background");
  assert.deepEqual({ hideable: row.hideable, keyable: row.keyable, visible: row.visible, keys: row.keys, lanes: row.lanes }, {
    hideable: false, keyable: false, visible: true, keys: [], lanes: [],
  });
  // Without a duration, its bar ends with the background VIDEO (48 frames from start - in).
  assert.deepEqual(row.clip, { start: 0, end: 48 });
  assert.deepEqual(laneNames(state.background), []);
});

test("the background row shows only while the node's own bg_media is linked", () => {
  const unlinked = editorTimeline({ version: 2, timeline: { fps: 24 } }, { node: studioNode({ linked: false }), transport: {} });
  unlinked.timeline.syncTimeline();
  assert.deepEqual(unlinked.uiState.timeline.rows.map((row) => row.id), []);
  const upstream = editorTimeline({ version: 2, timeline: { fps: 24 } }, { upstreamBackground: { imageKey: "pano_upstream_input_images" } });
  upstream.timeline.syncTimeline();
  assert.deepEqual(upstream.uiState.timeline.rows.map((row) => row.id), []);
  // A single image (no MP4) has a row whose bar runs to the Timeline's end.
  const image = editorTimeline({ version: 2, timeline: { fps: 24, length: 30 } }, { node: studioNode({ video: false }), transport: {} });
  image.timeline.syncTimeline();
  assert.deepEqual(image.uiState.timeline.rows[0].clip, { start: 0, end: null });
});

test("the old editor reads Panorama Studio's renamed inputs: `background` has its row and `world` its Scene row", () => {
  const renamed = editorTimeline({ version: 2, timeline: { fps: 24 } }, { node: renamedStudioNode(["background", "world"]) });
  renamed.timeline.syncTimeline();
  const ids = renamed.uiState.timeline.rows.map((row) => row.id);
  assert.equal(ids[0], "background");
  assert.ok(ids.includes("scene"), "the own `world` content has its Scene row");
  // Its bar ends with the background VIDEO, as with `bg_media`.
  assert.deepEqual(renamed.uiState.timeline.rows[0].clip, { start: 0, end: 48 });
  const unlinked = editorTimeline({ version: 2, timeline: { fps: 24 } }, { node: renamedStudioNode([]), transport: {} });
  unlinked.timeline.syncTimeline();
  assert.deepEqual(unlinked.uiState.timeline.rows.map((row) => row.id), []);
});

test("moving and trimming the background's Clip range are Undo steps through the Timeline's actions", () => {
  const { act, editor, history, seeks, state, steps, timeline, uiState } = editorTimeline({ version: 2, timeline: { fps: 24, length: 100 } });
  timeline.syncTimeline();
  editor.frame = 20;
  drag(act, { type: "clip", id: "background", mode: "move" }, 10);
  assert.deepEqual(state.background.clip, { start: 10, in: 0, duration: null });
  // The background VIDEO is sought again to the time its moved Clip range puts at the playhead, once at the end.
  assert.deepEqual(seeks, [20]);
  assert.deepEqual([steps.count, steps.commits], [1, 1]);
  // The text keeps the moved Clip range; the bar follows it to the media's end.
  assert.deepEqual(JSON.parse(sceneStateText(loadSceneState(state))).background, { clip: { start: 10, in: 0, duration: null } });
  timeline.syncTimeline();
  assert.deepEqual(uiState.timeline.rows[0].clip, { start: 10, end: 58 });

  // Trimming the head keeps the media where it is (start - in stays).
  drag(act, { type: "clip", id: "background", mode: "start" }, 6);
  assert.deepEqual(state.background.clip, { start: 16, in: 6, duration: null });
  // Trimming the tail sets a duration.
  drag(act, { type: "clip", id: "background", mode: "end" }, -8);
  assert.deepEqual(state.background.clip, { start: 16, in: 6, duration: 34 });
  assert.equal(steps.count, 3);

  const before = seeks.length;
  history.restoreHistory(-1);
  assert.deepEqual(state.background.clip, { start: 16, in: 6, duration: null });
  // Undo seeks the background VIDEO to the restored Clip range's time.
  assert.equal(seeks.length, before + 1);
  history.restoreHistory(-1);
  history.restoreHistory(-1);
  assert.deepEqual(state.background.clip, { start: 0, in: 0, duration: null });
  history.restoreHistory(1);
  assert.deepEqual(state.background.clip, { start: 10, in: 0, duration: null });
});

test("the background's Clip range moves past the Timeline's end with its start inside, and keeps the derived length", () => {
  // The derived length is the background VIDEO's own 48 frames, whatever its Clip range.
  const { act, state, timeline } = editorTimeline({ version: 2, timeline: { fps: 24 } });
  drag(act, { type: "clip", id: "background", mode: "move" }, 24);
  assert.deepEqual(state.background.clip, { start: 24, in: 0, duration: null });
  // Its last 24 frames are past the end, outside the output; the length stays.
  assert.equal(timeline.timelineSpanFrames(), 48);
  // The start stops on the last frame of the span when the drag began.
  drag(act, { type: "clip", id: "background", mode: "move" }, 100);
  assert.equal(state.background.clip.start, 47);
  assert.equal(timeline.timelineSpanFrames(), 48);
  // A start past the end already is not pushed further, nor pulled back.
  state.background.clip.start = 60;
  drag(act, { type: "clip", id: "background", mode: "move" }, 5);
  assert.equal(state.background.clip.start, 60);
});

test("trimming the background keeps the derived length, and its tail is not dragged past the end", () => {
  const { act, state, timeline } = editorTimeline({ version: 2, timeline: { fps: 24 } });
  drag(act, { type: "clip", id: "background", mode: "start" }, 10);
  assert.deepEqual(state.background.clip, { start: 10, in: 10, duration: null });
  assert.equal(timeline.timelineSpanFrames(), 48);
  drag(act, { type: "clip", id: "background", mode: "end" }, -20);
  assert.deepEqual(state.background.clip, { start: 10, in: 10, duration: 18 });
  assert.equal(timeline.timelineSpanFrames(), 48);
  // The tail stops at the Timeline's end, where the Clip range opens again.
  drag(act, { type: "clip", id: "background", mode: "end" }, 100);
  assert.deepEqual(state.background.clip, { start: 10, in: 10, duration: null });
});

test("a Clip range that sets the derived length stops at the end: repeated drags never lengthen the output", () => {
  // No background media: the derived length is the latest Clip range end, 20.
  const { act, state, timeline } = editorTimeline({ version: 2, timeline: { fps: 24 }, stickers: [
    sky("a", { clip: { start: 0, in: 0, duration: 20 } }),
    sky("b", { clip: { start: 0, in: 0, duration: 10 } }),
  ] }, { node: studioNode({ linked: false }), transport: {} });
  assert.equal(timeline.timelineSpanFrames(), 20);
  for (let round = 0; round < 3; round += 1) {
    drag(act, { type: "clip", id: "a", mode: "move" }, 5);
    assert.equal(timeline.timelineSpanFrames(), 20);
  }
  assert.equal(state.stickers[0].clip.start, 0);
  // A shorter Clip range moves until its end meets the current end.
  for (let round = 0; round < 3; round += 1) drag(act, { type: "clip", id: "b", mode: "move" }, 15);
  assert.deepEqual(state.stickers[1].clip, { start: 10, in: 0, duration: 10 });
  assert.equal(timeline.timelineSpanFrames(), 20);
});

test("a Sticker's Clip range moves past the end with its start inside; its tail trim stops at the end", () => {
  const { act, state, timeline } = editorTimeline({ version: 2, timeline: { fps: 24, length: 30 }, stickers: [sky("own", { clip: { start: 0, in: 0, duration: 20 } })] });
  timeline.syncTimeline();
  drag(act, { type: "clip", id: "own", mode: "move" }, 100);
  assert.deepEqual(state.stickers[0].clip, { start: 29, in: 0, duration: 20 });
  state.stickers[0].clip = { start: 0, in: 0, duration: 20 };
  drag(act, { type: "clip", id: "own", mode: "end" }, 5);
  assert.deepEqual(state.stickers[0].clip, { start: 0, in: 0, duration: 25 });
  // Dragged past the end, the tail stops there, where the Clip range opens again.
  drag(act, { type: "clip", id: "own", mode: "end" }, 100);
  assert.deepEqual(state.stickers[0].clip, { start: 0, in: 0, duration: null });
});

test("the background's key-row and eye do nothing", () => {
  const { act, state, steps } = editorTimeline({ version: 2, timeline: { fps: 24 } });
  const before = structuredClone(state);
  act({ type: "key-row", owner: "background" });
  act({ type: "select-row", id: "background" });
  assert.equal(steps.count, 0);
  assert.deepEqual(state, before);
});

test("a background Clip range makes the state timed", () => {
  assert.equal(isTimed(loadSceneState({ version: 2 })), false);
  assert.equal(isTimed(loadSceneState({ version: 2, background: { clip: { start: 4 } } })), true);
});

test("opening and closing writes nothing, with or without a background Clip range, also rebased to the VIDEO's fps", () => {
  const node = { __panoSceneStateV2: true };
  for (const saved of [
    { version: 2, timeline: { fps: 24 } },
    { version: 2, timeline: { fps: 24 }, background: { clip: { start: 12, in: 5, duration: 30 } } },
  ]) {
    const text = sceneStateText(loadSceneState(saved));
    assert.equal(editorStateWrite(node, parseSceneEditorState(text), text), null);
    // Opened at a VIDEO's 30 fps, the state is rebased; closing without an edit writes nothing either.
    assert.equal(editorStateWrite(node, parseSceneEditorState(text, { fps: 30 }), text, { rebased: true }), null);
  }
  // The rebased Clip range keeps its seconds.
  assert.deepEqual(parseSceneEditorState(sceneStateText(loadSceneState({ version: 2, timeline: { fps: 24 }, background: { clip: { start: 12, in: 6 } } })), { fps: 48 }).background.clip,
    { start: 24, in: 12, duration: null });
});

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

test("the Timeline model has no background row unless asked", () => {
  const state = loadSceneState({ version: 2 });
  const model = buildTimelineModel(state, { span: 10, selection: null, selectedId: null, expanded: true, openRows: new Set() });
  assert.deepEqual(model.rows, []);
});

test("the editor places the background by its Clip range: the node's own, or an upstream background's at its Studio's fps", () => {
  const own = editorTimeline({ version: 2, timeline: { fps: 24 }, background: { clip: { start: 10, in: 4 } } });
  assert.deepEqual(own.timeline.backgroundVideoPlace(), { origin: 6, start: 10, end: Infinity });
  assert.deepEqual([9, 10, 53, 54].map(own.timeline.backgroundShowsAt), [false, true, true, false]);
  assert.equal(own.timeline.backgroundColor(), "#ff0000");
  // The node's own Clip range does not place an upstream background; the Clip range of its Studio (at 48 fps) does.
  const upstreamBackground = { clip: { clip: { start: 48, in: 0, duration: 96 }, fps: 48 }, color: "#00ff00" };
  const upstream = editorTimeline({ version: 2, timeline: { fps: 24 }, background: { clip: { start: 10, in: 4 } } }, { upstreamBackground });
  assert.deepEqual(upstream.timeline.backgroundVideoPlace(), { origin: 24, start: 24, end: 72 });
  assert.deepEqual([23, 24, 71, 72].map(upstream.timeline.backgroundShowsAt), [false, true, true, false]);
  assert.equal(upstream.timeline.backgroundColor(), "#00ff00");
  // With the default Clip range, the VIDEO is not placed, but bg_color shows after its media ends, as in the output.
  const plain = editorTimeline({ version: 2, timeline: { fps: 24, length: 100 } });
  assert.equal(plain.timeline.backgroundVideoPlace(), null);
  assert.deepEqual([47, 48, 99].map(plain.timeline.backgroundShowsAt), [true, false, false]);
  // An upstream background with the default Clip range of its Studio ends with its media too.
  const upstreamPlain = editorTimeline({ version: 2, timeline: { fps: 24, length: 100 } }, { upstreamBackground: { clip: null, color: "#00ff00" } });
  assert.equal(upstreamPlain.timeline.backgroundVideoPlace(), null);
  assert.deepEqual([47, 48].map(upstreamPlain.timeline.backgroundShowsAt), [true, false]);
  // A single image (no MP4) shows throughout.
  const image = editorTimeline({ version: 2, timeline: { fps: 24, length: 100 } }, { node: studioNode({ video: false }), transport: {} });
  assert.equal(image.timeline.backgroundShowsAt(99), true);
});

test("a background drag seeks the VIDEO at most once per frame, and once more at its end", () => {
  const { act, dragFrames, editor, seeks } = editorTimeline({ version: 2, timeline: { fps: 24, length: 100 } });
  editor.frame = 20;
  act({ type: "clip", id: "background", mode: "move", phase: "start", delta: 0 });
  act({ type: "clip", id: "background", mode: "move", phase: "move", delta: 3 });
  act({ type: "clip", id: "background", mode: "move", phase: "move", delta: 6 });
  // The moves ask the frame for one seek; none is sent by the moves themselves.
  assert.deepEqual(seeks, []);
  assert.ok(dragFrames.pending.has("background"));
  act({ type: "clip", id: "background", mode: "move", phase: "end", delta: 6 });
  assert.deepEqual(seeks, [20]);
  // A click that leaves the Clip range as it was seeks nothing.
  act({ type: "clip", id: "background", mode: "move", phase: "start", delta: 0 });
  act({ type: "clip", id: "background", mode: "move", phase: "end", delta: 0 });
  assert.deepEqual(seeks, [20]);
});

test("the length's reset returns to the derived length as one Undo step, and does nothing without a set length", () => {
  const { act, history, state, steps, timeline, uiState } = editorTimeline({ version: 2, timeline: { fps: 24 }, background: { clip: { start: 24, in: 0 } } });
  timeline.syncTimeline();
  // Without a set length, the model has none (the field shows the span: the VIDEO's own 48 frames).
  assert.deepEqual([uiState.timeline.length, uiState.timeline.span], [null, 48]);
  act({ type: "length", length: null });
  assert.equal(steps.count, 0);
  act({ type: "length", length: 80 });
  assert.deepEqual([state.timeline.length, steps.count], [80, 1]);
  // The reset button's action.
  act({ type: "length", length: null });
  assert.deepEqual([state.timeline.length, steps.count], [null, 2]);
  assert.equal(timeline.timelineSpanFrames(), 48);
  history.restoreHistory(-1);
  assert.equal(state.timeline.length, 80);
});

// docs/timeline-ui.md: a Clip range or Keyframe drag that is cancelled goes back to where it started, with no Undo
// step and nothing written, and what the Timeline sends for it afterwards does nothing.
test("a cancelled Clip range or Keyframe drag puts them back without an Undo step", () => {
  const { act, cancel, state, steps, timeline, timelineState } = editorTimeline({ version: 2, timeline: { fps: 24, length: 100 }, stickers: [sky("own")] });
  timeline.syncTimeline();
  const clip = { type: "clip", id: "background", mode: "move" };
  act({ ...clip, phase: "start", delta: 0 });
  act({ ...clip, phase: "move", delta: 10 });
  assert.equal(state.background.clip.start, 10);
  assert.equal(cancel(), true);
  assert.equal(state.background.clip.start, 0);
  act({ ...clip, phase: "end", delta: 10 });
  assert.equal(state.background.clip.start, 0, "the drag's end finds no drag");

  const [own] = state.stickers;
  keyAllLanes(own, 0);
  const lanes = structuredClone(laneNames(own).map((name) => own[name].keyframes));
  const selection = { owner: "own", lane: null, frames: [0] };
  timelineState.selection = selection;
  act({ type: "move-keys", phase: "start", delta: 0 });
  act({ type: "move-keys", phase: "move", delta: 5 });
  assert.deepEqual(selection.frames, [5]);
  assert.equal(cancel(), true);
  assert.deepEqual(laneNames(own).map((name) => own[name].keyframes), lanes);
  assert.deepEqual(selection.frames, [0]);
  act({ type: "move-keys", phase: "end", delta: 5 });
  assert.deepEqual(steps.count, 0);
  assert.equal(cancel(), false, "nothing is under way");
});

test("Undo, deleting Keyframes and a run's result cancel a pointer's edit under way before they change anything", () => {
  const { act, cancels, history, state, timeline, timelineState } = editorTimeline({ version: 2, timeline: { fps: 24, length: 100 }, stickers: [sky("own")] });
  timeline.syncTimeline();
  act({ type: "clip", id: "background", mode: "move", phase: "start", delta: 0 });
  act({ type: "clip", id: "background", mode: "move", phase: "end", delta: 4 });
  const edited = sceneStateText(loadSceneState(state));
  history.restoreHistory(-1);
  assert.deepEqual(cancels, [edited], "Undo cancels first, on the state it then restores from");
  keyAllLanes(state.stickers[0], 0);
  timelineState.selection = { owner: "own", lane: null, frames: [0] };
  const keyed = sceneStateText(loadSceneState(state));
  timeline.deleteSelectedKeyframes();
  assert.deepEqual(cancels.at(-1), keyed);
  timeline.applyRunResult();
  assert.equal(cancels.length, 3);
});
