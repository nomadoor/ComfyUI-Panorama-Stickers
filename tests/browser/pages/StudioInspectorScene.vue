<script setup>
import { shallowRef } from "vue";
import { loadSceneState } from "/web_src/pano_scene_state.js";
import { upstreamWorkingLayers } from "/web_src/pano_upstream.js";
import { applyInspectorEdit } from "/web_src/studio/inspector_actions.js";
import StudioInspector from "/web_src/components/studio/StudioInspector.vue";

// The scene of tests/browser/pages/studio_inspector.js: a working state with a world 3D (a keyed Position, two
// clips), a sky image, no Camera (the default one), and an upstream layer whose world image this node overrides. The
// page plays the shell: it applies each edit, counts the Undo steps, and puts the state back on a cancel.
const file = (filename) => ({ kind: "file", filename, subfolder: "", storage: "input" });
let raw = loadSceneState({
  version: 2,
  stickers: [
    {
      id: "sticker_1",
      placement: "world",
      source: file("chair.glb"),
      position: { value: [0, 0, 0], keyframes: [{ frame: 0, value: [1.2, -1.6, -3] }, { frame: 24, value: [2, -1.6, -3] }] },
      rotation: { value: { yaw_deg: 30, pitch_deg: 0, roll_deg: 0 } },
      scale: { value: 1.5 },
      opacity: { value: 0.72 },
    },
    {
      id: "sticker_2",
      placement: "sky",
      source: file("moon.png"),
      direction: { value: { yaw_deg: 40, pitch_deg: 12 } },
      size: { value: { hFOV_deg: 30, vFOV_deg: 20 } },
    },
  ],
});
const layerState = loadSceneState({
  version: 2,
  id: "scene_up",
  stickers: [{ id: "sticker_1", placement: "world", source: file("sign.png"), position: { value: [0, 0, -2] } }],
});
raw.upstream = loadSceneState({
  version: 2,
  upstream: [{ layer: "scene_up", fps: 24, deleted: [], stickers: [{ id: "sticker_1", placement: "world", position: { value: [3, 0, -2], keyframes: [] } }] }],
}).upstream;
let layers = upstreamWorkingLayers([{ sceneState: layerState, ui: {} }], raw.upstream, raw.timeline.fps);

const state = shallowRef(raw);
const upstream = shallowRef(layers);
const selection = shallowRef({ ids: ["sticker_1"] });
const tab = shallowRef("3d");
const playhead = shallowRef(0);
const readOnly = shallowRef(false);
const animations = { sticker_1: [{ name: "Idle" }, { name: "Walk" }] };
const closes = shallowRef(0);
let history = 0;
// The state from before a gesture's first input, put back on its cancel.
let before = null;

function show() {
  raw = { ...raw };
  state.value = raw;
  upstream.value = [...layers];
}

function onEdit(edit) {
  if (edit.phase === "input" && !before) before = { raw: structuredClone(raw), layers: structuredClone(layers) };
  const result = applyInspectorEdit(raw, edit, { playhead: playhead.value, readOnly: readOnly.value, upstream: layers, animations });
  if (result.cancel && before) {
    raw = before.raw;
    layers = before.layers;
  }
  if (edit.phase !== "input") before = null;
  if (result.upstreamChanged) layers = upstreamWorkingLayers([{ sceneState: layerState, ui: {} }], raw.upstream, raw.timeline.fps);
  if (result.history) history += 1;
  window.__edits.push({ edit: JSON.parse(JSON.stringify(edit)), result });
  show();
}

window.__scene = {
  select: (value) => { selection.value = value; },
  tab: (value) => { tab.value = value; },
  playhead: (value) => { playhead.value = value; },
  height: (px) => document.documentElement.style.setProperty("--slot-h", `${px}px`),
  history: () => history,
  closes: () => closes.value,
  state: () => JSON.parse(JSON.stringify(raw)),
  upstream: () => JSON.parse(JSON.stringify(layers.map((layer) => layer.sceneState))),
};
</script>

<template>
  <div class="col pano-studio dark-theme" data-theme-col="dark">
    <div class="slot">
      <StudioInspector
        :state="state"
        :selection="selection"
        :tab="tab"
        :playhead="playhead"
        :read-only="readOnly"
        :upstream="upstream"
        :animations="animations"
        node-name="Panorama Studio"
        @edit="onEdit"
        @close="closes += 1"
      />
    </div>
  </div>
</template>
