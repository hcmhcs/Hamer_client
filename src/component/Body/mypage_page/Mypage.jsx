// eslint-disable-next-line
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./mypage.css";
import axios from "axios";
function Mypage({ user }) {
  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editUser, setEditUser] = useState({
    name: user?.name,
    email: user?.eamil,
    phoneNumber: user?.phoneNumber,
  });
  const handleEditUserChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleEditUserSubmit = (e) => {
    e.preventDefault();
    console.log(editUser);
    axios
      .post("http://localhost:4000/user/edit", { _id: user?._id, editUser })
      .then((res) => {
        if (res.status === 204) {
          alert("수정완료");
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //여기서 수정 요청보내기
  };
  const handleEditing = () => {
    setIsEdit((prev) => !prev);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (checkPassword(password)) {
      setIsAuthenticated(true);
    } else {
      alert("비밀번호가 잘못되었습니다.");
    }
  };
  const checkPassword = (password) => {
    return password === user?.password;
  };

  if (!localStorage.getItem("LoginUser")) {
    return <h1>잘못된 접근, Login후 접속가능</h1>;
  }

  return (
    <>
      {!isAuthenticated ? (
        <form onSubmit={handlePasswordSubmit}>
          <label>
            비밀번호를 입력하시오:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit">확인</button>
        </form>
      ) : (
        <>
          <h1>myPage</h1>
          {isEdit && <h3>수정중..</h3>}
          <form onSubmit={handleEditUserSubmit} className="container">
            <label className="item">
              <span>학번 : </span>
              <input
                name="studentNumber"
                placeholder={user?.studentNumber || ""}
                disabled
              ></input>
            </label>
            <label className="item">
              <span>username : </span>
              <input
                name="name"
                placeholder={user?.name || ""}
                disabled={!isEdit}
                onChange={handleEditUserChange}
              ></input>
            </label>
            <label className="item">
              <span>이메일 : </span>
              <input
                name="email"
                placeholder={user?.email || ""}
                disabled={!isEdit}
                onChange={handleEditUserChange}
              ></input>
            </label>
            <label className="item">
              <span>전화번호 : </span>
              <input
                name="phoneNumber"
                placeholder={user?.phoneNumber || ""}
                disabled={!isEdit}
                onChange={handleEditUserChange}
              ></input>
            </label>
            <label className="item">
              <span>회원구분 : </span>
              {user?.adminStatus ? (
                <select>
                  <option selected disabled>
                    임원
                  </option>
                  <option disabled>일반회원</option>
                </select>
              ) : (
                <select>
                  <option disabled>임원</option>
                  <option selected disabled>
                    일반회원
                  </option>
                </select>
              )}
            </label>

            {!isEdit && (
              <Button onClick={handleEditing} variant="primary" size="sm">
                수정
              </Button>
            )}
            {isEdit && (
              <Button type="submit" variant="primary" size="sm">
                저장
              </Button>
            )}
          </form>
          <Button
            onClick={() => {
              window.location.href = "/";
            }}
          >
            홈으로
          </Button>
        </>
      )}
    </>
  );
}
export default Mypage;
