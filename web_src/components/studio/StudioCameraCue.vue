<script setup>
// The cue of the left column's Camera button (docs/studio-ui.md "エディタの中の Camera", the values in docs/design.md
// "新しい UI の見た目" "動き"): four soft yellow viewfinder brackets fly in from the stage's corners, pinch once like a
// focus lock, hold and lift away, over a faint yellow vignette. A CSS layer over the stage: the 3D view is neither
// stopped nor drawn again. The editor mounts it once per move (a new key restarts it); it hides itself when its
// lifetime animation ends, which is also the one that runs with reduced motion.
import { ref } from "vue";

// Each bracket's two arms in a 48 x 48 box, its outer corner rounded; the strokes do not scale with the box.
const BRACKETS = Object.freeze([
  { corner: "tl", d: "M3 45V11Q3 3 11 3H45" },
  { corner: "tr", d: "M3 3H37Q45 3 45 11V45" },
  { corner: "br", d: "M45 3V37Q45 45 37 45H3" },
  { corner: "bl", d: "M45 45H11Q3 45 3 37V3" },
]);

const shown = ref(true);

function ended(event) {
  if (event.target === event.currentTarget) shown.value = false;
}
</script>

<template>
  <div v-if="shown" class="pano-studio-cue" data-camera-cue aria-hidden="true" @animationend="ended">
    <div class="pano-studio-cue-vignette" />
    <svg
      v-for="bracket in BRACKETS"
      :key="bracket.corner"
      class="pano-studio-cue-bracket"
      :class="`is-${bracket.corner}`"
      data-cue-bracket
      viewBox="0 0 48 48"
    >
      <path class="pano-studio-cue-under" :d="bracket.d" />
      <path class="pano-studio-cue-line" :d="bracket.d" />
    </svg>
  </div>
</template>
