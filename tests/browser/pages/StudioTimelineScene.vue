<script setup>
import { onBeforeUnmount, shallowRef } from "vue";
import StudioTimeline from "/web_src/components/studio/StudioTimeline.vue";
import { applyEdit } from "/web_src/studio/timeline_actions.js";
import { ctxOf, studioState, upstreamLayer } from "/tests/studio_timeline_fixtures.mjs";

// The scene of tests/browser/pages/studio_timeline.js: one Timeline per theme over the same state (the shared
// fixture of tests/studio_timeline_*.test.mjs, with an upstream layer and a hidden painting), the dark one live. It does
// what the shell will: applies `edit` and `select`, moves the playhead on `seek`, plays on a clock, keeps the loop.
const props = defineProps({ onEvent: { type: Function, default: () => {} } });

const record = { layer: "scene_up", stickers: [{ id: "sticker_1", placement: "world" }], scene: {}, deleted: ["gone"] };
const ctx = shallowRef(ctxOf(studioState({ painting_visible: false }), {
  upstream: [upstreamLayer({ record, deleted: 1 })],
  background: { end: 80 },
}));
const selection = shallowRef({ row: null, keys: [] });
const playhead = shallowRef(24);
const playing = shallowRef(false);
const loop = shallowRef(true);
const collapsed = shallowRef(false);
let clock = null;

const log = (name, value) => props.onEvent({ name, value: value === undefined ? null : JSON.parse(JSON.stringify(value)) });

window.__scene = {
  state: () => JSON.parse(JSON.stringify(ctx.value.state)),
  upstream: () => JSON.parse(JSON.stringify(ctx.value.upstream.map((layer) => layer.sceneState))),
  selection: () => selection.value,
  playhead: () => playhead.value,
};

function stop() {
  playing.value = false;
  clearInterval(clock);
  clock = null;
}

function onSeek(frame, info) {
  log("seek", { frame, ...info });
  stop();
  playhead.value = frame;
}

function onPlay() {
  log("play");
  if (playing.value) {
    stop();
    return;
  }
  playing.value = true;
  clock = setInterval(() => {
    const last = ctx.value.state.timeline.length - 1;
    if (playhead.value < last) playhead.value += 1;
    else if (loop.value) playhead.value = 0;
    else stop();
  }, 1000 / 24);
}

function onEdit(payload) {
  log("edit", { kind: payload.kind, phase: payload.phase, stopsPlayback: payload.stopsPlayback, key: payload.key, fps: payload.fps, selection: payload.selection });
  if (payload.kind !== "state") return;
  if (payload.stopsPlayback) stop();
  ctx.value = applyEdit(ctx.value, payload);
  if (payload.selection) selection.value = payload.selection;
}

function onSelect(next) {
  log("select", next);
  selection.value = next;
}

onBeforeUnmount(stop);

const THEMES = ["dark", "light"];
</script>

<template>
  <div>
    <div
      v-for="theme in THEMES"
      :key="theme"
      class="col pano-studio"
      :class="[theme, { 'dark-theme': theme === 'dark' }]"
      :data-theme-col="theme"
    >
      <div class="stage" />
      <div class="area">
        <StudioTimeline
          :state="ctx.state"
          :upstream="ctx.upstream"
          :background="ctx.background"
          :selection="selection"
          :playhead="playhead"
          :playing="playing"
          :loop="loop"
          :read-only="theme === 'light'"
          :collapsed="collapsed && theme === 'dark'"
          @seek="onSeek"
          @play="onPlay"
          @select="onSelect"
          @edit="onEdit"
          @frame-selected="(id) => log('frame-selected', id)"
          @loop-change="(on) => { log('loop-change', on); loop = on; }"
          @collapse-change="(folded) => { log('collapse-change', folded); collapsed = folded; }"
        />
      </div>
    </div>
  </div>
</template>
