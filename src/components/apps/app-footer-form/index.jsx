import React from "react";
import { Button } from "antd";
import classnames from "classnames";
import PropTypes from "prop-types";

import { emptyFn } from "@/utils/empty-types";

function AppFooterForm({
  classNames,
  okText,
  cancelText,
  onDelete,
  onActive,
  onCancel,
  deleteText,
  activeText,
  isLoadingButtonOk,
  isDisabledButtonOk,
  htmlType,
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
          <span className="underline underline-offset-2">{deleteText}</span>
        </Button>
      )}
      {activeText && (
        <Button disabled={isLoadingButtonOk} type="text" onClick={onActive}>
          <span className="text-secondary-2 underline  underline-offset-2">
            {activeText}
          </span>
        </Button>
      )}
      <div className="flex flex-row items-center gap-2">
        {cancelText && (
          <Button
            disabled={isLoadingButtonOk}
            onClick={onCancel}
            className="flex items-center justify-center px-[1.875rem] py-[0.4rem] leading-[1.375rem]"
          >
            {cancelText}
          </Button>
        )}
        <Button
          disabled={isLoadingButtonOk || isDisabledButtonOk}
          className="flex items-center justify-center px-9 py-[0.4rem] leading-[1.375rem]"
          loading={isLoadingButtonOk}
          type="primary"
          htmlType={htmlType}
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
  activeText: PropTypes.string,
  classNames: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  onActive: PropTypes.func,
  isLoadingButtonOk: PropTypes.bool.isRequired,
  isDisabledButtonOk: PropTypes.bool,
  htmlType: PropTypes.string,
};

AppFooterForm.defaultProps = {
  okText: "Lưu",
  cancelText: "",
  deleteText: "",
  activeText: "",
  classNames: "",
  onDelete: emptyFn,
  onActive: emptyFn,
  isDisabledButtonOk: false,
  htmlType: "submit",
};
