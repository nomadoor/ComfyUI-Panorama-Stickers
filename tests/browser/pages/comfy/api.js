// A stand-in for ComfyUI's scripts/api.js (see app.js next to it): events go nowhere and the routes answer nothing
// but the /view route of an image a page serves (view_files.js).
import { viewApiURL } from "../view_files.js";

export const api = {
  addEventListener() {},
  removeEventListener() {},
  apiURL: viewApiURL,
  fetchApi: () => Promise.resolve(new Response("{}", { status: 404 })),
};
