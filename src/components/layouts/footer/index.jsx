import React from "react";

function Footer() {
  return (
    <footer className="flex flex-row justify-between p-6 text-[0.875rem] text-black/25">
      <span>2023 © Wiicamp</span>
      <span className="pr-6">Design & Develop by Wiicamp</span>
    </footer>
  );
}

export default React.memo(Footer);
