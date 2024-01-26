import React from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { ConfigProvider, Tabs } from "antd";

import { TAB_ACTIVE } from "@/constants/tab-active";
import { fullConfig } from "@/theme";

function TabActive() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const items = React.useMemo(() => {
    return TAB_ACTIVE.map((item) => {
      return {
        key: item.value,
        label: item.label,
      };
    });
  }, []);

  const onGetActiveValue = React.useCallback((value) => {
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        ...Object.fromEntries(searchParams),
        active: value,
      }).toString(),
    });
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: fullConfig.theme.colors.secondary[3],
        },
      }}
    >
      <Tabs items={items} onChange={onGetActiveValue} />
    </ConfigProvider>
  );
}
export default TabActive;
