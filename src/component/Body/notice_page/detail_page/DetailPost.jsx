import axios from "axios";
import React from "react";
import "../../../../App.css";
function DetailPost({ posts, name, adminStatus }) {
  const id = window.location.pathname.split("/").pop();
  // 이런 함수를 쓸때 조심할점 ! 아직 posts를 받기전이면 posts는 null값이라서
  // find 함수를 못씀 그니까 ?.find()를 사용하기
  const post = posts?.find((obj) => obj._id === id);
  const deletePost = async () => {
    if (!localStorage.getItem("LoginUser")) {
      alert("권한없음");
      window.location.href = "/login";
    } else {
      if (adminStatus) {
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
        window.location.href = "/notice";
      } else {
        alert("권한없음");
        window.location.href = "/notice";
      }
    }
  };
  return (
    <>
      <div className="post">
        <h1>제목 : {post?.title}</h1>
        <h2>내용 : </h2>
        <div className="box">
          {post?.context.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        <h3>지은이 : {post?.author}</h3>
      </div>
      <button onClick={() => (window.location.href = "/notice")}>글목록</button>
      {adminStatus && <button onClick={deletePost}>글삭제</button>}
    </>
  );
}
export default DetailPost;
