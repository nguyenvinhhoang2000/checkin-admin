import React from "react";

function Header() {
  return (
    <header className="flex flex-row justify-between bg-white sm:flex sm:flex-row sm:items-center sm:justify-end">
      <div className="p-6">Vinh Thai</div>
    </header>
  );
}

export default React.memo(Header);
