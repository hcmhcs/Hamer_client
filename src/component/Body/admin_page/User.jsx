import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function User({ user }) {
  const userInfo = useRef();
  const deleteUser = async () => {
    const url = "http://localhost:4000/user/" + userInfo.current.id;
    try {
      await axios.delete(url).then((res) => {
        if (res.data.message === "ok") {
          console.log("유저삭제완료");
        } else {
          console.log(res.data.message);
          console.log("유저 삭제 실패");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <li>
        <a>이름:{user.name} /</a>
        <a>이메일:{user.email} /</a>
        <a ref={userInfo} id={user._id}>
          학번:{user.studentNumber}{" "}
        </a>
        <button onClick={deleteUser}>❌</button>
      </li>
    </>
  );
}

export default User;
