// Panorama Studio's editor in the new UI (ADR 0044). In development: web_src/main.js opens it only while the
// setting PanoramaSuite.Editor.NewUI is on. It shows the node's background with the ground grid and moves the one
// viewpoint (docs/space-and-view.md); it edits nothing yet, so closing writes no state_json. The view it was closed
// with is kept for the page (pano_node_bridge.js editorSession(node).view) and the next opening starts there.
import { createApp, reactive } from "vue";
import StudioEditor from "../components/studio/StudioEditor.vue";
import { createComfyMediaAdapter } from "../pano_comfy_media.js";
import { normalizeCoverageValue } from "../pano_editor_state.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { editorSession, noteStudioEditorOpen, peekNodeSurface } from "../pano_node_bridge.js";
import { loadSceneState } from "../pano_scene_state.js";
import { GROUND_DEFAULT } from "./defaults.js";
import { createStage, stageUi } from "./stage.js";
import { outputView } from "./stage_view.js";
import { installStudioStylesheet } from "./stylesheet.js";
import { openingView, rememberView } from "./view_camera.js";

// The node's inputs that carry its background, the first linked one shown (the input is `background` after the
// rename in docs/studio-node.md, `bg_media` before it).
const BACKGROUND_INPUTS = ["background", "bg_media"];

// The nodes whose editor is open, so a second open does not stack a second window.
const openNodes = new WeakSet();

function widgetValue(node, name) {
  return node?.widgets?.find((widget) => widget?.name === name)?.value;
}

// The node's state v2 (a state that cannot be read opens as the empty state, as the old editor does).
function nodeState(node) {
  try {
    return loadSceneState(String(widgetValue(node, "state_json") ?? ""));
  } catch {
    return loadSceneState(null);
  }
}

const loaded = (image) => !!image?.complete && image.naturalWidth > 0;

// The node's background image, loaded once through its linked input (pano_comfy_media.js): get() is the render's
// background ({ media, revision, coverage }) once it has loaded, null before or without one; state() is "none" (no
// input linked), "loading", "ready" or "failed".
function nodeBackground(node, { app, api, onChange }) {
  const media = createComfyMediaAdapter({ app, api });
  let image = null;
  let status = "none";
  if (media.resolvePreferredExactLinkedSource(node, BACKGROUND_INPUTS).src) {
    image = media.loadPreferredExactLinkedImage(node, BACKGROUND_INPUTS, (settled) => {
      status = loaded(settled) ? "ready" : "failed";
      onChange();
    }, `studio-background:${BACKGROUND_INPUTS.join("|")}`);
    // A cached image may have loaded already.
    if (image) status = loaded(image) ? "ready" : "loading";
  }
  const coverage = normalizeCoverageValue(widgetValue(node, "background_range") ?? widgetValue(node, "coverage"));
  return {
    get: () => (status === "ready" ? { media: image, revision: image.currentSrc || image.src, coverage } : null),
    state: () => status,
  };
}

// Opens the editor for `node`. app and api are ComfyUI's (web_src/main.js passes them); storage keeps the sizes the
// user gives the regions (localStorage). Returns { close } for the caller, or null when it is open already.
export async function openStudioEditor(node, { app = null, api = null, storage = globalThis.localStorage } = {}) {
  if (!node || openNodes.has(node)) return null;
  openNodes.add(node);
  try {
    await installStudioStylesheet();
  } catch (error) {
    openNodes.delete(node);
    throw error;
  }
  const state = nodeState(node);
  const ground = GROUND_DEFAULT;
  // The playhead is at frame 0 until the timeline is in the new UI.
  const output = outputView(state, 0);
  const world = { ground, camera: output.position, boxes: [], content: null };
  const session = editorSession(node);
  const opening = openingView({ memory: session.view, output, world, frameAvailable: false });

  const ui = reactive({
    ...stageUi(),
    // What the top-center line says while nothing else does (docs/studio-ui.md "読み込み中と空の画面").
    background: "none",
    empty: false,
  });
  let stage = null;
  const background = nodeBackground(node, {
    app,
    api,
    onChange: () => {
      ui.background = background.state();
      stage?.redraw(DRAW_REASON.MEDIA);
    },
  });
  ui.background = background.state();
  ui.empty = ui.background === "none" && !state.stickers.length;

  const mountHost = document.createElement("div");
  document.body.appendChild(mountHost);
  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    if (stage) session.view = rememberView(stage.destination(), "panorama");
    stage?.dispose();
    vueApp.unmount();
    mountHost.remove();
    openNodes.delete(node);
    session.open = false;
    noteStudioEditorOpen(node, false);
    peekNodeSurface(node)?.dom?.requestDraw?.();
    node.setDirtyCanvas?.(true, true);
  };
  const vueApp = createApp(StudioEditor, {
    nodeTitle: String(node.title || "Panorama Studio"),
    ui,
    storage,
    onClose: close,
    // StudioEditor.vue hands over the stage's canvas and the editor's root once they are in the page.
    onStage: ({ canvas, root }) => {
      stage = createStage({ canvas, root, opening, output, world, background: background.get, ui, onClose: close });
      return stage;
    },
  });
  vueApp.mount(mountHost);
  // The node surface lets its VIDEO and textures go while the editor covers it, and the Preview's Scene viewers on
  // the graph stop drawing (docs/preview-node.md), as with the old editor.
  session.open = true;
  noteStudioEditorOpen(node, true);
  peekNodeSurface(node)?.dom?.requestDraw?.();
  return { close };
}
