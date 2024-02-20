import React from "react";

import MemberOverviewHeader from "./components/header";
import MemberOverviewTable from "./components/table";

function MemberOverview() {
  return (
    <section className="flex flex-col gap-[1.5625rem] rounded-xl bg-white p-5 pt-[0.625rem] shadow-dropShadow">
      <MemberOverviewHeader />
      <MemberOverviewTable />
    </section>
  );
}

export default React.memo(MemberOverview);
