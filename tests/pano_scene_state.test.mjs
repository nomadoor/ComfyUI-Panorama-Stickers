import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { loadSceneState, loadStickerState, rebaseSceneState, sceneStateText } from "../web_src/pano_scene_state.js";
import { evaluateSceneState } from "../web_src/pano_scene_eval.js";

const fixture = (name) => readFileSync(new URL(`./fixtures/scene_state/${name}.json`, import.meta.url), "utf8");

function assertClose(actual, expected, path = "$") {
  if (expected && typeof expected === "object") {
    assert.deepEqual(Object.keys(actual), Object.keys(expected), path);
    for (const key of Object.keys(expected)) assertClose(actual[key], expected[key], `${path}.${key}`);
  } else if (typeof expected === "number") {
    assert.ok(Math.abs(actual - expected) <= 1e-9, `${path}: ${actual} != ${expected}`);
  } else {
    assert.equal(actual, expected, path);
  }
}

test("state_json v1 and v2 fixtures load as the documented v2 state", () => {
  assertClose(loadSceneState(fixture("v2_canonical")), JSON.parse(fixture("v2_canonical")));
  for (const name of ["v1_stickers", "v1_cutout", "v2_invalid_fields", "v2_no_camera", "v2_erp_camera", "v2_upstream"]) {
    assertClose(loadSceneState(fixture(name)), JSON.parse(fixture(`${name}.v2`)));
  }
});

test("a state has no Camera unless `camera` is an object, and a Camera has a projection", () => {
  for (const camera of ["", ',"camera":null', ',"camera":"front"', ',"camera":[1]']) {
    assert.equal(loadSceneState(`{"version":2${camera}}`).camera, null);
  }
  assert.deepEqual(loadSceneState('{"version":2,"camera":{}}').camera, {
    aspect: 1,
    projection: "perspective",
    visible: true,
    position: { value: [0, 0, 0], keyframes: [] },
    rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, keyframes: [] },
    fov: { value: 90, keyframes: [] },
  });
  for (const [projection, expected] of [["erp", "erp"], ["perspective", "perspective"], ["ERP", "perspective"], [null, "perspective"], [1, "perspective"]]) {
    assert.equal(loadSceneState({ version: 2, camera: { projection } }).camera.projection, expected);
  }
  assert.equal(loadSceneState(fixture("v1_stickers")).camera, null);
  assert.equal(loadSceneState(fixture("v1_cutout")).camera.projection, "perspective");
  assert.equal(rebaseSceneState(loadSceneState(fixture("v2_no_camera")), 60).camera, null);
  assert.equal(rebaseSceneState(loadSceneState(fixture("v2_erp_camera")), 12).camera.projection, "erp");
  assert.equal(evaluateSceneState(loadSceneState(fixture("v2_no_camera")), 10).camera, null);
});

test("the state text leaves out the default projection and reads back the same", () => {
  const perspective = loadSceneState(fixture("v1_cutout"));
  const text = sceneStateText(perspective);
  assert.equal(JSON.parse(text).camera.projection, undefined);
  assert.deepEqual(Object.keys(JSON.parse(text).camera), ["aspect", "position", "rotation", "fov"]);
  assert.deepEqual(loadSceneState(text), perspective);
  const erp = loadSceneState(fixture("v2_erp_camera"));
  assert.deepEqual(Object.keys(JSON.parse(sceneStateText(erp)).camera), ["aspect", "projection", "position", "rotation", "fov"]);
  assert.deepEqual(loadSceneState(sceneStateText(erp)), erp);
  const none = loadSceneState(fixture("v2_no_camera"));
  assert.deepEqual(loadSceneState(sceneStateText(none)), none);
  assert.equal(JSON.parse(sceneStateText(none)).camera, null);
});

test("the state text leaves out shown Camera, scene and painting and keeps hidden ones", () => {
  const shown = JSON.parse(sceneStateText(loadSceneState(fixture("v2_canonical"))));
  assert.equal("visible" in shown.camera, false);
  assert.equal("visible" in shown.scene, false);
  assert.equal("painting_visible" in shown, false);
  assert.deepEqual(Object.keys(shown), ["version", "timeline", "camera", "scene", "stickers", "painting", "painting_layer"]);
  const state = loadSceneState(fixture("v2_hidden"));
  const text = sceneStateText(state);
  const hidden = JSON.parse(text);
  assert.equal(hidden.camera.visible, false);
  assert.equal(hidden.scene.visible, false);
  assert.equal(hidden.painting_visible, false);
  assert.deepEqual(loadSceneState(text), state);
});

test("sticker_state v1 and v2 fixtures load as sticker_state v2", () => {
  for (const name of ["sticker_state_v1", "sticker_state_v2"]) {
    assertClose(loadStickerState(fixture(name)), JSON.parse(fixture(`${name}.v2`)));
  }
  assert.equal(loadStickerState('{"kind":"other","version":2}'), null);
  assert.throws(() => loadStickerState('{"kind":"pano_sticker_state","version":3}'), /sticker_state version 3/);
});

test("unsupported state_json versions name the version", () => {
  assert.throws(() => loadSceneState('{"version":3}'), /state_json version 3; supported versions are 1 and 2/);
  assert.throws(() => loadSceneState("[1]"), /state_json is not a JSON object/);
  assert.equal(loadSceneState("").version, 2);
});

test("static and hold keyframes evaluate to the fixture values", () => {
  const state = loadSceneState(fixture("v2_canonical"));
  const expected = JSON.parse(fixture("v2_canonical.eval"));
  assertClose(expected.map((item) => evaluateSceneState(state, item.frame)), expected);
});

test("a hold Cut lands on a frame that misses the Keyframe only by float rounding", () => {
  const state = loadSceneState({
    version: 2,
    timeline: { fps: 30000 / 1001 },
    camera: { rotation: { keyframes: [
      { frame: 0, value: { yaw_deg: 0 }, easing: "hold" },
      { frame: 24, value: { yaw_deg: 90 }, easing: "auto" },
      { frame: 48, value: { yaw_deg: 180 } },
    ] } },
  });
  const yawAt = (frame) => evaluateSceneState(state, frame).camera.yaw_deg;
  assert.equal(yawAt((24 * 1001 / 30000) * state.timeline.fps), 90);
  assert.equal(yawAt(24 - 5e-7), 90);
  assert.equal(yawAt(24 + 5e-7), 90);
  assert.equal(yawAt(48 - 5e-7), 180);
  assert.equal(yawAt(24 - 1e-5), 0);
});

test("sticker_state v1 accepts numeric strings like the old parser", () => {
  const parsed = loadStickerState('{"kind":"pano_sticker_state","version":"1","pose":{"yaw_deg":"190","pitch_deg":" -100 ","roll_deg":2,"hFOV_deg":"30"},"source_aspect":"1.5"}');
  assert.deepEqual(parsed.camera.rotation[0].value, { yaw_deg: -170, pitch_deg: -89.9, roll_deg: 2 });
  assert.equal(parsed.camera.fov[0].value, 30);
  assert.deepEqual(parsed.camera.position[0].value, [0, 0, 0]);
  assert.equal(parsed.source_aspect, 1.5);
});

test("Clip range edges use the same frame epsilon", () => {
  const state = loadSceneState(fixture("v2_canonical"));
  const active = (frame) => evaluateSceneState(state, frame).stickers[0].active;
  assert.equal(active(10 - 1e-7), true);
  assert.equal(active(10 - 1e-5), false);
  assert.equal(active(50 - 1e-5), true);
  assert.equal(active(50 - 1e-7), false);
});

// Keys holding a whole Camera pose, as the Camera's Lanes; a key sets each Lane whose fields it has.
function cameraLanes(keyframes) {
  const lanes = { position: { keyframes: [] }, rotation: { keyframes: [] }, fov: { keyframes: [] } };
  for (const { value, ...rest } of keyframes) {
    if ("position" in value) lanes.position.keyframes.push({ ...rest, value: value.position });
    const rotation = Object.fromEntries(["yaw_deg", "pitch_deg", "roll_deg"].filter((field) => field in value).map((field) => [field, value[field]]));
    if (Object.keys(rotation).length) lanes.rotation.keyframes.push({ ...rest, value: rotation });
    if ("hFOV_deg" in value) lanes.fov.keyframes.push({ ...rest, value: value.hFOV_deg });
  }
  return lanes;
}
const auto = (keyframes) => keyframes.map((key) => ({ easing: "auto", ...key }));
const cameraState = (keyframes, fps = 24) => loadSceneState({ version: 2, timeline: { fps }, camera: cameraLanes(keyframes) });
const cameraAt = (state, frame) => evaluateSceneState(state, frame).camera;

test("auto keys keep the velocity continuous with uneven spacing", () => {
  const state = cameraState(auto([
    { frame: 0, value: { position: [0, 0, 0], hFOV_deg: 60 } },
    { frame: 8, value: { position: [2, 1, -1], hFOV_deg: 90 } },
    { frame: 40, value: { position: [3, 0, -6], hFOV_deg: 100 } },
  ]));
  const h = 1e-3;
  const [before, at, after] = [-h, 0, h].map((d) => cameraAt(state, 8 + d));
  const left = (at.hFOV_deg - before.hFOV_deg) / h;
  assert.ok(Math.abs(left) > 0.1);
  assert.ok(Math.abs(left - (after.hFOV_deg - at.hFOV_deg) / h) < 1e-2);
  for (let axis = 0; axis < 3; axis += 1) {
    const l = (at.position[axis] - before.position[axis]) / h;
    const r = (after.position[axis] - at.position[axis]) / h;
    assert.ok(Math.abs(l - r) < 1e-3, `axis ${axis}: ${l} != ${r}`);
  }
});

test("cubic-bezier segments distribute time like CSS", () => {
  const state = cameraState([
    { frame: 0, value: { yaw_deg: 0, hFOV_deg: 40 }, easing: [0.42, 0, 0.58, 1] },
    { frame: 20, value: { yaw_deg: 60, hFOV_deg: 80 } },
  ]);
  // ease-in-out is symmetric: half the time gives half the progress, and a quarter gives the known 0.1291.
  assert.ok(Math.abs(cameraAt(state, 10).hFOV_deg - 60) < 1e-9);
  assert.ok(Math.abs(cameraAt(state, 10).yaw_deg - 30) < 1e-6);
  assert.ok(Math.abs(cameraAt(state, 5).hFOV_deg - (40 + 40 * 0.129161)) < 1e-4);
});

test("hold keeps the value until the next key", () => {
  const state = cameraState([
    { frame: 0, value: { hFOV_deg: 40 }, easing: "hold" },
    { frame: 10, value: { hFOV_deg: 80 } },
  ]);
  assert.equal(cameraAt(state, 9.99).hFOV_deg, 40);
  assert.equal(cameraAt(state, 10).hFOV_deg, 80);
});

test("rebasing fps rounds every stored frame to the new fps", () => {
  const state = loadSceneState({
    version: 2,
    timeline: { fps: 24, length: 241 },
    camera: { rotation: { keyframes: [{ frame: 7, value: {} }, { frame: 13, value: {} }] }, fov: { keyframes: [{ frame: 20, value: 60 }] } },
    stickers: [
      { source: { kind: "port" }, clip: { start: 11, in: 1, duration: 29 } },
      { source: { kind: "file", filename: "a.png" }, clip: { start: 3 }, direction: { keyframes: [{ frame: 5, value: {} }] }, size: { keyframes: [{ frame: 9, value: {} }] } },
    ],
  });
  const rebased = rebaseSceneState(state, 30000 / 1001);
  assert.deepEqual(rebased.camera.rotation.keyframes.map((key) => key.frame), [9, 16]);
  assert.deepEqual(rebased.camera.fov.keyframes.map((key) => key.frame), [25]);
  // anchor 3 -> 3.75 rounds to 4; the Keyframes at Timeline 8 and 12 round to 10 and 15.
  assert.deepEqual([rebased.stickers[1].direction.keyframes[0].frame, rebased.stickers[1].size.keyframes[0].frame], [6, 11]);
  // start 11 -> 13.74, anchor 10 -> 12.49, end 40 -> 49.95 on the Timeline, each rounded.
  assert.deepEqual(rebased.stickers[0].clip, { start: 14, in: 2, duration: 36 });
  assert.equal(rebased.timeline.length, 301);
  assert.throws(() => rebaseSceneState(state, 0), /fps must be a positive number/);
});

test("rebasing keeps camera and sticker keys at one Timeline time on one frame", () => {
  const state = loadSceneState({
    version: 2,
    timeline: { fps: 24 },
    camera: { rotation: { keyframes: [{ frame: 40, value: {} }] } },
    stickers: [{ source: { kind: "port" }, clip: { start: 11, in: 1 }, opacity: { keyframes: [{ frame: 30, value: 0.5 }] } }],
  });
  const rebased = rebaseSceneState(state, 30000 / 1001);
  const { clip, opacity } = rebased.stickers[0];
  assert.equal(rebased.camera.rotation.keyframes[0].frame, 50);
  assert.equal(clip.start - clip.in + opacity.keyframes[0].frame, 50);
});

test("exact half turns take a fixed direction and yaw ties take the lower value", () => {
  const halfway = (end, field) => cameraAt(cameraState([{ frame: 0, value: { yaw_deg: 0 }, easing: "auto" }, { frame: 20, value: end }]), 10)[field];
  assert.ok(Math.abs(halfway({ yaw_deg: 180 }, "yaw_deg") - 90) < 1e-6);
  assert.ok(Math.abs(halfway({ yaw_deg: 180, roll_deg: 180 }, "pitch_deg") - 90) < 1e-6);
  assert.ok(Math.abs(halfway({ roll_deg: 180 }, "roll_deg") - 90) < 1e-6);
  assert.ok(Math.abs(halfway({ yaw_deg: 350 }, "yaw_deg") + 5) < 1e-9);
});

test("a fast move that stops does not overshoot", () => {
  const state = cameraState(auto([
    { frame: 0, value: { hFOV_deg: 90 } },
    { frame: 2, value: { hFOV_deg: 60 } },
    { frame: 102, value: { hFOV_deg: 60 } },
  ]));
  for (let frame = 0; frame < 102; frame += 0.25) {
    const { hFOV_deg: fov } = cameraAt(state, frame);
    assert.ok(fov >= 60 - 1e-9 && fov <= 90 + 1e-9, `${frame}: ${fov}`);
  }
});

test("vector tangents stop only where the motion turns back", () => {
  const speedAt = (state, frame) => {
    const a = cameraAt(state, frame - 1e-4).position;
    const b = cameraAt(state, frame + 1e-4).position;
    return a.map((c, i) => (b[i] - c) / 2e-4);
  };
  const corner = cameraState(auto([
    { frame: 0, value: { position: [0, 0, 0] } },
    { frame: 10, value: { position: [4, 0, 0] } },
    { frame: 20, value: { position: [4, 4, 0] } },
  ]));
  const [vx, vy, vz] = speedAt(corner, 10);
  assert.ok(Math.abs(vx - 0.2) < 1e-6 && Math.abs(vy - 0.2) < 1e-6 && Math.abs(vz) < 1e-9);
  const back = cameraState(auto([
    { frame: 0, value: { position: [0, 0, 0] } },
    { frame: 10, value: { position: [4, 0, 0] } },
    { frame: 20, value: { position: [0, 0, 0] } },
  ]));
  assert.ok(speedAt(back, 10).every((c) => Math.abs(c) < 1e-6));
  // Looking up, then panning: the yaw is already moving at the key where the pitch stops.
  const pan = cameraState(auto([
    { frame: 0, value: { pitch_deg: -30 } },
    { frame: 3, value: { pitch_deg: 0 } },
    { frame: 30, value: { yaw_deg: 150 } },
  ]));
  const yawSpeed = (cameraAt(pan, 3 + 1e-4).yaw_deg - cameraAt(pan, 3 - 1e-4).yaw_deg) / 2e-4;
  assert.ok(yawSpeed > 0.5, `${yawSpeed}`);
});

test("missing Easing is ease-in-out, and a cubic-bezier outside 0..1 falls back to it", () => {
  const state = cameraState([{ frame: 0, value: { hFOV_deg: 40 } }, { frame: 20, value: { hFOV_deg: 80 }, easing: [0.2, -0.1, 0.8, 1] }]);
  assert.deepEqual(state.camera.fov.keyframes.map((key) => key.easing), [[0.42, 0, 0.58, 1], [0.42, 0, 0.58, 1]]);
  assert.ok(Math.abs(cameraAt(state, 5).hFOV_deg - (40 + 40 * 0.129161)) < 1e-4);
});

test("a sky Sticker's direction moves on the sphere and its roll is a plain number", () => {
  const sky = (lanes) => loadSceneState({ version: 2, stickers: [{ source: { kind: "port" }, ...lanes }] });
  const at = (state, frame) => evaluateSceneState(state, frame).stickers[0];
  const keys = (...items) => items.map(([frame, yaw, pitch]) => ({ frame, value: { yaw_deg: yaw, pitch_deg: pitch }, easing: "auto" }));
  // Exactly opposite directions turn right from the earlier key.
  const opposite = at(sky({ direction: { keyframes: keys([0, 30, 0], [20, 210, 0]) } }), 10);
  assert.ok(Math.abs(opposite.yaw_deg - 120) < 1e-6 && Math.abs(opposite.pitch_deg) < 1e-6);
  // Over the zenith: at the pole the yaw follows the stored numbers.
  const over = sky({ direction: { keyframes: keys([0, 0, 80], [20, 180, 80]) } });
  assert.ok(Math.abs(at(over, 10).pitch_deg - 90) < 1e-6 && Math.abs(at(over, 10).yaw_deg - 90) < 1e-6);
  assert.ok(Math.abs(at(over, 9.9).yaw_deg) < 1e-9 && Math.abs(at(over, 10.1).yaw_deg - 180) < 1e-9);
  const roll = sky({ roll: { keyframes: [{ frame: 0, value: 0, easing: "auto" }, { frame: 20, value: 350 }] } });
  assert.ok(Math.abs(at(roll, 10).roll_deg - 175) < 1e-9);
});

test("timeline fps and length are kept in range on load and rebase", () => {
  const timeline = (fps, length) => loadSceneState({ version: 2, timeline: { fps, length } }).timeline;
  assert.deepEqual(timeline(1e308, 1e308), { fps: 1000, length: 10000000 });
  assert.deepEqual(timeline(300, 100000), { fps: 300, length: 100000 }, "a state within the limits is kept");
  assert.deepEqual(timeline(0, 0), { fps: 24, length: null });
  assert.deepEqual(timeline(0.5, 10000001), { fps: 1, length: 10000000 });
  assert.deepEqual(timeline(NaN, NaN), { fps: 24, length: null });
  const state = loadSceneState(fixture("v2_timeline_limits"));
  assert.deepEqual(rebaseSceneState(state, 1e308).timeline, { fps: 1000, length: 10000000 });
  assert.deepEqual(rebaseSceneState(state, 300).timeline, { fps: 300, length: 3000000 });
  assert.deepEqual(rebaseSceneState(state, 0.5).timeline, { fps: 1, length: 10000 });
  // A length keeps its seconds at a higher fps (24 fps, 90,000 frames is 3,750,000 frames at 1000 fps).
  const long = loadSceneState({ version: 2, timeline: { fps: 24, length: 90000 } });
  assert.deepEqual(rebaseSceneState(long, 1000).timeline, { fps: 1000, length: 3750000 });
  const far = state.stickers[1];
  assert.deepEqual(far.clip, { start: 10000000, in: 10000000, duration: 10000000 });
  assert.deepEqual(far.opacity.keyframes.map((key) => key.frame), [-10000000, 10000000]);
  // The text of a state within the limits does not change.
  const text = sceneStateText(loadSceneState(fixture("v2_canonical")));
  assert.equal(sceneStateText(loadSceneState(text)), text);
  for (const fps of [0, NaN, Infinity]) assert.throws(() => rebaseSceneState(state, fps), /fps must be a positive number/);
});

test("the state text of a state saved before ADR 0030 stays the same", () => {
  for (const name of ["v2_canonical", "v2_interpolation", "v2_hidden", "v1_stickers", "v2_invalid_fields"]) {
    const text = sceneStateText(loadSceneState(fixture(name)));
    const saved = JSON.parse(text);
    assert.equal("id" in saved, false, name);
    assert.equal("next_sticker_id" in saved, false, name);
    assert.equal("upstream" in saved, false, name);
    assert.equal(saved.stickers.some((item) => "handoff_overrides" in item), false, name);
    assert.equal(sceneStateText(loadSceneState(text)), text, name);
  }
});

test("the state text keeps an id, a counter past the Stickers, overrides and upstream records", () => {
  const state = loadSceneState(fixture("v2_upstream"));
  const text = sceneStateText(state);
  const saved = JSON.parse(text);
  // The Sticker without an id took sticker_8 from the counter, so the counter (9) is what the Stickers give.
  assert.deepEqual(Object.keys(saved), ["version", "id", "timeline", "camera", "scene", "stickers", "painting", "painting_layer", "upstream"]);
  assert.equal(saved.id, "scene_a");
  assert.equal(state.next_sticker_id, 9);
  assert.deepEqual(saved.stickers.map((item) => item.handoff_overrides), [undefined, ["direction", "size", "opacity"], undefined]);
  assert.deepEqual(loadSceneState(text), state);
  // A counter past the Stickers (sticker_2 to sticker_3 were deleted) is kept.
  const deleted = loadSceneState({ version: 2, stickers: [{ id: "sticker_1", source: { kind: "port" } }], next_sticker_id: 4 });
  assert.equal(JSON.parse(sceneStateText(deleted)).next_sticker_id, 4);
  assert.deepEqual(loadSceneState(sceneStateText(deleted)), deleted);
  // A port Sticker whose Lanes all come from sticker_state leaves out the empty list.
  const port = loadSceneState({ version: 2, stickers: [{ id: "p", source: { kind: "port" }, handoff_overrides: ["roll", "scale"] }] });
  assert.deepEqual(port.stickers[0].handoff_overrides, ["roll"]);
  assert.equal("handoff_overrides" in JSON.parse(sceneStateText({ ...port, stickers: [{ ...port.stickers[0], handoff_overrides: [] }] })).stickers[0], false);
});

test("the Sticker id counter is at least one past the largest sticker_<n> and gives ids to Stickers without one", () => {
  const counter = (stickers, next) => loadSceneState({ version: 2, stickers, next_sticker_id: next });
  const file = (id) => ({ id, source: { kind: "file", filename: "a.png" } });
  assert.equal(counter([], undefined).next_sticker_id, 1);
  assert.equal(counter([file("sticker_2"), file("st_9"), file("sticker_x")], undefined).next_sticker_id, 3);
  // A counter left past deleted Stickers stays; one below the Stickers comes up to them.
  assert.equal(counter([file("sticker_2")], 7).next_sticker_id, 7);
  assert.equal(counter([file("sticker_2")], 1).next_sticker_id, 3);
  assert.equal(counter([file("sticker_2")], 6.6).next_sticker_id, 7);
  for (const bad of ["7", null, true, NaN, -4]) assert.equal(counter([file("sticker_2")], bad).next_sticker_id, 3, String(bad));
  // A missing or repeated id takes the counter's next number, not a smaller unused one.
  const repaired = counter([file("sticker_3"), file(""), file("sticker_3")], 5);
  assert.deepEqual(repaired.stickers.map((item) => item.id), ["sticker_3", "sticker_5", "sticker_6"]);
  assert.equal(repaired.next_sticker_id, 7);
  assert.deepEqual(loadSceneState(repaired), repaired);
  // Numbers past the exact JS integers are not counted.
  assert.equal(counter([file("sticker_9007199254740991"), file("sticker_12")], 1e300).next_sticker_id, Number.MAX_SAFE_INTEGER);
  assert.equal(counter([file("sticker_9007199254740991"), file("sticker_12")], undefined).next_sticker_id, 13);
});

test("rebasing keeps the id, the Sticker id counter, the upstream records and the handoff overrides", () => {
  const state = loadSceneState(fixture("v2_upstream"));
  const rebased = rebaseSceneState(state, 60);
  assert.equal(rebased.id, "scene_a");
  assert.equal(rebased.next_sticker_id, 9);
  assert.deepEqual(rebased.upstream, state.upstream);
  assert.deepEqual(rebased.stickers[1].handoff_overrides, ["direction", "size", "opacity"]);
});

test("a Scene id is a non-empty string or null and is written as it is", () => {
  const named = loadSceneState({ version: 2, id: "made_1" });
  assert.equal(named.id, "made_1");
  assert.equal(JSON.parse(sceneStateText(named)).id, "made_1");
  for (const bad of ["", 3, null, ["a"]]) assert.equal(loadSceneState({ version: 2, id: bad }).id, null);
});
