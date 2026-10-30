<script setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { ICON } from "../../icons.js";
import { DROP_LOOK, dropLabelPlace } from "../../studio/landing.js";
import SvgIcon from "../shared/SvgIcon.vue";

// The mark of where a file dragged over the stage lands (docs/studio-ui.md "Add とドロップの見せ方", docs/space-and-view.md
// "ドラッグ中の印"; its look: docs/design.md "色", "大きさ" "ドロップの印", "ドロップのラベル", the mock drop-3.html): brackets in
// the color of where it goes (World the soft yellow, Sky ice) over a darker line and that color's 25% inside, and near
// the pointer, off the mark, the label of where it goes in the same color. Drawn only: it never takes the pointer.
// `mark` is studio/landing.js dropMarker()'s with `sky` (it goes to the sky), `pointer` { x, y } and `stage`
// { width, height } (stage CSS px).
const props = defineProps({
  mark: { type: Object, required: true },
});

const path = (points, closed = false) => (points.length ? `M${points.map((p) => `${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" L")}${closed ? " Z" : ""}` : "");
const fills = computed(() => props.mark.fills.map((points) => path(points, true)));
const brackets = computed(() => props.mark.brackets.map((points) => path(points)).join(" "));
const sky = computed(() => !!props.mark.sky);
const colors = computed(() => DROP_LOOK.colors[sky.value ? "sky" : "world"]);

// The label's size once laid out (its text decides its width); until then, about the drop-3 size.
const label = ref(null);
const size = ref({ width: 72, height: 26 });
function measure() {
  const element = label.value;
  if (!element?.offsetWidth) return;
  if (element.offsetWidth !== size.value.width || element.offsetHeight !== size.value.height) {
    size.value = { width: element.offsetWidth, height: element.offsetHeight };
  }
}
onMounted(measure);
watch(sky, () => nextTick(measure));
const place = computed(() => dropLabelPlace({ mark: props.mark, pointer: props.mark.pointer, size: size.value, stage: props.mark.stage }));
</script>

<template>
  <svg class="pano-studio-drop-mark" aria-hidden="true" :data-drop-place="sky ? 'sky' : 'world'">
    <path v-for="(d, index) in fills" :key="index" class="pano-studio-drop-fill" :d="d" :fill="colors.fill" />
    <path class="pano-studio-drop-under" :d="brackets" :stroke="DROP_LOOK.under" :stroke-width="DROP_LOOK.underWidth" />
    <path class="pano-studio-drop-line" :d="brackets" :stroke="colors.line" :stroke-width="DROP_LOOK.width" />
  </svg>
  <div
    ref="label"
    class="pano-studio-drop-label"
    :class="sky ? 'is-sky' : 'is-world'"
    :style="{ left: `${place.x}px`, top: `${place.y}px` }"
    data-drop-label
  >
    <SvgIcon :icon="sky ? ICON.pano : ICON.box" />
    <span class="pano-studio-cap">{{ sky ? "Sky" : "World" }}</span>
  </div>
</template>
