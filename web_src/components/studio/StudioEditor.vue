<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { createBackdropClose } from "../../studio/backdrop.js";
import { cameraButton } from "../../studio/camera_ui.js";
import { cameraOf } from "../../studio/defaults.js";
import { liveErpRatio } from "../../studio/erp_preview.js";
import { cameraRulers, rulerEdit } from "../../studio/frame_layout.js";
import { ROTATE_SNAP_DEG } from "../../studio/view_scale.js";
import { buildInspectorModel } from "../../studio/inspector_model.js";
import { TIMELINE_BAR_HEIGHT, loadTimelineHeight, saveTimelineHeight, timelineHeight } from "../../studio/layout.js";
import { topLine } from "../../studio/notice_line.js";
import { selectionBar } from "../../studio/selection_bar.js";
import { shortcutGroups } from "../../studio/shortcuts.js";
import { trackInputMode } from "../../studio/input_modality.js";
import { inspectorSelection } from "../../studio/session.js";
import { WORLD_FILE_ACCEPT } from "../../pano_sticker_file_import.js";
import StudioDropMarker from "./StudioDropMarker.vue";
import StudioCameraFrame from "./StudioCameraFrame.vue";
import StudioConfirm from "./StudioConfirm.vue";
import StudioEdgeRuler from "./StudioEdgeRuler.vue";
import StudioInspector from "./StudioInspector.vue";
import StudioNavWidget from "./StudioNavWidget.vue";
import StudioNotice from "./StudioNotice.vue";
import StudioOutputPreview from "./StudioOutputPreview.vue";
import StudioPaintBar from "./StudioPaintBar.vue";
import StudioPlaceChoice from "./StudioPlaceChoice.vue";
import StudioSelectionBar from "./StudioSelectionBar.vue";
import StudioShortcuts from "./StudioShortcuts.vue";
import StudioTabs from "./StudioTabs.vue";
import StudioTimeline from "./StudioTimeline.vue";
import StudioToolRail from "./StudioToolRail.vue";
import StudioTooltip from "./StudioTooltip.vue";
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
// returns its controls; onTimeline({ handleDelete, copyKeys, pasteKeys }) hands over the Timeline's Delete and its
// Keyframes' copy and paste; the inspector's and the Timeline's events go to its handlers.
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
// The focus look shows only while the keyboard works the editor (docs/design.md "フォーカス").
let stopInputMode = null;

// The inspector's selection follows the Timeline's (studio/session.js); while Paint or Mask is chosen and nothing is
// selected, it shows the Paint card (docs/studio-ui.md "種類ごとの中身").
const selected = computed(() => {
  const selection = inspectorSelection(props.view.selection);
  return props.view.paint && !selection.ids.length ? { ...selection, paint: true } : selection;
});

onMounted(() => {
  stopInputMode = trackInputMode(root.value);
  stage = props.controller.onStage({ canvas: canvas.value, overlay: overlay.value, root: root.value }) ?? null;
  props.controller.onTimeline({
    handleDelete: () => timeline.value?.handleDelete() ?? false,
    copyKeys: () => timeline.value?.copyKeys() ?? null,
    pasteKeys: (clipboard) => timeline.value?.pasteKeys(clipboard) ?? false,
  });
  // The editor takes the focus from the graph behind it, so the stage has the keys at once (pano_key_focus.js).
  root.value?.focus({ preventScroll: true });
  fitTimeline();
  window.addEventListener("resize", fitTimeline);
});
onBeforeUnmount(() => {
  stopInputMode?.();
  window.removeEventListener("resize", fitTimeline);
});

// --- The top-center line and its kind (studio/notice_line.js).
const cameraTab = computed(() => props.view.tab === "camera");
const line = computed(() => topLine(props.ui));

// --- A click on the dimmed page behind the frame closes the editor like ✕ (studio/backdrop.js).
const backdrop = createBackdropClose();
function onBackdropUp(event) {
  if (backdrop.up(event)) props.controller.close();
}

// --- The bar at the bottom center: the paint tools while Paint or Mask is chosen, else the selected object's (none
// while nothing is selected, nor in the Camera tab).
const paintModel = computed(() => (cameraTab.value ? null : props.view.paint));
const bar = computed(() => (cameraTab.value ? null : selectionBar({ state: props.view.state, row: props.view.selection?.row ?? null, mode: props.view.gizmoMode, readOnly: props.view.readOnly })));

// --- The Camera tab (docs/studio-ui.md "Camera タブ"): the frame of the output's ratio (the ERP's in Panorama mode)
// with the edge rulers, which are the Camera card's rows and send the inspector's edits. Each tick strip has its fixed
// length, centered on its edge (frame_layout.js rulerStrips, from the frame's slot).
const CAMERA_TAB_TIP = "Not available in the Camera view";
const camera = computed(() => cameraOf(props.view.state));
const panorama = computed(() => camera.value.projection === "erp");
const frameAspect = computed(() => (panorama.value ? liveErpRatio(camera.value.erp_range === 180 ? 180 : 360) : camera.value.aspect));
const rulers = computed(() => (cameraTab.value
  ? cameraRulers(buildInspectorModel({ state: props.view.state, tab: "camera", playhead: props.view.playhead, readOnly: props.view.readOnly }).cards[0])
  : null));
// The Lens row's lensStart where a Lens drag began (a κ edit keeps the image's center scale from there).
let lensStart = null;
function onRuler(which, event, value) {
  if (!rulers.value) return;
  if (which === "lens" && event === "input" && !lensStart) lensStart = rulers.value.lens.lensStart;
  const edit = rulerEdit(rulers.value, which, event, value, lensStart);
  if (event !== "input") lensStart = null;
  if (edit) props.controller.inspectorEdit(edit);
}
function stripStyle(place, vertical) {
  return vertical ? { top: `${place.offset}px`, height: `${place.length}px` } : { left: `${place.offset}px`, width: `${place.length}px` };
}
// The left column's Camera button (docs/studio-ui.md "エディタの中の Camera"): off for a locked Camera and a read-only
// editor (and, with the column, in the Camera tab).
const cameraRailButton = computed(() => cameraButton({ projection: camera.value.projection, locked: camera.value.locked === true, readOnly: props.view.readOnly }));
// The stage's knobs: nothing moves in Panorama mode, nor a locked Camera or a read-only editor's in the Camera tab.
const navOff = computed(() => {
  if (!cameraTab.value) return "";
  if (panorama.value) return "Not available in Panorama mode";
  if (props.view.readOnly) return "Read-only";
  if (camera.value.locked === true) return "Locked";
  return "";
});
// --- The list of shortcuts (docs/studio-ui.md "ショートカットの一覧"): what works on the screen now.
const nav = ref(null);
const isMac = /Mac|iPhone|iPad/.test(globalThis.navigator?.platform || globalThis.navigator?.userAgent || "");
const shortcuts = computed(() => shortcutGroups({ tab: props.view.tab, panorama: panorama.value, readOnly: props.view.readOnly, mac: isMac }));
const helpButton = () => nav.value?.helpButton() ?? null;
const erpCanvas = ref(null);
watch(erpCanvas, (element) => props.controller.erpCanvas?.(element ?? null));

// --- The Output window's picture (docs/studio-ui.md "Output の小窓"): the stage draws the Camera's output on these
// canvases while the window is open (a "bitmaprenderer" one in Frame mode, the live ERP's 2D one in Panorama mode).
// The window stays in the page while folded (it shrinks by a transform), so it says itself whether it is open. The
// Camera tab folds it and keeps it folded (its picture is the stage's), without changing what it keeps.
const outputFrame = ref(null);
const outputErp = ref(null);
const outputOpen = ref(false);
let outputObserver = null;
function reportOutput() {
  props.controller.output?.(outputOpen.value ? { frame: outputFrame.value ?? null, erp: outputErp.value ?? null } : null);
}
watch(outputOpen, reportOutput);
watch([outputFrame, outputErp], ([frame, erp]) => {
  outputObserver?.disconnect();
  outputObserver = null;
  const shown = frame ?? erp;
  if (shown && typeof ResizeObserver === "function") {
    outputObserver = new ResizeObserver(reportOutput);
    outputObserver.observe(shown);
  }
  reportOutput();
});
onBeforeUnmount(() => outputObserver?.disconnect());

// --- [add-drop] Add: the left column's button opens the file picker; the picked file goes to the editor
// (studio/add_files.js). The other buttons of the column are the editor's.
const filePicker = ref(null);
function onRail(key) {
  if (key !== "add") {
    props.controller.rail(key);
    return;
  }
  if (props.view.readOnly || !filePicker.value) return;
  filePicker.value.value = "";
  filePicker.value.click();
}
function onFilesPicked(event) {
  const files = Array.from(event.target.files ?? []);
  event.target.value = "";
  if (files.length) props.controller.addFiles(files);
}

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
  <div class="pano-studio-backdrop" data-region="backdrop" @pointerdown="backdrop.down" @pointerup="onBackdropUp">
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
        <div class="pano-studio-stage" data-region="stage">
          <canvas ref="canvas" class="pano-studio-stage-canvas" data-stage-canvas :style="{ cursor: ui.cursor || null }" />
          <canvas
            ref="overlay"
            class="pano-studio-stage-overlay"
            :class="{ 'is-loading-guide': ui.loadingGuide }"
            data-stage-overlay
            :data-loading-guide="ui.loadingGuide ? '' : null"
            aria-hidden="true"
          />
          <StudioDropMarker v-if="ui.drop" :mark="ui.drop" />
          <!-- The Camera button's light band (docs/design.md "動き"): a CSS layer, run once per new count. -->
          <div v-if="ui.sweep" :key="ui.sweep" class="pano-studio-sweep" data-sweep aria-hidden="true" />

          <StudioCameraFrame v-if="cameraTab && rulers" :aspect="frameAspect" @rect="(rect) => controller.frameRect?.(rect)">
            <template #default="{ rulers: place }">
              <canvas v-if="panorama" ref="erpCanvas" class="pano-studio-camera-erp" data-erp aria-hidden="true" />
              <StudioEdgeRuler
                class="pano-studio-at-edge-left"
                orientation="vertical"
                side="left"
                :name="rulers.fov.name"
                :value="rulers.fov.value"
                :min="rulers.fov.min"
                :max="rulers.fov.max"
                :unit-px="rulers.fov.scale.unitPx"
                :minor="rulers.fov.scale.minor"
                :major="rulers.fov.scale.major"
                :label-precision="rulers.fov.scale.precision"
                :precision="rulers.fov.precision"
                :value-text="rulers.fov.valueText"
                :key-state="rulers.fov.keyState"
                :disabled="rulers.fov.disabled"
                :tip="rulers.fov.tip"
                :value-chars="rulers.fov.scale.valueChars"
                :at-default="rulers.fov.atDefault"
                :style="stripStyle(place.vertical, true)"
                @reset="onRuler('fov', 'reset')"
                @input="(value) => onRuler('fov', 'input', value)"
                @change="(value) => onRuler('fov', 'change', value)"
                @cancel="onRuler('fov', 'cancel')"
                @key="onRuler('fov', 'key')"
              />
              <StudioEdgeRuler
                class="pano-studio-at-edge-right"
                orientation="vertical"
                side="right"
                :name="rulers.lens.name"
                :value="rulers.lens.value"
                :min="rulers.lens.min"
                :max="rulers.lens.max"
                :unit-px="rulers.lens.scale.unitPx"
                :minor="rulers.lens.scale.minor"
                :major="rulers.lens.scale.major"
                :label-precision="rulers.lens.scale.precision"
                :precision="rulers.lens.precision"
                :value-text="rulers.lens.valueText"
                :key-state="rulers.lens.keyState"
                :disabled="rulers.lens.disabled"
                :tip="rulers.lens.tip"
                :value-chars="rulers.lens.scale.valueChars"
                :at-default="rulers.lens.atDefault"
                :style="stripStyle(place.vertical, true)"
                @reset="onRuler('lens', 'reset')"
                @input="(value) => onRuler('lens', 'input', value)"
                @change="(value) => onRuler('lens', 'change', value)"
                @cancel="onRuler('lens', 'cancel')"
                @key="onRuler('lens', 'key')"
              />
              <StudioEdgeRuler
                class="pano-studio-at-edge-bottom"
                :style="stripStyle(place.roll, false)"
                orientation="horizontal"
                :name="rulers.roll.name"
                :value="rulers.roll.value"
                :min="rulers.roll.min"
                :max="rulers.roll.max"
                :unit-px="rulers.roll.scale.unitPx"
                :minor="rulers.roll.scale.minor"
                :major="rulers.roll.scale.major"
                :label-precision="rulers.roll.scale.precision"
                :precision="rulers.roll.precision"
                :value-text="rulers.roll.valueText"
                :key-state="rulers.roll.keyState"
                :disabled="rulers.roll.disabled"
                :tip="rulers.roll.tip"
                :value-chars="rulers.roll.scale.valueChars"
                :at-default="rulers.roll.atDefault"
                :snap="ROTATE_SNAP_DEG"
                @reset="onRuler('roll', 'reset')"
                @input="(value) => onRuler('roll', 'input', value)"
                @change="(value) => onRuler('roll', 'change', value)"
                @cancel="onRuler('roll', 'cancel')"
                @key="onRuler('roll', 'key')"
              />
            </template>
          </StudioCameraFrame>

          <StudioTabs class="pano-studio-at-tabs" :value="view.tab" @select="(tab) => controller.setTab(tab)" />
          <StudioToolRail
            class="pano-studio-at-rail"
            :can-undo="view.canUndo"
            :can-redo="view.canRedo"
            :can-add="!view.readOnly"
            :tool="view.tool"
            :can-paint="!view.readOnly"
            :camera-tab="cameraTab"
            :camera-button="cameraRailButton"
            @press="onRail"
          />
          <input ref="filePicker" type="file" :accept="WORLD_FILE_ACCEPT" hidden data-add-picker @change="onFilesPicked">
          <div v-if="ui.choice" class="pano-studio-place-layer">
            <StudioPlaceChoice @choose="(side) => controller.place(side)" @cancel="controller.cancelPlace()" />
          </div>
          <StudioConfirm
            v-if="view.confirm"
            :title="view.confirm.title"
            :body="view.confirm.body"
            :confirm="view.confirm.confirm"
            @answer="(ok) => controller.confirm(ok)"
          />
          <div class="pano-studio-at-notice">
            <StudioNotice :text="line.text" :kind="line.kind" />
          </div>
          <div class="pano-studio-at-output">
            <StudioOutputPreview :storage="storage" :ratio="frameAspect" :suspended="cameraTab" :suspended-tip="CAMERA_TAB_TIP" @open="(open) => (outputOpen = open)">
              <canvas v-if="!panorama" ref="outputFrame" class="pano-studio-output-picture" data-output-picture="frame" aria-hidden="true" />
              <canvas v-else ref="outputErp" class="pano-studio-output-picture" data-output-picture="erp" aria-hidden="true" />
            </StudioOutputPreview>
          </div>
          <div class="pano-studio-at-nav">
            <StudioNavWidget
              ref="nav"
              :lit="ui.lit"
              :disabled="!!navOff"
              :disabled-tip="navOff"
              :help-open="!!view.shortcuts"
              @knob="(knob, event) => stage?.knobDown(knob, event)"
              @help="controller.shortcuts(!view.shortcuts)"
            />
          </div>
          <div v-if="view.shortcuts" class="pano-studio-at-shortcuts">
            <StudioShortcuts :groups="shortcuts" :toggle="helpButton" @close="controller.shortcuts(false)" />
          </div>
          <div class="pano-studio-at-bar" data-region="bar">
            <StudioPaintBar v-if="paintModel" :model="paintModel" @edit="(event) => controller.paint(event)" />
            <StudioSelectionBar v-else-if="bar" :model="bar" @press="(key) => controller.bar(key)" />
          </div>
          <StudioViewButtons
            class="pano-studio-at-buttons"
            :grid-shown="!ui.gridHidden"
            :reset-disabled="cameraTab"
            :reset-tip="CAMERA_TAB_TIP"
            :frame-tip="cameraTab ? 'Frame selected · Moves the camera' : ''"
            :frame-disabled="!!navOff"
            :frame-disabled-tip="navOff"
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
            :upstream="view.upstream"
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
        :tab="view.tab"
        :playhead="view.playhead"
        :node-name="nodeTitle"
        :read-only="view.readOnly || view.upstreamSelected"
        :upstream="view.upstreamWorking"
        :animations="view.animations"
        :image-sizes="view.imageSizes"
        :port-size="view.portSize"
        @edit="(edit) => controller.inspectorEdit(edit)"
        @close="controller.close()"
      />
      <StudioTooltip :root="root" />
    </div>
  </div>
</template>
