import React from "react";
import { Button } from "antd";
import classNames from "classnames";
import PropTypes from "prop-types";

import AppIcon from "@/components/apps/app-icon";

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
          <AppIcon
            width={46.574}
            height={22.427}
            className="text-primary-1"
            src="/icons/w-wiicamp-logo.svg#id"
            alt="wiicamp-logo"
          />
          <AppIcon
            className="text-white"
            width={66.574}
            height={14.882}
            src="/icons/wiicamp-name-logo.svg#id"
            alt="wiicamp-name-logo"
          />
        </div>
      )}
      <Button type="text" className="p-0" onClick={onToggleCollapsed}>
        <AppIcon
          className="text-volcano-3"
          width={16}
          height={16}
          src="/icons/menu-button-icon.svg#id"
          alt="menu-button-icon"
        />
      </Button>
    </div>
  );
}

export default React.memo(SideBarHeader);

SideBarHeader.propTypes = {
  onToggleCollapsed: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};
