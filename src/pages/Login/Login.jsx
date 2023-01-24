import React, { useEffect , useState} from "react";
import Button from "Components/ui/button/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "Components/Logo/Logo";
import ErrorFormMessage from 'Components/ui/ErrorFormMessage/ErrorFormMessage'
import Layout from 'Containers/Layout/Layout'
import 'Styles/InputForm.css'
const Login = () => {
  //TODO: SET DISABLED FORM WHEN ERRORFORM 
  const navigate = useNavigate();
  const emailRef = React.useRef(null);
  const [errorForm, setErrorForm] = useState(false);
  React.useEffect(()=>{
    // emailRef.current.parentElement.classList.add("input-field-error");
  },[emailRef])
  return (
    <Layout>

      <Logo height="50px" classes={["logo-mobile"]} />
      <h1 className="main-title">Login</h1>
      <form action="" className="sign-up-form">
        <div className="input-field" >
          <label htmlFor="password">Email address</label>
          <input className="input-form" type="email" name="" ref={emailRef} placeholder="camilayokoo@gmail.com" id="password" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input className="input-form" type="password" id="password" placeholder="*********" />
        </div>
        {errorForm && <ErrorFormMessage text="Invalid user ID and password combination "/>}

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
