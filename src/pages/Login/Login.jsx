import React, { useEffect, useState, useContext } from "react";
import Button from "Components/ui/button/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "Components/Logo/Logo";
import ErrorFormMessage from 'Components/ui/ErrorFormMessage/ErrorFormMessage'
import Layout from 'Containers/Layout/Layout'
import 'Styles/InputForm.css'
import { ShopContext } from 'Context/ShopContext';

const Login = () => {

  const { user, setUser } = useContext(ShopContext)
  const navigate = useNavigate();
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const [errorForm, setErrorForm] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const emailValue = emailRef.current.value.trim()
    const passwordValue = passwordRef.current.value.trim()
    const validEmail = Boolean(emailValue);
    const validPassword = Boolean(passwordValue);
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
    if (!validEmail || !validPassword) {
      setErrorForm(true);
      return false;
    }
    setErrorForm(false);
    setUser({
      ...user,
      email: emailValue,
      password: passwordValue,
    });
    navigate("/home");
  }
  return (
    <Layout>
      <Logo height="50px" classes={["logo-mobile"]} />
      <h1 className="main-title">Login</h1>
      <form action="" className="sign-up-form" onSubmit={handleSubmit}>
        <div className="input-field" >
          <label htmlFor="password">Email address</label>
          <input className="input-form" type="email" name="" ref={emailRef} placeholder="camilayokoo@gmail.com" id="email" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            className="input-form" type="password" id="password" placeholder="*********" />
        </div>
        {errorForm && <ErrorFormMessage text="Invalid user ID and password combination " />}

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

    </Layout>
  );
};

export default Login;
