import React from "react";
import PropTypes from "prop-types";

function AppIcon(props) {
  const { src, className, ...other } = props;

  return (
    <svg width={20} height={20} className={className} {...other}>
      <use href={src} width={20} height={20} {...other} />
    </svg>
  );
}

export default React.memo(AppIcon);

AppIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

AppIcon.defaultProps = {
  width: 20,
  height: 20,
  className: "",
};
