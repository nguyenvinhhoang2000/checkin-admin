import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, message, Table } from "antd";

import AppIcon from "@/components/apps/app-icon";

import ACCOUNT_MANAGEMENT_COLUMNS from "@/constants/account-management-table";
import { LOCATIONS } from "@/constants/locations";
import useAccountManagementStore from "@/store/use-account-management-store";

import { paginationConfig } from "./config";

function TablerAccountManagement() {
  const listAccount = useAccountManagementStore().listAccount;
  const totalAccount = useAccountManagementStore().totalAccount;
  const pageAccount = useAccountManagementStore().pageAccount;
  const onSetPage = useAccountManagementStore().onSetPage;
  const isLoadingTable = useAccountManagementStore().isLoadingTable;

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const columns = [
    {
      ...ACCOUNT_MANAGEMENT_COLUMNS.NAME,
      width: "29.3%",
    },
    {
      ...ACCOUNT_MANAGEMENT_COLUMNS.EMAIL,
      width: "29.3%",
      render: (text) => {
        const onClickClipboard = () => {
          navigator.clipboard.writeText(text);
          message.success("Coppy to clipboard");
        };
        return (
          <div>
            <span>{text} </span>
            <Button
              type="link"
              className="!h-fit !w-fit p-0"
              icon={
                <AppIcon
                  width={12}
                  height={12}
                  className="p-0 text-primary-1"
                  src="/icons/coppy-icon.svg#id"
                />
              }
              onClick={onClickClipboard}
            />
          </div>
        );
      },
    },
    {
      ...ACCOUNT_MANAGEMENT_COLUMNS.BRANCH,
      width: "29.3%",
    },
    {
      ...ACCOUNT_MANAGEMENT_COLUMNS.ACTIONS,
      width: "12%",
      render: () => {
        const onClickButtonEdit = () => {
          navigate(LOCATIONS.EDIT_ACCOUNT.path);
        };
        return (
          <div className="flex flex-row gap-[1.25rem]">
            <Button className="m-0 h-fit p-0" type="text">
              <AppIcon className="text-black/45" src="/icons/eye-icon.svg#id" />
            </Button>
            <Button
              onClick={onClickButtonEdit}
              className="m-0 h-fit p-0"
              type="text"
            >
              <AppIcon
                className="text-black/45"
                src="/icons/edit-icon.svg#id"
              />
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
      loading={isLoadingTable}
      onChange={onChangePage}
      rowKey="_id"
      pagination={pagination}
      dataSource={listAccount}
      columns={columns}
    />
  );
}

export default React.memo(TablerAccountManagement);
