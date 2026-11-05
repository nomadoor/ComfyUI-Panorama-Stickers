// Images a test page serves as ComfyUI's /view route would: `servedImage` names one by a `file` Source (state v2
// keeps no embedded images, ADR 0063), and `viewApiURL`, the page's api.apiURL, turns the /view route of that file
// into the image's URL made in the page (a data or blob URL).
const SUBFOLDER = "panorama_stickers";
const served = new Map();

export function servedImage(filename, url) {
  served.set(`${SUBFOLDER}/${filename}`, url);
  return { kind: "file", filename, subfolder: SUBFOLDER, storage: "input" };
}

export function viewApiURL(route) {
  if (!route.startsWith("/view?")) return route;
  const params = new URLSearchParams(route.slice(route.indexOf("?") + 1));
  return served.get(`${params.get("subfolder") || ""}/${params.get("filename")}`) ?? route;
}
