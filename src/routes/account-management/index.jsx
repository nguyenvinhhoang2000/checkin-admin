import React from "react";

import HeaderAccountManagement from "./header";
import TablerAccountManagement from "./table";

function AccountManagement() {
  return (
    <section className="shadow-dropShadow flex flex-col gap-[1.25rem] rounded-xl bg-white p-5">
      <HeaderAccountManagement />
      <TablerAccountManagement />
    </section>
  );
}

export default React.memo(AccountManagement);
