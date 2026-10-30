<script setup>
import { ICON } from "../../icons.js";
import StudioIconButton from "./StudioIconButton.vue";
import StudioNumberField from "./StudioNumberField.vue";

// The Timeline's bar (docs/studio-ui.md "タイムラインのバー"; what each part does: docs/timeline-ui.md). From the left:
// play and pause, the previous and the next Keyframe, the loop button (its icon shows the state), the time and frame; on the right the fps
// field, the Length field and its reset, and the collapse button. Presentational: `bar` (timeline_model.js
// buildStudioTimeline().bar) in; `play`, `jump` (direction), `loop-change`, `fps`, `length` (a number, or null for
// the reset) and `collapse` out.
const props = defineProps({
  bar: { type: Object, required: true },
  collapsed: { type: Boolean, default: false },
});
const emit = defineEmits(["play", "jump", "loop-change", "fps", "length", "collapse"]);

// fps as typed: up to three decimals, without trailing zeros.
const fpsText = (value) => String(Math.round(value * 1000) / 1000);
const fpsParse = (text) => {
  const value = Number(String(text).trim());
  return Number.isFinite(value) ? value : null;
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
      label="Loop"
      :tip="bar.loop ? 'Loop: on' : 'Loop: off'"
      data-tl="loop"
      @press="emit('loop-change', !props.bar.loop)"
    />
    <span class="pano-studio-tl-time pano-studio-num" data-tl="time">
      <span class="pano-studio-tl-timecode">{{ bar.timecode }}</span>
      <span class="pano-studio-tl-frame">{{ bar.frameText }}</span>
    </span>
    <span class="pano-studio-tl-spacer" />
    <span class="pano-studio-tl-field" :title="bar.fpsTip">
      <span class="pano-studio-tl-field-name">fps</span>
      <StudioNumberField
        :value="bar.fps"
        :step="1"
        :precision="3"
        :min="1"
        :max="1000"
        :format="fpsText"
        :parse="fpsParse"
        :disabled="bar.fpsLocked"
        label="Timeline fps"
        data-tl="fps"
        @change="(value) => emit('fps', value)"
      />
    </span>
    <span class="pano-studio-tl-field" title="Output length in frames">
      <span class="pano-studio-tl-field-name">Length</span>
      <StudioNumberField
        :value="bar.length"
        :step="1"
        :precision="0"
        :min="1"
        :disabled="bar.lengthLocked"
        label="Length"
        data-tl="length"
        @change="(value) => emit('length', value)"
      />
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
