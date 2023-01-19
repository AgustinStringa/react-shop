import React from "react";
import Logo from "../../Logo/Logo";
import Button from "../../ui/button/Button";
import InputForm from "../../ui/input-form/InputForm";
import { Link } from "react-router-dom";
const PasswordRecovery = () => {
  return (
    <div className="container-password-recovery">
      <Logo height="50px" classes={["logo-mobile"]} />
      <h1 className="main-title">Password recovery</h1>
      <p className="subtitle">
        Inform the email address used to create your account
      </p>

      <form action="" className="recovery-form">
        <div className="input-field">
          <label htmlFor="email">Email address</label>
          <InputForm
            type="email"
            id="email"
            placeholder="camilayokoo@gmail.com"
          />
        </div>
        <Button text="Submit" />
      </form>
      <p className="back-message">
        <Link to="/login" className="form-link">
          Back to login
        </Link>
      </p>
    </div>
  );
};

export default PasswordRecovery;
