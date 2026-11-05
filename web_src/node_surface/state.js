// The node state an on-node surface shows and edits: its state_json (or the live state while an edit runs) parsed once
// per change, the Timeline frame it shows, its loaded state v2, and its loading flag.
import { editorActive, LEGACY_BACKGROUND_COLOR, normalizeCoverageValue, parsePanoEditorState } from "../pano_editor_state.js";
import { loadSceneState } from "../pano_scene_state.js";
import { NODE_SURFACE_FRAME, surfaceSceneEditorState } from "../pano_stickers_node_surface.js";
import { backgroundColorWidget, isNodeOutputMediaCurrent } from "../pano_preview_video.js";
import { portHandoffLinked } from "../pano_port_handoff.js";
import { nodeSurface, stateSync } from "../pano_node_bridge.js";
import { ownOutputUiValue } from "./media.js";
import { loadSharedUiSettings } from "../editor/ui_settings.js";

const PANO_LOADING_MIN_MS = 120;

function getEffectiveStateSource(node) {
  const live = stateSync(node)?.liveState;
  if (live && typeof live === "object") return live;
  if (typeof live === "string" && live.trim()) return live;
  return String(getWidget(node, "state_json")?.value || "");
}

// The state the node surface shows and edits. Panorama Studio's port Sticker shows the Pose handoff of the
// node's current result as the run draws it (ADR 0030); the editor's working state already does.
export function getCachedState(node) {
  const sync = stateSync(node);
  const source = getEffectiveStateSource(node);
  const liveVersion = sync.liveStateVersion;
  // Panorama Studio and the Preview name these `background_color` and `background_range` (ADR 0048); the legacy nodes
  // `bg_color` and `coverage`.
  // Without the widget (the legacy Cutout has none) or with it empty: the legacy nodes' default (pano_editor_state.js),
  // Panorama Studio's dark gray.
  const bg = String(backgroundColorWidget((name) => getWidget(node, name))?.value || (node.__panoSceneStateV2 ? "#1a1a1e" : LEGACY_BACKGROUND_COLOR));
  const coverage = normalizeCoverageValue((getWidget(node, "background_range") ?? getWidget(node, "coverage"))?.value || 360);
  const sceneText = node.__panoSceneStateV2 && typeof source === "string";
  // The handoff applies while the inputs it came from are linked as they were (the cache follows that too).
  const handoff = sceneText && portHandoffLinked(node) && isNodeOutputMediaCurrent(node, "sticker-handoff")
    ? ownOutputUiValue(node, "pano_sticker_handoff") ?? null
    : null;
  const cache = sync.parsedState;
  if (cache && cache.source === source && cache.liveVersion === liveVersion && cache.bg === bg && cache.coverage === coverage && cache.handoff === handoff) {
    return cache.parsed;
  }
  const parsed = sceneText
    ? surfaceSceneEditorState(source, { backgroundColor: bg, coverage, active: editorActive(node) }, handoff)
    : legacySurfaceState(node, source, bg, coverage);
  parsed.coverage = coverage;
  sync.parsedState = { source, liveVersion, bg, coverage, handoff, parsed };
  return parsed;
}

// The legacy Stickers / Cutout nodes' state as the old editor reads it (pano_editor_state.js parsePanoEditorState, with
// the editor's shared view settings), so a surface edit writes the same state as a save in the editor
// (docs/editor-architecture.md). A live state the editor or the surface made is already in that shape; it is copied so
// the coverage set on it stays out of theirs.
function legacySurfaceState(node, source, bg, coverage) {
  if (source && typeof source === "object") return { ...source };
  return parsePanoEditorState(source, {
    outputPreset: getWidget(node, "output_preset")?.value,
    backgroundColor: bg,
    coverage,
    sharedUiSettings: loadSharedUiSettings(),
  });
}

export function getWidget(node, name) { return node.widgets?.find((w) => w.name === name) || null; }

export function ensureRenderCache(node, mode) {
  const surface = nodeSurface(node);
  surface.renderCache ??= {
    mode: String(mode || ""),
    isLoading: false,
    loadingSinceTs: 0,
  };
  const cache = surface.renderCache;
  const nextMode = String(mode || "");
  if (cache.mode !== nextMode) {
    cache.mode = nextMode;
    cache.isLoading = false;
    cache.loadingSinceTs = 0;
  }
  return cache;
}

export function setRenderLoading(node, isLoading, src = "") {
  const cache = ensureRenderCache(node, nodeSurface(node)?.mode || "unknown");
  const now = performance.now();
  if (isLoading) {
    if (!cache.isLoading) {
      cache.isLoading = true;
      cache.loadingSinceTs = now;
    }
    return true;
  }
  if (!cache.isLoading) return false;
  const elapsed = now - Number(cache.loadingSinceTs || 0);
  if (elapsed < PANO_LOADING_MIN_MS) return true;
  cache.isLoading = false;
  cache.loadingSinceTs = 0;
  return false;
}

// The Timeline frame the node shows: its playback's, NODE_SURFACE_FRAME until it plays.
export function surfaceFrame(node) {
  return nodeSurface(node).playback?.playback.frame ?? NODE_SURFACE_FRAME;
}

// The node's working state as a loaded state v2 (pano_scene_state.js), kept while the state stays the same.
export function surfaceSceneState(node, state) {
  const surface = nodeSurface(node);
  if (surface.scene?.state !== state) {
    surface.scene = { state, sceneState: loadSceneState({ ...state, painting: null }) };
  }
  return surface.scene.sceneState;
}
