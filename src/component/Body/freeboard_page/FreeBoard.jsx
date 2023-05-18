import CreateFreeboard from "./create_page/CreateFreeboard";
import DetailFreeboard from "./detail_page/DetailFreeboard";
import ListFreeboard from "./main_page/ListFreeboard";
import React, { useState, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import axios from "axios";
function FreeBoard({ name, adminStatus }) {
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
        <Route path="/" element={<ListFreeboard />} />
        <Route path="/create" element={<CreateFreeboard />} />
        <Route path="/*" element={<DetailFreeboard />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default FreeBoard;
