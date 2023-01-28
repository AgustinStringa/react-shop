import React, { useState } from "react";
import IcoDropdown from "Icons/dropdown.svg";
import { Link } from "react-router-dom";
import "Styles/MainMenuDesktop.css";

const MainMenuDesktop = () => {
  const [showDropdown, setShowDropdown] = useState(false);
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
          <li>
            <Link to="/orders" className="desktop-main-menu__item">
              My orders
            </Link>
          </li>
          <li>
            <Link to="/account" className="desktop-main-menu__item">
              My account
            </Link>
          </li>
          <hr />
          <li>
            <button className="desktop-main-menu__item--logout">
              Sign out
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MainMenuDesktop;
