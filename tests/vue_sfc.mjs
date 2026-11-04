// Loads web_src/components/*.vue in Node, compiled by vue/compiler-sfc (its <style> left out), and mounts a component
// on a renderer that keeps plain objects instead of DOM elements, so a test reads what the component renders (tags,
// attributes, styles, text) and calls its event handlers. Import this module before the component (dynamically after it).
import { readFileSync } from "node:fs";
import { registerHooks } from "node:module";
import { fileURLToPath } from "node:url";

import { compileScript, compileTemplate, parse } from "vue/compiler-sfc";
import { createRenderer, h } from "vue";

registerHooks({
  load(url, context, next) {
    if (!url.startsWith("file:") || !url.endsWith(".vue")) return next(url, context);
    const filename = fileURLToPath(url);
    const { descriptor } = parse(readFileSync(filename, "utf8"), { filename });
    const id = filename;
    let source;
    if (descriptor.scriptSetup || descriptor.script) {
      source = compileScript(descriptor, { id, inlineTemplate: true }).content;
    } else {
      const { code } = compileTemplate({ source: descriptor.template.content, filename, id });
      source = `${code}\nexport default { render };`;
    }
    return { format: "module", source, shortCircuit: true };
  },
});

// --- A renderer on plain objects -----------------------------------------------------------------------------------

// A node's parent is kept off the node, so an assertion that prints a node prints its subtree only.
const parents = new WeakMap();

function element(tag) {
  return { tag, props: {}, children: [], text: "" };
}

function leaf(tag, text) {
  return { tag, text, children: [], props: {} };
}

const { createApp } = createRenderer({
  createElement: (tag) => element(tag),
  createText: (text) => leaf("#text", text),
  createComment: (text) => leaf("#comment", text),
  setText: (node, text) => { node.text = text; },
  setElementText: (node, text) => {
    node.children = text ? [leaf("#text", text)] : [];
  },
  insert(child, parent, anchor = null) {
    const before = parents.get(child);
    if (before) before.children.splice(before.children.indexOf(child), 1);
    const index = anchor ? parent.children.indexOf(anchor) : -1;
    if (index >= 0) parent.children.splice(index, 0, child);
    else parent.children.push(child);
    parents.set(child, parent);
  },
  remove(child) {
    const parent = parents.get(child);
    if (!parent) return;
    parent.children.splice(parent.children.indexOf(child), 1);
    parents.delete(child);
  },
  parentNode: (node) => parents.get(node) ?? null,
  nextSibling: (node) => {
    const parent = parents.get(node);
    return parent ? parent.children[parent.children.indexOf(node) + 1] ?? null : null;
  },
  patchProp(node, key, previous, next) {
    if (next == null || next === false) delete node.props[key];
    else node.props[key] = next;
  },
});

// A rendered element's text, its descendants' included.
export function textOf(node) {
  if (node.tag === "#text") return node.text;
  if (node.tag === "#comment") return "";
  return node.children.map(textOf).join("");
}

// Every element under node (node included) that test(element) accepts, in document order.
export function findAll(node, test) {
  const found = [];
  const walk = (each) => {
    if (each.tag !== "#text" && each.tag !== "#comment" && test(each)) found.push(each);
    each.children.forEach(walk);
  };
  walk(node);
  return found;
}

// The element's classes, from its rendered `class` prop.
export function classesOf(node) {
  return String(node.props.class ?? "").split(/\s+/).filter(Boolean);
}

// Mounts component with props (a reactive object the test may change; await nextTick() after a change) and returns
// the root container, whose children are what the component rendered.
export function mount(component, props) {
  const root = element("root");
  const app = createApp({ render: () => h(component, props) });
  app.mount(root);
  return { root, unmount: () => app.unmount() };
}
