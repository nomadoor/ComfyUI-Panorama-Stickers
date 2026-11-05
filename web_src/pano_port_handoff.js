// The port Sticker that `sticker_state` places (Pose handoff, ADR 0030), as the editor and the node surface
// show it. Every run hands it Lanes (`pano_sticker_handoff`); the Lanes in its `handoff_overrides` keep their
// stored value, the others follow the handoff, and a stored world one turns sky (port_sticker.py
// `_inherit_handoff`). The state keeps the stored Lanes: showing the handoff never changes state_json, and an
// edit of an inherited Lane makes it an override (docs/editor-interaction.md).
import { clipOrigin } from "./pano_scene_eval.js";
import { loadSceneState, rebaseSceneState, SKY_STICKER_LANES, timelineFps } from "./pano_scene_state.js";

// The Lanes a handoff hands, by placement: it is always a sky Sticker (ADR 0059), with its lens `curve` (ADR 0042).
export const HANDOFF_LANES = { sky: ["direction", "roll", "size", "curve"] };

// The handed Lanes of a Sticker of `placement`: none for a world one.
const handedLanes = (placement) => HANDOFF_LANES[placement] ?? [];

// The sky Lanes an edit can make overrides of, in the order a state keeps `handoff_overrides`.
const OVERRIDE_ORDER = SKY_STICKER_LANES.map(([name]) => name);

// The fields a port Sticker keeps when the handoff replaces it by one of the other placement.
const KEPT_FIELDS = ["id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides"];

// The handoff of a node's result (`pano_sticker_handoff`, or its first entry): { placement, lanes, fps }, or null.
// `fps` is the Timeline fps its Keyframes are at (the run's state_json); a result without it is taken to be at
// the fps it is shown at. A result of a run before ADR 0059 that handed a world Sticker is not applied (null).
export function portHandoff(value) {
  const entry = Array.isArray(value) ? value[0] : value;
  if (!entry || typeof entry !== "object" || entry.placement !== "sky" || !entry.lanes || typeof entry.lanes !== "object") return null;
  return { placement: entry.placement, lanes: entry.lanes, fps: timelineFps(entry.fps) };
}

// Whether the LiteGraph node's input `name` has a link.
export function isInputConnected(node, name) {
  const slot = (Array.isArray(node?.inputs) ? node.inputs : []).findIndex((input) => input?.name === name);
  return slot >= 0 && node.isInputConnected(slot);
}

// Whether the Pose handoff of a node's result can apply: `sticker` and `sticker_state` are connected.
export function portHandoffLinked(node) {
  return isInputConnected(node, "sticker") && isInputConnected(node, "sticker_state");
}

// The Pose handoff of a node's current result (`value`, its `pano_sticker_handoff`) while it can apply, or null.
export function nodePortHandoff(node, value) {
  return portHandoffLinked(node) ? portHandoff(value) : null;
}

function clone(value) {
  return structuredClone(value);
}

function sameValue(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

// The Lanes of `handoff` at `fps`, for a port Sticker whose Clip range is `clip` at that fps. Keyframes are on
// the Sticker's media, from its origin (start - in); the run put that origin where rebaseSceneState puts it at
// the handoff's fps, so they round to `fps` as the whole state does (rebaseUpstreamRecord, docs/scene-state-v2.md).
function handoffLanes(handoff, fps, clip) {
  const from = handoff.fps ?? fps;
  if (from === fps) return handoff.lanes;
  const origin = clipOrigin(clip);
  const runOrigin = Math.floor(origin * from / fps + 0.5);
  return Object.fromEntries(Object.entries(handoff.lanes).map(([name, lane]) => [name, {
    value: lane.value,
    keyframes: (lane.keyframes ?? []).map((key) => ({ ...key, frame: Math.floor((runOrigin + key.frame) * fps / from + 0.5) - origin })),
  }]));
}

// The port Sticker `stored` as the run draws it with `handoff` in the working state `state` (at its Timeline
// fps): the handoff's sky Lanes for those not in its `handoff_overrides`. A stored world Sticker is replaced by a
// sky one under the same id, keeping KEPT_FIELDS (and the overrides of sky Lanes), above the other sky Stickers.
// Like port_sticker.py `_inherit_handoff`.
export function inheritPortHandoff(state, stored, handoff) {
  const lanes = handoffLanes(handoff, state.timeline.fps, stored.clip);
  let raw;
  if (stored.placement === "sky") {
    raw = { ...stored };
    for (const name of HANDOFF_LANES.sky) if (lanes[name] && !stored.handoff_overrides.includes(name)) raw[name] = lanes[name];
  } else {
    raw = { ...Object.fromEntries(KEPT_FIELDS.map((key) => [key, stored[key]])), placement: "sky", ...lanes };
    raw.z_index = state.stickers.reduce((top, item) => (item.id !== stored.id && item.placement === "sky" ? Math.max(top, item.z_index) : top), -1) + 1;
  }
  return clone(loadSceneState({ version: 2, stickers: [raw] }).stickers[0]);
}

// The working state with its port Sticker shown with `handoff` (inheritPortHandoff), or `state` itself without one.
export function showPortHandoff(state, handoff) {
  const index = state.stickers.findIndex((item) => item.source.kind === "port");
  if (!handoff || index < 0) return state;
  return { ...state, stickers: state.stickers.map((item, i) => (i === index ? inheritPortHandoff(state, item, handoff) : item)) };
}

// The Lanes of the shown port Sticker `sticker` that an edit changed since it was `shown` (the last write-back),
// among those the handoff gives: they become its overrides (ADR 0030, touched = changed by this edit). Added to
// its `handoff_overrides` in Lane order, which it returns.
export function recordHandoffEdits(sticker, shown) {
  if (shown.id !== sticker.id || shown.placement !== sticker.placement) return sticker.handoff_overrides;
  const touched = handedLanes(sticker.placement).filter((name) => !sameValue(sticker[name], shown[name]));
  if (touched.length) {
    const overrides = new Set([...sticker.handoff_overrides, ...touched]);
    sticker.handoff_overrides = OVERRIDE_ORDER.filter((name) => overrides.has(name));
  }
  return sticker.handoff_overrides;
}

// The port Sticker the state keeps for the shown one `shown`, over `stored`, what the state kept before: the
// inherited Lanes go back to their stored values, so showing the handoff writes nothing. A Sticker the handoff
// turned to the other placement is kept in its stored placement (with the shown Clip range, visibility, lock,
// crop and opacity) until a Lane of the new placement is overridden; then the shown one is kept, as the run
// keeps it, and the stored placement's Lanes and overrides are dropped (ADR 0030 C1).
export function storedPortSticker(shown, stored) {
  if (!stored || stored.id !== shown.id) return clone(shown);
  if (shown.placement === stored.placement) {
    const out = clone(shown);
    for (const name of handedLanes(shown.placement)) {
      if (shown.handoff_overrides.includes(name)) continue;
      if (stored[name] === undefined) delete out[name];
      else out[name] = clone(stored[name]);
    }
    return out;
  }
  if (shown.handoff_overrides.some((name) => handedLanes(shown.placement).includes(name))) return clone(shown);
  const out = clone(stored);
  for (const key of ["clip", "visible", "locked", "crop", "opacity"]) out[key] = clone(shown[key]);
  return out;
}

// "Revert to upstream" of the Lane `name` of the shown port Sticker `sticker`: it follows `handoff` again (at
// the fps of `state`, the working state). Returns whether it was an override.
export function revertHandoffLane(state, sticker, handoff, name) {
  if (!sticker.handoff_overrides.includes(name) || sticker.placement !== handoff.placement) return false;
  sticker.handoff_overrides = sticker.handoff_overrides.filter((item) => item !== name);
  sticker[name] = clone(inheritPortHandoff(state, sticker, handoff)[name]);
  return true;
}

// --- The pair an editor keeps while it shows the Pose handoff (docs/editor-interaction.md "`port` の Sticker の Pose
// handoff の表示と記録"): { stored, shown, handoff, fps }, the port Sticker the state keeps, the one shown the last
// time, the handoff shown, and the Timeline fps they are at. The new editor (studio/session.js) calls these: they
// take values and return values, and never change the state they are given.

export const NO_PORT_HANDOFF_PAIR = Object.freeze({ stored: null, shown: null, handoff: null, fps: null });

function portOf(state) {
  return state.stickers.find((item) => item.source?.kind === "port") ?? null;
}

// A port Sticker at `fps`, from one at `from`, as rebaseSceneState rebases it with the state.
function rebasedPortSticker(sticker, from, fps) {
  return clone(rebaseSceneState(loadSceneState({ version: 2, timeline: { fps: from }, stickers: [sticker] }), fps).stickers[0]);
}

// The last shown and stored port Stickers with the Lanes taken off the overrides since then (a reset back to the
// handoff, revertHandoffLane) at the value they have now in `port`: going back to the handoff is no edit, so such a
// Lane is not recorded as an override again, and the state keeps the handoff's value for it.
function withReverted(port, shown, stored) {
  if (shown.placement !== port.placement) return [shown, stored];
  const reverted = shown.handoff_overrides.filter((name) => !port.handoff_overrides.includes(name));
  if (!reverted.length) return [shown, stored];
  const before = clone(shown);
  // A stored Sticker still of the other placement (storedPortSticker) has none of these Lanes.
  const kept = stored.placement === port.placement ? clone(stored) : stored;
  for (const name of reverted) {
    for (const sticker of kept === stored ? [before] : [before, kept]) {
      if (port[name] === undefined) delete sticker[name];
      else sticker[name] = clone(port[name]);
    }
  }
  return [before, kept];
}

// The port Sticker of the working `state` shown with `handoff` (or null), from the last `pair`: { shown, pair,
// changed }. With `record`, the Lanes an edit changed since the last shown one become overrides first
// (recordHandoffEdits). `restored` says the working state's port Sticker is a stored one (opening, Undo), not a shown
// one. After a change of the Timeline fps, what was stored and shown is rebased the same way, so the rebase is no edit.
// `shown` is null when the state has no port Sticker; `changed` says it differs from the state's (its overrides
// recorded).
export function syncPortHandoffPair(state, pair, handoff, { record = true, restored = false } = {}) {
  const port = portOf(state);
  if (!port) return { shown: null, pair: NO_PORT_HANDOFF_PAIR, changed: false };
  const { fps } = state.timeline;
  const current = clone(port);
  let stored;
  if (restored || !pair?.handoff || pair.stored?.id !== port.id) {
    stored = clone(port);
  } else {
    const rebase = (sticker) => (pair.fps === fps ? sticker : rebasedPortSticker(sticker, pair.fps, fps));
    const [before, kept] = withReverted(current, rebase(pair.shown), rebase(pair.stored));
    if (record) recordHandoffEdits(current, before);
    stored = storedPortSticker(current, kept);
  }
  const shown = handoff ? inheritPortHandoff(state, stored, handoff) : clone(stored);
  return { shown, pair: { stored, shown: clone(shown), handoff, fps }, changed: !sameValue(shown, current) };
}

// The working `state` as the node keeps it: its port Sticker shown with the Pose handoff is the pair's stored one.
export function storedPortState(state, pair) {
  if (!pair?.handoff) return state;
  return { ...state, stickers: state.stickers.map((item) => (item.source?.kind === "port" ? pair.stored : item)) };
}

