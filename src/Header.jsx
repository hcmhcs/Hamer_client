// eslint-disable-next-line
import React from "react";
import TopMenuBar from "./component/TopMenuBar";

function Header({ loginState, name, adminStatus }) {
  return (
    <TopMenuBar adminStatus={adminStatus} loginState={loginState} name={name} />
  );
}

export default Header;
