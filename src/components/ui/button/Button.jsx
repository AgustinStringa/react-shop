import React from "react";
import "./Button.scss";
const Button = ({ text, outline = false, children }) => {
  return (
    <button className={`button ${outline && "button-outline"}`}>
      {text}
      {children}
    </button>
  );
};

export default Button;
