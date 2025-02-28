import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";

import AppIcon from "@/components/apps/app-icon";

import UserDropdown from "./user-dropdown";

function Header({ onOpenDrawSideBar }) {
  return (
    <header className="flex flex-row items-center justify-between bg-white p-[1.125rem] sm:flex sm:flex-row sm:items-center sm:justify-end">
      <Button
        type="link"
        className="block p-0 sm:hidden"
        onClick={onOpenDrawSideBar}
      >
        <AppIcon
          src="/icons/menu-button-icon.svg#id"
          width={16}
          height={16}
          className="text-volcano-3"
          alt="wiicamp-logo"
        />
      </Button>
      <UserDropdown />
    </header>
  );
}

export default React.memo(Header);

Header.propTypes = {
  onOpenDrawSideBar: PropTypes.func.isRequired,
};
