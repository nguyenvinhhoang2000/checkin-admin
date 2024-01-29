import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useBoolean } from "usehooks-ts";

import Footer from "../footer";
import Header from "../header";

import ModalSideBar from "./sidebar/draw-sidebar";
import SideBarHeader from "./sidebar/header-sidebar";
import BreadcrumbPages from "./breadcrumbs";
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
        className="hidden bg-sideBar sm:fixed sm:block sm:h-screen sm:overflow-auto"
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
      <Layout className="flex h-screen flex-col justify-between">
        <Header onOpenDrawSideBar={onOpenDrawSideBar} />
        <Layout.Content className="mb-auto overflow-y-auto px-6">
          <BreadcrumbPages />
          <Outlet />
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
export default React.memo(AppLayout);
