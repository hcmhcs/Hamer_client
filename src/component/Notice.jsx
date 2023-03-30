import React, { useState, useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import axios from "axios";

function Notice() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    getPost();
  }, [posts]);
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

  return (
    <>
      <Routes>
        <Route path="/" element={<ListPost posts={posts} />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/*" element={<DetailPost posts={posts} />} />
      </Routes>
      <Outlet />
    </>
  );
}

function ListPost({ posts }) {
  const createBoard = () => {
    if (!JSON.parse(localStorage.getItem("LoginUser"))) {
      alert("글쓰기 권한이 없습니다");
      window.location.href = "/login";
    } else {
      window.location.href = "/notice/create";
    }
  };
  return (
    <>
      <div>
        <ul>
          {posts?.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ul>
      </div>
      <button onClick={createBoard}>글생성</button>
    </>
  );
}

function Post({ post }) {
  const url = "/notice/" + post._id;
  const moveDetail = () => {
    window.location.href = url;
  };
  return <li onClick={moveDetail}>title :{post.title}</li>;
}

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    context: "",
    author: "",
  });
  const onChange = (e) => {
    const { name } = JSON.parse(localStorage.getItem("LoginUser"));
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
      <button onClick={movePage}>글 목록</button>
    </>
  );
}
function DetailPost({ posts }) {
  const id = window.location.pathname.split("/").pop();
  // 이런 함수를 쓸때 조심할점 ! 아직 posts를 받기전이면 posts는 null값이라서
  // find 함수를 못씀 그니까 ?.find()를 사용하기
  const post = posts?.find((obj) => obj._id === id);
  const deletePost = async () => {
    if (!localStorage.getItem("LoginUser")) {
      alert("권한없음");
      window.location.href = "/login";
    } else {
      const LoginUser = JSON.parse(localStorage.getItem("LoginUser"));
      console.log(post?.author);
      console.log(LoginUser.name);
      if (post?.author === LoginUser.name) {
        try {
          await axios
            .delete("http://localhost:4000/notice/" + id)
            .then((res) => {
              if (res.data.message === "ok") {
                console.log("삭제완료");
                window.location.href = "/notice";
              } else {
                console.log(res.data.message);
                console.log("삭제 실패");
              }
            });
        } catch (err) {
          console.log(err);
        }
        alert("삭제해줄게용");
      } else {
        alert("권한없음");
        window.location.href = "/notice";
      }
    }
  };
  return (
    <>
      <div>
        <h1>제목 : {post?.title}</h1>
        <h3>내용 : {post?.context}</h3>
        <h3>지은이 : {post?.author}</h3>
      </div>
      <button onClick={() => (window.location.href = "/notice")}>글목록</button>
      <button onClick={deletePost}>글삭제</button>
    </>
  );
}
export default Notice;
