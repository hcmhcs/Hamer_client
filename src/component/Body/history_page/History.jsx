// eslint-disable-next-line

import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AllHistory from "./main_page/AllHistory";
import ListGroupItem from "./main_page/ListGroupItem";
import DetailHistory from "./detail_page/DetailHistory";
import CreateBehind from "./create_page/CreateBehind";

import Empty from "../empty_page/Empty";
import pathToRegexp from "path-to-regexp";
import { Badge, useAccordionButton } from "react-bootstrap";

function History({ adminStatus, name }) {
  const [behinds, setBehinds] = useState(null);
  const [historys, setHistorys] = useState(null);

  useEffect(() => {
    getBehinds();
  }, []);

  useEffect(() => {
    getHistorys();
  }, []);

  useEffect(() => {
    console.log("비하인드들", behinds);
  }, [behinds]);
  useEffect(() => {
    console.log("historys:", historys);
  }, [historys]);
  async function getHistorys() {
    await axios
      .get("http://localhost:4000/history")
      .then((response) => {
        setHistorys(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async function getBehinds() {
    await axios
      .get("http://localhost:4000/history/admin")
      .then((response) => {
        setBehinds(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const movePage = (e) => {
    const year = e.target.innerText;
    window.location.href = "/history/" + year;
  };
  const moveAdminPage = (e) => {
    const year = e.target.innerText;
    window.location.href = "/history/admin/" + year;
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AllHistory
              adminStatus={adminStatus}
              movePage={movePage}
              moveAdminPage={moveAdminPage}
            />
          }
        />
        <Route
          path="/admin/create/*"
          element={<CreateBehind adminStatus={adminStatus} />}
        />
        <Route
          path="/admin/*"
          element={<DetailHistory adminStatus={adminStatus} data={behinds} />}
        />
        <Route
          path="/create/*"
          element={<CreateBehind adminStatus={adminStatus} />}
        />
        <Route
          path="/*"
          element={<DetailHistory adminStatus={adminStatus} data={historys} />}
        />
      </Routes>
      <Outlet />
    </>
  );
}

export default History;
