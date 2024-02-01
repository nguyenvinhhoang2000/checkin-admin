import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Layout } from "antd";
import classNames from "classnames";
import { useBoolean } from "usehooks-ts";

import { LOCATIONS } from "@/constants/locations";
import {
  activeLink,
  formatSlashPathName,
  upperCasePathName,
} from "@/utils/format-breadcrumbs";

import Footer from "../footer";
import Header from "../header";

import ModalSideBar from "./sidebar/draw-sidebar";
import SideBarHeader from "./sidebar/header-sidebar";
import BreadcrumbPages from "./breadcrumbs";
import MenuSideBar from "./menu";

function AppLayout() {
  const location = useLocation();

  const breadCrumbs = React.useMemo(() => {
    const crumbPath = formatSlashPathName(location.pathname);

    const breads = crumbPath.map((item) => {
      const { crumb, routeActive, path } = upperCasePathName(LOCATIONS, item);

      return {
        title: (
          <Link
            to={routeActive ? path : "#"}
            className={classNames(activeLink(path, location.pathname))}
          >
            {crumb || item}
          </Link>
        ),
      };
    });

    return breads;
  }, [location.pathname]);

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
        <Layout.Content className="mb-auto h-full overflow-auto px-6">
          <BreadcrumbPages items={breadCrumbs} />
          <Outlet />
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
export default React.memo(AppLayout);
