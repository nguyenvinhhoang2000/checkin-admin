import React from "react";
import { useSearchParams } from "react-router-dom";

import useAccountManagementStore from "@/store/use-account-management-store";

import AbsentRequestHeader from "./components/header";
import AbsentRequestTable from "./components/table";

function Absent() {
  const onGetTableAbsentFirstRender =
    useAccountManagementStore().onGetTableAbsentFirstRender;
  const onResetAbsentRequests =
    useAccountManagementStore().onResetAbsentRequests;

  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    onGetTableAbsentFirstRender(
      searchParams.get("period"),
      searchParams.get("page"),
      searchParams.get("startDate"),
      searchParams.get("endDate"),
    );

    return () => {
      onResetAbsentRequests();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <section className="flex flex-col gap-[1.5625rem] rounded-xl bg-white p-5 pt-[0.625rem] shadow-dropShadow">
      <AbsentRequestHeader />
      <AbsentRequestTable />
    </section>
  );
}

export default React.memo(Absent);
