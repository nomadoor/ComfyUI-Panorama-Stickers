<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { ICON } from "../../icons.js";
import SvgIcon from "../shared/SvgIcon.vue";

// The Sky / World choice of an image picked with Add (docs/studio-ui.md "Add とドロップの見せ方"; its size: docs/design.md
// "大きさ" "Add の二択"): two buttons at the stage's center, each with the mark of where it puts the image. A press
// outside it cancels and still does what it does there (the shell's stage gets it too); Escape is the shell's (its
// order, docs/studio-ui.md "閉じ方"). Presentational: `choose` with "sky" or "world" (where it goes), `cancel`.
const emit = defineEmits(["choose", "cancel"]);
const root = ref(null);

const options = [
  { side: "sky", label: "Sky", icon: ICON.pano, tip: "Put the image in the sky, where the view looks" },
  { side: "world", label: "World", icon: ICON.box, tip: "Stand the image in the World, ahead of the view" },
];

function onWindowDown(event) {
  if (root.value && !root.value.contains(event.target)) emit("cancel");
}

onMounted(() => window.addEventListener("pointerdown", onWindowDown, true));
onBeforeUnmount(() => window.removeEventListener("pointerdown", onWindowDown, true));
</script>

<template>
  <div ref="root" class="pano-studio-float pano-studio-place-choice" role="group" aria-label="Place the image">
    <button
      v-for="option in options"
      :key="option.side"
      type="button"
      class="pano-studio-place-btn"
      :data-place="option.side"
      :title="option.tip"
      @click="emit('choose', option.side)"
    >
      <SvgIcon :icon="option.icon" />
      <span class="pano-studio-cap">{{ option.label }}</span>
    </button>
  </div>
</template>
