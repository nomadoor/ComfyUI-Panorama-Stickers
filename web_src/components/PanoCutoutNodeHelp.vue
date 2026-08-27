<script setup>
import { ref } from "vue";
import { ICON } from "../icons.js";
import PanoIconButton from "./PanoIconButton.vue";

const pinned = ref(false);

const rows = Object.freeze([
  ["Drag", "Pan view"],
  ["Shift + Drag", "Roll frame"],
  ["Wheel", "Adjust FOV"],
  ["Add / Delete", "Add or remove frame"],
  ["Aspect / Rotate", "Set output shape"],
  ["Double-click roll", "Reset to 0°"],
  ["Full Editor", "Detailed editing"],
]);
</script>

<template>
  <div
    class="pano-cutout-node-help"
    :class="{ 'is-pinned': pinned }"
    @pointerdown.stop
    @wheel.stop
  >
    <PanoIconButton
      :icon="ICON.help"
      label="Controls and shortcuts"
      tip="Controls and shortcuts"
      :pressed="pinned ? 'true' : 'false'"
      extra-class="pano-cutout-node-help-button"
      @click.stop="pinned = !pinned"
    />
    <div class="pano-cutout-node-help-popover" role="tooltip">
      <div class="pano-cutout-node-help-title">Node controls</div>
      <div
        v-for="row in rows"
        :key="row[0]"
        class="pano-cutout-node-help-row"
      >
        <kbd>{{ row[0] }}</kbd>
        <span>{{ row[1] }}</span>
      </div>
    </div>
  </div>
</template>
