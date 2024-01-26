import React from "react";

import HeaderAccountManagement from "./header";
import TablerAccountManagement from "./table";

function AccountManagement() {
  return (
    <section className="p-5">
      <HeaderAccountManagement />
      <TablerAccountManagement />
    </section>
  );
}

export default React.memo(AccountManagement);
