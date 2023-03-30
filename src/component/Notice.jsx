import React, { useState, useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import axios from "axios";

function Notice() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    getPost();
  }, [posts]);
  async function getPost() {
    await axios
      .get("http://localhost:4000/notice")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<ListPost posts={posts} />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
      <Outlet />
    </>
  );
}

function ListPost({ posts }) {
  const createBoard = () => {
    if (!JSON.parse(localStorage.getItem("LoginUser"))) {
      console.log("글쓰기 권한이 없습니다");
    } else {
      window.location.href = "/notice/create";
    }
  };
  return (
    <>
      <div>
        <ul>
          {posts?.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ul>
      </div>
      <button onClick={createBoard}>글생성</button>
    </>
  );
}

function Post({ post }) {
  // const [id, setId] = useState(null);

  // const moveDetail = (_id) => {
  //   setId(_id);
  //   window.location.href = "/notice/detail/" + id;
  // };
  return <li>title :{post.title}</li>;
}

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    context: "",
  });
  const onChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  const create = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/notice/create", { post })
      .then((res) => {
        console.log(res.data.message);
        window.location.href = "/notice";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const movePage = () => {
    window.location.href = "/notice";
  };
  return (
    <>
      <h1>글생성사이트</h1>

      <form method="post" onChange={onChange} onSubmit={create}>
        <div>
          <a>title : </a>
          <input name="title" type="string"></input>
        </div>
        <div>
          <a>context: </a>
          <input
            style={{ width: 700, height: 400 }}
            name="context"
            type="string"
          ></input>
        </div>
        <div>
          <input type="submit" value="create"></input>
        </div>
      </form>
      <button onClick={movePage}>글 목록</button>
    </>
  );
}

export default Notice;
