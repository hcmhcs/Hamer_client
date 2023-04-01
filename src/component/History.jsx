// eslint-disable-next-line

import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Empty from "./Empty";
import pathToRegexp from "path-to-regexp";

function History({ adminStatus }) {
  console.log(adminStatus);
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
          path="/admin/*"
          element={<DetailHistory adminStatus={adminStatus} />}
        />

        <Route path="/*" element={<DetailHistory />} />
      </Routes>
      <Outlet />
    </>
  );
}
function AllHistory({ movePage, moveAdminPage, adminStatus }) {
  return (
    <>
      <h1>해머의 역사페이지</h1>
      <br />
      <h2>년도별 해머의 행적</h2>
      <ListGroup horizontal>
        <ListGroupItem movePage={movePage} year="2018" />
        <ListGroupItem movePage={movePage} year="2019" />
        <ListGroupItem movePage={movePage} year="2020" />
        <ListGroupItem movePage={movePage} year="2021" />
        <ListGroupItem movePage={movePage} year="2022" />
        <ListGroupItem movePage={movePage} year="2023" />
      </ListGroup>
      <br />
      <br />
      <br />
      <br />
      <hr />
      {adminStatus && (
        <>
          <h2>임원진 전용 해머의 비하인드</h2>
          <ListGroup horizontal>
            <ListGroupItem movePage={moveAdminPage} year="2018" />
            <ListGroupItem movePage={moveAdminPage} year="2019" />
            <ListGroupItem movePage={moveAdminPage} year="2020" />
            <ListGroupItem movePage={moveAdminPage} year="2021" />
            <ListGroupItem movePage={moveAdminPage} year="2022" />
            <ListGroupItem movePage={moveAdminPage} year="2023" />
          </ListGroup>
        </>
      )}
    </>
  );
}

function ListGroupItem({ movePage, year }) {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnter = () => {
    setIsHovered(true);
  };
  const mouseLeave = () => {
    setIsHovered(false);
  };

  const listStyle = {
    backgroundColor: isHovered ? "blue" : "white",
    color: isHovered ? "white" : "black",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <ListGroup.Item
      onClick={movePage}
      style={listStyle}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {year}
    </ListGroup.Item>
  );
}

function DetailHistory({ adminStatus }) {
  const year = window.location.pathname.split("/").pop();
  return (
    <>
      {adminStatus && <h1>{year}년도 임원진 비하인드</h1>}
      {!adminStatus && <h1>{year}년도 역사</h1>}
      <Button
        onClick={() => {
          window.location.href = "/history";
        }}
        variant="primary"
        size="sm"
      >
        뒤로가기
      </Button>{" "}
    </>
  );
}
export default History;
