import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import PropTypes from "prop-types";

import useAccountManagementStore from "@/store/use-account-management-store";

function ModalCancel({ title, description, navigatePath }) {
  const isShowModalCancel = useAccountManagementStore().isShowModalCancel;
  const onHideModalCancel = useAccountManagementStore().onHideModalCancel;

  const navigate = useNavigate();

  const onClickOkButton = () => {
    navigate(navigatePath);
    onHideModalCancel();
  };

  return (
    <Modal
      title={title}
      closable={false}
      onCancel={onHideModalCancel}
      onOk={onClickOkButton}
      open={isShowModalCancel}
      okText="Đồng ý"
      cancelText="Quay lại"
    >
      {description}
    </Modal>
  );
}

ModalCancel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  navigatePath: PropTypes.string.isRequired,
};

export default React.memo(ModalCancel);
