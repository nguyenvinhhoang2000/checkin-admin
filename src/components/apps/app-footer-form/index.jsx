import React from "react";
import { Button } from "antd";
import classnames from "classnames";
import PropTypes from "prop-types";

import { BUTTON_TYPES } from "@/constants/button-types";
import { emptyFn } from "@/utils/empty-types";

function AppFooterForm({
  classNames,
  okText,
  cancelText,
  onDelete,
  onOk,
  onCancel,
  deleteText,
  isLoadingButtonOk,
  buttonOkType,
  buttonOkClassNames,
  isDisabledButtonOk,
}) {
  return (
    <div className={classnames(classNames, "flex flex-row justify-end gap-2")}>
      {deleteText && (
        <Button
          disabled={isLoadingButtonOk}
          danger
          type="text"
          onClick={onDelete}
        >
          {deleteText}
        </Button>
      )}
      <div className="flex flex-row items-center gap-2">
        {cancelText && (
          <Button disabled={isLoadingButtonOk} onClick={onCancel}>
            {cancelText}
          </Button>
        )}
        <Button
          disabled={isLoadingButtonOk || isDisabledButtonOk}
          className={buttonOkClassNames}
          loading={isLoadingButtonOk}
          onClick={onOk}
          type="primary"
          htmlType={buttonOkType}
        >
          {okText}
        </Button>
      </div>
    </div>
  );
}

export default React.memo(AppFooterForm);

AppFooterForm.propTypes = {
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  deleteText: PropTypes.string,
  classNames: PropTypes.string,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  isLoadingButtonOk: PropTypes.bool.isRequired,
  buttonOkType: PropTypes.oneOf(BUTTON_TYPES),
  buttonOkClassNames: PropTypes.string,
  isDisabledButtonOk: PropTypes.bool,
};

AppFooterForm.defaultProps = {
  okText: "Save",
  cancelText: "",
  deleteText: "",
  classNames: "",
  buttonOkType: BUTTON_TYPES[0],
  buttonOkClassNames: "",
  onDelete: emptyFn,
  isDisabledButtonOk: false,
};
