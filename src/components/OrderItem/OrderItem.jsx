import React from "react";
import ImgProd from "../../assets/images/prod_round_shelf.png";
const OrderItem = () => {
  return (
    <div className="order-item">
      <figure>
        <img src={ImgProd} alt="product" />
      </figure>
      <div>
        <p className="product-name">Round shelf</p>
      </div>
      <div>
        <p className="product-price">$ 120,00</p>
      </div>
    </div>
  );
};

export default OrderItem;
