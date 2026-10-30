// The editor's modules, made from what showEditor provides. A module is a factory
// `createX(deps) -> { connect(api), ...exports }`: it takes from `deps` the values showEditor made before
// it, and connect() binds the functions it calls in the other modules and in showEditor. Every module is
// made before any is connected, so the modules can call each other in both directions.
//
// A name a module takes that nobody gives is an error at once, not an undefined found later.
export function createEditorModules(provided, factories) {
  const api = { ...provided };
  const modules = factories.map((create) => create(strict(provided, create.name)));
  for (const { connect, ...exports } of modules) {
    for (const name of Object.keys(exports)) {
      if (name in api) throw new Error(`Panorama editor: ${name} is provided twice`);
    }
    Object.assign(api, exports);
  }
  modules.forEach((module, index) => module.connect(strict(api, factories[index].name)));
  return strict(api, "showEditor");
}

function strict(names, taker) {
  return new Proxy(names, {
    get(target, name) {
      if (!(name in target)) throw new Error(`Panorama editor: ${taker} takes ${String(name)}, which nothing provides`);
      return target[name];
    },
  });
}
