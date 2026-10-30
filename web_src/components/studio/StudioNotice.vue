<script setup>
// The one line at the top center of the stage (docs/studio-ui.md "画面の区画", "一行の知らせの種類"): its text and, on
// its left, the mark of its kind: a coral dot (stopped), a soft yellow dot (warning), a small spinning ring (loading),
// nothing (info). One at a time; the shell decides which (studio/notice_line.js). Nothing shows without text, and the
// line never moves the other parts.
defineProps({
  text: { type: String, default: "" },
  // "stopped", "warning", "info" or "loading" (notice_line.js NOTICE_KINDS).
  kind: { type: String, default: "info" },
});
</script>

<template>
  <div
    v-if="text"
    class="pano-studio-float pano-studio-notice"
    :class="`is-${kind}`"
    role="status"
    aria-live="polite"
    :data-notice="kind"
  >
    <span v-if="kind === 'stopped' || kind === 'warning'" class="pano-studio-notice-dot" aria-hidden="true" />
    <span v-else-if="kind === 'loading'" class="pano-studio-notice-ring" aria-hidden="true" />
    <span class="pano-studio-cap">{{ text }}</span>
  </div>
</template>
