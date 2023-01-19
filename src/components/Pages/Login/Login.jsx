import React from "react";
import Button from "../../ui/button/Button";
import InputForm from "../../ui/input-form/InputForm";
import "../../App.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container-login">
      <Logo height="50px" classes={["logo-mobile"]} />
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
          <Link to="/password-recovery" className="form-link forgot-link">
            Forgot my password
          </Link>
        </p>
      </form>

      <Button
        text={"Sign up"}
        outline={true}
        onClick={() => {
          navigate("/signup");
        }}
      ></Button>
    </div>
  );
};

export default Login;
