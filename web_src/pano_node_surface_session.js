export function createNodeSurfaceSession({
  readState,
  reduce,
  projectModel,
  publishLiveState = () => {},
  commitState,
  onChange = () => {},
} = {}) {
  if (typeof readState !== "function" || typeof reduce !== "function"
    || typeof projectModel !== "function" || typeof commitState !== "function") {
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  }
  let draft = null;
  let gestureChanged = false;
  let destroyed = false;
  const currentState = () => draft || readState();
  const notify = () => onChange(projectModel(currentState()));

  return {
    model: () => projectModel(currentState()),
    refresh() {
      if (destroyed) return this.model();
      notify();
      return this.model();
    },
    beginGesture() {
      if (destroyed) return false;
      if (draft) return false;
      draft = readState();
      gestureChanged = false;
      notify();
      return true;
    },
    updateGesture(action) {
      if (destroyed) return false;
      if (!draft) this.beginGesture();
      const result = reduce(draft, action);
      if (!result.changed) return false;
      draft = result.state;
      gestureChanged = true;
      publishLiveState(draft);
      notify();
      return true;
    },
    hasGestureChanges() {
      return draft != null && gestureChanged;
    },
    commitGesture() {
      if (destroyed) return false;
      if (!draft) return false;
      const committed = gestureChanged;
      if (committed) commitState(draft);
      draft = null;
      gestureChanged = false;
      publishLiveState(null);
      notify();
      return committed;
    },
    cancelGesture() {
      if (destroyed) return false;
      if (!draft) return false;
      draft = null;
      gestureChanged = false;
      publishLiveState(null);
      notify();
      return true;
    },
    apply(action) {
      if (destroyed) return false;
      if (draft) this.commitGesture();
      const result = reduce(readState(), action);
      if (!result.changed) return false;
      commitState(result.state);
      notify();
      return true;
    },
    destroy() {
      if (destroyed) return;
      destroyed = true;
      const hadDraft = draft != null;
      draft = null;
      gestureChanged = false;
      if (hadDraft) publishLiveState(null);
    },
  };
}
