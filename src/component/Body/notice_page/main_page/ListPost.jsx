import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import Post from "./Post";

function ListPost({ posts, name }) {
  const createBoard = () => {
    if (!name) {
      alert("글쓰기 권한이 없습니다");
      window.location.href = "/login";
    } else {
      window.location.href = "/notice/create";
    }
  };
  return (
    <>
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
            {posts?.map((post, index) => (
              <Post post={post} key={index} num={index} />
            ))}
          </tbody>
        </table>
      </div>
      {/* <div>
          <ul>
            {posts?.map((post, index) => (
              <Post post={post} key={index} />
            ))}
          </ul>
        </div> */}
      <Button
        style={{ padding: "6px" }}
        variant="primary"
        size="sm"
        onClick={createBoard}
      >
        글생성
      </Button>{" "}
    </>
  );
}

export default ListPost;