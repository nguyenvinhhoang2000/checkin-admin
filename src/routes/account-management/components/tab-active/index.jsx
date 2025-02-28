import React from "react";
import { useSearchParams } from "react-router-dom";
import { ConfigProvider, Tabs } from "antd";

import { TAB_STATUS } from "@/constants/tab-status";
import useAccountManagementStore from "@/store/use-account-management-store";

import { theme } from "./config";

function TabActive() {
  const onSetStatus = useAccountManagementStore().onSetStatus;

  const [searchParams, setSearchParams] = useSearchParams();

  const initialValue = React.useMemo(() => {
    return searchParams.get("status") || "ACTIVE";
  }, [searchParams]);

  const items = React.useMemo(() => {
    return TAB_STATUS.map((item) => {
      return {
        key: `${item.value}`,
        label: item.label,
      };
    });
  }, []);

  const onGetActiveValue = React.useCallback((value) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      status: value,
    });
    onSetStatus(value);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ConfigProvider theme={theme}>
      <Tabs
        className="min-w-[8.125rem]"
        defaultActiveKey={initialValue}
        items={items}
        onChange={onGetActiveValue}
      />
    </ConfigProvider>
  );
}
export default TabActive;
