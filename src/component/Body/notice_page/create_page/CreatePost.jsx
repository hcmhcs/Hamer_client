import Button from "react-bootstrap/Button";
import axios from "axios";
import React, { useState } from "react";

function CreatePost({ name }) {
  const type = "notice";
  const [post, setPost] = useState({
    title: "",
    context: "",
    author: "관리자",
    type,
  });
  const onChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const create = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/notice/create", { post })
      .then((res) => {
        if (res.data.message === "no") {
          alert(res.data.why);
        } else {
          console.log(res.data.message);
          window.location.href = "/notice";
        }
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
      <h1 className="text-3xl font-bold underline m-2">글생성사이트</h1>
      <form method="post" onChange={onChange} onSubmit={create}>
        <div>
          <p>title : </p>
          <input name="title" type="string"></input>
        </div>
        <div>
          <p>context: </p>
          <textarea
            style={{ width: 700, height: 400 }}
            name="context"
            type="string"
          ></textarea>
        </div>
        <div>
          <input
            className=" text-white px-3 m-1 py-1 rounded-md bg-sky-500 hover:bg-sky-700"
            type="submit"
            value="create"
          ></input>
        </div>
      </form>
      <button
        className=" text-white px-3 m-1 py-1 rounded-md bg-sky-500 hover:bg-sky-700"
        onClick={movePage}
      >
        글목록
      </button>
    </>
  );
}

export default CreatePost;
