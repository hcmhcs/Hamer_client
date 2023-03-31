import React, { useEffect, useState } from "react";
import axios from "axios";
function Mypage({ user }) {
  if (!localStorage.getItem("LoginUser")) {
    return <h1>잘못된 접근, Login후 접속가능</h1>;
  }
  const _id = JSON.parse(localStorage.getItem("LoginUser"))._id;
  console.log(_id);

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
