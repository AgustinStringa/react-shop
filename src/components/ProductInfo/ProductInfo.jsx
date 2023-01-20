import React from "react";
import ImgProd from "Images/prod_round_shelf.png";
const ProductInfo = () => {
  return (
    <div className="product-info">
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

export default ProductInfo;
