import React, { useRef, useEffect } from "react";
import axios from "axios";

function Post({ getPosts, post }) {
  const postInfo = useRef();

  const deletePost = async () => {
    const url = "http://localhost:4000/freeboard/" + postInfo.current.id;
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
        <span
          onClick={() => {
            window.location.href = "/freeboard/" + post._id;
          }}
          ref={postInfo}
          id={post._id}
        >
          title:{post.title} / author: {post.author}
        </span>
        <button onClick={deletePost}>❌</button>
      </li>
    </>
  );
}

export default Post;
