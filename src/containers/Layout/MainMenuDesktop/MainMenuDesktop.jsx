import React, { useState, useContext } from "react";
import IcoDropdown from "Icons/dropdown.svg";
import { Link } from "react-router-dom";
import "Styles/MainMenuDesktop.css";
import { ShopContext } from 'Context/ShopContext'
import { useNavigate } from "react-router-dom";

const MainMenuDesktop = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(ShopContext);
  const isLogged = Boolean(user.email);
  const [showDropdown, setShowDropdown] = useState(false);
  const logOut = () => {
    setUser({
      name: '',
      email: '',
      password: ''
    })
    navigate("/account");
  }
  return (
    <div className="desktop-main-menu">
      <button
        className=""
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        account <img src={IcoDropdown} alt="" />
      </button>
      {showDropdown && (
        <ul>
          {isLogged && <li>
            <Link to="/orders" className="desktop-main-menu__item">
              My orders
            </Link>
          </li>}
          {isLogged ? <>
            <li>
              <Link to="/account" className="desktop-main-menu__item">
                My account
              </Link>
            </li>
            <hr />
          </>
            :
            <li>
              <Link to="/login" className="desktop-main-menu__item">
                Login
              </Link>
            </li>
          }
          <li>
            {isLogged ? <button className="desktop-main-menu__item--logout" onClick={logOut}>
              Sign out
            </button> :
              <button className="desktop-main-menu__item--logout" onClick={() => { navigate("/account") }}>
                Sign Up
              </button>
            }

          </li>
        </ul>
      )}
    </div>
  );
};

export default MainMenuDesktop;
