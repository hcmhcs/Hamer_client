import Button from "react-bootstrap/Button";
import axios from "axios";
import React, { useState, useEffect } from "react";

function CreatePost({ name }) {
  const [post, setPost] = useState({
    title: "",
    context: "",
    author: "",
  });
  const onChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
      author: name,
    });
  };

  const create = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/notice/create", { post })
      .then((res) => {
        console.log(res.data.message);
        window.location.href = "/notice";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const movePage = () => {
    window.location.href = "/notice";
  };
  return (
    <>
      <h1>글생성사이트</h1>
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
      <Button onClick={movePage} variant="primary" size="sm">
        글목록
      </Button>{" "}
    </>
  );
}

export default CreatePost;
