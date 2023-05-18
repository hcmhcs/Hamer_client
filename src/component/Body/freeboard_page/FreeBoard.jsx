import CreateFreeboard from "./create_page/CreateFreeboard";
import DetailFreeboard from "./detail_page/DetailFreeboard";
import ListFreeboard from "./main_page/ListFreeboard";
import React, { useState, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import axios from "axios";
function FreeBoard({ name }) {
  const [posts, setPosts] = useState(null);

  async function getFreeboard() {
    await axios
      .get("http://localhost:4000/freeboard")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    getFreeboard();
  }, []);
  useEffect(() => {}, [posts]);

  return (
    <>
      <Routes>
        <Route path="/" element={<ListFreeboard posts={posts} name={name} />} />
        <Route path="/create" element={<CreateFreeboard name={name} />} />
        <Route
          path="/*"
          element={<DetailFreeboard name={name} posts={posts} />}
        />
      </Routes>
      <Outlet />
    </>
  );
}

export default FreeBoard;
