import assert from "node:assert/strict";
import test from "node:test";

import { parseSceneEditorState } from "../web_src/pano_editor_state.js";
import {
  defaultPortOffsets,
  portHandoff,
  sameOffsets,
  showPortHandoff,
  skyPortSticker,
  storedPortSticker,
} from "../web_src/pano_port_handoff.js";
import { createStickersNodeSurfaceSession, portStickerSyncValue, surfaceSceneEditorState } from "../web_src/pano_stickers_node_surface.js";
import { loadSceneState, loadStickerState, sceneStateText } from "../web_src/pano_scene_state.js";

// docs/editor-interaction.md "`port` の Sticker の Pose handoff の表示と記録" (ADR 0067): the result hands the
// sticker_state it read; the evaluation places the sky port Sticker by it; the state keeps only the offset Lanes.

const SHOT = { kind: "pano_sticker_state", version: 3, fps: 30, length: 60, camera: { rotation: [{ frame: 0, value: { yaw_deg: 40 } }], fov: [{ frame: 0, value: 50 }] } };
const RESULT = [{ state: SHOT }];
const CROP = { x0: 0.1, y0: 0.2, x1: 0.9, y1: 0.8 };
const SKY_PORT = {
  id: "sticker_2", source: { kind: "port" }, z_index: 1, clip: { start: 2, in: 0, duration: null }, crop: CROP,
  direction: { value: { yaw_deg: -90, pitch_deg: 0 } }, size: { value: { hFOV_deg: 20, vFOV_deg: 20 } }, opacity: { value: 0.5 },
};
const WORLD_PORT = { ...SKY_PORT, placement: "world", position: { value: [0, 0, -2] }, offset_fov: { value: 0.5 } };
const FILE_STICKER = { id: "sticker_1", source: { kind: "file", filename: "a.png" }, z_index: 4 };

function stateText(stickers) {
  return sceneStateText(loadSceneState({ version: 2, id: "scene_a", timeline: { fps: 24 }, stickers }));
}

const port = (state) => state.stickers.find((item) => item.source.kind === "port");

// Panorama Studio with `sticker` and `sticker_state` connected.
function studioNode() {
  const inputs = [{ name: "sticker" }, { name: "sticker_state" }];
  const node = {
    __panoSceneStateV2: true,
    inputs,
    graph: { getNodeById: () => null },
    isInputConnected: () => true,
    getInputLink: () => ({ type: "IMAGE", origin_id: 1, origin_slot: 0 }),
  };
  return node;
}

test("a result's sticker_state is read as loadStickerState reads it; the earlier shape is not applied", () => {
  assert.deepEqual(portHandoff(RESULT), loadStickerState(JSON.stringify(SHOT)));
  assert.deepEqual(portHandoff(RESULT[0]), portHandoff(RESULT));
  // The shape before ADR 0067 (Lanes to copy), an unreadable one and none: no shot (ADR 0063).
  assert.equal(portHandoff([{ placement: "sky", lanes: {}, fps: 24 }]), null);
  assert.equal(portHandoff([{ state: { kind: "pano_sticker_state", version: 3 } }]), null);
  assert.equal(portHandoff([{ state: { kind: "pano_sticker_state", version: 9, fps: 24 } }]), null);
  assert.equal(portHandoff(null), null);
});

test("a stored sky port Sticker is shown as it is; a stored world one as the sky one the node draws", () => {
  const sky = parseSceneEditorState(stateText([FILE_STICKER, SKY_PORT]));
  assert.equal(showPortHandoff(sky, portHandoff(RESULT)), sky);
  const world = parseSceneEditorState(stateText([FILE_STICKER, WORLD_PORT]));
  const shown = port(showPortHandoff(world, portHandoff(RESULT)));
  // As port_sticker.py `_sky_port_sticker`: its Clip range, visibility, lock, crop, opacity and offsets kept, above
  // the other sky Stickers.
  assert.deepEqual([shown.id, shown.placement, shown.crop, shown.opacity.value, shown.offset_fov.value, shown.z_index], ["sticker_2", "sky", CROP, 0.5, 0.5, 5]);
  assert.equal("position" in shown, false);
  assert.equal(showPortHandoff(world, null), world);
});

test("the shown sky Sticker is stored as the world one until its offset changes", () => {
  const world = parseSceneEditorState(stateText([WORLD_PORT]));
  const stored = port(world);
  const shown = skyPortSticker(world, stored);
  shown.visible = false;
  const kept = storedPortSticker(shown, stored);
  assert.deepEqual([kept.placement, kept.visible, kept.position.value], ["world", false, [0, 0, -2]]);
  shown.offset_rotation.value.yaw_deg = 5;
  assert.equal(sameOffsets(shown, stored), false);
  assert.equal(storedPortSticker(shown, stored).placement, "sky");
});

test("the offsets' defaults are no turn and the angle of view as it was", () => {
  assert.deepEqual(defaultPortOffsets(), {
    offset_rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, keyframes: [] },
    offset_fov: { value: 1, keyframes: [] },
  });
});

test("the node surface shows the sticker_state's placement without writing state_json, and its sync-port writes nothing", () => {
  const text = stateText([FILE_STICKER, WORLD_PORT]);
  const node = studioNode();
  const commits = [];
  const session = createStickersNodeSurfaceSession({
    readState: () => surfaceSceneEditorState(text, {}, RESULT),
    commitState: (state) => commits.push(state),
  });

  assert.equal(port(surfaceSceneEditorState(text, {}, RESULT)).placement, "sky");
  assert.equal(port(surfaceSceneEditorState(text, {}, null)).placement, "world");
  const replace = { placement: "world", position: [0, 0, -2], rotation: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, scale: 4, replace: true };
  assert.equal(session.apply({ type: "sync-port", value: portStickerSyncValue(node, { pose: replace, handoff: RESULT }) }), false);
  assert.deepEqual(commits, []);
});

// CodeRabbit review: a looping port Sticker keeps looping its offsets when it is shown and stored as sky.
test("a looping world port Sticker stays looping as the shown and stored sky one", () => {
  const world = parseSceneEditorState(stateText([{ ...WORLD_PORT, loop: true }]));
  const stored = port(world);
  const shown = skyPortSticker(world, stored);
  assert.equal(shown.loop, true);
  shown.offset_rotation.keyframes = [{ frame: 0, value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 } }, { frame: 10, value: { yaw_deg: 20, pitch_deg: 0, roll_deg: 0 } }];
  assert.equal(storedPortSticker(shown, stored).loop, true);
});
