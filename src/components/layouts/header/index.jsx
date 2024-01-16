import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";

import AppIcon from "@/components/apps/AppIcon";

function Header({ onOpenDrawSideBar }) {
  return (
    <div className="flex flex-row items-center justify-between p-6 sm:flex sm:flex-row sm:items-center sm:justify-end">
      {" "}
      <Button
        type="text"
        className="block p-0 sm:hidden"
        onClick={onOpenDrawSideBar}
      >
        <AppIcon
          src="/icons/menu-button-icon.svg#id"
          width={16}
          height={16}
          alt="wiicamp-logo"
        />
      </Button>
      <div>Vinh Thai</div>
    </div>
  );
}

export default Header;

Header.propTypes = {
  onOpenDrawSideBar: PropTypes.func.isRequired,
};
