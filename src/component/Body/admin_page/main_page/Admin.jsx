// eslint-disable-next-line

import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import Post from "./Post";

function Admin({ user }) {
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState(null);
  async function getUsers() {
    //   await new Promise((resolve) => {
    //     setTimeout(() => resolve(), 3000);
    //   });
    const response = await axios.get("http://localhost:4000/user/normal");
    setUsers(response.data);
  }
  async function getPosts() {
    const response = await axios.get("http://localhost:4000/freeboard");
    setPosts(response.data);
  }
  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {}, [users]);
  useEffect(() => {}, [posts]);
  // users?.map 을 안쓰고 그냥 users.map을 쓸때 사용해야됨
  if (!users) return null;
  if (!localStorage.getItem("LoginUser")) {
    return <h1>잘못된 접근, Login후 접속가능</h1>;
  } else if (!user?.adminStatus) {
    return <h1>잘못된 접근, Admin만 접속가능</h1>;
  }
  return (
    <>
      <h1 className="text-3xl">Admin</h1>
      <div className="m-1 p-1">
        <h3 className="text-x font-bold">일반회원명단</h3>
        <ul>
          {users?.map((user, index) => (
            <User user={user} key={index} />
          ))}
        </ul>
      </div>
      <hr />
      <div className="m-1 p-1">
        <h3 className="text-xl font-bold">자유게시판 글목록</h3>
        <ul>
          {posts?.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
}
//버튼 누르면 삭제하는 기능

export default Admin;

//맨처음에 get요청을 받아오기전이라 users가 null이라서 null.map이 안됬던 것이다.
//그래서 if(!users) return null을 하던지 아니면 users?.map을 이용하면 된다.
// users?.map은 만약 users가 Null이면 이 map루틴을 안탄다.
