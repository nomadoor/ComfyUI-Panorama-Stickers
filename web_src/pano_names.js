// The extension's name as people see it in ComfyUI (CONTEXT.md "ComfyUI の中の名前"): the settings' headings, the
// Extensions menu, and the diagnostics command and file. The ids of settings and commands keep "PanoramaSuite" so
// chosen values stay; comfyui_pano_suite/names.py holds the node category. Console messages write their mark
// "[PanoramaStickers]" themselves: the three.js chunk loaded on demand must not import the eager bundle
// (tools/check_panorama_bundle.mjs), and tests/pano_names.test.mjs checks the spelling everywhere.
export const DISPLAY_NAME = "Panorama Stickers";
