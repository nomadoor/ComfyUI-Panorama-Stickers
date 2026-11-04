import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";

import { parseSceneEditorState } from "../web_src/pano_editor_state.js";
import {
  inheritPortHandoff,
  portHandoff,
  recordHandoffEdits,
  revertHandoffLane,
  NO_PORT_HANDOFF_PAIR,
  showPortHandoff,
  storedPortState,
  storedPortSticker,
  syncPortHandoffPair,
} from "../web_src/pano_port_handoff.js";
import { evaluateSticker } from "../web_src/pano_scene_eval.js";
import { createStickersNodeSurfaceSession, portStickerSyncValue, surfaceSceneEditorState } from "../web_src/pano_stickers_node_surface.js";
import { loadSceneState, sceneStateText } from "../web_src/pano_scene_state.js";

// The handoff fixtures the node's `_inherit_handoff` is held to too (tests/test_pose_handoff.py).
const handoffFixture = (name) => JSON.parse(readFileSync(new URL(`./fixtures/scene_inherit/${name}.json`, import.meta.url), "utf8"));
// What a run hands the port Sticker (nodes.py `_handoff_lanes`), as `pano_sticker_handoff` gives it.
const SKY_HANDOFF = { ...handoffFixture("handoff_same_placement").handoff, fps: 24 };
const WORLD_HANDOFF = { ...handoffFixture("handoff_sky_to_world").handoff, fps: 24 };
const CROP = { x0: 0.1, y0: 0.2, x1: 0.9, y1: 0.8 };
const SKY_PORT = {
  id: "sticker_2", source: { kind: "port" }, z_index: 1, clip: { start: 2, in: 0, duration: null }, crop: CROP,
  direction: { value: { yaw_deg: -90, pitch_deg: 0 } }, size: { value: { hFOV_deg: 20, vFOV_deg: 20 } },
  opacity: { value: 0.5 },
};
const [FILE_STICKER] = handoffFixture("handoff_sky_to_world").state.stickers;

// A saved state with its Scene id (ADR 0030), which the first write would give it.
function stateText(stickers, fps = 24) {
  return sceneStateText(loadSceneState({ version: 2, id: "scene_a", timeline: { fps }, stickers }));
}

function working(text, fps = null) {
  return parseSceneEditorState(text, { fps });
}

function port(state) {
  return state.stickers.find((item) => item.source.kind === "port");
}

// Panorama Studio with `sticker` and `sticker_state` connected (`connected` can change) and a result handing
// `handoff` (`pano_sticker_handoff`).
function studioNode(handoff) {
  const inputs = [{ name: "sticker" }, { name: "sticker_state" }];
  const node = {
    __panoSceneStateV2: true,
    inputs,
    connected: new Set(["sticker", "sticker_state"]),
    graph: { getNodeById: () => null },
    isInputConnected: (slot) => node.connected.has(inputs[slot].name),
    getInputLink: (slot) => (node.isInputConnected(slot) ? { type: "IMAGE", origin_id: 1, origin_slot: 0 } : null),
    handoff,
  };
  return node;
}

test("a stored port Sticker shows the handoff's Lanes and keeps what the state keeps", () => {
  const state = working(stateText([FILE_STICKER, SKY_PORT]));
  const stored = port(state);

  const shown = inheritPortHandoff(state, stored, portHandoff([SKY_HANDOFF]));

  assert.deepEqual(shown.direction.keyframes.map((key) => key.frame), [0, 4]);
  assert.deepEqual([shown.roll.value, shown.size.value.hFOV_deg], [3, 60]);
  assert.deepEqual([shown.id, shown.z_index, shown.clip.start, shown.crop, shown.opacity.value], ["sticker_2", 1, 2, CROP, 0.5]);
  // Written back, the shown Sticker is the stored one again.
  assert.deepEqual(storedPortSticker(shown, stored), stored);
});

test("an override keeps its stored Lane while the others follow the handoff", () => {
  const state = working(stateText([{ ...SKY_PORT, handoff_overrides: ["size"] }]));

  const shown = inheritPortHandoff(state, port(state), portHandoff(SKY_HANDOFF));

  assert.deepEqual([shown.size.value.hFOV_deg, shown.direction.value.yaw_deg, shown.handoff_overrides], [20, 10, ["size"]]);
});

test("an edit of a shown Lane makes it an override and stores it; Revert to upstream makes it follow again", () => {
  const state = working(stateText([SKY_PORT]));
  const stored = port(state);
  const handoff = portHandoff(SKY_HANDOFF);
  const shown = inheritPortHandoff(state, stored, handoff);
  const edited = structuredClone(shown);
  edited.roll.value = 45;

  assert.deepEqual(recordHandoffEdits(edited, shown), ["roll"]);
  const kept = storedPortSticker(edited, stored);
  assert.deepEqual([kept.roll.value, kept.handoff_overrides, kept.direction, kept.size], [45, ["roll"], stored.direction, stored.size]);

  assert.equal(revertHandoffLane(state, edited, handoff, "roll"), true);
  assert.deepEqual([edited.roll, edited.handoff_overrides], [shown.roll, []]);
  assert.equal(revertHandoffLane(state, edited, handoff, "roll"), false);
});

test("a handoff of the other placement replaces the port Sticker, keeping its crop and opacity, both ways", () => {
  const sky = working(stateText([FILE_STICKER, { ...SKY_PORT, handoff_overrides: ["direction", "opacity"] }]));
  const toWorld = inheritPortHandoff(sky, port(sky), portHandoff(WORLD_HANDOFF));

  assert.deepEqual([toWorld.id, toWorld.placement, toWorld.crop, toWorld.opacity.value, toWorld.clip.start], ["sticker_2", "world", CROP, 0.5, 2]);
  assert.deepEqual([toWorld.handoff_overrides, "direction" in toWorld, "z_index" in toWorld], [["opacity"], false, false]);
  assert.deepEqual(toWorld.position.keyframes.map((key) => [key.frame, key.easing]), [[0, "auto"], [8, "hold"]]);

  const world = working(stateText([FILE_STICKER, { ...SKY_PORT, ...WORLD_HANDOFF.lanes, placement: "world", handoff_overrides: ["position", "opacity"] }]));
  const toSky = inheritPortHandoff(world, port(world), portHandoff(SKY_HANDOFF));

  // Above the other sky Stickers, as the node adds it.
  assert.deepEqual([toSky.placement, toSky.z_index, toSky.crop, toSky.opacity.value, toSky.handoff_overrides], ["sky", 5, CROP, 0.5, ["opacity"]]);
  assert.equal("position" in toSky, false);
  // Written back without an edit, the stored placement stays; with an override of the new one, the new one is kept.
  assert.deepEqual(storedPortSticker(toSky, port(world)), port(world));
  const edited = { ...structuredClone(toSky), handoff_overrides: ["direction", "opacity"] };
  assert.deepEqual(storedPortSticker(edited, port(world)), edited);
});

test("a world handoff shows its Keyframes", () => {
  const state = working(stateText([{ ...SKY_PORT, clip: { start: 0, in: 0, duration: null } }]));

  const shown = showPortHandoff(state, portHandoff(WORLD_HANDOFF));

  const sticker = port(shown);
  assert.deepEqual(evaluateSticker(sticker, 4).position, [0.5, 0, -2]);
  assert.deepEqual(evaluateSticker(sticker, 8).position, [1, 0, -2]);
  assert.equal(port(state).placement, "sky", "the working state is not changed");
});

test("a handoff at another fps is rebased to the editor's, as the whole state is", () => {
  const state = working(stateText([SKY_PORT]), 48);

  const shown = inheritPortHandoff(state, port(state), portHandoff(SKY_HANDOFF));

  assert.equal(state.timeline.fps, 48);
  assert.deepEqual(shown.direction.keyframes.map((key) => key.frame), [0, 8]);
});

test("the node surface shows the handoff without writing state_json, and its sync-port writes nothing", () => {
  const text = stateText([FILE_STICKER, SKY_PORT]);
  const node = studioNode(WORLD_HANDOFF);
  const commits = [];
  const session = createStickersNodeSurfaceSession({
    readState: () => surfaceSceneEditorState(text, {}, [WORLD_HANDOFF]),
    commitState: (state) => commits.push(state),
  });

  assert.equal(port(surfaceSceneEditorState(text, {}, [WORLD_HANDOFF])).placement, "world");
  assert.equal(port(surfaceSceneEditorState(text, {}, null)).placement, "sky");
  const replace = { placement: "world", position: [0, 0, -2], rotation: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, scale: 4, replace: true };
  assert.equal(session.apply({ type: "sync-port", value: portStickerSyncValue(node, { pose: replace, handoff: [WORLD_HANDOFF] }) }), false);
  assert.deepEqual(commits, []);
});

// Held to the node's `_inherit_handoff` by the same fixtures (tests/test_pose_handoff.py).
// Every `handoff_*` case there is, the lens's (ADR 0042) among them.
const HANDOFF_FIXTURES = readdirSync(new URL("./fixtures/scene_inherit/", import.meta.url))
  .filter((file) => /^handoff_.*\.json$/.test(file)).map((file) => file.slice(0, -5)).sort();
for (const name of HANDOFF_FIXTURES) {
  test(`inheriting the handoff matches the fixture the node shares: ${name}`, () => {
    const fixture = handoffFixture(name);
    const state = loadSceneState(fixture.state);

    assert.deepEqual(inheritPortHandoff(state, port(state), portHandoff(fixture.handoff)), fixture.expected);
  });
}

// ADR 0042: the handoff hands its lens too, as the node's `_inherit_handoff` does.
test("the handoff hands a sky Sticker's curve and a world Sticker's lens, and a pinhole shot takes the lens away", () => {
  const source = { kind: "port" };
  const world = loadSceneState({ version: 2, stickers: [{ id: "p", placement: "world", source, lens: { value: { curve: 0.5, hFOV_deg: 120 } } }] });
  const lens = { value: { curve: 0, hFOV_deg: 200 }, keyframes: [] };
  const handed = inheritPortHandoff(world, world.stickers[0], portHandoff({ placement: "world", lanes: { position: { value: [0, 0, -2] }, lens }, fps: 24 }));
  assert.deepEqual(handed.lens, lens);
  const pinhole = inheritPortHandoff(world, world.stickers[0], portHandoff({ placement: "world", lanes: { position: { value: [0, 0, -2] } }, fps: 24 }));
  assert.equal(Object.hasOwn(pinhole, "lens"), false);
  const sky = loadSceneState({ version: 2, stickers: [{ id: "p", placement: "sky", source }] });
  const curve = { value: 0.3, keyframes: [{ frame: 0, value: 0.3, easing: [0.42, 0, 0.58, 1] }] };
  assert.deepEqual(inheritPortHandoff(sky, sky.stickers[0], portHandoff({ placement: "sky", lanes: { curve }, fps: 24 })).curve, curve);
});

// --- The pair both editors keep (docs/editor-interaction.md "`port` の Sticker の Pose handoff の表示と記録").

const portIn = (state) => state.stickers.find((item) => item.source.kind === "port");
const withPort = (state, port) => ({ ...state, stickers: state.stickers.map((item) => (item.source.kind === "port" ? port : item)) });

test("a Lane taken off the overrides and back to the handoff is not recorded as an override again", () => {
  const handoff = portHandoff(SKY_HANDOFF);
  const opened = loadSceneState({ version: 2, stickers: [{ ...SKY_PORT, handoff_overrides: ["direction"] }] });
  const first = syncPortHandoffPair(opened, NO_PORT_HANDOFF_PAIR, handoff, { restored: true });
  assert.deepEqual(first.shown.direction.value, { yaw_deg: -90, pitch_deg: 0 });
  // The new UI's row reset changes a copy of the shown Sticker (inspector_actions.js resetHandoff).
  const reset = structuredClone(first.shown);
  assert.equal(revertHandoffLane(withPort(opened, first.shown), reset, handoff, "direction"), true);
  const next = syncPortHandoffPair(withPort(opened, reset), first.pair, handoff, { record: true });
  assert.deepEqual(next.shown.handoff_overrides, []);
  assert.deepEqual(next.shown.direction, SKY_HANDOFF.lanes.direction);
  const stored = portIn(storedPortState(withPort(opened, next.shown), next.pair));
  assert.deepEqual(stored.handoff_overrides, []);
  // An edit after it is recorded as usual.
  const edited = structuredClone(next.shown);
  edited.roll = { value: 40, keyframes: [] };
  assert.deepEqual(syncPortHandoffPair(withPort(opened, edited), next.pair, handoff).shown.handoff_overrides, ["roll"]);
});

test("the port Sticker an editor shows after applying the handoff is the one the node surface shows", () => {
  for (const [raw, value] of [[SKY_PORT, SKY_HANDOFF], [{ ...SKY_PORT, handoff_overrides: ["size"] }, WORLD_HANDOFF]]) {
    const text = sceneStateText(loadSceneState({ version: 2, stickers: [raw] }));
    const opened = parseSceneEditorState(text, {});
    const { shown } = syncPortHandoffPair(opened, NO_PORT_HANDOFF_PAIR, portHandoff([value]), { restored: true });
    assert.deepEqual(shown, portIn(surfaceSceneEditorState(text, {}, [value])));
  }
});
