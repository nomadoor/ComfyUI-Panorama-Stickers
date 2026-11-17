<script setup>
import { computed, ref } from "vue";
import { ICON } from "../../icons.js";
import { TIMELINE_FPS_MAX, TIMELINE_FPS_MIN } from "../../pano_scene_state.js";
import { lengthFromSeconds, lengthSecondsText } from "../../studio/timeline_actions.js";
import { parseNumber } from "../../studio/ui_drag.js";
import SvgIcon from "../shared/SvgIcon.vue";
import StudioIconButton from "./StudioIconButton.vue";
import StudioNumberField from "./StudioNumberField.vue";
import StudioSlider from "./StudioSlider.vue";

// The Timeline's bar (docs/studio-ui.md "タイムラインのバー"; what each part does: docs/timeline-ui.md). From the left:
// play and pause, the previous and the next Keyframe, the playback loop button (its icon shows the state), the time and
// frame, Constant speed and Simplify with its slider between the fewest it keeps and the count selected while adjusting (docs/timeline-ui.md "Simplify"); on the right the fps
// field, the Length field and its reset, and the collapse button. Presentational: `bar` (timeline_model.js
// buildStudioTimeline().bar) in; `play`, `jump` (direction), `loop-change`, `fps`, `length-input` (each value while
// the Length field is dragged, and a typed one just before its `length`), `length` (a number once on release or typing,
// or null for the reset), `length-cancel` (the Length field given up: after a drag, its `length-input` with the value
// from before comes first), `length-unit` (the unit mark: "frames" or "seconds") and `collapse` out. fps goes out on
// release only. `simplify` (Simplify pressed) and `simplify-count` (the slider: the count of Keyframes to keep) go out too.
//
// `lengthUnit` is the unit the Length field shows (docs/timeline-ui.md "タイムラインの長さ"): in seconds it shows the
// length ÷ fps and reads typed seconds as the nearest frame, while the field itself keeps whole frames (a drag step is
// one frame), so the length goes out in frames either way.
//
// The fps and Length fields fill their name with the value, so a press on the name (or the field's padding) drags the
// value as a press on it does (StudioNumberField startDrag; docs/studio-ui.md "欄").
const props = defineProps({
  bar: { type: Object, required: true },
  collapsed: { type: Boolean, default: false },
  lengthUnit: { type: String, default: "frames" },
});
const emit = defineEmits(["play", "jump", "loop-change", "fps", "length-input", "length", "length-cancel", "length-unit", "collapse", "simplify", "simplify-count", "constant-speed"]);

// Simplify's slider is the count of Keyframes to keep: the least at its left, the original count at its right.
const simplify = computed(() => props.bar.simplify ?? null);
function onSimplifyCount(value) {
  const run = simplify.value;
  if (run?.adjusting) emit("simplify-count", Math.round(value));
}

const fpsField = ref(null);
const lengthField = ref(null);

// fps as typed: up to three decimals, without trailing zeros.
const fpsText = (value) => String(Math.round(value * 1000) / 1000);
const fpsParse = (text) => {
  const value = Number(String(text).trim());
  return Number.isFinite(value) ? value : null;
};

const inSeconds = computed(() => props.lengthUnit === "seconds");
const lengthText = (value) => lengthSecondsText(value, props.bar.fps);
const lengthParse = (text) => {
  const seconds = parseNumber(text);
  return seconds === null ? null : lengthFromSeconds(seconds, props.bar.fps);
};
</script>

<template>
  <div class="pano-studio-tl-bar">
    <StudioIconButton
      :icon="bar.playing ? ICON.pause : ICON.play"
      :label="bar.playing ? 'Pause' : 'Play'"
      :tip="bar.playing ? 'Pause (Space)' : 'Play (Space)'"
      :disabled="!bar.playable"
      data-tl="play"
      @press="emit('play')"
    />
    <StudioIconButton
      :icon="ICON.key_prev"
      label="Previous Keyframe"
      :disabled="bar.prev.disabled"
      data-tl="prev"
      @press="emit('jump', -1)"
    />
    <StudioIconButton
      :icon="ICON.key_next"
      label="Next Keyframe"
      :disabled="bar.next.disabled"
      data-tl="next"
      @press="emit('jump', 1)"
    />
    <StudioIconButton
      role="switch"
      :aria-checked="bar.loop ? 'true' : 'false'"
      :icon="bar.loop ? ICON.loop : ICON.loop_off"
      label="Loop playback"
      :tip="bar.loop ? 'Loop playback: on' : 'Loop playback: off'"
      data-tl="loop"
      @press="emit('loop-change', !props.bar.loop)"
    />
    <span class="pano-studio-tl-time pano-studio-num" data-tl="time">
      <span class="pano-studio-tl-timecode">{{ bar.timecode }}</span>
      <span class="pano-studio-tl-frame-seat">
        <span class="pano-studio-tl-frame">{{ bar.frameText }}</span>
        <span class="pano-studio-tl-frame-widest" aria-hidden="true">{{ bar.frameWidest }}</span>
      </span>
    </span>
    <span class="pano-studio-sep" />
    <!-- Constant speed (docs/timeline-ui.md "Constant speed"): one press moves the selected Keyframes in time. -->
    <button
      type="button"
      class="pano-studio-tl-simplify-btn"
      :aria-disabled="bar.constantSpeed?.disabled !== false ? 'true' : null"
      :data-tip="bar.constantSpeed?.tip ?? 'Constant speed'"
      data-tl="constant-speed"
      @click="bar.constantSpeed?.disabled === false && emit('constant-speed')"
    >
      <SvgIcon :icon="ICON.constant_speed" />
      <span>Constant speed</span>
    </button>
    <span v-if="simplify" class="pano-studio-tl-simplify" :class="{ 'is-adjusting': simplify.adjusting }" data-tl="simplify-group">
      <button
        type="button"
        class="pano-studio-tl-simplify-btn"
        :aria-disabled="simplify.disabled ? 'true' : null"
        :data-tip="simplify.tip"
        data-tl="simplify"
        @click="!simplify.disabled && emit('simplify')"
      >
        <SvgIcon :icon="ICON.simplify" />
        <span>Simplify</span>
      </button>
      <!-- While adjusting only: the slider between its ends, the fewest it can keep and the count selected (docs/timeline-ui.md
           "Simplify"). -->
      <span v-if="simplify.adjusting" class="pano-studio-tl-simplify-adjust" data-tl="simplify-adjust">
        <span class="pano-studio-tl-simplify-end pano-studio-num" data-tl="simplify-least">{{ simplify.least }}</span>
        <span class="pano-studio-tl-simplify-slider" data-tip="Keyframes to keep">
          <StudioSlider
            :value="simplify.count"
            :min="simplify.least"
            :max="simplify.original"
            :step="1"
            label="Keyframes to keep"
            @input="onSimplifyCount"
            @change="onSimplifyCount"
          />
        </span>
        <span class="pano-studio-tl-simplify-end pano-studio-num" data-tl="simplify-total">{{ simplify.original }}</span>
      </span>
    </span>
    <span class="pano-studio-tl-spacer" />
    <span
      class="pano-studio-tl-field is-fps"
      :class="{ 'is-disabled': bar.fpsLocked }"
      :data-tip="bar.fpsTip"
      @pointerdown="fpsField?.startDrag($event)"
    >
      <span class="pano-studio-tl-field-name">fps</span>
      <StudioNumberField
        ref="fpsField"
        :value="bar.fps"
        :step="1"
        :precision="3"
        :min="TIMELINE_FPS_MIN"
        :max="TIMELINE_FPS_MAX"
        :format="fpsText"
        :parse="fpsParse"
        :disabled="bar.fpsLocked"
        label="Timeline fps"
        data-tl="fps"
        @change="(value) => emit('fps', value)"
      />
    </span>
    <span
      class="pano-studio-tl-field is-length"
      :class="{ 'is-disabled': bar.lengthLocked }"
      :data-tip="inSeconds ? 'Output length in seconds' : 'Output length in frames'"
      @pointerdown="lengthField?.startDrag($event)"
    >
      <span class="pano-studio-tl-field-name">Length</span>
      <StudioNumberField
        ref="lengthField"
        :value="bar.length"
        :step="1"
        :precision="0"
        :min="1"
        :format="inSeconds ? lengthText : null"
        :parse="inSeconds ? lengthParse : null"
        :disabled="bar.lengthLocked"
        label="Length"
        data-tl="length"
        @input="(value) => emit('length-input', value)"
        @change="(value) => emit('length', value)"
        @cancel="emit('length-cancel')"
      />
      <button
        type="button"
        class="pano-studio-tl-unit"
        :aria-label="inSeconds ? 'Length in seconds: show frames' : 'Length in frames: show seconds'"
        :data-tip="inSeconds ? 'Show frames' : 'Show seconds'"
        data-part="length-unit"
        @pointerdown.stop
        @click="emit('length-unit', inSeconds ? 'frames' : 'seconds')"
      >{{ inSeconds ? "s" : "f" }}</button>
    </span>
    <StudioIconButton
      :icon="ICON.reset"
      label="Reset length to the inputs"
      size="sm"
      :disabled="bar.lengthResetDisabled"
      data-tl="length-reset"
      @press="emit('length', null)"
    />
    <StudioIconButton
      :icon="ICON.chevron"
      :label="collapsed ? 'Expand the timeline' : 'Collapse the timeline'"
      size="sm"
      :class="{ 'is-flipped': collapsed }"
      data-tl="collapse"
      @press="emit('collapse', !collapsed)"
    />
  </div>
</template>
