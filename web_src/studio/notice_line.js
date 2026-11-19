// The one line at the top center of the stage (docs/studio-ui.md "画面の区画", "読み込み中と空の画面", "一行の知らせの
// 種類"): which line shows, one at a time, and its kind, which sets the mark on its left. A notice of an operation
// that did nothing comes before the Sky-only wheel notice, before one that was done, before Set orbit center's wait, before what the stage waits for, before a warning that stays, before the empty stage's hint.
import { DEPTH_VIDEO_LOADING } from "../pano_depth_color.js";
import { STUDIO_BACKGROUND_INPUT_NAMES } from "../pano_preview_video.js";
import { VIEW_UNAVAILABLE_MESSAGE } from "../pano_preview_view.js";
import { ADD_TEXT } from "./add_files.js";

// The kinds and their marks: "stopped" a coral dot, "done" a lime dot, "warning" a soft yellow dot, "info" a neutral
// dot, "loading" a small spinning ring.
export const NOTICE_KINDS = Object.freeze(["stopped", "done", "warning", "info", "loading"]);

export const LINE_TEXT = Object.freeze({
  viewLoading: "Loading the 3D view…",
  backgroundLoading: "Loading background…",
  addLoading: ADD_TEXT.loading3d,
  backgroundFailed: "The background could not be loaded",
  stateUnreadable: "This node's saved state can't be read, so changes won't be saved",
  viewFailed: VIEW_UNAVAILABLE_MESSAGE,
  empty: "Drop an image or a 3D file, or press Add",
  upstreamPending: "Run the workflow to show the upstream scene.",
  cameraMoved: "Camera moved to this view",
  // While Set orbit center waits for a click on the stage (docs/space-and-view.md "Set orbit center").
  pickCenter: "Click a spot to orbit around · Esc to cancel",
  // While Look at's Pick waits for a click on the stage, and a click with nothing to look at (docs/studio-ui.md "Look at").
  pickLook: "Click a spot to look at · Esc to cancel",
  nothingToLookAt: "Nothing to look at here",
  // A drag or wheel of the Camera tab where the Look at target changes.
  lookChanging: "Look at is changing here",
});

// The done notice of a target picked (docs/studio-ui.md "Look at").
export function lookingAtText(name) {
  return `Looking at ${name}`;
}

// An object whose last Keyframe repeats its first while its loop is off (docs/timeline-ui.md "動きのループ").
export function endsWhereItStartsText(name) {
  return `${name} ends where it starts · Loop is off`;
}

// The names of the node's inputs that have a link. Asks the node (`isInputConnected(slot)`), not the deprecated
// `input.link` field of the slot.
export function linkedInputNames(node) {
  return (node?.inputs ?? []).filter((input, slot) => !!input?.name && !!node.isInputConnected?.(slot)).map((input) => input.name);
}

// The node's inputs whose content the stage draws: one linked brings something even before the node has run.
const STAGE_INPUTS = Object.freeze(["world", ...STUDIO_BACKGROUND_INPUT_NAMES, "sticker", "scene"]);

// Whether the stage is empty (docs/studio-ui.md "読み込み中と空の画面"): nothing of its own drawn and nothing from an
// input. `background` the own background's status ("none" | "loading" | "ready" | "failed"), `stickers` the number of
// own Stickers (`port` ones too), `paint` the number of drawn paint layers, `linked` the names of the linked inputs,
// `worldItems` the number of `world` 3D items in the node's current result, `upstream` the number of upstream layers.
export function stageEmpty({ background = "none", stickers = 0, paint = 0, linked = [], worldItems = 0, upstream = 0 } = {}) {
  return background === "none" && !stickers && !paint && !worldItems && !upstream && !linked.some((name) => STAGE_INPUTS.includes(name));
}

// ui: the stage's and the editor's report (stage.js stageUi() with `background` and `empty`): `notice` the text of an
// operation that did nothing (null without one), `skyOnly` the stage's Sky-only wheel notice (docs/space-and-view.md
// "Sky だけのときのホイール"; null without one), `view` "loading" | "ready" | "failed", `background` "none" |
// "loading" | "ready" | "failed", `empty`; and add_files.js's `adding` (a placed 3D file uploads), editor_content.js's
// `loading3d` (a 3D file Sticker shown is loading after that, docs/studio-ui.md "置く間") and `addWarning`
// (why the last file could not be placed, or null); the editor's `stateUnreadable` (the node's state_json cannot be
// read, docs/studio-ui.md "閉じ方"); `done` the short notice of an operation that was done (the left column's Camera
// button, docs/studio-ui.md "左の列の Camera のボタン"), null without one; the stage's `pickingCenter` (Set orbit center waits, stage.js);
// `upstreamPending`, a Scene linked to `scene` that the node's result does not have
// yet (studio/upstream.js pending); `depthNotice`, the line of the depth grids drawn (pano_depth_color.js depthGridNotice:
// DEPTH_VIDEO_LOADING while one waits for its colors, else why one is too large for the GPU, else ""). Returns { kind, text }; text "" shows nothing.
export function topLine(ui) {
  if (ui.notice) return { kind: "stopped", text: String(ui.notice) };
  if (ui.skyOnly) return { kind: "info", text: String(ui.skyOnly) };
  if (ui.done) return { kind: "done", text: String(ui.done) };
  if (ui.info) return { kind: "info", text: String(ui.info) };
  if (ui.pickingCenter) return { kind: "info", text: LINE_TEXT.pickCenter };
  if (ui.pickingLook) return { kind: "info", text: LINE_TEXT.pickLook };
  if (ui.view === "loading") return { kind: "loading", text: LINE_TEXT.viewLoading };
  if (ui.background === "loading") return { kind: "loading", text: LINE_TEXT.backgroundLoading };
  // A 3D file Sticker waits only while the 3D view can draw (a failed view says so below instead).
  if (ui.adding || (ui.loading3d && ui.view !== "failed")) return { kind: "loading", text: LINE_TEXT.addLoading };
  if (ui.depthNotice === DEPTH_VIDEO_LOADING) return { kind: "loading", text: DEPTH_VIDEO_LOADING };
  if (ui.stateUnreadable) return { kind: "warning", text: LINE_TEXT.stateUnreadable };
  if (ui.view === "failed") return { kind: "warning", text: LINE_TEXT.viewFailed };
  if (ui.depthNotice) return { kind: "warning", text: String(ui.depthNotice) };
  if (ui.background === "failed") return { kind: "warning", text: LINE_TEXT.backgroundFailed };
  if (ui.addWarning) return { kind: "warning", text: String(ui.addWarning) };
  if (ui.upstreamPending) return { kind: "info", text: LINE_TEXT.upstreamPending };
  // The hint over an edge handle of a returned shot while the pointer is on it (docs/studio-ui.md "一行の知らせの種類"):
  // after every notice, before the empty screen's guide.
  if (ui.pathHint) return { kind: "info", text: String(ui.pathHint) };
  if (ui.empty) return { kind: "info", text: LINE_TEXT.empty };
  return { kind: "info", text: "" };
}
