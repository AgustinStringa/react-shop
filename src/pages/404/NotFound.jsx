import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>Error 404</h1>
      <h2 className="notfoundmessage">
        Sorry, we could not found your page {`:(`}
      </h2>
      <Link to={"/"}>Click to navigate to Home</Link>
    </div>
  );
};

export default NotFound;
