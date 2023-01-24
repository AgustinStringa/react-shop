import React from "react";
import Layout from "Containers/Layout/Layout";
import Button from "Components/ui/button/Button";
import InputForm from "Components/ui/input-form/InputForm";
const Account = () => {
  return (
    <Layout>
      <div className="container account-container">
        <h1 className="main-title">My account</h1>

        <form action="" className="create-account-form">
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <InputForm type="text" placeholder="Camila Yokoo" disabled={true} />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email address</label>
            <InputForm
              type="email"
              placeholder="camilayokoo@gmail.com"
              disabled={true}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <InputForm
              type="password"
              placeholder="*********"
              disabled={true}
            />
          </div>
        </form>

        <Button text="Edit" outline={true} />
      </div>
    </Layout>
  );
};

export default Account;
