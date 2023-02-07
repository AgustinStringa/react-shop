import React, { useContext, useEffect } from "react";
import { ShopContext } from "Context/ShopContext";
import ProductCard from "Components/ProductCard/ProductCard";
const ProductList = ({ children }) => {
  const { cart, setCart, products, setProducts } = useContext(ShopContext);
  const API = "https://api.escuelajs.co/api/v1/products?limit=10&offset=10";
  useEffect(() => {
    if (products.length == 0) {
      async function fetchData() {
        const res = await fetch(API);
        const data = await res.json();
        setProducts([...products, ...data]);
      }
      fetchData();
    }
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
