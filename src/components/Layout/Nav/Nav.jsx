import React, { useState } from "react";
import IcoMenu from "../../../assets/icons/icon_menu.png";
import IcoClose from "../../../assets/icons/icon_close.png";
import LinkHeader from "../LinksHeader/LinkHeader";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
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
        {showMobileMenu && (
          <div>
            <header>
              <h2>CATEGORIES</h2>
              <img
                src={IcoClose}
                alt=""
                onClick={() => setShowMobileMenu(false)}
              />
            </header>
            <nav className="category-list-mobile">
              <ul className="">
                <li className="category-item-mobile">
                  <a>All</a>
                </li>
                <li className="category-item-mobile">
                  <a>Clothes</a>
                </li>
                <li className="category-item-mobile">
                  <a>Electronics</a>
                </li>
                <li className="category-item-mobile">
                  <a>Furnitures</a>
                </li>
                <li className="category-item-mobile">
                  <a>Toys</a>
                </li>
                <li className="category-item-mobile">
                  <a>Others</a>
                </li>
                <hr />
                <li className="category-item-mobile">
                  <a>My orders</a>
                </li>
                <li className="category-item-mobile">
                  <a>My account</a>
                </li>
              </ul>
            </nav>
            <footer>
              <p>camilayokoo@gmail.com</p>
              <a href="/">Sign out</a>
            </footer>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
