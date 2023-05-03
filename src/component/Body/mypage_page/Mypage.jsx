// eslint-disable-next-line

import React from "react";
import Button from "react-bootstrap/Button";
function Mypage({ user }) {
  if (!localStorage.getItem("LoginUser")) {
    return <h1>잘못된 접근, Login후 접속가능</h1>;
  }
  const _id = JSON.parse(localStorage.getItem("LoginUser"))._id;
  console.log(_id);
  if (user?.adminStatus) {
  }
  return (
    <>
      <h1>myPage입니다</h1>
      <h3>학번 : {user?.studentNumber}</h3>
      <h3>username : {user?.name}</h3>
      <h3>이메일 : {user?.email}</h3>
      <h3>전화번호 : {user?.phoneNumber}</h3>
      {user?.adminStatus && <h3>회원구분 : 임원</h3>}
      {!user?.adminStatus && <h3>회원구분 : 일반회원</h3>}
      <Button variant="primary" size="sm">
        수정
      </Button>{" "}
    </>
  );
}
export default Mypage;
