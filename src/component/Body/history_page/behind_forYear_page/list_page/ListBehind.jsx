import Button from "react-bootstrap/Button";
import Behind from "./Behind";
import React from "react";
import { useParams } from "react-router-dom";

function ListBehind({ behinds, adminStatus }) {
  const year = useParams().year;
  return (
    <>
      <h1 className="text-xl font-bold">{year}년도 임원진 비하인드</h1>
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
        <button
          className=" text-white px-3 m-1 py-1 rounded-md bg-sky-500 hover:bg-sky-700"
          onClick={() => {
            window.location.href = year + "/create";
          }}
        >
          글생성
        </button>
      )}
      <button
        className=" text-white px-3 m-1 py-1 rounded-md bg-sky-500 hover:bg-sky-700"
        onClick={() => {
          window.location.href = "/history";
        }}
      >
        뒤로가기
      </button>
    </>
  );
}

export default ListBehind;
