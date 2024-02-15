import React from "react";
import PropTypes from "prop-types";

/**
 * @component
 * @param {Object} props
 * @param {string} props.src
 * @param {number} props.width
 * @param {number} props.height
 * @param {string} props.className
 * @returns
 */

/**
 * @guide
 * 1. Firstly, export file icon as SVG file, put it in `public/icons`
 * 2. Secondly, add `id="id"` and change fill="#XXX" to fill="currentColor" in SVG file.
 * 3. Finally, add `src="/icons/file-icon.svg#id"` in AppIcon
 */

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
