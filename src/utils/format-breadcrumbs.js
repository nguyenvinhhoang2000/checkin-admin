export function formatSlashPathName(pathname) {
  return pathname.split("/").filter((path) => path !== "");
}

export function upperCasePathName(item) {
  return item.replace(/-/g, "_").toUpperCase();
}
