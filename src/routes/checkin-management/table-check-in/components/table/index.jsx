import React from "react";
import { useSearchParams } from "react-router-dom";
import { Avatar, Table } from "antd";

import TABLE_CHECK_IN_COLUMNS from "@/constants/table-checkin";
import useAccountManagementStore from "@/store/use-account-management-store";

import { paginationConfig, scroll } from "./config";

function TablerTableCheckin() {
  const listAccount = useAccountManagementStore().listAccount;
  const totalAccount = useAccountManagementStore().totalAccount;
  const pageAccount = useAccountManagementStore().pageAccount;
  const onSetPage = useAccountManagementStore().onSetPage;
  const isLoadingTable = useAccountManagementStore().isLoadingTable;

  const [searchParams, setSearchParams] = useSearchParams();

  const columns = [
    {
      ...TABLE_CHECK_IN_COLUMNS.DATE,
      width: "16.6%",
    },
    {
      ...TABLE_CHECK_IN_COLUMNS.MEMBER,
      width: "16.6%",
      render: (text) => {
        return (
          <div className="flex flex-row gap-2">
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
      render: (text) => {
        return (
          <div className="flex flex-col gap-[0.125rem]">
            <span className="text-sm text-character-title">{text}</span>
            <span className="text-xs text-secondary-2">Check-in Early</span>
          </div>
        );
      },
    },
    {
      ...TABLE_CHECK_IN_COLUMNS.CHECK_OUT,
      width: "16.6%",
      render: (text) => {
        return (
          <div className="flex flex-col gap-[0.125rem]">
            <span className="text-sm text-character-title">{text}</span>
            <span className="text-xs text-danger">Check-in Early</span>
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

      onSetPage(page.current);
    },
    [onSetPage, searchParams, setSearchParams],
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
      {...(listAccount.length !== 0 ? { scroll } : {})}
      pagination={pagination}
      dataSource={listAccount}
      columns={columns}
    />
  );
}

export default React.memo(TablerTableCheckin);
