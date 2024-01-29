import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import AppIcon from "@/components/apps/app-icon";
import SearchBarForm from "@/components/forms/search-bar-form";

import { LOCATIONS } from "@/constants/locations";

import TabActive from "../tab-active";

function HeaderAccountManagement() {
  const navigate = useNavigate();

  const onClickBtn = React.useCallback(() => {
    navigate(LOCATIONS.CREATE_ACCOUNT.path);
  }, [navigate]);

  return (
    <div className="flex flex-col gap-6 xl:flex xl:flex-row xl:items-center xl:justify-between">
      <TabActive />
      <div className="flex flex-row items-center gap-6">
        <SearchBarForm />
        <Button
          onClick={onClickBtn}
          type="primary"
          className="flex h-full flex-row items-center justify-between gap-[0.625rem] py-[0.4rem]"
        >
          <AppIcon
            src="/icons/plus-icon.svg#id"
            width={14}
            height={14}
            className="text-white"
          />
          <span>Create Account</span>
        </Button>
      </div>
    </div>
  );
}

export default React.memo(HeaderAccountManagement);
