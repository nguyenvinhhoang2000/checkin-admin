import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import PropTypes from "prop-types";

import { LOCATIONS } from "@/constants/locations";
import { activeLink, upperCasePathName } from "@/utils/format-breadcrumbs";

function BreadcrumbPages({ listItems, location }) {
  const items = React.useMemo(() => {
    const breads = listItems.map((item) => {
      const { crumb, routeActive, path } = upperCasePathName(LOCATIONS, item);

      return {
        title: (
          <Link
            to={routeActive ? path : "#"}
            className={activeLink(path, location.pathname)}
          >
            {crumb || item}
          </Link>
        ),
      };
    });

    return breads;
  }, [listItems, location.pathname]);

  return <Breadcrumb className="py-4" items={items} />;
}

export default React.memo(BreadcrumbPages);

BreadcrumbPages.propTypes = {
  listItems: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};
