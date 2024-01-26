import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import AppLoadingPage from "@/components/apps/app-page-loading";

import { LOCATIONS } from "@/constants/locations";
import useAdminProfileStore from "@/store/use-admin-profile-store";
import useAppMounted from "@/store/use-app-mounted";

function PrivateRoute({ children }) {
  const location = useLocation();

  const admin = useAdminProfileStore().admin;

  const isForceLogout = useAppMounted().isForceLogout;
  const isAppMounted = useAppMounted().isAppMounted;

  if (isAppMounted && !admin) {
    return (
      <Navigate
        to={`${LOCATIONS.LOGIN.path}${
          isForceLogout ? "" : `?redirect=${location.pathname}`
        }`}
      />
    );
  }

  if (!admin) {
    return <AppLoadingPage />;
  }

  return children;
}

export default React.memo(PrivateRoute);

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
