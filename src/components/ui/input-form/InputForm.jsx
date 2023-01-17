import React from "react";
import "./InputForm.css";
const InputForm = ({ type = "text", placeholder = "*****" }) => {
  return (
    <input
      class="input-form"
      type={type}
      name=""
      id=""
      placeholder={placeholder}
    />
  );
};

export default InputForm;
