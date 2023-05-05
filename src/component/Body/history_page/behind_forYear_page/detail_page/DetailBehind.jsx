import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function DetailBehind({ adminStatus, behinds }) {
  const _id = useParams().id;
  const year = useParams().year;
  const behind = behinds?.find((obj) => obj._id === _id);
  const deleteBehind = async () => {
    if (!adminStatus) {
      alert("관리자 권한 필요");
    } else {
      try {
        await axios
          .delete("http://localhost:4000/history/" + _id)
          .then((res) => {
            if (res.data.message === "ok") {
              console.log("삭제완료");
              window.location.href = document.referrer;
            } else {
              console.log(res.data.message);
              console.log("삭제실패");
            }
          });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div>
        <h1>제목 : {behind?.title}</h1>
        <h3>내용 : {behind?.context}</h3>
        <h3>지은이 : {behind?.author}</h3>
      </div>
      <button onClick={() => (window.location.href = `/history/admin/${year}`)}>
        글목록
      </button>
      {adminStatus && <button onClick={deleteBehind}>글삭제</button>}
    </>
  );
}
export default DetailBehind;
