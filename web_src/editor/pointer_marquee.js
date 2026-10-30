// The marquee selection ("marquee_select", Ctrl or Meta and a drag with the cursor tool): it follows the
// pointer, and letting go selects the items the rectangle touches. pointer_input.js starts it.
import { DRAW_REASON } from "../pano_frame_scheduler.js";

export function createPointerMarquee(deps) {
  const { editor, shotEditor, type } = deps;
  // Bound by connect() to the other modules and showEditor.
  let getCutoutSelectableItemsForHit, getList, getSelectableRasterObjectItems, getSelectableStrokeGroupItems,
    isShotItem, objectGeom, rectFromPoints, rectIntersectsGeom, requestDraw, setSelectedItems, updateSelectionMenu,
    updateSidePanel;

  function moveMarquee(it, p) {
    it.current = p;
    requestDraw({ localOnly: true, reason: DRAW_REASON.OVERLAY });
  }

  function endMarquee() {
    const rect = rectFromPoints(editor.interaction.start, editor.interaction.current);
    const pool = [
      ...(type === "cutout"
        ? getCutoutSelectableItemsForHit().filter((item) => !isShotItem(item))
        : [...getList()]),
      ...getSelectableStrokeGroupItems(),
      ...getSelectableRasterObjectItems(),
    ];
    const hits = pool.filter((item) => rectIntersectsGeom(rect, objectGeom(item)));
    setSelectedItems(hits, hits[hits.length - 1]?.id || null);
    if (shotEditor && hits.length) editor.cutoutAspectOpen = false;
    updateSidePanel();
    updateSelectionMenu();
    requestDraw();
  }

  return {
    connect(api) {
      ({
        getCutoutSelectableItemsForHit, getList, getSelectableRasterObjectItems, getSelectableStrokeGroupItems,
        isShotItem, objectGeom, rectFromPoints, rectIntersectsGeom, requestDraw, setSelectedItems, updateSelectionMenu,
        updateSidePanel,
      } = api);
    },
    moveMarquee, endMarquee,
  };
}
