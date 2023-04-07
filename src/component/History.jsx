// eslint-disable-next-line

import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Empty from "./Empty";
import pathToRegexp from "path-to-regexp";
import axios from "axios";
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
          path="/*"
          element={<DetailHistory adminStatus={adminStatus} data={historys} />}
        />
      </Routes>
      <Outlet />
    </>
  );
}
function AllHistory({ movePage, moveAdminPage, adminStatus }) {
  return (
    <>
      <h1>해머의 역사페이지</h1>
      <h3>해머란? </h3>
      <a>
        - HaMer는 Hacking Merits(해킹의 진수)의 약자로, 해킹을 좋아하고 같이
        공부하려는 학생들이 모인 소학회입니다. 사이버보안학과 산하의 소학회로서,
        저희 소학회의 목적과 취지는 사이버보안학과, 소프트웨어학과 등 IT에
        관심이 있는 학생들의 프로그래밍적 능력을 향상시켜 훌륭한 프로그래머로
        성장하고자 하며, 진입장벽이 높은 사이버 보안 공부를 함께하며, 각종
        사이버보안 대응 능력 성장에 힘쓰는 동시에 학생들의 단합 등을 통한
        대학생활을 전반적으로 적응하도록 돕는데 있습니다.
      </a>
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
      {adminStatus && (
        <Button
          onClick={() => {
            window.location.href = "create/" + year;
          }}
          variant="primary"
          size="sm"
        >
          글생성
        </Button>
      )}
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
//현재 관리자상태에 따라 글생성이게 확인이 안됨
function CreateBehind({ adminStatus }) {
  const year = window.location.pathname.split("/").pop();
  //   const type = adminStatus ? "behind" : "history";
  const type = "behind";
  const [behind, setBehind] = useState({
    title: "",
    context: "",
    author: "익명",
    year,
    type,
  });
  const onChange = (e) => {
    setBehind({
      ...behind,
      [e.target.name]: e.target.value,
    });
  };
  console.log(adminStatus);
  console.log(behind);
  const create = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/history/create", { behind })
      .then((res) => {
        alert(res.data.message);
        window.location.href = document.referrer;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1>{year} 년도 비하인드 글생성</h1>
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
      <Button variant="primary" size="sm">
        글목록
      </Button>{" "}
    </>
  );
}
function BehindList() {}
export default History;
