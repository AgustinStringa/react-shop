import React, { useState } from "react";
import Prod1 from "Images/prod_fridge.png";
import IcoAddCart from "Icons/bt_add_to_cart.svg";
import IcoAddedCart from "Icons/bt_added_to_cart.svg";

const ProductCard = ({ cart, setCart, productInfo }) => {
  //TODO, PRODUCT DETAIL MIGHT BE A RENDER PROP, ONDETAL={()=>{}}
  const [added, setAdded] = useState(false);
  const handleAddCart = () => {
    setAdded(!added);
    if (!added) {
      setCart([
        ...cart,
        {
          image: productInfo.images[0],
          price: productInfo.price,
          name: productInfo.title,
          id: productInfo.id,
        },
      ]);
      //setCart with ...cart and elements with id != to the current
    } else {
      //setCart with ...cart and add current element
      const newCart = cart.filter((el) => el.id != productInfo.id);
      setCart(newCart);
    }
  };
  return (
    <div className="product-card">
      <img src={productInfo.images[0]} alt="" className="product-card__image" />
      <div>
        <div>
          <p className="product-card__price">$ {productInfo.price}</p>
          <p className="product_card__description">{productInfo.title}</p>
        </div>
        <div>
          <figure>
            {added ? (
              <img
                src={IcoAddCart}
                alt=""
                className="cart-ico"
                onClick={handleAddCart}
              />
            ) : (
              <img
                src={IcoAddedCart}
                alt=""
                className="cart-ico"
                onClick={handleAddCart}
              />
            )}
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
