// The one line at the top center of the stage (docs/studio-ui.md "画面の区画", "読み込み中と空の画面", "一行の知らせの
// 種類"): which line shows, one at a time, and its kind, which sets the mark on its left. A notice of an operation
// that did nothing comes before one that was done, before what the stage waits for, before a warning that stays, before the empty stage's hint.
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
});

// The names of the node's inputs that have a link. Asks the node (`isInputConnected(slot)`), not the deprecated
// `input.link` field of the slot.
export function linkedInputNames(node) {
  return (node?.inputs ?? []).filter((input, slot) => !!input?.name && !!node.isInputConnected?.(slot)).map((input) => input.name);
}

// The node's inputs whose content the stage draws: one linked brings something even before the node has run.
export const STAGE_INPUTS = Object.freeze(["world", ...STUDIO_BACKGROUND_INPUT_NAMES, "sticker", "scene"]);

// Whether the stage is empty (docs/studio-ui.md "読み込み中と空の画面"): nothing of its own drawn and nothing from an
// input. `background` the own background's status ("none" | "loading" | "ready" | "failed"), `stickers` the number of
// own Stickers (`port` ones too), `paint` the number of drawn paint layers, `linked` the names of the linked inputs,
// `worldItems` the number of `world` 3D items in the node's current result, `upstream` the number of upstream layers.
export function stageEmpty({ background = "none", stickers = 0, paint = 0, linked = [], worldItems = 0, upstream = 0 } = {}) {
  return background === "none" && !stickers && !paint && !worldItems && !upstream && !linked.some((name) => STAGE_INPUTS.includes(name));
}

// ui: the stage's and the editor's report (stage.js stageUi() with `background` and `empty`): `notice` the text of an
// operation that did nothing (null without one), `view` "loading" | "ready" | "failed", `background` "none" |
// "loading" | "ready" | "failed", `empty`; and add_files.js's `adding` (a placed 3D file is loading) and `addWarning`
// (why the last file could not be placed, or null); the editor's `stateUnreadable` (the node's state_json cannot be
// read, docs/studio-ui.md "閉じ方"); `done` the short notice of an operation that was done (the left column's Camera
// button, docs/studio-ui.md "左の列の Camera のボタン"), null without one; `upstreamPending`, a Scene linked to `scene` that the node's result does not have
// yet (studio/upstream.js pending). Returns { kind, text }; text "" shows nothing.
export function topLine(ui) {
  if (ui.notice) return { kind: "stopped", text: String(ui.notice) };
  if (ui.done) return { kind: "done", text: String(ui.done) };
  if (ui.view === "loading") return { kind: "loading", text: LINE_TEXT.viewLoading };
  if (ui.background === "loading") return { kind: "loading", text: LINE_TEXT.backgroundLoading };
  if (ui.adding) return { kind: "loading", text: LINE_TEXT.addLoading };
  if (ui.stateUnreadable) return { kind: "warning", text: LINE_TEXT.stateUnreadable };
  if (ui.view === "failed") return { kind: "warning", text: LINE_TEXT.viewFailed };
  if (ui.background === "failed") return { kind: "warning", text: LINE_TEXT.backgroundFailed };
  if (ui.addWarning) return { kind: "warning", text: String(ui.addWarning) };
  if (ui.upstreamPending) return { kind: "info", text: LINE_TEXT.upstreamPending };
  if (ui.empty) return { kind: "info", text: LINE_TEXT.empty };
  return { kind: "info", text: "" };
}
