import React from "react";
import { useSearchParams } from "react-router-dom";

import useAccountManagementStore from "@/store/use-account-management-store";

import Header from "./components/header";
import Table from "./components/table";

function TableCheckin() {
  const onGetTableCheckInFirstRender =
    useAccountManagementStore().onGetTableCheckInFirstRender;
  const onResetTableCheckIn = useAccountManagementStore().onResetTableCheckIn;

  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    onGetTableCheckInFirstRender(
      searchParams.get("period"),
      searchParams.get("page"),
      searchParams.get("startDate"),
      searchParams.get("endDate"),
    );

    return () => {
      onResetTableCheckIn();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <section className="flex flex-col gap-[1.25rem] rounded-xl bg-white p-5 shadow-dropShadow">
      <Header />
      <Table />
    </section>
  );
}

export default React.memo(TableCheckin);
