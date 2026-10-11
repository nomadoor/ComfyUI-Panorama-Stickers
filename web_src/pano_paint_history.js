export function createHistoryController(limit = 80, initialState = null) {
  const entries = [];
  let index = -1;
  const maxEntries = Math.max(1, Number(limit || 80));

  function hydrate(raw) {
    entries.splice(0, entries.length);
    index = -1;
    if (!raw || typeof raw !== "object" || !Array.isArray(raw.entries)) return;
    raw.entries.forEach((entry) => {
      entries.push(String(entry || ""));
    });
    if (!entries.length) return;
    const nextIndex = Number(raw.index);
    if (!Number.isInteger(nextIndex)) {
      index = entries.length - 1;
    } else if (nextIndex === -1) {
      index = -1;
    } else {
      index = Math.max(0, Math.min(entries.length - 1, nextIndex));
    }
  }

  function pushSnapshot(snapshot) {
    if (entries[index] === snapshot) return;
    entries.splice(index + 1);
    entries.push(snapshot);
    if (entries.length > maxEntries) entries.shift();
    index = entries.length - 1;
  }

  hydrate(initialState);

  return {
    commitActionGroup(snapshot) {
      pushSnapshot(String(snapshot || ""));
    },
    undo() {
      const next = index - 1;
      if (next < 0 || next >= entries.length) return null;
      index = next;
      return entries[index];
    },
    redo() {
      const next = index + 1;
      if (next < 0 || next >= entries.length) return null;
      index = next;
      return entries[index];
    },
    get entries() {
      return entries.slice();
    },
    get index() {
      return index;
    },
  };
}
