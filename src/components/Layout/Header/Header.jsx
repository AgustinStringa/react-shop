import React from "react";
import Logo from "../../Logo/Logo";
import Nav from "../Nav/Nav";
import Cart from "../Cart/Cart";
import "./Header.css";
const Header = () => {
  return (
    <header className="site-header">
      <Nav />
      <Logo width="150px" classes={["header-logo"]} />
      <Cart />
    </header>
  );
};

export default Header;
