import React from "react";
import Logo from "../../Logo/Logo";
import Nav from "../Nav/Nav";
import Cart from "../Cart/Cart";
import "./Header.css";
import MobileMenu from "../MobileMenu/MobileMenu";
const Header = () => {
  return (
    <header className="site-header">
      <Nav MobileMenu={MobileMenu} />
      <Logo width="150px" classes={["header-logo"]} />
      <Cart />
    </header>
  );
};

export default Header;
