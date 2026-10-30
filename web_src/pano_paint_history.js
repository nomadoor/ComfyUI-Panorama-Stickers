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

// A string at least this long is kept once for all the steps that have it (raster objects' PNG data URLs,
// embedded Sticker images), and a step has a reference to it instead.
const SHARED_STRING_MIN_LENGTH = 1024;
// A reference in a kept step. A string of the state that starts with it is kept as a shared string too, so
// every string with this start in a kept step is a reference.
const SHARED_STRING_REF = "pano-history-string:";

// The step list of createHistoryController over values recorded as JSON, without the top-level fields `omit`
// names. Undo, Redo and `entries` give each step as that JSON. A kept step has its large strings replaced by
// references to a table that keeps each once, and drops it once no kept step has it.
export function createSharedStringHistory(limit = 80, { omit = [] } = {}) {
  const steps = createHistoryController(limit);
  const idByString = new Map();
  const stringById = new Map();
  // The ids of the shared strings each kept step has.
  const idsByStep = new Map();
  let nextId = 0;

  function encode(value, omitted) {
    const ids = new Set();
    const text = JSON.stringify(value, function share(key, item) {
      if (this === value && omitted.includes(key)) return undefined;
      if (typeof item !== "string" || (item.length < SHARED_STRING_MIN_LENGTH && !item.startsWith(SHARED_STRING_REF))) return item;
      let id = idByString.get(item);
      if (id === undefined) {
        id = nextId;
        nextId += 1;
        idByString.set(item, id);
        stringById.set(id, item);
      }
      ids.add(id);
      return `${SHARED_STRING_REF}${id}`;
    });
    return { text: String(text ?? ""), ids };
  }

  function decode(text) {
    if (text === null) return null;
    return JSON.stringify(JSON.parse(text, (key, item) => (
      typeof item === "string" && item.startsWith(SHARED_STRING_REF) ? stringById.get(Number(item.slice(SHARED_STRING_REF.length))) : item
    )));
  }

  function commit({ text, ids }) {
    steps.commitActionGroup(text);
    idsByStep.set(text, ids);
    const kept = new Set(steps.entries);
    const live = new Set();
    for (const [step, stepIds] of idsByStep) {
      if (!kept.has(step)) idsByStep.delete(step);
      else stepIds.forEach((id) => live.add(id));
    }
    for (const [id, item] of stringById) {
      if (live.has(id)) continue;
      stringById.delete(id);
      idByString.delete(item);
    }
  }

  return {
    // Records `value` as a step, unless it is the same as the current one.
    record(value) {
      commit(encode(value, omit));
    },
    // Records a step given as JSON, as it is.
    commitActionGroup(snapshot) {
      commit(encode(JSON.parse(snapshot), []));
    },
    undo: () => decode(steps.undo()),
    redo: () => decode(steps.redo()),
    get entries() {
      return steps.entries.map(decode);
    },
    get length() {
      return steps.entries.length;
    },
    get index() {
      return steps.index;
    },
    // The length of the strings the history keeps: its steps and the shared strings.
    get storedLength() {
      let total = 0;
      steps.entries.forEach((step) => { total += step.length; });
      stringById.forEach((item) => { total += item.length; });
      return total;
    },
  };
}
