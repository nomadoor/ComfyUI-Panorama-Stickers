// The editor's Timeline (state v2): its model for PanoTimeline.vue, the playhead and playback, the owner
// and Lanes it edits, and the Timeline fps.
import { setTimelineFps } from "../pano_editor_state.js";
import { buildEasingModel, buildTimelineModel } from "../pano_editor_ui_state.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { portMediaFrames } from "../pano_port_media.js";
import { nodeInputOrigins, videoLinked } from "../pano_preview_video.js";
import { clipActive } from "../pano_scene_eval.js";
import { timelineFps } from "../pano_scene_state.js";
import { deleteKeyframes, isTimed, laneNames, ownersSpan, timelineSpan } from "../pano_timeline.js";

export function createTimeline(deps) {
  const {
    editor, node, readOnly, sceneV2, state, stateV2, studio, timeline, timelinePlayhead,
    uiState, videoEl, videoTimelineFps,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let commitAndRefreshNode, getPortMedia, hasCamera, inspectorTimed, isExternalSticker, markObjectVisualsDirty,
    playback, pushHistory, refreshModalVideoSource, releaseHiddenSelection, requestDraw, syncCutoutShot,
    stickerById, syncSidePanelModel, updateSelectionMenu, updateSidePanel, upstreamBackground, upstreamLinked, upstreamRow,
    upstreamSpanFrames, upstreamTimelineLayers, upstreamTimelineOwners;

  function syncTimeline() {
    if (!stateV2 || readOnly) return;
    const span = timelineSpanFrames();
    const selection = timeline.selection;
    const owner = selection && timelineOwner(selection.owner);
    if (selection) {
      const names = owner ? selectedLanes(selection) : [];
      selection.frames = selection.frames.filter((frame) => names.some((name) => owner[name].keyframes.some((key) => key.frame === frame)));
      if (!selection.frames.length) timeline.selection = null;
    }
    uiState.timeline = buildTimelineModel(state, {
      span,
      selection: timeline.selection,
      selectedId: editor.worldSelectedId || editor.selectedId,
      expanded: timeline.expanded ?? timelineTimed(),
      openRows: timeline.openRows,
      audio: hasTimelineVideo() && uiState.videoTransport.hasAudio ? { muted: videoEl.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: videoTimelineFps(node) !== null || videoLinked(node, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: hasCamera(),
      cameraHideable: studio,
      // Another Studio's Scene on `scene` is upstream: its own `scene` is not drawn (#90), and its elements have
      // rows of their own below (ADR 0030).
      scene: sceneV2 && !!nodeInputOrigins(node).scene && !upstreamLinked(),
      upstream: upstreamTimelineLayers(),
    });
    // Keyframes the Timeline cannot change (locked, only inherited, an upstream `scene`'s) have no Easing panel.
    uiState.easing = timeline.selection && timelineEditable(timeline.selection.owner)
      ? buildEasingModel(owner, selectedLanes(timeline.selection), timeline.selection.frames, timelineOffset(timeline.selection.owner))
      : null;
  }

  // Whether the Timeline opens by itself: something in the state changes over time (Panorama Studio's
  // Camera too).
  function timelineTimed() {
    return isTimed(state, { camera: studio });
  }

  // The Timeline length (5 s without one), widened to the background VIDEO, to the end of the
  // port Sticker's media and to the upstream Scene's length with the Clip ranges this node overrides in it
  // (#90, ADR 0030). An upstream background VIDEO is in the upstream Scene's length already
  // (docs/render-contract.md), so it does not widen it again. Panorama Studio's Camera Keyframes widen it as
  // they lengthen its output. The upstream rows' Clip range edges and Keyframes widen it as the node's own do,
  // though only the overridden Clip ranges lengthen the output (ADR 0030).
  function timelineSpanFrames(openClip = null) {
    const fps = state.timeline.fps;
    const port = state.stickers.find(isExternalSticker);
    const portMedia = port ? getPortMedia() : null;
    const frames = Math.max(
      uiState.videoTransport.ready && !upstreamBackground() ? Math.round(Number(uiState.videoTransport.duration || 0) * fps) : 0,
      portMedia ? portMediaFrames(port.clip, fps, portMedia.meta) : 0,
      upstreamSpanFrames(openClip),
    );
    const span = timelineSpan(state, { minimum: Math.round(fps * 5), frames, openClip, camera: studio });
    return Math.max(span, ownersSpan(upstreamTimelineOwners(), openClip));
  }

  function timelineOwner(owner) {
    if (owner === "camera") return hasCamera() ? state.camera : null;
    if (owner === "scene") return sceneV2 ? state.scene : null;
    // An upstream element's working Sticker owns its Lanes too, and an upstream layer's working `scene` its
    // (ADR 0030); an upstream painting row has no owner.
    const upstream = upstreamRow(owner);
    return upstream ? upstream.owner : stickerById(owner);
  }

  // Whether a row's values can change by its own state: an upstream layer's rows only while the node keeps
  // overrides of the layer (ADR 0030); the node's own always.
  function rowEditable(id) {
    return upstreamRow(id)?.editable ?? true;
  }

  // The Lanes a Keyframe selection acts on: its Lane, or every Lane of its row.
  function selectedLanes(selection) {
    return selection.lane ? [selection.lane] : laneNames(timelineOwner(selection.owner));
  }

  // A Sticker's Keyframes are on its material, which starts at start - in; the Camera's on the Timeline.
  function timelineOffset(owner) {
    if (owner === "camera") return 0;
    // A row without an owner (a painting's) has no Keyframes.
    const clip = timelineOwner(owner)?.clip;
    return clip ? clip.start - clip.in : 0;
  }

  // What the view shows of a Clip range's content: whether it is on at the playhead, and the time of
  // its content there (moving the range moves its content; trimming keeps it).
  function clipView(clip) {
    return `${clipActive(clip, editor.frame)}:${clip.start - clip.in}`;
  }

  // Whether the Keyframes of a row can change: not locked, and not an upstream layer's `scene`, whose Lanes no
  // override holds (ADR 0030), or a row of a layer that is only inherited.
  function timelineEditable(owner) {
    const target = timelineOwner(owner);
    return !!target && target.locked !== true && rowEditable(owner) && upstreamRow(owner)?.part !== "scene";
  }

  function setTimelineFrame(frame) {
    const next = Math.max(0, Math.round(frame));
    if (next === editor.frame) return;
    // An edit of the Cutout's shot belongs to the frame it was made on.
    syncCutoutShot();
    editor.frame = next;
    timelinePlayhead.frame.value = next;
    syncCutoutShot();
    const selection = [editor.selectedId, editor.worldSelectedId];
    releaseHiddenSelection();
    markObjectVisualsDirty();
    // The Timeline's rows depend on the state and the selection, not on the playhead; the inspector shows
    // values at the playhead only for something timed.
    if (selection[0] !== editor.selectedId || selection[1] !== editor.worldSelectedId) updateSidePanel();
    else if (inspectorTimed()) syncSidePanelModel();
    updateSelectionMenu();
    requestDraw({ reason: DRAW_REASON.PLAYHEAD });
  }

  function hasTimelineVideo() {
    return videoEl instanceof HTMLVideoElement && !!videoEl.getAttribute("src");
  }

  // Moves the playhead and shows the background VIDEO's frame there (ADR 0019 still frame). A VIDEO
  // that arrived since the last refresh is picked up first.
  function jumpTimelineTo(frame) {
    refreshModalVideoSource();
    playback.seek(frame);
  }

  // Edits stop Panorama Studio's playback on the frame shown; the legacy transport plays on.
  function stopTimelinePlayback() {
    if (stateV2) playback.stop();
  }

  // Panorama Studio's Timeline play button and the legacy transport's. With a background VIDEO
  // the video plays with its audio and its presented frames set the playhead; past its end a clock
  // carries on to the Timeline's end. Without a VIDEO a clock moves the playhead.
  function togglePlayback() {
    // The background VIDEO of the node's current result, loaded here when the node ran after the editor opened.
    refreshModalVideoSource();
    playback.toggle();
  }

  function refreshTimelineEdit() {
    syncCutoutShot();
    markObjectVisualsDirty();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw();
  }

  function commitTimelineEdit() {
    pushHistory();
    commitAndRefreshNode();
    refreshTimelineEdit();
  }

  function deleteSelectedKeyframes() {
    const { selection } = timeline;
    if (!timelineEditable(selection.owner)) return;
    stopTimelinePlayback();
    deleteKeyframes(timelineOwner(selection.owner), selectedLanes(selection), selection.frames, editor.frame - timelineOffset(selection.owner));
    timeline.selection = null;
    commitTimelineEdit();
  }

  // Rebases the state to fps, keeping its times and the playhead's in seconds, as one history step.
  function changeTimelineFps(value) {
    // The fps the state keeps; the one it already has changes nothing (no Undo step).
    const fps = timelineFps(value);
    if (fps === null || fps === state.timeline.fps) return;
    stopTimelinePlayback();
    const frame = Math.round(editor.frame * fps / state.timeline.fps);
    setTimelineFps(state, fps);
    timeline.selection = null;
    playback.seek(frame);
    commitTimelineEdit();
  }

  // A run that brings another Timeline fps from a VIDEO rebases the open state to it, as opening does.
  function applyVideoTimelineFps() {
    const fps = videoTimelineFps(node);
    if (fps !== null && fps !== state.timeline.fps) changeTimelineFps(fps);
  }

  return {
    connect(api) {
      ({
        commitAndRefreshNode, getPortMedia, hasCamera, inspectorTimed, isExternalSticker, markObjectVisualsDirty,
        playback, pushHistory, refreshModalVideoSource, releaseHiddenSelection, requestDraw, syncCutoutShot,
        stickerById, syncSidePanelModel, updateSelectionMenu, updateSidePanel, upstreamBackground, upstreamLinked, upstreamRow,
        upstreamSpanFrames, upstreamTimelineLayers, upstreamTimelineOwners,
      } = api);
    },
    syncTimeline, timelineTimed, timelineSpanFrames, timelineOwner, selectedLanes, timelineOffset, clipView,
    timelineEditable, rowEditable, setTimelineFrame, jumpTimelineTo, stopTimelinePlayback, togglePlayback,
    refreshTimelineEdit, commitTimelineEdit, deleteSelectedKeyframes, changeTimelineFps, applyVideoTimelineFps,
  };
}
