import React from "react";
import { Breadcrumb } from "antd";
import PropTypes from "prop-types";

function BreadcrumbPages({ items }) {
  return <Breadcrumb className="py-4" items={items} />;
}

export default React.memo(BreadcrumbPages);

BreadcrumbPages.propTypes = {
  items: PropTypes.instanceOf(Object).isRequired,
};
