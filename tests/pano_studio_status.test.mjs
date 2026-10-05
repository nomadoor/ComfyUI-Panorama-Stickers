import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import { createStudioStatus, studioNodeStatus, studioOutputSize, studioRunKey, studioRunOutput, studioTimelineFrames } from "../web_src/pano_studio_status.js";

function camera({ projection = "perspective", aspect = 1, fov = 90, fovKeyframes = [], visible = true } = {}) {
  return { projection, aspect, visible, fov: { value: fov, keyframes: fovKeyframes } };
}

function state(fields = {}) {
  return loadSceneState({ version: 2, ...fields });
}

const LINEAR = [0, 0, 1, 1];

test("the Timeline frames without media follow timeline.length, else the Clip ends, else the Camera's last Keyframe", () => {
  assert.deepEqual(studioTimelineFrames(state()), [0]);
  assert.deepEqual(studioTimelineFrames(state({ timeline: { fps: 24, length: 3 } })), [0, 1, 2]);
  const keyed = camera({ fovKeyframes: [{ frame: 0, value: 60, easing: LINEAR }, { frame: 4, value: 120, easing: LINEAR }] });
  assert.deepEqual(studioTimelineFrames(state({ camera: keyed })), [0, 1, 2, 3, 4]);
  // A length shorter than the Keyframes cuts them, as the run does.
  assert.deepEqual(studioTimelineFrames(state({ camera: keyed, timeline: { fps: 24, length: 2 } })), [0, 1]);
  assert.deepEqual(studioTimelineFrames(state({ camera: keyed, scene: { clip: { start: 0, duration: 2 } } })), [0, 1]);
});

test("the output size follows ADR 0029", () => {
  const sizes = (fields, outputSize, coverage, bgWidth) => {
    const loaded = state(fields);
    return studioOutputSize(loaded, studioTimelineFrames(loaded), outputSize, coverage, bgWidth);
  };
  assert.deepEqual(sizes({}, "1024", 360, null), { width: 1024, height: 512, reducedFrom: null, defaulted: false });
  assert.deepEqual(sizes({}, "2048", 180, null), { width: 1024, height: 1024, reducedFrom: null, defaulted: false });
  assert.deepEqual(sizes({}, "auto", 360, 600), { width: 600, height: 300, reducedFrom: null, defaulted: false });
  assert.deepEqual(sizes({}, "auto", 180, 512), { width: 512, height: 512, reducedFrom: null, defaulted: false });
  assert.deepEqual(sizes({}, "auto", 360, null), { width: 2048, height: 1024, reducedFrom: null, defaulted: true });
  assert.deepEqual(sizes({ camera: camera({ fov: 90, aspect: 16 / 9 }) }, "2048", 360, null),
    { width: 652, height: 366, reducedFrom: null, defaulted: false });
  assert.deepEqual(sizes({ camera: camera({ projection: "erp" }) }, "2560", 360, null),
    { width: 2560, height: 1280, reducedFrom: null, defaulted: false });
  // A hidden Camera shoots as no Camera does.
  assert.deepEqual(sizes({ camera: camera({ fov: 90, visible: false }) }, "1024", 360, null),
    { width: 1024, height: 512, reducedFrom: null, defaulted: false });
  assert.deepEqual(sizes({ camera: camera({ fov: 150, aspect: 4 }) }, "4096", 360, null),
    { width: 4096, height: 1024, reducedFrom: [4866, 1216], defaulted: false });
});

test("the node status names what the node shoots, its size, and whether it was capped", () => {
  assert.deepEqual(studioNodeStatus(state(), { outputSize: "2048", coverage: 360, bgWidth: null }),
    { shot: "ERP", size: "2048 × 1024", note: "" });
  assert.deepEqual(studioNodeStatus(state({ camera: camera({ fov: 90 }) }), { outputSize: "1024", coverage: 360, bgWidth: null }),
    { shot: "Camera · Perspective", size: "326 × 326", note: "" });
  assert.deepEqual(studioNodeStatus(state({ camera: camera({ projection: "erp" }) }), { outputSize: "1024", coverage: 360, bgWidth: null }),
    { shot: "Camera · 360°", size: "1024 × 512", note: "" });
  assert.deepEqual(studioNodeStatus(state({ camera: camera({ projection: "erp" }) }), { outputSize: "1024", coverage: 180, bgWidth: null }),
    { shot: "Camera · 180°", size: "512 × 512", note: "" });
  assert.deepEqual(studioNodeStatus(state({ camera: camera({ fov: 150, aspect: 4 }) }), { outputSize: "4096", coverage: 360, bgWidth: null }),
    { shot: "Camera · Perspective", size: "4096 × 1024", note: "Capped at 4096 (4866 × 1216)" });
  assert.deepEqual(studioNodeStatus(state(), { outputSize: "auto", coverage: 360, bgWidth: null }),
    { shot: "ERP", size: "2048 × 1024", note: "auto: no bg_media" });
  // auto with bg_media whose width is not known yet.
  assert.deepEqual(studioNodeStatus(state(), { outputSize: "auto", coverage: 360, bgWidth: undefined }),
    { shot: "ERP", size: "auto", note: "" });
  assert.deepEqual(studioNodeStatus(state(), { outputSize: "auto", coverage: 360, bgWidth: 4000 }),
    { shot: "ERP", size: "4000 × 2000", note: "" });
});

test("the size of a run whose inputs are unchanged wins over the estimate", () => {
  const keyed = state({ camera: camera({ fovKeyframes: [{ frame: 0, value: 60, easing: LINEAR }, { frame: 8, value: 150, easing: LINEAR }] }) });
  const stateText = "{}";
  const run = { width: 286, height: 286, capped: false, reduced_from: null, key: studioRunKey(stateText, "1024", "360", "#00ff00") };
  const options = { stateText, outputSize: "1024", coverage: 360, bgColor: "#00ff00", bgWidth: 32 };

  assert.deepEqual(studioNodeStatus(keyed, { ...options, run }), { shot: "Camera · Perspective", size: "286 × 286", note: "" });
  assert.deepEqual(studioNodeStatus(keyed, { ...options, run: { ...run, width: 4096, height: 1024, capped: true, reduced_from: [4866, 1216] } }),
    { shot: "Camera · Perspective", size: "4096 × 1024", note: "Capped at 4096 (4866 × 1216)" });
  // Edited since the run: the estimate from the state.
  const estimate = studioNodeStatus(keyed, options);
  assert.notEqual(estimate.size, "286 × 286");
  assert.deepEqual(studioNodeStatus(keyed, { ...options, outputSize: "2048", run }), studioNodeStatus(keyed, { ...options, outputSize: "2048" }));
  assert.deepEqual(studioNodeStatus(keyed, { ...options, stateText: "{ }", run }), estimate);
  assert.deepEqual(studioNodeStatus(keyed, { ...options, bgColor: "#ff0000", run }), estimate);
  // A run without bg_media under auto keeps its note.
  const autoRun = { width: 2048, height: 1024, capped: false, reduced_from: null, key: studioRunKey(stateText, "auto", "360", "#00ff00") };
  assert.deepEqual(studioNodeStatus(state(), { ...options, outputSize: "auto", bgWidth: null, run: autoRun }),
    { shot: "ERP", size: "2048 × 1024", note: "auto: no bg_media" });
});

test("the status is worked out again only when its inputs change", () => {
  let loads = 0;
  const status = createStudioStatus();
  const load = () => {
    loads += 1;
    return state();
  };
  const options = { stateText: "{}", outputSize: "1024", coverage: 360, bgWidth: null, run: null };

  assert.deepEqual(status(options, load), { shot: "ERP", size: "1024 × 512", note: "" });
  assert.equal(status({ ...options }, load), null);
  assert.equal(loads, 1);
  assert.deepEqual(status({ ...options, outputSize: "2048" }, load), { shot: "ERP", size: "2048 × 1024", note: "" });
  assert.equal(status({ ...options, outputSize: "2048", bgWidth: undefined }, load), null);
  assert.notEqual(status({ ...options, outputSize: "auto", bgWidth: undefined }, load), null);
  assert.notEqual(status({ ...options, outputSize: "auto", bgWidth: null }, load), null);
  assert.equal(loads, 4);
});

test("once the node has run, the surface shows the run's output, whether or not the inputs still match it", () => {
  const stateText = "{}";
  const run = { width: 1024, height: 512, capped: false, reduced_from: null, key: studioRunKey(stateText, "1024", "360", "#00ff00") };
  const erp = { filename: "pano_output_0.png", subfolder: "", type: "temp", coverage: 360 };
  const frame = { filename: "pano_output_1.png", subfolder: "", type: "temp" };
  const options = { stateText, outputSize: "1024", coverage: 360, bgColor: "#00ff00", run, erp, frame: null };

  assert.deepEqual(studioRunOutput(options), { kind: "erp", entry: erp, current: true });
  // A perspective Camera's run returns its first frame instead of an ERP.
  assert.deepEqual(studioRunOutput({ ...options, erp: null, frame }), { kind: "frame", entry: frame, current: true });
  // Edited since the run (bg_color is in the output), or a run whose media are not the inputs' (run is then null).
  for (const edit of [{ stateText: "{ }" }, { outputSize: "2048" }, { coverage: 180 }, { bgColor: "#ff0000" }, { run: null }]) {
    assert.deepEqual(studioRunOutput({ ...options, ...edit }), { kind: "erp", entry: erp, current: false }, JSON.stringify(edit));
  }
  // Before any run.
  assert.equal(studioRunOutput({ ...options, run: null, erp: null }), null);
});

test("the note says whether the surface shows the current run, an edited one, none yet, or one it cannot load", () => {
  const options = { outputSize: "2048", coverage: 360, bgWidth: null };

  assert.deepEqual(studioNodeStatus(state(), { ...options, display: "run" }), { shot: "ERP", size: "2048 × 1024", note: "" });
  assert.deepEqual(studioNodeStatus(state(), { ...options, display: "edited" }), { shot: "ERP", size: "2048 × 1024", note: "Edited — run to update" });
  assert.deepEqual(studioNodeStatus(state(), { ...options, display: "not-run" }), { shot: "ERP", size: "2048 × 1024", note: "Not run yet" });
  assert.deepEqual(studioNodeStatus(state(), { ...options, display: "unavailable" }),
    { shot: "ERP", size: "2048 × 1024", note: "Run output unavailable — run again" });
  // The other notes follow.
  assert.deepEqual(studioNodeStatus(state(), { ...options, outputSize: "auto", display: "not-run" }),
    { shot: "ERP", size: "2048 × 1024", note: "Not run yet · auto: no bg_media" });
  assert.deepEqual(studioNodeStatus(state(), { ...options, outputSize: "auto", bgWidth: undefined, display: "edited" }),
    { shot: "ERP", size: "auto", note: "Edited — run to update" });

  const status = createStudioStatus();
  const shown = { stateText: "{}", outputSize: "2048", coverage: 360, bgWidth: null, run: null, display: "not-run" };
  assert.equal(status(shown, state).note, "Not run yet");
  assert.equal(status({ ...shown }, state), null);
  assert.equal(status({ ...shown, display: "edited" }, state).note, "Edited — run to update");
  assert.equal(status({ ...shown, display: "run" }, state).note, "");
});
