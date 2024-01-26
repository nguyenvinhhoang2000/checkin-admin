import React from "react";
import { Button, Table } from "antd";

import AppIcon from "@/components/apps/app-icon";

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
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "29.3%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "29.3%",
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
      width: "29.3%",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
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
