<script setup>
import { ref } from "vue";
import { ICON } from "../icons.js";
import PanoIconButton from "./PanoIconButton.vue";

const pinned = ref(false);
const rows = Object.freeze([
  ["Add Image", "Choose an image file"],
  ["Drop image", "Add at view center"],
  ["Sticker drag", "Move sticker"],
  ["Corner drag", "Scale sticker"],
  ["Top handle", "Rotate sticker"],
  ["Delete", "Delete selected sticker"],
  ["Restore", "Reset input sticker pose"],
  ["Empty drag", "Pan view"],
  ["Wheel", "Adjust FOV"],
  ["Full Editor", "Detailed editing"],
]);
</script>

<template>
  <div
    class="pano-stickers-node-help"
    :class="{ 'is-pinned': pinned }"
    @pointerdown.stop
    @wheel.stop
  >
    <PanoIconButton
      :icon="ICON.help"
      label="Controls and shortcuts"
      tip="Controls and shortcuts"
      :pressed="pinned ? 'true' : 'false'"
      extra-class="pano-stickers-node-help-button"
      @click.stop="pinned = !pinned"
    />
    <div class="pano-stickers-node-help-popover" role="tooltip">
      <div class="pano-stickers-node-help-title">Node controls</div>
      <div v-for="row in rows" :key="row[0]" class="pano-stickers-node-help-row">
        <kbd>{{ row[0] }}</kbd>
        <span>{{ row[1] }}</span>
      </div>
    </div>
  </div>
</template>
