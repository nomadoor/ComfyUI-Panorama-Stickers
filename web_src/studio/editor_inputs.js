// What the new UI's editor reads of the node (editor.js openStudioEditor puts it together): its widgets and linked
// inputs, its state v2, its background image, and what its inputs bring while the editor is open (the stage's media,
// the `sticker` input's, the upstream Scene's layers, the Pose handoff, the depth grids' colors, whether ComfyUI runs,
// which background shows, the `scene` input's files). `ctx` is the editor's context (editor.js).
import { watchComfyRunning } from "../pano_comfy_running.js";
import { createPanoCanvas, createPanoVideo, releasePanoCanvas } from "../pano_diagnostics.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { mediaRevisionToken } from "../pano_media_session.js";
import { chooseBackground } from "../pano_background_choice.js";
import { nodePortHandoff } from "../pano_port_handoff.js";
import { STUDIO_BACKGROUND_INPUT_NAMES, isNodeOutputMediaCurrent, linkedInputType } from "../pano_preview_video.js";
import { PANO_SCENE_TYPE } from "../pano_upstream.js";
import { loadSceneState } from "../pano_scene_state.js";
import { sceneFilesOf } from "../pano_space.js";
import { sceneAtVideoFps, videoTimelineFps } from "../pano_video_fps.js";
import { createPortMedia } from "./port_media.js";
import { linkedInputNames } from "./notice_line.js";
import { createStudioUpstream, upstreamNodeName } from "./upstream.js";
import { loadNodeInputImage } from "./node_image.js";
import { createDepthColors } from "../pano_depth_color.js";
import { createStageMedia } from "./stage_content.js";
// The node's inputs that carry its background, the first linked one shown.
export const BACKGROUND_INPUTS = STUDIO_BACKGROUND_INPUT_NAMES;

export function widgetOf(node, name) {
  return node?.widgets?.find((widget) => widget?.name === name) ?? null;
}

export function linked(node, names) {
  return linkedInputNames(node).some((name) => names.includes(name));
}

// The inputs whose VIDEO sets the Timeline fps (pano_video_fps.js timelineFpsLocked).
export const VIDEO_FPS_INPUTS = [...BACKGROUND_INPUTS, "sticker"];

// The node's state v2 (a state that cannot be read opens as the empty state, read-only: openStudioEditor), rebased to
// the fps a VIDEO set in the node's current result (docs/timeline-ui.md "タイムラインの表示"). `media` reads the result.
export function nodeState(node, media) {
  let scene;
  try {
    scene = loadSceneState(String(widgetOf(node, "state_json")?.value ?? ""));
  } catch {
    scene = loadSceneState(null);
  }
  return sceneAtVideoFps(scene, videoTimelineFps(node, media));
}

const loaded = (image) => !!image?.complete && image.naturalWidth > 0;

// The node's background image, loaded once from its own result or its linked input (node_image.js): get() is the render's
// background ({ media, revision, coverage }) once it has loaded, null before or without one; state() is "none" (no
// input linked), "loading", "ready" or "failed". `coverage` is the background's span. A background VIDEO is
// createBackgroundVideo's (openStudioEditor), shown in place of the image once it has a picture.
// `choice` is the background chosen when the editor opens (pano_background_choice.js chooseBackground): [inputs] an
// upstream background standing in has its image in the node's result, at its coverage.
export function nodeBackground(node, media, onChange, choice) {
  let image = null;
  let status = "none";
  if (choice.from === "upstream") {
    image = media.uiImage(node, choice.keys.image, new Map(), (settled) => {
      status = loaded(settled) ? "ready" : "failed";
      onChange();
    });
    if (image) status = loaded(image) ? "ready" : "loading";
  } else {
    // The node's own result first, then the file its background loads directly (node_image.js, ADR 0003).
    const picture = loadNodeInputImage({
      media,
      node,
      inputs: BACKGROUND_INPUTS,
      channel: "background",
      cacheKey: `studio-background:${BACKGROUND_INPUTS.join("|")}`,
      onChange: () => {
        image = picture.image();
        status = picture.state();
        onChange();
      },
    });
    image = picture.image();
    status = picture.state();
  }
  const { coverage } = choice;
  return {
    get: () => (status === "ready" ? { media: image, revision: image.currentSrc || image.src, coverage } : null),
    state: () => status,
    coverage,
  };
}

// The stage's media, the `sticker` input's and the upstream Scene's layers, and the Pose handoff (made before the
// session, which edits the upstream layers).
export function createEditorInputs(ctx) {
  // --- What the stage draws, loaded once per source while the editor is open.
  const stageMedia = createStageMedia({
    assetSource: ctx.media.assetSource,
    source: ctx.media.source,
    fetchApi: ctx.api?.fetchApi ? (path, options) => ctx.api.fetchApi(path, options) : null,
    onChange: () => {
      if (ctx.closed) return;
      ctx.syncMedia();
      ctx.redraw(DRAW_REASON.MEDIA);
    },
  });
  // [inputs] The `sticker` input's media in the node's current result (docs/studio-ui.md "ノードの入力から来た物").
  const portMedia = createPortMedia({
    uiList: (key) => ctx.media.uiList(ctx.node, key),
    source: ctx.media.source,
    current: () => isNodeOutputMediaCurrent(ctx.node, "external-sticker"),
    fps: () => ctx.session.state.timeline.fps,
    playing: () => !!ctx.backgroundVideo?.playback.advancing,
    onChange: () => {
      if (ctx.closed) return;
      ctx.syncMedia();
      ctx.redraw(DRAW_REASON.MEDIA);
    },
  });
  // [inputs] The upstream Scene on `scene` (another Studio's PANO_SCENE): its layers from the node's current result,
  // edited as the node's overrides (studio/upstream.js, docs/studio-ui.md "上流の物の編集").
  const upstreamList = () => {
    const value = isNodeOutputMediaCurrent(ctx.node, "scene") ? ctx.media.uiValue(ctx.node, "pano_upstream_layers") : null;
    return Array.isArray(value) && value.length ? value : null;
  };
  const graphNodes = () => ctx.node.graph?._nodes ?? ctx.node.graph?.nodes ?? ctx.app?.graph?._nodes ?? [];
  const upstream = createStudioUpstream({
    list: upstreamList,
    linkType: () => linkedInputType(ctx.node, "scene"),
    uiList: (key) => ctx.media.uiList(ctx.node, key),
    state: () => ctx.session.state,
    setRecords: (records) => ctx.session.setUpstreamRecords(records),
    nodeName: (key) => upstreamNodeName(graphNodes(), key),
    mediaSource: ctx.media.source,
    mediaAssetSource: ctx.media.assetSource,
    revisionOf: mediaRevisionToken,
    playing: () => !!ctx.backgroundVideo?.playback.advancing,
    editorFile: (sticker) => stageMedia.editorFile(sticker),
    onMedia: () => {
      if (ctx.closed) return;
      ctx.upstreamMedia += 1;
      ctx.redraw(DRAW_REASON.MEDIA);
    },
  });
  // [inputs] The Pose handoff of the node's current result the port Sticker is shown with (docs/studio-ui.md "`port` の
  // Sticker"): while `sticker` and `sticker_state` are linked and the result came from those links.
  const currentHandoff = () => (isNodeOutputMediaCurrent(ctx.node, "sticker-handoff")
    ? nodePortHandoff(ctx.node, ctx.media.uiValue(ctx.node, "pano_sticker_handoff"))
    : null);

  return { stageMedia, portMedia, upstreamList, upstream, currentHandoff };
}

// What the inputs bring besides, made once the session is: the depth grids' colors, whether ComfyUI runs, which
// background shows, the `scene` input's files.
export function createEditorSources(ctx) {
  // The colors of the depth grids drawn (docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド"): a
  // proxy MP4 per input (`scene`, `sticker`, an upstream layer) following the playhead.
  const depthColors = createDepthColors({
    createVideo: () => createPanoVideo(document, "studio.depth-video"),
    createCanvas: () => createPanoCanvas({ label: "studio.depth-still" }),
    releaseCanvas: releasePanoCanvas,
    onChange: () => {
      if (!ctx.closed) ctx.redraw(DRAW_REASON.MEDIA);
    },
  });
  const depthColor = (slot, video) => depthColors.picture(slot, video, !!ctx.backgroundVideo?.playback.advancing);
  // While ComfyUI runs a job, the stage loads nothing at rest and keeps only what it draws (docs/threejs-spark-integration.md
  // "生成を邪魔しない"); at its end it loads on.
  const comfyRunning = watchComfyRunning(ctx.api, () => {
    if (!ctx.closed) ctx.redraw(DRAW_REASON.MEDIA);
  });
  const upstreamLinked = () => linkedInputType(ctx.node, "scene") === PANO_SCENE_TYPE || !!ctx.upstreamList();
  // Which background shows now (pano_background_choice.js, caller "editor"): the node's own while it is linked, [inputs]
  // else the upstream background standing in, with its keys, span, bg_color and Clip range.
  const uiList = (key) => ctx.media.uiList(ctx.node, key);
  const current = (channel) => isNodeOutputMediaCurrent(ctx.node, channel);
  const backgroundNow = () => chooseBackground("editor", {
    uiList,
    current,
    ownLinked: ctx.backgroundLinked,
    widget: (name) => widgetOf(ctx.node, name),
    clip: ctx.session.state.background.clip,
    fps: ctx.session.state.timeline.fps,
  });
  // The `scene` input's files in the node's current result (its 3D content), or null.
  const sceneFiles = () => (isNodeOutputMediaCurrent(ctx.node, "scene")
    ? sceneFilesOf(ctx.media.uiList(ctx.node, "pano_scene_files"), ctx.media.uiList(ctx.node, "pano_scene_meta"), ctx.media.source)
    : null);

  return { depthColors, depthColor, comfyRunning, upstreamLinked, uiList, current, backgroundNow, sceneFiles };
}
