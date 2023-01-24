import React from "react";
import ProductItem from "Components/ProductItem/ProductItem";
import 'Styles/MyOrder.css'
const MyOrder = () => {
  return (
    <div className="order-list">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default MyOrder;
