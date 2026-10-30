import assert from "node:assert/strict";
import test from "node:test";

import {
  backgroundLengthMedia,
  backgroundVideoKeys,
  backgroundVideoMedia,
  createBackgroundVideo,
  mediaRevisionToken,
  videoMetaEntry,
} from "../web_src/pano_media_session.js";

// The background VIDEO of both editors (pano_media_session.js). The playback itself is tested in
// tests/pano_video_playback.test.mjs; these check which VIDEO plays, how it is loaded and let go, and the still.

class FakeVideo extends EventTarget {
  constructor() {
    super();
    this.dataset = {};
    this.attributes = new Map();
    this.readyState = 0;
    this.videoWidth = 0;
    this.videoHeight = 0;
    this.duration = NaN;
    this.paused = true;
    this.loads = 0;
    this.pauses = 0;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.currentTime = 0;
    this.listening = 0;
  }

  addEventListener(type, listener) {
    this.listening += 1;
    super.addEventListener(type, listener);
  }

  removeEventListener(type, listener) {
    this.listening -= 1;
    super.removeEventListener(type, listener);
  }

  set src(value) {
    this.attributes.set("src", value);
  }

  get src() {
    return this.attributes.get("src") ?? "";
  }

  getAttribute(name) {
    return this.attributes.get(name) ?? null;
  }

  removeAttribute(name) {
    this.attributes.delete(name);
  }

  load() {
    this.loads += 1;
    this.readyState = 0;
  }

  pause() {
    this.pauses += 1;
    this.paused = true;
  }

  play() {
    this.paused = false;
    return Promise.resolve();
  }
}

class FakeCanvas {
  constructor() {
    this.width = 0;
    this.height = 0;
    this.draws = [];
  }

  getContext() {
    return { clearRect: () => {}, drawImage: (media, x, y, w, h) => this.draws.push([media, w, h]) };
  }
}

function withElements(run) {
  globalThis.HTMLVideoElement = FakeVideo;
  globalThis.HTMLCanvasElement = FakeCanvas;
  try {
    return run();
  } finally {
    delete globalThis.HTMLVideoElement;
    delete globalThis.HTMLCanvasElement;
  }
}

function setup(extra = {}) {
  const video = new FakeVideo();
  const still = new FakeCanvas();
  const calls = { stills: 0, dropped: 0, ready: 0, errors: 0, changes: 0 };
  const background = createBackgroundVideo({
    video,
    still,
    clock: { now: () => 0, requestFrame: () => 1, cancelFrame: () => {} },
    fps: () => 24,
    span: () => 48,
    loop: () => true,
    onFrame: () => {},
    onChange: () => {
      calls.changes += 1;
    },
    onStill: () => {
      calls.stills += 1;
    },
    onStillDropped: () => {
      calls.dropped += 1;
    },
    onReady: () => {
      calls.ready += 1;
    },
    onError: () => {
      calls.errors += 1;
    },
    ...extra,
  });
  return { video, still, calls, background };
}

test("the node's own result plays first, then a directly loaded file, never a failed source", () => withElements(() => {
  const { background } = setup();
  let metaReads = 0;
  const meta = () => {
    metaReads += 1;
    return { fps: 30, frames: 60, has_audio: true };
  };
  const own = background.choose({ own: "own.mp4", file: "file.mp4", meta, fps: 24 });
  assert.deepEqual(own, { src: "own.mp4", fps: 30, duration: 2, frameCount: 60, hasAudio: true });
  assert.equal(background.metaFps, 30);
  assert.equal(background.failed, false);

  background.failedSrcs.add("own.mp4");
  metaReads = 0;
  const file = background.choose({ own: "own.mp4", file: "file.mp4", meta, fps: 24 });
  // The meta belongs to the own result: it is not read for the file, whose fps is the Timeline's.
  assert.equal(metaReads, 0);
  assert.equal(file.src, "file.mp4");
  assert.equal(file.fps, 24);
  assert.equal(background.metaFps, 0);

  background.failedSrcs.add("file.mp4");
  assert.equal(background.choose({ own: "own.mp4", file: "file.mp4", meta, fps: 24 }).src, "");
  assert.equal(background.failed, true);
  // No source at all is not a failure.
  assert.equal(background.choose({ fps: 24 }).src, "");
  assert.equal(background.failed, false);
}));

test("a file without meta takes its length from the loaded element, at the Timeline's fps", () => withElements(() => {
  const { background, video } = setup();
  background.load("file.mp4");
  video.duration = 1.5;
  assert.deepEqual(background.choose({ file: "file.mp4", fps: 24 }), { src: "file.mp4", fps: 24, duration: 1.5, frameCount: 36, hasAudio: false });
  // Another file's length is not known until it loads.
  assert.equal(background.choose({ file: "other.mp4", fps: 24 }).duration, 0);
  // The meta's duration wins over its frames.
  assert.equal(background.choose({ own: "own.mp4", meta: () => ({ fps: 10, frames: 30, duration: 2.5 }), fps: 24 }).duration, 2.5);
}));

test("a new source loads with its settings, drops the still of the one before and restarts the playback", () => withElements(() => {
  const { background, video, still, calls } = setup();
  still.__panoFrameIdx = 3;
  assert.equal(background.load("a.mp4", { loop: true, muted: true, volume: 7 }), "loaded");
  assert.equal(video.getAttribute("src"), "a.mp4");
  assert.equal(video.dataset.panoSrc, "a.mp4");
  assert.equal(background.source, "a.mp4");
  assert.deepEqual([video.loop, video.muted, video.volume, video.loads, video.pauses], [true, true, 1, 1, 1]);
  assert.equal(still.__panoFrameIdx, 0);
  assert.equal(calls.dropped, 1);
  // The playback waits on the new source's first frame (load() dropped what it waited on).
  assert.equal(background.playback.state, "loading");
  // The same source again changes nothing.
  assert.equal(background.load("a.mp4"), null);
  assert.equal(video.loads, 1);

  // No source lets the element's go.
  still.__panoFrameIdx = 2;
  assert.equal(background.load(""), "removed");
  assert.equal(video.getAttribute("src"), null);
  assert.equal("panoSrc" in video.dataset, false);
  assert.equal(video.loads, 2);
  assert.equal(still.__panoFrameIdx, 0);
  assert.equal(background.playback.state, "idle");
  assert.equal(background.load(""), null);
}));

test("a source that fails is noted, and the element's events reach the editor", () => withElements(() => {
  const { background, video, calls } = setup();
  video.dispatchEvent(new Event("error"));
  // An element without a source has nothing to note.
  assert.equal(calls.errors, 0);
  background.load("a.mp4");
  video.dispatchEvent(new Event("error"));
  assert.equal(calls.errors, 1);
  assert.equal(background.failedSrcs.has("a.mp4"), true);
  for (const type of ["loadedmetadata", "loadeddata", "canplay"]) video.dispatchEvent(new Event(type));
  assert.equal(calls.ready, 3);
}));

test("the still shows when the VIDEO is not on screen, and the VIDEO before a still is captured", () => withElements(() => {
  const { background, video, still, calls } = setup();
  assert.equal(background.displaySource(), null);
  background.load("a.mp4");
  Object.assign(video, { videoWidth: 64, videoHeight: 32, readyState: 2 });
  assert.equal(background.displaySource(), video);
  assert.equal(background.captureStill(), true);
  assert.deepEqual([still.width, still.height, still.__panoFrameIdx], [64, 32, 1]);
  assert.deepEqual(still.draws.at(-1), [video, 64, 32]);
  assert.equal(background.displaySource(), still);
  // The playback asks for a still where it lands (onCapture): the editor hears of it through onStill.
  video.dispatchEvent(new Event("loadeddata"));
  assert.ok(calls.stills >= 1);
}));

test("closing stops the VIDEO, lets go of its listeners and its source", () => withElements(() => {
  const { background, video } = setup();
  background.load("a.mp4");
  background.close();
  assert.equal(video.paused, true);
  assert.equal(video.getAttribute("src"), null);
  assert.equal(video.listening, 0);
}));

test("the result keys of the background VIDEO and its meta entry", () => {
  assert.deepEqual(backgroundVideoKeys({ type: "stickers" }), { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" });
  assert.deepEqual(backgroundVideoKeys({ type: "cutout" }), { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" });
  assert.deepEqual(backgroundVideoKeys({ type: "preview" }), { videoKey: "pano_videos", metaKey: "pano_video_meta" });
  assert.deepEqual(backgroundVideoKeys({ type: "stickers", upstream: { videoKey: "u", metaKey: "m" } }), { videoKey: "u", metaKey: "m" });
  assert.deepEqual(videoMetaEntry([{ fps: 24 }]), { fps: 24 });
  assert.deepEqual(videoMetaEntry({ fps: 24 }), { fps: 24 });
  // An empty list is an object, kept as it was.
  assert.deepEqual(videoMetaEntry([]), []);
  assert.equal(videoMetaEntry(null), null);
});

test("the background counts for the Auto length by what the editor learned of its VIDEO, else as a linked IMAGE", () => {
  assert.equal(backgroundVideoMedia({ ready: false, frameCount: 10, duration: 1 }, true), null);
  assert.equal(backgroundVideoMedia({ ready: true, frameCount: 0, duration: 1 }, true), null);
  const loaded = backgroundVideoMedia({ ready: true, frameCount: 48, duration: 2 }, true);
  assert.deepEqual(loaded, { video: true, frames: 48, duration: 2 });
  assert.equal(backgroundLengthMedia(loaded, { linked: true, videoLinked: true }), loaded);
  assert.deepEqual(backgroundLengthMedia(null, { linked: true, videoLinked: false }), { frames: 1 });
  assert.equal(backgroundLengthMedia(null, { linked: true, videoLinked: true }), null);
  assert.equal(backgroundLengthMedia(null, { linked: false, videoLinked: false }), null);
});

test("a still's revision counts its frames; a VIDEO's is its source and size", () => withElements(() => {
  const canvas = new FakeCanvas();
  Object.assign(canvas, { width: 4, height: 2, __panoFrameIdx: 5 });
  assert.equal(mediaRevisionToken(canvas), "canvas|4|2|5");
  const video = new FakeVideo();
  Object.assign(video, { currentSrc: "a.mp4", videoWidth: 4, videoHeight: 2 });
  assert.equal(mediaRevisionToken(video), "a.mp4|4|2");
  assert.equal(mediaRevisionToken(null), "none");
}));
