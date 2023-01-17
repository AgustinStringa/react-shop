import React from "react";
import Button from "../ui/button/Button";
import InputForm from "../ui/input-form/InputForm";
import Logo from "../Logo/Logo";
const SignUp = () => {
  return (
    <div>
      <Logo />
      <h1 class="main-title">Create a new password</h1>
      <p class="subtitle">Enter a new password for your account</p>

      <form action="" class="sign-up-form">
        <div class="input-field">
          <label for="password">Password</label>
          <InputForm type="password" placeholder="*********" />
        </div>
        <div class="input-field">
          <label for="repeat-password">Re-enter password</label>
          <InputForm type="password" placeholder="*********" />
        </div>
        <Button text="Confirm" />
      </form>
    </div>
  );
};

export default SignUp;
