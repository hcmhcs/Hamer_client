import React, { useRef } from "react";
import axios from "axios";

function User({ user }) {
  const userInfo = useRef();

  const deleteUser = async () => {
    const url = "http://localhost:4000/user/" + userInfo.current.id;
    try {
      await axios.delete(url).then((res) => {
        if (res.status === 204) {
          console.log("유저삭제완료");
        } else {
          console.log(res.data.message);
          console.log("유저 삭제 실패");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <li className=" m-2">
        <span>
          이름:{user.name} /이메일:{user.email} /
        </span>
        <span ref={userInfo} id={user._id}>
          학번:{user.studentNumber}{" "}
        </span>
        <button
          className="bg-gray-100 hover:bg-gray-300 m-2 rounded-md"
          onClick={deleteUser}
        >
          ❌
        </button>
      </li>
    </>
  );
}

export default User;
