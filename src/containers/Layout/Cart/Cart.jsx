import React, {useState, useEffect} from "react";
import IcoCart from "../../../assets/icons/icon_shopping_cart.svg";
import { Link } from "react-router-dom";
import MainMenuDesktop from "../MainMenuDesktop/MainMenuDesktop";
import "Styles/Cart.css";
const Cart = () => {
  return (
    <>
    <div className="menu-cart">
      <MainMenuDesktop />
      <button className="button-cart">
        <img src={IcoCart} />
      </button>
    </div>
    </>
  );
};

export default Cart;
