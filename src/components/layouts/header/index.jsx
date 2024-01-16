import React from "react";

import AppIcon from "@/components/apps/AppIcon";

function Header() {
  return (
    <header className="flex flex-row justify-between bg-white sm:flex sm:flex-row sm:items-center sm:justify-end">
      <div className="p-6">Vinh Thai</div>
      <AppIcon
        className="text-red-600 hover:text-blue-500"
        src="/icons/id-card-icon.svg#id"
      />
    </header>
  );
}

export default React.memo(Header);
