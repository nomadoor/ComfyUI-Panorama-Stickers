<script setup>
import StudioKeyDot from "./StudioKeyDot.vue";
import StudioResetButton from "./StudioResetButton.vue";

// One row of the inspector's grid (docs/studio-ui.md "行の格子"; widths: docs/design.md): name / 1 / 2 / 3 /
// Keyframe dot / reset. Every row has the same columns, so boxes, dots and resets line up down the card.
//   layout "multi":  slot `default` holds the value boxes in columns 1–3 (two boxes leave column 3 empty).
//   layout "single": slot `control` (a slider) in columns 1–2, slot `value` (its box) in column 3.
//   layout "wide":   slot `default` (a segmented control, a button) across columns 1–3.
// A row that does not apply stays in place, grayed and untouchable (`disabled`). Presentational: the dot's state and
// whether the row is at its default come in; `key-toggle` and `reset` go out.
const props = defineProps({
  name: { type: String, required: true },
  layout: { type: String, default: "multi" },
  // The Keyframe dot's state ("none" | "has" | "now"), or null for a row without a Lane (no dot).
  keyState: { type: String, default: null },
  keyDisabled: { type: Boolean, default: false },
  // Whether the row has a reset, and whether it is at the value the reset returns to.
  resettable: { type: Boolean, default: true },
  atDefault: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  // A small mark beside the name (an upstream value this node overrides).
  marked: { type: Boolean, default: false },
  tip: { type: String, default: "" },
});
const emit = defineEmits(["key-toggle", "reset"]);
</script>

<template>
  <div
    class="pano-studio-row"
    :class="{ 'is-disabled': disabled }"
    role="group"
    :aria-label="name"
    :aria-disabled="disabled ? 'true' : null"
    :title="tip || null"
    :data-row="name"
  >
    <span class="pano-studio-row-name">
      <span class="pano-studio-cap">{{ name }}</span>
      <span v-if="marked" class="pano-studio-row-mark" aria-hidden="true" />
    </span>
    <div v-if="layout === 'multi'" class="pano-studio-row-values">
      <slot />
    </div>
    <template v-else-if="layout === 'single'">
      <div class="pano-studio-row-control"><slot name="control" /></div>
      <div class="pano-studio-row-value"><slot name="value" /></div>
    </template>
    <div v-else class="pano-studio-row-wide">
      <slot />
    </div>
    <div class="pano-studio-row-dot">
      <StudioKeyDot
        v-if="keyState"
        :state="keyState"
        :disabled="disabled || keyDisabled"
        @toggle="emit('key-toggle')"
      />
    </div>
    <div class="pano-studio-row-reset">
      <StudioResetButton
        v-if="resettable"
        :at-default="disabled || atDefault"
        :label="`Reset ${name}`"
        @reset="emit('reset')"
      />
    </div>
  </div>
</template>
