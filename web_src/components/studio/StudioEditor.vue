<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { VIEW_UNAVAILABLE_MESSAGE } from "../../pano_preview_view.js";
import { TIMELINE_BAR_HEIGHT, loadTimelineHeight, saveTimelineHeight, timelineHeight } from "../../studio/layout.js";
import { selectionBar } from "../../studio/selection_bar.js";
import { inspectorSelection } from "../../studio/session.js";
import StudioInspector from "./StudioInspector.vue";
import StudioNavWidget from "./StudioNavWidget.vue";
import StudioNotice from "./StudioNotice.vue";
import StudioOutputPreview from "./StudioOutputPreview.vue";
import StudioSelectionBar from "./StudioSelectionBar.vue";
import StudioTabs from "./StudioTabs.vue";
import StudioTimeline from "./StudioTimeline.vue";
import StudioToolRail from "./StudioToolRail.vue";
import StudioViewButtons from "./StudioViewButtons.vue";

// Panorama Studio's editor in the new UI: the regions of docs/studio-ui.md "画面の区画". No header. A modal frame over a
// dimmed page holds three windows: the stage (the parts floating over it in fixed places), the timeline
// (<StudioTimeline>) below it, behind the gap dragged for its height (kept per browser), and the inspector
// (<StudioInspector>, its top row the node's name and ✕) down the right column. The bar at the bottom center
// (<StudioSelectionBar>) shows the selected object's buttons; an overlay canvas over the stage's draws the guides.
//
// The editor's state lives in studio/editor.js: `view` is its view model (the working state, the selection, the
// playhead, playback, Undo), `ui` what the stage reports (stage.js stageUi(), with `background` and `empty`), and
// `controller` what this shell calls: onStage({ canvas, root }) makes the stage once the elements are in the page and
// returns its controls; onTimeline({ handleDelete }) hands over the Timeline's Delete; the inspector's and the
// Timeline's events go to its handlers.
const props = defineProps({
  nodeTitle: { type: String, default: "" },
  ui: { type: Object, required: true },
  view: { type: Object, required: true },
  storage: { type: Object, default: null },
  controller: { type: Object, required: true },
});

const root = ref(null);
const main = ref(null);
const canvas = ref(null);
const overlay = ref(null);
const timeline = ref(null);
let stage = null;

// The inspector's selection follows the Timeline's (studio/session.js).
const selected = computed(() => inspectorSelection(props.view.selection));

onMounted(() => {
  stage = props.controller.onStage({ canvas: canvas.value, overlay: overlay.value, root: root.value }) ?? null;
  props.controller.onTimeline({ handleDelete: () => timeline.value?.handleDelete() ?? false });
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

// --- The bar at the bottom center: the selected object's (none while nothing is selected).
const bar = computed(() => selectionBar({ state: props.view.state, row: props.view.selection?.row ?? null, mode: props.view.gizmoMode, readOnly: props.view.readOnly }));

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
  <div class="pano-studio-backdrop">
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
          <canvas ref="overlay" class="pano-studio-stage-overlay" data-stage-overlay aria-hidden="true" />
          <div v-if="ui.view === 'failed'" class="pano-studio-stage-failed pano-studio-cap">{{ VIEW_UNAVAILABLE_MESSAGE }}</div>

          <StudioTabs class="pano-studio-at-tabs" value="3d" camera-disabled camera-tip="Camera view · in development" />
          <StudioToolRail
            class="pano-studio-at-rail"
            :can-undo="view.canUndo"
            :can-redo="view.canRedo"
            @press="(key) => controller.rail(key)"
          />
          <div class="pano-studio-at-notice">
            <StudioNotice :text="line.text" :kind="line.kind" />
          </div>
          <div class="pano-studio-at-output">
            <StudioOutputPreview :storage="storage" />
          </div>
          <div class="pano-studio-at-nav">
            <StudioNavWidget :lit="ui.lit" @knob="(knob, event) => stage?.knobDown(knob, event)" />
          </div>
          <div class="pano-studio-at-bar" data-region="bar">
            <StudioSelectionBar v-if="bar" :model="bar" @press="(key) => controller.bar(key)" />
          </div>
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
          <StudioTimeline
            ref="timeline"
            :state="view.state"
            :selection="view.selection"
            :playhead="view.playhead"
            :playing="view.playing"
            :loop="view.loop"
            :read-only="view.readOnly"
            :media="view.media"
            :background="view.background"
            :scene-row="view.sceneRow"
            :fps-locked="view.fpsLocked"
            :collapsed="collapsed"
            @seek="(frame) => controller.seek(frame)"
            @play="controller.play()"
            @select="(selection) => controller.select(selection)"
            @edit="(payload) => controller.timelineEdit(payload)"
            @frame-selected="(row) => controller.frameSelected(row)"
            @loop-change="(on) => controller.loop(on)"
            @collapse-change="setCollapsed"
          />
        </div>
      </div>
      <StudioInspector
        data-region="inspector"
        :state="view.state"
        :selection="selected"
        tab="3d"
        :playhead="view.playhead"
        :node-name="nodeTitle"
        :read-only="view.readOnly"
        :animations="view.animations"
        :image-sizes="view.imageSizes"
        :ground-saved="false"
        @edit="(edit) => controller.inspectorEdit(edit)"
        @close="controller.close()"
      />
    </div>
  </div>
</template>
