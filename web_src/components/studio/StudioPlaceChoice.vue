<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

// The Sky / World choice of an image picked with Add (docs/studio-ui.md "Add とドロップの見せ方"; its look: docs/design.md
// "大きさ" "Add の二択", "動き"): a dark veil over the whole stage and, at its middle, two big tiles in the language of
// the Camera card's mode tiles (StudioModeTiles.vue, the mock mode-3.html M1), each a line picture of where it puts the
// image and its name, in the color of that place (Sky ice, World the soft yellow). The veil takes no press: a press
// outside the tiles cancels and still does what it does there (the shell's stage gets it too); Escape is the shell's
// (its order, docs/studio-ui.md "閉じ方"). The Sky tile has the focus at first; the left and right arrows move it, Enter
// and Space choose. Presentational: `choose` with "sky" or "world" (where it goes), `cancel`.
const emit = defineEmits(["choose", "cancel"]);
const tiles = ref(null);

const options = [
  { side: "sky", label: "Sky", tip: "Put the image in the sky, where the view looks" },
  { side: "world", label: "World", tip: "Stand the image in the World, ahead of the view" },
];

function onWindowDown(event) {
  if (tiles.value && !tiles.value.contains(event.target)) emit("cancel");
}

function onKeydown(event) {
  const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
  if (!step) return;
  event.preventDefault();
  const buttons = [...tiles.value.querySelectorAll("button")];
  const here = Math.max(0, buttons.indexOf(document.activeElement));
  buttons[(here + step + buttons.length) % buttons.length]?.focus();
}

onMounted(() => {
  window.addEventListener("pointerdown", onWindowDown, true);
  nextTick(() => tiles.value?.querySelector("button")?.focus({ preventScroll: true }));
});
onBeforeUnmount(() => window.removeEventListener("pointerdown", onWindowDown, true));
</script>

<template>
  <div class="pano-studio-place-veil" aria-hidden="true" />
  <div ref="tiles" class="pano-studio-place-choice" role="group" aria-label="Place the image" @keydown="onKeydown">
    <button
      v-for="option in options"
      :key="option.side"
      type="button"
      class="pano-studio-place-tile"
      :class="`is-${option.side}`"
      :data-place="option.side"
      :title="option.tip"
      @click="emit('choose', option.side)"
    >
      <!-- Sky: the upper half of the sphere over the horizon, an image laid on it, bent with it. -->
      <svg v-if="option.side === 'sky'" class="pano-studio-place-pic" viewBox="0 0 96 56" aria-hidden="true">
        <path d="M6 50h84" />
        <path d="M10 50a38 38 0 0 1 76 0" />
        <path class="is-thin" d="M20 50a28 14 0 0 1 56 0M30 50c0-18 6-30 18-34c12 4 18 16 18 34" />
        <path d="M52 17.5l15 4.5l-3.5 14l-14.5-3.5z" />
        <path class="is-thin" d="M55 27l3-3l3 4" />
      </svg>
      <!-- World: the ground grid running off, a board and a box standing on it. -->
      <svg v-else class="pano-studio-place-pic" viewBox="0 0 96 56" aria-hidden="true">
        <path class="is-thin" d="M4 52h88M14 44h68M22 38h52M48 36v16M30 36l-18 16M66 36l18 16" />
        <path d="M24 46V20h20v26" />
        <path class="is-thin" d="M28 32l5-5l6 7" />
        <path d="M56 34l10-5l12 5l-10 5zM56 34v11l12 6v-12M78 34v11l-10 6" />
      </svg>
      <span class="pano-studio-place-name pano-studio-cap">{{ option.label }}</span>
    </button>
  </div>
</template>
