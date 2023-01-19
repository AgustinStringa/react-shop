import React from "react";
import Logo from "../../Logo/Logo";
import Nav from "../Nav/Nav";
import Cart from "../Cart/Cart";
import "./Header.css";
import MobileMenu from "../MobileMenu/MobileMenu";
const Header = () => {
  return (
    <div className="header-box">
      <header className="site-header container">
        <Nav MobileMenu={MobileMenu} />
        <Logo width="150px" classes={["header-logo"]} />
        <Cart />
      </header>
    </div>
  );
};

export default Header;
