import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "@/components/layouts/layout";

import { LOCATIONS } from "@/constants/locations";
import {
  Absent,
  AccountManagement,
  Dashboard,
  Information,
  Login,
  MemberOverview,
  TableCheckin,
} from "@/routes";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: LOCATIONS.LOGIN.path,
      element: <Login />,
    },
    {
      path: LOCATIONS.HOME.path,
      element: <AppLayout />,
      children: [
        {
          path: LOCATIONS.DASHBOARD.path,
          element: <Dashboard />,
        },
        {
          path: LOCATIONS.CHECK_IN_MANAGEMENT_MEMBER_OVERVIEW.path,
          element: <MemberOverview />,
        },
        {
          path: LOCATIONS.CHECK_IN_MANAGEMENT_TABLE_CHECK_IN.path,
          element: <TableCheckin />,
        },
        {
          path: LOCATIONS.CHECK_IN_MANAGEMENT_ABSENT.path,
          element: <Absent />,
        },
        {
          path: LOCATIONS.ACCOUNT_MANAGEMENT.path,
          element: <AccountManagement />,
        },
        {
          path: LOCATIONS.BUSINESS_SETTING_INFORMATION.path,
          element: <Information />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default React.memo(App);
