import React, { useRef } from "react";
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
      <li className="m-2">
        <span
          onClick={() => {
            window.location.href = "/freeboard/" + post._id;
          }}
          ref={postInfo}
          id={post._id}
        >
          title:{post.title} / author: {post.author}
        </span>
        <button
          className=" m-2 bg-gray-100 hover:bg-gray-300 rounded-md"
          onClick={deletePost}
        >
          ❌
        </button>
      </li>
    </>
  );
}

export default Post;
