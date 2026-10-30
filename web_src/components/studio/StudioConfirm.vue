<script setup>
import { nextTick, onMounted, ref } from "vue";

// A question over the stage that asks before an edit that takes much away (docs/studio-ui.md "ペイントの道具": Clear
// paint / Clear mask; looks: docs/design.md "確かめのダイアログ"): a veil, a card with the title, the text and the
// buttons Cancel and the confirming one. Cancel has the focus at first. Escape is the shell's (its order, docs/studio-ui.md
// "閉じ方"). Presentational: `answer` with true (confirmed) or false.
defineProps({
  title: { type: String, required: true },
  body: { type: String, default: "" },
  confirm: { type: String, required: true },
});
const emit = defineEmits(["answer"]);
const cancel = ref(null);
onMounted(() => nextTick(() => cancel.value?.focus({ preventScroll: true })));
</script>

<template>
  <div class="pano-studio-confirm-layer" data-confirm>
    <div class="pano-studio-confirm-veil" aria-hidden="true" @pointerdown.prevent="emit('answer', false)" />
    <div class="pano-studio-confirm" role="alertdialog" aria-modal="true" :aria-label="title">
      <div class="pano-studio-confirm-title">{{ title }}</div>
      <div v-if="body" class="pano-studio-confirm-body">{{ body }}</div>
      <div class="pano-studio-confirm-actions">
        <button ref="cancel" type="button" class="pano-studio-confirm-btn" data-confirm-answer="cancel" @click="emit('answer', false)">Cancel</button>
        <button type="button" class="pano-studio-confirm-btn is-strong" data-confirm-answer="ok" @click="emit('answer', true)">{{ confirm }}</button>
      </div>
    </div>
  </div>
</template>
