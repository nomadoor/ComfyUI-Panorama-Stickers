<script setup>
import { computed } from "vue";

// A small segmented control: one text segment per choice, the pressed one marked. Each segment carries
// its key in `attr` (e.g. data-space-mode), which the editor's click handler reads.
const props = defineProps({
  buttons: { type: Array, default: () => [] },
  attr: { type: String, required: true },
  label: { type: String, default: "" },
});

const selected = computed(() => Math.max(0, props.buttons.findIndex((button) => button.pressed === "true")));
</script>

<template>
  <div
    class="pano-segments"
    role="group"
    :aria-label="label"
    :style="{ '--pano-segment-count': buttons.length, '--pano-segment-index': selected }"
  >
    <button
      v-for="button in buttons"
      :key="button.key"
      class="pano-segments-item"
      :class="{ active: button.pressed === 'true' }"
      type="button"
      v-bind="{ [attr]: button.key }"
      :data-tip="button.tip"
      :aria-pressed="button.pressed"
    >{{ button.label }}</button>
  </div>
</template>
