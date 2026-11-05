<script setup>
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from "vue";
import { createFrameBatch } from "../../pano_frame_batch.js";
import { timelineTicks } from "../../pano_timeline.js";
import {
  applyClipDrag,
  clipDragChanged,
  copyKeys,
  deleteKeys,
  deleteTarget,
  enteredFps,
  jumpTarget,
  keyRow,
  lengthEdit,
  moveKeys,
  pasteKeys,
  selectKeys,
  selectRow,
  startClipDrag,
  toggleVisible,
} from "../../studio/timeline_actions.js";
import { buildStudioTimeline, frameToX, keysInRange, xToFrame, xToFrameExact } from "../../studio/timeline_model.js";
import { passedDragThreshold } from "../../studio/ui_drag.js";
import StudioTimelineBar from "./StudioTimelineBar.vue";
import StudioTimelineHead from "./StudioTimelineHead.vue";

// The new UI's Timeline (docs/timeline-ui.md; the bar's order and a row's head: docs/studio-ui.md "タイムラインのバー";
// the look: docs/design.md "新しい UI の見た目"). It draws timeline_model.js's model of the props and turns pointer
// input into timeline_actions.js's results; it keeps only which rows are open and the drag under way.
//
// Props: the working state (a snapshot it never changes), the selection { row, keys }, the playhead frame, whether
// it plays, the loop switch, read-only, the upstream layers, and what the Timeline needs of the inputs (`media`,
// `background`, `sceneRow`, `fpsLocked`); timeline_model.js describes each. `collapsed` folds it to its bar.
//
// Events:
//   seek(frame, { phase })   "start" / "move" / "end" of a ruler scrub (move at most once per frame), "jump" for prev /
//                            next and for a row whose Sticker starts later. The shell's seek stops playback.
//   play()                   the play button
//   select(selection)        a row click, a Keyframe click, a box drawn on the tracks, an empty click
//   edit(payload)            one of:
//     { kind: "state", state, upstream, selection?, phase, stopsPlayback }  `phase` "commit" (one Undo step, written to
//         the node), "live" (a drag under way: show it, record nothing), "cancel" (back to `state`, the drag's start:
//         no Undo step, nothing written). `upstream` maps a layer key to its new working copy. `selection`, when
//         present, replaces the selection. `stopsPlayback` is false only for the eye.
//     { kind: "fps", fps }   rebase to fps (one Undo step, times kept in seconds)
//     { kind: "revert-upstream-layer" | "restore-upstream-deleted", key }
//   frame-selected(id)       a double-click on a row's name: Frame Selected on its object
//   loop-change(on)          the loop switch (the shell keeps it per browser: timeline_actions.js writeLoopSetting)
//   length-unit-change(unit) the Length field's unit mark, "frames" or "seconds" (`lengthUnit`; the shell keeps it per
//                            browser: timeline_actions.js writeLengthUnitSetting). Allowed read-only: it changes no state.
//   collapse-change(folded)  the collapse button
// handleDelete() (exposed): deletes the selected Keyframes and returns true, or returns false when the Delete key is
// the selected object's (docs/timeline-ui.md "記録の規則"). The Timeline calls it itself for Delete inside it.
// copyKeys() (exposed): the selected Keyframes as the editor's clipboard, or null when none is selected; pasteKeys(
// clipboard) (exposed): pastes them at the playhead as one Undo step and returns whether anything pasted
// (docs/timeline-ui.md "Keyframe のコピーと貼り付け"). The editor keeps the clipboard and takes the keys.
const props = defineProps({
  state: { type: Object, required: true },
  selection: { type: Object, default: () => ({ row: null, keys: [] }) },
  playhead: { type: Number, default: 0 },
  playing: { type: Boolean, default: false },
  loop: { type: Boolean, default: true },
  readOnly: { type: Boolean, default: false },
  upstream: { type: Array, default: () => [] },
  media: { type: Object, default: () => ({}) },
  background: { type: Object, default: null },
  sceneRow: { type: Boolean, default: false },
  fpsLocked: { type: Boolean, default: false },
  collapsed: { type: Boolean, default: false },
  lengthUnit: { type: String, default: "frames" },
});
const emit = defineEmits(["seek", "play", "select", "edit", "frame-selected", "loop-change", "length-unit-change", "collapse-change"]);

// The empty space at both ends of a track (docs/timeline-ui.md "タイムラインの長さ": only a visual margin).
const TRACK_PAD = 8;

const openRows = shallowRef(new Set());
const ctx = computed(() => ({
  state: props.state,
  upstream: props.upstream,
  media: props.media,
  background: props.background,
  sceneRow: props.sceneRow,
  fpsLocked: props.fpsLocked,
  readOnly: props.readOnly,
}));
const model = computed(() => buildStudioTimeline(ctx.value, {
  selection: props.selection,
  playhead: props.playhead,
  playing: props.playing,
  loop: props.loop,
  openRows: openRows.value,
}));

// The lines top to bottom: group headers, rows and their open Lanes; `line` is the index in model.lines.
const items = computed(() => {
  const out = [];
  let line = 0;
  const add = (row) => {
    out.push({ type: "row", key: `r:${row.id}`, row, line: line++ });
    for (const lane of row.lanes) out.push({ type: "lane", key: `l:${row.id}:${lane.lane}`, row, lane, line: line++ });
  };
  model.value.rows.forEach(add);
  for (const group of model.value.groups) {
    out.push({ type: "group", key: `g:${group.key}`, group });
    group.rows.forEach(add);
  }
  return out;
});

const root = ref(null);
const ruler = ref(null);
const rulerLine = ref(null);
const lines = ref(null);
const body = ref(null);
const fill = ref(null);
const width = ref(0);
let observer = null;

onMounted(() => {
  const measure = () => {
    width.value = ruler.value?.clientWidth || 0;
  };
  measure();
  if (typeof ResizeObserver !== "undefined" && ruler.value) {
    observer = new ResizeObserver(measure);
    observer.observe(ruler.value);
  }
});

const span = computed(() => model.value.span);
const x = (frame) => frameToX(frame, span.value, width.value, TRACK_PAD);
const pxPerFrame = computed(() => (span.value > 1 ? (width.value - 2 * TRACK_PAD) / (span.value - 1) : width.value));
const ticks = computed(() => (width.value > 0 ? timelineTicks(span.value, pxPerFrame.value) : []));
const playheadX = computed(() => x(Math.min(props.playhead, span.value - 1)));
// Unlabelled ticks between the labelled ones: four steps to each, while they stay at least 6px apart (timeline-2.html).
const minorTicks = computed(() => {
  const labelled = ticks.value;
  if (labelled.length < 2) return [];
  const step = (labelled[1] - labelled[0]) / 4;
  if (step * pxPerFrame.value < 6) return [];
  const out = [];
  for (let frame = labelled[0] + step; frame < span.value; frame += step) {
    if (Math.abs((frame - labelled[0]) / (step * 4) - Math.round((frame - labelled[0]) / (step * 4))) > 1e-6) out.push(frame);
  }
  return out;
});

function clipStyle(clip) {
  const left = x(clip.start);
  const right = clip.end === null ? width.value : Math.min(width.value, x(clip.end));
  return { left: `${left}px`, width: `${Math.max(2, right - left)}px` };
}

// --- Drags: the ruler scrub, a box on the tracks, Keyframes, a Clip range. One at a time.

let drag = null;
const marquee = ref(null);
let pendingSeek = null;
let pendingEdit = null;
const batch = createFrameBatch({
  requestFrame: (run) => requestAnimationFrame(run),
  cancelFrame: (id) => cancelAnimationFrame(id),
  tasks: {
    seek: () => {
      if (pendingSeek !== null) emit("seek", pendingSeek, { phase: "move" });
      pendingSeek = null;
    },
    edit: () => {
      if (pendingEdit) emit("edit", pendingEdit);
      pendingEdit = null;
    },
  },
});

function trackX(event) {
  const rect = ruler.value.getBoundingClientRect();
  return event.clientX - rect.left;
}

function beginDrag(event, next) {
  drag = { pointerId: event.pointerId, x0: event.clientX, y0: event.clientY, moved: false, ...next };
  window.addEventListener("pointermove", onMove, true);
  window.addEventListener("pointerup", onUp, true);
  window.addEventListener("pointercancel", onPointerCancel, true);
  window.addEventListener("keydown", onDragKey, true);
  window.addEventListener("blur", cancelDrag);
}

function endDrag() {
  window.removeEventListener("pointermove", onMove, true);
  window.removeEventListener("pointerup", onUp, true);
  window.removeEventListener("pointercancel", onPointerCancel, true);
  window.removeEventListener("keydown", onDragKey, true);
  window.removeEventListener("blur", cancelDrag);
  body.value?.removeEventListener("scroll", drawMarquee);
  batch.cancel();
  pendingSeek = null;
  pendingEdit = null;
  marquee.value = null;
  drag = null;
}

function live(edit, selection) {
  pendingEdit = { kind: "state", ...edit, ...(selection ? { selection } : {}), phase: "live", stopsPlayback: true };
  drag.sentLive = true;
  batch.request("edit");
}

function onRulerDown(event) {
  if (event.button !== 0 || drag) return;
  event.preventDefault();
  const frame = xToFrame(trackX(event), span.value, width.value, TRACK_PAD);
  beginDrag(event, { type: "scrub", frame });
  emit("seek", frame, { phase: "start" });
}

// A press on an empty spot of a track, or on the empty area of the track column below the rows (docs/timeline-ui.md
// "Keyframe の選び方"): a box from there, or a click that lets the Keyframes go. The box keeps its start in the lines'
// own coordinates, so it stays put while the body scrolls under it.
function onTrackDown(event) {
  if (event.button !== 0 || drag) return;
  event.preventDefault();
  const rect = lines.value.getBoundingClientRect();
  beginDrag(event, { type: "marquee", additive: event.shiftKey, ax: event.clientX - rect.left, ay: event.clientY - rect.top, bx: event.clientX, by: event.clientY });
  body.value?.addEventListener("scroll", drawMarquee);
}

// The box from its start to the pointer, in the lines' coordinates, held between the ruler's bottom (the ruler is sticky:
// the box's top edge and corners stay in sight above the rows scrolled under it) and the track column's bottom (the
// lines and the empty area below them, so a pointer past the body's end does not grow its scroll). The pointer may go
// past both; the box as drawn is what it selects (docs/timeline-ui.md "Keyframe の選び方").
function marqueeBox() {
  const rect = lines.value.getBoundingClientRect();
  const top = rulerLine.value ? rulerLine.value.getBoundingClientRect().bottom - rect.top : 0;
  const bottom = fill.value ? fill.value.getBoundingClientRect().bottom - rect.top : rect.height;
  const hold = (y) => Math.max(top, Math.min(bottom, y));
  const bx = drag.bx - rect.left;
  const by = hold(drag.by - rect.top);
  const ay = hold(drag.ay);
  return { left: Math.min(drag.ax, bx), top: Math.min(ay, by), width: Math.abs(bx - drag.ax), height: Math.abs(by - ay) };
}

function drawMarquee() {
  if (!drag || drag.type !== "marquee" || !drag.moved) return;
  marquee.value = marqueeBox();
}

// The Keyframes inside a box (marqueeBox): on the track lines it overlaps, between the frames at its two sides.
function keysInBox(box) {
  const rect = lines.value.getBoundingClientRect();
  const top = rect.top + box.top;
  const bottom = top + box.height;
  const covered = [...lines.value.querySelectorAll("[data-line]")]
    .filter((track) => {
      const r = track.getBoundingClientRect();
      return r.top < bottom && r.bottom > top;
    })
    .map((track) => Number(track.dataset.line));
  if (!covered.length) return [];
  const ruled = ruler.value.getBoundingClientRect();
  const toFrame = (clientX) => xToFrameExact(clientX - ruled.left, span.value, width.value, TRACK_PAD);
  const left = rect.left + box.left;
  return keysInRange(model.value.lines, Math.min(...covered), Math.max(...covered), toFrame(left), toFrame(left + box.width));
}

function onKeyDown(event, line, key) {
  if (event.button !== 0 || drag) return;
  event.preventDefault();
  const hit = { row: line.row, lane: line.lane, frame: key.ownerFrame };
  if (event.shiftKey) {
    emit("select", selectKeys(props.selection, [hit], { additive: true }));
    return;
  }
  let selection = props.selection;
  if (!key.selected) {
    selection = selectKeys(selection, [hit]);
    emit("select", selection);
  }
  if (props.readOnly) return;
  beginDrag(event, { type: "keys", base: ctx.value, selection, limit: span.value, delta: 0, result: null });
}

function onClipDown(event, row, mode) {
  if (event.button !== 0 || drag || !row.clipEditable) return;
  event.preventDefault();
  const clipDrag = startClipDrag(ctx.value, row.id);
  if (!clipDrag) return;
  beginDrag(event, { type: "clip", base: ctx.value, clipDrag, mode, delta: 0, edit: null });
}

function onMove(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const dx = event.clientX - drag.x0;
  if (!drag.moved && !passedDragThreshold(dx, event.clientY - drag.y0)) {
    if (drag.type !== "scrub") return;
  }
  drag.moved = true;
  if (drag.type === "scrub") {
    const frame = xToFrame(trackX(event), span.value, width.value, TRACK_PAD);
    if (frame === drag.frame) return;
    drag.frame = frame;
    pendingSeek = frame;
    batch.request("seek");
  } else if (drag.type === "marquee") {
    drag.bx = event.clientX;
    drag.by = event.clientY;
    drawMarquee();
  } else {
    const delta = Math.round(dx / Math.max(1e-6, pxPerFrame.value));
    if (delta === drag.delta) return;
    drag.delta = delta;
    if (drag.type === "keys") {
      const result = moveKeys(drag.base, drag.selection, delta, drag.limit);
      if (!result) return;
      drag.result = result;
      live(result.edit, result.selection);
    } else {
      const edit = applyClipDrag(drag.base, drag.clipDrag, drag.mode, delta);
      if (!edit) return;
      drag.edit = edit;
      live(edit);
    }
  }
}

function onUp(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const current = drag;
  if (current.type === "scrub") {
    const frame = current.frame;
    endDrag();
    emit("seek", frame, { phase: "end" });
    return;
  }
  if (current.type === "marquee") {
    if (current.moved) {
      current.bx = event.clientX;
      current.by = event.clientY;
      current.box = marqueeBox();
    }
    endDrag();
    if (!current.moved) {
      // An empty click lets the Keyframes go (with Shift it keeps them).
      if (!current.additive) emit("select", selectKeys(props.selection, [], { additive: false }));
      return;
    }
    emit("select", selectKeys(props.selection, keysInBox(current.box), { additive: current.additive }));
    return;
  }
  endDrag();
  if (current.type === "keys") {
    if (current.result && current.result.delta !== 0) {
      emit("edit", { kind: "state", ...current.result.edit, selection: current.result.selection, phase: "commit", stopsPlayback: true });
    } else if (current.sentLive) {
      emit("edit", { kind: "state", state: current.base.state, upstream: baseUpstream(current.base), selection: current.selection, phase: "cancel", stopsPlayback: true });
    }
    return;
  }
  const changed = clipDragChanged(current.base, current.clipDrag, current.edit);
  if (changed) emit("edit", { kind: "state", ...current.edit, phase: "commit", stopsPlayback: true });
  else if (current.sentLive) emit("edit", { kind: "state", state: current.base.state, upstream: baseUpstream(current.base), phase: "cancel", stopsPlayback: true });
}

// Every upstream layer's working copy as the drag found it, for a cancel.
function baseUpstream(base) {
  return Object.fromEntries((base.upstream || []).map((layer) => [layer.key, layer.sceneState]));
}

function cancelDrag() {
  if (!drag) return;
  const current = drag;
  endDrag();
  if ((current.type === "keys" || current.type === "clip") && current.sentLive) {
    emit("edit", {
      kind: "state",
      state: current.base.state,
      upstream: baseUpstream(current.base),
      ...(current.type === "keys" ? { selection: current.selection } : {}),
      phase: "cancel",
      stopsPlayback: true,
    });
  }
}

function onPointerCancel(event) {
  if (drag && event.pointerId === drag.pointerId) cancelDrag();
}

function onDragKey(event) {
  if (!drag || event.key !== "Escape") return;
  // Escape undoes the drag only; it must not reach the editor (which would close).
  event.preventDefault();
  event.stopPropagation();
  cancelDrag();
}

onBeforeUnmount(() => {
  cancelDrag();
  observer?.disconnect();
});

// --- Rows and the bar.

function toggleOpen(id) {
  const next = new Set(openRows.value);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  openRows.value = next;
}

function onSelectRow(id) {
  const result = selectRow(ctx.value, props.selection, id, props.playhead);
  if (!result) return;
  if (result.seek !== null) emit("seek", result.seek, { phase: "jump" });
  emit("select", result.selection);
}

function onEye(id) {
  const result = toggleVisible(ctx.value, props.selection, id);
  if (result) emit("edit", { kind: "state", ...result.edit, selection: result.selection, phase: "commit", stopsPlayback: false });
}

function onKeyRow(id) {
  const edit = keyRow(ctx.value, id, props.playhead);
  if (edit) emit("edit", { kind: "state", ...edit, phase: "commit", stopsPlayback: true });
}

function onJump(direction) {
  const frame = jumpTarget(ctx.value, props.selection, props.playhead, direction);
  if (frame !== null) emit("seek", frame, { phase: "jump" });
}

function onFps(value) {
  const fps = enteredFps(ctx.value, value);
  if (fps !== null) emit("edit", { kind: "fps", fps });
}

// The Length field (docs/timeline-ui.md "タイムラインの長さ"): while it is dragged the range follows it as a live edit
// from the length before the press; release (or a typed value) commits once from there, a cancel puts that state back.
// The reset button commits at once. The shell keeps the playhead in the range once the gesture is closed.
let lengthGesture = null;

function onLengthInput(value) {
  if (props.readOnly) return;
  lengthGesture ??= { base: ctx.value, sentLive: false };
  const { base } = lengthGesture;
  const edit = lengthEdit(base, value) ?? { state: base.state, upstream: {} };
  lengthGesture.sentLive = true;
  emit("edit", { kind: "state", ...edit, phase: "live", stopsPlayback: true });
}

function onLength(value) {
  const gesture = lengthGesture;
  lengthGesture = null;
  const edit = lengthEdit(gesture?.base ?? ctx.value, value);
  if (edit) emit("edit", { kind: "state", ...edit, phase: "commit", stopsPlayback: true });
  else if (gesture?.sentLive) emit("edit", { kind: "state", state: gesture.base.state, upstream: {}, phase: "cancel", stopsPlayback: true });
}

function onLengthCancel() {
  const gesture = lengthGesture;
  lengthGesture = null;
  if (gesture?.sentLive) emit("edit", { kind: "state", state: gesture.base.state, upstream: {}, phase: "cancel", stopsPlayback: true });
}

function onGroupAction(group, kind) {
  const button = kind === "revert-upstream-layer" ? group.revert : group.restore;
  if (!button.disabled) emit("edit", { kind, key: group.key });
}

function handleDelete() {
  if (deleteTarget(props.selection) !== "keys") return false;
  const result = deleteKeys(ctx.value, props.selection, props.playhead);
  if (result) emit("edit", { kind: "state", ...result.edit, selection: result.selection, phase: "commit", stopsPlayback: true });
  return true;
}

// A press inside the Timeline gives it the keyboard (Delete), as the drags' preventDefault keeps focus where it was. A
// field (the fps and Length names drag their field too: docs/studio-ui.md "欄") keeps it where it was.
function onPointerDownCapture(event) {
  if (event.target?.closest?.("input, textarea, select, [contenteditable='true'], [role='spinbutton'], .pano-studio-tl-field")) return;
  root.value?.focus({ preventScroll: true });
}

function onKeydown(event) {
  if (event.key !== "Delete" && event.key !== "Backspace") return;
  const target = event.target;
  if (target?.closest?.("input, textarea, select, [contenteditable='true']")) return;
  if (handleDelete()) {
    event.preventDefault();
    event.stopPropagation();
  }
}

function copySelectedKeys() {
  return copyKeys(ctx.value, props.selection);
}

function pasteCopiedKeys(clipboard) {
  const result = pasteKeys(ctx.value, clipboard, props.selection, props.playhead);
  if (result) emit("edit", { kind: "state", ...result.edit, selection: result.selection, phase: "commit", stopsPlayback: true });
  return !!result;
}

defineExpose({ handleDelete, copyKeys: copySelectedKeys, pasteKeys: pasteCopiedKeys });
</script>

<template>
  <div
    ref="root"
    class="pano-studio-tl"
    :class="{ 'is-collapsed': collapsed }"
    tabindex="-1"
    @pointerdown.capture="onPointerDownCapture"
    @keydown="onKeydown"
  >
    <StudioTimelineBar
      :bar="model.bar"
      :collapsed="collapsed"
      :length-unit="lengthUnit"
      @play="emit('play')"
      @jump="onJump"
      @loop-change="(on) => emit('loop-change', on)"
      @fps="onFps"
      @length-input="onLengthInput"
      @length="onLength"
      @length-cancel="onLengthCancel"
      @length-unit="(unit) => emit('length-unit-change', unit)"
      @collapse="(folded) => emit('collapse-change', folded)"
    />
    <div v-show="!collapsed" ref="body" class="pano-studio-tl-body">
      <div ref="rulerLine" class="pano-studio-tl-line is-ruler">
        <div class="pano-studio-tl-head is-ruler" />
        <div ref="ruler" class="pano-studio-tl-ruler" data-tl="ruler" @pointerdown="onRulerDown">
          <span
            v-for="tick in ticks"
            :key="tick"
            class="pano-studio-tl-tick pano-studio-num"
            :style="{ left: `${x(tick)}px` }"
          >{{ tick }}</span>
          <i v-for="tick in minorTicks" :key="`m${tick}`" class="pano-studio-tl-minor" :style="{ left: `${x(tick)}px` }" />
          <span class="pano-studio-tl-playhead-stem" :style="{ left: `${playheadX}px` }" />
          <span class="pano-studio-tl-playhead-mark" :style="{ left: `${playheadX}px` }" />
        </div>
      </div>
      <div ref="lines" class="pano-studio-tl-lines">
        <template v-for="item in items" :key="item.key">
          <div v-if="item.type === 'group'" class="pano-studio-tl-group" :data-tip="item.group.tip" :data-group="item.group.key">
            <span class="pano-studio-tl-group-name">{{ item.group.label }}</span>
            <span class="pano-studio-tl-group-actions">
              <button
                type="button"
                class="pano-studio-tl-chip"
                :data-tip="item.group.revert.tip"
                :aria-disabled="item.group.revert.disabled ? 'true' : null"
                data-part="revert"
                @click="onGroupAction(item.group, 'revert-upstream-layer')"
              >Revert</button>
              <button
                type="button"
                class="pano-studio-tl-chip"
                :aria-disabled="item.group.restore.disabled ? 'true' : null"
                data-part="restore"
                @click="onGroupAction(item.group, 'restore-upstream-deleted')"
              >{{ item.group.restore.label }}</button>
            </span>
          </div>
          <div
            v-else
            class="pano-studio-tl-line"
            :class="{ 'is-lane': item.type === 'lane', 'is-selected': item.row.selected }"
          >
            <StudioTimelineHead
              :row="item.row"
              :lane="item.type === 'lane' ? item.lane : null"
              @eye="onEye(item.row.id)"
              @expand="toggleOpen(item.row.id)"
              @select="onSelectRow(item.row.id)"
              @frame="emit('frame-selected', item.row.id)"
              @key="onKeyRow(item.row.id)"
            />
            <div
              class="pano-studio-tl-track"
              :data-line="item.line"
              :data-track="item.type === 'lane' ? `${item.row.id}:${item.lane.lane}` : item.row.id"
              @pointerdown="onTrackDown"
            >
              <div
                v-if="item.type === 'row' && item.row.clip"
                class="pano-studio-tl-clip"
                :class="{ 'is-background': item.row.kind === 'background', 'is-fixed': !item.row.clipEditable }"
                :style="clipStyle(item.row.clip)"
                data-part="clip"
                @pointerdown.stop="onClipDown($event, item.row, 'move')"
              >
                <span class="pano-studio-tl-clip-edge is-start" data-part="clip-start" @pointerdown.stop="onClipDown($event, item.row, 'start')" />
                <span class="pano-studio-tl-clip-edge is-end" data-part="clip-end" @pointerdown.stop="onClipDown($event, item.row, 'end')" />
              </div>
              <span
                v-for="key in (item.type === 'lane' ? item.lane.keys : item.row.pins)"
                :key="key.ownerFrame"
                class="pano-studio-tl-key"
                :class="{ 'is-half': !key.full, 'is-selected': key.selected }"
                :style="{ left: `${x(key.frame)}px` }"
                :data-frame="key.frame"
                @pointerdown.stop="onKeyDown($event, model.lines[item.line], key)"
              />
            </div>
          </div>
        </template>
        <div class="pano-studio-tl-playhead" :style="{ left: `calc(var(--studio-tl-head) + ${playheadX}px)` }" />
        <div
          v-if="marquee"
          class="pano-studio-tl-marquee"
          :style="{ left: `${marquee.left}px`, top: `${marquee.top}px`, width: `${marquee.width}px`, height: `${marquee.height}px` }"
        />
      </div>
      <!-- The empty area below the rows: its track column acts as an empty spot of a track, its name column is nothing. -->
      <div class="pano-studio-tl-fill">
        <div />
        <div ref="fill" class="pano-studio-tl-fill-track" data-tl="fill" @pointerdown="onTrackDown" />
      </div>
    </div>
  </div>
</template>
