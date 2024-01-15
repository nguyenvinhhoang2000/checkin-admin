import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "@/components/layouts/layout";

import { LOCATIONS } from "@/constants/locations";
import { Dashboard, Login, MemberOverview } from "@/routes";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: LOCATIONS.LOGIN,
      element: <Login />,
    },
    {
      path: LOCATIONS.DASHBOARD,
      element: <AppLayout />,
      children: [
        {
          path: LOCATIONS.DASHBOARD,
          element: <Dashboard />,
        },
        {
          path: LOCATIONS.CHECK_IN_MANAGEMENT_MEMBER_OVERVIEW,
          element: <MemberOverview />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
