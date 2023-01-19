import React, { useState } from "react";
import IcoMenu from "../../../assets/icons/icon_menu.png";
import LinkHeader from "../LinksHeader/LinkHeader";
import "./Nav.css";
const Nav = ({ MobileMenu }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <nav className="desktop-nav">
        <ul>
          <li className="category-item">
            <LinkHeader text={"All"} href={"/"} />
          </li>
          <li>
            <LinkHeader text={"Clothes"} href={"/"} />
          </li>
          <li>
            <LinkHeader text={"Electronics"} href={"/"} />
          </li>
          <li>
            <LinkHeader text={"Furnitures"} href={"/"} />
          </li>
          <li>
            <LinkHeader text={"Toys"} href={"/"} />
          </li>
          <li>
            <LinkHeader text={"Others"} href={"/"} />
          </li>
        </ul>
      </nav>
      {/* {asdasd} */}
      <div className="mobile-nav">
        <img
          src={IcoMenu}
          alt=""
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
        {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
      </div>
    </>
  );
};

export default Nav;
