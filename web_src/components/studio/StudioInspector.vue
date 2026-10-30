<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { ICON } from "../../icons.js";
import { buildInspectorModel, easingGraphSide } from "../../studio/inspector_model.js";
import StudioEasingPanel from "./StudioEasingPanel.vue";
import StudioIconButton from "./StudioIconButton.vue";
import StudioInspectorCard from "./StudioInspectorCard.vue";

// The inspector of Panorama Studio's new editor (docs/studio-ui.md "インスペクタ"), for the shell's inspector column:
// the top row (the node's name and ✕), the cards of the tab and the selection (web_src/studio/inspector_model.js),
// which scroll without a scrollbar, and the Easing panel fixed at the bottom while Keyframes are selected.
//
// Presentational: the working state and the editor's selection come in; every change goes out as `edit`, which the
// shell applies with web_src/studio/inspector_actions.js applyInspectorEdit (one Undo step on `history`, putting
// back the state from before the gesture on `phase: "cancel"`), and ✕ as `close`.
const props = defineProps({
  // The working state v2.
  state: { type: Object, required: true },
  // { ids: [...], paint?: true, keyframes?: { owner, lane, frames } } (inspector_model.js buildInspectorModel).
  selection: { type: Object, default: () => ({ ids: [] }) },
  // "3d" | "camera".
  tab: { type: String, default: "3d" },
  // The Timeline frame.
  playhead: { type: Number, default: 0 },
  nodeName: { type: String, default: "" },
  readOnly: { type: Boolean, default: false },
  // The upstream working layers (pano_upstream.js upstreamWorkingLayers), the clips of the 3D files by Sticker id,
  // and the size of the port Sticker's media.
  upstream: { type: Array, default: () => [] },
  animations: { type: Object, default: () => ({}) },
  portSize: { type: Object, default: null },
  // The Stickers' image sizes by id ({ width, height } px), for a sky image's FOV reset.
  imageSizes: { type: Object, default: () => ({}) },
  // Whether an edited ground height is saved (inspector_model.js GROUND_NOT_SAVED_TIP).
  groundSaved: { type: Boolean, default: true },
});
const emit = defineEmits(["edit", "close"]);

const model = computed(() => buildInspectorModel({
  state: props.state,
  selection: props.selection,
  tab: props.tab,
  playhead: props.playhead,
  readOnly: props.readOnly,
  upstream: props.upstream,
  animations: props.animations,
  portSize: props.portSize,
  imageSizes: props.imageSizes,
  groundSaved: props.groundSaved,
}));

// --- The Easing panel's size: its graph is square and as wide as the panel, smaller when it would leave less than
// EASING_MIN_ABOVE above it. The area above takes the panel's height as its bottom padding once, when it shows.
const root = ref(null);
const head = ref(null);
const easingWrap = ref(null);
const size = ref({ width: 0, height: 0, head: 0, chrome: 0 });
const graphSide = computed(() => easingGraphSide({
  width: size.value.width,
  height: size.value.height - size.value.head,
  chrome: size.value.chrome,
}));
const bodyPad = ref(0);

const EASING_PAD_X = 28;

function measure() {
  const el = root.value;
  if (!el) return;
  // A panel leaving (its fade) is not measured.
  const panel = model.value.easing ? easingWrap.value?.firstElementChild ?? null : null;
  const graph = panel?.querySelector(".pano-studio-easing-graph");
  const chrome = panel && graph ? panel.offsetHeight - graph.getBoundingClientRect().height : size.value.chrome;
  size.value = {
    width: Math.max(0, el.clientWidth - EASING_PAD_X),
    height: el.clientHeight,
    head: head.value?.offsetHeight ?? 0,
    chrome,
  };
  bodyPad.value = panel ? panel.offsetHeight : 0;
}

let observer = null;
onMounted(() => {
  measure();
  observer = new ResizeObserver(measure);
  observer.observe(root.value);
});
onBeforeUnmount(() => observer?.disconnect());

watch(() => !!model.value.easing, async (shown) => {
  await nextTick();
  measure();
  // The chrome is known once the panel is there: one more pass sizes the graph from it.
  if (shown) {
    await nextTick();
    measure();
  }
});
</script>

<template>
  <aside ref="root" class="pano-studio-inspector pano-studio-panel" aria-label="Inspector" :data-tab="tab">
    <header ref="head" class="pano-studio-inspector-head">
      <span class="pano-studio-inspector-title" :data-tip="nodeName">{{ nodeName }}</span>
      <StudioIconButton :icon="ICON.close" label="Close" data-action="close" @press="emit('close')" />
    </header>
    <div class="pano-studio-inspector-body" :style="{ paddingBottom: `${bodyPad}px` }">
      <StudioInspectorCard v-for="card in model.cards" :key="`${card.kind}:${card.target?.id ?? ''}`" :card="card" @edit="emit('edit', $event)" />
    </div>
    <div ref="easingWrap" class="pano-studio-inspector-foot">
      <Transition name="pano-studio-easing-fade">
        <StudioEasingPanel v-if="model.easing" :model="model.easing" :graph-side="graphSide" :disabled="readOnly" @edit="emit('edit', $event)" />
      </Transition>
    </div>
  </aside>
</template>
