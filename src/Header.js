import React from "react";
import TopMenuBar from "./component/TopMenuBar";

function Header({ loggedIn }) {
  return <TopMenuBar loggedIn={loggedIn} />;
}

export default Header;
