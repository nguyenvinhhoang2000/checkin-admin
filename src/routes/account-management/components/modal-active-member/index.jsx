import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import PropTypes from "prop-types";

import { LOCATIONS } from "@/constants/locations";
import useAccountManagementStore from "@/store/use-account-management-store";

function ModalActiveMember({ title, description }) {
  const isShowModalActive = useAccountManagementStore().isShowModalActive;
  const onHideModalActive = useAccountManagementStore().onHideModalActive;
  const onActiveMemberAccount =
    useAccountManagementStore().onActiveMemberAccount;

  const navigate = useNavigate();

  const onClickOkButton = () => {
    onActiveMemberAccount();
    navigate(LOCATIONS.ACCOUNT_MANAGEMENT.path);
  };

  return (
    <Modal
      title={title}
      closable={false}
      onCancel={onHideModalActive}
      onOk={onClickOkButton}
      open={isShowModalActive}
      okText="Confirm"
    >
      {description}
    </Modal>
  );
}

ModalActiveMember.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default React.memo(ModalActiveMember);
