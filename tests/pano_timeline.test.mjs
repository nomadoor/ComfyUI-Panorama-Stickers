import assert from "node:assert/strict";
import test from "node:test";

import { readFileSync } from "node:fs";

import { evaluateSceneState } from "../web_src/pano_scene_eval.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import {
  clusterFrames,
  deleteKeyframes,
  isTimed,
  keyAllLanes,
  moveClip,
  moveKeyframes,
  rowKeyed,
  rowKeyframes,
  selectedEasing,
  setLaneValue,
  setSegmentEasing,
  timelineSpan,
  trimClipEnd,
  trimClipStart,
} from "../web_src/pano_timeline.js";

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
  assert.equal(rowKeyed(sticker, 0), true);

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
  const state = loadSceneState({ version: 2, stickers: [{ source: { kind: "port" }, clip: { start: 0, in: 3 } }] });
  assert.equal(isTimed(state), true);
  state.stickers[0].clip.in = 0;
  assert.equal(isTimed(state), false);
  keyAllLanes(state.camera, 0);
  assert.equal(isTimed(state), true);
});

test("the Timeline shows its length widened to the video, Clip ranges and Keyframes", () => {
  const canonical = loadSceneState(readFixture("v2_canonical"));
  assert.equal(timelineSpan(canonical, { minimum: 10 }), 120);
  assert.equal(timelineSpan(canonical, { minimum: 10, frames: 300 }), 300);
  canonical.timeline.length = null;
  assert.equal(timelineSpan(canonical, { minimum: 10 }), 50);
  canonical.stickers[1].scale.keyframes[1].frame = 80;
  assert.equal(timelineSpan(canonical, { minimum: 10 }), 81);
  assert.equal(timelineSpan(loadSceneState(null), { minimum: 120 }), 120);
});

test("a Clip range end reopens at the span set by everything else", () => {
  const state = loadSceneState(readFixture("v2_canonical"));
  state.timeline.length = null;
  const { clip } = state.stickers[0];
  assert.equal(timelineSpan(state, { minimum: 10 }), 50, "this Clip range ends at 50");
  const span = timelineSpan(state, { minimum: 10, openClip: clip });
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
const editorSource = readFileSync(new URL("../web_src/pano_editor.js", import.meta.url), "utf8");
const editorFunction = (name) => editorSource.slice(editorSource.indexOf(`  function ${name}(`), editorSource.indexOf("\n  }\n", editorSource.indexOf(`  function ${name}(`)));

test("the Timeline's playhead and play button follow the playback", () => {
  assert.match(editorSource, /onFrame: \(frame\) => \{\s*if \(sceneV2\) setTimelineFrame\(frame\);/);
  assert.match(editorSource, /span: \(\) => \{\s*if \(sceneV2\) return timelineSpanFrames\(\);/);
  assert.match(editorFunction("syncTimeline"), /playing: playback\.playing,/);
  // Only PanoramaStickersNode's edits stop playback; the legacy transport plays on.
  assert.match(editorFunction("stopTimelinePlayback"), /if \(sceneV2\) playback\.stop\(\);/);
  assert.doesNotMatch(editorSource, /videoState\.(seeking|pendingPlaybackResume|requestedTime|seekLanding|mode)\b/);
});

test("PanoramaStickersNode builds no filmstrip and a filmstrip is not built again for the same VIDEO", () => {
  assert.match(editorFunction("refreshModalVideoSource"), /if \(nextSrc && !sceneV2 && videoState\.thumbnailSrc !== nextSrc && !videoState\.thumbnailFailedSrcs\.has\(nextSrc\)\) \{\s*void buildVideoThumbnails\(nextSrc, duration, fps\);/);
  assert.equal(editorSource.match(/void buildVideoThumbnails\(/g).length, 1);
  assert.match(editorSource, /if \(!loaded \|\| videoWidth < 1 \|\| videoHeight < 1\) \{\s*videoState\.thumbnailFailedSrcs\.add\(safeSrc\);\s*return;/);
});

test("Space toggles playback outside text fields, once per press, without clicking a focused button", () => {
  const filter = editorSource.slice(editorSource.indexOf("const spaceTogglesPlayback = (ev) => {"), editorSource.indexOf("\n  };\n", editorSource.indexOf("const spaceTogglesPlayback = (ev) => {")));
  assert.match(filter, /if \(ev\.code !== "Space" \|\| ev\.ctrlKey \|\| ev\.metaKey \|\| ev\.altKey\) return false;/);
  // Focus outside the editor's overlay (another dialog on top) keeps Space.
  assert.match(filter, /const t = ev\.composedPath\(\)\[0\];\s*if \(t !== document\.body && t !== document\.documentElement && !overlay\.contains\(t\)\) return false;/);
  assert.match(filter, /if \(tag === "INPUT"\) return !TEXT_INPUT_TYPES\.has\(String\(t\.type \|\| "text"\)\.toLowerCase\(\)\);/);
  assert.match(filter, /return tag !== "TEXTAREA" && tag !== "SELECT" && !t\?\.isContentEditable;/);
  const types = editorSource.match(/const TEXT_INPUT_TYPES = new Set\((\[[^\]]*\])\);/);
  assert.ok(JSON.parse(types[1]).includes("number"));
  assert.ok(!JSON.parse(types[1]).includes("range"));
  assert.match(editorSource, /const onSpaceKey = \(ev\) => \{\s*if \(!spaceTogglesPlayback\(ev\)\) return;\s*ev\.preventDefault\(\);\s*ev\.stopPropagation\(\);\s*if \(!ev\.repeat\) togglePlayback\(\);/);
  // Firefox clicks a focused button on keyup.
  assert.match(editorSource, /const onSpaceKeyUp = \(ev\) => \{\s*if \(!spaceTogglesPlayback\(ev\)\) return;\s*ev\.preventDefault\(\);/);
  for (const [type, listener] of [["keydown", "onSpaceKey"], ["keyup", "onSpaceKeyUp"]]) {
    assert.match(editorSource, new RegExp(`window\\.addEventListener\\("${type}", ${listener}, true\\);`));
    assert.match(editorSource, new RegExp(`window\\.removeEventListener\\("${type}", ${listener}, true\\);`));
  }
  const timelineVue = readFileSync(new URL("../web_src/components/PanoTimeline.vue", import.meta.url), "utf8");
  assert.match(timelineVue, /:aria-label="model\.playing \? 'Pause \(Space\)' : 'Play \(Space\)'"/);
});

test("an edit on the canvas stops playback on its first move and starts from the stopped frame; a click does not stop it", () => {
  const begin = editorSource.slice(editorSource.indexOf("  canvas.onpointerdown = (e) => {"), editorSource.indexOf("  // Playback ran on from the pointer going down to its first move."));
  // Only a paint stroke, which draws at once, stops at pointerdown.
  assert.equal(begin.match(/stopTimelinePlayback\(\);/g).length, 1);
  assert.match(begin, /supportsFramePainting\(\)\)\) \{\s*stopTimelinePlayback\(\);/);
  assert.match(begin, /const p = screenPos\(e\);\s*editPointerDown = p;/);
  const move = editorSource.slice(editorSource.indexOf("  canvas.onpointermove = (e) => {"), editorSource.indexOf("if (it.kind === \"paint_stroke\")"));
  assert.match(move, /if \(editPointerDown && \(p\.x !== editPointerDown\.x \|\| p\.y !== editPointerDown\.y\)\) \{\s*const down = editPointerDown;\s*editPointerDown = null;\s*if \(it\.kind !== "view" && it\.kind !== "marquee_select"\) restartEditAtStoppedFrame\(it, down\);/);
  const restart = editorFunction("restartEditAtStoppedFrame");
  assert.match(restart, /if \(!sceneV2 \|\| !playback\.playing\) return;\s*playback\.stop\(\);/);
  for (const field of ["it.offset", "it.startCenter", "snap.center", "it.center", "it.startRot", "it.startAng", "it.startDist", "it.startHFOV", "it.startVFOV"]) {
    assert.ok(restart.indexOf(`${field} =`) > restart.indexOf("playback.stop();"), field);
  }
  const wheel = editorSource.slice(editorSource.indexOf("canvas.onwheel = (e) => {"), editorSource.indexOf("\n  };\n", editorSource.indexOf("canvas.onwheel = (e) => {")));
  assert.doesNotMatch(wheel, /stopTimelinePlayback/);
});

test("deleting, undo and redo, and adding a Sticker stop playback first", () => {
  assert.match(editorFunction("deleteSelected"), /if \(selectedItems\.some\(\(item\) => isItemLocked\(item\)\)\) return;\s*stopTimelinePlayback\(\);/);
  assert.match(editorFunction("restoreHistory"), /if \(readOnly\) return;\s*stopTimelinePlayback\(\);/);
  assert.match(editorSource, /if \(sceneV2\) \{\s*\/\/[^\n]*\n\s*stopTimelinePlayback\(\);\s*await addSceneStickerFromFile\(file\);/);
});

test("the legacy transport seeks to its own time and leaves looping to the VIDEO", () => {
  assert.match(editorFunction("playbackFps"), /return sceneV2 \? state\.timeline\.fps : videoState\.metaFps \|\| 1000;/);
  assert.match(editorSource, /return videoEl\.loop \|\| !\(frames > 0\) \? Infinity : frames;/);
  assert.match(editorSource, /loop: \(\) => sceneV2,/);
});
