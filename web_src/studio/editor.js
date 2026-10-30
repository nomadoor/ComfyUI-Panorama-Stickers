// Panorama Studio's editor in the new UI (ADR 0044). In development: web_src/main.js opens it only while the
// setting PanoramaSuite.Editor.NewUI is on. It puts together the node (its state_json, its inputs and its result), the
// session (session.js: the working state, the shared selection, Undo), the stage (stage.js) and what it draws of the
// state at the playhead (stage_content.js), the playback of the Timeline (pano_video_playback.js on its clock), the
// keys, and the Vue shell (StudioEditor.vue with <StudioInspector> and <StudioTimeline>).
//
// Closing (✕, or Escape with nothing left to take back: docs/studio-ui.md "閉じ方") always saves: the state goes to
// state_json the way the old editor writes it (session.stateText: nothing when the text already means it). The view
// it was closed with is kept for the page (pano_node_bridge.js editorSession(node).view) and the next opening starts
// there.
import { createApp, markRaw, reactive, shallowReactive } from "vue";
import StudioEditor from "../components/studio/StudioEditor.vue";
import { createComfyMediaAdapter } from "../pano_comfy_media.js";
import { normalizeCoverageValue } from "../pano_editor_state.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { stageOwnsKey } from "../pano_key_focus.js";
import { editorSession, noteStudioEditorOpen, peekNodeSurface } from "../pano_node_bridge.js";
import { isNodeOutputMediaCurrent } from "../pano_preview_video.js";
import { evaluateCamera } from "../pano_scene_eval.js";
import { loadSceneState } from "../pano_scene_state.js";
import { sceneFilesOf, stateAnimationClips } from "../pano_space.js";
import { createVideoPlayback } from "../pano_video_playback.js";
import { groundOf } from "./defaults.js";
import { createStudioSession } from "./session.js";
import { createStage, stageUi } from "./stage.js";
import { createStageMedia, stageContent, stickerFrameSphere } from "./stage_content.js";
import { outputView } from "./stage_view.js";
import { installStudioStylesheet } from "./stylesheet.js";
import { readLoopSetting, writeLoopSetting } from "./timeline_actions.js";
import { spanOf } from "./timeline_model.js";
import { openingView, rememberView } from "./view_camera.js";
import { BOUND_NOTICE_SECONDS } from "./view_scale.js";

// The node's inputs that carry its background, the first linked one shown (the input is `background` after the
// rename in docs/studio-node.md, `bg_media` before it).
const BACKGROUND_INPUTS = ["background", "bg_media"];

// The nodes whose editor is open, so a second open does not stack a second window.
const openNodes = new WeakSet();

function widgetOf(node, name) {
  return node?.widgets?.find((widget) => widget?.name === name) ?? null;
}

function linked(node, names) {
  return (node?.inputs ?? []).some((input) => names.includes(input?.name) && input.link != null);
}

// The node's state v2 (a state that cannot be read opens as the empty state, as the old editor does).
function nodeState(node) {
  try {
    return loadSceneState(String(widgetOf(node, "state_json")?.value ?? ""));
  } catch {
    return loadSceneState(null);
  }
}

const loaded = (image) => !!image?.complete && image.naturalWidth > 0;

// The node's background image, loaded once through its linked input (pano_comfy_media.js): get() is the render's
// background ({ media, revision, coverage }) once it has loaded, null before or without one; state() is "none" (no
// input linked), "loading", "ready" or "failed". A background VIDEO is not played yet.
function nodeBackground(node, media, onChange) {
  let image = null;
  let status = "none";
  if (media.resolvePreferredExactLinkedSource(node, BACKGROUND_INPUTS).src) {
    image = media.loadPreferredExactLinkedImage(node, BACKGROUND_INPUTS, (settled) => {
      status = loaded(settled) ? "ready" : "failed";
      onChange();
    }, `studio-background:${BACKGROUND_INPUTS.join("|")}`);
    // A cached image may have loaded already.
    if (image) status = loaded(image) ? "ready" : "loading";
  }
  const coverage = normalizeCoverageValue(widgetOf(node, "background_range")?.value ?? widgetOf(node, "coverage")?.value);
  return {
    get: () => (status === "ready" ? { media: image, revision: image.currentSrc || image.src, coverage } : null),
    state: () => status,
  };
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
  const media = createComfyMediaAdapter({ app, api });
  const session = createStudioSession({ state: nodeState(node), readOnly });
  const nodeSession = editorSession(node);
  const stateWidget = widgetOf(node, "state_json");
  const sceneLinked = linked(node, ["scene"]);
  const backgroundLinked = linked(node, BACKGROUND_INPUTS);

  let stage = null;
  let closed = false;
  const redraw = (reason = DRAW_REASON.STATE) => stage?.redraw(reason);

  // --- What the stage draws, loaded once per source while the editor is open.
  const stageMedia = createStageMedia({
    assetSource: media.assetSource,
    source: media.source,
    fetchApi: api?.fetchApi ? (path, options) => api.fetchApi(path, options) : null,
    onChange: () => {
      if (closed) return;
      syncMedia();
      redraw(DRAW_REASON.MEDIA);
    },
  });
  // The `scene` input's files in the node's current result (its 3D content), or null.
  const sceneFiles = () => (isNodeOutputMediaCurrent(node, "scene")
    ? sceneFilesOf(media.uiList(node, "pano_scene_files"), media.uiList(node, "pano_scene_meta"), media.source)
    : null);

  // --- The view model the shell reads, replaced field by field after each change (shallow: the state is never
  // changed in place, session.js).
  const view = shallowReactive({
    state: session.state,
    selection: session.selection,
    playhead: 0,
    playing: false,
    loop: readLoopSetting(storage),
    canUndo: false,
    canRedo: false,
    readOnly,
    // What the Timeline knows of the inputs (timeline_model.js ctx `media`): the background as a single image, the
    // `scene` items, the animated 3D files' clips.
    media: {},
    background: backgroundLinked ? { end: null } : null,
    sceneRow: sceneLinked,
    imageSizes: {},
    animations: {},
  });
  const timelineCtx = () => ({ state: session.state, upstream: [], media: view.media });

  function syncMedia() {
    const state = session.state;
    const files = sceneFiles();
    const animations = stateAnimationClips(state, { sceneFiles: files, editorFile: stageMedia.editorFile });
    view.media = { bg: backgroundLinked ? { frames: 1 } : null, sceneItems: files?.urls.length ?? 0, animations };
    view.animations = animations.stickers ?? {};
    view.imageSizes = stageMedia.imageSizes(state);
  }

  // The stage's world: the ground height and the Camera's position at the playhead.
  const world = { ground: groundOf(session.state), camera: outputView(session.state, 0).position };

  function sync() {
    view.state = session.state;
    view.selection = session.selection;
    view.canUndo = session.canUndo;
    view.canRedo = session.canRedo;
    world.ground = groundOf(session.state);
    world.camera = outputView(session.state, view.playhead).position;
    ui.empty = ui.background === "none" && !session.state.stickers.length;
    syncMedia();
    redraw();
  }

  // --- The playback of the Timeline, on its clock (a background VIDEO does not play yet).
  const playback = createVideoPlayback({
    video: null,
    clock: {
      now: () => performance.now(),
      requestFrame: (callback) => requestAnimationFrame(callback),
      cancelFrame: (id) => cancelAnimationFrame(id),
    },
    fps: () => session.state.timeline.fps,
    span: () => spanOf(timelineCtx()),
    loop: () => view.loop,
    onFrame: (frame) => {
      view.playhead = frame;
      world.camera = outputView(session.state, frame).position;
      redraw();
    },
    onCapture: () => {},
    onChange: () => {
      view.playing = playback.playing;
    },
  });

  // --- The content at the playhead and what is selected, for the stage.
  const sceneBox = (url) => stage?.sceneBox(url) ?? null;
  let contentCache = null;
  function content() {
    const files = sceneFiles();
    // The `scene` result can arrive while the editor is open (the node ran): its files are part of the key.
    const key = [session.state, view.playhead, view.imageSizes, view.animations, files ? files.urls.join("\n") : ""];
    if (contentCache && !contentCache.pending && contentCache.key.every((item, index) => item === key[index])) return contentCache.value;
    const value = stageContent(session.state, view.playhead, { media: stageMedia.media, editorFile: stageMedia.editorFile, sceneFiles: files, sceneBox });
    // A World item may still be loading (no box yet): the content is made again on the next frame.
    const pending = value.space.fileStickers.length > 0 || !!value.space.scene;
    contentCache = { key, value, pending };
    return value;
  }
  // The stage's selection (view_camera.js orbitCenter, frameSelectedSphere) of the object of the row `row`.
  function selectionOf(row) {
    if (!row) return null;
    if (row === "camera") {
      const camera = session.state.camera;
      return { kind: "camera", position: camera ? [...evaluateCamera(camera, view.playhead).position] : [0, 0, 0] };
    }
    const sphere = stickerFrameSphere(session.state, content(), row, { media: stageMedia.media, editorFile: stageMedia.editorFile, sceneBox });
    return { kind: "object", sphere };
  }

  // --- What the stage reports, and the one-line notice the editor shows itself.
  const ui = reactive({
    ...stageUi(),
    // What the top-center line says while nothing else does (docs/studio-ui.md "読み込み中と空の画面").
    background: "none",
    empty: false,
  });
  const background = nodeBackground(node, media, () => {
    ui.background = background.state();
    redraw(DRAW_REASON.MEDIA);
  });
  ui.background = background.state();
  ui.empty = ui.background === "none" && !session.state.stickers.length;
  let noticeTimer = 0;
  function notice(text) {
    ui.notice = text;
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => {
      if (ui.notice === text) ui.notice = null;
    }, BOUND_NOTICE_SECONDS * 1000);
  }

  // --- Edits.

  function inspectorEdit(edit) {
    const outcome = session.applyInspector(edit, { playhead: view.playhead, imageSizes: view.imageSizes, animations: view.animations });
    if (outcome.stopPlayback) playback.stop();
    sync();
  }

  function timelineEdit(payload) {
    const outcome = session.applyTimeline(payload);
    if (!outcome.changed) return;
    if (outcome.stopPlayback) playback.stop();
    // A new fps keeps the playhead's time in seconds.
    if (outcome.fps) playback.seek(Math.round(view.playhead * outcome.fps.to / outcome.fps.from));
    sync();
  }

  function historyStep(direction) {
    const outcome = direction < 0 ? session.undo() : session.redo();
    if (!outcome) return;
    playback.stop();
    if (outcome.fps) playback.seek(Math.round(view.playhead * outcome.fps.to / outcome.fps.from));
    sync();
  }

  // Delete: the selected Keyframes first (<StudioTimeline> handleDelete), else the selected object.
  let timeline = null;
  function deleteSelection() {
    if (timeline?.handleDelete()) return;
    const outcome = session.deleteSelectedObject();
    if (outcome.notice) notice(outcome.notice);
    if (outcome.changed) {
      playback.stop();
      sync();
    }
  }

  // --- Writing to the node.

  function save() {
    if (readOnly || !stateWidget) return false;
    const text = session.stateText(node, stateWidget.value);
    if (text === null) return false;
    stateWidget.value = text;
    stateWidget.callback?.(text);
    node.setDirtyCanvas?.(true, true);
    return true;
  }

  // --- Keys while the editor is open: Undo / Redo, Delete, Space. The stage takes the movement keys and Escape.
  let rootElement = null;
  function onKeyDown(event) {
    if (!rootElement || !stageOwnsKey(event, rootElement)) return;
    const mod = event.ctrlKey || event.metaKey;
    const key = String(event.key || "").toLowerCase();
    if (mod && !event.altKey && key === "z") {
      event.preventDefault();
      event.stopPropagation();
      historyStep(event.shiftKey ? 1 : -1);
    } else if (!mod && (event.key === "Delete" || event.key === "Backspace")) {
      event.preventDefault();
      event.stopPropagation();
      deleteSelection();
    } else if (!mod && event.code === "Space" && !event.repeat) {
      event.preventDefault();
      event.stopPropagation();
      playback.toggle();
    }
  }

  // Escape with no view drag to let go (docs/studio-ui.md "閉じ方"): the Keyframe selection, then the object's, then
  // the editor closes.
  function onEscape() {
    if (session.escape()) sync();
    else close();
  }

  // --- What StudioEditor.vue calls.
  const controller = markRaw({
    onStage: ({ canvas, root }) => {
      rootElement = root;
      const output = outputView(session.state, 0);
      const opening = openingView({ memory: nodeSession.view, output, world: { ...world, boxes: [], content: null }, frameAvailable: false });
      stage = createStage({
        canvas,
        root,
        opening,
        output,
        world,
        background: background.get,
        content,
        selected: () => selectionOf(session.selection.row),
        ui,
        onEscape,
      });
      return stage;
    },
    onTimeline: (api) => {
      timeline = api;
    },
    close: () => close(),
    inspectorEdit,
    timelineEdit,
    select: (selection) => {
      session.select(selection);
      sync();
    },
    seek: (frame) => playback.seek(frame),
    play: () => playback.toggle(),
    loop: (on) => {
      view.loop = !!on;
      writeLoopSetting(storage, view.loop);
    },
    frameSelected: (row) => stage?.frameSelected(selectionOf(row)),
    rail: (key) => {
      if (key === "undo") historyStep(-1);
      else if (key === "redo") historyStep(1);
    },
  });

  const mountHost = document.createElement("div");
  document.body.appendChild(mountHost);
  // A prompt queued while the editor is open runs on the edited state (pano_editor_extension.js).
  const flushBeforeQueue = async () => {
    save();
  };
  const close = () => {
    if (closed) return;
    closed = true;
    playback.stop();
    save();
    if (stage) nodeSession.view = rememberView(stage.destination(), "panorama");
    clearTimeout(noticeTimer);
    window.removeEventListener("keydown", onKeyDown, true);
    playback.dispose();
    stage?.dispose();
    stageMedia.dispose();
    vueApp.unmount();
    mountHost.remove();
    openNodes.delete(node);
    nodeSession.open = false;
    if (nodeSession.flushBeforeQueue === flushBeforeQueue) nodeSession.flushBeforeQueue = null;
    noteStudioEditorOpen(node, false);
    peekNodeSurface(node)?.dom?.requestDraw?.();
    node.setDirtyCanvas?.(true, true);
  };
  sync();
  const vueApp = createApp(StudioEditor, { nodeTitle: String(node.title || "Panorama Studio"), ui, view, storage, controller });
  vueApp.mount(mountHost);
  window.addEventListener("keydown", onKeyDown, true);
  // The node surface lets its VIDEO and textures go while the editor covers it, and the Preview's Scene viewers on
  // the graph stop drawing (docs/preview-node.md), as with the old editor.
  nodeSession.open = true;
  if (!readOnly) nodeSession.flushBeforeQueue = flushBeforeQueue;
  noteStudioEditorOpen(node, true);
  peekNodeSurface(node)?.dom?.requestDraw?.();
  return { close, session };
}
