import React from "react";
import logo from "../../assets/images/logo_yard_sale.svg";
import "./Logo.css";
const Logo = ({ width = "auto", height = "auto", classes = [] }) => {
  return (
    <img
      src={logo}
      alt=""
      width={width}
      height={height}
      className={`logo ${classes.map((el) => `${el}`)}`}
    />
  );
};

export default Logo;
