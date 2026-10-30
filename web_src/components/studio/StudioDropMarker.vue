<script setup>
import { computed } from "vue";
import { ICON } from "../../icons.js";
import SvgIcon from "../shared/SvgIcon.vue";

// The mark of where a file dragged over the stage lands (docs/studio-ui.md "Add とドロップの見せ方", docs/space-and-view.md
// "ドラッグ中の印"; its look: docs/design.md "大きさ" "ドロップの印", "ドロップのラベル", the mock drop-3.html): the soft
// yellow brackets over a darker line and the yellow's 25% inside, and beside the pointer the label of where it goes.
// Drawn only: it never takes the pointer. `mark` is studio/landing.js dropMarker()'s with `sky` (it goes to the sky) and
// `label` { x, y } (stage CSS px).
const props = defineProps({
  mark: { type: Object, required: true },
});

const path = (points, closed = false) => (points.length ? `M${points.map((p) => `${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" L")}${closed ? " Z" : ""}` : "");
const fills = computed(() => props.mark.fills.map((points) => path(points, true)));
const brackets = computed(() => props.mark.brackets.map((points) => path(points)).join(" "));
const sky = computed(() => !!props.mark.sky);
</script>

<template>
  <svg class="pano-studio-drop-mark" aria-hidden="true" :data-drop-place="sky ? 'sky' : 'world'">
    <path v-for="(d, index) in fills" :key="index" class="pano-studio-drop-fill" :d="d" />
    <path class="pano-studio-drop-under" :d="brackets" />
    <path class="pano-studio-drop-line" :d="brackets" />
  </svg>
  <div class="pano-studio-drop-label" :style="{ left: `${mark.label.x}px`, top: `${mark.label.y}px` }" data-drop-label>
    <SvgIcon :icon="sky ? ICON.pano : ICON.box" />
    <span class="pano-studio-cap">{{ sky ? "Sky" : "World" }}</span>
  </div>
</template>
