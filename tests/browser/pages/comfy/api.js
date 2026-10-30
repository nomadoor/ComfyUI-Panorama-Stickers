// A stand-in for ComfyUI's scripts/api.js (see app.js next to it): events go nowhere and the routes answer nothing.
export const api = {
  addEventListener() {},
  removeEventListener() {},
  apiURL: (route) => route,
  fetchApi: () => Promise.resolve(new Response("{}", { status: 404 })),
};
