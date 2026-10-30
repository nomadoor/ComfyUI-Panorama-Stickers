// Panorama Studio's editor in the new UI (ADR 0044). In development: web_src/main.js opens it only while the
// setting PanoramaSuite.Editor.NewUI is on. It puts together the node (its state_json, its inputs and its result), the
// session (session.js: the working state, the shared selection, Undo), the stage (stage.js) and what it draws of the
// state at the playhead (stage_content.js), the background VIDEO and the playback of the Timeline that drives it
// (pano_media_session.js createBackgroundVideo, as the old editor; pano_video_fps.js for the fps a VIDEO sets), the
// keys, and the Vue shell (StudioEditor.vue with <StudioInspector> and <StudioTimeline>).
//
// Closing (✕, or Escape with nothing left to take back: docs/studio-ui.md "閉じ方") always saves: the state goes to
// state_json the way the old editor writes it (session.stateText: nothing when the text already means it). A node
// whose state_json cannot be read opens read-only and says so, so nothing writes over that text. The view
// it was closed with is kept for the page (pano_node_bridge.js editorSession(node).view) and the next opening starts
// there.
import { createApp, markRaw, reactive, shallowReactive } from "vue";
import StudioEditor from "../components/studio/StudioEditor.vue";
import { createComfyMediaAdapter } from "../pano_comfy_media.js";
import { createPanoCanvas, createPanoVideo, releasePanoCanvas } from "../pano_diagnostics.js";
import { queuePendingStickerOperation } from "../pano_editor_extension.js";
import { cameraShot, normalizeCoverageValue, readableStateText, setCameraShot } from "../pano_editor_state.js";
import { preloadEditorView } from "../pano_editor_view.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { stageOwnsKey } from "../pano_key_focus.js";
import { editorSession, noteStudioEditorOpen, peekNodeSurface } from "../pano_node_bridge.js";
import {
  backgroundLengthMedia,
  backgroundVideoKeys,
  backgroundVideoMedia,
  createBackgroundVideo,
  isDecodedImageReady,
  mediaRevisionToken,
  videoMetaEntry,
} from "../pano_media_session.js";
import { backgroundBarEnd, backgroundPlace, backgroundShownAt, bgColorBackground } from "../pano_port_media.js";
import { STUDIO_BACKGROUND_INPUT_NAMES, isNodeOutputMediaCurrent, linkedInputType, videoLinked } from "../pano_preview_video.js";
import { evaluateCamera } from "../pano_scene_eval.js";
import { PANO_SCENE_TYPE, ownSceneLinked } from "../pano_upstream.js";
import { loadSceneState } from "../pano_scene_state.js";
import { sceneFilesOf, stateAnimationClips } from "../pano_space.js";
import { sceneAtVideoFps, timelineFpsLocked, videoTimelineFps } from "../pano_video_fps.js";
import { createAddFiles } from "./add_files.js";
import { createLoadReveal } from "./load_reveal.js";
import { cameraOf, defaultCamera, groundOf } from "./defaults.js";
import { createDropInput } from "./drop_input.js";
import { guardEditorKeys } from "./key_guard.js";
import { createPortMedia } from "./port_media.js";
import { createStudioUpstream, upstreamBackground, upstreamNodeName } from "./upstream.js";
import { gizmoModeOfKey, selectedKind } from "./selection_bar.js";
import { createStudioSession } from "./session.js";
import { editorKeyAction } from "./shortcuts.js";
import { createStage, stageUi } from "./stage.js";
import { createStageMedia, stageContent, stickerFrameSphere } from "./stage_content.js";
import { outputView } from "./stage_view.js";
import { HIT_TEST_SETTING_ID, hitTestMode } from "./hit_test.js";
import { installStudioStylesheet } from "./stylesheet.js";
import { readLoopSetting, writeLoopSetting } from "./timeline_actions.js";
import { spanOf } from "./timeline_model.js";
import { openingView, rememberView } from "./view_camera.js";
import { BOUND_NOTICE_SECONDS } from "./view_scale.js";

// The node's inputs that carry its background, the first linked one shown.
const BACKGROUND_INPUTS = STUDIO_BACKGROUND_INPUT_NAMES;

// The nodes whose editor is open, so a second open does not stack a second window.
const openNodes = new WeakSet();

function widgetOf(node, name) {
  return node?.widgets?.find((widget) => widget?.name === name) ?? null;
}

function linked(node, names) {
  return (node?.inputs ?? []).some((input) => names.includes(input?.name) && input.link != null);
}

// The inputs whose VIDEO sets the Timeline fps (pano_video_fps.js timelineFpsLocked).
const VIDEO_FPS_INPUTS = [...BACKGROUND_INPUTS, "sticker"];

// The node's state v2 (a state that cannot be read opens as the empty state, read-only: openStudioEditor), rebased to
// the fps a VIDEO set in the node's current result (docs/timeline-ui.md "タイムラインの表示"). `media` reads the result.
function nodeState(node, media) {
  let scene;
  try {
    scene = loadSceneState(String(widgetOf(node, "state_json")?.value ?? ""));
  } catch {
    scene = loadSceneState(null);
  }
  return sceneAtVideoFps(scene, videoTimelineFps(node, media));
}

const loaded = (image) => !!image?.complete && image.naturalWidth > 0;

// The node's background image, loaded once through its linked input (pano_comfy_media.js): get() is the render's
// background ({ media, revision, coverage }) once it has loaded, null before or without one; state() is "none" (no
// input linked), "loading", "ready" or "failed". `coverage` is the background's span. A background VIDEO is
// createBackgroundVideo's (openStudioEditor), shown in place of the image once it has a picture.
// [inputs] `upstream` is the upstream background standing in (studio/upstream.js upstreamBackground) or null: its image
// comes from the node's result, at its coverage.
function nodeBackground(node, media, onChange, upstream = null) {
  let image = null;
  let status = "none";
  if (upstream) {
    image = media.uiImage(node, upstream.imageKey, new Map(), (settled) => {
      status = loaded(settled) ? "ready" : "failed";
      onChange();
    });
    if (image) status = loaded(image) ? "ready" : "loading";
  } else if (media.resolvePreferredExactLinkedSource(node, BACKGROUND_INPUTS).src) {
    image = media.loadPreferredExactLinkedImage(node, BACKGROUND_INPUTS, (settled) => {
      status = loaded(settled) ? "ready" : "failed";
      onChange();
    }, `studio-background:${BACKGROUND_INPUTS.join("|")}`);
    // A cached image may have loaded already.
    if (image) status = loaded(image) ? "ready" : "loading";
  }
  const coverage = upstream?.coverage ?? normalizeCoverageValue(widgetOf(node, "background_range")?.value ?? widgetOf(node, "coverage")?.value);
  return {
    get: () => (status === "ready" ? { media: image, revision: image.currentSrc || image.src, coverage } : null),
    state: () => status,
    coverage,
  };
}

// Loads what opening the editor waits for, ahead of the first opening: the new UI's stylesheet and the stage's
// three.js chunk (docs/studio-ui.md "読み込み中と空の画面"). A failure here is left for the opening to report.
export function preloadStudioEditor() {
  return Promise.all([installStudioStylesheet(), preloadEditorView()]).then(() => true, () => false);
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
  // A state_json that cannot be read is kept as it is: the editor opens read-only (docs/studio-ui.md "閉じ方").
  const stateUnreadable = !readableStateText(String(widgetOf(node, "state_json")?.value ?? ""));
  if (stateUnreadable) readOnly = true;
  const session = createStudioSession({ state: nodeState(node, media), readOnly });
  const nodeSession = editorSession(node);
  const stateWidget = widgetOf(node, "state_json");
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
  // [inputs] The `sticker` input's media in the node's current result (docs/studio-ui.md "ノードの入力から来た物").
  const portMedia = createPortMedia({
    uiList: (key) => media.uiList(node, key),
    source: media.source,
    current: () => isNodeOutputMediaCurrent(node, "external-sticker"),
    fps: () => session.state.timeline.fps,
    playing: () => !!backgroundVideo?.playback.advancing,
    onChange: () => {
      if (closed) return;
      syncMedia();
      redraw(DRAW_REASON.MEDIA);
    },
  });
  // [inputs] The upstream Scene on `scene` (another Studio's PANO_SCENE): its layers from the node's current result,
  // read-only for now (studio/upstream.js).
  const upstreamList = () => {
    const value = isNodeOutputMediaCurrent(node, "scene") ? media.uiValue(node, "pano_upstream_layers") : null;
    return Array.isArray(value) && value.length ? value : null;
  };
  const graphNodes = () => node.graph?._nodes ?? node.graph?.nodes ?? app?.graph?._nodes ?? [];
  const upstream = createStudioUpstream({
    list: upstreamList,
    linkType: () => linkedInputType(node, "scene"),
    uiList: (key) => media.uiList(node, key),
    state: () => session.state,
    nodeName: (key) => upstreamNodeName(graphNodes(), key),
    mediaSource: media.source,
    mediaAssetSource: media.assetSource,
    revisionOf: mediaRevisionToken,
    playing: () => !!backgroundVideo?.playback.advancing,
    editorFile: (sticker) => stageMedia.editorFile(sticker),
    onMedia: () => {
      if (closed) return;
      upstreamMedia += 1;
      redraw(DRAW_REASON.MEDIA);
    },
  });
  // Counts the upstream layers' pictures that loaded or changed: what the stage draws of them is made again.
  let upstreamMedia = 0;
  const upstreamLinked = () => linkedInputType(node, "scene") === PANO_SCENE_TYPE || !!upstreamList();
  // [inputs] The upstream background standing in while the node's own background is not linked, or null.
  const upstreamBg = () => upstreamBackground({
    uiList: (key) => media.uiList(node, key),
    current: isNodeOutputMediaCurrent(node, "scene"),
    ownLinked: backgroundLinked,
    fps: session.state.timeline.fps,
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
    // The gizmo's mode ("translate", "rotate", "scale"): Move each time the editor opens, never saved.
    gizmoMode: "translate",
    // What the Timeline knows of the inputs (timeline_model.js ctx `media`): the background (its VIDEO or IMAGE batch
    // once its length is known, else a single image), the `scene` items, the animated 3D files' clips.
    media: {},
    background: backgroundLinked ? { end: null, video: false } : null,
    // [inputs] The own `world` content, shown with an upstream Scene's groups of rows too.
    sceneRow: ownSceneLinked({ world: linked(node, ["world"]), scene: linked(node, ["scene"]), upstream: upstreamLinked() }),
    // A VIDEO sets the Timeline fps (pano_video_fps.js).
    fpsLocked: false,
    imageSizes: {},
    animations: {},
    // The stage's tab: "3d" or "camera" (docs/studio-ui.md "Camera タブ"). The 3D tab each time the editor opens.
    tab: "3d",
    // The list of shortcuts is open (docs/studio-ui.md "ショートカットの一覧"): closed each time the editor opens.
    shortcuts: false,
    // [inputs] The size of the port Sticker's media (its vFOV follows it), null before it loads.
    portSize: null,
    // [inputs] The upstream layers: as the Timeline shows them (studio/upstream.js timelineLayers), their working
    // copies for the inspector, and whether the selected object is one of them (shown read-only).
    upstream: [],
    upstreamWorking: [],
    upstreamSelected: false,
  });
  const timelineCtx = () => ({ state: session.state, upstream: view.upstream, media: view.media });

  function syncMedia() {
    const state = session.state;
    const files = sceneFiles();
    const animations = stateAnimationClips(state, { sceneFiles: files, editorFile: stageMedia.editorFile });
    view.media = { bg: backgroundMedia(), sceneItems: files?.urls.length ?? 0, animations, port: portMedia.meta(), upstream: upstream.output() };
    view.portSize = portMedia.size();
    view.upstream = upstream.timelineLayers();
    view.upstreamWorking = upstream.working();
    view.upstreamSelected = String(session.selection.row ?? "").startsWith("upstream:");
    ui.upstreamPending = upstream.pending();
    view.background = backgroundLinked
      ? { end: backgroundBarEnd(state.background.clip, state.timeline.fps, view.media.bg), video: videoLinked(node, BACKGROUND_INPUTS) }
      : null;
    view.fpsLocked = timelineFpsLocked(videoTimelineFps(node, media), node, VIDEO_FPS_INPUTS);
    view.animations = animations.stickers ?? {};
    // [add-drop] A placed image's size is its decoded file's until its uploaded file has loaded.
    view.imageSizes = { ...addFiles.sizes(state), ...stageMedia.imageSizes(state) };
  }

  // The stage's world: the ground height (an upstream layer's while the state has none) and the Camera's position at
  // the playhead.
  const groundNow = () => groundOf(session.state, upstream.working());
  const world = { ground: groundNow(), camera: outputView(session.state, 0).position };

  function sync() {
    view.state = session.state;
    view.selection = session.selection;
    view.canUndo = session.canUndo;
    view.canRedo = session.canRedo;
    world.ground = groundNow();
    world.camera = outputView(session.state, view.playhead).position;
    syncMedia();
    ui.empty = stageEmpty();
    seekMovedBackground();
    redraw();
  }

  // --- The background VIDEO and the playback of the Timeline that drives it (pano_media_session.js, as the old
  // editor): the VIDEO plays with its audio and its presented frames move the playhead; without one, or outside its
  // Clip range and past its end, a clock does. The element is the editor's own, hidden.
  const backgroundVideoElement = createPanoVideo(document, "studio.background");
  backgroundVideoElement.playsInline = true;
  backgroundVideoElement.preload = "auto";
  backgroundVideoElement.crossOrigin = "anonymous";
  backgroundVideoElement.style.cssText = "position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none";
  const backgroundStill = createPanoCanvas({ label: "studio.still" });
  // What the last choose() learned of the VIDEO (backgroundVideoMedia's `source`).
  let videoSource = { ready: false, frameCount: 0, duration: 0 };
  const onVideoNews = () => {
    if (closed) return;
    refreshVideo();
    syncMedia();
    syncBackground();
    redraw(DRAW_REASON.MEDIA);
  };
  const backgroundVideo = createBackgroundVideo({
    video: backgroundVideoElement,
    still: backgroundStill,
    clock: {
      now: () => performance.now(),
      requestFrame: (callback) => requestAnimationFrame(callback),
      cancelFrame: (id) => cancelAnimationFrame(id),
    },
    fps: () => session.state.timeline.fps,
    span: () => spanOf(timelineCtx()),
    loop: () => view.loop,
    // The node's own background is where its Clip range puts it (docs/timeline-ui.md "背景の行").
    // [inputs] An upstream background is where its Studio's Clip range puts it.
    place: () => (backgroundLinked ? backgroundPlace(session.state.background.clip) : upstreamBg() ? backgroundPlace(upstreamBg().place) : null),
    onFrame: (frame) => {
      view.playhead = frame;
      world.camera = outputView(session.state, frame).position;
      redraw();
    },
    onChange: () => {
      view.playing = playback.playing;
      if (closed) return;
      syncBackground();
      redraw(DRAW_REASON.PLAYHEAD);
    },
    onStill: () => {
      if (closed) return;
      syncBackground();
      redraw(DRAW_REASON.MEDIA);
    },
    onReady: onVideoNews,
    onError: onVideoNews,
  });
  const { playback } = backgroundVideo;

  // Picks the background VIDEO (the node's own result, then a video file the background input loads directly) and
  // loads it; a result that came since the last call is picked up here.
  function refreshVideo() {
    // [inputs] An upstream background's VIDEO is in the result under its own keys; no file stands in for it.
    const upstreamVideo = upstreamBg();
    const keys = backgroundVideoKeys({ nodeName: String(node?.comfyClass || node?.type || ""), upstream: upstreamVideo, type: "stickers" });
    const own = upstreamVideo || isNodeOutputMediaCurrent(node, "background") ? media.uiList(node, keys.videoKey)[0] || null : null;
    const chosen = backgroundVideo.choose({
      own: media.source(own),
      file: upstreamVideo ? "" : media.linkedVideoFile(node, BACKGROUND_INPUTS),
      meta: () => videoMetaEntry(media.uiValue(node, keys.metaKey)),
      fps: session.state.timeline.fps,
    });
    backgroundVideo.load(chosen.src, { loop: false, muted: false, volume: 1 });
    videoSource = { ready: !!chosen.src, frameCount: chosen.frameCount, duration: chosen.duration };
  }

  // The node's own background as the Auto length reads it (pano_media_session.js).
  function backgroundMedia() {
    // [inputs] An upstream background is in the upstream length already (pano_upstream_frames).
    if (upstreamBg()) return null;
    const video = videoLinked(node, BACKGROUND_INPUTS);
    return backgroundLengthMedia(backgroundVideoMedia(videoSource, video), { linked: backgroundLinked, videoLinked: video });
  }

  // A moved, trimmed or restored background Clip range changes the VIDEO's time at the playhead: it is sought again.
  let backgroundClipKey = null;
  function seekMovedBackground() {
    const clip = session.state.background.clip;
    const key = `${clip.start}:${clip.in}:${clip.duration}`;
    if (backgroundClipKey !== null && key !== backgroundClipKey && backgroundVideo.source && !playback.playing) playback.seek(view.playhead);
    backgroundClipKey = key;
  }

  // The node's background color (its `bg_color` setting, "#00ff00" when it is missing), as "#rrggbb".
  const nodeBackgroundColor = () => String((widgetOf(node, "background_color") ?? widgetOf(node, "bg_color"))?.value || "#00ff00");

  // The background the stage draws at the playhead: bg_color outside its Clip range and media (as the node's output),
  // else the VIDEO or its still once one has a picture, else the image.
  function stageBackground() {
    const state = session.state;
    if (backgroundLinked && !backgroundShownAt(state.background.clip, view.playhead, state.timeline.fps, view.media.bg ?? null)) {
      return bgColorBackground(nodeBackgroundColor());
    }
    // [inputs] An upstream background shows inside its Studio's Clip range and media, its bg_color outside them (an
    // upstream VIDEO ends at its duration, docs/timeline-ui.md "背景の行").
    const up = upstreamBg();
    if (up && !backgroundShownAt(up.place, view.playhead, state.timeline.fps, backgroundVideoMedia(videoSource, true), true)) {
      return bgColorBackground(up.color ?? nodeBackgroundColor());
    }
    const shown = backgroundVideo.displaySource();
    if (shown && isDecodedImageReady(shown)) {
      // The VIDEO and its still are one source, so a seek keeps the frame before (pano_three_view.js).
      return { media: shown, revision: mediaRevisionToken(shown), coverage: background.coverage, source: backgroundVideo.source };
    }
    return background.get();
  }

  // Play / pause (the play button, Space), and a seek: a VIDEO that came with a result since the last one is picked up.
  function togglePlayback() {
    refreshVideo();
    playback.toggle();
  }
  function seek(frame) {
    refreshVideo();
    playback.seek(frame);
  }

  // --- The content at the playhead and what is selected, for the stage.
  const sceneBox = (url) => stage?.sceneBox(url) ?? null;
  // [add-drop] A placed image draws from its decoded file until its uploaded file has loaded (add_files.js).
  // [inputs] The port Sticker draws the `sticker` input's picture at the playhead.
  const mediaOf = (sticker) => (sticker.source.kind === "port" ? portMedia.picture(sticker, view.playhead) : stageMedia.media(sticker) ?? addFiles.media(sticker));
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
    reveal.retain(new Set(session.state.stickers.map((sticker) => sticker.id)));
    const files = sceneFiles();
    // [inputs] The port Sticker's 3D media.
    const stickerFiles = portMedia.files();
    // The `scene` result can arrive while the editor is open (the node ran): its files are part of the key.
    const key = [session.state, view.playhead, view.imageSizes, view.animations, files ? files.urls.join("\n") : "", stickerFiles ? stickerFiles.urls.join("\n") : "", upstreamList(), upstreamMedia];
    if (contentCache && !contentCache.pending && contentCache.key.every((item, index) => item === key[index])) return contentCache.value;
    const value = revealed(stageContent(session.state, view.playhead, { media: mediaOf, editorFile: stageMedia.editorFile, sceneFiles: files, sceneBox, stickerFiles, upstream: upstream.viewInput(view.playhead) }));
    // A World item may still be loading (no box yet): the content is made again on the next frame. [inputs] The port
    // Sticker's 3D item and the upstream items too.
    const pending = value.space.fileStickers.length > 0 || !!value.space.scene || !!value.space.sticker || value.space.upstreamItems.length > 0;
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
    const sphere = stickerFrameSphere(session.state, content(), row, { media: mediaOf, editorFile: stageMedia.editorFile, sceneBox });
    return { kind: "object", sphere };
  }

  // --- What the stage reports, and the one-line notice the editor shows itself.
  const ui = reactive({
    ...stageUi(),
    // What the top-center line says while nothing else does (docs/studio-ui.md "読み込み中と空の画面").
    background: "none",
    empty: false,
    // [inputs] A Scene is linked to `scene` and the node's result does not have it yet.
    upstreamPending: false,
    // [add-drop] Add and the drop (add_files.js): the Sky / World choice, the drag's mark, a placed 3D file loading,
    // and why the last file could not be placed.
    choice: null,
    drop: null,
    adding: false,
    addWarning: null,
    // The node's state_json cannot be read: the editor is read-only (notice_line.js).
    stateUnreadable,
  });
  const background = nodeBackground(node, media, () => {
    syncBackground();
    redraw(DRAW_REASON.MEDIA);
  }, upstreamBg());
  // What the top-center line knows of the background: the VIDEO's while one is loaded, else the image's.
  function syncBackground() {
    const image = background.state();
    if (backgroundVideo.source) ui.background = backgroundVideo.displaySource() ? "ready" : "loading";
    else ui.background = image === "ready" || !backgroundVideo.failed ? image : "failed";
    ui.empty = stageEmpty();
  }
  // [inputs] The stage is empty with no background, no object of its own and no upstream layer.
  function stageEmpty() {
    return ui.background === "none" && !session.state.stickers.length && !view.upstream.length;
  }
  syncBackground();
  let noticeTimer = 0;
  function notice(text) {
    ui.notice = text;
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => {
      if (ui.notice === text) ui.notice = null;
    }, BOUND_NOTICE_SECONDS * 1000);
  }

  // [add-drop] Add and the drop (docs/studio-ui.md "Add とドロップの見せ方"): files become Stickers where they land.
  // Uploads to ComfyUI's input go through its API; a queued prompt waits for them. One still uploading when the editor
  // closes is taken over by the node's editor opened again before it ends; else it is written when it settles.
  const addFiles = createAddFiles({
    session,
    ui,
    view: () => stage?.landing ?? null,
    ground: () => groundNow(),
    content: () => content(),
    sceneBox,
    playhead: () => view.playhead,
    fetchApi: api?.fetchApi ? (path, options) => api.fetchApi(path, options) : null,
    route: (source) => stageMedia.request(source),
    queue: (id, operation) => queuePendingStickerOperation(node, id, operation),
    changed: () => sync(),
    stopPlayback: () => playback.stop(),
    notice,
    late: () => save(),
    pending: nodeSession.placements,
    reveal,
  });
  let dropInput = () => {};

  // --- Edits.

  function inspectorEdit(edit) {
    // A wheel run of the Camera tab's Frame view still waiting to be one Undo step is one first.
    stage?.settle();
    const outcome = session.applyInspector(edit, { playhead: view.playhead, imageSizes: view.imageSizes, animations: view.animations });
    if (outcome.stopPlayback) playback.stop();
    sync();
  }

  function timelineEdit(payload) {
    stage?.settle();
    const outcome = session.applyTimeline(payload);
    if (!outcome.changed) return;
    if (outcome.stopPlayback) playback.stop();
    // A new fps keeps the playhead's time in seconds.
    if (outcome.fps) playback.seek(Math.round(view.playhead * outcome.fps.to / outcome.fps.from));
    sync();
  }

  function historyStep(direction) {
    stage?.settle();
    const outcome = direction < 0 ? session.undo() : session.redo();
    if (!outcome) return;
    playback.stop();
    if (outcome.fps) playback.seek(Math.round(view.playhead * outcome.fps.to / outcome.fps.from));
    sync();
  }

  // Delete: the selected Keyframes first (<StudioTimeline> handleDelete), else the selected object.
  let timeline = null;
  // The copied Keyframes (docs/timeline-ui.md "Keyframe のコピーと貼り付け"): the editor's own, kept while it is open.
  let keyClipboard = null;
  // The keys "copy-keys", "cut-keys" and "paste-keys" (shortcuts.js): returns whether the editor took the key.
  function keyClipboardKey(action) {
    if (action === "paste-keys") return !!keyClipboard && !!timeline?.pasteKeys(keyClipboard);
    const copied = timeline?.copyKeys() ?? null;
    if (!copied) return false;
    keyClipboard = copied;
    if (action === "cut-keys") timeline.handleDelete();
    return true;
  }
  function deleteSelection() {
    if (timeline?.handleDelete()) return;
    const outcome = session.deleteSelectedObject();
    if (outcome.notice) notice(outcome.notice);
    if (outcome.changed) {
      playback.stop();
      sync();
    }
  }

  // --- The stage's edits of the selected object and the bar at the bottom center (docs/studio-ui.md "下の中央のバー").

  // An outcome of the session's object edits: playback stops on a drag's first change, and the views follow.
  function objectOutcome(outcome) {
    if (!outcome.changed) return;
    if (outcome.stopPlayback || outcome.history) playback.stop();
    sync();
  }

  const objectEdits = {
    live: (apply) => objectOutcome(session.gesture(apply)),
    commit: () => objectOutcome(session.commitGesture()),
    cancel: () => objectOutcome(session.cancelGesture()),
  };

  // --- The Camera tab (docs/studio-ui.md "Camera タブ"): the Frame view's moves of the Camera, written to its Lanes by
  // the recording rule (pano_editor_state.js setCameraShot) as one drag of the session (one Undo step at its end).
  const cameraEdits = {
    live: (pose) => objectOutcome(session.gesture((draft) => {
      draft.camera ??= defaultCamera();
      if (draft.camera.locked === true) return false;
      const base = cameraShot(draft.camera, view.playhead);
      // A move back onto the start writes nothing, and the state is the start again (each move starts from it).
      setCameraShot(draft.camera, view.playhead, { ...base, position: [...pose.position], yaw_deg: pose.yaw_deg, pitch_deg: pose.pitch_deg }, base);
      return true;
    })),
    commit: () => objectOutcome(session.commitGesture()),
    cancel: () => objectOutcome(session.cancelGesture()),
  };
  // The frame box the shell laid out (StudioCameraFrame.vue's rect, the stage's CSS px), and the canvas in it that
  // shows the live ERP.
  let frameRect = null;
  let erpCanvas = null;
  // The Output window's canvases while it is open ({ frame, erp }), else null.
  let outputCanvases = null;
  // [inputs] An upstream background's bg_color while it stands in.
  const backgroundColor = () => parseInt((upstreamBg()?.color ?? nodeBackgroundColor()).replace("#", ""), 16) || 0;
  const cameraTab = {
    tab: () => view.tab,
    mode: () => (cameraOf(session.state).projection === "erp" ? "panorama" : "frame"),
    shot: () => cameraShot(cameraOf(session.state), view.playhead),
    erpRange: () => (cameraOf(session.state).erp_range === 180 ? 180 : 360),
    frame: () => frameRect,
    erpCanvas: () => erpCanvas,
    movable: () => !readOnly && cameraOf(session.state).locked !== true,
    backgroundColor,
    output: () => outputCanvases,
    edits: cameraEdits,
  };

  // The left column's Camera button (docs/studio-ui.md "エディタの中の Camera"): the Camera to the 3D tab's view, as one
  // Undo step (Panorama mode switching to Frame). The view does not move.
  function cameraToView() {
    if (view.tab !== "3d" || !stage) return;
    stage.settle();
    objectOutcome(session.cameraToView(stage.pose(), view.playhead));
  }

  function setTab(tab) {
    if (tab !== "3d" && tab !== "camera") return;
    if (view.tab === tab) return;
    view.tab = tab;
    // [add-drop] The Sky / World choice is the 3D tab's: it closes with the tab.
    addFiles.cancelChoice();
    redraw();
  }

  function selectObject(row) {
    if (session.selectObject(row)) sync();
  }

  function setGizmoMode(mode) {
    if (!mode || view.gizmoMode === mode) return;
    view.gizmoMode = mode;
    redraw();
  }

  function barPress(key) {
    if (key.startsWith("gizmo:")) setGizmoMode(key.slice("gizmo:".length));
    else if (key === "lock") objectOutcome(session.toggleLock());
    else if (key === "duplicate") objectOutcome(session.duplicateSelected());
    else if (key === "front" || key === "back") objectOutcome(session.orderSelected(key));
    else if (key === "revert") objectOutcome(session.revertSelected({ playhead: view.playhead, imageSizes: view.imageSizes, animations: view.animations }));
    else if (key === "delete") deleteSelection();
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

  // --- Keys while the editor is open: Undo / Redo, Delete, Space, 1 / 2 / 3, the table of shortcuts.js, the Keyframes'
  // copy, cut and paste. The stage takes the movement keys and Escape.
  let rootElement = null;
  let releaseKeyGuard = () => {};
  function onKeyDown(event) {
    if (!rootElement || !stageOwnsKey(event, rootElement)) return;
    const action = editorKeyAction(event);
    if (!action || action === "escape") return;
    if (action === "copy-keys" || action === "cut-keys" || action === "paste-keys") {
      // Not taken, C and X keep the browser's copy of selected text; V never pastes (nothing outside a field takes it).
      if (!keyClipboardKey(action) && action !== "paste-keys") return;
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (action.startsWith("gizmo:")) {
      // The gizmo's Move, Rotate, Scale for the selected object that has them.
      const mode = action.slice("gizmo:".length);
      if (gizmoModeOfKey(selectedKind(session.state, session.selection.row), event.key) !== mode) return;
      event.preventDefault();
      event.stopPropagation();
      setGizmoMode(mode);
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    if (action === "undo") historyStep(-1);
    else if (action === "redo") historyStep(1);
    else if (action === "delete") deleteSelection();
    else if (action === "play") togglePlayback();
    else if (action === "shortcuts") view.shortcuts = !view.shortcuts;
  }

  // Escape with no view drag to let go (docs/studio-ui.md "閉じ方"): the Sky / World choice, the list of shortcuts, the
  // Keyframe selection, then the object's, then the editor closes.
  function onEscape() {
    // [add-drop] Step 3: the Sky / World choice closes, placing nothing.
    if (addFiles.escape()) return;
    // Step 4: the list of shortcuts closes.
    if (view.shortcuts) {
      view.shortcuts = false;
      return;
    }
    if (session.escape()) sync();
    else close();
  }

  // --- What StudioEditor.vue calls.
  const controller = markRaw({
    onStage: ({ canvas, overlay = null, root }) => {
      rootElement = root;
      // No key or clipboard event of the editor reaches ComfyUI behind it (docs/studio-ui.md "キーとクリップボードを
      // ComfyUI に渡さない").
      releaseKeyGuard();
      releaseKeyGuard = guardEditorKeys(root);
      const output = outputView(session.state, 0);
      const opening = openingView({ memory: nodeSession.view, output, world: { ...world, boxes: [], content: null }, frameAvailable: false });
      stage = createStage({
        canvas,
        overlay,
        objects: {
          state: () => session.state,
          playhead: () => view.playhead,
          selection: () => session.selection.row,
          select: selectObject,
          edits: objectEdits,
          mode: () => view.gizmoMode,
          tab: () => view.tab,
          readOnly: () => readOnly,
          loading: reveal,
          // A temporary dev comparison of how the object under the pointer is found (hit_test.js).
          hitMode: () => hitTestMode(app?.ui?.settings?.getSettingValue?.(HIT_TEST_SETTING_ID)),
        },
        cameraTab,
        root,
        opening,
        output,
        world,
        background: stageBackground,
        content,
        selected: () => selectionOf(session.selection.row),
        ui,
        onEscape,
        motion: reveal,
      });
      // [add-drop] Files dragged over the stage's window.
      dropInput = createDropInput({ element: canvas.parentElement, canvas, root, add: addFiles, takes: () => !readOnly && view.tab === "3d" });
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
    seek: (frame) => seek(frame),
    play: () => togglePlayback(),
    loop: (on) => {
      view.loop = !!on;
      writeLoopSetting(storage, view.loop);
    },
    frameSelected: (row) => stage?.frameSelected(selectionOf(row)),
    setTab,
    // The Camera tab's frame box moved or resized, and the canvas that shows the live ERP in it (null when it goes).
    frameRect: (rect) => {
      frameRect = rect;
      redraw(DRAW_REASON.RESIZE);
    },
    erpCanvas: (element) => {
      erpCanvas = element ?? null;
      redraw(DRAW_REASON.RESIZE);
    },
    // The Output window opened, folded or resized: its canvases ({ frame, erp }, null while folded).
    output: (canvases) => {
      outputCanvases = canvases && (canvases.frame || canvases.erp) ? canvases : null;
      redraw(DRAW_REASON.RESIZE);
    },
    bar: barPress,
    rail: (key) => {
      if (key === "undo") historyStep(-1);
      else if (key === "redo") historyStep(1);
      else if (key === "camera") cameraToView();
    },
    // [add-drop] The files picked with Add, and the Sky / World choice (StudioPlaceChoice.vue).
    addFiles: (files) => addFiles.pick(files),
    place: (placement) => addFiles.choose(placement),
    cancelPlace: () => addFiles.cancelChoice(),
    // The list of shortcuts opened or closed ("?", a press outside it).
    shortcuts: (open) => {
      view.shortcuts = !!open;
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
    addFiles.close();
    dropInput();
    window.removeEventListener("keydown", onKeyDown, true);
    releaseKeyGuard();
    backgroundVideo.close();
    backgroundVideoElement.remove();
    releasePanoCanvas(backgroundStill);
    stage?.dispose();
    stageMedia.dispose();
    portMedia.dispose();
    upstream.dispose();
    vueApp.unmount();
    mountHost.remove();
    openNodes.delete(node);
    nodeSession.open = false;
    if (nodeSession.flushBeforeQueue === flushBeforeQueue) nodeSession.flushBeforeQueue = null;
    noteStudioEditorOpen(node, false);
    peekNodeSurface(node)?.dom?.requestDraw?.();
    node.setDirtyCanvas?.(true, true);
  };
  refreshVideo();
  sync();
  const vueApp = createApp(StudioEditor, { nodeTitle: String(node.title || "Panorama Studio"), ui, view, storage, controller });
  vueApp.mount(mountHost);
  // The background VIDEO lives in the page while the editor is open, hidden (an element in the page keeps presenting
  // its frames).
  mountHost.appendChild(backgroundVideoElement);
  window.addEventListener("keydown", onKeyDown, true);
  // The node surface lets its VIDEO and textures go while the editor covers it, and the Preview's Scene viewers on
  // the graph stop drawing (docs/preview-node.md), as with the old editor.
  nodeSession.open = true;
  if (!readOnly) nodeSession.flushBeforeQueue = flushBeforeQueue;
  noteStudioEditorOpen(node, true);
  peekNodeSurface(node)?.dom?.requestDraw?.();
  // The stage is handed out for the browser checks (tests/browser/), which read what it draws.
  return { close, session, stage: () => stage };
}
