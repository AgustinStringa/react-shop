import React, { useState, useEffect, useContext } from "react";
import IcoCart from "../../../assets/icons/icon_shopping_cart.svg";
import { Link } from "react-router-dom";
import MainMenuDesktop from "../MainMenuDesktop/MainMenuDesktop";
import "Styles/Cart.css";
import LateralWindow from 'Containers/LateralWindow'
import ShoppingCart from 'Containers/ShoppingCart/ShoppingCart'
import { ShopContext } from 'Context/ShopContext'
const Cart = () => {
  const { cart } = useContext(ShopContext);
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <div className="menu-cart">
        <MainMenuDesktop />
        <button className={`button-cart ${cart.length > 1 && 'ico-cart-notify'}`}
          onClick={() => { setShowCart(!showCart) }}>
          <img src={IcoCart} />
        </button>
        {showCart && <LateralWindow onClose={() => { setShowCart(!showCart) }}>
          <ShoppingCart />
        </LateralWindow>}
      </div>
    </>
  );
};

export default Cart;
