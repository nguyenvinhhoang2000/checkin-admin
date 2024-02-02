import React from "react";
import cookie from "react-cookies";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import AuthRoute from "@/components/auth-layout";
import AppLayout from "@/components/layouts/layout";
import PrivateRoute from "@/components/private-route-layout";

import { LOCATIONS } from "@/constants/locations";
import {
  Absent,
  AccountManagement,
  CreateAccount,
  Dashboard,
  EditAccount,
  Information,
  Login,
  MemberDetail,
  MemberOverview,
  TableCheckin,
} from "@/routes";

import { COOKIES_KEYS } from "./constants/cookies-keys";
import { setAppAccessToken } from "./services/axios-config";
import useAdminProfileStore from "./store/use-admin-profile-store";
import useAppMounted from "./store/use-app-mounted";

import "./App.css";

function App() {
  const onSetAppMounted = useAppMounted().onSetAppMounted;

  const onGetAdminInfo = useAdminProfileStore().onGetAdminInfo;

  const router = createBrowserRouter([
    {
      path: LOCATIONS.LOGIN.path,
      element: (
        <AuthRoute>
          <Login />
        </AuthRoute>
      ),
    },
    {
      path: LOCATIONS.HOME.path,
      element: (
        <PrivateRoute>
          <AppLayout />
        </PrivateRoute>
      ),
      children: [
        // DASHBOARD PAGE
        {
          path: LOCATIONS.DASHBOARD.path,
          element: <Dashboard />,
        },

        // CHECK-IN MANAGEMENTT PAGE
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

        // ACCOUNT MANAGEMENT
        {
          path: LOCATIONS.ACCOUNT_MANAGEMENT.path,
          element: <AccountManagement />,
        },
        {
          path: LOCATIONS.CREATE_ACCOUNT.path,
          element: <CreateAccount />,
        },
        {
          path: LOCATIONS.EDIT_ACCOUNT.path,
          element: <EditAccount />,
        },

        // BUSINESS SETTING
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
  const onInitialize = React.useCallback(async () => {
    const token = cookie.load(COOKIES_KEYS.TOKEN);
    if (token) {
      /** Get user info
       * @api {get} /client/user Get user info
       * @action set user to zustand
       * */
      setAppAccessToken(token);
      await onGetAdminInfo(token);
    }
    setTimeout(
      () => {
        onSetAppMounted();
      },
      token ? 500 : 0,
    );
  }, []); // eslint-disable-line

  React.useEffect(() => {
    onInitialize();
  }, []); // eslint-disable-line

  return <RouterProvider router={router} />;
}

export default React.memo(App);
