import React from "react";
import Prod1 from "../../assets/images/prod_fridge.png";
import IcoAddCart from "../../assets/icons/bt_add_to_cart.svg";
import IcoAddedCart from "../../assets/icons/bt_added_to_cart.svg";
const ProductItem = () => {
  //TODO, PRODUCT DETAIL MIGHT BE A RENDER PROP, ONDETAL={()=>{}}
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
            <img src={IcoAddCart} alt="" className="cart-ico" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
