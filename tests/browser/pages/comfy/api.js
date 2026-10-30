// A stand-in for ComfyUI's `scripts/api.js` (see app.js next to it).
export const api = {
  apiURL: (path) => path,
  fetchApi: () => Promise.reject(new Error("no ComfyUI server in the browser checks")),
  addEventListener() {},
  removeEventListener() {},
};
