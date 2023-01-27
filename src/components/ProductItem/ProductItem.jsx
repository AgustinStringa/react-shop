import React, { useContext } from "react";
import ImgProd from "Images/prod_round_shelf.png";
import { ShopContext } from 'Context/ShopContext'
const ProductItem = ({ image, name, price, inCart }) => {
  const { cart, setCart } = useContext(ShopContext);
  const removeFromCart = () => {
    //TODO USE RANDOM ID AND REMOVE ELEMENT WITH ID == PRODUCT PROPS
    setCart([]);
  }
  return (
    <div className="product-item">
      <figure onClick={inCart && removeFromCart}>
        <img src={image || ImgProd} alt="product" />
      </figure>
      <div>
        <p className="product-name">{name || 'Round shelf'}</p>
      </div>
      <div>
        <p className="product-price">$ {price || 120.00}</p>
      </div>
    </div>
  );
};

export default ProductItem;
