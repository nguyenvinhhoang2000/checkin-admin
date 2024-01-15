import React from "react";
import { Button } from "antd";
import classNames from "classnames";
import PropTypes from "prop-types";

function SideBarHeader({ onToggleCollapsed, isCollapsed }) {
  return (
    <div
      className={classNames(
        !isCollapsed ? "justify-between" : "justify-center",
        "flex flex-row bg-sideBar px-3 py-6",
      )}
    >
      {!isCollapsed && (
        <div className="flex flex-row items-center gap-2">
          <img src="/icons/w-wiicamp-logo.svg" alt="wiicamp-logo" />
          <img src="/icons/wiicamp-name.svg" alt="wiicamp-logo" />
        </div>
      )}
      <Button type="text" className="p-0" onClick={onToggleCollapsed}>
        <img src="/icons/menu-button-logo.svg" alt="wiicamp-logo" />
      </Button>
    </div>
  );
}

export default SideBarHeader;

SideBarHeader.propTypes = {
  onToggleCollapsed: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};
