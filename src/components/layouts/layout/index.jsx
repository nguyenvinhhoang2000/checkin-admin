import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useBoolean } from "usehooks-ts";

import Footer from "../footer";
import Header from "../header";

import ModalSideBar from "./sidebar/draw-sidebar";
import SideBarHeader from "./sidebar/header-sidebar";
import MenuSideBar from "./menu";

function AppLayout() {
  const { value: isCollapsed, toggle: onToggleCollapsed } = useBoolean();

  const {
    value: isOpenDrawSidebar,
    setTrue: onOpenDrawSideBar,
    setFalse: onCloseDrawSideBar,
  } = useBoolean();

  return (
    <Layout className="min-h-screen">
      <Layout.Sider
        className="hidden bg-sideBar sm:block"
        width={220}
        collapsed={isCollapsed}
      >
        <div className="hidden bg-sideBar sm:block sm:h-full">
          <SideBarHeader
            isCollapsed={isCollapsed}
            onToggleCollapsed={onToggleCollapsed}
          />
          <MenuSideBar inlineCollapsed={isCollapsed} />
        </div>
        <ModalSideBar
          isOpenDrawSidebar={isOpenDrawSidebar}
          onCloseDrawSideBar={onCloseDrawSideBar}
        />
      </Layout.Sider>
      <Layout>
        <Header onOpenDrawSideBar={onOpenDrawSideBar} />
        <Layout.Content className="px-6">
          <Outlet />
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
export default React.memo(AppLayout);
