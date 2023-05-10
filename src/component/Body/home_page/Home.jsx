/*eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home({ user }) {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {}, [message]);
  function getData() {
    axios
      .get("http://localhost:4000/")
      .then((response) => {
        if (response.status === 200) {
          setMessage(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <h1>Homepage</h1>
      <h3>test message: {message}</h3>
      {user && <p> ⬇️ ⬇️ 로그인한 사람만 보이지롱 ⬇️ ⬇️</p>}
      {user && (
        <img
          style={{ width: 300 }}
          className="HamerMembers"
          src="/img/photo1.jpg"
        />
      )}
    </>
  );
}

export default Home;
