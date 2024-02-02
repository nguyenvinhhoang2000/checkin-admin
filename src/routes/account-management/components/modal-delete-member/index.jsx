import React from "react";
import { Modal } from "antd";

import useAccountManagementStore from "@/store/use-account-management-store";

function ModalDeleteMember() {
  const isShowModalDeleted = useAccountManagementStore().isShowModalDeleted;
  const onHideModalDeleted = useAccountManagementStore().onHideModalDeleted;

  return (
    <Modal
      title={null}
      closable={false}
      onCancel={onHideModalDeleted}
      open={isShowModalDeleted}
    >
      ModalDeleteMember
    </Modal>
  );
}

export default React.memo(ModalDeleteMember);
