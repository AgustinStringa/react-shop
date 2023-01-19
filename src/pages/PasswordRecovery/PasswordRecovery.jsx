import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/ui/button/Button";
import InputForm from "../../components/ui/input-form/InputForm";
import { Link } from "react-router-dom";
import ImgEmail from "../../assets/images/email.svg";
import "./PasswordRecovery.css";
const PasswordRecovery = () => {
  const [emailSent, setEmailSent] = useState(false);
  const sendEmail = () => {
    setEmailSent(true);
  };
  return (
    <div className="container-password-recovery">
      <Logo height="50px" classes={["logo-mobile"]} />

      {!emailSent ? (
        <>
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
            <Button text="Submit" onClick={() => sendEmail()} />
          </form>
          <p className="back-message">
            <Link to="/login" className="form-link">
              Back to login
            </Link>
          </p>
        </>
      ) : (
        <>
          <h1 className="main-title">Email has been sent!</h1>
          <p className="subtitle">
            Please check your inbox for instructions on how to reset the
            password
          </p>

          <div class="container-email-image">
            <img src={ImgEmail} alt="correo" class="email-image" />
          </div>

          <Link to="/login">
            <Button text={"Login"} />
          </Link>

          <p class="resend">
            <span>Didn’t receive the email?</span>
            <a href="/" class="form-link">
              Resend
            </a>
          </p>
        </>
      )}
    </div>
  );
};

export default PasswordRecovery;
