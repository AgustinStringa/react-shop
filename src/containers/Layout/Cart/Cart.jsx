import React, {useState, useEffect} from "react";
import IcoCart from "../../../assets/icons/icon_shopping_cart.svg";
import { Link } from "react-router-dom";
import MainMenuDesktop from "../MainMenuDesktop/MainMenuDesktop";
import "Styles/Cart.css";
import LateralWindow from 'Containers/LateralWindow'
import ShoppingCart from 'Containers/ShoppingCart/ShoppingCart'
const Cart = () => {
  const [showCart, setShowCart] = useState(true);
  return (
    <>
    <div className="menu-cart">
      <MainMenuDesktop />
      <button className="button-cart" onClick={()=> {setShowCart(!showCart)}}>
        <img src={IcoCart} />
      </button>
      {showCart && <LateralWindow onClose={() =>{ setShowCart(!showCart) }}>
        <ShoppingCart/>
        </LateralWindow>}
    </div>
    </>
  );
};

export default Cart;
