import React from "react";

import UserDropdown from "./user-dropdown";

function UserInfo() {
  return (
    <div className="flex flex-row gap-2">
      <div className="hidden sm:flex sm:flex-row sm:items-center sm:gap-2">
        <UserDropdown />
      </div>
    </div>
  );
}

export default UserInfo;
