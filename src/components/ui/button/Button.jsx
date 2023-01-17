import React from "react";
import "./Button.scss";
const Button = ({ text, outline = false }) => {
  return (
    <button className={`button ${outline && "button-outline"}`}>{text}</button>
  );
};

export default Button;
