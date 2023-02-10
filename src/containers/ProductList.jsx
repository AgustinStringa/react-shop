import React, { useContext, useEffect } from "react";
import { ShopContext } from "Context/ShopContext";
import ProductCard from "Components/ProductCard/ProductCard";
const ProductList = ({ children }) => {
  const { cart, setCart, products, getProducts } = useContext(ShopContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {products.map((el) => (
        <ProductCard
          key={el.id}
          cart={cart}
          setCart={setCart}
          productInfo={el}
        />
      ))}
      {children}
    </>
  );
};

export default ProductList;
