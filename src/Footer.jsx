// eslint-disable-next-line
import React from "react";

function Footer() {
  const author = "Changmin Han";
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 text-center text-white bg-sky-500">
        {"Made by "}
        <a className="text-gray-200 underline" href="/changmin">
          {author}
        </a>
      </div>
    </>
  );
}
export default Footer;
