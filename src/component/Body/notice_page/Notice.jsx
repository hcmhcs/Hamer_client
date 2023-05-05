// eslint-disable-next-line

import React, { useState, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import axios from "axios";
import CreatePost from "./create_page/CreatePost";
import DetailPost from "./detail_page/DetailPost";
import ListPost from "./main_page/ListPost";

//글목록 react-bootstrap의 accordion
function Notice({ name }) {
  const [posts, setPosts] = useState(null);

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
  useEffect(() => {
    getPost();
  }, []);
  useEffect(() => {}, [posts]);

  return (
    <>
      <Routes>
        <Route path="/" element={<ListPost posts={posts} name={name} />} />
        <Route path="/create" element={<CreatePost name={name} />} />
        <Route path="/*" element={<DetailPost posts={posts} name={name} />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default Notice;
