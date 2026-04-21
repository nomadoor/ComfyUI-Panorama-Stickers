<script setup>
import { ref } from "vue";
import PanoModal from "../components/PanoModal.vue";
import { ICON } from "../icons.js";
import SvgIcon from "../components/SvgIcon.vue";

const isOpen = ref(true);
const paintSwatches = [
  { id: "green", label: "Green", cssColor: "rgba(0, 255, 0, 1)" },
  { id: "red", label: "Red", cssColor: "rgba(255, 0, 0, 1)" },
  { id: "blue", label: "Blue", cssColor: "rgba(0, 0, 255, 1)" },
  { id: "black", label: "Black", cssColor: "rgba(0, 0, 0, 1)" },
  { id: "white", label: "White", cssColor: "rgba(255, 255, 255, 1)" },
];
</script>

<template>
  <div class="pano-vue-app">
    <PanoModal
      :open="isOpen"
      type="stickers"
      :read-only="false"
      :hide-sidebar="false"
      node-title="Panorama Stickers"
      :paint-swatches="paintSwatches"
      @close="isOpen = false"
    />
    <div v-if="!isOpen" class="pano-vue-launch">
      <button type="button" class="pano-btn pano-btn-primary pano-btn-texticon" @click="isOpen = true">
        <SvgIcon :icon="ICON.globe" />
        <span class="label">Open Modal</span>
      </button>
    </div>
  </div>
</template>
