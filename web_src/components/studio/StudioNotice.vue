<script setup>
// The one line at the top center of the stage (docs/studio-ui.md "画面の区画", "読み込み中と空の画面"): a notice with
// a coral dot, or a line saying what the stage waits for or what to do on an empty stage. One at a time; the shell
// decides which. Nothing shows without text, and the line never moves the other parts.
defineProps({
  text: { type: String, default: "" },
  // "notice" (an operation that did nothing, the bound), "loading" or "hint" (the empty stage).
  kind: { type: String, default: "notice" },
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
    <span v-if="kind === 'notice'" class="pano-studio-notice-dot" aria-hidden="true" />
    <span class="pano-studio-cap">{{ text }}</span>
  </div>
</template>
