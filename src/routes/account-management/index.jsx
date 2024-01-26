import React from "react";

import HeaderAccountManagement from "./components/header";
import TablerAccountManagement from "./components/table";

function AccountManagement() {
  return (
    <section className="flex flex-col gap-[1.25rem] rounded-xl bg-white p-5 shadow-dropShadow">
      <HeaderAccountManagement />
      <TablerAccountManagement />
    </section>
  );
}

export default React.memo(AccountManagement);
