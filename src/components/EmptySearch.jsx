import React, { useContext } from "react";
import { ShopContext } from "Context/ShopContext";

const EmptySearch = () => {
  const { filters } = useContext(ShopContext);
  return (
    <div>
      <p>There is no results match with "{filters.text}"</p>
    </div>
  );
};

export default EmptySearch;
