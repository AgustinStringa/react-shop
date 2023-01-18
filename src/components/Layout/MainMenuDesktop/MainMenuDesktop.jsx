import React, { useState } from "react";
import IcoDropdown from "../../../assets/icons/dropdown.svg";
import { Link } from "react-router-dom";
import "./MainMenuDesktop.css";
const MainMenuDesktop = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div class="desktop-main-menu">
      <button
        class=""
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        account <img src={IcoDropdown} alt="" />
      </button>
      {showDropdown && (
        <ul>
          <li>
            <Link to="/orders" class="desktop-main-menu__item">
              My orders
            </Link>
          </li>
          <li>
            <Link to="/account" class="desktop-main-menu__item">
              My account
            </Link>
          </li>
          <hr />
          <li>
            <button class="desktop-main-menu__item--logout">Sign out</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MainMenuDesktop;
