import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    getData();
  }, []);
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
      <a>{message}</a>
    </>
  );
}

export default Home;
