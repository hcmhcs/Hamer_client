// eslint-disable-next-line
import React from "react";
import TopMenuBar1 from "./component/Header/TopMenuBar1";

function Header({ loginState, name, adminStatus }) {
  return (
    <TopMenuBar1
      adminStatus={adminStatus}
      loginState={loginState}
      name={name}
    />
  );
}

export default Header;
