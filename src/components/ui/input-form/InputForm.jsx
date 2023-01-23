import React from "react";
import "./InputForm.css";
const InputForm = ({
  type = "text",
  placeholder = "*****",
  id = null,
}) => {
  return (
    <input
      className="input-form"
      type={type}
      name=""
      id={id}
      placeholder={placeholder}
    />
  );
};

export default InputForm;
