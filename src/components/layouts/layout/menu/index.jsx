import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import AppIcon from "@/components/apps/app-icon";

import { LOCATIONS } from "@/constants/locations";
import onGetMenuItem from "@/utils/get-menu-item";

const items = [
  onGetMenuItem(
    LOCATIONS.CHECK_IN_MANAGEMENT.label,
    LOCATIONS.CHECK_IN_MANAGEMENT.path,
    <AppIcon
      src="/icons/import-icon.svg#id"
      className="text-secondary-4"
      width={16}
      height={16}
    />,
    [
      onGetMenuItem(
        <Link to={LOCATIONS.MEMBERS.path}>{LOCATIONS.MEMBERS.label}</Link>,
        LOCATIONS.MEMBERS.path,
      ),
      onGetMenuItem(
        <Link to={LOCATIONS.TABLE_CHECK_IN.path}>
          {LOCATIONS.TABLE_CHECK_IN.label}
        </Link>,
        LOCATIONS.TABLE_CHECK_IN.path,
      ),
      onGetMenuItem(
        <Link to={LOCATIONS.ABSENT.path}>{LOCATIONS.ABSENT.label}</Link>,
        LOCATIONS.ABSENT.path,
      ),
    ],
  ),

  onGetMenuItem(
    <Link to={LOCATIONS.ACCOUNT_MANAGEMENT.path}>
      {LOCATIONS.ACCOUNT_MANAGEMENT.label}
    </Link>,
    LOCATIONS.ACCOUNT_MANAGEMENT.path,
    <AppIcon
      src="/icons/id-card-icon.svg#id"
      className="text-secondary-4"
      width={16}
      height={16}
    />,
  ),

  onGetMenuItem(
    LOCATIONS.BUSINESS_SETTING.label,
    LOCATIONS.BUSINESS_SETTING.path,
    <AppIcon
      src="/icons/setting-icon.svg#id"
      className="text-secondary-4"
      width={16}
      height={16}
    />,
    [
      onGetMenuItem(
        <Link to={LOCATIONS.INFORMATION.path}>
          {LOCATIONS.INFORMATION.label}
        </Link>,
        LOCATIONS.INFORMATION.path,
      ),
    ],
  ),
];
function MenuSideBar() {
  return (
    <Menu
      className="bg-sideBar text-[0.875rem] text-white"
      mode="inline"
      theme="light"
      items={items}
      inlineIndent={9}
    />
  );
}

export default React.memo(MenuSideBar);
