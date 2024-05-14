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

  const accountStatus =
    searchParams.get("status") === "ACTIVE" ||
    searchParams.get("status") === null
      ? "ACTIVE"
      : "DELETED";

  React.useEffect(() => {
    onGetDataFirstRender(searchParams.get("status"), searchParams.get("page"));

    return () => {
      onResetAccountManagement();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="flex flex-col gap-[1.25rem] rounded-xl bg-white p-5 shadow-dropShadow">
      <HeaderAccountManagement />
      <TablerAccountManagement accountStatus={accountStatus} />
      <ModalDeleteMember
        title="Bạn có muốn dừng tài khoản này không?"
        description="Tài khoản này sẽ bị vô hiệu hóa và không thể đăng nhập"
      />
    </section>
  );
}

export default React.memo(AccountManagement);
