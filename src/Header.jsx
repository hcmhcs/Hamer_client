import React from "react";
import TopMenuBar from "./component/TopMenuBar";

function Header({ isLogin }) {
  return <TopMenuBar isLogin={isLogin} />;
}

export default Header;
