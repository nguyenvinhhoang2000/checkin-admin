import React from "react";
import { Modal } from "antd";

import useAccountManagementStore from "@/store/use-account-management-store";

function ModalDeleteMember() {
  const isShowModalDeleted = useAccountManagementStore().isShowModalDeleted;
  const onHideModalDeleted = useAccountManagementStore().onHideModalDeleted;

  return (
    <Modal
      title="Do you want to delete this account?"
      closable={false}
      onCancel={onHideModalDeleted}
      open={isShowModalDeleted}
    >
      This account will be disabled and cannot log in
    </Modal>
  );
}

export default React.memo(ModalDeleteMember);
