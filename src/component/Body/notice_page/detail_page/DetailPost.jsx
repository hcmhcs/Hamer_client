import axios from "axios";
import React, { useState, useEffect } from "react";

function DetailPost({ posts, name }) {
  const id = window.location.pathname.split("/").pop();
  // 이런 함수를 쓸때 조심할점 ! 아직 posts를 받기전이면 posts는 null값이라서
  // find 함수를 못씀 그니까 ?.find()를 사용하기
  const post = posts?.find((obj) => obj._id === id);
  const deletePost = async () => {
    if (!localStorage.getItem("LoginUser")) {
      alert("권한없음");
      window.location.href = "/login";
    } else {
      console.log(post?.author);
      if (post?.author === name) {
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
export default DetailPost;
