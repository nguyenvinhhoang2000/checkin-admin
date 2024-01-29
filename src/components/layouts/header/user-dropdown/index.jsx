import React from "react";
import { Avatar, Button, Dropdown } from "antd";

import AppIcon from "@/components/apps/app-icon";

function UserDropdown() {
  const onMenuClick = React.useCallback(() => {
    console.log(`🎶🎶🎶.. logout`);
  }, []);

  const menu = React.useMemo(() => {
    const items = [
      {
        key: "log-out",
        label: (
          <div className="flex flex-row items-center justify-start gap-2">
            <AppIcon
              width={12}
              height={12}
              className="text-danger"
              src="/icons/logout-icon.svg#id"
              alt="Edit user"
            />
            <span className="text-danger">Log-out</span>
          </div>
        ),
      },
    ];

    return {
      items,
      onClick: onMenuClick,
    };
  }, [onMenuClick]);

  return (
    <Dropdown
      className="flex flex-row justify-end"
      align={{ offset: [0, -24] }}
      menu={menu}
      placement="topRight"
      trigger={["click"]}
      arrow
      overlayClassName="w-[11.9375rem]"
    >
      <Button
        type="text"
        onClick={(e) => e.preventDefault()}
        className="flex flex-row items-center gap-2 p-0"
      >
        <Avatar
          size="small"
          shape="icon"
          className="bg-volcano-1 text-volcano-2"
        >
          T
        </Avatar>
        <span className="font-roboto text-[0.875rem] font-normal leading-[1.375rem] text-black/85">
          Vinh Thai
        </span>
        <AppIcon
          width={12}
          height={12}
          className="text-secondary-4"
          src="/icons/arrow-user-dropdown.svg#id"
          alt="user-dropdown"
        />
      </Button>
    </Dropdown>
  );
}

export default React.memo(UserDropdown);
