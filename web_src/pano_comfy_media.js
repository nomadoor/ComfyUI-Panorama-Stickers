import { BACKGROUND_INPUT_NAMES, isNodeOutputMediaCurrent, isVideoFile, outputSourceToken } from "./pano_preview_video.js";
import { mediaCache } from "./pano_node_bridge.js";

// How a reader reads ComfyUI's results. Each flag is one place where the readers read differently today
// (handoff refactor comfymedia D1-D5); unifying one removes its flag. Callers name a profile, they do not compose flags.
// - editor: the old editor and the new UI (Studio editor, Preview window).
// - nodeSurface: the legacy Stickers / Cutout and Panorama Studio node surfaces (pano_preview_runtime.js).
// - previewNode: the Preview node's IMAGE / VIDEO and the legacy Panorama Preview (pano_preview_previewnode.js).
// outputByExecutionId: a node's result not found by its id is looked for among the keys by executionIdMatches.
// executionIdKeepsEmptyTail: an id ending in ":" has an empty last part. viewType "storage": /view's type is the
// entry's storage, else its type ("comfy_image" reading as "output"). trimFilename: the filename is trimmed.
// tupleNeedsStringName: a [filename, subfolder, type] tuple needs a string first item.
const READ_PROFILES = Object.freeze({
  editor: Object.freeze({ outputByExecutionId: false, executionIdKeepsEmptyTail: false, viewType: "type", trimFilename: false, tupleNeedsStringName: false }),
  nodeSurface: Object.freeze({ outputByExecutionId: true, executionIdKeepsEmptyTail: false, viewType: "storage", trimFilename: false, tupleNeedsStringName: false }),
  previewNode: Object.freeze({ outputByExecutionId: true, executionIdKeepsEmptyTail: true, viewType: "storage", trimFilename: true, tupleNeedsStringName: true }),
});

function readProfile(name) {
  if (!Object.hasOwn(READ_PROFILES, name)) throw new Error(`Unknown ComfyUI read profile: ${name}`);
  return READ_PROFILES[name];
}

function normalizeExecutionId(value, keepEmptyTail) {
  const id = String(value ?? "").trim();
  if (!id) return { full: "", tail: "" };
  if (keepEmptyTail) {
    const parts = id.split(":");
    return { full: id, tail: String(parts[parts.length - 1] || "").trim() };
  }
  const parts = id.split(":").map((p) => String(p).trim()).filter(Boolean);
  return { full: id, tail: parts.length ? parts[parts.length - 1] : id };
}

// Whether two ComfyUI ids name the same node: equal, or one's last part (after the last ":") is the other or the
// other's last part. ComfyUI reports a run by its execution id ("12", "12:5" inside the subgraph node 12 instances)
// and keys app.nodeOutputs by the node's locator id ("12", "<subgraph id>:5"); a node knows only its own id.
export function executionIdMatches(value, target, { keepEmptyTail = false } = {}) {
  const a = normalizeExecutionId(value, keepEmptyTail);
  const b = normalizeExecutionId(target, keepEmptyTail);
  if (!a.full || !b.full) return false;
  return a.full === b.full || a.tail === b.full || a.full === b.tail || a.tail === b.tail;
}

function comfyImageEntryToUrl(api, entry, read = READ_PROFILES.editor) {
  if (!entry || typeof entry !== "object") return "";
  const filename = read.trimFilename ? String(entry.filename || "").trim() : String(entry.filename || "");
  if (!filename) return "";
  const params = new URLSearchParams();
  params.set("filename", filename);
  const viewType = read.viewType === "storage"
    ? String(
      entry.storage
      || (String(entry.type || "").trim().toLowerCase() === "comfy_image" ? "output" : entry.type)
      || "output"
    )
    : String(entry.type || "output");
  params.set("type", viewType);
  if (entry.subfolder) params.set("subfolder", String(entry.subfolder));
  const route = `/view?${params.toString()}`;
  return typeof api?.apiURL === "function" ? api.apiURL(route) : route;
}

function getGraphNodeById(graph, id) {
  if (!graph || id == null) return null;
  if (typeof graph.getNodeById === "function") return graph.getNodeById(id);
  return graph._nodes_by_id?.[id] || graph._nodes_by_id?.[String(id)] || null;
}

// The node a node's input comes from, through a subgraph's output to the node inside; else the graph's node of
// fallbackOriginId.
export function resolveInputOriginNode(node, inputIndex, fallbackOriginId = null) {
  let originNode = null;
  try {
    originNode = typeof node?.getInputNode === "function" ? node.getInputNode(inputIndex) : null;
  } catch {
    originNode = null;
  }
  if (originNode?.isSubgraphNode?.()) {
    try {
      const inputLink = typeof node?.getInputLink === "function" ? node.getInputLink(inputIndex) : null;
      const resolved = inputLink ? originNode.resolveSubgraphOutputLink?.(Number(inputLink.origin_slot ?? 0)) : null;
      if (resolved?.outputNode) originNode = resolved.outputNode;
    } catch {
      // Keep the graph-level fallback below available for incomplete subgraphs.
    }
  }
  if (!originNode && fallbackOriginId != null) {
    originNode = getGraphNodeById(node?.graph, fallbackOriginId);
  }
  return originNode;
}

function listInputNames(node) {
  const inputs = Array.isArray(node?.inputs) ? node.inputs : [];
  return inputs.map((i) => String(i?.name || "")).filter(Boolean);
}

// The image inputs the node surfaces read, in order: the preferred names the node has, then its background inputs.
export function preferredImageInputsForNode(node, preferredInputNames = []) {
  const names = listInputNames(node);
  const out = [];
  preferredInputNames.forEach((name) => {
    if (names.includes(String(name))) out.push(String(name));
  });
  names.forEach((name) => {
    if (BACKGROUND_INPUT_NAMES.includes(name) && !out.includes(name)) out.push(name);
  });
  return out.length ? out : preferredInputNames;
}

function isDirectMediaUrl(src) {
  const value = String(src || "").trim();
  return !!value && (
    /^https?:\/\//i.test(value)
    || value.startsWith("/")
    || value.startsWith("blob:")
    || value.startsWith("data:")
  );
}

function splitFilenameAndSubfolder(pathish) {
  const normalized = String(pathish || "").trim().replaceAll("\\", "/");
  const trimmed = normalized.replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!trimmed) return { filename: "", subfolder: "" };
  const parts = trimmed.split("/").filter(Boolean);
  if (!parts.length) return { filename: "", subfolder: "" };
  const filename = String(parts.pop() || "").trim();
  return { filename, subfolder: parts.join("/") };
}

function hashStringSimple(text) {
  const source = String(text || "");
  let hash = 2166136261;
  for (const symbol of source) {
    hash ^= symbol.codePointAt(0) || 0;
    hash = Math.imul(hash, 16777619);
  }
  return String(hash >>> 0);
}

// read: the name of a read profile (above), "editor" by default.
export function createComfyMediaAdapter({ app, api, ImageCtor, imageState, read: profileName = "editor" } = {}) {
  const read = readProfile(profileName);
  const entryUrl = (entry) => comfyImageEntryToUrl(api, entry, read);
  const source = (candidate) => {
    if (!candidate) return "";
    if (typeof candidate === "string") return String(candidate || "").trim();
    if (Array.isArray(candidate)) {
      if (candidate.length === 0) return "";
      if (candidate.length === 1) return source(candidate[0]);
      const filename = read.tupleNeedsStringName
        ? (typeof candidate[0] === "string" ? String(candidate[0] || "").trim() : "")
        : String(candidate[0] || "").trim();
      if (filename) {
        return entryUrl({
          filename,
          subfolder: String(candidate[1] || "").trim(),
          type: String(candidate[2] || "output").trim() || "output",
        });
      }
      for (const entry of candidate) {
        const resolved = source(entry);
        if (resolved) return resolved;
      }
      return "";
    }
    if (typeof candidate?.src === "string" && candidate.src) return candidate.src;
    if (typeof candidate?.url === "string" && candidate.url) return candidate.url;
    return entryUrl(candidate);
  };

  const assetSource = (asset) => {
    if (!asset || typeof asset !== "object") return "";
    const type = String(asset.type || "").trim().toLowerCase();
    if (type === "dataurl") return String(asset.value || "");
    if (type !== "comfy_image") return "";
    const filename = String(asset.filename || "").trim();
    if (!filename) return "";
    return entryUrl({
      filename,
      subfolder: String(asset.subfolder || ""),
      type: String(asset.storage || "input"),
    });
  };

  // A node's result in app.nodeOutputs by its id; with outputByExecutionId, else the first key that names it
  // (executionIdMatches), such as a node's in a subgraph ("<subgraph id>:5").
  const output = (nodeId) => {
    const store = app?.nodeOutputs;
    if (!store || nodeId == null) return null;
    const raw = String(nodeId);
    const direct = store instanceof Map
      ? store.get(nodeId) || store.get(raw) || store.get(Number(raw)) || null
      : store[nodeId] || store[raw] || null;
    if (direct || !read.outputByExecutionId) return direct;
    const names = (key) => executionIdMatches(key, raw, { keepEmptyTail: read.executionIdKeepsEmptyTail });
    if (store instanceof Map) {
      for (const key of store.keys()) {
        if (names(key)) return store.get(key);
      }
    } else {
      for (const key of Object.keys(store)) {
        if (names(key)) return store[key];
      }
    }
    return null;
  };

  const uiList = (node, key) => {
    const payload = output(node?.id);
    if (Array.isArray(payload?.ui?.[key])) return payload.ui[key];
    if (Array.isArray(payload?.[key])) return payload[key];
    return [];
  };

  const uiValue = (node, key) => {
    const payload = output(node?.id);
    if (payload?.ui && Object.prototype.hasOwnProperty.call(payload.ui, key)) return payload.ui[key];
    if (payload && Object.prototype.hasOwnProperty.call(payload, key)) return payload[key];
    return null;
  };

  const externalStateHash = (node, stateRaw) => {
    const payloadValue = uiValue(node, "pano_sticker_input_state_hash");
    const backendHash = Array.isArray(payloadValue) ? payloadValue[0] : payloadValue;
    const normalizedHash = String(backendHash ?? "").trim();
    return normalizedHash || hashStringSimple(stateRaw);
  };

  const uniqueSources = (candidates) => {
    const resolved = [];
    const seen = new Set();
    for (const candidate of candidates || []) {
      const src = source(candidate);
      if (!src || seen.has(src)) continue;
      seen.add(src);
      resolved.push(src);
    }
    return resolved;
  };

  const orderedOutputCandidates = (payload, preferredSlot) => {
    const groups = [];
    if (Array.isArray(payload?.images) && payload.images.length) groups.push(payload.images);
    if (Array.isArray(payload?.ui?.images) && payload.ui.images.length) groups.push(payload.ui.images);
    const ordered = [];
    for (const group of groups) {
      if (preferredSlot >= 0 && preferredSlot < group.length) ordered.push(group[preferredSlot]);
      ordered.push(...group);
    }
    return ordered;
  };

  const resolveExactLinkedSource = (node, inputName) => {
    const wanted = String(inputName || "").trim();
    if (!wanted) return { src: "", sourceType: "", inputName: "" };
    const inputs = Array.isArray(node?.inputs) ? node.inputs : [];
    const inputIndex = inputs.findIndex((input) => String(input?.name || "") === wanted);
    if (inputIndex < 0) return { src: "", sourceType: "", inputName: wanted };
    const link = node.graph ? node.getInputLink(inputIndex) : null;
    if (link?.origin_id == null) return { src: "", sourceType: "", inputName: wanted };
    const originId = link.origin_id;
    const originNode = resolveInputOriginNode(node, inputIndex, originId);
    if (!originNode) return { src: "", sourceType: "", inputName: wanted };
    const preferredSlot = Number(link.origin_slot ?? 0);

    let appNodeImageUrls = [];
    try {
      appNodeImageUrls = typeof app?.getNodeImageUrls === "function" ? (app.getNodeImageUrls(originNode) || []) : [];
    } catch {
      appNodeImageUrls = [];
    }
    if (Array.isArray(appNodeImageUrls) && appNodeImageUrls.length) {
      const ordered = [];
      if (preferredSlot >= 0 && preferredSlot < appNodeImageUrls.length) ordered.push(appNodeImageUrls[preferredSlot]);
      ordered.push(...appNodeImageUrls);
      const srcCandidates = uniqueSources(ordered.filter((candidate) => !isVideoFile(candidate)));
      if (srcCandidates.length) {
        return { src: srcCandidates[0], srcCandidates, sourceType: "appNodeImageUrls", inputName: wanted };
      }
    }

    const originOutput = output(originNode?.id ?? originId);
    const outputCandidates = uniqueSources(orderedOutputCandidates(originOutput, preferredSlot)
      .filter((candidate) => !isVideoFile(candidate)))
      .map((src) => `${src}&pano_src=${outputSourceToken(originOutput)}`);
    if (outputCandidates.length) {
      return { src: outputCandidates[0], srcCandidates: outputCandidates, sourceType: "nodeOutputs", inputName: wanted };
    }

    const nodeImages = Array.isArray(originNode?.imgs) ? originNode.imgs : [];
    if (nodeImages.length) {
      const ordered = [];
      if (preferredSlot >= 0 && preferredSlot < nodeImages.length) ordered.push(nodeImages[preferredSlot]);
      ordered.push(...nodeImages);
      const srcCandidates = uniqueSources(ordered);
      if (srcCandidates.length) {
        return { src: srcCandidates[0], srcCandidates, sourceType: "nodeImgs", inputName: wanted };
      }
    }

    const imageWidget = originNode?.widgets?.find((widget) => String(widget?.name || "").toLowerCase() === "image");
    if (imageWidget) {
      let src = source(imageWidget.value);
      if (src && !src.includes("/") && !src.includes(":") && (originNode.comfyClass === "LoadImage" || originNode.type === "LoadImage")) {
        src = typeof api?.apiURL === "function"
          ? api.apiURL(`/view?filename=${encodeURIComponent(src)}&type=input&subfolder=`)
          : `/view?filename=${encodeURIComponent(src)}&type=input&subfolder=`;
      }
      if (src) return { src, sourceType: "widget", inputName: wanted };
    }

    return { src: "", sourceType: "", inputName: wanted };
  };

  // The video file that the first linked of `inputNames` loads directly, as LoadVideo shows it in its
  // output. Anything that processes the video in between has no such file and needs a run.
  const linkedVideoFile = (node, inputNames = []) => {
    const inputs = Array.isArray(node?.inputs) ? node.inputs : [];
    for (const name of inputNames) {
      const inputIndex = inputs.findIndex((input) => String(input?.name || "") === name);
      const link = inputIndex >= 0 && node.graph ? node.getInputLink(inputIndex) : null;
      if (link?.origin_id == null) continue;
      const payload = output(resolveInputOriginNode(node, inputIndex, link.origin_id)?.id ?? link.origin_id);
      const entry = (Array.isArray(payload?.images) ? payload.images : []).find(isVideoFile);
      return entry ? `${entryUrl(entry)}&pano_src=${outputSourceToken(payload)}` : "";
    }
    return "";
  };

  // Where the node surfaces (pano_preview_runtime.js) find the picture of a node's linked image input, as they have:
  // the node's own pano_input_images while current, then each linked input's origin.
  const nodeSurfaceLinkedSource = (node, preferredInputNames = [], { log = () => {} } = {}) => {
    const inputs = Array.isArray(node?.inputs) ? node.inputs : [];
    if (!inputs.length) return { src: "", sourceType: "", inputName: "" };
    // The node's own result first (pano_input_images: the picture its run got, the only place an IMAGE made by another
    // node is), while it is current for the inputs; then the linked inputs (docs/adr/0003-external-input-sticker-failure-
    // boundaries.md, Amendment 2026-03-11).
    const selfOutput = isNodeOutputMediaCurrent(node, "background") ? output(node?.id) : null;
    const ownCandidates = [
      ...(Array.isArray(selfOutput?.pano_input_images) ? selfOutput.pano_input_images : []),
      ...(Array.isArray(selfOutput?.ui?.pano_input_images) ? selfOutput.ui.pano_input_images : []),
    ];
    for (const item of ownCandidates) {
      const src = source(item);
      if (src) {
        log("image-resolve", { sourceType: "selfOutput", src, stage: "hit" });
        return { src, sourceType: "selfOutput", inputName: "own" };
      }
    }

    const preferredResolved = preferredImageInputsForNode(node, preferredInputNames);
    const preferred = preferredResolved
      .map((name) => inputs.findIndex((i) => String(i?.name || "") === String(name)))
      .filter((idx) => idx >= 0);
    const imageTyped = inputs
      .map((input, idx) => ({ input, idx }))
      .filter(({ input }) => String(input?.type || "").toUpperCase() === "IMAGE")
      .map(({ idx }) => idx);
    const indices = [...new Set([...preferred, ...imageTyped])];
    log("image-resolve", {
      inputCandidates: preferredResolved,
      resolvedIndices: indices,
      stage: "start",
    });

    for (const idx of indices) {
      const input = inputs[idx];
      const link = node.graph ? node.getInputLink(idx) : null;
      if (link?.origin_id == null) continue;
      const originId = link.origin_id;
      const originNode = resolveInputOriginNode(node, idx, originId);
      if (!originNode) continue;
      const resolvedOriginSlot = Number(link.origin_slot ?? 0);

      const outputs = output(originNode?.id ?? originId);
      // LoadVideo shows its file here, which an <img> cannot load.
      const outImgs = Array.isArray(outputs?.images) ? outputs.images : [];
      if (outImgs.length) {
        const ordered = [];
        if (resolvedOriginSlot >= 0 && resolvedOriginSlot < outImgs.length) ordered.push(outImgs[resolvedOriginSlot]);
        ordered.push(...outImgs);
        for (const cand of ordered.filter((image) => !isVideoFile(image))) {
          const src = source(cand);
          if (src) {
            log("image-resolve", {
              inputName: String(input?.name || ""),
              sourceType: "nodeOutputs",
              stage: "hit",
            });
            return { src: `${src}&pano_src=${outputSourceToken(outputs)}`, sourceType: "nodeOutputs", inputName: String(input?.name || "") };
          }
        }
      }

      let appNodeImageUrls = [];
      try {
        appNodeImageUrls = typeof app?.getNodeImageUrls === "function" ? (app.getNodeImageUrls(originNode) || []) : [];
      } catch {
        appNodeImageUrls = [];
      }
      if (Array.isArray(appNodeImageUrls) && appNodeImageUrls.length) {
        const ordered = [];
        if (resolvedOriginSlot >= 0 && resolvedOriginSlot < appNodeImageUrls.length) ordered.push(appNodeImageUrls[resolvedOriginSlot]);
        ordered.push(...appNodeImageUrls);
        for (const cand of ordered) {
          const src = source(cand);
          if (src) {
            log("image-resolve", {
              inputName: String(input?.name || ""),
              sourceType: "appNodeImageUrls",
              stage: "hit",
            });
            return { src, sourceType: "appNodeImageUrls", inputName: String(input?.name || "") };
          }
        }
      }

      const nodeImgs = Array.isArray(originNode?.imgs) ? originNode.imgs : [];
      if (nodeImgs.length) {
        const ordered = [];
        if (resolvedOriginSlot >= 0 && resolvedOriginSlot < nodeImgs.length) ordered.push(nodeImgs[resolvedOriginSlot]);
        ordered.push(...nodeImgs);
        for (const cand of ordered) {
          const src = source(cand);
          if (src) {
            log("image-resolve", {
              inputName: String(input?.name || ""),
              sourceType: "nodeImgs",
              stage: "hit",
            });
            return { src, sourceType: "nodeImgs", inputName: String(input?.name || "") };
          }
        }
      }

      const imageWidget = originNode?.widgets?.find((w) => String(w?.name || "").toLowerCase() === "image");
      if (imageWidget) {
        let src = source(imageWidget.value);
        if (src && !src.includes("/") && !src.includes(":") && (originNode.comfyClass === "LoadImage" || originNode.type === "LoadImage")) {
          src = api.apiURL(`/view?filename=${encodeURIComponent(src)}&type=input&subfolder=`);
        }
        if (src) {
          log("image-resolve", {
            inputName: String(input?.name || ""),
            sourceType: "widget",
            stage: "hit",
          });
          return { src, sourceType: "widget", inputName: String(input?.name || "") };
        }
      }
    }

    log("image-resolve", { stage: "miss" });
    return { src: "", sourceType: "", inputName: "" };
  };

  const resolvePreferredExactLinkedSource = (node, inputNames = []) => {
    const orderedNames = Array.isArray(inputNames) ? inputNames : [inputNames];
    for (const inputName of orderedNames) {
      const resolved = resolveExactLinkedSource(node, inputName);
      if (String(resolved?.src || "").trim()) return resolved;
    }
    return { src: "", sourceType: "", inputName: "" };
  };

  const sourceCandidates = (rawSource) => {
    const raw = String(rawSource || "").trim();
    if (!raw) return [];
    if (isDirectMediaUrl(raw)) return [raw];
    const { filename, subfolder } = splitFilenameAndSubfolder(raw);
    if (!filename) return [raw];
    return uniqueSources([
      entryUrl({ filename, subfolder, type: "temp" }),
      entryUrl({ filename, subfolder, type: "output" }),
      entryUrl({ filename, subfolder, type: "input" }),
      raw,
    ]);
  };

  const loadPreferredExactLinkedImage = (node, inputNames = [], onSettled = null, cacheKey = "") => {
    const orderedNames = Array.isArray(inputNames) ? inputNames : [inputNames];
    const resolved = resolvePreferredExactLinkedSource(node, orderedNames);
    const rawSources = Array.isArray(resolved?.srcCandidates) && resolved.srcCandidates.length
      ? resolved.srcCandidates
      : [resolved?.src];
    const normalizedSources = rawSources.map((entry) => String(entry || "").trim()).filter(Boolean);
    if (!normalizedSources.length) return null;
    const candidates = uniqueSources(normalizedSources.flatMap((entry) => sourceCandidates(entry)));
    if (!candidates.length) return null;

    const linkedImages = mediaCache(node).linkedImages;
    const key = String(cacheKey || orderedNames.join("|") || "image_exact");
    const sourceKey = normalizedSources.join("\n");
    const cached = linkedImages.get(key);
    if (cached && cached.srcRaw === sourceKey && cached.img) return cached.img;

    const Ctor = ImageCtor || globalThis.Image;
    if (typeof Ctor !== "function") return null;
    const image = new Ctor();
    imageState?.markImageLoading?.(image, sourceKey);
    const cacheEntry = { srcRaw: sourceKey, resolvedSrc: "", img: image };
    linkedImages.set(key, cacheEntry);
    let attempt = -1;
    const settle = (state) => {
      if (state === "ready") imageState?.markImageReady?.(image, sourceKey);
      else imageState?.markImageFailed?.(image, sourceKey);
      onSettled?.(image);
      node.setDirtyCanvas?.(true, true);
    };
    const tryNext = () => {
      attempt += 1;
      if (attempt >= candidates.length) {
        settle("failed");
        return;
      }
      cacheEntry.resolvedSrc = candidates[attempt];
      image.src = cacheEntry.resolvedSrc;
    };
    image.onload = () => settle("ready");
    image.onerror = () => {
      if (attempt + 1 < candidates.length) {
        tryNext();
        return;
      }
      settle("failed");
    };
    tryNext();
    return image;
  };

  const clearFailedLinkedImages = (node) => {
    try {
      mediaCache(node)?.linkedImages.forEach((entry, key, cache) => {
        if (entry?.img && imageState?.isImageLoadFailed?.(entry.img)) cache.delete(key);
      });
    } catch {
      // Stale media state must not prevent an editor from opening.
    }
  };

  const uiImage = (node, key, imageCache, onSettled = null) => {
    const first = uiList(node, key)[0] || null;
    const src = source(first);
    if (!src) return null;
    const cacheKey = `__ui__${key}`;
    const cached = imageCache?.get?.(cacheKey);
    if (cached && cached.__panoSrc === src) return cached;
    const Ctor = ImageCtor || globalThis.Image;
    if (typeof Ctor !== "function") return null;
    const image = new Ctor();
    image.__panoSrc = src;
    imageState?.markImageLoading?.(image, src);
    image.onload = () => {
      imageState?.markImageReady?.(image, src);
      onSettled?.(image);
    };
    image.onerror = () => {
      imageState?.markImageFailed?.(image, src);
      onSettled?.(image);
    };
    image.src = src;
    imageCache?.set?.(cacheKey, image);
    return image;
  };

  const invalidateUiImage = (imageCache, key) => {
    imageCache?.delete?.(`__ui__${String(key || "")}`);
  };

  const linkedValue = (node, inputName) => {
    const wanted = String(inputName || "");
    const inputIndex = Array.isArray(node?.inputs)
      ? node.inputs.findIndex((entry) => String(entry?.name || "") === wanted)
      : -1;
    const link = inputIndex >= 0 && node.graph ? node.getInputLink(inputIndex) : null;
    if (link) {
      const payload = output(link.origin_id);
      const groups = [
        payload?.output,
        payload?.result,
        payload?.data?.output,
        payload?.data?.result,
        payload?.ui?.output,
        payload?.ui?.result,
      ];
      for (const group of groups) {
        if (!Array.isArray(group)) continue;
        const value = group[Number(link.origin_slot || 0)];
        if (typeof value === "string" && value.trim()) return value;
      }
    }
    const widget = Array.isArray(node?.widgets)
      ? node.widgets.find((entry) => String(entry?.name || "") === wanted)
      : null;
    return String(widget?.value || "");
  };

  return {
    assetSource,
    clearFailedLinkedImages,
    externalStateHash,
    invalidateUiImage,
    linkedValue,
    linkedVideoFile,
    loadPreferredExactLinkedImage,
    output,
    nodeSurfaceLinkedSource,
    resolvePreferredExactLinkedSource,
    source,
    sourceCandidates,
    uiImage,
    uiList,
    uiValue,
  };
}
