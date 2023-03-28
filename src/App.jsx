import React, { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {}, [isLogin]);
  return (
    <>
      <Header isLogin={isLogin} />
      <Body />
      <Footer />
    </>
  );
}
export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
