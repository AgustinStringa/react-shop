import React from "react";
import "./Button.css";
const Button = ({ text, outline = false }) => {
  return <button className={`${outline && "button-outline"}`}>{text}</button>;
};

export default Button;
