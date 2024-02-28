import React from "react";
import { useSearchParams } from "react-router-dom";
import { Button, DatePicker, Select } from "antd";

import AppIcon from "@/components/apps/app-icon";

import timeRangeSelection from "@/constants/timeRangeSelection";
import useAccountManagementStore from "@/store/use-account-management-store";

function AbsentRequestHeader() {
  const onGetTableAbsentFirstRender =
    useAccountManagementStore().onGetTableAbsentFirstRender;
  const onSetDayRangeAbsentRequests =
    useAccountManagementStore().onSetDayRangeAbsentRequests;

  const [searchParams, setSearchParams] = useSearchParams();

  const filter = React.useMemo(
    () => ({
      period: searchParams.get("period") || timeRangeSelection.THIS_MONTH.key,
    }),
    [searchParams],
  );

  const onFilterBy = React.useCallback(
    (value) => () => {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        period: value,
      });
      onGetTableAbsentFirstRender(
        value,
        searchParams.get("page"),
        searchParams.get("startDate"),
        searchParams.get("endDate"),
      );
    },
    [onGetTableAbsentFirstRender, searchParams, setSearchParams],
  );

  const handleChangeSelectTimeRange = (value) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      period: value,
    });

    onGetTableAbsentFirstRender(
      value,
      searchParams.get("page"),
      searchParams.get("startDate"),
      searchParams.get("endDate"),
    );
  };

  const onCalendarChange = React.useCallback(
    (_, [startStr, endStr]) => {
      const updatedSearchParams = {
        ...Object.fromEntries(searchParams),
      };

      if (!startStr && !endStr) {
        delete updatedSearchParams.startDate;
        delete updatedSearchParams.endDate;
        onSetDayRangeAbsentRequests();
      } else {
        updatedSearchParams.startDate = startStr;
        updatedSearchParams.endDate = endStr;
        onGetTableAbsentFirstRender(
          searchParams.get("period"),
          searchParams.get("page"),
          startStr,
          endStr,
        );
      }

      setSearchParams(updatedSearchParams);
    },
    [
      onGetTableAbsentFirstRender,
      onSetDayRangeAbsentRequests,
      searchParams,
      setSearchParams,
    ],
  );

  return (
    <div className="flex flex-col items-center justify-between gap-y-6 xl:flex-row">
      <div className="w-full whitespace-nowrap text-xl font-medium xl:w-fit">
        Absent Request
      </div>
      <div className="flex w-full flex-row items-center justify-between gap-[1.5rem] xl:justify-end">
        <Select
          defaultValue={
            searchParams.get("period") || timeRangeSelection.THIS_MONTH.key
          }
          onChange={handleChangeSelectTimeRange}
          className="flex md:hidden"
        >
          {Object.values(timeRangeSelection).map((option) => (
            <Select.Option key={option.key} value={option.key}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
        <div className="hidden flex-row gap-6 md:flex">
          {Object.values(timeRangeSelection).map((item) => (
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
        <span>
          <DatePicker.RangePicker
            className="max-w-[16rem] rounded-sm"
            onCalendarChange={onCalendarChange}
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
