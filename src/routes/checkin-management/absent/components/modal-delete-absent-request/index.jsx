import React from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";

import useAccountManagementStore from "@/store/use-account-management-store";

function ModalDeleteAbsentRequest({ title, description, _id }) {
  const isShowModalDeleted = useAccountManagementStore().isShowModalDeleted;
  const onHideModalDeleted = useAccountManagementStore().onHideModalDeleted;
  const onDeleteAbsentRequest =
    useAccountManagementStore().onDeleteAbsentRequest;

  const onClickOkButton = () => {
    onDeleteAbsentRequest(_id);
  };

  return (
    <Modal
      title={title}
      closable={false}
      onCancel={onHideModalDeleted}
      onOk={onClickOkButton}
      open={isShowModalDeleted}
      okText="Confirm"
    >
      {description}
    </Modal>
  );
}

ModalDeleteAbsentRequest.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default React.memo(ModalDeleteAbsentRequest);
