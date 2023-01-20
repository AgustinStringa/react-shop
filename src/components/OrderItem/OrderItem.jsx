import React from "react";
import IcoDropdown from "Icons/dropdown.svg";
const OrderItem = () => {
  return (
    <div class="product-info">
      <div>
        <p class="date">04.25.2021</p>
        <p class="count-articles">6 articles</p>
      </div>
      <div>
        <p class="product-price">$ 120,00</p>
        <figure>
          <img src={IcoDropdown} alt="arrow" />
        </figure>
      </div>
    </div>
  );
};

export default OrderItem;
