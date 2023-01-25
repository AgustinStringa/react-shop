import React from "react";
import ProductItem from "Components/ProductItem/ProductItem";
import 'Styles/MyOrder.css'
const MyOrder = ({children}) => {
  return (
    <div className="order-list">
      {children}
    </div>
  );
};

export default MyOrder;
