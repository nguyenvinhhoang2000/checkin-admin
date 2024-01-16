import React from "react";

function Header() {
  return (
    <div className="flex flex-row justify-between p-6 sm:flex sm:flex-row sm:items-center sm:justify-end">
      <div>Vinh Thai</div>
    </div>
  );
}

export default React.memo(Header);
