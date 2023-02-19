import React, { useState } from "react";
import { Link } from "react-router-dom";
const LinkHeader = ({ text, href }) => {
  const [active, setActive] = useState(false);
  return (
    <Link
      to={href}
      className={`category-item ${active ? `active` : ""}`}
      onClick={() => {
        setActive(!active);
      }}
    >
      {text}
    </Link>
  );
};

export default LinkHeader;
