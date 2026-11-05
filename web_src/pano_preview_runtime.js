// The on-node surface of Stickers, Cutout and Panorama Studio (docs/studio-node-surface.md, docs/legacy-node-surfaces.md),
// as the rest of the suite imports it. Its parts live in node_surface/; this module hands them ComfyUI's app and api
// (node_surface/media.js installSurfaceComfy), which only web_src/*.js may import.
import * as appModule from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { installSurfaceComfy } from "./node_surface/media.js";

installSurfaceComfy({ appModule, api });

export { restoreNodeOutput } from "./node_surface/media.js";
export { attachCutoutPreview, attachPanoramaPreview } from "./node_surface/lifecycle.js";
