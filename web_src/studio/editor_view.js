// The view models the new UI's editor hands its Vue shell (editor.js openStudioEditor puts it together): `view` (the
// working state, the playhead, the inputs, the tools; replaced field by field after each change) with what keeps it in
// step with the session, and `ui` (what the stage reports, and the one-line notices the editor shows itself). `ctx` is
// the editor's context (editor.js).
import { reactive, shallowReactive } from "vue";
import { studioSizeWidgets } from "../pano_studio_status.js";
import { backgroundBarEnd } from "../pano_port_media.js";
import { videoLinked } from "../pano_preview_video.js";
import { ownSceneLinked } from "../pano_upstream.js";
import { stateAnimationClips } from "../pano_space.js";
import { timelineFpsLocked, videoTimelineFps } from "../pano_video_fps.js";
import { groundOf } from "./defaults.js";
import { linkedInputNames, stageEmpty as emptyStage } from "./notice_line.js";
import { stageUi } from "./stage.js";
import { outputView } from "./stage_view.js";
import { readLoopSetting } from "./timeline_actions.js";
import { spanOf } from "./timeline_model.js";
import { BOUND_NOTICE_SECONDS } from "./view_scale.js";
import { BACKGROUND_INPUTS, linked, widgetOf, VIDEO_FPS_INPUTS } from "./editor_inputs.js";

// The view model and the stage's world, and sync() / syncMedia() that bring them up to date.
export function createEditorView(ctx) {
  // --- The view model the shell reads, replaced field by field after each change (shallow: the state is never
  // changed in place, session.js).
  const view = shallowReactive({
    state: ctx.session.state,
    selection: ctx.session.selection,
    playhead: 0,
    playing: false,
    loop: readLoopSetting(ctx.storage),
    canUndo: false,
    canRedo: false,
    readOnly: ctx.readOnly,
    // The gizmo's mode ("translate", "rotate", "scale"): Move each time the editor opens, never saved.
    gizmoMode: "translate",
    // What the Timeline knows of the inputs (timeline_model.js ctx `media`): the background (its VIDEO or IMAGE batch
    // once its length is known, else a single image), the `scene` items, the animated 3D files' clips.
    media: {},
    background: ctx.backgroundLinked ? { end: null, video: false } : null,
    // [inputs] The own `world` content, shown with an upstream Scene's groups of rows too.
    sceneRow: ownSceneLinked({ world: linked(ctx.node, ["world"]), scene: linked(ctx.node, ["scene"]), upstream: ctx.upstreamLinked() }),
    // A VIDEO sets the Timeline fps (pano_video_fps.js).
    fpsLocked: false,
    imageSizes: {},
    animations: {},
    // The stage's tab: "3d" or "camera" (docs/studio-ui.md "Camera タブ"). The 3D tab each time the editor opens.
    tab: "3d",
    // The node's `megapixels` and `multiple` when the editor opened, for the Output window's line (docs/studio-ui.md
    // "Output の小窓": the editor is modal, so they do not change while it is open).
    sizeWidgets: studioSizeWidgets((name) => widgetOf(ctx.node, name)?.value),
    // The list of shortcuts is open (docs/studio-ui.md "ショートカットの一覧"): closed each time the editor opens.
    shortcuts: false,
    // [inputs] The size of the port Sticker's media (its vFOV follows it), null before it loads.
    portSize: null,
    // [inputs] The Pose handoff the port Sticker is shown with (session.portHandoff), for the inspector's reset and the
    // bar's Back to source.
    portHandoff: ctx.session.portHandoff,
    // [inputs] The upstream layers: as the Timeline shows them (studio/upstream.js timelineLayers), and their working
    // copies for the inspector and the bar.
    upstream: [],
    upstreamWorking: [],
    // The left column's tool ("cursor", "paint", "mask"; docs/studio-ui.md "左の列"): Cursor each time the editor
    // opens. `paint` is the bar of a painting tool (paint_bar.js paintBar) or null; `confirm` the question a Clear asks
    // ({ title, body, confirm, layer }) while it waits for the answer.
    tool: "cursor",
    paint: null,
    confirm: null,
  });
  const timelineCtx = () => ({ state: ctx.session.state, upstream: view.upstream, media: view.media });

  function syncMedia() {
    const state = ctx.session.state;
    const files = ctx.sceneFiles();
    const animations = stateAnimationClips(state, { sceneFiles: files, editorFile: ctx.stageMedia.editorFile });
    view.media = { bg: ctx.backgroundMedia(), sceneItems: files?.urls.length ?? 0, animations, port: ctx.portMedia.meta(), upstream: ctx.upstream.output() };
    view.portSize = ctx.portMedia.size();
    view.upstream = ctx.upstream.timelineLayers();
    view.upstreamWorking = ctx.upstream.working();
    ctx.ui.upstreamPending = ctx.upstream.pending();
    view.background = ctx.backgroundLinked
      ? { end: backgroundBarEnd(state.background.clip, state.timeline.fps, view.media.bg), video: videoLinked(ctx.node, BACKGROUND_INPUTS) }
      : null;
    view.fpsLocked = timelineFpsLocked(videoTimelineFps(ctx.node, ctx.media), ctx.node, VIDEO_FPS_INPUTS);
    view.animations = animations.stickers ?? {};
    // [add-drop] A placed image's size is its decoded file's until its uploaded file has loaded.
    view.imageSizes = { ...ctx.addFiles.sizes(state), ...ctx.stageMedia.imageSizes(state) };
    keepPlayheadInSpan();
  }

  // The playhead never goes past the last frame: a span that got shorter (the length field, Undo, an Auto length after a
  // delete or a new run result) brings it back to the last frame (docs/timeline-ui.md "タイムラインの長さ"). Every
  // change of what the span reads (the state, the inputs' lengths, the upstream layers) comes through syncMedia. While
  // it plays, the playback keeps its frame inside the span itself (pano_video_playback.js). While a gesture is under way
  // (a Timeline drag keeps the range it started with) it waits: the sync that commits or cancels the gesture brings it in.
  function keepPlayheadInSpan() {
    if (view.playing || ctx.session.gesturing) return;
    const last = spanOf(timelineCtx()) - 1;
    if (view.playhead > last) ctx.playback?.seek(last);
  }

  // The stage's world: the ground height (an upstream layer's while the state has none) and the Camera's position at
  // the playhead.
  const groundNow = () => groundOf(ctx.session.state, ctx.upstream.working());
  const world = { ground: groundNow(), camera: outputView(ctx.session.state, 0).position };

  function sync() {
    // [inputs] An upstream object gone with a new result is selected no more.
    ctx.session.keepSelection();
    view.state = ctx.session.state;
    view.selection = ctx.session.selection;
    view.canUndo = ctx.session.canUndo;
    view.canRedo = ctx.session.canRedo;
    view.portHandoff = ctx.session.portHandoff;
    world.ground = groundNow();
    world.camera = outputView(ctx.session.state, view.playhead).position;
    syncMedia();
    ctx.ui.empty = ctx.stageEmpty();
    ctx.seekMovedBackground();
    ctx.redraw();
  }

  return { view, timelineCtx, syncMedia, groundNow, world, sync };
}

// What the stage reports and the notices (the background image comes between: editor_playback.js).
export function createEditorUi(ctx) {
  // --- What the stage reports, and the one-line notice the editor shows itself.
  const ui = reactive({
    ...stageUi(),
    // What the top-center line says while nothing else does (docs/studio-ui.md "読み込み中と空の画面").
    background: "none",
    empty: false,
    // [inputs] A Scene is linked to `scene` and the node's result does not have it yet.
    upstreamPending: false,
    // The line of the depth grids drawn (stage_content.js stageDepthNotice): "" without one.
    depthNotice: "",
    // [add-drop] Add and the drop (add_files.js): the Sky / World choice, the drag's mark, a placed 3D file loading,
    // and why the last file could not be placed.
    choice: null,
    drop: null,
    adding: false,
    addWarning: null,
    // The node's state_json cannot be read: the editor is read-only (notice_line.js).
    stateUnreadable: ctx.stateUnreadable,
    // The short notice of an operation that was done (notice_line.js), or null.
    done: null,
    // Counts the Camera button's moves: each new count runs the stage's viewfinder cue once (StudioCameraCue.vue).
    cameraCue: 0,
  });
  // The stage is empty with nothing drawn and no input bringing anything (notice_line.js stageEmpty). The paint's
  // layers are read once the paint tools exist (editor_tools.js).
  function stageEmpty() {
    return emptyStage({
      background: ui.background,
      stickers: ctx.session.state.stickers.length,
      paint: ctx.paintLayers().length,
      linked: linkedInputNames(ctx.node),
      worldItems: ctx.sceneFiles()?.urls.length ?? 0,
      upstream: ctx.view.upstream.length,
    });
  }
  function notice(text) {
    ui.notice = text;
    clearTimeout(ctx.noticeTimer);
    ctx.noticeTimer = setTimeout(() => {
      if (ui.notice === text) ui.notice = null;
    }, BOUND_NOTICE_SECONDS * 1000);
  }
  // The short notice of an operation that was done: shown as long as the notices above.
  function doneNotice(text) {
    ui.done = text;
    clearTimeout(ctx.doneTimer);
    ctx.doneTimer = setTimeout(() => {
      if (ui.done === text) ui.done = null;
    }, BOUND_NOTICE_SECONDS * 1000);
  }

  return { ui, stageEmpty, notice, doneNotice };
}
