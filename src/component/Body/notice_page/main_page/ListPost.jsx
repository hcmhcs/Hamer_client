import Button from "react-bootstrap/Button";
import React from "react";
import Post from "./Post";
import Form from "react-bootstrap/Form";

function ListPost({ posts, name, adminStatus }) {
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
      <div className="m-2 p-1" style={{ padding: "10 20px" }}>
        <h2 className=" text-3xl font-bold">공지사항</h2>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
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
      {adminStatus && (
        <button
          className=" text-white px-3 m-1 py-1 rounded-md bg-sky-500 hover:bg-sky-700"
          onClick={createBoard}
        >
          글생성
        </button>
      )}
    </>
  );
}

export default ListPost;
