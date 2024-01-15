import React from "react";
import { Button, Drawer } from "antd";
import PropTypes from "prop-types";

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
          <img src="/icons/wiicamp-name.svg" alt="wiicamp-logo" />
          <img src="/icons/w-wiicamp-logo.svg" alt="wiicamp-logo" />
        </div>
        <Button
          type="text"
          className="block p-0 sm:hidden"
          onClick={onCloseDrawSideBar}
        >
          <img src="/icons/menu-button-logo.svg" alt="wiicamp-logo" />
        </Button>
      </div>
      <MenuSideBar inlineCollapsed={false} defineKey="menu-sidebar-draw" />
    </Drawer>
  );
}

export default DrawSideBar;

DrawSideBar.propTypes = {
  isOpenDrawSidebar: PropTypes.bool.isRequired,
  onCloseDrawSideBar: PropTypes.func.isRequired,
};
