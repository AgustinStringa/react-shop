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
  const [formValues, setFormValues] = useState({
    name: user.name,
    email: user.email,
    password: user.password,
  });
  const { name, email, password } = formValues;
  const isLogged = Boolean(user.email);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const nameRef = React.useRef(null);

  const handleChange = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value
    })
  }

  const validateFormAccount = () => {
    const validEmail = Boolean(email);
    const validPassword = Boolean(password);
    const validName = Boolean(name);
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
    return { validEmail, validPassword, validName }
  }
  const loadUser = () => {
    setUser({
      ...user,
      name: name,
      email: email,
      password: password,
    });
    localStorage.setItem('react-shop-user', JSON.stringify({
      name: name,
      email: email,
      password: password,
    }));
  }
  const createAccount = (evt) => {
    evt.preventDefault();
    const { validEmail, validPassword, validName } = validateFormAccount();
    if (!validEmail || !validPassword || !validName) {
      setErrorForm(true);
      return false;
    }
    setErrorForm(false);
    loadUser();
    navigate("/home");
    //TODO REUSE CODE FOR VALIDATE EDIT ACCOUNT
  }

  const handleSubmit = (evt) => {
    if (!isLogged) {
      createAccount(evt);
    } else if (isLogged && editing) {
      editAccount(evt);
    }
  }

  const editAccount = (evt) => {
    evt.preventDefault();
    const { validEmail, validPassword, validName } = validateFormAccount();
    if (!validEmail || !validPassword || !validName) {
      setErrorForm(true);
      return false;
    };
    setErrorForm(false);
    loadUser();
  }
  return (
    <Layout>

      <h1 className="main-title">My account</h1>

      <form action="" className="" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            disabled={isLogged && !editing}
            value={name}
            onChange={handleChange}
            ref={nameRef}
            name="name"
            id="name" type="text" className="input-form" placeholder="Camila Yokoo" />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email address</label>
          <input
            disabled={isLogged && !editing}
            value={email}
            ref={emailRef}
            onChange={handleChange}
            className="input-form"
            type="email" name="email" id="email" placeholder="camilayokoo@gmail.com" />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            disabled={isLogged && !editing}
            value={password}
            onChange={handleChange}
            ref={passwordRef}
            className="input-form"
            name="password"
            type="password" id="password" placeholder="*********" />
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
