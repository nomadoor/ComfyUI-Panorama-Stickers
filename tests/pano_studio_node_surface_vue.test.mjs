import assert from "node:assert/strict";
import test from "node:test";

// docs/studio-node-surface.md "表示の構成" (ADR 0049, 0052): PanoStudioNodeSurface.vue mounted in Node (tests/vue_sfc.mjs).
const { mount, findAll, classesOf, textOf } = await import("./vue_sfc.mjs");
const { nextTick, reactive } = await import("vue");
const { default: PanoStudioNodeSurface } = await import("../web_src/components/PanoStudioNodeSurface.vue");
const { ICON_PATHS } = await import("../web_src/icons.js");
const { studioSurfaceLayout } = await import("../web_src/pano_studio_surface.js");

function surfaceModel(extra = {}) {
  return { status: { mode: "panorama", shot: "360° · yaw 0°", size: "2048 × 1024", ratio: 2, cap: "" }, layout: null, viewUnavailable: false, playing: false, ...extra };
}

function mountSurface(model) {
  const actions = [];
  const props = reactive({ model, onAction: (action) => actions.push(action) });
  const { root } = mount(PanoStudioNodeSurface, props);
  const all = (test) => findAll(root, test);
  const byClass = (name) => all((node) => classesOf(node).includes(name));
  const button = (action) => all((node) => node.props["data-action"] === action)[0] ?? null;
  const hasIcon = (node, icon) => findAll(node, (each) => each.tag === "svg" && classesOf(each).includes(`icon-tabler-${ICON_PATHS[icon].name}`)).length > 0;
  return { root, props, actions, all, byClass, button, hasIcon };
}

test("the Studio surface has the Open Studio button, the play button, the line with the shot and the size, and no editing controls", async () => {
  const layout = studioSurfaceLayout(400, 260, 2, { playable: true, openWidth: 120 });
  const surface = mountSurface(surfaceModel({ layout, playable: true }));
  const [outer] = surface.root.children;
  assert.deepEqual(classesOf(outer), ["pano-studio", "pano-studio-node-surface"]);

  // Open Studio: its icon and label, a click asks to open the editor.
  const open = surface.button("open-editor");
  assert.ok(surface.hasIcon(open, "fullscreen"));
  assert.equal(textOf(open), "Open Studio");
  assert.equal(open.props.title, undefined);
  open.props.onClick();
  // The play button, while the layout seats it: it toggles playback, its icon and tooltip follow `playing`.
  const play = surface.button("toggle-playback");
  assert.ok(surface.hasIcon(play, "play"));
  assert.equal(play.props.title, "Play");
  play.props.onClick();
  assert.deepEqual(surface.actions, [{ type: "open-editor" }, { type: "toggle-playback" }]);
  surface.props.model = surfaceModel({ layout, playable: true, playing: true });
  await nextTick();
  assert.ok(surface.hasIcon(surface.button("toggle-playback"), "pause"));
  assert.equal(surface.button("toggle-playback").props.title, "Pause");

  // The buttons and the line go where the layout puts them.
  assert.deepEqual(open.props.style, { left: `${Math.round(layout.buttons.open.x)}px`, bottom: `${Math.round(layout.buttons.bottom)}px` });
  assert.deepEqual(surface.button("toggle-playback").props.style, { left: `${Math.round(layout.buttons.play.x)}px`, bottom: `${Math.round(layout.buttons.bottom)}px` });
  const [line] = surface.byClass("pano-studio-node-line");
  assert.deepEqual(line.props.style, { left: `${Math.round(layout.line.x)}px`, top: `${Math.round(layout.line.y)}px`, width: `${Math.round(layout.line.w)}px`, height: `${Math.round(layout.line.h)}px` });

  // The line: the shot with the mode's icon (Panorama the 360° icon, Frame the aspect icon) and the size, whose tooltip is
  // the cap; it has no note.
  assert.equal(textOf(surface.byClass("pano-studio-node-shot")[0]), "360° · yaw 0°");
  assert.ok(surface.hasIcon(surface.byClass("pano-studio-node-shot")[0], "pano"));
  assert.equal(textOf(surface.byClass("pano-studio-node-size")[0]), "2048 × 1024");
  assert.equal(surface.byClass("pano-studio-node-size")[0].props.title, undefined);
  surface.props.model = surfaceModel({ layout: studioSurfaceLayout(400, 260, 16 / 9, { openWidth: 120 }), status: { mode: "frame", shot: "16:9", size: "1920 × 1080", ratio: 16 / 9, cap: "Capped at 2 MP", note: "a note" } });
  await nextTick();
  assert.ok(surface.hasIcon(surface.byClass("pano-studio-node-shot")[0], "aspect"));
  assert.equal(surface.byClass("pano-studio-node-size")[0].props.title, "Capped at 2 MP");
  assert.doesNotMatch(textOf(surface.root), /a note/);
  // A layout without `playable` seats no play button.
  assert.ok(surface.button("toggle-playback") === null, "no play button");

  // View-only: Open Studio and the play button are its only controls, shown without hover; it takes no keys.
  const handlers = surface.all((node) => Object.keys(node.props).some((key) => /^on[A-Z]/.test(key)));
  const handled = new Set(handlers.flatMap((node) => Object.keys(node.props).filter((key) => /^on[A-Z]/.test(key))));
  assert.deepEqual([...handled].sort(), ["onClick", "onPointerdown"]);
  assert.deepEqual(handlers.map((node) => node.props["data-action"]), ["open-editor"]);
  assert.equal(surface.all((node) => node.tag === "input").length, 0);
});

test("a narrow Studio surface shows Open Studio as a round icon with its name as the tooltip, centered before it is measured", async () => {
  const narrow = studioSurfaceLayout(100, 120, 2, { playable: false, openWidth: 120 });
  assert.equal(narrow.buttons.compact, true);
  const surface = mountSurface(surfaceModel({ layout: narrow }));
  const open = surface.button("open-editor");
  assert.equal(textOf(open), "");
  assert.equal(open.props.title, "Open Studio");
  assert.equal(open.props["aria-label"], "Open Studio");
  assert.ok(classesOf(open).includes("is-compact"));
  // Not measured yet: centered on the picture by its middle.
  const unmeasured = studioSurfaceLayout(400, 260, 2);
  surface.props.model = surfaceModel({ layout: unmeasured });
  await nextTick();
  assert.deepEqual(surface.button("open-editor").props.style, {
    left: `${Math.round(unmeasured.buttons.open.center)}px`,
    bottom: `${Math.round(unmeasured.buttons.bottom)}px`,
    transform: "translateX(-50%)",
  });
  // Before any layout it is laid out unseen.
  surface.props.model = surfaceModel();
  await nextTick();
  assert.equal(surface.button("open-editor").props.style.visibility, "hidden");
});

test("the Studio surface says when the view is unavailable, over the picture", async () => {
  const layout = studioSurfaceLayout(400, 260, 2, { openWidth: 120 });
  const surface = mountSurface(surfaceModel({ layout }));
  assert.equal(surface.byClass("pano-view-unavailable").length, 0);
  surface.props.model = surfaceModel({ layout, viewUnavailable: true });
  await nextTick();
  const [unavailable] = surface.byClass("pano-studio-node-unavailable");
  assert.equal(surface.byClass("pano-view-unavailable").length, 1);
  assert.equal(unavailable.props.style.width, `${Math.round(layout.picture.w)}px`);
});
