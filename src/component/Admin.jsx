import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState(null);
  async function getUsers() {
    //   await new Promise((resolve) => {
    //     setTimeout(() => resolve(), 3000);
    //   });
    const response = await axios.get("http://localhost:4000/user");
    setUsers(response.data);
  }
  async function getPosts() {
    const response = await axios.get("http://localhost:4000/notice");
    setPosts(response.data);
  }
  useEffect(() => {
    getPosts();
  }, [posts]);

  useEffect(() => {
    getUsers();
  }, [users]);
  // users?.map 을 안쓰고 그냥 users.map을 쓸때 사용해야됨
  if (!users) return null;

  return (
    <>
      <h1>Admin</h1>
      <div>
        <h3>회원명단</h3>
        <ul>
          {users?.map((user, index) => (
            <User user={user} key={index} />
          ))}
        </ul>
      </div>
      <div>
        <h3>글목록</h3>
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

function User({ user }) {
  // const deleteUser = (id) => {
  //   console.log(id);
  // };
  return (
    <>
      <li>
        <a>이름:{user.name}</a>
        <a>이메일:{user.email}</a>
        <a>이름:{user.name} </a>
        <button
          onClick={() => {
            console.log("유저삭제");
          }}
        >
          ❌
        </button>
      </li>
    </>
  );
}
function deletePost(e) {
  console.log(e.target.parentNode);
  console.log("글삭제");
}
function Post({ post }) {
  return (
    <>
      <li>
        <a>title:{post.title}</a>
        <button onClick={deletePost}>❌</button>
      </li>
    </>
  );
}

export default Admin;

//맨처음에 get요청을 받아오기전이라 users가 null이라서 null.map이 안됬던 것이다.
//그래서 if(!users) return null을 하던지 아니면 users?.map을 이용하면 된다.
// users?.map은 만약 users가 Null이면 이 map루틴을 안탄다.
