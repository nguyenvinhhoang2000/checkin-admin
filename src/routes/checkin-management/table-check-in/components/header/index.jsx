import React from "react";
import { useSearchParams } from "react-router-dom";
import { Button, DatePicker, Select } from "antd";

import AppIcon from "@/components/apps/app-icon";

import { FILTER_TYPE } from "@/constants/filter-type";
import useAccountManagementStore from "@/store/use-account-management-store";

const USE_TYPE = {
  MEMBER: {
    key: "MEMBER",
    label: "Member",
  },
};

const OPTIONS = [{ value: USE_TYPE.MEMBER.key, label: USE_TYPE.MEMBER.label }];

function HeaderTableCheckin() {
  const onGetTableCheckInFirstRender =
    useAccountManagementStore().onGetTableCheckInFirstRender;

  const [searchParams, setSearchParams] = useSearchParams();
  const filter = React.useMemo(
    () => ({
      period: searchParams.get("period") || FILTER_TYPE.TODAY.key,
      userType: searchParams.get("userType") || USE_TYPE.MEMBER.key,
    }),
    [searchParams],
  );

  const onFilterBy = React.useCallback(
    (value) => () => {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        period: value,
      });
      onGetTableCheckInFirstRender(
        value,
        searchParams.get("page"),
        searchParams.get("startDate"),
        searchParams.get("endDate"),
      );
    },
    [onGetTableCheckInFirstRender, searchParams, setSearchParams],
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

  const onFilterCalendar = React.useCallback(
    (dates) => {
      const [startDate, endDate] = dates;

      const start = startDate.format("YYYY-MM-DD");
      const end = endDate.format("YYYY-MM-DD");

      setSearchParams({
        ...Object.fromEntries(searchParams),
        startDate: start,
        endDate: end,
      });

      onGetTableCheckInFirstRender(
        searchParams.get("period"),
        searchParams.get("page"),
        start,
        end,
      );
    },
    [onGetTableCheckInFirstRender, searchParams, setSearchParams],
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
              onClick={onFilterBy(item.key)}
              type="link"
              className={`h-fit border-0 p-0 text-character-title ${filter.period === item.key && "text-primary-1"}`}
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
        <DatePicker.RangePicker
          className="w-full rounded-sm lg:w-fit"
          onChange={onFilterCalendar}
        />
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
