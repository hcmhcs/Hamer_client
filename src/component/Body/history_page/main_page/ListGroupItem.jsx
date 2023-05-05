import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

function ListGroupItem({ movePage, year }) {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnter = () => {
    setIsHovered(true);
  };
  const mouseLeave = () => {
    setIsHovered(false);
  };

  const listStyle = {
    backgroundColor: isHovered ? "blue" : "white",
    color: isHovered ? "white" : "black",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <ListGroup.Item
      onClick={movePage}
      style={listStyle}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {year}
    </ListGroup.Item>
  );
}

export default ListGroupItem;
