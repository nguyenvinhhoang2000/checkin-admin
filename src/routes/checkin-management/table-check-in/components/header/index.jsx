import React from "react";
import { useSearchParams } from "react-router-dom";
import { Button, DatePicker, Select } from "antd";

import AppIcon from "@/components/apps/app-icon";

import { FILTER_TYPE } from "@/constants/filter-type";

const USE_TYPE = {
  MEMBER: {
    key: "MEMBER",
    label: "Member",
  },
};

const OPTIONS = [{ value: USE_TYPE.MEMBER.key, label: USE_TYPE.MEMBER.label }];

function HeaderTableCheckin() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = React.useMemo(
    () => ({
      time: searchParams.get("time") || FILTER_TYPE.TODAY.key,
      userType: searchParams.get("userType") || USE_TYPE.MEMBER.key,
    }),
    [searchParams],
  );

  const onFiletrBy = React.useCallback(
    (value) => () => {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        time: value,
      });
    },
    [searchParams, setSearchParams],
  );

  const onFilterByUserType = React.useCallback(
    (userType) => {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        userType,
      });
    },
    [searchParams, setSearchParams],
  );

  const onDownload = React.useCallback(() => {}, []);

  return (
    <div className="flex w-full flex-col flex-wrap justify-between gap-5 lg:flex-row">
      <h4 className="text-xl font-medium text-character-title">
        Table Check-in
      </h4>
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
        <div className="flex flex-row gap-6">
          {Object.values(FILTER_TYPE).map((item) => (
            <Button
              key={item.key}
              onClick={onFiletrBy(item.key)}
              type="link"
              className={`h-fit border-0 p-0 text-character-title ${filter.time === item.key && "text-primary-1"}`}
            >
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
        <Select
          defaultValue={USE_TYPE.MEMBER.key}
          className="h-[2.375rem] w-full lg:w-[12.5rem]"
          onChange={onFilterByUserType}
          options={OPTIONS}
        />
        <DatePicker.RangePicker className="w-full rounded-sm lg:w-fit" />
        <Button
          onClick={onDownload}
          className="flex h-full w-full flex-row items-center justify-center gap-[0.625rem] px-[0.9375rem] py-[0.4rem] lg:w-fit lg:justify-between"
        >
          <AppIcon src="/icons/download.svg#id" width={14} height={14} />
          <span>Download</span>
        </Button>
      </div>
    </div>
  );
}

export default React.memo(HeaderTableCheckin);
