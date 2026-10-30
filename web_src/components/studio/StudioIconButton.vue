<script setup>
import SvgIcon from "../shared/SvgIcon.vue";

// A round icon button of the new UI (docs/design.md "新しい UI の見た目"). Presentational: props in, `press` out.
// A disabled button stays in place and keeps its tooltip (aria-disabled, not the disabled attribute), so the
// reason it cannot be used still shows (docs/agents/ux-principles.md).
const props = defineProps({
  // A Tabler icon of icons.js, or "" when the default slot draws the icon (the Add icon).
  icon: { type: String, default: "" },
  // The accessible name; also the tooltip unless `tip` is given.
  label: { type: String, required: true },
  tip: { type: String, default: "" },
  // "md" (32px), "sm" (22px, a row's reset), "knob" (34px, the view knobs).
  size: { type: String, default: "md" },
  // The chosen one of a group (a tool); not a toggle.
  active: { type: Boolean, default: false },
  // A view knob while its operation runs.
  lit: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});
const emit = defineEmits(["press"]);

function onClick(event) {
  if (props.disabled) return;
  emit("press", event);
}
</script>

<template>
  <button
    type="button"
    class="pano-studio-icon-btn"
    :class="{ 'is-sm': size === 'sm', 'is-knob': size === 'knob', 'is-active': active, 'is-lit': lit }"
    :aria-label="label"
    :data-tip="tip || label"
    :aria-disabled="disabled ? 'true' : null"
    @click="onClick"
  >
    <slot><SvgIcon :icon="icon" /></slot>
  </button>
</template>
