import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Footer from "../footer";
import Header from "../header";

function AppLayout() {
  return (
    <Layout className="min-h-screen">
      <Layout.Sider
        trigger={null}
        className="hidden bg-sideBar text-white sm:block"
        width={220}
      >
        Side Bar
      </Layout.Sider>
      <Layout>
        <Header />

        <Layout.Content className="px-6">
          <Outlet />
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
export default React.memo(AppLayout);
