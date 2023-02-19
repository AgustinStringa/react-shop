import React, { useState } from "react";
import IcoMenu from "Icons/icon_menu.png";
import "Styles/Nav.css";
import CategoryList from "Containers/Layout/CategoryList/CategoryList";
const Nav = ({ MobileMenu }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div className="desktop-nav">
        <CategoryList/>
      </div>
      {/* {********} */}
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
