// The editor's Timeline (state v2): its model for PanoTimeline.vue, the playhead and playback, the owner
// and Lanes it edits, and the Timeline fps.
import { setTimelineFps } from "../pano_editor_state.js";
import { BACKGROUND_ROW, buildEasingModel, buildTimelineModel } from "../pano_editor_ui_state.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { backgroundClipAt, backgroundPlace, backgroundShownAt, bgMediaEnd, portMediaFrames } from "../pano_port_media.js";
import { nodeInputOrigins, videoLinked } from "../pano_preview_video.js";
import { clipActive } from "../pano_scene_eval.js";
import { timelineFps } from "../pano_scene_state.js";
import { deleteKeyframes, isTimed, laneNames, timelineSpan } from "../pano_timeline.js";

export function createTimeline(deps) {
  const {
    editor, node, readOnly, sceneV2, state, stateV2, studio, timeline, timelinePlayhead,
    uiState, videoEl, videoTimelineFps,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let commitAndRefreshNode, getPortMediaMeta, hasCamera, inspectorTimed, isExternalSticker, loading3dIds, markObjectVisualsDirty,
    playback, pushHistory, refreshModalVideoSource, releaseHiddenSelection, requestDraw, sceneFiles,
    syncCutoutShot, stickerById, syncSidePanelModel, updateSelectionMenu, updateSidePanel, upstreamBackground,
    upstreamLinked, upstreamOutput, upstreamPortMeta, upstreamRow, upstreamTimelineLayers;

  function syncTimeline() {
    if (!stateV2 || readOnly) return;
    // A drag keeps the span it started on, so the rows do not rescale under the pointer.
    const span = timeline.drag?.limit ?? timelineSpanFrames();
    // The playhead never stands past the output's last frame, so nothing is keyed there.
    if (!timeline.drag && playback.frame > span - 1) playback.seek(span - 1);
    const selection = timeline.selection;
    const owner = selection && timelineOwner(selection.owner);
    if (selection) {
      // Keyframes past the output's end are not on the Timeline (PanoTimeline.vue), so they leave the selection:
      // nothing deletes, eases or drags them.
      const names = owner ? selectedLanes(selection) : [];
      const offset = timelineOffset(selection.owner);
      selection.frames = selection.frames.filter((frame) => frame + offset < span
        && names.some((name) => owner[name].keyframes.some((key) => key.frame === frame)));
      if (!selection.frames.length) timeline.selection = null;
    }
    uiState.timeline = buildTimelineModel(state, {
      span,
      portBarEnd,
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
      background: backgroundShown() ? { end: portBarEnd(state.background) } : null,
      // A 3D file still uploading is a 3D Sticker before its Source names it.
      loading3d: loading3dIds(),
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

  // The Timeline's span: exactly the output's length (pano_timeline.js timelineSpan), followed live from the
  // state and what the editor knows of the inputs. The background VIDEO or IMAGE batch counts from the node's
  // result (or, before a run, the length of the VIDEO file the background input loads), but not an upstream
  // background, which is in the upstream Scene's length already (docs/studio-node.md). The port Sticker's
  // media and the `scene` items count from the node's current result. `openClip` counts as a Clip range without
  // a duration (the one being dragged).
  function timelineSpanFrames(openClip = null) {
    return timelineSpan(state, {
      bg: backgroundMedia(),
      port: getPortMediaMeta(),
      sceneItems: upstreamLinked() ? 0 : sceneFiles()?.urls.length ?? 0,
      upstream: upstreamOutput(openClip),
      openClip,
      camera: studio,
    });
  }

  // The node's own background as autoTimelineLength reads it: its VIDEO or IMAGE batch from the node's result (or,
  // before a run, the VIDEO file the background input loads), else a linked IMAGE as a single image (an IMAGE batch
  // before a run too); null without one, or while an upstream background stands in for it.
  function backgroundMedia() {
    if (upstreamBackground()) return null;
    return transportMedia() ?? (nodeInputOrigins(node).bg_media && !videoLinked(node, ["bg_media"]) ? { frames: 1 } : null);
  }

  // The background VIDEO or IMAGE batch the editor shows, from the node's result: { video, frames, duration }, or
  // null. An upstream background counts as a VIDEO, ending at its `duration` at any Timeline fps.
  function transportMedia() {
    const transport = uiState.videoTransport;
    if (!(transport.ready && transport.frameCount > 0)) return null;
    return { video: !!upstreamBackground() || videoLinked(node, ["bg_media"]), frames: transport.frameCount, duration: Number(transport.duration || 0) };
  }

  // Panorama Studio's own background has a Timeline row (its Clip range, state.background) while bg_media is
  // linked and no upstream background stands in for it.
  function backgroundShown() {
    return sceneV2 && !!nodeInputOrigins(node).bg_media && !upstreamBackground();
  }

  // The Clip range of the background the editor shows, in the Timeline's frames: the node's own while it has a row,
  // or an upstream background's, that of the Studio it came from (the node's own does not apply to it; the default
  // one when the result gives none); null for neither (the legacy editor too).
  function backgroundClip() {
    const upstream = upstreamBackground();
    if (upstream) return upstream.clip ? backgroundClipAt(upstream.clip.clip, upstream.clip.fps, state.timeline.fps) : { start: 0, in: 0, duration: null };
    return backgroundShown() ? state.background.clip : null;
  }

  // Where the Clip range puts the background VIDEO for the playback (createVideoPlayback's `place`), or null.
  function backgroundVideoPlace() {
    const clip = backgroundClip();
    return clip ? backgroundPlace(clip) : null;
  }

  // Whether the background shows at Timeline `frame`; where it does not, the views draw its bg_color
  // (backgroundColor) as the node does.
  function backgroundShowsAt(frame) {
    const clip = backgroundClip();
    if (!clip) return true;
    const upstream = !!upstreamBackground();
    return backgroundShownAt(clip, frame, state.timeline.fps, upstream ? transportMedia() : backgroundMedia(), upstream || upstreamLinked());
  }

  // The bg_color of the background the editor shows: an upstream background's own, else the node's.
  function backgroundColor() {
    return upstreamBackground()?.color ?? state.bg_color;
  }

  // Where the media of a port Sticker or of the background without a duration ends (portMediaFrames,
  // bgMediaEnd): its bar ends there, not at the Timeline's end. null for another owner of a Clip range (a Sticker, a
  // `scene`), a single background image, or while its media is not known.
  function portBarEnd(sticker) {
    if (sticker === state.background) {
      const media = sticker.clip.duration === null ? backgroundMedia() : null;
      return media?.video || media?.frames > 1 ? bgMediaEnd(sticker.clip, state.timeline.fps, media, upstreamLinked()) : null;
    }
    if (sticker.source?.kind !== "port" || sticker.clip.duration !== null) return null;
    const meta = sticker.origin ? upstreamPortMeta(sticker) : isExternalSticker(sticker) ? getPortMediaMeta() : null;
    return meta ? portMediaFrames(sticker.clip, state.timeline.fps, meta) : null;
  }

  function timelineOwner(owner) {
    if (owner === "camera") return hasCamera() ? state.camera : null;
    if (owner === "scene") return sceneV2 ? state.scene : null;
    if (owner === BACKGROUND_ROW) return backgroundShown() ? state.background : null;
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
        commitAndRefreshNode, getPortMediaMeta, hasCamera, inspectorTimed, isExternalSticker, loading3dIds, markObjectVisualsDirty,
        playback, pushHistory, refreshModalVideoSource, releaseHiddenSelection, requestDraw, sceneFiles,
        syncCutoutShot, stickerById, syncSidePanelModel, updateSelectionMenu, updateSidePanel, upstreamBackground,
        upstreamLinked, upstreamOutput, upstreamPortMeta, upstreamRow, upstreamTimelineLayers,
      } = api);
    },
    syncTimeline, timelineTimed, timelineSpanFrames, backgroundShown, backgroundShowsAt, backgroundVideoPlace, backgroundColor,
    portBarEnd, timelineOwner, selectedLanes, timelineOffset, clipView, timelineEditable, rowEditable, setTimelineFrame, jumpTimelineTo, stopTimelinePlayback, togglePlayback,
    refreshTimelineEdit, commitTimelineEdit, deleteSelectedKeyframes, changeTimelineFps, applyVideoTimelineFps,
  };
}
