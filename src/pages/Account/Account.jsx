import React from "react";
import Layout from "Containers/Layout/Layout";
import Button from "Components/ui/button/Button";

const Account = () => {
  return (
    <Layout>
      
        <h1 className="main-title">My account</h1>

        <form action="" className="">
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" className="input-form" placeholder="Camila Yokoo" />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" id="email" placeholder="camilayokoo@gmail.com"/>
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
      
    </Layout>
  );
};

export default Account;
