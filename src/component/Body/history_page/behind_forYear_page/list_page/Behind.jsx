import React, { useState } from "react";

function Behind({ behind, num }) {
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
        window.location.href += "/" + behind._id;
      }}
      key={behind._id}
    >
      <td>{num + 1}</td>
      <td className="text-left">
        {/* <Link style={{ color: "#909090" }}>{post.title}</Link> */}
        {behind.title}
      </td>
      <td>{behind.author}</td>
      <td>{behind.createdAt.substring(0, 10)}</td>

      {/* <td>{moment(post.date).format("YYYY-MM-DD")}</td> */}
      {/* <td>{post.readCount}</td> */}
    </tr>
  );
}

export default Behind;
