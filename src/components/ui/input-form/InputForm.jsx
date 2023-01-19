import React from "react";
import "./InputForm.css";
const InputForm = ({
  type = "text",
  placeholder = "*****",
  id = "",
  disabled = false,
}) => {
  return (
    <input
      className="input-form"
      type={type}
      name=""
      id={id}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

export default InputForm;
