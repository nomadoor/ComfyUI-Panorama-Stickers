<script setup>
import { reactive } from "vue";
import { ICON } from "/web_src/icons.js";
import { CAMERA_ASPECT_MAX, CAMERA_ASPECT_MIN } from "/web_src/pano_editor_state.js";
import { aspectLabel, parseAspect } from "/web_src/studio/ui_aspect.js";
import StudioAspectSlider from "/web_src/components/studio/StudioAspectSlider.vue";
import StudioCard from "/web_src/components/studio/StudioCard.vue";
import StudioFloatGroup from "/web_src/components/studio/StudioFloatGroup.vue";
import StudioIconButton from "/web_src/components/studio/StudioIconButton.vue";
import StudioInspectorRow from "/web_src/components/studio/StudioInspectorRow.vue";
import StudioNumberField from "/web_src/components/studio/StudioNumberField.vue";
import StudioSegmented from "/web_src/components/studio/StudioSegmented.vue";
import StudioSlider from "/web_src/components/studio/StudioSlider.vue";
import StudioTabs from "/web_src/components/studio/StudioTabs.vue";
import SvgIcon from "/web_src/components/shared/SvgIcon.vue";

// The scene of tests/browser/pages/studio_ui.js: every primitive, once per theme. The values are shared by both
// columns; each event is logged with the column it came from.
const props = defineProps({ onEvent: { type: Function, default: () => {} } });

const s = reactive({
  tab: "3d",
  tool: "cursor",
  pos: [1.2, -1.6, -3.05],
  rot: [30, 0, 0],
  scale: 1,
  opacity: 72,
  mode: "frame",
  range: "360",
  aspect: 16 / 9,
  fov: 60,
  lens: 1,
  fovSky: [90, 60],
  keys: { pos: "has", rot: "none", opacity: "now", fov: "has" },
});

const log = (theme, name, value) => props.onEvent({ theme, name, value });
const field = (theme, name, apply) => ({
  onInput: (value) => {
    apply(value);
    log(theme, `${name}:input`, value);
  },
  onChange: (value) => log(theme, `${name}:change`, value),
  onCancel: () => log(theme, `${name}:cancel`),
});
const cycleKey = (name) => {
  s.keys[name] = s.keys[name] === "now" ? "has" : "now";
};

const THEMES = ["dark", "light"];
const AXES = ["X", "Y", "Z"];
const ROT_AXES = ["Y", "P", "R"];
const MODES = [{ value: "panorama", label: "Panorama" }, { value: "frame", label: "Frame" }];
const RANGES = [{ value: "360", label: "360°" }, { value: "180", label: "180°" }];
</script>

<template>
  <div class="scene">
    <div
      v-for="theme in THEMES"
      :key="theme"
      class="col pano-studio"
      :class="[theme, { 'dark-theme': theme === 'dark' }]"
      :data-theme-col="theme"
    >
      <div class="stage" :class="{ night: theme === 'dark' }">
        <StudioTabs class="at" style="left: 12px; top: 12px" :value="s.tab" @select="(v) => { s.tab = v; log(theme, 'tab', v); }" />
        <StudioFloatGroup layout="rail" label="Tools" class="at" style="left: 12px; top: 56px">
          <StudioIconButton :icon="ICON.cursor_tool" label="Cursor" :active="s.tool === 'cursor'" @press="s.tool = 'cursor'" />
          <StudioIconButton :icon="ICON.palette_tool" label="Paint" :active="s.tool === 'paint'" @press="s.tool = 'paint'" />
          <span class="pano-studio-sep" />
          <StudioIconButton :icon="ICON.image" label="Add" />
          <StudioIconButton :icon="ICON.camera" label="Camera" disabled tip="Not available in the Camera view" />
          <span class="pano-studio-sep" />
          <StudioIconButton :icon="ICON.undo" label="Undo" />
          <StudioIconButton :icon="ICON.redo" label="Redo" />
        </StudioFloatGroup>
        <StudioFloatGroup layout="knobs" label="View" class="at" style="right: 12px; top: 56px">
          <StudioIconButton :icon="ICON.globe" label="Orbit" size="knob" />
          <StudioIconButton :icon="ICON.focus" label="Pan" size="knob" lit />
          <StudioIconButton :icon="ICON.aspect" label="Dolly" size="knob" />
        </StudioFloatGroup>
        <StudioFloatGroup layout="bar" label="Selection" class="at" style="left: 50%; bottom: 12px; transform: translateX(-50%)">
          <span class="pano-studio-float-label"><SvgIcon :icon="ICON.box" />chair.glb</span>
          <span class="pano-studio-sep" />
          <StudioIconButton :icon="ICON.duplicate" label="Duplicate" />
          <StudioIconButton :icon="ICON.replace_image" label="Replace" />
          <span class="pano-studio-sep" />
          <StudioIconButton :icon="ICON.lock_open" label="Lock" />
          <StudioIconButton :icon="ICON.delete" label="Delete" />
        </StudioFloatGroup>
        <StudioFloatGroup layout="row" label="View buttons" class="at" style="right: 12px; bottom: 12px">
          <StudioIconButton :icon="ICON.focus" label="Frame Selected" />
          <StudioIconButton :icon="ICON.reset" label="Reset View" disabled tip="Not available in the Camera view" />
        </StudioFloatGroup>
      </div>

      <div class="inspector pano-studio-panel">
        <StudioCard title="chair.glb" :icon="ICON.box" note="World">
          <StudioInspectorRow name="Position" :key-state="s.keys.pos" @key-toggle="cycleKey('pos'); log(theme, 'pos:key', s.keys.pos)" @reset="log(theme, 'pos:reset')">
            <StudioNumberField
              v-for="(axis, i) in AXES"
              :key="axis"
              :axis="axis"
              :label="`Position ${axis}`"
              :value="s.pos[i]"
              :data-field="`pos-${axis}`"
              v-bind="field(theme, `pos${axis}`, (v) => (s.pos[i] = v))"
            />
          </StudioInspectorRow>
          <StudioInspectorRow name="Rotation" :key-state="s.keys.rot" at-default @key-toggle="cycleKey('rot')" @reset="log(theme, 'rot:reset')">
            <StudioNumberField
              v-for="(axis, i) in ROT_AXES"
              :key="axis"
              :axis="axis"
              :label="`Rotation ${axis}`"
              unit="°"
              :step="0.5"
              :precision="1"
              :value="s.rot[i]"
              v-bind="field(theme, `rot${axis}`, (v) => (s.rot[i] = v))"
            />
          </StudioInspectorRow>
          <StudioInspectorRow name="Scale" layout="single" key-state="none" at-default @reset="log(theme, 'scale:reset')">
            <template #control>
              <StudioSlider :value="s.scale" :min="0" :max="4" label="Scale" v-bind="field(theme, 'scale', (v) => (s.scale = Math.round(v * 100) / 100))" />
            </template>
            <template #value>
              <StudioNumberField :value="s.scale" :min="0" label="Scale" v-bind="field(theme, 'scaleBox', (v) => (s.scale = v))" />
            </template>
          </StudioInspectorRow>
          <StudioInspectorRow name="Opacity" layout="single" :key-state="s.keys.opacity" marked @key-toggle="cycleKey('opacity')" @reset="log(theme, 'opacity:reset')">
            <template #control>
              <StudioSlider :value="s.opacity" :min="0" :max="100" :step="1" label="Opacity" v-bind="field(theme, 'opacity', (v) => (s.opacity = Math.round(v)))" />
            </template>
            <template #value>
              <StudioNumberField :value="s.opacity" :min="0" :max="100" :step="0.5" :precision="0" unit="%" label="Opacity" v-bind="field(theme, 'opacityBox', (v) => (s.opacity = v))" />
            </template>
          </StudioInspectorRow>
        </StudioCard>
        <StudioCard title="Camera" :icon="ICON.camera">
          <StudioInspectorRow name="Mode" layout="wide" :resettable="false">
            <StudioSegmented :options="MODES" :value="s.mode" fill label="Mode" @select="(v) => { s.mode = v; log(theme, 'mode', v); }" />
          </StudioInspectorRow>
          <StudioInspectorRow name="Range" layout="wide" :resettable="false" disabled tip="Used in Panorama mode">
            <StudioSegmented :options="RANGES" :value="s.range" fill disabled label="Range" />
          </StudioInspectorRow>
          <StudioInspectorRow name="Aspect" layout="single" @reset="log(theme, 'aspect:reset')">
            <template #control>
              <StudioAspectSlider :value="s.aspect" :data-slider="'aspect'" v-bind="field(theme, 'aspect', (v) => (s.aspect = v))" />
            </template>
            <template #value>
              <StudioNumberField
                :value="s.aspect"
                :min="CAMERA_ASPECT_MIN"
                :max="CAMERA_ASPECT_MAX"
                :step="0.005"
                :format="aspectLabel"
                :parse="parseAspect"
                label="Aspect"
                :data-field="'aspect'"
                v-bind="field(theme, 'aspectBox', (v) => (s.aspect = v))"
              />
            </template>
          </StudioInspectorRow>
          <StudioInspectorRow name="H FOV" layout="single" :key-state="s.keys.fov" @key-toggle="cycleKey('fov')">
            <template #control>
              <StudioSlider :value="s.fov" :min="1" :max="179" label="H FOV" v-bind="field(theme, 'fov', (v) => (s.fov = Math.round(v)))" />
            </template>
            <template #value>
              <StudioNumberField :value="s.fov" :min="1" :max="179" :step="0.25" :precision="0" unit="°" label="H FOV" v-bind="field(theme, 'fovBox', (v) => (s.fov = v))" />
            </template>
          </StudioInspectorRow>
          <StudioInspectorRow name="Lens" layout="single" key-state="none" disabled tip="Used in Frame mode">
            <template #control>
              <StudioSlider :value="s.lens" :min="0" :max="2" disabled label="Lens" />
            </template>
            <template #value>
              <StudioNumberField :value="s.lens" disabled label="Lens" />
            </template>
          </StudioInspectorRow>
          <StudioInspectorRow name="FOV" key-state="has">
            <StudioNumberField axis="H" unit="°" :precision="0" :value="s.fovSky[0]" label="FOV H" v-bind="field(theme, 'fovH', (v) => (s.fovSky[0] = v))" />
            <StudioNumberField axis="V" unit="°" :precision="0" :value="s.fovSky[1]" label="FOV V" v-bind="field(theme, 'fovV', (v) => (s.fovSky[1] = v))" />
          </StudioInspectorRow>
        </StudioCard>
      </div>
    </div>
  </div>
</template>
