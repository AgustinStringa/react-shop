import React from "react";
import Logo from "Components/Logo/Logo";
import Nav from "Containers/Layout/Nav/Nav";
import Cart from "Containers/Layout/Cart/Cart";
import "Styles/Header.css";
import MobileMenu from "Containers/Layout/MobileMenu/MobileMenu";
const Header = () => {
  return (
    <div className="header-box">
      <header className="site-header">
        <Nav MobileMenu={MobileMenu} />
        <Logo width="150px" classes={["header-logo"]} />
        <Cart />
      </header>
    </div>
  );
};

export default Header;
