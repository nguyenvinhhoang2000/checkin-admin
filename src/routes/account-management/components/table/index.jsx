import React from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Button, message, Table } from "antd";

import AppIcon from "@/components/apps/app-icon";

import ACCOUNT_MANAGEMENT_COLUMNS from "@/constants/account-management-table";
import useAccountManagementStore from "@/store/use-account-management-store";

import { paginationConfig } from "./config";

function TablerAccountManagement() {
  const onGetListAccount = useAccountManagementStore().onGetListAccount;
  const listAccount = useAccountManagementStore().listAccount;
  const totalAccount = useAccountManagementStore().totalAccount;
  const pageAccount = useAccountManagementStore().pageAccount;
  const onSetPage = useAccountManagementStore().onSetPage;
  const onSetStatus = useAccountManagementStore().onSetStatus;
  const isLoadingTable = useAccountManagementStore().isLoadingTable;
  const onResetAccountManagement =
    useAccountManagementStore().onResetAccountManagement;

  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();

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
        return (
          <div className="flex flex-row gap-[1.25rem]">
            <Button className="m-0 h-fit p-0" type="text">
              <AppIcon className="text-black/45" src="/icons/eye-icon.svg#id" />
            </Button>
            <Button className="m-0 h-fit p-0" type="text">
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
      navigate({
        pathname: location.pathname,
        search: createSearchParams({
          ...Object.fromEntries(searchParams),
          page: page.current,
        }).toString(),
      });
      onSetPage(page.current);
    },
    [location.pathname, navigate, onSetPage, searchParams],
  );

  const pagination = React.useMemo(() => {
    return {
      ...paginationConfig,
      total: totalAccount,
      current: pageAccount,
    };
  }, [totalAccount, pageAccount]);

  const onGetAccounts = React.useCallback(async () => {
    await onSetStatus(searchParams.get("status") || 1);
    await onSetPage(searchParams.get("page") || 1);

    await onGetListAccount();
  }, []);

  React.useEffect(() => {
    onGetAccounts();

    return () => {
      onResetAccountManagement();
    };
  }, []);

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
