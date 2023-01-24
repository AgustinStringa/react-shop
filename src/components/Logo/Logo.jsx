import React from "react";
import logo from "Images/logo_yard_sale.svg";
import "Styles/Logo.css";
import { Link } from "react-router-dom";
const Logo = ({ width = "auto", height = "auto", classes = [] }) => {
  return (
    <Link to={"/"} className="logo-container">
      <img
        src={logo}
        alt=""
        width={width}
        height={height}
        className={`logo ${classes.map((el) => `${el}`)}`}
      />
    </Link>
  );
};

export default Logo;
