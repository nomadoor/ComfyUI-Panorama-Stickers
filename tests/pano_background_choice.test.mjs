// web_src/pano_background_choice.js (docs/timeline-ui.md "どの背景を出すか"): which background each of its callers shows,
// with each caller's current behaviour (BACKGROUND_CALLERS; where the callers differ, aligning them is an open owner decision). The rows are read from
// the code the module replaces (studio/editor.js nodeBackground / stageBackground / refreshVideo / backgroundMedia,
// studio/preview_window.js background / refreshVideo, pano_preview_runtime.js surfaceBackground / backgroundVideoSources /
// surfaceTimelineMedia with pano_node_playback.js backgroundShows, pano_scene_viewer.js backgroundAt); the browser
// scenes named in each test pin the same behaviour where it is drawn.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import {
  BACKGROUND_CALLERS,
  BACKGROUND_UI_KEYS,
  backgroundAt,
  backgroundLength,
  backgroundShowsAt,
  backgroundVideoCandidates,
  chooseBackground,
} from "../web_src/pano_background_choice.js";

const colorBackground = (color) => ({ color });
const uiListOf = (ui) => (key) => (Array.isArray(ui[key]) ? ui[key] : []);
const widgetsOf = (values) => (name) => (name in values ? { name, value: values[name] } : null);
const currentOf = (stale = []) => (channel) => !stale.includes(channel);

// A run result with an upstream Scene's background (nodes.py _upstream_ui): its image and VIDEO, span 180, magenta,
// its Clip range from frame 48 at 48 fps (frame 24 at 24 fps).
const UPSTREAM_UI = {
  pano_upstream_layers: [{ state: { version: 2 }, ui: {} }],
  pano_upstream_input_images: ["up.png"],
  pano_upstream_input_videos: ["up.mp4"],
  pano_upstream_input_video_meta: [{ frames: 48, duration: 2, fps: 24 }],
  pano_upstream_coverage: [180],
  pano_upstream_bg_color: [[1, 0, 1]],
  pano_upstream_bg_clip: [{ clip: { start: 48, in: 0, duration: null }, fps: 48 }],
};
// The node's own background in its run result (the editor MP4 of a VIDEO, node_runtime.py "stickers_bg").
const OWN_UI = {
  pano_input_images: ["own.png"],
  pano_input_videos: ["own.mp4"],
  pano_input_video_meta: [{ frames: 30, duration: 1.25, fps: 24 }],
};
const STUDIO_WIDGETS = { background_color: "#123456", background_range: "360" };
const OWN_CLIP = { start: 10, in: 0, duration: null };

function choose(caller, { ui = {}, widgets = STUDIO_WIDGETS, stale = [], ownLinked = false, scene = false, clip = OWN_CLIP, fps = 24 } = {}) {
  return chooseBackground(caller, { uiList: uiListOf(ui), current: currentOf(stale), ownLinked, scene, widget: widgetsOf(widgets), clip, fps }, { colorBackground });
}

test("the keys are the run result's: the table Python is checked against (tests/fixtures/background_ui_keys.json)", () => {
  const table = JSON.parse(readFileSync(new URL("./fixtures/background_ui_keys.json", import.meta.url), "utf8"));
  for (const name of ["studio", "preview", "upstream"]) assert.deepEqual({ ...BACKGROUND_UI_KEYS[name] }, table[name], name);
  for (const name of ["image", "video", "meta"]) {
    assert.equal(BACKGROUND_UI_KEYS.upstream[name], BACKGROUND_UI_KEYS.studio[name].replace("pano_", "pano_upstream_"));
  }
  assert.deepEqual(Object.keys(BACKGROUND_CALLERS).sort(), ["editor", "surface", "viewer", "window"]);
});

test("an unknown caller is an error", () => {
  assert.throws(() => choose("other"), /Unknown background caller/);
});

// studio/editor.js: studio_inputs.spec.js "the upstream background shows while ...", "the upstream background outside its
// Clip range ...", studio_video.spec.js.
test("editor: its own linked background, its keys, span, color, Clip range and VIDEO candidates", () => {
  const choice = choose("editor", { ui: OWN_UI, ownLinked: true });
  assert.equal(choice.from, "own");
  assert.deepEqual(choice.keys, BACKGROUND_UI_KEYS.studio);
  assert.deepEqual(choice.fileInputs, ["background", "bg_media"]);
  assert.equal(choice.coverage, 360);
  assert.equal(choice.color, "#123456");
  assert.deepEqual(choice.place, OWN_CLIP);
  const candidates = backgroundVideoCandidates(choice, {
    uiList: uiListOf(OWN_UI), current: currentOf(), source: (entry) => `/view/${entry}`, linkedVideoFile: (inputs) => `file:${inputs.join("|")}`,
  });
  assert.deepEqual(candidates, { own: "/view/own.mp4", file: "file:background|bg_media" });
  // A result for other inputs: not read.
  const stale = backgroundVideoCandidates(choice, { uiList: uiListOf(OWN_UI), current: currentOf(["background"]), source: (entry) => entry, linkedVideoFile: () => "" });
  assert.deepEqual(stale, { own: "", file: "" });
});

test("editor: the upstream background stands in only while its own background is not linked", () => {
  const ui = { ...UPSTREAM_UI, ...OWN_UI };
  assert.equal(choose("editor", { ui, ownLinked: true }).from, "own");
  const up = choose("editor", { ui });
  assert.equal(up.from, "upstream");
  assert.deepEqual(up.keys, { image: "pano_upstream_input_images", video: "pano_upstream_input_videos", meta: "pano_upstream_input_video_meta" });
  assert.deepEqual(up.fileInputs, []);
  assert.equal(up.coverage, 180);
  assert.equal(up.color, "#ff00ff");
  assert.deepEqual(up.place, { start: 24, in: 0, duration: null });
  // Its VIDEO is read from the result without the background channel, and no file stands in for it.
  const candidates = backgroundVideoCandidates(up, { uiList: uiListOf(ui), current: currentOf(["background"]), source: (entry) => entry, linkedVideoFile: () => "x.mp4" });
  assert.deepEqual(candidates, { own: "up.mp4", file: "" });
  // A `scene` result for other inputs: no upstream background.
  assert.equal(choose("editor", { ui, stale: ["scene"] }).from, "none");
});

// Moved from tests/studio_upstream.test.mjs (studio/upstream.js upstreamBackground, which this module replaces).
test("editor: the upstream background's Clip range in this editor's frames, seconds kept; the default one without", () => {
  const ui = {
    pano_upstream_input_images: ["/up.png"],
    pano_upstream_coverage: [180],
    pano_upstream_bg_color: [[1, 0, 0]],
    pano_upstream_bg_clip: [{ clip: { start: 12, in: 0, duration: 24 }, fps: 12 }],
  };
  const bg = choose("editor", { ui });
  assert.equal(bg.keys.image, "pano_upstream_input_images");
  assert.equal(bg.coverage, 180);
  assert.equal(bg.color, "#ff0000");
  assert.deepEqual(bg.place, { start: 24, in: 0, duration: 48 });
  assert.equal(choose("editor", { ui: {} }).from, "none");
  assert.deepEqual(choose("editor", { ui: { pano_upstream_input_images: ["/up.png"] } }).place, { start: 0, in: 0, duration: null });
});

test("editor: an empty bg_color is green; an upstream background without a color takes the node's", () => {
  assert.equal(choose("editor", { widgets: { background_color: "" } }).color, "#00ff00");
  assert.equal(choose("editor", { widgets: { bg_color: "#abcdef" } }).color, "#abcdef");
  // background_color is there but empty: bg_color is not read.
  assert.equal(choose("editor", { widgets: { background_color: "", bg_color: "#abcdef" } }).color, "#00ff00");
  const { pano_upstream_bg_color: _color, ...noColor } = UPSTREAM_UI;
  assert.equal(choose("editor", { ui: noColor, widgets: { background_color: "" } }).color, "#00ff00");
  assert.equal(choose("editor", { ui: noColor }).color, "#123456");
});

test("editor: bg_color outside its own Clip range and past its media, never past an upstream Scene", () => {
  const choice = choose("editor", { ui: OWN_UI, ownLinked: true });
  const video = { video: true, frames: 30, duration: 1.25 };
  assert.equal(backgroundShowsAt(choice, 5, { length: video }), false);
  assert.equal(backgroundShowsAt(choice, 10, { length: video }), true);
  // Its frames end it (under = false), with or without upstream layers.
  assert.equal(backgroundShowsAt(choice, 39, { length: video, upstreamLayers: true }), true);
  assert.equal(backgroundShowsAt(choice, 40, { length: video, upstreamLayers: true }), false);
  assert.deepEqual(backgroundAt(choice, { shows: false }), { color: "#123456" });
  // Nothing linked: nothing places it.
  assert.equal(backgroundShowsAt(choose("editor"), 0), true);
});

test("editor: an upstream background shows inside its Clip range and until its VIDEO ends, its color outside", () => {
  const choice = choose("editor", { ui: UPSTREAM_UI });
  const media = { video: true, frames: 48, duration: 2 };
  assert.equal(backgroundShowsAt(choice, 0, { length: media }), false);
  assert.equal(backgroundShowsAt(choice, 30, { length: media }), true);
  // Past its duration (2 s at 24 fps from frame 24).
  assert.equal(backgroundShowsAt(choice, 72, { length: media }), false);
  assert.deepEqual(backgroundAt(choice, { shows: false }), { color: "#ff00ff" });
});

test("editor: the picture shown, at the span it gives or the choice's, and nothing without one", () => {
  const choice = choose("editor", { ui: OWN_UI, ownLinked: true });
  assert.deepEqual(backgroundAt(choice, { picture: { media: "video", revision: "r", source: "s" } }), { media: "video", revision: "r", source: "s", coverage: 360 });
  // The editor's image background keeps the span it was opened with.
  assert.deepEqual(backgroundAt(choice, { picture: { media: "image", revision: "r", coverage: 180 } }), { media: "image", revision: "r", coverage: 180 });
  assert.equal(backgroundAt(choice, {}), null);
  assert.equal(backgroundAt(choose("editor"), {}), null);
});

test("editor: the Auto length counts the VIDEO it loaded, a linked IMAGE as one frame, none for an upstream background", () => {
  const loaded = { ready: true, frameCount: 30, duration: 1.25 };
  const own = choose("editor", { ownLinked: true });
  assert.deepEqual(backgroundLength(own, { uiList: uiListOf({}), videoLinked: true, loaded }), { bg: { video: true, frames: 30, duration: 1.25 } });
  assert.deepEqual(backgroundLength(own, { uiList: uiListOf({}), videoLinked: false, loaded: null }), { bg: { frames: 1 } });
  assert.deepEqual(backgroundLength(own, { uiList: uiListOf({}), videoLinked: true, loaded: { ready: false, frameCount: 0, duration: 0 } }), { bg: null });
  assert.deepEqual(backgroundLength(choose("editor"), { uiList: uiListOf({}), loaded: null }), { bg: null });
  const up = choose("editor", { ui: UPSTREAM_UI });
  assert.deepEqual(backgroundLength(up, { uiList: uiListOf(UPSTREAM_UI), loaded }), { bg: null, upstreamMedia: { video: true, frames: 30, duration: 1.25 } });
});

// studio/preview_window.js: preview_window.spec.js "a PANO_SCENE source ...", "a Scene's background outside its Clip
// range ...", "as it is: a Scene without a background ...", "an IMAGE covers the node's background_range", "as it is:
// background_range changed ...", "a VIDEO source ...".
test("window: an IMAGE or VIDEO source is its own background, read from the Preview's keys, with no Clip range", () => {
  const ui = { pano_videos: ["p.mp4"], pano_video_meta: [{ frames: 60 }] };
  const choice = choose("window", { ui, ownLinked: true, widgets: { background_range: "180" }, clip: null });
  assert.equal(choice.from, "own");
  assert.deepEqual(choice.keys, BACKGROUND_UI_KEYS.preview);
  assert.deepEqual(choice.fileInputs, ["source"]);
  assert.equal(choice.coverage, 180);
  assert.equal(choice.place, null);
  assert.equal(backgroundShowsAt(choice, 100), true);
  const candidates = backgroundVideoCandidates(choice, { uiList: uiListOf(ui), current: currentOf(), source: (entry) => entry, linkedVideoFile: () => "file.mp4" });
  assert.deepEqual(candidates, { own: "p.mp4", file: "file.mp4" });
  assert.equal(backgroundAt(choice, {}), null);
});

test("window: a Scene shows its background, its span and its color; without one, its color all over, black without a color", () => {
  const choice = choose("window", { ui: UPSTREAM_UI, scene: true, ownLinked: true, widgets: { background_range: "360" } });
  assert.equal(choice.from, "upstream");
  assert.equal(choice.coverage, 180);
  assert.equal(choice.color, "#ff00ff");
  assert.deepEqual(choice.fileInputs, []);
  assert.deepEqual(choice.place, { start: 24, in: 0, duration: null });
  assert.equal(backgroundAt(choice, {}), null);
  assert.deepEqual(backgroundAt(choice, { shows: false }), { color: "#ff00ff" });
  const bare = choose("window", { ui: { pano_upstream_layers: [{}] }, scene: true, ownLinked: true });
  assert.equal(bare.from, "none");
  assert.equal(bare.color, "#000000");
  assert.deepEqual(backgroundAt(bare, {}), { color: "#000000" });
  assert.deepEqual(backgroundAt(bare, { picture: { media: "x", revision: "r" } }), { color: "#000000" });
  // A Scene's color without its background (pano_upstream_bg_color is always written).
  assert.equal(choose("window", { ui: { pano_upstream_bg_color: [[0, 1, 0]] }, scene: true }).color, "#00ff00");
  // A Scene reads its VIDEO from the Preview's keys while it has no background, as before; no file.
  const candidates = backgroundVideoCandidates(bare, { uiList: uiListOf({ pano_videos: ["p.mp4"] }), current: currentOf(), source: (entry) => entry, linkedVideoFile: () => "f.mp4" });
  assert.deepEqual(candidates, { own: "p.mp4", file: "" });
});

// pano_preview_runtime.js (Panorama Studio): studio_node_surface.spec.js "the node's own background image shows ...",
// "with the upstream Scene's background image ...", "... background VIDEO ...", "as it is: an empty background_color ...".
test("surface: the result decides the upstream background, whose picture, VIDEO, span and bg_color show, as in the editor", () => {
  const ui = { ...UPSTREAM_UI, ...OWN_UI };
  // Linked or not, the result's upstream background stands in (docs/studio-node-surface.md "表示フレームと VIDEO").
  for (const ownLinked of [false, true]) {
    const choice = choose("surface", { ui, ownLinked });
    assert.equal(choice.from, "upstream");
    assert.deepEqual(choice.keys, { image: "pano_upstream_input_images", video: "pano_upstream_input_videos", meta: "pano_upstream_input_video_meta" });
    assert.deepEqual(choice.fileInputs, []);
    assert.equal(choice.coverage, 180);
    assert.equal(choice.color, "#ff00ff");
  }
  // Its VIDEO only: neither the node's own VIDEO nor the file its background input loads, even while those are current.
  const choice = choose("surface", { ui, ownLinked: true });
  const candidates = backgroundVideoCandidates(choice, { uiList: uiListOf(ui), current: currentOf(), source: (entry) => entry, linkedVideoFile: () => "linked.mp4" });
  assert.deepEqual(candidates, { own: "up.mp4", file: "" });
  // Its picture at its span once ready; nothing while it loads; its bg_color without one.
  assert.deepEqual(backgroundAt(choice, { picture: { media: "up", revision: 1 } }), { media: "up", revision: 1, coverage: 180 });
  assert.equal(backgroundAt(choice, { pending: true }), null);
  assert.deepEqual(backgroundAt(choice, {}), { color: "#ff00ff" });
});

test("surface: its own background, placed by its Clip range whether linked or not, black for an empty color", () => {
  const choice = choose("surface", { ui: OWN_UI });
  assert.equal(choice.from, "own");
  assert.deepEqual(choice.place, OWN_CLIP);
  assert.equal(choice.color, "#123456");
  assert.equal(choose("surface", { widgets: { background_color: "" } }).color, "#000000");
  assert.deepEqual(backgroundAt(choose("surface", { widgets: { background_color: "" } }), {}), { color: "#000000" });
  const candidates = backgroundVideoCandidates(choice, { uiList: uiListOf(OWN_UI), current: currentOf(), source: (entry) => `/${entry}`, linkedVideoFile: () => "" });
  assert.deepEqual(candidates, { own: "/own.mp4", file: "" });
});

test("surface: a picture still loading draws nothing, none draws bg_color, a ready one draws at its span", () => {
  const choice = choose("surface", { ui: OWN_UI, widgets: { background_color: "#00ff00", background_range: "180" } });
  assert.equal(backgroundAt(choice, { pending: true }), null);
  assert.deepEqual(backgroundAt(choice, {}), { color: "#00ff00" });
  assert.deepEqual(backgroundAt(choice, { picture: { media: "m", revision: "r" } }), { media: "m", revision: "r", coverage: 180 });
  assert.deepEqual(backgroundAt(choice, { shows: false, picture: { media: "m", revision: "r" } }), { color: "#00ff00" });
});

test("surface: its own VIDEO ends at its frames, or at its duration while upstream layers set the Timeline", () => {
  const choice = choose("surface", { ui: OWN_UI, clip: { start: 0, in: 0, duration: null }, fps: 48 });
  // 30 frames, 1.25 s = 60 frames at 48 fps.
  const length = { video: true, frames: 30, duration: 1.25 };
  assert.equal(backgroundShowsAt(choice, 40, { length }), false);
  assert.equal(backgroundShowsAt(choice, 40, { length, upstreamLayers: true }), true);
  assert.equal(backgroundShowsAt(choice, 60, { length, upstreamLayers: true }), false);
});

test("surface: the Auto length reads the result's meta, and the upstream background's Clip range and VIDEO", () => {
  const own = choose("surface", { ui: OWN_UI });
  assert.deepEqual(backgroundLength(own, { uiList: uiListOf(OWN_UI), current: currentOf(), videoLinked: true }), { bg: { video: true, frames: 30, duration: 1.25 } });
  // A single IMAGE has no meta: left out (the playback then counts the VIDEO it plays, none here).
  assert.deepEqual(backgroundLength(own, { uiList: uiListOf({ pano_input_images: ["a.png"] }), current: currentOf() }), {});
  assert.deepEqual(backgroundLength(own, { uiList: uiListOf(OWN_UI), current: currentOf(["background"]) }), {});
  const up = choose("surface", { ui: UPSTREAM_UI });
  assert.deepEqual(backgroundLength(up, { uiList: uiListOf(UPSTREAM_UI), current: currentOf() }), {
    bg: null, upstreamClip: { start: 24, in: 0, duration: null }, upstreamMedia: { video: true, frames: 48, duration: 2 },
  });
  const { pano_upstream_bg_clip: _clip, pano_upstream_input_video_meta: _meta, ...plain } = UPSTREAM_UI;
  assert.deepEqual(backgroundLength(choose("surface", { ui: plain }), { uiList: uiListOf(plain) }), { bg: null, upstreamClip: null });
  // The upstream background shows from its Clip range until its VIDEO ends.
  assert.equal(backgroundShowsAt(up, 0, { length: { video: true, frames: 48, duration: 2 } }), false);
  assert.equal(backgroundShowsAt(up, 30, { length: { video: true, frames: 48, duration: 2 } }), true);
});

// pano_scene_viewer.js backgroundAt.
test("viewer: a Scene's background inside its Clip range even past its media, its color outside and without one", () => {
  const choice = choose("viewer", { ui: UPSTREAM_UI, scene: true });
  assert.equal(choice.from, "upstream");
  assert.equal(choice.coverage, 180);
  assert.equal(backgroundShowsAt(choice, 0), false);
  assert.equal(backgroundShowsAt(choice, 1000, { length: { video: true, frames: 48, duration: 2 } }), true);
  assert.deepEqual(backgroundAt(choice, { shows: false }), { color: "#ff00ff" });
  // A VIDEO with no picture yet draws nothing; an image not loaded draws the color.
  assert.equal(backgroundAt(choice, { pending: true }), null);
  assert.deepEqual(backgroundAt(choice, {}), { color: "#ff00ff" });
  const candidates = backgroundVideoCandidates(choice, { uiList: uiListOf(UPSTREAM_UI), current: currentOf(["background"]), source: (entry) => entry });
  assert.deepEqual(candidates, { own: "up.mp4", file: "" });
  const bare = choose("viewer", { ui: {}, scene: true });
  assert.equal(bare.from, "none");
  assert.equal(bare.keys, null);
  assert.deepEqual(backgroundAt(bare, {}), { color: "#000000" });
  assert.deepEqual(backgroundVideoCandidates(bare, { uiList: uiListOf({}), source: (entry) => entry }), { own: "", file: "" });
});

test("surface: sourceOf reads the result's VIDEO URL by key, under the same gate", () => {
  const choice = choose("surface", { ui: OWN_UI });
  const asked = [];
  const sourceOf = (key) => {
    asked.push(key);
    return "/first.mp4";
  };
  assert.deepEqual(backgroundVideoCandidates(choice, { uiList: uiListOf({}), current: currentOf(), sourceOf, linkedVideoFile: () => "" }), { own: "/first.mp4", file: "" });
  assert.deepEqual(asked, ["pano_input_videos"]);
  assert.deepEqual(backgroundVideoCandidates(choice, { uiList: uiListOf({}), current: currentOf(["background"]), sourceOf, linkedVideoFile: () => "" }), { own: "", file: "" });
  assert.equal(asked.length, 1);
});

test("a null candidate counts as none, as choose() and follow({ sources }) skip empty ones", () => {
  const choice = choose("editor", { ui: OWN_UI, ownLinked: true });
  const nulls = backgroundVideoCandidates(choice, { uiList: uiListOf(OWN_UI), current: currentOf(), source: () => null, linkedVideoFile: () => null });
  assert.deepEqual(nulls, { own: "", file: "" });
  const empties = backgroundVideoCandidates(choice, { uiList: uiListOf({}), current: currentOf(), source: (entry) => entry, linkedVideoFile: () => "" });
  assert.deepEqual(empties, nulls);
});

test("the span is 180 only for 180, as normalizeCoverageValue, from background_range or the legacy coverage", () => {
  for (const [widgets, expected] of [[{ background_range: "180" }, 180], [{ background_range: 180 }, 180], [{ background_range: "360" }, 360], [{ coverage: "180" }, 180], [{}, 360], [{ background_range: "" }, 360]]) {
    assert.equal(choose("editor", { widgets, ownLinked: true }).coverage, expected, JSON.stringify(widgets));
    assert.equal(choose("surface", { widgets }).coverage, expected, JSON.stringify(widgets));
  }
});
