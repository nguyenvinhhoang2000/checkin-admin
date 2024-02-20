import React from "react";
import { Button, DatePicker } from "antd";

import AppIcon from "@/components/apps/app-icon";

function MemberOverviewHeader() {
  const { RangePicker } = DatePicker;
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="text-xl font-medium">Members</div>
      <div className="flex flex-row items-center gap-[1.5rem]">
        <div className="flex flex-row items-center gap-6">
          <span className="text-primary-1">Today</span>
          <span>This month</span>
          <span>Last month</span>
          <span>All time</span>
        </div>
        <span>
          <RangePicker
            format={["DD/MM/YYYY", "DD/MM/YYYY"]}
            className="max-w-[16rem] rounded-sm"
          />
        </span>
        <Button className="flex flex-row items-center gap-[0.625rem] py-[0.4063rem]">
          <AppIcon
            src="/icons/download.svg#id"
            width={14}
            height={14}
            alt="download"
            className="mb-[2px]"
          />
          <span>Download</span>
        </Button>
      </div>
    </div>
  );
}

export default MemberOverviewHeader;
