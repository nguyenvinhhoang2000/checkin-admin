import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Layout } from "antd";
import { useBoolean } from "usehooks-ts";

import { formatSlashPathName } from "@/utils/format-breadcrumbs";

import Footer from "../footer";
import Header from "../header";

import ModalSideBar from "./sidebar/draw-sidebar";
import SideBarHeader from "./sidebar/header-sidebar";
import BreadcrumbPages from "./breadcrumbs";
import MenuSideBar from "./menu";

function AppLayout() {
  const location = useLocation();

  const breadCrumbs = React.useMemo(() => {
    return formatSlashPathName(location.pathname);
  }, [location.pathname]);

  const { value: isCollapsed, toggle: onToggleCollapsed } = useBoolean();

  const {
    value: isOpenDrawSidebar,
    setTrue: onOpenDrawSideBar,
    setFalse: onCloseDrawSideBar,
  } = useBoolean();

  const onBreakpoint = React.useCallback(() => {
    // todo: fix bug when collapsed on desktop then resize to mobile and open draw
  }, []);

  return (
    <Layout className="min-h-screen">
      <Layout.Sider
        className="hidden bg-sideBar sm:fixed sm:block sm:h-screen sm:overflow-auto"
        width={220}
        onBreakpoint={onBreakpoint}
        collapsed={isCollapsed}
        breakpoint="sm"
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
        <Layout.Content className="mb-auto h-full overflow-auto px-6">
          <BreadcrumbPages listItems={breadCrumbs} location={location} />
          <Outlet />
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
export default React.memo(AppLayout);
