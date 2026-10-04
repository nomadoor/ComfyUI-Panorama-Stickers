// The editor's modules, made from what showEditor provides. A module is a factory
// `createX(deps) -> { connect(api), ...exports }`: it takes from `deps` the values showEditor made before
// it, and connect() binds the functions it calls in the other modules and in showEditor. Every module is
// made before any is connected, so the modules can call each other in both directions.
export function createEditorModules(provided, factories) {
  const api = { ...provided };
  const modules = factories.map((create) => create(provided));
  for (const { connect, ...exports } of modules) {
    for (const name of Object.keys(exports)) {
      if (name in api) throw new Error(`Panorama editor: ${name} is provided twice`);
    }
    Object.assign(api, exports);
  }
  for (const module of modules) module.connect(api);
  return api;
}
