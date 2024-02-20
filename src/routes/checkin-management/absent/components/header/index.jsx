import React from "react";
import { Button, DatePicker, Select } from "antd";

import AppIcon from "@/components/apps/app-icon";

import dateFormat from "@/constants/date-format";
import timeRangeSelection from "@/constants/timeRangeSelection";

function AbsentRequestHeader() {
  const { RangePicker } = DatePicker;
  return (
    <div className="flex flex-col items-center justify-between gap-y-6 xl:flex-row">
      <div className="w-full whitespace-nowrap text-xl font-medium xl:w-fit">
        Absent Request
      </div>
      <div className="flex w-full flex-row items-center justify-between gap-[1.5rem] xl:justify-end">
        <Select
          className="flex md:hidden"
          defaultValue="Today"
          options={timeRangeSelection}
        />
        <div className="hidden flex-row items-center gap-6 md:flex">
          <span className="whitespace-nowrap text-primary-1">This month</span>
          <span className="whitespace-nowrap">Last month</span>
          <span className="whitespace-nowrap">3 month</span>
          <span className="whitespace-nowrap">All time</span>
        </div>
        <span>
          <RangePicker
            format={dateFormat}
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

export default AbsentRequestHeader;
