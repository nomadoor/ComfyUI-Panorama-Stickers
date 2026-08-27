<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { ICON } from "../icons.js";
import PanoFloatingRight from "./PanoFloatingRight.vue";
import PanoFrameRail from "./PanoFrameRail.vue";
import PanoConfirmDialog from "./PanoConfirmDialog.vue";
import PanoImageFilePicker from "./PanoImageFilePicker.vue";
import PanoPaintDock from "./PanoPaintDock.vue";
import PanoPaintOverlays from "./PanoPaintOverlays.vue";
import PanoSelectionMenu from "./PanoSelectionMenu.vue";
import PanoSidePanel from "./PanoSidePanel.vue";
import PanoTooltip from "./PanoTooltip.vue";
import PanoToolRail from "./PanoToolRail.vue";
import PanoVideoTransport from "./PanoVideoTransport.vue";
import PanoViewToggle from "./PanoViewToggle.vue";
import { buildModalShellPreset } from "../modal_shell_presets.js";

const props = defineProps({
  open: { type: Boolean, default: true },
  type: { type: String, default: "stickers" },
  readOnly: { type: Boolean, default: false },
  hideSidebar: { type: Boolean, default: false },
  nodeTitle: { type: String, default: "Panorama Stickers" },
  paintSwatches: { type: Array, default: () => [] },
  shellPreset: { type: Object, default: null },
  uiState: { type: Object, default: () => ({}) },
});

const emit = defineEmits(["close", "image-file-selected", "image-file-cancelled"]);
let previousOverflow = "";
let didLockBody = false;
let previousFocusedElement = null;
const modalRef = ref(null);
const imageFilePickerRef = ref(null);
const paintOverlaysRef = ref(null);

function getPaintOverlayRefs() {
  return paintOverlaysRef.value?.getRefs?.() || {
    cursor: null,
    sizePreview: null,
    sizeSample: null,
  };
}

function openImagePicker(intent) {
  return imageFilePickerRef.value?.open?.(intent) === true;
}

function onImageFileSelected(payload) {
  emit("image-file-selected", payload);
}

function onImageFileCancelled(payload) {
  emit("image-file-cancelled", payload);
}

defineExpose({ getPaintOverlayRefs, openImagePicker });

const previewMode = computed(() => props.readOnly === true);
const shellPreset = computed(() => props.shellPreset || buildModalShellPreset(props.type));
const stageFailureMessage = computed(() => {
  const detail = String((
    props.uiState?.stageStatus === "failed"
      ? props.uiState?.stageStatusDetail
      : props.uiState?.stageWarningDetail
  ) ?? "");
  if (detail === "background") return "Background preview unavailable. Re-run the node to refresh it.";
  if (detail === "stickers") return "One or more sticker previews are unavailable.";
  if (detail === "frame") return "The editor hit a rendering error. Check the browser console for details.";
  if (detail.startsWith("boot:")) return "Part of the editor failed to initialize. Check the browser console for details.";
  return "Some image previews are unavailable. Re-run the node to refresh them.";
});
const floatingButtons = computed(() => {
  const base = Array.isArray(shellPreset.value?.floatingButtons) ? shellPreset.value.floatingButtons.slice() : [];
  if (previewMode.value) {
    base.push({
      action: "toggle-fullscreen",
      label: "Fullscreen",
      tip: "Fullscreen",
      pressed: null,
      icon: ICON.fullscreen,
    });
  }
  return base;
});

function getFocusableElements() {
  const modalEl = modalRef.value;
  if (!modalEl) return [];
  return Array.from(modalEl.querySelectorAll(
    "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])",
  )).filter((el) => {
    if (!(el instanceof HTMLElement)) return false;
    return !el.hidden && el.tabIndex >= 0 && el.offsetParent !== null;
  });
}

function focusModal() {
  const focusables = getFocusableElements();
  const target = focusables[0] || modalRef.value;
  target?.focus?.();
}

function restorePreviousFocus() {
  if (previousFocusedElement?.isConnected) previousFocusedElement.focus?.();
  previousFocusedElement = null;
}

function onKeydown(event) {
  if (event.defaultPrevented) return;
  if (event.key === "Tab") {
    const focusables = getFocusableElements();
    if (!focusables.length) {
      event.preventDefault();
      modalRef.value?.focus?.();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (event.shiftKey) {
      if (active === first || active === modalRef.value || !modalRef.value?.contains(active)) {
        event.preventDefault();
        last.focus();
      }
      return;
    }
    if (active === last || !modalRef.value?.contains(active)) {
      event.preventDefault();
      first.focus();
    }
    return;
  }
  if (event.key === "Escape") emit("close");
}

function lockBody() {
  if (didLockBody) return;
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  didLockBody = true;
}

function unlockBody() {
  if (!didLockBody) return;
  document.body.style.overflow = previousOverflow;
  didLockBody = false;
}

function setOpenSideEffects(isOpen) {
  document.removeEventListener("keydown", onKeydown);
  if (isOpen) {
    if (!previousFocusedElement) previousFocusedElement = document.activeElement;
    lockBody();
    document.addEventListener("keydown", onKeydown);
    nextTick(() => {
      focusModal();
    });
  } else {
    unlockBody();
    restorePreviousFocus();
  }
}

onMounted(() => {
  setOpenSideEffects(props.open);
});

onBeforeUnmount(() => {
  unlockBody();
  document.removeEventListener("keydown", onKeydown);
  restorePreviousFocus();
});

watch(() => props.open, (nextOpen) => {
  setOpenSideEffects(nextOpen);
});
</script>

<template>
  <div v-if="open" class="pano-modal-overlay" @click.self="emit('close')">
    <section ref="modalRef" class="pano-modal" role="dialog" aria-modal="true" :aria-label="nodeTitle" tabindex="-1">
      <div class="pano-stage-wrap">
        <canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800" />
        <canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800" />
        <div class="pano-stage-loading" aria-hidden="true" />
        <div
          v-if="uiState.stageStatus === 'failed' || (uiState.stageStatus === 'ready' && uiState.stageWarningDetail)"
          class="pano-stage-failed"
          role="status"
        >
          {{ stageFailureMessage }}
        </div>
        <div class="pano-stage-drop-hint" aria-hidden="true">
          <div class="pano-stage-drop-hint-text">Drag and drop image here</div>
        </div>
        <PanoPaintOverlays ref="paintOverlaysRef" />
        <PanoImageFilePicker
          ref="imageFilePickerRef"
          @file-selected="onImageFileSelected"
          @file-cancelled="onImageFileCancelled"
        />

        <template v-if="!previewMode">
          <PanoToolRail :buttons="uiState.toolButtons || shellPreset.toolButtons || []" />
          <PanoFrameRail :model="uiState.frameRail || {}" />
          <PanoPaintDock
            :paint-swatches="paintSwatches"
            :panes="shellPreset.paintPanes || []"
            :state="uiState.paintDock || {}"
          />
        </template>

        <PanoVideoTransport :state="uiState.videoTransport || {}" />

        <PanoViewToggle :buttons="uiState.viewButtons || shellPreset.viewButtons || []" />

        <PanoFloatingRight
          :buttons="uiState.floatingButtons || floatingButtons"
          :fov-value="uiState.fovValue || '100°'"
          :preview="uiState.cameraPreview || {}"
          :preview-toggle="uiState.outputPreviewToggle || {}"
        />

        <PanoSelectionMenu :model="uiState.selectionMenu || {}" />
        <PanoTooltip :model="uiState.tooltip || {}" />
        <PanoConfirmDialog :model="uiState.confirmDialog || {}" />
      </div>

      <PanoSidePanel v-if="!hideSidebar" :node-title="nodeTitle" :model="uiState.sidePanel || {}" />
    </section>
  </div>
</template>
