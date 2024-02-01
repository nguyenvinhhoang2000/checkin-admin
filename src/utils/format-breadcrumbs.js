export function formatSlashPathName(pathname) {
  return pathname.split("/").filter((path) => path !== "");
}

export function upperCasePathName(location, item) {
  return location[item.replace(/-/g, "_").toUpperCase()];
}

export function activeLink(crumbPath, currenPath) {
  return crumbPath === currenPath ? "!text-black" : "!text-black/45";
}
