<script setup>
import { ICON } from "../../icons.js";
import StudioIconButton from "./StudioIconButton.vue";

// A row's reset (docs/studio-ui.md "リセットと Keyframe のポチ"): disabled, not hidden, while the row is at the
// value it would return to.
defineProps({
  // Whether the row already holds its default (then the button is disabled).
  atDefault: { type: Boolean, default: false },
  label: { type: String, default: "Reset" },
});
const emit = defineEmits(["reset"]);
</script>

<template>
  <StudioIconButton
    :icon="ICON.reset"
    :label="label"
    size="sm"
    :disabled="atDefault"
    @press="emit('reset')"
  />
</template>
