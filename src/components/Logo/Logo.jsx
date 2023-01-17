import React from "react";
import logo from "../../assets/images/logo_yard_sale.svg";
const Logo = ({ width = "auto", height = "auto" }) => {
  return <img src={logo} alt="" width={width} height={height} />;
};

export default Logo;
