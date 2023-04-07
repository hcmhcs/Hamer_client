// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [loginState, setLoginState] = useState({
    isLogin: false,
  });
  const [user, setUser] = useState(null);

  async function getUser(_id) {
    const response = await axios.get("http://localhost:4000/user/" + _id);
    if (response.data.message === "ok") {
      setUser(response.data.user);
    } else {
      console.log(response.data.message);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("LoginUser")) {
      const _id = JSON.parse(localStorage.getItem("LoginUser"))._id;
      const { isLogin } = JSON.parse(localStorage.getItem("LoginUser"));
      getUser(_id);
      setLoginState({ isLogin });
    } else {
      console.log("no user");
    }
  }, []);
  useEffect(() => {
    console.log(user?.name, "님이 접속했습니다.");
  }, [user]);
  return (
    <>
      <Header
        loginState={loginState}
        name={user?.name}
        adminStatus={user?.adminStatus}
      />
      <Body user={user} name={user?.name} />
      <Footer />
    </>
  );
}
export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
