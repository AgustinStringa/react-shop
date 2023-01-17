import React from "react";
import "./InputForm.css";
const InputForm = ({ type = "text", placeholder = "*****" }) => {
  return (
    <input
      className="input-form"
      type={type}
      name=""
      placeholder={placeholder}
    />
  );
};

export default InputForm;
