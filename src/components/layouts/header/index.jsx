import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";

function Header({ onOpenDrawSideBar }) {
  return (
    <div className="flex flex-row justify-between p-6 sm:flex sm:flex-row sm:items-center sm:justify-end">
      {" "}
      <Button
        type="text"
        className="block p-0 sm:hidden"
        onClick={onOpenDrawSideBar}
      >
        <img src="/icons/menu-button-logo.svg" alt="wiicamp-logo" />
      </Button>
      <div>Vinh Thai</div>
    </div>
  );
}

export default Header;

Header.propTypes = {
  onOpenDrawSideBar: PropTypes.func.isRequired,
};
