import React from "react";
import { Button, Drawer } from "antd";
import PropTypes from "prop-types";

import AppIcon from "@/components/apps/app-icon";

import MenuSideBar from "./menu";

function DrawSideBar({ isOpenDrawSidebar, onCloseDrawSideBar }) {
  return (
    <Drawer
      classNames={{
        body: "!px-6 !py-0",
      }}
      closable={false}
      className="!bg-sideBar"
      onClose={onCloseDrawSideBar}
      open={isOpenDrawSidebar}
      width={270}
      placement="left"
    >
      <div className="flex flex-row justify-between p-6">
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
        <Button
          type="text"
          className="block p-0 sm:hidden"
          onClick={onCloseDrawSideBar}
        >
          <AppIcon
            className="text-volcano-3"
            width={16}
            height={16}
            src="/icons/menu-button-icon.svg#id"
            alt="menu-button-icon"
          />
        </Button>
      </div>
      <MenuSideBar />
    </Drawer>
  );
}

export default DrawSideBar;

DrawSideBar.propTypes = {
  isOpenDrawSidebar: PropTypes.bool.isRequired,
  onCloseDrawSideBar: PropTypes.func.isRequired,
};
