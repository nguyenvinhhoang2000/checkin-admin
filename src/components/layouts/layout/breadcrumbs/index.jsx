import React from "react";
import { Link, useMatches } from "react-router-dom";
import { Breadcrumb } from "antd";

function BreadcrumbPages() {
  const matches = useMatches();
  console.log(`🚀🚀🚀!..location:`, matches);
  return (
    <Breadcrumb
      className="py-4"
      items={[
        {
          title: "Home",
        },
        {
          title: <Link to="/">Application Center</Link>,
        },
        {
          title: <Link to="/">Application List</Link>,
        },
        {
          title: "An Application",
        },
      ]}
    />
  );
}

export default React.memo(BreadcrumbPages);
