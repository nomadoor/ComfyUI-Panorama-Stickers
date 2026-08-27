function comfyImageEntryToUrl(api, entry) {
  if (!entry || typeof entry !== "object") return "";
  const filename = String(entry.filename || "");
  if (!filename) return "";
  const params = new URLSearchParams();
  params.set("filename", filename);
  params.set("type", String(entry.type || "output"));
  if (entry.subfolder) params.set("subfolder", String(entry.subfolder));
  const route = `/view?${params.toString()}`;
  return typeof api?.apiURL === "function" ? api.apiURL(route) : route;
}

function getGraphLinkById(graph, linkId) {
  if (!graph || linkId == null) return null;
  const links = graph.links;
  if (!links) return null;
  if (links instanceof Map) return links.get(linkId) || links.get(Number(linkId)) || links.get(String(linkId)) || null;
  return links[linkId] || links[String(linkId)] || null;
}

function getGraphNodeById(graph, id) {
  if (!graph || id == null) return null;
  if (typeof graph.getNodeById === "function") return graph.getNodeById(id);
  return graph._nodes_by_id?.[id] || graph._nodes_by_id?.[String(id)] || null;
}

function resolveOriginFromLinkInfo(linkInfo) {
  if (!linkInfo) return { originId: null, originSlot: 0 };
  if (typeof linkInfo === "object" && !Array.isArray(linkInfo)) {
    return {
      originId: linkInfo.origin_id ?? null,
      originSlot: Number(linkInfo.origin_slot ?? 0),
    };
  }
  if (Array.isArray(linkInfo)) {
    return {
      originId: linkInfo[1] ?? null,
      originSlot: Number(linkInfo[2] ?? 0),
    };
  }
  return { originId: null, originSlot: 0 };
}

function resolveInputOriginNode(node, inputIndex, fallbackOriginId = null) {
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

export function createComfyMediaAdapter({ app, api, ImageCtor, imageState } = {}) {
  const source = (candidate) => {
    if (!candidate) return "";
    if (typeof candidate === "string") return String(candidate || "").trim();
    if (Array.isArray(candidate)) {
      if (candidate.length === 0) return "";
      if (candidate.length === 1) return source(candidate[0]);
      const filename = String(candidate[0] || "").trim();
      if (filename) {
        return comfyImageEntryToUrl(api, {
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
    return comfyImageEntryToUrl(api, candidate);
  };

  const assetSource = (asset) => {
    if (!asset || typeof asset !== "object") return "";
    const type = String(asset.type || "").trim().toLowerCase();
    if (type === "dataurl") return String(asset.value || "");
    if (type !== "comfy_image") return "";
    const filename = String(asset.filename || "").trim();
    if (!filename) return "";
    return comfyImageEntryToUrl(api, {
      filename,
      subfolder: String(asset.subfolder || ""),
      type: String(asset.storage || "input"),
    });
  };

  const output = (nodeId) => {
    const store = app?.nodeOutputs;
    if (!store || nodeId == null) return null;
    const raw = String(nodeId);
    if (store instanceof Map) {
      return store.get(nodeId) || store.get(raw) || store.get(Number(raw)) || null;
    }
    return store[nodeId] || store[raw] || null;
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
    const input = inputs[inputIndex];
    const linkId = input?.link;
    if (linkId == null) return { src: "", sourceType: "", inputName: wanted };
    const { originId, originSlot } = resolveOriginFromLinkInfo(getGraphLinkById(node?.graph, linkId));
    if (originId == null) return { src: "", sourceType: "", inputName: wanted };
    const originNode = resolveInputOriginNode(node, inputIndex, originId);
    if (!originNode) return { src: "", sourceType: "", inputName: wanted };
    const preferredSlot = Number(originSlot || 0);

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
      const srcCandidates = uniqueSources(ordered);
      if (srcCandidates.length) {
        return { src: srcCandidates[0], srcCandidates, sourceType: "appNodeImageUrls", inputName: wanted };
      }
    }

    const outputCandidates = uniqueSources(orderedOutputCandidates(output(originNode?.id ?? originId), preferredSlot));
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
      comfyImageEntryToUrl(api, { filename, subfolder, type: "temp" }),
      comfyImageEntryToUrl(api, { filename, subfolder, type: "output" }),
      comfyImageEntryToUrl(api, { filename, subfolder, type: "input" }),
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

    if (!node.__panoLinkedInputImageCache) node.__panoLinkedInputImageCache = new Map();
    const key = String(cacheKey || orderedNames.join("|") || "image_exact");
    const sourceKey = normalizedSources.join("\n");
    const cached = node.__panoLinkedInputImageCache.get(key);
    if (cached && cached.srcRaw === sourceKey && cached.img) return cached.img;

    const Ctor = ImageCtor || globalThis.Image;
    if (typeof Ctor !== "function") return null;
    const image = new Ctor();
    imageState?.markImageLoading?.(image, sourceKey);
    const cacheEntry = { srcRaw: sourceKey, resolvedSrc: "", img: image };
    node.__panoLinkedInputImageCache.set(key, cacheEntry);
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
      node?.__panoLinkedInputImageCache?.forEach?.((entry, key, cache) => {
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
    const input = Array.isArray(node?.inputs)
      ? node.inputs.find((entry) => String(entry?.name || "") === wanted)
      : null;
    if (input?.link != null) {
      const { originId, originSlot } = resolveOriginFromLinkInfo(getGraphLinkById(node?.graph, input.link));
      const payload = output(originId);
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
        const value = group[Number(originSlot || 0)];
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
    loadPreferredExactLinkedImage,
    output,
    resolvePreferredExactLinkedSource,
    source,
    uiImage,
    uiList,
    uiValue,
  };
}
