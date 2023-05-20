// eslint-disable-next-line
import React, { useState } from "react";
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
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    console.log(user._id, password);
    try {
      await axios
        .post("http://localhost:4000/password", { _id: user._id, password })
        .then((res) => {
          if (res.status === 204) {
            console.log("잘된비밀번호");
            setIsAuthenticated(true);
          }
        });
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    }
  };
  const deleteUser = async () => {
    const url = "http://localhost:4000/user/" + user._id;
    try {
      await axios.delete(url).then((res) => {
        if (res.status === 204) {
          console.log("탈퇴완료");
          localStorage.removeItem("LoginUser");
          alert("로그인을 종료합니다");
          window.location.href = "/";
        } else {
          console.log(res.data.message);
          console.log("유저 삭제 실패");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (!localStorage.getItem("LoginUser")) {
    return <h1>잘못된 접근, Login후 접속가능</h1>;
  }

  return (
    <>
      {!isAuthenticated ? (
        <form onSubmit={handlePasswordSubmit}>
          <label className="m-2">
            비밀번호를 입력하시오:
            <input
              className="m-2"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button
            className=" text-white px-3 py-1 rounded-md bg-sky-500 hover:bg-sky-700"
            type="submit"
          >
            확인
          </button>
        </form>
      ) : (
        <>
          <h1 className="text-3xl font-bold m-3 p-1">myPage</h1>
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
              <button
                className=" text-white px-3 m-1 py-1 rounded-md bg-sky-500 hover:bg-sky-700"
                onClick={handleEditing}
              >
                수정
              </button>
            )}
            {isEdit && (
              <button
                className=" text-white px-3 m-1 py-1 rounded-md bg-sky-500 hover:bg-sky-700"
                type="submit"
              >
                저장
              </button>
            )}
          </form>
          <button
            className=" text-white px-3 py-1 m-1 rounded-md bg-sky-500 hover:bg-sky-700"
            onClick={() => {
              deleteUser();
            }}
          >
            탈퇴하기
          </button>
          <button
            className=" text-white px-3 py-1 m-1 rounded-md bg-sky-500 hover:bg-sky-700"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            홈으로
          </button>
        </>
      )}
    </>
  );
}
export default Mypage;
