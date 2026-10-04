// What the Timeline's actions do (PanoTimeline.vue emits them): selecting rows and Keyframes, seeking,
// playback, keying Lanes, easing, and dragging Keyframes and Clip ranges.
import { PAINTING_ROW } from "../pano_editor_ui_state.js";
import { clipActive } from "../pano_scene_eval.js";
import {
  enteredTimelineFps,
  enteredTimelineLength,
  keyAllLanes,
  moveClip,
  moveKeyframes,
  setSegmentEasing,
  trimClipEnd,
  trimClipStart,
} from "../pano_timeline.js";

export function createTimelineActions(deps) {
  const {
    dragFrames, editor, readOnly, state, stateV2, studio, timeline, uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let cameraShoots, changeTimelineFps, clipView, commitTimelineEdit, getActiveCutoutShot, getList, jumpTimelineTo,
    playback, refreshModalVideoSource, refreshTimelineEdit, releaseHiddenSelection, requestDraw,
    selectWorldSticker, selectedLanes, setSelectedItem, stopTimelinePlayback, syncFloatingViewButtonState,
    syncTimeline, timelineEditable, timelineOffset, timelineOwner, timelineSpanFrames, timelineTimed,
    togglePlayback, toggleVideoMuted, updateSelectionMenu, updateSidePanel;

  function onTimelineAction(action) {
    if (readOnly || !stateV2) return;
    if (action.type === "seek") {
      // A scrub seeks once per frame, to where the pointer is then; its end seeks at once.
      if (action.phase === "move") {
        timeline.scrubFrame = action.frame;
        dragFrames.request("seek");
        return;
      }
      dragFrames.cancel();
      if (action.phase === "start") refreshModalVideoSource();
      playback.seek(action.frame);
      return;
    }
    if (action.type === "play") {
      togglePlayback();
      return;
    }
    if (action.type === "mute") {
      toggleVideoMuted();
      syncTimeline();
      return;
    }
    if (action.type === "toggle-expanded") {
      timeline.expanded = !(timeline.expanded ?? timelineTimed());
      timeline.selection = null;
      syncTimeline();
      return;
    }
    if (action.type === "toggle-row") {
      if (timeline.openRows.has(action.id)) timeline.openRows.delete(action.id);
      else timeline.openRows.add(action.id);
      syncTimeline();
      return;
    }
    if (action.type === "toggle-visible") {
      // Showing and hiding is an edit (Undo), but changes no value at a frame, so playback goes on.
      if (action.id === PAINTING_ROW) state.painting_visible = !state.painting_visible;
      else {
        const owner = timelineOwner(action.id);
        if (!owner || (action.id === "camera" && !studio)) return;
        owner.visible = !owner.visible;
      }
      releaseHiddenSelection();
      commitTimelineEdit();
      return;
    }
    if (action.type === "select-row") {
      // A Sticker is hidden outside its Clip range, so the playhead first moves to where it starts.
      const sticker = state.stickers.find((item) => item.id === action.id);
      // What is hidden is not selected; its row is still where its eye is.
      if ((sticker && !sticker.visible) || (action.id === "camera" && !cameraShoots())) return;
      if (sticker && !clipActive(sticker.clip, editor.frame)) jumpTimelineTo(sticker.clip.start);
      // The canvas selection holds sky Stickers; a world row selects its world Sticker for the gizmo and
      // the inspector.
      if (sticker?.placement === "world") selectWorldSticker(sticker.id);
      else if (action.id === "camera") setSelectedItem(getActiveCutoutShot());
      else setSelectedItem(getList().find((item) => item.id === action.id) || null);
      syncFloatingViewButtonState();
      // Delete then acts on the row's Sticker, not on Keyframes selected before.
      timeline.selection = null;
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (action.type === "select-keys") {
      const offset = timelineOffset(action.owner);
      const frames = action.frames.map((frame) => frame - offset);
      const current = timeline.selection;
      const sameLanes = current?.owner === action.owner && current.lane === action.lane;
      if (action.additive && sameLanes) {
        const toggled = new Set(current.frames);
        for (const frame of frames) {
          if (toggled.has(frame)) toggled.delete(frame);
          else toggled.add(frame);
        }
        current.frames = [...toggled].sort((a, b) => a - b);
      } else {
        timeline.selection = frames.length ? { owner: action.owner, lane: action.lane, frames } : null;
      }
      syncTimeline();
      return;
    }
    if (action.type === "move-keys") {
      const selection = timeline.selection;
      if (!selection || !timelineEditable(selection.owner)) return;
      const owner = timelineOwner(selection.owner);
      const names = selectedLanes(selection);
      if (action.phase === "start") {
        stopTimelinePlayback();
        timeline.drag = { keyframes: names.map((name) => structuredClone(owner[name].keyframes)), frames: selection.frames };
        return;
      }
      const { drag } = timeline;
      if (!drag?.keyframes) return;
      names.forEach((name, index) => {
        owner[name].keyframes = structuredClone(drag.keyframes[index]);
      });
      const delta = moveKeyframes(owner, names, drag.frames, action.delta, -timelineOffset(selection.owner));
      selection.frames = drag.frames.map((frame) => frame + delta);
      if (action.phase !== "end") {
        // Moved Keyframes can change the values at the playhead.
        dragFrames.request("timeline");
        dragFrames.request("view");
        return;
      }
      dragFrames.cancel();
      timeline.drag = null;
      if (delta) commitTimelineEdit();
      else refreshTimelineEdit();
      return;
    }
    if (action.type === "clip") {
      // A Sticker's Clip range, or the `scene`'s.
      const sticker = action.id === "scene" ? timelineOwner("scene") : state.stickers.find((item) => item.id === action.id);
      if (!sticker || sticker.locked) return;
      if (action.phase === "start") {
        stopTimelinePlayback();
        // Only the span set by everything else reopens the end, not the span this Clip range widens.
        timeline.drag = { clip: { ...sticker.clip }, span: timelineSpanFrames(sticker.clip) };
        return;
      }
      const { drag } = timeline;
      if (!drag?.clip) return;
      const base = drag.clip;
      const shown = clipView(sticker.clip);
      sticker.clip = { ...base };
      // A click (no movement) leaves the Clip range as it was, an open end included.
      if (action.delta && action.mode === "move") moveClip(sticker.clip, action.delta);
      else if (action.delta && action.mode === "start") trimClipStart(sticker.clip, base.start + action.delta);
      else if (action.delta) trimClipEnd(sticker.clip, (base.duration === null ? drag.span : base.start + base.duration) + action.delta, drag.span);
      if (action.phase !== "end") {
        dragFrames.request("timeline");
        if (clipView(sticker.clip) !== shown) dragFrames.request("view");
        return;
      }
      dragFrames.cancel();
      timeline.drag = null;
      releaseHiddenSelection();
      if (JSON.stringify(sticker.clip) !== JSON.stringify(base)) commitTimelineEdit();
      else refreshTimelineEdit();
      return;
    }
    if (action.type === "key-row") {
      // The `scene` row is not keyable: nothing sets the `scene`'s values in the editor yet (#89).
      if (action.owner === "scene" || !timelineEditable(action.owner)) return;
      // Recording edits stop at the frame shown, so playback stops before a Keyframe is set.
      stopTimelinePlayback();
      keyAllLanes(timelineOwner(action.owner), editor.frame - timelineOffset(action.owner));
      commitTimelineEdit();
      return;
    }
    if (action.type === "fps") {
      const fps = enteredTimelineFps(action.fps);
      if (fps === null || fps === state.timeline.fps || uiState.timeline.fpsLocked) {
        syncTimeline();
        return;
      }
      changeTimelineFps(fps);
      return;
    }
    if (action.type === "length") {
      const length = enteredTimelineLength(action.length);
      if (length === undefined || length === state.timeline.length) {
        syncTimeline();
        return;
      }
      stopTimelinePlayback();
      state.timeline.length = length;
      commitTimelineEdit();
      return;
    }
    if (action.type === "easing") {
      const selection = timeline.selection;
      if (!selection || !timelineEditable(selection.owner)) return;
      stopTimelinePlayback();
      setSegmentEasing(timelineOwner(selection.owner), selectedLanes(selection), selection.frames, action.easing);
      if (action.commit) commitTimelineEdit();
      else refreshTimelineEdit();
    }
  }

  return {
    connect(api) {
      ({
        cameraShoots, changeTimelineFps, clipView, commitTimelineEdit, getActiveCutoutShot, getList, jumpTimelineTo,
        playback, refreshModalVideoSource, refreshTimelineEdit, releaseHiddenSelection, requestDraw,
        selectWorldSticker, selectedLanes, setSelectedItem, stopTimelinePlayback, syncFloatingViewButtonState,
        syncTimeline, timelineEditable, timelineOffset, timelineOwner, timelineSpanFrames, timelineTimed,
        togglePlayback, toggleVideoMuted, updateSelectionMenu, updateSidePanel,
      } = api);
    },
    onTimelineAction,
  };
}
