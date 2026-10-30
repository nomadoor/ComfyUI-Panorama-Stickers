<script setup>
import { computed } from "vue";
import { hsv01ToRgb, rgb01ToHsv } from "../../pano_paint_strokes.js";
import StudioSlider from "./StudioSlider.vue";

// The Custom color's popover of the paint tools (docs/studio-ui.md "ペイントの道具"; looks: docs/design.md "色のポップ
// オーバー"): the saturation and value field, the hue strip, Opacity and the recent colors, as the old editor's.
// Presentational: `color` ({ r, g, b, a }, 0..1) and `recent` (8 CSS colors or null) in; `color` out with each change
// (the new color), `recent` with the index of a recent color pressed.
const props = defineProps({
  color: { type: Object, required: true },
  recent: { type: Array, default: () => [] },
});
const emit = defineEmits(["color", "recent"]);

const hsv = computed(() => rgb01ToHsv(props.color));
const alpha = computed(() => Math.round(Math.max(0, Math.min(1, Number(props.color.a ?? 1))) * 100));
const hueCss = computed(() => {
  const { r, g, b } = hsv01ToRgb(hsv.value.h, 1, 1);
  return `rgb(${Math.round(r * 255)} ${Math.round(g * 255)} ${Math.round(b * 255)})`;
});
const percent = (value) => `${(Math.max(0, Math.min(1, value)) * 100).toFixed(2)}%`;
const clamp01 = (value) => Math.max(0, Math.min(1, value));

// A drag on the field or the strip: each move sets the color from where the pointer is in the element.
function drag(event, apply) {
  if (event.button !== 0) return;
  event.preventDefault();
  const element = event.currentTarget;
  const pointerId = event.pointerId;
  element.setPointerCapture?.(pointerId);
  const at = (e) => {
    const rect = element.getBoundingClientRect();
    apply(clamp01((e.clientX - rect.left) / Math.max(1, rect.width)), clamp01((e.clientY - rect.top) / Math.max(1, rect.height)));
  };
  at(event);
  const move = (e) => e.pointerId === pointerId && at(e);
  const up = (e) => {
    if (e.pointerId !== pointerId) return;
    element.removeEventListener("pointermove", move);
    element.removeEventListener("pointerup", up);
    element.removeEventListener("pointercancel", up);
  };
  element.addEventListener("pointermove", move);
  element.addEventListener("pointerup", up);
  element.addEventListener("pointercancel", up);
}

const send = (rgb, a = props.color.a ?? 1) => emit("color", { ...rgb, a });
const onField = (event) => drag(event, (x, y) => send(hsv01ToRgb(hsv.value.h, x, 1 - y)));
const onHue = (event) => drag(event, (x) => send(hsv01ToRgb(x, hsv.value.s, hsv.value.v)));
const onAlpha = (value) => send({ r: props.color.r, g: props.color.g, b: props.color.b }, Math.round(value) / 100);
const swatchCss = computed(() => `rgba(${Math.round(props.color.r * 255)}, ${Math.round(props.color.g * 255)}, ${Math.round(props.color.b * 255)}, ${props.color.a ?? 1})`);
</script>

<template>
  <div class="pano-studio-color-pop" role="dialog" aria-label="Custom color" data-paint-color-pop :style="{ '--hue': hueCss }">
    <div class="pano-studio-color-head">
      <span class="pano-studio-color-preview" :style="{ background: swatchCss }" />
      <span class="pano-studio-color-title">Custom color</span>
    </div>
    <div class="pano-studio-color-field" data-paint-color-field @pointerdown="onField">
      <i class="pano-studio-color-knob" :style="{ left: percent(hsv.s), top: percent(1 - hsv.v) }" />
    </div>
    <div class="pano-studio-color-hue" data-paint-color-hue @pointerdown="onHue">
      <i class="pano-studio-color-knob is-hue" :style="{ left: percent(hsv.h) }" />
    </div>
    <div class="pano-studio-color-alpha">
      <span class="pano-studio-color-alpha-name">Opacity</span>
      <StudioSlider
        class="pano-studio-color-alpha-slider"
        :value="alpha"
        :min="0"
        :max="100"
        :step="1"
        :snap-to="(pos) => Math.round(pos * 100) / 100"
        label="Opacity"
        :value-text="`${alpha}%`"
        data-paint-color-alpha
        @input="onAlpha"
        @change="onAlpha"
      />
      <span class="pano-studio-color-alpha-value">{{ alpha }}%</span>
    </div>
    <div class="pano-studio-color-recent" role="group" aria-label="Recent colors">
      <button
        v-for="(css, index) in recent"
        :key="index"
        type="button"
        class="pano-studio-paint-dot"
        :class="{ 'is-empty': !css }"
        :style="css ? { '--dot': css } : null"
        :data-paint-recent="index"
        :aria-label="`Recent color ${index + 1}`"
        :aria-disabled="css ? null : 'true'"
        :data-tip="css ? `Recent color ${index + 1}` : null"
        @click="css && emit('recent', index)"
      />
    </div>
  </div>
</template>
