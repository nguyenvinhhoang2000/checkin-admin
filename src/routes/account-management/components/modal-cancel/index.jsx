import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

import { LOCATIONS } from "@/constants/locations";
import useAccountManagementStore from "@/store/use-account-management-store";

function ModalCancel() {
  const isShowModalCancel = useAccountManagementStore().isShowModalCancel;
  const onHideModalCancel = useAccountManagementStore().onHideModalCancel;

  const navigate = useNavigate();

  const onClickOkButton = () => {
    navigate(LOCATIONS.ACCOUNT_MANAGEMENT.path);
    onHideModalCancel();
  };

  return (
    <Modal
      title="Do you want to cancel?"
      closable={false}
      onCancel={onHideModalCancel}
      onOk={onClickOkButton}
      open={isShowModalCancel}
      okText="Yes"
      cancelText="No"
    >
      The action has not been saved
    </Modal>
  );
}

export default React.memo(ModalCancel);
