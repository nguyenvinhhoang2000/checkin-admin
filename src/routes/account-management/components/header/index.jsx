import React from "react";
import { Button } from "antd";

import AppIcon from "@/components/apps/app-icon";
import SearchBarForm from "@/components/form/search-bar-form";

import TabActive from "../tab-active";

function HeaderAccountManagement() {
  return (
    <div className="flex flex-row items-center justify-between">
      <TabActive />
      <div className="flex flex-row items-center gap-6">
        <SearchBarForm />
        <Button
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
