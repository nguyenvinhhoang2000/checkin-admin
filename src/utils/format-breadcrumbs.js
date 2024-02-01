export function formatSlashPathName(pathname) {
  return pathname.split("/").filter((path) => path !== "");
}

export function upperCasePathName(location, item) {
  return location[item.replace(/-/g, "_").toUpperCase()];
}

export function activeLink(crumbPath, currenPath) {
  const check = crumbPath === currenPath;
  return check ? "!text-black" : "!text-black/45";
}
