import { createPanoVideo } from "./pano_diagnostics.js";

// The inputs that carry the background: Cutout and Preview's erp_image, the legacy Stickers bg_erp,
// and Panorama Studio's bg_media.
export const BACKGROUND_INPUT_NAMES = ["erp_image", "bg_erp", "bg_media"];
// The inputs that carry the media of the port Sticker: the legacy Stickers sticker_image and
// Panorama Studio's sticker.
export const STICKER_INPUT_NAMES = ["sticker_image", "sticker"];
// Panorama Studio's `scene` input, whose items the editor loads from the node's result.
export const SCENE_INPUT_NAMES = ["scene"];
// The inputs the Pose handoff of Panorama Studio's result (`pano_sticker_handoff`, ADR 0030) comes from: the port's
// media and the `sticker_state` of the Studio that shot it.
export const HANDOFF_INPUT_NAMES = ["sticker", "sticker_state"];

const CHANNEL_INPUT_NAMES = {
  background: BACKGROUND_INPUT_NAMES,
  "external-sticker": STICKER_INPUT_NAMES,
  scene: SCENE_INPUT_NAMES,
  "sticker-handoff": HANDOFF_INPUT_NAMES,
};

function originKey(link) {
  return link?.origin_id == null ? undefined : `${link.origin_id}:${link.origin_slot ?? 0}`;
}

// Where each linked input of a node comes from, as "<origin node id>:<origin slot>" by input name.
export function nodeInputOrigins(node) {
  const origins = {};
  (Array.isArray(node?.inputs) ? node.inputs : []).forEach((input, slot) => {
    const origin = originKey(node.graph ? node.getInputLink(slot) : null);
    if (origin) origins[String(input?.name || "")] = origin;
  });
  return origins;
}

// Whether a VIDEO is linked to one of the inputs `names` of a node, by the type of the link.
export function videoLinked(node, names) {
  return (Array.isArray(node?.inputs) ? node.inputs : []).some((input, slot) => (
    names.includes(String(input?.name || "")) && !!node.graph && node.getInputLink(slot)?.type === "VIDEO"
  ));
}

// The type of what is linked to the input `name` of a node, or "" without a link. A link of type "*" or ""
// (through a legacy Reroute) takes the type of its origin's output, and a Reroute's from its own input.
export function linkedInputType(node, name) {
  const slot = (Array.isArray(node?.inputs) ? node.inputs : []).findIndex((input) => input?.name === name);
  let link = slot >= 0 && node.graph ? node.getInputLink(slot) : null;
  const seen = new Set();
  while (link) {
    if (link.type && link.type !== "*") return String(link.type);
    const origin = node.graph.getNodeById(link.origin_id);
    if (!origin || seen.has(origin)) return "";
    seen.add(origin);
    const type = origin.outputs?.[link.origin_slot ?? 0]?.type;
    if (type && type !== "*") return String(type);
    if (origin.type !== "Reroute") return "";
    link = origin.getInputLink(0);
  }
  return "";
}

// The node of a serialized workflow that a run reports by its execution id ("12" at the root, "12:5" for
// node 5 inside the subgraph that node 12 instances), with the links of the graph it is in.
function workflowNode(workflow, executionId) {
  const path = String(executionId).split(":");
  let graph = workflow;
  for (let depth = 0; ; depth += 1) {
    const entry = (Array.isArray(graph?.nodes) ? graph.nodes : []).find((item) => String(item?.id) === path[depth]);
    if (!entry || depth === path.length - 1) return { graph, entry };
    graph = (workflow?.definitions?.subgraphs || []).find((subgraph) => subgraph?.id === entry.type);
  }
}

// The same for a node of a serialized workflow, whose links are arrays (0.4) or objects (1.0).
export function workflowInputOrigins(workflow, executionId) {
  const { graph, entry } = workflowNode(workflow, executionId);
  const links = new Map((Array.isArray(graph?.links) ? graph.links : []).map((link) => (
    Array.isArray(link) ? [link[0], { origin_id: link[1], origin_slot: link[2] }] : [link?.id, link]
  )));
  const origins = {};
  for (const input of Array.isArray(entry?.inputs) ? entry.inputs : []) {
    const origin = originKey(links.get(input?.link));
    if (origin) origins[String(input?.name || "")] = origin;
  }
  return origins;
}

const TRACKED_INPUT_NAMES = [...BACKGROUND_INPUT_NAMES, ...STICKER_INPUT_NAMES, ...SCENE_INPUT_NAMES, ...HANDOFF_INPUT_NAMES];
const OUTPUT_INPUTS_LIMIT = 256;

// Where the inputs of each output came from, by the output's content. ComfyUI copies an output each time it
// stores, snapshots (workflow tabs) or restores it, and reloads a graph's nodes on undo and tab switches, so
// neither the output object nor the node can carry it. Outputs of nodes without tracked inputs are not kept.
const outputInputs = new Map();
const outputKeys = new WeakMap();
let nodeOutput = () => null;

function outputKey(output) {
  if (!outputKeys.has(output)) outputKeys.set(output, JSON.stringify(output));
  return outputKeys.get(output);
}

// Sets how a node's current output is found: the runtime reads it from app.nodeOutputs.
export function setNodeOutputLookup(lookup) {
  nodeOutput = lookup;
}

// Records the inputs an output was made from: the links of the workflow its job ran.
function recordOutputInputs(output, origins) {
  const key = outputKey(output);
  outputInputs.delete(key);
  outputInputs.set(key, origins);
  if (outputInputs.size > OUTPUT_INPUTS_LIMIT) outputInputs.delete(outputInputs.keys().next().value);
}

// Output media stays current while its channel's inputs come from where they came from when it was made.
// An output first seen without a record (one restored with a workflow tab or a job opened from the queue,
// a run's output until its job is read, or one dropped from the record by newer ones) is taken to come from
// the links as they are then, and that is recorded, so a link changed later makes it stale. The job's
// links replace that record once the job is read. Connection events alone change nothing, so the ones
// LGraphNode.configure fires while loading are harmless. A change upstream that keeps the links, such as
// another file chosen in LoadVideo, is not seen here: the output stays current until the node runs again.
export function isNodeOutputMediaCurrent(node, channel) {
  const output = node ? nodeOutput(node) : null;
  if (!output) return true;
  const current = nodeInputOrigins(node);
  let recorded = outputInputs.get(outputKey(output));
  if (recorded) {
    // Reading keeps a record in use, so outputs still shown are not the ones newer records push out.
    recordOutputInputs(output, recorded);
  } else {
    if (!node.graph || !node.inputs?.some((input) => TRACKED_INPUT_NAMES.includes(input?.name))) return true;
    recordOutputInputs(output, current);
    recorded = current;
  }
  return CHANNEL_INPUT_NAMES[channel].every((name) => recorded[name] === current[name]);
}

// Servers without the jobs API, which answer it with something other than JSON. They are not asked again.
const withoutJobsApi = new WeakSet();

// The body of a GET of the jobs API, or null.
async function fetchJobs(api, path) {
  if (withoutJobsApi.has(api)) return null;
  let response;
  try {
    response = await api.fetchApi(path);
  } catch {
    return null;
  }
  const body = await response.json().catch(() => undefined);
  if (body === undefined) withoutJobsApi.add(api);
  return response.ok && body !== undefined ? body : null;
}

// The output a job made for node `executionId` and where that node's inputs came from in the workflow the
// job ran, or null when the node has no tracked input there.
function jobNodeOutput(job, executionId) {
  const workflow = job?.workflow?.extra_data?.extra_pnginfo?.workflow;
  const { entry } = workflowNode(workflow, executionId);
  const output = job?.outputs?.[executionId];
  if (!output || !entry?.inputs?.some((input) => TRACKED_INPUT_NAMES.includes(input?.name))) return null;
  return { output, inputs: workflowInputOrigins(workflow, executionId) };
}

// Node ids of a workflow whose job history has no output for them, by workflow id, until a run succeeds.
const withoutHistory = new Map();

// Records the outputs of each run that showed panorama media (`pano_` keys) once it ends, with the links of
// the workflow it ran, as the server keeps them with the job.
export function trackRunOutputs(api) {
  const runs = new Set();
  api.addEventListener("executed", ({ detail }) => {
    if (Object.keys(detail?.output || {}).some((key) => key.startsWith("pano_"))) runs.add(detail.prompt_id);
  });
  for (const type of ["execution_success", "execution_error", "execution_interrupted"]) {
    api.addEventListener(type, async ({ detail }) => {
      if (type === "execution_success") withoutHistory.clear();
      if (!runs.delete(detail?.prompt_id)) return;
      const job = await fetchJobs(api, `/jobs/${encodeURIComponent(detail.prompt_id)}`);
      for (const executionId of Object.keys(job?.outputs || {})) {
        const made = jobNodeOutput(job, executionId);
        if (made) recordOutputInputs(made.output, made.inputs);
      }
    });
  }
}

const RESTORE_JOB_LIMIT = 5;

// ComfyUI's frontend keeps node outputs in memory only, so a browser reload drops them. The server keeps
// them in its job history, together with the temp files they name, until it restarts. One look at the
// history serves all nodes of a loaded graph: the job list is read once, and the jobs newest first, one at a
// time and only as far as some node that still `wants` an output needs.
function readJobHistory(api, workflowId) {
  const query = `workflow_id=${encodeURIComponent(workflowId)}&status=completed,failed,cancelled&limit=${RESTORE_JOB_LIMIT}`;
  const jobs = fetchJobs(api, `/jobs?${query}`).then((body) => body?.jobs || []);
  const details = new Map();
  const detail = (id) => {
    if (!details.has(id)) details.set(id, fetchJobs(api, `/jobs/${encodeURIComponent(id)}`));
    return details.get(id);
  };
  return {
    async lastNodeOutput(node, wants) {
      const nodeId = String(node.id);
      for (const { id } of await jobs) {
        if (!wants()) return null;
        const job = await detail(id);
        if (!job?.outputs?.[nodeId]) continue;
        if (job.workflow?.prompt?.[nodeId]?.class_type !== node.comfyClass) return null;
        return jobNodeOutput(job, nodeId);
      }
      return null;
    },
  };
}

// A workflow tab ComfyUI switches back to, or undoes in, has its outputs in its change tracker: ComfyUI
// restores them right after the load, or keeps them.
function workflowKeepsOutputs(app) {
  const workflows = app.extensionManager?.workflow?.openWorkflows || [];
  return workflows.some((workflow) => workflow?.activeState?.id === app.rootGraph.id && workflow.changeTracker?.nodeOutputs);
}

let loadHistory = null;

// After a graph load, gives a node without an output its last one from the job history, stores it in
// `app.nodeOutputs` and records the inputs that job ran on. ComfyUI calls loadedGraphNode for all nodes of a
// load in one synchronous pass, so the nodes of one load share one look at the history. A node the history
// had nothing for is not looked up again until a run succeeds. Outputs ComfyUI restores itself (a workflow
// tab's, after the load; a job opened from the queue) win, and a load does not touch the record of any
// output. Nodes inside subgraphs keep needing a run.
export async function restoreLoadedNodeOutput(node, app, api) {
  const id = String(node.id);
  const workflowId = app.rootGraph.id;
  const wants = () => node.graph === app.rootGraph && !app.nodeOutputs[id];
  if (!wants() || withoutJobsApi.has(api) || withoutHistory.get(workflowId)?.has(id) || workflowKeepsOutputs(app)) return null;
  if (loadHistory?.workflowId !== workflowId) {
    loadHistory = { workflowId, history: readJobHistory(api, workflowId) };
    queueMicrotask(() => { loadHistory = null; });
  }
  const restored = await loadHistory.history.lastNodeOutput(node, wants);
  if (!wants()) return null;
  if (!restored) {
    if (!withoutJobsApi.has(api)) withoutHistory.set(workflowId, (withoutHistory.get(workflowId) || new Set()).add(id));
    return null;
  }
  recordOutputInputs(restored.output, restored.inputs);
  app.nodeOutputs[id] = restored.output;
  return restored.output;
}

export function isTrackedMediaInputConnectionChange(
  node,
  type,
  slotIndex,
  trackedNames = BACKGROUND_INPUT_NAMES,
) {
  const normalizedType = String(type ?? "").trim().toLowerCase();
  const isInput = type === 1 || normalizedType === "input";
  if (!isInput) return false;
  const input = Array.isArray(node?.inputs) ? node.inputs[Number(slotIndex)] : null;
  return trackedNames.includes(String(input?.name || ""));
}

const VIDEO_FILE = /\.(mp4|webm|mov|m4v|mkv)$/i;

// A preview entry or /view URL that names a video file, which an <img> cannot load.
export function isVideoFile(candidate) {
  if (typeof candidate === "string") {
    const query = candidate.includes("?") ? candidate.slice(candidate.indexOf("?") + 1) : "";
    return VIDEO_FILE.test(new URLSearchParams(query).get("filename") || candidate.split("?")[0]);
  }
  return VIDEO_FILE.test(String(candidate?.filename || ""));
}

// A token for the /view URLs of the files an output names, so the browser does not replay a cached copy of a
// file replaced under the same name. Only uploads do that (type "input"): ComfyUI keeps the file name but gives
// the node a new output object, so such an output gets a token per object. Run results (temp, output) never
// reuse a name, so their token stays the same across the copies ComfyUI makes of an output when it stores,
// snapshots and restores it, and the image is not loaded again.
const outputTokens = new WeakMap();
function namesUpload(output) {
  return [output, output?.ui].some((group) => Object.values(group || {}).some((entries) => (
    Array.isArray(entries) && entries.some((entry) => entry?.type === "input")
  )));
}
export function outputSourceToken(output) {
  if (!namesUpload(output)) return "run";
  if (!outputTokens.has(output)) outputTokens.set(output, Math.random().toString(36).slice(2, 10));
  return outputTokens.get(output);
}

// A run that takes a node from ComfyUI's execution cache sends `executed` again with a copy of the output it
// stored. The copy names the same files (see outputSourceToken), so the media shown for it stays. `seen` keeps
// the last output by `id`.
export function isRepeatedOutput(seen, id, output) {
  const key = JSON.stringify(output ?? null);
  if (seen.get(id) === key) return true;
  seen.set(id, key);
  return false;
}

// The ids of the nodes that the inputs at `slots` of `node` come from, and of every node above them.
// `originOf(node, slot)` is the node an input comes from, or null.
export function sourceNodeIds(node, slots, originOf) {
  const ids = new Set();
  const visit = (current, currentSlots) => {
    for (const slot of currentSlots) {
      const origin = originOf(current, slot);
      if (origin?.id == null || ids.has(String(origin.id))) continue;
      ids.add(String(origin.id));
      visit(origin, (Array.isArray(origin.inputs) ? origin.inputs : []).map((_input, index) => index));
    }
  };
  visit(node, slots);
  return ids;
}

export function resolvePreviewVideoSource(output, videoKeys = [], sourceFromCandidate = null) {
  const resolveSource = typeof sourceFromCandidate === "function"
    ? sourceFromCandidate
    : (candidate) => String(candidate?.src || candidate?.url || candidate || "").trim();
  for (const key of videoKeys) {
    const groups = [output?.ui?.[key], output?.[key]];
    for (const group of groups) {
      if (!Array.isArray(group)) continue;
      for (const candidate of group) {
        const src = resolveSource(candidate);
        if (!src) continue;
        if (/\.mp4(\?|$)/i.test(src) || String(candidate?.format || "").toLowerCase() === "video/mp4") {
          return src;
        }
      }
    }
  }
  return "";
}

// The background VIDEO of the legacy Stickers and Cutout node surfaces, muted. Like Panorama Studio's
// Timeline on its node (pano_node_playback.js), it shows its first frame and plays only when asked
// (play(), toggle()); it loops while it plays, and the surface pauses it when it goes out of sight.
// onFrame runs for each frame it presents and when it loads, plays, pauses or fails.
export function createLoopingPreviewVideo({
  documentRef = typeof document !== "undefined" ? document : null,
  src = "",
  onFrame = null,
} = {}) {
  const video = createPanoVideo(documentRef, "looping-preview");
  if (!video || !src) return null;
  const publishFrame = typeof onFrame === "function" ? onFrame : () => {};
  let destroyed = false;
  let frameCallbackId = 0;
  const supportsVideoFrameCallback = typeof video.requestVideoFrameCallback === "function";

  const queueFramePump = () => {
    if (destroyed || !supportsVideoFrameCallback || frameCallbackId || video.paused || video.ended) return;
    frameCallbackId = video.requestVideoFrameCallback(() => {
      frameCallbackId = 0;
      if (destroyed) return;
      publishFrame();
      queueFramePump();
    });
  };
  const onLoaded = () => {
    if (destroyed) return;
    publishFrame();
  };
  const onTick = () => publishFrame();
  const onPlay = () => {
    publishFrame();
    queueFramePump();
  };
  const onPause = () => publishFrame();
  let failed = false;
  const onError = () => {
    failed = true;
    publishFrame();
  };

  video.muted = true;
  video.loop = true;
  video.autoplay = false;
  video.preload = "auto";
  video.playsInline = true;
  video.crossOrigin = "anonymous";
  video.addEventListener("loadedmetadata", onLoaded, { once: true });
  video.addEventListener("loadeddata", onLoaded, { once: true });
  if (!supportsVideoFrameCallback) video.addEventListener("timeupdate", onTick);
  video.addEventListener("play", onPlay);
  video.addEventListener("pause", onPause);
  video.addEventListener("error", onError);
  video.src = src;
  video.load();

  const play = () => {
    if (destroyed || failed || !video.paused) return;
    // Autoplay rules can refuse it; the frame on screen stays.
    Promise.resolve(video.play()).catch(() => {});
  };
  const pause = () => {
    if (!destroyed && !video.paused) video.pause();
  };

  const destroy = () => {
    if (destroyed) return;
    destroyed = true;
    if (frameCallbackId && typeof video.cancelVideoFrameCallback === "function") {
      video.cancelVideoFrameCallback(frameCallbackId);
      frameCallbackId = 0;
    }
    video.removeEventListener("loadedmetadata", onLoaded);
    video.removeEventListener("loadeddata", onLoaded);
    video.removeEventListener("timeupdate", onTick);
    video.removeEventListener("play", onPlay);
    video.removeEventListener("pause", onPause);
    video.removeEventListener("error", onError);
    video.pause();
    video.removeAttribute?.("src");
    video.load?.();
  };

  // A file that does not load, such as a temp MP4 the server deleted, leaves the caller to its fallback.
  return {
    video,
    destroy,
    failed: () => failed,
    play,
    pause,
    toggle() {
      if (video.paused) play();
      else pause();
    },
    get playing() {
      return !destroyed && !video.paused && !video.ended;
    },
  };
}
