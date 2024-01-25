import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "@/components/layouts/layout";

import { LOCATIONS } from "@/constants/locations";
import {
  Absent,
  AccountManagement,
  Dashboard,
  Information,
  Login,
  MemberDetail,
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
          path: LOCATIONS.MEMBERS.path,
          element: <MemberOverview />,
        },
        {
          path: LOCATIONS.MEMBER_DETAIL.path,
          element: <MemberDetail />,
        },
        {
          path: LOCATIONS.TABLE_CHECK_IN.path,
          element: <TableCheckin />,
        },
        {
          path: LOCATIONS.ABSENT.path,
          element: <Absent />,
        },
        {
          path: LOCATIONS.ACCOUNT_MANAGEMENT.path,
          element: <AccountManagement />,
        },
        {
          path: LOCATIONS.INFORMATION.path,
          element: <Information />,
        },
      ],
    },
    {
      path: LOCATIONS.INVALID,
      element: <Navigate to={LOCATIONS.DASHBOARD.path} />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default React.memo(App);
