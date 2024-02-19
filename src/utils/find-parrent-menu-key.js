import { LOCATIONS } from "@/constants/locations";

export function findParentMenuKey(arr, targetKey, parentKey = null) {
  let result = null;

  arr.forEach((item) => {
    if (result !== null) {
      return; // Break the loop if the result is already found
    }

    if (item.key === targetKey) {
      result = parentKey;
    } else if (item.children && item.children.length > 0) {
      result = findParentMenuKey(item.children, targetKey, item.key);
    }
  });

  return result;
}

export function findSeletedKeys(pathname) {
  switch (pathname) {
    case LOCATIONS.EDIT_ACCOUNT.path:
    case LOCATIONS.CREATE_ACCOUNT.path:
      return LOCATIONS.ACCOUNT_MANAGEMENT.path;

    default:
      return pathname;
  }
}
