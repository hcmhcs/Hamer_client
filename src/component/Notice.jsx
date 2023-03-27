import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <h1>notice 페이지입니다.</h1>
      <div>
        <ul>
          {posts?.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ul>
      </div>
      <button onClick={() => window.location.href("/notice/create")}>
        글생성
      </button>
      {/* <BrowserRouter>
        <Routes>
          
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
function Post({ post }) {
  return <li>{post.title}</li>;
}
function CreatePost() {
  return (
    <>
      <h1>글생성사이트</h1>
    </>
  );
}

export default Notice;
