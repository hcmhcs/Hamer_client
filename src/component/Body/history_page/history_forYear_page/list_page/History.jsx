import React, { useState } from "react";

function History({ history, num }) {
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
        window.location.href += "/" + history._id;
      }}
      key={history._id}
    >
      <td>{num + 1}</td>
      <td className="text-left">
        {/* <Link style={{ color: "#909090" }}>{post.title}</Link> */}
        {history.title}
      </td>
      <td>{history.author}</td>
      <td>{history.createdAt.substring(0, 10)}</td>

      {/* <td>{moment(post.date).format("YYYY-MM-DD")}</td> */}
      {/* <td>{post.readCount}</td> */}
    </tr>
  );
}

export default History;
