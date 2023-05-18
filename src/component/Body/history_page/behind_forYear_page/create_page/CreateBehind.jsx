import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams } from "react-router-dom";

//타입에 따라서 behind인지 history인지 분류해서 post요청보낼생각

function CreateBehind({ adminStatus }) {
  const year = useParams().year;
  //   const type = adminStatus ? "behind" : "history";
  const type = "behind";
  const [behind, setBehind] = useState({
    title: "",
    context: "",
    author: "익명",
    year,
    type,
  });
  const onChange = (e) => {
    setBehind({
      ...behind,
      [e.target.name]: e.target.value,
    });
  };

  const create = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/history/create", { behind })
      .then((res) => {
        if (res.status === 204) {
          alert("글 생성 완료");
          window.location.href = document.referrer;
        } else {
          alert(res.data.why);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1>{year} 년도 비하인드 글생성</h1>
      <form method="post" onChange={onChange} onSubmit={create}>
        <div>
          <p>title : </p>
          <input name="title" type="string"></input>
        </div>
        <div>
          <p>context: </p>
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
      <Button
        onClick={() => {
          window.location.href = document.referrer;
        }}
        variant="primary"
        size="sm"
      >
        글목록
      </Button>{" "}
    </>
  );
}
export default CreateBehind;
