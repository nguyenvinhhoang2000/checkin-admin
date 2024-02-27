import React from "react";
import { useSearchParams } from "react-router-dom";
import { Avatar, Button, Modal, Table } from "antd";

import AppIcon from "@/components/apps/app-icon";

import ABSENT_REQUEST_COLUMNS from "@/constants/absent-request-table";
import useAccountManagementStore from "@/store/use-account-management-store";
import formatDate from "@/utils/formatDateTimeAbsentTable";

import { paginationConfig, scroll } from "./config";

function AbsentRequestTable() {
  const onShowModalAbsentRequest =
    useAccountManagementStore().onShowModalAbsentRequest;
  const isShowModalAbsentRequest =
    useAccountManagementStore().isShowModalAbsentRequest;
  const onHideModalAbsentRequest =
    useAccountManagementStore().onHideModalAbsentRequest;
  const onSetPageTableAbsent = useAccountManagementStore().onSetPageTableAbsent;
  const isLoadingTable = useAccountManagementStore().isLoadingTable;
  const totalAccount = useAccountManagementStore().totalAccount;
  const pageAccount = useAccountManagementStore().pageAccount;
  const absentRequests = useAccountManagementStore().absentRequests;

  const [selectedRequest, setSelectedRequest] = React.useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const onChangePage = React.useCallback(
    (page) => {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        page: page.current,
      });

      onSetPageTableAbsent(page.current);
    },
    [onSetPageTableAbsent, searchParams, setSearchParams],
  );

  const pagination = React.useMemo(() => {
    return {
      ...paginationConfig,
      total: totalAccount,
      current: pageAccount,
    };
  }, [totalAccount, pageAccount]);

  const columns = [
    {
      ...ABSENT_REQUEST_COLUMNS.DURATION_REQUEST,
      width: "13.43%",
      render: (_, record) => {
        const { fromAt, toAt } = record;
        return (
          <div>
            {formatDate(fromAt)}
            <br />
            {formatDate(toAt)}
          </div>
        );
      },
    },
    {
      ...ABSENT_REQUEST_COLUMNS.DATE_REQUEST,
      width: "13.43%",
      render: (text) => {
        return <div>{formatDate(text)}</div>;
      },
    },
    {
      ...ABSENT_REQUEST_COLUMNS.NAME,
      width: "19.96%",
      render: (text, record) => {
        const initials = text
          .split(" ")
          .map((name) => name[0])
          .join("");

        return (
          <div className="flex gap-3">
            <Avatar
              className="bg-volcano-1 text-volcano-2"
              size={40}
              alt="avatar"
            >
              {initials}
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium">{text}</span>
              <span className="text-xs opacity-45">{record.user.position}</span>
            </div>
          </div>
        );
      },
    },
    {
      ...ABSENT_REQUEST_COLUMNS.TYPE_ABSENT,
      width: "13.43%",
      render: (type) => {
        if (type === 1) {
          return "Remote";
        }
        if (type === 2) {
          return "Absent";
        }
        return "Absent";
      },
    },
    {
      ...ABSENT_REQUEST_COLUMNS.DESCRIPTION,
      width: "32.69%",
      render: (text) => {
        return <div className="line-clamp-3 whitespace-normal">{text}</div>;
      },
    },
    {
      ...ABSENT_REQUEST_COLUMNS.ACTIONS,
      width: "5.30%",
      render: (_, record) => {
        const onClickButtonView = () => {
          setSelectedRequest(record);
          onShowModalAbsentRequest();
        };

        return (
          <div className="flex flex-row gap-[1.25rem]">
            <Button
              onClick={onClickButtonView}
              className="m-0 h-fit p-0"
              type="text"
            >
              <AppIcon className="text-black/45" src="/icons/eye-icon.svg#id" />
            </Button>
            <Button className="m-0 h-fit p-0" type="text">
              <AppIcon
                className="text-black/45"
                src="/icons/trash-icon.svg#id"
              />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        rowKey="_id"
        loading={isLoadingTable}
        onChange={onChangePage}
        pagination={pagination}
        dataSource={absentRequests}
        scroll={absentRequests.length !== 0 ? scroll : null}
        columns={columns}
      />
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
          <AppIcon
            className="text-black/45"
            width={16}
            height={16}
            onClick={onHideModalAbsentRequest}
            src="/icons/close.svg#id"
          />
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
    </>
  );
}

export default React.memo(AbsentRequestTable);
