import React from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

import AppLoadingPage from "@/components/apps/app-page-loading";

import { LOCATIONS } from "@/constants/locations";
import useAdminProfileStore from "@/store/use-admin-profile-store";
import useAppMounted from "@/store/use-app-mounted";

function AuthRoute({ children }) {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");

  const admin = useAdminProfileStore().admin;
  const isAppMounted = useAppMounted().isAppMounted;

  if (admin) {
    return <Navigate to={redirect || LOCATIONS.HOME.path} />;
  }

  if (!admin && !isAppMounted) {
    return <AppLoadingPage />;
  }

  return children;
}

export default React.memo(AuthRoute);

AuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
