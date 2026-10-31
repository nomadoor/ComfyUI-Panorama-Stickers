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
