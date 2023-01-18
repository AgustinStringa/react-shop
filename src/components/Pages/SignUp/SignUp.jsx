import React from "react";
import Button from "../../ui/button/Button";
import InputForm from "../../ui/input-form/InputForm";
import Logo from "../../Logo/Logo";
import "./SignUp.css";
import Layout from "../../Layout/Layout";
import "../../App.scss";

const SignUp = () => {
  return (
    <Layout>
      <div>
        <Logo height="50px" />
        <h1 className="main-title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>

        <form action="" className="sign-up-form">
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <InputForm type="password" placeholder="*********" />
          </div>
          <div className="input-field">
            <label htmlFor="repeat-password">Re-enter password</label>
            <InputForm type="password" placeholder="*********" />
          </div>
          <Button text="Confirm" />
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
