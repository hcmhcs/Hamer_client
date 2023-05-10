// eslint-disable-next-line
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React, { useState } from "react";
import axios from "axios";
function LoginForm() {
  const [user, setUser] = useState({
    studentNumber: "",
    password: "",
  });
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", { user })
      .then((res) => {
        if (res.status === 400) {
          if (res.data.message) {
            alert(res.data.message);
          } else {
            alert("학번이나 비밀번호를 입력해주세요");
          }
        } else if (res.status === 404) {
          alert("가입되지 않은 학번입니다.");
        } else if (res.status === 200) {
          const { isLogin, _id } = res.data;
          localStorage.setItem("LoginUser", JSON.stringify({ isLogin, _id }));
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>로그인</h1>
      <Form method="post" onChange={onChange} onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicstudentNumber">
          <Form.Label>StudentNumber</Form.Label>
          <Form.Control
            name="studentNumber"
            type="string"
            placeholder="201920693"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="자동로그인" />
          {/* 자동로그인 구현해놓기 아직안함 */}
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text
          onClick={() => (window.location.href = "/join")}
          className="text-muted"
        >
          회원이 아니신가요?
        </Form.Text>
      </Form>
    </>
  );
}

export default LoginForm;
