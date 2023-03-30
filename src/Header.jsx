import React from "react";
import TopMenuBar from "./component/TopMenuBar";

function Header({ loginState, name }) {
  return <TopMenuBar loginState={loginState} name={name} />;
}

export default Header;
