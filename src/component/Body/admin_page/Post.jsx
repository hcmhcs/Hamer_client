import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Post({ getPosts, post }) {
  const postInfo = useRef();
  const deletePost = async () => {
    const url = "http://localhost:4000/notice/" + postInfo.current.id;
    try {
      await axios.delete(url).then((res) => {
        if (res.data.message === "ok") {
          console.log("공지사항 삭제 완료");
        } else {
          console.log(res.data.message);
          console.log("공지사항 삭제완료");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <li>
        <a
          onClick={() => {
            window.location.href = "/notice/" + post._id;
          }}
          ref={postInfo}
          id={post._id}
        >
          title:{post.title} / author: {post.author}
        </a>
        <button onClick={deletePost}>❌</button>
      </li>
    </>
  );
}

export default Post;
