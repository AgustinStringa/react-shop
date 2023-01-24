import React from "react";
import Button from "Components/ui/button/Button";
import InputForm from "Components/ui/input-form/InputForm";
import Logo from "Components/Logo/Logo";
import Layout from 'Containers/Layout/Layout'
const NewPassword = () => {
  return (
    <Layout>
        <Logo height="50px" classes={["logo-mobile"]} />
        <h1 className="main-title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>

        <form action="">
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
    </Layout>
  );
};

export default NewPassword;
