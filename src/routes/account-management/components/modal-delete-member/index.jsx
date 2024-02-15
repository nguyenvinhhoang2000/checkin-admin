import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

import { LOCATIONS } from "@/constants/locations";
import useAccountManagementStore from "@/store/use-account-management-store";

function ModalDeleteMember() {
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
      title="Do you want to delete this account?"
      closable={false}
      onCancel={onHideModalDeleted}
      onOk={onClickOkButton}
      open={isShowModalDeleted}
      okText="Confirm"
    >
      This account will be disabled and cannot log in
    </Modal>
  );
}

export default React.memo(ModalDeleteMember);
