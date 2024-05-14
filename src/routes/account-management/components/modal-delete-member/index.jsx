import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import PropTypes from "prop-types";

import { LOCATIONS } from "@/constants/locations";
import useAccountManagementStore from "@/store/use-account-management-store";

function ModalDeleteMember({ title, description }) {
  const isShowModalDeleted = useAccountManagementStore().isShowModalDeleted;
  const onHideModalDeleted = useAccountManagementStore().onHideModalDeleted;
  const onDeleteMemberAccount =
    useAccountManagementStore().onDeleteMemberAccount;

  const navigate = useNavigate();

  const onClickOkButton = () => {
    onDeleteMemberAccount();
    if (window.location.pathname !== LOCATIONS.ACCOUNT_MANAGEMENT.path) {
      navigate(LOCATIONS.ACCOUNT_MANAGEMENT.path);
    }
  };

  return (
    <Modal
      title={title}
      closable={false}
      onCancel={onHideModalDeleted}
      onOk={onClickOkButton}
      open={isShowModalDeleted}
      okText="Xác nhận"
      cancelText="Hủy bỏ"
    >
      {description}
    </Modal>
  );
}

ModalDeleteMember.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default React.memo(ModalDeleteMember);
