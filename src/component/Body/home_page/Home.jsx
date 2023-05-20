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
      <div className="m-2 p-1">
        <h1 className="text-3xl font-bold underline m-2">Homepage</h1>
        <span
          className="inline-flex items-center rounded-full p-2 bg-indigo-500 text-white group transition-all duration-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
          role="alert"
          tabIndex="0"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
              clipRule="evenodd"
            />
          </svg>

          <span className="whitespace-nowrap inline-block group-hover:max-w-screen-2xl group-focus:max-w-screen-2xl max-w-0 scale-80 group-hover:scale-100 overflow-hidden transition-all duration-500 group-hover:px-2 group-focus:px-2">
            해머란 ~~~
          </span>
        </span>
        <p>{"서버 연결 성공 유무 : "}</p>
        <span className="text-xl font-semibold">{message}</span>
        {user && (
          <img
            style={{ width: 300 }}
            className="m-3 p-1"
            src="/img/photo1.jpg"
          />
        )}
      </div>
    </>
  );
}

export default Home;
