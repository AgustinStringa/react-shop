import React, { useContext, useState, useRef } from "react";
import Layout from "Containers/Layout/Layout";
import Button from "Components/ui/button/Button";
import { ShopContext } from 'Context/ShopContext'
import ErrorFormMessage from 'Components/ui/ErrorFormMessage/ErrorFormMessage'
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(ShopContext);
  const [editing, setEditing] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  const isLogged = Boolean(user.email);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const nameRef = React.useRef(null);
  // const isLogged = true;

  // DEBERIA GUARDAR POR PRIMERA VEZ EN ALGUN LADO, [LOCALSTORAGE]
  const createAccount = (evt) => {
    evt.preventDefault();
    const emailValue = emailRef.current.value.trim()
    const passwordValue = passwordRef.current.value.trim()
    const nameValue = nameRef.current.value.trim()
    const validEmail = Boolean(emailValue);
    const validPassword = Boolean(passwordValue);
    const validName = Boolean(nameValue);
    if (!validName) {
      nameRef.current.parentElement.classList.add("input-field-error");
    } else {
      nameRef.current.parentElement.classList.remove("input-field-error");
    }
    if (!validEmail) {
      emailRef.current.parentElement.classList.add("input-field-error");
    } else {
      emailRef.current.parentElement.classList.remove("input-field-error");
    }
    if (!validPassword) {
      passwordRef.current.parentElement.classList.add("input-field-error");
    } else {
      passwordRef.current.parentElement.classList.remove("input-field-error");
    }
    if (!validEmail || !validPassword || !validName) {
      setErrorForm(true);
      return false;
    }
    setErrorForm(false);
    setUser({
      ...user,
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
    navigate("/home");
    //TODO REUSE CODE FOR VALIDATE EDIT ACCOUNT
  }

  // DEBERIA EDITAR EN ALGUN LADO, [LOCALSTORAGE]
  const editAccount = () => { }
  return (
    <Layout>

      <h1 className="main-title">My account</h1>

      <form action="" className="" onSubmit={createAccount}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            disabled={isLogged}
            // value={user.name}
            ref={nameRef}
            id="name" type="text" className="input-form" placeholder="Camila Yokoo" />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email address</label>
          <input
            disabled={isLogged}
            // value={user.email}
            ref={emailRef}

            className="input-form"
            type="email" name="email" id="email" placeholder="camilayokoo@gmail.com" />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            disabled={isLogged}
            // value={user.password}
            ref={passwordRef}
            className="input-form"
            type="password" name="" id="password" placeholder="*********" />
        </div>

        {errorForm && <ErrorFormMessage text="All fields are required " />}

        {(isLogged && !editing) && <Button text="Edit" outline={true} onClick={() => { setEditing(true) }} />}
        {(!isLogged && !editing) && <Button text="create" outline={false} />}
        {editing && <Button text="Save" outline={false} />}
      </form>


    </Layout>
  );
};

export default Account;
