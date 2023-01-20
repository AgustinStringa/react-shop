import React from "react";
import Logo from "Components/Logo/Logo";
import Nav from "Layout/Nav/Nav";
import Cart from "Layout/Cart/Cart";
import "./Header.css";
import MobileMenu from "Layout/MobileMenu/MobileMenu";
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
