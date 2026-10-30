<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { CAMERA_RULERS } from "/web_src/studio/frame_layout.js";
import { timecode } from "/web_src/studio/timeline_model.js";
import { formatNumber } from "/web_src/studio/ui_drag.js";
import { LENS_CURVE_MAX, LENS_CURVE_MIN, lensFovLimit } from "/web_src/pano_lens.js";
import StudioCameraFrame from "/web_src/components/studio/StudioCameraFrame.vue";
import StudioEdgeRuler from "/web_src/components/studio/StudioEdgeRuler.vue";
import StudioNavWidget from "/web_src/components/studio/StudioNavWidget.vue";
import StudioOutputPreview from "/web_src/components/studio/StudioOutputPreview.vue";
import StudioTabs from "/web_src/components/studio/StudioTabs.vue";
import StudioToolRail from "/web_src/components/studio/StudioToolRail.vue";
import StudioViewButtons from "/web_src/components/studio/StudioViewButtons.vue";

// The Camera tab's layout (docs/studio-ui.md "Camera タブ") over a test render, for tests/browser/studio_camera_tab.spec.js
// and the side-by-side with design-drafts/frame-4.html. Frame mode: a stand-in render fills the stage (the frame's
// outside is the same picture, dimmed). Panorama mode: the live ERP of live_erp_scene.js in a 2 : 1 frame, FOV and
// Lens gray. Parts not built yet (the stage's own canvas, the Output window's picture) are left as they are.
const props = defineProps({
  aspect: { type: Number, default: 16 / 9 },
  mode: { type: String, default: "frame" },
  // makeErp(rect) -> canvas or null: the page draws the live ERP for the frame's box.
  makeErp: { type: Function, default: null },
  onEvent: { type: Function, default: () => {} },
  onRect: { type: Function, default: () => {} },
});

const panorama = computed(() => props.mode === "panorama");
const s = reactive({ fov: 60, lens: 1, roll: -4, keys: { fov: "has", lens: "none", roll: "now" } });
const fovMax = computed(() => lensFovLimit(s.lens));
const NOT_IN_PANORAMA = "Used in Frame mode";
const CAMERA_TAB = "Not available in the Camera view";

const ruler = (name, apply) => ({
  onInput: (value) => {
    apply(value);
    props.onEvent({ name: `${name}:input`, value });
  },
  onChange: (value) => props.onEvent({ name: `${name}:change`, value }),
  onCancel: () => props.onEvent({ name: `${name}:cancel` }),
  onKey: () => props.onEvent({ name: `${name}:key` }),
});

const stageCanvas = ref(null);
const erpHolder = ref(null);
let erpCanvas = null;

// The stand-in render: the specimen's sky and ground, with a ground grid toward a horizon at the middle.
function paintStage() {
  const canvas = stageCanvas.value;
  if (!canvas) return;
  const box = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(box.width * dpr);
  canvas.height = Math.round(box.height * dpr);
  const g = canvas.getContext("2d");
  g.scale(dpr, dpr);
  const w = box.width;
  const h = box.height;
  const sky = g.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, "#9fc7e6");
  sky.addColorStop(0.46, "#dceaf3");
  sky.addColorStop(0.54, "#e9dcc4");
  sky.addColorStop(1, "#b9a685");
  g.fillStyle = sky;
  g.fillRect(0, 0, w, h);
  if (panorama.value) return;
  const horizon = h * 0.5;
  g.strokeStyle = "rgba(90, 76, 52, 0.28)";
  g.lineWidth = 1;
  for (let i = -16; i <= 16; i += 1) {
    g.beginPath();
    g.moveTo(w / 2 + i * 4, horizon + 6);
    g.lineTo(w / 2 + i * 160, h);
    g.stroke();
  }
  for (let k = 1; k <= 10; k += 1) {
    const y = horizon + 6 + (h - horizon) * (1 - 1 / (1 + k * k * 0.06));
    g.beginPath();
    g.moveTo(0, y);
    g.lineTo(w, y);
    g.stroke();
  }
}

function onRect(rect) {
  props.onRect(rect);
  if (!panorama.value || !props.makeErp || !rect.width) return;
  const canvas = props.makeErp(rect);
  if (canvas && canvas !== erpCanvas && erpHolder.value) {
    erpHolder.value.replaceChildren(canvas);
    erpCanvas = canvas;
  }
}

onMounted(() => {
  paintStage();
  window.addEventListener("resize", paintStage);
});
onBeforeUnmount(() => window.removeEventListener("resize", paintStage));
</script>

<template>
  <div class="pano-studio dark-theme scene">
    <div class="pano-studio-stage stage" :class="{ 'is-panorama': panorama }" data-stage>
      <canvas v-show="!panorama" ref="stageCanvas" class="pano-studio-stage-canvas" />
      <StudioCameraFrame :aspect="panorama ? 2 : aspect" @rect="onRect">
        <template #default="{ rollWidth }">
          <div v-if="panorama" ref="erpHolder" class="erp" data-erp />
          <StudioEdgeRuler
            class="pano-studio-at-edge-left"
            orientation="vertical"
            side="left"
            name="FOV"
            :value="s.fov"
            :min="1"
            :max="fovMax"
            :unit-px="CAMERA_RULERS.fov.unitPx"
            :minor="CAMERA_RULERS.fov.minor"
            :major="CAMERA_RULERS.fov.major"
            :label-precision="CAMERA_RULERS.fov.precision"
            :precision="1"
            :value-text="`${formatNumber(s.fov, 0)}°`"
            :key-state="s.keys.fov"
            :disabled="panorama"
            :tip="panorama ? NOT_IN_PANORAMA : ''"
            v-bind="ruler('fov', (v) => (s.fov = v))"
          />
          <StudioEdgeRuler
            class="pano-studio-at-edge-right"
            orientation="vertical"
            side="right"
            name="Lens"
            :value="s.lens"
            :min="LENS_CURVE_MIN"
            :max="LENS_CURVE_MAX"
            :unit-px="CAMERA_RULERS.lens.unitPx"
            :minor="CAMERA_RULERS.lens.minor"
            :major="CAMERA_RULERS.lens.major"
            :label-precision="CAMERA_RULERS.lens.precision"
            :precision="3"
            :value-text="formatNumber(s.lens, 2)"
            :key-state="s.keys.lens"
            :disabled="panorama"
            :tip="panorama ? NOT_IN_PANORAMA : ''"
            v-bind="ruler('lens', (v) => (s.lens = v))"
          />
          <StudioEdgeRuler
            class="pano-studio-at-edge-bottom"
            :style="{ width: `${rollWidth}px` }"
            orientation="horizontal"
            name="Roll"
            :value="s.roll"
            :min="-180"
            :max="180"
            :unit-px="CAMERA_RULERS.roll.unitPx"
            :minor="CAMERA_RULERS.roll.minor"
            :major="CAMERA_RULERS.roll.major"
            :label-precision="CAMERA_RULERS.roll.precision"
            :precision="1"
            :value-text="`${formatNumber(s.roll, 0)}°`"
            :key-state="s.keys.roll"
            v-bind="ruler('roll', (v) => (s.roll = v))"
          />
        </template>
      </StudioCameraFrame>

      <StudioTabs class="pano-studio-at-tabs" value="camera" />
      <StudioToolRail class="pano-studio-at-rail" camera-tab can-undo />
      <div class="pano-studio-at-notice">
        <span class="pano-studio-timecode pano-studio-cap" data-timecode>{{ timecode(78, 24) }} · 78 / 240</span>
      </div>
      <div class="pano-studio-at-output">
        <StudioOutputPreview :ratio="panorama ? 2 : aspect" />
      </div>
      <div class="pano-studio-at-nav">
        <StudioNavWidget />
      </div>
      <StudioViewButtons
        class="pano-studio-at-buttons"
        reset-disabled
        :reset-tip="CAMERA_TAB"
        frame-tip="Frame selected · Moves the camera"
      />
    </div>
  </div>
</template>
