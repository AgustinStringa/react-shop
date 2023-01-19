import React from "react";
import Button from "../../ui/button/Button";
import InputForm from "../../ui/input-form/InputForm";
import "../../App.scss";
const Login = () => {
  return (
    <div className="container-login">
      <h1 className="main-title">Login</h1>
      <form action="" className="sign-up-form">
        <div className="input-field">
          <label htmlFor="password">Email address</label>
          <InputForm type="email" placeholder="camilayokoo@gmail.com" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <InputForm type="password" placeholder="*********" />
        </div>
        <Button text="Log In" />

        <p className="forgot-message">
          <a href="/" className="form-link forgot-link">
            Forgot my password
          </a>
        </p>
      </form>

      <Button text={"Sign up"} outline={true}></Button>
    </div>
  );
};

export default Login;
