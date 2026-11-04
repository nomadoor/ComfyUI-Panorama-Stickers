// The new UI's editor's tools (editor.js openStudioEditor puts it together): Add and the drop (add_files.js), and the
// paint tools (the left column's Paint and Mask, the bar's brushes, the strokes on the stage, Clear). `ctx` is the
// editor's context (editor.js).
import { queuePendingStickerOperation } from "../pano_sticker_operations.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { createAddFiles } from "./add_files.js";
import { createStudioPaint, brushRing } from "./paint.js";
import { chooseBrush, chooseSwatch, chooseTool, clearQuestion, closeColor, createPaintTools, openColor, paintBar, painting as paintingTool, setBrushSize, setCustomColor } from "./paint_bar.js";

// Add and the drop, and the paint tools.
export function createEditorTools(ctx) {
  // [add-drop] Add and the drop (docs/studio-ui.md "Add とドロップの見せ方"): files become Stickers where they land.
  // Uploads to ComfyUI's input go through its API; a queued prompt waits for them. One still uploading when the editor
  // closes is taken over by the node's editor opened again before it ends; else it is written when it settles.
  const addFiles = createAddFiles({
    session: ctx.session,
    ui: ctx.ui,
    view: () => ctx.stage?.landing ?? null,
    ground: () => ctx.groundNow(),
    content: () => ctx.content(),
    sceneBox: ctx.sceneBox,
    playhead: () => ctx.view.playhead,
    fetchApi: ctx.api?.fetchApi ? (path, options) => ctx.api.fetchApi(path, options) : null,
    route: (source) => ctx.stageMedia.request(source),
    queue: (id, operation) => queuePendingStickerOperation(ctx.node, id, operation),
    changed: () => ctx.sync(),
    stopPlayback: () => ctx.playback.stop(),
    notice: ctx.notice,
    late: () => ctx.save(),
    pending: ctx.nodeSession.placements,
    reveal: ctx.reveal,
  });

  // --- The paint tools (docs/studio-ui.md "ペイントの道具"): the left column's Paint and Mask, the bar's brushes, the
  // strokes on the stage (paint.js) and Clear.
  const tools = createPaintTools();
  const paint = createStudioPaint({
    state: () => ctx.session.state,
    tools: () => tools,
    edit: (apply) => {
      const outcome = ctx.session.editPainting(apply);
      if (outcome.changed) {
        ctx.playback.stop();
        ctx.sync();
      }
      return outcome;
    },
    onStart: () => ctx.playback.stop(),
    onChange: () => ctx.redraw(DRAW_REASON.PAINT),
  });
  ctx.paintLayers = () => paint.layers();
  ctx.ui.empty = ctx.stageEmpty();
  const paintDeps = {
    active: () => paintingTool(tools),
    press: (point, dirAt, samples) => (ctx.readOnly ? null : paint.press(point, dirAt, samples)),
    ring: (point, dirAt) => brushRing(tools, point, dirAt),
  };

  function syncTools() {
    ctx.view.tool = tools.tool;
    ctx.view.paint = paintBar(tools, { readOnly: ctx.readOnly });
    ctx.stage?.toolChanged();
  }

  // Chooses the left column's tool: Paint and Mask let the selection go (as the old editor).
  function setTool(tool) {
    if (tool !== "cursor" && ctx.readOnly) return;
    if (tool === tools.tool) return;
    paint.cancel();
    chooseTool(tools, tool);
    if (paintingTool(tools) && ctx.session.selectObject(null)) ctx.sync();
    syncTools();
  }

  // The bar of a painting tool (StudioPaintBar.vue's `edit`): { kind: "brush", key }, { kind: "size", value },
  // { kind: "swatch", id }, { kind: "custom" } (opens or closes the Custom color), { kind: "close-color" }, { kind:
  // "color", color } (the popover's color), { kind: "recent", index }, { kind: "clear" }.
  function paintEdit(event) {
    if (!paintingTool(tools)) return;
    if (event.kind === "brush") chooseBrush(tools, event.key);
    else if (event.kind === "size") setBrushSize(tools, event.value);
    else if (event.kind === "swatch") chooseSwatch(tools, event.id);
    else if (event.kind === "custom") {
      if (tools.colorStart) closeColor(tools, true);
      else openColor(tools);
    } else if (event.kind === "close-color") closeColor(tools, true);
    else if (event.kind === "color") setCustomColor(tools, event.color);
    else if (event.kind === "recent") {
      const color = tools.recentColors[event.index];
      if (color) setCustomColor(tools, color);
    } else if (event.kind === "clear") {
      askClear();
      return;
    }
    syncTools();
  }

  // Clear paint / Clear mask: asks first (the old editor's question), then one Undo step.
  function askClear() {
    const layer = tools.tool === "mask" ? "mask" : "paint";
    if (ctx.readOnly || !ctx.session.paintingHas(layer)) return;
    closeColor(tools, true);
    syncTools();
    ctx.view.confirm = { ...clearQuestion(layer), layer };
  }
  function answerClear(ok) {
    const question = ctx.view.confirm;
    ctx.view.confirm = null;
    if (!ok || !question) return;
    paint.cancel();
    const outcome = ctx.session.clearPainting(question.layer);
    if (outcome.changed) {
      ctx.playback.stop();
      ctx.sync();
    }
  }

  return { addFiles, dropInput: () => {}, tools, paint, paintDeps, syncTools, setTool, paintEdit, answerClear };
}
