// The editor settings kept in localStorage: the shared view settings and the grid of each node.
const SHARED_UI_SETTINGS_KEY = "pano_suite.ui_settings.v1";
const NODE_GRID_VISIBILITY_KEY = "pano_suite.node_grid_visibility.v1";
let sharedUiSettingsMemory = null;
let nodeGridVisibilityMemory = null;

function normalizeUiSettings(raw) {
  const src = (raw && typeof raw === "object") ? raw : {};
  return {
    invert_view_x: !!src.invert_view_x,
    invert_view_y: !!src.invert_view_y,
  };
}

export function loadSharedUiSettings() {
  try {
    const text = String(window?.localStorage?.getItem(SHARED_UI_SETTINGS_KEY) || "").trim();
    if (!text) return sharedUiSettingsMemory ? normalizeUiSettings(sharedUiSettingsMemory) : null;
    const parsed = JSON.parse(text);
    const normalized = normalizeUiSettings(parsed);
    sharedUiSettingsMemory = normalized;
    return normalized;
  } catch {
    return sharedUiSettingsMemory ? normalizeUiSettings(sharedUiSettingsMemory) : null;
  }
}

export function saveSharedUiSettings(settings) {
  const normalized = normalizeUiSettings(settings);
  sharedUiSettingsMemory = normalized;
  try {
    window?.localStorage?.setItem(SHARED_UI_SETTINGS_KEY, JSON.stringify(normalized));
  } catch {
    // localStorage unavailable; memory fallback is used.
  }
  return normalized;
}

function loadNodeGridVisibilityMap() {
  if (nodeGridVisibilityMemory && typeof nodeGridVisibilityMemory === "object") {
    return nodeGridVisibilityMemory;
  }
  try {
    const text = String(window?.localStorage?.getItem(NODE_GRID_VISIBILITY_KEY) || "").trim();
    if (!text) {
      nodeGridVisibilityMemory = {};
      return nodeGridVisibilityMemory;
    }
    const parsed = JSON.parse(text);
    nodeGridVisibilityMemory = parsed && typeof parsed === "object" ? parsed : {};
    return nodeGridVisibilityMemory;
  } catch {
    nodeGridVisibilityMemory = {};
    return nodeGridVisibilityMemory;
  }
}

export function getNodeGridVisibility(nodeId, fallback = true) {
  const key = String(nodeId ?? "").trim();
  if (!key) return !!fallback;
  const map = loadNodeGridVisibilityMap();
  const v = map[key];
  return typeof v === "boolean" ? v : !!fallback;
}

export function setNodeGridVisibility(nodeId, visible) {
  const key = String(nodeId ?? "").trim();
  if (!key) return;
  const map = loadNodeGridVisibilityMap();
  map[key] = !!visible;
  nodeGridVisibilityMemory = map;
  try {
    window?.localStorage?.setItem(NODE_GRID_VISIBILITY_KEY, JSON.stringify(map));
  } catch {
    // localStorage unavailable; memory fallback is used.
  }
}
