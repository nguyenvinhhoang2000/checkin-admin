import React from "react";
import { Button, Modal } from "antd";
import PropTypes from "prop-types";

import AppIcon from "@/components/apps/app-icon";

import formatDate from "@/utils/formatDateTimeAbsentTable";

function ModalAbsentRequestDetail({
  isShowModalAbsentRequest,
  onHideModalAbsentRequest,
  selectedRequest,
}) {
  return (
    <Modal
      title={
        <p className="border-b pb-4 font-medium text-black/[.85]">
          Absent Request
        </p>
      }
      open={isShowModalAbsentRequest}
      width={572}
      footer={<Button onClick={onHideModalAbsentRequest}>Cancel</Button>}
      closeIcon={
        <Button
          onClick={onHideModalAbsentRequest}
          className="m-0 h-fit p-0"
          type="text"
        >
          <AppIcon
            className="text-black/45"
            width={16}
            height={16}
            src="/icons/close.svg#id"
          />
        </Button>
      }
    >
      <div className="flex flex-col gap-y-[0.75rem] border-b pb-8 pt-6">
        <div className="flex justify-between">
          <span className="font-bold">Member</span>
          <span>{selectedRequest?.user.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">From</span>
          <span>{formatDate(selectedRequest?.fromAt)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">To</span>
          <span>{formatDate(selectedRequest?.toAt)}</span>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="font-bold">Description</span>
          <span>{selectedRequest?.description}</span>
        </div>
      </div>
    </Modal>
  );
}

ModalAbsentRequestDetail.propTypes = {
  isShowModalAbsentRequest: PropTypes.bool.isRequired,
  onHideModalAbsentRequest: PropTypes.func.isRequired,
  selectedRequest: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
    description: PropTypes.string,
    fromAt: PropTypes.string,
    toAt: PropTypes.string,
  }).isRequired,
};

export default ModalAbsentRequestDetail;
