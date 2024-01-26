import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Breadcrumb, Button } from "antd";

import { LOCATIONS } from "@/constants/locations";

function BreadcrumbPages() {
  const location = useLocation();
  const navigate = useNavigate();

  const crumbPath = location.pathname.split("/").filter((path) => path !== "");

  const breadCrumbs = crumbPath.map((item) => {
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

  return <Breadcrumb className="py-4" items={breadCrumbs} />;
}

export default React.memo(BreadcrumbPages);
