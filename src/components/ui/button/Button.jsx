import React from "react";
import "./Button.scss";
const Button = ({ text, outline = false, onClick = () => { }, children }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`button ${outline && "button-outline"}`}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
