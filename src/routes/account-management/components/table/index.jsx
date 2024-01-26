import React from "react";
import { Button, message, Table } from "antd";

import AppIcon from "@/components/apps/app-icon";

import ACCOUNT_MANAGEMENT_COLUMNS from "@/constants/account-management-table";

function TablerAccountManagement() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      email: "duchoang123@gmail.com",
      branch: "Head office, Da Nang",
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      email: "duchoang456@gmail.com",
      branch: "Head office, Da Nang",
      address: "10 Downing Street",
    },
  ];

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

  return <Table dataSource={dataSource} columns={columns} />;
}

export default React.memo(TablerAccountManagement);
