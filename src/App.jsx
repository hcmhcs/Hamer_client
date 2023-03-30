import React, { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [loginState, setLoginState] = useState({ name: "", isLogin: false });
  useEffect(() => {
    if (localStorage.getItem("LoginUser")) {
      const { name, isLogin } = JSON.parse(localStorage.getItem("LoginUser"));
      setLoginState({
        ...loginState,
        name,
        isLogin,
      });
    } else {
      console.log("no user");
    }
  }, []);
  return (
    <>
      <Header loginState={loginState} />
      <Body />
      <Footer />
    </>
  );
}
export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
