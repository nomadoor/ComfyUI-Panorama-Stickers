// What the new UI's editor hands the stage to draw (editor.js openStudioEditor puts it together): the content at the
// playhead (stage_content.js stageContent, made again only when what it reads changes), a placed 3D file's reveal, and
// the stage's selection of a row. `ctx` is the editor's context (editor.js).
import { mediaSize } from "../pano_editor_view.js";
import { paintObjectRow } from "../pano_paint_objects.js";
import { sceneContentBox } from "../pano_space.js";
import { is3dFileSource } from "../pano_scene_state.js";
import { createLoadReveal } from "./load_reveal.js";
import { cameraAt } from "./camera_state.js";
import { stageContent, stageDepthNotice, stickerFrameSphere } from "./stage_content.js";

// The content at the playhead and what is selected, for the stage.
export function createEditorContent(ctx) {
  const sceneBox = (url) => ctx.stage?.sceneBox(url) ?? null;
  // [add-drop] A placed image draws from its decoded file until its uploaded file has loaded (add_files.js).
  // [inputs] The port Sticker draws the `sticker` input's picture at the playhead.
  const mediaOf = (sticker) => (sticker.source.kind === "port" ? ctx.portMedia.picture(sticker, ctx.view.playhead) : ctx.stageMedia.media(sticker) ?? ctx.addFiles.media(sticker));
  // The wait and reveal of a 3D file Sticker whose item has not drawn (load_reveal.js; docs/studio-ui.md "置く間"): a
  // placed one ([add-drop]), and any other shown but not drawn yet, the node's own and an upstream layer's: its guide's
  // band while it loads, then it fades in.
  const reducedMotion = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  const reveal = createLoadReveal({ now: () => performance.now(), reducedMotion: () => !!reducedMotion?.matches });
  // The box a 3D file Sticker's guide stands in with while it loads (docs/space-and-view.md "World の物のガイド"): the
  // editor's route answer, else the node surface's earlier one for the same Source (read, never asked: main.js), else none.
  function waitBox(source) {
    const answer = ctx.stageMedia.file3dAnswer?.(source) ?? null;
    if (answer?.state === "ready") return answer.box ?? null;
    return ctx.nodeFile3dBox?.(source) ?? null;
  }
  // Starts, follows or stops the wait of each 3D file Sticker in `value` (the content at the playhead), and says whether
  // one that was not placed still waits (the top line, docs/studio-ui.md "一行の知らせの種類"). Each: its id, its Source,
  // whether it is shown here (`active`), and its request (its route answered and it is shown), or null.
  function trackLoading(value) {
    const objects = [];
    ctx.session.state.stickers.forEach((sticker, index) => {
      if (sticker.placement !== "world" || !is3dFileSource(sticker.source)) return;
      const request = value.space.fileStickers.find((item) => item.id === sticker.id) ?? null;
      objects.push({ id: sticker.id, source: sticker.source, active: !!value.evaluated?.stickers?.[index]?.active, request });
    });
    for (const entry of value.space.upstreamItems ?? []) {
      if (!entry.source || !String(entry.slot).includes(":file:")) continue;
      const id = entry.request?.id ?? String(entry.slot).slice(String(entry.slot).indexOf(":file:") + 6);
      objects.push({ id, source: entry.source, active: !!entry.request, request: entry.request ?? null });
    }
    let waiting = false;
    for (const { id, source, active, request } of objects) {
      const answer = ctx.stageMedia.file3dAnswer?.(source) ?? null;
      // It cannot be read (the route, or its item after the route answered): its wait stops (docs/studio-ui.md "置く間").
      if (answer?.state === "failed" || (request && ctx.stage?.sceneItemError?.(request.url))) {
        reveal.drop(id);
        continue;
      }
      const drawn = !!(request && sceneBox(request.url));
      if (!reveal.has(id)) {
        if (!active || drawn) continue;
        reveal.start(id, { placed: false, box: waitBox(source) });
      } else {
        reveal.box(id, waitBox(source));
      }
      reveal.shown(id, active);
      // A placed one has its own line (add_files.js `adding`).
      if (active && !drawn && !reveal.placed(id)) waiting = true;
    }
    if (ctx.ui.loading3d !== waiting) ctx.ui.loading3d = waiting;
  }
  // The items of the 3D file Stickers show as far as their reveal has gone (0 until they have drawn).
  function revealed(value) {
    const requests = value.space.fileStickers.map((request) => {
      reveal.observe(request.id, !!sceneBox(request.url));
      const factor = reveal.opacity(request.id);
      return factor < 1 ? { ...request, opacity: request.opacity * factor } : request;
    });
    const upstreamItems = (value.space.upstreamItems ?? []).map((entry) => {
      if (!entry.source || !entry.request?.id) return entry;
      reveal.observe(entry.request.id, !!sceneBox(entry.request.url));
      const factor = reveal.opacity(entry.request.id);
      return factor < 1 ? { ...entry, opacity: entry.opacity * factor, request: { ...entry.request, opacity: entry.request.opacity * factor } } : entry;
    });
    return { ...value, space: { ...value.space, fileStickers: requests, upstreamItems } };
  }
  let contentCache = null;
  let lookBoxesText = "null";
  function content() {
    // The node's own Stickers and the upstream layers' working ones: one taken away (Undo, a layer gone) stops its wait.
    const upstreamIds = (ctx.upstream?.working?.() ?? []).flatMap((layer) => layer.sceneState.stickers.map((sticker) => sticker.id));
    reveal.retain(new Set([...ctx.session.state.stickers.map((sticker) => sticker.id), ...upstreamIds]));
    const files = ctx.sceneFiles();
    // [inputs] The port Sticker's 3D media.
    const stickerFiles = ctx.portMedia.files();
    // The `scene` result can arrive while the editor is open (the node ran): its files are part of the key.
    const playing = !!ctx.backgroundVideo?.playback.advancing;
    const running = ctx.comfyRunning.running();
    const key = [ctx.session.state, ctx.view.playhead, ctx.view.imageSizes, ctx.view.animations, files ? files.urls.join("\n") : "", stickerFiles ? stickerFiles.urls.join("\n") : "", ctx.upstreamList(), ctx.upstreamMedia, ctx.paint.revision(), playing, running, ctx.outputLength(), ctx.session.portHandoff];
    if (contentCache && !contentCache.pending && contentCache.key.every((item, index) => item === key[index])) {
      trackLoading(contentCache.value);
      return contentCache.value;
    }
    const value = revealed(stageContent(ctx.session.state, ctx.view.playhead, { media: mediaOf, editorFile: ctx.stageMedia.editorFile, sceneFiles: files, sceneBox, stickerFiles, upstream: ctx.upstream.viewInput(ctx.view.playhead), paintLayers: ctx.paint.layers(), depthColor: ctx.depthColor, playing, idle: !playing && !running, lean: running, length: ctx.outputLength(), shot: ctx.session.portHandoff }));
    trackLoading(value);
    ctx.depthColors.retain(value.space.depthSlots);
    ctx.ui.depthNotice = stageDepthNotice(value, (key) => ctx.stage?.sceneItemError(key) ?? null, (key) => !!sceneBox(key));
    // A World item may still be loading (no box yet): the content is made again on the next frame. [inputs] The port
    // Sticker's 3D item and the upstream items too.
    const pending = value.space.fileStickers.length > 0 || !!value.space.scene || !!value.space.sticker || value.space.upstreamItems.length > 0;
    contentCache = { key, value, pending };
    // The inspector reads the same boxes (editor_view.js `lookBoxes`); written only when they change.
    const boxesText = JSON.stringify(value.lookBoxes ?? null);
    if (boxesText !== lookBoxesText) {
      lookBoxesText = boxesText;
      ctx.view.lookBoxes = value.lookBoxes ?? null;
    }
    return value;
  }
  // The stage's selection (view_camera.js orbitCenter, frameSelectedSphere) of the object of the row `row` (a Sticker
  // id, an upstream object's working id, "camera", or a paint group's `paint_group:` / `raster:` row).
  function selectionOf(row) {
    if (!row) return null;
    if (row === "camera") {
      return { kind: "camera", position: [...cameraAt(ctx.session.state, ctx.view.playhead, ctx.outputLength(), ctx.lookBoxes()).position] };
    }
    // A paint group is on the Sky, as a sky image: it has no sphere of its own (docs/space-and-view.md "Frame Selected").
    if (paintObjectRow(row)) return { kind: "object", sphere: content().sphere };
    const sphere = stickerFrameSphere(ctx.session.state, content(), row, { media: mediaOf, editorFile: ctx.stageMedia.editorFile, sceneBox, upstreamWorking: ctx.upstream.working() });
    return { kind: "object", sphere };
  }

  // The content boxes of what the Camera looks at, as the stage draws them now (stage_content.js `lookBoxes`).
  const lookBoxes = () => content()?.lookBoxes ?? null;
  // A World Sticker's content box once loaded ({ min, max }, its own frame; look_at.js lookAtBoxes `content`): the port
  // Sticker's 3D item or a 3D file's; and an image plane's image size ({ width, height } px) once known (`image`).
  function contentBoxOf(sticker) {
    const { space } = content();
    if (space.sticker?.id === sticker.id && space.sticker.url) return sceneContentBox(space.sticker, sceneBox(space.sticker.url));
    const request = space.fileStickers.find((item) => item?.id === sticker.id);
    return request?.url ? sceneContentBox(request, sceneBox(request.url)) : null;
  }
  function imageSizeOf(sticker) {
    const shown = mediaOf(sticker);
    return shown ? mediaSize(shown.media) : null;
  }
  return { sceneBox, reveal, content, selectionOf, lookBoxes, contentBoxOf, imageSizeOf };
}
