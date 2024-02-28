import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";

function ButtonTimeRangeAbsent({ item, onFilterBy, period }) {
  const onClickBtn = () => {
    onFilterBy(item.key);
  };

  return (
    <Button
      key={item.key}
      onClick={onClickBtn}
      type="link"
      className={`h-fit border-0 p-0 text-character-title ${period === item.key && "text-primary-1"}`}
    >
      <span>{item.label}</span>
    </Button>
  );
}

ButtonTimeRangeAbsent.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  onFilterBy: PropTypes.func.isRequired,
  period: PropTypes.string.isRequired,
};

export default ButtonTimeRangeAbsent;
