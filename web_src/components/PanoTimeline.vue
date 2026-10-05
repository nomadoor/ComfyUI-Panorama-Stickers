<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, shallowRef } from "vue";
import { ICON } from "../icons.js";
import { TIMELINE_FPS_MAX, TIMELINE_FPS_MIN, TIMELINE_LENGTH_MAX } from "../pano_scene_state.js";
import { clusterFrames, keyedAt, timelineTicks, timelineTimeLabel } from "../pano_timeline.js";
import SvgIcon from "./SvgIcon.vue";

// The Timeline of Panorama Studio's editor. It draws buildTimelineModel() and reports what the
// pointer does as Timeline frames; the editor owns every state change. playhead is { frame, playing },
// two refs the editor sets on each frame of playback; the model changes only with the state.
const props = defineProps({
  model: { type: Object, default: () => ({}) },
  playhead: { type: Object, default: () => ({ frame: shallowRef(0), playing: shallowRef(false) }) },
});
const emit = defineEmits(["action"]);

// Keyframes closer than this on screen show as one pin.
const PIN_GAP_PX = 10;

const rulerRef = ref(null);
const gridRef = ref(null);
const trackWidth = ref(1);
// The rows' natural height. The body eases to it (capped in CSS), so opening the Timeline or a
// row slides the stage's edge instead of moving it in one step.
const gridHeight = ref(0);
// The body hides its scrollbar while its height eases.
const sliding = ref(false);
let resizeObserver = null;
let gridObserver = null;
// Removes the window listeners of the drag in progress, without reporting its end.
let stopDrag = null;
onMounted(() => {
  resizeObserver = new ResizeObserver(([entry]) => {
    trackWidth.value = Math.max(1, entry.contentRect.width);
  });
  if (rulerRef.value) resizeObserver.observe(rulerRef.value);
  gridObserver = new ResizeObserver(([entry]) => {
    gridHeight.value = entry.contentRect.height;
  });
  if (gridRef.value) gridObserver.observe(gridRef.value);
});
onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  gridObserver?.disconnect();
  stopDrag?.();
});

const span = computed(() => Math.max(1, Number(props.model.span || 1)));
const frame = computed(() => props.playhead.frame.value);
const playing = computed(() => props.playhead.playing.value);
const timeLabel = computed(() => timelineTimeLabel(frame.value, Number(props.model.fps || 1)));
const pxPerFrame = computed(() => trackWidth.value / span.value);
const pct = (frame) => `${(frame / span.value) * 100}%`;
const ticks = computed(() => timelineTicks(span.value, pxPerFrame.value));

function frameAt(clientX) {
  const rect = rulerRef.value.getBoundingClientRect();
  const frame = Math.floor(((clientX - rect.left) / Math.max(1, rect.width)) * span.value);
  return Math.min(span.value - 1, Math.max(0, frame));
}

// Pins of a line's Keyframes; frames closer than PIN_GAP_PX on screen merge into one pin. `keys` are
// { frame, full } (a row: full when every Lane has a Keyframe there) and `selected` the selected frames.
function pins(lineKey, keys, selected) {
  const minGap = Math.ceil(PIN_GAP_PX / Math.max(1e-6, pxPerFrame.value));
  const full = new Map(keys.map((key) => [key.frame, key.full]));
  return clusterFrames(keys.map((key) => key.frame), minGap).map((pin, index) => ({
    ...pin,
    key: `${lineKey}:${index}`,
    partial: pin.frames.some((frame) => !full.get(frame)),
    selected: pin.frames.some((frame) => selected.includes(frame)),
  }));
}

// The pins of every row and Lane by line key, made again only when the model or the scale changes, not
// as the playhead moves.
const linePins = computed(() => {
  const lines = new Map();
  for (const row of props.model.rows || []) {
    lines.set(row.id, pins(row.id, row.keys, row.selectedFrames));
    for (const lane of row.lanes) lines.set(lane.key, pins(lane.key, lane.frames.map((at) => ({ frame: at, full: true })), lane.selectedFrames));
  }
  return lines;
});

function clipStyle(clip) {
  const end = clip.end === null ? span.value : clip.end;
  return { left: pct(clip.start), width: pct(Math.max(0, end - clip.start)) };
}

// Reports a drag as whole-frame offsets from where it started. The scale is fixed at the start, as
// a drag past the end widens the Timeline. The listeners are on window because the dragged pin's
// element can be re-rendered away when Keyframes merge.
function drag(event, onStep) {
  const startX = event.clientX;
  const scale = Math.max(1e-6, pxPerFrame.value);
  let delta = 0;
  onStep("start", 0, event);
  const move = (ev) => {
    if (ev.pointerId !== event.pointerId) return;
    const next = Math.round((ev.clientX - startX) / scale);
    if (next === delta) return;
    delta = next;
    onStep("move", delta, ev);
  };
  const end = (ev) => {
    if (ev.pointerId !== event.pointerId) return;
    stopDrag();
    onStep("end", delta, ev);
  };
  stopDrag?.();
  stopDrag = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", end);
    window.removeEventListener("pointercancel", end);
    stopDrag = null;
  };
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", end);
  window.addEventListener("pointercancel", end);
}

function onRulerDown(event) {
  if (event.button !== 0) return;
  drag(event, (phase, _delta, ev) => emit("action", { type: "seek", frame: frameAt(ev.clientX), phase }));
}

function onClipDown(event, row, mode) {
  if (event.button !== 0) return;
  emit("action", { type: "select-row", id: row.id });
  drag(event, (phase, delta) => emit("action", { type: "clip", id: row.id, mode, delta, phase }));
}

// lane is a Lane's name, or null for the row's pins, which stand for every Lane's Keyframes there.
// Shift-click adds or removes the pin's Keyframes without dragging them.
function onPinDown(event, row, lane, pin, selected) {
  if (event.button !== 0) return;
  if (event.shiftKey) {
    emit("action", { type: "select-keys", owner: row.id, lane, frames: pin.frames, additive: true });
    return;
  }
  if (!pin.frames.every((frame) => selected.includes(frame))) {
    emit("action", { type: "select-keys", owner: row.id, lane, frames: pin.frames, additive: false });
  }
  drag(event, (phase, delta) => emit("action", { type: "move-keys", delta, phase }));
}

const fpsText = computed(() => String(Number(Number(props.model.fps || 0).toFixed(3))));

// The editor keeps a value it rejects as it was, so the field shows the model again after the edit.
async function emitSetting(event, action, shown) {
  emit("action", action);
  await nextTick();
  event.target.value = shown();
}

function onFpsChange(event) {
  emitSetting(event, { type: "fps", fps: Number(event.target.value) }, () => fpsText.value);
}

// An empty length follows the inputs again.
function onLengthChange(event) {
  const text = event.target.value.trim();
  emitSetting(event, { type: "length", length: text ? Number(text) : null }, () => props.model.length ?? "");
}

function onLineDown(event, row, lane) {
  if (event.button !== 0 || event.target !== event.currentTarget) return;
  emit("action", { type: "select-keys", owner: row.id, lane, frames: [], additive: false });
}
</script>

<template>
  <section v-show="model.visible" class="pano-timeline" :class="{ expanded: model.expanded }" data-timeline>
    <div class="pano-timeline-bar">
      <button
        class="pano-btn pano-btn-icon pano-timeline-play"
        type="button"
        :aria-label="playing ? 'Pause (Space)' : 'Play (Space)'"
        :data-tip="playing ? 'Pause (Space)' : 'Play (Space)'"
        @click="emit('action', { type: 'play' })"
      >
        <SvgIcon :icon="playing ? ICON.pause : ICON.play" />
      </button>
      <button
        v-if="model.hasAudio"
        class="pano-btn pano-btn-icon pano-timeline-mute"
        type="button"
        :aria-label="model.muted ? 'Unmute' : 'Mute'"
        :data-tip="model.muted ? 'Unmute' : 'Mute'"
        @click="emit('action', { type: 'mute' })"
      >
        <SvgIcon :icon="model.muted ? ICON.volume_muted : ICON.volume2" />
      </button>
      <span class="pano-timeline-time">{{ timeLabel }}</span>
      <label class="pano-timeline-setting" :data-tip="model.fpsLocked ? 'Set by the video input' : 'Timeline fps'">
        <span v-if="model.fpsLocked">{{ fpsText }}</span>
        <input v-else type="number" :min="TIMELINE_FPS_MIN" :max="TIMELINE_FPS_MAX" step="any" :value="fpsText" aria-label="Timeline fps" @change="onFpsChange">
        <span>fps</span>
      </label>
      <label class="pano-timeline-setting" data-tip="Output length in frames; empty follows the inputs">
        <span>Length</span>
        <input type="number" min="1" :max="TIMELINE_LENGTH_MAX" step="1" placeholder="Auto" :value="model.length ?? ''" aria-label="Output length in frames" @change="onLengthChange">
      </label>
      <button
        class="pano-timeline-toggle"
        type="button"
        :aria-expanded="model.expanded ? 'true' : 'false'"
        @click="emit('action', { type: 'toggle-expanded' })"
      >
        <span>Timeline</span>
        <SvgIcon :icon="ICON.chevron" />
      </button>
    </div>
    <div
      class="pano-timeline-body"
      :class="{ open: model.expanded, sliding }"
      :style="{ '--pano-timeline-rows': `${gridHeight}px` }"
      :inert="!model.expanded"
      @transitionrun.self="sliding = true"
      @transitionend.self="sliding = false"
      @transitioncancel.self="sliding = false"
    >
      <div ref="gridRef" class="pano-timeline-grid">
        <div class="pano-timeline-corner" />
        <div ref="rulerRef" class="pano-timeline-ruler" @pointerdown="onRulerDown">
          <span v-for="frame in ticks" :key="frame" class="pano-timeline-tick" :style="{ left: pct(frame) }">{{ frame }}</span>
          <span class="pano-timeline-playhead" :style="{ left: pct(frame + 0.5) }" />
        </div>
        <template v-for="row in model.rows || []" :key="row.id">
          <div class="pano-timeline-head" :class="{ selected: row.selected, 'is-hidden': !row.visible }">
            <div class="pano-timeline-name">
              <button
                v-if="row.hideable"
                class="pano-timeline-eye"
                type="button"
                :aria-pressed="row.visible ? 'true' : 'false'"
                :aria-label="`${row.label} visible`"
                :data-tip="row.visible ? 'Hide' : 'Show'"
                @click.stop="emit('action', { type: 'toggle-visible', id: row.id })"
              >
                <SvgIcon :icon="row.visible ? ICON.eye : ICON.eye_dashed" />
              </button>
              <span v-else class="pano-timeline-eye" aria-hidden="true" />
              <button
                class="pano-timeline-open"
                type="button"
                :disabled="!row.keyable"
                :aria-expanded="row.open ? 'true' : 'false'"
                :aria-label="row.open ? `Hide ${row.label} parameters` : `Show ${row.label} parameters`"
                @click.stop="emit('action', { type: 'toggle-row', id: row.id })"
              >
                <SvgIcon :icon="ICON.chevron" />
              </button>
              <button
                class="pano-timeline-select"
                type="button"
                :title="row.label"
                :aria-current="row.selected ? 'true' : undefined"
                @click="emit('action', { type: 'select-row', id: row.id })"
              >
                <SvgIcon :icon="row.icon" />
                <span>{{ row.label }}</span>
              </button>
              <button
                v-if="row.keyable"
                class="pano-timeline-key"
                :class="{ keyed: keyedAt(row.keys, frame) }"
                type="button"
                :data-keyed="keyedAt(row.keys, frame) ? 'true' : 'false'"
                :aria-label="keyedAt(row.keys, frame) ? `Every ${row.label} parameter has a keyframe here; update them` : `Add keyframes for every ${row.label} parameter here`"
                data-tip="Keyframe every parameter here"
                @click.stop="emit('action', { type: 'key-row', owner: row.id })"
              >
                <SvgIcon :icon="ICON.keyframe" />
              </button>
            </div>
            <template v-if="row.open">
              <div v-for="lane in row.lanes" :key="lane.key" class="pano-timeline-lane-head">{{ lane.label }}</div>
            </template>
          </div>
          <div class="pano-timeline-track" :class="{ selected: row.selected }">
            <div class="pano-timeline-row-line" @pointerdown="onLineDown($event, row, null)">
              <div
                v-if="row.clip"
                class="pano-timeline-clip"
                :class="{ open: row.clip.end === null }"
                :style="clipStyle(row.clip)"
                @pointerdown.stop="onClipDown($event, row, 'move')"
              >
                <span class="pano-timeline-trim start" @pointerdown.stop="onClipDown($event, row, 'start')" />
                <span class="pano-timeline-trim end" @pointerdown.stop="onClipDown($event, row, 'end')" />
              </div>
              <button
                v-for="pin in linePins.get(row.id)"
                :key="pin.key"
                type="button"
                class="pano-timeline-pin"
                :class="{ selected: pin.selected, cluster: pin.frames.length > 1, partial: pin.partial }"
                :style="{ left: pct(pin.frame + 0.5) }"
                :aria-label="`${row.label}: ${pin.frames.length > 1 ? `${pin.frames.length} keyframes` : `keyframe at frame ${pin.frames[0]}`}`"
                :data-tip="pin.frames.length > 1 ? `${pin.frames.length} keyframes` : `Frame ${pin.frames[0]}`"
                @pointerdown.stop="onPinDown($event, row, null, pin, row.selectedFrames)"
              >
                <span v-if="pin.frames.length > 1">{{ pin.frames.length }}</span>
              </button>
            </div>
            <template v-if="row.open">
              <div
                v-for="lane in row.lanes"
                :key="lane.key"
                class="pano-timeline-lane"
                @pointerdown="onLineDown($event, row, lane.lane)"
              >
                <button
                  v-for="pin in linePins.get(lane.key)"
                  :key="pin.key"
                  type="button"
                  class="pano-timeline-pin"
                  :class="{ selected: pin.selected, cluster: pin.frames.length > 1 }"
                  :style="{ left: pct(pin.frame + 0.5) }"
                  :aria-label="`${lane.label}: ${pin.frames.length > 1 ? `${pin.frames.length} keyframes` : `keyframe at frame ${pin.frames[0]}`}`"
                  :data-tip="pin.frames.length > 1 ? `${pin.frames.length} keyframes` : `Frame ${pin.frames[0]}`"
                  @pointerdown.stop="onPinDown($event, row, lane.lane, pin, lane.selectedFrames)"
                >
                  <span v-if="pin.frames.length > 1">{{ pin.frames.length }}</span>
                </button>
              </div>
            </template>
            <span class="pano-timeline-playhead" :style="{ left: pct(frame + 0.5) }" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
