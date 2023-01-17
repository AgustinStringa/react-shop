import React from "react";
import Button from "../ui/button/Button";
import InputForm from "../ui/input-form/InputForm";
import Logo from "../Logo/Logo";
const Login = () => {
  return (
    <div>
      <Logo height="50px" />
      <form action="" class="sign-up-form">
        <div class="input-field">
          <label for="password">Email address</label>
          <InputForm type="email" placeholder="camilayokoo@gmail.com" />
        </div>
        <div class="input-field">
          <label for="password">Password</label>
          <InputForm type="password" placeholder="*********" />
        </div>
        <Button text="Log In" />

        <p class="forgot-message">
          <a href="/" class="form-link forgot-link">
            Forgot my password
          </a>
        </p>
      </form>

      <Button text={"Sign up"} outline={true}></Button>
    </div>
  );
};

export default Login;
