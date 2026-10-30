<script setup>
import { ASPECT_SNAP, ASPECT_TICK_POSITIONS, ASPECT_TICKS, aspectLabel, aspectToPos, posToAspect } from "../../studio/ui_aspect.js";
import StudioSlider from "./StudioSlider.vue";

// The Aspect slider of the Camera card (docs/studio-ui.md "行の格子"): 16:9 at the left to 9:16 at the right,
// log2-spaced, ticks at 3:2 4:3 1:1 3:4 2:3 that the knob snaps to. The value box beside it is a
// StudioNumberField with aspectLabel/parseAspect (ui_aspect.js). Ratios are width ÷ height.
defineProps({
  value: { type: Number, default: 16 / 9 },
  disabled: { type: Boolean, default: false },
  label: { type: String, default: "Aspect" },
});
const emit = defineEmits(["input", "change", "cancel"]);

const MID = ASPECT_TICKS.indexOf(1);
</script>

<template>
  <StudioSlider
    :value="value"
    :ticks="ASPECT_TICK_POSITIONS"
    :mid-tick="MID"
    :snap="ASPECT_SNAP"
    :fill="false"
    :to-pos="aspectToPos"
    :from-pos="posToAspect"
    :disabled="disabled"
    :label="label"
    :value-text="aspectLabel(value)"
    @input="emit('input', $event)"
    @change="emit('change', $event)"
    @cancel="emit('cancel')"
  />
</template>
