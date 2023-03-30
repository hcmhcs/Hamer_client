import React from "react";
import TopMenuBar from "./component/TopMenuBar";

function Header({ loginState }) {
  return <TopMenuBar loginState={loginState} />;
}

export default Header;
