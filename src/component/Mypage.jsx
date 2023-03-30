import React, { useEffect, useState } from "react";
import axios from "axios";
function Mypage() {
  const _id = JSON.parse(localStorage.getItem("LoginUser"))._id;
  console.log(_id);
  const [user, setUser] = useState(null);
  async function getUser() {
    const response = await axios.get("http://localhost:4000/user/" + _id);
    if (response.data.message === "ok") {
      setUser(response.data.user);
    } else {
      console.log("안불러와짐");
    }
  }
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1>myPage입니다</h1>
      <h3>학번 : {user?.studentNumber}</h3>
      <h3>username : {user?.name}</h3>
      <h3>이메일 : {user?.email}</h3>
      <h3>전화번호 : {user?.phoneNumber}</h3>
      <button>수정</button>
    </>
  );
}
export default Mypage;
