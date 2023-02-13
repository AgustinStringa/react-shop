import React, { useContext, useEffect } from "react";
import { ShopContext } from "Context/ShopContext";
import EmptySearch from "Components/EmptySearch";
import ProductCard from "Components/ProductCard/ProductCard";
const ProductList = ({ children }) => {
  const {
    cart,
    setCart,
    products,
    getProducts,
    filters,
    sortByPrice,
    sortByRecent,
    filterProductByName,
  } = useContext(ShopContext);
  useEffect(() => {
    getProducts();
  }, []);

  const isInCart = (id) => {
    return cart.find((el) => el.id == id);
  };

  let render = products;
  if (filters.price) {
    render = sortByPrice(products);
  } else if (filters.recent) {
    render = sortByRecent(products);
  } else if (filters.text != "") {
    render = filterProductByName(products, filters.text);
  } else {
    render = products;
  }
  return (
    <>
      {render.map((el) => {
        console.log(el);
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
      {render.length === 0 && <EmptySearch />}
      {children}
    </>
  );
};

export default ProductList;
