import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Changmin() {
  //이스터 에그
  const name = useParams().name;
  const [fullName, setFullName] = useState("");
  const checkName = () => {
    if (name === "changmin") {
      setFullName("한창민");
    } else if (name === "haechan") {
      setFullName("이해찬");
    } else if (name == "sungjin") {
      setFullName("배성진");
    } else if (name == "yongseong") {
      setFullName("우용승");
    } else if (name === "jaeheon") {
      setFullName("이재현");
    } else {
      setFullName("없음");
    }
  };
  useEffect(() => {
    checkName();
  }, []);

  return (
    <>
      {fullName === "없음" && <p>이상한 주소로 접근</p>}
      {fullName !== "없음" && (
        <>
          <h1 className="text-3xl font-bold">{fullName}</h1>
          <h3>그가 누구인가</h3>
          <p>궁금하다면 해머 홈커밍데이에 참석해라</p>
        </>
      )}
    </>
  );
}
export default Changmin;
