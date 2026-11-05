// Panorama Studio's editor in the new UI (ADR 0044). web_src/main.js always opens it for Panorama Studio, read-only
// too (ADR 0062). It puts together the node (its state_json, its inputs and its result), the
// session (session.js: the working state, the shared selection, Undo), the stage (stage.js) and what it draws of the
// state at the playhead (stage_content.js), the background VIDEO and the playback of the Timeline that drives it
// (pano_media_session.js createBackgroundVideo, as the old editor; pano_video_fps.js for the fps a VIDEO sets), the
// keys, and the Vue shell (StudioEditor.vue with <StudioInspector> and <StudioTimeline>).
//
// Closing (✕, or Escape with nothing left to take back: docs/studio-ui.md "閉じ方") always saves: the state goes to
// state_json the way the old editor writes it (session.stateText: nothing when the text already means it). A node
// whose state_json cannot be read opens read-only and says so, so nothing writes over that text. The view
// it was closed with is kept for the page (pano_node_bridge.js editorSession(node).view) and the next opening starts
// there. Closing also uploads the paint layer the node draws, as the old editor does (paint_upload.js).
//
// Its parts, put together here in this order through one context (`ctx`): what it reads of the node and its inputs
// (editor_inputs.js), the view models (editor_view.js), the background and the playback (editor_playback.js), what the
// stage draws (editor_content.js), Add and the paint tools (editor_tools.js), the edits and writing to the node
// (editor_edits.js), and the keys and the controller StudioEditor.vue calls (editor_controller.js).
import { createApp } from "vue";
import StudioEditor from "../components/studio/StudioEditor.vue";
import { createComfyMediaAdapter } from "../pano_comfy_media.js";
import { releasePanoCanvas } from "../pano_diagnostics.js";
import { readableStateText } from "../pano_editor_state.js";
import { preloadEditorView } from "../pano_editor_view.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { editorSession, noteStudioEditorOpen, peekNodeSurface } from "../pano_node_bridge.js";
import { createStudioSession } from "./session.js";
import { installStudioStylesheet } from "./stylesheet.js";
import { rememberView } from "./view_camera.js";
import { BACKGROUND_INPUTS, createEditorInputs, createEditorSources, linked, nodeState, widgetOf } from "./editor_inputs.js";
import { createEditorUi, createEditorView } from "./editor_view.js";
import { createEditorBackground, createEditorPlayback } from "./editor_playback.js";
import { createEditorContent } from "./editor_content.js";
import { createEditorTools } from "./editor_tools.js";
import { createEditorEdits } from "./editor_edits.js";
import { createEditorController } from "./editor_controller.js";

// The nodes whose editor is open, so a second open does not stack a second window.
const openNodes = new WeakSet();

// Loads what opening the editor waits for, ahead of the first opening: the new UI's stylesheet and the stage's
// three.js chunk (docs/studio-ui.md "読み込み中と空の画面"). A failure here is left for the opening to report.
export function preloadStudioEditor() {
  return Promise.all([installStudioStylesheet(), preloadEditorView()]).then(() => true, () => false);
}

// Lets go of what the editor made. finished: the editor opened, so closing saves the state, keeps the view and uploads
// the paint layer (docs/studio-ui.md "閉じ方"); an opening that threw lets go of what it had made, writing nothing.
function release(ctx, { vueApp, mountHost, flushBeforeQueue, finished }) {
  const { node, nodeSession, api } = ctx;
  ctx.closed = true;
  ctx.playback?.stop();
  if (finished) {
    ctx.save();
    if (ctx.stage) nodeSession.view = rememberView(ctx.stage.destination(), "panorama");
  }
  clearTimeout(ctx.noticeTimer);
  clearTimeout(ctx.doneTimer);
  ctx.addFiles?.close();
  ctx.dropInput?.();
  if (ctx.onKeyDown) window.removeEventListener("keydown", ctx.onKeyDown, true);
  ctx.releaseKeyGuard?.();
  ctx.backgroundVideo?.close();
  ctx.backgroundVideoElement?.remove();
  if (ctx.backgroundStill) releasePanoCanvas(ctx.backgroundStill);
  ctx.paint?.cancel();
  if (finished) ctx.uploadPaintLayerOnClose();
  ctx.stage?.dispose();
  ctx.paint?.dispose();
  ctx.stageMedia?.dispose();
  ctx.depthColors?.dispose();
  ctx.comfyRunning?.dispose();
  if (ctx.onExecuted) api?.removeEventListener?.("executed", ctx.onExecuted);
  ctx.portMedia?.dispose();
  ctx.upstream?.dispose();
  vueApp?.unmount();
  mountHost?.remove();
  openNodes.delete(node);
  nodeSession.open = false;
  if (nodeSession.flushBeforeQueue === flushBeforeQueue) nodeSession.flushBeforeQueue = null;
  noteStudioEditorOpen(node, false);
  peekNodeSurface(node)?.dom?.requestDraw?.();
  node.setDirtyCanvas?.(true, true);
}

// Opens the editor for `node`. app and api are ComfyUI's (web_src/main.js passes them); storage keeps the sizes the
// user gives the regions and the loop switch (localStorage). readOnly opens it without edits (nothing is written).
// Returns { close, session } for the caller (session: session.js's, to read the working state), or null when it is
// open already.
export async function openStudioEditor(node, { app = null, api = null, storage = globalThis.localStorage, readOnly = false } = {}) {
  if (!node || openNodes.has(node)) return null;
  openNodes.add(node);
  try {
    await installStudioStylesheet();
  } catch (error) {
    openNodes.delete(node);
    throw error;
  }
  // A prompt queued while the editor is open runs on the edited state (pano_editor_extension.js).
  const flushBeforeQueue = async () => {
    ctx.save();
  };
  // What an opening that throws on the way made is let go, and the node can open again (release below).
  let vueApp = null;
  let mountHost = null;
  let ctx = null;
  try {
    const media = createComfyMediaAdapter({ app, api });
    // A state_json that cannot be read is kept as it is: the editor opens read-only (docs/studio-ui.md "閉じ方").
    const stateUnreadable = !readableStateText(String(widgetOf(node, "state_json")?.value ?? ""));
    if (stateUnreadable) readOnly = true;
    const nodeSession = editorSession(node);
    const stateWidget = widgetOf(node, "state_json");
    const backgroundLinked = linked(node, BACKGROUND_INPUTS);

    // The editor's context: what its parts (editor_*.js) share, under the names they had as one closure. Each part reads
    // what the parts before it made (lazily, in its callbacks) and adds its own, in the order the editor is put together.
    ctx = {
      node,
      app,
      api,
      storage,
      readOnly,
      media,
      stateUnreadable,
      nodeSession,
      stateWidget,
      backgroundLinked,
      // The session (session.js), made once the upstream layers it edits are (below).
      session: null,
      stage: null,
      closed: false,
      redraw: (reason = DRAW_REASON.STATE) => ctx.stage?.redraw(reason),
      // Counts the upstream layers' pictures that loaded or changed: what the stage draws of them is made again.
      upstreamMedia: 0,
      // The paint's layers for stageEmpty (editor_view.js), read once the paint tools exist (editor_tools.js).
      paintLayers: () => [],
      // The timers of the notices (editor_view.js notice, doneNotice).
      noticeTimer: 0,
      doneTimer: 0,
    };

    // --- What the stage draws, loaded once per source while the editor is open; the inputs (editor_inputs.js).
    Object.assign(ctx, createEditorInputs(ctx));
    ctx.session = createStudioSession({ state: nodeState(node, media), readOnly, upstream: ctx.upstream, handoff: readOnly ? null : ctx.currentHandoff() });
    Object.assign(ctx, createEditorSources(ctx));
    // --- The view model the shell reads (editor_view.js).
    Object.assign(ctx, createEditorView(ctx));
    // --- The background VIDEO and the playback of the Timeline that drives it (editor_playback.js).
    Object.assign(ctx, createEditorPlayback(ctx));
    // --- The content at the playhead and what is selected, for the stage (editor_content.js).
    Object.assign(ctx, createEditorContent(ctx));
    // --- What the stage reports, the background image, and the one-line notice the editor shows itself.
    Object.assign(ctx, createEditorUi(ctx));
    Object.assign(ctx, createEditorBackground(ctx));
    ctx.syncBackground();
    // --- Add and the drop, and the paint tools (editor_tools.js).
    Object.assign(ctx, createEditorTools(ctx));
    // --- Edits, and writing to the node (editor_edits.js).
    Object.assign(ctx, createEditorEdits(ctx));
    // --- The keys while the editor is open, and what StudioEditor.vue calls (editor_controller.js).
    Object.assign(ctx, createEditorController(ctx));

    mountHost = document.createElement("div");
    document.body.appendChild(mountHost);
    ctx.close = () => {
      if (ctx.closed) return;
      release(ctx, { vueApp, mountHost, flushBeforeQueue, finished: true });
    };
    ctx.refreshVideo();
    ctx.sync();
    vueApp = createApp(StudioEditor, { nodeTitle: String(node.title || "Panorama Studio"), ui: ctx.ui, view: ctx.view, storage, controller: ctx.controller });
    vueApp.mount(mountHost);
    // The background VIDEO lives in the page while the editor is open, hidden (an element in the page keeps presenting
    // its frames).
    mountHost.appendChild(ctx.backgroundVideoElement);
    window.addEventListener("keydown", ctx.onKeyDown, true);
    // The node surface lets its VIDEO and textures go while the editor covers it, and the Preview's Scene viewers on
    // the graph stop drawing (docs/preview-node.md), as with the old editor.
    ctx.nodeSession.open = true;
    if (!readOnly) ctx.nodeSession.flushBeforeQueue = flushBeforeQueue;
    noteStudioEditorOpen(node, true);
    peekNodeSurface(node)?.dom?.requestDraw?.();
  } catch (error) {
    // Nothing is saved or uploaded: the editor never opened. The caller gets the error that stopped the opening.
    try {
      if (ctx) release(ctx, { vueApp, mountHost, flushBeforeQueue, finished: false });
    } catch (releaseError) {
      console.warn("[PanoramaStudio] letting go of a failed opening", releaseError);
    } finally {
      openNodes.delete(node);
    }
    throw error;
  }
  const { close, session, paint } = ctx;
  // The stage is handed out for the browser checks (tests/browser/), which read what it draws.
  return { close, session, stage: () => ctx.stage, paint: () => paint };
}