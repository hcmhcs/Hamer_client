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
    nickname: "",
    job: "",
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
        console.log(res.data.message);
        // alert(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>회원가입</h1>
      <Form method="post" onChange={onChange} onSubmit={join}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="string" placeholder="Name" />
          </Form.Group>
        </Row>

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
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Nickname</Form.Label>
            <Form.Control name="nickname" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Job</Form.Label>
            <Form.Select name="job" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Student</option>
              <option>department</option>
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
