import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb } from "antd";
import PropTypes from "prop-types";

import { LOCATIONS } from "@/constants/locations";

function BreadcrumbPages({ location }) {
  const navigate = useNavigate();

  const breadCrumbs = React.useMemo(() => {
    const crumbPath = location.pathname
      .split("/")
      .filter((path) => path !== "");

    const breads = crumbPath.map((item) => {
      const result = LOCATIONS[item.replace(/-/g, "_").toUpperCase()];
      return {
        title: (
          <span className="cursor-pointer hover:bg-primary-3">
            {result.crumb || item}
          </span>
        ),
        onClick: () => navigate(result.routeActive ? result.path : "#"),
      };
    });

    return breads;
  }, [location.pathname, navigate]);

  return <Breadcrumb className="py-4" items={breadCrumbs} />;
}

export default React.memo(BreadcrumbPages);

BreadcrumbPages.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};
