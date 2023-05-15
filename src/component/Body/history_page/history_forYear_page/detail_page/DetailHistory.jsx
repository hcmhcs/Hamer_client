import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function DetailHistory({ adminStatus, historys }) {
  const _id = useParams().id;
  const year = useParams().year;
  const history = historys?.find((obj) => obj._id === _id);
  const deleteHistory = async () => {
    if (!adminStatus) {
      alert("관리자 권한 필요");
    } else {
      try {
        await axios
          .delete("http://localhost:4000/history/" + _id)
          .then((res) => {
            if (res.status === 204) {
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
        <h1>제목 : {history?.title}</h1>
        <h3>내용 : {history?.context}</h3>
        <h3>지은이 : {history?.author}</h3>
      </div>
      <button onClick={() => (window.location.href = `/history/${year}`)}>
        글목록
      </button>
      {adminStatus && <button onClick={deleteHistory}>글삭제</button>}
    </>
  );
}
export default DetailHistory;
