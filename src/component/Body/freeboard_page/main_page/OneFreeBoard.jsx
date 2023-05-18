import React, { useState } from "react";

function OneFreeBoard({ post, num }) {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnter = () => {
    setIsHovered(true);
  };
  const mouseLeave = () => {
    setIsHovered(false);
  };

  const listStyle = {
    backgroundColor: isHovered ? "gray" : "white",
    color: isHovered ? "white" : "black",
    cursor: "pointer",
  };
  return (
    <tr
      style={listStyle}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={() => {
        window.location.href = "/freeboard/" + post._id;
      }}
      key={post._id}
    >
      <td>{num + 1}</td>
      <td className="text-left">
        {/* <Link style={{ color: "#909090" }}>{post.title}</Link> */}
        {post.title}
      </td>
      <td>{post.author}</td>
      <td>{post.createdAt.substring(0, 10)}</td>
      {/* <td>{moment(post.date).format("YYYY-MM-DD")}</td> */}
      {/* <td>{post.readCount}</td> */}
    </tr>
  );
}

export default OneFreeBoard;
