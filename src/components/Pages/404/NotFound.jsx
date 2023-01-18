import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>Error 404</h1>
      <h2 className="notfoundmessage">
        Sorry, we could not found your page {`:(`}
      </h2>
    </div>
  );
};

export default NotFound;
