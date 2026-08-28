<script setup>
import { ref } from "vue";
import { ICON } from "../icons.js";
import PanoIconButton from "./PanoIconButton.vue";
import PanoImageFilePicker from "./PanoImageFilePicker.vue";
import PanoStickersNodeHelp from "./PanoStickersNodeHelp.vue";
import SvgIcon from "./SvgIcon.vue";

const props = defineProps({
  model: { type: Object, default: () => ({}) },
  onAction: { type: Function, default: null },
});
const imageFilePickerRef = ref(null);

function emitAction(action) {
  props.onAction?.(action);
}

function openImagePicker() {
  imageFilePickerRef.value?.open?.("add");
}

function onImageFileSelected(payload) {
  emitAction({ type: 'add-image-file', file: payload?.file || null });
}
</script>

<template>
  <div class="pano-stickers-node-surface">
    <div
      class="pano-stickers-node-toolbar"
      role="toolbar"
      aria-label="Sticker controls"
      @pointerdown.stop
      @wheel.stop
    >
      <button
        class="pano-btn pano-btn-texticon pano-stickers-node-full-editor"
        type="button"
        data-action="open-editor"
        @click="emitAction({ type: 'open-editor' })"
      >
        <SvgIcon :icon="ICON.fullscreen" />
        <span class="label">Full Editor</span>
      </button>
      <button
        class="pano-btn pano-btn-texticon pano-stickers-node-add-image"
        type="button"
        data-action="add-image"
        :disabled="model.importing === true"
        @click="openImagePicker"
      >
        <SvgIcon :icon="ICON.image" />
        <span class="label">Add Image</span>
      </button>
      <PanoIconButton
        :icon="model.locked ? ICON.lock_closed : ICON.lock_open"
        :label="model.locked ? 'Unlock Sticker' : 'Lock Sticker'"
        :tip="model.locked ? 'Unlock sticker' : 'Lock sticker'"
        :pressed="model.locked ? 'true' : 'false'"
        :attrs="{ 'data-action': 'toggle-lock', disabled: model.hasSelection !== true }"
        @click="emitAction({ type: 'toggle-lock' })"
      />
      <PanoIconButton
        :icon="ICON.send_back"
        label="Send to Back"
        tip="Send to back"
        :attrs="{ 'data-action': 'send-back', disabled: model.canMoveBackward !== true || model.locked === true }"
        @click="emitAction({ type: 'send-back' })"
      />
      <PanoIconButton
        :icon="ICON.bring_front"
        label="Bring to Front"
        tip="Bring to front"
        :attrs="{ 'data-action': 'bring-front', disabled: model.canMoveForward !== true || model.locked === true }"
        @click="emitAction({ type: 'bring-front' })"
      />
      <PanoIconButton
        :icon="model.isExternalSelection ? ICON.back_initial : ICON.delete"
        :label="model.isExternalSelection ? 'Back to Initial' : 'Delete Sticker'"
        :tip="model.isExternalSelection
          ? (model.canRestoreInitial ? 'Back to initial position' : 'Already at initial position')
          : 'Delete sticker'"
        :attrs="{
          'data-action': model.isExternalSelection ? 'restore-initial' : 'delete-selected',
          disabled: model.isExternalSelection ? model.canRestoreInitial !== true : model.canDelete !== true,
        }"
        @click="emitAction({ type: model.isExternalSelection ? 'restore-initial' : 'delete-selected' })"
      />
      <PanoStickersNodeHelp />
    </div>
    <div
      v-if="model.hasStickers === false"
      class="pano-stickers-node-empty-note"
    >
      Add Image to place a sticker
    </div>
    <div v-if="model.dropActive === true" class="pano-stickers-node-drop-cue">Drop image to add</div>
    <PanoImageFilePicker
      ref="imageFilePickerRef"
      @file-selected="onImageFileSelected"
    />
  </div>
</template>
