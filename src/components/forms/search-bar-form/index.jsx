import React from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Button, ConfigProvider, Form, Input } from "antd";

import AppIcon from "@/components/apps/app-icon";

function SearchBarForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const onSearch = React.useCallback(({ search }) => {
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        ...Object.fromEntries(searchParams),
        search: search || "",
      }).toString(),
    });
  }, []);

  const initialValues = React.useMemo(() => {
    return {
      search: Object.fromEntries(searchParams).search,
    };
  }, [searchParams]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: { marginLG: "0" },
        },
      }}
    >
      <Form
        initialValues={initialValues}
        onFinish={onSearch}
        className="flex h-fit items-center justify-center"
      >
        <Form.Item name="search">
          <Input
            className="w-[31.25rem] rounded-[3.5625rem]"
            title="input search"
            placeholder="Search by name, phone number, email..."
            prefix={
              <Form.Item>
                <Button type="link" className="p-0" htmlType="submit">
                  <AppIcon
                    src="/icons/search-icon.svg#id"
                    width={16}
                    height={16}
                    className="text-black/45"
                  />
                </Button>
              </Form.Item>
            }
          />
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
}

export default React.memo(SearchBarForm);
