import React, { useState } from "react";
import Logo from "Components/Logo/Logo";
import Button from "Components/ui/button/Button";
import { Link } from "react-router-dom";
import ImgEmail from "Images/email.svg";
import "./PasswordRecovery.css";
import Layout from 'Containers/Layout/Layout'
const PasswordRecovery = () => {
  const [emailSent, setEmailSent] = useState(false);
  const sendEmail = () => {
    setEmailSent(true);
  };
  return (
    <Layout>
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
              <input type="email" name="email" id="email"
                placeholder="camilayokoo@gmail.com" />
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

          <div className="container-email-image">
            <img src={ImgEmail} alt="correo" className="email-image" />
          </div>

          <Link to="/login">
            <Button text={"Login"} />
          </Link>

          <p className="resend">
            <span>Didn’t receive the email?</span>
            <a href="/">
              Resend
            </a>
          </p>
        </>
      )}
    </Layout>
  );
};

export default PasswordRecovery;
