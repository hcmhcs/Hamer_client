import Button from "react-bootstrap/Button";
import Behind from "./Behind";
import axios from "axios";
import React, { useEffect, useState } from "react";
function ListBehind({ behinds, adminStatus }) {
  const year = window.location.pathname.split("/").pop();

  return (
    <>
      {adminStatus && <h1>{year}년도 임원진 비하인드</h1>}
      {/* {!adminStatus && <h1>{year}년도 역사</h1>} */}
      <div style={{ padding: "10 20px" }}>
        <table>
          <colgroup>
            <col width="15%" />
            <col width="50%" />
            <col width="20%" />
            <col width="*" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일시</th>
              {/* <th>조회수</th> */}
            </tr>
          </thead>
          <tbody>
            {behinds?.map((behind, index) => (
              <Behind behind={behind} key={index} num={index} />
            ))}
          </tbody>
        </table>
      </div>
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

export default ListBehind;
