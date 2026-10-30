// The drag of files over the new UI's stage (docs/studio-ui.md "Add とドロップの見せ方", docs/space-and-view.md
// "ドラッグ中の印"): the bridge between the browser's drag events and add_files.js. Over the stage it shows the mark of
// where the file lands and places it on the drop; elsewhere in the editor (the inspector, the timeline, the dimmed page
// around it) a dropped file does nothing, and ComfyUI behind the editor does not take it either (it would load the file
// into the graph).
import { dragHasStudioFile } from "../pano_sticker_file_import.js";
import { dragKind } from "./add_files.js";

// element: the stage's window (the canvas and the parts floating over it); canvas: the stage's canvas, whose corner
// is the origin of a point; root: the editor's root, whose drops are kept from ComfyUI (with its parent, the dimmed
// page). add: add_files.js's. readOnly: the editor takes no file. Returns dispose().
export function createDropInput({ element, canvas, root = null, add, readOnly = false }) {
  if (!element?.addEventListener) return () => {};
  let last = null;

  function pointOf(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  function onOver(event) {
    if (readOnly || !dragHasStudioFile(event.dataTransfer)) return;
    event.preventDefault();
    try {
      event.dataTransfer.dropEffect = "copy";
    } catch { }
    const point = pointOf(event);
    const kind = dragKind(event.dataTransfer?.items);
    // dragover repeats while the pointer rests: the mark is made again only when it moved.
    if (last && last.x === point.x && last.y === point.y && last.kind === kind) return;
    last = { ...point, kind };
    add.dragOver(point, kind);
  }

  function onLeave(event) {
    if (event.relatedTarget && element.contains(event.relatedTarget)) return;
    last = null;
    add.dragLeave();
  }

  function onDrop(event) {
    if (!dragHasStudioFile(event.dataTransfer)) return;
    event.preventDefault();
    event.stopPropagation();
    last = null;
    if (readOnly) {
      add.dragLeave();
      return;
    }
    void add.drop(pointOf(event), event.dataTransfer.files);
  }

  // Outside the stage: no drop here, and none reaches ComfyUI.
  const guards = [root, root?.parentElement].filter((target) => target?.addEventListener);
  function guardOver(event) {
    if (!dragHasStudioFile(event.dataTransfer)) return;
    event.preventDefault();
    if (!element.contains(event.target)) {
      try {
        event.dataTransfer.dropEffect = "none";
      } catch { }
    }
  }
  function guardDrop(event) {
    if (!dragHasStudioFile(event.dataTransfer)) return;
    event.preventDefault();
    event.stopPropagation();
    last = null;
    add.dragLeave();
  }

  element.addEventListener("dragenter", onOver);
  element.addEventListener("dragover", onOver);
  element.addEventListener("dragleave", onLeave);
  element.addEventListener("drop", onDrop);
  for (const target of guards) {
    target.addEventListener("dragover", guardOver);
    target.addEventListener("drop", guardDrop);
  }
  return () => {
    element.removeEventListener("dragenter", onOver);
    element.removeEventListener("dragover", onOver);
    element.removeEventListener("dragleave", onLeave);
    element.removeEventListener("drop", onDrop);
    for (const target of guards) {
      target.removeEventListener("dragover", guardOver);
      target.removeEventListener("drop", guardDrop);
    }
    add.dragLeave();
  };
}
