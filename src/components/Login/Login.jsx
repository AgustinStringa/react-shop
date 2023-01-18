import React from "react";
import Button from "../ui/button/Button";
import InputForm from "../ui/input-form/InputForm";
import Logo from "../Logo/Logo";
import Layout from "../Layout/Layout";
import "../App.scss";
const Login = () => {
  return (
    <Layout>
      <div>
        <Logo height="50px" />
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
    </Layout>
  );
};

export default Login;
