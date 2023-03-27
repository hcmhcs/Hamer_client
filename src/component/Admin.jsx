import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [users, setUsers] = useState(null);

  async function getUsers() {
    //   await new Promise((resolve) => {
    //     setTimeout(() => resolve(), 3000);
    //   });
    const response = await axios.get("http://localhost:4000/user/admin");
    setUsers(response.data);
  }
  useEffect(() => {
    console.log(users);
  }, [users]);

  useEffect(() => {
    getUsers();
  }, []);

  if (!users) return null;

  return (
    <>
      <h1>Admin</h1>
      <h3>회원명단</h3>
      {users?.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </>
  );
}
//버튼 누르면 삭제하는 기능
const deleteUser = () => {};
function User({ user }) {
  return (
    <>
      <li>
        <a>이름:{user.name}</a>
        <a>이메일:{user.email}</a>
        <a>이름:{user.name} </a>
        <button onClick={deleteUser}>❌</button>
      </li>
    </>
  );
}

export default Admin;

//맨처음에 get요청을 받아오기전이라 users가 null이라서 null.map이 안됬던 것이다.
//그래서 if(!users) return null을 하던지 아니면 users?.map을 이용하면 된다.
// users?.map은 만약 users가 Null이면 이 map루틴을 안탄다.
