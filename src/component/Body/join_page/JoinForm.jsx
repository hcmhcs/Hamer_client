// eslint-disable-next-line
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import React, { useState } from "react";

axios.defaults.withCredentials = true;

function JoinForm() {
  const [user, setUser] = useState({
    name: "",
    password: "",
    password2: "",
    email: "",
    studentNumber: "",
    phoneNumber: "",
    adminStatus: "",
  });
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const join = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/join", { user })
      .then((res) => {
        if (res.status === 400 || res.status === 500) {
          alert(res.data.meesage);
        } else if (res.status === 204) {
          alert("다시 로그인해주세요!");
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1 className="text-3xl font-bold underline">회원가입</h1>
      <Form method="post" onChange={onChange} onSubmit={join}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridstudentNumber">
            <Form.Label>학번</Form.Label>
            <Form.Control
              name="studentNumber"
              type="String"
              placeholder="201920693"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="string" placeholder="Name" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="asb123@ajou.ac.kr"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridPassword1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword2">
          <Form.Label>Password again</Form.Label>
          <Form.Control
            name="password2"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridphoneNumber">
            <Form.Label>전화번호</Form.Label>
            <Form.Control name="phoneNumber" placeholder="010-9288-3434" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>adminStatus</Form.Label>
            <Form.Select name="adminStatus" defaultValue="Choose...">
              <option>일반회원</option>
              <option>임원</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default JoinForm;
