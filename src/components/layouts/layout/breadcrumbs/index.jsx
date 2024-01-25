import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";

import { LOCATIONS } from "@/constants/locations";

function BreadcrumbPages() {
  const location = useLocation();

  const crumbPath = location.pathname.split("/").filter((path) => path !== "");

  const breadCrumbs = crumbPath.map((item) => {
    const result = LOCATIONS[item.replace(/-/g, "_").toUpperCase()];
    return {
      title: <Link to={result?.path}>{result?.label}</Link>,
      path: result?.path,
    };
  });

  return <Breadcrumb className="py-4" items={breadCrumbs} />;
}

export default React.memo(BreadcrumbPages);
