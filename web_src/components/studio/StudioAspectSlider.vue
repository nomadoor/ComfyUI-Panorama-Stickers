<script setup>
import {
  ASPECT_TICK_POSITIONS, ASPECT_TICKS, aspectLabel, aspectToPos, posToAspect, snapAspectPos, stepAspect,
} from "../../studio/ui_aspect.js";
import StudioSlider from "./StudioSlider.vue";

// The Aspect slider of the Camera card (docs/studio-ui.md "行の格子"): 16:9 at the left to 9:16 at the right,
// log2-spaced, ticks at 3:2 4:3 1:1 3:4 2:3. A press, a drag and the arrow keys land only on the presets (the ends
// and the ticks, ui_aspect.js ASPECT_PRESETS); a free ratio shows the knob at its place until the next move. Free
// ratios come from the value box beside it, a StudioNumberField with aspectLabel/parseAspect. Ratios are width ÷ height.
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
    :snap-to="snapAspectPos"
    :step-to="stepAspect"
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
