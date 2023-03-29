import React, { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Header isLogin={isLogin} />
      <Body setIsLogin={setIsLogin} />
      <Footer />
    </>
  );
}
export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
