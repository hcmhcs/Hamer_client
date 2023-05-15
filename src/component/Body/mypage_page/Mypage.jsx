// eslint-disable-next-line
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./mypage.css";
function Mypage({ user }) {
  if (!localStorage.getItem("LoginUser")) {
    return <h1>잘못된 접근, Login후 접속가능</h1>;
  }

  return (
    <>
      <h1>myPage입니다</h1>
      <div className="container">
        <div className="item">
          <span>학번 : </span>
          <input value={user?.studentNumber || ""} disabled></input>
        </div>
        <div className="item">
          <span>username : </span>
          <input value={user?.name || ""} disabled></input>
        </div>
        <div className="item">
          <span>이메일 : </span>
          <input value={user?.email || ""} disabled></input>
        </div>
        <div className="item">
          <span>전화번호 : </span>
          <input value={user?.phoneNumber || ""} disabled></input>
        </div>
        <div className="item">
          <span>회원구분 : </span>
          {user?.adminStatus ? (
            <select defaultValue="일반회원">
              <option value="임원" disabled>
                임원
              </option>
              <option value="일반회원" disabled>
                일반회원
              </option>
            </select>
          ) : (
            <select defaultValue="임원">
              <option disabled>임원</option>
              <option disabled>일반회원</option>
            </select>
          )}
        </div>
      </div>
      {/* {user?.adminStatus && <h3>회원구분 : 임원</h3>}
      {!user?.adminStatus && <h3>회원구분 : 일반회원</h3>} */}
      <Button variant="primary" size="sm">
        수정
      </Button>{" "}
    </>
  );
}
export default Mypage;
