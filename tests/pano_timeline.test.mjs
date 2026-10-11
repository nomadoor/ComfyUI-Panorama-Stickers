import assert from "node:assert/strict";
import test from "node:test";

import { readdirSync, readFileSync } from "node:fs";

import { createEditorHistory, createHistory } from "../web_src/editor/history.js";
import { evaluateSceneState } from "../web_src/pano_scene_eval.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import {
  BROKEN_SPAN,
  clusterFrames,
  deleteKeyframes,
  enteredTimelineFps,
  enteredTimelineLength,
  isTimed,
  keyAllLanes,
  moveClip,
  moveKeyframes,
  keyedAt,
  rowKeyframes,
  selectedEasing,
  setLaneValue,
  setSegmentEasing,
  MAX_TICKS,
  autoTimelineLength,
  timelineSpan,
  timelineTicks,
  trimClipEnd,
  trimClipStart,
} from "../web_src/pano_timeline.js";
import { readEditorSource } from "./editor_source.mjs";

const readFixture = (name) => readFileSync(new URL(`./fixtures/scene_state/${name}.json`, import.meta.url), "utf8");

function skySticker(overrides = {}) {
  return loadSceneState({
    version: 2,
    stickers: [{
      id: "st",
      source: { kind: "file", filename: "a.png" },
      direction: { value: { yaw_deg: 10, pitch_deg: 0 } },
      size: { value: { hFOV_deg: 30, vFOV_deg: 20 } },
      ...overrides,
    }],
  }).stickers[0];
}

const EASE_IN_OUT = [0.42, 0, 0.58, 1];
const LINEAR = [0, 0, 1, 1];
const SKY_LANES = ["direction", "roll", "size", "opacity"];

function keyed(lane, ...items) {
  return { value: lane.value, keyframes: items.map(([frame, value, easing = EASE_IN_OUT]) => ({ frame, value, easing })) };
}

test("an edit of a Lane without Keyframes changes its static value", () => {
  const sticker = skySticker();

  setLaneValue(sticker, "direction", 12, { yaw_deg: 40 });
  setLaneValue(sticker, "opacity", 12, 0.5);

  assert.deepEqual(sticker.direction, { value: { yaw_deg: 40, pitch_deg: 0 }, keyframes: [] });
  assert.deepEqual(sticker.opacity, { value: 0.5, keyframes: [] });
});

test("the row's key button keys every Lane at its current value, making the first Keyframes", () => {
  const sticker = skySticker();
  keyAllLanes(sticker, 0);
  assert.deepEqual(rowKeyframes(sticker), [{ frame: 0, full: true }]);
  assert.deepEqual(sticker.direction.keyframes, [{ frame: 0, value: { yaw_deg: 10, pitch_deg: 0 }, easing: EASE_IN_OUT }]);
  assert.notEqual(sticker.direction.keyframes[0].value, sticker.direction.value);
  assert.equal(keyedAt(rowKeyframes(sticker), 0), true);
  assert.equal(keyedAt(rowKeyframes(sticker), 1), false);

  setLaneValue(sticker, "opacity", 20, 0);
  assert.deepEqual(rowKeyframes(sticker), [{ frame: 0, full: true }, { frame: 20, full: false }]);
  keyAllLanes(sticker, 20);
  assert.deepEqual(rowKeyframes(sticker), [{ frame: 0, full: true }, { frame: 20, full: true }]);
  assert.equal(sticker.opacity.keyframes[1].value, 0, "an existing Keyframe keeps its value");
});

test("a keyed Lane updates the Keyframe at the playhead or adds one there, and keeps its static value", () => {
  const sticker = skySticker({ direction: { value: { yaw_deg: 10 }, keyframes: [{ frame: 0, value: { yaw_deg: 10 } }] } });

  // A drag: the first change adds a Keyframe at the playhead, the next ones update it.
  setLaneValue(sticker, "direction", 20, { yaw_deg: 30 });
  setLaneValue(sticker, "direction", 20, { yaw_deg: 50 });
  setLaneValue(sticker, "direction", 0, { pitch_deg: 5 });
  setLaneValue(sticker, "size", 20, { hFOV_deg: 40 });

  assert.deepEqual(sticker.direction.value, { yaw_deg: 10, pitch_deg: 0 }, "the static value is kept");
  assert.deepEqual(sticker.direction.keyframes.map((key) => [key.frame, key.value.yaw_deg, key.value.pitch_deg]), [[0, 10, 5], [20, 50, 0]]);
  assert.deepEqual(sticker.size, { value: { hFOV_deg: 40, vFOV_deg: 20 }, keyframes: [] }, "only the edited Lane is keyed");
});

test("an edit between Keyframes keys the evaluated value with the edit applied", () => {
  const sticker = skySticker();
  sticker.size = keyed(sticker.size, [0, { hFOV_deg: 30, vFOV_deg: 20 }], [10, { hFOV_deg: 50, vFOV_deg: 40 }]);
  const expected = evaluateSceneState({ ...loadSceneState({ version: 2 }), stickers: [sticker] }, 4).stickers[0];

  setLaneValue(sticker, "size", 4, { hFOV_deg: 60 });

  const key = sticker.size.keyframes[1];
  assert.equal(key.frame, 4);
  assert.equal(key.value.hFOV_deg, 60);
  assert.ok(Math.abs(key.value.vFOV_deg - expected.vFOV_deg) < 1e-9);
  assert.deepEqual(sticker.size.keyframes.map((item) => item.frame), [0, 4, 10]);
});

test("an added Keyframe inherits the Easing of the segment it splits", () => {
  const sticker = skySticker();
  sticker.opacity = keyed(sticker.opacity, [10, 1, LINEAR], [20, 0, "hold"]);

  setLaneValue(sticker, "opacity", 15, 0.4);
  assert.deepEqual(sticker.opacity.keyframes.map((key) => [key.frame, key.easing]), [[10, LINEAR], [15, LINEAR], [20, "hold"]]);
  assert.notEqual(sticker.opacity.keyframes[1].easing, sticker.opacity.keyframes[0].easing);

  // Before the first Keyframe: the default.
  setLaneValue(sticker, "opacity", 4, 0.2);
  assert.deepEqual(sticker.opacity.keyframes[0], { frame: 4, value: 0.2, easing: EASE_IN_OUT });
  // After the last: the former last Keyframe's stored Easing governs the new segment; the new one has the default.
  setLaneValue(sticker, "opacity", 30, 0.9);
  assert.deepEqual(sticker.opacity.keyframes.slice(-2).map((key) => [key.frame, key.easing]), [[20, "hold"], [30, EASE_IN_OUT]]);
});

test("the playhead finds a Keyframe within FRAME_EPSILON", () => {
  const sticker = skySticker();
  sticker.opacity = keyed(sticker.opacity, [10, 1], [20, 0]);
  setLaneValue(sticker, "opacity", 20 - 1e-7, 0.5);
  assert.deepEqual(sticker.opacity.keyframes.map((key) => [key.frame, key.value]), [[10, 1], [20, 0.5]]);
});

test("deleting a Lane's last Keyframe keeps its value as the static value", () => {
  const sticker = skySticker();
  sticker.direction = keyed(sticker.direction, [0, { yaw_deg: 90, pitch_deg: 0 }], [8, { yaw_deg: 120, pitch_deg: 0 }]);

  deleteKeyframes(sticker, ["direction"], [0], 3);
  assert.equal(sticker.direction.value.yaw_deg, 10, "Keyframes remain, so the static value is untouched");
  deleteKeyframes(sticker, ["direction"], [8], 3);
  assert.deepEqual(sticker.direction, { value: { yaw_deg: 120, pitch_deg: 0 }, keyframes: [] });
  setLaneValue(sticker, "direction", 8, { yaw_deg: 15 });
  assert.equal(sticker.direction.value.yaw_deg, 15);

  // Deleting several at once keeps the value shown at the playhead.
  sticker.opacity = keyed(sticker.opacity, [0, 0, LINEAR], [10, 1]);
  deleteKeyframes(sticker, ["opacity"], [0, 10], 4);
  assert.ok(Math.abs(sticker.opacity.value - 0.4) < 1e-9);
});

test("a row's pin moves, deletes and eases the Keyframes of every Lane at its frame", () => {
  const sticker = skySticker();
  keyAllLanes(sticker, 0);
  setLaneValue(sticker, "opacity", 10, 0.5);
  setLaneValue(sticker, "roll", 20, 30);
  keyAllLanes(sticker, 30);

  // Moving the pin at 10 onto 20 replaces the roll Keyframe there; opacity had none at 20.
  assert.equal(moveKeyframes(sticker, SKY_LANES, [10], 10, 0), 10);
  assert.deepEqual(rowKeyframes(sticker), [{ frame: 0, full: true }, { frame: 20, full: false }, { frame: 30, full: true }]);
  assert.deepEqual(sticker.roll.keyframes.map((key) => key.frame), [0, 20, 30]);
  assert.deepEqual(sticker.opacity.keyframes.map((key) => [key.frame, key.value]), [[0, 1], [20, 0.5], [30, 0.5]]);

  setSegmentEasing(sticker, SKY_LANES, [0], "hold");
  assert.deepEqual(SKY_LANES.map((name) => sticker[name].keyframes[0].easing), ["hold", "hold", "hold", "hold"]);

  deleteKeyframes(sticker, SKY_LANES, [20], 0);
  assert.deepEqual(rowKeyframes(sticker), [{ frame: 0, full: true }, { frame: 30, full: true }]);
});

test("moved Keyframes stop at Timeline frame 0", () => {
  const sticker = skySticker();
  sticker.opacity = keyed(sticker.opacity, [4, 1], [6, 1], [9, 1]);

  // A Sticker whose material starts at Timeline frame 2 has Timeline frame 0 at Clip frame -2.
  assert.equal(moveKeyframes(sticker, ["opacity"], [6, 9], -20, -2), -8);
  assert.deepEqual(sticker.opacity.keyframes.map((key) => key.frame), [-2, 1, 4]);
  assert.equal(moveKeyframes(sticker, ["opacity"], [-2], -5, 0), 0, "a Keyframe already before frame 0 is not pushed further");
  assert.equal(moveKeyframes(sticker, ["opacity"], [-2], 3, 0), 3);
  assert.deepEqual(sticker.opacity.keyframes.map((key) => key.frame), [1, 4]);
});

test("moved Keyframes stop at the Timeline's last frame; one past it is not pushed further", () => {
  const sticker = skySticker();
  sticker.opacity = keyed(sticker.opacity, [4, 1], [6, 1], [9, 1]);
  // A Timeline of 20 frames whose material starts at Timeline frame 2: its last frame is Clip frame 17.
  assert.equal(moveKeyframes(sticker, ["opacity"], [6, 9], 30, -2, 17), 8);
  assert.deepEqual(sticker.opacity.keyframes.map((key) => key.frame), [4, 14, 17]);
  sticker.opacity = keyed(sticker.opacity, [4, 1], [30, 1]);
  assert.equal(moveKeyframes(sticker, ["opacity"], [30], 5, 0, 17), 0, "a Keyframe already past the end is not pushed further");
  assert.equal(moveKeyframes(sticker, ["opacity"], [30], -3, 0, 17), -3, "nor pulled back");
});

test("Easing edits set the selected segments, ignoring each Lane's last Keyframe", () => {
  const sticker = skySticker();
  sticker.opacity = keyed(sticker.opacity, [0, 0], [10, 1], [20, 0], [30, 1, "auto"]);
  sticker.roll = keyed(sticker.roll, [0, 0, LINEAR], [10, 5, "hold"]);

  setSegmentEasing(sticker, ["opacity"], [10, 30], LINEAR);
  assert.deepEqual(sticker.opacity.keyframes.map((key) => key.easing), [EASE_IN_OUT, LINEAR, LINEAR, "auto"]);
  assert.deepEqual(selectedEasing(sticker, ["opacity", "roll"], [0]), { easing: null, mixed: true });
  // The roll's Keyframe at 10 is its last, so its stored hold does not count.
  assert.deepEqual(selectedEasing(sticker, ["opacity", "roll"], [10]), { easing: LINEAR, mixed: false });
  setSegmentEasing(sticker, ["opacity", "roll"], [0], "hold");
  assert.deepEqual(selectedEasing(sticker, ["opacity", "roll"], [0]), { easing: "hold", mixed: false });
  assert.equal(selectedEasing(sticker, ["roll"], [10]), null);
  const saved = loadSceneState({ version: 2, stickers: [sticker] }).stickers[0];
  assert.deepEqual(saved.opacity, sticker.opacity);
});

test("moving a Clip range keeps its Keyframes on the content", () => {
  const state = loadSceneState(readFixture("v2_canonical"));
  const before = [0, 10, 20, 30, 49].map((frame) => evaluateSceneState(state, frame).stickers[0]);

  moveClip(state.stickers[0].clip, 7);

  assert.deepEqual(state.stickers[0].clip, { start: 17, in: 5, duration: 40 });
  for (const [index, frame] of [0, 10, 20, 30, 49].entries()) {
    const after = evaluateSceneState(state, frame + 7).stickers[0];
    assert.equal(after.opacity, before[index].opacity, `frame ${frame}`);
    assert.equal(after.active, before[index].active, `frame ${frame}`);
  }
  moveClip(state.stickers[0].clip, -100);
  assert.deepEqual(state.stickers[0].clip, { start: 0, in: 5, duration: 40 });
});

test("trimming a Clip range changes the range and not where the Keyframes are", () => {
  const state = loadSceneState(readFixture("v2_canonical"));
  const sticker = state.stickers[0];
  const opacityAt = (frame) => evaluateSceneState(state, frame).stickers[0].opacity;
  const before = Array.from({ length: 60 }, (_, frame) => opacityAt(frame));

  trimClipStart(sticker.clip, 14);
  assert.deepEqual(sticker.clip, { start: 14, in: 9, duration: 36 });
  trimClipEnd(sticker.clip, 30, 60);
  assert.deepEqual(sticker.clip, { start: 14, in: 9, duration: 16 });
  for (let frame = 0; frame < 60; frame += 1) assert.equal(opacityAt(frame), before[frame], `frame ${frame}`);
  assert.equal(evaluateSceneState(state, 13).stickers[0].active, false);
  assert.equal(evaluateSceneState(state, 14).stickers[0].active, true);
  assert.equal(evaluateSceneState(state, 29).stickers[0].active, true);
  assert.equal(evaluateSceneState(state, 30).stickers[0].active, false);

  trimClipStart(sticker.clip, 0);
  assert.deepEqual(sticker.clip, { start: 5, in: 0, duration: 25 }, "the head stops at the material's first frame");
  trimClipStart(sticker.clip, 100);
  assert.deepEqual(sticker.clip, { start: 29, in: 24, duration: 1 }, "the head stops one frame before the end");
  trimClipEnd(sticker.clip, 0, 60);
  assert.equal(sticker.clip.duration, 1);
  trimClipEnd(sticker.clip, 59, 60);
  assert.equal(sticker.clip.duration, 30);
  trimClipEnd(sticker.clip, 60, 60);
  assert.equal(sticker.clip.duration, null, "an end at the Timeline's last frame opens the Clip range");

  const open = skySticker().clip;
  trimClipStart(open, 12);
  assert.deepEqual(open, { start: 12, in: 12, duration: null });
});

test("a state is timed when it has a Keyframe or a Clip range other than the whole Timeline", () => {
  assert.equal(isTimed(loadSceneState(null)), false);
  assert.equal(isTimed(loadSceneState(readFixture("v1_stickers"))), false);
  assert.equal(isTimed(loadSceneState(readFixture("v2_canonical"))), true);
  const state = loadSceneState({ version: 2, camera: {}, stickers: [{ source: { kind: "port" }, clip: { start: 0, in: 3 } }] });
  assert.equal(isTimed(state), true);
  state.stickers[0].clip.in = 0;
  assert.equal(isTimed(state), false);
  assert.equal(isTimed({ ...state, camera: null }, { camera: true }), false, "a state without a Camera");
  keyAllLanes(state.camera, 0);
  assert.equal(isTimed(state), false, "the Camera counts only with `camera`");
  assert.equal(isTimed(state, { camera: true }), true, "Panorama Studio shoots with the Camera");
});

test("the Timeline spans exactly the output's length: timeline.length, else the Auto length", () => {
  const canonical = loadSceneState(readFixture("v2_canonical"));
  const video = { video: true, frames: 300, duration: 10 };
  assert.equal(timelineSpan(canonical), 120);
  assert.equal(timelineSpan(canonical, { bg: video }), 120, "a set length ends the Timeline before the video does");
  canonical.stickers[1].scale.keyframes[1].frame = 400;
  canonical.stickers[0].clip.duration = 500;
  assert.equal(timelineSpan(canonical), 120, "nothing past the length widens it");
  canonical.timeline.length = 7;
  assert.equal(timelineSpan(canonical), 7, "a length shorter than the Clip ranges");
  canonical.timeline.length = 10000;
  assert.equal(timelineSpan(canonical), 10000, "a length longer than everything");
  canonical.timeline.length = null;
  assert.equal(timelineSpan(canonical, { bg: video }), 300, "Auto: the background VIDEO's frames");
  assert.equal(timelineSpan(canonical, { bg: { video: false, frames: 12 } }), 12, "Auto: the IMAGE batch's");
  assert.equal(timelineSpan(canonical, { bg: { video: false, frames: 1 } }), 510, "a single image sets nothing");
  assert.equal(timelineSpan(canonical), 510, "Auto: the latest Clip end");
  canonical.stickers[0].clip.duration = 40;
  assert.equal(timelineSpan(canonical), 50, "Keyframes of Stickers do not lengthen the output");
  assert.equal(timelineSpan(loadSceneState(null)), 1, "a still: one frame");
  assert.equal(timelineSpan(loadSceneState(null), { camera: true }), 1, "a state without a Camera");
  const camera = loadSceneState({ version: 2, camera: {} });
  keyAllLanes(camera.camera, 200);
  assert.equal(timelineSpan(camera), 1, "the Camera counts only with `camera`");
  assert.equal(timelineSpan(camera, { camera: true }), 201, "Panorama Studio shoots with the Camera: its last Keyframe + 1");
  camera.scene.clip.duration = 30;
  assert.equal(timelineSpan(camera, { camera: true }), 30, "a Clip end comes before the Camera");
});

test("the Auto length counts the port media, the scene items and the upstream Scene as _decide_timeline does", () => {
  const state = loadSceneState({ version: 2, timeline: { fps: 24 }, stickers: [{ id: "p", source: { kind: "port" }, clip: { start: 6, in: 2 } }] });
  const video = { kind: "VIDEO", fps: 30, frames: 90, duration: 3 };
  assert.equal(autoTimelineLength(state), 1, "a port Sticker whose media is not known yet");
  assert.equal(autoTimelineLength(state, { port: video }), 76, "its media ends at start - in + 3 s");
  assert.equal(autoTimelineLength(state, { port: { kind: "IMAGE", frames: 10 } }), 14);
  state.stickers[0].clip.duration = 20;
  assert.equal(autoTimelineLength(state, { port: video }), 26, "a duration ends it before its media");
  assert.equal(autoTimelineLength(state, { port: video, openClip: state.stickers[0].clip }), 76, "the Clip range being dragged counts as open");
  state.scene.clip = { start: 3, in: 1, duration: null };
  assert.equal(autoTimelineLength(state, { sceneItems: 40 }), 42, "the scene's items end its Clip range");
  assert.equal(autoTimelineLength(state, { upstream: { frames: 100, ends: [] } }), 100, "the upstream Scene's length");
  assert.equal(autoTimelineLength(state, { upstream: { frames: 10, ends: [130.4] } }), 130, "an overridden upstream Clip end");
  assert.equal(autoTimelineLength(state, { bg: { video: true, frames: 50, duration: 2 }, upstream: { frames: 10, ends: [] } }), 48,
    "under an upstream Scene, a background VIDEO lasts its seconds at the Timeline fps");
});

test("a Clip range end reopens at the span set by everything else", () => {
  const state = loadSceneState(readFixture("v2_canonical"));
  state.timeline.length = null;
  const { clip } = state.stickers[0];
  assert.equal(timelineSpan(state), 50, "this Clip range ends at 50");
  const span = timelineSpan(state, { openClip: clip, camera: true });
  assert.equal(span, 49, "the last Camera Keyframe is at 48");

  trimClipEnd(clip, 51, span);
  assert.equal(clip.duration, 41, "the Clip range that sets the span stays fixed");
  trimClipEnd(clip, 49, span);
  assert.equal(clip.duration, 39);
  trimClipEnd(clip, 40, span);
  trimClipEnd(clip, 49, span);
  assert.equal(clip.duration, null, "an end trimmed up to the rest of the Timeline opens it");
});

test("dense Keyframes are grouped into one pin", () => {
  assert.deepEqual(clusterFrames([0, 1, 2, 10, 11, 30], 3), [
    { frames: [0, 1, 2], frame: 1 },
    { frames: [10, 11], frame: 10.5 },
    { frames: [30], frame: 30 },
  ]);
  assert.deepEqual(clusterFrames([0, 10, 20], 3).map((pin) => pin.frames), [[0], [10], [20]]);
  assert.deepEqual(clusterFrames([], 3), []);
});

// The playback itself is tested with a fake VIDEO in tests/pano_video_playback.test.mjs; these check
// how the editor wires it.
const editorSource = readEditorSource();
const editorFunction = (name) => editorSource.slice(editorSource.indexOf(`  function ${name}(`), editorSource.indexOf("\n  }\n", editorSource.indexOf(`  function ${name}(`)));

test("the Timeline's playhead and play button follow the playback", () => {
  assert.match(editorSource, /onFrame: \(frame\) => \{\s*if \(stateV2\) setTimelineFrame\(frame\);/);
  assert.match(editorSource, /span: \(\) => \{\s*if \(stateV2\) return timelineSpanFrames\(\);/);
  // The playhead and the play button follow refs apart from the Timeline's model, which playback does not
  // build again on each frame.
  assert.match(editorSource, /timelinePlayhead\.playing\.value = playback\.playing;/);
  assert.match(editorFunction("setTimelineFrame"), /timelinePlayhead\.frame\.value = next;/);
  assert.doesNotMatch(editorFunction("syncTimeline"), /playing|frame: editor\.frame|label/);
  assert.doesNotMatch(editorFunction("setTimelineFrame"), /updateSidePanel\(\);\s*updateSelectionMenu/);
  // Only Panorama Studio's edits stop playback; the legacy transport plays on.
  assert.match(editorFunction("stopTimelinePlayback"), /if \(stateV2\) playback\.stop\(\);/);
  assert.doesNotMatch(editorSource, /videoState\.(seeking|pendingPlaybackResume|requestedTime|seekLanding|mode)\b/);
});

test("Panorama Studio builds no filmstrip and a filmstrip is not built again for the same VIDEO", () => {
  assert.match(editorFunction("refreshModalVideoSource"), /if \(nextSrc && !stateV2 && videoState\.thumbnailSrc !== nextSrc && !videoState\.thumbnailFailedSrcs\.has\(nextSrc\)\) \{\s*void buildVideoThumbnails\(nextSrc, duration, fps\);/);
  assert.equal(editorSource.match(/void buildVideoThumbnails\(/g).length, 1);
  assert.match(editorSource, /if \(!loaded \|\| videoWidth < 1 \|\| videoHeight < 1\) \{\s*videoState\.thumbnailFailedSrcs\.add\(safeSrc\);\s*return;/);
});

test("Space toggles playback outside text fields, once per press, without clicking a focused button", () => {
  const filter = editorSource.slice(editorSource.indexOf("function spaceTogglesPlayback(ev) {"), editorSource.indexOf("\n  }\n", editorSource.indexOf("function spaceTogglesPlayback(ev) {")));
  assert.match(filter, /if \(ev\.code !== "Space" \|\| ev\.ctrlKey \|\| ev\.metaKey \|\| ev\.altKey\) return false;/);
  assert.match(filter, /return stageOwnsKey\(ev\);/);
  // The stage's keys (Space and the movement keys, tests/editor_keyboard.test.mjs): not over the confirm
  // dialog, and focus outside the editor's overlay (another dialog on top) keeps them.
  const owns = editorSource.slice(editorSource.indexOf("function stageOwnsKey(ev) {"), editorSource.indexOf("\n  }\n", editorSource.indexOf("function stageOwnsKey(ev) {")));
  assert.match(owns, /if \(uiState\.confirmDialog\.visible\) return false;/);
  assert.match(owns, /const t = ev\.composedPath\(\)\[0\];\s*if \(t !== document\.body && t !== document\.documentElement && !overlay\.contains\(t\)\) return false;/);
  assert.match(owns, /if \(tag === "INPUT"\) return !TEXT_INPUT_TYPES\.has\(String\(t\.type \|\| "text"\)\.toLowerCase\(\)\);/);
  assert.match(owns, /return tag !== "TEXTAREA" && tag !== "SELECT" && !t\?\.isContentEditable;/);
  const types = editorSource.match(/const TEXT_INPUT_TYPES = new Set\((\[[^\]]*\])\);/);
  assert.ok(JSON.parse(types[1]).includes("number"));
  assert.ok(!JSON.parse(types[1]).includes("range"));
  assert.match(editorSource, /function onSpaceKey\(ev\) \{\s*if \(!spaceTogglesPlayback\(ev\)\) return;\s*ev\.preventDefault\(\);\s*ev\.stopPropagation\(\);\s*if \(!ev\.repeat\) togglePlayback\(\);/);
  // Firefox clicks a focused button on keyup.
  assert.match(editorSource, /function onSpaceKeyUp\(ev\) \{\s*if \(!spaceTogglesPlayback\(ev\)\) return;\s*ev\.preventDefault\(\);/);
  for (const [type, listener] of [["keydown", "onSpaceKey"], ["keyup", "onSpaceKeyUp"]]) {
    assert.match(editorSource, new RegExp(`window\\.addEventListener\\("${type}", ${listener}, true\\);`));
    assert.match(editorSource, new RegExp(`window\\.removeEventListener\\("${type}", ${listener}, true\\);`));
  }
  const timelineVue = readFileSync(new URL("../web_src/components/PanoTimeline.vue", import.meta.url), "utf8");
  assert.match(timelineVue, /:aria-label="playing \? 'Pause \(Space\)' : 'Play \(Space\)'"/);
  assert.match(timelineVue, /const playing = computed\(\(\) => props\.playhead\.playing\.value\);/);
});

test("an edit on the canvas stops playback on its first move and starts from the stopped frame; a click does not stop it", () => {
  const begin = editorSource.slice(editorSource.indexOf("  function onCanvasPointerDown(e) {"), editorSource.indexOf("  // Playback ran on from the pointer going down to its first move."));
  // Only a paint stroke, which draws at once, stops at pointerdown.
  assert.equal(begin.match(/stopTimelinePlayback\(\);/g).length, 1);
  assert.match(begin, /supportsFramePainting\(\)\)\) \{[^}]*if \(!paintingShown\(\)\) return;\s*stopTimelinePlayback\(\);/);
  assert.match(begin, /const p = screenPos\(e\);\s*editPointerDown = p;/);
  const move = editorSource.slice(editorSource.indexOf("  function onCanvasPointerMove(e) {"), editorSource.indexOf("if (it.kind === \"paint_stroke\")"));
  assert.match(move, /if \(editPointerDown && \(p\.x !== editPointerDown\.x \|\| p\.y !== editPointerDown\.y\)\) \{\s*const down = editPointerDown;\s*editPointerDown = null;\s*if \(!\["view", "marquee_select", "space_pan", "space_orbit", "world_select"\]\.includes\(it\.kind\)\) restartEditAtStoppedFrame\(it, down\);/);
  const restart = editorFunction("restartEditAtStoppedFrame");
  assert.match(restart, /if \(!stateV2 \|\| !playback\.playing\) return;\s*playback\.stop\(\);/);
  for (const field of ["it.offset", "it.startCenter", "snap.center", "it.center", "it.startRot", "it.startAng", "it.startDist", "it.startHFOV", "it.startVFOV"]) {
    assert.ok(restart.indexOf(`${field} =`) > restart.indexOf("playback.stop();"), field);
  }
  // Looking around with the wheel keeps playing; in the Cutout's Frame view the wheel edits the Camera (#77).
  const wheel = editorSource.slice(editorSource.indexOf("function onCanvasWheel(e) {"), editorSource.indexOf("\n  }\n", editorSource.indexOf("function onCanvasWheel(e) {")));
  assert.doesNotMatch(wheel.slice(wheel.indexOf('if (editor.mode !== "pano") return;')), /stopTimelinePlayback/);
});

test("deleting, undo and redo, and adding a Sticker stop playback first", () => {
  assert.match(editorFunction("deleteSelected"), /if \(selectedItems\.some\(\(item\) => isItemLocked\(item\)\)\) return;\s*stopTimelinePlayback\(\);/);
  assert.match(editorSource, /if \(sceneV2\) \{\s*\/\/[^\n]*\n\s*stopTimelinePlayback\(\);\s*await addSceneStickerFromFile\(file\);/);
});

test("undo and redo stop playback before they restore a step", () => {
  const state = { ...loadSceneState({ version: 2, camera: { fov: { value: 90 } } }), active: {} };
  const editor = { frame: 0, historyController: createEditorHistory(state) };
  const history = createHistory({ editor, readOnly: false, runtime: {}, state, stateV2: true, studio: true, type: "stickers" });
  const noop = () => {};
  const stops = [];
  history.connect({
    clearWorldSelection: noop, commitState: noop, getActiveCutoutShot: () => null, isUploadingSticker: () => false,
    markObjectVisualsDirty: noop, markPaintStrokeVisualsDirty: noop, playback: { seek: noop }, pruneUpstreamRecords: noop,
    rebuildUpstreamWorking: noop, releaseHiddenSelection: noop, requestDraw: noop,
    stopTimelinePlayback: () => stops.push(state.camera.fov.value), storedEditorState: () => state, syncCutoutShot: noop,
    syncPaintUi: noop, syncPortHandoff: noop, syncUndoRedoButtons: noop, syncUpstreamEdits: noop, updateSidePanel: noop,
  });
  state.camera.fov.value = 120;
  history.pushHistory();
  history.restoreHistory(-1);
  history.restoreHistory(1);
  // Each stop came while the step before it was still shown.
  assert.deepEqual(stops, [120, 90]);
  assert.equal(state.camera.fov.value, 120);
});

test("the legacy transport seeks to its own time and leaves looping to the VIDEO", () => {
  assert.match(editorFunction("playbackFps"), /return stateV2 \? state\.timeline\.fps : videoState\.metaFps \|\| 1000;/);
  assert.match(editorSource, /return videoEl\.loop \|\| !\(frames > 0\) \? Infinity : frames;/);
  assert.match(editorSource, /loop: \(\) => stateV2,/);
});

test("an fps from a run, an fps edit and undoing one keep the playhead's time", () => {
  assert.match(editorSource, /if \(reason === "executed"\) \{[^}]*if \(sceneV2\) applyVideoTimelineFps\(\);/);
  assert.match(editorFunction("applyVideoTimelineFps"), /if \(fps !== null && fps !== state\.timeline\.fps\) changeTimelineFps\(fps\);/);
  const change = editorFunction("changeTimelineFps");
  assert.match(change, /const frame = Math\.round\(editor\.frame \* fps \/ state\.timeline\.fps\);\s*setTimelineFps\(state, fps\);/);
  assert.match(change, /playback\.seek\(frame\);\s*commitTimelineEdit\(\);/);
  assert.match(editorFunction("restoreHistory"), /if \(stateV2 && state\.timeline\.fps !== fps\) playback\.seek\(Math\.round\(editor\.frame \* state\.timeline\.fps \/ fps\)\);/);
});

test("Panorama Studio's Timeline opens by itself on its Camera's Keyframes and on the rest (#89)", () => {
  const state = loadSceneState({ version: 2, camera: {} });
  assert.equal(isTimed(state, { camera: true }), false);
  keyAllLanes(state.camera, 0);
  assert.equal(isTimed(state, { camera: true }), true);
  const sticker = loadSceneState({ version: 2, camera: {} });
  keyAllLanes(sticker.scene, 0);
  assert.equal(isTimed(sticker, { camera: true }), true);
  // Without a Camera there is nothing of it to count.
  assert.equal(isTimed(loadSceneState({ version: 2 }), { camera: true }), false);
});

test("the fps and length fields bring what is typed into range and reject what is not a number", () => {
  assert.equal(enteredTimelineFps(1e308), 1000);
  assert.equal(enteredTimelineFps(Infinity), 1000);
  assert.equal(enteredTimelineFps(300), 300);
  assert.equal(enteredTimelineFps(0.25), 1);
  assert.equal(enteredTimelineFps(29.97), 29.97);
  for (const fps of [0, -1, NaN]) assert.equal(enteredTimelineFps(fps), null);
  assert.equal(enteredTimelineLength(1e308), 10000000);
  assert.equal(enteredTimelineLength(Infinity), 10000000);
  assert.equal(enteredTimelineLength(0), 1);
  assert.equal(enteredTimelineLength(12.4), 12);
  assert.equal(enteredTimelineLength(null), null, "an empty field follows the inputs");
  assert.equal(enteredTimelineLength(NaN), undefined);
});

test("a huge length neither spans past the limit nor labels past MAX_TICKS", () => {
  const state = loadSceneState({ version: 2, timeline: { length: 1e308 } });
  assert.equal(timelineSpan(state), 10000000);
  state.timeline.length = Infinity;
  assert.equal(timelineSpan(state), BROKEN_SPAN, "a broken span is not passed on");
  state.timeline.length = null;
  state.scene.clip.duration = NaN;
  assert.equal(timelineSpan(state), BROKEN_SPAN);
  assert.equal(BROKEN_SPAN, 100000);
  const started = performance.now();
  assert.equal(timelineTicks(1e308, 1e-300).length, MAX_TICKS);
  assert.ok(performance.now() - started < 1000);
  assert.deepEqual(timelineTicks(120, 1000 / 120), [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]);
});

test("each result of a VIDEO above the fps limit leaves the playhead and the history as they are", () => {
  // The fps a result brings is brought into range before it is compared with the state's.
  assert.match(editorSource, /function videoTimelineFps\(node\) \{[\s\S]*?return Array\.isArray\(fps\) \? timelineFps\(fps\[0\]\) : null;/);
  // The same fps after that is no change: no rebase, no playhead jump, no Undo step.
  assert.match(editorFunction("changeTimelineFps"), /const fps = timelineFps\(value\);\s*if \(fps === null \|\| fps === state\.timeline\.fps\) return;\s*stopTimelinePlayback\(\);/);
});

test("no Timeline has a minimum length", () => {
  // The editor's Timeline and the node surface's playback span the output's length, with no 5 s floor and nothing
  // reached past it (Rive, After Effects).
  const sources = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = new URL(entry.name + (entry.isDirectory() ? "/" : ""), dir);
    if (entry.isDirectory()) return sources(path);
    return /\.(js|vue)$/.test(entry.name) ? [[entry.name, readFileSync(path, "utf8")]] : [];
  });
  for (const [name, source] of sources(new URL("../web_src/", import.meta.url))) {
    assert.doesNotMatch(source, /fps\(?\)?\s*\*\s*5\b|timelineSpan\([^)]*minimum|ownersSpan/, name);
  }
});

// docs/timeline-ui.md (ADR 0042): the row's key button and its pins leave out the lens Lanes, `curve` and `lens`.
// A row keyed at a frame stays a full pin there, and a lens Lane gets Keyframes only through its own edits.
test("the row's key button does not key the lens Lanes, and its pins do not count them", () => {
  const camera = loadSceneState({ version: 2, camera: { curve: { keyframes: [{ frame: 12, value: 0.5 }] } } }).camera;
  keyAllLanes(camera, 0);
  assert.deepEqual(camera.curve.keyframes.map((key) => key.frame), [12]);
  assert.deepEqual(rowKeyframes(camera), [{ frame: 0, full: true }]);
  // Lenses Pose handoff writes on a Sticker are left alone too.
  const sticker = skySticker();
  sticker.curve = { value: 0.5, keyframes: [] };
  keyAllLanes(sticker, 0);
  assert.deepEqual(sticker.curve.keyframes, []);
  assert.deepEqual(rowKeyframes(sticker), [{ frame: 0, full: true }]);
});

// ADR 0043, docs/studio-node.md: an animated 3D file without a duration ends one cycle of its clip (duration ÷ speed,
// rounded up to a frame) after its material starts, as a VIDEO ends with its media.
test("the Auto length counts one cycle of an animated 3D file's clip", () => {
  const clips = [{ name: "Walking", duration: 2.5 }, { name: "Idle", duration: 4 }];
  const state = (extra = {}) => loadSceneState({
    version: 2,
    timeline: { fps: 24 },
    scene: { clip: { start: 10, in: 4 }, ...extra.scene },
    stickers: [{ id: "robot", placement: "world", source: { kind: "file", filename: "robot.glb" }, clip: { start: 0, in: 0 }, ...extra.robot }],
  });
  // The first clip by default: 2.5 s at 24 fps is 60 frames from the material's start.
  assert.equal(autoTimelineLength(state(), { animations: { scene: null, stickers: { robot: clips } } }), 60);
  // By name, and at its speed (4 s ÷ 1.5 = 64 frames, rounded up).
  assert.equal(autoTimelineLength(state({ robot: { animation: { clip: "Idle", speed: 1.5 } } }), { animations: { stickers: { robot: clips } } }), 64);
  // A name the file does not have plays the first clip.
  assert.equal(autoTimelineLength(state({ robot: { animation: { clip: "Run" } } }), { animations: { stickers: { robot: clips } } }), 60);
  // The `scene` input's counts from its own start − in: 10 − 4 + 96.
  assert.equal(autoTimelineLength(state(), { animations: { scene: [{ name: "a", duration: 4 }] } }), 102);
  // A Clip range with a duration ends there; a clip of no length counts nothing; a longer VIDEO wins.
  assert.equal(autoTimelineLength(state({ robot: { clip: { start: 0, in: 0, duration: 30 } } }), { animations: { stickers: { robot: clips } } }), 30);
  assert.equal(autoTimelineLength(state(), { animations: { stickers: { robot: [{ name: "x", duration: 0 }] } } }), 1);
  assert.equal(autoTimelineLength(state(), { bg: { video: true, frames: 200, duration: 200 / 24 }, animations: { stickers: { robot: clips } } }), 200);
  // Without the clips (before the file is read) nothing is counted.
  assert.equal(autoTimelineLength(state()), 1);
});
