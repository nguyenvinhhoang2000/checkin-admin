import classNames from "classnames";

export function formatSlashPathName(pathname) {
  // Split the input pathname using "/" as the delimiter
  const pathSegments = pathname.split("/");

  // Filter out empty path segments and exclude specific patterns (e.g., account IDs)
  const filteredPathSegments = pathSegments.filter(
    (path) => path !== "" && !/^[a-f0-9]{24}$/.test(path),
  );

  // Return the formatted path
  return filteredPathSegments;
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
