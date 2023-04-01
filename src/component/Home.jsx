// eslint-disable-next-line

import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {}, [isLogin]);
  function getData() {
    axios
      .get("http://localhost:4000/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <h1>Homepage</h1>
      <h3>test message: {message}</h3>
    </>
  );
}

export default Home;
