import React from "react";

import AppIcon from "@/components/apps/app-icon";

function AppLoadingPage() {
  return (
    <div className="flex min-h-screen animate-ping flex-row items-center justify-center gap-8 duration-1000">
      <AppIcon
        src="/icons/w-wiicamp-logo.svg#id"
        className="text-primary-1"
        width={100}
        height={100}
      />
      <AppIcon
        src="/icons/wiicamp-name-logo.svg#id"
        className="text-primary-1"
        width={100}
        height={100}
      />
    </div>
  );
}

export default React.memo(AppLoadingPage);
