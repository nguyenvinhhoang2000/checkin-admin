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
        <Link to={LOCATIONS.CHECK_IN_MANAGEMENT_MEMBER_OVERVIEW.path}>
          {LOCATIONS.CHECK_IN_MANAGEMENT_MEMBER_OVERVIEW.label}
        </Link>,
        LOCATIONS.CHECK_IN_MANAGEMENT_MEMBER_OVERVIEW.path,
      ),
      onGetMenuItem(
        <Link to={LOCATIONS.CHECK_IN_MANAGEMENT_TABLE_CHECK_IN.path}>
          {LOCATIONS.CHECK_IN_MANAGEMENT_TABLE_CHECK_IN.label}
        </Link>,
        LOCATIONS.CHECK_IN_MANAGEMENT_TABLE_CHECK_IN.path,
      ),
      onGetMenuItem(
        <Link to={LOCATIONS.CHECK_IN_MANAGEMENT_ABSENT.path}>
          {LOCATIONS.CHECK_IN_MANAGEMENT_ABSENT.label}
        </Link>,
        LOCATIONS.CHECK_IN_MANAGEMENT_ABSENT.path,
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
        <Link to={LOCATIONS.BUSINESS_SETTING_INFORMATION.path}>
          {LOCATIONS.BUSINESS_SETTING_INFORMATION.label}
        </Link>,
        LOCATIONS.BUSINESS_SETTING_INFORMATION.path,
      ),
    ],
  ),
];
function MenuSideBar() {
  return (
    <Menu
      className="bg-sideBar text-white"
      mode="inline"
      theme="light"
      items={items}
    />
  );
}

export default MenuSideBar;
