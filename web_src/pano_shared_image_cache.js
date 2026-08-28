export function nextMediaRevision(current) {
  return Math.max(0, Number(current || 0)) + 1;
}

export function buildSharedImageCacheKey(src, stateHash = "", revision = 0) {
  return [String(src || ""), String(stateHash || ""), Math.max(0, Number(revision || 0))].join("|");
}

export function createSharedImageCache({ ImageCtor = null, maxEntries = 32 } = {}) {
  const entries = new Map();
  const subscriptions = new WeakMap();
  const limit = Math.max(1, Math.trunc(Number(maxEntries || 32)));

  function detach(record) {
    if (!record) return;
    record.entry.listeners.delete(record);
    const ownerEntries = subscriptions.get(record.owner);
    if (ownerEntries?.get(record.key) === record) ownerEntries.delete(record.key);
  }

  function subscribe(owner, key, entry, callback) {
    if (!owner || typeof callback !== "function" || entry.settled) return;
    let ownerEntries = subscriptions.get(owner);
    if (!ownerEntries) {
      ownerEntries = new Map();
      subscriptions.set(owner, ownerEntries);
    }
    const previous = ownerEntries.get(key);
    if (previous?.entry === entry) {
      previous.callback = callback;
      return;
    }
    detach(previous);
    const record = { owner, key, entry, callback };
    ownerEntries.set(key, record);
    entry.listeners.add(record);
  }

  function settle(entry, succeeded) {
    if (entry.settled) return;
    entry.settled = true;
    entry.image.onload = null;
    entry.image.onerror = null;
    if (!succeeded && entries.get(entry.key) === entry) entries.delete(entry.key);
    [...entry.listeners].forEach((record) => {
      detach(record);
      try {
        record.callback(entry.image, succeeded);
      } catch {
        // One node callback must not prevent other subscribers from settling.
      }
    });
    trimEntries(limit);
  }

  function trimEntries(targetSize) {
    if (entries.size <= targetSize) return;
    for (const [key, entry] of entries) {
      if (entries.size <= targetSize) break;
      if (!entry.settled || entry.listeners.size > 0) continue;
      entry.image.onload = null;
      entry.image.onerror = null;
      entries.delete(key);
    }
  }

  function get(owner, key, src, onSettled = null) {
    const cacheKey = String(key || "");
    const source = String(src || "");
    if (!cacheKey || !source) return null;
    let entry = entries.get(cacheKey);
    if (!entry) {
      trimEntries(limit - 1);
      const Ctor = ImageCtor || globalThis.Image;
      if (typeof Ctor !== "function") return null;
      const image = new Ctor();
      entry = { key: cacheKey, image, listeners: new Set(), settled: false };
      entries.set(cacheKey, entry);
      image.onload = () => settle(entry, true);
      image.onerror = () => settle(entry, false);
      image.src = source;
    } else {
      entries.delete(cacheKey);
      entries.set(cacheKey, entry);
    }
    const ready = entry.settled
      || (entry.image.complete && Number(entry.image.naturalWidth || entry.image.width || 0) > 0);
    if (!ready) subscribe(owner, cacheKey, entry, onSettled);
    return entry.image;
  }

  function disposeOwner(owner) {
    const ownerEntries = subscriptions.get(owner);
    if (!ownerEntries) return;
    [...ownerEntries.values()].forEach(detach);
    subscriptions.delete(owner);
    trimEntries(limit);
  }

  return { get, disposeOwner };
}
