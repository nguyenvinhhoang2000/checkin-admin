import React from "react";

import MemberDetailHeader from "./components/header";
import MemberDetailTable from "./components/table";

function MemberDetail() {
  return (
    <section className="flex flex-col gap-[1.5625rem] rounded-xl bg-white p-5 pt-[0.625rem] shadow-dropShadow">
      <MemberDetailHeader />
      <MemberDetailTable />
    </section>
  );
}

export default React.memo(MemberDetail);
