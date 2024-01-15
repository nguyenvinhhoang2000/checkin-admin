import React from "react";
import { Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Option 1", "1", null),
  getItem("Option 2", "2", null),
  getItem("Option 3", "3", null),

  getItem("Navigation One", "sub1", null, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),

  getItem("Navigation Two", "sub2", null, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),

    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];
function MenuSideBar() {
  return (
    <Menu
      className="bg-sideBar px-3 text-white"
      mode="inline"
      theme="light"
      defaultSelectedKeys={["1"]}
      items={items}
    />
  );
}

export default MenuSideBar;
