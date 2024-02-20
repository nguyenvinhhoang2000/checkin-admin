import React from "react";

import Header from "./components/header";
import Table from "./components/table";

function TableCheckin() {
  return (
    <section className="flex flex-col gap-[1.25rem] rounded-xl bg-white p-5 shadow-dropShadow">
      <Header />
      <Table />
    </section>
  );
}

export default React.memo(TableCheckin);
