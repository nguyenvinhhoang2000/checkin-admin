import React from "react";

import HeaderAccountManagement from "./components/header";
import TablerAccountManagement from "./components/table";

function AccountManagement() {
  return (
    <section className="shadow-dropShadow flex flex-col gap-[1.25rem] rounded-xl bg-white p-5">
      <HeaderAccountManagement />
      <TablerAccountManagement />
    </section>
  );
}

export default React.memo(AccountManagement);
