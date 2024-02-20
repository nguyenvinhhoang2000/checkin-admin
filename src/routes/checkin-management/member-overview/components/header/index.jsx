import React from "react";
import { Button, DatePicker, Select } from "antd";

import AppIcon from "@/components/apps/app-icon";

import timeRangeSelection from "@/constants/timeRangeSelection";

function MemberOverviewHeader() {
  const { RangePicker } = DatePicker;
  return (
    <div className="flex flex-col items-center justify-between gap-y-6 xl:flex-row">
      <div className="w-full text-xl font-medium xl:w-fit">Members</div>
      <div className="flex w-full flex-row items-center justify-between gap-[1.5rem] xl:justify-end">
        <Select
          className="flex md:hidden"
          defaultValue="Today"
          options={timeRangeSelection}
        />
        <div className="hidden flex-row items-center gap-6 md:flex">
          <span className="text-primary-1">Today</span>
          <span className="whitespace-nowrap">This month</span>
          <span className="whitespace-nowrap">Last month</span>
          <span className="whitespace-nowrap">All time</span>
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
          <div className="hidden xl:flex">Download</div>
        </Button>
      </div>
    </div>
  );
}

export default MemberOverviewHeader;
