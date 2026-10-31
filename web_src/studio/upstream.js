// The upstream Scene in the new editor (docs/studio-ui.md "ノードの入力から来た物"): the layers of another Studio's
// Scene on the `scene` input, from the node's result (`pano_upstream_layers`, docs/studio-node.md "上流の Scene"), with
// the node's own overrides applied in working copies (pano_upstream_layers.js createUpstreamLayers, shared with the old
// editor and the Preview), what the stage draws of them at a frame, their groups of Timeline rows (read-only until the
// new editor edits upstream items), the upstream length the Auto length counts, whether the editor waits for a run to
// show them. The upstream background that stands in while the node has no background of its own is
// pano_background_choice.js's.
import { portMediaMeta } from "../pano_port_media.js";
import {
  layerUiList,
  upstreamBaseline,
  upstreamDeletedCount,
  upstreamLayerEditable,
  upstreamOverriddenEnds,
  upstreamPending,
} from "../pano_upstream.js";
import { createUpstreamLayers } from "../pano_upstream_layers.js";

// The paint of an upstream layer shows at the editor's default size, as the Preview shows it (pano_scene_viewer.js):
// the Scene does not carry the size of the Studio that made it.
const UPSTREAM_PAINT_SIZE = Object.freeze({ width: 2048, height: 1024 });

// The title of the Panorama Studio among the graph's `nodes` whose state has the Scene id `key`, or null (a layer
// without an id has a key starting with "#", which no state holds).
export function upstreamNodeName(nodes, key) {
  if (!key || key.startsWith("#")) return null;
  for (const node of nodes ?? []) {
    if (String(node?.comfyClass || node?.type || "") !== "PanoramaStudio") continue;
    const text = node.widgets?.find((widget) => widget?.name === "state_json")?.value;
    let id = null;
    try {
      id = JSON.parse(String(text || "null"))?.id ?? null;
    } catch {
      id = null;
    }
    if (id === key) return String(node.title || "") || null;
  }
  return null;
}

// list(): the `pano_upstream_layers` value of the node's current result, or null. linkType(): the type of the link on
// `scene` (pano_preview_video.js linkedInputType). uiList(key): a list of the node's result. state(): the working
// state (its `upstream` records and Timeline fps). nodeName(key): the upstream Studio's title for a layer key, or null.
// mediaSource, mediaAssetSource, revisionOf, playing, editorFile and onMedia are createUpstreamLayers's.
export function createStudioUpstream({
  list, linkType, uiList, state, nodeName = () => null, mediaSource, mediaAssetSource, revisionOf, playing, editorFile = null, onMedia = () => {},
}) {
  // The working copies as the last rebuild left them: the Auto length counts the Clip ranges overridden since.
  let baseline = new Map();
  const layers = createUpstreamLayers({
    list,
    fps: () => state().timeline.fps,
    records: () => state().upstream ?? [],
    mediaSource,
    mediaAssetSource,
    revisionOf,
    paintTarget: () => UPSTREAM_PAINT_SIZE,
    playing,
    editorFile,
    onMedia,
    onRebuild: (working) => {
      baseline = upstreamBaseline(working);
    },
  });

  const entries = () => layers.entries();

  return {
    // The working copies of the layers (pano_upstream.js upstreamWorkingLayers), none without a result.
    working: () => (entries() ?? []).map((entry) => entry.working),
    // What the stage draws of the layers at Timeline `frame` ({ sky, stickers, items }), or null without layers.
    viewInput: (frame) => (entries() ? layers.viewInput(frame) : null),
    // The layers as the Timeline shows them (timeline_model.js ctx `upstream`), read-only for now.
    timelineLayers() {
      const records = state().upstream ?? [];
      return (entries() ?? []).map(({ layer, working }) => {
        const editable = upstreamLayerEditable(working.key);
        return {
          key: working.key,
          name: nodeName(working.key),
          sceneState: working.sceneState,
          editable,
          readOnly: true,
          record: editable ? records.find((item) => item.layer === working.key) ?? null : null,
          scene: layerUiList(layer.ui, "pano_scene_files").length > 0,
          // The number of its `scene` items: two or more give its Scene row a time of its own (timeline_model.js hasOwnTime).
          sceneItems: layerUiList(layer.ui, "pano_scene_files").length,
          deleted: editable ? upstreamDeletedCount(records, working) : 0,
          portMeta: portMediaMeta((key) => layerUiList(layer.ui, key)),
        };
      });
    },
    // The upstream Scene as the Auto length counts it (pano_timeline.js autoTimelineLength `upstream`), or null: its
    // output frame count and the ends of the Clip ranges the node overrides in its layers.
    output() {
      const current = entries();
      if (!current) return null;
      const [frames] = uiList("pano_upstream_frames").length ? uiList("pano_upstream_frames") : uiList("pano_timeline_frames");
      const working = current.map((entry) => entry.working);
      const portMeta = (index) => portMediaMeta((key) => layerUiList(current[index].layer.ui, key));
      return {
        frames: Number(frames) > 0 ? Number(frames) : 0,
        ends: upstreamOverriddenEnds(working, state().upstream ?? [], baseline, portMeta, state().timeline.fps),
      };
    },
    // Whether a Scene is linked to `scene` and the node's result has no layers yet (it has not run since).
    pending: () => upstreamPending(linkType(), entries() ?? null),
    // The working copies made again (Undo or Redo restored the `upstream` records).
    rebuild: () => layers.rebuild(),
    dispose() {
      layers.dispose();
      baseline = new Map();
    },
  };
}
