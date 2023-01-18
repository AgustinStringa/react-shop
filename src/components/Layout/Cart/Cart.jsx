import React from "react";
import IcoCart from "../../../assets/icons/icon_shopping_cart.svg";
import { Link } from "react-router-dom";
import MainMenuDesktop from "../MainMenuDesktop/MainMenuDesktop";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="menu-cart">
      <MainMenuDesktop />
      <Link to={"/cart"}>
        <img src={IcoCart} />
      </Link>
    </div>
  );
};

export default Cart;
