<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { ICON } from "../icons.js";
import PanoIconButton from "./PanoIconButton.vue";
import SvgIcon from "./SvgIcon.vue";

const props = defineProps({
  model: { type: Object, default: () => ({}) },
  mode: { type: String, default: "rail" },
});

const emit = defineEmits(["action"]);

const PRESETS = Object.freeze([
  { value: "1:1", label: "1:1" },
  { value: "4:3", label: "4:3" },
  { value: "3:2", label: "3:2" },
  { value: "16:9", label: "16:9" },
]);

const customWidth = ref("1");
const customHeight = ref("1");
const rootElement = ref(null);

const disabled = computed(() => (
  props.model.disabled === true
  || props.model.locked === true
  || props.model.hasShot === false
));

const choices = computed(() => {
  const supplied = Array.isArray(props.model.aspectChoices)
    ? props.model.aspectChoices
    : [];
  const activeValue = String(props.model.aspectLabel || "");
  if (supplied.length) {
    return supplied.map((choice) => {
      const value = typeof choice === "string" ? choice : String(choice?.value || "");
      const label = typeof choice === "string" ? choice : String(choice?.label || value);
      return {
        ...(typeof choice === "object" && choice ? choice : {}),
        value,
        label,
        active: activeValue ? value === activeValue : choice?.active === true,
      };
    });
  }
  return PRESETS.map((choice) => ({
    ...choice,
    active: choice.value === activeValue,
  }));
});

const activeLabel = computed(() => {
  const explicit = String(props.model.aspectLabel || "").trim();
  if (explicit) return explicit;
  return String(choices.value.find((choice) => choice.active === true)?.label || "Aspect");
});

watch(activeLabel, (value) => {
  const match = String(value || "").match(/^([0-9.]+):([0-9.]+)$/);
  if (!match) return;
  customWidth.value = match[1];
  customHeight.value = match[2];
}, { immediate: true });

function emitAction(action) {
  emit("action", action);
}

function onDocumentPointerDown(event) {
  if (props.model.aspectOpen !== true) return;
  if (rootElement.value?.contains(event.target)) return;
  emitAction({ type: "close-aspect" });
}

onMounted(() => {
  document.addEventListener("pointerdown", onDocumentPointerDown, true);
});

onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", onDocumentPointerDown, true);
});

function choosePreset(choice) {
  const [width, height] = String(choice.value || "").split(":");
  emitAction({
    type: "set-aspect",
    width,
    height,
    preserveOrientation: true,
  });
}

function applyCustom() {
  emitAction({
    type: "set-aspect",
    width: customWidth.value,
    height: customHeight.value,
    preserveOrientation: false,
  });
}
</script>

<template>
  <div
    ref="rootElement"
    class="pano-frame-aspect-control pano-cutout-aspect-picker"
    :class="`is-${mode}`"
  >
    <PanoIconButton
      v-if="mode === 'rail'"
      :icon="model.aspectIcon || ICON.aspect"
      label="Aspect Ratio"
      tip="Aspect ratio"
      :pressed="model.aspectOpen ? 'true' : 'false'"
      :attrs="{ 'data-action': 'frame-aspect', disabled }"
      @click="emitAction({ type: 'toggle-aspect' })"
    />
    <button
      v-else
      class="pano-btn pano-cutout-aspect-trigger"
      type="button"
      data-action="frame-aspect"
      :aria-expanded="model.aspectOpen === true ? 'true' : 'false'"
      aria-label="Aspect ratio"
      :disabled="disabled"
      @click="emitAction({ type: 'toggle-aspect' })"
    >
      <SvgIcon :icon="model.aspectIcon || ICON.aspect" />
      <span>{{ activeLabel }}</span>
      <SvgIcon :icon="ICON.chevron" class-name="pano-cutout-aspect-caret" />
    </button>

    <div
      v-show="model.aspectOpen === true"
      class="pano-frame-aspect-popover pano-cutout-aspect-pop"
      role="dialog"
      aria-label="Aspect ratio"
    >
      <button
        v-for="choice in choices"
        :key="choice.value"
        class="pano-btn pano-frame-aspect-choice"
        :class="{ active: choice.active === true }"
        type="button"
        data-action="frame-aspect-set"
        :data-aspect="choice.value"
        :disabled="disabled"
        @click="choosePreset(choice)"
      >{{ choice.label }}</button>

      <div class="pano-cutout-aspect-custom">
        <input
          v-model="customWidth"
          name="customWidth"
          type="number"
          min="0"
          step="any"
          inputmode="decimal"
          aria-label="Custom aspect width"
          :disabled="disabled"
        >
        <span aria-hidden="true">:</span>
        <input
          v-model="customHeight"
          name="customHeight"
          type="number"
          min="0"
          step="any"
          inputmode="decimal"
          aria-label="Custom aspect height"
          :disabled="disabled"
        >
        <button
          class="pano-btn"
          type="button"
          data-action="frame-aspect-custom"
          :data-custom-width="customWidth"
          :data-custom-height="customHeight"
          :disabled="disabled"
          @click="applyCustom"
        >Apply</button>
      </div>
    </div>
  </div>
</template>
