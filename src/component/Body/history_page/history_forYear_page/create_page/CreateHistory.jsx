import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams } from "react-router-dom";

//타입에 따라서 behind인지 history인지 분류해서 post요청보낼생각

function CreateHistory({ adminStatus }) {
  const year = useParams().year;
  //   const type = adminStatus ? "behind" : "history";
  const type = "history";
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
        if (res.status === 400) {
          alert(res.data.why);
        } else if (res.status === 204) {
          alert("글생성완료");
          window.location.href = document.referrer;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1>{year} 년도 행적 글생성</h1>
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
      <Button variant="primary" size="sm">
        글목록
      </Button>{" "}
    </>
  );
}
export default CreateHistory;
