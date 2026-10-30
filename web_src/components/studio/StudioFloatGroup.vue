<script setup>
// A group of controls floating over the stage (docs/design.md "形と重なり"): 85% opaque, a 1px line, fully round,
// and the text color in place of the 2nd gray. Put `<span class="pano-studio-sep" />` between sub-groups.
//   layout "rail":  the left column of tools (vertical).
//   layout "knobs": the column of view knobs (vertical).
//   layout "bar":   the bar at the bottom center (horizontal, room for a name at the left).
//   layout "row":   a horizontal group of buttons (the bottom right).
defineProps({
  layout: { type: String, default: "row" },
  label: { type: String, default: "" },
});
</script>

<template>
  <div
    class="pano-studio-float"
    :class="`is-${layout}`"
    role="toolbar"
    :aria-label="label || null"
    :aria-orientation="layout === 'rail' || layout === 'knobs' ? 'vertical' : 'horizontal'"
  >
    <slot />
  </div>
</template>
