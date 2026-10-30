// The one line at the top center of the stage (docs/studio-ui.md "画面の区画", "読み込み中と空の画面", "一行の知らせの
// 種類"): which line shows, one at a time, and its kind, which sets the mark on its left. A notice of an operation
// that did nothing comes before what the stage waits for, before a warning that stays, before the empty stage's hint.
import { VIEW_UNAVAILABLE_MESSAGE } from "../pano_preview_view.js";

// The kinds and their marks: "stopped" a coral dot, "warning" a soft yellow dot, "info" no mark, "loading" a small
// spinning ring.
export const NOTICE_KINDS = Object.freeze(["stopped", "warning", "info", "loading"]);

export const LINE_TEXT = Object.freeze({
  viewLoading: "Loading the 3D view…",
  backgroundLoading: "Loading background…",
  backgroundFailed: "The background could not be loaded",
  viewFailed: VIEW_UNAVAILABLE_MESSAGE,
  empty: "Drop an image or a 3D file, or press Add",
});

// ui: the stage's and the editor's report (stage.js stageUi() with `background` and `empty`): `notice` the text of an
// operation that did nothing (null without one), `view` "loading" | "ready" | "failed", `background` "none" |
// "loading" | "ready" | "failed", `empty`. timecode: the Camera tab's timecode text (null outside it), which hides only
// while a notice or a loading line shows (docs/studio-ui.md "画面の区画"). Returns { kind, text }; text "" shows
// nothing; kind "timecode" is shown as the timecode, without a mark.
export function topLine(ui, { timecode = null } = {}) {
  if (ui.notice) return { kind: "stopped", text: String(ui.notice) };
  if (ui.view === "loading") return { kind: "loading", text: LINE_TEXT.viewLoading };
  if (ui.background === "loading") return { kind: "loading", text: LINE_TEXT.backgroundLoading };
  if (timecode) return { kind: "timecode", text: timecode };
  if (ui.view === "failed") return { kind: "warning", text: LINE_TEXT.viewFailed };
  if (ui.background === "failed") return { kind: "warning", text: LINE_TEXT.backgroundFailed };
  if (ui.empty) return { kind: "info", text: LINE_TEXT.empty };
  return { kind: "info", text: "" };
}
