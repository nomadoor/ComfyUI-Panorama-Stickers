<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { ICON } from "../../icons.js";
import { VIEW_UNAVAILABLE_MESSAGE } from "../../pano_preview_view.js";
import { TIMELINE_BAR_HEIGHT, loadTimelineHeight, saveTimelineHeight, timelineHeight } from "../../studio/layout.js";
import SvgIcon from "../shared/SvgIcon.vue";
import StudioNavWidget from "./StudioNavWidget.vue";
import StudioNotice from "./StudioNotice.vue";
import StudioOutputPreview from "./StudioOutputPreview.vue";
import StudioTabs from "./StudioTabs.vue";
import StudioToolRail from "./StudioToolRail.vue";
import StudioViewButtons from "./StudioViewButtons.vue";

// Panorama Studio's editor in the new UI: the regions of docs/studio-ui.md "画面の区画". No header. The stage fills
// the left column to its edges with the parts floating over it in fixed places; the timeline is below it, behind a
// border dragged for its height (kept per browser); the inspector runs down the right column, its top row the node's
// name and ✕. The inspector's cards, the timeline and the bar at the bottom center are other parts: they go in the
// slots `inspector` (and `inspector-foot`, pinned at its bottom), `timeline` and `bar`.
//
// The stage itself (the canvas, the pointer, the keys, the viewpoint) is studio/stage.js: onStage({ canvas, root })
// makes it once the elements are in the page and returns its controls; `ui` is what it reports (stage.js stageUi(),
// with `background` and `empty` from studio/editor.js).
const props = defineProps({
  nodeTitle: { type: String, default: "" },
  ui: { type: Object, required: true },
  storage: { type: Object, default: null },
  onClose: { type: Function, default: null },
  onStage: { type: Function, default: null },
});

const root = ref(null);
const main = ref(null);
const canvas = ref(null);
let stage = null;

onMounted(() => {
  stage = props.onStage?.({ canvas: canvas.value, root: root.value }) ?? null;
  // The editor takes the focus from the graph behind it, so the stage has the keys at once (pano_key_focus.js).
  root.value?.focus({ preventScroll: true });
  fitTimeline();
  window.addEventListener("resize", fitTimeline);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", fitTimeline);
});

// --- The top-center line: a notice before what the stage waits for, before the hint of an empty stage.
const line = computed(() => {
  if (props.ui.notice) return { kind: "notice", text: props.ui.notice };
  if (props.ui.view === "loading") return { kind: "loading", text: "Loading the 3D view…" };
  if (props.ui.background === "loading") return { kind: "loading", text: "Loading background…" };
  if (props.ui.background === "failed") return { kind: "notice", text: "The background could not be loaded" };
  if (props.ui.empty) return { kind: "hint", text: "Drop an image or a 3D file, or press Add" };
  return { kind: "notice", text: "" };
});

// --- The stage's buttons.
function setGrid(shown) {
  props.ui.gridHidden = !shown;
  stage?.redraw();
}

// --- The timeline's height: dragged on the border, kept per browser, the stage and the timeline each keeping their
// least height. Folded, the timeline shows its bar only.
const wantedHeight = ref(loadTimelineHeight(props.storage));
const shownHeight = ref(wantedHeight.value);
const collapsed = ref(false);
const timelineStyle = computed(() => ({ height: `${collapsed.value ? TIMELINE_BAR_HEIGHT : shownHeight.value}px` }));

function fitTimeline() {
  const total = main.value?.getBoundingClientRect().height || window.innerHeight;
  shownHeight.value = timelineHeight(wantedHeight.value, total);
}

let split = null;
function onSplitDown(event) {
  if (event.button !== 0 || collapsed.value) return;
  event.preventDefault();
  event.currentTarget.setPointerCapture?.(event.pointerId);
  split = { y: event.clientY, height: shownHeight.value };
}
function onSplitMove(event) {
  if (!split) return;
  wantedHeight.value = split.height + (split.y - event.clientY);
  fitTimeline();
  wantedHeight.value = shownHeight.value;
}
function onSplitUp() {
  if (!split) return;
  split = null;
  saveTimelineHeight(props.storage, shownHeight.value);
}
function setCollapsed(value) {
  collapsed.value = !!value;
}
</script>

<template>
  <div
    ref="root"
    class="pano-studio pano-studio-editor"
    :class="{ 'is-knob-drag': ui.knobDrag }"
    role="dialog"
    tabindex="-1"
    aria-modal="true"
    :aria-label="nodeTitle"
  >
    <div ref="main" class="pano-studio-main">
      <div class="pano-studio-stage" :class="{ 'is-loading': ui.background === 'loading' || ui.view === 'loading' }" data-region="stage">
        <canvas ref="canvas" class="pano-studio-stage-canvas" data-stage-canvas :style="{ cursor: ui.cursor || null }" />
        <div v-if="ui.view === 'failed'" class="pano-studio-stage-failed pano-studio-cap">{{ VIEW_UNAVAILABLE_MESSAGE }}</div>

        <StudioTabs class="pano-studio-at-tabs" value="3d" camera-disabled camera-tip="Camera view · in development" />
        <StudioToolRail class="pano-studio-at-rail" />
        <div class="pano-studio-at-notice">
          <StudioNotice :text="line.text" :kind="line.kind" />
        </div>
        <div class="pano-studio-at-output">
          <StudioOutputPreview :storage="storage" />
        </div>
        <div class="pano-studio-at-nav">
          <StudioNavWidget :lit="ui.lit" @knob="(knob, event) => stage?.knobDown(knob, event)" />
        </div>
        <div class="pano-studio-at-bar" data-region="bar"><slot name="bar" /></div>
        <StudioViewButtons
          class="pano-studio-at-buttons"
          :grid-shown="!ui.gridHidden"
          @frame-selected="stage?.frameSelected()"
          @reset-view="stage?.resetView()"
          @grid="setGrid"
        />
      </div>
      <div
        class="pano-studio-splitter"
        :class="{ 'is-collapsed': collapsed }"
        role="separator"
        aria-orientation="horizontal"
        aria-label="Timeline height"
        data-region="splitter"
        @pointerdown="onSplitDown"
        @pointermove="onSplitMove"
        @pointerup="onSplitUp"
        @pointercancel="onSplitUp"
      />
      <div class="pano-studio-timeline" data-region="timeline" :style="timelineStyle">
        <slot name="timeline" :collapsed="collapsed" :set-collapsed="setCollapsed" />
      </div>
    </div>
    <aside class="pano-studio-inspector" data-region="inspector">
      <div class="pano-studio-inspector-head">
        <span class="pano-studio-inspector-title">{{ nodeTitle }}</span>
        <button class="pano-studio-icon-btn" type="button" data-action="close" aria-label="Close" title="Close" @click="props.onClose?.()">
          <SvgIcon :icon="ICON.close" />
        </button>
      </div>
      <div class="pano-studio-inspector-body"><slot name="inspector" /></div>
      <slot name="inspector-foot" />
    </aside>
  </div>
</template>
