import React from "react";

import AbsentRequestHeader from "./components/header";
import AbsentRequestTable from "./components/table";

function Absent() {
  return (
    <section className="flex flex-col gap-[1.5625rem] rounded-xl bg-white p-5 pt-[0.625rem] shadow-dropShadow">
      <AbsentRequestHeader />
      <AbsentRequestTable />
    </section>
  );
}

export default React.memo(Absent);
