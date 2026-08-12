<script setup>
import { computed } from "vue";

const props = defineProps({ model: { type: Object, default: () => ({}) } });
const ticks = Array.from({ length: 24 }, (_, index) => index * 15);
const needleTransform = computed(() => `rotate(${Number(props.model.rollDeg || 0)} 20 20)`);
</script>

<template>
  <div
    v-show="model.visible === true"
    class="pano-btn pano-btn-icon pano-frame-roll-knob"
    :class="{ dragging: model.dragging === true, armed: model.armed === true }"
    data-frame-roll-knob
    data-tip="Roll"
    aria-hidden="true"
  >
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <circle class="pano-frame-roll-knob-ring" cx="20" cy="20" r="16" />
      <line
        v-for="angle in ticks"
        :key="angle"
        class="pano-frame-roll-knob-tick"
        :class="{ zero: angle === 0 }"
        x1="20" y1="4" x2="20" :y2="angle % 45 === 0 ? 7 : 6"
        :transform="`rotate(${angle} 20 20)`"
      />
      <g :transform="needleTransform">
        <line class="pano-frame-roll-knob-needle" x1="20" y1="20" x2="20" y2="8" />
      </g>
      <circle class="pano-frame-roll-knob-center" cx="20" cy="20" r="2.2" />
    </svg>
  </div>
</template>
