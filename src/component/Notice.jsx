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
  return (
    <>
      <div>
        <ul>
          {posts?.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ul>
      </div>
      <button onClick={() => (window.location.href = "/notice/create")}>
        글생성
      </button>
    </>
  );
}

function Post({ post }) {
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
        window.location.href = "http://localhost:3002/notice";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const movePage = () => {
    window.location.href = "http://localhost:3002/notice";
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
