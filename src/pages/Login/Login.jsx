import React, { useRef, useState, useContext } from "react";
import Button from "Components/ui/button/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "Components/Logo/Logo";
import ErrorFormMessage from "Components/ui/ErrorFormMessage/ErrorFormMessage";
import Layout from "Containers/Layout/Layout";
import "Styles/InputForm.css";
import { ShopContext } from "Context/ShopContext";

const Login = () => {
  const { user, setUser } = useContext(ShopContext);
  const navigate = useNavigate();
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const formRef = React.useRef(null);
  const [errorForm, setErrorForm] = useState(null);

  // const validateFormLogin = () => {
  //   const validEmail = Boolean(email);
  //   const validPassword = Boolean(password);
  //   if (!validEmail) {
  //     emailRef.current.parentElement.classList.add("input-field-error");
  //   } else {
  //     emailRef.current.parentElement.classList.remove("input-field-error");
  //   }
  //   if (!validPassword) {
  //     passwordRef.current.parentElement.classList.add("input-field-error");
  //   } else {
  //     passwordRef.current.parentElement.classList.remove("input-field-error");
  //   }
  //   return {
  //     validEmail,
  //     validPassword,
  //   };
  // };

  // const handleChange = (evt) => {
  //   setFormValues({
  //     ...formValues,
  //     [evt.target.name]: evt.target.value,
  //   });
  // };
  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   const { validEmail, validPassword } = validateFormLogin();
  //   if (!validEmail || !validPassword) {
  //     setErrorForm("All fields are required");
  //     return false;
  //   }
  //   //comparar que los datos sean correctos
  //   let USER = {};
  //   if (localStorage.getItem("react-shop-user")) {
  //     USER = JSON.parse(localStorage.getItem("react-shop-user"));
  //   }
  //   if (!USER.email || USER.email !== email) {
  //     setErrorForm("User Not Found");
  //     return false;
  //   } else if (USER.email == email && USER.password == password) {
  //     setErrorForm(null);
  //     navigate("/home");
  //   } else {
  //     setErrorForm("invalid ID and password combination");
  //   }
  // };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(formRef.current);
    formData.append("email", emailRef.current.value);
    formData.append("password", passwordRef.current.value);
  };
  return (
    <Layout>
      <Logo height="50px" classes={["logo-mobile"]} />
      <h1 className="main-title">Login</h1>
      <form
        action=""
        className="sign-up-form"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className="input-field">
          <label htmlFor="password">Email address</label>
          <input
            // value={email}
            // onChange={handleChange}
            className="input-form"
            type="text"
            name="email"
            ref={emailRef}
            placeholder="camilayokoo@gmail.com"
            id="email"
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            // value={password}
            // onChange={handleChange}
            ref={passwordRef}
            className="input-form"
            name="password"
            type="password"
            id="password"
            placeholder="*********"
          />
        </div>
        {errorForm && <ErrorFormMessage text={errorForm} />}

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
