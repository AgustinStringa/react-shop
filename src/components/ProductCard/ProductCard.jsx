import React from "react";
import Prod1 from "Images/prod_fridge.png";
import IcoAddCart from "Icons/bt_add_to_cart.svg";
import IcoAddedCart from "Icons/bt_added_to_cart.svg";
const ProductCard = ({cart, setCart}) => {
  //TODO, PRODUCT DETAIL MIGHT BE A RENDER PROP, ONDETAL={()=>{}}

  const addToCart = () => {
    setCart([
      ...cart,
      Prod1
    ]);
  }
  return (
    <div className="product-card">
      <img src={Prod1} alt="" className="product-card__image" />
      <div>
        <div>
          <p className="product-card__price">$ 120,00</p>
          <p className="product_card__description">Round shelf</p>
        </div>
        <div>
          <figure>
            <img src={IcoAddCart} alt="" className="cart-ico" onClick={addToCart}/>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
