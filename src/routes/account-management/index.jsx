import React from "react";
import { useSearchParams } from "react-router-dom";

import useAccountManagementStore from "@/store/use-account-management-store";

import HeaderAccountManagement from "./components/header";
import ModalDeleteMember from "./components/modal-delete-member";
import TablerAccountManagement from "./components/table";

function AccountManagement() {
  const onGetDataFirstRender = useAccountManagementStore().onGetDataFirstRender;
  const onResetAccountManagement =
    useAccountManagementStore().onResetAccountManagement;

  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    onGetDataFirstRender(searchParams.get("status"), searchParams.get("page"));

    return () => {
      onResetAccountManagement();
    };
  }, [onGetDataFirstRender, onResetAccountManagement, searchParams]);

  return (
    <section className="flex flex-col gap-[1.25rem] rounded-xl bg-white p-5 shadow-dropShadow">
      <HeaderAccountManagement />
      <TablerAccountManagement />
      <ModalDeleteMember />
    </section>
  );
}

export default React.memo(AccountManagement);
