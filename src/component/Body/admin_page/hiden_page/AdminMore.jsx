// eslint-disable-next-line

import React, { useState, useEffect } from "react";
import axios from "axios";
import UserMore from "./UserMore";

function AdminMore({ userMe }) {
  const id = userMe?._id;
  const [users, setUsers] = useState(null);
  async function getUsers() {
    const response = await axios.get("http://localhost:4000/user");
    setUsers(response.data);
  }

  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {}, [users]);
  // users?.map 을 안쓰고 그냥 users.map을 쓸때 사용해야됨
  if (!users) return null;
  if (!localStorage.getItem("LoginUser")) {
    return <h1>잘못된 접근, Login후 접속가능</h1>;
  } else if (!userMe?.adminStatus) {
    return <h1>잘못된 접근, Admin만 접속가능</h1>;
  }
  return (
    <>
      <h1 className="text-3xl">Admin</h1>
      <div className="m-1 p-1">
        <h3 className="text-x font-bold">전체회원명단</h3>
        <ul>
          {users?.map((user, index) => (
            <UserMore id={id} user={user} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
}
//버튼 누르면 삭제하는 기능

export default AdminMore;

//맨처음에 get요청을 받아오기전이라 users가 null이라서 null.map이 안됬던 것이다.
//그래서 if(!users) return null을 하던지 아니면 users?.map을 이용하면 된다.
// users?.map은 만약 users가 Null이면 이 map루틴을 안탄다.
