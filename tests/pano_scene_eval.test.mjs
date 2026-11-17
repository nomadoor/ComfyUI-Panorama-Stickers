// The frame from a Clip range's material start (docs/scene-state-v2.md "時間": a Sticker's and the scene's Keyframes are
// on their material, which starts at start − in on the Timeline). The callers that turn a Timeline frame into it, or
// place the material start, give exactly what `frame − (start − in)` and `start − in` give, also for fractional Clip
// ranges (an upstream background's, backgroundClipAt).
import assert from "node:assert/strict";
import test from "node:test";

import { setStickerOpacity, setStickerPose, setWorldStickerField, setWorldStickerTransform } from "../web_src/pano_editor_state.js";
import { backgroundClipAt, backgroundPlace, bgMediaEnd, portMediaFrames, portMediaTime } from "../web_src/pano_port_media.js";
import { clipFrame, clipOrigin } from "../web_src/pano_scene_eval.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { trimClipStart } from "../web_src/pano_timeline.js";
import { ownerFrame } from "../web_src/studio/inspector_model.js";

const file = (filename) => ({ kind: "file", filename, subfolder: "", storage: "input" });
// Clip ranges whose start − in is not an integer, as backgroundClipAt makes them.
const CLIPS = [
  { start: 10, in: 3, duration: null },
  backgroundClipAt({ start: 10, in: 3, duration: 40 }, 24, 30000 / 1001),
  backgroundClipAt({ start: 7, in: 5, duration: null }, 30, 24),
  { start: 0.1, in: 0.7, duration: null },
];
const FRAMES = [0, 12.1, 33.37, 59.999];

function keyedSticker(placement, clip) {
  const keyed = (value) => ({ value, keyframes: [{ frame: -1000, value }] });
  const raw = placement === "sky"
    ? { id: "s", placement: "sky", source: file("a.png"), direction: keyed({ yaw_deg: 0, pitch_deg: 0 }), opacity: keyed(1) }
    : { id: "s", placement: "world", source: file("a.png"), position: keyed([0, 0, 0]), scale: keyed(1), opacity: keyed(1) };
  const sticker = loadSceneState({ version: 2, stickers: [raw] }).stickers[0];
  sticker.clip = { ...clip };
  return sticker;
}

const lastKey = (lane) => lane.keyframes.at(-1).frame;

test("the Lane edits of a Sticker key it at frame − (start − in), exactly", () => {
  for (const clip of CLIPS) {
    for (const frame of FRAMES) {
      const want = frame - (clip.start - clip.in);
      let sticker = keyedSticker("sky", clip);
      setStickerPose(sticker, frame, { yaw_deg: 5 });
      assert.equal(lastKey(sticker.direction), want);
      sticker = keyedSticker("sky", clip);
      setStickerOpacity(sticker, frame, 0.5);
      assert.equal(lastKey(sticker.opacity), want);
      sticker = keyedSticker("world", clip);
      setWorldStickerField(sticker, frame, "scale", 2);
      assert.equal(lastKey(sticker.scale), want);
      sticker = keyedSticker("world", clip);
      setWorldStickerTransform(sticker, frame, { position: [1, 2, 3] });
      assert.equal(lastKey(sticker.position), want);
      assert.equal(ownerFrame(sticker, frame), want);
    }
  }
  const camera = loadSceneState({ version: 2 }).camera;
  assert.equal(ownerFrame(camera, 12.1), 12.1, "the Camera has no Clip range: Timeline frames");
});

test("a port Sticker's media time and the media's ends are placed from start − in, exactly", () => {
  const video = { kind: "VIDEO", duration: 4, fps: 24, pts_tolerance: 0 };
  const batch = { kind: "IMAGE", frames: 9, fps: 24 };
  for (const clip of CLIPS) {
    const origin = clip.start - clip.in;
    const long = { kind: "IMAGE", frames: 1000, fps: 24 };
    for (const frame of FRAMES) {
      const index = Math.floor(frame - origin + 0.5);
      const want = frame >= clip.start && index >= 0 && index < 1000 ? (index + 0.5) / 24 : null;
      assert.equal(portMediaTime(clip, frame, 24, long), want);
    }
    const open = { ...clip, duration: null };
    assert.equal(portMediaFrames(open, 24, video), Math.round(origin + 4 * 24));
    assert.equal(portMediaFrames(open, 24, batch), Math.round(origin + 9));
    assert.equal(bgMediaEnd(clip, 24, { video: true, frames: 50, duration: 3 }, true), origin + 3 * 24);
    assert.equal(bgMediaEnd(clip, 24, { video: false, frames: 7, duration: 0 }), origin + 7);
    const place = backgroundPlace(clip);
    if (place) assert.equal(place.origin, origin);
  }
});

test("trimming the head stops at the material's first frame start − in, exactly", () => {
  for (const clip of CLIPS) {
    const trimmed = { ...clip, duration: clip.duration ?? null };
    const origin = clip.start - clip.in;
    trimClipStart(trimmed, Math.max(0, origin - 5));
    assert.equal(trimmed.start, Math.max(origin, 0));
  }
});

test("clipOrigin is start − in and clipFrame is frame − (start − in), to the last bit", () => {
  for (const clip of CLIPS) {
    assert.equal(clipOrigin(clip), clip.start - clip.in);
    for (const frame of FRAMES) assert.equal(clipFrame(clip, frame), frame - (clip.start - clip.in));
  }
});

// The shape and progress of segments and looping owners as the fixtures shared with Python say (docs/scene-state-v2.md
// "補間" and "ループ", ADR 0064; tests/test_scene_eval.py reads the same files).
function closeTo(actual, expected, path) {
  if (Array.isArray(expected)) {
    assert.equal(actual.length, expected.length, path);
    expected.forEach((item, i) => closeTo(actual[i], item, `${path}[${i}]`));
  } else if (expected && typeof expected === "object") {
    assert.deepEqual(Object.keys(actual), Object.keys(expected), path);
    for (const key of Object.keys(expected)) closeTo(actual[key], expected[key], `${path}.${key}`);
  } else if (typeof expected === "number") {
    assert.ok(Math.abs(actual - expected) <= 1e-4, `${path}: ${actual} != ${expected}`);
  } else {
    assert.equal(actual, expected, path);
  }
}

for (const name of ["v2_shape_progress", "v2_loop"]) {
  test(`the motion fixture ${name} evaluates as the file says`, async () => {
    const { readFileSync } = await import("node:fs");
    const { evaluateSceneState } = await import("../web_src/pano_scene_eval.js");
    const { cases } = JSON.parse(readFileSync(new URL(`./fixtures/scene_state/${name}.json`, import.meta.url), "utf8"));
    for (const item of cases) {
      const state = loadSceneState(item.state);
      closeTo(item.frames.map((frame) => evaluateSceneState(state, frame, item.length)), item.expected, item.name);
    }
  });
}

test("a Smooth segment's current curve is its Hermite as control points, ease-in-out where it stops at both ends", async () => {
  const { smoothEasing } = await import("../web_src/pano_scene_eval.js");
  const state = loadSceneState({ version: 2, camera: { fov: { keyframes: [{ frame: 0, value: 40 }, { frame: 10, value: 60 }, { frame: 20, value: 80 }] } } });
  // Two segments of the same speed: the first eases out of 0 and runs into the middle key at the average speed.
  const [x1, y1, x2, y2] = smoothEasing(state.camera, "fov", 0);
  assert.deepEqual([x1, x2], [1 / 3, 2 / 3]);
  assert.equal(y1, 0);
  assert.ok(Math.abs(y2 - 2 / 3) < 1e-9);
  const two = loadSceneState({ version: 2, camera: { fov: { keyframes: [{ frame: 0, value: 40 }, { frame: 10, value: 60 }] } } });
  assert.deepEqual(smoothEasing(two.camera, "fov", 0), [0.42, 0, 0.58, 1]);
  assert.equal(smoothEasing(loadSceneState({ version: 2, camera: { fov: { keyframes: [{ frame: 0, value: 40, easing: "hold" }, { frame: 10, value: 60 }] } } }).camera, "fov", 0), null);
});

test("the handoff fixture evaluates as the file says", async () => {
  const { readFileSync } = await import("node:fs");
  const { evaluateSceneState } = await import("../web_src/pano_scene_eval.js");
  const { loadStickerState } = await import("../web_src/pano_scene_state.js");
  const { cases } = JSON.parse(readFileSync(new URL("./fixtures/scene_state/v2_handoff.json", import.meta.url), "utf8"));
  for (const item of cases) {
    const state = loadSceneState(item.state);
    const shot = loadStickerState(JSON.stringify(item.shot));
    closeTo(item.frames.map((frame) => evaluateSceneState(state, frame, item.length, null, shot)), item.expected, item.name);
  }
});

test("the Look at fixture evaluates as the file says", async () => {
  const { readFileSync } = await import("node:fs");
  const { evaluateSceneState } = await import("../web_src/pano_scene_eval.js");
  const { cases } = JSON.parse(readFileSync(new URL("./fixtures/scene_state/v2_look_at.json", import.meta.url), "utf8"));
  for (const item of cases) {
    const state = loadSceneState(item.state);
    closeTo(item.frames.map((frame) => evaluateSceneState(state, frame, item.length, item.boxes)), item.expected, item.name);
  }
});

// The same cases test_scene_eval.py checks.
test("a looping Look at Lane closes at a seam when it ends on its first target", async () => {
  const { laneView } = await import("../web_src/pano_scene_eval.js");
  const a = { sticker: "s", offset: [0, 0.5, 0] };
  const keys = (last) => [{ frame: 0, value: a, easing: "smooth" }, { frame: 10, value: { point: [0, 0, -1] }, easing: "smooth" }, { frame: 20, value: last, easing: "smooth" }];
  assert.equal(laneView(keys({ ...a }), 40).seam, true);
  assert.equal(laneView(keys({ sticker: "s", offset: [0, 0.25, 0] }), 40).seam, false);
  assert.equal(laneView(keys({ point: [0, 0.5, 0] }), 40).seam, false);
  assert.equal(laneView(keys(null), 40).seam, false);
});

// CodeRabbit review: a still Camera straight under a point has no frame that gives a yaw; the rotation Lane's is kept.
test("a still Camera straight under a point keeps the rotation Lane's yaw", async () => {
  const { evaluateSceneState } = await import("../web_src/pano_scene_eval.js");
  const state = loadSceneState({ version: 2, camera: { rotation: { value: { yaw_deg: 30, pitch_deg: 0, roll_deg: 5 } }, look_at: { value: { point: [0, 5, 0] } } } });
  const { yaw_deg, pitch_deg, roll_deg } = evaluateSceneState(state, 12, 2000).camera;
  assert.deepEqual([yaw_deg, pitch_deg, roll_deg], [30, 90, 5]);
});
