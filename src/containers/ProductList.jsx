import React, { useContext, useEffect } from "react";
import { ShopContext } from "Context/ShopContext";
import ProductCard from "Components/ProductCard/ProductCard";
const ProductList = ({ children }) => {
  const { cart, setCart, products, getProducts } = useContext(ShopContext);
  useEffect(() => {
    getProducts();
  }, []);

  const isInCart = (id) => {
    return cart.find((el) => el.id == id);
  };

  return (
    <>
      {products.map((el) => {
        return (
          <ProductCard
            key={el.id}
            cart={cart}
            setCart={setCart}
            productInfo={el}
            inCart={isInCart(el.id)}
          />
        );
      })}
      {children}
    </>
  );
};

export default ProductList;
