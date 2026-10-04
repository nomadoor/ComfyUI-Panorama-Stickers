import assert from "node:assert/strict";
import test from "node:test";

import { createEditorModules } from "../web_src/editor/modules.js";

test("modules call each other through connect, in both directions", () => {
  const createA = (deps) => {
    let pong;
    return {
      connect(api) {
        ({ pong } = api);
      },
      ping: (n) => (n > 0 ? pong(n - 1) : `${deps.name}:ping`),
    };
  };
  const createB = () => {
    let ping;
    return {
      connect(api) {
        ({ ping } = api);
      },
      pong: (n) => (n > 0 ? ping(n - 1) : "pong"),
    };
  };
  const api = createEditorModules({ name: "a" }, [createA, createB]);
  assert.equal(api.ping(3), "pong");
  assert.equal(api.ping(2), "a:ping");
  assert.equal(api.name, "a");
});

test("a name given by two modules, or by a module and showEditor, is refused", () => {
  const create = () => ({ connect() {}, same: () => 1 });
  assert.throws(() => createEditorModules({}, [create, create]), /same is provided twice/);
  assert.throws(() => createEditorModules({ same: 0 }, [create]), /same is provided twice/);
});

test("a module that takes a name nobody provides fails when the editor is made", () => {
  const createNeedy = (deps) => {
    const { missing } = deps;
    return { connect() {}, value: missing };
  };
  assert.throws(() => createEditorModules({}, [createNeedy]), /createNeedy takes missing, which nothing provides/);
  const createLate = () => {
    let missing;
    return {
      connect(api) {
        ({ missing } = api);
      },
      call: () => missing(),
    };
  };
  assert.throws(() => createEditorModules({}, [createLate]), /createLate takes missing, which nothing provides/);
  // A name given with no value is still given.
  assert.equal(createEditorModules({ vueModal: null }, [(deps) => ({ connect() {}, modal: deps.vueModal })]).modal, null);
});
