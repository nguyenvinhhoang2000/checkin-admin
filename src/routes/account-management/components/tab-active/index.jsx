import React from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { ConfigProvider, Tabs } from "antd";

import { TAB_STATUS } from "@/constants/tab-status";
import useAccountManagementStore from "@/store/use-account-management-store";
import { fullConfig } from "@/theme";

function TabActive() {
  const onSetStatus = useAccountManagementStore().onSetStatus;

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const initialValue = React.useMemo(() => {
    return searchParams.get("status");
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
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        ...Object.fromEntries(searchParams),
        status: value,
      }).toString(),
    });
    onSetStatus(value);
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: fullConfig.theme.colors.secondary[3],
        },
        components: {
          Tabs: {
            margin: "0 0",
          },
        },
      }}
    >
      <Tabs
        defaultActiveKey={initialValue}
        items={items}
        onChange={onGetActiveValue}
      />
    </ConfigProvider>
  );
}
export default TabActive;
