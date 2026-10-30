// The one line at the top center of the stage (docs/studio-ui.md "画面の区画", "読み込み中と空の画面", "一行の知らせの
// 種類"): which line shows, one at a time, and its kind, which sets the mark on its left. A notice of an operation
// that did nothing comes before what the stage waits for, before a warning that stays, before the empty stage's hint.
import { VIEW_UNAVAILABLE_MESSAGE } from "../pano_preview_view.js";
import { ADD_TEXT } from "./add_files.js";

// The kinds and their marks: "stopped" a coral dot, "warning" a soft yellow dot, "info" no mark, "loading" a small
// spinning ring.
export const NOTICE_KINDS = Object.freeze(["stopped", "warning", "info", "loading"]);

export const LINE_TEXT = Object.freeze({
  viewLoading: "Loading the 3D view…",
  backgroundLoading: "Loading background…",
  addLoading: ADD_TEXT.loading3d,
  backgroundFailed: "The background could not be loaded",
  stateUnreadable: "This node's saved state can't be read, so changes won't be saved",
  viewFailed: VIEW_UNAVAILABLE_MESSAGE,
  empty: "Drop an image or a 3D file, or press Add",
});

// ui: the stage's and the editor's report (stage.js stageUi() with `background` and `empty`): `notice` the text of an
// operation that did nothing (null without one), `view` "loading" | "ready" | "failed", `background` "none" |
// "loading" | "ready" | "failed", `empty`; and add_files.js's `adding` (a placed 3D file is loading) and `addWarning`
// (why the last file could not be placed, or null); the editor's `stateUnreadable` (the node's state_json cannot be
// read, docs/studio-ui.md "閉じ方"). Returns { kind, text }; text "" shows nothing.
export function topLine(ui) {
  if (ui.notice) return { kind: "stopped", text: String(ui.notice) };
  if (ui.view === "loading") return { kind: "loading", text: LINE_TEXT.viewLoading };
  if (ui.background === "loading") return { kind: "loading", text: LINE_TEXT.backgroundLoading };
  if (ui.adding) return { kind: "loading", text: LINE_TEXT.addLoading };
  if (ui.stateUnreadable) return { kind: "warning", text: LINE_TEXT.stateUnreadable };
  if (ui.view === "failed") return { kind: "warning", text: LINE_TEXT.viewFailed };
  if (ui.background === "failed") return { kind: "warning", text: LINE_TEXT.backgroundFailed };
  if (ui.addWarning) return { kind: "warning", text: String(ui.addWarning) };
  if (ui.empty) return { kind: "info", text: LINE_TEXT.empty };
  return { kind: "info", text: "" };
}
