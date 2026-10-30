<script setup>
// The Keyframe dot of an inspector row (docs/studio-ui.md "リセットと Keyframe のポチ"; shape and color:
// docs/design.md; what a press does: docs/timeline-ui.md "インスペクタの Keyframe のポチ"). Presentational: the
// state comes in, `toggle` goes out.
const props = defineProps({
  // "none" (no Keyframe on the row's Lane), "has" (Keyframes, none at the playhead), "now" (one at the playhead).
  state: { type: String, default: "none" },
  disabled: { type: Boolean, default: false },
  label: { type: String, default: "Keyframe" },
  tip: { type: String, default: "" },
});
const emit = defineEmits(["toggle"]);

function onClick() {
  if (!props.disabled) emit("toggle");
}
</script>

<template>
  <button
    type="button"
    class="pano-studio-keydot"
    :class="{ 'is-has': state === 'has', 'is-now': state === 'now' }"
    :aria-label="label"
    :aria-pressed="state === 'now' ? 'true' : 'false'"
    :aria-disabled="disabled ? 'true' : null"
    :data-tip="tip || label"
    :data-state="state"
    @click="onClick"
  />
</template>
