import React from "react";
import { Link } from "react-router-dom";
import IcoClose from "Icons/icon_close_dark.png";
const MobileMenu = ({ setShowMobileMenu }) => {
  return (
    <div>
      <header>
        <h2>CATEGORIES</h2>
        <img src={IcoClose} alt="" onClick={() => setShowMobileMenu(false)} />
      </header>
      <nav className="category-list-mobile">
        <ul className="">
          <li className="category-item-mobile">
            <Link to={""}>All</Link>
          </li>
          <li className="category-item-mobile">
            <Link to={""}>Clothes</Link>
          </li>
          <li className="category-item-mobile">
            <Link to={""}>Electronics</Link>
          </li>
          <li className="category-item-mobile">
            <Link to={""}>Furnitures</Link>
          </li>
          <li className="category-item-mobile">
            <Link to={""}>Toys</Link>
          </li>
          <li className="category-item-mobile">
            <Link to={""}>Others</Link>
          </li>
          <hr />
          <li className="category-item-mobile">
            <Link to={"/orders"}>My orders</Link>
          </li>
          <li className="category-item-mobile">
            <Link to={"/account"}>My account</Link>
          </li>
        </ul>
      </nav>
      <footer>
        <p>camilayokoo@gmail.com</p>
        <button>Sign out</button>
      </footer>
    </div>
  );
};

export default MobileMenu;
