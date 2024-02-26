import React from "react";
import { useSearchParams } from "react-router-dom";
import { Avatar, Table } from "antd";

import TABLE_CHECK_IN_COLUMNS from "@/constants/table-checkin";
import useAccountManagementStore from "@/store/use-account-management-store";

import { paginationConfig, scroll } from "./config";

function TablerTableCheckin() {
  const checkInList = useAccountManagementStore().checkInList;
  const totalAccount = useAccountManagementStore().totalAccount;
  const pageAccount = useAccountManagementStore().pageAccount;
  const onSetPageTableCheckIn =
    useAccountManagementStore().onSetPageTableCheckIn;
  const isLoadingTable = useAccountManagementStore().isLoadingTable;

  const [searchParams, setSearchParams] = useSearchParams();

  const columns = [
    {
      ...TABLE_CHECK_IN_COLUMNS.DATE,
      width: "16.6%",
      render: (date) => {
        const d = new Date(date);
        return (
          <span>
            {d.getDate()}-{d.getMonth() + 1}-{d.getFullYear()}
          </span>
        );
      },
    },
    {
      ...TABLE_CHECK_IN_COLUMNS.MEMBER,
      width: "16.6%",
      render: (text) => {
        return (
          <div className="flex flex-row items-center gap-2">
            <Avatar className="bg-volcano-1 text-volcano-2">{text}</Avatar>
            <span className=" text-sm font-medium text-character-title">
              {text}
            </span>
          </div>
        );
      },
    },
    {
      ...TABLE_CHECK_IN_COLUMNS.CHECK_IN,
      width: "16.6%",
      render: (time) => {
        const d = new Date(time);
        const checkInDate = new Date(time);
        const checkInTime = checkInDate.getTime();
        const startTime = new Date(checkInDate.setHours(8, 30, 0)).getTime();

        let status = "";
        let statusClass = "";

        if (checkInTime < startTime) {
          status = "Check-in Early";
          statusClass = "text-secondary-2";
        } else {
          status = "Check-in Late";
          statusClass = "text-danger";
        }

        return (
          <div className="flex flex-col gap-[0.125rem]">
            {time !== "" ? (
              <>
                <span className="text-sm text-character-title">
                  {d.getHours().toString().padStart(2, "0")}:
                  {d.getMinutes().toString().padStart(2, "0")}:
                  {d.getSeconds().toString().padStart(2, "0")}
                </span>

                <span className={`text-xs ${statusClass}`}>{status}</span>
              </>
            ) : (
              <span className="text-sm text-character-title">-</span>
            )}
          </div>
        );
      },
    },
    {
      ...TABLE_CHECK_IN_COLUMNS.CHECK_OUT,
      width: "16.6%",
      render: (time) => {
        const d = new Date(time);
        const checkOutDate = new Date(time);
        const checkOutTime = checkOutDate.getTime();
        const endTime = new Date(checkOutDate.setHours(17, 30, 0)).getTime();

        let status = "";
        let statusClass = "";

        if (checkOutTime < endTime) {
          status = "Check-out Early";
          statusClass = "text-secondary-2";
        } else {
          status = "Check-out Late";
          statusClass = "text-danger";
        }

        return (
          <div className="flex flex-col gap-[0.125rem]">
            {time !== "" ? (
              <>
                <span className="text-sm text-character-title">
                  {d.getHours().toString().padStart(2, "0")}:
                  {d.getMinutes().toString().padStart(2, "0")}:
                  {d.getSeconds().toString().padStart(2, "0")}
                </span>

                <span className={`text-xs ${statusClass}`}>{status}</span>
              </>
            ) : (
              <span className="text-sm text-character-title">-</span>
            )}
          </div>
        );
      },
    },
    {
      ...TABLE_CHECK_IN_COLUMNS.DEVICE,
      width: "16.6%",
      style: { whiteSpace: "nowrap" },
    },
    {
      ...TABLE_CHECK_IN_COLUMNS.BRANCH,
      width: "16.6%",
      style: { whiteSpace: "nowrap" },
    },
  ];

  const onChangePage = React.useCallback(
    (page) => {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        page: page.current,
      });

      onSetPageTableCheckIn(page.current);
    },
    [onSetPageTableCheckIn, searchParams, setSearchParams],
  );

  const pagination = React.useMemo(() => {
    return {
      ...paginationConfig,
      total: totalAccount,
      current: pageAccount,
    };
  }, [totalAccount, pageAccount]);

  return (
    <Table
      className="overflow-x-auto"
      loading={isLoadingTable}
      onChange={onChangePage}
      rowKey="_id"
      {...(checkInList.length !== 0 ? { scroll } : {})}
      pagination={pagination}
      dataSource={checkInList}
      columns={columns}
    />
  );
}

export default React.memo(TablerTableCheckin);
