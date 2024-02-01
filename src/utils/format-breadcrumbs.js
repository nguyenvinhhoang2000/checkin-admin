import classNames from "classnames";

export function formatSlashPathName(pathname) {
  return pathname.split("/").filter((path) => path !== "");
}

export function upperCasePathName(location, item) {
  return location[item.replace(/-/g, "_").toUpperCase()];
}

export function activeLink(crumbPath, currenPath) {
  return classNames(
    crumbPath === currenPath ? "!text-black" : "!text-black/45",
    "cursor-pointer font-roboto hover:rounded-md hover:bg-primary-3",
  );
}
