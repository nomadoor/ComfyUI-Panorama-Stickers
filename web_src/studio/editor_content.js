// What the new UI's editor hands the stage to draw (editor.js openStudioEditor puts it together): the content at the
// playhead (stage_content.js stageContent, made again only when what it reads changes), a placed 3D file's reveal, and
// the stage's selection of a row. `ctx` is the editor's context (editor.js).
import { paintObjectRow } from "../pano_paint_objects.js";
import { createLoadReveal } from "./load_reveal.js";
import { cameraAt } from "./camera_state.js";
import { stageContent, stageDepthNotice, stickerFrameSphere } from "./stage_content.js";

// The content at the playhead and what is selected, for the stage.
export function createEditorContent(ctx) {
  const sceneBox = (url) => ctx.stage?.sceneBox(url) ?? null;
  // [add-drop] A placed image draws from its decoded file until its uploaded file has loaded (add_files.js).
  // [inputs] The port Sticker draws the `sticker` input's picture at the playhead.
  const mediaOf = (sticker) => (sticker.source.kind === "port" ? ctx.portMedia.picture(sticker, ctx.view.playhead) : ctx.stageMedia.media(sticker) ?? ctx.addFiles.media(sticker));
  // [add-drop] A placed 3D file's wait and reveal (load_reveal.js): its guide's band while it loads, then it fades in.
  const reducedMotion = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  const reveal = createLoadReveal({ now: () => performance.now(), reducedMotion: () => !!reducedMotion?.matches });
  // The item of a placed 3D file shows as far as its reveal has gone (0 until it has drawn).
  function revealed(value) {
    const requests = value.space.fileStickers.map((request) => {
      reveal.observe(request.id, !!sceneBox(request.url));
      const factor = reveal.opacity(request.id);
      return factor < 1 ? { ...request, opacity: request.opacity * factor } : request;
    });
    return { ...value, space: { ...value.space, fileStickers: requests } };
  }
  let contentCache = null;
  function content() {
    reveal.retain(new Set(ctx.session.state.stickers.map((sticker) => sticker.id)));
    const files = ctx.sceneFiles();
    // [inputs] The port Sticker's 3D media.
    const stickerFiles = ctx.portMedia.files();
    // The `scene` result can arrive while the editor is open (the node ran): its files are part of the key.
    const playing = !!ctx.backgroundVideo?.playback.advancing;
    const running = ctx.comfyRunning.running();
    const key = [ctx.session.state, ctx.view.playhead, ctx.view.imageSizes, ctx.view.animations, files ? files.urls.join("\n") : "", stickerFiles ? stickerFiles.urls.join("\n") : "", ctx.upstreamList(), ctx.upstreamMedia, ctx.paint.revision(), playing, running];
    if (contentCache && !contentCache.pending && contentCache.key.every((item, index) => item === key[index])) return contentCache.value;
    const value = revealed(stageContent(ctx.session.state, ctx.view.playhead, { media: mediaOf, editorFile: ctx.stageMedia.editorFile, sceneFiles: files, sceneBox, stickerFiles, upstream: ctx.upstream.viewInput(ctx.view.playhead), paintLayers: ctx.paint.layers(), depthColor: ctx.depthColor, playing, idle: !playing && !running, lean: running }));
    ctx.depthColors.retain(value.space.depthSlots);
    ctx.ui.depthNotice = stageDepthNotice(value, (key) => ctx.stage?.sceneItemError(key) ?? null, (key) => !!sceneBox(key));
    // A World item may still be loading (no box yet): the content is made again on the next frame. [inputs] The port
    // Sticker's 3D item and the upstream items too.
    const pending = value.space.fileStickers.length > 0 || !!value.space.scene || !!value.space.sticker || value.space.upstreamItems.length > 0;
    contentCache = { key, value, pending };
    return value;
  }
  // The stage's selection (view_camera.js orbitCenter, frameSelectedSphere) of the object of the row `row` (a Sticker
  // id, an upstream object's working id, "camera", or a paint group's `paint_group:` / `raster:` row).
  function selectionOf(row) {
    if (!row) return null;
    if (row === "camera") {
      return { kind: "camera", position: [...cameraAt(ctx.session.state, ctx.view.playhead).position] };
    }
    // A paint group is on the Sky, as a sky image: it has no sphere of its own (docs/space-and-view.md "Frame Selected").
    if (paintObjectRow(row)) return { kind: "object", sphere: content().sphere };
    const sphere = stickerFrameSphere(ctx.session.state, content(), row, { media: mediaOf, editorFile: ctx.stageMedia.editorFile, sceneBox, upstreamWorking: ctx.upstream.working() });
    return { kind: "object", sphere };
  }

  return { sceneBox, reveal, content, selectionOf };
}
