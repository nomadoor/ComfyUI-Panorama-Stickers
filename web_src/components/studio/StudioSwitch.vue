<script setup>
// An on / off switch of the new UI (docs/agents/ux-principles.md: a setting that is on or off is a switch whose look
// shows its state, not a button that flips each press). Presentational: `on` in, `change` out with the new value.
const props = defineProps({
  on: { type: Boolean, default: false },
  label: { type: String, required: true },
  tip: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
});
const emit = defineEmits(["change"]);

function toggle() {
  if (!props.disabled) emit("change", !props.on);
}
</script>

<template>
  <button
    type="button"
    role="switch"
    class="pano-studio-switch"
    :class="{ 'is-on': on }"
    :aria-checked="String(on)"
    :aria-disabled="disabled ? 'true' : null"
    :title="tip || label"
    @click="toggle"
  >
    <span class="pano-studio-switch-track" aria-hidden="true"><span class="pano-studio-switch-thumb" /></span>
    <span class="pano-studio-switch-label pano-studio-cap">{{ label }}</span>
  </button>
</template>
